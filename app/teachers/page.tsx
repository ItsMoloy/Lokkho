import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/SectionHeading';
import FloatingJoinButton from '@/components/FloatingJoinButton';
import { 
  FaChalkboardTeacher, 
  FaGraduationCap, 
  FaFlask,
  FaCalculator,
  FaGlobe,
  FaAtom,
  FaMicroscope,
  FaBook,
  FaUser,
  FaAward,
  FaStar
} from 'react-icons/fa';

export default function Teachers() {
  // Add teacher data in teachersData array
  const teachersData = [
    {
      id: 1,
      name: "Dr. Mohammad Rahman",
      subject: "Physics",
      experience: "15+ Years",
      specialization: "Advanced Physics & Quantum Mechanics",
      avatar: <FaUser />
    },
    {
      id: 2,
      name: "Prof. Fatema Khatun",
      subject: "Chemistry",
      experience: "12+ Years",
      specialization: "Organic Chemistry & Lab Techniques",
      avatar: <FaUser />
    },
    {
      id: 3,
      name: "Eng. Ahmed Hassan",
      subject: "Mathematics",
      experience: "10+ Years",
      specialization: "Calculus & Applied Mathematics",
      avatar: <FaUser />
    },
    {
      id: 4,
      name: "Ms. Sarah Islam",
      subject: "Biology",
      experience: "8+ Years",
      specialization: "Molecular Biology & Genetics",
      avatar: <FaUser />
    },
    {
      id: 5,
      name: "Mr. Karim Uddin",
      subject: "English Language",
      experience: "14+ Years",
      specialization: "Literature & Communication Skills",
      avatar: <FaUser />
    },
    {
      id: 6,
      name: "Dr. Nazma Parveen",
      subject: "Bangla",
      experience: "11+ Years",
      specialization: "Bangla Literature & Creative Writing",
      avatar: <FaUser />
    },
    {
      id: 7,
      name: "Prof. Tariq Mahmood",
      subject: "Computer Science",
      experience: "9+ Years",
      specialization: "Programming & Web Development",
      avatar: <FaUser />
    },
    {
      id: 8,
      name: "Ms. Ayesha Siddiqua",
      subject: "General Science",
      experience: "7+ Years",
      specialization: "Integrated Science & STEM Education",
      avatar: <FaUser />
    }
  ];

  // Subject icons mapping
  const subjectIcons: { [key: string]: React.ReactNode } = {
    "Physics": <FaAtom />,
    "Chemistry": <FaFlask />,
    "Mathematics": <FaCalculator />,
    "Biology": <FaMicroscope />,
    "English Language": <FaGlobe />,
    "Bangla": <FaBook />,
    "Computer Science": <FaGraduationCap />,
    "General Science": <FaFlask />
  };

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
            <div 
              className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
            >
              <FaChalkboardTeacher size={40} />
            </div>
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Our Teaching Team
            </h1>
            <p className="text-xl md:text-2xl font-light opacity-95 max-w-3xl mx-auto">
              Meet our dedicated educators who are committed to nurturing academic excellence
            </p>
          </div>
        </section>

        {/* Team Overview */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ 
                  fontFamily: 'Playfair Display, serif',
                  color: 'var(--dark-charcoal)'
                }}
              >
                Excellence in Education
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our team of 11 experienced teachers brings together expertise across multiple disciplines, 
                ensuring comprehensive education for our students. Each educator is dedicated to fostering 
                critical thinking and academic growth.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
              <div className="text-center p-6 rounded-xl" style={{ backgroundColor: 'var(--light-violet)', boxShadow: 'var(--box-shadow)' }}>
                <div 
                  className="text-3xl font-bold mb-2"
                  style={{ color: 'var(--primary-violet)' }}
                >
                  11
                </div>
                <div className="text-gray-600 font-medium">Expert Teachers</div>
              </div>
              <div className="text-center p-6 rounded-xl" style={{ backgroundColor: 'var(--light-violet)', boxShadow: 'var(--box-shadow)' }}>
                <div 
                  className="text-3xl font-bold mb-2"
                  style={{ color: 'var(--primary-violet)' }}
                >
                  8+
                </div>
                <div className="text-gray-600 font-medium">Years Average Experience</div>
              </div>
              <div className="text-center p-6 rounded-xl" style={{ backgroundColor: 'var(--light-violet)', boxShadow: 'var(--box-shadow)' }}>
                <div 
                  className="text-3xl font-bold mb-2"
                  style={{ color: 'var(--primary-violet)' }}
                >
                  100%
                </div>
                <div className="text-gray-600 font-medium">Dedicated Faculty</div>
              </div>
              <div className="text-center p-6 rounded-xl" style={{ backgroundColor: 'var(--light-violet)', boxShadow: 'var(--box-shadow)' }}>
                <div 
                  className="text-3xl font-bold mb-2"
                  style={{ color: 'var(--primary-violet)' }}
                >
                  6
                </div>
                <div className="text-gray-600 font-medium">Days/Week Teaching</div>
              </div>
            </div>
          </div>
        </section>

        {/* Teachers Grid */}
        <section className="py-20" style={{ backgroundColor: 'var(--light-violet)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading 
              title="Meet Our Teachers"
              subtitle="Qualified educators passionate about student success"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {teachersData.map((teacher) => (
                <div 
                  key={teacher.id}
                  className="bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
                  style={{ boxShadow: 'var(--box-shadow)' }}
                >
                  {/* Avatar Section */}
                  <div 
                    className="p-8 text-center"
                    style={{ backgroundColor: 'var(--light-violet)' }}
                  >
                    <div 
                      className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4"
                      style={{ backgroundColor: 'var(--primary-violet)' }}
                    >
                      <div className="text-white text-2xl">
                        {teacher.avatar}
                      </div>
                    </div>
                    <h3 
                      className="text-xl font-bold mb-2"
                      style={{ 
                        fontFamily: 'Playfair Display, serif',
                        color: 'var(--dark-charcoal)'
                      }}
                    >
                      {teacher.name}
                    </h3>
                  </div>

                  {/* Details Section */}
                  <div className="p-6">
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <div style={{ color: 'var(--primary-violet)' }}>
                        {subjectIcons[teacher.subject] || <FaBook />}
                      </div>
                      <span 
                        className="font-semibold"
                        style={{ color: 'var(--primary-violet)' }}
                      >
                        {teacher.subject}
                      </span>
                    </div>
                    
                    <div className="text-center mb-3">
                      <div className="text-sm text-gray-600 mb-1">Experience</div>
                      <div 
                        className="font-medium"
                        style={{ color: 'var(--gold-amber)' }}
                      >
                        {teacher.experience}
                      </div>
                    </div>

                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-2">Specialization</div>
                      <div className="text-xs text-gray-700 leading-relaxed">
                        {teacher.specialization}
                      </div>
                    </div>

                    <div className="flex justify-center mt-4">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <FaStar key={star} className="text-sm" style={{ color: 'var(--gold-amber)' }} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Teaching Philosophy */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading 
              title="Our Teaching Philosophy"
              subtitle="The principles that guide our educational approach"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div 
                className="p-6 rounded-xl text-center"
                style={{ 
                  backgroundColor: 'var(--light-violet)',
                  boxShadow: 'var(--box-shadow)'
                }}
              >
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: 'var(--primary-violet)' }}
                >
                  <FaUser className="text-white text-2xl" />
                </div>
                <h4 
                  className="text-xl font-semibold mb-3"
                  style={{ 
                    fontFamily: 'Playfair Display, serif',
                    color: 'var(--dark-charcoal)'
                  }}
                >
                  Student-Centered
                </h4>
                <p className="text-gray-600">
                  We prioritize individual student needs and learning styles for personalized education.
                </p>
              </div>

              <div 
                className="p-6 rounded-xl text-center"
                style={{ 
                  backgroundColor: 'var(--light-violet)',
                  boxShadow: 'var(--box-shadow)'
                }}
              >
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: 'var(--primary-violet)' }}
                >
                  <FaAward className="text-white text-2xl" />
                </div>
                <h4 
                  className="text-xl font-semibold mb-3"
                  style={{ 
                    fontFamily: 'Playfair Display, serif',
                    color: 'var(--dark-charcoal)'
                  }}
                >
                  Excellence Driven
                </h4>
                <p className="text-gray-600">
                  We maintain high standards and continuously strive for academic and professional excellence.
                </p>
              </div>

              <div 
                className="p-6 rounded-xl text-center"
                style={{ 
                  backgroundColor: 'var(--light-violet)',
                  boxShadow: 'var(--box-shadow)'
                }}
              >
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: 'var(--primary-violet)' }}
                >
                  <FaGraduationCap className="text-white text-2xl" />
                </div>
                <h4 
                  className="text-xl font-semibold mb-3"
                  style={{ 
                    fontFamily: 'Playfair Display, serif',
                    color: 'var(--dark-charcoal)'
                  }}
                >
                  Innovation Focused
                </h4>
                <p className="text-gray-600">
                  We embrace modern teaching methods and technologies to enhance learning experiences.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Join Our Team */}
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
              Join Our Teaching Team
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              We are always looking for passionate educators who share our commitment to excellence. 
              If you have the expertise and dedication to shape young minds, we'd love to hear from you.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-violet-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              <FaChalkboardTeacher />
              Apply to Join Us
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingJoinButton />
    </div>
  );
}
