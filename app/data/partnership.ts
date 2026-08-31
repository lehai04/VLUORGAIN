/**
 * ==============================================================================
 * DỮ LIỆU ĐẦY ĐỦ: 08 · PARTNERSHIP OPPORTUNITIES DATASET
 * ------------------------------------------------------------------------------
 * Cung cấp toàn bộ dữ liệu cấu trúc cho phân hệ Cơ hội Đồng hành:
 * 1. packagesData: 05 Gói hợp tác (P1 - P5) chi tiết 5 nhóm thông số
 * 2. signatureAssetsData: 12 Tài sản đồng hành biểu tượng (A01 - A12)
 * 3. benefitsData: 25 Hạng mục quyền lợi chi tiết (R01 - R25)
 * 4. packageMatrixData: 15 Tiêu chí ma trận đối chiếu (M01 - M15)
 * 5. partnershipTermsData: 15 Điều khoản pháp chế & nguyên tắc (T01 - T15)
 * 6. partnerInvitationContent: Thư ngỏ & 5 tinh thần cốt lõi
 * 7. partnershipStats: 5 Thẻ tóm tắt thông số thống kê
 * ==============================================================================
 */

export interface PackageDetail {
  id: string; // "P1", "P2", etc.
  name: string;
  price: string;
  slots: string;
  role: string;
  isPopular?: boolean;
  highlight: string[];
  overview: {
    code: string;
    tier: string;
    value: string;
    slots: string;
    role: string;
    concept: string;
  };
  ownership: {
    distinctRight: string;
    signatureAsset: string;
    industryExclusivity: string;
    priorityRight: string;
  };
  benefits: {
    coreRights: string[];
    specificRights: string[];
    scope: string;
  };
  measurement: {
    kpi: string[];
    deliverables: string[];
    proofs: string[];
  };
  implementation: {
    customDiscussion: string[];
    coordinationConditions: string[];
    limitations: string[];
    regulations: string[];
  };
}

export interface SignatureAsset {
  id: string; // "A01", "A02", etc.
  tier: "A" | "B" | "C";
  name: string;
  shortIdea: string;
  priceRange: string;
  slots: string;
  priority: string;
  ownership: string;
  targetIndustries: string[];
  deliverables: string[];
  kpi: string[];
  branding: string[];
  activities: string[];
  proofOfDelivery: string[];
  limitations: string[];
  coordinationConditions: string[];
}

export interface BenefitItem {
  id: string; // "R01" - "R25"
  group: "Không gian & Nhận diện" | "Trải nghiệm & Kích hoạt" | "Truyền thông & Nội dung" | "Nhân tài & Học bổng" | "Dịch vụ & Nghiệm thu";
  name: string;
  distinctPoint: string;
  fitPackages: ("P1" | "P2" | "P3" | "P4" | "P5")[];
  exclusivity: string;
  description: string;
  proofOfDelivery: string;
  appliedConditions: string;
}

export interface MatrixRow {
  id: string; // "M01" - "M15"
  name: string;
  p1: string;
  p2: string;
  p3: string;
  p4: string;
  p5: string;
  implementation: string;
  proofOfDelivery: string;
  customDiscussion: string;
  coordinationConditions: string;
  appendixTerms: string;
}

export interface PartnershipTerm {
  id: string; // "T01" - "T15"
  topic: string;
  proposedWording: string;
  controlPurpose: string;
  appliedTo: string;
  approver: string;
  status: string;
  scope: string;
}

export interface PartnershipSpirit {
  number: string;
  title: string;
  desc: string;
}

// ----------------------------------------------------
// 1. STAT BADGES & OVERVIEW
// ----------------------------------------------------
export const partnershipStats = [
  { label: "Gói hợp tác", value: "05", desc: "Từ Đối tác Đồng hành Chính đến Đồng hành Hạng mục" },
  { label: "Quyền lợi nền tảng", value: "25", desc: "R01 – R25 phân loại minh bạch" },
  { label: "Signature Assets", value: "12", desc: "A01 – A12 cấp A/B/C độc quyền trải nghiệm" },
  { label: "Quyền lợi ma trận", value: "15", desc: "M01 – M15 đối chiếu rõ ràng" },
  { label: "Điều khoản nguyên tắc", value: "15", desc: "T01 – T15 làm cơ sở xây dựng phương án hợp tác" },
];

