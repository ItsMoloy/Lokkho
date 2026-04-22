'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/SectionHeading';
import FadeIn from '@/components/FadeIn';
import OrgChart from '@/components/OrgChart';
import FloatingJoinButton from '@/components/FloatingJoinButton';
import { FaBullseye, FaEye, FaAward, FaStar, FaHistory, FaCheckCircle } from 'react-icons/fa';

export default function About() {
  const timeline = [
    { year: '2020', title: 'The Beginning', desc: 'Lokkho founded in Demra with 2 classrooms and a big vision.' },
    { year: '2021', title: 'Science Excellence', desc: 'Established specialized labs for Physics and Chemistry coaching.' },
    { year: '2022', title: 'Tech Integration', desc: 'Launched IT training division with Web Development courses.' },
    { year: '2023', title: 'Microsoft Collaboration', desc: 'Organised national level AgentX AI Championship.' },
    { year: '2024', title: 'New Heights', desc: 'Expanding to 11 full-time expert teachers for focused learning.' },
  ];

  const features = [
    { icon: <FaAward />, title: 'Premium System', desc: 'Unique 5-step horizontal learning system' },
    { icon: <FaStar />, title: 'Top-Notch Lab', desc: 'Modern PC lab for practical IT sessions' },
    { icon: <FaHistory />, title: 'Proven Record', desc: '1000+ students served in just 4 years' },
    { icon: <FaCheckCircle />, title: 'Real Monitoring', desc: 'Real-time progress reporting to parents' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-primary-dark">
      <Navbar />

      <main className="flex-grow pt-0">

        {/* --- About Hero Section --- */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          {/* Background Gradient */}
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-accent via-primary to-primary-light" />

          {/* Decorative mesh */}
          <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-20">
            <FadeIn>
              <span className="bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-black uppercase tracking-widest mb-8 inline-block border border-white/30">Our Story</span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight leading-[1.1]" style={{ fontFamily: 'Playfair Display, serif' }}>
                Our Institute<br />Background
              </h1>
              <p className="text-xl md:text-2xl font-medium mb-10 text-white/90 max-w-3xl mx-auto">
                Founded in 2020, Lokkho Academic and IT Institute has quickly become the leading education center in Demra, Dhaka. We bridge the gap between traditional academic coaching and modern technological skills.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                <a href="#timeline" className="btn-primary flex items-center gap-2 px-10 py-5 bg-accent text-charcoal hover:bg-white hover:text-primary border-none shadow-[0_20px_50px_rgba(249,115,22,0.3)]">
                  Our Journey <FaHistory />
                </a>
                <a href="#features" className="btn-secondary flex items-center gap-2 px-10 py-5 border-white text-white hover:bg-white hover:text-primary bg-transparent">
                  <FaBullseye size={14} /> Our Values
                </a>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* --- Mission & Vision --- */}
        <section className="section-padding bg-soft-violet">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FadeIn direction="left">
                <div className="bg-white p-12 rounded-3xl shadow-xl h-full border-b-8 border-primary">
                  <div className="w-16 h-16 rounded-full bg-soft-violet flex items-center justify-center text-primary text-3xl mb-8">
                    <FaBullseye />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    To provide a structured and conceptual learning environment for academic students while
                    equipping them with practical IT skills that open global opportunities.
                  </p>
                </div>
              </FadeIn>

              <FadeIn direction="right">
                <div className="bg-white p-12 rounded-3xl shadow-xl h-full border-b-8 border-amber">
                  <div className="w-16 h-16 rounded-full bg-amber/10 flex items-center justify-center text-amber text-3xl mb-8">
                    <FaEye />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    To be the primary destination in Bangladesh where knowledge meets technology,
                    producing the next generation of academic toppers and tech leaders.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* --- Differentiators --- */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <SectionHeading title="What Makes Us Different" subtitle="The cornerstones of our educational success" />
            </FadeIn>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {features.map((f, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="p-8 rounded-2xl border border-gray-100 hover:border-primary/20 transition-all text-center h-full hover:shadow-lg">
                    <div className="text-primary text-3xl mb-4 flex justify-center">{f.icon}</div>
                    <h4 className="font-bold text-charcoal mb-2">{f.title}</h4>
                    <p className="text-gray-400 text-xs">{f.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* --- Org Chart / Team Section --- */}
        <section className="section-padding bg-soft-violet/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <SectionHeading title="Internal Structure" subtitle="Our systematic team organization ensuring academic quality" />
            </FadeIn>
            <OrgChart />
          </div>
        </section>

        {/* --- Achievements Timeline --- */}
        <section className="section-padding bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <SectionHeading title="Our Journey" subtitle="Milestones of excellence since 2020" />
            </FadeIn>
            <div className="mt-16 space-y-12">
              {timeline.map((item, i) => (
                <FadeIn key={i} direction={i % 2 === 0 ? 'left' : 'right'}>
                  <div className="flex gap-6 items-start">
                    <div className="text-2xl font-black text-primary/30 w-24 shrink-0 pt-1 tracking-tighter">
                      {item.year}
                    </div>
                    <div className="pt-1 pb-10 border-b border-gray-50 flex-grow">
                      <h4 className="text-xl font-bold text-charcoal mb-2">{item.title}</h4>
                      <p className="text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <FloatingJoinButton />
    </div>
  );
}
