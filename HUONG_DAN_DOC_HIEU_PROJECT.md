# Hướng dẫn đọc hiểu project Landing Page Hội Khai giảng VLU 2026

Tài liệu này là bản đồ kỹ thuật dành cho người cần đọc, sửa nội dung hoặc bàn giao project mà không phải lần mò toàn bộ mã nguồn từ đầu.

## 1. Project này làm gì?

Đây là landing page giới thiệu Hội Khai giảng Trường Đại học Văn Lang 2026 và phương án hợp tác dành cho doanh nghiệp. Website có hai route chính:

- `/`: landing page đối ngoại, gồm banner, câu chuyện sự kiện, quy mô, cộng đồng, hành trình thương hiệu, các hạng mục tài trợ và thông tin liên hệ.
- `/internal-review`: trang rà soát nội bộ, chỉ hiển thị khi `SITE_MODE` đang là `internal`.

Project dùng Next.js App Router, React, TypeScript, Tailwind utility classes kết hợp CSS toàn cục và dữ liệu tĩnh trong các file TypeScript.

## 2. Luồng render từ ngoài vào trong

Đọc project theo thứ tự sau sẽ dễ hiểu nhất:

1. `app/layout.tsx`: khung HTML chung, font, favicon và metadata chia sẻ mạng xã hội.
2. `app/page.tsx`: route `/`, chỉ có nhiệm vụ gọi component `Landing`.
3. `app/components/Landing.tsx`: bộ điều phối toàn bộ các section của trang chủ.
4. Các component section trong `app/components/`.
5. Các component chi tiết của phần hợp tác trong `app/components/partnership/`.
6. Dữ liệu chữ, số liệu, ảnh và cấu hình trong `app/data.ts` và `app/data/`.
7. `app/globals.css`: màu sắc, bố cục, animation và responsive của toàn trang.

Luồng dữ liệu tổng quát:

```text
app/data*.ts
    ↓ import
component section
    ↓ được ghép lại
Landing.tsx
    ↓ được render bởi
page.tsx
    ↓ nằm trong
layout.tsx
```

## 3. Bản đồ các section trên landing page

| Thứ tự | Nội dung hiển thị | File điều khiển chính | Dữ liệu chính |
|---|---|---|---|
| 00 | Header và banner mở đầu | `app/components/HeroSection.tsx` | `event`, `images` trong `app/data.ts` |
| 01 | Câu chuyện sự kiện | `app/components/Landing.tsx` | Nội dung viết trực tiếp trong JSX |
| 02 | Quy mô bằng các con số | `app/components/Landing.tsx` | `stats` trong `app/data.ts` |
| 03 | Các nhóm cộng đồng tham dự | `app/components/Landing.tsx` | `audiences`, `communityImages` |
| 04 | Hành trình hiện diện thương hiệu | `app/components/Landing.tsx` | `journeyItems` |
| 05 | Định hướng giải pháp tài trợ | `app/components/PartnershipDesign.tsx` | Cấu hình trong chính component |
| 06 | Không gian thương hiệu thực tế | `app/components/BrandSpaceSection.tsx` | `brandSpaceImages`, `brandSpaceFeatures` |
| 07 | Hạng mục ưu tiên tiếp nhận | `app/components/PriorityResourceSection.tsx` | `app/data/priorityNeeds.ts` |
| 08 | Cơ hội và gói đồng hành | `app/components/partnership/PartnershipSection.tsx` | `app/data/partnership.ts` |
| 10 | Đo lường và nghiệm thu | `app/components/Landing.tsx` | Mảng KPI viết trực tiếp trong JSX |
| 11 | Quy trình hợp tác | `app/components/Landing.tsx` | Mảng 4 bước viết trực tiếp trong JSX |
| 13 | Thông tin liên hệ | `app/components/ContactSection.tsx` | Nội dung và state trong component |

Section timeline ngày cụ thể hiện đang được ẩn trong `Landing.tsx` để chờ Ban Tổ chức xác nhận lịch mới.

