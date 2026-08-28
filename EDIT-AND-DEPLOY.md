# Hướng dẫn chỉnh sửa nhanh

## Nội dung

- `app/data.ts`: đổi chế độ, thời gian, địa điểm, liên hệ, ảnh, số liệu, gói tài trợ, quyền lợi và timeline.
- `SITE_MODE = "internal"`: hiện nhãn dự thảo và mở `/internal-review`.
- `SITE_MODE = "public"`: tắt trang nội bộ. Trước khi đổi, xóa các quyền lợi và mức giá chưa được duyệt khỏi dữ liệu.
- `app/components/Landing.tsx`: nội dung các section, form và tương tác.
- `app/globals.css`: màu sắc, responsive và animation.

## Form

Form hiện chỉ xác thực trên trình duyệt và hiển thị thông báo demo, chưa gửi dữ liệu ra ngoài. Khi phát hành, kết nối submit với Microsoft Forms/Power Automate, Google Forms hoặc API nội bộ; không đặt API key trong mã nguồn.

## Chạy và triển khai

1. Cài Node.js 22 trở lên và chạy `npm ci`.
2. Xem thử bằng `npm run dev`.
3. Kiểm tra bản phát hành bằng `npm run build`.
4. Triển khai lại bằng checkpoint của Sites hoặc import repository vào Vercel/Netlify.

## Ảnh chính thức

Ảnh đang dùng từ website chính thức Văn Lang. Khi có bộ ảnh 2026, tải ảnh về `public/images`, tối ưu WebP/AVIF rồi thay URL trong `app/data.ts` để tránh phụ thuộc đường dẫn ngoài.
