/**
 * ==============================================================================
 * TRANG CHỦ / LANDING PAGE CHÍNH (CONVOCATION DAY 2026)
 * ------------------------------------------------------------------------------
 * Cấu trúc các phân hệ hiển thị tuần tự:
 * - 00. Header & Navigation (Thanh điều hướng cố định)
 * - 00. Hero Section (Banner video & thông điệp chính)
 * - 01. Câu chuyện (Story)
 * - 02. Quy mô sự kiện (Scale & Stats)
 * - 03. Cộng đồng tham dự (Audiences)
 * - 04. Hành trình điểm chạm (Brand Journey)
 * - 05. Định hướng giải pháp tài trợ (Partnership Design)
 * - 06. Không gian thương hiệu (Brand Space)
 * - 07. Hạng mục ưu tiên (Priority Resources)
 * - 08. Cơ hội đồng hành & Gói tài trợ (Partnership Opportunities)
 * - 10. Đo lường & Nghiệm thu (Metrics & Dashboard)
 * - 11. Quy trình hợp tác (4-step Process)
 * - 12. Lộ trình triển khai (Timeline)
 * - 13. Form đăng ký hợp tác & Footer (Contact)
 * ==============================================================================
 */

"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { CalendarDays, ChartNoAxesCombined, GraduationCap, Handshake, Star, Users } from "lucide-react";
import { audiences, communityImages, event, images, journeyItems, stats, timeline } from "../data";
import PartnershipDesign from "./PartnershipDesign";
import BrandSpaceSection from "./BrandSpaceSection";
import PriorityResourceSection from "./PriorityResourceSection";
import PartnershipSection from "./partnership/PartnershipSection";
import ContactSection from "./ContactSection";
import HeroSection from "./HeroSection";

// Icon cho 6 thẻ thống kê quy mô Section 02
const statIcons = [Users, GraduationCap, Handshake, Star, CalendarDays, ChartNoAxesCombined];

// Component tiêu đề dùng chung cho các section thông thường
const SectionHead = ({ n, children, desc }: { n: string; children: React.ReactNode; desc?: string }) => (
  <div className="sectionHead reveal">
    <span>{n}</span>
    <h2>{children}</h2>
    {desc && <p>{desc}</p>}
  </div>
);

