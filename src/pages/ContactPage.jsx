import React, { useState, useRef, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  CheckCircle2,
  MessageSquare,
  Building2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

/* ─── Scroll-triggered animation hook ─── */
const useInView = (options = {}) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.15, ...options },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, inView];
};

const ContactPage = () => {
  const [formRef, formInView] = useInView();
  const [infoRef, infoInView] = useInView();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Name is required";
    if (!formData.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      errs.email = "Invalid email address";
    if (!formData.subject.trim()) errs.subject = "Subject is required";
    if (!formData.message.trim()) errs.message = "Message is required";
    else if (formData.message.trim().length < 10)
      errs.message = "Message must be at least 10 characters";
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: [
        {
          text: "ankita31.agnel@gmail.com",
          href: "mailto:ankita31.agnel@gmail.com",
        },
        { text: "shrmis1998@gmail.com", href: "mailto:shrmis1998@gmail.com" },
        {
          text: "navsharma1233@gmail.com",
          href: "mailto:navsharma1233@gmail.com",
        },
      ],
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: Phone,
      title: "Phone",
      details: [
        { text: "+91 9152991509", href: "tel:+919152991509" },
        { text: "+91 9672026985", href: "tel:+919672026985" },
        { text: "+91 9757232991", href: "tel:+919757232991" },
      ],
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: MapPin,
      title: "Office",
      details: [{ text: "Remote" }],
      color: "from-rose-500 to-pink-500",
    },
    {
      icon: Clock,
      title: "Hours",
      details: [
        { text: "Mon — Fri: 9:00 AM — 9:00 PM IST" },
        { text: "Sat — Sun: 10:00 AM — 6:00 PM IST" },
      ],
      color: "from-amber-500 to-orange-500",
    },
  ];

  return (
    <div>
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-light" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute top-20 right-10 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 left-10 w-60 h-60 bg-white/5 rounded-full blur-3xl" />

        <div className="section-container relative z-10 py-20 lg:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-5 py-2 mb-8 backdrop-blur-sm">
              <MessageSquare className="w-4 h-4 text-white/80" />
              <span className="text-white/80 text-sm font-medium">
                Get in Touch
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-jost mb-6 leading-[1.15]">
              Interested in Learning More?{" "}
              <span className="text-accent-gold">Let's Connect!</span>
            </h1>

            <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto">
              Whether you're a student, educator, investor, or potential partner
              — we'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ CONTACT FORM + INFO ═══ */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
            {/* Form Column */}
            <div
              ref={formRef}
              className={`lg:col-span-3 transition-all duration-1000 ${
                formInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="card p-8 md:p-10">
                <h2 className="text-2xl font-bold text-primary font-jost mb-2">
                  Send Us a Message
                </h2>
                <p className="text-gray-500 mb-8">
                  Fill out the form below and we'll get back to you within 24
                  hours.
                </p>

                {submitted ? (
                  <div className="text-center py-16">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/30 animate-pulse-glow">
                      <CheckCircle2 className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary font-jost mb-3">
                      Message Sent!
                    </h3>
                    <p className="text-gray-500 mb-6">
                      Thank you for reaching out. We'll respond within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn-outline text-base"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Name */}
                      <div>
                        <label
                          htmlFor="contact-name"
                          className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="contact-name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className={`w-full px-4 py-3 rounded-xl border ${
                            errors.name
                              ? "border-red-400 bg-red-50/50"
                              : "border-gray-200 focus:border-primary"
                          } focus:ring-2 focus:ring-primary/10 transition-all duration-300 outline-none text-gray-800 placeholder-gray-400`}
                        />
                        {errors.name && (
                          <p className="text-red-500 text-xs mt-1.5">
                            {errors.name}
                          </p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label
                          htmlFor="contact-email"
                          className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="contact-email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className={`w-full px-4 py-3 rounded-xl border ${
                            errors.email
                              ? "border-red-400 bg-red-50/50"
                              : "border-gray-200 focus:border-primary"
                          } focus:ring-2 focus:ring-primary/10 transition-all duration-300 outline-none text-gray-800 placeholder-gray-400`}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-xs mt-1.5">
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label
                        htmlFor="contact-subject"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="contact-subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can we help?"
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.subject
                            ? "border-red-400 bg-red-50/50"
                            : "border-gray-200 focus:border-primary"
                        } focus:ring-2 focus:ring-primary/10 transition-all duration-300 outline-none text-gray-800 placeholder-gray-400`}
                      />
                      {errors.subject && (
                        <p className="text-red-500 text-xs mt-1.5">
                          {errors.subject}
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="contact-message"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Tell us what you're looking for..."
                        className={`w-full px-4 py-3 rounded-xl border resize-none ${
                          errors.message
                            ? "border-red-400 bg-red-50/50"
                            : "border-gray-200 focus:border-primary"
                        } focus:ring-2 focus:ring-primary/10 transition-all duration-300 outline-none text-gray-800 placeholder-gray-400`}
                      />
                      {errors.message && (
                        <p className="text-red-500 text-xs mt-1.5">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {submitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Info Column */}
            <div
              ref={infoRef}
              className={`lg:col-span-2 transition-all duration-1000 ${
                infoInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <div className="space-y-6">
                {contactInfo.map((info, i) => (
                  <div
                    key={i}
                    className="card p-6 group hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center shadow-lg shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                      >
                        <info.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-primary font-jost mb-2">
                          {info.title}
                        </h3>
                        <div className="space-y-1.5">
                          {info.details.map((detail, j) =>
                            detail.href ? (
                              <a
                                key={j}
                                href={detail.href}
                                className="block text-gray-500 text-sm hover:text-primary transition-colors duration-300"
                              >
                                {detail.text}
                              </a>
                            ) : (
                              <p key={j} className="text-gray-500 text-sm">
                                {detail.text}
                              </p>
                            ),
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Map placeholder */}
                {/* <div className="card overflow-hidden">
                  <div className="h-48 bg-gradient-to-br from-[#EAF4FB] to-[#F0F7FF] flex items-center justify-center relative">
                    <div className="text-center">
                      <Building2 className="w-12 h-12 text-primary/30 mx-auto mb-3" />
                      <p className="text-primary font-jost font-semibold">
                        Mumbai, India
                      </p>
                      <p className="text-gray-400 text-sm">
                        Edastra Headquarters
                      </p>
                    </div>
                    <div className="absolute top-4 right-4 w-20 h-20 bg-primary/5 rounded-full blur-xl" />
                    <div className="absolute bottom-4 left-4 w-16 h-16 bg-primary-light/5 rounded-full blur-xl" />
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FAQ CTA ═══ */}
      <section className="section-padding bg-gradient-to-br from-[#EAF4FB] to-[#F0F7FF]">
        <div className="section-container">
          <div className="relative bg-white rounded-3xl p-12 md:p-16 text-center overflow-hidden border border-primary/10 shadow-xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/3 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-light/3 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />

            <div className="relative z-10">
              <Sparkles className="w-10 h-10 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-primary font-jost mb-4">
                Have Questions?
              </h2>
              <p className="text-gray-600 text-lg max-w-xl mx-auto mb-8">
                Explore our platform, learn about our mission, or meet the team
                behind Edastra.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/our-mission" className="btn-primary">
                  Our Mission
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a href="/about-us" className="btn-outline">
                  About Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