## 4. Vai trò của từng nhóm file

### Nhóm route và khung trang

- `app/layout.tsx`: metadata, Google Font, thẻ `<html>` và `<body>`.
- `app/page.tsx`: điểm vào của trang chủ.
- `app/internal-review/page.tsx`: trang kiểm duyệt nội bộ, tracker đối tác và các nội dung cần phê duyệt.
- `app/chatgpt-auth.ts`: tiện ích đọc danh tính từ header của môi trường Sites; hiện không tham gia trực tiếp vào landing page công khai.

### Nhóm component cấp section

- `HeroSection.tsx`: header desktop/mobile, video nền, tiêu đề và CTA ở banner.
- `Landing.tsx`: sắp xếp thứ tự section, hiệu ứng hiện khi cuộn và modal xem ảnh.
- `PartnershipDesign.tsx`: các hướng giải pháp theo mục tiêu thương hiệu.
- `BrandSpaceSection.tsx`: gallery không gian; gọi callback để mở ảnh lớn.
- `PriorityResourceSection.tsx`: lưới sáu nhu cầu tài trợ ưu tiên.
- `SignatureOpportunities.tsx`: sáu ý tưởng activation đặc trưng; hiện là component độc lập để tái sử dụng.
- `RoadTimelineSection.tsx`: timeline triển khai; hiện chưa được gắn vào `Landing` vì lịch đang chờ xác nhận.
- `ContactSection.tsx`: thông tin liên hệ và các hành động ở cuối trang.

### Nhóm partnership

- `PartnershipSection.tsx`: component điều phối toàn bộ phân hệ hợp tác.
- `PackagesGrid.tsx`: danh sách năm gói P1–P5.
- `SignatureAssetsGrid.tsx`: danh sách tài sản biểu tượng A01–A12.
- `BenefitLibrary.tsx`: thư viện quyền lợi R01–R25 và bộ lọc.
- `PackageMatrixTable.tsx`: ma trận so sánh quyền lợi giữa các gói.
- `PartnershipTermsAccordion.tsx`: điều khoản T01–T15 dạng đóng/mở.
- `PartnerInvitation.tsx`: thư ngỏ và năm tinh thần hợp tác.
- `CustomPartnershipCta.tsx`: lời kêu gọi xây dựng phương án tùy chỉnh.
- `PartnershipModals.tsx`: nội dung chi tiết của từng loại modal.
- `ModalWrapper.tsx`: khung modal dùng chung, xử lý Escape, focus và khóa cuộn.

### Nhóm dữ liệu

- `app/data.ts`: dữ liệu ngắn dùng cho các section tổng quan.
- `app/data/priorityNeeds.ts`: sáu hạng mục ưu tiên.
- `app/data/partnership.ts`: bộ dữ liệu lớn gồm package, asset, benefit, matrix, term và thư ngỏ.

Quy ước mã dữ liệu:

- `P1–P5`: package/gói hợp tác.
- `A01–A12`: signature asset/tài sản đồng hành biểu tượng.
- `R01–R25`: right/quyền lợi.
- `M01–M15`: matrix row/tiêu chí trong ma trận.
- `T01–T15`: term/điều khoản.

## 5. State và tương tác quan trọng

### Menu trên mobile

`HeroSection.tsx` giữ state đóng/mở menu. Khi mở, component khóa cuộn trang; phím Escape và việc chọn một liên kết sẽ đóng menu.

### Hiệu ứng hiện khi cuộn

`Landing.tsx` tạo một `IntersectionObserver`. Khi phần tử có class `reveal` đi vào vùng nhìn, class `visible` được thêm vào. CSS dùng hai class này để chạy chuyển động fade/slide.

### Modal ảnh

`Landing.tsx` giữ URL ảnh đang chọn trong state `light`. Giá trị `null` nghĩa là đóng; có URL nghĩa là modal đang hiển thị ảnh đó.

