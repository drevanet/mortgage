
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  HeartHandshake,
  ShieldCheck,
  Users,
  MessageCircle,
  Compass,
  Award,
} from "lucide-react";

import Reveal from "@/components/reveal";

const image =
  "https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=1800&q=90";

export default function About() {
  return (
    <main className="overflow-hidden bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#071a31] py-24 text-white sm:py-28 lg:py-32">
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#f1b900]/10 blur-3xl" />

        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-white/5 blur-3xl" />

        <div className="container-wide relative grid items-center gap-12 lg:grid-cols-[1fr_.9fr]">
          <Reveal>
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white/80 backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-[#f1b900]" />
                About The Preferred Mortgage
              </div>

              <h1 className="mt-6 max-w-3xl text-5xl font-black leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                A mortgage company built around{" "}
                <span className="text-[#f1b900]">
                  better conversations.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-white/65">
                We believe mortgage guidance should feel personal,
                understandable and grounded in what matters to the person
                sitting across the table.
              </p>

              <div className="mt-9">
                <Link
                  href="/contact?booking=true"
                  className="inline-flex items-center gap-3 rounded-full bg-[#f1b900] px-7 py-4 text-sm font-black text-[#071a31] shadow-[0_15px_45px_rgba(241,185,0,0.2)] transition hover:-translate-y-1 hover:bg-[#ffd34d]"
                >
                  Talk With Our Team
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative">
              <div className="absolute -inset-3 rounded-[38px] border border-[#f1b900]/20" />

              <Image
                src={image}
                alt="Professionals working together"
                width={1800}
                height={1200}
                priority
                className="relative h-[420px] w-full rounded-[34px] object-cover shadow-2xl sm:h-[500px]"
              />

              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-[#071a31]/85 p-5 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#f1b900] text-[#071a31]">
                    <HeartHandshake size={20} />
                  </span>

                  <div>
                    <p className="text-sm font-black text-white">
                      Mortgage guidance with a human touch
                    </p>

                    <p className="mt-1 text-xs text-white/50">
                      Clear. Personal. Thoughtful.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* OWNER / FOUNDER */}
      <section className="section-pad bg-white">
        <div className="container-wide">
          <Reveal>
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#f1b900]">
                Meet the owner
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-tight text-[#071a31] sm:text-5xl">
                The person behind The Preferred Mortgage.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-500">
                Experience, perspective and a genuine commitment to helping
                people make confident mortgage decisions.
              </p>
            </div>
          </Reveal>

          <div className="grid items-center gap-12 lg:grid-cols-[.85fr_1.15fr]">
            {/* OWNER PHOTO */}
            <Reveal>
              <div className="relative mx-auto w-full max-w-[520px]">
                <div className="absolute -left-4 -top-4 h-24 w-24 rounded-3xl border-2 border-[#f1b900]" />

                <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-3xl border-2 border-[#071a31]" />

                <div className="relative overflow-hidden rounded-[36px] bg-[#f4f7fb] p-3 shadow-2xl">
                  {
                   
                    <Image
                      src="https://tv.betisports.com/wp-content/uploads/2026/10/IMG_85911-scaled.jpg"
                      alt="OWNER NAME, Owner of The Preferred Mortgage"
                      width={1000}
                      height={1200}
                      className="h-[600px] w-full rounded-[28px] object-cover"
                    />
                  }

                </div>

                {/* EXPERIENCE BADGE */}
                <div className="absolute -bottom-7 left-6 rounded-2xl border border-white/10 bg-[#071a31] px-6 py-5 text-white shadow-2xl sm:left-8">
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#f1b900] text-[#071a31]">
                      <Award size={20} />
                    </span>

                    <div>
                      <p className="text-2xl font-black text-[#f1b900]">
                        10+
                      </p>

                      <p className="text-xs font-bold text-white/60">
                        Years of experience
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* OWNER STORY */}
            <Reveal delay={0.1}>
              <div className="lg:pl-6">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#f1b900]">
                  Leadership
                </p>

                <h3 className="mt-3 text-4xl font-black tracking-tight text-[#071a31] sm:text-5xl">
                  Meet Preye Ukeko
                </h3>

                <p className="mt-2 text-lg font-bold text-[#9b7200]">
                  Founder & Mortgage Professional
                </p>

                <div className="mt-7 space-y-5 text-lg leading-8 text-slate-500">
                  <p>
                    With 10+ years of experience in the mortgage industry,
                    Preye Ukeko founded The Preferred Mortgage with a
                    simple belief: people deserve to understand the mortgage
                    decisions they are making.
                  </p>

                  <p>
                    Her approach combines professional experience with a
                    personal commitment to listening, educating and helping
                    clients find financing strategies that make sense for
                    their individual circumstances.
                  </p>

                  <p>
                    From first-time buyers to experienced homeowners,
                    investors and families preparing for their next move, she
                    believes every client deserves honest guidance,
                    thoughtful communication and a mortgage experience built
                    around their goals.
                  </p>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[
                    "Mortgage Agent Level 2",
                    "License #M21004689",
                    "Mortgage Outlet Inc. #13691",
                    "10+ years of mortgage experience",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#f1b900]/15">
                        <Check size={14} className="text-[#9b7200]" />
                      </span>

                      <span className="text-sm font-bold text-[#071a31]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  href="https://scheduler.zoom.us/preye-ukeko/mortgage-planning"
                  className="btn-primary mt-8"
                >
                  Connect With Preye Ukeko
                  <ArrowRight size={16} />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="bg-[#071a31] py-20 text-white sm:py-28">
        <div className="container-wide">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#f1b900]">
                Experience that matters
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
                Knowledge is valuable. Knowing how to communicate it is even
                better.
              </h2>

              <p className="mt-5 text-lg leading-8 text-white/60">
                Years of mortgage experience have shaped an approach centered
                on education, communication and practical solutions.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                number: "10+",
                title: "Years of experience",
                          },
              {
                number: "800+",
                title: "First-Time Buyers",
                     },
              {
                number: "90%",
                title: "Clients Benefit.",
                text: "",
              },
            ].map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08}>
                <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-8">
                  <p className="text-4xl font-black text-[#f1b900]">
                    {item.number}
                  </p>

                  <h3 className="mt-4 text-xl font-black">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/50">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="section-pad">
        <div className="container-wide grid items-center gap-14 lg:grid-cols-[1fr_.9fr]">
          <Reveal>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#f1b900]">
                Our philosophy
              </p>

              <h2 className="mt-3 max-w-2xl text-4xl font-black tracking-tight text-[#071a31] sm:text-5xl">
                You should understand the decision you are making.
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-500">
                Home financing can be full of unfamiliar terms, moving parts
                and pressure. Our role is to translate the complexity, help
                you compare meaningful choices and give you room to make a
                decision that feels right for your situation.
              </p>

              <p className="mt-5 max-w-2xl leading-8 text-slate-500">
                That means listening first, communicating clearly and staying
                focused on the bigger picture—not just getting an application
                submitted.
              </p>

              <Link
                href="/contact?booking=true"
                className="btn-primary mt-8"
              >
                Contact Us
                <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid gap-4">
              {[
                {
                  title: "Listen",
                  description: "We start with your goals.",
                  icon: Users,
                },
                {
                  title: "Explain",
                  description: "We make complex choices clearer.",
                  icon: ShieldCheck,
                },
                {
                  title: "Support",
                  description: "We stay responsive when it matters.",
                  icon: HeartHandshake,
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group rounded-[26px] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="flex items-center gap-4">
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#071a31] text-[#f1b900] transition group-hover:bg-[#f1b900] group-hover:text-[#071a31]">
                        <Icon size={19} />
                      </span>

                      <div>
                        <h3 className="font-black text-[#071a31]">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-sm text-slate-500">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-[#f4f7fb] py-20 sm:py-28">
        <div className="container-wide">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#f1b900]">
                What guides us
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-tight text-[#071a31] sm:text-5xl">
                Simple principles. Better conversations.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-500">
                The way we work is shaped by principles that keep the mortgage
                experience focused on the person—not just the paperwork.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Clarity over jargon",
                description:
                  "Mortgage decisions can be complex enough without unnecessary terminology. We focus on making the important details easier to understand.",
                icon: MessageCircle,
              },
              {
                title: "People over pressure",
                description:
                  "Your mortgage should support your goals. We believe in thoughtful conversations rather than pushing you toward a decision.",
                icon: HeartHandshake,
              },
              {
                title: "Long-term thinking",
                description:
                  "A mortgage is more than a transaction. We encourage decisions that make sense for where you are today and where you want to go.",
                icon: Compass,
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 0.08}>
                  <div className="group h-full rounded-[30px] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#071a31] text-[#f1b900] transition group-hover:bg-[#f1b900] group-hover:text-[#071a31]">
                      <Icon size={21} />
                    </span>

                    <h3 className="mt-6 text-xl font-black text-[#071a31]">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-500">
                      {item.description}
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#9b7200]">
                      <Check size={14} />
                      Part of our approach
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#071a31] py-24 text-white sm:py-28">
        <div className="container-wide">
          <Reveal>
            <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.04] px-7 py-14 text-center sm:px-12 sm:py-20">
              <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f1b900]/10 blur-3xl" />

              <div className="relative">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#f1b900]">
                  Start the conversation
                </p>

                <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">
                  Your mortgage journey deserves a partner who listens.
                </h2>

                <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/60">
                  Bring your questions, goals and plans. We&apos;ll help you
                  understand your options and determine the next step.
                </p>

                <Link
                  href="https://scheduler.zoom.us/preye-ukeko/mortgage-planning"
                  className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#f1b900] px-7 py-4 text-sm font-black text-[#071a31] transition hover:-translate-y-1 hover:bg-[#ffd34d]"
                >
                  Book a Free Call
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

