/**
 * ==============================================================================
 * PHÂN HỆ: 13 · LET'S PARTNER (LIÊN HỆ & KẾT THÚC PROPOSAL)
 * ------------------------------------------------------------------------------
 * Thiết kế chuẩn Editorial & Institutional bám sát 90-95% thiết kế tham chiếu:
 * - Nền trắng ivory (#FBFAF8) sáng sủa, thanh lịch, nhiều khoảng trắng.
 * - Bố cục 2 cột:
 *   + Cột trái: Heading serif 3 dòng (dòng giữa italic gradient đỏ), thông tin
 *     đầu mối tài trợ, 2 link CTA gạch chân đỏ, 3 kênh liên hệ kèm circle icon
 *     và hộp QR code minh họa kết nối form.
 *   + Cột phải: Hero image khuôn viên Văn Lang với hình khối bo cong bất đối xứng
 *     (120px 0 120px 120px), text script "Together for a greater future",
 *     khối quote nổi góc trên bên phải "Kiến tạo những giá trị tốt đẹp hơn" và
 *     shape sóng trắng hữu cơ góc dưới bên phải mang chữ VAN LANG UNIVERSITY.
 * ==============================================================================
 */

"use client";

import Image from "next/image";
import { useState } from "react";
import { Mail, Phone, Globe2, ChevronRight, X, Send, CheckCircle2 } from "lucide-react";
import { event } from "../data";

