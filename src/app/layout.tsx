import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ReactNode } from "react";
import Providers from "@/helper";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Fashion Store",
  description: " Fashion Store frontend",
};

export default function RootLayout({ children }: {children:ReactNode}) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col px-2">
        <Providers>
          <header>
            <Navbar />
          </header>
          <main className="flex-1">{children}</main>
          <footer>
            <Footer />
          </footer>
          <ToastContainer />
        </Providers>
      </body>
    </html>
  );
}