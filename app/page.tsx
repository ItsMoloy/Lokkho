'use client';

import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/SectionHeading';
import StatCard from '@/components/StatCard';
import StepCard from '@/components/StepCard';
import FloatingJoinButton from '@/components/FloatingJoinButton';
import FadeIn from '@/components/FadeIn';
import {
    FaChalkboardTeacher, FaBook, FaLaptopCode, FaClipboardCheck, FaAward,
    FaRocket, FaUsers, FaClock, FaStar, FaGraduationCap, FaArrowRight, FaPlay
} from 'react-icons/fa';

export default function Home() {
    const learningSteps = [
        { num: 1, title: 'Structured Classes', points: ['Daily interactive sessions', 'Conceptual teaching'], icon: <FaChalkboardTeacher /> },
        { num: 2, title: 'Individual Notes', points: ['Unique study materials', 'Exam-focused content'], icon: <FaBook /> },
        { num: 3, title: 'Practical Learning', points: ['Hands-on experiments', 'IT skills application'], icon: <FaLaptopCode /> },
        { num: 4, title: 'Weekly Exam', points: ['Regular assessments', 'Performance tracking'], icon: <FaClipboardCheck /> },
        { num: 5, title: 'Evaluation', points: ['Detailed feedback', 'Progress reporting'], icon: <FaAward /> },
    ];

    const features = [
        { icon: <FaGraduationCap />, title: 'Expert Faculty', desc: '11 dedicated subject specialist teachers' },
        { icon: <FaUsers />, title: 'Small Batches', desc: 'Personalised attention for every student' },
        { icon: <FaClock />, title: 'Intense Routine', desc: '6 days a week classes and evaluations' },
        { icon: <FaStar />, title: 'Proven Success', desc: '1000+ students served with excellence' },
    ];

    const galleryPlaceholders = [
        { label: 'Class Photos', icon: <FaUsers /> },
        { label: 'Exam Moments', icon: <FaClipboardCheck /> },
        { label: 'Lab Work', icon: <FaLaptopCode /> },
        { label: 'AgentX Event', icon: <FaAward /> },
        { label: 'Annual Picnic', icon: <FaStar /> },
        { label: 'Award Ceremony', icon: <FaAward /> },
    ];

    return (
        <div className="min-h-screen flex flex-col bg-primary-dark">
            <Navbar />

            <main className="flex-grow">

                {/* --- Hero Section --- */}
                <section className="relative min-h-[90vh] flex items-center overflow-hidden">
                    {/* Background Gradient */}
                    <div className="absolute inset-0 z-0 bg-gradient-to-br from-accent via-primary to-primary-light" />

                    {/* Decorative mesh */}
                    <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

                    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-20">
                        <FadeIn>
                            <span className="bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-black uppercase tracking-widest mb-8 inline-block border border-white/30">Welcome</span>
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight leading-[1.1]" style={{ fontFamily: 'Playfair Display, serif' }}>
                                Lokkho Academic<br />& IT Institute
                            </h1>
                            <p className="text-xl md:text-2xl font-medium mb-10 text-white/90 max-w-3xl mx-auto">
                                Where Knowledge Meets Technology
                            </p>

                            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                                <Link href="/academic" className="btn-primary flex items-center gap-2 px-10 py-5 bg-accent text-charcoal hover:bg-white hover:text-primary border-none shadow-[0_20px_50px_rgba(249,115,22,0.3)]">
                                    Explore Programs <FaArrowRight />
                                </Link>
                                <Link href="/contact" className="btn-secondary flex items-center gap-2 px-10 py-5 border-white text-white hover:bg-white hover:text-primary bg-transparent">
                                    <FaPlay size={10} /> Contact Us
                                </Link>
                            </div>
                        </FadeIn>
                    </div>
                </section>

                {/* --- Learning System Section --- */}
                <section className="section-padding bg-slate-800">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <FadeIn>
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                    Our Learning System
                                </h2>
                                <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                                    A comprehensive 5-step approach to ensure academic excellence and practical skill development
                                </p>
                            </div>
                        </FadeIn>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-12 relative">
                            {/* Connector line for desktop */}
                            <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-0.5 bg-blue-600/30 z-0" />

                            {learningSteps.map((step, i) => (
                                <FadeIn key={step.num} delay={i * 0.1}>
                                    <div className="relative z-10 bg-slate-700/50 backdrop-blur-sm border border-slate-600/30 p-6 rounded-xl group hover:bg-slate-700 transition-all">
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-orange-500 flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform">
                                            {step.icon}
                                        </div>
                                        <div className="text-xs font-bold text-blue-400 mb-2">STEP 0{step.num}</div>
                                        <h3 className="text-lg font-bold mb-3 text-white">{step.title}</h3>
                                        <ul className="space-y-2">
                                            {step.points.map((p, idx) => (
                                                <li key={idx} className="text-xs text-gray-300 flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" /> 
                                                    <span>{p}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- Impact Stats --- */}
                <section className="py-16 bg-slate-900 border-y border-slate-700">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <FadeIn>
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                    Our Impact
                                </h2>
                                <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                                    Numbers that reflect our commitment to education excellence
                                </p>
                            </div>
                        </FadeIn>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                            <StatCard end={1000} suffix="+" label="Students Served" />
                            <StatCard end={200} suffix="+" label="Active Students" />
                            <StatCard end={11} label="Expert Teachers" />
                            <StatCard end={6} label="Days/Week Classes" />
                        </div>
                    </div>
                </section>

                {/* --- Differentiators --- */}
                <section className="section-padding bg-slate-800">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <FadeIn>
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                    What Makes Us Different
                                </h2>
                                <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                                    Discover the unique advantages that set us apart
                                </p>
                            </div>
                        </FadeIn>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                            {features.map((f, i) => (
                                <FadeIn key={i} delay={i * 0.1}>
                                    <div className="text-center p-8 rounded-xl bg-slate-700/50 border border-slate-600/30 hover:bg-slate-700 hover:shadow-xl transition-all h-full">
                                        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-orange-500 flex items-center justify-center mx-auto mb-6 text-white shadow-lg text-2xl">
                                            {f.icon}
                                        </div>
                                        <h4 className="text-xl font-bold mb-3 text-white">{f.title}</h4>
                                        <p className="text-gray-300 text-sm leading-relaxed">{f.desc}</p>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- Services Split --- */}
                <section className="section-padding bg-slate-900">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <FadeIn>
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                    Our Services
                                </h2>
                                <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                                    Comprehensive educational solutions for academic and technological excellence
                                </p>
                            </div>
                        </FadeIn>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <FadeIn direction="left">
                                <div className="bg-slate-800 p-10 rounded-3xl shadow-xl border-t-4 border-blue-500 h-full">
                                    <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-400 text-3xl mb-8">
                                        <FaGraduationCap />
                                    </div>
                                    <h3 className="text-3xl font-bold mb-4 text-white">Academic Coaching</h3>
                                    <p className="text-gray-300 mb-8 leading-relaxed">
                                        Comprehensive academic support for Class 6–12. Our structured approach covers all board subjects with a specialty in the Science Group for senior students.
                                    </p>
                                    <Link href="/academic" className="text-blue-400 font-bold flex items-center gap-2 hover:gap-4 transition-all">
                                        Explore Academic Programs <FaArrowRight />
                                    </Link>
                                </div>
                            </FadeIn>

                            <FadeIn direction="right">
                                <div className="bg-slate-800 p-10 rounded-3xl shadow-xl border-t-4 border-orange-500 h-full">
                                    <div className="w-16 h-16 rounded-2xl bg-orange-500/20 flex items-center justify-center text-orange-400 text-3xl mb-8">
                                        <FaLaptopCode />
                                    </div>
                                    <h3 className="text-3xl font-bold mb-4 text-white">IT Training</h3>
                                    <p className="text-gray-300 mb-8 leading-relaxed">
                                        Master next-gen technology with our industry-led courses. From Web Development to AI Prompting, we prepare students for the digital future.
                                    </p>
                                    <Link href="/it-training" className="text-orange-400 font-bold flex items-center gap-2 hover:gap-4 transition-all">
                                        Explore IT Courses <FaArrowRight />
                                    </Link>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </section>

                {/* --- Gallery Grid Placeholders --- */}
                <section className="section-padding bg-slate-800">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <FadeIn>
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                    Our Journey in Pictures
                                </h2>
                                <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                                    Glimpses of our educational excellence and student achievements
                                </p>
                            </div>
                        </FadeIn>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
                            {galleryPlaceholders.map((item, i) => (
                                <FadeIn key={i} delay={i * 0.05}>
                                    <div className="aspect-video bg-slate-700/50 rounded-xl flex flex-col items-center justify-center border border-slate-600/30 group overflow-hidden relative hover:bg-slate-700 transition-all">
                                        <div className="text-gray-400 text-4xl mb-2 group-hover:scale-110 transition-transform duration-500">
                                            {item.icon}
                                        </div>
                                        <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">{item.label}</span>
                                        {/* Placeholder image layer (simulated) */}
                                        <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- Final CTA --- */}
                <section className="py-20 bg-white">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <FadeIn>
                            <div className="bg-primary rounded-[var(--radius-card)] p-12 md:p-20 text-center text-white shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                                <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                                    Ready to Join?
                                </h2>
                                <p className="text-lg md:text-xl text-white/80 mb-10 max-w-xl mx-auto">
                                    Take the first step toward a brighter future in academics and technology. Admissions are now open!
                                </p>
                                <Link href="/contact" className="btn-primary bg-white text-primary border-none text-xl px-12 py-6 hover:bg-amber hover:text-charcoal inline-block">
                                    Enroll Now
                                </Link>
                            </div>
                        </FadeIn>
                    </div>
                </section>

            </main>

            <Footer />
            <FloatingJoinButton />
        </div>
    );
}
