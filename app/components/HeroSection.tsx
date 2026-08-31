/**
 * ==============================================================================
 * COMPONENT: HERO SECTION (EDITORIAL CAMPAIGN EVENT HERO)
 * ------------------------------------------------------------------------------
 * Redesign theo phong cách Editorial Typography cao cấp:
 * - Hierarchy rõ nét: "HÀNH TRÌNH MỚI" (Visual focus đỏ Van Lang) > "KHỞI ĐẦU" > "CÙNG VĂN LANG" (lệch nhịp)
 * - Giữ trọn vẹn Left Safe Area (chiếm 40-48% chiều rộng), không che background sân khấu & crowd
 * - Gradient overlay chuyển mượt từ tối sang trong suốt (Fade 90deg sang phải)
 * - Điểm nhấn tinh tế: Eyebrow badge phát quang nhẹ, watermark 2026 siêu mờ, secondary text-link CTA
 * - Animation load mượt mà (fade up & reveal), không giật lag hay loop gây rối mắt
 * ==============================================================================
 */

"use client";

import Image from "next/image";
import { useState } from "react";
import {
  CalendarDays,
  MapPin,
  Users,
  Megaphone,
  ChevronRight,
  ArrowRight,
  Mouse,
} from "lucide-react";
import { images } from "../data";

