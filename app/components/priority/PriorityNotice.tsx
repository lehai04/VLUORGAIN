/**
 * ==============================================================================
 * COMPONENT: LƯU Ý TIẾP NHẬN TÀI TRỢ (PRIORITY NOTICE)
 * ------------------------------------------------------------------------------
 * Hộp cảnh báo dùng để nhấn mạnh hai nguyên tắc về học bổng và tài trợ hiện vật.
 * Đây là component trình bày thuần túy, không có state hoặc tương tác.
 * ==============================================================================
 */

"use client";

import { ShieldCheck } from "lucide-react";

export default function PriorityNotice() {
  return (
    // `aside` biểu thị đây là thông tin bổ sung quan trọng cho nội dung section.
    <aside
      className="w-full max-w-[1040px] mx-auto mt-6 md:mt-7 bg-[#FFF8F8] border border-[rgba(215,25,32,0.35)] rounded-[20px] p-4 sm:p-5 md:px-8 md:py-5 flex flex-col sm:flex-row items-center sm:items-center gap-4 sm:gap-6 shadow-sm reveal"
      aria-label="Lưu ý tiếp nhận tài trợ"
    >
      {/* 1. HUY HIỆU: icon chiếc khiên giúp người đọc nhận biết đây là lưu ý nguyên tắc. */}
      <div className="w-[54px] h-[54px] md:w-[58px] md:h-[58px] rounded-full bg-[#E32236] flex items-center justify-center flex-shrink-0 shadow-sm text-white">
        <ShieldCheck className="w-7 h-7 md:w-8 md:h-8" strokeWidth={2.2} />
      </div>

      {/* 2. NỘI DUNG: dòng đầu nói về học bổng, dòng sau nói về tài trợ hiện vật. */}
      <div className="text-center sm:text-left text-[#152449]">
        <p className="font-bold text-[15.5px] md:text-[17px] leading-[1.5] m-0">
          Học bổng chỉ tiếp nhận bằng hiện kim, không thay thế bằng voucher.
        </p>
        <p className="font-semibold text-[14.5px] md:text-[16px] leading-[1.5] mt-1 sm:mt-0.5 mb-0 text-[#233052]">
          Tài trợ hiện vật được thương lượng theo từng đối tác; tỷ lệ đề xuất chuẩn tối đa 30% giá trị gói.
        </p>
      </div>
    </aside>
  );
}
