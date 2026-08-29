/**
 * ==============================================================================
 * PHÂN HỆ: 08 · PARTNERSHIP OPPORTUNITIES (CƠ HỘI ĐỒNG HÀNH)
 * ------------------------------------------------------------------------------
 * Mục đích: Component trung tâm điều phối toàn bộ phân hệ tài trợ của Hội Khai giảng,
 * được thiết kế theo đúng định hướng:
 * "Trang chính thuyết phục trước; Hồ sơ PDF hoặc Popup làm nhiệm vụ giải thích chi tiết."
 * 
 * Bố cục phân hệ trên Landing Page:
 *   1. Header & 5 Thống kê tổng quan (Badges).
 *   2. Lưới 05 Gói hợp tác tài trợ (P1 - P5) kèm nút xem modal chi tiết.
 *   3. Lưới 06 Tài sản đồng hành biểu tượng (Signature Assets A01 - A12).
 *   4. Trung tâm tra cứu nhanh (Quick Hub) mở 25 Quyền lợi & Ma trận đối chiếu trong Popup.
 *   5. Nguyên tắc hợp tác rút gọn (4 cam kết cốt lõi) + trigger mở 15 điều khoản pháp chế.
 *   6. Thư ngỏ đối tác & 5 Tinh thần đồng hành cốt lõi (Partner Invitation).
 * ==============================================================================
 */

"use client";

import { useState } from "react";
import { Download, FileText, Sparkles, Layers, ShieldCheck, ArrowRight, CheckCircle2, Lock, FileCheck, Award } from "lucide-react";
import { partnershipStats } from "../../data/partnership";
import PackagesGrid from "./PackagesGrid";
import SignatureAssetsGrid from "./SignatureAssetsGrid";
import PartnerInvitation from "./PartnerInvitation";
import ProposalOverviewModal, { proposalPdfPath, ProposalTab } from "./ProposalOverviewModal";

