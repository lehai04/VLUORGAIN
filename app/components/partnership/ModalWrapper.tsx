/**
 * ==============================================================================
 * COMPONENT: KHUNG MODAL NỀN CHUNG (MODAL WRAPPER)
 * ------------------------------------------------------------------------------
 * Chức năng:
 * - Render backdrop mờ phủ toàn màn hình (`z-index: 200`).
 * - Tự động lắng nghe phím `Escape` để đóng modal nhanh.
 * - Khóa cuộn trang `document.body.style.overflow = "hidden"` khi modal mở.
 * - Click vào vùng ngoài (backdrop) để đóng modal, click bên trong thẻ card không bị tắt.
 * - Nút đóng góc phải trên cùng và khu vực Header (Badge, Title, Subtitle).
 * ==============================================================================
 */

"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { X } from "lucide-react";

interface ModalWrapperProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  badge?: string;
  subtitle?: string;
  maxWidth?: "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
  children: ReactNode;
}

export default function ModalWrapper({
  isOpen,
  onClose,
  title,
  badge,
  subtitle,
  maxWidth = "3xl",
  children,
}: ModalWrapperProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // 1. Quản lý sự kiện phím ESC và khóa scroll body
  useEffect(() => {
    if (!isOpen) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }

      if (e.key === "Tab" && modalRef.current) {
        const focusable = Array.from(
          modalRef.current.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
          )
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
      previouslyFocused?.focus();
    };
  }, [isOpen, onClose]);

  // Nếu không mở, không render gì vào DOM
  if (!isOpen) return null;

  // Lớp CSS chiều rộng tối đa
  const maxWidthClass = {
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
    "3xl": "max-w-3xl",
    "4xl": "max-w-4xl",
  }[maxWidth];

  return (
    // Lớp phủ đen mờ toàn màn hình (Backdrop)
    <div
      className="ps-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? "modal-title" : undefined}
    >
      {/* Khung nội dung trắng bên trong Modal */}
      <div
        ref={modalRef}
        className={`ps-modal-card ${maxWidthClass}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Nút đóng tròn góc trên bên phải */}
        <button
          ref={closeButtonRef}
          type="button"
          className="ps-modal-close"
          onClick={onClose}
          aria-label="Đóng cửa sổ"
        >
          <X size={20} />
        </button>

        {/* Khối tiêu đề của Modal */}
        {(badge || title || subtitle) && (
          <div className="ps-modal-header">
            {badge && <span className="ps-modal-badge">{badge}</span>}
            {title && <h2 id="modal-title" className="ps-modal-title">{title}</h2>}
            {subtitle && <p className="ps-modal-subtitle">{subtitle}</p>}
          </div>
        )}

        {/* Thân nội dung được truyền vào */}
        <div className="ps-modal-body">{children}</div>
      </div>
    </div>
  );
}
