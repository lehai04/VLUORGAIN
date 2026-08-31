/**
 * ==============================================================================
 * ROUTE NỘI BỘ: /internal-review
 * ------------------------------------------------------------------------------
 * Tổng hợp nội dung chờ BTC xác nhận, benchmark, tracker đối tác, timeline,
 * nguyên tắc và rủi ro. Route đầy đủ chỉ mở khi SITE_MODE = "internal".
 * ==============================================================================
 */

import Link from "next/link";
import { SITE_MODE, packages, timeline } from "../data";

// Mỗi dòng: đối tác, ngành, ưu tiên, người phụ trách, deadline và trạng thái.
const partners = [
  ["VPBank", "Ngân hàng", "A", "Nguyễn Thu Hiền", "Chờ cập nhật", "Chuẩn bị proposal"],
  ["Vinamilk", "FMCG · Dinh dưỡng", "A", "Nguyễn Thu Hiền", "Chờ cập nhật", "Chuẩn bị tiếp cận"],
  ["Pocari Sweat", "Nước uống", "A", "Nguyễn Thu Hiền", "Chờ cập nhật", "Chuẩn bị tiếp cận"],
  ["BE Group", "Di chuyển · Công nghệ", "B", "Nguyễn Thu Hiền", "Chờ cập nhật", "Chuẩn bị tiếp cận"],
  ["Apollo Silicone", "Vật liệu · Xây dựng", "B", "Nguyễn Thu Hiền", "Chờ cập nhật", "Chuẩn bị tiếp cận"],
];

// Người phụ trách tương ứng với từng phần tử trong mảng `timeline`.
const owners = [
  "Giám đốc Trung tâm",
  "Hiền · Nhóm đối tác",
  "Trưởng BTC",
  "Hiền · Hợp đồng",
  "Ban Tổ chức",
  "Nhóm Sự kiện",
  "Ban Tổ chức",
  "Hiền · Nhóm truyền thông",
];

// Những vấn đề cần cấp quản lý xác nhận trước khi phát hành proposal.
const approvalItems = [
  "Quy mô: 7.000+ người tham dự",
  "Ngày tổ chức dự kiến 26–27/09/2026; thời gian và địa điểm từng ngày chờ xác nhận",
  "Mục tiêu vận động từ 500 triệu đồng; cơ cấu hiện kim, hiện vật và dịch vụ chờ xác nhận",
  "05 gói P1–P5: 300 / 200 / 100 / 50 / 30 triệu đồng",
  "Ma trận quyền lợi phân cấp theo từng gói",
  "KPI truyền thông sau khi khóa kế hoạch kênh",
  "Nguyên tắc hiện vật tối đa 30% giá trị gói chờ xác nhận",
  "Sơ đồ, vị trí booth và thời hạn chốt chờ timeline mới",
];

// Các giới hạn đang được dùng làm hàng rào cho phương án hợp tác.
const confirmedPrinciples = [
  "Không bán hàng tại sự kiện",
  "Không cung cấp dữ liệu sinh viên",
  "Không có quyền phát biểu sân khấu",
  "Học bổng chỉ tiếp nhận hiện kim, không nhận voucher",
  "Kích thước booth áp dụng theo từng gói P1–P5 và sơ đồ mặt bằng được phê duyệt",
  "Báo cáo và nghiệm thu theo thời hạn trong thỏa thuận hợp tác",
];

// Các rủi ro phải được giải quyết hoặc ghi rõ điều kiện trước khi ký kết.
const risks = [
  "KPI truyền thông chưa có số chính thức theo từng gói",
  "Hợp đồng dùng mẫu đối tác nhưng phải qua Văn Lang rà soát",
  "Tiếp nhận tiền qua tài khoản Trường và cần kế toán xác nhận hóa đơn",
  "Chỉ xác nhận độc quyền sau rà soát ngành hàng",
  "Sơ đồ booth phải khóa trước sản xuất",
  "Form chính thức chỉ mở sau khi có thông báo bảo mật",
];

