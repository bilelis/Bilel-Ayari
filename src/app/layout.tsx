import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Bilel Ayari - AI Software Developer & IT Administrator",
  description: "AI-powered software development and intelligent automation solutions. Specializing in Python, FastAPI, AI code generation, and full-stack development with modern AI tools.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased relative`}>
        {children}
      </body>
    </html>
  );
}
