
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Check,
  Home,
  KeyRound,
  Building2,
  RefreshCcw
} from 'lucide-react';
import Reveal from '@/components/reveal';

const hero =
  'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1800&q=88';

const services = [
  [
    'Residential and Commercial Mortgages',
    'Tailored solutions for homebuyers and business owners, offering flexible financing options for residential properties and commercial ventures.',
    'Home'
  ],
  [
    '1st and 2nd Mortgages',
    'Whether it’s your primary mortgage or leveraging your equity with a second mortgage, we provide competitive rates and personalized options.',
    'Purchase'
  ],
  [
    'Refinance and Renewals',
    'Save money or unlock equity with refinancing solutions, and enjoy seamless mortgage renewals with favorable terms.',
    'Refinance'
  ],
  [
    'First-time Buyers and Investors',
    'Expert guidance for first-time buyers entering the market and customized strategies for property investors.',
    'Invest'
  ],
  [
    'Self-Employed Solutions',
    'Flexible mortgage plans designed to suit the unique financial profiles of self-employed individuals.',
    'Move'
  ],
  [
    'New to Canada and Temporary Residents',
    'Accessible mortgage options for newcomers and temporary residents, helping you achieve homeownership with ease.',
    'Plan'
  ]
];

export default function Services() {
  return (
    <main>
      <section className="relative overflow-hidden bg-[#071a31] py-28 text-white">
        <Image
          src={hero}
          alt="Modern luxury home"
          fill
          className="object-cover opacity-35"
        />

        <div className="absolute inset-0 bg-[#071a31]/75" />

        <div className="container-wide relative">
          <p className="text-xs font-black uppercase tracking-[.2em] text-[#f1b900]">
            Our services
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-black tracking-tight sm:text-7xl">
            Mortgage solutions designed around real life.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
            Different homes, goals and timelines call for different strategies.
            Explore how The Preferred Mortgage can help you move forward with
            more clarity.
          </p>
        </div>
      </section>


<section className="section-pad">
  <div className="container-wide grid gap-5 md:grid-cols-2 lg:grid-cols-3">
    {services.map(([t, d, n], i) => {
      const benefits = [
        [
          'Reliable',
          'Transparent',
          'Trustworthy'
        ],
        [
          'Experienced',
          'Accessible',
          'Personalized'
        ],
        [
          'Efficient',
          'Innovative',
          'Flexible'
        ],
        [
          'Client-focused',
          'Affordable',
          'Professional'
        ],
        [
          'Knowledgeable',
          'Supportive',
          'Streamlined'
        ],
        [
          'Empathetic',
          'Resourceful',
          'Proactive'
        ]
      ][i];

      return (
        <Reveal key={t} delay={i * 0.05}>
          <div className="h-full rounded-[30px] border border-slate-200 bg-white p-7 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#071a31] text-[#f1b900]">
                {i === 0 ? (
                  <Home size={20} />
                ) : i === 1 ? (
                  <KeyRound size={20} />
                ) : i === 2 ? (
                  <RefreshCcw size={20} />
                ) : (
                  <Building2 size={20} />
                )}
              </span>

              <span className="text-xs font-black text-slate-300">
                0{i + 1}
              </span>
            </div>

            <h2 className="mt-7 text-2xl font-black text-[#071a31]">
              {t}
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-500">
              {d}
            </p>

            <div className="mt-6 space-y-2 text-sm font-bold text-slate-700">
              {benefits.map((x) => (
                <div key={x} className="flex items-center gap-3">
                  <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#f1b900]/10">
                    <Check size={12} className="text-[#f1b900]" />
                  </span>
                  {x}
                </div>
              ))}
            </div>

            <Link
              href="/contact?booking=true"
              className="mt-7 inline-flex items-center gap-2 text-sm font-black"
            >
              Talk to our team
              <ArrowRight size={15} />
            </Link>
          </div>
        </Reveal>
      );
    })}
  </div>
</section>
```


      <section className="bg-[#f4f7fb]">
        <div className="container-wide grid items-center gap-10 py-20 lg:grid-cols-2">
          <div>
            <p className="text-xs font-black uppercase tracking-[.18em] text-[#f1b900]">
              Not sure where to start?
            </p>

            <h2 className="mt-3 text-4xl font-black text-[#071a31]">
              You do not need to know the perfect mortgage before you call.
            </h2>

            <p className="mt-5 leading-8 text-slate-500">
              Bring us your questions. We can help you understand the choices,
              the terminology and the information you need before deciding on a
              path.
            </p>

            <Link
              href="https://scheduler.zoom.us/preye-ukeko/mortgage-planning"
              className="btn-primary mt-7"
            >
              Book a Free Call
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="rounded-[30px] bg-[#071a31] p-8 text-white">
            <p className="text-2xl font-black">
              A better conversation starts with better questions.
            </p>

            <div className="mt-6 grid gap-3 text-sm text-white/65">
              {[
                'What monthly payment feels comfortable?',
                'How much cash do I want to keep available?',
                'How long do I expect to keep the property?',
                'What are the total costs—not just the rate?'
              ].map((q) => (
                <div
                  key={q}
                  className="rounded-xl border border-white/10 p-4"
                >
                  {q}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

