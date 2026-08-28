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

const opportunityIcons: Record<string, LucideIcon> = {
  gem: Gem,
  hydration: Droplets,
  talent: Flag,
  impact: Users,
  social: Play,
  welcome: Gift,
};

const opportunityDecorations: Record<string, LucideIcon> = {
  gem: Gem,
  hydration: Droplets,
  talent: Flag,
  impact: GraduationCap,
  social: Video,
  welcome: Gift,
};

const values = [
  { label: "Kết nối đúng khoảnh khắc", icon: Users },
  { label: "Trải nghiệm đáng nhớ", icon: Star },
  { label: "Gia tăng hiện diện thương hiệu", icon: ShieldCheck },
  { label: "Tạo tác động bền vững", icon: ChartNoAxesCombined },
];

export default function SignatureOpportunities() {
  return (
    <section id="signature-opportunities" className="signatureOpSection" aria-labelledby="signature-op-title">
      <div className="signatureOpDots" aria-hidden="true" />
      <div className="signatureOpArc" aria-hidden="true" />
      <div className="signatureOpInner">
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
            <Image
              className="signatureOpBuilding"
              src={images.venue}
              alt=""
              fill
              unoptimized
              sizes="(max-width: 899px) 100vw, 58vw"
            />
            <span className="signatureOpWarmth" />
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

        <div className="signatureOpGrid">
          {signatureActivations.map((opportunity, index) => {
            const Icon = opportunityIcons[opportunity.icon] ?? Gem;
            const Decoration = opportunityDecorations[opportunity.icon] ?? Gem;
            return (
              <article
                className={`signatureOpCard signatureOpCard--${opportunity.theme} reveal`}
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
