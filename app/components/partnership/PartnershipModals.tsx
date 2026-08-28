/**
 * ==============================================================================
 * HỆ THỐNG CÁC MODAL DIALOG CHI TIẾT (PARTNERSHIP MODALS)
 * ------------------------------------------------------------------------------
 * Chứa 5 component modal chuyên biệt phục vụ tương tác chuyên sâu:
 * 1. PackageDetailModal: Hiển thị 5 nhóm thông số của gói hợp tác (Tổng quan,
 *    Quyền sở hữu, Quyền lợi, Đo lường & Nghiệm thu, Triển khai & Giới hạn).
 * 2. AssetDetailModal: Hiển thị chi tiết Signature Asset (Deliverables, KPI, Nhận diện).
 * 3. BenefitDetailModal: Hiển thị mô tả, điểm khác biệt và bằng chứng bàn giao của Benefit.
 * 4. MatrixRowModal: Hiển thị so sánh nhanh 5 gói và quy định phụ lục hợp đồng.
 * 5. CustomPartnershipModal: Form tiếp nhận đề xuất phương án tài trợ riêng kèm validation.
 * ==============================================================================
 */

"use client";

import { useState } from "react";
import {
  PackageDetail,
  SignatureAsset,
  BenefitItem,
  MatrixRow,
} from "../../data/partnership";
import ModalWrapper from "./ModalWrapper";
import {
  CheckCircle2,
  ShieldCheck,
  Award,
  BarChart3,
  FileSpreadsheet,
  Layers,
  Sparkles,
  Info,
  Send,
  AlertCircle,
} from "lucide-react";

