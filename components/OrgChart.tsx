'use client';

import FadeIn from './FadeIn';
import { FaUserTie, FaUsers, FaUserGraduate, FaArrowDown } from 'react-icons/fa';

export default function OrgChart() {
    return (
        <div className="py-10 max-w-4xl mx-auto px-4">
            {/* CEO Level */}
            <FadeIn>
                <div className="flex flex-col items-center">
                    <div className="bg-primary text-white p-6 rounded-2xl shadow-xl border-b-4 border-primary-dark w-full max-w-[300px] text-center">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                            <FaUserTie className="text-white text-xl" />
                        </div>
                        <h3 className="font-bold text-lg">Founder & CEO</h3>
                        <p className="text-white/80 text-xs mt-1 uppercase tracking-widest">S.M. Mehedi Hasan</p>
                    </div>

                    <div className="h-10 w-0.5 bg-primary/30 my-2"></div>
                </div>
            </FadeIn>

            {/* Management Level */}
            <FadeIn delay={0.2}>
                <div className="flex flex-col items-center">
                    <div className="bg-soft-violet border-2 border-primary/20 p-5 rounded-2xl w-full max-w-[500px]">
                        <h3 className="text-primary font-bold text-center mb-4 flex items-center justify-center gap-2">
                            <FaUsers /> Core Management Team
                        </h3>
                        <div className="grid grid-cols-2 gap-3 text-center">
                            {[
                                "Course Planning",
                                "System Design",
                                "Execution",
                                "Quality Control"
                            ].map((role) => (
                                <div key={role} className="bg-white p-3 rounded-xl border border-primary/10 text-xs font-semibold text-charcoal shadow-sm">
                                    {role}
                                </div>
                            ))}
                        </div>
                        <p className="text-center text-[10px] text-primary/60 mt-3 uppercase font-bold tracking-tighter">4 Senior Teachers</p>
                    </div>

                    <div className="h-10 w-0.5 bg-primary/30 my-2"></div>
                </div>
            </FadeIn>

            {/* Teaching Level */}
            <FadeIn delay={0.4}>
                <div className="flex flex-col items-center">
                    <div className="bg-white border-2 border-amber/30 p-6 rounded-2xl w-full max-w-[650px] shadow-lg relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1 h-full bg-amber"></div>
                        <h3 className="text-charcoal font-bold text-center mb-4 flex items-center justify-center gap-2">
                            <FaUserGraduate className="text-amber" /> Teaching Team
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {[
                                { t: "Daily Classes", d: "Interactive sessions for all subjects" },
                                { t: "Student Mentoring", d: "Personalised academic guidance" },
                                { t: "Exam Evaluation", d: "Systematic weekly assessments" }
                            ].map((item) => (
                                <div key={item.t} className="p-3 rounded-xl bg-gray-50 border border-gray-100">
                                    <h4 className="font-bold text-xs text-primary mb-1">{item.t}</h4>
                                    <p className="text-[10px] text-gray-500 leading-tight">{item.d}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 flex justify-center">
                            <span className="bg-amber text-charcoal px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                                11 Subject-Specialist Teachers
                            </span>
                        </div>
                    </div>
                </div>
            </FadeIn>
        </div>
    );
}
