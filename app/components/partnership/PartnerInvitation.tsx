/**
 * ==============================================================================
 * PHÂN KHU: THƯ NGỎ ĐỐI TÁC & 5 TINH THẦN ĐỒNG HÀNH (PARTNER INVITATION)
 * ------------------------------------------------------------------------------
 * Chức năng:
 * - Cột trái: Thư ngỏ trang trọng gửi tới Quý Doanh nghiệp & Đối tác từ Trưởng BTC.
 * - Cột phải: 5 thẻ tinh thần hợp tác cốt lõi (Đồng hành thực chất, Lấy sinh viên làm
 *   trung tâm, Minh bạch đo lường, Chuẩn mực giáo dục, Kết nối dài hạn).
 * ==============================================================================
 */

"use client";

import { partnerInvitationContent } from "../../data/partnership";
import { HeartHandshake } from "lucide-react";

export default function PartnerInvitation() {
  const { letter, spirits } = partnerInvitationContent;

  return (
    <div className="ps-invitation-container">
      <div className="ps-invitation-card">
        {/* CỘT TRÁI: BỨC THƯ NGỎ TỪ BAN TỔ CHỨC */}
        <div className="ps-invitation-letter">
          <div className="ps-invitation-letter-head">
            <span className="ps-sub-eyebrow">LỜI NGỎ ĐỒNG HÀNH</span>
            <h3 className="ps-invitation-title">Cùng Văn Lang kiến tạo khởi đầu đáng nhớ</h3>
          </div>

          <p className="ps-letter-greeting">{letter.greeting}</p>
          {letter.paragraphs?.map((para, idx) => (
            <p key={idx} className="ps-letter-body">{para}</p>
          ))}

          <div className="ps-letter-signoff">
            <strong>{letter.signOff}</strong>
            <small>Đại diện Ban Tổ chức Convocation Day 2026</small>
          </div>
        </div>

        {/* CỘT PHẢI: 5 THẺ TINH THẦN ĐỒNG HÀNH CỐT LÕI */}
        <div className="ps-spirits-column">
          <h4 className="ps-spirits-heading">
            <HeartHandshake size={18} className="text-red" />
            <span>05 Tinh thần Hợp tác Cốt lõi</span>
          </h4>

          <div className="ps-spirits-grid">
            {spirits.map((item) => (
              <div key={item.number} className="ps-spirit-card">
                <div className="ps-spirit-number">{item.number}</div>
                <div className="ps-spirit-copy">
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

