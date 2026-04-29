import { motion } from "motion/react";
import { useState } from "react";
import { ArrowRight, BookOpen, GraduationCap, Users, CheckCircle2 } from "lucide-react";

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
import heroStudentsImg from "../assets/hero-students.png";

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
    <div className="w-full">
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
              <h1 className="text-5xl lg:text-7xl font-serif font-bold text-primary leading-[1.1] mb-6">
                Choose the Right Program to<br />
                <span className="text-accent-gold italic">Start Your Career Journey</span>
              </h1>
              <p className="text-lg text-text-muted mb-10 max-w-xl font-lora">
                Explore skill-based, career-focused programs designed to take you from learning to earning with confidence.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  className="bg-accent-gold hover:bg-accent-gold-dark text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-accent-gold/20 transition-all"
                  onClick={() => document.getElementById('programs-section')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Programs
                </button>
                <button className="border-2 border-primary text-primary px-8 py-4 rounded-xl font-bold hover:bg-primary/5 transition-all">
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
      <section id="programs-section" className="max-w-7xl mx-auto px-6 mb-20">
        <h2 className="text-center text-4xl font-serif text-primary font-bold mb-10">Explore Our Programs</h2>
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
      <div className="max-w-7xl mx-auto px-6">
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
      <section style={{ backgroundColor: '#D4AF37' }} className="py-24 mb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-white">Why Choose Arambha Programs?</h2>
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
                <h4 className="text-xl font-bold text-primary mb-3 leading-tight">{item.title}</h4>
                <p className="text-sm text-text-muted leading-relaxed font-lora">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <div className="bg-gradient-to-br from-accent-gold to-accent-gold-dark rounded-2xl p-8 lg:p-12 text-center relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[size:32px_32px]" />
          <div className="relative z-10">
            <h2 className="text-2xl lg:text-3xl font-serif text-primary font-bold mb-3">Start Your Career Journey Today</h2>
            <p className="text-sm text-primary/80 font-medium mb-7 font-lora">
              Unlock your potential with premium learning experiences designed for the modern workforce.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                className="bg-primary text-white px-7 py-3 rounded-xl font-bold hover:bg-black transition-all shadow-lg text-sm"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                View Programs
              </button>
              <button className="bg-white text-primary px-7 py-3 rounded-xl font-bold hover:bg-slate-50 transition-all border border-primary/10 shadow-lg text-sm">
                Book Free Demo
              </button>
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
        <h2 className="text-4xl lg:text-5xl font-serif font-bold inline-block" style={{ color: '#02367B' }}>{title}</h2>
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
              <h3 className="text-2xl font-bold text-primary mb-4 leading-tight group">
                <span className="title-accent">{program.title}</span>
              </h3>
              <p className="text-text-muted text-sm line-clamp-3 mb-8 font-lora leading-relaxed">
                {program.description}
              </p>
              <div className="mt-auto">
                <button className="flex items-center gap-2 px-5 py-2.5 bg-transparent border-2 border-accent-gold text-primary font-bold rounded-lg hover:bg-accent-gold hover:text-white transition-all group">
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
