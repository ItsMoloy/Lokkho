import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/SectionHeading';
import StatCard from '@/components/StatCard';
import StepCard from '@/components/StepCard';
import FloatingJoinButton from '@/components/FloatingJoinButton';
import { 
  FaChalkboardTeacher, 
  FaBook, 
  FaLaptopCode, 
  FaClipboardCheck, 
  FaAward,
  FaGraduationCap,
  FaUsers,
  FaClock,
  FaStar,
  FaRocket,
  FaHeart,
  FaCamera,
  FaImage,
  FaTrophy,
  FaCertificate,
  FaCheckCircle
} from 'react-icons/fa';

export default function Home() {
  // Learning System Steps Data
  const learningSteps = [
    {
      stepNumber: 1,
      title: "Structured Classes",
      description: [
        "Daily interactive sessions",
        "Expert-led instruction", 
        "Comprehensive subject coverage"
      ],
      icon: <FaChalkboardTeacher size={24} />
    },
    {
      stepNumber: 2,
      title: "Individual Notes",
      description: [
        "Personalized study materials",
        "Easy-to-understand content",
        "Regular updates and improvements"
      ],
      icon: <FaBook size={24} />
    },
    {
      stepNumber: 3,
      title: "Practical Learning",
      description: [
        "Hands-on exercises",
        "Real-world applications",
        "Interactive problem solving"
      ],
      icon: <FaLaptopCode size={24} />
    },
    {
      stepNumber: 4,
      title: "Weekly Exam",
      description: [
        "Regular assessments",
        "Performance tracking",
        "Identify improvement areas"
      ],
      icon: <FaClipboardCheck size={24} />
    },
    {
      stepNumber: 5,
      title: "Evaluation",
      description: [
        "Detailed feedback",
        "Progress reports",
        "Parent-teacher meetings"
      ],
      icon: <FaAward size={24} />
    }
  ];

  // Features Data
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

  // Gallery Items
  const galleryItems = [
    { title: "Class Photos", icon: <FaCamera size={24} /> },
    { title: "Exam Moments", icon: <FaClipboardCheck size={24} /> },
    { title: "Lab Work", icon: <FaLaptopCode size={24} /> },
    { title: "AgentX Event", icon: <FaTrophy size={24} /> },
    { title: "Achievements", icon: <FaAward size={24} /> },
    { title: "Certification", icon: <FaCertificate size={24} /> }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(/cover.jpg)' }}
          />
          {/* Gradient Overlay */}
          <div 
            className="absolute inset-0"
            style={{ 
              background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.85) 0%, rgba(236, 72, 153, 0.85) 100%)'
            }}
          />
          <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Lokkho Academic and 
              <br />
              IT Institute
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-light opacity-95">
              Where Knowledge Meets Technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/academic"
                className="px-8 py-4 glass-effect text-purple-700 rounded-lg font-semibold hover:scale-105 transition-all duration-200"
              >
                Explore Programs
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 glass-effect text-white rounded-lg font-semibold hover:bg-white hover:text-purple-700 transition-all duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* Our Learning System */}
        <section className="py-20" style={{ backgroundColor: 'var(--light-purple)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading 
              title="Our Learning System"
              subtitle="A comprehensive 5-step approach to ensure academic excellence and practical skill development"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {learningSteps.map((step) => (
                <StepCard
                  key={step.stepNumber}
                  stepNumber={step.stepNumber}
                  title={step.title}
                  description={step.description}
                  icon={step.icon}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Our Impact Stats */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading 
              title="Our Impact"
              subtitle="Numbers that reflect our commitment to education excellence"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard end={1000} suffix="+" label="Students Served" />
              <StatCard end={200} suffix="+" label="Active Students" />
              <StatCard end={11} label="Experienced Teachers" />
              <StatCard end={6} label="Days/Week Classes" />
            </div>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="py-20" style={{ backgroundColor: 'var(--light-purple)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading 
              title="What Makes Us Different"
              subtitle="Discover the unique advantages that set us apart"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-xl text-center hover:shadow-xl transition-all duration-300"
                  style={{ boxShadow: 'var(--box-shadow)' }}
                >
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: 'var(--light-purple)' }}
                  >
                    <div style={{ color: 'var(--primary-purple)' }}>
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

        {/* Our Services */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading 
              title="Our Services"
              subtitle="Comprehensive educational solutions for academic and technological excellence"
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Academic Coaching */}
              <div className="glass-card modern-card p-8 rounded-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center gradient-purple-magenta">
                    <FaGraduationCap className="text-white text-xl" />
                  </div>
                  <h3 
                    className="text-2xl font-bold"
                    style={{ 
                      fontFamily: 'Playfair Display, serif',
                      color: 'var(--dark-charcoal)'
                    }}
                  >
                    Academic Coaching
                  </h3>
                </div>
                <p className="text-gray-700 mb-6">
                  Comprehensive academic support for Class 6-12 students with expert guidance 
                  in all major subjects. Our structured approach ensures conceptual clarity 
                  and academic excellence.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <FaCheckCircle style={{ color: 'var(--accent-orange)' }} />
                    <span>Class 6-8: All Subjects</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheckCircle style={{ color: 'var(--accent-orange)' }} />
                    <span>Class 9-12: Science Group</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheckCircle style={{ color: 'var(--accent-orange)' }} />
                    <span>Weekly Exam System</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheckCircle style={{ color: 'var(--accent-orange)' }} />
                    <span>Individual Attention</span>
                  </li>
                </ul>
                <Link
                  href="/academic"
                  className="inline-flex items-center gap-2 px-6 py-3 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-200 gradient-purple-magenta"
                >
                  Learn More
                  <FaRocket />
                </Link>
              </div>

              {/* IT Training */}
              <div className="glass-card modern-card p-8 rounded-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center gradient-purple-magenta">
                    <FaLaptopCode className="text-white text-xl" />
                  </div>
                  <h3 
                    className="text-2xl font-bold"
                    style={{ 
                      fontFamily: 'Playfair Display, serif',
                      color: 'var(--dark-charcoal)'
                    }}
                  >
                    IT Training
                  </h3>
                </div>
                <p className="text-gray-700 mb-6">
                  Cutting-edge technology training programs designed to prepare students 
                  for the digital future. From web development to AI technologies, we cover 
                  it all with hands-on practical experience.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <FaCheckCircle style={{ color: 'var(--accent-orange)' }} />
                    <span>Web Development</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheckCircle style={{ color: 'var(--accent-orange)' }} />
                    <span>AI & Technology</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheckCircle style={{ color: 'var(--accent-orange)' }} />
                    <span>Digital Skills</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheckCircle style={{ color: 'var(--accent-orange)' }} />
                    <span>Practical Projects</span>
                  </li>
                </ul>
                <Link
                  href="/it-training"
                  className="inline-flex items-center gap-2 px-6 py-3 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-200 gradient-purple-magenta"
                >
                  Learn More
                  <FaRocket />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-20" style={{ backgroundColor: 'var(--light-purple)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading 
              title="Our Journey in Pictures"
              subtitle="Glimpses of our educational excellence and student achievements"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryItems.map((item, index) => (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-xl text-center hover:shadow-xl transition-all duration-300 cursor-pointer"
                  style={{ boxShadow: 'var(--box-shadow)' }}
                >
                  <div 
                    className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: 'var(--light-purple)' }}
                  >
                    <div style={{ color: 'var(--primary-purple)' }}>
                      {item.icon}
                    </div>
                  </div>
                  <h3 
                    className="text-lg font-semibold"
                    style={{ 
                      fontFamily: 'Playfair Display, serif',
                      color: 'var(--dark-charcoal)'
                    }}
                  >
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Banner */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center gradient-purple-magenta rounded-xl" style={{ borderRadius: 'var(--border-radius-card)' }}>
            <h2 
              className="text-3xl md:text-4xl font-bold mb-6 text-white"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Ready to Join?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Take the first step towards academic excellence and technological mastery. 
              Join our community of successful learners today.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 glass-effect text-purple-700 rounded-lg font-semibold hover:scale-105 transition-all duration-200"
            >
              <FaHeart />
              Enroll Now
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingJoinButton />
    </div>
  );
}
