import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const services = [
    "Chronic Illnesses",
    "Acute Illnesses",
    "Mother & Child",
    "Health Screening",
    "STI Screening & Treatment",
    "Contraceptives",
    "Specialist Referral",
    "Other Health Allied Referral",
    "Pain Management Injections",
    "Medical Forms",
    "Other",
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = "Please enter your full name.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your cell number.";
    } else if (!/^[0-9+\s()-]{10,20}$/.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid cell number.";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Please enter a little more detail.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear field error while typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }

    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Temporary submission behaviour.
    // Connect this to EmailJS, Formspree, Resend, or a backend later.
    console.log("Contact form submitted:", formData);

    setSubmitted(true);

    setFormData({
      fullName: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-white py-20 sm:py-24"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-40 h-80 w-80 rounded-full bg-cyan-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            <MessageCircle size={16} />
            Get In Touch
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#0B1F33] sm:text-4xl lg:text-5xl">
            We're here to help.
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Have a question or need help with your appointment? Contact Night
            Clinic using the details below or send us a message.
          </p>
        </div>

        {/* Main Contact Area */}
        <div className="mt-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Contact Information */}
          <div className="rounded-3xl bg-[#0B1F33] p-7 shadow-xl sm:p-9">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-300">
              Contact Information
            </p>

            <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
              Night Clinic
            </h3>

            <p className="mt-4 text-sm leading-6 text-blue-100">
              If you have questions about our services or your appointment,
              please get in touch with us directly.
            </p>

            {/* Contact Details */}
            <div className="mt-8 space-y-4">
              {/* Phone */}
              <a
                href="tel:YOUR_PHONE_NUMBER"
                className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:bg-white/10"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300">
                  <Phone size={20} />
                </div>

                <div>
                  <p className="text-xs font-medium text-blue-300">
                    Cell Number
                  </p>

                  <p className="mt-1 text-sm font-semibold text-white">
                    +27 81 361 7889
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:YOUR_EMAIL@example.com"
                className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:bg-white/10"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300">
                  <Mail size={20} />
                </div>

                <div>
                  <p className="text-xs font-medium text-blue-300">Email</p>

                  <p className="mt-1 break-all text-sm font-semibold text-white">
                    info@nightclinic.co.za
                  </p>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300">
                  <MapPin size={20} />
                </div>

                <div>
                  <p className="text-xs font-medium text-blue-300">Address</p>

                  <p className="mt-1 text-sm font-semibold leading-6 text-white">
                    Pharmacy at SPAR Kingsway Suite 3085, Selosesha,
                    Thaba Nchu, 9780
                    <br />
                    Thaba Nchu, Free State
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-9 border-t border-white/10 pt-7">
              <p className="text-sm font-semibold text-white">
                Connect with us
              </p>

              <div className="mt-4 flex gap-3">
                {/* Facebook */}
                <a
                  href="YOUR_FACEBOOK_URL"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Night Clinic Facebook"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-blue-200 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#0B1F33]"
                >
                  <span className="text-lg font-bold">f</span>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Night Clinic Instagram"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-blue-200 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#0B1F33]"
                >
                  <span className="text-sm font-bold">IG</span>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/27831234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Night Clinic WhatsApp"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-blue-200 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#0B1F33]"
                >
                  <MessageCircle size={19} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Send Us A Message
              </p>

              <h3 className="mt-2 text-2xl font-bold text-[#0B1F33] sm:text-3xl">
                How can we help?
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Complete the form below and the clinic can get back to you.
              </p>
            </div>

            {/* Success Message */}
            {submitted && (
              <div className="mt-6 flex items-start gap-3 rounded-2xl border border-green-200 bg-green-50 p-4 text-sm text-green-800">
                <CheckCircle size={20} className="mt-0.5 shrink-0" />

                <div>
                  <p className="font-semibold">Message ready to send.</p>

                  <p className="mt-1">
                    Your form has been submitted successfully.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-5">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="mb-2 block text-sm font-semibold text-[#0B1F33]"
                >
                  Full Names
                </label>

                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className={`w-full rounded-xl border px-4 py-3.5 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 ${
                    errors.fullName ? "border-red-300" : "border-slate-200"
                  }`}
                />

                {errors.fullName && (
                  <p className="mt-2 flex items-center gap-1.5 text-xs text-red-600">
                    <AlertCircle size={14} />
                    {errors.fullName}
                  </p>
                )}
              </div>

              {/* Phone + Service */}
              <div className="grid gap-5 sm:grid-cols-2">
                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-semibold text-[#0B1F33]"
                  >
                    Cell Number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. 082 123 4567"
                    className={`w-full rounded-xl border px-4 py-3.5 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 ${
                      errors.phone ? "border-red-300" : "border-slate-200"
                    }`}
                  />

                  {errors.phone && (
                    <p className="mt-2 flex items-center gap-1.5 text-xs text-red-600">
                      <AlertCircle size={14} />
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Service */}
                <div>
                  <label
                    htmlFor="service"
                    className="mb-2 block text-sm font-semibold text-[#0B1F33]"
                  >
                    Service
                  </label>

                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`w-full rounded-xl border bg-white px-4 py-3.5 text-sm text-slate-800 outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 ${
                      errors.service ? "border-red-300" : "border-slate-200"
                    }`}
                  >
                    <option value="">Select a service</option>

                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>

                  {errors.service && (
                    <p className="mt-2 flex items-center gap-1.5 text-xs text-red-600">
                      <AlertCircle size={14} />
                      {errors.service}
                    </p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-[#0B1F33]"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  className={`w-full resize-none rounded-xl border px-4 py-3.5 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 ${
                    errors.message ? "border-red-300" : "border-slate-200"
                  }`}
                />

                {errors.message && (
                  <p className="mt-2 flex items-center gap-1.5 text-xs text-red-600">
                    <AlertCircle size={14} />
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#0B1F33] px-6 py-4 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl"
              >
                Send Message
                <Send
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              <p className="text-center text-xs leading-5 text-slate-400">
                Please do not include sensitive medical information in this
                form.
              </p>
            </form>
          </div>
        </div>

        {/* Google Maps */}
        <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-sm">
          <div className="flex flex-col gap-3 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Find Us
              </p>

              <h3 className="mt-1 text-xl font-bold text-[#0B1F33]">
                Visit Night Clinic
              </h3>
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-500">
              <MapPin size={17} className="text-blue-600" />
              Thaba Nchu, Free State
            </div>
          </div>

          {/* Replace the iframe source with the actual Google Maps embed */}
          <div className="h-[350px] w-full bg-slate-200">
            <iframe
              title="Night Clinic Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3482.951143060883!2d26.814302075213043!3d-29.195565292432967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e8e6bc4c5a41c03%3A0x279a45c1b4819e86!2sPharmacy%20at%20SPAR%20Kingsway!5e0!3m2!1sen!2sza!4v1790156899934!5m2!1sen!2sza"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
