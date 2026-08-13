import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Eye,
  Globe2,
  HeartHandshake,
  Network,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Wifi,
} from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Reliability",
    description:
      "We believe connectivity should be dependable, understandable and designed with continuity in mind.",
  },
  {
    icon: HeartHandshake,
    title: "Transparency",
    description:
      "Clear communication creates better technology experiences and stronger long-term relationships.",
  },
  {
    icon: TrendingUp,
    title: "Progress",
    description:
      "Networks evolve continuously, and our solutions are designed to evolve with them.",
  },
];

export default function AboutPage() {
  return (
    <div className="overflow-hidden bg-white dark:bg-slate-950">
      <section className="relative overflow-hidden pt-36 pb-24 sm:pb-32">
        <div className="absolute left-[-10%] top-20 h-96 w-96 rounded-full bg-cyan-400/10 blur-[120px]" />

        <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1fr_0.8fr] lg:px-10">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.25em] text-cyan-500">
              About Monizen AI
            </span>

            <h1 className="mt-5 text-4xl font-black leading-[1.05] tracking-[-0.05em] text-slate-950 sm:text-6xl md:text-7xl xl:text-8xl dark:text-white">
              We connect
              <span className="block bg-gradient-to-r from-cyan-500 to-emerald-400 bg-clip-text text-transparent">
                what matters.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
              Monizen AI is built around a simple idea: connectivity should make
              technology more useful, businesses more capable and people more
              connected.
            </p>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-[500px]">
            <div className="absolute inset-0 rounded-full bg-cyan-400/10 blur-[100px]" />

            <div className="absolute inset-[8%] animate-spin rounded-full border border-dashed border-cyan-400/30 [animation-duration:20s]" />

            <div className="absolute inset-[18%] rounded-full border border-emerald-400/20" />

            <div className="absolute inset-[28%] rounded-full border border-cyan-400/20 bg-cyan-400/5 backdrop-blur-xl" />

            <div className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[2rem] border border-white/20 bg-slate-950 shadow-2xl shadow-cyan-500/20 dark:bg-slate-900">
              <Wifi className="h-10 w-10 text-cyan-400" />
            </div>

            {[
              ["PEOPLE", "left-0 top-[28%]"],
              ["BUSINESS", "right-0 top-[28%]"],
              ["DATA", "left-[12%] bottom-[15%]"],
              ["WORLD", "right-[12%] bottom-[15%]"],
            ].map(([label, position]) => (
              <div
                key={label}
                className={`absolute ${position} flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-[10px] font-black text-slate-600 shadow-xl dark:border-white/10 dark:bg-slate-900 dark:text-slate-300`}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-24 dark:bg-slate-900/50 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:px-10">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.25em] text-cyan-500">
              Our story
            </span>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] text-slate-950 sm:text-5xl dark:text-white">
              Technology is powerful.
              <span className="block text-slate-500 dark:text-slate-400">
                Connection makes it useful.
              </span>
            </h2>
          </div>

          <div className="space-y-6 text-base leading-8 text-slate-600 dark:text-slate-400">
            <p>
              Modern businesses depend on connectivity for almost everything:
              communication, cloud applications, customer experiences,
              collaboration and operations.
            </p>

            <p>
              Monizen AI is designed around that reality. Rather than treating
              internet connectivity as a commodity alone, we approach it as an
              important part of the digital infrastructure behind people and
              businesses.
            </p>

            <p>
              Our connectivity ecosystem can include providers such as ACT,
              TATA, Ishan and Jio, allowing solutions to be considered around
              different requirements and availability.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 dark:bg-slate-950 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-5 md:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="group rounded-[2rem] border border-slate-200 bg-slate-50 p-8 transition-all duration-500 hover:-translate-y-2 hover:border-cyan-300 hover:shadow-2xl dark:border-white/10 dark:bg-white/[0.035] dark:hover:border-cyan-400/30"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-cyan-500 shadow-lg dark:bg-white/10">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-8 text-2xl font-black text-slate-950 dark:text-white">
                    {value.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-24 text-white sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-5 lg:grid-cols-3">
            {[
              {
                icon: Target,
                title: "Mission",
                text: "Make reliable connectivity easier to access, understand and scale.",
              },
              {
                icon: Eye,
                title: "Vision",
                text: "Build a connected future where infrastructure quietly enables better experiences.",
              },
              {
                icon: Globe2,
                title: "Why we exist",
                text: "Because every meaningful digital experience starts with a connection.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/30"
                >
                  <Icon className="h-7 w-7 text-cyan-300" />

                  <h3 className="mt-8 text-2xl font-black">{item.title}</h3>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
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
            Better connections.
            <span className="block text-slate-500 dark:text-slate-400">
              Better possibilities.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-400">
            Explore the connectivity ecosystem behind Monizen AI and discover how
            we think about network solutions.
          </p>

          <Link
            href="/network"
            className="mt-9 inline-flex items-center gap-2 rounded-2xl bg-cyan-600 border border-white/10 px-7 py-4 text-sm font-black text-white shadow-lg shadow-cyan-500/10 transition-all duration-500 hover:-translate-y-1 hover:bg-cyan-600"
          >
            Explore our network
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}