/**
 * ==============================================================================
 * BỘ DỮ LIỆU TỔNG THỂ CỦA WEBSITE HỘI KHAI GIẢNG VĂN LANG 2026 (DATA.TS)
 * ------------------------------------------------------------------------------
 * File này chứa toàn bộ các hằng số, thông tin sự kiện, hình ảnh truyền thông,
 * chỉ số quy mô, danh sách cộng đồng, không gian thương hiệu, lộ trình điểm chạm
 * và quy trình tiếp nhận tài trợ dùng chung cho Landing Page.
 * ==============================================================================
 */

// Chế độ hiển thị: "internal" (bản dự thảo nội bộ có watermark) hoặc "public" (bản chính thức phát hành)
export const SITE_MODE: "internal" | "public" = "internal";

// 1. THÔNG TIN CỐT LÕI CỦA SỰ KIỆN HỘI KHAI GIẢNG 2026
export const event = {
  heroDate: "26–27.09.2026",
  message: "Nơi bạn được nhìn thấy",
  sessionOne: "08:00 · 26/09 · Hội trường Trịnh Công Sơn",
  sessionTwo: "14:00 · 27/09 · Quảng trường Đông Sơn",
  email: "t.sv@vlu.edu.vn",
  phone: "0387 803 483",
  website: "www.vlu.edu.vn",
};

// 2. TẬP HỢP ĐƯỜNG DẪN MEDIA & HÌNH ẢNH TOÀN TRANG
export const images = {
  hero: "/images/hoi-khai-giang-2025/toan-canh-dem.webp",
  heroVideo: "/video/[HỘI KHAI GIẢNG VĂN LANG CÓ GÌ-] - BÙNG NỔ CÙNG CÁC TÀI NĂNG SINH VIÊN VĂN LANG.webm",
  story: "/images/hoi-khai-giang-2025/toan-canh-ngay.webp",
  venue: "/images/hoi-khai-giang-2025/sankhau.JPG",
  club: "/images/hoi-khai-giang-2025/khong-gian-cau-lac-bo.webp",
  stage: "/images/hoi-khai-giang-2025/bieu-dien-san-khau.webp",
};

// 3. SECTION 02: 6 THÔNG SỐ QUY MÔ SỰ KIỆN TRONG NHỮNG CON SỐ
export const stats = [
  { label: "Người tham dự", value: "10.000+", note: "Quy mô dự kiến đã được BTC xác nhận" },
  { label: "Tân sinh viên K32", value: "7.000+", note: "Nhân vật trung tâm của chương trình" },
  { label: "Khách mời & đối tác", value: "300+", note: "Lãnh đạo, giảng viên, khách mời và đối tác" },
  { label: "Cụm trải nghiệm", value: "04", note: "CLB · Ẩm thực · Thử thách · Nghệ thuật" },
  { label: "Ngày hội", value: "02", note: "26–27 tháng 09 năm 2026" },
  { label: "Mục tiêu huy động", value: "500M+", note: "Tài trợ tiền mặt tối thiểu" },
];

// 4. SECTION 03: 6 NHÓM CỘNG ĐỒNG THAM DỰ (AI SẼ CÓ MẶT?)
export const audiences = [
  ["Tân sinh viên K32", "Thế hệ mới bắt đầu hành trình học tập và trưởng thành tại Văn Lang."],
  ["Sinh viên đang học", "Cộng đồng trẻ kết nối, truyền lửa và tạo nên sức sống của ngày hội."],
  ["Giảng viên & cán bộ", "Đội ngũ đồng hành cùng sinh viên trong hành trình học tập và phát triển."],
  ["Lãnh đạo Nhà trường", "Đại diện chào đón, định hướng và truyền cảm hứng cho thế hệ mới."],
  ["Khách mời", "Những cá nhân cùng chia sẻ niềm tin vào giáo dục và giá trị cộng đồng."],
  ["Doanh nghiệp & đối tác", "Các tổ chức kiến tạo trải nghiệm thiết thực cho sinh viên Văn Lang."],
];

// 5. SECTION 03: 6 HÌNH ẢNH THỰC TẾ GẮN VÀO CÁC CARD CỘNG ĐỒNG
export const communityImages = [
  "/images/hoi-khai-giang-2025/3.1.JPG",
  "/images/hoi-khai-giang-2025/3.2.jpg",
  "/images/hoi-khai-giang-2025/3.3.jpg",
  "/images/hoi-khai-giang-2025/Bản sao của DK-610.JPG",
  "/images/hoi-khai-giang-2025/khacmoi.jpg",
  "/images/hoi-khai-giang-2025/hocbong.jpg",
];

