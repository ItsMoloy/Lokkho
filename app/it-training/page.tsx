'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/SectionHeading';
import FadeIn from '@/components/FadeIn';
import FloatingJoinButton from '@/components/FloatingJoinButton';
import { FaLaptopCode, FaRobot, FaPalette, FaRocket, FaAward, FaUsers, FaArrowRight, FaMicrosoft, FaGlobe } from 'react-icons/fa';
import Image from 'next/image';

export default function ITTraining() {
    const courses = [
        { title: 'Web Development', icon: <FaLaptopCode />, desc: 'Master modern frontend & backend technologies to build professional websites.' },
        { title: 'AI & Technology', icon: <FaRobot />, desc: 'Learn prompt engineering, AI tools, and the future of automation.' },
        { title: 'Digital Skills', icon: <FaPalette />, desc: 'Graphics design, social media marketing, and office productivity tools.' },
    ];

    return (
        <div className="min-h-screen flex flex-col bg-primary-dark">
            <Navbar />

            <main className="flex-grow pt-0">

                {/* --- IT Training Hero Section --- */}
                <section className="relative min-h-[90vh] flex items-center overflow-hidden">
                    {/* Background Gradient */}
                    <div className="absolute inset-0 z-0 bg-gradient-to-br from-accent-purple via-accent-cyan to-accent-pink" />

                    {/* Decorative mesh */}
                    <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

                    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-20">
                        <FadeIn>
                            <span className="bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-black uppercase tracking-widest mb-8 inline-block border border-white/30">Tech-Focused Learning</span>
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight leading-[1.1]" style={{ fontFamily: 'Playfair Display, serif' }}>
                                Master the<br />Digital World
                            </h1>
                            <p className="text-xl md:text-2xl font-medium mb-10 text-white/90 max-w-3xl mx-auto">
                                We don't just teach coding; we build innovators. Our IT curriculum is designed to bridge the gap between classroom knowledge and industry requirements.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                                <a href="#courses" className="btn-primary flex items-center gap-2 px-10 py-5 bg-accent text-charcoal hover:bg-white hover:text-primary border-none shadow-[0_20px_50px_rgba(249,115,22,0.3)]">
                                    Browse Courses <FaArrowRight />
                                </a>
                                <a href="#contact" className="btn-secondary flex items-center gap-2 px-10 py-5 border-white text-white hover:bg-white hover:text-primary bg-transparent">
                                    <FaArrowRight size={12} /> Learn More
                                </a>
                            </div>
                        </FadeIn>
                    </div>
                </section>

                {/* --- AgentX Highlight --- */}
                <section className="section-padding bg-secondary-dark">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <FadeIn>
                            <div className="bg-surface-dark p-8 md:p-16 rounded-[40px] shadow-2xl border-2 border-accent-purple/20 overflow-hidden relative group">
                                {/* Glow Background */}
                                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-purple/20 rounded-full blur-[100px] -mr-64 -mt-64 group-hover:bg-accent-purple/30 transition-all duration-1000" />

                                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                    <div>
                                        <span className="text-accent font-black text-xs uppercase tracking-[0.3em] mb-4 block">Major Achievement</span>
                                        <h2 className="text-4xl md:text-6xl text-white font-black mb-6 leading-tight">AgentX AI Championship</h2>
                                        <p className="text-white/60 text-lg mb-8 leading-relaxed">
                                            Lokkho proudly organized the nationwide AgentX AI Championship, bringing together
                                            students from top colleges and universities across Bangladesh.
                                        </p>

                                        <div className="flex flex-wrap gap-8 mb-10">
                                            <div className="flex items-center gap-3">
                                                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-white"><FaMicrosoft /></div>
                                                <div>
                                                    <p className="text-[10px] text-white/40 uppercase font-black">Partner</p>
                                                    <p className="text-white font-bold">Microsoft</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-white"><FaGlobe /></div>
                                                <div>
                                                    <p className="text-[10px] text-white/40 uppercase font-black">Co-host</p>
                                                    <p className="text-white font-bold">Netcom Learning</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-1 bg-gradient-to-r from-accent to-transparent rounded-lg">
                                            <div className="bg-charcoal px-6 py-4 rounded-md">
                                                <p className="text-accent font-bold flex items-center gap-2">
                                                    <FaAward /> 500+ Participants Nationwide
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="aspect-[4/5] bg-secondary/50 rounded-2xl border-2 border-white/10 relative overflow-hidden flex items-center justify-center">
                                        <div className="text-center text-white/20">
                                            <FaRobot size={120} className="mx-auto mb-4 animate-float" />
                                            <p className="font-bold uppercase tracking-widest text-xs">Event Poster Placeholder</p>
                                        </div>
                                        {/* Image if available */}
                                        <Image src="/assets/Agentx.jpg" alt="AgentX" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </section>

                {/* --- Courses --- */}
                <section id="courses" className="section-padding bg-secondary">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <FadeIn>
                            <SectionHeading title="Our Core Courses" subtitle="Industry-led training modules for future-ready careers" />
                        </FadeIn>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                            {courses.map((c, i) => (
                                <FadeIn key={i} delay={i * 0.1}>
                                    <div className="bg-white p-10 rounded-3xl group hover:shadow-2xl transition-all border-b-8 border-transparent hover:border-primary">
                                        <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center text-primary text-3xl mb-8 group-hover:scale-110 transition-transform">
                                            {c.icon}
                                        </div>
                                        <h4 className="text-2xl font-bold mb-4">{c.title}</h4>
                                        <p className="text-gray-500 mb-8 leading-relaxed h-20">{c.desc}</p>
                                        <button className="flex items-center gap-2 text-primary font-black uppercase text-xs tracking-widest group-hover:gap-4 transition-all">
                                            View Curriculum <FaArrowRight />
                                        </button>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- Why Choose Us --- */}
                <section className="section-padding bg-secondary-dark">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <FadeIn>
                            <SectionHeading title="Why IT Training at Lokkho?" subtitle="Beyond just theory; we focus on job-readiness" />
                        </FadeIn>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
                            {[
                                { icon: <FaRocket />, t: 'Project-based', d: 'Work on real-world projects' },
                                { icon: <FaUsers />, t: 'Expert Mentorship', d: 'Learn from industry pros' },
                                { icon: <FaAward />, t: 'Global Certificates', d: 'Microsoft backed recognition' },
                                { icon: <FaLaptopCode />, t: 'Modern Lab', d: 'High-end PC configurations' }
                            ].map((item, i) => (
                                <FadeIn key={i} delay={i * 0.1}>
                                    <div className="text-center">
                                        <div className="text-primary text-4xl mb-4 flex justify-center">{item.icon}</div>
                                        <h5 className="font-bold text-charcoal mb-2">{item.t}</h5>
                                        <p className="text-gray-400 text-xs">{item.d}</p>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- Achievements Gallery --- */}
                <section className="section-padding bg-primary-dark">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <FadeIn>
                            <div className="text-center mb-12">
                                <h2 className="text-4xl md:text-5xl font-black text-text-primary mb-4" style={{ fontFamily: 'Inter, sans-serif', fontWeight: '800' }}>
                                    Our Achievements
                                </h2>
                                <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                                    A showcase of our success stories and milestones in IT education and innovation
                                </p>
                            </div>
                        </FadeIn>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                'achievement.jpg', 'achievement1.jpg', 'achievement2.jpg',
                                'achievement3.jpg', 'achievement4.jpg', 'achievement5.jpg',
                                'achievement6.jpg', 'achievement7.jpg', 'achievement8.jpg',
                                'achievement9.jpg'
                            ].map((img, index) => (
                                <FadeIn key={index} delay={index * 0.05}>
                                    <div className="group relative overflow-hidden rounded-2xl border border-border-dark hover:border-accent-purple/50 transition-all duration-300">
                                        <div className="aspect-[4/3] relative">
                                            <Image
                                                src={`/assets/achievements/${img}`}
                                                alt={`Achievement ${index + 1}`}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                unoptimized
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            <div className="absolute bottom-4 left-4 right-4">
                                                <p className="text-white font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                    Achievement {index + 1}
                                                </p>
                                            </div>
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
