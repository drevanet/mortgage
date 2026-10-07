
"use client";

import {
  CalendarDays,
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle2,
} from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";

export default function Contact() {
  const [booking, setBooking] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    inquiry: "Book a free call",
    message: "",
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const isBooking = params.get("booking") === "true";

    setBooking(isBooking);

    if (isBooking) {
      setForm((current) => ({
        ...current,
        inquiry: "Book a free call",
      }));
    }
  }, []);

  const updateField = (
    field: keyof typeof form,
    value: string
  ) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSending(true);
    setSent(false);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Unable to send your message."
        );
      }

      setSent(true);

      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        inquiry: booking
          ? "Book a free call"
          : "General question",
        message: "",
      });
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <main className="overflow-hidden bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#071a31] py-24 text-white sm:py-28 lg:py-32">
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#f1b900]/10 blur-3xl" />

        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-white/5 blur-3xl" />

        <div className="container-wide relative">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[#f1b900]">
            Contact The Preferred Mortgage
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-black tracking-tight sm:text-7xl">
            Let&apos;s talk about your next move.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
            Have a question, want to discuss a purchase or simply want
            to understand your options? Start here.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section-pad">
        <div className="container-wide grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          {/* CONTACT DETAILS */}
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#f1b900]">
              Get in touch
            </p>

            <h2 className="mt-3 text-4xl font-black text-[#071a31]">
              Start a conversation.
            </h2>

            <p className="mt-4 max-w-md text-lg leading-8 text-slate-500">
              Tell us a little about what you are working toward.
              We&apos;ll take it from there.
            </p>

            <div className="mt-9 grid gap-5">
              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#071a31] text-[#f1b900]">
                  <Phone size={18} />
                </span>

                <div>
                  <p className="text-xs font-black uppercase tracking-wider text-slate-400">
                    Phone
                  </p>

                  <p className="mt-1 font-bold text-[#071a31]">
                    +1 (647) 801-1150
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#071a31] text-[#f1b900]">
                  <Mail size={18} />
                </span>

                <div>
                  <p className="text-xs font-black uppercase tracking-wider text-slate-400">
                    Email
                  </p>

                  <p className="mt-1 font-bold text-[#071a31]">
                    info@thepreferredmortgage.ca
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#071a31] text-[#f1b900]">
                  <MapPin size={18} />
                </span>

                <div>
                  <p className="text-xs font-black uppercase tracking-wider text-slate-400">
                    Office
                  </p>

                  <p className="mt-1 font-bold text-[#071a31]">
                    5063 N Service Rd, Suite 100-427,
                    <br />
                    Burlington, ON L7L 5H6
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#071a31] text-[#f1b900]">
                  <CalendarDays size={18} />
                </span>

                <div>
                  <p className="text-xs font-black uppercase tracking-wider text-slate-400">
                    Hours
                  </p>

                  <p className="mt-1 font-bold text-[#071a31]">
                    Mon–Fri · 9:00 AM–5:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="rounded-[32px] border border-slate-200 bg-white p-7 shadow-2xl shadow-slate-100 sm:p-10"
          >
            <div className="mb-8">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#f1b900]">
                {booking ? "Book a free call" : "Send us a message"}
              </p>

              <h2 className="mt-2 text-3xl font-black text-[#071a31]">
                How can we help?
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Complete the form below and our team will get back to you.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <label>
                <span className="mb-2 block text-xs font-black text-[#071a31]">
                  First name *
                </span>

                <input
                  required
                  value={form.firstName}
                  onChange={(e) =>
                    updateField("firstName", e.target.value)
                  }
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#071a31] focus:ring-2 focus:ring-[#f1b900]/20"
                />
              </label>

              <label>
                <span className="mb-2 block text-xs font-black text-[#071a31]">
                  Last name *
                </span>

                <input
                  required
                  value={form.lastName}
                  onChange={(e) =>
                    updateField("lastName", e.target.value)
                  }
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#071a31] focus:ring-2 focus:ring-[#f1b900]/20"
                />
              </label>

              <label>
                <span className="mb-2 block text-xs font-black text-[#071a31]">
                  Email *
                </span>

                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) =>
                    updateField("email", e.target.value)
                  }
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#071a31] focus:ring-2 focus:ring-[#f1b900]/20"
                />
              </label>

              <label>
                <span className="mb-2 block text-xs font-black text-[#071a31]">
                  Phone
                </span>

                <input
                  value={form.phone}
                  onChange={(e) =>
                    updateField("phone", e.target.value)
                  }
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#071a31] focus:ring-2 focus:ring-[#f1b900]/20"
                />
              </label>
            </div>

            <label className="mt-5 block">
              <span className="mb-2 block text-xs font-black text-[#071a31]">
                What can we help with? *
              </span>

              <select
                required
                value={form.inquiry}
                onChange={(e) =>
                  updateField("inquiry", e.target.value)
                }
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-[#071a31] focus:ring-2 focus:ring-[#f1b900]/20"
              >
                <option value="Book a free call">
                  Book a free call
                </option>

                <option value="Buying a home">
                  Buying a home
                </option>

                <option value="Refinancing">
                  Refinancing
                </option>

                <option value="Investment property">
                  Investment property
                </option>

                <option value="General question">
                  General question
                </option>
              </select>
            </label>

            <label className="mt-5 block">
              <span className="mb-2 block text-xs font-black text-[#071a31]">
                Message *
              </span>

              <textarea
                required
                rows={6}
                value={form.message}
                onChange={(e) =>
                  updateField("message", e.target.value)
                }
                placeholder="Tell us a little about what you are planning..."
                className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#071a31] focus:ring-2 focus:ring-[#f1b900]/20"
              />
            </label>

            {error && (
              <div className="mt-5 rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-bold text-red-600">
                {error}
              </div>
            )}

            {sent && (
              <div className="mt-5 flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-bold text-emerald-700">
                <CheckCircle2
                  size={18}
                  className="mt-0.5 shrink-0"
                />

                <div>
                  <p>Your message has been sent successfully.</p>

                  <p className="mt-1 font-normal text-emerald-600">
                    Thank you for contacting The Preferred Mortgage.
                    We&apos;ll be in touch soon.
                  </p>
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={sending}
              className="btn-primary mt-6 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {sending ? (
                <>
                  Sending...
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#071a31]/30 border-t-[#071a31]" />
                </>
              ) : (
                <>
                  Send message
                  <Send size={16} />
                </>
              )}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

