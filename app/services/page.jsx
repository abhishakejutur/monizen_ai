import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Globe2,
  Network,
  Router,
  ShieldCheck,
  Wifi,
  Zap,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Wifi,
    title: "Broadband Internet",
    description:
      "Reliable internet connectivity for homes, teams and everyday high-bandwidth experiences.",
    gradient: "from-cyan-400/20 to-sky-500/5",
  },
  {
    number: "02",
    icon: Globe2,
    title: "Internet Leased Line",
    description:
      "Dedicated connectivity designed for organizations that need business-focused internet access.",
    gradient: "from-sky-400/20 to-blue-500/5",
  },
  {
    number: "03",
    icon: Network,
    title: "Enterprise Connectivity",
    description:
      "Flexible connectivity architecture for offices, distributed teams and growing enterprises.",
    gradient: "from-emerald-400/20 to-cyan-500/5",
  },
  {
    number: "04",
    icon: Router,
    title: "Wi-Fi Solutions",
    description:
      "Professional Wi-Fi concepts designed around coverage, performance and user experience.",
    gradient: "from-cyan-400/20 to-emerald-500/5",
  },
  {
    number: "05",
    icon: Building2,
    title: "Network Infrastructure",
    description:
      "Structured connectivity and infrastructure solutions that help create dependable digital environments.",
    gradient: "from-blue-400/20 to-cyan-500/5",
  },
  {
    number: "06",
    icon: ShieldCheck,
    title: "Managed Connectivity",
    description:
      "A managed approach to connectivity that keeps infrastructure easier to monitor and evolve.",
    gradient: "from-emerald-400/20 to-green-500/5",
  },
];

const customerTypes = [
  {
    icon: Wifi,
    title: "Home",
    description:
      "Fast, stable connectivity for streaming, work, learning and everyday digital life.",
  },
  {
    icon: Building2,
    title: "Small Business",
    description:
      "Connectivity built for teams that depend on cloud applications, communication and collaboration.",
  },
  {
    icon: Network,
    title: "Enterprise",
    description:
      "Scalable connectivity concepts for complex locations, users and business requirements.",
  },
];

export default function ServicesPage() {
  return (
    <div className="overflow-hidden bg-white dark:bg-slate-950">
      <section className="relative overflow-hidden pt-36 pb-24 sm:pb-32">
        <div className="absolute left-[-10%] top-20 h-96 w-96 rounded-full bg-cyan-400/10 blur-[120px]" />
        <div className="absolute right-[-10%] top-40 h-96 w-96 rounded-full bg-emerald-400/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-4xl">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-cyan-500">
              Our services
            </span>

            <h1 className="mt-5 text-4xl font-black leading-[1.05] tracking-[-0.05em] text-slate-950 sm:text-6xl md:text-7xl xl:text-8xl dark:text-white">
              Connectivity
              <span className="block bg-gradient-to-r from-cyan-500 via-sky-500 to-emerald-400 bg-clip-text text-transparent">
                for every ambition.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
              From everyday broadband to enterprise connectivity, Monizen AI
              brings together practical network solutions for different digital
              requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.number}
                  className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 p-7 transition-all duration-700 hover:-translate-y-3 hover:border-cyan-300 hover:shadow-2xl hover:shadow-cyan-500/10 dark:border-white/10 dark:bg-white/[0.035] dark:hover:border-cyan-400/30"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 transition-opacity duration-700 group-hover:opacity-100`}
                  />

                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-cyan-500 shadow-lg dark:bg-white/10">
                        <Icon className="h-5 w-5" />
                      </div>

                      <span className="text-xs font-black tracking-[0.2em] text-slate-400">
                        {service.number}
                      </span>
                    </div>

                    <h2 className="mt-12 text-2xl font-black tracking-tight text-slate-950 dark:text-white">
                      {service.title}
                    </h2>

                    <p className="mt-4 min-h-[84px] text-sm leading-7 text-slate-600 dark:text-slate-400">
                      {service.description}
                    </p>

                    <Link
                      href="/contact"
                      className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-cyan-600 dark:text-cyan-300"
                    >
                      Discuss this service
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-24 dark:bg-slate-900/50 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-cyan-500">
              Find your fit
            </span>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] text-slate-950 sm:text-5xl dark:text-white">
              Which connectivity solution is right for you?
            </h2>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {customerTypes.map((type) => {
              const Icon = type.icon;

              return (
                <div
                  key={type.title}
                  className="group rounded-[2rem] border border-slate-200 bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:border-cyan-300 hover:shadow-2xl dark:border-white/10 dark:bg-slate-950 dark:hover:border-cyan-400/30"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600 dark:bg-cyan-400/10 dark:text-cyan-300">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-8 text-2xl font-black text-slate-950 dark:text-white">
                    {type.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
                    {type.description}
                  </p>

                  <Link
                    href="/contact"
                    className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-slate-950 dark:text-white"
                  >
                    Find a solution
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-950 py-24 text-white sm:py-32">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-400/15 blur-[130px]" />

        <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-cyan-300">
            <Zap className="h-6 w-6" />
          </div>

          <h2 className="mt-7 text-4xl font-black tracking-[-0.05em] sm:text-6xl">
            Your network should work as hard as you do.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400">
            Let&apos;s understand your requirements and create a connectivity
            approach that fits.
          </p>

          <Link
            href="/contact"
            className="group mt-9 inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-cyan-600 border border-white/10 px-7 py-4 text-sm font-black text-slate-950 shadow-xl shadow-black/20 transition-all duration-500 hover:-translate-y-1 hover:border-cyan-300 hover:bg-cyan-300"
          >
            Talk to Monizen AI
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}