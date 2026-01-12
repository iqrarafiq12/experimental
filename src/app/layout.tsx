import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Edaqai Creatives",
  description: "Creative design & development studio",
  icons: {
    icon: [
      { url: "/favicon-dark.png", type: "image/png", media: "(prefers-color-scheme: dark)" },
      { url: "/favicon-light.png", type: "image/png", media: "(prefers-color-scheme: light)" },
    ],
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <BackgroundRippleEffect />
        {children}
      </body>
    </html>
  );
}
