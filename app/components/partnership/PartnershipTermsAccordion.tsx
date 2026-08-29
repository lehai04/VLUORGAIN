/**
 * ==============================================================================
 * PHÂN KHU: 15 NGUYÊN TẮC HỢP TÁC & PHÁP CHẾ (TERMS ACCORDION)
 * ------------------------------------------------------------------------------
 * Chức năng:
 * - Trình bày 15 điều khoản pháp lý và nguyên tắc hợp tác T01 - T15 dạng Accordion.
 * - Hỗ trợ mở/đóng từng mục độc lập hoặc nút "Mở tất cả" / "Đóng tất cả".
 * - Hiển thị câu chữ đề xuất sử dụng trong Hợp đồng chính thức, mục đích kiểm soát,
 *   đầu mối phê duyệt và phạm vi hiệu lực.
 * ==============================================================================
 */

"use client";

import { useState } from "react";
import { partnershipTermsData } from "../../data/partnership";
import { ChevronDown } from "lucide-react";

export default function PartnershipTermsAccordion() {
  // Quản lý danh sách ID của các điều khoản đang được mở (mặc định đóng hết)
  const [openIds, setOpenIds] = useState<string[]>([]);

  // Đóng/mở 1 điều khoản cụ thể
  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Mở toàn bộ 15 điều khoản
  const expandAll = () => {
    setOpenIds(partnershipTermsData.map((t) => t.id));
  };

  // Đóng tất cả các điều khoản
  const collapseAll = () => {
    setOpenIds([]);
  };

  return (
    <div className="ps-sub-section">
      {/* HEADER PHÂN KHU ĐIỀU KHOẢN & NÚT MỞ/ĐÓNG TẤT CẢ */}
      <div className="ps-sub-header">
        <div>
          <span className="ps-sub-eyebrow">NGUYÊN TẮC HỢP TÁC</span>
          <h3 className="ps-sub-title">Nguyên tắc hợp tác</h3>
          <p className="ps-sub-desc">
            Các nguyên tắc dưới đây là cơ sở để xây dựng phương án hợp tác. Nội dung áp dụng chính thức sẽ được thể hiện trong thỏa thuận, hợp đồng hoặc văn bản được Nhà trường phê duyệt.
          </p>
        </div>

        {/* Nút bấm chuyển đổi Mở tất cả / Đóng tất cả */}
        <div className="ps-accordion-controls">
          {openIds.length === partnershipTermsData.length ? (
            <button
              type="button"
              className="ps-btn ps-btn-ghost ps-btn-sm"
              onClick={collapseAll}
            >
              Đóng tất cả
            </button>
          ) : (
            <button
              type="button"
              className="ps-btn ps-btn-ghost ps-btn-sm"
              onClick={expandAll}
            >
              Mở tất cả ({partnershipTermsData.length})
            </button>
          )}
        </div>
      </div>

      {/* DANH SÁCH 15 ACCORDION ITEMS */}
      <div className="ps-accordion-list">
        {partnershipTermsData.map((term) => {
          const isOpen = openIds.includes(term.id);

          return (
            <div
              key={term.id}
              className={`ps-accordion-item ${isOpen ? "open" : ""}`}
            >
              {/* Header của từng điều khoản (Mã Txx + Chủ đề + Trạng thái) */}
              <button
                type="button"
                className="ps-accordion-header"
                onClick={() => toggleItem(term.id)}
                aria-expanded={isOpen}
                aria-controls={`term-content-${term.id}`}
              >
                <div className="ps-accordion-header-copy">
                  <span className="ps-term-id">{term.id}</span>
                  <span className="ps-term-topic">{term.topic}</span>
                </div>
                <div className="ps-accordion-header-right">
                  <span className="ps-term-status-badge">{term.status}</span>
                  <ChevronDown
                    size={18}
                    className={`ps-accordion-chevron ${isOpen ? "rotate-180" : ""}`}
                  />
                </div>
              </button>

              {/* Nội dung chi tiết mở ra khi click */}
              {isOpen && (
                <div
                  id={`term-content-${term.id}`}
                  className="ps-accordion-body"
                >
                  {/* Câu chữ điều khoản đề xuất cho Hợp đồng */}
                  <div className="ps-term-quote">
                    <span className="ps-field-label">Câu chữ đề xuất sử dụng trong Hợp đồng:</span>
                    <p className="ps-term-wording">“{term.proposedWording}”</p>
                  </div>

                  {/* Lưới thông tin quản trị: Mục đích, Đối tượng, Phê duyệt, Phạm vi */}
                  <div className="ps-term-meta-grid">
                    <div className="ps-term-meta-item">
                      <small>Mục đích kiểm soát:</small>
                      <p>{term.controlPurpose}</p>
                    </div>

                    <div className="ps-term-meta-item">
                      <small>Đối tượng áp dụng:</small>
                      <p>{term.appliedTo}</p>
                    </div>

                    <div className="ps-term-meta-item">
                      <small>Đầu mối phê duyệt:</small>
                      <p>{term.approver}</p>
                    </div>

                    <div className="ps-term-meta-item">
                      <small>Phạm vi áp dụng:</small>
                      <p>{term.scope}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
