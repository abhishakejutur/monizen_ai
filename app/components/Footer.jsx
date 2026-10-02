import Image from "next/image";
import Link from "next/link";
import SocialLinks from "./SocialLinks";
import {
  Activity,
  ArrowUpRight,
  Building2,
  Cable,
  Globe2,
  Headset,
  Mail,
  MapPin,
  Network,
  Phone,
  Router,
  Server,
  ShieldCheck,
  Wifi,
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
  { name: "Enterprise connectivity", icon: Building2 },
  { name: "Wi-Fi", icon: Wifi },
  { name: "Broadband & leased line", icon: Globe2 },
  { name: "LAN & WAN", icon: Network },
  { name: "Routers & switches", icon: Router },
  { name: "Network infrastructure", icon: Server },
  { name: "Structured cabling", icon: Cable },
  { name: "Network security", icon: ShieldCheck },
  { name: "Network monitoring", icon: Activity },
  { name: "IT infrastructure", icon: Server },
  { name: "Network support", icon: Headset },
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
                  src="/M_Logo-C.png"
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
              Reliable, secure and scalable network solutions for businesses.
            </p>
            <SocialLinks className="mt-5 flex" />
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
              {services.map(({ name, icon: Icon }) => (
                <Link
                  key={name}
                  href="/services"
                  className="flex w-fit items-center gap-2 text-sm text-slate-600 transition-colors duration-300 hover:text-cyan-500 dark:text-slate-400 dark:hover:text-cyan-300"
                >
                  <Icon className="h-3.5 w-3.5 shrink-0" />
                  {name}
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
                monizenai@gmail.com
              </a>

              <a
                href="tel:+917569736515"
                className="flex items-start gap-3 text-sm text-slate-600 hover:text-cyan-500 dark:text-slate-400 dark:hover:text-cyan-300"
              >
                <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                +91 75697 36515
              </a>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Hyderabad%2C%20Telangana%2C%20India"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Hyderabad, Telangana, India in Google Maps"
                className="flex items-start gap-3 text-sm text-slate-600 transition-colors hover:text-cyan-500 dark:text-slate-400 dark:hover:text-cyan-300"
              >
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                Hyderabad, Telangana, India
              </a>
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