### Modal partnership

`PartnershipSection.tsx` giữ item đang chọn. Các lưới con gửi item lên bằng callback; `PartnershipModals.tsx` chọn đúng nội dung modal; `ModalWrapper.tsx` đảm nhiệm hành vi truy cập bàn phím.

### Accordion điều khoản

`PartnershipTermsAccordion.tsx` giữ danh sách ID đang mở. Nút bấm thêm hoặc xóa ID để mở/đóng từng điều khoản; thao tác mở/đóng tất cả dùng chung state này.

## 6. Cách đọc class giao diện

Project dùng hai kiểu class:

1. Class đặt tên riêng như `scaleSection`, `communityCard`, `ps-modal`: định nghĩa trong `app/globals.css`.
2. Utility class như `md:grid-cols-2`, `text-[#08153B]`, `rounded-[18px]`: được Tailwind xử lý trực tiếp trong JSX.

Các tiền tố responsive phổ biến:

- Không có tiền tố: áp dụng từ mobile trở lên.
- `sm:`: áp dụng ở màn hình nhỏ mở rộng.
- `md:`: tablet trở lên.
- `lg:`: desktop trở lên.
- `xl:`: desktop lớn.

Ví dụ `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` nghĩa là một cột trên mobile, hai cột trên tablet và ba cột trên desktop.

## 7. Cách sửa nội dung an toàn

- Sửa ngày, địa điểm và thông điệp chung: `app/data.ts`.
- Sửa nội dung một gói/quyền lợi/điều khoản: `app/data/partnership.ts`.
- Sửa hạng mục ưu tiên: `app/data/priorityNeeds.ts`.
- Sửa chữ chỉ xuất hiện một lần trong section: tìm trực tiếp trong component tương ứng.
- Thay ảnh: đặt ảnh trong `public/images/` rồi cập nhật đường dẫn dữ liệu; đường dẫn public luôn bắt đầu bằng `/`.
- Đổi bố cục: sửa component JSX trước, sau đó sửa class tương ứng trong `app/globals.css`.
- Không đổi ID như `story`, `journey`, `packages` nếu chưa kiểm tra menu/CTA đang liên kết đến chúng.

## 8. Những điểm cần thận trọng

- `SITE_MODE` trong `app/data.ts` quyết định nhãn “DỰ THẢO” và quyền truy cập trang nội bộ.
- Các câu chữ về giá trị gói, tỷ lệ hiện vật, KPI và độc quyền có tính chất đề xuất; cần được Ban Tổ chức phê duyệt trước khi phát hành.
- `unoptimized` trên `next/image` là chủ ý để phù hợp chế độ static export.
- Các phần tử có `aria-hidden="true"` chỉ dùng trang trí, không được trình đọc màn hình đọc thành nội dung.
- Không xóa logic focus/Escape trong modal vì đây là phần hỗ trợ accessibility.
- `next.config.ts` ghim workspace root vào chính project để tránh lỗi build do Next.js dò nhầm lockfile ngoài thư mục.

## 9. Quy ước chú thích trong mã

- Khối đầu file: giải thích vai trò của file.
- Chú thích đánh số trong JSX: mô tả các vùng giao diện theo thứ tự từ trên xuống.
- Chú thích trước state/effect: giải thích trạng thái và vòng đời tương tác.
- Chú thích trong dữ liệu: giải thích nhóm dữ liệu và quy ước mã.
- Không chú thích những dòng hiển nhiên như dấu đóng thẻ, import đơn giản hoặc phép gán trực tiếp; việc này giữ mã dễ quét và tránh chú thích nhanh lỗi thời.

## 10. Kiểm tra sau khi sửa

Sau mỗi đợt chỉnh sửa, chạy build production. Build thành công xác nhận TypeScript/JSX có thể biên dịch và các route tĩnh vẫn được tạo. Nếu thay đổi tương tác hoặc responsive, cần mở trang để kiểm tra thêm trên mobile và desktop.
