import {SITE_MODE,packages,timeline} from "../data";

const partners=[
 ["VPBank","Ngân hàng","A","Nguyễn Thu Hiền","28/08","Chuẩn bị proposal"],
 ["Vinamilk","FMCG · Dinh dưỡng","A","Nguyễn Thu Hiền","28/08","Chuẩn bị tiếp cận"],
 ["Pocari Sweat","Nước uống","A","Nguyễn Thu Hiền","28/08","Chuẩn bị tiếp cận"],
 ["BE Group","Di chuyển · Công nghệ","B","Nguyễn Thu Hiền","31/08","Chuẩn bị tiếp cận"],
 ["Apollo Silicone","Vật liệu · Xây dựng","B","Nguyễn Thu Hiền","31/08","Chuẩn bị tiếp cận"],
];
const owners=["Giám đốc Trung tâm","Hiền · Nhóm đối tác","Trưởng BTC","Hiền · Hợp đồng","Ban Tổ chức","Nhóm Sự kiện","Ban Tổ chức","Hiền · Nhóm truyền thông"];

export default function Page(){
 if(SITE_MODE!=="internal") return <main className="locked"><h1>Không khả dụng</h1><p>Trang nội bộ đã tắt trong chế độ Partner/Public.</p><a href="/">Về trang chính</a></main>;
 return <main className="internal">
  <div className="internalTop"><span>DỰ THẢO · KHÔNG PHÁT HÀNH</span><a href="/">← Trang đối tác</a></div>
  <h1>Internal Review</h1>
  <p className="lede">Phương án đã cập nhật theo xác nhận của Trưởng Ban Tổ chức, trình Giám đốc Trung tâm Hỗ trợ Sinh viên phê duyệt để phát hành.</p>
  <section><h2>08 nội dung trình Giám đốc chốt</h2><div className="reviewGrid">{[
   "Quy mô: 10.000+ người, gồm 7.000+ tân sinh viên",
   "Hai mốc tổ chức: 26/09 và 27/09/2026",
   "Mục tiêu huy động tiền mặt tối thiểu 500 triệu",
   "04 gói: 300 / 200 / 100 / 50 triệu",
   "Ma trận quyền lợi phân cấp theo từng gói",
   "KPI truyền thông sau khi khóa kế hoạch kênh",
   "Nguyên tắc hiện vật tối đa 30% giá trị gói",
   "Sơ đồ và vị trí booth chốt ngày 15/09",
  ].map(x=><article key={x}><b>ĐÃ XÁC NHẬN BTC · TRÌNH DUYỆT</b><p>{x}</p></article>)}</div></section>
  <section><h2>Benchmark đã áp dụng vào phương án</h2><div className="reviewGrid">
   <article><b>UBC OKANAGAN · ORIENTATION</b><p>Tách booth cơ bản, booth vị trí lưu lượng cao và welcome bag insert thành các quyền lợi có giá trị riêng.</p><a href="https://students.ok.ubc.ca/wp-content/uploads/sites/90/2024/04/2025-Sponsorship-Package-Create.pdf">Nguồn chính thức ↗</a></article>
   <article><b>UNBC · ORIENTATION</b><p>Cho đối tác sở hữu từng hoạt động và kéo dài tương tác sang Career Centre, thay vì chỉ hiện diện trong một ngày.</p><a href="https://www.unbc.ca/sites/default/files/sections/orientation/orientationengagementpackage_0.pdf">Nguồn chính thức ↗</a></article>
   <article><b>UC BERKELEY · INTERNATIONAL OFFICE</b><p>Định giá theo từng điểm chạm: pre-arrival, email, website, exhibitor, workshop và social media.</p><a href="https://internationaloffice.berkeley.edu/sites/default/files/sponsor_program_ay24_25.pdf">Nguồn chính thức ↗</a></article>
   <article><b>UNIVERSITY OF NORTH TEXAS</b><p>Phân tách gói nhận diện dài hạn, resource fair, ấn phẩm và trải nghiệm trực tiếp để doanh nghiệp dễ chọn mục tiêu.</p><a href="https://studentaffairs.unt.edu/orientation-and-transition-programs/programs/orientation/sponsorship/sponsorship-levels.html">Nguồn chính thức ↗</a></article>
  </div></section>
  <section><h2>Gói tài trợ</h2>{packages.map(p=><div className="line" key={p.name}><b>{p.name}</b><span>{p.range}</span><em>Đã xác nhận BTC</em></div>)}</section>
  <section><h2>Tracker đối tác tiềm năng</h2><div className="tablewrap"><table><thead><tr><th>Đối tác</th><th>Ngành hàng</th><th>Ưu tiên</th><th>Người phụ trách</th><th>Deadline</th><th>Trạng thái</th></tr></thead><tbody>{partners.map((r,i)=><tr key={i}>{r.map(c=><td key={c}>{c}</td>)}</tr>)}</tbody></table></div></section>
  <section><h2>Timeline và người phụ trách</h2>{timeline.map((t,i)=><div className="line" key={t[0]}><b>{t[0]}</b><span>{t[1]}</span><em>{owners[i]}</em></div>)}</section>
  <section><h2>Nguyên tắc đã xác nhận</h2><div className="reviewGrid">{[
   "Không bán hàng tại sự kiện",
   "Không cung cấp dữ liệu sinh viên",
   "Không có quyền phát biểu sân khấu",
   "Học bổng chỉ tiếp nhận hiện kim, không nhận voucher",
   "Booth Kim cương/Vàng 3×6 m; Bạc/Đồng hành 3×3 m",
   "Báo cáo và nghiệm thu trong 30–45 ngày",
  ].map(x=><article key={x}><b>ĐÃ XÁC NHẬN BTC</b><p>{x}</p></article>)}</div></section>
  <section><h2>Rủi ro cần kiểm soát</h2><div className="reviewGrid">{[
   "KPI truyền thông chưa có số chính thức theo từng gói",
   "Hợp đồng dùng mẫu đối tác nhưng phải qua Văn Lang rà soát",
   "Tiếp nhận tiền qua tài khoản Trường và cần kế toán xác nhận hóa đơn",
   "Chỉ xác nhận độc quyền sau rà soát ngành hàng",
   "Sơ đồ booth phải khóa trước sản xuất",
   "Form chính thức chỉ mở sau khi có thông báo bảo mật",
  ].map(x=><article key={x}><b>PHƯƠNG ÁN KIỂM SOÁT</b><p>{x}</p></article>)}</div></section>
 </main>
}
