
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#071a31] text-white">
      <div className="container-wide grid gap-12 py-16 md:grid-cols-[1.4fr_.8fr_.8fr_1fr]">
        {/* Company Info column */}
        <div>
          {/* LOGO */}
      
{/* LOGO */}
<Link
  href="/"
  className="inline-flex items-center"
>
  <Image
    src="/assets/footers.png"
    alt="The Preferred Mortgage"
    width={155}
    height={45}
    className="h-10 w-auto rounded-xl object-contain"
  />
</Link>



          <p className="mt-6 max-w-sm text-sm leading-7 text-white/60">
            Thoughtful mortgage guidance, clear options and a team focused on
            helping you make confident home-financing decisions.
          </p>

          <Link
            href="https://scheduler.zoom.us/preye-ukeko/mortgage-planning"
            className="mt-6 inline-flex items-center gap-2 text-sm font-black text-[#f1b900]"
          >
            Book a free call <ArrowUpRight size={15} />
          </Link>
        </div>

        {/* Explore Links column */}
        <div>
          <h3 className="text-sm font-black">Explore</h3>

          <div className="mt-5 grid gap-3 text-sm text-white/60">
            {[
              ["Home", "/"],
              ["Services", "/services"],
              ["Blog", "/blog"],
              ["Events", "/events"],
              ["About", "/about"],
              ["Contact", "/contact"],
            ].map(([t, h]) => (
              <Link
                key={h}
                href={h}
                className="transition hover:text-white"
              >
                {t}
              </Link>
            ))}
          </div>
        </div>

        {/* Mortgage Links column */}
        <div>
          <h3 className="text-sm font-black">Mortgage</h3>

          <div className="mt-5 grid gap-3 text-sm text-white/60">
            <Link
              href="/mortgage-calculator"
              className="transition hover:text-white"
            >
              Mortgage calculator
            </Link>

            <Link
              href="/services"
              className="transition hover:text-white"
            >
              Purchase loans
            </Link>

            <Link
              href="/services"
              className="transition hover:text-white"
            >
              Refinancing
            </Link>

            <Link
              href="/services"
              className="transition hover:text-white"
            >
              Investment property
            </Link>
          </div>
        </div>

        {/* Contact Info column */}
        <div>
          <h3 className="text-sm font-black">Visit or contact us</h3>

          <div className="mt-5 grid gap-4 text-sm text-white/60">
            <p className="flex gap-3">
              <MapPin
                size={18}
                className="mt-1 shrink-0 text-[#f1b900]"
              />

              <span>
                5063 N Service Rd, Suite 100-427
                <br />
                Burlington, ON L7L 5H6
              </span>
            </p>

            <p className="flex gap-3">
              <Phone
                size={17}
                className="shrink-0 text-[#f1b900]"
              />

              <a
                href="tel:+16478011150"
                className="transition hover:text-white"
              >
                +1 (647) 801-1150
              </a>
            </p>

            <p className="flex gap-3">
              <Mail
                size={17}
                className="shrink-0 text-[#f1b900]"
              />

              <a
                href="mailto:info@thepreferredmortgage.ca"
                className="transition hover:text-white"
              >
                info@thepreferredmortgage.ca
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-wide flex flex-col gap-3 py-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © 2026 The Preferred Mortgage. All rights reserved.
          </span>

          <span>
            Equal Housing Opportunity · Privacy · Terms
          </span>
        </div>
      </div>
    </footer>
  );
}

