import {
  ArrowRight,
  CalendarDays,
  Clock3,
  HeartPulse,
  MessageCircle,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

import doctorHero from "../../assets/images/doctor-hero.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-[#071A2B] text-white"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-[#061827] via-[#0B2A46] to-[#176B96]" />

      {/* Soft blue glow */}
      <div className="absolute -right-32 top-10 -z-10 h-[500px] w-[500px] rounded-full bg-blue-400/20 blur-3xl" />

      <div className="absolute -left-32 bottom-0 -z-10 h-[450px] w-[450px] rounded-full bg-cyan-400/10 blur-3xl" />

      {/* Subtle medical background pattern */}
      <div
        className="absolute inset-0 -z-10 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center px-4 pt-28 pb-16 sm:px-6 sm:pt-32 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:pt-24 lg:pb-0">
        {/* LEFT CONTENT */}
        <div className="relative z-10 max-w-3xl">
          {/* Eyebrow */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-blue-100 backdrop-blur-md sm:text-sm">
            <Stethoscope size={16} />

            <span>Compassionate Care</span>

            <span className="text-blue-300">/</span>

            <span>Professional Service</span>
          </div>

          {/* Heading */}
          <h1 className="max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[4.7rem]">
            Quality Healthcare.
            <span className="mt-2 block bg-gradient-to-r from-sky-300 via-blue-300 to-cyan-200 bg-clip-text text-transparent">
              When You Need It Most.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-2xl text-base leading-7 text-blue-50/85 sm:text-lg sm:leading-8">
            Night Clinic provides professional, patient-centred healthcare with
            convenient appointment options designed around your needs. Your
            health and well-being are our priority.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            {/* Primary CTA */}
            <a
              href="#booking"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#0B1F33] shadow-xl shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50 hover:shadow-2xl sm:px-7"
            >
              <CalendarDays size={18} />

              <span>Book an Appointment</span>

              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            {/* WhatsApp CTA */}
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/35 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/60 hover:bg-white/10 sm:px-7"
            >
              <MessageCircle size={18} />

              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-10 grid max-w-2xl grid-cols-1 gap-4 border-t border-white/10 pt-7 sm:grid-cols-3 sm:gap-0">
            {/* Item 1 */}
            <div className="flex items-center gap-3 sm:pr-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/10 text-blue-200">
                <Clock3 size={21} />
              </div>

              <div>
                <p className="text-sm font-semibold text-white">Convenient</p>

                <p className="text-xs text-blue-100/70">Appointments</p>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden border-l border-white/15 sm:block" />

            {/* Item 2 */}
            <div className="flex items-center gap-3 sm:pl-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/10 text-blue-200">
                <ShieldCheck size={21} />
              </div>

              <div>
                <p className="text-sm font-semibold text-white">Professional</p>

                <p className="text-xs text-blue-100/70">Trusted Care</p>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden border-l border-white/15 sm:block" />

            {/* Item 3 */}
            <div className="flex items-center gap-3 sm:px-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/10 text-blue-200">
                <HeartPulse size={21} />
              </div>

              <div>
                <p className="text-sm font-semibold text-white">Patient</p>

                <p className="text-xs text-blue-100/70">Care First</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative mt-14 flex h-[430px] items-end justify-center sm:h-[520px] lg:mt-0 lg:h-full lg:min-h-[650px]">
          {/* Image glow */}
          <div className="absolute bottom-10 right-1/2 h-[350px] w-[350px] translate-x-1/2 rounded-full bg-sky-300/20 blur-3xl sm:h-[450px] sm:w-[450px]" />

          {/* Doctor image */}
          <div className="relative z-10 h-full w-full max-w-[580px]">
            <img
              src={doctorHero}
              alt="Dr TG Modimoeng"
              className="absolute bottom-0 left-1/2 h-full w-full -translate-x-1/2 object-contain object-bottom drop-shadow-2xl"
            />
          </div>

          {/* Floating card */}
          <div className="absolute bottom-8 left-3 z-20 hidden rounded-2xl border border-white/15 bg-white/10 px-5 py-4 shadow-2xl backdrop-blur-xl sm:block lg:left-0">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#0B1F33]">
                <HeartPulse size={19} />
              </div>

              <div>
                <p className="text-sm font-semibold text-white">Your Health</p>

                <p className="text-xs text-blue-100/70">Our Priority</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative curved bottom */}
      <div className="absolute bottom-0 left-0 right-0 -z-0 h-16 overflow-hidden sm:h-20">
        <div className="absolute -bottom-20 left-[-10%] h-40 w-[120%] rounded-[50%] bg-[#2563A6]/70" />
      </div>
    </section>
  );
};

export default Hero;