// ====================================================
// 1. PACKAGE DETAIL MODAL (CHI TIẾT 5 NHÓM CỦA GÓI)
// ====================================================
export function PackageDetailModal({
  pkg,
  isOpen,
  onClose,
}: {
  pkg: PackageDetail | null;
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!pkg) return null;

  return (
    <ModalWrapper
      isOpen={isOpen}
      onClose={onClose}
      badge={`CẤP ĐỘ HỢP TÁC · ${pkg.id}`}
      title={pkg.name}
      subtitle={`Giá trị đầu tư: ${pkg.price} · Quy mô: ${pkg.slots}`}
      maxWidth="4xl"
    >
      <div className="ps-detail-grid">
        {/* Nhóm 1: Tổng quan */}
        <section className="ps-detail-card">
          <div className="ps-detail-card-head">
            <Layers className="ps-detail-icon text-red" size={18} />
            <h3>01. Tổng quan & Định vị</h3>
          </div>
          <div className="ps-detail-fields">
            <div className="ps-field-row">
              <span className="ps-field-label">Mã gói</span>
              <strong className="ps-field-value">{pkg.overview.code}</strong>
            </div>
            <div className="ps-field-row">
              <span className="ps-field-label">Cấp bậc</span>
              <span className="ps-field-value">{pkg.overview.tier}</span>
            </div>
            <div className="ps-field-row">
              <span className="ps-field-label">Giá trị đầu tư</span>
              <strong className="ps-field-value text-red">{pkg.overview.value}</strong>
            </div>
            <div className="ps-field-row">
              <span className="ps-field-label">Số lượng suất</span>
              <span className="ps-field-value">{pkg.overview.slots}</span>
            </div>
            <div className="ps-field-row">
              <span className="ps-field-label">Vai trò thương hiệu</span>
              <span className="ps-field-value">{pkg.overview.role}</span>
            </div>
            <div className="ps-field-box">
              <span className="ps-field-label">Concept cốt lõi</span>
              <p>{pkg.overview.concept}</p>
            </div>
          </div>
        </section>

        {/* Nhóm 2: Quyền sở hữu */}
        <section className="ps-detail-card">
          <div className="ps-detail-card-head">
            <Award className="ps-detail-icon text-navy" size={18} />
            <h3>02. Quyền sở hữu & Độc quyền</h3>
          </div>
          <div className="ps-detail-fields">
            <div className="ps-field-box">
              <span className="ps-field-label">Quyền sở hữu khác biệt</span>
              <p>{pkg.ownership.distinctRight}</p>
            </div>
            <div className="ps-field-box">
              <span className="ps-field-label">Signature Asset áp dụng</span>
              <p>{pkg.ownership.signatureAsset}</p>
            </div>
            <div className="ps-field-row">
              <span className="ps-field-label">Độc quyền ngành hàng</span>
              <span className="ps-badge-pill">{pkg.ownership.industryExclusivity}</span>
            </div>
            <div className="ps-field-box">
              <span className="ps-field-label">Quyền ưu tiên không gian</span>
              <p>{pkg.ownership.priorityRight}</p>
            </div>
          </div>
        </section>

        {/* Nhóm 3: Quyền lợi chi tiết */}
        <section className="ps-detail-card full-span">
          <div className="ps-detail-card-head">
            <Sparkles className="ps-detail-icon text-red" size={18} />
            <h3>03. Ma trận Quyền lợi Bàn giao</h3>
          </div>
          <div className="ps-detail-split">
            <div>
              <h4 className="ps-subhead">Quyền lợi Nền tảng</h4>
              <ul className="ps-bullet-list">
                {pkg.benefits.coreRights.map((r, i) => (
                  <li key={i}>
                    <CheckCircle2 size={15} className="text-red flex-shrink-0" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="ps-subhead">Quyền lợi Đặc thù & Tiếp đón</h4>
              <ul className="ps-bullet-list">
                {pkg.benefits.specificRights.map((r, i) => (
                  <li key={i}>
                    <CheckCircle2 size={15} className="text-navy flex-shrink-0" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
              <div className="ps-note-box mt-3">
                <strong>Phạm vi thời gian:</strong> {pkg.benefits.scope}
              </div>
            </div>
          </div>
        </section>

        {/* Nhóm 4: Đo lường & Nghiệm thu */}
        <section className="ps-detail-card">
          <div className="ps-detail-card-head">
            <BarChart3 className="ps-detail-icon text-navy" size={18} />
            <h3>04. Đo lường & Nghiệm thu</h3>
          </div>
          <div className="ps-detail-fields">
            <div>
              <span className="ps-field-label">KPIs cam kết</span>
              <ul className="ps-bullet-list mt-1">
                {pkg.measurement.kpi.map((k, i) => (
                  <li key={i}>• {k}</li>
                ))}
              </ul>
            </div>
            <div className="mt-2">
              <span className="ps-field-label">Đầu ra BTC bàn giao</span>
              <ul className="ps-bullet-list mt-1">
                {pkg.measurement.deliverables.map((d, i) => (
                  <li key={i}>• {d}</li>
                ))}
              </ul>
            </div>
            <div className="mt-2">
              <span className="ps-field-label">Bằng chứng nghiệm thu</span>
              <ul className="ps-bullet-list mt-1">
                {pkg.measurement.proofs.map((p, i) => (
                  <li key={i}>• {p}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Nhóm 5: Triển khai & Quy định */}
        <section className="ps-detail-card">
          <div className="ps-detail-card-head">
            <ShieldCheck className="ps-detail-icon text-red" size={18} />
            <h3>05. Triển khai & Giới hạn</h3>
          </div>
          <div className="ps-detail-fields">
            <div>
              <span className="ps-field-label">Nội dung trao đổi riêng</span>
              <ul className="ps-bullet-list mt-1">
                {pkg.implementation.customDiscussion.map((c, i) => (
                  <li key={i}>• {c}</li>
                ))}
              </ul>
            </div>
            <div className="mt-2">
              <span className="ps-field-label">Điều kiện phối hợp</span>
              <ul className="ps-bullet-list mt-1">
                {pkg.implementation.coordinationConditions.map((cc, i) => (
                  <li key={i}>• {cc}</li>
                ))}
              </ul>
            </div>
            <div className="mt-2">
              <span className="ps-field-label">Giới hạn bắt buộc</span>
              <ul className="ps-bullet-list mt-1 text-muted">
                {pkg.implementation.limitations.map((l, i) => (
                  <li key={i}>• {l}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </ModalWrapper>
  );
}

// ====================================================
// 2. SIGNATURE ASSET DETAIL MODAL
// ====================================================
export function AssetDetailModal({
  asset,
  isOpen,
  onClose,
}: {
  asset: SignatureAsset | null;
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!asset) return null;

  return (
    <ModalWrapper
      isOpen={isOpen}
      onClose={onClose}
      badge={`SIGNATURE ASSET · ${asset.id} (CẤP ${asset.tier})`}
      title={asset.name}
      subtitle={`Khoảng giá: ${asset.priceRange} · ${asset.slots} · ${asset.priority}`}
      maxWidth="3xl"
    >
      <div className="ps-asset-modal-content">
        <div className="ps-lead-card">
          <p className="ps-lead-text">{asset.shortIdea}</p>
        </div>

        <div className="ps-modal-section-grid">
          <div className="ps-detail-box">
            <span className="ps-field-label">Quyền sở hữu & Độc quyền</span>
            <p>{asset.ownership}</p>
          </div>

          <div className="ps-detail-box">
            <span className="ps-field-label">Ngành hàng phù hợp</span>
            <div className="ps-tags-wrap">
              {asset.targetIndustries.map((ind, i) => (
                <span key={i} className="ps-tag">{ind}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="ps-detail-card mt-4">
          <h4 className="ps-card-title">Đầu ra Bàn giao (Deliverables)</h4>
          <ul className="ps-bullet-list mt-2">
            {asset.deliverables.map((d, i) => (
              <li key={i}>
                <CheckCircle2 size={15} className="text-red flex-shrink-0" />
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="ps-modal-section-grid mt-4">
          <div className="ps-detail-card">
            <h4 className="ps-card-title">Nhận diện & Hoạt động</h4>
            <div className="mt-2">
              <span className="ps-field-label">Nhận diện:</span>
              <ul className="ps-bullet-list">
                {asset.branding.map((b, i) => (
                  <li key={i}>• {b}</li>
                ))}
              </ul>
            </div>
            <div className="mt-2">
              <span className="ps-field-label">Hoạt động:</span>
              <ul className="ps-bullet-list">
                {asset.activities.map((a, i) => (
                  <li key={i}>• {a}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="ps-detail-card">
            <h4 className="ps-card-title">KPIs & Nghiệm thu</h4>
            <div className="mt-2">
              <span className="ps-field-label">KPIs cam kết:</span>
              <ul className="ps-bullet-list">
                {asset.kpi.map((k, i) => (
                  <li key={i}>• {k}</li>
                ))}
              </ul>
            </div>
            <div className="mt-2">
              <span className="ps-field-label">Bằng chứng bàn giao:</span>
              <ul className="ps-bullet-list">
                {asset.proofOfDelivery.map((p, i) => (
                  <li key={i}>• {p}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="ps-note-box mt-4">
          <strong>Điều kiện & Giới hạn:</strong> {asset.limitations.join("; ")}. {asset.coordinationConditions.join("; ")}
        </div>
      </div>
    </ModalWrapper>
  );
}

// ====================================================
// 3. BENEFIT DETAIL MODAL
// ====================================================
export function BenefitDetailModal({
  benefit,
  isOpen,
  onClose,
}: {
  benefit: BenefitItem | null;
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!benefit) return null;

  return (
    <ModalWrapper
      isOpen={isOpen}
      onClose={onClose}
      badge={`QUYỀN LỢI CHI TIẾT · ${benefit.id}`}
      title={benefit.name}
      subtitle={`Nhóm: ${benefit.group} · Mức độc quyền: ${benefit.exclusivity}`}
      maxWidth="2xl"
    >
      <div className="ps-benefit-modal-content">
        <div className="ps-lead-card">
          <span className="ps-field-label">Điểm khác biệt</span>
          <p className="ps-lead-text">{benefit.distinctPoint}</p>
        </div>

        <div className="ps-detail-card mt-3">
          <span className="ps-field-label">Gói tài trợ áp dụng</span>
          <div className="ps-tags-wrap mt-1">
            {benefit.fitPackages.map((p) => (
              <span key={p} className="ps-tag ps-tag-highlight">{p}</span>
            ))}
          </div>
        </div>

        <div className="ps-detail-card mt-3">
          <span className="ps-field-label">Mô tả thực hiện</span>
          <p className="mt-1">{benefit.description}</p>
        </div>

        <div className="ps-modal-section-grid mt-3">
          <div className="ps-detail-box">
            <span className="ps-field-label">Bằng chứng nghiệm thu</span>
            <p className="mt-1">{benefit.proofOfDelivery}</p>
          </div>
          <div className="ps-detail-box">
            <span className="ps-field-label">Điều kiện áp dụng</span>
            <p className="mt-1">{benefit.appliedConditions}</p>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
}

// ====================================================
// 4. MATRIX ROW DETAIL MODAL
// ====================================================
export function MatrixRowModal({
  row,
  isOpen,
  onClose,
}: {
  row: MatrixRow | null;
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!row) return null;

  return (
    <ModalWrapper
      isOpen={isOpen}
      onClose={onClose}
      badge={`MA TRẬN QUYỀN LỢI · ${row.id}`}
      title={row.name}
      subtitle="Chi tiết thực hiện, phụ lục hợp đồng và bằng chứng bàn giao"
      maxWidth="3xl"
    >
      <div className="ps-matrix-modal-content">
        <div className="ps-matrix-compare-box">
          <h4 className="ps-card-title mb-2">Mức độ áp dụng theo 5 gói</h4>
          <div className="ps-matrix-pill-grid">
            <div className="ps-matrix-pill"><b>P1</b><span>{row.p1}</span></div>
            <div className="ps-matrix-pill"><b>P2</b><span>{row.p2}</span></div>
            <div className="ps-matrix-pill"><b>P3</b><span>{row.p3}</span></div>
            <div className="ps-matrix-pill"><b>P4</b><span>{row.p4}</span></div>
            <div className="ps-matrix-pill"><b>P5</b><span>{row.p5}</span></div>
          </div>
        </div>

        <div className="ps-detail-grid mt-3">
          <div className="ps-detail-card">
            <span className="ps-field-label">Cách thức triển khai</span>
            <p className="mt-1">{row.implementation}</p>
          </div>

          <div className="ps-detail-card">
            <span className="ps-field-label">Bằng chứng nghiệm thu bàn giao</span>
            <p className="mt-1">{row.proofOfDelivery}</p>
          </div>

          <div className="ps-detail-card">
            <span className="ps-field-label">Nội dung trao đổi riêng</span>
            <p className="mt-1">{row.customDiscussion}</p>
          </div>

          <div className="ps-detail-card">
            <span className="ps-field-label">Điều kiện phối hợp</span>
            <p className="mt-1">{row.coordinationConditions}</p>
          </div>
        </div>

        <div className="ps-note-box mt-3">
          <strong>Nội dung ghi trong Phụ lục Hợp đồng:</strong> {row.appendixTerms}
        </div>
      </div>
    </ModalWrapper>
  );
}

// ====================================================
// 5. CUSTOM PARTNERSHIP MODAL
// ====================================================
export function CustomPartnershipModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!e.currentTarget.checkValidity()) {
      e.currentTarget.reportValidity();
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <ModalWrapper
      isOpen={isOpen}
      onClose={onClose}
      badge="CUSTOM PARTNERSHIP"
      title="Thiết kế phương án hợp tác riêng"
      subtitle="Đồng hành theo mục tiêu riêng: Học bổng · Hiện vật · Activation · Tuyển dụng · ESG"
      maxWidth="2xl"
    >
      {submitted ? (
        <div className="ps-form-success">
          <CheckCircle2 size={48} className="text-red mx-auto" />
          <h3>Đã ghi nhận nhu cầu hợp tác!</h3>
          <p>
            Cảm ơn Quý Doanh nghiệp đã quan tâm đồng hành cùng Hội Khai giảng Văn Lang 2026.
            Đầu mối Ban Tổ chức (Trung tâm Hỗ trợ Sinh viên) sẽ liên hệ lại trong vòng 24 giờ làm việc.
          </p>
          <button type="button" className="ps-btn ps-btn-navy mt-4" onClick={handleReset}>
            Đóng cửa sổ
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="ps-custom-form">
          <div className="ps-form-row">
            <label className="ps-form-label">
              Tên doanh nghiệp / Tổ chức *
              <input required type="text" name="company" placeholder="Ví dụ: Tập đoàn ABC" className="ps-input" />
            </label>
            <label className="ps-form-label">
              Ngành hàng / Lĩnh vực *
              <input required type="text" name="industry" placeholder="FMCG, Công nghệ, Tài chính..." className="ps-input" />
            </label>
          </div>

          <div className="ps-form-row">
            <label className="ps-form-label">
              Người liên hệ *
              <input required type="text" name="contactName" placeholder="Họ và tên" className="ps-input" />
            </label>
            <label className="ps-form-label">
              Chức vụ
              <input type="text" name="role" placeholder="Marketing Manager, HR..." className="ps-input" />
            </label>
          </div>

          <div className="ps-form-row">
            <label className="ps-form-label">
              Email công việc *
              <input required type="email" name="email" placeholder="name@company.com" className="ps-input" />
            </label>
            <label className="ps-form-label">
              Số điện thoại *
              <input required type="tel" pattern="[0-9+ .-]{8,}" name="phone" placeholder="0901 234 567" className="ps-input" />
            </label>
          </div>

          <div className="ps-form-row">
            <label className="ps-form-label">
              Hình thức quan tâm *
              <select required defaultValue="" name="interestType" className="ps-select">
                <option value="" disabled>Chọn hình thức</option>
                <option value="cash">Hiện kim (Gói thiết kế riêng)</option>
                <option value="scholarship">Tài trợ Học bổng sinh viên</option>
                <option value="inkind">Hiện vật / Sản phẩm / Dịch vụ</option>
                <option value="activation">Branded Experience / Gian hàng</option>
                <option value="talent">Tuyển dụng & Hướng nghiệp</option>
                <option value="esg">Dự án Xanh & Phát triển bền vững (ESG)</option>
              </select>
            </label>
            <label className="ps-form-label">
              Ngân sách dự kiến (VNĐ)
              <input type="text" name="budget" placeholder="Ví dụ: 80 triệu, 150 triệu..." className="ps-input" />
            </label>
          </div>

          <label className="ps-form-label">
            Mục tiêu hoặc yêu cầu cụ thể cần trao đổi
            <textarea name="notes" rows={3} placeholder="Mô tả ý tưởng hoặc mong muốn đồng hành của doanh nghiệp..." className="ps-textarea" />
          </label>

          <label className="ps-consent-checkbox">
            <input required type="checkbox" />
            <span>Tôi đồng ý để Ban Tổ chức sử dụng thông tin trên nhằm trao đổi phương án tài trợ Hội Khai giảng 2026.</span>
          </label>

          <div className="ps-form-actions">
            <button type="button" className="ps-btn ps-btn-ghost" onClick={onClose}>
              Hủy
            </button>
            <button type="submit" className="ps-btn ps-btn-primary" disabled={loading}>
              {loading ? "Đang gửi..." : "Gửi yêu cầu trao đổi →"}
            </button>
          </div>
        </form>
      )}
    </ModalWrapper>
  );
}
