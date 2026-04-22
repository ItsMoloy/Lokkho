'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/SectionHeading';
import FadeIn from '@/components/FadeIn';
import FloatingJoinButton from '@/components/FloatingJoinButton';
import { FaUserGraduate, FaChalkboardTeacher, FaHistory, FaAward } from 'react-icons/fa';
import Image from 'next/image';

// Teacher data array for easy updates later
const teachersData = [
  {
    name: 'S.M. Mehedi Hasan',
    subject: 'Physics & ICT',
    classes: 'Class 9-12',
    experience: '8+ Years',
    education: 'B.Sc. in EEE',
    role: 'Lead Academic Mentor & System Design',
    subjects: ['Physics', 'ICT', 'Computer Science']
  },
  {
    name: 'Md. Jafar Imam Sajal',
    subject: 'AI & Soft Skills',
    classes: 'Class 6-12 & IT Training',
    experience: '6+ Years',
    education: 'Learning Consultant, Netcom Learning',
    role: 'IT Training Specialist',
    subjects: ['Artificial Intelligence', 'Web Development', 'Soft Skills']
  },
  {
    name: 'Academic Specialist 01',
    subject: 'Mathematics',
    classes: 'Class 6-10',
    experience: '5+ Years',
    education: 'M.Sc. in Mathematics',
    role: 'Senior Teacher',
    subjects: ['Advanced Math', 'Algebra', 'Geometry']
  },
  {
    name: 'Academic Specialist 02',
    subject: 'Chemistry',
    classes: 'Class 9-12',
    experience: '4+ Years',
    education: 'B.Sc. in Chemistry',
    role: 'Senior Teacher',
    subjects: ['Organic Chemistry', 'Physical Chemistry']
  },
  {
    name: 'Academic Specialist 03',
    subject: 'Biology',
    classes: 'Class 9-12',
    experience: '5+ Years',
    education: 'B.Sc. in Botany',
    role: 'Senior Teacher',
    subjects: ['Botany', 'Zoology', 'Human Biology']
  },
  {
    name: 'Academic Specialist 04',
    subject: 'English',
    classes: 'Class 6-12',
    experience: '7+ Years',
    education: 'MA in English Literature',
    role: 'Senior Teacher',
    subjects: ['English Grammar', 'Literature', 'Composition']
  },
  {
    name: 'Academic Specialist 05',
    subject: 'Bangla',
    classes: 'Class 6-10',
    experience: '6+ Years',
    education: 'MA in Bangla Literature',
    role: 'Senior Teacher',
    subjects: ['Bangla Grammar', 'Sahitya']
  },
  {
    name: 'Academic Specialist 06',
    subject: 'General Science',
    classes: 'Class 6-8',
    experience: '4+ Years',
    education: 'B.Sc. General Science',
    role: 'Junior Teacher',
    subjects: ['Science', 'Environmental Studies']
  },
  {
    name: 'Academic Specialist 07',
    subject: 'Social Studies',
    classes: 'Class 6-10',
    experience: '5+ Years',
    education: 'MA in History',
    role: 'Senior Teacher',
    subjects: ['History', 'Geography', 'Civics']
  },
  {
    name: 'Academic Specialist 08',
    subject: 'ICT Basics',
    classes: 'Class 6-8',
    experience: '3+ Years',
    education: 'B.Sc. in CSE',
    role: 'Junior Teacher',
    subjects: ['Computer Fundamentals', 'Digital Literacy']
  },
  {
    name: 'Academic Specialist 09',
    subject: 'Higher Mathematics',
    classes: 'Class 11-12',
    experience: '7+ Years',
    education: 'M.Sc. Applied Mathematics',
    role: 'Senior Teacher',
    subjects: ['Calculus', 'Statistics', 'Applied Math']
  }
];

