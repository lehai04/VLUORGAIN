/**
 * ==============================================================================
 * TIỆN ÍCH XÁC THỰC CHATGPT/SITES
 * ------------------------------------------------------------------------------
 * Đọc danh tính người dùng từ các HTTP header do môi trường hosting cung cấp và
 * tạo đường dẫn đăng nhập/đăng xuất an toàn. Landing page hiện không gọi trực tiếp
 * file này; nó được giữ sẵn cho các route cần giới hạn quyền truy cập trong tương lai.
 * ==============================================================================
 */

import { headers } from "next/headers";
import { redirect } from "next/navigation";

// Dạng dữ liệu tối giản mà phần giao diện có thể dùng sau khi xác thực.
export type ChatGPTUser = {
  displayName: string;
  email: string;
  fullName: string | null;
};

// Tên header và route là hằng số để tránh gõ sai ở nhiều hàm khác nhau.
const USER_EMAIL_HEADER = "oai-authenticated-user-email";
const USER_FULL_NAME_HEADER = "oai-authenticated-user-full-name";
const USER_FULL_NAME_ENCODING_HEADER =
  "oai-authenticated-user-full-name-encoding";
const PERCENT_ENCODED_UTF8 = "percent-encoded-utf-8";
const SIGN_IN_PATH = "/signin-with-chatgpt";
const SIGN_OUT_PATH = "/signout-with-chatgpt";
const CALLBACK_PATH = "/callback";

/** Đọc người dùng hiện tại; trả về null khi request chưa được xác thực. */
export async function getChatGPTUser(): Promise<ChatGPTUser | null> {
  const requestHeaders = await headers();
  const email = requestHeaders.get(USER_EMAIL_HEADER);
  // Email là dấu hiệu bắt buộc; thiếu email đồng nghĩa chưa có phiên đăng nhập hợp lệ.
  if (!email) return null;

  const encodedFullName = requestHeaders.get(USER_FULL_NAME_HEADER);
  const fullName =
    encodedFullName &&
    requestHeaders.get(USER_FULL_NAME_ENCODING_HEADER) === PERCENT_ENCODED_UTF8
      ? safeDecodeURIComponent(encodedFullName)
      : null;

  // Nếu không đọc được họ tên, email được dùng làm tên hiển thị dự phòng.
  return {
    displayName: fullName ?? email,
    email,
    fullName,
  };
}

/** Bắt buộc đăng nhập cho một route; tự chuyển hướng nếu chưa có người dùng. */
export async function requireChatGPTUser(
  returnTo: string,
): Promise<ChatGPTUser> {
  const user = await getChatGPTUser();
  if (user) return user;

  redirect(chatGPTSignInPath(returnTo));
}

/** Tạo URL đăng nhập kèm đường dẫn quay lại đã được kiểm tra an toàn. */
export function chatGPTSignInPath(returnTo: string): string {
  const safeReturnTo = safeRelativeReturnPath(returnTo);
  return `${SIGN_IN_PATH}?return_to=${encodeURIComponent(safeReturnTo)}`;
}

/** Tạo URL đăng xuất; mặc định quay về trang chủ. */
export function chatGPTSignOutPath(returnTo = "/"): string {
  const safeReturnTo = safeRelativeReturnPath(returnTo);
  return `${SIGN_OUT_PATH}?return_to=${encodeURIComponent(safeReturnTo)}`;
}

// Chỉ chấp nhận đường dẫn tương đối cùng website để ngăn chuyển hướng ra tên miền lạ.
function safeRelativeReturnPath(value: string): string {
  if (!value.startsWith("/") || value.startsWith("//")) return "/";

  let url: URL;
  try {
    // Dùng origin giả cố định để URL parser có thể xử lý cả query string và hash.
    url = new URL(value, "https://app.local");
  } catch {
    return "/";
  }
  if (url.origin !== "https://app.local") return "/";
  // Không cho quay lại chính các route auth để tránh vòng lặp chuyển hướng.
  if (isReservedAuthPath(url.pathname)) return "/";

  return `${url.pathname}${url.search}${url.hash}`;
}

// Nhóm route dành riêng cho quá trình xác thực.
function isReservedAuthPath(pathname: string): boolean {
  return (
    pathname === SIGN_IN_PATH ||
    pathname === SIGN_OUT_PATH ||
    pathname === CALLBACK_PATH
  );
}

// decodeURIComponent có thể throw với chuỗi mã hóa lỗi, vì vậy cần bọc try/catch.
function safeDecodeURIComponent(value: string): string | null {
  try {
    return decodeURIComponent(value);
  } catch {
    return null;
  }
}
