import { motion } from "motion/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, GraduationCap, Users, CheckCircle2, Calendar } from "lucide-react";

// Import program images
import spokenEnglishImg from "../assets/programs/spoken-english-mastery.png";
import foundation60Img from "../assets/programs/foundation-60.png";
import digitalMarketingImg from "../assets/programs/digital-marketing-expert.png";
import campusToCorporateImg from "../assets/programs/campus-to-corporate.png";
import hrManagementImg from "../assets/programs/hr-management.png";
import bankingFinanceImg from "../assets/programs/banking-finance.png";
import fullStackJavaImg from "../assets/programs/full-stack-java.png";
import dataScienceImg from "../assets/programs/data-science-ai.png";
import autocadImg from "../assets/programs/autocad-design.png";
import heroStudentsImg from "../assets/careers/hero-students.png";

const CATEGORIES = ["All", "Spoken English", "Schooling", "BTech", "Graduate", "Job Ready"];

const PROGRAMS = [
  {
    id: 1,
    title: "Spoken English Mastery",
    category: "Spoken English",
    duration: "60 Days",
    color: "blue",
    description: "A structured Spoken English program designed to build fluency, confidence, pronunciation, and real-world communication skills.",
    image: spokenEnglishImg
  },
  {
    id: 2,
    title: "Foundation 60",
    category: "Schooling",
    duration: "60 Days",
    color: "orange",
    description: "A comprehensive 60-day program covering Communication, Soft Skills, Spoken English, and Computer Basics.",
    image: foundation60Img
  },
  {
    id: 3,
    title: "Digital Marketing Expert",
    category: "Graduate",
    duration: "3 Months",
    color: "green",
    description: "Master SEO, SEM, Social Media, and Content Marketing with industry tools and real projects.",
    image: digitalMarketingImg
  },
  {
    id: 4,
    title: "Campus to Corporate Program",
    category: "Job Ready",
    duration: "45 Days",
    color: "gold",
    description: "Intensive preparation program with mock interviews, resume building, and aptitude training for smooth career transitions.",
    image: campusToCorporateImg
  },
  {
    id: 5,
    title: "Human Resource Management",
    category: "Graduate",
    duration: "3 Months",
    color: "green",
    description: "Learn recruitment, payroll, and organizational management with practical case studies.",
    image: hrManagementImg
  },
  {
    id: 6,
    title: "Banking & Finance Masterclass",
    category: "Graduate",
    duration: "3 Months",
    color: "green",
    description: "Comprehensive training in Tally, GST, Advanced Excel, and Banking operations.",
    image: bankingFinanceImg
  },
  {
    id: 7,
    title: "Full Stack Java Developer",
    category: "BTech",
    duration: "6 Months",
    color: "purple",
    description: "Master Java, Spring Boot, React, and MySQL to become a complete Full Stack Developer.",
    image: fullStackJavaImg
  },
  {
    id: 8,
    title: "Data Science & AI",
    category: "BTech",
    duration: "6 Months",
    color: "purple",
    description: "Learn Python, Machine Learning, and Deep Learning to build AI-powered applications.",
    image: dataScienceImg
  },
  {
    id: 9,
    title: "AutoCAD Design",
    category: "BTech",
    duration: "3 Months",
    color: "purple",
    description: "Professional AutoCAD training for Civil and Mechanical students with real design projects.",
    image: autocadImg
  }
];

const WHY_CHOOSE_US = [
  {
    title: "Industry-aligned curriculum",
    desc: "Course content updated weekly to reflect current market demands and technology shifts.",
    icon: <BookOpen className="w-8 h-8" />
  },
  {
    title: "Practical training",
    desc: "70% project-based learning with real-world case studies and hands-on workshops.",
    icon: <GraduationCap className="w-8 h-8" />
  },
  {
    title: "Placement support",
    desc: "Dedicated career desk helping you with mocks, portfolio building, and job referrals.",
    icon: <CheckCircle2 className="w-8 h-8" />
  },
  {
    title: "Experienced mentors",
    desc: "Learn directly from practitioners who have spent decades in the corporate world.",
    icon: <Users className="w-8 h-8" />
  }
];

