import {
  ClipboardList,
  CalendarCheck,
  Bell,
  Stethoscope,
  ArrowRight,
  MessageCircle,
  Mail,
  Phone,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Choose a Service",
    description:
      "Take a look at the services we offer and choose the type of care you need.",
  },
  {
    number: "02",
    icon: CalendarCheck,
    title: "Book Your Visit",
    description:
      "Choose a date and time that works for you and make your appointment online.",
  },
  {
    number: "03",
    icon: Bell,
    title: "Get Your Confirmation",
    description:
      "After booking, you will receive confirmation with the details of your appointment.",
  },
  {
    number: "04",
    icon: Stethoscope,
    title: "Visit the Clinic",
    description:
      "Come to Night Clinic at your booked time. Dr TG Modimoeng will assist you with your healthcare needs.",
  },
];

function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-white py-20 sm:py-24"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-cyan-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            Simple & Easy
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#0B1F33] sm:text-4xl lg:text-5xl">
            How It Works
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Getting healthcare should be simple. Follow these four easy steps to
            book your visit at Night Clinic.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mt-14">
          {/* Connecting line - desktop only */}
          <div className="absolute left-[12.5%] right-[12.5%] top-12 hidden h-px bg-blue-100 lg:block" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div key={step.number} className="group relative">
                  {/* Step card */}
                  <div className="relative h-full rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl">
                    {/* Number + icon */}
                    <div className="relative z-10 mb-6 flex items-center justify-between">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-[#0B1F33] group-hover:text-white">
                        <Icon size={30} strokeWidth={1.8} />
                      </div>

                      <span className="text-sm font-bold tracking-wider text-slate-300">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#0B1F33]">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {step.description}
                    </p>

                    {/* Bottom accent */}
                    <div className="mt-6 h-1 w-10 rounded-full bg-blue-600 transition-all duration-300 group-hover:w-20" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Booking CTA */}
        <div className="mt-14 overflow-hidden rounded-3xl bg-gradient-to-r from-[#0B1F33] via-[#123B5D] to-[#176B96] px-6 py-8 shadow-xl sm:px-10 sm:py-10">
          <div className="flex flex-col gap-8">
            {/* Heading + Button */}
            <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-wider text-blue-200">
                  Ready to visit?
                </p>

                <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                  Book your appointment today.
                </h3>

                <p className="mt-3 text-sm leading-6 text-blue-100 sm:text-base">
                  Choose a suitable time and book your visit online. If you need
                  help, you can also contact the clinic directly.
                </p>
              </div>

              <a
                href="#booking"
                className="group inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#0B1F33] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50"
              >
                Book an Appointment
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>

            {/* Contact Options */}
            <div className="border-t border-white/15 pt-6">
              <p className="mb-4 text-sm font-medium text-blue-100">
                Prefer to contact us directly?
              </p>

              <div className="grid gap-3 sm:grid-cols-3">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/27813617889"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 transition-all duration-300 hover:-translate-y-1 hover:bg-white/15"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#0B1F33]">
                    <MessageCircle size={20} />
                  </div>

                  <div>
                    <p className="text-xs font-medium text-blue-200">
                      WhatsApp
                    </p>
                    <p className="text-sm font-semibold text-white">
                      Chat with us
                    </p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:YOUR_EMAIL@example.com"
                  className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 transition-all duration-300 hover:-translate-y-1 hover:bg-white/15"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#0B1F33]">
                    <Mail size={20} />
                  </div>

                  <div>
                    <p className="text-xs font-medium text-blue-200">Email</p>
                    <p className="text-sm font-semibold text-white">
                      Send us an email
                    </p>
                  </div>
                </a>

                {/* Cell */}
                <a
                  href="tel:+27813617889"
                  className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 transition-all duration-300 hover:-translate-y-1 hover:bg-white/15"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#0B1F33]">
                    <Phone size={20} />
                  </div>

                  <div>
                    <p className="text-xs font-medium text-blue-200">Cell</p>
                    <p className="text-sm font-semibold text-white">
                      Call the clinic
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
