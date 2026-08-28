import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CONVOCATION DAY 2026 | Hội Khai giảng Trường Đại học Văn Lang",
  description: "CONVOCATION DAY 2026 – Hội Khai giảng Trường Đại học Văn Lang. Nơi bạn được nhìn thấy.",
  openGraph: { title: "CONVOCATION DAY 2026 | Hội Khai giảng Trường Đại học Văn Lang", description: "Nơi bạn được nhìn thấy", type: "website", images: ["/og.svg"] },
  twitter: { card: "summary_large_image", title: "CONVOCATION DAY 2026 | Hội Khai giảng Trường Đại học Văn Lang", description: "Nơi bạn được nhìn thấy", images: ["/og.svg"] },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
