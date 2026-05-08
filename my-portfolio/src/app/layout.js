import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Prashant Rajput — Full Stack Developer",
  description:
    "Full Stack Developer building high-performance web apps with Next.js, Supabase, real-time systems, and AI integration.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