// 6. SECTION 06: LƯỚI HÌNH ẢNH KHÔNG GIAN THƯƠNG HIỆU (BRAND SPACE)
export const brandSpaceImages = [
  {
    id: "venue",
    src: "/images/hoi-khai-giang-2025/quang-truong-dong-son.webp",
    alt: "Toàn cảnh Quảng trường Đông Sơn tại Trường Đại học Văn Lang",
    label: "Quảng trường Đông Sơn",
  },
  {
    id: "stage",
    src: "/images/hoi-khai-giang-2025/6.3.jpg",
    alt: "Biểu diễn trên sân khấu Hội Khai giảng Văn Lang 2025",
    label: "Sân khấu và biểu diễn",
  },
  {
    id: "club",
    src: "/images/hoi-khai-giang-2025/6.4.jpg",
    alt: "Không gian câu lạc bộ sinh viên Văn Lang 2025",
    label: "Gian hàng và CLB",
  },
];

// 7. SECTION 06: ẢNH KHUNG BACKDROP CHECK-IN BÊN TRÁI
export const brandSpaceSideImage = {
  id: "event-backdrop",
  src: "/images/hoi-khai-giang-2025/Backdrop.jpg",
  alt: "Backdrop Hội Khai giảng tại Trường Đại học Văn Lang",
  label: "Backdrop",
};

// 8. SECTION 06: DANH SÁCH CHIP TIỆN ÍCH KHÔNG GIAN
export const brandSpaceFeatures = [
  { label: "Sân khấu", icon: "stage" },
  { label: "Màn hình LED", icon: "screen" },
  { label: "Backdrop", icon: "backdrop" },
  { label: "Photobooth", icon: "camera" },
  { label: "Check-in", icon: "checkin" },
  { label: "15–20 gian hàng", icon: "booth" },
  { label: "Khu khách mời", icon: "guest" },
  { label: "Quà tặng", icon: "gift" },
  { label: "Social media", icon: "social" },
];

// 9. SECTION 04: 6 CHẶNG HÀNH TRÌNH ĐIỂM CHẠM (BRAND JOURNEY)
export const journeyItems = [
  { id: "01", title: "Trước sự kiện", subtitle: "Email · Social media", image: "/images/hoi-khai-giang-2025/media.jpg" },
  { id: "02", title: "Check-in", subtitle: "Check-in · Backdrop", image: "/images/hoi-khai-giang-2025/checkin.jpg" },
  { id: "03", title: "Khai mạc", subtitle: "LED · Sân khấu", image: "/images/hoi-khai-giang-2025/khaimac.jpg" },
  { id: "04", title: "Trải nghiệm", subtitle: "Gian hàng · Quà tặng", image: "/images/hoi-khai-giang-2025/khong-gian-cau-lac-bo.webp" },
  { id: "05", title: "Chia sẻ", subtitle: "Minigame · Livestream", image: "/images/hoi-khai-giang-2025/64.jpg" },
  { id: "06", title: "Ghi nhớ", subtitle: "Nội dung hậu kỳ · Báo cáo", image: "/images/hoi-khai-giang-2025/Bản sao của VLTV-503.JPG" },
];

// 10. DANH SÁCH 6 LỢI ÍCH TỔNG QUAN KHI ĐỒNG HÀNH
export const benefits = [
  ["↗", "Tiếp cận thế hệ trẻ", "Hiện diện trước hơn 7.000 tân sinh viên trong cột mốc đầu tiên tại Văn Lang."],
  ["◎", "Tăng nhận diện", "Xuất hiện đồng bộ tại sự kiện và trên các kênh truyền thông được phê duyệt."],
  ["✦", "Trải nghiệm sản phẩm", "Tạo tương tác trực tiếp thông qua gian hàng, dùng thử và activation phù hợp."],
  ["◫", "Thương hiệu tuyển dụng", "Kết nối sớm với nguồn nhân lực trẻ trong một môi trường giàu năng lượng."],
  ["♡", "Đồng hành cùng giáo dục", "Thể hiện trách nhiệm xã hội qua học bổng, quà tặng và trải nghiệm sinh viên."],
  ["∞", "Mở rộng hợp tác", "Tạo tiền đề cho các chương trình dài hạn giữa doanh nghiệp và Nhà trường."],
];