// ----------------------------------------------------
// 2. 05 GÓI HỢP TÁC (P1 - P5)
// ----------------------------------------------------
export const packagesData: PackageDetail[] = [
  {
    id: "P1",
    name: "Đối tác Đồng hành Chính",
    price: "300 triệu VNĐ",
    slots: "01 suất",
    role: "Đồng hành ở cấp độ cao nhất và hiện diện xuyên suốt hành trình sự kiện.",
    isPopular: false,
    highlight: [
      "Signature Asset cấp A độc quyền",
      "Danh xưng Presenting Partner chính thức",
      "Khu trải nghiệm độc quyền lên đến 6 × 6 m",
      "01 Partner Story riêng & flagship activation",
      "Báo cáo ghi nhận kết quả thực hiện quyền lợi",
    ],
    overview: {
      code: "P1",
      tier: "Cấp 1 · Presenting Partner",
      value: "300.000.000 VNĐ (Hiện kim tối thiểu 70%)",
      slots: "01 suất duy nhất toàn chương trình",
      role: "Đối tác chiến lược dẫn dắt trải nghiệm thương hiệu toàn diện",
      concept: "Đồng kiến tạo cột mốc quan trọng nhất ngày hội với định vị thương hiệu đỉnh cao.",
    },
    ownership: {
      distinctRight: "Quyền sở hữu độc quyền 01 Signature Asset Cấp A và định danh Presenting Partner trong toàn bộ ấn phẩm sự kiện.",
      signatureAsset: "01 Signature Asset Cấp A (Đông Sơn Welcome Portal / Seen at VLU Studio / K32 Discovery Passport).",
      industryExclusivity: "Độc quyền ngành hàng theo phạm vi và điều kiện được hai bên thống nhất.",
      priorityRight: "Ưu tiên chọn vị trí không gian trưng bày trung tâm đẹp nhất tại Quảng trường Đông Sơn.",
    },
    benefits: {
      coreRights: [
        "Danh xưng 'Đơn vị Đồng hành Trình diện — Convocation Day 2026'",
        "Logo kích thước lớn nhất trên toàn bộ Backdrop, Photobooth, Cổng chào, Màn hình LED",
        "01 Flagship Activation tùy biến tối đa 6 × 6 m tại vị trí trung tâm",
        "Clip TVC thương hiệu phát trên màn hình LED chính (tối đa 60s, tần suất cao nhất)",
        "01 Bài viết truyền thông riêng (Partner Story) trên Fanpage/Cổng thông tin Trường",
      ],
      specificRights: [
        "Chèn ấn phẩm / quà tặng cao cấp vào túi quà K32 First-Day Kit",
        "Đại diện nhận hoa và kỷ niệm chương tri ân từ Ban Giám hiệu Nhà trường",
        "Khu vực tiếp đón đại biểu VIP riêng dành cho 04 lãnh đạo doanh nghiệp",
        "Được phép phối hợp cùng Talent/KOL sinh viên Văn Lang trải nghiệm booth",
      ],
      scope: "Toàn bộ hai ngày sự kiện dự kiến 26–27/09/2026 và chuỗi truyền thông trước – sau sự kiện.",
    },
    measurement: {
      kpi: [
        "Tiếp cận trực tiếp: 7.000+ người tham dự",
        "Tiếp cận truyền thông trực tuyến: 1.000.000+ lượt hiển thị",
        "Lượt tương tác tại Flagship Booth: 3.500+ lượt trải nghiệm thực tế",
      ],
      deliverables: [
        "Báo cáo kết quả thực hiện quyền lợi theo thời hạn trong thỏa thuận hợp tác",
        "Bộ ảnh và video chất lượng cao ghi lại toàn bộ hoạt động của thương hiệu",
        "Danh sách thống kê số lượt tương tác hợp lệ tại gian hàng",
      ],
      proofs: [
        "Biên bản nghiệm thu quyền lợi truyền thông và hiện trường",
        "Bộ file nghiệm thu hình ảnh, đường link bài đăng, video clip phát sóng",
      ],
    },
    implementation: {
      customDiscussion: [
        "Phương án thiết kế và kết cấu booth 6×6m đặc biệt",
        "Kịch bản tương tác Flagship Activation và hoạt động tặng quà",
        "Nội dung chi tiết của bài viết truyền thông Partner Story",
      ],
      coordinationConditions: [
        "Cung cấp logo định dạng vector và tài liệu nhận diện theo timeline được Ban Tổ chức xác nhận",
        "Hoàn tất thi công gian hàng theo timeline được Ban Tổ chức xác nhận",
      ],
      limitations: [
        "Không bán hàng thu tiền trực tiếp tại sự kiện",
        "Không phát biểu quảng cáo trên sân khấu nghi lễ trang trọng",
      ],
      regulations: [
        "Tuân thủ quy chuẩn an toàn PCCC, âm thanh không vượt quá 85dB tại khu vực booth",
        "Đảm bảo thông điệp phù hợp với môi trường giáo dục đại học",
      ],
    },
  },
  {
    id: "P2",
    name: "Đối tác Dấu ấn",
    price: "200 triệu VNĐ",
    slots: "Tối đa 04 suất",
    role: "Sở hữu một điểm chạm nổi bật, tạo dấu ấn nhận diện rõ nét.",
    isPopular: true,
    highlight: [
      "Signature Asset cấp A hoặc B",
      "Gian hàng không gian lớn đến 3 × 6 m",
      "01 Nội dung thương hiệu riêng trên kênh chính thức",
      "Hoạt động activation / product trial có đo lường",
      "Báo cáo chuyên sâu Asset Report",
    ],
    overview: {
      code: "P2",
      tier: "Cấp 2 · Signature Partner",
      value: "200.000.000 VNĐ",
      slots: "Tối đa 04 đối tác",
      role: "Sở hữu một điểm chạm trải nghiệm biểu tượng với sinh viên K32",
      concept: "Gắn thương hiệu với những trải nghiệm tiện ích, phong cách sống hoặc công nghệ trẻ trung.",
    },
    ownership: {
      distinctRight: "Quyền sở hữu 01 Signature Asset Cấp A/B (Recharge Commons, Future-Ready Corner, v.v.).",
      signatureAsset: "01 Asset thuộc nhóm Cấp A/B đã đăng ký và được BTC phê duyệt.",
      industryExclusivity: "Ưu tiên độc quyền theo ngành hàng (áp dụng có điều kiện sau khi rà soát).",
      priorityRight: "Vị trí gian hàng lưu lượng cao tại Quảng trường Đông Sơn.",
    },
    benefits: {
      coreRights: [
        "Danh xưng 'Nhà tài trợ Dấu ấn / Signature Partner — Convocation Day 2026'",
        "Logo vị trí trang trọng trên Backdrop, LED, Photobooth",
        "Không gian gian hàng tiêu chuẩn cao 3 × 6 m",
        "01 Video clip TVC phát sóng trên màn hình LED (30s)",
        "01 Bài viết giới thiệu hoạt động thương hiệu trong chuỗi truyền thông",
      ],
      specificRights: [
        "Hoạt động sampling / minigame / product trial trực tiếp tại booth",
        "Đại diện nhận hoa và kỷ niệm chương tri ân tại sự kiện",
        "Khu vực khách mời VIP dành cho 02 đại biểu doanh nghiệp",
      ],
      scope: "Xuyên suốt 2 ngày sự kiện chính và truyền thông cao điểm.",
    },
    measurement: {
      kpi: [
        "Tiếp cận 7.000+ người tham dự",
        "Tiếp cận truyền thông: 500.000+ lượt hiển thị",
        "Tương tác booth: 2.000+ lượt tham gia hoạt động",
      ],
      deliverables: [
        "Asset Report tổng hợp số liệu điểm chạm đã sở hữu",
        "Bộ ảnh nghiệm thu hoạt động tại booth và trên các kênh truyền thông",
      ],
      proofs: [
        "Biên bản nghiệm thu bàn giao hiện trường và truyền thông số",
      ],
    },
    implementation: {
      customDiscussion: [
        "Quy cách thiết kế và thông điệp tại Signature Asset",
        "Kế hoạch phân bổ quà tặng / mẫu thử sản phẩm",
      ],
      coordinationConditions: [
        "Gửi hồ sơ thiết kế booth theo timeline được Ban Tổ chức xác nhận để phê duyệt kỹ thuật",
      ],
      limitations: [
        "Không thu thập dữ liệu sinh viên ngoài khuôn khổ opt-in tự nguyện",
      ],
      regulations: [
        "Tuân thủ khung giờ hoạt động và quy định an ninh chung của Nhà trường",
      ],
    },
  },
  {
    id: "P3",
    name: "Đối tác Tác động",
    price: "100 triệu VNĐ",
    slots: "Tối đa 05 suất",
    role: "Cùng Nhà trường tạo ra giá trị thiết thực và câu chuyện tác động dành cho sinh viên.",
    isPopular: false,
    highlight: [
      "Quỹ Học bổng / Impact Asset ý nghĩa",
      "Storytelling tác động xã hội & giáo dục",
      "Nhận diện tại các khu vực phù hợp",
      "Tối đa 02 khách mời tham dự",
      "Impact Report ghi nhận đóng góp",
    ],
    overview: {
      code: "P3",
      tier: "Cấp 3 · Impact Partner",
      value: "100.000.000 VNĐ",
      slots: "Tối đa 05 đối tác",
      role: "Tạo giá trị học bổng, phát triển tài năng và trách nhiệm xã hội",
      concept: "Gắn kết thương hiệu với câu chuyện nâng bước sinh viên Văn Lang vượt khó, vươn cao.",
    },
    ownership: {
      distinctRight: "Vinh danh trao học bổng trực tiếp trên sân khấu trang trọng hoặc gắn tên với quỹ học bổng K32.",
      signatureAsset: "Impact Asset (Học bổng Seen & Supported / Green Mission).",
      industryExclusivity: "Không áp dụng độc quyền ngành hàng.",
      priorityRight: "Ưu tiên nhận diện tại các ấn phẩm tri ân và lễ trao học bổng.",
    },
    benefits: {
      coreRights: [
        "Danh xưng 'Đối tác Tác động / Nhà tài trợ Học bổng — Convocation Day 2026'",
        "Logo trong nhóm Đối tác Đồng hành trên hệ thống nhận diện chung",
        "Đại diện doanh nghiệp trao biểu trưng học bổng trên sân khấu",
        "Gian hàng tiêu chuẩn 3 × 3 m (hoặc chuyển đổi thành học bổng tăng thêm)",
      ],
      specificRights: [
        "Ghi nhận trong thông cáo báo chí và bài viết recap về chương trình học bổng",
        "02 Thư mời VIP tham dự Lễ Khai giảng theo lịch được Ban Tổ chức xác nhận",
      ],
      scope: "Lễ Khai giảng chính thức và truyền thông chuyên đề Học bổng.",
    },
    measurement: {
      kpi: [
        "Số lượng sinh viên nhận hỗ trợ học bổng thực tế",
        "Lượt hiển thị truyền thông trong các bản tin học bổng: 200.000+",
      ],
      deliverables: [
        "Hồ sơ danh sách sinh viên nhận học bổng có xác nhận của Nhà trường",
        "Bộ ảnh trao học bổng và thư cảm ơn chính thức từ Ban Giám hiệu",
      ],
      proofs: [
        "Chứng từ chuyển nhận kinh phí học bổng và biên bản nghiệm thu",
      ],
    },
    implementation: {
      customDiscussion: [
        "Tiêu chí xét chọn sinh viên nhận học bổng (theo ngành, hoàn cảnh, tài năng)",
      ],
      coordinationConditions: [
        "Chuyển kinh phí học bổng hiện kim về tài khoản Nhà trường theo tiến độ trong thỏa thuận hợp tác",
      ],
      limitations: [
        "Học bổng chỉ tiếp nhận bằng tiền mặt, không sử dụng voucher thay thế",
      ],
      regulations: [
        "Đảm bảo tôn trọng danh dự và quyền riêng tư của sinh viên nhận học bổng",
      ],
    },
  },
  {
    id: "P4",
    name: "Đối tác Trải nghiệm",
    price: "50 triệu VNĐ",
    slots: "Tối đa 08 suất",
    role: "Tương tác trực tiếp với sinh viên thông qua không gian và hoạt động trải nghiệm.",
    isPopular: false,
    highlight: [
      "Booth tiêu chuẩn đến 3 × 3 m",
      "Hoạt động activation tối đa 4 giờ",
      "Phát mẫu thử / product trial",
      "Logo nhóm đối tác trên ấn phẩm",
      "Báo cáo số lượt tương tác được ghi nhận thực tế",
    ],
    overview: {
      code: "P4",
      tier: "Cấp 4 · Experience Partner",
      value: "50.000.000 VNĐ",
      slots: "Tối đa 08 đối tác",
      role: "Tạo không gian tương tác năng động, giới thiệu sản phẩm trực tiếp tới tân sinh viên",
      concept: "Tiếp cận thế hệ Gen Z thông qua các trò chơi, thử thách quà tặng và trải nghiệm sản phẩm.",
    },
    ownership: {
      distinctRight: "Sở hữu 01 gian hàng tiêu chuẩn tại khu hội chợ sinh viên sôi động.",
      signatureAsset: "Không bao gồm Signature Asset độc quyền.",
      industryExclusivity: "Không áp dụng độc quyền ngành hàng.",
      priorityRight: "Sắp xếp theo thứ tự đăng ký và hoàn tất hợp đồng.",
    },
    benefits: {
      coreRights: [
        "Danh xưng 'Đơn vị Đồng hành Trải nghiệm — Convocation Day 2026'",
        "Logo trong danh sách Đối tác trên backdrop tổng và màn hình LED",
        "01 Gian hàng 3 × 3 m kèm 01 bàn, 02 ghế, nguồn điện cơ bản",
        "Tổ chức minigame, phát quà tặng, dùng thử sản phẩm",
      ],
      specificRights: [
        "Ghi nhận tên thương hiệu trong bài viết tổng kết ngày hội",
        "01 Thư mời tham dự ngày hội",
      ],
      scope: "Ngày hội trải nghiệm theo thời gian và địa điểm được Ban Tổ chức xác nhận.",
    },
    measurement: {
      kpi: [
        "Tiếp cận 5.000+ sinh viên tham quan khu vực trải nghiệm",
        "Số lượng mẫu thử / quà tặng tiếp cận trực tiếp sinh viên",
      ],
      deliverables: [
        "Báo cáo nghiệm thu số lượng lượt tương tác cơ bản",
        "Bộ ảnh nghiệm thu gian hàng tại hiện trường",
      ],
      proofs: [
        "Biên bản nghiệm thu gian hàng ngày sự kiện",
      ],
    },
    implementation: {
      customDiscussion: [
        "Kế hoạch sampling và danh mục sản phẩm trưng bày",
      ],
      coordinationConditions: [
        "Đăng ký danh sách nhân sự trực booth theo timeline được Ban Tổ chức xác nhận",
      ],
      limitations: [
        "Tuyệt đối không bán hàng, thu tiền hoặc kinh doanh dịch vụ tại gian hàng",
      ],
      regulations: [
        "Giữ gìn vệ sinh chung, bàn giao mặt bằng nguyên trạng sau sự kiện",
      ],
    },
  },
  {
    id: "P5",
    name: "Đồng hành Hạng mục",
    price: "30 triệu VNĐ",
    slots: "Tối đa 12 suất",
    role: "Đồng hành cùng một nhu cầu hoặc hạng mục cụ thể của chương trình.",
    isPopular: false,
    highlight: [
      "Hiện vật / vật phẩm / dịch vụ thiết thực",
      "Nhận diện gắn liền theo hạng mục",
      "Logo nhóm đơn vị đồng hành",
      "Ghi nhận trong bài recap",
      "Biên bản nghiệm thu bàn giao",
    ],
    overview: {
      code: "P5",
      tier: "Cấp 5 · In-Kind / Category Partner",
      value: "30.000.000 VNĐ (Quy đổi hiện vật hoặc hiện kim)",
      slots: "Tối đa 12 đối tác",
      role: "Hỗ trợ các hạng mục thiết yếu cho khâu tổ chức và đời sống sinh viên",
      concept: "Tiếp sức ngày hội bằng nước uống, quà tặng tân sinh viên, thiết bị hoặc dịch vụ hỗ trợ.",
    },
    ownership: {
      distinctRight: "Định danh gắn liền với hạng mục tài trợ cụ thể (Ví dụ: Đơn vị Đồng hành Nước uống).",
      signatureAsset: "Không áp dụng Signature Asset.",
      industryExclusivity: "Không áp dụng độc quyền.",
      priorityRight: "Hiện diện tại khu vực triển khai hạng mục.",
    },
    benefits: {
      coreRights: [
        "Danh xưng 'Đơn vị Đồng hành Hạng mục — Convocation Day 2026'",
        "Logo trên backdrop tri ân và các ấn phẩm liên quan đến hạng mục",
        "Trưng bày sản phẩm / phát vật phẩm tại điểm phục vụ đã thống nhất",
      ],
      specificRights: [
        "Ghi nhận cảm ơn trong video hoặc bài viết tổng kết sự kiện",
        "Giấy chứng nhận đồng hành từ Trung tâm Hỗ trợ Sinh viên VLU",
      ],
      scope: "Tại điểm triển khai hạng mục cụ thể.",
    },
    measurement: {
      kpi: [
        "100% số lượng hiện vật / dịch vụ được chuyển giao đúng quy cách tới sinh viên",
      ],
      deliverables: [
        "Biên bản bàn giao và phân bổ hiện vật",
        "Hình ảnh sinh viên thụ hưởng sản phẩm / dịch vụ",
      ],
      proofs: [
        "Biên bản nghiệm thu bàn giao hiện vật giữa hai bên",
      ],
    },
    implementation: {
      customDiscussion: [
        "Chủng loại, hạn sử dụng và phương thức giao nhận hiện vật",
      ],
      coordinationConditions: [
        "Bàn giao hiện vật về kho của BTC tại Trường theo timeline được Ban Tổ chức xác nhận",
      ],
      limitations: [
        "Không tiếp nhận hiện vật gần hết hạn sử dụng hoặc không rõ nguồn gốc",
      ],
      regulations: [
        "Sản phẩm thực phẩm/đồ uống bắt buộc có đầy đủ chứng nhận VSATTP",
      ],
    },
  },
];

