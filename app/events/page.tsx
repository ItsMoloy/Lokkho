'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/SectionHeading';
import FadeIn from '@/components/FadeIn';
import FloatingJoinButton from '@/components/FloatingJoinButton';
import { FaAward, FaCalendarAlt, FaMicrosoft, FaGlobe, FaChevronRight, FaStar, FaUserFriends } from 'react-icons/fa';
import Image from 'next/image';

export default function Events() {
    const events = [
        { title: 'Annual Cultural Fest 2024', date: 'Upcoming', status: 'Planning', icon: <FaStar /> },
        { title: 'Nationwide Coding Battle', date: 'Q4 2024', status: 'Upcoming', icon: <FaUserFriends /> },
    ];

    return (
        <div className="min-h-screen flex flex-col bg-primary-dark">
            <Navbar />

            <main className="flex-grow pt-0">

                {/* --- Events Hero Section --- */}
                <section className="relative min-h-[90vh] flex items-center overflow-hidden">
                    {/* Background Gradient */}
                    <div className="absolute inset-0 z-0 bg-gradient-to-br from-accent-pink via-accent-purple to-accent-cyan" />

                    {/* Decorative mesh */}
                    <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

                    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-20">
                        <FadeIn>
                            <span className="bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-black uppercase tracking-widest mb-8 inline-block border border-white/30">Events & Achievements</span>
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight leading-[1.1]" style={{ fontFamily: 'Playfair Display, serif' }}>
                                Our Proudest<br />Moments
                            </h1>
                            <p className="text-xl md:text-2xl font-medium mb-10 text-white/90 max-w-3xl mx-auto">
                                Achievements that define our institute's growth and impact in the educational landscape.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                                <a href="#achievements" className="btn-primary flex items-center gap-2 px-10 py-5 bg-accent text-charcoal hover:bg-white hover:text-primary border-none shadow-[0_20px_50px_rgba(249,115,22,0.3)]">
                                    View Achievements <FaAward />
                                </a>
                                <a href="#upcoming" className="btn-secondary flex items-center gap-2 px-10 py-5 border-white text-white hover:bg-white hover:text-primary bg-transparent">
                                    <FaCalendarAlt size={14} /> Upcoming Events
                                </a>
                            </div>
                        </FadeIn>
                    </div>
                </section>

                {/* --- Featured Achievement --- */}
                <section id="achievements" className="section-padding bg-secondary-dark">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                        <div className="mt-12 bg-surface-dark rounded-[40px] shadow-2xl overflow-hidden border border-accent-pink/20 relative">
                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                <div className="p-8 md:p-16 flex flex-col justify-center">
                                    <span className="text-amber font-black text-xs uppercase tracking-[0.3em] mb-4 block">Major Event</span>
                                    <h2 className="text-4xl md:text-5xl text-white font-black mb-6 leading-tight">AgentX AI Championship</h2>
                                    <p className="text-white/60 text-lg mb-8 leading-relaxed">
                                        A nationwide platform created by Lokkho in collaboration with <b>Microsoft</b> and <b>Netcom</b>.
                                        Targeted at colleges and universities across Bangladesh, it was the first AI prompting battle
                                        of its kind in the country.
                                    </p>

                                    <div className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10">
                                        <div>
                                            <p className="text-amber font-bold text-xl">500+</p>
                                            <p className="text-[10px] text-white/40 uppercase font-black">Participants</p>
                                        </div>
                                        <div className="w-px h-10 bg-white/10" />
                                        <div>
                                            <p className="text-white font-bold text-xl text-center">Nationwide</p>
                                            <p className="text-[10px] text-white/40 uppercase font-black">Scope</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="relative aspect-[4/3] lg:aspect-auto">
                                    <div className="absolute inset-0 bg-gradient-to-r from-charcoal to-transparent z-10 lg:hidden" />
                                    <Image
                                        src="/assets/Agentx.jpg"
                                        alt="AgentX Event"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- Partnership logos --- */}
                <section className="section-padding bg-soft-violet/30">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <FadeIn>
                            <SectionHeading title="Our Valued Partners" subtitle="Collaborating with global giants for student success" />
                        </FadeIn>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
                            {[
                                { name: 'Microsoft', icon: <FaMicrosoft />, d: 'Cloud & AI Technology Partner' },
                                { name: 'Netcom Learning', icon: <FaGlobe />, d: 'Co-organiser & Content Partner' },
                                { name: 'ICT Division', icon: <FaAward />, d: 'Government Recognition' },
                                { name: 'Local Schools', icon: <FaUserFriends size={20} />, d: 'Community Growth Partners' }
                            ].map((p, i) => (
                                <FadeIn key={i} delay={i * 0.1}>
                                    <div className="bg-white p-8 rounded-3xl text-center shadow-sm hover:shadow-xl transition-all h-full flex flex-col items-center justify-center border border-gray-50">
                                        <div className="w-16 h-16 rounded-full bg-soft-violet flex items-center justify-center text-primary text-3xl mb-4">
                                            {p.icon}
                                        </div>
                                        <h4 className="font-bold text-charcoal mb-1">{p.name}</h4>
                                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest leading-tight">{p.d}</p>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- Future Events --- */}
                <section className="section-padding bg-secondary-dark">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <FadeIn>
                            <SectionHeading title="Future Events" subtitle="Exciting milestones coming your way" />
                        </FadeIn>
                        <div className="mt-12 space-y-4">
                            {events.map((e, i) => (
                                <FadeIn key={i} delay={i * 0.1}>
                                    <div className="p-6 md:p-8 rounded-2xl bg-soft-violet/50 border border-primary/5 flex items-center justify-between group hover:bg-primary transition-all cursor-pointer">
                                        <div className="flex items-center gap-6">
                                            <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center text-primary group-hover:bg-amber group-hover:text-charcoal transition-all">
                                                {e.icon}
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-bold text-charcoal group-hover:text-white transition-all">{e.title}</h4>
                                                <div className="flex items-center gap-4 mt-1">
                                                    <span className="text-xs font-black text-primary group-hover:text-amber uppercase flex items-center gap-1">
                                                        <FaCalendarAlt size={10} /> {e.date}
                                                    </span>
                                                    <span className="text-[10px] bg-white/80 group-hover:bg-white/20 px-2 py-0.5 rounded text-charcoal group-hover:text-white font-bold uppercase tracking-widest">{e.status}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <FaChevronRight className="text-primary group-hover:text-white group-hover:translate-x-2 transition-all" />
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- Events Gallery --- */}
                <section className="section-padding bg-primary-dark">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <FadeIn>
                            <div className="text-center mb-12">
                                <h2 className="text-4xl md:text-5xl font-black text-text-primary mb-4" style={{ fontFamily: 'Inter, sans-serif', fontWeight: '800' }}>
                                    Event Gallery
                                </h2>
                                <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                                    Capturing memorable moments from our events, competitions, and celebrations
                                </p>
                            </div>
                        </FadeIn>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                            {[
                                'event4.jpg', 'event5.jpg', 'event6.jpg', 'event7.jpg',
                                'event8.jpg', 'event9.jpg', 'event10.jpg', 'event11.jpg',
                                'event12.jpg', 'event13.jpg', 'event14.jpg', 'event15.jpg',
                                'event16.jpg', 'event17.jpg', 'event18.jpg', 'event19.jpg',
                                'event20.jpg', 'event21.jpg'
                            ].map((img, index) => (
                                <FadeIn key={index} delay={index * 0.03}>
                                    <div className="group relative overflow-hidden rounded-xl border border-border-dark hover:border-accent-pink/50 transition-all duration-300">
                                        <div className="aspect-[4/3] relative">
                                            <Image
                                                src={`/assets/events/${img}`}
                                                alt={`Event ${index + 1}`}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                                                unoptimized
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            <div className="absolute bottom-3 left-3 right-3">
                                                <p className="text-white font-bold text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                    Event Moment {index + 1}
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
