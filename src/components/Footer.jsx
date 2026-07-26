import { useState } from "react";
import { Linkedin, Twitter, Github } from "lucide-react";
import Logo from "./common/Logo.jsx";
import LegalPlaceholderModal from "./common/LegalPlaceholderModal.jsx";
import { brand, footerLinks } from "../data/siteContent.js";
import { scrollToSection } from "../utils/scrollToSection.js";

const SOCIAL_LINKS = [
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Twitter, label: "Twitter" },
  { icon: Github, label: "GitHub" },
];

function FooterColumn({ title, links }) {
  return (
    <div>
      <h3 className="text-sm font-bold text-white">{title}</h3>
      <ul className="mt-4 flex flex-col gap-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className="focus-ring rounded text-sm text-white/65 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const [legalModal, setLegalModal] = useState(null); // "Privacy Policy" | "Terms" | null
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#171126]">
      <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo className="[&_span]:text-white" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              {brand.shortDescription}
            </p>
            <ul className="mt-5 flex gap-3">
              {SOCIAL_LINKS.map(({ icon: Icon, label }) => (
                <li key={label}>
                  <a
                    href="#home"
                    onClick={(e) => e.preventDefault()}
                    aria-label={`${label} (placeholder link)`}
                    className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-white/30 hover:text-white"
                  >
                    <Icon size={16} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <FooterColumn title="Company" links={footerLinks.company} />
          <FooterColumn title="Solutions" links={footerLinks.solutions} />
          <FooterColumn title="Specialists" links={footerLinks.specialists} />
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} {brand.name}. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-5">
            <button
              type="button"
              onClick={() => setLegalModal("Privacy Policy")}
              className="focus-ring rounded transition-colors hover:text-white"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => setLegalModal("Terms")}
              className="focus-ring rounded transition-colors hover:text-white"
            >
              Terms
            </button>
            <span>Built for practical AI delivery.</span>
          </div>
        </div>
      </div>

      <LegalPlaceholderModal
        isOpen={Boolean(legalModal)}
        onClose={() => setLegalModal(null)}
        title={legalModal || ""}
      />
    </footer>
  );
}
