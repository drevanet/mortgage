
"use client";

import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-[80] sm:bottom-7 sm:right-7">
      {/* CHAT PANEL */}
      {open && (
        <div className="absolute bottom-[76px] right-0 w-[320px] overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-2xl sm:w-[360px]">
          {/* Header */}
          <div className="bg-[#071a31] p-5 text-white">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-black">
                  The Preferred Mortgage
                </p>

                <p className="mt-1 text-xs text-white/55">
                  Mortgage guidance with a human touch.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="p-5">
            <div className="rounded-2xl bg-[#f4f7fb] p-4">
              <p className="text-sm font-black text-[#071a31]">
                Have a mortgage question?
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Start with a quick conversation. No pressure.
              </p>
            </div>

            <a
              href="/contact?booking=true"
              className="mt-4 flex w-full items-center justify-center rounded-xl bg-[#f1b900] px-5 py-3 text-sm font-black text-[#071a31] transition hover:bg-[#ffd34d]"
            >
              Talk to our team
            </a>
          </div>
        </div>
      )}

      {/* FLOATING BUTTON */}
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? "Close chat" : "Open chat"}
        className="group relative ml-auto grid h-14 w-14 place-items-center rounded-full bg-[#f1b900] text-[#071a31] shadow-[0_12px_35px_rgba(7,26,49,0.25)] transition duration-300 hover:-translate-y-1 hover:bg-[#ffd34d] focus:outline-none focus:ring-4 focus:ring-[#f1b900]/30"
      >
        {/* Pulse */}
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#f1b900]/30" />

        {open ? (
          <X size={22} strokeWidth={2.5} />
        ) : (
          <MessageCircle size={22} strokeWidth={2.5} />
        )}
      </button>
    </div>
  );
}

