import { motion } from 'motion/react';
import { 
  Building, 
  Puzzle, 
  Briefcase, 
  Cpu, 
  Globe, 
  Rocket, 
  GraduationCap, 
  Wrench, 
  Brain, 
  Code2, 
  Mic2, 
  BadgeCheck, 
  Users, 
  TrendingUp, 
  TrendingDown, 
  Quote, 
  Compass, 
  Eye, 
  UserRound, 
  Scale, 
  MousePointer2, 
  Accessibility, 
  ArrowRight, 
  Calendar,
  Mail,
  Phone,
  Lightbulb,
  Layers,
  Award,
  Star
} from 'lucide-react';

import hereBg from "../assets/Hero-bg-about.png";

const Navbar = () => (
  <nav className="top-0 sticky z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md shadow-sm">
    <div className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4 w-full">
      <div className="flex items-center gap-3">
        <img 
          alt="Arambha Logo" 
          className="h-12 w-auto object-contain" 
          src="https://lh3.googleusercontent.com/aida/ADBb0ugAMJp6lNCmZK_6LwONPrXnbthRt5JZewc1cah6BGVdajZj6VSHfGXlwzMwpqdz3_lXEOcZN3v4ZFJajHdbOG5UjX3F_B496UuC-lb6726hs6ja9JlP_sKoxoSVERofGosoJy1L69fkjqa3B9Y7-9plaFIUV8rhxbFQ7YKqaD4UXLV9gYyGnTZR204pQWbGOBvPqjlGlLCRXsOLYXzzh9n9wfPqxrnV7B5ZQ5eK1GFXka7X3Vy4oyS6WSCJ57_ciVPGGB8R57gnCg" 
        />
        <div className="text-xl font-extrabold text-primary tracking-tighter font-display leading-none">
          Arambha<br/>
          <span className="text-secondary text-sm font-bold tracking-normal">Skill Solutions</span>
        </div>
      </div>
      <div className="hidden md:flex items-center space-x-8">
        <a className="font-display text-sm font-semibold tracking-tight text-on-surface-variant hover:text-primary transition-colors" href="#">Home</a>
        <a className="font-display text-sm font-semibold tracking-tight text-primary border-b-2 border-accent-gold pb-1" href="#">About</a>
        <a className="font-display text-sm font-semibold tracking-tight text-on-surface-variant hover:text-primary transition-colors" href="#">Programs</a>
        <a className="font-display text-sm font-semibold tracking-tight text-on-surface-variant hover:text-primary transition-colors" href="#">Services</a>
        <a className="font-display text-sm font-semibold tracking-tight text-on-surface-variant hover:text-primary transition-colors" href="#">Careers</a>
      </div>
      <div className="flex items-center space-x-4">
        <button className="hidden lg:block font-display text-sm font-semibold text-on-surface-variant hover:text-primary transition-all">Login</button>
        <button className="brand-gradient-gold text-white px-6 py-2.5 rounded-lg font-display text-sm font-semibold shadow-md hover:brightness-110 active:scale-95 transition-all">Book a Class</button>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section 
    className="relative min-h-[800px] flex items-center justify-center overflow-hidden px-6 bg-no-repeat" 
    style={{ 
      backgroundImage: `url(${hereBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}
  >
    <div className="relative z-10 max-w-5xl px-4 text-right">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="inline-block px-4 py-1.5 mb-6 rounded-full border border-accent-gold/40 bg-accent-gold/10 text-accent-gold font-semibold tracking-widest text-xs uppercase"
      >
        Our Legacy of Innovation & Transformation
      </motion.div>
      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-5xl md:text-display-xl font-serif mb-8 leading-tight tracking-tighter font-extrabold text-primary"
      >
        Empowering <span className="text-secondary font-display italic">Talent.</span> Igniting <span className="text-secondary font-display italic">Innovation.</span> Shaping Global <span className="text-secondary font-display italic">Futures.</span>
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-xl md:text-2xl max-w-3xl mb-16 leading-relaxed font-medium text-on-surface-variant ml-auto font-inter"
      >
        A Decade of Disruption, Growth & Transformational Impact. We are not just an institution; we are the bridge between potential and excellence.
      </motion.p>
      <div className="flex flex-wrap gap-12 md:gap-24 justify-end">
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }} className="flex flex-col items-center text-center">
          <span className="text-4xl md:text-5xl font-black font-display text-primary">50+</span>
          <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-accent-gold font-bold">Industry Programs</span>
        </motion.div>
        <div className="w-px h-16 hidden md:block bg-slate-300"></div>
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }} className="flex flex-col items-center text-center">
          <span className="text-4xl md:text-5xl font-black font-display text-primary">12K+</span>
          <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-accent-gold font-bold">Alumni Network</span>
        </motion.div>
        <div className="w-px h-16 hidden md:block bg-slate-300"></div>
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }} className="flex flex-col items-center text-center">
          <span className="text-4xl md:text-5xl font-black font-display text-primary">95%</span>
          <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-accent-gold font-bold">Placement Rate</span>
        </motion.div>
        <div className="w-px h-16 hidden md:block bg-slate-300"></div>
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.9 }} className="flex flex-col items-center text-center">
          <span className="text-4xl md:text-5xl font-black font-display text-primary">500+</span>
          <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-accent-gold font-bold">Strategic Partnerships</span>
        </motion.div>
        <div className="w-px h-16 hidden md:block bg-slate-300"></div>
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.0 }} className="flex flex-col items-center text-center">
          <span className="text-4xl md:text-5xl font-black font-display text-primary">100+</span>
          <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-accent-gold font-bold">Institutional Collaborations</span>
        </motion.div>
      </div>
    </div>
  </section>
);

const TimelineItem = ({ year, title, description, icon: Icon, subTitle, subDesc, align = 'right' }) => (
  <motion.div 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="relative grid grid-cols-1 md:grid-cols-2 gap-16 mb-32 items-center"
  >
    <div className={`${align === 'right' ? 'md:text-right' : 'md:order-2'}`}>
      <div className="inline-block px-4 py-1.5 bg-accent-gold/10 text-accent-gold font-bold text-sm rounded-lg mb-6">{year}</div>
      <h3 className="text-headline-md font-display mb-4 text-primary italic">{title}</h3>
      <p className="text-on-surface-variant leading-relaxed font-inter">{description}</p>
    </div>
    <div className={`relative ${align === 'right' ? '' : 'md:order-1'}`}>
      <div className={`absolute ${align === 'right' ? 'left-0 md:-left-[35px]' : 'right-0 md:-right-[35px]'} top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-accent-gold timeline-dot z-10 hidden md:block`}></div>
      <div className={`p-8 bg-surface rounded-xl border border-outline-variant hover-lift ${align === 'left' ? 'text-right' : ''}`}>
        <Icon className="text-4xl text-secondary mb-6 h-10 w-10" />
        <h4 className="font-bold text-title-lg mb-2 text-primary font-display italic">{subTitle}</h4>
        <p className="text-on-surface-variant font-inter">{subDesc}</p>
      </div>
    </div>
  </motion.div>
);

const Evolution = () => (
  <section className="py-32 bg-white relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-24">
        <h2 className="text-headline-lg font-display text-primary mb-4 italic">Our Evolution</h2>
        <p className="text-on-surface-variant max-w-lg mx-auto font-inter">Building the Future of Professional Excellence</p>
        <p className="text-on-surface-variant max-w-2xl mx-auto mt-4 font-inter">Explore the key milestones that have shaped Arambha into a global leader in education, technology, and talent mobility.</p>
      </div>
      <div className="relative">
        <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 timeline-line hidden md:block"></div>
        
        <TimelineItem 
          year="2015"
          title="Foundation"
          description="Launched with a mission to bridge the gap between education and industry through practical, learner-focused training. Built the foundation for scalable skill development."
          icon={Building}
          subTitle="Vision Rooted"
          subDesc="The start of a journey to bridge the industry-academia gap."
        />

        <TimelineItem 
          year="2017"
          title="Expansion"
          description="Expanded into holistic development with technical, soft skills, leadership, and internship programs. Reached thousands of learners across institutions."
          icon={Puzzle}
          subTitle="Holistic Growth"
          subDesc="Broadening horizons to encompass entire career paths."
          align="left"
        />

        <TimelineItem 
          year="2019"
          title="Job Placement Launch"
          description="Empowering Talent, Enabling Opportunities. Launched dedicated placement and recruitment solutions to support career outcomes."
          icon={Briefcase}
          subTitle="Career Outcomes"
          subDesc="Formalizing the bridge between skilled talent and top employers."
        />

        <TimelineItem 
          year="2021"
          title="IT Services Division"
          description="Driving Digital Transformation Through Innovation. Diversified into custom IT solutions to support businesses alongside workforce development."
          icon={Cpu}
          subTitle="Digital Innovation"
          subDesc="Extending expertise into the core of digital business operations."
          align="left"
        />

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32"
        >
          <div className="md:text-right">
            <div className="inline-block px-4 py-1.5 bg-accent-gold/10 text-accent-gold font-bold text-sm rounded-lg mb-6">2023</div>
            <h3 className="text-headline-md font-display mb-4 text-primary italic">Global Impact</h3>
            <p className="text-on-surface-variant leading-relaxed font-inter">Scaling Innovation Across Borders. Achieved significant milestones and expanded footprint globally.</p>
          </div>
          <div className="relative">
            <div className="absolute left-0 md:-left-[45px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full brand-gradient-gold text-white flex items-center justify-center border-4 border-white z-10 shadow-lg hidden md:flex">
              <Globe className="h-5 w-5" />
            </div>
            <div className="p-10 brand-gradient-navy rounded-2xl border border-white/10 shadow-2xl">
              <div className="flex flex-col items-center text-center text-white">
                <Rocket className="h-12 w-12 text-secondary mb-6" />
                <h4 className="text-2xl font-bold font-display mb-2 italic">Going Global</h4>
              </div>
            </div>
          </div>
        </motion.div>

        <TimelineItem 
          year="2025 & Beyond"
          title="The Future Ahead"
          description="Architecting the future of work through innovation-led growth. Focusing on AI-driven learning, EdTech product innovation, and global talent ecosystems."
          icon={TrendingUp}
          subTitle="Future-Ready Workforce"
          subDesc="Enabling Industry 5.0 readiness through advanced tech academies."
          align="left"
        />
      </div>
    </div>
  </section>
);

const FeatureCard = ({ icon: Icon, title, desc }) => (
  <motion.div 
    whileHover={{ y: -4 }}
    className="p-8 bg-white rounded-xl border border-outline-variant hover-lift text-center"
  >
    <Icon className="h-10 w-10 text-secondary mb-6 mx-auto" />
    <h4 className="font-bold text-sm mb-3 uppercase tracking-wider text-primary font-display">{title}</h4>
    <p className="text-sm text-on-surface-variant font-inter">{desc}</p>
  </motion.div>
);

const Differentiation = () => (
  <section className="py-32 bg-surface">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-display font-extrabold text-primary mb-6 leading-tight max-w-4xl mx-auto italic">
          Why Organizations & Learners Choose Arambha Skill Solutions
        </h2>
        <div className="h-1.5 w-20 bg-accent-gold mx-auto rounded-full"></div>
      </div>
        
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
        {[
          { 
            title: "Industry-Relevant Learning", 
            desc: "Programs aligned with real market needs.",
            icon: Code2
          },
          { 
            title: "Career-Focused Outcomes", 
            desc: "Training designed for employability.",
            icon: Briefcase
          },
          { 
            title: "Expert Mentorship", 
            desc: "Learn from professionals and practitioners.",
            icon: GraduationCap
          },
          { 
            title: "End-to-End Support", 
            desc: "From learning to placement.",
            icon: BadgeCheck
          },
          { 
            title: "Global Opportunities", 
            desc: "Preparing talent for the future workforce.",
            icon: Globe
          }
        ].map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group p-8 bg-white rounded-2xl border border-outline-variant hover:border-secondary transition-all hover:shadow-xl flex flex-col items-center text-center"
          >
            <div className="w-14 h-14 bg-surface rounded-xl flex items-center justify-center border border-outline-variant shadow-sm group-hover:bg-secondary/10 transition-colors mb-6">
              <item.icon className="h-7 w-7 text-secondary" />
            </div>
            <div className="font-inter">
              <h4 className="text-xl font-bold text-primary mb-3 font-display italic">{item.title}</h4>
              <p className="text-on-surface-variant leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Problem = () => (
  <section className="py-32 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-headline-lg font-display text-primary mb-12 leading-tight italic">The Communication Barrier We Address</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              { icon: Mic2, title: "Hesitation in Speaking", desc: "Knowledge exists, but words don't come out naturally." },
              { icon: BadgeCheck, title: "Interview Struggles", desc: "Failing to showcase your true value to recruiters." },
              { icon: Users, title: "Fear in Meetings", desc: "Staying silent while others take the professional lead." },
              { icon: TrendingDown, title: "Missed Career Growth", desc: "Slow growth despite having strong technical skills." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 bg-surface rounded-xl border-l-4 border-accent-gold"
              >
                <item.icon className="h-6 w-6 text-accent-gold mb-4" />
                <h4 className="font-bold mb-2 text-primary font-display italic">{item.title}</h4>
                <p className="text-sm text-on-surface-variant font-inter">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div 
          initial={{ opacity: 0, rotate: 5, scale: 0.95 }}
          whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute inset-0 bg-primary/5 rounded-3xl rotate-3"></div>
          <div className="relative bg-primary p-12 md:p-16 rounded-3xl text-white shadow-2xl border-l-8 border-accent-gold">
            <Users className="h-16 w-16 text-accent-gold mb-8 opacity-40" />
            <h3 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight font-display italic">
              Transformation Stories That Inspire
            </h3>
            <p className="text-xl text-slate-300 mb-8 font-inter leading-relaxed">
              Thousands of students and professionals have transformed their careers through our ecosystem.
            </p>
            <div className="pt-8 border-t border-white/10 flex items-center gap-5">
              <div className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center font-bold text-primary text-xl">
                <Rocket className="h-6 w-6" />
              </div>
              <div className="font-inter">
                <div className="text-base md:text-lg text-white font-medium leading-snug">From fresh graduates to experienced professionals — we help people unlock growth.</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const MissionVision = () => (
  <section className="py-32 bg-surface">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div 
          whileHover={{ y: -8 }}
          className="p-12 bg-white rounded-2xl shadow-sm border border-outline-variant"
        >
          <Compass className="h-12 w-12 text-secondary mb-8" />
          <h3 className="text-headline-md font-display mb-6 text-primary italic">Our Mission</h3>
          <p className="text-on-surface-variant text-lg leading-relaxed font-inter">
            To empower learners with confident English communication through structured practical training and consistent speaking practice, along with IT and non-IT skill development for the modern workforce.
          </p>
        </motion.div>
        <motion.div 
          whileHover={{ y: -8 }}
          className="p-12 bg-primary text-white rounded-2xl shadow-xl border-l-8 border-secondary"
        >
          <Eye className="h-12 w-12 text-secondary mb-8" />
          <h3 className="text-headline-md font-display mb-6 italic">Our Vision</h3>
          <p className="text-slate-300 text-lg leading-relaxed font-inter">
            To be recognized as one of the most trusted skill training institutes in Karnataka, setting benchmarks for quality education and career transformation that lasts a lifetime.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

const ValueItem = ({ icon: Icon, title }) => (
  <div className="text-center group">
    <div className="w-20 h-20 bg-surface rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-accent-gold/10 transition-all border border-outline-variant">
      <Icon className="h-8 w-8 text-primary group-hover:text-accent-gold transition-colors" />
    </div>
    <h4 className="font-bold font-display text-primary italic">{title}</h4>
  </div>
);

const Values = () => (
  <section className="py-32 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-24">
        <span className="text-secondary font-bold text-xs tracking-[0.3em] uppercase mb-4 block">Corporate Values</span>
        <h2 className="text-headline-lg font-display text-primary mb-4 italic">What Drives Us</h2>
        <div className="h-1.5 w-16 bg-accent-gold mx-auto rounded-full"></div>
      </div>

      <div className="relative flex flex-col items-center">
        {/* Connection Lines (Desktop Only) */}
        <div className="absolute inset-0 hidden lg:block pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1000 600" fill="none">
            <motion.path 
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.2 }}
              viewport={{ once: true }}
              d="M500 300 L250 150" 
              stroke="#D4AF37" 
              strokeWidth="2" 
              strokeDasharray="6 6" 
            />
            <motion.path 
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.2 }}
              viewport={{ once: true }}
              d="M500 300 L750 150" 
              stroke="#D4AF37" 
              strokeWidth="2" 
              strokeDasharray="6 6" 
            />
            <motion.path 
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.2 }}
              viewport={{ once: true }}
              d="M500 300 L200 320" 
              stroke="#D4AF37" 
              strokeWidth="2" 
              strokeDasharray="6 6" 
            />
            <motion.path 
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.2 }}
              viewport={{ once: true }}
              d="M500 300 L800 320" 
              stroke="#D4AF37" 
              strokeWidth="2" 
              strokeDasharray="6 6" 
            />
            <motion.path 
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.2 }}
              viewport={{ once: true }}
              d="M500 300 L500 480" 
              stroke="#D4AF37" 
              strokeWidth="2" 
              strokeDasharray="6 6" 
            />
          </svg>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-0 items-center justify-items-center w-full relative z-10">
          
          {/* Top Left: Innovation-Led */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="flex flex-row-reverse lg:flex-row items-center gap-6 lg:justify-end lg:text-right lg:-translate-x-12 lg:-translate-y-8"
          >
            <div className="font-inter">
              <h4 className="font-bold font-display text-primary text-xl italic">Innovation-Led</h4>
              <p className="text-sm text-on-surface-variant max-w-xs">Continuously evolving our methods to deliver modern, impactful training.</p>
            </div>
            <div className="w-16 h-16 bg-surface rounded-2xl flex items-center justify-center border border-outline-variant shadow-sm flex-shrink-0">
              <Lightbulb className="h-8 w-8 text-primary" />
            </div>
          </motion.div>

          <div className="hidden lg:block"></div>

          {/* Top Right: Collaborative */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-6 lg:translate-x-12 lg:-translate-y-8"
          >
            <div className="w-16 h-16 bg-surface rounded-2xl flex items-center justify-center border border-outline-variant shadow-sm flex-shrink-0">
              <Layers className="h-8 w-8 text-primary" />
            </div>
            <div className="font-inter">
              <h4 className="font-bold font-display text-primary text-xl italic">Collaborative</h4>
              <p className="text-sm text-on-surface-variant max-w-xs">Building success through teamwork and shared commitment to outcomes.</p>
            </div>
          </motion.div>

          {/* Middle Left: Excellence */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="flex flex-row-reverse lg:flex-row items-center gap-6 lg:justify-end lg:text-right lg:-translate-x-32"
          >
            <div className="font-inter">
              <h4 className="font-bold font-display text-primary text-xl italic">Excellence</h4>
              <p className="text-sm text-on-surface-variant max-w-xs">Striving for the highest quality in everything we do to transform lives.</p>
            </div>
            <div className="w-16 h-16 bg-surface rounded-2xl flex items-center justify-center border border-outline-variant shadow-sm flex-shrink-0">
              <Award className="h-8 w-8 text-primary" />
            </div>
          </motion.div>

          {/* Center Hub: Our Core Philosophy */}
          <div className="relative py-12 lg:py-0">
            <div className="absolute inset-0 bg-accent-gold/20 rounded-full blur-3xl animate-pulse"></div>
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="w-48 h-48 md:w-56 md:h-56 bg-primary rounded-full flex flex-col items-center justify-center text-center p-6 border-4 border-white shadow-2xl relative z-10"
            >
              <Star className="h-10 w-10 text-secondary mb-3 fill-secondary" />
              <div className="text-white font-bold font-display text-xl md:text-2xl leading-tight italic">Our Core Philosophy</div>
            </motion.div>
          </div>

          {/* Middle Right: Growth Mindset */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-6 lg:translate-x-32"
          >
            <div className="w-16 h-16 bg-surface rounded-2xl flex items-center justify-center border border-outline-variant shadow-sm flex-shrink-0">
              <TrendingUp className="h-8 w-8 text-primary" />
            </div>
            <div className="font-inter">
              <h4 className="font-bold font-display text-primary text-xl italic">Growth Mindset</h4>
              <p className="text-sm text-on-surface-variant max-w-xs">Embracing lifelong learning as the core driver for staff and students.</p>
            </div>
          </motion.div>

          <div className="hidden lg:block"></div>

          {/* Bottom Center: Global Vision, Local Impact */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center text-center gap-4 lg:col-start-2 lg:translate-y-12"
          >
            <div className="w-16 h-16 bg-surface rounded-2xl flex items-center justify-center border border-outline-variant shadow-sm flex-shrink-0">
              <Globe className="h-8 w-8 text-primary" />
            </div>
            <div className="font-inter">
              <h4 className="font-bold font-display text-primary text-xl italic">Global Vision, Local Impact</h4>
              <p className="text-sm text-on-surface-variant max-w-xs">Empowering local talent with world-standard skills to compete globally.</p>
            </div>
          </motion.div>

          <div className="hidden lg:block"></div>

        </div>
      </div>
    </div>
  </section>
);

const CTA = () => (
  <section className="py-32">
    <div className="max-w-7xl mx-auto px-6">
      <div className="brand-gradient-gold rounded-3xl p-12 lg:p-24 text-center relative overflow-hidden shadow-2xl">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_#ffffff,_transparent)]"></div>
        <div className="relative z-10">
          <h2 className="text-3xl md:text-headline-lg font-display font-extrabold text-primary mb-8 italic">Start Your Confidence Journey Today</h2>
          <p className="text-primary/80 max-w-2xl mx-auto mb-12 text-lg font-medium font-inter">
            Join structured live training sessions from anywhere in Karnataka. Transform your communication and career with Arambha's proven system.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-primary text-white px-10 py-4 rounded-xl font-bold font-display hover:brightness-110 transition-all shadow-xl flex items-center justify-center gap-2 group">
              View Programs <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="bg-white text-primary border-2 border-primary px-10 py-4 rounded-xl font-bold font-display hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
              Book Free Demo <Calendar className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-primary text-white border-t border-white/10 full-width relative overflow-hidden">
    <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden pointer-events-none opacity-30">
      <img 
        alt="ARAMBHA Background Text" 
        className="w-full h-full object-contain select-none" 
        src="https://lh3.googleusercontent.com/aida/ADBb0uh5x2tlJe8QlgjqBeZdz9P8z9UnNTRvzS7v39ahKVoNOQ_-jTyurn-WCNHyrXI0PtvaE7Hg2QnMDjdfAsTHwRo2B1c_jIhcPTS6H-_z-YUmxMOuK87RdBzpTRA3liSPzBwJUlX6QuNpo0YwoZkuFIFakPtnQapKEv9VLIp86_OKGwb_nMD09QIDWCa3DpXO8O5j-ul6xKjkzTGehI-WpIg6fpO7zZiBwDSO1xoLfzxuK8PqzzVGy-KcQC4FZVWoQLEROvru5U9k" 
      />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto px-8 py-20 relative z-10">
      <div className="col-span-1">
        <div className="text-xl font-bold text-accent-gold mb-8 font-display italic">Arambha Skill Solutions</div>
        <p className="text-sm text-slate-400 mb-8 leading-relaxed font-inter">
          Elevating professional mastery through visionary learning. Bridging the gap between student life and career success with academic excellence.
        </p>
        <div className="flex space-x-5">
          <Globe className="h-5 w-5 text-slate-400 cursor-pointer hover:text-accent-gold transition-colors" />
          <Mail className="h-5 w-5 text-slate-400 cursor-pointer hover:text-accent-gold transition-colors" />
          <Phone className="h-5 w-5 text-slate-400 cursor-pointer hover:text-accent-gold transition-colors" />
        </div>
      </div>
      <div>
        <h4 className="font-bold text-white mb-8 font-display italic">Programs</h4>
        <ul className="space-y-4">
          <li><a className="text-slate-400 hover:text-accent-gold transition-all text-sm font-inter" href="#">Higher Education</a></li>
          <li><a className="text-slate-400 hover:text-accent-gold transition-all text-sm font-inter" href="#">K-12 Solutions</a></li>
          <li><a className="text-slate-400 hover:text-accent-gold transition-all text-sm font-inter" href="#">Corporate Training</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold text-white mb-8 font-display italic">Company</h4>
        <ul className="space-y-4">
          <li><a className="text-accent-gold font-bold transition-all text-sm underline underline-offset-8 font-inter" href="#">About Us</a></li>
          <li><a className="text-slate-400 hover:text-accent-gold transition-all text-sm font-inter" href="#">Careers</a></li>
          <li><a className="text-slate-400 hover:text-accent-gold transition-all text-sm font-inter" href="#">Contact Us</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold text-white mb-8 font-display italic">Legal</h4>
        <ul className="space-y-4">
          <li><a className="text-slate-400 hover:text-accent-gold transition-all text-sm font-inter" href="#">Privacy Policy</a></li>
          <li><a className="text-slate-400 hover:text-accent-gold transition-all text-sm font-inter" href="#">Terms of Service</a></li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-8 py-8 border-t border-white/10 text-center text-xs text-slate-500 font-display tracking-widest relative z-10 uppercase">
      © 2024 Arambha Skill Solutions. Academic Excellence & Professional Growth.
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white text-primary font-inter">
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Lora:ital,wght@0,600;0,700;0,800;1,600;1,700&display=swap');

        :root {
          --font-sans: "Manrope", ui-sans-serif, system-ui, sans-serif;
          --font-display: "Lora", serif;
          --font-manrope: "Manrope", sans-serif;
          --font-inter: "Inter", sans-serif;

          --color-primary: #1B2B48;
          --color-secondary: #D4AF37;
          --color-accent-gold: #D4AF37;
          --color-navy-deep: #10192A;
          --color-surface: #f7f9fb;
          --color-on-surface-variant: #4B5563;
          --color-outline-variant: #E2E8F0;
          
          --text-primary: #1B2B48;
          --bg-primary: #1B2B48;
          --text-secondary: #D4AF37;
          --bg-secondary: #D4AF37;
        }

        .brand-gradient-navy {
          background: linear-gradient(135deg, #1B2B48 0%, #10192A 100%);
        }
        .brand-gradient-gold {
          background: linear-gradient(135deg, #D4AF37 0%, #B8860B 100%);
        }
        .hover-lift {
          transition: transform 0.2s ease-out, box-shadow 0.2s ease-out;
        }
        .hover-lift:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px -10px rgba(27, 43, 72, 0.1);
        }
        .timeline-line {
          background: #E2E8F0;
        }
        .timeline-dot {
          box-shadow: 0 0 0 4px white, 0 0 0 6px #D4AF37;
        }

        /* Essential mappings for when build-time processing is bypassed */
        .text-primary { color: var(--color-primary); }
        .bg-primary { background-color: var(--color-primary); }
        .text-secondary { color: var(--color-secondary); }
        .bg-secondary { background-color: var(--color-secondary); }
        .font-manrope { font-family: var(--font-manrope); }
        .font-display { font-family: var(--font-display); }
        .bg-surface { background-color: var(--color-surface); }
        .border-outline-variant { border-color: var(--color-outline-variant); }
        .text-on-surface-variant { color: var(--color-on-surface-variant); }
      `}} />
      <main>
        <Hero />
        <Evolution />
        <Differentiation />
        <Problem />
        <MissionVision />
        <Values />
        <CTA />
      </main>
    </div>
  );
}
