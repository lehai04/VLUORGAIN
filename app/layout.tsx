/**
 * ==============================================================================
 * ROOT LAYOUT (KHUNG GIAO DIỆN GỐC TOÀN WEBSITE)
 * ------------------------------------------------------------------------------
 * Cấu hình SEO Meta tags (Title, Description, OpenGraph, Twitter Card, Favicon)
 * và nạp file CSS toàn cục globals.css.
 * ==============================================================================
 */

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CONVOCATION DAY 2026 | Hội Khai giảng Trường Đại học Văn Lang",
  description: "CONVOCATION DAY 2026 – Hội Khai giảng Trường Đại học Văn Lang. Nơi bạn được nhìn thấy.",
  openGraph: {
    title: "CONVOCATION DAY 2026 | Hội Khai giảng Trường Đại học Văn Lang",
    description: "Nơi bạn được nhìn thấy",
    type: "website",
    images: ["/og.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "CONVOCATION DAY 2026 | Hội Khai giảng Trường Đại học Văn Lang",
    description: "Nơi bạn được nhìn thấy",
    images: ["/og.svg"],
  },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

