import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Globe2,
  Network,
  Router,
  ShieldCheck,
  Sparkles,
  Wifi,
  Zap,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Wifi,
    title: "Broadband Internet",
    description:
      "Fast and dependable connectivity designed for homes, teams and everyday digital experiences.",
  },
  {
    number: "02",
    icon: Globe2,
    title: "Internet Leased Line",
    description:
      "Dedicated connectivity concepts for organizations that need consistent, business-focused internet access.",
  },
  {
    number: "03",
    icon: Network,
    title: "Enterprise Connectivity",
    description:
      "Scalable connectivity architecture designed around the needs of growing and distributed businesses.",
  },
  {
    number: "04",
    icon: Router,
    title: "Wi-Fi Solutions",
    description:
      "Thoughtful Wi-Fi and network solutions designed for coverage, performance and easier management.",
  },
];

const reasons = [
  {
    icon: ShieldCheck,
    title: "Reliable Infrastructure",
    description:
      "Connectivity designed with stability, scalability and operational continuity in mind.",
  },
  {
    icon: Network,
    title: "Strategic Ecosystem",
    description:
      "A broader connectivity ecosystem helps us design solutions around different requirements.",
  },
  {
    icon: Sparkles,
    title: "Human Support",
    description:
      "Technology should feel simple. Our approach keeps communication clear and customer-focused.",
  },
  {
    icon: Zap,
    title: "Scalable Solutions",
    description:
      "Solutions can evolve as your users, locations and connectivity requirements grow.",
  },
];

