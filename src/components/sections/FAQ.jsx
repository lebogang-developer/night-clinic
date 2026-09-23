import { MessageCircle, Phone, HelpCircle, ArrowUpRight } from "lucide-react";

const faqs = [
  {
    question: "What services does Night Clinic offer?",
    answer:
      "Night Clinic offers a range of healthcare services, including care for chronic and acute illnesses, mother and child care, health screening, STI screening and treatment, contraceptive services, referrals, pain management injections, and medical forms.",
  },
  {
    question: "How do I book an appointment?",
    answer:
      "You can book an appointment online by choosing the service you need and selecting an available date and time. If you need help with booking, you can contact the clinic directly by phone or WhatsApp.",
  },
  {
    question: "Can I contact the clinic before my visit?",
    answer:
      "Yes. If you have a question about your appointment or the services offered, you can contact Night Clinic directly by phone, WhatsApp, or email.",
  },
  {
    question: "What should I bring to my appointment?",
    answer:
      "Please bring any relevant identification, medical information, medication details, or documents that may help the doctor understand your healthcare needs.",
  },
  {
    question: "What if I cannot make my appointment?",
    answer:
      "If you are unable to attend your appointment, please contact the clinic as soon as possible. If online booking is enabled, you may also be able to reschedule or cancel your appointment using the booking link.",
  },
];

function FAQ() {
  return (
    <section
      id="faqs"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-24"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-cyan-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-16">
          {/* Left Side */}
          <div className="lg:sticky lg:top-28">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
              <HelpCircle size={16} />
              Frequently Asked Questions
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#0B1F33] sm:text-4xl">
              Questions?
              <br />
              <span className="text-blue-600">We’re here to help.</span>
            </h2>

            <p className="mt-5 max-w-lg text-base leading-7 text-slate-600 sm:text-lg">
              We understand that you may have questions before visiting the
              clinic. Here are some common questions to help you know what to
              expect.
            </p>

            {/* Contact card */}
            <div className="mt-8 rounded-3xl bg-[#0B1F33] p-6 shadow-xl sm:p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300">
                <MessageCircle size={24} />
              </div>

              <h3 className="mt-5 text-xl font-bold text-white">
                Still have a question?
              </h3>

              <p className="mt-2 text-sm leading-6 text-blue-100">
                If you cannot find the answer you are looking for, contact Night
                Clinic directly and we will assist you.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#0B1F33] transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50"
                >
                  Contact Us
                  <ArrowUpRight size={17} />
                </a>

                <a
                  href="https://wa.me/YOUR_WHATSAPP_NUMBER"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
                >
                  <MessageCircle size={17} />
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Small reassurance */}
            <div className="mt-6 flex items-start gap-3 px-1">
              <Phone size={18} className="mt-0.5 shrink-0 text-blue-600" />

              <p className="text-sm leading-6 text-slate-500">
                Prefer speaking to someone directly? You can contact the clinic
                by phone for assistance.
              </p>
            </div>
          </div>

          {/* Right Side - FAQ Cards */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={faq.question}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg sm:p-7"
              >
                <div className="flex items-start gap-5">
                  {/* Number */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-blue-600 transition-colors duration-300 group-hover:bg-[#0B1F33] group-hover:text-white">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div>
                    <h3 className="text-lg font-bold leading-7 text-[#0B1F33]">
                      {faq.question}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Bottom note */}
            <div className="rounded-3xl border border-blue-100 bg-blue-50/70 p-6 sm:p-7">
              <p className="text-sm leading-6 text-slate-600">
                <span className="font-semibold text-[#0B1F33]">
                  Please note:
                </span>{" "}
                The information on this website is intended to help you
                understand the clinic and its services. Your doctor will provide
                advice based on your individual healthcare needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
