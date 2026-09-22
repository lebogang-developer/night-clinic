import {
  Activity,
  Baby,
  ClipboardCheck,
  HeartPulse,
  Pill,
  ShieldCheck,
  Stethoscope,
  Syringe,
  UserRound,
  UsersRound,
} from "lucide-react";

const services = [
  {
    icon: Activity,
    number: "01",
    title: "Chronic Illnesses",
    description:
      "Ongoing healthcare support and management for patients living with chronic health conditions.",
    services: ["Chronic disease management", "Ongoing health monitoring"],
  },
  {
    icon: Stethoscope,
    number: "02",
    title: "Acute Illnesses",
    description:
      "Assessment and care for illnesses and health concerns that require timely medical attention.",
    services: ["Acute illness consultations", "Medical assessments"],
  },
  {
    icon: Baby,
    number: "03",
    title: "Mother & Child",
    description:
      "Healthcare support for mothers and children, with care tailored to their individual needs.",
    services: ["Mother & child consultations", "Child health support"],
  },
  {
    icon: ClipboardCheck,
    number: "04",
    title: "Health Screening",
    description:
      "Health checks and screening services designed to help patients stay informed about their health.",
    services: ["General health screening", "STI screening & treatment"],
  },
  {
    icon: Pill,
    number: "05",
    title: "Contraceptives",
    description:
      "Contraceptive consultations and services to help patients make informed reproductive health decisions.",
    services: ["Contraceptive consultations", "Contraceptive services"],
  },
  {
    icon: UsersRound,
    number: "06",
    title: "Referrals & Other Care",
    description:
      "Additional healthcare support, including referrals and selected treatment services.",
    services: [
      "Specialist referrals",
      "Other health allied referrals",
      "Pain management injections",
      "Medical forms",
    ],
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-50 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-cyan-50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">
            <HeartPulse size={15} />
            Healthcare Services
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-[#0B1F33] sm:text-4xl lg:text-5xl">
            Care designed around{" "}
            <span className="text-blue-600">your health.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Night Clinic provides a range of healthcare services focused on
            helping individuals and families access professional medical care
            when they need it.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.number}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 sm:p-7"
              >
                {/* Top gradient line */}
                <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-[#0B1F33] via-blue-600 to-cyan-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Number */}
                <div className="absolute right-6 top-6 text-xs font-bold tracking-widest text-slate-200 transition-colors duration-300 group-hover:text-blue-100">
                  {service.number}
                </div>

                {/* Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-[#0B1F33] group-hover:text-white group-hover:shadow-lg group-hover:shadow-[#0B1F33]/20">
                  <Icon size={25} strokeWidth={1.8} />
                </div>

                {/* Content */}
                <div className="mt-6">
                  <h3 className="text-xl font-bold tracking-tight text-[#0B1F33]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {service.description}
                  </p>
                </div>

                {/* Included services */}
                <div className="mt-6 border-t border-slate-100 pt-5">
                  <ul className="space-y-2.5">
                    {service.services.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-slate-600"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom accent */}
                <div className="mt-auto pt-6">
                  <div className="h-px w-10 bg-blue-200 transition-all duration-300 group-hover:w-full group-hover:bg-blue-500" />
                </div>
              </article>
            );
          })}
        </div>

        {/* Booking CTA */}
        <div className="relative mt-14 overflow-hidden rounded-3xl bg-gradient-to-br from-[#0B1F33] via-[#103B5A] to-[#176B96] px-6 py-10 shadow-xl sm:px-10 sm:py-12 lg:mt-16 lg:px-14">
          {/* Decorative circles */}
          <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full border border-white/10" />

          <div className="pointer-events-none absolute -bottom-32 right-20 h-72 w-72 rounded-full border border-white/5" />

          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-blue-200">
                <ShieldCheck size={18} />
                Professional Healthcare
              </div>

              <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Need medical assistance?
              </h3>

              <p className="mt-3 max-w-xl text-sm leading-6 text-blue-100/80 sm:text-base">
                Book an appointment with Night Clinic and take the next step
                towards receiving the care you need.
              </p>
            </div>

            <a
              href="#booking"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#0B1F33] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50 hover:shadow-xl"
            >
              <Stethoscope size={18} />
              Book an Appointment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
