/**
 * ==============================================================================
 * COMPONENT: THẺ HẠNG MỤC ƯU TIÊN (PRIORITY CARD)
 * ------------------------------------------------------------------------------
 * Chức năng: Render từng thẻ hình ảnh đại diện cho 1 hạng mục tiếp nhận tài trợ.
 * Cấu trúc gồm:
 * 1. Ảnh nền full cover kèm hiệu ứng hover zoom nhẹ.
 * 2. Lớp phủ chuyển sắc (Gradient Overlay) từ trong suốt xuống nền trắng.
 * 3. Nội dung đáy gồm số thứ tự đỏ, tiêu đề navy và đoạn mô tả chi tiết.
 * ==============================================================================
 */

"use client";

import Image from "next/image";
import { PriorityItem } from "../../data/priorityNeeds";

interface PriorityCardProps {
  item: PriorityItem;
  index: number;
}

export default function PriorityCard({ item, index }: PriorityCardProps) {
  return (
    <article
      className="group relative flex flex-col justify-end overflow-hidden rounded-[18px] bg-white border border-[rgba(15,25,50,0.10)] min-h-[295px] md:min-h-[305px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(8,21,59,0.08)] reveal"
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      {/* 1. Ảnh nền toàn phần với hiệu ứng phóng to nhẹ khi di chuột */}
      <Image
        src={item.image}
        alt={item.alt}
        fill
        unoptimized
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
      />

      {/* 2. Lớp phủ Gradient mượt mà từ trong suốt phía trên sang trắng đục ở đáy */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.03) 38%, rgba(255, 255, 255, 0.72) 64%, rgba(255, 255, 255, 0.98) 90%, #FFFFFF 100%)",
        }}
        aria-hidden="true"
      />

      {/* 3. Khu vực chữ nằm cố định ở đáy thẻ */}
      <div className="relative z-10 p-5 md:p-[22px] pt-0">
        {/* Hàng tiêu đề: Số thứ tự màu đỏ + Tiêu đề màu Navy */}
        <div className="flex items-baseline gap-2.5">
          <span className="text-[#D71920] font-extrabold text-[26px] md:text-[28px] leading-none tracking-tight font-display flex-shrink-0">
            {item.id}
          </span>
          <h3 className="text-[#08153B] font-extrabold text-[22px] md:text-[24px] lg:text-[25px] leading-snug tracking-tight m-0 font-display">
            {item.title}
          </h3>
        </div>

        {/* Đoạn văn bản diễn giải quyền lợi/nhu cầu */}
        <p className="text-[#233052] text-[15px] md:text-[16px] leading-[1.48] mt-1.5 mb-0 font-medium">
          {item.description}
        </p>
      </div>
    </article>
  );
}

