/**
 * ==============================================================================
 * PHÂN HỆ: 06 · BRAND SPACE (KHÔNG GIAN THƯƠNG HIỆU)
 * ------------------------------------------------------------------------------
 * Mục đích: Giới thiệu địa điểm tổ chức (Quảng trường Đông Sơn) và các điểm chạm
 * không gian thương hiệu thực tế (Sân khấu, Backdrop, Gian hàng CLB).
 * ==============================================================================
 */

import Image from "next/image";
import {
  Camera,
  Crown,
  Frame,
  Gift,
  MapPinCheck,
  Monitor,
  Presentation,
  Share2,
  Store,
  type LucideIcon,
} from "lucide-react";
import { brandSpaceFeatures, brandSpaceImages, brandSpaceSideImage } from "../data";

// 1. Bản đồ ánh xạ mã icon sang component Lucide Icon tương ứng
const featureIcons: Record<string, LucideIcon> = {
  stage: Presentation,
  screen: Monitor,
  backdrop: Frame,
  camera: Camera,
  checkin: MapPinCheck,
  booth: Store,
  guest: Crown,
  gift: Gift,
  social: Share2,
};

/**
 * Component hiển thị nhãn tính năng/tiện ích nhỏ (Chip)
 */
function FeatureChip({ icon, label }: { icon: string; label: string }) {
  const Icon = featureIcons[icon] ?? Frame;
  return (
    <span className="brandSpaceChip">
      <Icon aria-hidden="true" strokeWidth={1.75} />
      <span>{label}</span>
    </span>
  );
}

/**
 * Component chính của Section 06: Không gian thương hiệu
 * @param onImageClick - Callback kích hoạt popup xem phóng to ảnh sự kiện
 */
export default function BrandSpaceSection({
  onImageClick,
}: {
  onImageClick: (src: string) => void;
}) {
  return (
    <section id="brand-space" className="brandSpaceSection" aria-labelledby="brand-space-title">
      <div className="brandSpaceCard">
        {/* Họa tiết trang trí nền */}
        <span className="brandSpacePattern" aria-hidden="true" />
        <span className="brandSpaceDots" aria-hidden="true" />

        <div className="brandSpaceMain">
          {/* CỘT TRÁI: Tiêu đề giới thiệu và ảnh Backdrop đại diện */}
          <div className="brandSpaceIntro reveal">
            <span className="brandSpaceEyebrow">06 · BRAND SPACE</span>
            <h2 id="brand-space-title">Không gian<br />thương hiệu</h2>
            <i className="brandSpaceRule" aria-hidden="true" />
            <p>
              Quảng trường Đông Sơn – địa điểm tổ chức {" "}<br />
              Hội Khai giảng ngày 27/09/2026. Hình ảnh {" "}<br />
              sự kiện tham chiếu từ chương trình Chào đón {" "}<br />
              Tân sinh viên Khóa 31 năm 2025.
            </p>
            {/* Nút bấm mở phóng to ảnh Backdrop */}
            <button
              type="button"
              className="brandSpaceSideImage"
              onClick={() => onImageClick(brandSpaceSideImage.src)}
              aria-label={`Mở ảnh: ${brandSpaceSideImage.alt}`}
            >
              <Image
                src={brandSpaceSideImage.src}
                alt={brandSpaceSideImage.alt}
                fill
                unoptimized
                sizes="(max-width: 767px) 100vw, (max-width: 1279px) 92vw, 36vw"
              />
              <span className="brandSpaceImageLabel">{brandSpaceSideImage.label}</span>
              <span className="brandSpaceAccent" aria-hidden="true" />
            </button>
          </div>

          {/* CỘT PHẢI: Gallery lưới ảnh (Quảng trường Đông Sơn, Sân khấu 6.3, Gian hàng 6.4) */}
          <div className="brandSpaceGallery reveal">
            {brandSpaceImages.map((image, index) => (
              <button
                type="button"
                className={`brandSpaceImage brandSpaceImage${index + 1}`}
                key={image.id}
                onClick={() => onImageClick(image.src)}
                aria-label={`Mở ảnh: ${image.alt}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  unoptimized
                  sizes={index === 0
                    ? "(max-width: 767px) 100vw, (max-width: 1279px) 92vw, 64vw"
                    : "(max-width: 767px) 100vw, (max-width: 1279px) 46vw, 32vw"}
                />
                <span className="brandSpaceImageLabel">{image.label}</span>
                <span className="brandSpaceAccent" aria-hidden="true" />
              </button>
            ))}
          </div>
        </div>

        {/* DÒNG DƯỚI: Các tag liệt kê các hạng mục không gian thương hiệu */}
        <div className="brandSpaceChips" aria-label="Hạng mục không gian thương hiệu">
          {brandSpaceFeatures.map((feature) => (
            <FeatureChip key={feature.label} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

