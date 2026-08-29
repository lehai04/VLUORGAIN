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
  sessionOne: "8h00 – 11h30 sáng 26/09/2026 · Hội trường Trịnh Công Sơn",
  sessionTwo: "14h00 – 20h00 chiều 27/09/2026 · Quảng trường Đông Sơn",
  location: "Cơ sở chính Trường Đại học Văn Lang, 69/68 Đặng Thuỳ Trâm, Phường Bình Lợi Trung",
  email: "hien.nguyen@vlu.edu.vn",
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
  { label: "Người tham dự", value: "10.000+", note: "Quy mô dự kiến trong hai ngày tổ chức" },
  { label: "Tân sinh viên Khóa 32", value: "7.000+", note: "Nhân vật trung tâm của Hội Khai giảng" },
  { label: "Khách mời và đại diện đối tác", value: "300+", note: "Lãnh đạo, giảng viên, khách mời, doanh nghiệp và tổ chức đồng hành" },
  { label: "Cụm hoạt động trải nghiệm", value: "04", note: "Câu lạc bộ · Ẩm thực · Thử thách · Nghệ thuật" },
  { label: "Ngày tổ chức", value: "02", note: "Ngày 26–27/09/2026" },
  { label: "Mục tiêu vận động tài trợ", value: "500 Triệu +", note: "Gồm hiện kim, hiện vật và dịch vụ – chờ Ban Tổ chức xác nhận" },
];

// 4. SECTION 03: 6 NHÓM CỘNG ĐỒNG THAM DỰ (AI SẼ CÓ MẶT?)
export const audiences = [
  ["Tân sinh viên Khóa 32", "Thế hệ mới chính thức bắt đầu hành trình học tập và trưởng thành tại Văn Lang."],
  ["Sinh viên Văn Lang", "Cộng đồng trẻ cùng kết nối, truyền cảm hứng và tạo nên sức sống của ngày hội."],
  ["Giảng viên và cán bộ", "Đội ngũ đồng hành cùng sinh viên trong học tập, trải nghiệm và phát triển."],
  ["Lãnh đạo Nhà trường", "Đại diện chào đón, định hướng và truyền cảm hứng cho thế hệ sinh viên mới."],
  ["Khách mời", "Những cá nhân có ảnh hưởng và cùng chia sẻ niềm tin vào giáo dục, thế hệ trẻ và giá trị cộng đồng."],
  ["Doanh nghiệp và đối tác", "Các tổ chức đồng hành kiến tạo những trải nghiệm thiết thực dành cho sinh viên Văn Lang."],
];

