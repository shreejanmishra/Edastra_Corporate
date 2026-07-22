import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Target,
  Eye,
  Lightbulb,
  Heart,
  Users,
  Globe,
  BookOpen,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Shield,
  Star,
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
      { threshold: 0.2, ...options },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, inView];
};

const OurMissionPage = () => {
  const [heroRef, heroInView] = useInView();
  const [valuesRef, valuesInView] = useInView();
  const [impactRef, impactInView] = useInView();

  const coreValues = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Pushing the boundaries of edtech with AI-driven personalization, immersive VR classrooms, and adaptive learning algorithms.",
      color: "from-amber-400 to-orange-500",
    },
    {
      icon: Heart,
      title: "Accessibility",
      description:
        "Education should know no barriers. We design for every screen, every bandwidth, and every learning style to ensure no student is left behind.",
      color: "from-rose-400 to-pink-500",
    },
    {
      icon: Users,
      title: "Community",
      description:
        "Building a thriving ecosystem of students, educators, parents, and content creators who learn, teach, and grow together.",
      color: "from-blue-400 to-indigo-500",
    },
    {
      icon: Shield,
      title: "Trust & Safety",
      description:
        "A child-safe platform with expert-curated content, parental controls, and transparent data practices that families can rely on.",
      color: "from-emerald-400 to-teal-500",
    },
    {
      icon: Star,
      title: "Excellence",
      description:
        "Relentless pursuit of quality — every video, every lesson, every feature is crafted to meet the highest standards of educational value.",
      color: "from-violet-400 to-purple-500",
    },
    {
      icon: Globe,
      title: "Impact",
      description:
        "Measurable outcomes matter. We track engagement, learning gains, and real-world impact to prove that edutainment works.",
      color: "from-cyan-400 to-blue-500",
    },
  ];

  const impactAreas = [
    {
      icon: BookOpen,
      title: "Education Gap",
      stat: "70%",
      description:
        "of Indian students lack access to quality supplementary learning resources. Edastra bridges this divide with free and affordable content.",
    },
    {
      icon: TrendingUp,
      title: "Learning Outcomes",
      stat: "3x",
      description:
        "improvement in concept retention when students learn through our edutainment approach vs. traditional textbook-only methods.",
    },
    {
      icon: Users,
      title: "Community Reach",
      stat: "15+",
      description:
        "states across India where we intend to launch our Edastra content to students, parents, and educators.",
    },
  ];

  return (
    <div>
      {/* ═══ HERO ═══ */}
      <section
        ref={heroRef}
        className="relative min-h-[70vh] flex items-center overflow-hidden pt-20"
      >
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

        <div className="section-container relative z-10 py-20 lg:py-28">
          <div
            className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${
              heroInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-5 py-2 mb-8 backdrop-blur-sm">
              <Target className="w-4 h-4 text-white/80" />
              <span className="text-white/80 text-sm font-medium">
                Our Mission
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-jost mb-6 leading-[1.15]">
              Making Quality Education{" "}
              <span className="text-accent-gold">Entertaining</span> &{" "}
              <span className="text-accent-gold">Accessible</span>
            </h1>

            <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto">
              We believe every child deserves access to world-class education
              that inspires curiosity, sparks creativity, and builds foundations
              for a lifetime of learning.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ VISION & MISSION ═══ */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Vision */}
            <div className="glass-card p-10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-primary font-jost mb-4">
                Our Vision
              </h2>
              <p className="text-gray-600 leading-relaxed">
                To become India's leading edutainment ecosystem — a single
                destination where learning feels like entertainment, where every
                student discovers their potential, and where education
                transcends boundaries of geography, income, and access.
              </p>
              <div className="mt-6 h-1 w-20 bg-gradient-to-r from-primary to-primary-light rounded-full group-hover:w-32 transition-all duration-500" />
            </div>

            {/* Mission */}
            <div className="glass-card p-10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-primary font-jost mb-4">
                Our Mission
              </h2>
              <p className="text-gray-600 leading-relaxed">
                To bridge the gap between education and entertainment by
                building a technology-driven platform that delivers
                curriculum-aligned learning, curated media content, integrated
                scholarships, and immersive experiences — all designed to
                engage, empower, and elevate every learner.
              </p>
              <div className="mt-6 h-1 w-20 bg-gradient-to-r from-primary to-primary-light rounded-full group-hover:w-32 transition-all duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CORE VALUES ═══ */}
      <section className="section-padding bg-white" ref={valuesRef}>
        <div className="section-container">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              What Drives Us
            </span>
            <h2 className="section-title mt-3">Our Core Values</h2>
            <p className="section-subtitle">
              These principles guide every decision we make, every feature we
              build, and every student we serve.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, i) => (
              <div
                key={i}
                className={`card p-8 group transition-all duration-700 ${
                  valuesInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                >
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary font-jost mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ IMPACT SECTION ═══ */}
      <section
        className="section-padding bg-gradient-to-br from-[#EAF4FB] to-[#F0F7FF]"
        ref={impactRef}
      >
        <div className="section-container">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Real Results
            </span>
            <h2 className="section-title mt-3">The Impact We're Making</h2>
            <p className="section-subtitle">
              Numbers that tell the story of how Edastra is reshaping education
              across India.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {impactAreas.map((area, i) => (
              <div
                key={i}
                className={`bg-white rounded-2xl p-8 border border-primary/10 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-500 text-center ${
                  impactInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mb-6">
                  <area.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-5xl font-bold text-primary font-jost mb-2">
                  {area.stat}
                </div>
                <h3 className="text-lg font-bold text-primary font-jost mb-3">
                  {area.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="section-padding bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />

        <div className="section-container relative z-10 text-center">
          <Sparkles className="w-10 h-10 text-accent-gold mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white font-jost mb-4">
                Join Us in Reshaping Education
              </h2>
              <p className="text-white/70 text-lg max-w-xl mx-auto mb-8">
                Whether you're a student, educator, parent, or partner — there's
                a place for you in the Edastra ecosystem.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-white text-primary px-8 py-3.5 rounded-full font-semibold text-lg hover:bg-gray-50 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  Get in Touch
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/about-us"
                  className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-3.5 rounded-full font-semibold text-lg hover:bg-white/10 hover:border-white/50 transform hover:-translate-y-1 transition-all duration-300"
                >
                  About Our Team
                </Link>
              </div>
        </div>
      </section>
    </div>
  );
};

export default OurMissionPage;
