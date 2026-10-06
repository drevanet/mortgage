
"use client";

import { useMemo, useState } from "react";
import {
  Calculator as CalcIcon,
  Mail,
  Send,
  CheckCircle2,
  Home,
  Percent,
  ShieldCheck,
} from "lucide-react";

export default function MortgageCalculator() {
  const [price, setPrice] = useState(450000);
  const [term, setTerm] = useState(30);
  const [down, setDown] = useState(90000);
  const [taxes, setTaxes] = useState(5400);
  const [insurance, setInsurance] = useState(1800);
  const [hoa, setHoa] = useState(0);
  const [rate, setRate] = useState(6.5);
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const money = (value: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(Math.max(0, value));

  const calculations = useMemo(() => {
    const loanAmount = Math.max(0, price - down);
    const monthlyRate = rate / 100 / 12;
    const numberOfPayments = term * 12;

    const principalAndInterest =
      loanAmount === 0
        ? 0
        : monthlyRate === 0
          ? loanAmount / numberOfPayments
          : (loanAmount *
              (monthlyRate *
                Math.pow(1 + monthlyRate, numberOfPayments))) /
            (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    const monthlyTaxes = taxes / 12;
    const monthlyInsurance = insurance / 12;

    const total =
      principalAndInterest +
      monthlyTaxes +
      monthlyInsurance +
      hoa;

    return {
      loanAmount,
      principalAndInterest,
      monthlyTaxes,
      monthlyInsurance,
      total,
    };
  }, [price, down, term, taxes, insurance, hoa, rate]);

  const percentageDown =
    price > 0 ? Math.min(100, (down / price) * 100) : 0;

  return (
    <div className="w-full overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_25px_70px_rgba(7,26,49,0.12)]">
      <div className="grid lg:grid-cols-[1.12fr_.88fr]">

        {/* LEFT — CALCULATOR */}
        <div className="bg-[#071a31] p-6 sm:p-8 lg:p-12">

          {/* Header */}
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#f1b900] text-[#071a31] shadow-lg shadow-black/10">
              <CalcIcon size={21} />
            </div>

            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#f1b900]">
                Mortgage Calculator
              </p>

              <p className="mt-1 text-xs text-white/45">
                Adjust the numbers to explore your options.
              </p>
            </div>
          </div>

          <h3 className="mt-8 max-w-2xl text-3xl font-black tracking-tight text-white sm:text-4xl">
            Build a payment that fits your plan.
          </h3>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/55">
            Quickly estimate your monthly payment and explore different
            purchase scenarios before speaking with a mortgage professional.
          </p>

          {/* Purchase Price */}
          <div className="mt-9 rounded-2xl border border-white/10 bg-white/[0.055] p-5 transition hover:border-white/15">
            <div className="flex items-center justify-between gap-4">
              <div className="min-w-0">
                <p className="text-xs font-bold uppercase tracking-wider text-white/45">
                  Purchase Price
                </p>

                <div className="mt-1 flex items-center">
                  <span className="text-xl font-bold text-white">$</span>

                  <input
                    type="number"
                    value={price}
                    min={0}
                    onChange={(e) =>
                      setPrice(Math.max(0, Number(e.target.value) || 0))
                    }
                    className="w-full bg-transparent pl-1 text-2xl font-black text-white outline-none"
                  />
                </div>
              </div>

              <Home className="shrink-0 text-white/25" size={22} />
            </div>
          </div>

          {/* Sliders */}
          <SliderField
            label="Down Payment"
            value={down}
            min={0}
            max={price || 1}
            step={5000}
            display={money(down)}
            onChange={setDown}
            helper={`${percentageDown.toFixed(0)}% of purchase price`}
          />

          <SliderField
            label="Interest Rate"
            value={rate}
            min={1}
            max={12}
            step={0.125}
            display={`${rate.toFixed(3)}%`}
            onChange={setRate}
            helper="Estimated fixed interest rate"
            icon={<Percent size={17} />}
          />

          <SliderField
            label="Annual Property Taxes"
            value={taxes}
            min={0}
            max={30000}
            step={300}
            display={money(taxes)}
            onChange={setTaxes}
            helper="Estimated annual property taxes"
          />

          {/* Insurance + HOA */}
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <InputField
              label="Annual Insurance"
              value={insurance}
              onChange={setInsurance}
            />

            <InputField
              label="Monthly HOA"
              value={hoa}
              onChange={setHoa}
            />
          </div>

          {/* Mortgage Term */}
          <div className="mt-8">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-white/45">
                Mortgage Term
              </p>

              <span className="text-sm font-black text-[#f1b900]">
                {term} years
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
              {[5, 10, 15, 20, 25, 30].map((years) => (
                <button
                  key={years}
                  type="button"
                  onClick={() => setTerm(years)}
                  className={`min-h-11 rounded-xl border px-3 text-sm font-bold transition-all ${
                    term === years
                      ? "border-[#f1b900] bg-[#f1b900] text-[#071a31] shadow-[0_8px_20px_rgba(241,185,0,0.18)]"
                      : "border-white/10 bg-white/[0.045] text-white/60 hover:border-white/25 hover:bg-white/[0.08] hover:text-white"
                  }`}
                >
                  {years} yr
                </button>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-4">
            <ShieldCheck
              size={18}
              className="mt-0.5 shrink-0 text-[#f1b900]"
            />

            <p className="text-xs leading-5 text-white/40">
              This calculator provides an estimate for planning purposes only.
              Your actual payment may vary based on loan type, credit,
              property, taxes, insurance and other factors.
            </p>
          </div>
        </div>

        {/* RIGHT — RESULTS */}
        <div className="flex flex-col bg-[#f8fafc] p-6 sm:p-8 lg:p-12">

          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">
              Estimated monthly payment
            </p>

            <div className="mt-3 flex flex-wrap items-end gap-2">
              <span className="text-5xl font-black tracking-[-0.045em] text-[#071a31] sm:text-6xl">
                {money(calculations.total)}
              </span>

              <span className="pb-2 text-sm font-bold text-slate-400">
                / month
              </span>
            </div>

            <div className="mt-6 h-px bg-slate-200" />

            {/* Breakdown */}
            <div className="mt-6 space-y-4">
              <PaymentRow
                label="Principal & Interest"
                value={calculations.principalAndInterest}
              />

              <PaymentRow
                label="Property Taxes"
                value={calculations.monthlyTaxes}
              />

              <PaymentRow
                label="Home Insurance"
                value={calculations.monthlyInsurance}
              />

              <PaymentRow
                label="HOA"
                value={hoa}
              />
            </div>

            {/* Loan Summary */}
            <div className="mt-8 rounded-2xl bg-[#071a31] p-5 shadow-[0_15px_35px_rgba(7,26,49,0.12)]">
              <div className="flex items-center justify-between gap-6">
                <div>
                  <p className="text-xs uppercase tracking-wider text-white/40">
                    Estimated loan amount
                  </p>

                  <p className="mt-1 text-2xl font-black text-white">
                    {money(calculations.loanAmount)}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-xs uppercase tracking-wider text-white/40">
                    Rate
                  </p>

                  <p className="mt-1 text-lg font-black text-[#f1b900]">
                    {rate.toFixed(3)}%
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="mt-auto pt-8">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-black text-[#071a31]">
                Want a copy of your estimate?
              </p>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                Enter your email and keep your payment estimate handy.
              </p>

              <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                <div className="relative min-w-0 flex-1">
                  <Mail
                    className="absolute left-3 top-3.5 text-slate-400"
                    size={17}
                  />

                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setSent(false);
                    }}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-3 text-sm outline-none transition focus:border-[#071a31] focus:bg-white"
                  />
                </div>

                <button
                  type="button"
                  onClick={() => {
                    if (email.includes("@")) {
                      setSent(true);
                    }
                  }}
                  className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#f1b900] px-5 text-sm font-black text-[#071a31] transition hover:bg-[#dca900]"
                >
                  <Send size={16} />
                  Send Estimate
                </button>
              </div>

              {sent && (
                <p className="mt-3 flex items-center gap-2 text-xs font-bold text-emerald-600">
                  <CheckCircle2 size={15} />
                  Your estimate is ready to be sent.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------
   PREMIUM SLIDER
-------------------------------------------------- */

function SliderField({
  label,
  value,
  min,
  max,
  step,
  display,
  helper,
  onChange,
  icon,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  display: string;
  helper: string;
  onChange: (value: number) => void;
  icon?: React.ReactNode;
}) {
  const percentage =
    max > min ? ((value - min) / (max - min)) * 100 : 0;

  return (
    <div className="mt-7">
      <div className="flex items-end justify-between gap-4">
        <div className="min-w-0">
          <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.16em] text-white/45">
            {icon}
            {label}
          </p>

          <p className="mt-1 text-xs text-white/30">
            {helper}
          </p>
        </div>

        <span className="shrink-0 text-lg font-black text-white">
          {display}
        </span>
      </div>

      {/* Slider */}
      <div className="relative mt-5 h-8">
        {/* Track */}
        <div
          className="pointer-events-none absolute left-0 right-0 top-1/2 h-[6px] -translate-y-1/2 rounded-full bg-white/10"
        />

        {/* Filled track */}
        <div
          className="pointer-events-none absolute left-0 top-1/2 h-[6px] -translate-y-1/2 rounded-full bg-[#f1b900]"
          style={{ width: `${percentage}%` }}
        />

        {/* Native range input */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          aria-label={label}
          className="mortgage-slider absolute inset-0 z-10 m-0 h-8 w-full cursor-pointer appearance-none bg-transparent p-0"
          style={{
            "--slider-progress": `${percentage}%`,
          } as React.CSSProperties}
        />
      </div>

      <div className="mt-1 flex justify-between text-[10px] font-bold text-white/25">
        <span>
          {label === "Interest Rate" ? `${min}%` : "$0"}
        </span>

        <span>
          {label === "Interest Rate"
            ? `${max}%`
            : moneyShort(max)}
        </span>
      </div>

      {/* Custom slider styling */}
      <style jsx>{`
        .mortgage-slider::-webkit-slider-runnable-track {
          height: 6px;
          background: transparent;
          border: none;
        }

        .mortgage-slider::-moz-range-track {
          height: 6px;
          background: transparent;
          border: none;
        }

        .mortgage-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 22px;
          height: 22px;
          margin-top: -8px;
          border-radius: 9999px;
          border: 4px solid #071a31;
          background: #f1b900;
          box-shadow:
            0 0 0 2px rgba(241, 185, 0, 0.95),
            0 4px 12px rgba(0, 0, 0, 0.25);
          cursor: grab;
        }

        .mortgage-slider::-webkit-slider-thumb:active {
          cursor: grabbing;
          transform: scale(1.08);
        }

        .mortgage-slider::-moz-range-thumb {
          width: 14px;
          height: 14px;
          border-radius: 9999px;
          border: 4px solid #071a31;
          background: #f1b900;
          box-shadow:
            0 0 0 2px rgba(241, 185, 0, 0.95),
            0 4px 12px rgba(0, 0, 0, 0.25);
          cursor: grab;
        }

        .mortgage-slider::-moz-range-progress {
          background: transparent;
        }

        .mortgage-slider:focus-visible {
          outline: none;
        }

        .mortgage-slider:focus-visible::-webkit-slider-thumb {
          box-shadow:
            0 0 0 3px rgba(255, 255, 255, 0.85),
            0 0 0 6px rgba(241, 185, 0, 0.55);
        }

        .mortgage-slider:focus-visible::-moz-range-thumb {
          box-shadow:
            0 0 0 3px rgba(255, 255, 255, 0.85),
            0 0 0 6px rgba(241, 185, 0, 0.55);
        }
      `}</style>
    </div>
  );
}

/* -------------------------------------------------
   INPUT
-------------------------------------------------- */

function InputField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-bold text-white/45">
        {label}
      </span>

      <div className="flex items-center rounded-xl border border-white/10 bg-white/[0.05] px-4 transition focus-within:border-[#f1b900] focus-within:bg-white/[0.08]">
        <span className="text-sm font-bold text-white/30">
          $
        </span>

        <input
          type="number"
          min={0}
          value={value}
          onChange={(e) =>
            onChange(Math.max(0, Number(e.target.value) || 0))
          }
          className="w-full bg-transparent px-2 py-3 text-sm font-bold text-white outline-none"
        />
      </div>
    </label>
  );
}

/* -------------------------------------------------
   PAYMENT ROW
-------------------------------------------------- */

function PaymentRow({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-3 last:border-0">
      <span className="text-sm text-slate-500">
        {label}
      </span>

      <strong className="text-sm font-black text-[#071a31]">
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
          maximumFractionDigits: 0,
        }).format(Math.max(0, value))}
      </strong>
    </div>
  );
}

/* -------------------------------------------------
   SHORT MONEY
-------------------------------------------------- */

function moneyShort(value: number) {
  if (value >= 1000000) {
    return `$${(value / 1000000).toFixed(1)}M`;
  }

  if (value >= 1000) {
    return `$${Math.round(value / 1000)}k`;
  }

  return `$${value}`;
}



