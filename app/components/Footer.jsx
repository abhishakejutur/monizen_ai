import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Network", href: "/network" },
  { name: "Success", href: "/success" },
  { name: "Contact", href: "/contact" },
];

const services = [
  "Broadband Internet",
  "Internet Leased Line",
  "Enterprise Connectivity",
  "Wi-Fi Solutions",
  "Network Infrastructure",
  "Managed Connectivity",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-slate-950">
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.7fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex w-fit items-center gap-2.5">
              <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl">
                <Image
                  src="/logo.png"
                  alt="Monizen AI logo"
                  width={80}
                  height={80}
                  className="h-full w-full object-cover"
                />
              </span>

              <span className="text-xl font-black tracking-[-0.05em] text-slate-950 dark:text-white">
                Monizen{" "}
                <span className="bg-gradient-to-r from-cyan-500 to-emerald-400 bg-clip-text text-transparent">
                  AI
                </span>
              </span>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-600 dark:text-slate-400">
              Premium internet, enterprise connectivity and network solutions
              designed for a faster connected world.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {["ACT", "TATA", "ISHAN", "JIO"].map((partner) => (
                <span
                  key={partner}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-black tracking-wide text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
                >
                  {partner}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-950 dark:text-white">
              Explore
            </h3>

            <div className="mt-5 grid gap-3">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="w-fit text-sm text-slate-600 transition-colors duration-300 hover:text-cyan-500 dark:text-slate-400 dark:hover:text-cyan-300"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-950 dark:text-white">
              Services
            </h3>

            <div className="mt-5 grid gap-3">
              {services.map((service) => (
                <Link
                  key={service}
                  href="/services"
                  className="w-fit text-sm text-slate-600 transition-colors duration-300 hover:text-cyan-500 dark:text-slate-400 dark:hover:text-cyan-300"
                >
                  {service}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-950 dark:text-white">
              Contact
            </h3>

            <div className="mt-5 grid gap-4">
              <a
                href="mailto:hello@monizen.example"
                className="flex items-start gap-3 text-sm text-slate-600 hover:text-cyan-500 dark:text-slate-400 dark:hover:text-cyan-300"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                hello@monizen.example
              </a>

              <a
                href="tel:+910000000000"
                className="flex items-start gap-3 text-sm text-slate-600 hover:text-cyan-500 dark:text-slate-400 dark:hover:text-cyan-300"
              >
                <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                +91 00000 00000
              </a>

              <div className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                India
              </div>
            </div>

            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-slate-950 hover:text-cyan-500 dark:text-white dark:hover:text-cyan-300"
            >
              Start a conversation
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col justify-between gap-3 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex-row dark:border-white/10">
          <p>© {new Date().getFullYear()} Monizen AI. All rights reserved.</p>
          <p>Internet that moves.</p>
        </div>
      </div>
    </footer>
  );
}