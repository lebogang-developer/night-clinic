import {
  CalendarDays,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Stethoscope,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B1F33] text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1.3fr]">
          {/* Brand */}
          <div>
            <a href="#home" className="inline-flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#0B1F33]">
                <Stethoscope size={23} />
              </div>

              <div className="leading-tight">
                <span className="block text-lg font-bold">Night Clinic</span>

                <span className="text-xs text-slate-300">Dr TG Modimoeng</span>
              </div>
            </a>

            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-300">
              Professional, patient-centred healthcare with convenient
              appointment options designed around your needs.
            </p>

            <a
              href="#booking"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#0B1F33] transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-100"
            >
              <CalendarDays size={17} />
              Book an Appointment
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">
              {[
                ["Home", "#home"],
                ["About Dr TG", "#about"],
                ["Services", "#services"],
                ["How It Works", "#process"],
                ["FAQs", "#faqs"],
                ["Contact", "#contact"],
              ].map(([name, href]) => (
                <li key={name}>
                  <a
                    href={href}
                    className="text-sm text-slate-300 transition-colors hover:text-white"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="#services"
                  className="text-sm text-slate-300 transition-colors hover:text-white"
                >
                  General Consultations
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="text-sm text-slate-300 transition-colors hover:text-white"
                >
                  Medical Assessments
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="text-sm text-slate-300 transition-colors hover:text-white"
                >
                  Healthcare Services
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="text-sm text-slate-300 transition-colors hover:text-white"
                >
                  Patient Consultations
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>

            <div className="mt-5 space-y-4">
              <a
                href="tel:+27000000000"
                className="flex items-start gap-3 text-sm text-slate-300 transition-colors hover:text-white"
              >
                <Phone size={18} className="mt-0.5 shrink-0" />
                <span>+27 81 361 7889</span>
              </a>

              <a
                href="mailto:info@nightclinic.co.za"
                className="flex items-start gap-3 text-sm text-slate-300 transition-colors hover:text-white"
              >
                <Mail size={18} className="mt-0.5 shrink-0" />
                <span>info@nightclinic.co.za</span>
              </a>

              <a
                href="#contact"
                className="flex items-start gap-3 text-sm text-slate-300 transition-colors hover:text-white"
              >
                <MapPin size={18} className="mt-0.5 shrink-0" />
                <span>Suite 3085, Pharmacy at SPAR Kingsway, THABA NCHU 9780</span>
              </a>

              <div className="flex items-start gap-3 text-sm text-slate-300">
                <Clock3 size={18} className="mt-0.5 shrink-0" />

                <div>
                  <p>Clinic Hours</p>
                  <p className="mt-1 text-xs text-slate-400">
                    Mon - Fri: 16H00 - 22H00 <br />
                    Sat: 08H00 - 13H00 <br />
                    Sunday: CLOSED
                  </p>
                </div>
              </div>

              <a
                href="#contact"
                className="flex items-center gap-2 text-sm font-semibold text-emerald-400 transition-colors hover:text-emerald-300"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 text-xs text-slate-400 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© {currentYear} Night Clinic. All rights reserved.</p>

          <p>
            Website designed & developed by{" "}
            <a
              href="https://lebogang-developer.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-slate-300 transition-colors hover:text-white"
            >
              LPS Web Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