export default function ProgramsScreen() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPrograms = selectedCategory === "All"
    ? PROGRAMS
    : PROGRAMS.filter(program => program.category === selectedCategory);

  return (
    <div className="w-full font-sans">
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Lora:ital,wght@0,600;0,700;0,800;1,600;1,700&display=swap');

        :root {
          --font-sans: "Manrope", ui-sans-serif, system-ui, sans-serif;
          --font-serif: "Lora", serif;
        }

        .font-serif {
          font-family: var(--font-serif), serif;
        }

        .font-sans {
          font-family: var(--font-sans), sans-serif;
        }
      `}} />
      {/* Hero Section */}
      <section className="relative pt-16 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex-1 text-left"
            >
              <h1 className="text-5xl lg:text-7xl font-serif font-bold text-primary leading-[1.1] mb-6 italic">
                Choose the Right Program to<br />
                <span className="text-accent-gold">Start Your Career Journey</span>
              </h1>
              <p className="text-lg text-text-muted mb-10 max-w-xl font-sans">
                Explore skill-based, career-focused programs designed to take you from learning to earning with confidence.
              </p>
              <div className="flex flex-wrap gap-4 font-sans">
                <button
                  className="bg-accent-gold hover:bg-accent-gold-dark text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-accent-gold/20 transition-all font-serif italic"
                  onClick={() => document.getElementById('programs-section')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Programs
                </button>
                <button className="border-2 border-primary text-primary px-8 py-4 rounded-xl font-bold hover:bg-primary/5 transition-all font-serif italic">
                  Book a Free Class
                </button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex-1 relative"
            >
              {/* <img
                src={heroStudentsImg}
                alt="Students learning"
                className="w-full lg:w-[140%] h-auto mt-20 lg:-ml-5 -ml-5 border-none shadow-none [mask-image:linear-gradient(90deg,transparent_0%,black_12%,black_88%,transparent_100%)]"
              /> */}


              <img
  src={heroStudentsImg}
  alt="Students learning"
  className="
    w-[130%] lg:w-[150%]
    max-w-none
    h-auto
    mt-10 lg:mt-0
    -ml-10 lg:-ml-10
    -mr-10
    border-none shadow-none
    object-contain
  "
/>


            </motion.div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section id="programs-section" className="max-w-7xl mx-auto px-6 mb-20 font-sans">
        <h2 className="text-center text-4xl font-serif text-primary font-bold mb-10 italic">Explore Our Programs</h2>
        <div className="bg-white border-2 border-accent-gold p-2 rounded-2xl flex flex-wrap justify-between md:justify-center gap-2 shadow-lg max-w-3xl mx-auto">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
                selectedCategory === cat ? "bg-primary text-white" : "bg-transparent text-text-muted hover:bg-accent-gold/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Program Sections */}
      <div className="max-w-7xl mx-auto px-6 font-sans">
        {selectedCategory === "All" ? (
          <>
            <ProgramSection
              title="Foundational & Communication Skills"
              programs={PROGRAMS.slice(0, 3)}
            />
            <ProgramSection
              title="Career & Job-Ready Programs"
              programs={PROGRAMS.slice(3, 6)}
            />
            <ProgramSection
              title="Technical & Professional Programs"
              programs={PROGRAMS.slice(6, 9)}
            />
          </>
        ) : (
          <ProgramSection
            title={`${selectedCategory} Programs`}
            programs={filteredPrograms}
          />
        )}
      </div>

      {/* Why Choose Us */}
      <section style={{ backgroundColor: '#D4AF37' }} className="py-24 mb-20 font-sans">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-white italic">Why Choose Arambha Programs?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {WHY_CHOOSE_US.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-primary/5 text-center"
              >
                <div className="w-16 h-16 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 transform rotate-3" style={{ backgroundColor: '#006CA5' }}>
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-primary mb-3 leading-tight font-serif italic">{item.title}</h4>
                <p className="text-sm text-text-muted leading-relaxed font-sans">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="brand-gradient-gold rounded-3xl p-12 lg:p-24 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_#ffffff,_transparent)]"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-headline-lg font-serif font-extrabold text-primary mb-8 italic">Start Your Confidence Journey Today</h2>
              <p className="text-primary/80 max-w-2xl mx-auto mb-12 text-lg font-medium font-sans">
                Join structured live training sessions from anywhere in Karnataka. Transform your communication and career with Arambha's proven system.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center font-serif italic">
                <Link to="/careers" className="bg-primary text-white px-10 py-4 rounded-xl font-bold hover:brightness-110 transition-all shadow-xl flex items-center justify-center gap-2 group text-lg">
                  View Careers <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <button className="bg-white text-primary border-2 border-primary px-10 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-2 text-lg">
                  Book Free Demo <Calendar className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ProgramSection({ title, programs }: { title: string, programs: typeof PROGRAMS }) {
  return (
    <section className="mb-20">
      <div className="text-center mb-2">
        <h2 className="text-4xl lg:text-5xl font-serif font-bold inline-block italic" style={{ color: '#02367B' }}>{title}</h2>
        <div className="mx-auto mt-3 h-1 w-16 rounded-full" style={{ backgroundColor: '#D4AF37' }}></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
        {programs.map((program, i) => (
          <motion.div
            key={program.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-transparent border-2 rounded-3xl overflow-hidden flex flex-col transition-all hover:-translate-y-2 hover:shadow-xl"
            style={{ borderColor: '#006CA5' }}
          >
            <div className="h-60 overflow-hidden">
              <img src={program.image} alt={program.title} className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="p-8 flex-grow flex flex-col">
              <h3 className="text-2xl font-bold text-primary mb-4 leading-tight group font-serif italic">
                <span className="title-accent">{program.title}</span>
              </h3>
              <p className="text-text-muted text-sm line-clamp-3 mb-8 font-sans leading-relaxed">
                {program.description}
              </p>
              <div className="mt-auto">
                <button className="flex items-center gap-2 px-5 py-2.5 bg-transparent border-2 border-accent-gold text-primary font-bold rounded-lg hover:bg-accent-gold hover:text-white transition-all group font-serif italic">
                  Enroll Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function getBadgeColor(color: string) {
  switch (color) {
    case 'blue': return 'bg-blue-50 text-blue-700 border border-blue-200';
    case 'orange': return 'bg-orange-50 text-orange-700 border border-orange-200';
    case 'green': return 'bg-green-50 text-green-700 border border-green-200';
    case 'purple': return 'bg-purple-50 text-purple-700 border border-purple-200';
    case 'gold': return 'bg-yellow-50 text-yellow-700 border border-yellow-200';
    default: return 'bg-slate-50 text-slate-700 border border-slate-200';
  }
}
