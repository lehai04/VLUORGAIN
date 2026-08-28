/**
 * ==============================================================================
 * PHÂN HỆ: 05 · PARTNERSHIP DESIGN (BẮT ĐẦU TỪ MỤC TIÊU DOANH NGHIỆP)
 * ------------------------------------------------------------------------------
 * Chức năng:
 * - Hỗ trợ doanh nghiệp lựa chọn 4 mục tiêu tiếp cận trọng tâm:
 *   1. Nhận diện (Awareness)
 *   2. Trải nghiệm (Experience)
 *   3. Tuyển dụng (Talent)
 *   4. Tác động (Impact)
 * - Tương tác chuyển Tab (click hoặc phím mũi tên) để xem ngay giải pháp, gói đề xuất,
 *   và 3 đầu ra cụ thể đã được kiểm chứng.
 * ==============================================================================
 */

"use client";

import Image from "next/image";
import { useState, type KeyboardEvent } from "react";
import {
  BarChart3,
  BriefcaseBusiness,
  Camera,
  ClipboardCheck,
  FileText,
  Flag,
  Gem,
  Gift,
  Globe2,
  HeartHandshake,
  PackageOpen,
  QrCode,
  Sparkles,
  Star,
  UserRound,
  Users,
  type LucideIcon,
} from "lucide-react";
import { images, sponsorGoals } from "../data";

// 1. Ánh xạ icon cho 4 Tab mục tiêu
const goalIcons: Record<string, LucideIcon> = {
  awareness: Gem,
  experience: Star,
  talent: UserRound,
  impact: Globe2,
};

// 2. Ánh xạ 3 icon cho các đầu ra kết quả của từng mục tiêu
const outcomeIcons: Record<string, LucideIcon[]> = {
  awareness: [Flag, FileText, Camera],
  experience: [PackageOpen, Sparkles, BarChart3],
  talent: [Users, QrCode, BriefcaseBusiness],
  impact: [HeartHandshake, Gift, ClipboardCheck],
};

export default function PartnershipDesign() {
  // Quản lý Tab mục tiêu đang được chọn (mặc định là 'awareness')
  const [goal, setGoal] = useState(sponsorGoals[0].id);
  const selectedGoal = sponsorGoals.find((item) => item.id === goal) ?? sponsorGoals[0];

  // Hỗ trợ phím mũi tên chuyển Tab chuẩn Accessibility (WAI-ARIA)
  const moveTabFocus = (event: KeyboardEvent<HTMLButtonElement>, currentIndex: number) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    const lastIndex = sponsorGoals.length - 1;
    const nextIndex = event.key === "Home"
      ? 0
      : event.key === "End"
        ? lastIndex
        : (currentIndex + (event.key === "ArrowRight" ? 1 : -1) + sponsorGoals.length) % sponsorGoals.length;
    const nextGoal = sponsorGoals[nextIndex];
    setGoal(nextGoal.id);
    document.getElementById(`partnership-tab-${nextGoal.id}`)?.focus();
  };

  return (
    <section id="benefits" className="partnershipSection" aria-labelledby="partnership-title">
      <span className="partnershipDots partnershipDotsTop" aria-hidden="true" />
      <span className="partnershipDots partnershipDotsBottom" aria-hidden="true" />

      <div className="partnershipInner">
        <div className="partnershipHero reveal">
          <div className="partnershipIntro">
            <span className="partnershipEyebrow">05 · PARTNERSHIP DESIGN</span>
            <h2 id="partnership-title">Bắt đầu từ mục tiêu<br />của doanh nghiệp</h2>
            <p>
              Chọn mục tiêu ưu tiên để xem cấu trúc quyền lợi phù hợp.<br />
              Văn Lang không bán một danh sách logo giống nhau cho mọi thương hiệu.
            </p>
          </div>

          <div className="partnershipBuilding" aria-hidden="true">
            <Image
              src={images.venue}
              alt=""
              fill
              unoptimized
              sizes="(max-width: 767px) 100vw, 46vw"
            />
            <span className="buildingWash" />
            <span className="buildingCircle buildingCircleOne" />
            <span className="buildingCircle buildingCircleTwo" />
          </div>
        </div>

        <div className="partnershipTabs reveal" role="tablist" aria-label="Mục tiêu hợp tác">
          {sponsorGoals.map((item, index) => {
            const Icon = goalIcons[item.id] ?? Gem;
            const active = goal === item.id;
            return (
              <button
                id={`partnership-tab-${item.id}`}
                type="button"
                role="tab"
                aria-selected={active}
                aria-controls="partnership-panel"
                tabIndex={active ? 0 : -1}
                className={active ? "active" : ""}
                key={item.id}
                onClick={() => setGoal(item.id)}
                onKeyDown={(event) => moveTabFocus(event, index)}
              >
                <span className="goalIcon"><Icon aria-hidden="true" strokeWidth={1.8} /></span>
                <span className="goalTabCopy">
                  <strong>{item.label}</strong>
                  <small>{item.recommend}</small>
                </span>
              </button>
            );
          })}
        </div>

        <div
          id="partnership-panel"
          className="partnershipPanel"
          role="tabpanel"
          aria-labelledby={`partnership-tab-${selectedGoal.id}`}
          key={selectedGoal.id}
        >
          <div className="proposalNarrative">
            <Image
              className="proposalImage"
              src={images.hero}
              alt=""
              fill
              unoptimized
              sizes="(max-width: 899px) 100vw, 58vw"
            />
            <span className="proposalShade" aria-hidden="true" />
            <div className="proposalCopy">
              <span className="proposalEyebrow">ĐỀ XUẤT CHO MỤC TIÊU · {selectedGoal.label.toUpperCase()}</span>
              <h3>{selectedGoal.title}</h3>
              <p>{selectedGoal.desc}</p>
              <span className="proposalRule" aria-hidden="true"><i /><i /></span>
              <b className="packageBadge"><Gem aria-hidden="true" /> Gói phù hợp: {selectedGoal.recommend}</b>
            </div>
          </div>

          <svg className="proposalAccent" viewBox="0 0 64 500" preserveAspectRatio="none" aria-hidden="true">
            <polyline points="2,0 61,250 2,500" fill="none" vectorEffect="non-scaling-stroke" />
          </svg>

          <div className="proposalBenefits">
            {selectedGoal.outcomes.map((outcome, index) => {
              const Icon = outcomeIcons[selectedGoal.id]?.[index] ?? Flag;
              return (
                <article key={outcome}>
                  <span className="benefitNumber">{String(index + 1).padStart(2, "0")}</span>
                  <span className="benefitDivider" aria-hidden="true" />
                  <p>{outcome}</p>
                  <span className="benefitIcon"><Icon aria-hidden="true" strokeWidth={1.8} /></span>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
