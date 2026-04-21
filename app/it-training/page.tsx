import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/SectionHeading';
import FloatingJoinButton from '@/components/FloatingJoinButton';
import { 
  FaLaptopCode, 
  FaRobot, 
  FaPalette,
  FaMobileAlt,
  FaDatabase,
  FaCloud,
  FaShieldAlt,
  FaChartLine,
  FaCheckCircle,
  FaAward,
  FaUsers,
  FaClock,
  FaStar,
  FaTrophy,
  FaMicrosoft,
  FaNetworkWired,
  FaGraduationCap
} from 'react-icons/fa';

export default function ITTraining() {
  // Courses Data
  const courses = [
    {
      category: "Web Development",
      icon: <FaLaptopCode size={32} />,
      color: "var(--primary-violet)",
      courses: [
        "HTML5 & CSS3 Fundamentals",
        "JavaScript & ES6+",
        "React.js & Next.js",
        "Node.js & Express.js",
        "MongoDB & Database Design",
        "Responsive Web Design"
      ]
    },
    {
      category: "AI & Technology",
      icon: <FaRobot size={32} />,
      color: "var(--primary-violet)",
      courses: [
        "Python Programming",
        "Machine Learning Basics",
        "Data Science Fundamentals",
        "Neural Networks & Deep Learning",
        "AI Ethics & Applications",
        "Computer Vision Basics"
      ]
    },
    {
      category: "Digital Skills",
      icon: <FaPalette size={32} />,
      color: "var(--primary-violet)",
      courses: [
        "Graphic Design with Canva",
        "Video Editing Basics",
        "Social Media Marketing",
        "Content Creation",
        "Digital Literacy",
        "Office Productivity Tools"
      ]
    }
  ];

  // Why Choose Us
  const whyChooseUs = [
    {
      icon: <FaUsers size={32} />,
      title: "Expert Instructors",
      description: "Industry professionals with real-world experience"
    },
    {
      icon: <FaLaptopCode size={32} />,
      title: "Hands-on Training",
      description: "Practical projects and real-world applications"
    },
    {
      icon: <FaClock size={32} />,
      title: "Flexible Schedule",
      description: "Weekend and weekday batches available"
    },
    {
      icon: <FaAward size={32} />,
      title: "Certification",
      description: "Industry-recognized certificates upon completion"
    }
  ];

  // Benefits
  const benefits = [
    "Practical, project-based learning approach",
    "Industry-relevant curriculum updated regularly",
    "Small batch sizes for personalized attention",
    "Lifetime access to course materials",
    "Career guidance and job placement support",
    "Affordable fees with easy payment options",
    "Modern computer lab with high-speed internet",
    "Guest lectures from industry experts"
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
              <FaLaptopCode size={40} />
            </div>
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              IT Training Programs
            </h1>
            <p className="text-xl md:text-2xl font-light opacity-95 max-w-3xl mx-auto">
              Master cutting-edge technologies and launch your career in the digital world
            </p>
          </div>
        </section>

        {/* Courses Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading 
              title="Our Courses"
              subtitle="Comprehensive training programs designed for the modern tech industry"
            />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {courses.map((courseCategory, index) => (
                <div 
                  key={index}
                  className="p-8 rounded-xl hover:shadow-xl transition-all duration-300"
                  style={{ 
                    backgroundColor: 'var(--light-violet)',
                    boxShadow: 'var(--box-shadow)'
                  }}
                >
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                    style={{ backgroundColor: courseCategory.color }}
                  >
                    <div className="text-white">
                      {courseCategory.icon}
                    </div>
                  </div>
                  <h3 
                    className="text-2xl font-bold mb-6 text-center"
                    style={{ 
                      fontFamily: 'Playfair Display, serif',
                      color: 'var(--dark-charcoal)'
                    }}
                  >
                    {courseCategory.category}
                  </h3>
                  <ul className="space-y-3">
                    {courseCategory.courses.map((course, courseIndex) => (
                      <li key={courseIndex} className="flex items-start gap-2">
                        <FaCheckCircle 
                          className="mt-1 flex-shrink-0"
                          style={{ color: 'var(--gold-amber)' }}
                        />
                        <span className="text-gray-700 text-sm">{course}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="w-full mt-6 inline-flex items-center justify-center gap-2 px-6 py-3 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
                    style={{ backgroundColor: courseCategory.color }}
                  >
                    Enroll Now
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20" style={{ backgroundColor: 'var(--light-violet)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading 
              title="Why Choose Our IT Training"
              subtitle="Experience the difference with our comprehensive approach"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-xl text-center hover:shadow-xl transition-all duration-300"
                  style={{ boxShadow: 'var(--box-shadow)' }}
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

        {/* AgentX AI Championship */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div 
              className="p-8 md:p-12 rounded-xl text-white"
              style={{ 
                backgroundColor: 'var(--dark-charcoal)',
                boxShadow: 'var(--box-shadow)'
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: 'var(--gold-amber)' }}
                    >
                      <FaTrophy className="text-white text-2xl" />
                    </div>
                    <h2 
                      className="text-3xl md:text-4xl font-bold"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      AgentX AI Championship
                    </h2>
                  </div>
                  <p className="text-lg mb-6 opacity-90">
                    We proudly organized the nationwide AgentX AI Championship, 
                    a groundbreaking competition that brought together students from 
                    colleges and universities across Bangladesh.
                  </p>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3">
                      <FaMicrosoft className="text-2xl" style={{ color: 'var(--gold-amber)' }} />
                      <span className="font-medium">Collaborated with Microsoft</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaNetworkWired className="text-2xl" style={{ color: 'var(--gold-amber)' }} />
                      <span className="font-medium">Partnership with Netcom</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaGraduationCap className="text-2xl" style={{ color: 'var(--gold-amber)' }} />
                      <span className="font-medium">Nationwide Participation</span>
                    </div>
                  </div>
                  <Link
                    href="/events"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg"
                    style={{ 
                      backgroundColor: 'var(--gold-amber)',
                      color: 'var(--dark-charcoal)'
                    }}
                  >
                    Learn More About Event
                  </Link>
                </div>
                <div className="text-center">
                  <div 
                    className="w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-6"
                    style={{ 
                      backgroundColor: 'var(--gold-amber)',
                      boxShadow: '0 0 40px rgba(245, 158, 11, 0.3)'
                    }}
                  >
                    <FaRobot className="text-white text-4xl" />
                  </div>
                  <h3 
                    className="text-2xl font-bold mb-4"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    AI Excellence
                  </h3>
                  <p className="opacity-90">
                    Showcasing our commitment to cutting-edge technology education 
                    and innovation in artificial intelligence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading 
              title="Program Benefits"
              subtitle="Comprehensive advantages that accelerate your tech career"
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

        {/* Learning Path */}
        <section className="py-20" style={{ backgroundColor: 'var(--light-violet)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading 
              title="Your Learning Path"
              subtitle="A structured journey from beginner to professional"
            />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Foundation", desc: "Learn the basics and build strong fundamentals" },
                { step: "2", title: "Practice", desc: "Hands-on projects and real-world applications" },
                { step: "3", title: "Advanced", desc: "Master complex concepts and technologies" },
                { step: "4", title: "Career", desc: "Job placement and career guidance" }
              ].map((path, index) => (
                <div key={index} className="text-center">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold"
                    style={{ backgroundColor: 'var(--primary-violet)' }}
                  >
                    {path.step}
                  </div>
                  <h4 
                    className="text-lg font-semibold mb-2"
                    style={{ 
                      fontFamily: 'Playfair Display, serif',
                      color: 'var(--dark-charcoal)'
                    }}
                  >
                    {path.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {path.desc}
                  </p>
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
              Ready to Start Your Tech Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join our IT training programs and acquire the skills that employers are looking for. 
              Your tech career starts here at Lokkho Institute.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-violet-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Start Learning Today
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingJoinButton />
    </div>
  );
}