// ----------------------------------------------------
// 3. 12 SIGNATURE ASSETS (A01 - A12)
// ----------------------------------------------------
export const signatureAssetsData: SignatureAsset[] = [
  {
    id: "A01",
    tier: "A",
    name: "Đông Sơn Welcome Portal",
    shortIdea: "Cổng chào biểu tượng và trạm check-in công nghệ chào đón 7.000+ người tham dự.",
    priceRange: "80 – 120 triệu VNĐ",
    slots: "01 suất độc quyền",
    priority: "Ưu tiên P1",
    ownership: "Độc quyền nhận diện toàn bộ cổng chính Quảng trường Đông Sơn.",
    targetIndustries: ["Công nghệ", "Ngân hàng", "Viễn thông", "Lifestyle"],
    deliverables: ["Thi công cổng chào 3D tích hợp màn LED", "Photobooth check-in công nghệ", "01 clip ngắn ghi nhận khoảnh khắc check-in"],
    kpi: ["7.000+ lượt sinh viên đi qua và check-in", "15.000+ bức ảnh ghi nhận logo"],
    branding: ["Logo đối tác tại vị trí trung tâm trên đỉnh cổng chào", "Thương hiệu đồng hành tại photobooth"],
    activities: ["Trải nghiệm quét mã check-in nhận quà tức thì", "Chụp ảnh lấy ngay tại kiosk tương tác"],
    proofOfDelivery: ["Biên bản nghiệm thu thi công cổng", "Thống kê lượt quét mã tương tác", "Bộ ảnh toàn cảnh"],
    limitations: ["Không che khuất lối thoát hiểm và biểu tượng đại học"],
    coordinationConditions: ["Duyệt thiết kế 3D theo timeline được Ban Tổ chức xác nhận"],
  },
  {
    id: "A02",
    tier: "A",
    name: "Seen at VLU Portrait Studio",
    shortIdea: "Studio chụp ảnh chân dung & quay phim chuyên nghiệp mang thông điệp 'Nơi bạn được nhìn thấy'.",
    priceRange: "70 – 100 triệu VNĐ",
    slots: "01 suất độc quyền",
    priority: "Ưu tiên P1/P2",
    ownership: "Độc quyền thương hiệu photobooth nghệ thuật và khung ảnh online.",
    targetIndustries: ["Mỹ phẩm", "Thiết bị hình ảnh / Smartphone", "Thời trang", "FMCG"],
    deliverables: ["Khu studio ảnh chuẩn nghệ thuật với ánh sáng chuyên nghiệp", "Hệ thống trả ảnh tự động có watermark đồng hành", "Khung avatar số cho sinh viên"],
    kpi: ["3.000+ bức ảnh chân dung tân sinh viên được chụp", "5.000+ lượt chia sẻ lên mạng xã hội"],
    branding: ["Logo trên backdrop studio", "Watermark thương hiệu trên toàn bộ file ảnh sinh viên tải về"],
    activities: ["Styling nhanh và chụp ảnh profile đầu năm học", "Minigame bình chọn ảnh đẹp rạng rỡ K32"],
    proofOfDelivery: ["Dữ liệu đo lường số lượt chụp và tải ảnh", "Link drive tổng hợp toàn bộ ảnh"],
    limitations: ["Đảm bảo tốc độ trả ảnh dưới 60 giây qua QR cá nhân"],
    coordinationConditions: ["Nhà tài trợ cử đội ngũ kỹ thuật ảnh phối hợp cùng CLB Truyền thông"],
  },
  {
    id: "A03",
    tier: "A",
    name: "K32 Discovery Passport",
    shortIdea: "Hộ chiếu trải nghiệm tương tác gamification dẫn dắt sinh viên khám phá toàn bộ ngày hội.",
    priceRange: "60 – 90 triệu VNĐ",
    slots: "01 suất độc quyền",
    priority: "Ưu tiên P1/P2",
    ownership: "Độc quyền thương hiệu trên toàn bộ ấn phẩm Passport phát tận tay 7.000 tân sinh viên.",
    targetIndustries: ["Ngân hàng số", "Ứng dụng di động", "EdTech", "Bảo hiểm"],
    deliverables: ["7.000 cuốn Passport in ấn cao cấp", "Hệ thống trạm đóng dấu tích điểm", "Bộ giải thưởng vòng quay may mắn"],
    kpi: ["7.000+ tân sinh viên sở hữu passport", "85% tỷ lệ hoàn thành ít nhất 3 trạm thử thách"],
    branding: ["Logo bìa và trang tài trợ chính trong passport", "Nhận diện tại Trạm Đổi Thưởng trung tâm"],
    activities: ["Hành trình check-in qua các trạm CLB & Doanh nghiệp để nhận dấu mộc và đổi quà"],
    proofOfDelivery: ["Mẫu passport thực tế nghiệm thu", "Biên bản bàn giao số lượng ấn phẩm"],
    limitations: ["Nội dung thử thách phải lành mạnh, khuyến khích vận động và kết nối"],
    coordinationConditions: ["Hoàn thiện nội dung in ấn theo timeline được Ban Tổ chức xác nhận"],
  },
  {
    id: "A04",
    tier: "B",
    name: "VLU First 100 Days",
    shortIdea: "Cẩm nang số & chuỗi workshop định hướng 100 ngày đầu đại học dành cho K32.",
    priceRange: "50 – 80 triệu VNĐ",
    slots: "02 suất",
    priority: "Ưu tiên P2/P3",
    ownership: "Đồng thương hiệu chuỗi nội dung số và 02 buổi webinar / workshop định hướng.",
    targetIndustries: ["Tuyển dụng", "Tài chính cá nhân", "Kỹ năng mềm", "Ngoại ngữ"],
    deliverables: ["E-book 'First 100 Days at VLU'", "02 buổi workshop kỹ năng sinh viên", "Chuỗi bài viết tư vấn học tập"],
    kpi: ["8.000+ lượt tải E-book", "1.500+ sinh viên tham gia workshop"],
    branding: ["Định danh 'Cùng [Brand] chinh phục 100 ngày đầu đại học'", "Logo trên tài liệu"],
    activities: ["Chia sẻ phương pháp học đại học, quản lý tài chính sinh viên và xây dựng CV sớm"],
    proofOfDelivery: ["Bản báo cáo số lượt tải e-book và biên bản nghiệm thu workshop"],
    limitations: ["Diễn giả và nội dung phải được Ban Giám hiệu duyệt trước"],
    coordinationConditions: ["Gửi đề cương workshop theo timeline được Ban Tổ chức xác nhận"],
  },
  {
    id: "A05",
    tier: "B",
    name: "Parent & Family Welcome Lounge",
    shortIdea: "Không gian tiếp đón, nghỉ chân trang trọng và tư vấn ấm cúng dành cho phụ huynh đưa con nhập học.",
    priceRange: "50 – 70 triệu VNĐ",
    slots: "01 suất độc quyền",
    priority: "Ưu tiên P2",
    ownership: "Độc quyền tài trợ không gian Lounge phụ huynh máy lạnh, nước uống và quà tặng.",
    targetIndustries: ["Bảo hiểm", "Ngân hàng gia đình", "Chăm sóc sức khỏe", "FMCG gia đình"],
    deliverables: ["Không gian lounge 100m² máy lạnh", "Trà, cafe, bánh ngọt phục vụ phụ huynh", "Tài liệu chia sẻ 'Đồng hành cùng con'"],
    kpi: ["1.500+ phụ huynh ghé thăm và trải nghiệm", "Mức độ hài lòng đạt trên 95%"],
    branding: ["Biển hiệu 'Parent Lounge được đồng hành bởi [Brand]'", "Brochure tại bàn"],
    activities: ["Khu vực nghỉ ngơi, massage thư giãn, sạc pin điện thoại, tư vấn gói tài chính học đường"],
    proofOfDelivery: ["Biên bản nghiệm thu setup không gian", "Khảo sát ý kiến phụ huynh"],
    limitations: ["Không chào mời mua bán dịch vụ mang tính ép buộc"],
    coordinationConditions: ["Bố trí nhân sự phục vụ chu đáo, lịch sự"],
  },
  {
    id: "A06",
    tier: "B",
    name: "Future-Ready Corner",
    shortIdea: "Trạm tư vấn nghề nghiệp sớm, kiểm tra trắc nghiệm tính cách và định vị bản thân cho năm nhất.",
    priceRange: "40 – 60 triệu VNĐ",
    slots: "02 suất",
    priority: "Ưu tiên P2/P3",
    ownership: "Đồng thương hiệu khu vực Career Discovery và nhận diện trên hệ sinh thái việc làm sinh viên.",
    targetIndustries: ["Sàn tuyển dụng", "Doanh nghiệp đa quốc gia", "Công nghệ", "Tư vấn hướng nghiệp"],
    deliverables: ["Khu vực trắc nghiệm MBTI / DISC nhanh", "Góc tư vấn nghề nghiệp cùng HR chuyên nghiệp", "Bảng thông tin kỳ thực tập tương lai"],
    kpi: ["2.000+ tân sinh viên thực hiện trắc nghiệm định hướng", "500+ lượt tư vấn 1-1"],
    branding: ["Logo tại khu vực Future-Ready Corner", "Nhận diện trên phiếu kết quả trắc nghiệm"],
    activities: ["Test nhanh định hướng nghề nghiệp, chụp ảnh CV chuyên nghiệp, tư vấn lộ trình 4 năm"],
    proofOfDelivery: ["Báo cáo số lượt tư vấn và ảnh nghiệm thu"],
    limitations: ["Dữ liệu sinh viên tuân thủ chính sách bảo mật, chỉ dùng cho mục đích định hướng"],
    coordinationConditions: ["Chuẩn bị bảng câu hỏi và chuyên viên tư vấn đạt chuẩn"],
  },
  {
    id: "A07",
    tier: "B",
    name: "Recharge & Hydration Commons",
    shortIdea: "Trạm tiếp nước mát, sạc pin thần tốc và nghỉ ngơi phủ sóng khắp khuôn viên ngày hội.",
    priceRange: "40 – 60 triệu VNĐ",
    slots: "02 suất",
    priority: "Ưu tiên P2/P3",
    ownership: "Nhận diện trên 04 trạm tiếp nước và trụ sạc nhanh năng lượng.",
    targetIndustries: ["Nước khoáng / Nước giải khát", "Thiết bị sạc / Pin dự phòng", "Viễn thông"],
    deliverables: ["04 trạm Hydration & Recharge Zone", "Phát nước mát miễn phí cho 7.000+ sinh viên", "Trụ sạc điện thoại an toàn"],
    kpi: ["10.000+ chai nước / lượt tiếp nước", "3.000+ lượt sạc thiết bị"],
    branding: ["Logo thương hiệu trên toàn bộ booth trạm sạc và ly/chai nước"],
    activities: ["Tiếp sức tân sinh viên, minigame thử thách uống nước đúng cách - sống xanh"],
    proofOfDelivery: ["Biên bản giao nhận số lượng nước và hình ảnh trạm hoạt động"],
    limitations: ["Đảm bảo an toàn điện và vệ sinh môi trường tuyệt đối"],
    coordinationConditions: ["Bố trí thùng rác phân loại cạnh trạm nước"],
  },
  {
    id: "A08",
    tier: "C",
    name: "Green Convocation Mission",
    shortIdea: "Chiến dịch ngày hội không rác thải nhựa, thu gom tái chế và lan tỏa lối sống bền vững ESG.",
    priceRange: "30 – 50 triệu VNĐ",
    slots: "01 suất độc quyền",
    priority: "Ưu tiên P3/P4",
    ownership: "Độc quyền đối tác phát triển bền vững (Sustainability Partner) của ngày hội.",
    targetIndustries: ["Môi trường", "FMCG Xanh", "Vật liệu tái chế", "Ngân hàng xanh"],
    deliverables: ["Hệ thống 10 thùng rác phân loại thông minh", "Trạm đổi rác lấy quà xanh (cây mini, túi vải)", "Bảng tính giảm thiểu carbon của ngày hội"],
    kpi: ["Thu gom 500kg rác tái chế trong 2 ngày", "5.000+ sinh viên cam kết sống xanh"],
    branding: ["Định danh 'Green Mission powered by [Brand]'", "Logo trên áo tình nguyện viên xanh"],
    activities: ["Đổi chai nhựa lấy quà tặng thương hiệu, workshop làm đồ tái chế"],
    proofOfDelivery: ["Báo cáo số liệu thu gom tái chế và chứng nhận ESG sự kiện"],
    limitations: ["Quà tặng khuyến khích bằng chất liệu thân thiện môi trường"],
    coordinationConditions: ["Phối hợp cùng Đội Tình nguyện Xanh VLU"],
  },
  {
    id: "A09",
    tier: "C",
    name: "Club Show-Out Challenge",
    shortIdea: "Sân khấu thử thách và tranh tài sôi động giữa hơn 50 câu lạc bộ sinh viên Văn Lang.",
    priceRange: "30 – 50 triệu VNĐ",
    slots: "01 suất độc quyền",
    priority: "Ưu tiên P3/P4",
    ownership: "Tài trợ giải thưởng chính và nhận diện độc quyền sân khấu Dance & Music Challenge.",
    targetIndustries: ["Âm nhạc / Âm thanh", "Thời trang Streetwear", "Thức uống năng lượng", "Giải trí số"],
    deliverables: ["Sân khấu mini khuấy động", "Bộ cúp và giải thưởng mang tên thương hiệu cho CLB", "03 video recap highlight biểu diễn"],
    kpi: ["50+ CLB tham gia tranh tài", "4.000+ sinh viên cổ vũ trực tiếp"],
    branding: ["Logo trên backdrop sân khấu CLB", "Trao giải thưởng chính thức trên sân khấu"],
    activities: ["Vũ đạo ngẫu hứng, battle acoustic, minigame giao lưu cùng thương hiệu"],
    proofOfDelivery: ["Biên bản trao giải và video highlight các tiết mục"],
    limitations: ["Tiết mục biểu diễn phải đăng ký trước và duyệt trang phục phù hợp"],
    coordinationConditions: ["Đại diện doanh nghiệp lên trao giải cho CLB quán quân"],
  },
  {
    id: "A10",
    tier: "C",
    name: "K32 First-Day Kit",
    shortIdea: "Bộ quà tặng thiết thực ngày đầu tựu trường trao tận tay 7.000 tân sinh viên Khóa 32.",
    priceRange: "30 – 50 triệu VNĐ (hoặc hiện vật tương đương)",
    slots: "Tối đa 04 suất",
    priority: "Ưu tiên P4/P5",
    ownership: "Đồng hành xuất hiện quà tặng thương hiệu trong bộ Kit chào đón chính thức của Trường.",
    targetIndustries: ["Văn phòng phẩm", "FMCG", "Bình giữ nhiệt / Túi tote", "Ứng dụng học tập"],
    deliverables: ["Chèn 7.000 sản phẩm / voucher vào túi quà", "Nhận diện logo trên túi quà First-Day Kit"],
    kpi: ["100% tân sinh viên K32 nhận bộ quà trong ngày hội"],
    branding: ["Logo in trên túi quà tặng chung", "Sản phẩm thương hiệu nằm trong bộ kit"],
    activities: ["Phát quà tại khu vực Check-in Hội trường Trịnh Công Sơn và Đông Sơn"],
    proofOfDelivery: ["Biên bản kiểm đếm và phát tận tay sinh viên"],
    limitations: ["Sản phẩm có giá trị sử dụng thiết thực, không phát tờ rơi đơn thuần"],
    coordinationConditions: ["Giao vật phẩm theo timeline được Ban Tổ chức xác nhận"],
  },
  {
    id: "A11",
    tier: "A",
    name: "Scholarship: Seen & Supported",
    shortIdea: "Quỹ học bổng vinh danh nghị lực tân sinh viên và bảo trợ tài năng tương lai.",
    priceRange: "50 – 100+ triệu VNĐ",
    slots: "03 suất",
    priority: "Ưu tiên P1/P2/P3",
    ownership: "Vinh danh trực tiếp trong nghi thức trao học bổng trang trọng tại Lễ Khai giảng chính thức.",
    targetIndustries: ["Tài chính - Ngân hàng", "Tập đoàn Đa ngành", "Quỹ Khởi nghiệp", "Doanh nghiệp Cựu sinh viên"],
    deliverables: ["Lễ trao học bổng trang trọng trên sân khấu Lễ Khai giảng", "Thư vinh danh từ Hiệu trưởng", "Bài viết phóng sự truyền cảm hứng về sinh viên nhận học bổng"],
    kpi: ["10 – 30 sinh viên nhận học bổng ý nghĩa", "100.000+ lượt tiếp cận bài viết truyền cảm hứng"],
    branding: ["Tên học bổng 'Học bổng [Tên Doanh Nghiệp] — Đồng hành cùng K32'", "Logo trên bảng biểu trưng trao giải"],
    activities: ["Đại diện doanh nghiệp trao hoa và biểu trưng học bổng cùng Ban Giám hiệu"],
    proofOfDelivery: ["Biên bản bàn giao kinh phí học bổng và danh sách sinh viên ký nhận"],
    limitations: ["Học bổng chỉ chuyển khoản hiện kim, không quy đổi voucher"],
    coordinationConditions: ["Ban Giám hiệu và Trung tâm Hỗ trợ Sinh viên đồng chủ trì xét chọn minh bạch"],
  },
  {
    id: "A12",
    tier: "A",
    name: "Đông Sơn Nightscape Moment",
    shortIdea: "Khoảnh khắc thăng hoa đêm nhạc hội với hiệu ứng ánh sáng, pháo sáng nghệ thuật và visual rực rỡ.",
    priceRange: "60 – 100 triệu VNĐ",
    slots: "01 suất độc quyền",
    priority: "Ưu tiên P1/P2",
    ownership: "Đồng hành cùng đại cảnh đêm đại nhạc hội theo phạm vi và lịch được Ban Tổ chức xác nhận.",
    targetIndustries: ["Bia / Nước giải khát cao cấp", "Smartphone", "Âm thanh ánh sáng", "Lifestyle"],
    deliverables: ["Hiệu ứng pháo sáng lạnh / Visual LED 3D độc quyền", "Khoảnh khắc thương hiệu xuất hiện cao trào cùng nghệ sĩ", "Video highlight triệu view sau đêm diễn"],
    kpi: ["7.000+ người tham dự hòa nhịp tại quảng trường", "500.000+ lượt xem video recap đêm nhạc"],
    branding: ["Logo xuất hiện tại khoảnh khắc countdown và visual đỉnh cao", "Kêu gọi tên thương hiệu từ MC chương trình"],
    activities: ["Kích hoạt màn trình diễn ánh sáng đồng loạt với vòng tay phát sáng của sinh viên"],
    proofOfDelivery: ["Video nghiệm thu chất lượng cao 4K", "Báo cáo tiếp cận trên mạng xã hội"],
    limitations: ["Hiệu ứng ánh sáng và sân khấu do đạo diễn chương trình phối hợp điều phối an toàn"],
    coordinationConditions: ["Tổng duyệt kỹ thuật sân khấu theo timeline được Ban Tổ chức xác nhận"],
  },
];

