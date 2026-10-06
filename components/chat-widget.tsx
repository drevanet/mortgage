
"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  MessageCircle,
  X,
} from "lucide-react";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <div
        className={`mb-3 w-80 origin-bottom-right rounded-3xl border border-slate-200 bg-white p-5 shadow-2xl transition-all duration-300 ${
          open
            ? "scale-100 opacity-100"
            : "pointer-events-none scale-90 opacity-0"
        }`}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-black text-[#071a31]">
              Have a mortgage question?
            </p>

            <p className="mt-1 text-xs leading-5 text-slate-500">
              Start with a quick conversation. No pressure.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close chat"
            className="rounded-lg p-1 text-slate-400 transition hover:bg-slate-100 hover:text-[#071a31]"
          >
            <X size={17} />
          </button>
        </div>

        <Link
          href="/contact"
          className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-[#071a31] px-4 py-3 text-sm font-black text-white transition hover:bg-[#102c4c]"
        >
          Talk to our team
          <ArrowRight size={15} />
        </Link>
      </div>

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? "Close chat" : "Open chat"}
        aria-expanded={open}
        className="grid h-16 w-16 place-items-center rounded-full bg-[#f1b900] text-[#071a31] shadow-[0_16px_40px_rgba(241,185,0,0.3)] transition duration-300 hover:scale-105"
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
}

