import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  BookOpen,
  Tv,
  GraduationCap,
  Glasses,
  ArrowRight,
  Users,
  Globe,
  PlayCircle,
  Award,
  Sparkles,
  ChevronRight,
  Zap,
  Shield,
  Heart,
} from "lucide-react";

/* ─── Typewriter Hook ─── */
const useTypewriter = (text, speed = 40) => {
  const [displayText, setDisplayText] = useState("");
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setDisplayText(text.slice(0, index + 1));
      index++;
      if (index === text.length) clearInterval(timer);
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);
  return displayText;
};

/* ─── Animated Counter ─── */
const AnimatedCounter = ({ end, suffix = "", label, icon: Icon }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const counted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = end / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="text-center group">
      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-300">
        <Icon className="w-7 h-7 text-primary" />
      </div>
      <div className="text-4xl md:text-5xl font-bold text-primary font-jost mb-2">
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-gray-500 text-sm font-medium uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
};

/* ─── Feature Card ─── */
const FeatureCard = ({ icon: Icon, title, description, color, delay }) => (
  <div
    className={`card card-hover-lift p-8 group opacity-0 animate-fade-in-up`}
    style={{ animationDelay: `${delay}ms`, animationFillMode: "forwards" }}
  >
    <div
      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}
    >
      <Icon className="w-7 h-7 text-white" />
    </div>
    <h3 className="text-xl font-bold text-primary mb-3 font-jost">{title}</h3>
    <p className="text-gray-500 leading-relaxed text-sm">{description}</p>
    <div className="mt-6 flex items-center gap-2 text-primary text-sm font-semibold opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
      Learn more <ChevronRight className="w-4 h-4" />
    </div>
  </div>
);

/* ─── Main Page ─── */
const HomePage = () => {
  const tagline = useTypewriter(
    "Transforming the future of education, one innovation at a time.",
    35,
  );

  const stats = [
    {
      end: 50000,
      suffix: "+",
      label: "Students to Onboard",
      icon: Users,
    },
    { end: 15, suffix: "+", label: "States to be Covered", icon: Globe },
    {
      end: 1000,
      suffix: "+",
      label: "Hours of Content Planned",
      icon: PlayCircle,
    },
    { end: 2028, suffix: "", label: "VR Launch Planned", icon: Glasses },
  ];

  const features = [
    {
      icon: BookOpen,
      title: "Comprehensive Education",
      description:
        "Curriculum-aligned content from Pre-school to Class 10 across CBSE, ICSE, IB, and State Boards with interactive lessons.",
      color: "from-primary to-primary-light",
    },
    {
      icon: Tv,
      title: "Edutainment Library",
      description:
        "Netflix-style interface for browsing educational movies, documentaries, and biographies across nature, history, science, and more.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: GraduationCap,
      title: "Scholarship Portal",
      description:
        "Discover, apply, and track scholarships with built-in eligibility exams and real-time status tracking from review to disbursement.",
      color: "from-emerald-500 to-emerald-600",
    },
    {
      icon: Glasses,
      title: "Immersive VR",
      description:
        "Step into virtual classrooms and experience hands-on learning through cutting-edge VR technology and immersive simulations.",
      color: "from-purple-500 to-purple-600",
    },
  ];

  const whyUs = [
    {
      icon: Zap,
      title: "Innovation First",
      description:
        "Leveraging the latest in AI and VR to transform learning experiences.",
    },
    {
      icon: Shield,
      title: "Safe & Trusted",
      description:
        "Child-safe platform with curated content reviewed by education experts.",
    },
    {
      icon: Heart,
      title: "Student-Centric",
      description:
        "Personalized dashboards and progress tracking for every learner.",
    },
  ];

  return (
    <div>
      {/* ═══ HERO SECTION ═══ */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#EAF4FB] via-white to-[#F0F7FF]" />
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-gradient-to-br from-primary/5 to-primary-light/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-primary/3 to-transparent rounded-full blur-3xl" />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, #103A5A 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="section-container relative z-10 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/15 rounded-full px-5 py-2 mb-8 animate-fade-in">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium">
                The Future of Edutainment
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-primary font-jost leading-[1.1] animate-fade-in-up">
              Welcome to{" "}
              <span className="relative">
                <span
                  className="gradient-text animate-gradient"
                  style={{ backgroundSize: "200% auto" }}
                >
                  Edastra
                </span>
                <span className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-primary-light to-accent-gold rounded-full opacity-50" />
              </span>
            </h1>

            <div className="min-h-[4rem] flex items-center justify-center mb-10">
              <p className="text-xl md:text-2xl text-gray-600 font-mono tracking-wide leading-relaxed">
                {tagline}
                <span className="animate-pulse text-primary font-bold ml-0.5">
                  |
                </span>
              </p>
            </div>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
              style={{ animationDelay: "600ms" }}
            >
              <Link to="/our-mission" className="btn-primary">
                Our Mission
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/about-us" className="btn-outline">
                Learn About Us
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-gray-400 uppercase tracking-widest">
            Scroll
          </span>
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-gray-400 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* ═══ STATS SECTION ═══ */}
      <section className="section-padding bg-white border-y border-primary/10">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, i) => (
              <AnimatedCounter key={i} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FEATURES SECTION ═══ */}
      <section className="section-padding">
        <div className="section-container">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              What We Offer
            </span>
            <h2 className="section-title mt-3">
              Empowering Learning, Inspiring Growth
            </h2>
            <p className="section-subtitle">
              A single platform that combines world-class education,
              entertainment, scholarships, and immersive technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <FeatureCard key={i} {...feature} delay={i * 150} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHY EDASTRA ═══ */}
      <section className="section-padding bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

        <div className="section-container relative z-10">
          <div className="text-center mb-16">
            <span className="text-white/60 text-sm font-semibold uppercase tracking-wider">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mt-3 mb-4 font-jost">
              Why Edastra?
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              We're not just another education platform. We're reimagining how
              students learn, engage, and grow.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyUs.map((item, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-8 hover:bg-white/15 hover:border-white/25 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-all duration-300">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 font-jost">
                  {item.title}
                </h3>
                <p className="text-white/70 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA SECTION ═══ */}
      <section className="section-padding">
        <div className="section-container">
          <div className="relative bg-gradient-to-br from-[#EAF4FB] to-[#F0F7FF] rounded-3xl p-12 md:p-16 text-center overflow-hidden border border-primary/10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-primary font-jost mb-4">
                Ready to Transform Education?
              </h2>
              <p className="text-gray-600 text-lg max-w-xl mx-auto mb-8">
                Join thousands of students, parents, and educators who are
                already part of the Edastra revolution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-primary">
                  Contact Us
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/our-mission" className="btn-outline">
                  Explore Our Mission
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
