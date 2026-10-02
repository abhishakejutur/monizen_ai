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
  description: "MONIZEN AI delivers reliable, secure, and scalable enterprise network solutions, corporate Wi-Fi, Internet leased lines, structured cabling, and IT infrastructure management for businesses.",
  keywords: [
    "Monizen AI", "Monizen AI services",
    "Enterprise Network Solutions", "Internet Leased Line", "LAN WAN Networking", 
    "Structured Cabling Services", "Firewalls & Network Security", "IT Infrastructure Management",
    "Unified Communications", "Carrier-Based Cloud Interconnect", "Internet Exchange",
    "home wifi setup", "company wifi network", "office internet connection", "office wifi installation",
    "fast internet for business", "shop internet setup", "startup wifi network",
    "best internet provider for office", "net connection for business",
    "Broadband", "ILL", "Fibernet", "Act fiber alternative", "TATA leased line alternative", 
    "Reliance Jio Business Internet alternative", "Jio leased line alternative", "High-Speed Broadband"
  ],
  authors: [
    { name: "Monizen AI" },
    { name: "Ramya" },
    { name: "Abhishake Jutur" }
  ],
  openGraph: {
    title: "Enterprise Connectivity & IT Solutions | Monizen AI",
    description: "Secure, scalable network and IT infrastructure planning designed for everyday and business-critical operations.",
    url: "https://monizen-ai.vercel.app",
    type: "website",
  }
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
