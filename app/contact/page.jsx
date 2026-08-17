"use client";

import { useState } from "react";
import Link from "next/link";
import {
  AlertCircle,
  ArrowRight,
  Check,
  Clock3,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";

const services = [
  "Broadband Internet",
  "Internet Leased Line",
  "Enterprise Connectivity",
  "Wi-Fi Solutions",
  "Network Infrastructure",
  "Other",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      service: formData.get("service"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(
          data.error || "Failed to send your enquiry. Please try again."
        );
      }

      setSubmitted(true);
    } catch (err) {
      setError(
        err.message || "Something went wrong. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="overflow-hidden bg-white dark:bg-slate-950">
      <section className="relative overflow-hidden pt-36 pb-20 sm:pb-28">
        <div className="absolute left-[-10%] top-20 h-96 w-96 rounded-full bg-cyan-400/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <span className="text-xs font-black uppercase tracking-[0.25em] text-cyan-500">
            Contact Monizen AI
          </span>

          <h1 className="mt-5 max-w-5xl text-4xl font-black leading-[1.05] tracking-[-0.05em] text-slate-950 sm:text-6xl md:text-7xl xl:text-8xl dark:text-white">
            Let&apos;s get you
            <span className="block bg-gradient-to-r from-cyan-500 via-sky-500 to-emerald-400 bg-clip-text text-transparent">
              connected.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            Tell us what you need. Whether it&apos;s broadband, enterprise
            connectivity, leased line or network infrastructure, we&apos;re
            ready to understand your requirements.
          </p>
        </div>
      </section>

      <section className="pb-24 sm:pb-32">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:px-10">
          <div className="rounded-[2rem] bg-slate-950 p-7 text-white sm:p-9">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
              <Sparkles className="h-5 w-5" />
            </div>

            <h2 className="mt-8 text-3xl font-black tracking-[-0.04em]">
              Start a conversation.
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-400">
              Replace the placeholder contact details below with your actual
              business information before publishing.
            </p>

            <div className="mt-10 grid gap-6">
              <a
                href="mailto:hello@monizen.example"
                className="group flex gap-4"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-cyan-300">
                  <Mail className="h-4 w-4" />
                </span>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Email
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-200 group-hover:text-cyan-300">
                    hello@monizen.example
                  </p>
                </div>
              </a>

              <a
                href="tel:+910000000000"
                className="group flex gap-4"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-cyan-300">
                  <Phone className="h-4 w-4" />
                </span>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Phone
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-200 group-hover:text-cyan-300">
                    +91 00000 00000
                  </p>
                </div>
              </a>

              <div className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-cyan-300">
                  <Clock3 className="h-4 w-4" />
                </span>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Business Hours
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-200">
                    Monday – Saturday
                  </p>
                  <p className="text-xs text-slate-500">
                    9:00 AM – 6:00 PM
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-cyan-300">
                  <MapPin className="h-4 w-4" />
                </span>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Location
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-200">
                    India
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/[0.03] sm:p-9">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-bold text-slate-800 dark:text-slate-200"
                    >
                      Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="h-14 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-950 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/10 dark:border-white/10 dark:bg-slate-950 dark:text-white"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-bold text-slate-800 dark:text-slate-200"
                    >
                      Phone
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="+91"
                      className="h-14 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-950 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/10 dark:border-white/10 dark:bg-slate-950 dark:text-white"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-bold text-slate-800 dark:text-slate-200"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="h-14 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-950 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/10 dark:border-white/10 dark:bg-slate-950 dark:text-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="mb-2 block text-sm font-bold text-slate-800 dark:text-slate-200"
                  >
                    Service Required
                  </label>

                  <select
                    id="service"
                    name="service"
                    required
                    defaultValue=""
                    className="h-14 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-950 outline-none transition-all duration-300 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/10 dark:border-white/10 dark:bg-slate-950 dark:text-white"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>

                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-bold text-slate-800 dark:text-slate-200"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Tell us about your connectivity requirement..."
                    className="w-full resize-none rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-950 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/10 dark:border-white/10 dark:bg-slate-950 dark:text-white"
                  />
                </div>

                {error && (
                  <div
                    role="alert"
                    className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700 dark:border-red-400/20 dark:bg-red-400/10 dark:text-red-300"
                  >
                    <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
                    <div>
                      <p className="font-bold">Something went wrong</p>
                      <p className="mt-1 leading-6 opacity-90">{error}</p>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 py-4 text-sm font-black text-white shadow-xl shadow-cyan-500/10 transition-all duration-500 hover:-translate-y-1 hover:bg-cyan-600 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:bg-slate-950 cursor-pointer"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send enquiry
                      <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="flex min-h-[620px] flex-col items-center justify-center px-4 text-center">
                <div className="flex h-20 w-20 animate-bounce items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-300">
                  <Check className="h-9 w-9" />
                </div>

                <h2 className="mt-8 text-4xl font-black tracking-[-0.05em] text-slate-950 dark:text-white">
                  Thank you!
                </h2>

                <p className="mt-4 max-w-md text-base leading-7 text-slate-600 dark:text-slate-400">
                  Your enquiry has been received. Our team can follow up with
                  you using the contact details provided.
                </p>

                <Link
                  href="/"
                  className="mt-8 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-bold text-white transition-colors duration-300 hover:bg-cyan-600"
                >
                  Back to home
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}