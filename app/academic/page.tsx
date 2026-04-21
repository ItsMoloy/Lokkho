import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/SectionHeading';
import FloatingJoinButton from '@/components/FloatingJoinButton';
import { 
  FaGraduationCap, 
  FaBook, 
  FaFlask,
  FaCalculator,
  FaGlobe,
  FaAtom,
  FaMicroscope,
  FaChartLine,
  FaCheckCircle,
  FaAward,
  FaUsers,
  FaClock,
  FaStar
} from 'react-icons/fa';

export default function Academic() {
  // Class 6-8 Subjects
  const class6to8Subjects = [
    { name: "Mathematics", icon: <FaCalculator /> },
    { name: "Science", icon: <FaFlask /> },
    { name: "English", icon: <FaGlobe /> },
    { name: "Bangla", icon: <FaBook /> },
    { name: "Social Science", icon: <FaGlobe /> },
    { name: "Religious Studies", icon: <FaBook /> }
  ];

  // Class 9-12 Science Subjects
  const class9to12Subjects = [
    { name: "Physics", icon: <FaAtom /> },
    { name: "Chemistry", icon: <FaFlask /> },
    { name: "Biology", icon: <FaMicroscope /> },
    { name: "Mathematics", icon: <FaCalculator /> },
    { name: "English", icon: <FaGlobe /> },
    { name: "Bangla", icon: <FaBook /> }
  ];

  // Benefits
  const benefits = [
    "Expert teachers with subject specialization",
    "Comprehensive study materials and notes",
    "Regular assessments and progress tracking",
    "Individual attention and doubt clearing sessions",
    "Weekly exam system for continuous evaluation",
    "Parent-teacher meetings for holistic development",
    "Modern teaching methods and visual aids",
    "Affordable fee structure with flexible payment options"
  ];

  // Features
  const features = [
    {
      icon: <FaUsers size={32} />,
      title: "Small Batch Size",
      description: "Maximum 15 students per batch for personalized attention"
    },
    {
      icon: <FaClock size={32} />,
      title: "Flexible Timing",
      description: "Multiple batches available throughout the week"
    },
    {
      icon: <FaAward size={32} />,
      title: "Proven Results",
      description: "Consistent excellent performance in board exams"
    },
    {
      icon: <FaStar size={32} />,
      title: "Quality Education",
      description: "Focus on conceptual understanding, not just rote learning"
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
            <div 
              className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
            >
              <FaGraduationCap size={40} />
            </div>
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Academic Programs
            </h1>
            <p className="text-xl md:text-2xl font-light opacity-95 max-w-3xl mx-auto">
              Comprehensive academic coaching for Class 6-12 with expert guidance and proven results
            </p>
          </div>
        </section>

        {/* Programs Overview */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Class 6-8 Section */}
              <div 
                className="p-8 rounded-xl"
                style={{ 
                  backgroundColor: 'var(--light-violet)',
                  boxShadow: 'var(--box-shadow)'
                }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'var(--primary-violet)' }}
                  >
                    <FaBook className="text-white text-xl" />
                  </div>
                  <h3 
                    className="text-2xl font-bold"
                    style={{ 
                      fontFamily: 'Playfair Display, serif',
                      color: 'var(--dark-charcoal)'
                    }}
                  >
                    Class 6-8
                  </h3>
                </div>
                <h4 className="text-lg font-semibold mb-4 text-gray-700">General Subjects</h4>
                <p className="text-gray-600 mb-6">
                  Building strong foundations with comprehensive coverage of all major subjects. 
                  Our program focuses on conceptual clarity and developing analytical thinking skills.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {class6to8Subjects.map((subject, index) => (
                    <div key={index} className="flex items-center gap-2 bg-white p-3 rounded-lg">
                      <div style={{ color: 'var(--primary-violet)' }}>
                        {subject.icon}
                      </div>
                      <span className="text-sm font-medium">{subject.name}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
                  style={{ backgroundColor: 'var(--primary-violet)' }}
                >
                  Enroll Now
                </Link>
              </div>

              {/* Class 9-12 Section */}
              <div 
                className="p-8 rounded-xl"
                style={{ 
                  backgroundColor: 'var(--light-violet)',
                  boxShadow: 'var(--box-shadow)'
                }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'var(--primary-violet)' }}
                  >
                    <FaFlask className="text-white text-xl" />
                  </div>
                  <h3 
                    className="text-2xl font-bold"
                    style={{ 
                      fontFamily: 'Playfair Display, serif',
                      color: 'var(--dark-charcoal)'
                    }}
                  >
                    Class 9-12
                  </h3>
                </div>
                <h4 className="text-lg font-semibold mb-4 text-gray-700">Science Group</h4>
                <p className="text-gray-600 mb-6">
                  Advanced preparation for board examinations with specialized focus on Science subjects. 
                  Our rigorous curriculum ensures students are well-prepared for higher education.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {class9to12Subjects.map((subject, index) => (
                    <div key={index} className="flex items-center gap-2 bg-white p-3 rounded-lg">
                      <div style={{ color: 'var(--primary-violet)' }}>
                        {subject.icon}
                      </div>
                      <span className="text-sm font-medium">{subject.name}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
                  style={{ backgroundColor: 'var(--primary-violet)' }}
                >
                  Enroll Now
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Teaching Approach */}
        <section className="py-20" style={{ backgroundColor: 'var(--light-violet)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading 
              title="Our Teaching Approach"
              subtitle="Innovative methods that ensure effective learning and retention"
            />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl" style={{ boxShadow: 'var(--box-shadow)' }}>
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: 'var(--primary-violet)' }}
                >
                  <FaBook className="text-white" />
                </div>
                <h4 
                  className="text-xl font-semibold mb-3"
                  style={{ 
                    fontFamily: 'Playfair Display, serif',
                    color: 'var(--dark-charcoal)'
                  }}
                >
                  Concept-Based Learning
                </h4>
                <p className="text-gray-600">
                  Focus on understanding core concepts rather than memorization. 
                  Our teaching methodology emphasizes practical applications and real-world examples.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl" style={{ boxShadow: 'var(--box-shadow)' }}>
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: 'var(--primary-violet)' }}
                >
                  <FaUsers className="text-white" />
                </div>
                <h4 
                  className="text-xl font-semibold mb-3"
                  style={{ 
                    fontFamily: 'Playfair Display, serif',
                    color: 'var(--dark-charcoal)'
                  }}
                >
                  Interactive Sessions
                </h4>
                <p className="text-gray-600">
                  Encouraging student participation through discussions, Q&A sessions, 
                  and collaborative learning activities that enhance engagement.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl" style={{ boxShadow: 'var(--box-shadow)' }}>
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: 'var(--primary-violet)' }}
                >
                  <FaChartLine className="text-white" />
                </div>
                <h4 
                  className="text-xl font-semibold mb-3"
                  style={{ 
                    fontFamily: 'Playfair Display, serif',
                    color: 'var(--dark-charcoal)'
                  }}
                >
                  Continuous Assessment
                </h4>
                <p className="text-gray-600">
                  Regular evaluations and feedback to track progress and identify 
                  areas needing improvement, ensuring steady academic growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading 
              title="Why Choose Our Academic Programs"
              subtitle="Comprehensive benefits that ensure academic excellence"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <FaCheckCircle 
                    className="mt-1 flex-shrink-0"
                    style={{ color: 'var(--gold-amber)' }}
                  />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Weekly Exam System */}
        <section className="py-20">
          <div 
            className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
            style={{ 
              backgroundColor: 'var(--primary-violet)',
              borderRadius: 'var(--border-radius-card)'
            }}
          >
            <div className="text-center text-white">
              <div 
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
              >
                <FaAward size={40} />
              </div>
              <h2 
                className="text-3xl md:text-4xl font-bold mb-6"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Weekly Exam System
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
                Our comprehensive weekly examination system ensures continuous learning and preparation. 
                Every week, students undergo structured assessments that cover topics taught, 
                helping them stay ahead and build confidence for final examinations.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <div className="text-2xl font-bold mb-2">Every Week</div>
                  <div className="opacity-90">Regular assessments</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <div className="text-2xl font-bold mb-2">Detailed Feedback</div>
                  <div className="opacity-90">Performance analysis</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <div className="text-2xl font-bold mb-2">Progress Tracking</div>
                  <div className="opacity-90">Continuous improvement</div>
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-violet-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Learn More About Exam System
              </Link>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading 
              title="Additional Features"
              subtitle="More reasons to choose Lokkho for academic excellence"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="text-center p-6 rounded-xl hover:shadow-xl transition-all duration-300"
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
                  <h4 
                    className="text-lg font-semibold mb-3"
                    style={{ 
                      fontFamily: 'Playfair Display, serif',
                      color: 'var(--dark-charcoal)'
                    }}
                  >
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20" style={{ backgroundColor: 'var(--light-violet)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ 
                fontFamily: 'Playfair Display, serif',
                color: 'var(--dark-charcoal)'
              }}
            >
              Ready to Excel Academically?
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Join our academic programs and experience the difference that quality education can make. 
              Let us help you achieve your academic goals.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
              style={{ backgroundColor: 'var(--primary-violet)' }}
            >
              Enroll Today
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingJoinButton />
    </div>
  );
}
