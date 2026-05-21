"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaInstagram, FaLinkedinIn, FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import {
  ZAG_ADDRESS,
  ZAG_EMAIL,
  ZAG_PHONE_DISPLAY,
  ZAG_PHONE_TEL,
  INTERIOR_SOCIAL,
  CONSTRUCTION_SOCIAL,
} from "@/lib/zagContact";

const pageLinks = [
  { label: "Interior Design", href: "/interior-design" },
  { label: "Construction", href: "/construction" },
  { label: "Announcements", href: "/news" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const interiorSocials = [
  {
    href: INTERIOR_SOCIAL.instagram,
    Icon: FaInstagram,
    label: "Instagram (Interior)",
  },
  { href: INTERIOR_SOCIAL.linkedin, Icon: FaLinkedinIn, label: "LinkedIn" },
  { href: INTERIOR_SOCIAL.x, Icon: FaXTwitter, label: "X" },
  {
    href: INTERIOR_SOCIAL.pinterest,
    Icon: FaPinterestP,
    label: "Pinterest (Interior)",
  },
];

const constructionSocials = [
  {
    href: CONSTRUCTION_SOCIAL.instagram,
    Icon: FaInstagram,
    label: "Instagram (Construction)",
  },
  {
    href: CONSTRUCTION_SOCIAL.pinterest,
    Icon: FaPinterestP,
    label: "Pinterest (Construction)",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0b0f18] border-t border-white/10">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-64 gap-8">
          {/* ── LEFT: Logo ── */}
          <div className="shrink-0 flex justify-start">
            <Link
              href="/"
              className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-200"
            >
              <div className="relative w-20 h-20 md:w-28 md:h-28 shrink-0">
                <Image
                  src="/sebra.png"
                  alt="ZAG Rwanda logo"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-white text-base md:text-lg font-bold tracking-tight leading-tight">
                  ZAG Rwanda
                </span>
                <span className="text-white/40 text-[0.45rem] tracking-widest uppercase">
                  The Best Choice
                </span>
              </div>
            </Link>
          </div>

          {/* ── RIGHT: Nav + Contact + Socials ── */}
          <div className="flex flex-col gap-5 flex-1 text-left">
            {/* Nav links row */}
            <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 justify-start">
              {pageLinks.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="text-xs font-medium text-white/50 hover:text-primary transition-colors duration-200 uppercase tracking-wide"
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* Contact info + Socials underneath */}
            <div className="flex flex-col gap-7">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-10">
                <div className="flex items-start gap-2 text-xs text-white/40">
                  <MapPin className="size-3.5 shrink-0 mt-0.5 text-primary/50" />
                  <span>{ZAG_ADDRESS}</span>
                </div>
                <Link
                  href={`tel:${ZAG_PHONE_TEL}`}
                  className="flex items-center gap-2 text-xs text-white/40 hover:text-primary transition-colors duration-200"
                >
                  <Phone className="size-3.5 shrink-0 text-primary/50" />
                  <span>{ZAG_PHONE_DISPLAY}</span>
                </Link>
                <Link
                  href={`mailto:${ZAG_EMAIL}`}
                  className="flex items-center gap-2 text-xs text-white/40 hover:text-primary transition-colors duration-200"
                >
                  <Mail className="size-3.5 shrink-0 text-primary/50" />
                  <span>{ZAG_EMAIL}</span>
                </Link>
              </div>

              {/* Socials — directly under contact */}
              <div className="flex flex-col md:flex-row md:gap-8 gap-3 mt-1 justify-start">
                <div className="flex items-center gap-2">
                  <span className="text-[0.55rem] uppercase tracking-widest text-primary/50 font-semibold w-fit shrink-0 text-left">
                    Interior Design 
                  </span>
                  <div className="flex gap-1.5">
                    {interiorSocials.map(({ href, Icon, label }) => (
                      <Link
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="flex h-6 w-6 items-center justify-center border border-white/15 text-white/40 transition-all duration-200 hover:border-primary/50 hover:text-primary hover:bg-primary/5"
                      >
                        <Icon className="size-2.5" />
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[0.55rem] uppercase tracking-widest text-primary/50 font-semibold w-fit shrink-0 text-left">
                    Construction
                  </span>
                  <div className="flex gap-1.5">
                    {constructionSocials.map(({ href, Icon, label }) => (
                      <Link
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="flex h-6 w-6 items-center justify-center border border-white/15 text-white/40 transition-all duration-200 hover:border-primary/50 hover:text-primary hover:bg-primary/5"
                      >
                        <Icon className="size-2.5" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span className="text-[0.6rem] uppercase tracking-widest text-white/25">
            © {year} ZAG Rwanda. All rights reserved.
          </span>
          <span className="text-[0.6rem] text-white/20 tracking-wide">
            Interior Design &amp; Architecture
          </span>
        </div>
      </div>
    </footer>
  );
}
