import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "damcuoi.site - Tạo Website Đám Cưới Đẹp & Chuyên Nghiệp",
  description: "Dịch vụ thiết kế website đám cưới hiện đại với nhiều template tuyệt đẹp. Dễ dàng tùy chỉnh, responsive hoàn hảo, và tích hợp đầy đủ tính năng cho ngày trọng đại của bạn.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