// ----------------------------------------------------
// 4. 25 BENEFIT ITEMS (R01 - R25)
// ----------------------------------------------------
export const benefitsData: BenefitItem[] = [
  {
    id: "R01",
    group: "Không gian & Nhận diện",
    name: "Danh xưng hợp tác chính thức",
    distinctPoint: "Khẳng định vị thế đối tác chiến lược trên toàn bộ văn bản và kênh truyền thông.",
    fitPackages: ["P1", "P2", "P3", "P4", "P5"],
    exclusivity: "P1 độc quyền Presenting Partner",
    description: "Được sử dụng danh xưng chính thức theo từng cấp độ (Presenting Partner, Signature Partner, Impact Partner, Experience Partner, Category Partner) trong các hoạt động PR của doanh nghiệp.",
    proofOfDelivery: "Văn bản xác nhận danh xưng và thông cáo báo chí sự kiện.",
    appliedConditions: "Nội dung truyền thông cần dẫn nguồn chuẩn xác theo quy định nhận diện thương hiệu VLU.",
  },
  {
    id: "R02",
    group: "Không gian & Nhận diện",
    name: "Logo trên Backdrop & Cổng chào chính",
    distinctPoint: "Vị trí nhận diện trực quan đầu tiên tiếp cận 7.000+ người tham dự.",
    fitPackages: ["P1", "P2", "P3", "P4", "P5"],
    exclusivity: "Phân cấp kích thước theo thứ bậc gói",
    description: "Hiển thị logo trên backdrop check-in trung tâm, cổng chào Quảng trường Đông Sơn và Hội trường Trịnh Công Sơn.",
    proofOfDelivery: "Ảnh chụp nghiệm thu tại hiện trường trước giờ khai mạc.",
    appliedConditions: "Cung cấp file vector chuẩn theo timeline được Ban Tổ chức xác nhận.",
  },
  {
    id: "R03",
    group: "Không gian & Nhận diện",
    name: "Logo & Visual trên Màn hình LED Sân khấu",
    distinctPoint: "Được bố trí nhận diện trên màn hình LED theo thời lượng và kịch bản được Ban Tổ chức phê duyệt.",
    fitPackages: ["P1", "P2", "P3", "P4"],
    exclusivity: "P1 & P2 chiếm sóng trung tâm",
    description: "Hiển thị logo tĩnh và visual động luân phiên trong các phiên lễ, giờ giải lao và đại nhạc hội.",
    proofOfDelivery: "Video clip ghi nhận màn hình LED lúc vận hành.",
    appliedConditions: "Hình ảnh theo đúng tỷ lệ khung hình 16:9 độ phân giải Full HD / 4K.",
  },
  {
    id: "R04",
    group: "Không gian & Nhận diện",
    name: "Khu vực gian hàng Flagship (6 × 6 m)",
    distinctPoint: "Không gian trưng bày tại vị trí ưu tiên theo sơ đồ mặt bằng được phê duyệt.",
    fitPackages: ["P1"],
    exclusivity: "01 vị trí duy nhất",
    description: "Diện tích 36m² cho phép thiết kế mô hình 3D sáng tạo, thu hút toàn bộ dòng người di chuyển.",
    proofOfDelivery: "Biên bản bàn giao mặt bằng và hình ảnh booth hoàn thiện.",
    appliedConditions: "Bản vẽ kết cấu phải được Ban Quản lý Cơ sở vật chất thẩm định an toàn.",
  },
  {
    id: "R05",
    group: "Không gian & Nhận diện",
    name: "Gian hàng trải nghiệm lớn (3 × 6 m)",
    distinctPoint: "Mặt tiền rộng gấp đôi gian hàng tiêu chuẩn tại khu vực lưu lượng cao.",
    fitPackages: ["P2"],
    exclusivity: "Tối đa 04 vị trí",
    description: "Không gian 18m² thuận tiện tổ chức các trò chơi, chụp ảnh và tư vấn trải nghiệm quy mô lớn.",
    proofOfDelivery: "Biên bản bàn giao gian hàng tại ngày hội.",
    appliedConditions: "Thi công trong khung giờ quy định của BTC.",
  },
  {
    id: "R06",
    group: "Không gian & Nhận diện",
    name: "Gian hàng tương tác tiêu chuẩn (3 × 3 m)",
    distinctPoint: "Bố trí khoa học kèm 01 bàn, 02 ghế và nguồn điện 220V sẵn sàng.",
    fitPackages: ["P3", "P4"],
    exclusivity: "Theo sơ đồ phân bổ",
    description: "Khu vực 9m² phù hợp đặt quầy trưng bày, standee và mini-game tương tác.",
    proofOfDelivery: "Biên bản nghiệm thu gian hàng theo lịch tổ chức được xác nhận.",
    appliedConditions: "Không lấn chiếm lối đi chung ngoài diện tích được cấp.",
  },
  {
    id: "R07",
    group: "Không gian & Nhận diện",
    name: "Khu vực tiếp đón đại biểu VIP",
    distinctPoint: "Trải nghiệm sang trọng dành cho lãnh đạo cấp cao của doanh nghiệp đối tác.",
    fitPackages: ["P1", "P2", "P3"],
    exclusivity: "Số lượng vé VIP giới hạn",
    description: "Chỗ ngồi hàng ghế danh dự tại Hội trường Trịnh Công Sơn và phòng khánh tiết đại biểu.",
    proofOfDelivery: "Thẻ đại biểu VIP và hình ảnh đón tiếp.",
    appliedConditions: "Đăng ký danh sách khách mời theo timeline được Ban Tổ chức xác nhận.",
  },
  {
    id: "R08",
    group: "Trải nghiệm & Kích hoạt",
    name: "Phát mẫu thử & Trải nghiệm sản phẩm (Product Trial)",
    distinctPoint: "Đưa sản phẩm trực tiếp tới tay hàng ngàn sinh viên đúng phân khúc mục tiêu.",
    fitPackages: ["P1", "P2", "P4"],
    exclusivity: "Theo ngành hàng đã duyệt",
    description: "Được quyền phát sampling, dùng thử đồ ăn/uống/mỹ phẩm/công nghệ miễn phí tại gian hàng.",
    proofOfDelivery: "Thống kê số lượng phát mẫu thử và ảnh hoạt động.",
    appliedConditions: "Tuyệt đối đảm bảo tiêu chuẩn an toàn, nguồn gốc xuất xứ rõ ràng.",
  },
  {
    id: "R09",
    group: "Trải nghiệm & Kích hoạt",
    name: "Tổ chức Minigame / Thử thách tương tác",
    distinctPoint: "Kích hoạt năng lượng trẻ, tạo điểm nhấn viral trên mạng xã hội.",
    fitPackages: ["P1", "P2", "P4"],
    exclusivity: "Không trùng lặp format",
    description: "Triển khai vòng quay may mắn, mini challenge thể chất hoặc sáng tạo thu hút sinh viên xếp hàng tham gia.",
    proofOfDelivery: "Hình ảnh và clip ghi lại không khí tham gia của sinh viên.",
    appliedConditions: "Âm thanh không gây ảnh hưởng đến các gian hàng xung quanh.",
  },
  {
    id: "R10",
    group: "Trải nghiệm & Kích hoạt",
    name: "Sở hữu Signature Asset độc quyền",
    distinctPoint: "Gắn liền tên tuổi thương hiệu với 1 trong 12 nền tảng trải nghiệm cốt lõi của ngày hội.",
    fitPackages: ["P1", "P2"],
    exclusivity: "Độc quyền theo từng Asset",
    description: "Toàn quyền sở hữu nội dung và nhận diện tại Signature Asset đã lựa chọn (A01 - A12).",
    proofOfDelivery: "Hồ sơ nghiệm thu chi tiết từng Asset.",
    appliedConditions: "Đăng ký sớm theo thứ tự ưu tiên gói P1 > P2.",
  },
  {
    id: "R11",
    group: "Trải nghiệm & Kích hoạt",
    name: "Phát sóng TVC trên Màn hình LED chính",
    distinctPoint: "Tiếp cận 7.000+ người tham dự vào các thời điểm phù hợp trước và sau các tiết mục lớn.",
    fitPackages: ["P1", "P2"],
    exclusivity: "Thời lượng: P1 60s, P2 30s",
    description: "Phát sóng video clip giới thiệu doanh nghiệp với âm thanh sống động trên hệ thống màn hình LED sự kiện.",
    proofOfDelivery: "Log lịch phát sóng và video quay thực tế tại sự kiện.",
    appliedConditions: "Nội dung TVC được duyệt theo timeline được Ban Tổ chức xác nhận.",
  },
  {
    id: "R12",
    group: "Trải nghiệm & Kích hoạt",
    name: "Chèn vật phẩm / Voucher vào K32 First-Day Kit",
    distinctPoint: "Hiện diện trong chiếc túi chào đón đầu tiên mà mỗi tân sinh viên mang về nhà.",
    fitPackages: ["P1", "P2", "P5"],
    exclusivity: "Giới hạn 10 thương hiệu",
    description: "Đưa cẩm nang, quà tặng thực tế (bút, sổ, móc khóa, quà tặng tiện ích) vào 7.000 túi quà tân sinh viên.",
    proofOfDelivery: "Biên bản kiểm đếm đóng gói vào túi quà.",
    appliedConditions: "Không phát tờ rơi đơn thuần; ưu tiên vật phẩm có công năng sử dụng.",
  },
  {
    id: "R13",
    group: "Truyền thông & Nội dung",
    name: "Bài viết riêng 'Partner Story' trên Kênh chính thức",
    distinctPoint: "Kể câu chuyện truyền cảm hứng của thương hiệu trên Fanpage và Website Văn Lang.",
    fitPackages: ["P1"],
    exclusivity: "01 bài viết chuyên sâu độc quyền",
    description: "Bài PR chất lượng cao có hình ảnh thiết kế riêng, làm nổi bật sứ mệnh đồng hành cùng thế hệ trẻ.",
    proofOfDelivery: "Link bài viết đã đăng kèm ảnh chụp số liệu tương tác.",
    appliedConditions: "Nội dung được hai bên thống nhất trước khi xuất bản.",
  },
  {
    id: "R14",
    group: "Truyền thông & Nội dung",
    name: "Ghi nhận Logo trên Social Media Campaign",
    distinctPoint: "Tiếp cận cộng đồng sinh viên trực tuyến với hàng triệu lượt tương tác số.",
    fitPackages: ["P1", "P2", "P3", "P4", "P5"],
    exclusivity: "Phân cấp theo vị trí bài post",
    description: "Xuất hiện logo trong album ảnh sự kiện, poster tổng hợp và bài đăng tri ân nhà tài trợ trên mạng xã hội.",
    proofOfDelivery: "Danh sách link các bài đăng nghiệm thu.",
    appliedConditions: "Thực hiện theo tiến độ chiến dịch truyền thông của Nhà trường.",
  },
  {
    id: "R15",
    group: "Truyền thông & Nội dung",
    name: "Logo trên Website Sự kiện & Cổng thông tin",
    distinctPoint: "Lưu trữ nhận diện trực tuyến lâu dài trên trang landing page chính thức.",
    fitPackages: ["P1", "P2", "P3", "P4", "P5"],
    exclusivity: "Hiển thị xuyên suốt chiến dịch",
    description: "Gắn logo kèm hyperlink trỏ về website chính thức của doanh nghiệp đối tác.",
    proofOfDelivery: "Đường link website và báo cáo lượt xem trang.",
    appliedConditions: "Logo chuẩn kích thước hiển thị responsive.",
  },
  {
    id: "R16",
    group: "Truyền thông & Nội dung",
    name: "Xuất hiện trong Video Highlight / Official Recap",
    distinctPoint: "Lưu lại những khoảnh khắc đẹp nhất trong video tổng kết phát hành toàn trường.",
    fitPackages: ["P1", "P2", "P3"],
    exclusivity: "P1/P2 có phân cảnh riêng",
    description: "Thương hiệu và gian hàng xuất hiện sinh động trong thước phim tổng kết Hội Khai giảng 2026.",
    proofOfDelivery: "Link video phát hành chính thức trên kênh Youtube/Fanpage VLU.",
    appliedConditions: "Tùy thuộc vào kịch bản dựng phim nghệ thuật của ekip truyền thông.",
  },
  {
    id: "R17",
    group: "Truyền thông & Nội dung",
    name: "Bộ ảnh chất lượng cao riêng cho Doanh nghiệp",
    distinctPoint: "Nguồn tư liệu truyền thông nội bộ và đối ngoại chuyên nghiệp sau sự kiện.",
    fitPackages: ["P1", "P2"],
    exclusivity: "Nhiếp ảnh gia chuyên nghiệp chụp riêng",
    description: "Cung cấp trọn bộ ảnh độ phân giải cao ghi lại toàn bộ hoạt động của ban lãnh đạo và gian hàng đối tác.",
    proofOfDelivery: "Link Google Drive bàn giao ảnh gốc đã qua xử lý màu sắc.",
    appliedConditions: "Bàn giao trong vòng 05 ngày làm việc sau sự kiện.",
  },
  {
    id: "R18",
    group: "Nhân tài & Học bổng",
    name: "Vinh danh trao Học bổng trên Sân khấu chính",
    distinctPoint: "Khoảnh khắc ý nghĩa ghi dấu ấn trách nhiệm xã hội trước toàn thể nhà trường.",
    fitPackages: ["P1", "P3"],
    exclusivity: "Nghi thức trao học bổng trang trọng",
    description: "Đại diện doanh nghiệp cùng Ban Giám hiệu trực tiếp trao biểu trưng học bổng cho các sinh viên xuất sắc.",
    proofOfDelivery: "Hình ảnh và clip ghi lại nghi thức trao học bổng trên sân khấu.",
    appliedConditions: "Kinh phí học bổng được chuyển đầy đủ trước ngày sự kiện.",
  },
  {
    id: "R19",
    group: "Nhân tài & Học bổng",
    name: "Gắn tên Quỹ Học bổng sinh viên",
    distinctPoint: "Tạo dấu ấn giáo dục bền vững và được sinh viên ghi nhớ qua nhiều thế hệ.",
    fitPackages: ["P1", "P3"],
    exclusivity: "Tên thương hiệu đặt cho quỹ",
    description: "Đặt tên 'Học bổng [Brand] – Chắp cánh ước mơ K32' trong toàn bộ văn bản và truyền thông trao học bổng.",
    proofOfDelivery: "Quyết định cấp học bổng có đóng dấu của Trường Đại học Văn Lang.",
    appliedConditions: "Áp dụng cho gói học bổng từ 50 triệu VNĐ trở lên.",
  },
  {
    id: "R20",
    group: "Nhân tài & Học bổng",
    name: "Góc kết nối Tuyển dụng (Talent Discovery Corner)",
    distinctPoint: "Tiếp cận sớm nguồn nhân lực trẻ trung, năng động và giàu tiềm năng của Văn Lang.",
    fitPackages: ["P1", "P2", "P3"],
    exclusivity: "Theo nhóm đối tác ưu tiên",
    description: "Đặt mã QR tuyển dụng, giới thiệu văn hóa doanh nghiệp và cơ hội thực tập, việc làm tương lai.",
    proofOfDelivery: "Thống kê số lượng quét mã opt-in từ sinh viên.",
    appliedConditions: "Thu thập dữ liệu theo hình thức sinh viên chủ động đăng ký (opt-in).",
  },
  {
    id: "R21",
    group: "Dịch vụ & Nghiệm thu",
    name: "Độc quyền ngành hàng (Category Exclusivity)",
    distinctPoint: "Bảo đảm là thương hiệu duy nhất trong phân khúc ngành hàng xuất hiện tại sự kiện.",
    fitPackages: ["P1", "P2"],
    exclusivity: "Độc quyền ngành hàng theo phạm vi và điều kiện được hai bên thống nhất",
    description: "Cam kết không tiếp nhận các đối thủ cạnh tranh trực tiếp cùng ngành hàng tài trợ chính.",
    proofOfDelivery: "Phụ lục cam kết độc quyền đính kèm hợp đồng.",
    appliedConditions: "Xác nhận sau khi rà soát danh mục ngành hàng cụ thể giữa hai bên.",
  },
  {
    id: "R22",
    group: "Dịch vụ & Nghiệm thu",
    name: "Thư cảm ơn & Kỷ niệm chương từ Ban Giám hiệu",
    distinctPoint: "Chứng nhận quan hệ đối tác tin cậy và sự đồng hành quý báu cùng Nhà trường.",
    fitPackages: ["P1", "P2", "P3", "P4", "P5"],
    exclusivity: "Khung vinh danh cao cấp",
    description: "Ban Giám hiệu trao tặng kỷ niệm chương và thư cảm ơn chính thức có chữ ký và con dấu Nhà trường.",
    proofOfDelivery: "Biên bản trao tặng kỷ niệm chương ngày sự kiện.",
    appliedConditions: "Trao tại phiên bế mạc hoặc gửi tận tay văn phòng doanh nghiệp.",
  },
  {
    id: "R23",
    group: "Dịch vụ & Nghiệm thu",
    name: "Impact Report (Báo cáo ghi nhận kết quả thực hiện quyền lợi)",
    distinctPoint: "Báo cáo số liệu toàn diện, trực quan hóa ROI và hiệu quả tiếp cận thực tế.",
    fitPackages: ["P1"],
    exclusivity: "Bản báo cáo thiết kế riêng chuyên sâu",
    description: "Bao gồm số liệu tiếp cận trực tiếp, tương tác online, đo lường truyền thông và đánh giá hiệu quả chiến dịch.",
    proofOfDelivery: "File PDF báo cáo kết quả thực hiện quyền lợi gửi theo thời hạn trong thỏa thuận hợp tác.",
    appliedConditions: "Được tổng hợp từ dữ liệu đo lường đa kênh của Ban Tổ chức.",
  },
  {
    id: "R24",
    group: "Dịch vụ & Nghiệm thu",
    name: "Asset Report / Báo cáo Nghiệm thu chuẩn",
    distinctPoint: "Minh bạch từng hạng mục đầu ra để phục vụ quyết toán tài chính dễ dàng.",
    fitPackages: ["P2", "P3", "P4"],
    exclusivity: "Theo gói tài trợ",
    description: "Tổng hợp toàn bộ hình ảnh nghiệm thu hiện trường, đường link bài viết và số liệu tương tác cơ bản.",
    proofOfDelivery: "Biên bản nghiệm thu hoàn thành nghĩa vụ tài trợ.",
    appliedConditions: "Bàn giao theo thời hạn được thống nhất trong thỏa thuận hợp tác.",
  },
  {
    id: "R25",
    group: "Dịch vụ & Nghiệm thu",
    name: "Biên bản Nghiệm thu Hạng mục Hiện vật",
    distinctPoint: "Đảm bảo tính pháp lý và quy chuẩn kế toán cho các đơn vị tài trợ hiện vật.",
    fitPackages: ["P5"],
    exclusivity: "Chuẩn hóa kế toán tài chính",
    description: "Xác nhận đầy đủ số lượng, đơn giá quy đổi và danh mục sản phẩm/dịch vụ đã tiếp nhận và bàn giao.",
    proofOfDelivery: "Biên bản bàn giao có chữ ký đại diện hai bên.",
    appliedConditions: "Kèm hóa đơn/phiếu xuất kho hợp lệ.",
  },
];

