import {
  ArrowRight,
  CalendarCheck,
  HeartHandshake,
  MapPin,
  Stethoscope,
} from "lucide-react";

const reasons = [
  {
    icon: MapPin,
    title: "Local & Accessible",
    description:
      "A local healthcare practice serving patients in Thaba Nchu and the surrounding community.",
  },
  {
    icon: HeartHandshake,
    title: "Personal Patient Care",
    description:
      "A doctor-led practice where patients can experience a more personal and welcoming approach to healthcare.",
  },
  {
    icon: CalendarCheck,
    title: "Convenient Booking",
    description:
      "Book an appointment online and choose a convenient available time without unnecessary back-and-forth.",
  },
  {
    icon: Stethoscope,
    title: "Professional Care",
    description:
      "Access a range of healthcare services in a professional environment focused on your individual needs.",
  },
];

const WhyChooseUs = () => {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-24 lg:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-blue-100/60 blur-3xl" />

      <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-cyan-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main split section */}
        <div className="overflow-hidden rounded-[2rem] bg-[#0B1F33] shadow-2xl">
          <div className="grid lg:grid-cols-2">
            {/* LEFT - Message */}
            <div className="relative flex flex-col justify-center overflow-hidden px-6 py-12 sm:px-10 sm:py-16 lg:px-14 lg:py-20">
              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0B1F33] via-[#0D2D48] to-[#155D7A]" />

              {/* Decorative circles */}
              <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full border border-white/10" />

              <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full border border-white/5" />

              <div className="relative z-10">
                {/* Eyebrow */}
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-blue-100 backdrop-blur-sm">
                  <HeartHandshake size={15} />
                  Why Night Clinic
                </div>

                <h2 className="max-w-xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Healthcare that feels{" "}
                  <span className="text-sky-300">personal.</span>
                </h2>

                <p className="mt-6 max-w-xl text-base leading-7 text-blue-100/80 sm:text-lg sm:leading-8">
                  As a local healthcare practice in Thaba Nchu, Night Clinic
                  focuses on providing professional healthcare in a welcoming,
                  personal environment.
                </p>

                <p className="mt-4 max-w-xl text-sm leading-6 text-blue-100/65">
                  With a doctor-led practice and a dedicated clinic team, our
                  goal is to make accessing healthcare straightforward and
                  convenient for our local community.
                </p>

                {/* CTA */}
                <div className="mt-8">
                  <a
                    href="#booking"
                    className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#0B1F33] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50 hover:shadow-xl"
                  >
                    Book an Appointment
                    <ArrowRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT - Reasons */}
            <div className="bg-white p-6 sm:p-10 lg:p-12">
              <div className="grid gap-4 sm:grid-cols-2">
                {reasons.map((reason, index) => {
                  const Icon = reason.icon;

                  return (
                    <div
                      key={reason.title}
                      className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-lg sm:p-6"
                    >
                      {/* Number */}
                      <div className="flex items-start justify-between">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-[#0B1F33] group-hover:text-white">
                          <Icon size={22} strokeWidth={1.8} />
                        </div>

                        <span className="text-xs font-bold tracking-widest text-slate-200 transition-colors group-hover:text-blue-100">
                          0{index + 1}
                        </span>
                      </div>

                      <h3 className="mt-5 text-lg font-bold text-[#0B1F33]">
                        {reason.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-500">
                        {reason.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Small local message */}
              <div className="mt-5 rounded-2xl border border-blue-100 bg-blue-50/70 p-5 sm:p-6">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-blue-600 shadow-sm">
                    <MapPin size={19} />
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-[#0B1F33]">
                      Proudly serving Thaba Nchu
                    </h4>

                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      A local clinic for individuals and families in our
                      community.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mx-auto mt-12 max-w-3xl text-center lg:mt-16">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-blue-600">
            Your health matters
          </p>

          <h3 className="mt-3 text-2xl font-bold tracking-tight text-[#0B1F33] sm:text-3xl">
            Professional healthcare, close to home.
          </h3>

          <p className="mt-4 text-base leading-7 text-slate-600">
            From routine health needs to consultations and referrals, Night
            Clinic provides a convenient starting point for accessing healthcare
            in Thaba Nchu.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
