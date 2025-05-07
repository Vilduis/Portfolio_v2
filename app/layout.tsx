import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vilduis",
  description: "My portfolio personal website",
  icons: {
    icon: "/favicon.ico",
  },
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
        {" "}
        <Navbar />
        <main className="bg-gradient-to-br from-gray-900 to-black border-l border-gray-800">
          {children}
        </main>
        {/* Decorative elements */}
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full filter blur-3xl"></div>
          <div className="absolute top-2/3 left-1/3 w-72 h-72 bg-pink-500/10 rounded-full filter blur-3xl"></div>
        </div>
      </body>
    </html>
  );
}
