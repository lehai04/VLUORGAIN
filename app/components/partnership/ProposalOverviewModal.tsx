/**
 * ==============================================================================
 * POPUP TRUNG TÂM HỒ SƠ ĐỒNG HÀNH & TRA CỨU CHI TIẾT (PROPOSAL HUB MODAL)
 * ------------------------------------------------------------------------------
 * Cung cấp đầy đủ 5 phân hệ tra cứu chi tiết ngay trong Popup theo đúng định hướng:
 * "Trang chính thuyết phục trước; Popup / PDF làm nhiệm vụ giải thích chi tiết."
 * 
 * Các Tab chức năng:
 * 1. OVERVIEW: Tổng quan sự kiện, 5 gói hợp tác, hạng mục ưu tiên & lưu ý.
 * 2. BENEFITS: Toàn bộ 25 quyền lợi nền tảng (R01–R25) kèm ô tìm kiếm, bộ lọc & nghiệm thu.
 * 3. ASSETS: Toàn bộ 12 Signature Assets (A01–A12) kèm deliverables & KPIs.
 * 4. MATRIX: Bảng ma trận đối chiếu 15 tiêu chí (M01–M15) giữa 5 gói P1–P5.
 * 5. TERMS: Toàn văn 15 điều khoản nguyên tắc hợp tác & pháp chế (T01–T15).
 * ==============================================================================
 */

"use client";

import { useState, useMemo, useEffect } from "react";
import { Download, Mail, CheckCircle2, Search, Sparkles, Layers, FileText, Scale, ShieldCheck, Gem, ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";
import { event, stats } from "../../data";
import { priorityItems } from "../../data/priorityNeeds";
import { packagesData, partnershipStats, benefitsData, signatureAssetsData, packageMatrixData, partnershipTermsData, BenefitItem, SignatureAsset, MatrixRow, PartnershipTerm } from "../../data/partnership";
import ModalWrapper from "./ModalWrapper";

export const proposalPdfPath = "/VLU-Hoi-Khai-Giang-2026-Ho-so-dong-hanh.pdf";

export type ProposalTab = "overview" | "benefits" | "assets" | "matrix" | "terms";

interface ProposalOverviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: ProposalTab;
}

