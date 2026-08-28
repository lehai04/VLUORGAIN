/**
 * ==============================================================================
 * PHÂN KHU: KÊU GỌI PHƯƠNG ÁN ĐỒNG HÀNH RIÊNG (CUSTOM PARTNERSHIP CTA)
 * ------------------------------------------------------------------------------
 * Chức năng:
 * - Khối Banner CTA ở cuối Section 08 dành cho các doanh nghiệp có nhu cầu đặc thù
 *   (Học bổng, Hiện vật, Tuyển dụng, Branded Experience, ESG...).
 * - Nút "Trao đổi phương án riêng" mở CustomPartnershipModal Form để tiếp nhận thông tin.
 * ==============================================================================
 */

"use client";

import { useState } from "react";
import { CustomPartnershipModal } from "./PartnershipModals";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CustomPartnershipCta() {
  // Quản lý trạng thái mở Form Modal tùy biến phương án
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="ps-custom-cta-container">
      {/* Khung Banner màu hồng nhạt viền đỏ Văn Lang */}
      <div className="ps-custom-cta-card">
        <div className="ps-custom-cta-copy">
          <span className="ps-custom-cta-eyebrow">
            <Sparkles size={13} />
            <span>CUSTOM PARTNERSHIP</span>
          </span>
          <h3 className="ps-custom-cta-title">
            Không cần giới hạn trong một gói có sẵn.
          </h3>
          <p className="ps-custom-cta-sub">
            Học bổng · Hiện vật · Branded Experience · Tuyển dụng · Nội dung · ESG
          </p>
        </div>

        {/* Nút bấm mở Modal Form */}
        <div className="ps-custom-cta-action">
          <button
            type="button"
            className="ps-btn ps-btn-navy ps-btn-lg"
            onClick={() => setIsModalOpen(true)}
          >
            <span>Trao đổi phương án riêng</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* FORM MODAL TIẾP NHẬN PHƯƠNG ÁN RIÊNG */}
      <CustomPartnershipModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

