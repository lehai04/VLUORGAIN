/**
 * ==============================================================================
 * PHÂN KHU: BẢNG MA TRẬN SO SÁNH 15 TIÊU CHÍ (PACKAGE MATRIX TABLE)
 * ------------------------------------------------------------------------------
 * Chức năng:
 * - Trình bày bảng so sánh ngang 15 tiêu chí đầu ra M01 - M15 giữa 5 gói (P1 - P5).
 * - Cột gói P2 được highlight đỏ nhạt tinh tế.
 * - Hỗ trợ thanh cuộn ngang (horizontal scroll) trên Mobile & Tablet.
 * - Click vào bất kỳ dòng nào (hoặc nhấn phím Enter/Space) để mở MatrixRowModal
 *   hiển thị phương thức triển khai, bằng chứng kiểm đếm và phụ lục hợp đồng.
 * ==============================================================================
 */

"use client";

import { useState } from "react";
import { MatrixRow, packageMatrixData } from "../../data/partnership";
import { MatrixRowModal } from "./PartnershipModals";
import { ArrowUpRight } from "lucide-react";

export default function PackageMatrixTable() {
  // Quản lý dòng tiêu chí đang được chọn mở modal
  const [selectedRow, setSelectedRow] = useState<MatrixRow | null>(null);

  return (
    <div className="ps-sub-section">
      {/* HEADER PHÂN KHU MA TRẬN */}
      <div className="ps-sub-header">
        <div>
          <span className="ps-sub-eyebrow">PACKAGE MATRIX</span>
          <h3 className="ps-sub-title">So sánh quyền lợi theo gói</h3>
          <p className="ps-sub-desc">
            Bảng ma trận 15 tiêu chí đối chiếu trực tiếp giữa 5 cấp độ hợp tác. Click vào bất kỳ dòng nào để xem chi tiết cách thực hiện, phụ lục và bằng chứng bàn giao.
          </p>
        </div>
      </div>

      {/* KHUNG CUỘN BẢNG MA TRẬN */}
      <div className="ps-table-wrapper">
        <table className="ps-matrix-table">
          <thead>
            <tr>
              <th className="th-id">MÃ</th>
              <th className="th-name">QUYỀN LỢI / ĐẦU RA</th>
              <th className="th-tier">P1 (300M)</th>
              <th className="th-tier featured-col">P2 (200M)</th>
              <th className="th-tier">P3 (100M)</th>
              <th className="th-tier">P4 (50M)</th>
              <th className="th-tier">P5 (30M)</th>
              <th className="th-action"></th>
            </tr>
          </thead>
          <tbody>
            {packageMatrixData.map((row) => (
              <tr
                key={row.id}
                onClick={() => setSelectedRow(row)}
                className="ps-matrix-row"
                tabIndex={0}
                role="button"
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedRow(row);
                  }
                }}
              >
                {/* Mã tiêu chí (M01 - M15) */}
                <td className="td-id">
                  <span className="ps-badge-id">{row.id}</span>
                </td>
                {/* Tên quyền lợi / tiêu chí */}
                <td className="td-name">
                  <strong>{row.name}</strong>
                </td>
                {/* Cột giá trị cho từng gói */}
                <td className="td-p1">{row.p1}</td>
                <td className="td-p2 featured-cell">{row.p2}</td>
                <td className="td-p3">{row.p3}</td>
                <td className="td-p4">{row.p4}</td>
                <td className="td-p5">{row.p5}</td>
                {/* Nút mũi tên mở modal */}
                <td className="td-action">
                  <button
                    type="button"
                    className="ps-table-btn"
                    aria-label={`Xem chi tiết tiêu chí ${row.name}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedRow(row);
                    }}
                  >
                    <ArrowUpRight size={14} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Gợi ý tương tác cho người dùng */}
      <div className="ps-table-footnote">
        <span>💡 <em>Mẹo:</em> Click vào dòng tiêu chí bất kỳ để xem quy định phụ lục hợp đồng và phương thức bàn giao chi tiết.</span>
      </div>

      {/* MODAL CHI TIẾT DÒNG MA TRẬN */}
      <MatrixRowModal
        row={selectedRow}
        isOpen={selectedRow !== null}
        onClose={() => setSelectedRow(null)}
      />
    </div>
  );
}

