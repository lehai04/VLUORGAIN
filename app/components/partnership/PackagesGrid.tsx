/**
 * ==============================================================================
 * PHÂN KHU: 05 GÓI HỢP TÁC TÀI TRỢ (PACKAGES GRID)
 * ------------------------------------------------------------------------------
 * Chức năng:
 * - Hiển thị 5 cấp độ tài trợ P1 - P5 (300M, 200M, 100M, 50M, 30M).
 * - Giữ cách trình bày đồng nhất cho cả 5 gói, không ưu tiên riêng một gói nào.
 * - Nút "Xem đầy đủ quyền lợi" kích hoạt popup PackageDetailModal hiển thị toàn bộ 5 nhóm quyền lợi.
 * ==============================================================================
 */

"use client";

import { useState } from "react";
import { PackageDetail, packagesData } from "../../data/partnership";
import { PackageDetailModal } from "./PartnershipModals";
import { CheckCircle2, ArrowUpRight } from "lucide-react";

export default function PackagesGrid() {
  // State lưu gói đang được chọn để mở modal xem chi tiết
  const [selectedPkg, setSelectedPkg] = useState<PackageDetail | null>(null);

  return (
    <div className="ps-packages-container">
      {/* Lưới 5 cột hiển thị 5 gói hợp tác */}
      <div className="ps-packages-grid">
        {packagesData.map((pkg) => (
            <article
              key={pkg.id}
              className="ps-package-card"
            >
              {/* Hàng trên: Mã gói (P1-P5) & Số lượng suất tiếp nhận */}
              <div className="ps-pkg-top">
                <span className="ps-pkg-code">{pkg.id}</span>
                <span className="ps-pkg-slots">{pkg.slots}</span>
              </div>

              {/* Tên gói, mức đầu tư tài trợ và vai trò hợp tác */}
              <h3 className="ps-pkg-name">{pkg.name}</h3>
              <div className="ps-pkg-price">{pkg.price}</div>
              <p className="ps-pkg-role">{pkg.role}</p>

              <div className="ps-pkg-divider" aria-hidden="true" />

              {/* Danh sách 5 quyền lợi cốt lõi nổi bật nhất */}
              <div className="ps-pkg-highlights-label">ĐIỂM NỔI BẬT</div>
              <ul className="ps-pkg-highlights">
                {pkg.highlight.map((h, i) => (
                  <li key={i}>
                    <CheckCircle2
                      size={14}
                      className="text-navy"
                    />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              {/* Nút bấm kích hoạt mở Modal hiển thị trọn vẹn thông số gói */}
              <button
                type="button"
                className="ps-btn ps-btn-full ps-btn-outline"
                onClick={() => setSelectedPkg(pkg)}
              >
                <span>Xem đầy đủ quyền lợi</span>
                <ArrowUpRight size={14} />
              </button>
            </article>
        ))}
      </div>

      {/* Modal Popup hiển thị chi tiết 5 nhóm quyền lợi của gói được chọn */}
      <PackageDetailModal
        pkg={selectedPkg}
        isOpen={selectedPkg !== null}
        onClose={() => setSelectedPkg(null)}
      />
    </div>
  );
}
