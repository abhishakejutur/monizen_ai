import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Globe2,
  Network,
  Radio,
  ShieldCheck,
  Sparkles,
  Wifi,
} from "lucide-react";

const providers = [
  {
    name: "ACT",
    position: "left-[2%] top-[18%] sm:left-[8%]",
    color: "cyan",
  },
  {
    name: "TATA",
    position: "right-[2%] top-[18%] sm:right-[8%]",
    color: "blue",
  },
  {
    name: "ISHAN",
    position: "left-[2%] bottom-[18%] sm:left-[8%]",
    color: "emerald",
  },
  {
    name: "JIO",
    position: "right-[2%] bottom-[18%] sm:right-[8%]",
    color: "cyan",
  },
];

const benefits = [
  {
    icon: Network,
    title: "Multiple Providers",
    description:
      "A broader ecosystem can help create connectivity options around specific requirements.",
  },
  {
    icon: Radio,
    title: "Scalable",
    description:
      "Solutions can be shaped around changing users, locations and bandwidth requirements.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable",
    description:
      "Connectivity planning focuses on stability, continuity and practical infrastructure.",
  },
  {
    icon: Sparkles,
    title: "Supported",
    description:
      "A human-focused approach keeps communication and service coordination simple.",
  },
];

function NetworkMap() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[720px]">
      <div className="absolute inset-[10%] rounded-full bg-cyan-400/10 blur-[100px]" />

      <div className="absolute left-1/2 top-1/2 h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-cyan-400/30 animate-spin [animation-duration:20s]" />

      <div className="absolute left-1/2 top-1/2 h-[84%] w-[52%] -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-full border border-cyan-400/15" />

      <div className="absolute left-1/2 top-1/2 h-[84%] w-[52%] -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded-full border border-emerald-400/15" />

      <div className="absolute left-1/2 top-1/2 z-30 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-[2rem] border border-cyan-400/30 bg-slate-950 shadow-[0_0_90px_rgba(34,211,238,0.3)] sm:h-40 sm:w-40">
        <Wifi className="mb-3 h-7 w-7 text-cyan-300" />
        <span className="text-sm font-black tracking-[-0.03em] sm:text-lg">
          Monizen AI
        </span>
        <span className="mt-1 text-[8px] uppercase tracking-[0.3em] text-slate-500">
          NETWORK CORE
        </span>
      </div>

      {providers.map((provider, index) => (
        <div
          key={provider.name}
          className={`absolute ${provider.position} z-30`}
        >
          <div className="animate-bounce rounded-2xl border border-white/10 bg-slate-900/90 px-4 py-3 shadow-2xl backdrop-blur-xl [animation-duration:5s] sm:px-5 sm:py-4">
            <div className="flex items-center gap-2.5">
              <span
                className={`h-2 w-2 animate-pulse rounded-full ${
                  provider.color === "emerald"
                    ? "bg-emerald-400"
                    : provider.color === "blue"
                      ? "bg-sky-400"
                      : "bg-cyan-400"
                }`}
              />
              <span className="text-xs font-black text-white sm:text-sm">
                {provider.name}
              </span>
            </div>

            <p className="mt-1 text-[8px] uppercase tracking-[0.2em] text-slate-500">
              Ecosystem
            </p>
          </div>
        </div>
      ))}

      <div className="absolute left-[18%] top-[31%] h-px w-[65%] rotate-[18deg] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

      <div className="absolute left-[18%] top-[68%] h-px w-[65%] -rotate-[18deg] bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent" />

      <div className="absolute left-[25%] top-1/2 h-px w-[50%] bg-gradient-to-r from-cyan-400/20 via-cyan-400 to-emerald-400/20" />

      <div className="absolute left-1/2 top-[12%] h-[76%] w-px bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent" />

      {Array.from({ length: 8 }).map((_, index) => (
        <span
          key={index}
          className={`absolute h-2 w-2 animate-pulse rounded-full ${
            index % 2 === 0 ? "bg-cyan-300" : "bg-emerald-300"
          } shadow-[0_0_18px_currentColor]`}
          style={{
            left: `${20 + ((index * 11) % 60)}%`,
            top: `${15 + ((index * 17) % 70)}%`,
          }}
        />
      ))}
    </div>
  );
}

export default function NetworkPage() {
  return (
    <div className="overflow-hidden bg-white dark:bg-slate-950">
      <section className="relative overflow-hidden pt-36 pb-20 sm:pb-28">
        <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[130px]" />

        <div className="relative mx-auto max-w-7xl px-5 text-center sm:px-8 lg:px-10">
          <span className="text-xs font-black uppercase tracking-[0.25em] text-cyan-500">
            Network ecosystem
          </span>

          <h1 className="mx-auto mt-5 max-w-5xl text-center text-4xl font-black leading-[1.05] tracking-[-0.05em] text-slate-950 sm:text-6xl md:text-7xl xl:text-8xl dark:text-white">
            Connected through
            <span className="block bg-gradient-to-r from-cyan-500 via-sky-500 to-emerald-400 bg-clip-text text-transparent">
              strong relationships.
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            Monizen AI can work with a connectivity ecosystem that includes
            providers such as ACT, TATA, Ishan and Jio.
          </p>

          <p className="mx-auto mt-4 max-w-2xl text-xs leading-6 text-slate-400">
            Provider names are shown as part of the connectivity ecosystem and
            do not represent official partnership certifications unless
            separately confirmed.
          </p>
        </div>
      </section>

      <section className="bg-slate-950 py-10 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <NetworkMap />
        </div>
      </section>

      <section className="bg-slate-50 py-24 dark:bg-slate-900/50 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-cyan-500">
              Built around flexibility
            </span>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] text-slate-950 sm:text-5xl dark:text-white">
              A network approach that adapts.
            </h2>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="group rounded-[2rem] border border-slate-200 bg-white p-7 transition-all duration-500 hover:-translate-y-2 hover:border-cyan-300 hover:shadow-xl dark:border-white/10 dark:bg-slate-950 dark:hover:border-cyan-400/30"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600 dark:bg-cyan-400/10 dark:text-cyan-300">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-7 text-lg font-black text-slate-950 dark:text-white">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 dark:bg-slate-950 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-5 md:grid-cols-2">
            {[
              "Provider ecosystem",
              "Flexible connectivity design",
              "Scalable infrastructure",
              "Business-focused support",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/[0.03]"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500" />
                <span className="text-sm font-bold text-slate-800 dark:text-slate-200">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-950 py-24 text-white sm:py-32">
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-emerald-400/10 blur-[120px]" />

        <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
          <Globe2 className="mx-auto h-8 w-8 text-cyan-300" />

          <h2 className="mt-7 text-4xl font-black tracking-[-0.05em] sm:text-6xl">
            Build your connection around the right network.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400">
            Tell us about your location, bandwidth and business requirements.
          </p>

          <Link
            href="/contact"
            className="mt-9 inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-cyan-600 border border-white/10 px-7 py-4 text-sm font-black text-slate-950 shadow-xl shadow-black/20 transition-all duration-500 hover:-translate-y-1 hover:border-cyan-300 hover:bg-cyan-300"
          >
            Talk to us
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}