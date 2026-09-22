import { useEffect, useState } from "react";
import {
  Menu,
  X,
  CalendarDays,
  MessageCircle,
  Stethoscope,
} from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "How It Works", href: "#process" },
  { name: "FAQs", href: "#faqs" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 shadow-sm backdrop-blur-md" : "bg-white"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#home" onClick={closeMenu} className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0B1F33] text-white">
            <Stethoscope size={22} strokeWidth={2} />
          </div>

          <div className="leading-tight">
            <span className="block text-lg font-bold tracking-tight text-[#0B1F33]">
              Night Clinic
            </span>

            <span className="hidden text-xs font-medium text-slate-500 sm:block">
              Dr TG Modimoeng
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-[#0B1F33]"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#contact"
            className="flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold text-[#0B1F33] transition-colors hover:bg-slate-100"
          >
            <MessageCircle size={17} />
            WhatsApp
          </a>

          <a
            href="#booking"
            className="flex items-center gap-2 rounded-full bg-[#0B1F33] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#123653] hover:shadow-md"
          >
            <CalendarDays size={17} />
            Book Appointment
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-[#0B1F33] transition-colors hover:bg-slate-100 lg:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden border-t border-slate-100 bg-white transition-all duration-300 lg:hidden ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6">
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="border-b border-slate-100 py-4 text-sm font-medium text-slate-700 transition-colors hover:text-[#0B1F33]"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              onClick={closeMenu}
              className="flex flex-1 items-center justify-center gap-2 rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-[#0B1F33] transition-colors hover:bg-slate-50"
            >
              <MessageCircle size={17} />
              WhatsApp
            </a>

            <a
              href="#booking"
              onClick={closeMenu}
              className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#0B1F33] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#123653]"
            >
              <CalendarDays size={17} />
              Book Appointment
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