export default function Teachers() {
  return (
    <div className="min-h-screen flex flex-col bg-primary-dark">
      <Navbar />

      <main className="flex-grow pt-0">

        {/* --- Teachers Hero Section --- */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          {/* Background Gradient */}
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-accent-purple via-accent-cyan to-accent-pink" />

          {/* Decorative mesh */}
          <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-20">
            <FadeIn>
              <span className="bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-black uppercase tracking-widest mb-8 inline-block border border-white/30">Expert Faculty</span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight leading-[1.1]" style={{ fontFamily: 'Playfair Display, serif' }}>
                Our Expert<br />Teaching Team
              </h1>
              <p className="text-xl md:text-2xl font-medium mb-10 text-white/90 max-w-3xl mx-auto">
                Meet the minds behind our students' success. Our team consists of 11 dedicated professionals who bring years of industry and academic experience to the classroom.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                <a href="#teachers" className="btn-primary flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-accent-purple to-accent-cyan text-white hover:scale-105 border-none shadow-accent-purple">
                  Meet Our Teachers <FaUserGraduate />
                </a>
                <a href="/contact" className="btn-secondary flex items-center gap-2 px-10 py-5 border-text-primary text-text-primary hover:bg-surface-light hover:text-accent-purple bg-transparent">
                  <FaChalkboardTeacher size={14} /> Join Our Team
                </a>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* --- Teacher Grid --- */}
        <section id="teachers" className="section-padding bg-secondary-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {teachersData.map((t, i) => (
                <FadeIn key={i} delay={i * 0.05}>
                  <div className="bg-surface-dark rounded-3xl overflow-hidden shadow-xl border border-border-dark group hover:-translate-y-2 transition-all duration-300">
                    <div className="h-64 bg-surface-light flex items-center justify-center relative overflow-hidden">
                      <FaChalkboardTeacher size={80} className="text-accent-purple/30 group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-accent-purple to-accent-cyan text-white p-2 rounded-xl text-xs font-black shadow-lg">
                        {t.experience}
                      </div>
                      {/* Teacher Profile Image if available */}
                      <Image
                        src="/assets/teachers/class.jpg"
                        alt={t.name}
                        fill
                        className="object-cover opacity-0 group-hover:opacity-100 transition-opacity"
                        unoptimized
                      />
                    </div>
                    <div className="p-6">
                      {/* Class Badge */}
                      <div className="mb-4">
                        <span className="inline-block bg-gradient-to-r from-accent-purple/20 to-accent-cyan/20 text-accent-purple px-3 py-1 rounded-full text-xs font-bold border border-accent-purple/30">
                          {t.classes}
                        </span>
                      </div>
                      
                      {/* Teacher Name */}
                      <h3 className="text-xl font-bold text-text-primary mb-2" style={{ fontFamily: 'Inter, sans-serif', fontWeight: '700' }}>
                        {t.name}
                      </h3>
                      
                      {/* Role */}
                      <p className="text-xs font-semibold text-accent-cyan mb-3 uppercase tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {t.role}
                      </p>
                      
                      {/* Subjects */}
                      <div className="mb-4">
                        <p className="text-xs font-medium text-text-muted mb-2">Subjects:</p>
                        <div className="flex flex-wrap gap-1">
                          {t.subjects.map((subject, idx) => (
                            <span key={idx} className="bg-surface-light/50 text-text-secondary px-2 py-1 rounded text-xs font-medium">
                              {subject}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Education & Experience */}
                      <div className="pt-4 border-t border-border-dark flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-accent-purple to-accent-cyan flex items-center justify-center text-white shrink-0">
                          <FaHistory size={12} />
                        </div>
                        <div className="text-xs leading-tight">
                          <p className="font-semibold text-text-primary" style={{ fontFamily: 'Inter, sans-serif' }}>
                            {t.education}
                          </p>
                          <p className="text-text-muted">{t.experience} Experience</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* --- Stats / CTA Note --- */}
        <section className="section-padding bg-primary-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-accent-purple/20 to-accent-cyan/20 p-10 rounded-[30px] border border-accent-purple/30 flex flex-col md:flex-row items-center justify-between gap-10">
              <div>
                <h2 className="text-3xl text-text-primary font-black mb-2" style={{ fontFamily: 'Inter, sans-serif', fontWeight: '800' }}>Join the Teaching Elite</h2>
                <p className="text-text-secondary">We are always looking for passionate educators to join our core team.</p>
              </div>
              <div className="flex gap-4">
                <div className="text-center bg-surface-light/20 p-4 rounded-2xl border border-accent-purple/30 min-w-[120px]">
                  <p className="text-accent-purple text-3xl font-black" style={{ fontFamily: 'Inter, sans-serif' }}>11</p>
                  <p className="text-[10px] text-text-muted uppercase font-black" style={{ fontFamily: 'Inter, sans-serif' }}>Current Faculty</p>
                </div>
                <div className="text-center bg-surface-light/20 p-4 rounded-2xl border border-accent-cyan/30 min-w-[120px]">
                  <p className="text-accent-cyan text-3xl font-black" style={{ fontFamily: 'Inter, sans-serif' }}>100%</p>
                  <p className="text-[10px] text-text-muted uppercase font-black" style={{ fontFamily: 'Inter, sans-serif' }}>Dedication</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <FloatingJoinButton />
    </div>
  );
}
