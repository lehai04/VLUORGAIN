import path from "node:path";
import { fileURLToPath } from "node:url";
import type { NextConfig } from "next";

// Lấy chính thư mục chứa file config làm project root, không phụ thuộc nơi chạy lệnh.
const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  // Ngăn Turbopack dò nhầm lockfile ở thư mục cha và gây lỗi quyền truy cập.
  turbopack: {
    root: projectRoot,
  },
  // Webpack cũng dùng cùng project root khi truy vết các file cần cho production.
  outputFileTracingRoot: projectRoot,
  // Project hiện giữ chế độ bỏ qua lỗi type cũ để build landing page không bị chặn.
  typescript: {
    ignoreBuildErrors: true,
  },
  // Xuất website tĩnh để có thể triển khai trên hạ tầng không cần Next.js server.
  output: "export",
  images: {
    // Static export không có Image Optimization server nên ảnh được phục vụ nguyên bản.
    unoptimized: true,
  },
};

export default nextConfig;
