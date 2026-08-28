/**
 * ==============================================================================
 * PHÂN KHU: THƯ VIỆN 25 QUYỀN LỢI CHI TIẾT (BENEFIT LIBRARY)
 * ------------------------------------------------------------------------------
 * Chức năng:
 * - Hiển thị 25 hạng mục quyền lợi chi tiết (R01 - R25) phân theo 5 nhóm nghiệp vụ.
 * - Ô tìm kiếm thời gian thực (Search Input) theo từ khóa, tên, mã Rxx, mô tả.
 * - Dropdown lọc theo 5 Nhóm nghiệp vụ và theo 5 Gói áp dụng (P1 - P5).
 * - Bộ đếm số lượng hiển thị tự động cập nhật: "Hiển thị X / 25 quyền lợi".
 * - Nút "Chi tiết" mở BenefitDetailModal hiển thị bằng chứng bàn giao và nghiệm thu.
 * - Phân trang hiển thị (9 items mặc định) kèm nút Xem thêm / Thu gọn.
 * ==============================================================================
 */

"use client";

import { useState, useMemo } from "react";
import { BenefitItem, benefitsData } from "../../data/partnership";
import { BenefitDetailModal } from "./PartnershipModals";
import { Search, ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";

export default function BenefitLibrary() {
  // 1. Quản lý từ khóa tìm kiếm
  const [search, setSearch] = useState("");
  // 2. Quản lý bộ lọc theo Nhóm nghiệp vụ
  const [selectedGroup, setSelectedGroup] = useState<string>("ALL");
  // 3. Quản lý bộ lọc theo Gói tài trợ (P1 - P5)
  const [selectedPkg, setSelectedPkg] = useState<string>("ALL");
  // 4. Số lượng thẻ hiển thị (phân trang client)
  const [visibleCount, setVisibleCount] = useState(9);
  // 5. Quyền lợi đang mở Modal xem chi tiết
  const [selectedBenefit, setSelectedBenefit] = useState<BenefitItem | null>(null);

  // Danh mục 5 nhóm quyền lợi nghiệp vụ
  const groups = [
    "ALL",
    "Không gian & Nhận diện",
    "Trải nghiệm & Kích hoạt",
    "Truyền thông & Nội dung",
    "Nhân tài & Học bổng",
    "Dịch vụ & Nghiệm thu",
  ];

  const packageOptions = ["ALL", "P1", "P2", "P3", "P4", "P5"];

  // Bộ lọc tính toán tự động qua useMemo để tối ưu hiệu năng
  const filteredBenefits = useMemo(() => {
    return benefitsData.filter((item) => {
      // Lọc theo nhóm
      if (selectedGroup !== "ALL" && item.group !== selectedGroup) {
        return false;
      }
      // Lọc theo gói áp dụng
      if (selectedPkg !== "ALL" && !item.fitPackages.includes(selectedPkg as any)) {
        return false;
      }
      // Lọc theo từ khóa tìm kiếm
      if (search.trim() !== "") {
        const query = search.toLowerCase();
        const matchName = item.name.toLowerCase().includes(query);
        const matchId = item.id.toLowerCase().includes(query);
        const matchPoint = item.distinctPoint.toLowerCase().includes(query);
        const matchGroup = item.group.toLowerCase().includes(query);
        return matchName || matchId || matchPoint || matchGroup;
      }
      return true;
    });
  }, [search, selectedGroup, selectedPkg]);

  // Cắt danh sách theo số lượng hiển thị hiện tại
  const displayedBenefits = filteredBenefits.slice(0, visibleCount);

  return (
    <div className="ps-sub-section">
      {/* HEADER PHÂN KHU & BỘ ĐẾM SỐ LƯỢNG KẾT QUẢ */}
      <div className="ps-sub-header">
        <div>
          <span className="ps-sub-eyebrow">BENEFIT LIBRARY</span>
          <h3 className="ps-sub-title">Thư viện quyền lợi</h3>
          <p className="ps-sub-desc">
            Toàn bộ 25 hạng mục quyền lợi được phân cấp minh bạch, có bằng chứng bàn giao và điều kiện kiểm đếm cụ thể.
          </p>
        </div>

        {/* Badge thống kê số lượng quyền lợi đang hiển thị */}
        <div className="ps-count-badge">
          Hiển thị <strong>{filteredBenefits.length}</strong> / {benefitsData.length} quyền lợi
        </div>
      </div>

      {/* THANH ĐIỀU KHIỂN: Ô TÌM KIẾM & 2 DROPDOWN LỌC */}
      <div className="ps-library-controls">
        {/* Ô tìm kiếm từ khóa realtime */}
        <div className="ps-search-box">
          <Search size={16} className="ps-search-icon" />
          <input
            type="text"
            placeholder="Tìm kiếm quyền lợi, mã R01, từ khóa..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setVisibleCount(9);
            }}
            className="ps-search-input"
          />
          {search && (
            <button
              type="button"
              className="ps-search-clear"
              onClick={() => setSearch("")}
              aria-label="Xóa từ khóa tìm kiếm"
            >
              ×
            </button>
          )}
        </div>

        {/* 2 Dropdown lọc theo Nhóm và theo Gói */}
        <div className="ps-filter-row">
          {/* Lọc Nhóm */}
          <div className="ps-select-wrap">
            <span className="ps-filter-label">Nhóm:</span>
            <select
              value={selectedGroup}
              onChange={(e) => {
                setSelectedGroup(e.target.value);
                setVisibleCount(9);
              }}
              className="ps-filter-select"
            >
              {groups.map((g) => (
                <option key={g} value={g}>
                  {g === "ALL" ? "Tất cả nhóm (5 nhóm)" : g}
                </option>
              ))}
            </select>
          </div>

          {/* Lọc Gói */}
          <div className="ps-select-wrap">
            <span className="ps-filter-label">Gói:</span>
            <select
              value={selectedPkg}
              onChange={(e) => {
                setSelectedPkg(e.target.value);
                setVisibleCount(9);
              }}
              className="ps-filter-select"
            >
              {packageOptions.map((p) => (
                <option key={p} value={p}>
                  {p === "ALL" ? "Tất cả gói (P1–P5)" : `Gói ${p}`}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* LƯỚI THẺ QUYỀN LỢI (HOẶC TRẠNG THÁI TRỐNG KHI KHÔNG TÌM THẤY) */}
      {displayedBenefits.length === 0 ? (
        <div className="ps-empty-state">
          <p>Không tìm thấy quyền lợi nào phù hợp với bộ lọc.</p>
          <button
            type="button"
            className="ps-btn ps-btn-ghost mt-2"
            onClick={() => {
              setSearch("");
              setSelectedGroup("ALL");
              setSelectedPkg("ALL");
            }}
          >
            Đặt lại bộ lọc
          </button>
        </div>
      ) : (
        <div className="ps-benefits-grid">
          {displayedBenefits.map((item) => (
            <article key={item.id} className="ps-benefit-card">
              {/* Header thẻ quyền lợi: Mã Rxx & Tên nhóm */}
              <div className="ps-benefit-card-top">
                <span className="ps-benefit-id">{item.id}</span>
                <span className="ps-benefit-group">{item.group}</span>
              </div>

              {/* Tên quyền lợi & Điểm khác biệt */}
              <h4 className="ps-benefit-name">{item.name}</h4>
              <p className="ps-benefit-distinct">{item.distinctPoint}</p>

              {/* Metadata: Các gói được áp dụng & Mức độ độc quyền */}
              <div className="ps-benefit-meta">
                <div className="ps-benefit-packages">
                  <small>Gói áp dụng:</small>
                  <div className="ps-tags-wrap">
                    {item.fitPackages.map((p) => (
                      <span key={p} className="ps-tag ps-tag-sm">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="ps-benefit-exclusivity">
                  <small>Độc quyền:</small>
                  <span>{item.exclusivity}</span>
                </div>
              </div>

              {/* Nút xem chi tiết quyền lợi */}
              <div className="ps-benefit-card-footer">
                <button
                  type="button"
                  className="ps-btn-text"
                  onClick={() => setSelectedBenefit(item)}
                >
                  <span>Chi tiết</span>
                  <ArrowUpRight size={13} />
                </button>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* NÚT PHÂN TRANG CLIENT (XEM THÊM 9 QUYỀN LỢI HOẶC THU GỌN) */}
      {filteredBenefits.length > 9 && (
        <div className="ps-center-action mt-6">
          {visibleCount < filteredBenefits.length ? (
            <button
              type="button"
              className="ps-btn ps-btn-outline"
              onClick={() => setVisibleCount((prev) => prev + 9)}
            >
              <span>Xem thêm ({filteredBenefits.length - visibleCount} quyền lợi)</span>
              <ChevronDown size={16} />
            </button>
          ) : (
            <button
              type="button"
              className="ps-btn ps-btn-ghost"
              onClick={() => setVisibleCount(9)}
            >
              <span>Thu gọn danh sách</span>
              <ChevronUp size={16} />
            </button>
          )}
        </div>
      )}

      {/* MODAL CHI TIẾT QUYỀN LỢI */}
      <BenefitDetailModal
        benefit={selectedBenefit}
        isOpen={selectedBenefit !== null}
        onClose={() => setSelectedBenefit(null)}
      />
    </div>
  );
}

