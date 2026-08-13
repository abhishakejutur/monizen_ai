"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Network", href: "/network" },
  { name: "Success", href: "/success" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-2xl border border-slate-200/80 bg-white/85 shadow-xl shadow-slate-900/5 backdrop-blur-2xl transition-all duration-500 dark:border-white/10 dark:bg-slate-950/75 dark:shadow-black/30">
          <div className="flex h-16 items-center justify-between px-4 sm:h-[72px] sm:px-6">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="group flex items-center gap-2.5"
            >
              <span className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-xl sm:h-10 sm:w-10">
                <Image
                  src="/logo.png"
                  alt="Monizen AI logo"
                  width={180}
                  height={180}
                  priority
                  className="h-full w-full object-cover"
                />
              </span>

              <span className="text-lg font-black tracking-[-0.05em] text-slate-950 dark:text-white sm:text-xl">
                Monizen{" "}
                <span className="bg-gradient-to-r from-cyan-500 to-emerald-400 bg-clip-text text-transparent">
                  AI
                </span>
              </span>
            </Link>

            <nav className="hidden items-center gap-1 lg:flex">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-600 transition-all duration-300 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="relative z-10 flex items-center gap-2">
              <button
                type="button"
                onClick={toggleTheme}
                aria-label="Toggle dark and light theme"
                className="group flex h-10 w-10 touch-manipulation items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400 hover:text-cyan-500 active:scale-95 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-cyan-400 dark:hover:text-cyan-300"
              >
                {theme === "dark" ? (
                  <Sun className="h-4 w-4 transition-transform duration-500 group-hover:rotate-90" />
                ) : (
                  <Moon className="h-4 w-4 transition-transform duration-500 group-hover:-rotate-12" />
                )}
              </button>

              <Link
                href="/contact"
                className="hidden items-center gap-2 rounded-xl bg-cyan-600 border border-white/10 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-600 sm:flex"
              >
                Get Connected
                <ArrowUpRight className="h-4 w-4" />
              </Link>

              <button
                type="button"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle mobile navigation"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 lg:hidden dark:border-white/10 dark:bg-white/5 dark:text-white"
              >
                {mobileOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          <div
            className={`overflow-hidden transition-all duration-500 lg:hidden ${
              mobileOpen
                ? "max-h-[500px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <nav className="border-t border-slate-200/70 px-4 pb-4 pt-3 dark:border-white/10">
              <div className="grid gap-1">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition-all duration-300 hover:bg-slate-100 hover:text-cyan-600 dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-cyan-300"
                  >
                    {item.name}
                  </Link>
                ))}

                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-cyan-600 border border-white/10 px-4 py-3 text-sm font-bold text-white hover:bg-cyan-600"
                >
                  Get Connected
                  <ArrowUpRight className="h-4 w-4" />
                </Link>

                <button
                  type="button"
                  onClick={toggleTheme}
                  className="mt-2 flex w-full items-center justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 transition-colors duration-300 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
                >
                  <span className="flex items-center gap-2.5">
                    {theme === "dark" ? (
                      <Sun className="h-4 w-4 text-cyan-400" />
                    ) : (
                      <Moon className="h-4 w-4 text-cyan-500" />
                    )}
                    {theme === "dark" ? "Light mode" : "Dark mode"}
                  </span>
                  <span
                    className={`h-2 w-2 rounded-full ${
                      theme === "dark"
                        ? "bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"
                        : "bg-slate-300"
                    }`}
                  />
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}