export default function Landing() {
  const [light, setLight] = useState<string | null>(null);
  // Hiệu ứng Fade-in Scroll Reveal khi cuộn trang
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("visible")),
      { threshold: 0.08 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!light) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLight(null);
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [light]);

  return (
    <main>
      {/* 00. HERO SECTION (CINEMATIC EVENT BANNER & TOP NAVIGATION) */}
      <HeroSection />

      {/* 01. CÂU CHUYỆN (STORY) */}
      <section id="story" className="story">
        <div className="storyInner">
          <div className="storyCopy reveal">
            <span>01 · CÂU CHUYỆN</span>
            <h2>Nơi bạn<br />được nhìn thấy.</h2>
            <p>Hội Khai giảng Trường Đại học Văn Lang 2026 là lời chào chính thức dành cho Tân sinh viên Khóa 32 – nơi mỗi bạn được chào đón, kết nối và truyền cảm hứng để tự tin khởi đầu hành trình học tập, trải nghiệm và trưởng thành tại Văn Lang.</p>
            <p>Với thông điệp “Nơi bạn được nhìn thấy”, chương trình hướng đến việc ghi nhận bản sắc riêng của mỗi sinh viên và cùng các đối tác kiến tạo những trải nghiệm thiết thực, ý nghĩa trong ngày đầu tiên của hành trình đại học.</p>
          </div>
          <div className="storyVisual reveal">
            <img src={images.story} alt="Không khí Hội Khai giảng tại Trường Đại học Văn Lang" loading="lazy" decoding="async" />
          </div>
        </div>
      </section>

      {/* 02. QUY MÔ SỰ KIỆN (SCALE & STATS) */}
      <section className="scaleSection">
        <div className="scaleContour scaleContourLeft" aria-hidden="true" />
        <div className="scaleContour scaleContourRight" aria-hidden="true" />
        <div className="scaleRibbon" aria-hidden="true" />
        <div className="scaleInner">
          <div className="scaleHeader reveal">
            <div>
              <span>02 · QUY MÔ</span>
              <i />
              <h2>Sự kiện trong<br />những con số</h2>
              <b className="scaleSparkle" aria-hidden="true">✦</b>
            </div>
            <img src="/images/hoi-khai-giang-2025/Lpgo_VLU.png" alt="Văn Lang University" loading="lazy" decoding="async" />
          </div>
          <div className="scaleGrid">
            {stats.map((s, i) => {
              const Icon = statIcons[i];
              return (
                <article className="scaleCard reveal" style={{ transitionDelay: `${i * 80}ms` }} key={s.label}>
                  <div className="scaleIcon"><Icon aria-hidden="true" strokeWidth={1.8} /></div>
                  <div className="scaleCardBody">
                    <b>{s.value}</b>
                    <h3>{s.label}</h3>
                    <i />
                    <small>{s.note}</small>
                  </div>
                  <span className="scaleDots" aria-hidden="true" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 03. CỘNG ĐỒNG THAM DỰ (AUDIENCES) */}
      <section className="communitySection">
        <div className="communityArc" aria-hidden="true" />
        <div className="communityDots" aria-hidden="true" />
        <div className="communityInner">
          <div className="communityHeader reveal">
            <span><b>03</b> · CỘNG ĐỒNG</span>
            <h2>Ai sẽ có mặt?</h2>
            <i />
          </div>
          <div className="communityGrid">
            {audiences.map((a, i) => (
              <article className="communityCard reveal" style={{ transitionDelay: `${i * 80}ms` }} key={a[0]}>
                <Image src={communityImages[i]} alt={`${a[0]} tại sự kiện Văn Lang`} fill unoptimized sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 33vw" />
                <span className="communityOverlay" aria-hidden="true" />
                <div className="communityBadge">{String(i + 1).padStart(2, "0")}</div>
                <div className="communityContent">
                  <h3>{a[0]}</h3>
                  <p>{a[1]}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 04. HÀNH TRÌNH ĐIỂM CHẠM (BRAND JOURNEY) */}
      <section id="journey" className="brandJourneySection">
        <div className="journeyChevron" aria-hidden="true"><i /><i /><i /></div>
        <div className="journeyArc" aria-hidden="true" />
        <div className="brandJourneyInner">
          <div className="brandJourneyHeader reveal">
            <span>04 · BRAND JOURNEY</span>
            <i />
            <h2>Hành trình hiện diện<br />của thương hiệu</h2>
          </div>
          <div className="journeyTrack">
            <div className="journeyLine" aria-hidden="true" />
            {journeyItems.map((item) => (
              <div className="journeyNode" key={item.id}><i /></div>
            ))}
          </div>
          <div className="journeyCards">
            {journeyItems.map((item, i) => (
              <article className="journeyCard reveal" style={{ transitionDelay: `${i * 80}ms` }} key={item.id}>
                <div className="journeyImage">
                  <Image src={item.image} alt={`${item.title} trong hành trình sự kiện Văn Lang`} fill unoptimized sizes="(max-width: 767px) 100vw, (max-width: 1399px) 270px, 17vw" />
                </div>
                <div className="journeyCardBody">
                  <b>{item.id}</b>
                  <i />
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 05. ĐỊNH HƯỚNG GIẢI PHÁP TÀI TRỢ THEO MỤC TIÊU */}
      <PartnershipDesign />

      {/* 06. KHÔNG GIAN THƯƠNG HIỆU THỰC TẾ (BRAND SPACE) */}
      <BrandSpaceSection onImageClick={setLight} />

      {/* 07. HẠNG MỤC ƯU TIÊN TIẾP NHẬN TÀI TRỢ (PRIORITY RESOURCES) */}
      <PriorityResourceSection />

      {/* 08. PHÂN HỆ CƠ HỘI ĐỒNG HÀNH VÀ GÓI TÀI TRỢ (PARTNERSHIP SECTION) */}
      <PartnershipSection />

      {/* 10. ĐO LƯỜNG & NGHIỆM THU (METRICS DASHBOARD) */}
      <section className="section soft">
        <SectionHead n="10 · ĐO LƯỜNG" desc="KPI truyền thông và activation sẽ được phân cấp theo từng gói, thống nhất trong phụ lục quyền lợi sau khi có kế hoạch kênh chính thức.">
          Giá trị được<br />ghi nhận minh bạch
        </SectionHead>
        <div className="dashboard">
          {[
            ["10.000+", "Quy mô người tham dự"],
            ["7.000+", "Tân sinh viên K32"],
            ["Theo gói", "Nội dung truyền thông"],
            ["Theo booth", "Lượt trải nghiệm"],
            ["Thực tế", "Sản phẩm dùng thử"],
            ["Đối soát", "Hiện kim & hiện vật"],
            ["Theo hồ sơ thực tế", "Các quyền lợi đã thống nhất được ghi nhận và nghiệm thu"],
            ["Theo thỏa thuận", "Báo cáo sau sự kiện"],
          ].map((x) => (
            <article className="reveal" key={x[1]}>
              <b>{x[0]}</b>
              <span>{x[1]}</span>
              <i />
            </article>
          ))}
        </div>
      </section>

      {/* 11. QUY TRÌNH HỢP TÁC (4-STEP PROCESS) */}
      <section className="section navy">
        <SectionHead n="11 · QUY TRÌNH">Rõ ràng từ nhu cầu đến nghiệm thu</SectionHead>
        <div className="fourGrid">
          {["Doanh nghiệp gửi nhu cầu", "Hai bên thống nhất phương án", "Nhà trường xem xét & phê duyệt", "Ký kết, triển khai & nghiệm thu"].map((x, i) => (
            <article className="reveal" key={x}>
              <b>0{i + 1}</b>
              <h3>{x}</h3>
            </article>
          ))}
        </div>
        <p className="legal">Mọi quyền lợi chỉ có hiệu lực sau khi được cấp có thẩm quyền của Nhà trường phê duyệt và thể hiện trong văn bản chính thức.</p>
      </section>

      {/* Timeline ngày cụ thể được ẩn cho đến khi Ban Tổ chức xác nhận lịch mới. */}

      {/* 13. THÔNG TIN LIÊN HỆ & BẾ MẠC PROPOSAL (LET'S PARTNER) */}
      <ContactSection />

      {/* FOOTER */}
      <footer>
        <b>VLU · HỘI KHAI GIẢNG 2026</b>
        <p>Ảnh: Văn Lang TV — Hội Khai giảng và Chào đón Tân sinh viên Khóa 31 năm 2025.</p>
        <p>© 2026 · Bản dự thảo phục vụ xem xét. Không tạo thành cam kết tài trợ.</p>
      </footer>
      <a className="totop" href="#top" aria-label="Về đầu trang">↑</a>

      {/* Modal phóng to xem ảnh sự kiện */}
      {light && (
        <div className="modal light" onClick={() => setLight(null)} role="dialog" aria-modal="true">
          <img src={light} alt="Ảnh sự kiện Văn Lang phóng lớn" />
          <button type="button" className="close" aria-label="Đóng ảnh phóng lớn" onClick={() => setLight(null)}>×</button>
        </div>
      )}
    </main>
  );
}
