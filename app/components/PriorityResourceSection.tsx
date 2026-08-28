/**
 * ==============================================================================
 * PHÂN HỆ: 07 · HẠNG MỤC ƯU TIÊN (PRIORITY RESOURCES)
 * ------------------------------------------------------------------------------
 * Mục đích: Trưng bày 6 nhu cầu tài trợ và tiếp nhận nguồn lực trọng điểm của
 * Nhà trường (Học bổng, Ẩm thực, Check-in, Hạ tầng, Gian hàng, Quà tặng K32)
 * dưới dạng lưới thẻ hình ảnh trực quan, thẩm mỹ theo chuẩn thiết kế VLU.
 * ==============================================================================
 */

"use client";

import { priorityItems } from "../data/priorityNeeds";
import PriorityCard from "./priority/PriorityCard";

/**
 * Component chính điều phối Section 07
 */
export default function PriorityResourceSection() {
  return (
    <section
      id="priority-resources"
      className="w-full bg-[#FCFBF9] py-12 md:py-16 px-6 sm:px-8 md:px-12 lg:px-16 border-b border-[#E7E9F0]"
    >
      <div className="max-w-[1620px] mx-auto">
        {/* 1. KHỐI TIÊU ĐỀ SECTION (Eyebrow, Heading và Subtitle) */}
        <div className="mb-6 md:mb-8 reveal">
          {/* Nhãn phân hệ màu đỏ Văn Lang */}
          <span className="block text-[#D71920] font-bold text-[15px] md:text-[17px] tracking-[0.16em] uppercase mb-2.5 md:mb-3">
            07 · HẠNG MỤC ƯU TIÊN
          </span>
          {/* Tiêu đề chính Navy đậm */}
          <h2 className="text-[#08153B] font-extrabold text-[32px] sm:text-[42px] md:text-[50px] lg:text-[56px] leading-[1.06] tracking-[-0.03em] mb-3 md:mb-3.5 font-display">
            Văn Lang đang tìm kiếm những nguồn lực nào?
          </h2>
          {/* Dòng mô tả phạm vi tiếp nhận */}
          <p className="text-[#273453] text-[16px] md:text-[18.5px] leading-relaxed mb-0 max-w-4xl font-normal">
            Hai nhóm tiếp nhận chính: học bổng hiện kim và tài trợ hiện kim/hiện vật cho sự kiện.
          </p>
        </div>

        {/* 2. LƯỚI 6 THẺ HẠNG MỤC HÌNH ẢNH (3 cột trên Desktop, 2 cột trên Tablet, 1 cột trên Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-[18px]">
          {priorityItems.map((item, index) => (
            <PriorityCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}


