
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  CircleHelp,
  KeyRound,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
} from "lucide-react";
import Reveal from "@/components/reveal";
import MortgageCalculator from "@/components/calculator";
import ChatWidget from "@/components/chat-widget";

const services = [
  {
    icon: ShieldCheck,
    title: "First-Time Homebuyers",
    description:
      "Buying your first home should feel exciting, not overwhelming. We help you understand the process, financing options, and next steps.",
    points: [
      "Understand your buying power",
      "Compare financing options",
      "Build a clear path to closing",
    ],
    href: "/services#first-time-buyers",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=85",
  },
  {
    icon: KeyRound,
    title: "Home Purchase Loans",
    description:
      "Whether you're moving across town or across the country, we'll help you find a mortgage strategy that fits your goals.",
    points: [
      "Competitive loan options",
      "Personalized mortgage guidance",
      "Clear communication throughout",
    ],
    href: "/services#purchase-loans",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
  },
  {
    icon: TrendingUp,
    title: "Refinancing",
    description:
      "Your mortgage should continue to serve you. Explore whether refinancing could improve your payment, terms, or long-term strategy.",
    points: [
      "Review your current mortgage",
      "Explore potential savings",
      "Plan around your bigger goals",
    ],
    href: "/services#refinancing",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=85",
  },
];

const benefits = [
  "Straightforward mortgage guidance",
  "Personalized financing strategies",
  "Fast, responsive communication",
  "Education without the pressure",
  "A team focused on your goals",
  "Support from application to closing",
];

const steps = [
  {
    number: "01",
    title: "Expert Advice",
    description:
      "With years of experience, our team ensures you get the best mortgage rates and terms.",
  },
  {
    number: "02",
    title: "Personalized Solutions",
    description:
      "We understand that every client is unique, and we’re committed to finding what works for you.",
  },
  {
    number: "03",
    title: "Streamlined Process",
    description:
      "From application to approval, we make the mortgage journey seamless and stress-free.",
  },
    {
    number: "04",
    title: "Unbeatable Rates",
    description:
      "We’re dedicated to securing the best rates and terms for your financial needs.",
  },
];

const testimonials = [
  {
    quote:
      "The Preferred Mortgage made something that felt complicated feel incredibly simple. Every question was answered and we always knew what was happening next.",
    name: "Sarah M.",
    role: "First-Time Homebuyer",
  },
  {
    quote:
      "From the first conversation through closing, the communication was excellent. We never felt like just another application.",
    name: "Michael & Lauren",
    role: "Home Purchase Clients",
  },
  {
    quote:
      "They took the time to understand our long-term goals instead of simply showing us a loan. That made all the difference.",
    name: "David R.",
    role: "Refinance Client",
  },
];

