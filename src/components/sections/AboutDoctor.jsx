import {
  ArrowRight,
  Award,
  GraduationCap,
  HeartPulse,
  Stethoscope,
} from "lucide-react";

import doctorImage from "../../assets/images/doctor-hero.jpg";

const AboutDoctor = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-24 lg:py-28"
    >
      {/* Soft background decoration */}
      <div className="pointer-events-none absolute -right-40 top-20 h-80 w-80 rounded-full bg-blue-100/70 blur-3xl" />

      <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-cyan-100/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 max-w-2xl lg:mb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">
            <Stethoscope size={15} />
            About Night Clinic
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-[#0B1F33] sm:text-4xl lg:text-5xl">
            Meet Dr TG Modimoeng
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Discover the doctor behind Night Clinic and a healthcare approach
            focused on professional service, patient care and convenient access.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* LEFT - Doctor Image */}
          <div className="relative">
            {/* Decorative card behind image */}
            <div className="absolute -bottom-5 -left-5 h-full w-full rounded-[2rem] border border-blue-100 bg-blue-50 sm:-bottom-6 sm:-left-6" />

            {/* Image container */}
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#0B1F33] to-[#176B96] shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-[#071A2B]/40 via-transparent to-transparent" />

              <img
                src={doctorImage}
                alt="Dr TG Modimoeng"
                className="relative aspect-[4/5] w-full object-cover object-top"
              />

              {/* Floating experience/identity card */}
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-white/10 p-4 shadow-xl backdrop-blur-xl sm:bottom-7 sm:left-7 sm:right-auto sm:min-w-[260px]">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#0B1F33]">
                    <HeartPulse size={20} />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-white">
                      Dr TG Modimoeng
                    </p>

                    <p className="mt-0.5 text-xs text-blue-100">Night Clinic</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Small decorative element */}
            <div className="absolute -right-4 -top-4 hidden h-20 w-20 rounded-2xl border border-blue-100 bg-white shadow-lg sm:block">
              <div className="flex h-full items-center justify-center">
                <Stethoscope className="text-blue-600" size={30} />
              </div>
            </div>
          </div>

          {/* RIGHT - Content */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-600">
              Your Doctor
            </span>

            <h3 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-[#0B1F33] sm:text-4xl">
              Professional care with the patient at the centre.
            </h3>

            <div className="mt-6 space-y-4 text-base leading-7 text-slate-600">
              <p>
                At Night Clinic, patients can access a professional healthcare
                experience designed around their individual needs.
              </p>

              <p>
                Dr TG Modimoeng is committed to providing a welcoming and
                professional environment where patients can receive the
                attention and care they need.
              </p>

              <p>
                From booking an appointment to your consultation, Night Clinic
                aims to make the patient journey straightforward and convenient.
              </p>
            </div>

            {/* Credentials */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {/* Education */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <GraduationCap size={22} />
                </div>

                <h4 className="mt-4 font-semibold text-[#0B1F33]">Education</h4>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Medical training completed in Cuba and at Sefako Makgatho
                  Health Sciences University (SMU), completed in 2019.
                </p>
              </div>

              {/* Experience */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Award size={22} />
                </div>

                <h4 className="mt-4 font-semibold text-[#0B1F33]">
                  Experience
                </h4>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Internship at Boitumelong Hospital in Kroonstad from
                  2020–2021. Completed community service at Dr JS Moroka
                  Hospital and has served as a permanent Medical Officer from
                  2023 to date.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <a
                href="#booking"
                className="group inline-flex items-center gap-2 rounded-full bg-[#0B1F33] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#0B1F33]/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#123653] hover:shadow-xl"
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

        {/* Bottom Highlights */}
        <div className="mt-16 grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm sm:grid-cols-3 lg:mt-20">
          {/* Highlight 1 */}
          <div className="border-b border-slate-200 p-6 sm:border-b-0 sm:border-r sm:p-8">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <HeartPulse size={22} />
              </div>

              <div>
                <h4 className="font-semibold text-[#0B1F33]">
                  Patient-Centred
                </h4>

                <p className="mt-1 text-sm text-slate-500">
                  Care focused on your needs
                </p>
              </div>
            </div>
          </div>

          {/* Highlight 2 */}
          <div className="border-b border-slate-200 p-6 sm:border-b-0 sm:border-r sm:p-8">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Stethoscope size={22} />
              </div>

              <div>
                <h4 className="font-semibold text-[#0B1F33]">
                  Professional Service
                </h4>

                <p className="mt-1 text-sm text-slate-500">
                  A welcoming clinical environment
                </p>
              </div>
            </div>
          </div>

          {/* Highlight 3 */}
          <div className="p-6 sm:p-8">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <ArrowRight size={22} />
              </div>

              <div>
                <h4 className="font-semibold text-[#0B1F33]">Easy Booking</h4>

                <p className="mt-1 text-sm text-slate-500">
                  Convenient appointment options
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDoctor;