export default function HeroSection() {
  const [menu, setMenu] = useState(false);

  return (
    <section
      id="top"
      className="relative w-full min-h-screen min-h-[920px] bg-[#060813] text-white overflow-hidden flex flex-col justify-between"
    >
      {/* 1. BACKGROUND MEDIA (VIDEO / FALLBACK IMAGE) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          className="w-full h-full object-cover object-center scale-[1.02]"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={images.hero}
          aria-hidden="true"
        >
          <source src={images.heroVideo} type="video/webm" />
        </video>

        {/* Cinematic Vignette & Gradients - LEFT SAFE AREA PRESERVATION */}
        {/* Left deep shadow for typography contrast, smoothly fading to reveal the center/right stage */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, rgba(4,8,25,0.94) 0%, rgba(4,8,25,0.80) 30%, rgba(4,8,25,0.35) 55%, rgba(4,8,25,0.05) 75%, transparent 100%)",
          }}
          aria-hidden="true"
        />

        {/* Top shadow for navigation */}
        <div
          className="absolute top-0 left-0 right-0 h-36 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(4,6,15,0.85) 0%, rgba(4,6,15,0.2) 65%, transparent 100%)",
          }}
          aria-hidden="true"
        />

        {/* Bottom vignette for information panel */}
        <div
          className="absolute bottom-0 left-0 right-0 h-72 pointer-events-none"
          style={{
            background:
              "linear-gradient(0deg, rgba(4,6,15,0.92) 0%, rgba(4,6,15,0.4) 50%, transparent 100%)",
          }}
          aria-hidden="true"
        />

        {/* Subtle warm ambient accent behind the red focus title */}
        <div
          className="absolute top-1/3 -left-20 w-[520px] h-[520px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(229,44,71,0.16) 0%, rgba(229,44,71,0.04) 45%, transparent 70%)",
            filter: "blur(60px)",
          }}
          aria-hidden="true"
        />
      </div>

      {/* 2. TOP NAVIGATION (TRANSPARENT MINIMALIST OVERLAY) */}
      <header className="relative z-30 w-full max-w-[1780px] mx-auto px-6 sm:px-10 lg:px-16 pt-8 pb-4 flex items-center justify-between">
        {/* Top-Left Brand Logo */}
        <a href="#top" className="flex items-center gap-3.5 group">
          <Image
            src="/images/hoi-khai-giang-2025/Lpgo_VLU.png"
            alt="Logo Trường Đại học Văn Lang"
            width={180}
            height={46}
            unoptimized
            className="h-10 sm:h-11 w-auto object-contain drop-shadow-md"
          />
        </a>

        {/* Right Navigation & CTA Group */}
        <div className="hidden xl:flex items-center gap-8">
          {/* Top-Right Navigation Menu */}
          <nav className="flex items-center gap-8 text-[15px] font-medium text-white/90">
            {[
              ["Câu chuyện", "#story"],
              ["Hành trình thương hiệu", "#journey"],
              ["Cơ hội đồng hành", "#benefits"],
              ["Gói đồng hành", "#packages"],
              ["Liên hệ", "#contact"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="hover:text-[#E52C47] transition-colors duration-200 whitespace-nowrap"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Far-Right CTA Pill Button with Circular White Arrow */}
          <a
            href="#contact"
            className="group flex items-center gap-2.5 bg-[#E52C47] hover:bg-[#D71920] text-white pl-5 pr-1.5 py-1.5 rounded-full font-semibold text-[15px] shadow-[0_4px_20px_rgba(229,44,71,0.4)] hover:shadow-[0_6px_28px_rgba(229,44,71,0.6)] transition-all duration-300 ml-4 flex-shrink-0"
          >
            <span>Trao đổi phương án đồng hành</span>
            <span className="w-7 h-7 rounded-full bg-white text-[#E52C47] flex items-center justify-center flex-shrink-0 group-hover:translate-x-0.5 transition-transform shadow-sm">
              <ArrowRight size={14} strokeWidth={2.5} />
            </span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenu(!menu)}
          className="xl:hidden p-2 rounded-lg bg-white/10 text-white"
          aria-label="Mở menu"
        >
          ☰
        </button>
      </header>

      {/* Mobile Drawer Menu */}
      {menu && (
        <div className="xl:hidden fixed inset-0 z-40 bg-[#070913]/95 backdrop-blur-xl flex flex-col p-8 pt-36 gap-6 text-xl font-bold">
          <a
            href="#top"
            onClick={() => setMenu(false)}
            className="absolute top-24 right-8 z-50 flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-2xl text-white/80"
            aria-label="Đóng menu"
          >
            ✕
          </a>
          {[
            ["Câu chuyện", "#story"],
            ["Hành trình thương hiệu", "#journey"],
            ["Cơ hội đồng hành", "#benefits"],
            ["Gói đồng hành", "#packages"],
            ["Liên hệ", "#contact"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenu(false)}
              className="py-2 border-b border-white/10 hover:text-[#E52C47]"
            >
              {label}
            </a>
          ))}
        </div>
      )}

      {/* 3. MAIN HERO CONTENT AREA (LEFT-ALIGNED EDITORIAL COMPOSITION) */}
      <div className="relative z-20 w-full max-w-[1780px] mx-auto px-6 sm:px-10 lg:px-16 pt-8 sm:pt-14 md:pt-18 pb-6 my-auto">
        <div className="w-full max-w-3xl">
          {/* Eyebrow with Red Pill Badge */}
          <div className="anim-eyebrow flex items-center gap-3 mb-5 sm:mb-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E52C47]/10 border border-[#E52C47]/25 text-[#E52C47] text-[12px] sm:text-[13px] font-bold tracking-[0.22em] uppercase backdrop-blur-md shadow-[0_0_16px_rgba(229,44,71,0.2)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E52C47] animate-pulse" />
              HỘI KHAI GIẢNG 2026
            </span>
          </div>

          {/* EDITORIAL HEADLINE CLUSTER */}
          <div className="relative mb-6 sm:mb-8 select-none">
            {/* Subtle background year watermark - ultra faint, artistic */}
            <div
              className="absolute -left-4 -top-8 text-[140px] sm:text-[200px] md:text-[240px] font-black text-white/[0.03] select-none pointer-events-none tracking-tighter leading-none z-0"
              aria-hidden="true"
            >
              2026
            </div>

            {/* Headline Tier 1 */}
            <div className="anim-title-1 relative z-10 text-white font-extrabold text-[28px] min-[360px]:text-[32px] sm:text-[48px] md:text-[60px] lg:text-[70px] xl:text-[78px] leading-[0.98] tracking-[-0.035em] uppercase pt-1 sm:whitespace-nowrap">
              KHỞI ĐẦU
            </div>

            {/* Headline Tier 2: "HÀNH TRÌNH MỚI" (Primary Visual Focus in 1 Single Line) */}
            <div className="anim-title-2 relative z-10 text-[#E52C47] italic font-black text-[28px] min-[360px]:text-[32px] min-[390px]:text-[36px] sm:text-[56px] md:text-[72px] lg:text-[84px] xl:text-[96px] leading-[0.98] tracking-[-0.03em] mt-2 sm:mt-3.5 sm:whitespace-nowrap drop-shadow-[0_2px_20px_rgba(229,44,71,0.35)] py-1">
              HÀNH TRÌNH MỚI
            </div>

            {/* Headline Tier 3: "CÙNG VĂN LANG" (Smaller, Rhythmic Offset) */}
            <div className="anim-title-3 relative z-10 text-white font-extrabold text-[22px] min-[360px]:text-[26px] min-[390px]:text-[28px] sm:text-[42px] md:text-[52px] lg:text-[60px] xl:text-[68px] leading-[0.98] tracking-[-0.03em] uppercase mt-2.5 sm:mt-4 ml-1.5 sm:ml-4 pb-1 sm:whitespace-nowrap">
              CÙNG VĂN LANG
            </div>
          </div>

          {/* Descriptive Copy */}
          <p className="anim-desc text-white/80 text-[15px] sm:text-[16.5px] leading-[1.65] max-w-[580px] mb-6 sm:mb-8 font-normal italic">
            Đồng hành cùng Văn Lang kiến tạo một khởi đầu đáng nhớ, kết nối thương hiệu với hơn 7.000 người tham dự và cộng đồng sinh viên trẻ, năng động.
          </p>

          {/* SECONDARY CTA (Sleek Editorial Text Link with Interactive Arrow) */}
          <div className="anim-cta flex items-center">
            <a
              href="#packages"
              className="group inline-flex items-center gap-3 text-white font-semibold text-[14.5px] sm:text-[15.5px] tracking-wide transition-all duration-300"
            >
              <span className="relative pb-0.5 border-b border-[#E52C47]/50 group-hover:border-[#E52C47] text-white/90 group-hover:text-white transition-colors">
                Khám phá cơ hội đồng hành
              </span>
              <span className="w-8 h-8 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-[#E52C47] group-hover:bg-[#E52C47] group-hover:text-white group-hover:border-[#E52C47] group-hover:translate-x-1.5 transition-all duration-300 shadow-sm">
                <ArrowRight size={14} strokeWidth={2.5} />
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* 4. BOTTOM INFORMATION PANEL & BRAND MARK */}
      <div className="anim-info-panel relative z-20 w-full max-w-[1780px] mx-auto px-5 sm:px-8 lg:px-16 pb-8 sm:pb-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8">
        {/* Thanh thông tin tận dụng toàn bộ chiều rộng còn lại; cột lịch/địa điểm rộng hơn để không cắt chữ. */}
        <div className="w-full lg:flex-1 lg:min-w-0 xl:max-w-[1460px] bg-[#080B1E]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-5 shadow-[0_16px_40px_rgba(0,0,0,0.5)]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[0.85fr_1.85fr_0.85fr_0.85fr] gap-4 sm:gap-4 items-center">
            {/* Column 01: Date & Time */}
            <div className="flex items-start gap-3.5 border-b sm:border-b-0 sm:border-r border-white/10 pb-3 sm:pb-0 pr-0 sm:pr-2 relative">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#E52C47]/10 text-[#E52C47] flex items-center justify-center flex-shrink-0 mt-0.5">
                <CalendarDays size={18} strokeWidth={2.2} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-white font-extrabold text-[15px] sm:text-[17px] tracking-tight leading-tight">
                  26–27.09.2026
                </div>
                <div className="text-[#98A2B3] text-[12px] mt-0.5 sm:mt-1 font-medium">
                  Thời gian tổ chức
                </div>
              </div>
              <ChevronRight
                size={14}
                className="hidden lg:block text-white/30 absolute right-1.5 top-1/2 -translate-y-1/2"
              />
            </div>

            {/* Column 02: Venue Sessions & Campus Address */}
            <div className="flex items-start gap-3.5 border-b sm:border-b-0 sm:border-r border-white/10 pb-3 sm:pb-0 pr-0 sm:pr-3 relative">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#E52C47]/10 text-[#E52C47] flex items-center justify-center flex-shrink-0 mt-0.5">
                <MapPin size={18} strokeWidth={2.2} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="space-y-1">
                  <div className="text-white text-[12.5px] sm:text-[13px] leading-snug">
                    <span className="text-[#FF7A8A] font-bold">26/09 (8h00 – 11h30):</span>{" "}
                    <span className="font-semibold text-white/95">Hội trường Trịnh Công Sơn</span>
                  </div>
                  <div className="text-white text-[12.5px] sm:text-[13px] leading-snug">
                    <span className="text-[#FF7A8A] font-bold">27/09 (14h00 – 20h00):</span>{" "}
                    <span className="font-semibold text-white/95">Quảng trường Đông Sơn</span>
                  </div>
                </div>
                <div className="text-[#98A2B3] text-[11px] sm:text-[11.5px] font-medium leading-tight mt-1.5 pt-1 border-t border-white/10">
                  📍 Cơ sở chính: 69/68 Đặng Thuỳ Trâm, P. Bình Lợi Trung
                </div>
              </div>
              <ChevronRight
                size={14}
                className="hidden lg:block text-white/30 absolute right-1.5 top-1/2 -translate-y-1/2"
              />
            </div>

            {/* Column 03: Audience Scale */}
            <div className="flex items-start gap-3.5 border-b sm:border-b-0 sm:border-r border-white/10 pb-3 sm:pb-0 pr-0 sm:pr-2 relative">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#E52C47]/10 text-[#E52C47] flex items-center justify-center flex-shrink-0 mt-0.5">
                <Users size={18} strokeWidth={2.2} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-white font-extrabold text-[15px] sm:text-[16.5px] tracking-tight leading-tight">
                  7.000+
                </div>
                <div className="text-[#98A2B3] text-[11.5px] sm:text-[12px] mt-0.5 sm:mt-1 font-medium leading-snug">
                  Người tham dự
                  <br />(7.000+ Tân sinh viên K32)
                </div>
              </div>
              <ChevronRight
                size={14}
                className="hidden lg:block text-white/30 absolute right-1.5 top-1/2 -translate-y-1/2"
              />
            </div>

            {/* Column 04: Activities & Experiences */}
            <div className="flex items-start gap-3.5 pt-1 sm:pt-0">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#E52C47]/10 text-[#E52C47] flex items-center justify-center flex-shrink-0 mt-0.5">
                <Megaphone size={18} strokeWidth={2.2} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-white font-extrabold text-[14.5px] sm:text-[16px] tracking-tight leading-tight">
                  04 Cụm trải nghiệm
                </div>
                <div className="text-[#98A2B3] text-[11.5px] sm:text-[12px] mt-0.5 sm:mt-1 font-medium leading-snug">
                  Bùng nổ hoạt động
                  <br />& kết nối thương hiệu
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Corner: Scroll Indicator */}
        <div className="relative z-20 flex items-end justify-between lg:justify-end gap-8 pb-2">
          {/* Scroll Hint */}
          <a
            href="#story"
            className="flex items-center gap-2 text-white/70 hover:text-white text-[11.5px] font-bold tracking-[0.2em] uppercase transition-colors drop-shadow-md"
          >
            <span>CUỘN ĐỂ KHÁM PHÁ</span>
            <Mouse size={15} className="animate-bounce text-[#E52C47]" />
          </a>
        </div>
      </div>
    </section>
  );
}
