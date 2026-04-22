'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/SectionHeading';
import FadeIn from '@/components/FadeIn';
import FloatingJoinButton from '@/components/FloatingJoinButton';
import { FaBook, FaFlask, FaCheckCircle, FaAward, FaChalkboardTeacher, FaClipboardCheck, FaLaptop } from 'react-icons/fa';

export default function Academic() {
  const classes6to8 = [
    'Mathematics', 'General Science', 'English Grammar', 'Bangla Sahitya',
    'Bangladesh & Global Studies', 'ICT Basics', 'Digital Literacy'
  ];

  const classes9to12 = [
    'Physics (Science)', 'Chemistry (Science)', 'Biology (Science)',
    'Higher Mathematics', 'English for Professionals', 'Project Work'
  ];

  const benefits = [
    'Subject-specialized teachers for every topic',
    'Comprehensive handwritten and digital notes',
    'Small student bunches for personal care',
    'Digital classroom facilities with projectors',
    'Monthly progress feedback for parents',
    'Foundation building for competitive exams'
  ];

  return (
    <div className="min-h-screen flex flex-col bg-primary-dark">
      <Navbar />

      <main className="flex-grow pt-0">

        {/* --- Academic Hero Section --- */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          {/* Background Gradient */}
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary-light via-accent to-primary" />

          {/* Decorative mesh */}
          <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-20">
            <FadeIn>
              <span className="bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-black uppercase tracking-widest mb-8 inline-block border border-white/30">Academic Excellence</span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight leading-[1.1]" style={{ fontFamily: 'Playfair Display, serif' }}>
                Academic<br />Programs
              </h1>
              <p className="text-xl md:text-2xl font-medium mb-10 text-white/90 max-w-3xl mx-auto">
                Specialized coaching tailored for different grade levels with subject-specialized teachers and comprehensive learning materials.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                <a href="#programs" className="btn-primary flex items-center gap-2 px-10 py-5 bg-accent text-charcoal hover:bg-white hover:text-primary border-none shadow-[0_20px_50px_rgba(249,115,22,0.3)]">
                  Explore Programs <FaBook />
                </a>
                <a href="/contact" className="btn-secondary flex items-center gap-2 px-10 py-5 border-white text-white hover:bg-white hover:text-primary bg-transparent">
                  <FaChalkboardTeacher size={14} /> Enroll Now
                </a>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* --- Programs Section --- */}
        <section id="programs" className="section-padding bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {/* Junior Group */}
              <FadeIn direction="left">
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border-l-[12px] border-primary h-full">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 bg-soft-violet rounded-xl flex items-center justify-center text-primary text-2xl">
                      <FaBook />
                    </div>
                    <h3 className="text-3xl font-black text-charcoal">Class 6 – 8</h3>
                  </div>
                  <p className="text-gray-500 mb-8 font-medium">Focusing on solidifying foundations across all general subjects to prepare for high school.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {classes6to8.map((s) => (
                      <div key={s} className="flex items-center gap-3 p-3 bg-soft-violet/30 rounded-xl text-xs font-bold text-primary">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" /> {s}
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>

              {/* Science Group ONLY */}
              <FadeIn direction="right">
                <div className="bg-charcoal p-8 md:p-12 rounded-3xl shadow-xl border-l-[12px] border-amber h-full text-white">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 bg-amber/20 rounded-xl flex items-center justify-center text-amber text-2xl">
                      <FaFlask />
                    </div>
                    <h3 className="text-3xl font-black">Class 9 – 12</h3>
                  </div>
                  <div className="bg-amber text-charcoal px-4 py-1 rounded-full text-[10px] font-black uppercase mb-6 inline-block">Science Group Specialisation</div>
                  <p className="text-white/60 mb-8 font-medium">Intensive preparation for board exams with deep focus on Science disciplines only.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {classes9to12.map((s) => (
                      <div key={s} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl text-xs font-bold text-amber">
                        <div className="w-1.5 h-1.5 bg-amber rounded-full" /> {s}
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* --- Teaching Approach --- */}
        <section className="section-padding bg-soft-violet">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <SectionHeading title="Our Teaching Approach" subtitle="Innovative methods to make learning effective and enjoyable" />
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                { icon: <FaChalkboardTeacher />, t: 'Conceptual Teaching', d: 'We avoid rote learning and focus on making every concept crystal clear.' },
                { icon: <FaLaptop />, t: 'Digital Integration', d: 'Using visual aids and digital content to explain complex scientific theories.' },
                { icon: <FaAward />, t: 'Exam Motivation', d: 'Regular sessions to build confidence and overcome exam anxiety.' }
              ].map((item, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="bg-white p-10 rounded-3xl text-center h-full hover:shadow-lg transition-all group">
                    <div className="w-16 h-16 rounded-full bg-soft-violet flex items-center justify-center text-primary text-2xl mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                      {item.icon}
                    </div>
                    <h4 className="text-xl font-bold mb-4">{item.t}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.d}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* --- Weekly Exam highlight --- */}
        <section className="section-padding bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="bg-primary p-12 md:p-16 rounded-[var(--radius-card)] flex flex-col md:flex-row items-center gap-12 text-white shadow-2xl overflow-hidden relative">
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 -mb-16 -mr-16 rounded-full" />
                <div className="w-24 h-24 shrink-0 bg-white/20 rounded-3xl flex items-center justify-center text-5xl">
                  <FaClipboardCheck />
                </div>
                <div>
                  <h3 className="text-3xl font-black mb-4">The Weekly Exam System</h3>
                  <p className="text-white/80 leading-relaxed text-lg mb-8">
                    Our unique evaluation system ensures students stay active. Every Friday/Saturday,
                    we conduct rigorous tests on the topics covered during the week. Results are
                    shared instantly with parents via SMS/App.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <span className="bg-amber text-charcoal px-4 py-2 rounded-lg text-xs font-black uppercase">Instant Results</span>
                    <span className="bg-white/20 px-4 py-2 rounded-lg text-xs font-black uppercase">Weekly Milestone</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* --- Benefits list --- */}
        <section className="section-padding bg-soft-violet/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <SectionHeading title="Benefits of Joining Lokkho" subtitle="Why hundreds of parents trust us with their child's future" />
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mt-12">
              {benefits.map((b, i) => (
                <FadeIn key={i} delay={i * 0.05}>
                  <div className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-sm border border-gray-100">
                    <div className="text-primary"><FaCheckCircle size={20} /></div>
                    <span className="font-bold text-gray-700 text-sm">{b}</span>
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
