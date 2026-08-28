/**
 * ==============================================================================
 * PHÂN KHU: 12 TÀI SẢN ĐỒNG HÀNH BIỂU TƯỢNG (SIGNATURE ASSETS GRID)
 * ------------------------------------------------------------------------------
 * Chức năng:
 * - Hiển thị 12 nền tảng trải nghiệm độc quyền dành cho đối tác (A01 - A12).
 * - Phân loại theo cấp độ: Cấp A (Độc quyền/Trọng điểm), Cấp B, Cấp C.
 * - Hỗ trợ lọc theo Tabs (Tất cả, Cấp A, Cấp B, Cấp C).
 * - Giới hạn hiển thị mặc định 6 items kèm nút toggle "Xem tất cả" / "Thu gọn".
 * - Nút "Xem chi tiết" mở AssetDetailModal với thông số KPIs & Deliverables.
 * ==============================================================================
 */

"use client";

import { useState } from "react";
import { SignatureAsset, signatureAssetsData } from "../../data/partnership";
import { AssetDetailModal } from "./PartnershipModals";
import { ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";

export default function SignatureAssetsGrid() {
  // 1. Quản lý trạng thái bộ lọc Tab cấp độ (ALL, A, B, C)
  const [filterTier, setFilterTier] = useState<"ALL" | "A" | "B" | "C">("ALL");
  // 2. Quản lý trạng thái mở rộng/thu gọn danh sách
  const [showAll, setShowAll] = useState(false);
  // 3. Quản lý asset đang mở Modal chi tiết
  const [selectedAsset, setSelectedAsset] = useState<SignatureAsset | null>(null);

  // Lọc danh sách tài sản theo cấp độ đang chọn
  const filteredAssets = signatureAssetsData.filter((item) => {
    if (filterTier === "ALL") return true;
    return item.tier === filterTier;
  });

  // Giới hạn hiển thị: nếu chưa bấm xem thêm thì lấy tối đa 6 items
  const displayedAssets = showAll ? filteredAssets : filteredAssets.slice(0, 6);

  return (
    <div className="ps-sub-section">
      {/* HEADER PHÂN KHU & THANH TABS BỘ LỌC CẤP ĐỘ */}
      <div className="ps-sub-header">
        <div>
          <span className="ps-sub-eyebrow">SIGNATURE ASSETS</span>
          <h3 className="ps-sub-title">Tài sản đồng hành nổi bật</h3>
          <p className="ps-sub-desc">
            12 nền tảng trải nghiệm biểu tượng được thiết kế riêng cho Convocation Day 2026, giúp thương hiệu sở hữu không gian và tạo câu chuyện thực thụ.
          </p>
        </div>

        {/* Thanh chuyển Tab lọc theo Cấp độ A / B / C */}
        <div className="ps-filter-tabs" role="tablist" aria-label="Lọc theo cấp độ Asset">
          <button
            type="button"
            className={`ps-filter-tab ${filterTier === "ALL" ? "active" : ""}`}
            onClick={() => {
              setFilterTier("ALL");
              setShowAll(false);
            }}
          >
            Tất cả ({signatureAssetsData.length})
          </button>
          <button
            type="button"
            className={`ps-filter-tab ${filterTier === "A" ? "active" : ""}`}
            onClick={() => {
              setFilterTier("A");
              setShowAll(false);
            }}
          >
            Cấp A
          </button>
          <button
            type="button"
            className={`ps-filter-tab ${filterTier === "B" ? "active" : ""}`}
            onClick={() => {
              setFilterTier("B");
              setShowAll(false);
            }}
          >
            Cấp B
          </button>
          <button
            type="button"
            className={`ps-filter-tab ${filterTier === "C" ? "active" : ""}`}
            onClick={() => {
              setFilterTier("C");
              setShowAll(false);
            }}
          >
            Cấp C
          </button>
        </div>
      </div>

      {/* LƯỚI THẺ HIỂN THỊ CÁC TÀI SẢN TRẢI NGHIỆM */}
      <div className="ps-assets-grid">
        {displayedAssets.map((asset) => (
          <article key={asset.id} className="ps-asset-card">
            {/* Header thẻ: Mã Asset & Badge cấp độ */}
            <div className="ps-asset-card-top">
              <span className="ps-asset-id">{asset.id}</span>
              <span className={`ps-asset-tier-badge tier-${asset.tier}`}>
                Cấp {asset.tier}
              </span>
            </div>

            {/* Tên tài sản và ý tưởng kích hoạt */}
            <h4 className="ps-asset-name">{asset.name}</h4>
            <p className="ps-asset-idea">{asset.shortIdea}</p>

            {/* Thông số khoảng giá và quy mô tiếp nhận */}
            <div className="ps-asset-meta">
              <div className="ps-asset-meta-item">
                <small>Khoảng giá</small>
                <strong>{asset.priceRange}</strong>
              </div>
              <div className="ps-asset-meta-item">
                <small>Quy mô</small>
                <span>{asset.slots}</span>
              </div>
            </div>

            {/* Footer thẻ: Mức độ ưu tiên và nút xem chi tiết */}
            <div className="ps-asset-footer">
              <span className="ps-asset-priority">{asset.priority}</span>
              <button
                type="button"
                className="ps-btn-text"
                onClick={() => setSelectedAsset(asset)}
              >
                <span>Xem chi tiết</span>
                <ArrowUpRight size={13} />
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* NÚT TOGGLE MỞ RỘNG / THU GỌN (Nếu danh sách sau lọc > 6) */}
      {filteredAssets.length > 6 && (
        <div className="ps-center-action mt-6">
          <button
            type="button"
            className="ps-btn ps-btn-outline"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? (
              <>
                <span>Thu gọn danh sách</span>
                <ChevronUp size={16} />
              </>
            ) : (
              <>
                <span>Xem tất cả {filteredAssets.length} tài sản</span>
                <ChevronDown size={16} />
              </>
            )}
          </button>
        </div>
      )}

      {/* MODAL CHI TIẾT TÀI SẢN */}
      <AssetDetailModal
        asset={selectedAsset}
        isOpen={selectedAsset !== null}
        onClose={() => setSelectedAsset(null)}
      />
    </div>
  );
}

