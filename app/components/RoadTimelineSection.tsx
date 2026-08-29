/**
 * ==============================================================================
 * PHÂN HỆ: 12 · LỘ TRÌNH (ROADMAP TIMELINE)
 * ------------------------------------------------------------------------------
 * Mục đích: Tái tạo chính xác 95%+ giao diện Road Timeline uốn lượn 8 mốc thời gian
 * từ đề xuất đến ngày Hội Khai giảng và nghiệm thu theo đúng bản thiết kế mẫu.
 * ==============================================================================
 */

"use client";

import React from "react";
import {
  FileCheck2,
  UsersRound,
  ClipboardCheck,
  FilePenLine,
  ScanLine,
  Clapperboard,
  GraduationCap,
  FileChartColumn,
  type LucideIcon,
} from "lucide-react";

interface RoadmapItem {
  id: number;
  date: string;
  label: string;
  icon: LucideIcon;
  theme: "red" | "navy" | "highlight-red" | "red-outline";
  position: "top" | "bottom";
  x: number; // Tọa độ X trên canvas 1320px
  y: number; // Tọa độ Y của node trên road
}

const roadmapData: RoadmapItem[] = [
  {
    id: 1,
    date: "Chờ xác nhận",
    label: "Phê duyệt proposal",
    icon: FileCheck2,
    theme: "red",
    position: "top",
    x: 160,
    y: 195,
  },
  {
    id: 2,
    date: "Chờ xác nhận",
    label: "Tiếp cận & đàm phán",
    icon: UsersRound,
    theme: "navy",
    position: "bottom",
    x: 300,
    y: 345,
  },
  {
    id: 3,
    date: "Chờ xác nhận",
    label: "Chốt nhà tài trợ",
    icon: ClipboardCheck,
    theme: "red",
    position: "top",
    x: 440,
    y: 195,
  },
  {
    id: 4,
    date: "Chờ xác nhận",
    label: "Hợp đồng, logo & hiện vật",
    icon: FilePenLine,
    theme: "navy",
    position: "bottom",
    x: 580,
    y: 345,
  },
  {
    id: 5,
    date: "Chờ xác nhận",
    label: "Chốt sơ đồ không gian",
    icon: ScanLine,
    theme: "red",
    position: "top",
    x: 720,
    y: 195,
  },
  {
    id: 6,
    date: "Chờ xác nhận",
    label: "Sản xuất & tổng duyệt",
    icon: Clapperboard,
    theme: "navy",
    position: "bottom",
    x: 860,
    y: 345,
  },
  {
    id: 7,
    date: "Dự kiến 26–27/09",
    label: "Hội Khai giảng",
    icon: GraduationCap,
    theme: "highlight-red",
    position: "top",
    x: 1000,
    y: 195,
  },
  {
    id: 8,
    date: "Theo thỏa thuận",
    label: "Nghiệm thu & báo cáo",
    icon: FileChartColumn,
    theme: "red-outline",
    position: "bottom",
    x: 1140,
    y: 345,
  },
];