// 11. CÁC GÓI TÀI TRỢ TIÊU CHUẨN
export const packages = [
  { name: "Kim cương", range: "Từ 300 triệu VNĐ", fit: "Dẫn dắt một trải nghiệm biểu tượng", rights: ["Danh xưng Đối tác chiến lược Convocation Day 2026", "01 flagship activation tại Quảng trường Đông Sơn", "Booth 3 × 6 m tại vị trí ưu tiên", "01 Partner Story và bộ ảnh khu trải nghiệm", "KOL/Talent Văn Lang trải nghiệm theo phương án duyệt", "Độc quyền ngành hàng có điều kiện", "Impact Report riêng sau chương trình"] },
  { name: "Vàng", range: "200–299 triệu VNĐ", fit: "Sở hữu một điểm chạm theo mục tiêu", rights: ["Danh xưng Nhà tài trợ Vàng", "01 branded experience: Welcome, Recharge hoặc Talent", "Booth 3 × 6 m tại khu vực lưu lượng cao", "01 nội dung thương hiệu và ghi nhận trong recap", "Product trial hoặc challenge có đo lường", "Báo cáo kết quả theo điểm chạm"] },
  { name: "Bạc", range: "100–199 triệu VNĐ", fit: "Tạo tương tác trực tiếp với K32", rights: ["Danh xưng Nhà tài trợ Bạc", "Booth 3 × 3 m", "01 hoạt động dùng thử, minigame hoặc check-in", "Logo trong hệ thống nhận diện tiêu chuẩn", "Ghi nhận trong nội dung tổng hợp", "Báo cáo lượt tương tác khả dụng"] },
  { name: "Đồng hành", range: "50–99 triệu VNĐ", fit: "Đồng hành cùng một nhu cầu thiết thực", rights: ["Danh xưng Đơn vị đồng hành", "Gắn thương hiệu với quà tặng hoặc hạng mục phù hợp", "Booth 3 × 3 m hoặc hiện diện tại hạng mục", "Logo trong nhóm đồng hành", "Lời cảm ơn sau chương trình", "Biên bản nghiệm thu hạng mục"] },
];

// 12. BẢNG SO SÁNH MA TRẬN NHANH
export const compareRows = [
  ["Vai trò hợp tác", "Đối tác chiến lược", "Đối tác trải nghiệm", "Đối tác tương tác", "Đơn vị đồng hành"],
  ["Flagship / branded experience", "01 flagship", "01 experience", "Mini activation", "Theo hạng mục"],
  ["Không gian thương hiệu", "3 × 6 m · ưu tiên", "3 × 6 m · lưu lượng cao", "3 × 3 m", "3 × 3 m / hạng mục"],
  ["Partner Story riêng", "●", "01 nội dung", "—", "—"],
  ["KOL/Talent experience", "Có điều kiện", "Có điều kiện", "—", "—"],
  ["Product trial / challenge", "●", "●", "●", "Theo hạng mục"],
  ["Welcome Kit / quà tặng", "Ưu tiên", "●", "Có điều kiện", "Có điều kiện"],
  ["Độc quyền ngành hàng", "Có điều kiện", "Có điều kiện", "—", "—"],
  ["Impact Report", "Bản riêng", "Theo experience", "Số liệu khả dụng", "Nghiệm thu"],
];

// 13. SECTION 05: ĐỊNH HƯỚNG THEO 4 MỤC TIÊU DOANH NGHIỆP
export const sponsorGoals = [
  { id: "awareness", label: "Nhận diện", title: "Xuất hiện ở khoảnh khắc được ghi nhớ", desc: "Tập trung vào hệ thống nhận diện, màn hình, nội dung và một điểm chạm có khả năng tạo hình ảnh mạnh.", recommend: "Kim cương · Vàng", outcomes: ["Flagship visual tại Đông Sơn", "Partner Story trước/sau sự kiện", "Bộ ảnh nhận diện đã nghiệm thu"] },
  { id: "experience", label: "Trải nghiệm", title: "Để sinh viên thật sự chạm vào thương hiệu", desc: "Biến booth thành một trải nghiệm có chủ đề, có hành động và có chỉ số thay vì chỉ trưng bày.", recommend: "Vàng · Bạc", outcomes: ["Product trial có kiểm đếm", "Brand challenge hoặc photo moment", "Lượt tham gia và phản hồi nhanh"] },
  { id: "talent", label: "Tuyển dụng", title: "Bắt đầu quan hệ nhân tài từ ngày đầu tiên", desc: "Tạo kết nối tích cực với K32 thông qua career discovery, kỹ năng và cơ hội phát triển; không thu thập dữ liệu sinh viên từ Nhà trường.", recommend: "Kim cương · Vàng", outcomes: ["Talent Discovery Corner", "QR opt-in do doanh nghiệp quản lý", "Nội dung thương hiệu nhà tuyển dụng"] },
  { id: "impact", label: "Tác động", title: "Gắn thương hiệu với một khởi đầu có ý nghĩa", desc: "Đầu tư vào học bổng, welcome kit hoặc dịch vụ thiết thực và kể câu chuyện tác động một cách có trách nhiệm.", recommend: "Mọi gói · Gói riêng", outcomes: ["Scholarship Impact", "Welcome Kit for K32", "Báo cáo sử dụng nguồn lực"] },
];

