import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/SectionHeading';
import FloatingJoinButton from '@/components/FloatingJoinButton';
import { 
  FaTrophy, 
  FaCalendarAlt, 
  FaUsers,
  FaMicrosoft,
  FaNetworkWired,
  FaGraduationCap,
  FaAward,
  FaStar,
  FaRocket,
  FaMedal,
  FaCertificate,
  FaChalkboardTeacher,
  FaLightbulb,
  FaCode
} from 'react-icons/fa';

export default function Events() {
  // Featured Event - AgentX AI Championship
  const featuredEvent = {
    title: "AgentX AI Championship",
    description: "A groundbreaking nationwide competition that brought together the brightest minds from colleges and universities across Bangladesh to showcase their artificial intelligence and machine learning skills.",
    collaborators: ["Microsoft", "Netcom"],
    scope: "Nationwide — Colleges & Universities across Bangladesh",
    highlights: [
      "500+ Participants from 50+ Institutions",
      "Workshops by Industry Experts",
      "Real-world AI Problem Solving",
      "Prizes Worth BDT 100,000+",
      "Media Coverage and Recognition"
    ],
    outcomes: [
      "Students gained hands-on AI experience",
      "Industry connections established",
      "Career opportunities for winners",
      "Enhanced institute reputation"
    ]
  };

  // Partnership Logos (placeholder data)
  const partnerships = [
    { name: "Microsoft", icon: <FaMicrosoft size={48} /> },
    { name: "Netcom", icon: <FaNetworkWired size={48} /> },
    { name: "Education Board", icon: <FaGraduationCap size={48} /> },
    { name: "Tech Industry", icon: <FaRocket size={48} /> }
  ];

  // Future Events (placeholder)
  const futureEvents = [
    {
      title: "National Coding Competition 2024",
      date: "Coming Soon",
      description: "Annual coding competition for school and college students",
      icon: <FaCode />
    },
    {
      title: "Tech Career Fair",
      date: "Q4 2024",
      description: "Connect students with leading tech companies",
      icon: <FaUsers />
    },
    {
      title: "AI Workshop Series",
      date: "Monthly",
      description: "Hands-on workshops on emerging AI technologies",
      icon: <FaLightbulb />
    },
    {
      title: "Student Project Showcase",
      date: "Bi-annual",
      description: "Display of innovative student projects",
      icon: <FaRocket />
    }
  ];

  // Achievements
  const achievements = [
    {
      icon: <FaTrophy size={32} />,
      title: "Best Educational Institute 2023",
      description: "Recognized for excellence in technology education"
    },
    {
      icon: <FaMedal size={32} />,
      title: "1000+ Students Milestone",
      description: "Successfully served over 1000 students"
    },
    {
      icon: <FaCertificate size={32} />,
      title: "Microsoft Partnership",
      description: "Official partner for AI education programs"
    },
    {
      icon: <FaStar size={32} />,
      title: "Innovation in Education",
      description: "Awarded for innovative teaching methods"
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
              <FaTrophy size={40} />
            </div>
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Events & Achievements
            </h1>
            <p className="text-xl md:text-2xl font-light opacity-95 max-w-3xl mx-auto">
              Celebrating our milestones and showcasing the events that define our excellence
            </p>
          </div>
        </section>

        {/* Featured Event - AgentX AI Championship */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading 
              title="Featured Event"
              subtitle="AgentX AI Championship - Our Flagship Achievement"
            />
            <div 
              className="p-8 md:p-12 rounded-xl"
              style={{ 
                backgroundColor: 'var(--dark-charcoal)',
                boxShadow: 'var(--box-shadow)'
              }}
            >
              <div className="text-white">
                <div className="flex flex-col md:flex-row gap-8 mb-8">
                  <div className="flex-1">
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
                        {featuredEvent.title}
                      </h2>
                    </div>
                    <p className="text-lg mb-6 opacity-90 leading-relaxed">
                      {featuredEvent.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--gold-amber)' }}>
                      Collaborations
                    </h3>
                    <div className="flex flex-wrap gap-4 mb-6">
                      {featuredEvent.collaborators.map((collaborator, index) => (
                        <div key={index} className="flex items-center gap-2">
                          {collaborator === 'Microsoft' && <FaMicrosoft className="text-xl" style={{ color: 'var(--gold-amber)' }} />}
                          {collaborator === 'Netcom' && <FaNetworkWired className="text-xl" style={{ color: 'var(--gold-amber)' }} />}
                          <span className="font-medium">{collaborator}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-sm opacity-75">
                      {featuredEvent.scope}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--gold-amber)' }}>
                      Event Highlights
                    </h3>
                    <ul className="space-y-2">
                      {featuredEvent.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <FaStar className="mt-1 flex-shrink-0" style={{ color: 'var(--gold-amber)' }} />
                          <span className="text-sm">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="border-t border-gray-700 pt-8">
                  <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--gold-amber)' }}>
                    Key Outcomes
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {featuredEvent.outcomes.map((outcome, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <FaAward className="mt-1 flex-shrink-0" style={{ color: 'var(--gold-amber)' }} />
                        <span className="text-sm">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Logos */}
        <section className="py-20" style={{ backgroundColor: 'var(--light-violet)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading 
              title="Our Partners"
              subtitle="Collaborating with industry leaders for educational excellence"
            />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {partnerships.map((partner, index) => (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-xl text-center hover:shadow-xl transition-all duration-300"
                  style={{ boxShadow: 'var(--box-shadow)' }}
                >
                  <div style={{ color: 'var(--primary-violet)' }}>
                    {partner.icon}
                  </div>
                  <h4 className="mt-4 font-semibold" style={{ color: 'var(--dark-charcoal)' }}>
                    {partner.name}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading 
              title="Our Achievements"
              subtitle="Recognition and milestones that mark our journey"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-xl text-center hover:shadow-xl transition-all duration-300"
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
                      {achievement.icon}
                    </div>
                  </div>
                  <h4 
                    className="text-lg font-semibold mb-3"
                    style={{ 
                      fontFamily: 'Playfair Display, serif',
                      color: 'var(--dark-charcoal)'
                    }}
                  >
                    {achievement.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Future Events */}
        <section className="py-20" style={{ backgroundColor: 'var(--light-violet)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading 
              title="Upcoming Events"
              subtitle="Exciting events and programs planned for the future"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {futureEvents.map((event, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-xl hover:shadow-xl transition-all duration-300"
                  style={{ boxShadow: 'var(--box-shadow)' }}
                >
                  <div className="flex items-start gap-4">
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: 'var(--primary-violet)' }}
                    >
                      <FaCalendarAlt className="text-white" />
                    </div>
                    <div className="flex-grow">
                      <h4 
                        className="text-xl font-semibold mb-2"
                        style={{ 
                          fontFamily: 'Playfair Display, serif',
                          color: 'var(--dark-charcoal)'
                        }}
                      >
                        {event.title}
                      </h4>
                      <div 
                        className="text-sm font-medium mb-2"
                        style={{ color: 'var(--primary-violet)' }}
                      >
                        {event.date}
                      </div>
                      <p className="text-gray-600 text-sm">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
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
              Be Part of Our Next Success Story
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join us in creating more memorable events and achievements. 
              Whether you're a student, parent, or partner, there's a place for you at Lokkho Institute.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-violet-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                <FaUsers />
                Join Our Community
              </Link>
              <Link
                href="/teachers"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-violet-600 transition-all duration-200"
              >
                <FaChalkboardTeacher />
                Meet Our Team
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingJoinButton />
    </div>
  );
}
