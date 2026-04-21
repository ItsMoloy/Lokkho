import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/SectionHeading';
import FloatingJoinButton from '@/components/FloatingJoinButton';
import { 
  FaBullseye, 
  FaEye, 
  FaGraduationCap,
  FaUsers,
  FaClock,
  FaStar,
  FaAward,
  FaTrophy,
  FaMedal,
  FaCertificate
} from 'react-icons/fa';

export default function About() {
  // Features Data (same as home page)
  const features = [
    {
      icon: <FaGraduationCap size={32} />,
      title: "Expert Faculty",
      description: "11 experienced teachers dedicated to student success"
    },
    {
      icon: <FaUsers size={32} />,
      title: "Small Class Sizes",
      description: "Personalized attention for every student"
    },
    {
      icon: <FaClock size={32} />,
      title: "Flexible Schedule",
      description: "6 days a week with convenient timing options"
    },
    {
      icon: <FaStar size={32} />,
      title: "Proven Results",
      description: "1000+ students served with excellent outcomes"
    }
  ];

  // Achievements Timeline
  const achievements = [
    {
      year: "2020",
      title: "Institute Founded",
      description: "Started with a vision to blend academic excellence with technology education",
      icon: <FaAward />
    },
    {
      year: "2021",
      title: "First Batch Success",
      description: "100% pass rate with outstanding academic performance",
      icon: <FaTrophy />
    },
    {
      year: "2022",
      title: "IT Program Launch",
      description: "Introduced comprehensive IT training programs",
      icon: <FaCertificate />
    },
    {
      year: "2023",
      title: "AgentX Championship",
      description: "Collaborated with Microsoft and Netcom for nationwide AI competition",
      icon: <FaMedal />
    },
    {
      year: "2024",
      title: "Expansion Complete",
      description: "Reached 1000+ students milestone with 11 expert teachers",
      icon: <FaStar />
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-violet-600 to-violet-800">
          <div 
            className="absolute inset-0"
            style={{ 
              background: 'linear-gradient(135deg, var(--primary-violet) 0%, #8B5CF6 100%)'
            }}
          />
          <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              About Lokkho Institute
            </h1>
            <p className="text-xl md:text-2xl font-light opacity-95 max-w-3xl mx-auto">
              Discover our journey, mission, and commitment to educational excellence in Demra, Dhaka
            </p>
          </div>
        </section>

        {/* Institute Background */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <SectionHeading 
                  title="Our Story"
                  subtitle="Building futures through quality education since 2020"
                  centered={false}
                />
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Lokkho Academic and IT Institute was established with a clear vision: to create 
                  an educational environment where academic excellence meets technological innovation. 
                  Located in the heart of Demra, Dhaka, we have been serving the community with 
                  unwavering commitment to quality education.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Our institute stands as a beacon of educational excellence, offering comprehensive 
                  academic coaching for Class 6-12 students alongside cutting-edge IT training programs. 
                  We believe in nurturing not just academic brilliance but also technological proficiency 
                  essential for the modern world.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Over the years, we have grown from a small tutoring center to a full-fledged educational 
                  institution, serving over 1000 students with the help of our dedicated team of 11 experienced 
                  teachers. Our success is measured by the achievements of our students and the trust 
                  placed in us by parents.
                </p>
              </div>
              <div 
                className="p-8 rounded-xl"
                style={{ 
                  backgroundColor: 'var(--light-violet)',
                  boxShadow: 'var(--box-shadow)'
                }}
              >
                <h3 
                  className="text-2xl font-bold mb-6"
                  style={{ 
                    fontFamily: 'Playfair Display, serif',
                    color: 'var(--dark-charcoal)'
                  }}
                >
                  Quick Facts
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-gray-300">
                    <span className="font-medium">Founded</span>
                    <span>2020</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-300">
                    <span className="font-medium">Location</span>
                    <span>Demra, Dhaka</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-300">
                    <span className="font-medium">Students Served</span>
                    <span>1000+</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-300">
                    <span className="font-medium">Expert Teachers</span>
                    <span>11</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Class Days</span>
                    <span>6 Days/Week</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20" style={{ backgroundColor: 'var(--light-violet)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading 
              title="Our Mission & Vision"
              subtitle="The guiding principles that drive our educational excellence"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Mission */}
              <div 
                className="p-8 rounded-xl bg-white"
                style={{ boxShadow: 'var(--box-shadow)' }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'var(--primary-violet)' }}
                  >
                    <FaBullseye className="text-white text-2xl" />
                  </div>
                  <h3 
                    className="text-2xl font-bold"
                    style={{ 
                      fontFamily: 'Playfair Display, serif',
                      color: 'var(--dark-charcoal)'
                    }}
                  >
                    Our Mission
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  To provide exceptional academic coaching and IT training that empowers students 
                  to achieve their full potential. We strive to create a learning environment that 
                  fosters critical thinking, innovation, and practical skills essential for success 
                  in the modern world.
                </p>
              </div>

              {/* Vision */}
              <div 
                className="p-8 rounded-xl bg-white"
                style={{ boxShadow: 'var(--box-shadow)' }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'var(--primary-violet)' }}
                  >
                    <FaEye className="text-white text-2xl" />
                  </div>
                  <h3 
                    className="text-2xl font-bold"
                    style={{ 
                      fontFamily: 'Playfair Display, serif',
                      color: 'var(--dark-charcoal)'
                    }}
                  >
                    Our Vision
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  To become the leading educational institution in Bangladesh that seamlessly 
                  integrates academic excellence with technological innovation. We aim to produce 
                  well-rounded individuals who are not just academically proficient but also 
                  technologically adept and ready to face global challenges.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading 
              title="What Makes Us Different"
              subtitle="Discover the unique advantages that set us apart"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="p-8 rounded-xl text-center hover:shadow-xl transition-all duration-300"
                  style={{ 
                    backgroundColor: 'var(--light-violet)',
                    boxShadow: 'var(--box-shadow)'
                  }}
                >
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: 'var(--primary-violet)' }}
                  >
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 
                    className="text-xl font-semibold mb-3"
                    style={{ 
                      fontFamily: 'Playfair Display, serif',
                      color: 'var(--dark-charcoal)'
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Organization Structure */}
        <section className="py-20" style={{ backgroundColor: 'var(--light-violet)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading 
              title="Our Team Structure"
              subtitle="Meet the organizational hierarchy that drives our success"
            />
            
            <div className="max-w-4xl mx-auto">
              {/* Top Level - Founder & CEO */}
              <div className="text-center mb-8">
                <div 
                  className="inline-block px-8 py-4 rounded-xl text-white font-bold text-lg"
                  style={{ backgroundColor: 'var(--primary-violet)' }}
                >
                  Founder & CEO
                </div>
              </div>

              {/* Middle Level - Core Management */}
              <div className="text-center mb-8">
                <div className="text-gray-600 mb-4 font-medium">Core Management Team</div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {['Course Planning', 'System Design', 'Execution', 'Quality Control'].map((role, index) => (
                    <div 
                      key={index}
                      className="bg-white p-4 rounded-lg text-center"
                      style={{ boxShadow: 'var(--box-shadow)' }}
                    >
                      <div className="font-semibold text-sm" style={{ color: 'var(--dark-charcoal)' }}>
                        {role}
                      </div>
                      <div className="text-xs text-gray-600 mt-1">Teacher</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Level - Teaching Team */}
              <div className="text-center">
                <div className="text-gray-600 mb-4 font-medium">Teaching Team</div>
                <div 
                  className="inline-block px-8 py-4 rounded-xl bg-white font-bold text-lg"
                  style={{ boxShadow: 'var(--box-shadow)', color: 'var(--primary-violet)' }}
                >
                  11 Teachers
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 max-w-2xl mx-auto">
                  {['Daily Classes', 'Student Mentoring', 'Exam Evaluation'].map((role, index) => (
                    <div 
                      key={index}
                      className="bg-white/80 p-3 rounded-lg text-center"
                      style={{ boxShadow: 'var(--box-shadow)' }}
                    >
                      <div className="font-medium text-sm" style={{ color: 'var(--dark-charcoal)' }}>
                        {role}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Timeline */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading 
              title="Our Achievements"
              subtitle="Milestones that mark our journey of excellence"
            />
            <div className="max-w-4xl mx-auto">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center mb-8 last:mb-0">
                  <div className="flex-shrink-0 w-24 text-right pr-6">
                    <div 
                      className="text-lg font-bold"
                      style={{ color: 'var(--primary-violet)' }}
                    >
                      {achievement.year}
                    </div>
                  </div>
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'var(--primary-violet)' }}
                  >
                    <div className="text-white">
                      {achievement.icon}
                    </div>
                  </div>
                  <div className="flex-grow pl-6">
                    <h4 
                      className="text-xl font-semibold mb-2"
                      style={{ 
                        fontFamily: 'Playfair Display, serif',
                        color: 'var(--dark-charcoal)'
                      }}
                    >
                      {achievement.title}
                    </h4>
                    <p className="text-gray-600">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div 
            className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
            style={{ 
              backgroundColor: 'var(--primary-violet)',
              borderRadius: 'var(--border-radius-card)'
            }}
          >
            <h2 
              className="text-3xl md:text-4xl font-bold mb-6 text-white"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Join Our Journey
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Become part of an institution that values excellence, innovation, and student success. 
              Your future starts here at Lokkho Institute.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-violet-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingJoinButton />
    </div>
  );
}