// ----------------------------------------------------
// 5. 15 PACKAGE MATRIX ROWS (M01 - M15)
// ----------------------------------------------------
export const packageMatrixData: MatrixRow[] = [
  {
    id: "M01",
    name: "Danh xưng hợp tác chính thức",
    p1: "Đối tác Đồng hành Chính",
    p2: "Đối tác Dấu ấn",
    p3: "Đối tác Tác động",
    p4: "Đối tác Trải nghiệm",
    p5: "Đồng hành Hạng mục",
    implementation: "Quy định rõ trong hợp đồng và áp dụng chuẩn xác trên mọi ấn phẩm truyền thông, MC script.",
    proofOfDelivery: "Văn bản công nhận danh xưng và market ấn phẩm sự kiện.",
    customDiscussion: "Thống nhất tên thương hiệu phụ / nhãn hàng con đi kèm danh xưng.",
    coordinationConditions: "Cung cấp guideline thương hiệu theo timeline được Ban Tổ chức xác nhận.",
    appendixTerms: "Điều khoản quyền sử dụng hình ảnh và danh xưng trong 06 tháng sau sự kiện.",
  },
  {
    id: "M02",
    name: "Signature Asset độc quyền",
    p1: "01 Asset Cấp A (Độc quyền lớn)",
    p2: "01 Asset Cấp A/B",
    p3: "Impact Asset (Học bổng)",
    p4: "—",
    p5: "—",
    implementation: "Bàn giao toàn quyền định danh và tổ chức không gian tại Signature Asset được duyệt.",
    proofOfDelivery: "Hồ sơ thiết kế và hình ảnh nghiệm thu thực tế Asset.",
    customDiscussion: "Lựa chọn Asset cụ thể trong danh mục A01–A12.",
    coordinationConditions: "Chốt lựa chọn Asset theo timeline được Ban Tổ chức xác nhận.",
    appendixTerms: "Quy định về bảo quản thiết bị và an toàn vận hành tại khu vực Asset.",
  },
  {
    id: "M03",
    name: "Không gian gian hàng (Booth)",
    p1: "Flagship 6 × 6 m (Ưu tiên số 1)",
    p2: "3 × 6 m (Khu lưu lượng cao)",
    p3: "3 × 3 m (Tiêu chuẩn)",
    p4: "3 × 3 m (Tiêu chuẩn)",
    p5: "Theo hạng mục",
    implementation: "Phân bổ mặt bằng tại Quảng trường Đông Sơn kèm nguồn điện 220V cơ bản.",
    proofOfDelivery: "Biên bản bàn giao mặt bằng trước sự kiện và nghiệm thu sau sự kiện.",
    customDiscussion: "Vị trí chính xác trên sơ đồ tổng thể và nhu cầu phụ tải điện công suất cao.",
    coordinationConditions: "Gửi sơ đồ bố trí theo timeline được Ban Tổ chức xác nhận.",
    appendixTerms: "Quy định không bán hàng thu tiền trực tiếp và không phát loa vượt 85dB.",
  },
  {
    id: "M04",
    name: "Flagship / Branded Activation",
    p1: "Ưu tiên triển khai hoạt động trong hai ngày theo phương án được thống nhất",
    p2: "Sở hữu 1 điểm chạm chính",
    p3: "Mini Activation",
    p4: "Tối đa 4 giờ tương tác",
    p5: "Theo hạng mục",
    implementation: "Doanh nghiệp chủ động điều phối hoạt động trải nghiệm theo kịch bản đã duyệt.",
    proofOfDelivery: "Clip ngắn hoặc ảnh chụp toàn cảnh hoạt động activation.",
    customDiscussion: "Kịch bản trò chơi, quà tặng và hình thức tương tác với sinh viên.",
    coordinationConditions: "Đăng ký danh sách nhân sự phụ trách activation.",
    appendixTerms: "Cam kết tuân thủ thuần phong mỹ tục và môi trường học đường.",
  },
  {
    id: "M05",
    name: "Nhận diện Màn hình LED Sân khấu",
    p1: "TVC tối đa 60 giây và vị trí logo ưu tiên theo kịch bản chương trình",
    p2: "TVC tối đa 30 giây và vị trí logo theo kịch bản chương trình",
    p3: "Logo nhóm đối tác",
    p4: "Logo nhóm đối tác",
    p5: "—",
    implementation: "Phát sóng video clip và hiển thị logo trên màn hình LED chính tại Quảng trường & Hội trường.",
    proofOfDelivery: "Bảng phân bổ thời lượng phát sóng (cue-sheet) và clip ghi hình hiện trường.",
    customDiscussion: "Khung giờ phát sóng TVC ưu tiên (trước giờ khai mạc, giờ giải lao, đêm nhạc).",
    coordinationConditions: "Gửi video định dạng MP4 Full HD theo timeline được Ban Tổ chức xác nhận.",
    appendixTerms: "Nội dung video không chứa hình ảnh bạo lực, quảng cáo thuốc lá/chất kích thích.",
  },
  {
    id: "M06",
    name: "Backdrop, Photobooth & Cổng chào",
    p1: "Logo Top 1 (Kích thước lớn nhất)",
    p2: "Logo Hàng 2 (Kích thước lớn)",
    p3: "Logo Hàng 3 (Tiêu chuẩn)",
    p4: "Logo Hàng 4 (Tiêu chuẩn)",
    p5: "Logo Danh sách tri ân",
    implementation: "In ấn trực tiếp trên hệ thống backdrop bạt hiflex chất lượng cao và cổng chào 3D.",
    proofOfDelivery: "Ảnh chụp cận cảnh logo trên các ấn phẩm thực tế.",
    customDiscussion: "Kiểm tra màu sắc logo test print trước khi in hàng loạt.",
    coordinationConditions: "Gửi file logo định dạng AI/EPS/PDF vector theo timeline được Ban Tổ chức xác nhận.",
    appendixTerms: "Nhận diện tuân thủ quy chuẩn Brand Guidelines của Trường Đại học Văn Lang.",
  },
  {
    id: "M07",
    name: "Partner Story & Social Media",
    p1: "01 Bài PR riêng + Album ảnh",
    p2: "01 Bài PR riêng",
    p3: "Bài tổng hợp Học bổng",
    p4: "Bài tổng hợp Đối tác",
    p5: "Bài tổng kết Recap",
    implementation: "Đăng tải trên Fanpage Trường Đại học Văn Lang và Trung tâm Hỗ trợ Sinh viên.",
    proofOfDelivery: "Đường link bài đăng công khai và ảnh chụp chỉ số tương tác (reach, like, share).",
    customDiscussion: "Thông điệp cốt lõi và hình ảnh đại diện thương hiệu đưa vào bài viết.",
    coordinationConditions: "Duyệt nội dung bài viết trước 03 ngày làm việc so với lịch đăng.",
    appendixTerms: "Không can thiệp vào phong cách hành văn chuẩn mực của kênh đại học.",
  },
  {
    id: "M08",
    name: "Phát mẫu thử / Product Trial",
    p1: "Ưu tiên toàn khuôn viên",
    p2: "Tại booth & Asset",
    p3: "Có điều kiện",
    p4: "Tại booth 3×3m",
    p5: "Theo hạng mục",
    implementation: "Sinh viên tiếp cận dùng thử sản phẩm trực tiếp từ nhân sự doanh nghiệp.",
    proofOfDelivery: "Hình ảnh sinh viên trải nghiệm sản phẩm và biên bản thống kê số lượng phát.",
    customDiscussion: "Quy chuẩn bảo quản sản phẩm và quy trình phát mẫu thử vệ sinh.",
    coordinationConditions: "Cung cấp giấy kiểm nghiệm VSATTP hoặc chứng nhận hợp chuẩn chất lượng.",
    appendixTerms: "Không phát tờ rơi đơn thuần gây xả rác trong khuôn viên trường.",
  },
  {
    id: "M09",
    name: "Học bổng & Trao giải Sân khấu",
    p1: "Trao trên sân khấu chính",
    p2: "Trao theo hạng mục",
    p3: "Vinh danh trao học bổng",
    p4: "—",
    p5: "—",
    implementation: "Đại diện ban lãnh đạo doanh nghiệp lên sân khấu nhận hoa và trao biểu trưng học bổng.",
    proofOfDelivery: "Hình ảnh sân khấu nghi thức và giấy xác nhận trao học bổng.",
    customDiscussion: "Cơ cấu giá trị từng suất học bổng và tiêu chí xét chọn sinh viên.",
    coordinationConditions: "Chuyển kinh phí học bổng về tài khoản trường theo tiến độ trong thỏa thuận hợp tác.",
    appendixTerms: "Học bổng trao bằng hiện kim, không thay thế bằng voucher mua sắm.",
  },
  {
    id: "M10",
    name: "Kết nối Tuyển dụng / Career Corner",
    p1: "Ưu tiên số 1",
    p2: "Tích hợp tại booth",
    p3: "Mã QR Opt-in",
    p4: "Mã QR Opt-in",
    p5: "—",
    implementation: "Bố trí góc Career Discovery để sinh viên quét mã tìm hiểu văn hóa công ty và gửi CV.",
    proofOfDelivery: "Thống kê số lượng lượt quét mã tương tác tuyển dụng.",
    customDiscussion: "Các vị trí tuyển dụng thực tập sinh / cộng tác viên phù hợp với khối ngành VLU.",
    coordinationConditions: "Doanh nghiệp tự quản lý hệ thống form tiếp nhận CV theo chuẩn bảo mật.",
    appendixTerms: "Nhà trường không cung cấp trực tiếp dữ liệu cá nhân sinh viên.",
  },
  {
    id: "M11",
    name: "Khách mời VIP & Khu vực Đại biểu",
    p1: "04 Thẻ VIP + Khánh tiết",
    p2: "02 Thẻ VIP",
    p3: "02 Thẻ VIP",
    p4: "01 Thẻ Tham dự",
    p5: "01 Thẻ Tham dự",
    implementation: "Bố trí chỗ ngồi danh dự hàng ghế đầu tại Lễ Khai giảng Hội trường Trịnh Công Sơn.",
    proofOfDelivery: "Thẻ đại biểu phát hành chính thức và hình ảnh đón tiếp tại khu vực VIP.",
    customDiscussion: "Danh sách họ tên và chức danh chính xác của đại biểu doanh nghiệp.",
    coordinationConditions: "Xác nhận danh sách tham dự theo timeline được Ban Tổ chức xác nhận.",
    appendixTerms: "Trang phục lịch sự, trang trọng (vest/áo dài/công sở).",
  },
  {
    id: "M12",
    name: "Chèn vào K32 First-Day Kit",
    p1: "Ưu tiên vật phẩm cao cấp",
    p2: "01 Vật phẩm tiện ích",
    p3: "Có điều kiện",
    p4: "Có điều kiện",
    p5: "Theo hạng mục",
    implementation: "Đóng gói trực tiếp vật phẩm của doanh nghiệp vào 7.000 túi quà tân sinh viên.",
    proofOfDelivery: "Biên bản kiểm đếm đóng gói và mẫu túi quà thực tế.",
    customDiscussion: "Quy cách kích thước và tính hữu dụng của vật phẩm tài trợ.",
    coordinationConditions: "Bàn giao vật phẩm về kho trường theo timeline được Ban Tổ chức xác nhận.",
    appendixTerms: "Không chèn tài liệu mang tính chất quảng cáo quá đà hoặc phản cảm.",
  },
  {
    id: "M13",
    name: "Độc quyền Ngành hàng",
    p1: "Độc quyền ngành hàng theo phạm vi và điều kiện được hai bên thống nhất",
    p2: "Độc quyền có điều kiện",
    p3: "—",
    p4: "—",
    p5: "—",
    implementation: "Cam kết không nhận tài trợ từ các thương hiệu đối thủ cạnh tranh trực tiếp.",
    proofOfDelivery: "Phụ lục cam kết độc quyền ngành hàng đính kèm hợp đồng.",
    customDiscussion: "Xác định rõ ràng mã ngành kinh doanh chính được bảo hộ độc quyền.",
    coordinationConditions: "Ký kết hợp đồng và thanh toán đợt 1 theo tiến độ trong thỏa thuận hợp tác.",
    appendixTerms: "Độc quyền chỉ có hiệu lực sau khi Hội đồng phê duyệt hợp tác thông qua.",
  },
  {
    id: "M14",
    name: "Video Recap & Báo cáo hình ảnh",
    p1: "Phân cảnh nhận diện riêng trong video tổng kết, tùy điều kiện sản xuất thực tế",
    p2: "Xuất hiện trong Recap",
    p3: "Ảnh tư liệu hoàn chỉnh",
    p4: "Ảnh tư liệu cơ bản",
    p5: "Ảnh nghiệm thu hạng mục",
    implementation: "Ekip media quay dựng video tổng kết chất lượng điện ảnh phát sóng trên toàn mạng lưới.",
    proofOfDelivery: "Link video Full HD / 4K và link Google Drive bộ ảnh sự kiện.",
    customDiscussion: "Phối hợp cùng quay phim hiện trường để ghi lại các khung hình đắt giá nhất.",
    coordinationConditions: "Hoàn tất bàn giao sau 05 ngày làm việc kể từ khi kết thúc ngày hội.",
    appendixTerms: "Bản quyền video thuộc Trường Đại học Văn Lang; đối tác được quyền sử dụng cho mục đích PR nội bộ.",
  },
  {
    id: "M15",
    name: "Báo cáo Đo lường & Nghiệm thu",
    p1: "Dedicated Impact Report",
    p2: "Asset Report chuyên sâu",
    p3: "Báo cáo số liệu khả dụng",
    p4: "Nghiệm thu gian hàng",
    p5: "Biên bản bàn giao hiện vật",
    implementation: "Lập báo cáo số liệu tiếp cận, hình ảnh nghiệm thu và xác nhận hoàn thành trách nhiệm.",
    proofOfDelivery: "Bản báo cáo PDF có đóng dấu xác nhận của Trung tâm Hỗ trợ Sinh viên VLU.",
    customDiscussion: "Các chỉ số KPIs đặc thù mà doanh nghiệp cần theo dõi thêm.",
    coordinationConditions: "Bàn giao theo thời hạn trong thỏa thuận hợp tác.",
    appendixTerms: "Biên bản nghiệm thu là căn cứ pháp lý để hai bên thanh lý hợp đồng tài trợ.",
  },
];

