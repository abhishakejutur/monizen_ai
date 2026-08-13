import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ThemeProvider from "@/app/components/ThemeProvider";
import ScrollToTop from "@/app/components/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Monizen AI | Internet that moves",
  description:
    "Premium broadband, Internet Leased Line, Wi-Fi and enterprise connectivity solutions designed for a faster connected world.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-950 antialiased transition-colors duration-500 dark:bg-slate-950 dark:text-white">
        <Script id="monizen-theme-init" strategy="beforeInteractive">
          {`(function(){try{var t=localStorage.getItem("monizen-theme");if(t==="light"){document.documentElement.classList.remove("dark")}else{document.documentElement.classList.add("dark")}}catch(e){document.documentElement.classList.add("dark")}})();`}
        </Script>
        <ThemeProvider>
          <ScrollToTop />
          <Header />
          <main className="overflow-x-hidden">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