function NetworkSphere() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[620px]">
      <div className="absolute inset-[8%] rounded-full bg-cyan-400/10 blur-[80px] dark:bg-cyan-400/20" />

      <div className="absolute left-1/2 top-1/2 h-[58%] w-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-sky-400/5 to-emerald-400/10 shadow-[0_0_100px_rgba(34,211,238,0.15)] backdrop-blur-xl" />

      <div className="absolute left-1/2 top-1/2 h-[76%] w-[76%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-cyan-400/30 animate-spin [animation-duration:18s]" />

      <div className="absolute left-1/2 top-1/2 h-[88%] w-[50%] -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-full border border-cyan-400/15" />

      <div className="absolute left-1/2 top-1/2 h-[88%] w-[50%] -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded-full border border-emerald-400/15" />

      <div className="absolute left-1/2 top-1/2 z-20 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-[2rem] border border-white/20 bg-slate-950/90 shadow-[0_0_80px_rgba(34,211,238,0.3)] backdrop-blur-xl sm:h-40 sm:w-40">
        <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-xl from-cyan-400 to-emerald-400 text-slate-950">
          {/* <Wifi className="h-5 w-5" /> */}
          <span className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl sm:h-12 sm:w-12">
            <Image
              src="/logo.png"
              alt="Monizen AI logo"
              width={180}
              height={180}
              priority
              className="h-full w-full object-cover"
            />
          </span>
        </div>

        <span className="text-base font-black tracking-[-0.05em] text-white sm:text-xl">
          Monizen AI
        </span>

        <span className="mt-1 text-[9px] uppercase tracking-[0.3em] text-cyan-300">
          CONNECTED
        </span>
      </div>

      {[
        ["ACT", "left-[3%] top-[22%]", "cyan"],
        ["TATA", "right-[2%] top-[25%]", "cyan"],
        ["ISHAN", "left-[7%] bottom-[20%]", "emerald"],
        ["JIO", "right-[6%] bottom-[18%]", "cyan"],
      ].map(([name, position, color], index) => (
        <div
          key={name}
          className={`absolute ${position} z-30 animate-bounce rounded-2xl border border-white/10 bg-slate-950/85 px-4 py-3 shadow-2xl backdrop-blur-xl [animation-duration:${
            4 + index * 2
          }s] dark:bg-slate-900/85`}
        >
          <span className="text-xs font-black tracking-wide text-white">
            {name}
          </span>

          <div className="mt-1 flex items-center gap-1.5 text-[9px] text-slate-400">
            <span
              className={`h-1.5 w-1.5 animate-pulse rounded-full ${
                color === "emerald" ? "bg-emerald-400" : "bg-cyan-400"
              }`}
            />
            PROVIDER
          </div>
        </div>
      ))}

      <div className="absolute left-[24%] top-[48%] h-2 w-2 animate-pulse rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,1)]" />

      <div className="absolute right-[25%] top-[46%] h-2 w-2 animate-pulse rounded-full bg-emerald-300 shadow-[0_0_20px_rgba(52,211,153,1)] [animation-delay:500ms]" />

      <div className="absolute bottom-[32%] left-[45%] h-2 w-2 animate-pulse rounded-full bg-sky-300 shadow-[0_0_20px_rgba(56,189,248,1)] [animation-delay:1000ms]" />

      <div className="absolute left-[12%] top-[50%] h-px w-[75%] rotate-[15deg] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

      <div className="absolute left-[12%] top-[50%] h-px w-[75%] -rotate-[20deg] bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent" />
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <section className="relative min-h-screen overflow-hidden bg-white pt-32 dark:bg-slate-950">
        <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-400/10 blur-[120px] dark:bg-cyan-400/15" />

        <div className="pointer-events-none absolute -right-40 top-40 h-96 w-96 rounded-full bg-emerald-400/10 blur-[120px]" />

        <div className="mx-auto grid min-h-[calc(100vh-8rem)] max-w-7xl items-center gap-10 px-5 pb-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <div className="relative z-10 max-w-2xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-3.5 py-2 text-xs font-bold text-cyan-700 dark:border-cyan-400/20 dark:bg-cyan-400/5 dark:text-cyan-300">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
              CONNECTIVITY, REIMAGINED
            </div>

            <h1 className="text-5xl font-black leading-[0.95] tracking-[-0.05em] text-slate-950 sm:text-7xl lg:text-8xl xl:text-[7.5rem] dark:text-white">
              Internet
              <span className="block bg-gradient-to-r from-cyan-500 via-sky-500 to-emerald-400 bg-clip-text text-transparent">
                that moves.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 dark:text-slate-400">
              Powerful broadband, enterprise connectivity and intelligent
              network solutions designed for a faster connected world.
            </p>

            <div className="relative z-10 mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/services"
                className="group inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-2xl bg-cyan-600 border border-white/10 px-6 py-4 text-sm font-bold text-white shadow-2xl shadow-cyan-500/10 transition-all duration-500 hover:-translate-y-1 hover:bg-cyan-600"
              >
                Explore Services
                <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="group inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-2xl border border-slate-300 bg-white px-6 py-4 text-sm font-bold text-slate-950 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-600 dark:border-white/25 dark:bg-white/5 dark:text-white dark:hover:border-cyan-400 dark:hover:text-cyan-300"
              >
                Talk to us
                <ArrowUpRight className="h-4 w-4 shrink-0" />
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-medium text-slate-500">
              <span>Broadband</span>
              <span className="h-1 w-1 rounded-full bg-cyan-400" />
              <span>Enterprise</span>
              <span className="h-1 w-1 rounded-full bg-cyan-400" />
              <span>Leased Line</span>
              <span className="h-1 w-1 rounded-full bg-cyan-400" />
              <span>Wi-Fi</span>
            </div>
          </div>

          <NetworkSphere />
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-8 dark:border-white/10 dark:bg-slate-900/40">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-5 sm:px-8 md:flex-row lg:px-10">
          <p className="text-center text-xs font-black uppercase tracking-[0.2em] text-slate-400 md:text-left">
            Connectivity ecosystem
          </p>

          <div className="grid w-full max-w-2xl grid-cols-4 divide-x divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white dark:divide-white/10 dark:border-white/10 dark:bg-white/[0.03]">
            {["ACT", "TATA", "ISHAN", "JIO"].map((partner) => (
              <div
                key={partner}
                className="flex h-16 items-center justify-center text-xs font-black tracking-[0.12em] text-slate-600 transition-colors duration-300 hover:text-cyan-500 dark:text-slate-300 dark:hover:text-cyan-300 sm:text-sm"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 dark:bg-slate-950 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-cyan-500">
                What we do
              </span>

              <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] text-slate-950 sm:text-5xl lg:text-6xl dark:text-white">
                Connectivity built around you.
              </h2>
            </div>

            <Link
              href="/services"
              className="group flex w-fit items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-300"
            >
              View all services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <Link
                  href="/services"
                  key={service.number}
                  className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 p-7 transition-all duration-500 hover:-translate-y-2 hover:border-cyan-300 hover:shadow-2xl hover:shadow-cyan-500/10 dark:border-white/10 dark:bg-white/[0.035] dark:hover:border-cyan-400/30 sm:p-9"
                >
                  <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl transition-all duration-700 group-hover:bg-cyan-400/20" />

                  <div className="relative">
                    <div className="flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-cyan-500 shadow-lg dark:bg-white/10">
                        <Icon className="h-5 w-5" />
                      </div>

                      <span className="text-xs font-black tracking-[0.2em] text-slate-400">
                        {service.number}
                      </span>
                    </div>

                    <h3 className="mt-12 text-2xl font-black tracking-tight text-slate-950 dark:text-white">
                      {service.title}
                    </h3>

                    <p className="mt-3 max-w-lg text-sm leading-7 text-slate-600 dark:text-slate-400">
                      {service.description}
                    </p>

                    <div className="mt-7 flex items-center gap-2 text-sm font-bold text-cyan-600 dark:text-cyan-300">
                      Learn more
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-950 py-24 text-white sm:py-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.12),transparent_30%),radial-gradient(circle_at_80%_80%,rgba(52,211,153,0.08),transparent_30%)]" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-cyan-300">
              Why Monizen AI
            </span>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] sm:text-5xl lg:text-6xl">
              Infrastructure with a human edge.
            </h2>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <div
                  key={reason.title}
                  className="group rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-white/[0.07]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-7 text-lg font-bold">{reason.title}</h3>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {reason.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 dark:bg-slate-950 sm:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.25em] text-cyan-500">
              Network intelligence
            </span>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] text-slate-950 sm:text-5xl dark:text-white">
              Multiple paths.
              <span className="block text-slate-500 dark:text-slate-400">
                One connected experience.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 dark:text-slate-400">
              Build connectivity around your requirements with a flexible
              ecosystem of providers, infrastructure and service options.
            </p>

            <Link
              href="/network"
              className="mt-8 inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-slate-50 px-5 py-3 text-sm font-bold text-slate-950 transition-all duration-300 hover:border-cyan-400 hover:text-cyan-600 dark:border-white/20 dark:bg-white/5 dark:text-white dark:hover:border-cyan-400 dark:hover:text-cyan-300"
            >
              Explore our network
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-xl overflow-hidden rounded-[2.5rem] border border-slate-200 bg-slate-50 shadow-2xl dark:border-white/10 dark:bg-white/[0.025]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.14),transparent_55%)]" />

            <div className="absolute left-1/2 top-1/2 h-[82%] w-[82%] -translate-x-1/2 -translate-y-1/2 animate-spin rounded-full border border-dashed border-cyan-400/30 [animation-duration:18s]" />

            <div className="absolute left-1/2 top-1/2 h-[54%] w-[54%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/50 dark:border-white/10" />

            <div className="absolute left-1/2 top-1/2 z-20 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-400/40 bg-white shadow-[0_0_60px_rgba(34,211,238,0.35)] dark:bg-slate-900 sm:h-24 sm:w-24">
              <Wifi className="h-7 w-7 text-cyan-500 sm:h-9 sm:w-9" />
            </div>

            {[
              {
                name: "ACT",
                dot: "bg-cyan-400",
                glow: "shadow-[0_0_14px_rgba(34,211,238,0.9)]",
                chip: "left-1/2 top-[9%] -translate-x-1/2 -translate-y-1/2",
                line: "left-1/2 top-[9%] h-[41%] w-px -translate-x-1/2 bg-gradient-to-b from-cyan-400 via-cyan-400/50 to-transparent",
                mid: "left-1/2 top-[30%] -translate-x-1/2",
              },
              {
                name: "TATA",
                dot: "bg-sky-400",
                glow: "shadow-[0_0_14px_rgba(56,189,248,0.9)]",
                chip: "right-[9%] top-1/2 translate-x-1/2 -translate-y-1/2",
                line: "right-[9%] top-1/2 h-px w-[41%] -translate-y-1/2 bg-gradient-to-l from-sky-400 via-sky-400/50 to-transparent",
                mid: "right-[30%] top-1/2 -translate-y-1/2",
              },
              {
                name: "ISHAN",
                dot: "bg-emerald-400",
                glow: "shadow-[0_0_14px_rgba(52,211,153,0.9)]",
                chip: "left-1/2 bottom-[9%] -translate-x-1/2 translate-y-1/2",
                line: "left-1/2 bottom-[9%] h-[41%] w-px -translate-x-1/2 bg-gradient-to-t from-emerald-400 via-emerald-400/50 to-transparent",
                mid: "left-1/2 bottom-[30%] -translate-x-1/2",
              },
              {
                name: "JIO",
                dot: "bg-cyan-400",
                glow: "shadow-[0_0_14px_rgba(34,211,238,0.9)]",
                chip: "left-[9%] top-1/2 -translate-x-1/2 -translate-y-1/2",
                line: "left-[9%] top-1/2 h-px w-[41%] -translate-y-1/2 bg-gradient-to-r from-cyan-400 via-cyan-400/50 to-transparent",
                mid: "left-[30%] top-1/2 -translate-y-1/2",
              },
            ].map((provider) => (
              <div key={provider.name}>
                <div className={`absolute ${provider.line}`} />

                <div
                  className={`absolute ${provider.chip} z-30 flex h-12 w-12 flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-xl dark:border-white/10 dark:bg-slate-900 sm:h-16 sm:w-16`}
                >
                  <span className="text-[10px] font-black tracking-wide text-slate-700 dark:text-white sm:text-xs">
                    {provider.name}
                  </span>
                  <span
                    className={`mt-1 h-1.5 w-1.5 animate-pulse rounded-full sm:h-2 sm:w-2 ${provider.dot}`}
                  />
                </div>

                <div
                  className={`absolute ${provider.mid} h-2 w-2 animate-pulse rounded-full sm:h-2.5 sm:w-2.5 ${provider.dot} ${provider.glow}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 dark:bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-4 text-center text-xs font-black uppercase tracking-[0.25em] text-slate-400">
            Demo metrics — replace with verified business data
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["99.9%", "Uptime concept"],
              ["24/7", "Support concept"],
              ["100+", "Locations concept"],
              ["4+", "Connectivity ecosystem"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-[1.75rem] border border-slate-200 bg-white p-8 text-center dark:border-white/10 dark:bg-white/[0.025]"
              >
                <div className="text-4xl font-black tracking-[-0.06em] text-slate-950 sm:text-5xl dark:text-white">
                  {value}
                </div>

                <div className="mt-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-950 py-24 text-white sm:py-32">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-400/15 blur-[120px]" />

        <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
          <span className="text-xs font-black uppercase tracking-[0.25em] text-cyan-300">
            Your next connection
          </span>

          <h2 className="mt-5 text-5xl font-black tracking-[-0.06em] sm:text-6xl lg:text-7xl">
            Ready to build a better network?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400">
            Tell us what you need and let&apos;s design a connectivity approach
            around your business.
          </p>

          <Link
            href="/contact"
            className="group mt-9 inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-cyan-600 border border-white/10 px-7 py-4 text-sm font-black text-slate-950 shadow-xl shadow-black/20 transition-all duration-500 hover:-translate-y-1 hover:border-cyan-300 hover:bg-cyan-300"
          >
            Start a conversation
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}