// 5. SECTION 03: 6 HÌNH ẢNH THỰC TẾ GẮN VÀO CÁC CARD CỘNG ĐỒNG
export const communityImages = [
  "/images/hoi-khai-giang-2025/3.1.JPG",
  "/images/hoi-khai-giang-2025/3.2.jpg",
  "/images/hoi-khai-giang-2025/3.3.jpg",
  "/images/hoi-khai-giang-2025/Lanhdao.jpg",
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
    src: "/images/hoi-khai-giang-2025/64.jpg",
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
  { id: "01", title: "Trước sự kiện", subtitle: "Nội dung giới thiệu · Email · Mạng xã hội", image: "/images/hoi-khai-giang-2025/media.jpg" },
  { id: "02", title: "Đón tiếp", subtitle: "Cổng chào · Check-in · Không gian nhận diện", image: "/images/hoi-khai-giang-2025/checkin.jpg" },
  { id: "03", title: "Khai mạc", subtitle: "Sân khấu · Màn hình LED · Khu vực khách mời", image: "/images/hoi-khai-giang-2025/khaimac.jpg" },
  { id: "04", title: "Trải nghiệm", subtitle: "Gian hàng · Hoạt động tương tác · Sản phẩm dùng thử", image: "/images/hoi-khai-giang-2025/khong-gian-cau-lac-bo.webp" },
  { id: "05", title: "Lan tỏa", subtitle: "Nội dung mạng xã hội · Hình ảnh · Video", image: "/images/hoi-khai-giang-2025/64.jpg" },
  { id: "06", title: "Sau sự kiện", subtitle: "Nội dung tổng kết · Báo cáo · Hồ sơ nghiệm thu", image: "/images/hoi-khai-giang-2025/Bản sao của VLTV-503.JPG" },
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
  { name: "P1 · Đối tác Đồng hành Chính", range: "300 triệu đồng", fit: "Đồng hành ở cấp độ cao nhất và hiện diện xuyên suốt hành trình sự kiện.", rights: [] },
  { name: "P2 · Đối tác Dấu ấn", range: "200 triệu đồng", fit: "Sở hữu một điểm chạm nổi bật, tạo dấu ấn nhận diện rõ nét.", rights: [] },
  { name: "P3 · Đối tác Tác động", range: "100 triệu đồng", fit: "Cùng Nhà trường tạo ra giá trị thiết thực và câu chuyện tác động dành cho sinh viên.", rights: [] },
  { name: "P4 · Đối tác Trải nghiệm", range: "50 triệu đồng", fit: "Tương tác trực tiếp với sinh viên thông qua không gian và hoạt động trải nghiệm.", rights: [] },
  { name: "P5 · Đồng hành Hạng mục", range: "30 triệu đồng", fit: "Đồng hành cùng một nhu cầu hoặc hạng mục cụ thể của chương trình.", rights: [] },
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
  { id: "awareness", label: "Nhận diện", title: "Xuất hiện ở khoảnh khắc được ghi nhớ", desc: "Tập trung vào hệ thống nhận diện, màn hình, nội dung và một điểm chạm có khả năng tạo hình ảnh mạnh.", recommend: "P1 · Đối tác Đồng hành Chính · P2 · Đối tác Dấu ấn", outcomes: ["Flagship visual tại Đông Sơn", "Partner Story trước/sau sự kiện", "Bộ ảnh ghi nhận quyền lợi phục vụ nghiệm thu"] },
  { id: "experience", label: "Trải nghiệm", title: "Để sinh viên thật sự chạm vào thương hiệu", desc: "Biến booth thành một trải nghiệm có chủ đề, có hành động và có chỉ số thay vì chỉ trưng bày.", recommend: "P2 · Đối tác Dấu ấn · P4 · Đối tác Trải nghiệm", outcomes: ["Product trial có kiểm đếm", "Brand challenge hoặc photo moment", "Lượt tham gia và phản hồi nhanh"] },
  { id: "talent", label: "Tuyển dụng", title: "Bắt đầu quan hệ nhân tài từ ngày đầu tiên", desc: "Tạo kết nối tích cực với K32 thông qua career discovery, kỹ năng và cơ hội phát triển; không thu thập dữ liệu sinh viên từ Nhà trường.", recommend: "P1 · Đối tác Đồng hành Chính · P2 · Đối tác Dấu ấn", outcomes: ["Talent Discovery Corner", "QR opt-in do doanh nghiệp quản lý", "Nội dung thương hiệu nhà tuyển dụng"] },
  { id: "impact", label: "Tác động", title: "Gắn thương hiệu với một khởi đầu có ý nghĩa", desc: "Đầu tư vào học bổng, welcome kit hoặc dịch vụ thiết thực và kể câu chuyện tác động một cách có trách nhiệm.", recommend: "P3 · Đối tác Tác động · P5 · Đồng hành Hạng mục", outcomes: ["Scholarship Impact", "Welcome Kit for K32", "Báo cáo sử dụng nguồn lực"] },
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
  ["Chờ xác nhận", "Lộ trình triển khai mới"],
  ["Theo thỏa thuận hợp tác", "Nghiệm thu & báo cáo sau sự kiện"],
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
