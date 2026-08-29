/**
 * ==============================================================================
 * DỮ LIỆU: 07 · HẠNG MỤC ƯU TIÊN TIẾP NHẬN TÀI TRỢ
 * ------------------------------------------------------------------------------
 * Chứa danh mục 6 hạng mục tiếp nhận nguồn lực trọng điểm từ Quý Doanh nghiệp:
 * 01. Học bổng (Hiện kim dành cho tân sinh viên)
 * 02. Nước uống & ẩm thực (Sản phẩm phục vụ ngày hội)
 * 03. Không gian check-in (Photobooth, cổng chào)
 * 04. Hạ tầng sự kiện (LED, âm thanh, ánh sáng, nhà bạt)
 * 05. Gian hàng trải nghiệm (Kích hoạt thương hiệu văn minh)
 * 06. Quà tặng K32 (Sản phẩm thiết thực đón tân sinh viên)
 * ==============================================================================
 */

export interface PriorityItem {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

export const priorityItems: PriorityItem[] = [
  {
    id: "01",
    title: "Học bổng",
    description: "Học bổng hiện kim dành cho tân sinh viên/sinh viên, không nhận voucher thay thế.",
    image: "/images/priority/01-hoc-bong.jpg",
    alt: "Sinh viên Trường Đại học Văn Lang học tập và nghiên cứu",
  },
  {
    id: "02",
    title: "Nước uống & ẩm thực",
    description: "Sản phẩm phục vụ chương trình, đáp ứng yêu cầu an toàn và được BTC duyệt.",
    image: "/images/priority/02-am-thuc.jpg",
    alt: "Nước uống và ẩm thực phục vụ sự kiện Hội Khai giảng",
  },
  {
    id: "03",
    title: "Không gian check-in",
    description: "Photobooth, cổng chào và điểm chạm hình ảnh dành cho tân sinh viên.",
    image: "/images/priority/03-checkin.jpg",
    alt: "Không gian check-in và photobooth chào đón tân sinh viên K32",
  },
  {
    id: "04",
    title: "Hạ tầng sự kiện",
    description: "Âm thanh, ánh sáng, màn hình LED, nhà bạt và các hạng mục hậu cần.",
    image: "/images/priority/04-ha-tang.jpg",
    alt: "Hạ tầng sân khấu, màn hình LED và ánh sáng sự kiện",
  },
  {
    id: "05",
    title: "Gian hàng trải nghiệm",
    description: "Hoạt động tương tác thương hiệu phù hợp với môi trường giáo dục.",
    image: "/images/priority/05-gian-hang.jpg",
    alt: "Gian hàng trải nghiệm và hoạt động tương tác sinh viên",
  },
  {
    id: "06",
    title: "Quà tặng K32",
    description: "Sản phẩm thiết thực dành cho tân sinh viên trong ngày đầu hành trình.",
    image: "/images/priority/06-qua-tang.jpg",
    alt: "Bộ quà tặng thiết thực dành cho tân sinh viên Khóa 32",
  },
];