export default function Page() {
  // Không để nội dung quản trị xuất hiện khi website đã chuyển sang public.
  if (SITE_MODE !== "internal") {
    return (
      <main className="locked">
        <h1>Không khả dụng</h1>
        <p>Trang nội bộ đã tắt trong chế độ Partner/Public.</p>
        <Link href="/">Về trang chính</Link>
      </main>
    );
  }

  return (
    <main className="internal">
      {/* 1. Thanh cảnh báo tài liệu nội bộ và lối quay về landing page. */}
      <div className="internalTop">
        <span>DỰ THẢO · KHÔNG PHÁT HÀNH</span>
        <Link href="/">← Trang đối tác</Link>
      </div>

      {/* 2. Mở đầu: giải thích trạng thái phê duyệt hiện tại. */}
      <h1>Internal Review</h1>
      <p className="lede">
        Phương án dự thảo đang chờ Ban Tổ chức xác nhận trước khi trình Giám đốc
        Trung tâm Hỗ trợ Sinh viên phê duyệt để phát hành.
      </p>

      {/* 3. Tám nội dung cần cấp quản lý chốt. */}
      <section>
        <h2>08 nội dung trình Giám đốc chốt</h2>
        <div className="reviewGrid">
          {approvalItems.map((item) => (
            <article key={item}>
              <b>CHỜ BTC XÁC NHẬN · TRÌNH DUYỆT</b>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      {/* 4. Nguồn benchmark đã tham khảo khi xây dựng các nhóm quyền lợi. */}
      <section>
        <h2>Benchmark đã áp dụng vào phương án</h2>
        <div className="reviewGrid">
          <article>
            <b>UBC OKANAGAN · ORIENTATION</b>
            <p>Tách booth cơ bản, booth vị trí lưu lượng cao và welcome bag insert thành các quyền lợi có giá trị riêng.</p>
            <a href="https://students.ok.ubc.ca/wp-content/uploads/sites/90/2024/04/2025-Sponsorship-Package-Create.pdf">Nguồn chính thức ↗</a>
          </article>
          <article>
            <b>UNBC · ORIENTATION</b>
            <p>Cho đối tác sở hữu từng hoạt động và kéo dài tương tác sang Career Centre, thay vì chỉ hiện diện trong một ngày.</p>
            <a href="https://www.unbc.ca/sites/default/files/sections/orientation/orientationengagementpackage_0.pdf">Nguồn chính thức ↗</a>
          </article>
          <article>
            <b>UC BERKELEY · INTERNATIONAL OFFICE</b>
            <p>Định giá theo từng điểm chạm: pre-arrival, email, website, exhibitor, workshop và social media.</p>
            <a href="https://internationaloffice.berkeley.edu/sites/default/files/sponsor_program_ay24_25.pdf">Nguồn chính thức ↗</a>
          </article>
          <article>
            <b>UNIVERSITY OF NORTH TEXAS</b>
            <p>Phân tách gói nhận diện dài hạn, resource fair, ấn phẩm và trải nghiệm trực tiếp để doanh nghiệp dễ chọn mục tiêu.</p>
            <a href="https://studentaffairs.unt.edu/orientation-and-transition-programs/programs/orientation/sponsorship/sponsorship-levels.html">Nguồn chính thức ↗</a>
          </article>
        </div>
      </section>

      {/* 5. Tóm tắt các gói, đọc từ cùng nguồn dữ liệu với landing page. */}
      <section>
        <h2>Gói đồng hành</h2>
        {packages.map((item) => (
          <div className="line" key={item.name}>
            <b>{item.name}</b>
            <span>{item.range}</span>
            <em>Chờ BTC xác nhận</em>
          </div>
        ))}
      </section>

      {/* 6. Tracker công việc tiếp cận các đối tác tiềm năng. */}
      <section>
        <h2>Tracker đối tác tiềm năng</h2>
        <div className="tablewrap">
          <table>
            <thead>
              <tr>
                <th>Đối tác</th><th>Ngành hàng</th><th>Ưu tiên</th>
                <th>Người phụ trách</th><th>Deadline</th><th>Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              {partners.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={`${rowIndex}-${cellIndex}`}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 7. Ghép mỗi mốc timeline với người phụ trách ở cùng vị trí mảng. */}
      <section>
        <h2>Timeline và người phụ trách</h2>
        {timeline.map((item, index) => (
          <div className="line" key={item[0]}>
            <b>{item[0]}</b>
            <span>{item[1]}</span>
            <em>{owners[index]}</em>
          </div>
        ))}
      </section>

      {/* 8. Các nguyên tắc giới hạn phạm vi quyền lợi đối tác. */}
      <section>
        <h2>Nguyên tắc đã xác nhận</h2>
        <div className="reviewGrid">
          {confirmedPrinciples.map((item) => (
            <article key={item}>
              <b>CHỜ BTC XÁC NHẬN</b>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      {/* 9. Rủi ro cần kiểm soát trước khi phát hành và ký kết. */}
      <section>
        <h2>Rủi ro cần kiểm soát</h2>
        <div className="reviewGrid">
          {risks.map((item) => (
            <article key={item}>
              <b>PHƯƠNG ÁN KIỂM SOÁT</b>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