const faqs = [
  {
    question: "How early should I speak with a mortgage professional?",
    answer:
      "Ideally, before you start seriously shopping for a home. An early conversation can help you understand your budget, financing options, estimated payment, and what you may need to prepare.",
  },
  {
    question: "Do I need perfect credit to buy a home?",
    answer:
      "Not necessarily. Different mortgage programs have different requirements, and your overall financial picture matters. We can help you understand the options available based on your circumstances.",
  },
  {
    question: "How much should I put down?",
    answer:
      "There isn't one universal answer. A larger down payment can reduce your loan amount, but preserving cash for reserves and other expenses can also be important. We'll help you evaluate the tradeoffs.",
  },
  {
    question: "Can you help me understand my monthly payment?",
    answer:
      "Absolutely. Your monthly housing cost can include principal, interest, property taxes, homeowners insurance, and potentially HOA dues. Our calculator can help you estimate the full picture.",
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto max-w-3xl text-center"
          : "max-w-3xl"
      }
    >
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#f1b900]/30 bg-[#f1b900]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#9b7200]">
        <Sparkles className="h-3.5 w-3.5" />
        {eyebrow}
      </div>

      <h2 className="text-3xl font-black tracking-tight text-[#071a31] sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">


{/* PREMIUM HERO */}
<section className="relative isolate min-h-[720px] overflow-hidden bg-[#071a31] sm:min-h-[780px] lg:min-h-[820px]">
  {/* Background image */}
  <div className="absolute inset-0">
    <Image
      src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2200&q=90"
      alt="Beautiful modern home"
      fill
      priority
      className="object-cover object-center"
    />

    {/* Deep premium overlays */}
    <div className="absolute inset-0 bg-[#071a31]/55" />

    <div className="absolute inset-0 bg-gradient-to-r from-[#071a31] via-[#071a31]/85 to-[#071a31]/35" />

    <div className="absolute inset-0 bg-gradient-to-t from-[#071a31] via-transparent to-[#071a31]/20" />

    {/* Glossy gold light */}
    <div className="absolute -left-32 top-1/4 h-[420px] w-[420px] rounded-full bg-[#f1b900]/10 blur-[120px]" />

    <div className="absolute right-[-120px] top-[-100px] h-[420px] w-[420px] rounded-full bg-white/10 blur-[130px]" />
  </div>

  {/* Subtle glass grid */}
  <div
    className="pointer-events-none absolute inset-0 opacity-[0.07]"
    style={{
      backgroundImage:
        "linear-gradient(rgba(255,255,255,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.35) 1px, transparent 1px)",
      backgroundSize: "80px 80px",
    }}
  />

  {/* Content */}
  <div className="relative mx-auto flex min-h-[720px] max-w-[1600px] items-center px-5 py-24 sm:min-h-[780px] sm:px-8 lg:min-h-[820px] lg:px-12 xl:px-16">
    <Reveal>
      <div className="max-w-4xl">
        {/* Glass badge */}
        <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/[0.10] px-4 py-2.5 shadow-[0_8px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f1b900] text-[#071a31] shadow-[0_0_25px_rgba(241,185,0,0.35)]">
            <Sparkles className="h-3.5 w-3.5" />
          </span>

          <span className="text-sm font-bold tracking-wide text-white">
            Mortgage guidance built around you
          </span>
        </div>

        {/* Heading */}
        <h1 className="max-w-4xl text-5xl font-black leading-[0.94] tracking-[-0.04em] text-white sm:text-6xl md:text-7xl lg:text-[88px]">
          A clearer path to the{" "}
          <span className="relative inline-block text-[#f1b900]">
            home you want.
            <span className="absolute -bottom-2 left-0 h-[3px] w-2/3 rounded-full bg-gradient-to-r from-[#f1b900] to-transparent opacity-70" />
          </span>
        </h1>

        {/* Description */}
        <p className="mt-8 max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8 lg:text-xl">
          We specialize in providing tailored mortgage solutions that fit your unique needs. Whether you’re buying your first home, upgrading, or refinancing, we’ve got you covered.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            href="https://scheduler.zoom.us/preye-ukeko/mortgage-planning"
            className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-[#f1b900] px-7 py-4 font-black text-[#071a31] shadow-[0_15px_45px_rgba(241,185,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#ffc928] hover:shadow-[0_20px_55px_rgba(241,185,0,0.35)]"
          >
            Book a Free Call

            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#071a31]/10 transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>

          <Link
            href="/mortgage-calculator"
            className="group inline-flex items-center justify-center gap-3 rounded-2xl border border-white/20 bg-white/[0.08] px-7 py-4 font-bold text-white shadow-[0_10px_40px_rgba(0,0,0,0.12)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.14]"
          >
            Calculate Your Payment

            <ArrowRight className="h-4 w-4 text-[#f1b900] transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Trust points */}
        <div className="mt-10 flex flex-wrap gap-x-7 gap-y-4">
          {[
            "Personalized guidance",
            "Clear communication",
            "No-pressure conversations",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-2.5 text-sm font-medium text-white/70"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#f1b900]/40 bg-[#f1b900]/10">
                <Check className="h-3 w-3 text-[#f1b900]" />
              </span>

              {item}
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  </div>

  {/* Bottom glass fade */}
  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#071a31] to-transparent" />

  {/* Decorative glossy line */}
  <div className="absolute bottom-0 left-1/2 h-px w-[85%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
</section>





    {/* TRUST STRIP */}
<section className="border-b border-slate-200 bg-white">
  <div className="mx-auto grid max-w-7xl grid-cols-2 gap-0 px-5 py-8 sm:px-8 lg:grid-cols-4 lg:px-10">
    {[
      ["Personal", "Guidance"],
      ["Clear", "Communication"],
      ["Smart", "Strategies"],
      ["Confident", "Decisions"],
    ].map(([first, second], index) => (
      <div
        key={first}
        className={`
          flex items-center gap-3 px-4 py-4
          border-slate-200
          ${index % 2 === 0 ? "border-r" : ""}
          ${index < 2 ? "border-b" : ""}
          lg:border-b-0
          lg:border-r
          lg:px-6
          lg:py-2
          lg:last:border-r-0
        `}
      >
        <ShieldCheck className="h-7 w-7 shrink-0 text-[#f2ba00]" />

        <div>
          <p className="font-black text-[#071a30]">{first}</p>
          <p className="text-sm text-slate-500">{second}</p>
        </div>
      </div>
    ))}
  </div>
</section>

      {/* INTRO */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:px-10">
          <Reveal>
            <div className="relative">
              <div className="overflow-hidden rounded-[2rem] shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1400&q=85"
                  alt="Couple discussing their home purchase"
                  width={1400}
                  height={1100}
                  className="h-[520px] w-full object-cover"
                />
              </div>

              <div className="absolute -bottom-7 -right-3 rounded-2xl bg-[#071a31] p-6 text-white shadow-2xl sm:-right-7">
                <p className="text-3xl font-black text-[#f1b900]">01</p>
                <p className="mt-1 text-sm font-bold">
                  Your goals first.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <SectionHeading
                eyebrow="The Preferred Difference"
                title="Mortgage advice that feels like a conversation."
                description="You don't need more jargon. You need someone who can explain your options, answer your questions, and help you understand what each decision means for your future."
              />

              <p className="mt-6 text-base leading-8 text-slate-600">
                Whether you're buying your first home, moving into your next
                chapter, refinancing an existing mortgage, or building an
                investment strategy, our approach starts with listening.
              </p>

              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 font-black text-[#071a31] transition hover:text-[#9b7200]"
              >
                Learn more about us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>


{/* WHY US */}
<section className="bg-slate-50 py-20 sm:py-28">
  <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
    <Reveal>
      <SectionHeading
        eyebrow="Why The Preferred Mortgage"
        title="A better mortgage experience starts with better guidance."
        description="We believe the best mortgage experience combines expertise with humanity. You deserve both."
      />
    </Reveal>

    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {[
        {
          title: "Personalized guidance",
          description:
            "Your mortgage strategy should reflect your goals, financial position, timeline and plans for the future."
        },
        {
          title: "Clear communication",
          description:
            "We explain the important details in straightforward language so you always understand what is happening."
        },
        {
          title: "Thoughtful strategy",
          description:
            "We look beyond a single rate to help you consider the bigger picture and choose an approach that fits."
        },
        {
          title: "Responsive support",
          description:
            "Questions can come up at any stage, which is why we stay available and keep you informed along the way."
        },
        {
          title: "Transparent process",
          description:
            "Know what to expect, what information is needed and what comes next without unnecessary surprises."
        },
        {
          title: "Long-term perspective",
          description:
            "We help you think beyond closing so your mortgage decision supports the broader financial goals you are working toward."
        }
      ].map((benefit, index) => (
        <Reveal key={benefit.title} delay={index * 0.05}>
          <div className="flex h-full items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f1b900]/15">
              <Check className="h-5 w-5 text-[#9b7200]" />
            </div>

            <div>
              <p className="font-bold text-[#071a31]">
                {benefit.title}
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                {benefit.description}
              </p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  </div>
</section>



      {/* SERVICES */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <Reveal>
            <SectionHeading
              eyebrow="What We Do"
              title="Mortgage solutions for where you are now—and where you're going."
              description="From your first conversation to the day you receive your keys, we're here to make the financing side of homeownership easier to understand."
            />
          </Reveal>

          <div className="mt-12 grid gap-7 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <Reveal key={service.title}>
                  <article className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#071a31]/80 via-[#071a31]/10 to-transparent" />

                      <div className="absolute bottom-5 left-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#f1b900] text-[#071a31] shadow-lg">
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>

                    <div className="p-7">
                      <h3 className="text-2xl font-black text-[#071a31]">
                        {service.title}
                      </h3>

                      <p className="mt-4 leading-7 text-slate-600">
                        {service.description}
                      </p>

                      <ul className="mt-6 space-y-3">
                        {service.points.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-3 text-sm font-semibold text-slate-700"
                          >
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#c18d00]" />
                            {point}
                          </li>
                        ))}
                      </ul>

                      <Link
                        href={service.href}
                        className="mt-7 inline-flex items-center gap-2 font-black text-[#071a31] hover:text-[#9b7200]"
                      >
                        Explore this service
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#071a31] px-6 py-3 font-black text-[#071a31] transition hover:bg-[#071a31] hover:text-white"
            >
              View All Mortgage Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>


{/* CALCULATOR */}
<section className="bg-[#071a31] py-24 sm:py-28 lg:py-32">
  <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-12 xl:px-16">
    <Reveal>
      <div className="w-full">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Mortgage Calculator
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
            Quickly estimate your monthly payments and plan your budget.
          </p>
        </div>

        <MortgageCalculator />
      </div>
    </Reveal>
  </div>
</section>








      {/* PROCESS */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <Reveal>
            <SectionHeading
              eyebrow="How It Works"
              title="Why Choose The Preferred Mortgage?"
              description="Mortgage financing doesn't have to feel mysterious. We break the journey into clear steps so you always know what comes next."
              align="center"
            />
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {steps.map((step) => (
              <Reveal key={step.number}>
                <div className="relative h-full rounded-[1.75rem] border border-slate-200 bg-slate-50 p-8">
                  <span className="text-5xl font-black text-[#f1b900]">
                    {step.number}
                  </span>

                  <h3 className="mt-8 text-2xl font-black text-[#071a31]">
                    {step.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* NEXT CHAPTER */}
      <section className="overflow-hidden bg-slate-50 py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:px-10">
          <Reveal>
            <div>
              <SectionHeading
                eyebrow="Your Next Chapter"
                title="The right mortgage is about more than today's payment."
                description="A mortgage is one piece of a much bigger financial picture. We help you think beyond the transaction and understand how your financing decision fits into your broader goals."
              />

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Buying your first home",
                  "Moving into a larger home",
                  "Refinancing strategically",
                  "Building a property portfolio",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-slate-200 bg-white p-4 font-bold text-[#071a31] shadow-sm"
                  >
                    <Check className="mb-2 h-5 w-5 text-[#c18d00]" />
                    {item}
                  </div>
                ))}
              </div>

              <Link
                href="/contact?booking=true"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#071a31] px-6 py-3.5 font-black text-white transition hover:bg-[#102c4c]"
              >
                Talk Through Your Options
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          <Reveal>
            <div className="relative">
              <div className="overflow-hidden rounded-[2rem] shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1500&q=85"
                  alt="Elegant home interior"
                  width={1500}
                  height={1100}
                  className="h-[520px] w-full object-cover"
                />
              </div>

              <div className="absolute -bottom-6 -left-3 max-w-xs rounded-2xl bg-white p-6 shadow-2xl sm:-left-7">
                <Star className="h-6 w-6 fill-[#f1b900] text-[#f1b900]" />

                <p className="mt-3 text-lg font-black text-[#071a31]">
                  Mortgage guidance with a human touch.
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Clear answers. Thoughtful strategy. No unnecessary pressure.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <Reveal>
            <SectionHeading
              eyebrow="Client Stories"
              title="People deserve to feel confident about one of life's biggest decisions."
              description="Here's what clients have shared about their experience with The Preferred Mortgage."
              align="center"
            />
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Reveal key={testimonial.name}>
                <figure className="flex h-full flex-col rounded-[1.75rem] border border-slate-200 bg-slate-50 p-7">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-4 w-4 fill-[#f1b900] text-[#f1b900]"
                      />
                    ))}
                  </div>

                  <blockquote className="mt-6 flex-1 text-lg font-semibold leading-8 text-[#071a31]">
                    “{testimonial.quote}”
                  </blockquote>

                  <figcaption className="mt-8 border-t border-slate-200 pt-5">
                    <p className="font-black text-[#071a31]">
                      {testimonial.name}
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      {testimonial.role}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <div>
                <SectionHeading
                  eyebrow="Frequently Asked Questions"
                  title="Questions are part of the process."
                  description="You don't have to know everything before you talk to us. That's what we're here for."
                />

                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 font-black text-[#071a31] hover:text-[#9b7200]"
                >
                  Have another question?
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>

            <div className="space-y-4">
              {faqs.map((faq) => (
                <Reveal key={faq.question}>
                  <details className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <summary className="flex cursor-pointer list-none items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f1b900]/15 text-[#9b7200]">
                        <CircleHelp className="h-5 w-5" />
                      </div>

                      <div className="flex-1">
                        <p className="pr-4 text-lg font-black leading-7 text-[#071a31]">
                          {faq.question}
                        </p>

                        <p className="mt-4 max-h-0 overflow-hidden text-sm leading-7 text-slate-600 transition-all duration-300 group-open:max-h-60">
                          {faq.answer}
                        </p>
                      </div>

                      <span className="text-2xl font-light text-slate-400 transition group-open:rotate-45">
                        +
                      </span>
                    </summary>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-[#071a31] py-20 sm:py-28">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#f1b900]/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
          <Reveal>
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f1b900] text-[#071a31] shadow-xl">
              <KeyRound className="h-7 w-7" />
            </div>

            <h2 className="mt-7 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              Ready to make your next move?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Whether you're just starting to explore or you're ready to make
              an offer, let's talk about your goals and build a mortgage plan
              around them.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/contact?booking=true"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f1b900] px-7 py-4 font-black text-[#071a31] shadow-xl transition hover:-translate-y-1"
              >
                Book a Free Call
                <ArrowRight className="h-5 w-5" />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur transition hover:bg-white/20"
              >
                Explore Our Services
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CHAT */}
      <ChatWidget />
    </main>
  );
}