export default function PartnershipSection() {
  // Điều khiển popup trung tâm hồ sơ và tab được kích hoạt
  const [isOverviewOpen, setIsOverviewOpen] = useState(false);
  const [activeModalTab, setActiveModalTab] = useState<ProposalTab>("overview");

  const handleOpenTab = (tab: ProposalTab) => {
    setActiveModalTab(tab);
    setIsOverviewOpen(true);
  };

  return (
    <section id="packages" className="ps-main-section">
      <div className="ps-container">
        {/* ====================================================
            1. HEADER SECTION & 5 STAT BADGES TỔNG QUAN
        ==================================================== */}
        <div className="ps-header reveal">
          {/* Tiêu đề chính bên trái */}
          <div className="ps-header-left">
            <span className="ps-eyebrow">08 · PARTNERSHIP OPPORTUNITIES</span>
            <h2 className="ps-title">
              Chọn mức độ<br />đồng hành phù hợp
            </h2>
          </div>

          {/* Đoạn trích dẫn triết lý hợp tác của Trưởng BTC */}
          <div className="ps-header-right">
            <p className="ps-description">
              Mỗi gói đồng hành được xây dựng theo phạm vi hiện diện, mức độ tham gia trải nghiệm và khả năng ghi nhận kết quả. Các quyền lợi cụ thể sẽ được hai bên thống nhất trên cơ sở nhu cầu của đối tác, điều kiện tổ chức thực tế và phê duyệt của Nhà trường.
            </p>
          </div>
        </div>

        {/* Hai cách đọc cùng một nội dung: popup nhanh trên web và PDF để tải về. */}
        <div className="ps-proposal-toolbar reveal" aria-label="Tùy chọn xem hồ sơ đồng hành">
          <button
            type="button"
            className="ps-btn ps-btn-primary"
            onClick={() => handleOpenTab("overview")}
          >
            <FileText size={16} aria-hidden="true" />
            <span>Xem hồ sơ chi tiết (Popup)</span>
          </button>
          <a className="ps-btn ps-btn-outline" href={proposalPdfPath} download>
            <Download size={16} aria-hidden="true" />
            <span>Tải hồ sơ PDF ({partnershipStats[0].value} gói · {partnershipStats[1].value} quyền lợi)</span>
          </a>
        </div>

        {/* 5 Thẻ tóm tắt thông số nhanh (05 gói, 25 quyền lợi, 12 tài sản, 15 ma trận, 15 điều khoản) */}
        <div className="ps-badges-row reveal">
          {partnershipStats.map((stat, i) => (
            <div key={i} className="ps-stat-badge">
              <span className="ps-stat-val">{stat.value}</span>
              <div className="ps-stat-meta">
                <strong>{stat.label}</strong>
                <small>{stat.desc}</small>
              </div>
            </div>
          ))}
        </div>

        {/* ====================================================
            2. KHU VỰC 05 GÓI HỢP TÁC (P1 - P5)
        ==================================================== */}
        <div className="reveal">
          <PackagesGrid />
        </div>

        {/* ====================================================
            3. KHU VỰC 12 SIGNATURE ASSETS (TÀI SẢN BIỂU TƯỢNG)
        ==================================================== */}
        <div className="reveal">
          <SignatureAssetsGrid />
        </div>

        {/* ====================================================
            4. TRUNG TÂM TRA CỨU CHI TIẾT (QUICK ACTION HUB)
            Thay thế việc đổ tràn lan bảng dữ liệu bằng các Thẻ tra cứu Popup chuyên sâu
        ==================================================== */}
        <div className="ps-hub-action-section reveal">
          <div className="ps-sub-header">
            <div>
              <span className="ps-sub-eyebrow">DETAILED APPENDIX & REFERENCE</span>
              <h3 className="ps-sub-title">Tra cứu phụ lục quyền lợi & Ma trận chi tiết</h3>
              <p className="ps-sub-desc">
                Toàn bộ dữ liệu chuyên sâu về quyền lợi, ma trận đối chiếu và điều khoản pháp lý được mở trực tiếp qua Popup hoặc tải về trong file PDF.
              </p>
            </div>
          </div>

          <div className="ps-hub-cards-grid">
            {/* Card 1: 25 Quyền lợi nền tảng */}
            <article className="ps-hub-action-card">
              <div className="ps-hub-card-icon red">
                <Sparkles size={24} />
              </div>
              <div className="ps-hub-card-content">
                <span className="ps-hub-card-tag">R01 – R25</span>
                <h4>Thư viện 25 Quyền lợi nền tảng</h4>
                <p>Tra cứu đầy đủ 25 quyền lợi phân theo 5 nhóm nghiệp vụ kèm ô tìm kiếm, bộ lọc và quy chuẩn bàn giao nghiệm thu.</p>
              </div>
              <button
                type="button"
                className="ps-hub-card-btn"
                onClick={() => handleOpenTab("benefits")}
              >
                <span>Tra cứu 25 quyền lợi</span>
                <ArrowRight size={16} />
              </button>
            </article>

            {/* Card 2: Bảng Ma trận 15 tiêu chí */}
            <article className="ps-hub-action-card">
              <div className="ps-hub-card-icon navy">
                <Layers size={24} />
              </div>
              <div className="ps-hub-card-content">
                <span className="ps-hub-card-tag">M01 – M15</span>
                <h4>Bảng Ma trận so sánh 15 tiêu chí</h4>
                <p>Đối chiếu trực tiếp từng tiêu chí đầu ra giữa 5 gói (P1 đến P5) kèm phụ lục phân bổ và phương thức triển khai.</p>
              </div>
              <button
                type="button"
                className="ps-hub-card-btn"
                onClick={() => handleOpenTab("matrix")}
              >
                <span>Mở bảng ma trận so sánh</span>
                <ArrowRight size={16} />
              </button>
            </article>

            {/* Card 3: 15 Nguyên tắc hợp tác & Pháp chế */}
            <article className="ps-hub-action-card">
              <div className="ps-hub-card-icon gold">
                <ShieldCheck size={24} />
              </div>
              <div className="ps-hub-card-content">
                <span className="ps-hub-card-tag">T01 – T15</span>
                <h4>15 Nguyên tắc hợp tác & Pháp chế</h4>
                <p>Quy chuẩn kiểm soát chất lượng, đối tượng, thẩm quyền phê duyệt và các quy định pháp lý bắt buộc của Nhà trường.</p>
              </div>
              <button
                type="button"
                className="ps-hub-card-btn"
                onClick={() => handleOpenTab("terms")}
              >
                <span>Xem 15 điều khoản pháp lý</span>
                <ArrowRight size={16} />
              </button>
            </article>
          </div>
        </div>

        {/* ====================================================
            5. NGUYÊN TẮC HỢP TÁC RÚT GỌN (CORE PRINCIPLES)
            Trình bày 4 cam kết cốt lõi của Trường trên landing page
        ==================================================== */}
        <div className="ps-core-principles-section reveal">
          <div className="ps-principles-header">
            <span className="ps-sub-eyebrow">PARTNERSHIP INTEGRITY</span>
            <h3 className="ps-sub-title">Nguyên tắc hợp tác cốt lõi</h3>
            <p className="ps-sub-desc">
              Văn Lang cam kết môi trường ngày hội lành mạnh, an toàn và tối đa hóa giá trị thiết thực cho cả sinh viên và thương hiệu đồng hành.
            </p>
          </div>

          <div className="ps-principles-grid">
            <div className="ps-principle-card">
              <div className="ps-principle-icon">
                <Lock size={22} />
              </div>
              <div>
                <h4>Không thương mại hóa quá mức</h4>
                <p>Mọi hoạt động tại gian hàng và sân khấu tập trung vào trải nghiệm, tương tác ý nghĩa, không bán hàng ép buộc hoặc gây phản cảm.</p>
              </div>
            </div>

            <div className="ps-principle-card">
              <div className="ps-principle-icon">
                <ShieldCheck size={22} />
              </div>
              <div>
                <h4>Bảo vệ dữ liệu sinh viên</h4>
                <p>Nhà trường không cung cấp dữ liệu cá nhân sinh viên cho doanh nghiệp; mọi tương tác thu thập thông tin phải qua cơ chế Opt-in tự nguyện từ sinh viên.</p>
              </div>
            </div>

            <div className="ps-principle-card">
              <div className="ps-principle-icon">
                <Award size={22} />
              </div>
              <div>
                <h4>Học bổng & Hỗ trợ bằng hiện kim</h4>
                <p>Các gói tài trợ học bổng được chuyển giao bằng hiện kim trực tiếp vào quỹ hỗ trợ sinh viên K32 có hoàn cảnh khó khăn hoặc tài năng đặc biệt.</p>
              </div>
            </div>

            <div className="ps-principle-card">
              <div className="ps-principle-icon">
                <FileCheck size={22} />
              </div>
              <div>
                <h4>Phê duyệt & Nghiệm thu minh bạch</h4>
                <p>Mọi quyền lợi chỉ có hiệu lực sau khi được cấp có thẩm quyền của Nhà trường phê duyệt trong hợp đồng chính thức và có biên bản nghiệm thu bằng chứng.</p>
              </div>
            </div>
          </div>

          <div className="ps-principles-footer">
            <button
              type="button"
              className="ps-btn ps-btn-outline"
              onClick={() => handleOpenTab("terms")}
            >
              <ShieldCheck size={16} />
              <span>Xem đầy đủ 15 điều khoản pháp chế (T01–T15)</span>
            </button>
          </div>
        </div>

        {/* ====================================================
            6. LỜI NGỎ ĐỐI TÁC & 5 TINH THẦN ĐỒNG HÀNH CỐT LÕI
        ==================================================== */}
        <div className="reveal">
          <PartnerInvitation />
        </div>
      </div>

      {/* Popup Trung tâm hồ sơ đa năng (hỗ trợ mở trực tiếp theo Tab tương ứng) */}
      <ProposalOverviewModal
        isOpen={isOverviewOpen}
        onClose={() => setIsOverviewOpen(false)}
        initialTab={activeModalTab}
      />
    </section>
  );
}
