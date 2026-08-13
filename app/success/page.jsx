import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Gauge,
  Network,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";

const metrics = [
  {
    value: "99.9%",
    label: "Uptime concept",
  },
  {
    value: "24/7",
    label: "Support concept",
  },
  {
    value: "100+",
    label: "Locations concept",
  },
  {
    value: "4+",
    label: "Provider ecosystem",
  },
];

const chart = [
  { name: "Reliability", value: "92%" },
  { name: "Scalability", value: "84%" },
  { name: "Support", value: "90%" },
  { name: "Connectivity", value: "96%" },
];

const principles = [
  {
    icon: ShieldCheck,
    title: "Reliability",
    text: "Design around stable infrastructure and practical operational needs.",
  },
  {
    icon: TrendingUp,
    title: "Scalability",
    text: "Create solutions that can evolve as requirements become more complex.",
  },
  {
    icon: Users,
    title: "Support",
    text: "Keep communication clear and the human side of connectivity strong.",
  },
  {
    icon: Network,
    title: "Connectivity",
    text: "Bring providers, infrastructure and requirements into one solution.",
  },
];

export default function SuccessPage() {
  return (
    <div className="overflow-hidden bg-white dark:bg-slate-950">
      <section className="relative overflow-hidden pt-36 pb-24 sm:pb-32">
        <div className="absolute left-[-10%] top-20 h-96 w-96 rounded-full bg-cyan-400/10 blur-[120px]" />
        <div className="absolute right-[-10%] top-40 h-96 w-96 rounded-full bg-emerald-400/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <span className="text-xs font-black uppercase tracking-[0.25em] text-cyan-500">
            Success framework
          </span>

          <h1 className="mt-5 max-w-5xl text-4xl font-black leading-[1.05] tracking-[-0.05em] text-slate-950 sm:text-6xl md:text-7xl xl:text-8xl dark:text-white">
            Results that
            <span className="block bg-gradient-to-r from-cyan-500 via-sky-500 to-emerald-400 bg-clip-text text-transparent">
              stay connected.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            A premium connectivity experience is measured by more than speed.
            Reliability, scalability, support and network design all matter.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-20 dark:bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-4 text-center text-xs font-black uppercase tracking-[0.25em] text-slate-400">
            Editable demo metrics — replace with verified data
          </div>

          <div className="grid overflow-hidden rounded-[2rem] border border-slate-200 bg-white dark:border-white/10 dark:bg-slate-950 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="border-b border-slate-200 p-8 text-center dark:border-white/10 lg:border-b-0 lg:border-r lg:last:border-r-0"
              >
                <div className="text-4xl font-black tracking-[-0.06em] text-slate-950 dark:text-white">
                  {metric.value}
                </div>

                <div className="mt-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 dark:bg-slate-950 sm:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:px-10">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.25em] text-cyan-500">
              Network performance
            </span>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] text-slate-950 sm:text-5xl dark:text-white">
              Performance built into the approach.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600 dark:text-slate-400">
              The visualization below is a conceptual representation of how
              connectivity priorities can be evaluated.
            </p>

            <div className="mt-8 flex items-center gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-xs leading-5 text-amber-700 dark:border-amber-400/20 dark:bg-amber-400/5 dark:text-amber-300">
              <Gauge className="h-5 w-5 shrink-0" />
              Demo visualization — not a measurement of actual Monizen AI
              performance.
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/[0.03] sm:p-10">
            <div className="space-y-7">
              {chart.map((item) => (
                <div key={item.name}>
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-sm font-bold text-slate-700 dark:text-slate-300">
                      {item.name}
                    </span>

                    <span className="text-xs font-black text-cyan-500">
                      {item.value}
                    </span>
                  </div>

                  <div className="h-3 overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-400 shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all duration-1000"
                      style={{ width: item.value }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-24 text-white sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-cyan-300">
              The approach
            </span>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] sm:text-5xl">
              Why the approach works.
            </h2>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {principles.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/30"
                >
                  <Icon className="h-7 w-7 text-cyan-300" />

                  <h3 className="mt-7 text-xl font-black">{item.title}</h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 dark:bg-slate-950 sm:py-32">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <Sparkles className="mx-auto h-8 w-8 text-cyan-500" />

          <h2 className="mt-7 text-4xl font-black tracking-[-0.05em] text-slate-950 sm:text-6xl dark:text-white">
            Success starts with the right connection.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-400">
            Let&apos;s understand your requirements and create a connectivity
            strategy around them.
          </p>

          <Link
            href="/contact"
            className="mt-9 inline-flex items-center gap-2 rounded-2xl bg-cyan-600 border border-white/10 px-7 py-4 text-sm font-black text-white shadow-lg shadow-cyan-500/10 transition-all duration-500 hover:-translate-y-1 hover:bg-cyan-600"
          >
            Start a conversation
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}