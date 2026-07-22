import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Users,
  ArrowRight,
  ExternalLink,
  Building2,
  Rocket,
  Code2,
  Palette,
  Briefcase,
  Brain,
  Server,
  HeartHandshake,
  Calendar,
  Star,
  TrendingUp,
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

/* ─── Team Member Card ─── */
const TeamCard = ({ member, isCoFounder = false, delay = 0, inView }) => (
  <div
    className={`card overflow-hidden group transition-all duration-700 ${
      inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    }`}
    style={{ transitionDelay: `${delay}ms` }}
  >
    {/* Avatar */}
    <div
      className={`relative overflow-hidden ${isCoFounder ? "h-56" : "h-44"} bg-gradient-to-br from-primary/5 to-primary-light/5`}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        {member.image ? (
          <img
            src={member.image}
            alt={member.name}
            className={`${isCoFounder ? "w-32 h-32" : "w-24 h-24"} object-cover rounded-full border-3 border-primary/20 shadow-xl group-hover:scale-110 group-hover:border-primary/40 transition-all duration-300`}
          />
        ) : (
          <div
            className={`${isCoFounder ? "w-28 h-28" : "w-20 h-20"} bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}
          >
            <span
              className={`text-white font-bold ${isCoFounder ? "text-3xl" : "text-2xl"} font-jost`}
            >
              {member.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </span>
          </div>
        )}
      </div>
      {/* Decorative shapes */}
      <div className="absolute top-4 right-4 w-16 h-16 bg-primary/5 rounded-full blur-xl" />
      <div className="absolute bottom-4 left-4 w-12 h-12 bg-primary-light/5 rounded-full blur-xl" />
    </div>

    {/* Content */}
    <div className="p-6 text-center">
      <h3
        className={`font-bold text-primary font-jost mb-1 ${isCoFounder ? "text-xl" : "text-lg"}`}
      >
        {member.name}
      </h3>
      <p className="text-primary-light font-semibold text-sm mb-3">
        {member.role}
      </p>
      {member.bio && (
        <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
      )}
      {member.linkedin && (
        <a
          href={member.linkedin}
          className="inline-flex items-center gap-1.5 text-primary text-sm mt-4 hover:text-primary-light transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ExternalLink className="w-4 h-4" />
          Connect
        </a>
      )}
    </div>
  </div>
);

/* ─── Timeline Item ─── */
const TimelineItem = ({
  year,
  title,
  description,
  icon: Icon,
  isLeft,
  inView,
  delay,
}) => (
  <div
    className={`relative flex items-start gap-6 md:gap-12 transition-all duration-700 ${
      inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
    }`}
    style={{ transitionDelay: `${delay}ms` }}
  >
    {/* Timeline Dot */}
    <div className="hidden md:flex flex-col items-center shrink-0">
      <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center shadow-lg shadow-primary/30 z-10 group-hover:scale-110 transition-transform">
        <Icon className="w-6 h-6 text-white" />
      </div>
    </div>

    {/* Content */}
    <div className="flex-1 card p-6 hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-center gap-3 mb-3">
        <div className="md:hidden w-10 h-10 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center shadow-md">
          <Icon className="w-5 h-5 text-white" />
        </div>
        <span className="text-primary font-bold font-jost text-lg">{year}</span>
      </div>
      <h3 className="text-lg font-bold text-primary font-jost mb-2">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

const AboutUsPage = () => {
  const [storyRef, storyInView] = useInView();
  const [timelineRef, timelineInView] = useInView();
  const [teamRef, teamInView] = useInView();
  const [extTeamRef, extTeamInView] = useInView();

  const coFounders = [
    {
      name: "Ankita Kumar",
      role: "CEO & Co-Founder",
      bio: "Technology builder with expertise in scalable digital platforms, data-driven systems, and product architecture. Combines strong technical execution with strategic product vision to build platforms designed for global scale.",
      image: "/images/CEO.webp",
      linkedin: "#",
    },
    {
      name: "Nav Sharma",
      role: "Creative Director & Co-Founder",
      bio: "Media and storytelling specialist with expertise in digital video production and content platforms. Experienced in crafting compelling visual narratives and building high-quality media pipelines.",
      image: "/images/creativeDirector.webp",
      linkedin: "#",
    },
    {
      name: "Shreejan Mishra",
      role: "Founding Engineer & Co-Founder",
      bio: "Fullstack engineer with 4 years of proven experience, specializing in scalable, high-performance web platforms built with React.js, Node.js, and Express.js. AI-Native Engineer with expertise in rapid building and scaling.",
      image: "/images/FoundingEngineer.webp",
      linkedin: "#",
    },
  ];

  const teamMembers = [
    {
      name: "Atif Kader",
      role: "Marketing Head",
      image: "/images/marketing.webp",
      icon: Briefcase,
    },
    {
      name: "Satyam Gupta",
      role: "Back End Founding Engineer",
      image: "/images/Backend.webp",
      icon: Server,
    },
    {
      name: "Riya Sharma",
      role: "Children Psychologist",
      image: "/images/childPsychologist.webp",
      icon: Brain,
    },
    {
      name: "Rajat Shah",
      role: "Finance & Compliance Partner",
      image: "/images/financial.webp",
      icon: HeartHandshake,
    },
  ];

  const timeline = [
    {
      year: "2025",
      title: "The Spark",
      description:
        "Edastra was born from a simple observation — students learn best when they're engaged and having fun. The founding team came together with a shared vision.",
      icon: Sparkles,
    },
    {
      year: "2026",
      title: "Building the Foundation",
      description:
        "Core idea demonstrator was built. Education hub covering Pre-school to Class 10 with multi-board support. First beta users feedback collected.",
      icon: Code2,
    },
    {
      year: "2027",
      title: " MVP Launch",
      description:
        "Full platform launch with edutainment library, scholarship portal, and VR preview. Goal is to reach over 50,000+ students across 15+ Indian states.",
      icon: Rocket,
    },
    {
      year: "2028",
      title: "Scaling & Impact",
      description:
        "Expanding content library, deepening institutional partnerships, and preparing for international launch. VR classrooms entering beta.",
      icon: TrendingUp,
    },
  ];

  const techStack = [
    { name: "React", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "MongoDB", category: "Database" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "Vite", category: "Build" },
    { name: "Framer Motion", category: "Animations" },
    { name: "D3.js", category: "Visualization" },
    { name: "Vercel", category: "Deployment" },
  ];

  return (
    <div>
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#EAF4FB] via-white to-[#F0F7FF]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, #103A5A 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute top-20 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 left-10 w-60 h-60 bg-primary-light/5 rounded-full blur-3xl" />

        <div className="section-container relative z-10 py-20 lg:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/15 rounded-full px-5 py-2 mb-8">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium">
                About Edastra
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary font-jost mb-6 leading-[1.15]">
              The People Behind the{" "}
              <span className="gradient-text">Platform</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              We're a passionate team of educators, engineers, storytellers, and
              dreamers building India's most comprehensive edutainment
              ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ OUR STORY ═══ */}
      <section className="section-padding bg-white" ref={storyRef}>
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div
              className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
                storyInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              {/* Story visual */}
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-[#EAF4FB] to-[#F0F7FF] rounded-3xl border border-primary/10 flex items-center justify-center overflow-hidden">
                  <div className="text-center p-8">
                    <Building2 className="w-20 h-20 text-primary/30 mx-auto mb-6" />
                    <p className="text-primary font-jost text-3xl font-bold mb-2">
                      Est. 2025
                    </p>
                    <p className="text-gray-500">Discord, Earth</p>
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute top-6 right-6 w-16 h-16 bg-primary/5 rounded-2xl rotate-12" />
                  <div className="absolute bottom-6 left-6 w-12 h-12 bg-primary-light/5 rounded-full" />
                </div>
              </div>

              {/* Story text */}
              <div>
                <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                  Our Story
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-primary font-jost mt-3 mb-6">
                  Born from a Simple Question
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    <span className="text-primary font-semibold">
                      What if learning felt like watching your favourite show?
                    </span>{" "}
                    That question sparked Edastra in 2025, when our founding
                    team — a CEO with platform-building expertise, a creative
                    director with storytelling mastery, and a founding engineer
                    with deep technical skills — came together on Discord.
                  </p>
                  <p>
                    We saw a gap: brilliant educational content existed, but it
                    was scattered, boring, or inaccessible. Edastra is being
                    built to change that — one platform that makes learning
                    engaging, personalized, and available to every student in
                    India.
                  </p>
                  <p>
                    Today, we have the potential to serve students from
                    Pre-school to Class 10 across CBSE, ICSE, IB, and State
                    Boards with curriculum-aligned content, an edutainment
                    library, a scholarship portal, and immersive VR experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TIMELINE ═══ */}
      <section className="section-padding" ref={timelineRef}>
        <div className="section-container">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Our Journey
            </span>
            <h2 className="section-title mt-3">Milestones That Define Us</h2>
            <p className="section-subtitle">
              From a founding idea to a platform reaching thousands — here's how
              we got here.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {/* Vertical line (desktop) */}
            <div className="hidden md:block absolute left-1/2 w-0.5 bg-primary/10 h-full -translate-x-1/2" />

            <div className="space-y-8 relative">
              {/* Left-side vertical connector (desktop) */}
              <div className="hidden md:block absolute left-[27px] top-7 bottom-7 w-0.5 bg-gradient-to-b from-primary/30 via-primary/15 to-transparent" />

              {timeline.map((item, i) => (
                <TimelineItem
                  key={i}
                  {...item}
                  isLeft={i % 2 === 0}
                  inView={timelineInView}
                  delay={i * 150}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CO-FOUNDERS ═══ */}
      <section className="section-padding bg-white" ref={teamRef}>
        <div className="section-container">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Leadership
            </span>
            <h2 className="section-title mt-3">Co-Founders</h2>
            <p className="section-subtitle">
              The visionaries driving Edastra's mission to transform education.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {coFounders.map((member, i) => (
              <TeamCard
                key={i}
                member={member}
                isCoFounder={true}
                delay={i * 150}
                inView={teamInView}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ EXTENDED TEAM ═══ */}
      <section
        className="section-padding bg-gradient-to-br from-[#EAF4FB] to-[#F0F7FF]"
        ref={extTeamRef}
      >
        <div className="section-container">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              The Team
            </span>
            <h2 className="section-title mt-3">Our Team</h2>
            <p className="section-subtitle">
              Talented professionals who bring Edastra to life every day.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {teamMembers.map((member, i) => (
              <TeamCard
                key={i}
                member={member}
                isCoFounder={false}
                delay={i * 100}
                inView={extTeamInView}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TECH STACK ═══ */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Under the Hood
            </span>
            <h2 className="section-title mt-3">Our Tech Stack</h2>
            <p className="section-subtitle">
              Built with modern, battle-tested technologies for performance and
              scale.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {techStack.map((tech, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-[#EAF4FB] to-white border border-primary/10 rounded-2xl px-6 py-4 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300 group"
              >
                <p className="font-bold text-primary font-jost group-hover:text-primary-light transition-colors">
                  {tech.name}
                </p>
                <p className="text-xs text-gray-400 mt-0.5">{tech.category}</p>
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
          <h2 className="text-3xl md:text-4xl font-bold font-jost mb-4">
            Want to Join Our Team?
          </h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto mb-8">
            We're always looking for passionate people who share our vision of
            making education accessible and entertaining.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-3.5 rounded-full font-semibold text-lg hover:bg-gray-50 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