export default function RoadTimelineSection() {
  // SVG Road Path Definition (Cubic Bezier Waves through 8 milestone nodes)
  const roadPathD = `
    M 70 195
    C 115 195, 125 195, 160 195
    C 225 195, 235 345, 300 345
    C 365 345, 375 195, 440 195
    C 505 195, 515 345, 580 345
    C 645 345, 655 195, 720 195
    C 785 195, 795 345, 860 345
    C 925 345, 935 195, 1000 195
    C 1065 195, 1075 345, 1140 345
    L 1210 345
  `;

  return (
    <section
      id="event-timeline"
      className="relative w-full overflow-hidden bg-[#FCFBF9] py-14 sm:py-16 lg:py-24 border-b border-[#ECEEF5] select-none"
      style={{
        backgroundImage:
          "radial-gradient(circle at 94% 10%, rgba(223,31,50,0.05) 0%, transparent 28%), radial-gradient(circle at 6% 92%, rgba(10,27,74,0.03) 0%, transparent 30%)",
      }}
    >
      {/* 1. DECORATIVE BACKGROUND: BOTTOM-LEFT BUILDING LINE-ART */}
      <div
        className="absolute left-[-20px] bottom-[-20px] w-[340px] sm:w-[460px] lg:w-[540px] pointer-events-none opacity-[0.08] text-[#DF1F32] z-0"
        aria-hidden="true"
      >
        <svg viewBox="0 0 500 380" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-full h-auto">
          {/* Main Building Facade Outlines */}
          <polygon points="40,340 40,180 180,130 180,340" />
          <polygon points="180,130 380,80 380,340 180,340" />
          <polygon points="40,180 180,130 380,80 240,40" />
          {/* Windows / Grids */}
          <line x1="60" y1="210" x2="160" y2="175" />
          <line x1="60" y1="240" x2="160" y2="205" />
          <line x1="60" y1="270" x2="160" y2="235" />
          <line x1="60" y1="300" x2="160" y2="265" />
          <line x1="200" y1="160" x2="360" y2="120" />
          <line x1="200" y1="190" x2="360" y2="150" />
          <line x1="200" y1="220" x2="360" y2="180" />
          <line x1="200" y1="250" x2="360" y2="210" />
          <line x1="200" y1="280" x2="360" y2="240" />
          <line x1="200" y1="310" x2="360" y2="270" />
          {/* Shield Logo on building facade */}
          <path d="M 80,215 L 140,195 L 140,245 Q 110,270 80,245 Z" strokeWidth="2.2" />
          <text x="75" y="275" fontSize="10" fontWeight="900" fill="currentColor" letterSpacing="0.1em">
            VAN LANG UNIVERSITY
          </text>
          {/* Steps & Base Plinth */}
          <line x1="20" y1="340" x2="420" y2="340" strokeWidth="2.5" />
          <line x1="10" y1="355" x2="440" y2="355" strokeWidth="2.5" />
          <line x1="0" y1="370" x2="460" y2="370" strokeWidth="3" />
        </svg>
      </div>

      {/* 2. DECORATIVE BACKGROUND: TOP-RIGHT PAPER PLANE & DOTTED ARC */}
      <div
        className="absolute right-4 sm:right-10 lg:right-16 top-6 sm:top-10 pointer-events-none z-10"
        aria-hidden="true"
      >
        <svg viewBox="0 0 260 140" className="w-[180px] sm:w-[240px] lg:w-[280px] h-auto overflow-visible">
          <defs>
            <linearGradient id="plane-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF6B7A" />
              <stop offset="60%" stopColor="#DF1F32" />
              <stop offset="100%" stopColor="#B31222" />
            </linearGradient>
          </defs>
          {/* Curved Dotted Flight Trail */}
          <path
            d="M 10,125 Q 110,110 180,60"
            fill="none"
            stroke="#DF1F32"
            strokeWidth="2"
            strokeDasharray="4 6"
            opacity="0.38"
          />
          {/* Origami Red Paper Plane */}
          <g transform="translate(180, 20) rotate(-10) scale(0.85)">
            <polygon points="0,40 70,0 35,45" fill="url(#plane-grad)" opacity="0.9" />
            <polygon points="35,45 70,0 48,52" fill="#DF1F32" />
            <polygon points="0,40 35,45 28,62" fill="#B31222" opacity="0.75" />
            <polygon points="28,62 35,45 48,52" fill="#8C0D19" opacity="0.6" />
          </g>
        </svg>
      </div>

      {/* 3. DECORATIVE BACKGROUND: RIGHT ORGANIC PINK/RED RIBBON CURVES */}
      <div
        className="absolute right-[-100px] top-[-50px] bottom-[-50px] w-[450px] pointer-events-none opacity-[0.05] z-0"
        aria-hidden="true"
      >
        <svg viewBox="0 0 450 800" fill="none" className="w-full h-full">
          <path
            d="M 450,0 Q 150,300 450,800 L 450,800 Z"
            fill="url(#plane-grad)"
          />
          <path
            d="M 450,100 Q 220,380 450,700"
            stroke="#DF1F32"
            strokeWidth="40"
          />
        </svg>
      </div>

      {/* ====================================================
          MAIN CONTENT CONTAINER
      ==================================================== */}
      <div className="relative z-10 max-w-[1720px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
        {/* SECTION HEADER (Eyebrow, Main 2-Line Heading, Red Rule with Dot) */}
        <div className="reveal mb-10 sm:mb-12 max-w-2xl">
          {/* Eyebrow Label */}
          <span className="block text-[#DF1F32] font-bold text-[14px] sm:text-[16px] tracking-[0.18em] uppercase mb-2.5">
            12 · LỘ TRÌNH
          </span>

          {/* Main Title (2 Lines) */}
          <h2 className="text-[#08183C] font-extrabold text-[40px] sm:text-[54px] md:text-[68px] lg:text-[76px] leading-[0.98] tracking-[-0.045em] font-display m-0">
            Từ đề xuất<br />đến ngày hội
          </h2>

          {/* Decorative Red Line with End Dot */}
          <div className="flex items-center gap-2 mt-4 sm:mt-5" aria-hidden="true">
            <div className="w-[48px] sm:w-[54px] h-[3.5px] bg-[#DF1F32] rounded-full" />
            <div className="w-[4px] h-[3.5px] bg-[#DF1F32] rounded-full" />
          </div>
        </div>

        {/* ====================================================
            DESKTOP & TABLET: HORIZONTAL WINDING ROAD TIMELINE
        ==================================================== */}
        <div className="hidden md:block w-full overflow-x-auto pb-6 scrollbar-thin">
          <div className="relative min-w-[1220px] lg:min-w-full w-full h-[530px]">
            {/* SVG ROAD CANVAS */}
            <svg
              viewBox="0 0 1320 540"
              className="absolute inset-0 w-full h-full pointer-events-none z-0"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                {/* Highlight Glow Filter for Node 7 */}
                <filter id="node7-glow" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="8" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* 1. Road Base Stroke (Thick Gray Asphalt) */}
              <path
                d={roadPathD}
                fill="none"
                stroke="#C0C7D5"
                strokeWidth="26"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* 2. White Center Dashed Line */}
              <path
                d={roadPathD}
                fill="none"
                stroke="rgba(255, 255, 255, 0.95)"
                strokeWidth="2.5"
                strokeDasharray="10 12"
                strokeLinecap="round"
              />

              {/* 3. Road End Arrow Head */}
              <polygon points="1200,328 1235,345 1200,362" fill="#C0C7D5" />

              {/* 4. Vertical Connector Lines & Dots */}
              {roadmapData.map((item) => {
                const isTop = item.position === "top";
                const y1 = isTop ? 142 : 372;
                const y2 = isTop ? 168 : 398;
                const strokeColor =
                  item.theme === "navy" ? "#0A1B4A" : "#DF1F32";

                return (
                  <g key={`conn-${item.id}`}>
                    <line
                      x1={item.x}
                      y1={y1}
                      x2={item.x}
                      y2={y2}
                      stroke={strokeColor}
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <circle
                      cx={item.x}
                      cy={isTop ? y1 : y2}
                      r="2.5"
                      fill={strokeColor}
                    />
                  </g>
                );
              })}
            </svg>

            {/* MILESTONE NODES & CARDS PLACED PRECISELY */}
            {roadmapData.map((item, idx) => {
              const Icon = item.icon;
              const isTop = item.position === "top";
              const isHighlight = item.theme === "highlight-red";
              const isNavy = item.theme === "navy";
              const isRed = item.theme === "red" || item.theme === "red-outline";

              // Percent Coordinates
              const leftPercent = (item.x / 1320) * 100;
              const nodeTopPercent = (item.y / 540) * 100;

              return (
                <React.Fragment key={item.id}>
                  {/* --- CIRCULAR NUMBER NODE ON ROAD --- */}
                  <div
                    className="absolute z-20 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-transform duration-300 hover:scale-110"
                    style={{
                      left: `${leftPercent}%`,
                      top: `${nodeTopPercent}%`,
                    }}
                  >
                    <div
                      className={`w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center font-extrabold text-[21px] shadow-[0_4px_16px_rgba(0,0,0,0.12)] border-[4px] ${
                        isNavy
                          ? "border-[#0A1B4A] text-[#0A1B4A]"
                          : isHighlight
                          ? "border-[#DF1F32] text-[#DF1F32] shadow-[0_0_0_5px_rgba(223,31,50,0.2),0_4px_20px_rgba(223,31,50,0.4)]"
                          : "border-[#DF1F32] text-[#DF1F32]"
                      }`}
                    >
                      {item.id}
                    </div>
                  </div>

                  {/* --- MILESTONE CARD (ALTERNATING TOP / BOTTOM) --- */}
                  <div
                    className={`absolute z-30 -translate-x-1/2 transition-all duration-300 hover:-translate-y-1.5 ${
                      isTop
                        ? "bottom-[calc(100%-140px)]"
                        : "top-[400px]"
                    }`}
                    style={{
                      left: `${leftPercent}%`,
                    }}
                  >
                    <article
                      className={`w-[158px] min-h-[142px] p-3.5 sm:p-4 rounded-2xl text-center flex flex-col items-center justify-center transition-shadow duration-300 ${
                        isHighlight
                          ? "bg-gradient-to-br from-[#F01836] to-[#C91427] text-white shadow-[0_12px_32px_rgba(220,20,45,0.32)] border border-white/40 scale-[1.04]"
                          : item.theme === "red-outline"
                          ? "bg-white text-[#08183C] shadow-[0_6px_22px_rgba(30,35,55,0.08)] border border-[rgba(223,31,50,0.28)]"
                          : "bg-white text-[#08183C] shadow-[0_6px_22px_rgba(30,35,55,0.08)] border border-[rgba(20,30,60,0.07)]"
                      }`}
                    >
                      {/* Icon Circle Container */}
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center mb-2.5 transition-transform duration-300 group-hover:scale-105 ${
                          isHighlight
                            ? "bg-white text-[#DF1F32] shadow-sm"
                            : isNavy
                            ? "bg-[#0A1B4A]/[0.07] text-[#0A1B4A]"
                            : "bg-[#DF1F32]/[0.08] text-[#DF1F32]"
                        }`}
                      >
                        <Icon size={24} strokeWidth={1.8} />
                      </div>

                      {/* Date Text */}
                      <span
                        className={`block font-extrabold text-[16.5px] leading-tight tracking-tight mb-1 font-display ${
                          isHighlight
                            ? "text-white"
                            : isNavy
                            ? "text-[#08183C]"
                            : "text-[#DF1F32]"
                        }`}
                      >
                        {item.date}
                      </span>

                      {/* Label Text */}
                      <span
                        className={`block text-[12px] font-semibold leading-[1.3] ${
                          isHighlight ? "text-white/95" : "text-[#4A5568]"
                        }`}
                      >
                        {item.label}
                      </span>
                    </article>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* ====================================================
            MOBILE RESPONSIVE: CLEAN VERTICAL TIMELINE
        ==================================================== */}
        <div className="md:hidden relative pl-6 pr-2">
          {/* Vertical Track Line */}
          <div
            className="absolute left-[23px] top-4 bottom-6 w-[3px] bg-gradient-to-b from-[#DF1F32] via-[#0A1B4A] to-[#DF1F32] rounded-full opacity-30"
            aria-hidden="true"
          />

          <div className="flex flex-col gap-5">
            {roadmapData.map((item) => {
              const Icon = item.icon;
              const isHighlight = item.theme === "highlight-red";
              const isNavy = item.theme === "navy";

              return (
                <div key={`m-${item.id}`} className="relative flex items-center gap-4">
                  {/* Number Node */}
                  <div
                    className={`relative z-10 w-[44px] h-[44px] rounded-full bg-white flex items-center justify-center font-extrabold text-[17px] shadow-md border-[3.5px] flex-shrink-0 ${
                      isNavy
                        ? "border-[#0A1B4A] text-[#0A1B4A]"
                        : isHighlight
                        ? "border-[#DF1F32] text-[#DF1F32] ring-4 ring-[#DF1F32]/20"
                        : "border-[#DF1F32] text-[#DF1F32]"
                    }`}
                  >
                    {item.id}
                  </div>

                  {/* Card Content */}
                  <article
                    className={`flex-1 p-4 rounded-2xl flex items-center gap-3.5 shadow-sm border ${
                      isHighlight
                        ? "bg-gradient-to-br from-[#F01836] to-[#C91427] text-white border-white/30 shadow-[0_8px_24px_rgba(220,20,45,0.25)]"
                        : item.theme === "red-outline"
                        ? "bg-white text-[#08183C] border-[rgba(223,31,50,0.28)]"
                        : "bg-white text-[#08183C] border-gray-100"
                    }`}
                  >
                    {/* Icon */}
                    <div
                      className={`w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 ${
                        isHighlight
                          ? "bg-white text-[#DF1F32]"
                          : isNavy
                          ? "bg-[#0A1B4A]/10 text-[#0A1B4A]"
                          : "bg-[#DF1F32]/10 text-[#DF1F32]"
                      }`}
                    >
                      <Icon size={22} strokeWidth={1.8} />
                    </div>

                    {/* Meta */}
                    <div className="min-w-0 flex-1">
                      <span
                        className={`block font-extrabold text-[16px] leading-tight ${
                          isHighlight
                            ? "text-white"
                            : isNavy
                            ? "text-[#08183C]"
                            : "text-[#DF1F32]"
                        }`}
                      >
                        {item.date}
                      </span>
                      <span
                        className={`block text-[13px] font-medium leading-snug mt-0.5 ${
                          isHighlight ? "text-white/90" : "text-[#556075]"
                        }`}
                      >
                        {item.label}
                      </span>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