export default function ProposalOverviewModal({ isOpen, onClose, initialTab = "overview" }: ProposalOverviewModalProps) {
  const [activeTab, setActiveTab] = useState<ProposalTab>(initialTab);

  // Cập nhật tab khi prop initialTab thay đổi
  useEffect(() => {
    if (isOpen && initialTab) {
      setActiveTab(initialTab);
    }
  }, [isOpen, initialTab]);

  // State cho Tab Benefits (R01-R25)
  const [benefitSearch, setBenefitSearch] = useState("");
  const [benefitGroup, setBenefitGroup] = useState("ALL");
  const [benefitPkg, setBenefitPkg] = useState("ALL");
  const [expandedBenefitId, setExpandedBenefitId] = useState<string | null>(null);

  // State cho Tab Assets (A01-A12)
  const [assetTier, setAssetTier] = useState<string>("ALL");
  const [expandedAssetId, setExpandedAssetId] = useState<string | null>(null);

  // State cho Tab Terms (T01-T15)
  const [openTermIds, setOpenTermIds] = useState<string[]>([]);

  // Lọc 25 quyền lợi
  const filteredBenefits = useMemo(() => {
    return benefitsData.filter((item) => {
      if (benefitGroup !== "ALL" && item.group !== benefitGroup) return false;
      if (benefitPkg !== "ALL" && !item.fitPackages.includes(benefitPkg as any)) return false;
      if (benefitSearch.trim() !== "") {
        const q = benefitSearch.toLowerCase();
        return (
          item.name.toLowerCase().includes(q) ||
          item.id.toLowerCase().includes(q) ||
          item.distinctPoint.toLowerCase().includes(q) ||
          item.group.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [benefitSearch, benefitGroup, benefitPkg]);

  // Lọc 12 Signature Assets
  const filteredAssets = useMemo(() => {
    if (assetTier === "ALL") return signatureAssetsData;
    return signatureAssetsData.filter((a) => a.tier === assetTier);
  }, [assetTier]);

  const toggleTerm = (id: string) => {
    setOpenTermIds((prev) =>
      prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
    );
  };

  const benefitGroups = [
    "ALL",
    "Không gian & Nhận diện",
    "Trải nghiệm & Kích hoạt",
    "Truyền thông & Nội dung",
    "Nhân tài & Học bổng",
    "Dịch vụ & Nghiệm thu",
  ];

  return (
    <ModalWrapper
      isOpen={isOpen}
      onClose={onClose}
      badge="HỒ SƠ ĐỒNG HÀNH TOÀN DIỆN"
      title="Tra cứu Hồ sơ Đề án Hội Khai giảng 2026"
      subtitle="Xem toàn bộ quyền lợi, tài sản biểu tượng, ma trận so sánh và điều khoản pháp chế hoặc tải PDF."
      maxWidth="4xl"
    >
      <div className="ps-hub-container">
        {/* ====================================================
            THANH ĐIỀU HƯỚNG TAB TRONG POPUP
        ==================================================== */}
        <div className="ps-hub-tab-bar" role="tablist" aria-label="Các phân hệ hồ sơ">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "overview"}
            className={`ps-hub-tab ${activeTab === "overview" ? "active" : ""}`}
            onClick={() => setActiveTab("overview")}
          >
            <FileText size={15} />
            <span>Tổng quan</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "benefits"}
            className={`ps-hub-tab ${activeTab === "benefits" ? "active" : ""}`}
            onClick={() => setActiveTab("benefits")}
          >
            <Sparkles size={15} />
            <span>25 Quyền lợi (R01–R25)</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "assets"}
            className={`ps-hub-tab ${activeTab === "assets" ? "active" : ""}`}
            onClick={() => setActiveTab("assets")}
          >
            <Gem size={15} />
            <span>12 Tài sản (A01–A12)</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "matrix"}
            className={`ps-hub-tab ${activeTab === "matrix" ? "active" : ""}`}
            onClick={() => setActiveTab("matrix")}
          >
            <Layers size={15} />
            <span>Ma trận 15 tiêu chí</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "terms"}
            className={`ps-hub-tab ${activeTab === "terms" ? "active" : ""}`}
            onClick={() => setActiveTab("terms")}
          >
            <ShieldCheck size={15} />
            <span>15 Điều khoản (T01–T15)</span>
          </button>
        </div>

        {/* ====================================================
            TAB 1: TỔNG QUAN HỒ SƠ & CÁC GÓI HỢP TÁC
        ==================================================== */}
        {activeTab === "overview" && (
          <div className="ps-hub-tab-content">
            <section className="ps-proposal-block ps-proposal-block--navy">
              <span className="ps-field-label">TỔNG QUAN SỰ KIỆN</span>
              <h3>Khởi đầu hành trình mới cùng Văn Lang</h3>
              <p>
                Hội Khai giảng 2026 chào đón Tân sinh viên Khóa 32 và kết nối Nhà trường,
                sinh viên, phụ huynh, khách mời cùng các đơn vị đồng hành.
              </p>
              <div className="ps-proposal-metrics">
                {stats.slice(0, 3).map((item) => (
                  <div key={item.label}>
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="ps-proposal-block">
              <div className="ps-proposal-section-head">
                <div>
                  <span className="ps-field-label">05 GÓI HỢP TÁC</span>
                  <h3>Chọn mức độ đồng hành phù hợp</h3>
                </div>
                <small>{partnershipStats[1].value} quyền lợi nền tảng</small>
              </div>
              <div className="ps-proposal-package-list">
                {packagesData.map((pkg) => (
                  <article key={pkg.id}>
                    <b>{pkg.id}</b>
                    <div>
                      <h4>{pkg.name}</h4>
                      <p>{pkg.role}</p>
                    </div>
                    <strong>{pkg.price}</strong>
                  </article>
                ))}
              </div>
            </section>

            <section className="ps-proposal-block">
              <span className="ps-field-label">HẠNG MỤC ƯU TIÊN</span>
              <h3>Nguồn lực Nhà trường đang tìm kiếm</h3>
              <div className="ps-proposal-priority-grid">
                {priorityItems.map((item) => (
                  <div key={item.id}>
                    <CheckCircle2 size={16} aria-hidden="true" />
                    <span><strong>{item.title}</strong>{item.description}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="ps-proposal-block ps-proposal-note">
              <span className="ps-field-label">NGUYÊN TẮC ÁP DỤNG</span>
              <p>
                Quyền lợi, KPI, vị trí, thời lượng và phạm vi độc quyền chỉ có hiệu lực
                sau khi hai bên thống nhất, được cấp có thẩm quyền của Nhà trường phê
                duyệt và thể hiện trong văn bản chính thức.
              </p>
            </section>
          </div>
        )}

        {/* ====================================================
            TAB 2: THƯ VIỆN 25 QUYỀN LỢI NỀN TẢNG (R01–R25)
        ==================================================== */}
        {activeTab === "benefits" && (
          <div className="ps-hub-tab-content">
            <div className="ps-hub-toolbar">
              <div className="ps-hub-search-box">
                <Search size={15} />
                <input
                  type="text"
                  placeholder="Tìm kiếm quyền lợi theo tên, mã Rxx, từ khóa..."
                  value={benefitSearch}
                  onChange={(e) => setBenefitSearch(e.target.value)}
                />
              </div>
              <div className="ps-hub-filter-group">
                <select
                  value={benefitGroup}
                  onChange={(e) => setBenefitGroup(e.target.value)}
                  className="ps-hub-select"
                >
                  <option value="ALL">Tất cả nhóm quyền lợi</option>
                  {benefitGroups.filter((g) => g !== "ALL").map((g) => (
                    <option key={g} value={g}>{g}</option>
                  ))}
                </select>
                <select
                  value={benefitPkg}
                  onChange={(e) => setBenefitPkg(e.target.value)}
                  className="ps-hub-select"
                >
                  <option value="ALL">Tất cả gói áp dụng</option>
                  {["P1", "P2", "P3", "P4", "P5"].map((p) => (
                    <option key={p} value={p}>Gói {p}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="ps-hub-counter">
              Hiển thị <strong>{filteredBenefits.length}</strong> / 25 quyền lợi nền tảng
            </div>

            <div className="ps-hub-benefit-list">
              {filteredBenefits.map((item) => {
                const isExpanded = expandedBenefitId === item.id;
                return (
                  <article key={item.id} className="ps-hub-benefit-card">
                    <div className="ps-hub-benefit-header">
                      <div className="ps-hub-benefit-title-area">
                        <span className="ps-hub-badge-red">{item.id}</span>
                        <div>
                          <h4>{item.name}</h4>
                          <span className="ps-hub-tag-group">{item.group}</span>
                        </div>
                      </div>
                      <div className="ps-hub-benefit-packages">
                        {item.fitPackages.map((p) => (
                          <span key={p} className="ps-hub-pkg-pill">{p}</span>
                        ))}
                      </div>
                    </div>
                    <p className="ps-hub-benefit-point"><strong>Điểm nổi bật:</strong> {item.distinctPoint}</p>
                    
                    {isExpanded && (
                      <div className="ps-hub-benefit-detail-box">
                        <p><strong>Mô tả chi tiết:</strong> {item.description}</p>
                        <p><strong>Bằng chứng bàn giao & Nghiệm thu:</strong> {item.proofOfDelivery}</p>
                        <p><strong>Điều kiện phối hợp:</strong> {item.appliedConditions}</p>
                      </div>
                    )}

                    <button
                      type="button"
                      className="ps-hub-btn-toggle"
                      onClick={() => setExpandedBenefitId(isExpanded ? null : item.id)}
                    >
                      {isExpanded ? "Thu gọn chi tiết" : "Xem điều kiện & nghiệm thu"}
                      {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>
                  </article>
                );
              })}
            </div>
          </div>
        )}

        {/* ====================================================
            TAB 3: 12 SIGNATURE ASSETS (A01–A12)
        ==================================================== */}
        {activeTab === "assets" && (
          <div className="ps-hub-tab-content">
            <div className="ps-hub-toolbar">
              <div className="ps-hub-tier-tabs">
                {[
                  { id: "ALL", label: "Tất cả 12 tài sản" },
                  { id: "A", label: "Cấp A (Flagship)" },
                  { id: "B", label: "Cấp B (Trải nghiệm)" },
                  { id: "C", label: "Cấp C (Đồng hành)" },
                ].map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    className={`ps-hub-tier-btn ${assetTier === t.id ? "active" : ""}`}
                    onClick={() => setAssetTier(t.id)}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="ps-hub-assets-grid">
              {filteredAssets.map((asset) => {
                const isExpanded = expandedAssetId === asset.id;
                return (
                  <article key={asset.id} className="ps-hub-asset-card">
                    <div className="ps-hub-asset-top">
                      <span className="ps-hub-asset-id">{asset.id} · Cấp {asset.tier}</span>
                      <span className="ps-hub-asset-price">{asset.priceRange}</span>
                    </div>
                    <h4>{asset.name}</h4>
                    <p className="ps-hub-asset-idea">{asset.shortIdea}</p>
                    <div className="ps-hub-asset-meta-row">
                      <span><strong>Vị trí:</strong> {asset.location}</span>
                      <span><strong>Số lượng:</strong> {asset.slots}</span>
                    </div>

                    {isExpanded && (
                      <div className="ps-hub-asset-detail-box">
                        <p><strong>Quyền sở hữu:</strong> {asset.ownership}</p>
                        <p><strong>Deliverables bàn giao:</strong></p>
                        <ul>
                          {asset.deliverables.map((d, idx) => (
                            <li key={idx}>• {d}</li>
                          ))}
                        </ul>
                        <p><strong>KPIs nghiệm thu:</strong></p>
                        <ul>
                          {asset.kpis.map((k, idx) => (
                            <li key={idx}>• {k}</li>
                          ))}
                        </ul>
                        <p><strong>Quy định & Giới hạn:</strong> {asset.limitations}</p>
                      </div>
                    )}

                    <button
                      type="button"
                      className="ps-hub-btn-toggle"
                      onClick={() => setExpandedAssetId(isExpanded ? null : asset.id)}
                    >
                      {isExpanded ? "Thu gọn" : "Xem deliverables & KPIs"}
                      {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>
                  </article>
                );
              })}
            </div>
          </div>
        )}

        {/* ====================================================
            TAB 4: MA TRẬN 15 TIÊU CHÍ (M01–M15)
        ==================================================== */}
        {activeTab === "matrix" && (
          <div className="ps-hub-tab-content">
            <p className="ps-hub-desc">
              Bảng ma trận đối chiếu quyền lợi giữa 5 cấp độ gói hợp tác (P1 – P5).
            </p>
            <div className="ps-hub-table-wrapper">
              <table className="ps-hub-matrix-table">
                <thead>
                  <tr>
                    <th>MÃ</th>
                    <th>TIÊU CHÍ / ĐẦU RA</th>
                    <th>P1 (300M)</th>
                    <th>P2 (200M)</th>
                    <th>P3 (100M)</th>
                    <th>P4 (50M)</th>
                    <th>P5 (30M)</th>
                  </tr>
                </thead>
                <tbody>
                  {packageMatrixData.map((row) => (
                    <tr key={row.id}>
                      <td className="font-bold text-red">{row.id}</td>
                      <td>
                        <strong>{row.name}</strong>
                        <small className="block text-muted">{row.appendixTerms}</small>
                      </td>
                      <td>{row.p1}</td>
                      <td>{row.p2}</td>
                      <td>{row.p3}</td>
                      <td>{row.p4}</td>
                      <td>{row.p5}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ====================================================
            TAB 5: 15 NGUYÊN TẮC HỢP TÁC & PHÁP CHẾ (T01–T15)
        ==================================================== */}
        {activeTab === "terms" && (
          <div className="ps-hub-tab-content">
            <p className="ps-hub-desc">
              15 nguyên tắc phối hợp, kiểm soát chất lượng và tuân thủ quy chế Nhà trường.
            </p>
            <div className="ps-hub-terms-list">
              {partnershipTermsData.map((term) => {
                const isOpen = openTermIds.includes(term.id);
                return (
                  <article key={term.id} className="ps-hub-term-item">
                    <button
                      type="button"
                      className="ps-hub-term-btn"
                      onClick={() => toggleTerm(term.id)}
                    >
                      <div>
                        <span className="ps-hub-term-code">{term.id}</span>
                        <strong>{term.topic}</strong>
                      </div>
                      {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                    {isOpen && (
                      <div className="ps-hub-term-body">
                        <p className="ps-hub-term-wording">{term.proposedWording}</p>
                        <div className="ps-hub-term-meta-grid">
                          <div><strong>Mục đích kiểm soát:</strong> {term.controlPurpose}</div>
                          <div><strong>Phạm vi:</strong> {term.scope}</div>
                          <div><strong>Cấp phê duyệt:</strong> {term.approver}</div>
                          <div><strong>Đối tượng:</strong> {term.appliedTo}</div>
                        </div>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        )}

        {/* ====================================================
            FOOTER HÀNH ĐỘNG TỔNG QUAN
        ==================================================== */}
        <div className="ps-proposal-actions">
          <a className="ps-btn ps-btn-primary" href={proposalPdfPath} download>
            <Download size={16} aria-hidden="true" />
            <span>Tải hồ sơ PDF đầy đủ ({partnershipStats[0].value} gói · {partnershipStats[1].value} quyền lợi)</span>
          </a>
          <a
            className="ps-btn ps-btn-outline"
            href={`mailto:${event.email}?subject=${encodeURIComponent("Liên hệ Hội Khai giảng Văn Lang 2026")}`}
          >
            <Mail size={16} aria-hidden="true" />
            <span>Liên hệ: {event.email}</span>
          </a>
        </div>
      </div>
    </ModalWrapper>
  );
}