// 14. 6 NỀN TẢNG KÍCH HOẠT THƯƠNG HIỆU BIỂU TƯỢNG (SIGNATURE ACTIVATIONS)
export const signatureActivations = [
  { id: "01", tag: "FIRST IMPRESSIONS", title: "Đông Sơn Welcome Portal", desc: "Điểm chào đón và check-in mang tính biểu tượng, tạo khoảnh khắc đầu tiên của K32 sau ngày hội.", fit: "Công nghệ · Toàn diện · Hệ thống", icon: "gem", theme: "navy" },
  { id: "02", tag: "STUDENT CARE", title: "Recharge & Hydration Zone", desc: "Không gian nghỉ, sạc thiết bị và tiếp nước – hữu ích, dễ trải nghiệm và phù hợp quy mô đông.", fit: "Đồ uống · Công nghệ · Tiện ích", icon: "hydration", theme: "light" },
  { id: "03", tag: "TALENT", title: "Future-Ready Corner", desc: "Mini challenge khám phá năng lực, nghề nghiệp và cơ hội phát triển dành cho sinh viên năm nhất.", fit: "Tuyển dụng · Giáo dục · Doanh nghiệp", icon: "talent", theme: "light" },
  { id: "04", tag: "IMPACT", title: "Scholarship Moment", desc: "Biến học bổng thành câu chuyện về nỗ lực cá nhân và hành trình được nhìn thấy.", fit: "Doanh nghiệp | Giáo dục | Kết nối", icon: "impact", theme: "navy" },
  { id: "05", tag: "SOCIAL", title: "Seen at VLU Studio", desc: "Photo/video experience lấy cảm hứng từ thông điệp “Nơi bạn được nhìn thấy”, tạo nội dung sinh viên chủ động chia sẻ.", fit: "Lifestyle · Thiết bị · Sáng tạo", icon: "social", theme: "red" },
  { id: "06", tag: "WELCOME", title: "K32 First-Day Kit", desc: "Bộ vật phẩm thiết thực cho ngày đầu nhập học, có lựa chọn đồng hành theo từng sản phẩm.", fit: "FMCG · Văn phòng phẩm · Dịch vụ", icon: "welcome", theme: "light" },
];

// 15. SECTION 12: LỘ TRÌNH TRIỂN KHAI TỪ ĐỀ XUẤT ĐẾN NGÀY HỘI
export const timeline = [
  ["25–28/08", "Phê duyệt proposal"],
  ["28/08–11/09", "Tiếp cận & đàm phán"],
  ["12/09", "Chốt nhà tài trợ"],
  ["13–18/09", "Hợp đồng, logo & hiện vật"],
  ["15/09", "Chốt sơ đồ không gian"],
  ["19–25/09", "Sản xuất & tổng duyệt"],
  ["26–27/09", "Hội Khai giảng"],
  ["30–45 ngày", "Nghiệm thu & báo cáo"],
];

// 16. NHU CẦU TIẾP NHẬN NGUỒN LỰC
export const sponsorNeeds = [
  ["Học bổng", "Học bổng hiện kim dành cho tân sinh viên/sinh viên; không nhận voucher thay thế."],
  ["Nước uống & ẩm thực", "Sản phẩm phục vụ chương trình, đáp ứng yêu cầu an toàn và được BTC duyệt."],
  ["Không gian check-in", "Photobooth, cổng chào và điểm chạm hình ảnh dành cho tân sinh viên."],
  ["Hạ tầng sự kiện", "Âm thanh, ánh sáng, màn hình LED, nhà bạt và các hạng mục hậu cần."],
  ["Gian hàng trải nghiệm", "Hoạt động tương tác thương hiệu phù hợp với môi trường giáo dục."],
  ["Quà tặng K32", "Sản phẩm thiết thực dành cho tân sinh viên trong ngày đầu hành trình."],
];
