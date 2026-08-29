/**
 * ==============================================================================
 * PHÂN HỆ: CƠ HỘI TRẢI NGHIỆM ĐẶC TRƯNG (SIGNATURE OPPORTUNITIES)
 * ------------------------------------------------------------------------------
 * Trình bày 6 ý tưởng activation nổi bật dành cho đối tác. Component gồm:
 * 1. Khối mở đầu có thông điệp và ảnh không gian Văn Lang.
 * 2. Lưới thẻ lấy nội dung từ `signatureActivations` trong app/data.ts.
 * 3. Dải 4 giá trị mà thương hiệu nhận được khi đồng hành.
 *
 * Lưu ý: Component này đang được giữ độc lập để có thể tái sử dụng; thứ tự section
 * thực tế trên trang chủ do Landing.tsx quyết định.
 * ==============================================================================
 */

import Image from "next/image";
import {
  ChartNoAxesCombined,
  Droplets,
  Flag,
  Gem,
  Gift,
  GraduationCap,
  Play,
  ShieldCheck,
  Star,
  Users,
  Video,
  type LucideIcon,
} from "lucide-react";
import { images, signatureActivations } from "../data";

// Ánh xạ tên icon dạng chuỗi trong dữ liệu sang component icon thật để render.
const opportunityIcons: Record<string, LucideIcon> = {
  gem: Gem,
  hydration: Droplets,
  talent: Flag,
  impact: Users,
  social: Play,
  welcome: Gift,
};

// Icon trang trí nền có thể khác icon chính để tạo nhịp thị giác cho từng thẻ.
const opportunityDecorations: Record<string, LucideIcon> = {
  gem: Gem,
  hydration: Droplets,
  talent: Flag,
  impact: GraduationCap,
  social: Video,
  welcome: Gift,
};

// Bốn giá trị tóm tắt hiển thị thành dải nằm dưới lưới cơ hội.
const values = [
  { label: "Kết nối đúng khoảnh khắc", icon: Users },
  { label: "Trải nghiệm đáng nhớ", icon: Star },
  { label: "Gia tăng hiện diện thương hiệu", icon: ShieldCheck },
  { label: "Tạo tác động bền vững", icon: ChartNoAxesCombined },
];

export default function SignatureOpportunities() {
  return (
    // aria-labelledby nối section với tiêu đề h2, giúp trình đọc màn hình hiểu cấu trúc.
    <section id="signature-opportunities" className="signatureOpSection" aria-labelledby="signature-op-title">
      {/* Các lớp nền trang trí, không mang nội dung nên được ẩn khỏi accessibility tree. */}
      <div className="signatureOpDots" aria-hidden="true" />
      <div className="signatureOpArc" aria-hidden="true" />
      <div className="signatureOpInner">
        {/* 1. HERO CỦA SECTION: thông điệp bên trái, ảnh không gian bên phải. */}
        <div className="signatureOpHero">
          <div className="signatureOpCopy reveal">
            <span className="signatureOpEyebrow">06 · VLU SIGNATURE OPPORTUNITIES</span>
            <h2 id="signature-op-title">
              Không chỉ hiện diện.<br />
              Hãy tạo một <em>dấu ấn.</em>
            </h2>
            <p>
              Sáu platform trải nghiệm được phát triển từ không gian Đông Sơn,<br />
              thông điệp “Nơi bạn được nhìn thấy” và nhu cầu thực tế của tân sinh viên K32.
            </p>
          </div>

          <div className="signatureOpVisual" aria-hidden="true">
            {/* Ảnh tòa nhà phủ toàn bộ khung; `fill` yêu cầu khung cha có định vị CSS. */}
            <Image
              className="signatureOpBuilding"
              src={images.venue}
              alt=""
              fill
              unoptimized
              sizes="(max-width: 899px) 100vw, 58vw"
            />
            <span className="signatureOpWarmth" />
            {/* Logo nổi trên ảnh, chỉ mang tính trang trí trong ngữ cảnh này. */}
            <Image
              className="signatureOpLogo"
              src="/images/hoi-khai-giang-2025/logo-vlu 2.png"
              alt=""
              width={150}
              height={172}
              unoptimized
            />
          </div>
        </div>

        {/* 2. LƯỚI 6 CƠ HỘI: mỗi phần tử dữ liệu tạo thành một article độc lập. */}
        <div className="signatureOpGrid">
          {signatureActivations.map((opportunity, index) => {
            // Nếu dữ liệu dùng một key chưa được khai báo, Gem là icon dự phòng an toàn.
            const Icon = opportunityIcons[opportunity.icon] ?? Gem;
            const Decoration = opportunityDecorations[opportunity.icon] ?? Gem;
            return (
              <article
                className={`signatureOpCard signatureOpCard--${opportunity.theme} reveal`}
                // Mỗi thẻ trễ hơn thẻ trước 55 ms để tạo hiệu ứng xuất hiện tuần tự.
                style={{ transitionDelay: `${index * 55}ms` }}
                key={opportunity.id}
              >
                <div className="signatureOpCardHead">
                  <span className="signatureOpIcon"><Icon aria-hidden="true" strokeWidth={1.9} /></span>
                  <small>{opportunity.tag}</small>
                  <b>{opportunity.id}</b>
                </div>
                <h3>{opportunity.title}</h3>
                <p>{opportunity.desc}</p>
                <span className="signatureOpDivider" aria-hidden="true" />
                <strong>{opportunity.fit}</strong>
                <Decoration className="signatureOpDecoration" aria-hidden="true" strokeWidth={1.15} />
              </article>
            );
          })}
        </div>

        {/* 3. DẢI GIÁ TRỊ: tóm tắt lợi ích ở cuối section. */}
        <div className="signatureOpValues">
          {values.map(({ label, icon: Icon }) => (
            <div key={label}>
              <Icon aria-hidden="true" strokeWidth={1.9} />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