// ----------------------------------------------------
// 6. 15 PARTNERSHIP TERMS / PRINCIPLES (T01 - T15)
// ----------------------------------------------------
export const partnershipTermsData: PartnershipTerm[] = [
  {
    id: "T01",
    topic: "Không bán hàng thu tiền trực tiếp tại sự kiện",
    proposedWording: "Tất cả các hoạt động tại gian hàng và khu vực tài trợ chỉ phục vụ mục đích giới thiệu thương hiệu, trưng bày, dùng thử sản phẩm hoặc tương tác trải nghiệm; tuyệt đối không thực hiện giao dịch mua bán, thu tiền mặt hoặc thanh toán chuyển khoản thương mại dưới mọi hình thức.",
    controlPurpose: "Giữ vững tính chất phi thương mại, tôn nghiêm của môi trường giáo dục đại học và ngày hội tân sinh viên.",
    appliedTo: "Tất cả các đối tác P1, P2, P3, P4, P5 và các gian hàng tham gia.",
    approver: "Trưởng Ban Tổ chức & Giám đốc Trung tâm Hỗ trợ Sinh viên.",
    status: "Nguyên tắc bắt buộc",
    scope: "Khuôn viên và hai ngày sự kiện theo phương án được Ban Tổ chức xác nhận.",
  },
  {
    id: "T02",
    topic: "Không cung cấp hoặc chuyển giao dữ liệu cá nhân sinh viên",
    proposedWording: "Nhà trường không cung cấp, bàn giao hoặc chia sẻ danh sách, thông tin liên lạc hay bất kỳ dữ liệu cá nhân nào của sinh viên/tân sinh viên cho bên thứ ba. Doanh nghiệp chỉ được thu thập thông tin khi sinh viên chủ động tự nguyện cung cấp (opt-in) thông qua quét mã QR tuyển dụng hoặc tham gia minigame.",
    controlPurpose: "Bảo vệ quyền riêng tư cá nhân và tuân thủ nghiêm ngặt Nghị định 13/2023/NĐ-CP về Bảo vệ dữ liệu cá nhân.",
    appliedTo: "Toàn bộ các gói tài trợ và hoạt động tương tác.",
    approver: "Hội đồng Pháp chế & Ban Giám hiệu Nhà trường.",
    status: "Thực hiện theo quy định của Nhà trường",
    scope: "Áp dụng cho mọi hoạt động trước, trong và sau sự kiện.",
  },
  {
    id: "T03",
    topic: "Không phát biểu quảng cáo trên sân khấu nghi lễ chính thức",
    proposedWording: "Trên sân khấu chính của Lễ Khai giảng trang trọng (Hội trường Trịnh Công Sơn), đại diện doanh nghiệp tham dự với tư cách khách quý nhận hoa, biểu trưng tri ân và trao học bổng; không có nội dung phát biểu mang tính chất quảng cáo thương mại hoặc thuyết trình bán hàng.",
    controlPurpose: "Đảm bảo tính trang nghiêm, tập trung trọn vẹn vào nghi thức khai giảng và truyền cảm hứng cho tân sinh viên K32.",
    appliedTo: "Tất cả các đối tác và đại biểu doanh nghiệp.",
    approver: "Ban Giám hiệu Trường Đại học Văn Lang.",
    status: "Nguyên tắc bắt buộc",
    scope: "Sân khấu nghi lễ theo thời gian và địa điểm được Ban Tổ chức xác nhận.",
  },
  {
    id: "T04",
    topic: "Học bổng tiếp nhận bằng tiền mặt (không nhận voucher)",
    proposedWording: "Hạng mục học bổng dành cho tân sinh viên và sinh viên có hoàn cảnh khó khăn bắt buộc phải được tiếp nhận bằng hiện kim (tiền mặt chuyển khoản vào tài khoản Nhà trường); không chấp nhận quy đổi hoặc thay thế bằng voucher giảm giá, phiếu mua hàng hoặc dịch vụ có điều kiện.",
    controlPurpose: "Bảo đảm giá trị hỗ trợ thực chất, công bằng và trực tiếp đến đời sống học tập của sinh viên.",
    appliedTo: "Các đối tác tham gia gói P1, P3 và các đơn vị tài trợ học bổng riêng lẻ.",
    approver: "Phòng Quản lý Tài chính & Trung tâm Hỗ trợ Sinh viên.",
    status: "Áp dụng theo phương án được duyệt",
    scope: "Quỹ học bổng Convocation Day 2026.",
  },
  {
    id: "T05",
    topic: "Giới hạn tỷ lệ tài trợ bằng hiện vật (Tối đa 30% giá trị gói)",
    proposedWording: "Đối với các gói tài trợ hỗn hợp, phần giá trị quy đổi từ hiện vật hoặc dịch vụ không vượt quá 30% tổng giá trị hợp đồng tài trợ (70% còn lại là hiện kim); đơn giá hiện vật phải tương đương giá trị thị trường hợp lý và được Hội đồng BTC chấp thuận.",
    controlPurpose: "Đảm bảo nguồn lực tài chính tiền mặt tối thiểu để trang trải chi phí vận hành hạ tầng sự kiện.",
    appliedTo: "Áp dụng cho các gói P1, P2, P4 khi có thỏa thuận hiện vật.",
    approver: "Trưởng Ban Tổ chức sự kiện.",
    status: "Thống nhất trong hợp đồng",
    scope: "Thẩm định trong quá trình đàm phán hợp đồng tài trợ.",
  },
  {
    id: "T06",
    topic: "Thời hạn chốt sơ đồ mặt bằng và thiết kế gian hàng",
    proposedWording: "Toàn bộ bản vẽ thiết kế 3D, quy cách kết cấu, sơ đồ bố trí gian hàng và kế hoạch phụ tải điện phải được gửi về Ban Tổ chức theo timeline được xác nhận để kiểm định an toàn kết cấu và PCCC trước khi tiến hành dàn dựng.",
    controlPurpose: "Đảm bảo an toàn lao động, phòng chống cháy nổ và thẩm mỹ không gian Quảng trường Đông Sơn.",
    appliedTo: "Các đối tác có bố trí gian hàng (P1, P2, P3, P4).",
    approver: "Ban Quản lý Cơ sở vật chất & Trưởng Nhóm Hậu cần.",
    status: "Chờ Ban Tổ chức xác nhận timeline mới",
    scope: "Khuôn viên Quảng trường Đông Sơn.",
  },
  {
    id: "T07",
    topic: "Duyệt nội dung, ấn phẩm truyền thông trước khi phát hành",
    proposedWording: "Tất cả các ấn phẩm truyền thông in ấn, nội dung bài viết PR, video TVC hoặc quà tặng có gắn logo/hình ảnh Trường Đại học Văn Lang phải được gửi duyệt và có văn bản xác nhận đồng ý từ Ban Tổ chức tối thiểu 03 ngày làm việc trước khi công bố.",
    controlPurpose: "Bảo vệ tính chuẩn mực của thương hiệu giáo dục và sự đồng bộ trong chiến dịch nhận diện.",
    appliedTo: "Tất cả các đối tác sử dụng hình ảnh sự kiện.",
    approver: "Phòng Truyền thông & Trung tâm Hỗ trợ Sinh viên VLU.",
    status: "Thực hiện theo quy định của Nhà trường",
    scope: "Toàn bộ các kênh truyền thông trực tuyến và ngoại tuyến.",
  },
  {
    id: "T08",
    topic: "Quy chuẩn vệ sinh an toàn thực phẩm đối với sampling",
    proposedWording: "Các đối tác ngành thực phẩm, đồ uống khi tổ chức dùng thử sản phẩm phải cung cấp đầy đủ giấy chứng nhận cơ sở đủ điều kiện An toàn thực phẩm, công bố tiêu chuẩn chất lượng sản phẩm còn hiệu lực và cam kết chịu trách nhiệm hoàn toàn về chất lượng sản phẩm cung cấp.",
    controlPurpose: "Bảo vệ sức khỏe và sự an toàn tuyệt đối cho hơn 7.000 sinh viên và đại biểu tham dự.",
    appliedTo: "Tất cả các đối tác ngành F&B và sampling thực phẩm.",
    approver: "Trạm Y tế VLU & Trưởng Ban Tổ chức.",
    status: "Thực hiện theo quy định của Nhà trường",
    scope: "Tại tất cả các trạm tiếp nước và booth ẩm thực.",
  },
  {
    id: "T09",
    topic: "Xác lập quyền độc quyền ngành hàng có điều kiện",
    proposedWording: "Quyền độc quyền ngành hàng chỉ có hiệu lực pháp lý khi được xác định rõ ràng mã ngành kinh doanh chính trong Phụ lục hợp đồng tài trợ và được Trưởng Ban Tổ chức phê duyệt bằng văn bản; không áp dụng độc quyền mặc nhiên cho các ngành hàng chưa đăng ký.",
    controlPurpose: "Tránh xung đột quyền lợi giữa các nhà tài trợ và tối ưu hóa cơ hội huy động nguồn lực.",
    appliedTo: "Đối tác Gói P1 và P2 theo phạm vi độc quyền ngành hàng được hai bên thống nhất.",
    approver: "Trưởng Ban Tổ chức & Ban Giám hiệu.",
    status: "Thống nhất trong hợp đồng",
    scope: "Quy định trong hợp đồng tài trợ chính thức.",
  },
  {
    id: "T10",
    topic: "Bảo vệ cảnh quan, vệ sinh môi trường và cơ sở vật chất",
    proposedWording: "Đối tác có trách nhiệm giữ gìn vệ sinh khu vực được giao, không đóng đinh, khoan đục hoặc làm biến dạng sàn gạch/tường/cây xanh của khuôn viên trường; tự thu gom và phân loại rác thải trước khi bàn giao mặt bằng hoàn trả cho Nhà trường.",
    controlPurpose: "Giữ gìn khuôn viên xanh - sạch - đẹp của trường đại học đạt chuẩn quốc tế.",
    appliedTo: "Tất cả các đơn vị thi công và nhân sự trực booth.",
    approver: "Ban Quản lý Cơ sở vật chất VLU.",
    status: "Thực hiện theo quy định của Nhà trường",
    scope: "Toàn bộ không gian sự kiện trước, trong và sau thi công.",
  },
  {
    id: "T11",
    topic: "Tiến độ chuyển kinh phí tài trợ và xuất hóa đơn tài chính",
    proposedWording: "Kinh phí tài trợ được chuyển khoản trực tiếp vào tài khoản ngân hàng chính thức của Trường Đại học Văn Lang theo tiến độ được thống nhất trong hợp đồng. Nhà trường cung cấp hóa đơn tài chính/phiếu thu hợp lệ.",
    controlPurpose: "Đảm bảo tính minh bạch tài chính, đúng quy định kế toán nhà nước và dòng tiền tổ chức.",
    appliedTo: "Tất cả các đối tác tài trợ hiện kim.",
    approver: "Phòng Quản lý Tài chính Trường Đại học Văn Lang.",
    status: "Thống nhất trong hợp đồng",
    scope: "Quy định trong điều khoản thanh toán hợp đồng.",
  },
  {
    id: "T12",
    topic: "Quyền sử dụng hình ảnh và tư liệu sau sự kiện",
    proposedWording: "Hai bên có quyền sử dụng hình ảnh, video clip ghi nhận tại sự kiện cho mục đích báo cáo nội bộ, lưu trữ truyền thống và truyền thông PR thương hiệu hợp pháp; không sử dụng hình ảnh cho các chiến dịch thương mại độc lập khác ngoài khuôn khổ ngày hội nếu chưa có sự đồng ý bằng văn bản.",
    controlPurpose: "Xác lập phạm vi bản quyền hình ảnh minh bạch và tôn trọng sở hữu trí tuệ của hai bên.",
    appliedTo: "Hai bên ký kết hợp đồng tài trợ.",
    approver: "Phòng Pháp chế & Truyền thông VLU.",
    status: "Thống nhất trong hợp đồng",
    scope: "Thời hạn 12 tháng kể từ ngày kết thúc sự kiện.",
  },
  {
    id: "T13",
    topic: "Thời hạn bàn giao báo cáo đo lường và hồ sơ nghiệm thu",
    proposedWording: "Ban Tổ chức hoàn thiện và bàn giao báo cáo nghiệm thu kèm tư liệu ảnh, clip và số liệu được ghi nhận thực tế cho đối tác theo thời hạn trong thỏa thuận hợp tác.",
    controlPurpose: "Cam kết chất lượng dịch vụ đối tác và cung cấp đầy đủ chứng từ quyết toán đúng hạn.",
    appliedTo: "Tất cả các đối tác P1, P2, P3, P4, P5.",
    approver: "Giám đốc Trung tâm Hỗ trợ Sinh viên VLU.",
    status: "Thống nhất trong hợp đồng",
    scope: "Hậu kỳ và thanh lý hợp đồng.",
  },
  {
    id: "T14",
    topic: "Xử lý trường hợp bất khả kháng và điều chỉnh lịch trình",
    proposedWording: "Trong trường hợp xảy ra thiên tai, dịch bệnh hoặc chỉ đạo bất khả kháng từ cơ quan nhà nước có thẩm quyền dẫn đến việc thay đổi thời gian hoặc hình thức tổ chức, hai bên sẽ thiện chí đàm phán phương án điều chỉnh quyền lợi tương đương mà không phát sinh bồi thường thiệt hại.",
    controlPurpose: "Phòng ngừa rủi ro pháp lý và duy trì quan hệ hợp tác đối tác bền vững.",
    appliedTo: "Toàn bộ hợp đồng hợp tác sự kiện.",
    approver: "Ban Giám hiệu Trường Đại học Văn Lang.",
    status: "Áp dụng theo phương án được duyệt",
    scope: "Điều khoản bất khả kháng trong hợp đồng mẫu.",
  },
  {
    id: "T15",
    topic: "Thẩm quyền phê duyệt và hiệu lực văn bản hợp tác",
    proposedWording: "Mọi cam kết, thỏa thuận hợp tác và quyền lợi tài trợ chỉ chính thức có giá trị pháp lý khi được thể hiện bằng văn bản Hợp đồng/Thỏa thuận tài trợ có chữ ký của đại diện có thẩm quyền và đóng dấu pháp nhân của Trường Đại học Văn Lang.",
    controlPurpose: "Bảo đảm tính pháp lý cao nhất, tránh các thỏa thuận miệng hoặc vượt thẩm quyền.",
    appliedTo: "Tất cả các giao dịch và cam kết tài trợ.",
    approver: "Hiệu trưởng / Người được ủy quyền theo quy chế VLU.",
    status: "Thống nhất trong hợp đồng",
    scope: "Quy trình ký kết văn bản hợp tác chính thức.",
  },
];