export default function ContactSection() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsContactModalOpen(false);
    }, 2500);
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-[#FBFAF8] py-20 lg:py-28 overflow-hidden border-t border-[rgba(18,41,79,0.06)]"
      style={{
        backgroundImage:
          "radial-gradient(circle at 85% 70%, rgba(230, 40, 55, 0.035), transparent 35%), radial-gradient(circle at 15% 30%, rgba(20, 45, 90, 0.02), transparent 40%)",
      }}
      aria-labelledby="contact-main-heading"
    >
      {/* Decorative diagonal background glow */}
      <div
        className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[rgba(225,232,245,0.35)] to-transparent blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24">
        {/* Main 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-16 items-center">
          
          {/* ====================================================
              CỘT TRÁI (LEFT CONTENT): ~44% CHIỀU RỘNG
          ==================================================== */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-center reveal">
            {/* 1. Section Eyebrow */}
            <span className="block text-[#E52C47] font-bold text-[14px] md:text-[15px] tracking-[0.2em] uppercase mb-4 md:mb-5">
              13 · LET&apos;S PARTNER
            </span>

            {/* 2. Main Heading (3 Lines) - Single Unified Font (Be Vietnam Pro) */}
            <h2
              id="contact-main-heading"
              className="text-[#12294F] text-[42px] sm:text-[50px] md:text-[56px] xl:text-[62px] leading-[1.05] tracking-[-0.03em] m-0 font-extrabold"
            >
              <span className="block text-[#12294F] font-extrabold">
                Cùng Văn Lang tạo
              </span>
              <span className="block italic font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#E52C47] via-[#EA4258] to-[#F27C6F] my-0.5">
                nên một khởi đầu
              </span>
              <span className="block text-[#12294F] font-extrabold">
                đáng nhớ
              </span>
            </h2>

            {/* 3. Red Accent Line */}
            <div
              className="w-[52px] h-[3px] bg-[#E52C47] rounded-full my-5 md:my-6"
              aria-hidden="true"
            />

            {/* 4. Contact Person */}
            <p className="text-[#5A6A86] text-[16px] md:text-[17.5px] font-medium leading-relaxed mb-6 md:mb-7">
              Đầu mối tài trợ · Nguyễn Thu Hiền · Trung tâm Hỗ trợ Sinh viên
            </p>

            {/* 5. CTA Text Links Row */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-9 mb-8 md:mb-9">
              <a
                href="/VLU-Hoi-Khai-Giang-2026-Proposal-Draft.txt"
                download
                className="group inline-flex items-center gap-2 pb-2.5 border-b-[1.5px] border-[rgba(229,44,71,0.4)] text-[#12294F] font-semibold text-[15.5px] md:text-[16.5px] transition-colors hover:text-[#E52C47] hover:border-[#E52C47]"
              >
                <span>Tải hồ sơ tài trợ</span>
                <span className="text-[#E52C47] transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <button
                type="button"
                onClick={() => setIsContactModalOpen(true)}
                className="group inline-flex items-center gap-2 pb-2.5 border-b-[1.5px] border-[rgba(229,44,71,0.4)] text-[#12294F] font-semibold text-[15.5px] md:text-[16.5px] transition-colors hover:text-[#E52C47] hover:border-[#E52C47] bg-transparent cursor-pointer"
              >
                <span>Liên hệ Ban Tổ chức</span>
                <span className="text-[#E52C47] transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>

            {/* 6. Contact Details (Email, Phone, Website) */}
            <div className="flex flex-col gap-4 md:gap-4.5 mb-8 md:mb-9">
              {/* Email */}
              <div className="flex items-center gap-3.5">
                <div className="w-[44px] h-[44px] rounded-full bg-[rgba(229,44,71,0.07)] flex items-center justify-center flex-shrink-0 text-[#E52C47]">
                  <Mail size={19} strokeWidth={1.9} />
                </div>
                <div>
                  <span className="block text-[#60708A] text-[13px] leading-tight">Email:</span>
                  <a
                    href={`mailto:${event.email}`}
                    className="text-[#1A3155] font-semibold text-[15.5px] md:text-[16px] hover:text-[#E52C47] transition-colors"
                  >
                    {event.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3.5">
                <div className="w-[44px] h-[44px] rounded-full bg-[rgba(229,44,71,0.07)] flex items-center justify-center flex-shrink-0 text-[#E52C47]">
                  <Phone size={19} strokeWidth={1.9} />
                </div>
                <div>
                  <span className="block text-[#60708A] text-[13px] leading-tight">Điện thoại:</span>
                  <a
                    href={`tel:${event.phone.replace(/\s+/g, "")}`}
                    className="text-[#1A3155] font-semibold text-[15.5px] md:text-[16px] hover:text-[#E52C47] transition-colors"
                  >
                    {event.phone}
                  </a>
                </div>
              </div>

              {/* Website */}
              <div className="flex items-center gap-3.5">
                <div className="w-[44px] h-[44px] rounded-full bg-[rgba(229,44,71,0.07)] flex items-center justify-center flex-shrink-0 text-[#E52C47]">
                  <Globe2 size={19} strokeWidth={1.9} />
                </div>
                <div>
                  <span className="block text-[#60708A] text-[13px] leading-tight">Website:</span>
                  <a
                    href={`https://${event.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1A3155] font-semibold text-[15.5px] md:text-[16px] hover:text-[#E52C47] transition-colors"
                  >
                    {event.website}
                  </a>
                </div>
              </div>
            </div>

            {/* 7. QR Code Box */}
            <div
              onClick={() => setIsContactModalOpen(true)}
              className="group flex items-center gap-4 p-3.5 pr-5 max-w-[390px] bg-white rounded-2xl border border-[rgba(20,40,70,0.09)] shadow-[0_6px_24px_rgba(18,41,79,0.04)] hover:shadow-[0_10px_32px_rgba(229,44,71,0.08)] hover:border-[rgba(229,44,71,0.3)] transition-all cursor-pointer"
            >
              {/* QR Pattern Icon */}
              <div className="w-[72px] h-[72px] bg-white rounded-lg p-1.5 border border-gray-100 flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 100 100" className="w-full h-full text-[#12294F]" fill="currentColor">
                  {/* Outer corner markers */}
                  <rect x="5" y="5" width="28" height="28" rx="4" fill="none" stroke="currentColor" strokeWidth="6" />
                  <rect x="13" y="13" width="12" height="12" fill="currentColor" />
                  <rect x="67" y="5" width="28" height="28" rx="4" fill="none" stroke="currentColor" strokeWidth="6" />
                  <rect x="75" y="13" width="12" height="12" fill="currentColor" />
                  <rect x="5" y="67" width="28" height="28" rx="4" fill="none" stroke="currentColor" strokeWidth="6" />
                  <rect x="13" y="75" width="12" height="12" fill="currentColor" />
                  {/* Decorative data blocks */}
                  <rect x="42" y="10" width="8" height="8" />
                  <rect x="52" y="18" width="6" height="6" />
                  <rect x="40" y="30" width="10" height="6" />
                  <rect x="10" y="42" width="8" height="10" />
                  <rect x="24" y="48" width="6" height="6" />
                  <rect x="42" y="44" width="16" height="16" rx="2" fill="#E52C47" />
                  <rect x="66" y="42" width="10" height="8" />
                  <rect x="80" y="48" width="8" height="10" />
                  <rect x="40" y="68" width="8" height="14" />
                  <rect x="54" y="72" width="12" height="8" />
                  <rect x="74" y="68" width="10" height="8" />
                  <rect x="68" y="82" width="16" height="8" />
                </svg>
              </div>

              {/* QR Copy */}
              <div className="flex-1 min-w-0">
                <span className="block text-[#1A3155] font-semibold text-[14.5px] leading-snug">
                  QR minh họa
                </span>
                <span className="block text-[#60708A] text-[13px] leading-snug mt-0.5">
                  Kết nối form sau khi duyệt!
                </span>
              </div>

              {/* Chevron Arrow */}
              <ChevronRight
                size={18}
                className="text-[#E52C47] opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all flex-shrink-0"
              />
            </div>
          </div>

          {/* ====================================================
              CỘT PHẢI (RIGHT HERO IMAGE): ~56% CHIỀU RỘNG
          ==================================================== */}
          <div className="lg:col-span-7 xl:col-span-7 relative reveal">
            {/* Hero Container with Custom Asymmetric Curves (120px 0 120px 120px) */}
            <div
              className="relative w-full h-[520px] sm:h-[580px] md:h-[640px] lg:h-[700px] xl:h-[730px] overflow-hidden shadow-[0_24px_60px_rgba(18,41,79,0.12)] border border-[rgba(255,255,255,0.8)]"
              style={{
                borderRadius: "120px 0 120px 120px",
              }}
            >
              {/* Campus Photo Background from available assets */}
              <Image
                src="/images/hoi-khai-giang-2025/toan-canh-ngay.webp"
                alt="Khuôn viên Trường Đại học Văn Lang"
                fill
                unoptimized
                priority
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />

              {/* Soft Warm Gradient Overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(18, 41, 79, 0.22) 0%, rgba(229, 44, 71, 0.08) 50%, rgba(0, 0, 0, 0.38) 100%)",
                }}
                aria-hidden="true"
              />

              {/* Logo VLU Mounted on Building Facade covering the old sign */}
              <div
                className="absolute top-[23%] left-[52%] sm:top-[22%] sm:left-[51%] transform -translate-x-1/2 -translate-y-1/2 z-10 flex items-center bg-[#D71920] px-4 py-2.5 rounded-xl shadow-xl border border-white/20"
                aria-hidden="true"
              >
                <Image
                  src="/images/hoi-khai-giang-2025/Lpgo_VLU.png"
                  alt="VLU Logo"
                  width={150}
                  height={40}
                  unoptimized
                  className="h-6 sm:h-7 w-auto object-contain brightness-0 invert"
                />
              </div>

              {/* Top-Right Floating Quote Box (Bo lệch góc dưới trái) */}
              <div
                className="absolute top-0 right-0 w-[230px] sm:w-[260px] md:w-[280px] p-6 sm:p-7 md:p-8 bg-[rgba(255,255,255,0.88)] backdrop-blur-md z-10"
                style={{
                  borderRadius: "0 0 0 54px",
                }}
              >
                <p className="text-[#3A4B68] text-[18px] sm:text-[20px] md:text-[21px] leading-[1.45] m-0 font-semibold opacity-90">
                  Kiến tạo<br />
                  những giá trị<br />
                  tốt đẹp hơn
                </p>
                <div className="w-[34px] h-[2px] bg-[#B0BAC8] rounded-full mt-3.5" aria-hidden="true" />
              </div>

              {/* Bottom-Left Script Overlay Text: "Together for a greater future" */}
              <div className="absolute bottom-10 sm:bottom-12 left-10 sm:left-14 z-10 max-w-xs">
                <div className="text-white italic font-extrabold text-[34px] sm:text-[40px] md:text-[46px] leading-[1.08] tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.5)]">
                  Together<br />
                  for a greater<br />
                  future
                </div>
                {/* Hand-drawn white underline svg */}
                <svg
                  viewBox="0 0 160 14"
                  className="w-[140px] sm:w-[160px] h-3.5 text-white mt-1 drop-shadow-md"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="M 4 8 Q 80 2 156 9" />
                </svg>
              </div>

              {/* Lower-Right Organic Flowing White Wave Shape with "VAN LANG UNIVERSITY" */}
              <div
                className="absolute bottom-0 right-0 w-[240px] sm:w-[300px] h-[100px] sm:h-[120px] bg-gradient-to-t from-white via-white/95 to-transparent flex items-end justify-end p-6 pr-8 z-10 pointer-events-none"
                style={{
                  borderRadius: "100px 0 0 0",
                }}
              >
                <span className="text-[#8E9CAE] font-bold text-[11px] sm:text-[12px] tracking-[0.16em] uppercase">
                  VAN LANG UNIVERSITY
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ====================================================
          MODAL FORM ĐĂNG KÝ / LIÊN HỆ BAN TỔ CHỨC
      ==================================================== */}
      {isContactModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#08153B]/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setIsContactModalOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-lg bg-white rounded-3xl p-7 sm:p-9 shadow-2xl border border-gray-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsContactModalOpen(false)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center transition-colors"
              aria-label="Đóng"
            >
              <X size={18} />
            </button>

            {submitted ? (
              <div className="py-10 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-green-50 text-green-600 flex items-center justify-center mb-4">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-[#12294F] font-bold text-2xl mb-2 font-serif">
                  Gửi yêu cầu thành công!
                </h3>
                <p className="text-[#5A6A86] text-base max-w-sm">
                  Ban Tổ chức Hội Khai giảng 2026 sẽ liên hệ trực tiếp với Quý Doanh nghiệp trong vòng 24 giờ làm việc.
                </p>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <span className="text-[#E52C47] font-bold text-xs tracking-widest uppercase block mb-1">
                    LIÊN HỆ ĐỒNG HÀNH
                  </span>
                  <h3 className="text-[#12294F] font-bold text-2xl font-serif">
                    Đăng ký trao đổi cùng BTC
                  </h3>
                  <p className="text-[#5A6A86] text-sm mt-1">
                    Vui lòng để lại thông tin, đại diện Nhà trường sẽ kết nối ngay.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#12294F] uppercase tracking-wider mb-1">
                      Tên Doanh nghiệp / Tổ chức *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="VD: Tập đoàn ABC"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#E52C47]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-bold text-[#12294F] uppercase tracking-wider mb-1">
                        Họ và tên người liên hệ *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Nguyễn Văn A"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#E52C47]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#12294F] uppercase tracking-wider mb-1">
                        Số điện thoại *
                      </label>
                      <input
                        required
                        type="tel"
                        placeholder="0912 345 678"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#E52C47]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#12294F] uppercase tracking-wider mb-1">
                      Email công việc *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="contact@company.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#E52C47]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#12294F] uppercase tracking-wider mb-1">
                      Hạng mục quan tâm
                    </label>
                    <select className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#E52C47] bg-white">
                      <option>Tài trợ Học bổng (Hiện kim)</option>
                      <option>Gói Đồng hành Dấu ấn (P1 / P2 / P3)</option>
                      <option>Tài trợ Hiện vật / Nước uống / Ẩm thực</option>
                      <option>Gian hàng trải nghiệm / Branded Booth</option>
                      <option>Thiết kế gói hợp tác riêng (Custom)</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 py-3.5 bg-[#E52C47] hover:bg-[#D71920] text-white font-bold text-sm rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    <span>Gửi thông tin kết nối</span>
                    <Send size={15} />
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
