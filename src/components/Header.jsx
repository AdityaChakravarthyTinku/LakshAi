import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import Logo from "./common/Logo.jsx";
import Button from "./common/Button.jsx";
import { navLinks } from "../data/siteContent.js";
import { scrollToSection } from "../utils/scrollToSection.js";
import { useActiveSection } from "../hooks/useActiveSection.js";
import { useBodyScrollLock } from "../hooks/useBodyScrollLock.js";

const SECTION_IDS = navLinks.map((link) => link.href.replace("#", ""));

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);
  const activeId = useActiveSection(SECTION_IDS);
  const prefersReducedMotion = useReducedMotion();

  useBodyScrollLock(menuOpen);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 12);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    }

    function handleClickOutside(event) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        toggleRef.current &&
        !toggleRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  function handleNavClick(event, href) {
    event.preventDefault();
    scrollToSection(href);
    setMenuOpen(false);
  }

  const headerBg = scrolled
    ? "bg-white/95 backdrop-blur-md shadow-[0_1px_0_0_#E8E1F4,0_8px_24px_-16px_rgba(23,17,38,0.25)]"
    : "bg-white/40 backdrop-blur-sm";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${headerBg}`}
    >
      <div className="mx-auto flex h-[76px] max-w-[1240px] items-center justify-between px-5 sm:px-8">
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="focus-ring rounded-lg"
        >
          <Logo />
        </a>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-1 lg:flex"
        >
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeId === id;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                aria-current={isActive ? "page" : undefined}
                className={`focus-ring relative rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  isActive
                    ? "text-[#6D28D9]"
                    : "text-[#171126] hover:text-[#6D28D9]"
                }`}
              >
                {link.label}
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-4 -bottom-0.5 h-[2px] rounded-full bg-gradient-to-r from-[#6D28D9] to-[#C026D3]"
                  />
                )}
              </a>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            size="sm"
          >
            Discuss Your Project
          </Button>
        </div>

        <button
          ref={toggleRef}
          type="button"
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full text-[#171126] lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            ref={menuRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-[#E8E1F4] bg-white lg:hidden"
          >
            <nav aria-label="Mobile" className="flex flex-col gap-1 px-5 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="focus-ring rounded-xl px-3 py-3 text-base font-semibold text-[#171126] hover:bg-[#F5F1FF]"
                >
                  {link.label}
                </a>
              ))}
              <Button
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="mt-2 w-full"
              >
                Discuss Your Project
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