// ----------------------------------------------------
// 7. PARTNER INVITATION & 5 SPIRITS
// ----------------------------------------------------
export const partnerInvitationContent = {
  letter: {
    greeting: "Kính gửi Quý Doanh nghiệp, Tổ chức và Đối tác,",
    paragraphs: [
      "Hội Khai giảng Trường Đại học Văn Lang 2026 là dấu mốc chào đón hơn 7.000 Tân sinh viên Khóa 32 chính thức gia nhập cộng đồng Văn Lang, đồng thời là ngày hội kết nối sinh viên, phụ huynh, giảng viên, khách mời và các tổ chức đồng hành.",
      "Với thông điệp “Nơi bạn được nhìn thấy”, chương trình không chỉ là một nghi lễ khai giảng trang trọng, mà còn là không gian để mỗi tân sinh viên được chào đón, kết nối, trải nghiệm và cảm nhận mình là một phần của cộng đồng Văn Lang.",
      "Trường Đại học Văn Lang trân trọng mời Quý Đơn vị cùng đồng hành kiến tạo những trải nghiệm thiết thực và ý nghĩa cho thế hệ sinh viên mới. Mỗi sự đóng góp, dù dưới hình thức học bổng, kinh phí, sản phẩm, dịch vụ hay hoạt động trải nghiệm, đều góp phần tạo nên một khởi đầu trọn vẹn hơn cho các bạn sinh viên.",
      "Chúng tôi tin rằng Hội Khai giảng 2026 sẽ mở ra những kết nối tích cực và bền vững giữa Nhà trường, doanh nghiệp và thế hệ trẻ.",
      "Trân trọng kính mời Quý Đơn vị cùng Văn Lang kiến tạo một khởi đầu đáng nhớ cho Tân sinh viên Khóa 32.",
    ],
    lead: "Hội Khai giảng Trường Đại học Văn Lang 2026 là dấu mốc chào đón hơn 7.000 Tân sinh viên Khóa 32 chính thức gia nhập cộng đồng Văn Lang, đồng thời là ngày hội kết nối sinh viên, phụ huynh, giảng viên, khách mời và các tổ chức đồng hành.",
    closing: "Trân trọng kính mời Quý Đơn vị cùng Văn Lang kiến tạo một khởi đầu đáng nhớ cho Tân sinh viên Khóa 32.",
    signOff: "TRUNG TÂM HỖ TRỢ SINH VIÊN — TRƯỜNG ĐẠI HỌC VĂN LANG",
  },
  spirits: [
    {
      number: "01",
      title: "Đồng hành Thực chất",
      desc: "Mỗi khoản đầu tư được chuyển hóa thành trải nghiệm có giá trị, học bổng thiết thực và điểm chạm cảm xúc cho sinh viên.",
    },
    {
      number: "02",
      title: "Lấy Sinh viên làm Trung tâm",
      desc: "Mọi hoạt động tương tác thương hiệu đều hướng đến việc tôn vinh, kết nối và phát triển năng lực của thế hệ trẻ K32.",
    },
    {
      number: "03",
      title: "Minh bạch Đo lường",
      desc: "Ghi nhận quyền lợi rõ ràng, cung cấp báo cáo kết quả thực hiện và số liệu được ghi nhận thực tế sau sự kiện.",
    },
    {
      number: "04",
      title: "Chuẩn mực Giáo dục",
      desc: "Môi trường hợp tác văn minh, an toàn, tôn trọng quy chuẩn học thuật và nói không với bán hàng thương mại tại sự kiện.",
    },
    {
      number: "05",
      title: "Kết nối Dài hạn",
      desc: "Hội Khai giảng là bước khởi đầu cho hệ sinh thái hợp tác bền vững về tuyển dụng, nghiên cứu và học bổng quanh năm.",
    },
  ] as PartnershipSpirit[],
};
