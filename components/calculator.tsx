
"use client";

import { useMemo, useState } from "react";
import {
  Calculator as CalcIcon,
  CheckCircle2,
  Home,
  Mail,
  Percent,
  Send,
  ShieldCheck,
} from "lucide-react";

const TERM_OPTIONS = [5, 10, 15, 20, 25, 30];

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

  const calculations = useMemo(() => {
    const loanAmount = Math.max(price - down, 0);
    const monthlyRate = rate / 100 / 12;
    const numberOfPayments = term * 12;

    const principalInterest =
      loanAmount > 0 && monthlyRate > 0
        ? loanAmount *
          (monthlyRate *
            Math.pow(1 + monthlyRate, numberOfPayments)) /
          (Math.pow(1 + monthlyRate, numberOfPayments) - 1)
        : loanAmount / Math.max(numberOfPayments, 1);

    const monthlyTaxes = taxes / 12;
    const monthlyInsurance = insurance / 12;

    const totalMonthly =
      principalInterest +
      monthlyTaxes +
      monthlyInsurance +
      hoa;

    return {
      loanAmount,
      principalInterest,
      monthlyTaxes,
      monthlyInsurance,
      hoa,
      totalMonthly,
    };
  }, [price, term, down, taxes, insurance, hoa, rate]);

  const money = (value: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(value);

  const moneyWithDecimals = (value: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);

  const handleNumberChange = (
    value: string,
    setter: (value: number) => void
  ) => {
    const numeric = Number(value.replace(/[^0-9.]/g, ""));

    setter(Number.isFinite(numeric) ? numeric : 0);
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) return;

    setSent(true);
  };

  return (
    <section
      id="calculator"
      className="w-full overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_25px_80px_rgba(7,26,49,0.12)]"
    >
      <div className="grid lg:grid-cols-[1.15fr_.85fr]">
        {/* LEFT SIDE */}
        <div className="bg-white p-6 sm:p-8 lg:p-10">
          <div className="mb-8">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#071a31] text-[#f1b900]">
                <CalcIcon className="h-5 w-5" />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#f1b900]">
                  Estimate Your Payment
                </p>
                <h3 className="mt-1 text-xl font-black text-[#071a31]">
                  Mortgage Calculator
                </h3>
              </div>
            </div>

            <p className="max-w-xl text-sm leading-6 text-slate-500">
              Adjust the numbers below to estimate your monthly mortgage
              payment.
            </p>
          </div>

          <div className="space-y-7">
            {/* PURCHASE PRICE */}
            <div>
              <FieldHeader
                icon={<Home className="h-4 w-4" />}
                label="Purchase Price"
              />

              <div className="relative mt-3">
                <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 font-bold text-slate-400">
                  $
                </span>

                <input
                  type="number"
                  min="0"
                  value={price}
                  onChange={(e) =>
                    handleNumberChange(e.target.value, setPrice)
                  }
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-4 pl-9 pr-4 text-lg font-bold text-[#071a31] outline-none transition focus:border-[#f1b900] focus:bg-white focus:ring-4 focus:ring-[#f1b900]/10"
                />
              </div>
            </div>

            {/* DOWN PAYMENT */}
            <SliderField
              label="Down Payment"
              value={down}
              min={0}
              max={Math.max(price, 1)}
              step={1000}
              prefix="$"
              onChange={setDown}
            />

            {/* INTEREST RATE */}
            <SliderField
              label="Interest Rate"
              value={rate}
              min={0}
              max={15}
              step={0.05}
              suffix="%"
              decimals={2}
              onChange={setRate}
            />

            {/* ANNUAL TAXES */}
            <SliderField
              label="Annual Property Taxes"
              value={taxes}
              min={0}
              max={30000}
              step={100}
              prefix="$"
              onChange={setTaxes}
            />

            {/* INSURANCE */}
            <EditableField
              label="Annual Home Insurance"
              value={insurance}
              prefix="$"
              onChange={setInsurance}
            />

            {/* HOA */}
            <EditableField
              label="Monthly HOA"
              value={hoa}
              prefix="$"
              onChange={setHoa}
            />

            {/* TERM */}
            <div>
              <div className="mb-3 flex items-center justify-between">
                <FieldHeader
                  icon={<ShieldCheck className="h-4 w-4" />}
                  label="Mortgage Term"
                />

                <span className="rounded-full bg-[#071a31] px-3 py-1 text-xs font-bold text-white">
                  {term} years
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
                {TERM_OPTIONS.map((years) => {
                  const active = term === years;

                  return (
                    <button
                      key={years}
                      type="button"
                      onClick={() => setTerm(years)}
                      className={`rounded-xl border px-3 py-3 text-sm font-bold transition ${
                        active
                          ? "border-[#f1b900] bg-[#f1b900] text-[#071a31] shadow-sm"
                          : "border-slate-200 bg-white text-slate-600 hover:border-[#f1b900]/60 hover:bg-slate-50"
                      }`}
                    >
                      {years}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs leading-5 text-slate-500">
              This calculator provides an estimate for planning purposes only.
              Actual mortgage payments may vary based on your lender, credit
              profile, property, loan program, and other costs.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="border-t border-slate-200 bg-white p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
          <div className="rounded-[24px] bg-[#071a31] p-6 text-white sm:p-8">
            <p className="text-sm font-semibold text-white/60">
              Estimated Monthly Payment
            </p>

            <div className="mt-2 text-4xl font-black tracking-tight text-[#f1b900] sm:text-5xl">
              {moneyWithDecimals(calculations.totalMonthly)}
            </div>

            <p className="mt-2 text-sm text-white/50">
              Based on the information you entered
            </p>

            <div className="my-7 h-px bg-white/10" />

            <div className="space-y-4">
              <PaymentRow
                label="Principal & Interest"
                value={money(calculations.principalInterest)}
              />

              <PaymentRow
                label="Property Taxes"
                value={money(calculations.monthlyTaxes)}
              />

              <PaymentRow
                label="Home Insurance"
                value={money(calculations.monthlyInsurance)}
              />

              <PaymentRow
                label="HOA"
                value={money(calculations.hoa)}
              />
            </div>

            <div className="mt-7 rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm text-white/60">
                  Estimated Loan Amount
                </span>

                <span className="font-black text-white">
                  {money(calculations.loanAmount)}
                </span>
              </div>

              <div className="mt-3 flex items-center justify-between gap-4">
                <span className="text-sm text-white/60">
                  Interest Rate
                </span>

                <span className="font-black text-white">
                  {rate.toFixed(2)}%
                </span>
              </div>
            </div>
          </div>

          {/* EMAIL RESULTS */}
          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <div className="flex gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#071a31] shadow-sm">
                <Mail className="h-4 w-4" />
              </div>

              <div>
                <h4 className="font-bold text-[#071a31]">
                  Send me this estimate
                </h4>

                <p className="mt-1 text-sm leading-5 text-slate-500">
                  Enter your email to save your estimated payment.
                </p>
              </div>
            </div>

            <form onSubmit={handleEmailSubmit} className="mt-4">
              <div className="flex flex-col gap-2 sm:flex-row">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setSent(false);
                  }}
                  placeholder="you@example.com"
                  className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-[#071a31] outline-none transition placeholder:text-slate-400 focus:border-[#f1b900] focus:ring-4 focus:ring-[#f1b900]/10"
                />

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#f1b900] px-5 py-3 text-sm font-black text-[#071a31] transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <Send className="h-4 w-4" />
                  Send
                </button>
              </div>
            </form>

            {sent && (
              <div className="mt-3 flex items-center gap-2 text-sm font-semibold text-emerald-600">
                <CheckCircle2 className="h-4 w-4" />
                Estimate ready to be sent.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- */
/* FIELD HEADER */
/* ---------------------------------- */

function FieldHeader({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div className="flex items-center gap-2 text-sm font-bold text-[#071a31]">
      <span className="text-[#f1b900]">{icon}</span>
      {label}
    </div>
  );
}

/* ---------------------------------- */
/* SLIDER + EDITABLE INPUT */
/* ---------------------------------- */

function SliderField({
  label,
  value,
  min,
  max,
  step,
  prefix,
  suffix,
  decimals = 0,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  onChange: (value: number) => void;
}) {
  const percentage =
    max > min ? ((value - min) / (max - min)) * 100 : 0;

  const displayValue =
    decimals > 0 ? value.toFixed(decimals) : Math.round(value).toString();

  return (
    <div>
      <div className="mb-3 flex items-center justify-between gap-4">
        <FieldHeader
          icon={<Percent className="h-4 w-4" />}
          label={label}
        />

        <div className="relative w-36">
          {prefix && (
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm font-bold text-slate-400">
              {prefix}
            </span>
          )}

          <input
            type="number"
            min={min}
            max={max}
            step={step}
            value={displayValue}
            onChange={(e) => {
              const numeric = Number(e.target.value);

              if (!Number.isFinite(numeric)) {
                onChange(0);
                return;
              }

              onChange(Math.min(Math.max(numeric, min), max));
            }}
            className={`w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 text-right text-sm font-black text-[#071a31] outline-none transition focus:border-[#f1b900] focus:bg-white focus:ring-4 focus:ring-[#f1b900]/10 ${
              prefix ? "pl-7 pr-8" : "px-3"
            }`}
          />

          {suffix && (
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-sm font-bold text-slate-400">
              {suffix}
            </span>
          )}
        </div>
      </div>

      <div className="relative flex h-8 items-center">
        {/* Track */}
        <div className="absolute left-0 right-0 h-1.5 overflow-hidden rounded-full bg-slate-200">
          <div
            className="h-full rounded-full bg-[#f1b900]"
            style={{
              width: `${Math.min(Math.max(percentage, 0), 100)}%`,
            }}
          />
        </div>

        {/* Slider */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={Math.min(Math.max(value, min), max)}
          onChange={(e) => onChange(Number(e.target.value))}
          className="mortgage-slider relative z-10 w-full cursor-pointer appearance-none bg-transparent"
          aria-label={label}
        />
      </div>

      <div className="mt-1 flex justify-between text-[11px] font-medium text-slate-400">
        <span>
          {prefix}
          {min.toLocaleString()}
          {suffix}
        </span>

        <span>
          {prefix}
          {max.toLocaleString()}
          {suffix}
        </span>
      </div>

      <style jsx>{`
        .mortgage-slider::-webkit-slider-runnable-track {
          height: 6px;
          background: transparent;
        }

        .mortgage-slider::-moz-range-track {
          height: 6px;
          background: transparent;
        }

        .mortgage-slider::-webkit-slider-thumb {
          appearance: none;
          width: 22px;
          height: 22px;
          margin-top: -8px;
          border-radius: 9999px;
          border: 4px solid #071a31;
          background: #f1b900;
          box-shadow: 0 2px 8px rgba(7, 26, 49, 0.2);
          cursor: grab;
        }

        .mortgage-slider::-webkit-slider-thumb:active {
          cursor: grabbing;
        }

        .mortgage-slider::-moz-range-thumb {
          width: 22px;
          height: 22px;
          border-radius: 9999px;
          border: 4px solid #071a31;
          background: #f1b900;
          box-shadow: 0 2px 8px rgba(7, 26, 49, 0.2);
          cursor: grab;
        }

        .mortgage-slider::-moz-range-thumb:active {
          cursor: grabbing;
        }

        .mortgage-slider:focus-visible {
          outline: none;
        }

        .mortgage-slider:focus-visible::-webkit-slider-thumb {
          box-shadow:
            0 0 0 4px rgba(241, 185, 0, 0.2),
            0 2px 8px rgba(7, 26, 49, 0.2);
        }

        .mortgage-slider:focus-visible::-moz-range-thumb {
          box-shadow:
            0 0 0 4px rgba(241, 185, 0, 0.2),
            0 2px 8px rgba(7, 26, 49, 0.2);
        }
      `}</style>
    </div>
  );
}

/* ---------------------------------- */
/* NORMAL EDITABLE FIELD */
/* ---------------------------------- */

function EditableField({
  label,
  value,
  prefix,
  onChange,
}: {
  label: string;
  value: number;
  prefix?: string;
  onChange: (value: number) => void;
}) {
  return (
    <div>
      <div className="mb-3">
        <FieldHeader
          icon={<Home className="h-4 w-4" />}
          label={label}
        />
      </div>

      <div className="relative">
        {prefix && (
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 font-bold text-slate-400">
            {prefix}
          </span>
        )}

        <input
          type="number"
          min="0"
          value={value}
          onChange={(e) => {
            const numeric = Number(e.target.value);

            onChange(
              Number.isFinite(numeric) ? Math.max(numeric, 0) : 0
            );
          }}
          className={`w-full rounded-2xl border border-slate-200 bg-slate-50 py-4 text-lg font-bold text-[#071a31] outline-none transition focus:border-[#f1b900] focus:bg-white focus:ring-4 focus:ring-[#f1b900]/10 ${
            prefix ? "pl-9 pr-4" : "px-4"
          }`}
        />
      </div>
    </div>
  );
}

/* ---------------------------------- */
/* PAYMENT ROW */
/* ---------------------------------- */

function PaymentRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-sm text-white/60">{label}</span>

      <span className="text-sm font-bold text-white">{value}</span>
    </div>
  );
}

