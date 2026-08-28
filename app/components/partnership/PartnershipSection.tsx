/**
 * ==============================================================================
 * PHÂN HỆ: 08 · PARTNERSHIP OPPORTUNITIES (CƠ HỘI ĐỒNG HÀNH)
 * ------------------------------------------------------------------------------
 * Mục đích: Component trung tâm điều phối toàn bộ phân hệ tài trợ của Hội Khai giảng,
 * bao gồm 8 phân khu chức năng:
 *   1. Header & 5 Thống kê tổng quan (Badges).
 *   2. Lưới 05 Gói hợp tác tài trợ (P1 - P5).
 *   3. Lưới 12 Tài sản đồng hành biểu tượng (Signature Assets A01 - A12).
 *   4. Thư viện 25 Quyền lợi chi tiết kèm bộ lọc & tìm kiếm (Benefit Library).
 *   5. Bảng ma trận đối chiếu 15 quyền lợi theo gói (Package Matrix).
 *   6. Accordion 15 Nguyên tắc hợp tác & Pháp chế (Partnership Terms).
 *   7. Thư ngỏ đối tác & 5 Tinh thần đồng hành cốt lõi (Partner Invitation).
 *   8. Khối kêu gọi thiết kế phương án tài trợ riêng & Modal Form (Custom CTA).
 * ==============================================================================
 */

"use client";

import { partnershipStats } from "../../data/partnership";
import PackagesGrid from "./PackagesGrid";
import SignatureAssetsGrid from "./SignatureAssetsGrid";
import BenefitLibrary from "./BenefitLibrary";
import PackageMatrixTable from "./PackageMatrixTable";
import PartnershipTermsAccordion from "./PartnershipTermsAccordion";
import PartnerInvitation from "./PartnerInvitation";
import CustomPartnershipCta from "./CustomPartnershipCta";

export default function PartnershipSection() {
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
              “Mỗi gói được thiết kế theo mức độ sở hữu trải nghiệm, phạm vi quyền lợi và khả năng đo lường. Mục tiêu là giúp thương hiệu xuất hiện đúng nơi, đúng cách và có câu chuyện để kể lại — thay vì chỉ khác nhau ở kích thước logo.”
            </p>
          </div>
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
            4. THƯ VIỆN 25 QUYỀN LỢI CHI TIẾT (SEARCH & FILTERS)
        ==================================================== */}
        <div className="reveal">
          <BenefitLibrary />
        </div>

        {/* ====================================================
            5. BẢNG MA TRẬN SO SÁNH 15 TIÊU CHÍ (MATRIX TABLE)
        ==================================================== */}
        <div className="reveal">
          <PackageMatrixTable />
        </div>

        {/* ====================================================
            6. ACCORDION 15 NGUYÊN TẮC HỢP TÁC & PHÁP CHẾ
        ==================================================== */}
        <div className="reveal">
          <PartnershipTermsAccordion />
        </div>

        {/* ====================================================
            7. LỜI NGỎ ĐỐI TÁC & 5 TINH THẦN ĐỒNG HÀNH CỐT LÕI
        ==================================================== */}
        <div className="reveal">
          <PartnerInvitation />
        </div>

        {/* ====================================================
            8. BANNER CTA & MODAL FORM ĐĂNG KÝ PHƯƠNG ÁN RIÊNG
        ==================================================== */}
        <div className="reveal">
          <CustomPartnershipCta />
        </div>
      </div>
    </section>
  );
}

