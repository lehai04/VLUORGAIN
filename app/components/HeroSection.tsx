/**
 * ==============================================================================
 * COMPONENT: HERO SECTION (CINEMATIC EVENT LANDING HERO)
 * ------------------------------------------------------------------------------
 * Tái tạo 95% visual reference chuẩn điện ảnh:
 * - Nền: Drone view toàn cảnh đêm Hội Khai giảng Văn Lang 2025 với hàng nghìn sinh viên & sân khấu.
 * - Top Navigation: Logo trắng VLU + Menu tối giản + Nút CTA viên thuốc đỏ có mũi tên tròn trắng.
 * - Cột trái Typography:
 *   + Eyebrow: Vạch đỏ + HỘI KHAI GIẢNG 2026
 *   + Tiêu đề 3 tầng: "MỞ RA" (trắng lớn) + "HÀNH TRÌNH MỚI" (đỏ cọ nghệ thuật) + "CÙNG VĂN LANG" (trắng lớn)
 *   + Vệt sáng neon đỏ (Red Light Trail) uốn quanh tiêu đề.
 *   + Thông điệp: "Nơi bạn được nhìn thấy" ✦
 *   + Nút CTA duy nhất: "KHÁM PHÁ CƠ HỘI ĐỒNG HÀNH →" (viền đỏ phát sáng, nền tối trong suốt).
 * - Information Glass Panel (đáy trái & giữa):
 *   + 4 cột thông tin: Ngày giờ (26-27.09.2026), Địa điểm (Trịnh Công Sơn & Đông Sơn), Quy mô (Hàng nghìn sinh viên), Hoạt động.
 * - Đáy phải: Quầng sáng đỏ + Biểu tượng VLU phát sáng + Vệt sáng chéo + Nút "CUỘN ĐỂ KHÁM PHÁ".
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
  Sparkles,
} from "lucide-react";
import { images } from "../data";

export default function HeroSection() {
  const [menu, setMenu] = useState(false);

  return (
    <section id="top" className="relative w-full min-h-screen min-h-[920px] bg-[#070913] text-white overflow-hidden flex flex-col justify-between">
      {/* 1. BACKGROUND MEDIA (VIDEO / FALLBACK IMAGE) */}
      <div className="absolute inset-0 z-0">
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

        {/* Cinematic Vignette & Gradients */}
        {/* Left deep shadow for typography contrast */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, rgba(5,7,18,0.95) 0%, rgba(5,7,18,0.85) 34%, rgba(5,7,18,0.4) 62%, rgba(5,7,18,0.15) 100%)",
          }}
          aria-hidden="true"
        />

        {/* Top shadow for navigation */}
        <div
          className="absolute top-0 left-0 right-0 h-40 pointer-events-none"
          style={{
            background: "linear-gradient(180deg, rgba(4,6,15,0.9) 0%, rgba(4,6,15,0.4) 60%, transparent 100%)",
          }}
          aria-hidden="true"
        />

        {/* Bottom vignette */}
        <div
          className="absolute bottom-0 left-0 right-0 h-72 pointer-events-none"
          style={{
            background: "linear-gradient(0deg, rgba(4,6,15,0.95) 0%, rgba(4,6,15,0.5) 50%, transparent 100%)",
          }}
          aria-hidden="true"
        />

        {/* Dramatic Bottom-Right Red-Orange Glow */}
        <div
          className="absolute -bottom-10 -right-10 w-[600px] sm:w-[750px] h-[600px] sm:h-[750px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 75% 75%, rgba(229,44,71,0.48) 0%, rgba(234,66,88,0.24) 35%, rgba(215,33,52,0.06) 65%, transparent 75%)",
            filter: "blur(32px)",
          }}
          aria-hidden="true"
        />
      </div>

      {/* 2. TOP NAVIGATION (TRANSPARENT MINIMALIST OVERLAY) */}
      <header className="relative z-30 w-full max-w-[1780px] mx-auto px-6 sm:px-10 lg:px-16 pt-8 pb-4 flex items-center justify-between">
        {/* Top-Left Brand Logo (Lpgo_VLU.png) */}
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
        <div className="hidden lg:flex items-center gap-8">
          {/* Top-Right Navigation Menu */}
          <nav className="flex items-center gap-8 text-[15px] font-medium text-white/90">
            {[
              ["Câu chuyện", "#story"],
              ["Điểm chạm", "#journey"],
              ["Quyền lợi", "#benefits"],
              ["Gói tài trợ", "#packages"],
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

          {/* Far-Right CTA Pill Button with Circular White Arrow (Consistent 15px font & refined size) */}
          <a
            href="#contact"
            className="group flex items-center gap-2.5 bg-[#E52C47] hover:bg-[#D71920] text-white pl-5 pr-1.5 py-1.5 rounded-full font-semibold text-[15px] shadow-[0_4px_20px_rgba(229,44,71,0.4)] hover:shadow-[0_6px_28px_rgba(229,44,71,0.6)] transition-all duration-300 ml-4 flex-shrink-0"
          >
            <span>Đăng ký đồng hành</span>
            <span className="w-7 h-7 rounded-full bg-white text-[#E52C47] flex items-center justify-center flex-shrink-0 group-hover:translate-x-0.5 transition-transform shadow-sm">
              <ArrowRight size={14} strokeWidth={2.5} />
            </span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenu(!menu)}
          className="lg:hidden p-2 rounded-lg bg-white/10 text-white"
          aria-label="Mở menu"
        >
          ☰
        </button>
      </header>

      {/* Mobile Drawer Menu */}
      {menu && (
        <div className="lg:hidden fixed inset-0 z-40 bg-[#070913]/95 backdrop-blur-xl flex flex-col p-8 pt-24 gap-6 text-xl font-bold">
          <button
            type="button"
            onClick={() => setMenu(false)}
            className="absolute top-6 right-6 text-2xl text-white/80"
          >
            ✕
          </button>
          {[
            ["Câu chuyện", "#story"],
            ["Điểm chạm", "#journey"],
            ["Quyền lợi", "#benefits"],
            ["Gói tài trợ", "#packages"],
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

      {/* 3. MAIN HERO CONTENT AREA (LEFT-ALIGNED) - SHIFTED DOWN FOR OPTIMAL SPACING */}
      <div className="relative z-20 w-full max-w-[1780px] mx-auto px-6 sm:px-10 lg:px-16 pt-12 sm:pt-20 md:pt-28 pb-8 sm:pb-12 my-auto">
        <div className="max-w-3xl">
          {/* Eyebrow with Red Vertical Bar */}
          <div className="flex items-center gap-2.5 mb-4 sm:mb-6">
            <span className="w-[3.5px] h-4 bg-[#E52C47] rounded-full shadow-[0_0_8px_#E52C47]" />
            <span className="text-[#E52C47] font-bold text-[13px] sm:text-[14px] tracking-[0.24em] uppercase">
              HỘI KHAI GIẢNG 2026
            </span>
          </div>

          {/* MAIN HEADLINE WITH DYNAMIC RED NEON TRAIL */}
          <div className="relative mb-6 select-none">
            {/* Red Neon Light Trail SVG wrapping around headline */}
            <svg
              className="absolute -top-10 -left-12 w-[120%] sm:w-[130%] h-[130%] pointer-events-none z-0 opacity-90"
              viewBox="0 0 600 240"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <defs>
                <filter id="neon-glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="6" result="blur1" />
                  <feGaussianBlur stdDeviation="14" result="blur2" />
                  <feMerge>
                    <feMergeNode in="blur2" />
                    <feMergeNode in="blur1" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              {/* Outer soft glow loop */}
              <path
                d="M 20 120 C 60 20, 240 10, 380 70 C 500 120, 480 200, 320 210 C 160 220, 60 170, 100 100 C 140 30, 360 20, 520 80"
                stroke="#E52C47"
                strokeWidth="7"
                strokeLinecap="round"
                opacity="0.6"
                filter="url(#neon-glow)"
              />
              {/* Inner intense white-red core line */}
              <path
                d="M 20 120 C 60 20, 240 10, 380 70 C 500 120, 480 200, 320 210 C 160 220, 60 170, 100 100 C 140 30, 360 20, 520 80"
                stroke="#FFFFFF"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.9"
              />
            </svg>

            {/* Headline Tier 1: "MỞ RA" */}
            <div className="relative z-10 text-white font-black text-[44px] sm:text-[76px] md:text-[96px] lg:text-[116px] leading-[0.88] tracking-[-0.04em] uppercase">
              MỞ RA
            </div>

            {/* Headline Tier 2: "HÀNH TRÌNH MỚI" (Expressive Red Brush Script) */}
            <div
              className="relative z-20 text-[#E52C47] italic font-black text-[30px] sm:text-[50px] md:text-[68px] lg:text-[80px] leading-[0.9] tracking-[-0.03em] -mt-1 sm:-mt-3 ml-2 sm:ml-6 transform -rotate-[2.5deg] drop-shadow-[0_4px_24px_rgba(229,44,71,0.6)]"
              style={{
                textShadow: "0 0 35px rgba(229,44,71,0.7), 0 0 10px rgba(255,255,255,0.4)",
              }}
            >
              HÀNH TRÌNH MỚI
            </div>

            {/* Headline Tier 3: "CÙNG VĂN LANG" */}
            <div className="relative z-10 text-white font-black text-[34px] sm:text-[60px] md:text-[78px] lg:text-[94px] leading-[0.92] tracking-[-0.04em] uppercase mt-1 sm:mt-2">
              CÙNG VĂN LANG
            </div>
          </div>

          {/* Supporting Slogan: "Nơi bạn được nhìn thấy" ✦ */}
          <div className="flex items-center gap-2 mb-2 sm:mb-3">
            <h3 className="text-white text-[18px] sm:text-[22px] md:text-[25px] font-bold tracking-tight m-0">
              Nơi bạn được nhìn thấy
            </h3>
            <span className="text-[#E52C47] text-lg sm:text-xl drop-shadow-[0_0_8px_#E52C47]">
              ✦
            </span>
          </div>

          {/* Descriptive Copy */}
          <p className="text-[#C5C9D6] text-[14px] sm:text-[16px] leading-relaxed max-w-xl mb-6 sm:mb-8">
            Đồng hành tài trợ cùng VLU, kết nối thương hiệu với hàng nghìn sinh viên và cộng đồng trẻ năng động.
          </p>

          {/* PRIMARY CTA (ONLY ONE BUTTON - FULL WIDTH ON MOBILE) */}
          <div className="flex items-center gap-4">
            <a
              href="#journey"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 bg-[#10132B]/80 hover:bg-[#E52C47] border-[1.5px] border-[#E52C47] text-white font-bold text-[13.5px] sm:text-[15px] uppercase tracking-wider rounded-xl shadow-[0_0_24px_rgba(229,44,71,0.35)] hover:shadow-[0_0_36px_rgba(229,44,71,0.7)] transition-all duration-300 min-h-[48px]"
            >
              <span>Khám phá cơ hội đồng hành</span>
              <span className="text-[#E52C47] group-hover:text-white transition-colors">
                →
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* 4. BOTTOM INFORMATION PANEL & BRAND MARK */}
      <div className="relative z-20 w-full max-w-[1780px] mx-auto px-5 sm:px-8 lg:px-16 pb-8 sm:pb-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8">
        
        {/* Left Information Glass Panel (~64% Width) */}
        <div className="w-full lg:w-[68%] xl:w-[65%] bg-[#0B0E23]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-6 shadow-[0_16px_40px_rgba(0,0,0,0.6)]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-4 items-center">
            
            {/* Column 01: Date & Time */}
            <div className="flex items-start gap-3.5 border-b sm:border-b-0 sm:border-r border-white/10 pb-3 sm:pb-0 pr-0 sm:pr-2 relative">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#E52C47]/10 text-[#E52C47] flex items-center justify-center flex-shrink-0 mt-0.5">
                <CalendarDays size={19} strokeWidth={2.2} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-white font-extrabold text-[16px] sm:text-[18px] tracking-tight leading-tight">
                  26–27.09.2026
                </div>
                <div className="text-[#98A2B3] text-[12px] sm:text-[12.5px] mt-0.5 sm:mt-1 font-medium">
                  08:00 - 21:00
                </div>
              </div>
              <ChevronRight size={14} className="hidden lg:block text-white/30 absolute right-1.5 top-1/2 -translate-y-1/2" />
            </div>

            {/* Column 02: Venue Sessions */}
            <div className="flex items-start gap-3.5 border-b sm:border-b-0 sm:border-r border-white/10 pb-3 sm:pb-0 pr-0 sm:pr-2 relative">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#E52C47]/10 text-[#E52C47] flex items-center justify-center flex-shrink-0 mt-0.5">
                <MapPin size={19} strokeWidth={2.2} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-white font-bold text-[13px] sm:text-[13.5px] leading-tight truncate">
                  Hội trường Trịnh Công Sơn
                </div>
                <div className="text-[#98A2B3] text-[11px] sm:text-[11.5px] mb-1">
                  14:00 - 26/09
                </div>
                <div className="text-white font-bold text-[13px] sm:text-[13.5px] leading-tight truncate">
                  Quảng trường Đông Sơn
                </div>
                <div className="text-[#98A2B3] text-[11px] sm:text-[11.5px]">
                  14:00 - 27/09
                </div>
              </div>
              <ChevronRight size={14} className="hidden lg:block text-white/30 absolute right-1.5 top-1/2 -translate-y-1/2" />
            </div>

            {/* Column 03: Audience Scale */}
            <div className="flex items-start gap-3.5 border-b sm:border-b-0 sm:border-r border-white/10 pb-3 sm:pb-0 pr-0 sm:pr-2 relative">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#E52C47]/10 text-[#E52C47] flex items-center justify-center flex-shrink-0 mt-0.5">
                <Users size={19} strokeWidth={2.2} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-white font-extrabold text-[15px] sm:text-[17px] tracking-tight leading-tight">
                  Hàng nghìn
                </div>
                <div className="text-[#98A2B3] text-[11.5px] sm:text-[12px] mt-0.5 sm:mt-1 font-medium leading-snug">
                  Sinh viên tham dự<br />& cộng đồng trẻ
                </div>
              </div>
              <ChevronRight size={14} className="hidden lg:block text-white/30 absolute right-1.5 top-1/2 -translate-y-1/2" />
            </div>

            {/* Column 04: Activities & Experiences */}
            <div className="flex items-start gap-3.5 pt-1 sm:pt-0">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#E52C47]/10 text-[#E52C47] flex items-center justify-center flex-shrink-0 mt-0.5">
                <Megaphone size={19} strokeWidth={2.2} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-white font-extrabold text-[14.5px] sm:text-[16px] tracking-tight leading-tight">
                  Nhiều hoạt động
                </div>
                <div className="text-[#98A2B3] text-[11.5px] sm:text-[12px] mt-0.5 sm:mt-1 font-medium leading-snug">
                  Bùng nổ trải nghiệm<br />& kết nối thương hiệu
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
            className="flex items-center gap-2 text-white/80 hover:text-white text-[11.5px] font-bold tracking-[0.2em] uppercase transition-colors drop-shadow-md"
          >
            <span>CUỘN ĐỂ KHÁM PHÁ</span>
            <Mouse size={15} className="animate-bounce text-[#E52C47]" />
          </a>
        </div>
      </div>
    </section>
  );
}
