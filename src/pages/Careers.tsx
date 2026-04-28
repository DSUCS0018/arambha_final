/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  MapPin, 
  X, 
  ChevronDown, 
  Briefcase, 
  Clock, 
  IndianRupee 
} from 'lucide-react';

import logo from "../assets/ALogo.png";
import heroStudentsImg from "../assets/hero-students.png";

// --- Theme Constants ---
const COLORS = {
  white: '#FFFFFF',
  black: '#000000',
  brandGray: '#F9FAFB', // Background
  brandGold: '#D4AF37', // Gold accent
  brandGoldDark: '#B8962E',
  navy: '#1B2B48',      // Background hover color
  darkText: '#111827',  // Primary text
  grayText: '#6B7280',  // Secondary text
  borderColor: '#E5E7EB',
  inputBg: '#FFFFFF',
};

const SHADOWS = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  soft: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  card: '0 10px 25px rgba(0,0,0,0.05)',
  modal: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
};

// --- Types ---
interface Job {
  id: string;
  title: string;
  category: string;
  location: string;
  experience: string;
  salary: string;
  description: string;
  postedAt: string;
  companyName: string;
  type: string;
  level: string;
  remote: boolean;
  isFeatured?: boolean;
}

const INITIAL_JOBS: Job[] = [
  {
    id: "1",
    title: "Business Development Associate – Inside Sales",
    category: "Sales",
    location: "Bangalore / Remote",
    experience: "0-2 Years",
    salary: "₹18L - ₹24L (OTE)",
    description: "Drive revenue growth by identifying and qualifying potential leads. Handle inbound inquiries and outbound calls.",
    postedAt: "Now",
    companyName: "Arambha",
    type: "Full time",
    level: "Junior",
    remote: true,
    isFeatured: true,
  },
  {
    id: "2",
    title: "Digital Marketing Associate",
    category: "Marketing",
    location: "Bangalore",
    experience: "1-3 Years",
    salary: "₹4L - ₹7L",
    description: "Manage social media and paid ads. Strong in SEO, SEM, and content strategy.",
    postedAt: "11h",
    companyName: "Arambha",
    type: "Full time",
    level: "Junior",
    remote: false,
  },
  {
    id: "3",
    title: "Brand Growth Executive",
    category: "Marketing",
    location: "Bangalore",
    experience: "2-4 Years",
    salary: "₹5L - ₹9L",
    description: "Execute brand strategies and ensure consistency across design and content.",
    postedAt: "12h",
    companyName: "Arambha",
    type: "Full time",
    level: "Mid",
    remote: false,
  },
  {
    id: "4",
    title: "Sales Lead / Manager",
    category: "Sales",
    location: "Bangalore",
    experience: "4-8 Years",
    salary: "₹10L - ₹18L",
    description: "Lead sales team, set targets, and drive strategy.",
    postedAt: "16h",
    companyName: "Arambha",
    type: "Full time",
    level: "Senior",
    remote: false,
  },
  {
    id: "5",
    title: "Marketing Strategy Manager",
    category: "Marketing",
    location: "Remote / Hybrid",
    experience: "5+ Years",
    salary: "₹15L - ₹25L",
    description: "Oversee marketing operations and long-term growth strategy.",
    postedAt: "22h",
    companyName: "Arambha",
    type: "Full time",
    level: "Senior",
    remote: true,
  },
  {
    id: "6",
    title: "Campus Growth Partner",
    category: "Operations",
    location: "Pan India",
    experience: "1-3 Years",
    salary: "₹4L - ₹6L + Incentives",
    description: "Build partnerships with institutions and organize campus events.",
    postedAt: "1d",
    companyName: "Arambha",
    type: "Contract",
    level: "Junior",
    remote: false,
  },
  {
    id: "7",
    title: "Corporate Sales Executive (B2B)",
    category: "Sales",
    location: "Bangalore / Mumbai",
    experience: "2-5 Years",
    salary: "₹6L - ₹12L",
    description: "Acquire corporate clients and manage proposals.",
    postedAt: "1d",
    companyName: "Arambha",
    type: "Full time",
    level: "Mid",
    remote: false,
  },
  {
    id: "8",
    title: "Human Resource Manager",
    category: "HR",
    location: "Bangalore",
    experience: "4-7 Years",
    salary: "₹8L - ₹14L",
    description: "Handle recruitment and employee relations.",
    postedAt: "3d",
    companyName: "Arambha",
    type: "Full time",
    level: "Senior",
    remote: false,
  },
  {
    id: "9",
    title: "Lead Generation Specialist",
    category: "Marketing",
    location: "Remote",
    experience: "1-3 Years",
    salary: "₹4L - ₹7L",
    description: "Generate and nurture leads via multiple channels.",
    postedAt: "4d",
    companyName: "Arambha",
    type: "Full time",
    level: "Junior",
    remote: true,
  },
];

// --- Internal Components ---

const Logo = ({ size = 40 }: { size?: number }) => {
  return (
    <div style={{ 
      width: size, 
      height: size, 
      backgroundColor: COLORS.white, 
      borderRadius: '8px', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      overflow: 'hidden' 
    }}>
      <img 
        src={logo}
        alt="" 
        style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'none' }} 
        onError={(e) => e.currentTarget.style.display = 'none'}
        onLoad={(e) => e.currentTarget.style.display = 'block'}
      />
      
      <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%', padding: '4px' }} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 85C15 85 35 75 50 85C65 75 85 85 85 85V75C85 75 65 65 50 75C35 65 15 75 15 75V85Z" fill={COLORS.navy} />
        <path d="M50 25L25 78H38L50 50L62 78H75L50 25Z" fill={COLORS.navy} />
        <path d="M38 78C38 78 45 60 50 60C55 60 62 78 62 78" stroke={COLORS.brandGold} strokeWidth="4" strokeLinecap="round" />
        <path d="M50 5C50 5 58 15 58 22C58 29 50 33 50 33C50 33 42 29 42 22C42 15 50 5Z" fill={COLORS.brandGold} />
        <path d="M50 10C50 10 54 16 54 20C54 24 50 26 50 26C50 26 46 24 46 20C46 16 50 10Z" fill={COLORS.brandGoldDark} />
      </svg>
    </div>
  );
};

const Navbar = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const navLinkStyle = (name: string): React.CSSProperties => ({
    fontSize: '15px',
    fontWeight: 500,
    color: hoveredLink === name ? COLORS.brandGold : COLORS.grayText,
    textDecoration: 'none',
    transition: 'color 0.2s ease',
    position: 'relative',
  });

  return (
    <header style={{ 
      backgroundColor: COLORS.white, 
      borderBottom: `1px solid ${COLORS.borderColor}`, 
      position: 'sticky', 
      top: 0, 
      zIndex: 50 
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '0 24px', 
        height: '80px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'between' 
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Logo size={40} />
          <span style={{ fontSize: '20px', fontWeight: 'bold', letterSpacing: '-0.025em', color: COLORS.darkText }}>
            Arambha Skill Solutions
          </span>
        </div>
        
        <nav style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '40px', 
          margin: '0 auto' 
        }}>
          {['Home', 'About', 'Programs', 'Services'].map((link) => (
            <a 
              key={link}
              href="#" 
              onMouseEnter={() => setHoveredLink(link)}
              onMouseLeave={() => setHoveredLink(null)}
              style={navLinkStyle(link)}
            >
              {link}
            </a>
          ))}
          <a 
            href="#" 
            style={{ 
              ...navLinkStyle('Careers'), 
              color: COLORS.brandGold 
            }}
          >
            Careers
            <div style={{ 
              position: 'absolute', 
              bottom: '-26px', 
              left: '50%', 
              transform: 'translateX(-50%)', 
              width: '40px', 
              height: '4px', 
              backgroundColor: COLORS.brandGold, 
              borderRadius: '9999px' 
            }} />
          </a>
        </nav>
        
        <div style={{ width: '128px' }}></div>
      </div>
    </header>
  );
};

const SearchBar = ({ 
  keyword, 
  setKeyword, 
  location, 
  setLocation 
}: { 
  keyword: string; 
  setKeyword: (val: string) => void; 
  location: string; 
  setLocation: (val: string) => void; 
}) => {
  return (
    <section style={{ marginBottom: '48px' }}>
      <div style={{ 
        backgroundColor: COLORS.white, 
        borderRadius: '16px', 
        padding: '12px', 
        boxShadow: SHADOWS.soft, 
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '16px'
      }}>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', padding: '0 16px', width: '100%' }}>
          <Search size={20} style={{ color: '#9CA3AF', marginRight: '12px', flexShrink: 0 }} />
          <input 
            style={{ 
              width: '100%', 
              border: 'none', 
              color: COLORS.darkText, 
              fontWeight: 500, 
              outline: 'none',
              fontSize: '16px'
            }} 
            placeholder="Job title or keyword" 
            type="text" 
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          {keyword && (
            <button onClick={() => setKeyword('')} style={{ color: '#D1D5DB', marginLeft: '8px', cursor: 'pointer', border: 'none', background: 'none' }}>
              <X size={16} />
            </button>
          )}
        </div>
        
        <div style={{ width: '1px', height: '32px', backgroundColor: COLORS.borderColor }}></div>
        
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', padding: '0 16px', width: '100%' }}>
          <MapPin size={20} style={{ color: '#9CA3AF', marginRight: '12px', flexShrink: 0 }} />
          <input 
            style={{ 
              width: '100%', 
              border: 'none', 
              color: COLORS.darkText, 
              fontWeight: 500, 
              outline: 'none',
              fontSize: '16px'
            }} 
            placeholder="City or country" 
            type="text" 
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          {location && (
            <button onClick={() => setLocation('')} style={{ color: '#D1D5DB', marginLeft: '8px', cursor: 'pointer', border: 'none', background: 'none' }}>
              <X size={16} />
            </button>
          )}
        </div>
        
        <button style={{ 
          width: 'auto', 
          backgroundColor: COLORS.brandGold, 
          color: COLORS.white, 
          fontWeight: 600, 
          padding: '16px 40px', 
          borderRadius: '12px', 
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 10px 15px -3px rgba(212, 175, 55, 0.3)',
          transition: 'background-color 0.2s',
        }}>
          Find it now
        </button>
      </div>
    </section>
  );
};

const Filters = ({
  sortBy, setSortBy,
  type, setType,
  level, setLevel,
  remoteOnly, setRemoteOnly,
  onClear
}: {
  sortBy: string;
  setSortBy: (val: string) => void;
  type: string;
  setType: (val: string) => void;
  level: string;
  setLevel: (val: string) => void;
  remoteOnly: boolean;
  setRemoteOnly: (val: boolean) => void;
  onClear: () => void;
}) => {
  return (
    <section style={{ marginBottom: '40px', display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', gap: '24px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <label style={{ fontSize: '14px', fontWeight: 600, color: '#374151' }}>Sort by:</label>
        <div style={{ position: 'relative', width: '192px' }}>
          <select 
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            style={{ 
              width: '100%', 
              appearance: 'none', 
              backgroundColor: COLORS.white, 
              border: `1px solid ${COLORS.borderColor}`, 
              borderRadius: '8px', 
              padding: '10px 16px', 
              fontSize: '14px', 
              color: COLORS.grayText, 
              cursor: 'pointer',
              outline: 'none'
            }}
          >
            <option>Relevance</option>
            <option>Newest</option>
          </select>
          <ChevronDown size={16} style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', color: '#9CA3AF', pointerEvents: 'none' }} />
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <label style={{ fontSize: '14px', fontWeight: 600, color: '#374151' }}>Type:</label>
        <div style={{ position: 'relative', width: '192px' }}>
          <select 
            value={type}
            onChange={(e) => setType(e.target.value)}
            style={{ 
              width: '100%', 
              appearance: 'none', 
              backgroundColor: COLORS.white, 
              border: `1px solid ${COLORS.borderColor}`, 
              borderRadius: '8px', 
              padding: '10px 16px', 
              fontSize: '14px', 
              color: COLORS.grayText, 
              cursor: 'pointer',
              outline: 'none'
            }}
          >
            <option value="All">All Types</option>
            <option value="Full time">Full time</option>
            <option value="Contract">Contract</option>
            <option value="Part time">Part time</option>
          </select>
          <ChevronDown size={16} style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', color: '#9CA3AF', pointerEvents: 'none' }} />
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '4px', gap: '12px', height: '42px' }}>
        <span style={{ fontSize: '14px', color: COLORS.grayText, fontWeight: 500 }}>Remote only</span>
        <button
          onClick={() => setRemoteOnly(!remoteOnly)}
          style={{ 
            position: 'relative', 
            display: 'inline-block', 
            width: '48px', 
            height: '24px', 
            backgroundColor: remoteOnly ? COLORS.brandGold : '#D1D5DB', 
            borderRadius: '9999px',
            border: 'none',
            cursor: 'pointer',
            transition: 'background-color 0.2s ease'
          }}
        >
          <motion.span 
            animate={{ x: remoteOnly ? 24 : 2 }}
            style={{ 
              position: 'absolute', 
              top: '4px', 
              left: 0, 
              width: '16px', 
              height: '16px', 
              backgroundColor: COLORS.white, 
              borderRadius: '9999px', 
              boxShadow: '0 1px 2px rgba(0,0,0,0.1)' 
            }}
          />
        </button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <label style={{ fontSize: '14px', fontWeight: 600, color: '#374151' }}>Level:</label>
        <div style={{ position: 'relative', width: '192px' }}>
          <select 
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            style={{ 
              width: '100%', 
              appearance: 'none', 
              borderRadius: '8px', 
              padding: '10px 16px', 
              fontSize: '14px', 
              backgroundColor: level !== 'All' ? COLORS.brandGold : COLORS.white,
              color: level !== 'All' ? COLORS.white : COLORS.grayText,
              border: level !== 'All' ? 'none' : `1px solid ${COLORS.borderColor}`,
              cursor: 'pointer',
              outline: 'none',
              transition: 'all 0.2s'
            }}
          >
            <option value="All">All Levels</option>
            <option value="Senior">Senior</option>
            <option value="Mid">Mid</option>
            <option value="Junior">Junior</option>
          </select>
          <ChevronDown size={16} style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', color: level !== 'All' ? COLORS.white : '#9CA3AF', pointerEvents: 'none' }} />
        </div>
      </div>

      <button 
        onClick={onClear}
        style={{ 
          marginBottom: '8px', 
          fontSize: '14px', 
          color: '#9CA3AF', 
          fontWeight: 500, 
          marginLeft: 'auto', 
          background: 'none', 
          border: 'none', 
          cursor: 'pointer',
          transition: 'color 0.2s' 
        }}
        onMouseEnter={(e) => e.currentTarget.style.color = COLORS.brandGold}
        onMouseLeave={(e) => e.currentTarget.style.color = '#9CA3AF'}
      >
        Clear all
      </button>
    </section>
  );
};

const JobCard = ({ job, onViewDetails, onApply }: { job: Job; onViewDetails?: () => void; onApply?: () => void; key?: string | number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onViewDetails?.()}
      style={{
        position: 'relative',
        cursor: 'pointer',
        borderRadius: '16px',
        padding: '32px',
        transition: 'all 0.2s ease-in-out',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: isHovered ? COLORS.brandGold : COLORS.white,
        border: `1px solid ${isHovered ? COLORS.brandGold : COLORS.borderColor}`,
        boxShadow: isHovered ? '0 10px 25px rgba(212, 175, 55, 0.3)' : SHADOWS.sm,
        color: isHovered ? COLORS.white : 'inherit',
        transform: isHovered ? 'translateY(-4px)' : 'none'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px', position: 'relative', zIndex: 10 }}>
        <h3 style={{ fontWeight: 'bold', fontSize: '20px', lineHeight: 1.25, transition: 'color 0.2s' }}>{job.title}</h3>
        <span style={{ fontSize: '12px', fontWeight: 600, display: 'flex', alignItems: 'center', flexShrink: 0, marginLeft: '8px', color: isHovered ? 'rgba(255,255,255,0.7)' : '#9CA3AF' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', marginRight: '8px', backgroundColor: isHovered ? 'rgba(255,255,255,0.4)' : '#E5E7EB' }}></span> {job.postedAt}
        </span>
      </div>
      
      <p style={{ fontSize: '14px', marginBottom: '24px', position: 'relative', zIndex: 10, color: isHovered ? 'rgba(255,255,255,0.7)' : '#9CA3AF' }}>
        {job.location} • {job.category}
      </p>
      
      <div style={{ fontSize: '12px', lineHeight: 1.625, marginBottom: '32px', flexGrow: 1, overflow: 'hidden', position: 'relative', zIndex: 10, color: isHovered ? 'rgba(255,255,255,0.8)' : '#9CA3AF' }}>
        <p style={{ fontWeight: 'bold', fontSize: '14px', marginBottom: '8px', color: isHovered ? COLORS.white : 'inherit' }}>{job.experience} • {job.salary}</p>
        <p style={{ display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{job.description}</p>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '32px', position: 'relative', zIndex: 10 }}>
        <Logo size={48} />
        <span style={{ fontSize: '16px', fontWeight: 500, marginLeft: '16px', color: isHovered ? COLORS.white : '#374151' }}>{job.companyName}</span>
      </div>
      
      <div style={{ display: 'flex', gap: '12px', position: 'relative', zIndex: 10 }}>
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onViewDetails?.();
          }}
          style={{ 
            flex: 1, 
            padding: '16px 0', 
            borderRadius: '12px', 
            fontWeight: 'bold', 
            fontSize: '12px', 
            transition: 'all 0.2s',
            border: `1px solid ${isHovered ? 'rgba(255,255,255,0.2)' : COLORS.borderColor}`,
            backgroundColor: 'transparent',
            color: isHovered ? COLORS.white : '#374151',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = isHovered ? 'rgba(255,255,255,0.1)' : '#F9FAFB' }}
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent' }}
        >
          View Details
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); onApply?.(); }}
          style={{
            flex: 1,
            padding: '16px 0',
            borderRadius: '12px',
            fontWeight: 'bold',
            fontSize: '12px',
            transition: 'all 0.2s',
            border: `1px solid ${isHovered ? COLORS.white : COLORS.borderColor}`,
            backgroundColor: isHovered ? COLORS.white : 'transparent',
            color: isHovered ? COLORS.brandGold : '#374151',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            if (!isHovered) e.currentTarget.style.backgroundColor = '#F9FAFB';
          }}
          onMouseLeave={(e) => {
            if (!isHovered) e.currentTarget.style.backgroundColor = 'transparent';
          }}
        >
          Apply Now
        </button>
      </div>
    </motion.div>
  );
};

// --- Apply Form Modal ---

const COURSES = [
  "Spoken English Mastery",
  "Foundation 60",
  "Digital Marketing Expert",
  "Campus to Corporate Program",
  "Human Resource Management",
  "Banking & Finance Masterclass",
  "Full Stack Java Developer",
  "Data Science & AI",
  "AutoCAD Design",
];

const QUALIFICATIONS = ["10th", "12th", "Diploma", "Undergraduate", "Postgraduate"];

const YEARS = Array.from({ length: 10 }, (_, i) => String(new Date().getFullYear() - i));

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  course: string;
  qualification: string;
  yearOfPassing: string;
  skills: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  course?: string;
  qualification?: string;
  yearOfPassing?: string;
}

function ApplyFormModal({ jobTitle, onClose }: { jobTitle: string; onClose: () => void }) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState<FormData>({
    fullName: '', email: '', phone: '',
    course: '', qualification: '', yearOfPassing: '', skills: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const set = (field: keyof FormData, value: string) => {
    setData(prev => ({ ...prev, [field]: value }));
    setErrors(prev => ({ ...prev, [field]: undefined }));
  };

  const validateStep1 = (): boolean => {
    const e: FormErrors = {};
    if (!data.fullName.trim()) e.fullName = 'Full name is required';
    if (!data.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = 'Enter a valid email';
    if (!data.phone.trim()) e.phone = 'Phone number is required';
    else if (!/^\+?[\d\s\-]{10,}$/.test(data.phone)) e.phone = 'Enter a valid phone number';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const validateStep2 = (): boolean => {
    const e: FormErrors = {};
    if (!data.course) e.course = 'Please select a course';
    if (!data.qualification) e.qualification = 'Please select your qualification';
    if (!data.yearOfPassing) e.yearOfPassing = 'Please select year of passing';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleNext = () => { if (validateStep1()) setStep(2); };
  const handleSubmit = () => { if (validateStep2()) setSubmitted(true); };

  const inputStyle = (hasError?: string): React.CSSProperties => ({
    width: '100%',
    padding: '12px 16px',
    borderRadius: '10px',
    border: `1.5px solid ${hasError ? '#EF4444' : '#E5E7EB'}`,
    fontSize: '14px',
    outline: 'none',
    fontFamily: 'inherit',
    transition: 'border-color 0.2s',
    backgroundColor: '#FAFAFA',
    color: '#111827',
    boxSizing: 'border-box',
  });

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '13px',
    fontWeight: 600,
    color: '#374151',
    marginBottom: '6px',
  };

  const errorStyle: React.CSSProperties = {
    fontSize: '12px',
    color: '#EF4444',
    marginTop: '4px',
  };

  const primaryBtn: React.CSSProperties = {
    width: '100%',
    padding: '14px',
    borderRadius: '12px',
    border: 'none',
    backgroundColor: '#02367B',
    color: '#fff',
    fontWeight: 700,
    fontSize: '15px',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
    fontFamily: 'inherit',
  };

  const ghostBtn: React.CSSProperties = {
    width: '100%',
    padding: '14px',
    borderRadius: '12px',
    border: '1.5px solid #E5E7EB',
    backgroundColor: 'transparent',
    color: '#6B7280',
    fontWeight: 600,
    fontSize: '15px',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
    fontFamily: 'inherit',
  };

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 200,
      display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px',
    }}>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        onClick={onClose}
        style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(4px)' }}
      />

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.93, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.93, y: 24 }}
        transition={{ type: 'spring', stiffness: 320, damping: 28 }}
        style={{
          position: 'relative', width: '100%', maxWidth: '480px',
          backgroundColor: '#fff', borderRadius: '24px',
          boxShadow: '0 24px 48px rgba(0,0,0,0.18)',
          overflow: 'hidden',
        }}
      >
        {/* Header bar */}
        <div style={{ background: 'linear-gradient(135deg, #02367B 0%, #005FAD 100%)', padding: '24px 28px 20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '4px' }}>
                Applying for
              </p>
              <h2 style={{ color: '#fff', fontSize: '18px', fontWeight: 700, lineHeight: 1.3, maxWidth: '340px' }}>{jobTitle}</h2>
            </div>
            <button onClick={onClose} style={{ background: 'rgba(255,255,255,0.15)', border: 'none', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0 }}>
              <X size={16} style={{ color: '#fff' }} />
            </button>
          </div>

          {/* Progress bar */}
          {!submitted && (
            <div style={{ marginTop: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                {['Personal Info', 'Academic Info'].map((label, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <div style={{
                      width: '22px', height: '22px', borderRadius: '50%',
                      backgroundColor: step > i + 1 ? '#D4AF37' : step === i + 1 ? '#fff' : 'rgba(255,255,255,0.25)',
                      color: step === i + 1 ? '#02367B' : '#fff',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '11px', fontWeight: 700, flexShrink: 0,
                    }}>
                      {step > i + 1 ? '✓' : i + 1}
                    </div>
                    <span style={{ fontSize: '12px', fontWeight: 600, color: step === i + 1 ? '#fff' : 'rgba(255,255,255,0.5)' }}>
                      {label}
                    </span>
                  </div>
                ))}
              </div>
              <div style={{ height: '4px', backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '9999px', overflow: 'hidden' }}>
                <motion.div
                  animate={{ width: step === 1 ? '50%' : '100%' }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  style={{ height: '100%', backgroundColor: '#D4AF37', borderRadius: '9999px' }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Body */}
        <div style={{ padding: '28px' }}>
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                style={{ textAlign: 'center', padding: '16px 0 8px' }}
              >
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: '#DCFCE7', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#111827', marginBottom: '8px' }}>Application Submitted!</h3>
                <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: 1.6, marginBottom: '24px' }}>
                  Thanks, <strong>{data.fullName}</strong>! We've received your application and will get back to you at <strong>{data.email}</strong> shortly.
                </p>
                <button onClick={onClose} style={{ ...primaryBtn }}>Close</button>
              </motion.div>
            ) : step === 1 ? (
              <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.22 }}>
                <p style={{ fontSize: '13px', color: '#6B7280', marginBottom: '24px' }}>Fill in your personal details to get started.</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  <div>
                    <label style={labelStyle}>Full Name <span style={{ color: '#EF4444' }}>*</span></label>
                    <input
                      style={inputStyle(errors.fullName)}
                      placeholder="e.g. Priya Sharma"
                      value={data.fullName}
                      onChange={e => set('fullName', e.target.value)}
                    />
                    {errors.fullName && <p style={errorStyle}>{errors.fullName}</p>}
                  </div>
                  <div>
                    <label style={labelStyle}>Email Address <span style={{ color: '#EF4444' }}>*</span></label>
                    <input
                      style={inputStyle(errors.email)}
                      type="email"
                      placeholder="e.g. priya@email.com"
                      value={data.email}
                      onChange={e => set('email', e.target.value)}
                    />
                    {errors.email && <p style={errorStyle}>{errors.email}</p>}
                  </div>
                  <div>
                    <label style={labelStyle}>Phone Number <span style={{ color: '#EF4444' }}>*</span></label>
                    <input
                      style={inputStyle(errors.phone)}
                      type="tel"
                      placeholder="e.g. +91 98765 43210"
                      value={data.phone}
                      onChange={e => set('phone', e.target.value)}
                    />
                    {errors.phone && <p style={errorStyle}>{errors.phone}</p>}
                  </div>
                </div>
                <div style={{ marginTop: '28px' }}>
                  <button style={primaryBtn} onClick={handleNext}>Next →</button>
                </div>
              </motion.div>
            ) : (
              <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.22 }}>
                <p style={{ fontSize: '13px', color: '#6B7280', marginBottom: '24px' }}>Tell us about your academic background.</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  <div>
                    <label style={labelStyle}>Course Interested In <span style={{ color: '#EF4444' }}>*</span></label>
                    <select style={{ ...inputStyle(errors.course), appearance: 'none' }} value={data.course} onChange={e => set('course', e.target.value)}>
                      <option value="">Select a course</option>
                      {COURSES.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                    {errors.course && <p style={errorStyle}>{errors.course}</p>}
                  </div>
                  <div>
                    <label style={labelStyle}>Current Qualification <span style={{ color: '#EF4444' }}>*</span></label>
                    <select style={{ ...inputStyle(errors.qualification), appearance: 'none' }} value={data.qualification} onChange={e => set('qualification', e.target.value)}>
                      <option value="">Select qualification</option>
                      {QUALIFICATIONS.map(q => <option key={q} value={q}>{q}</option>)}
                    </select>
                    {errors.qualification && <p style={errorStyle}>{errors.qualification}</p>}
                  </div>
                  <div>
                    <label style={labelStyle}>Year of Passing <span style={{ color: '#EF4444' }}>*</span></label>
                    <select style={{ ...inputStyle(errors.yearOfPassing), appearance: 'none' }} value={data.yearOfPassing} onChange={e => set('yearOfPassing', e.target.value)}>
                      <option value="">Select year</option>
                      {YEARS.map(y => <option key={y} value={y}>{y}</option>)}
                    </select>
                    {errors.yearOfPassing && <p style={errorStyle}>{errors.yearOfPassing}</p>}
                  </div>
                  <div>
                    <label style={labelStyle}>Skills / Interests <span style={{ color: '#9CA3AF', fontWeight: 400 }}>(optional)</span></label>
                    <textarea
                      style={{ ...inputStyle(), resize: 'none', minHeight: '80px' } as React.CSSProperties}
                      placeholder="e.g. Communication, Java, Public Speaking..."
                      value={data.skills}
                      onChange={e => set('skills', e.target.value)}
                      rows={3}
                    />
                  </div>
                </div>
                <div style={{ marginTop: '28px', display: 'flex', gap: '12px' }}>
                  <button style={ghostBtn} onClick={() => setStep(1)}>← Back</button>
                  <button style={primaryBtn} onClick={handleSubmit}>Submit Application</button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}

// --- Main App Component ---

export default function App() {
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');
  const [sortBy, setSortBy] = useState('Relevance');
  const [type, setType] = useState('All');
  const [level, setLevel] = useState('All');
  const [remoteOnly, setRemoteOnly] = useState(false);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [applyingToJob, setApplyingToJob] = useState<Job | null>(null);

  const filteredJobs = useMemo(() => {
    let jobs = INITIAL_JOBS.filter(job => {
      const matchKeyword = !keyword || 
                          job.title.toLowerCase().includes(keyword.toLowerCase()) || 
                          job.category.toLowerCase().includes(keyword.toLowerCase()) ||
                          job.description.toLowerCase().includes(keyword.toLowerCase());
      const matchLocation = !location || job.location.toLowerCase().includes(location.toLowerCase());
      const matchType = type === 'All' || job.type === type;
      const matchLevel = level === 'All' || job.level === level;
      const matchRemote = !remoteOnly || job.remote;

      return matchKeyword && matchLocation && matchType && matchLevel && matchRemote;
    });

    if (sortBy === 'Newest') {
      jobs = [...jobs].sort((a,b) => b.postedAt.localeCompare(a.postedAt));
    }
    
    return jobs;
  }, [keyword, location, type, level, remoteOnly, sortBy]);

  const handleClearAll = () => {
    setKeyword('');
    setLocation('');
    setSortBy('Relevance');
    setType('All');
    setLevel('All');
    setRemoteOnly(false);
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: COLORS.brandGray,
      fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif'
    }}>

      {/* ── Career Hero ── */}
      <section style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '420px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {/* background image */}
        <img
          src={heroStudentsImg}
          alt=""
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover',
            filter: 'blur(3px) brightness(0.38)',
            transform: 'scale(1.05)',
          }}
        />
        {/* soft gradient overlay so colours stay clean */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg, rgba(2,54,123,0.72) 0%, rgba(0,108,165,0.55) 100%)',
        }} />

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          style={{
            position: 'relative', zIndex: 10,
            textAlign: 'center',
            maxWidth: '720px',
            padding: '56px 24px',
          }}
        >
          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3.25rem)',
            fontWeight: 800,
            color: '#FFFFFF',
            lineHeight: 1.15,
            marginBottom: '16px',
            letterSpacing: '-0.02em',
          }}>
            Build Your Career With{' '}
            <span style={{ color: COLORS.brandGold }}>Arambha</span>
          </h1>

          <p style={{
            fontWeight: 700,
            fontSize: '1.05rem',
            color: 'rgba(255,255,255,0.92)',
            marginBottom: '12px',
          }}>
            At Arambha Skill &amp; Design Solutions Pvt. Ltd., we don't just offer jobs — we build careers.
          </p>
          <p style={{
            fontSize: '0.95rem',
            color: 'rgba(255,255,255,0.72)',
            marginBottom: '36px',
            lineHeight: 1.7,
          }}>
            We believe in empowering passionate individuals with real responsibility, growth opportunities, and a performance-driven culture.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => document.getElementById('jobs-list')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                padding: '14px 32px',
                borderRadius: '12px',
                fontWeight: 700,
                fontSize: '14px',
                cursor: 'pointer',
                border: '2px solid rgba(255,255,255,0.85)',
                backgroundColor: 'rgba(255,255,255,0.12)',
                color: '#ffffff',
                backdropFilter: 'blur(6px)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.22)'; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.12)'; }}
            >
              View Open Roles
            </button>
            <button
              style={{
                padding: '14px 32px',
                borderRadius: '12px',
                fontWeight: 700,
                fontSize: '14px',
                cursor: 'pointer',
                border: 'none',
                backgroundColor: '#02367B',
                color: '#ffffff',
                boxShadow: '0 8px 24px rgba(2,54,123,0.35)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#01255e'; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#02367B'; }}
            >
              Our Culture
            </button>
          </div>
        </motion.div>
      </section>

      <main id="jobs-list" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '48px 24px'
      }}>
        <SearchBar 
          keyword={keyword} 
          setKeyword={setKeyword} 
          location={location} 
          setLocation={setLocation} 
        />
        
        <Filters 
          sortBy={sortBy} 
          setSortBy={setSortBy}
          type={type} 
          setType={setType}
          level={level} 
          setLevel={setLevel}
          remoteOnly={remoteOnly} 
          setRemoteOnly={setRemoteOnly}
          onClear={handleClearAll}
        />

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1F2937' }}>
            {filteredJobs.length} {keyword || 'Available'} Jobs
          </h2>
        </div>

        {filteredJobs.length > 0 ? (
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
            gap: '32px' 
          }}>
            {filteredJobs.map((job) => (
              <JobCard
                key={job.id}
                job={job}
                onViewDetails={() => setSelectedJob(job)}
                onApply={() => setApplyingToJob(job)}
              />
            ))}
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ 
              textAlign: 'center', 
              padding: '80px 0', 
              backgroundColor: COLORS.white, 
              borderRadius: '16px', 
              border: `1px solid ${COLORS.borderColor}` 
            }}
          >
            <p style={{ color: COLORS.grayText, fontWeight: 500, fontSize: '18px' }}>No jobs found matching your criteria.</p>
            <button 
              onClick={handleClearAll}
              style={{ 
                marginTop: '16px', 
                color: COLORS.brandGold, 
                fontWeight: 600, 
                background: 'none', 
                border: 'none', 
                cursor: 'pointer', 
                padding: 0, 
                textDecoration: 'underline' 
              }}
            >
              Clear all filters
            </button>
          </motion.div>
        )}
      </main>

      <AnimatePresence>
        {selectedJob && (
          <div style={{ 
            position: 'fixed', 
            inset: 0, 
            zIndex: 100, 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            padding: '16px' 
          }}>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedJob(null)}
              style={{ 
                position: 'absolute', 
                inset: 0, 
                backgroundColor: 'rgba(0,0,0,0.5)', 
                backdropFilter: 'blur(4px)' 
              }}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              style={{ 
                position: 'relative', 
                width: '100%', 
                maxWidth: '672px', 
                backgroundColor: COLORS.white, 
                borderRadius: '24px', 
                boxShadow: SHADOWS.modal, 
                overflow: 'hidden' 
              }}
            >
              <div style={{ padding: '32px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
                  <div>
                    <span style={{ 
                      display: 'inline-block', 
                      padding: '4px 12px', 
                      borderRadius: '9999px', 
                      backgroundColor: 'rgba(212, 175, 55, 0.1)', 
                      color: COLORS.brandGold, 
                      fontSize: '12px', 
                      fontWeight: 'bold', 
                      marginBottom: '8px', 
                      textTransform: 'uppercase', 
                      letterSpacing: '0.05em' 
                    }}>
                      {selectedJob.category}
                    </span>
                    <h2 style={{ fontSize: '30px', fontWeight: 'bold', color: COLORS.darkText, lineHeight: 1.2 }}>{selectedJob.title}</h2>
                    <p style={{ color: COLORS.grayText, fontWeight: 500, marginTop: '4px' }}>{selectedJob.companyName}</p>
                  </div>
                  <button 
                    onClick={() => setSelectedJob(null)}
                    style={{ 
                      padding: '8px', 
                      backgroundColor: 'transparent', 
                      border: 'none', 
                      borderRadius: '50%', 
                      cursor: 'pointer', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      transition: 'background-color 0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F3F4F6'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    <X size={24} style={{ color: '#9CA3AF' }} />
                  </button>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '32px' }}>
                  <div style={{ backgroundColor: '#F9FAFB', padding: '16px', borderRadius: '16px' }}>
                    <MapPin size={20} style={{ color: COLORS.brandGold, marginBottom: '8px' }} />
                    <p style={{ fontSize: '10px', color: '#9CA3AF', textTransform: 'uppercase', fontWeight: 'bold', letterSpacing: '-0.025em' }}>Location</p>
                    <p style={{ fontSize: '14px', fontWeight: 600, color: '#374151' }}>{selectedJob.location}</p>
                  </div>
                  <div style={{ backgroundColor: '#F9FAFB', padding: '16px', borderRadius: '16px' }}>
                    <Briefcase size={20} style={{ color: COLORS.brandGold, marginBottom: '8px' }} />
                    <p style={{ fontSize: '10px', color: '#9CA3AF', textTransform: 'uppercase', fontWeight: 'bold', letterSpacing: '-0.025em' }}>Experience</p>
                    <p style={{ fontSize: '14px', fontWeight: 600, color: '#374151' }}>{selectedJob.experience}</p>
                  </div>
                  <div style={{ backgroundColor: '#F9FAFB', padding: '16px', borderRadius: '16px' }}>
                    <IndianRupee size={20} style={{ color: COLORS.brandGold, marginBottom: '8px' }} />
                    <p style={{ fontSize: '10px', color: '#9CA3AF', textTransform: 'uppercase', fontWeight: 'bold', letterSpacing: '-0.025em' }}>Salary</p>
                    <p style={{ fontSize: '14px', fontWeight: 600, color: '#374151' }}>{selectedJob.salary}</p>
                  </div>
                  <div style={{ backgroundColor: '#F9FAFB', padding: '16px', borderRadius: '16px' }}>
                    <Clock size={20} style={{ color: COLORS.brandGold, marginBottom: '8px' }} />
                    <p style={{ fontSize: '10px', color: '#9CA3AF', textTransform: 'uppercase', fontWeight: 'bold', letterSpacing: '-0.025em' }}>Posted</p>
                    <p style={{ fontSize: '14px', fontWeight: 600, color: '#374151' }}>{selectedJob.postedAt}</p>
                  </div>
                </div>

                <div style={{ marginBottom: '32px' }}>
                  <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: COLORS.darkText, marginBottom: '12px' }}>Job Description</h3>
                  <p style={{ color: '#4B5563', lineHeight: 1.625 }}>
                    {selectedJob.description}
                  </p>
                  <p style={{ marginTop: '16px', color: '#4B5563', lineHeight: 1.625 }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>

                <div style={{ display: 'flex', gap: '16px' }}>
                  <button
                    onClick={() => { setSelectedJob(null); setApplyingToJob(selectedJob); }}
                    style={{
                      flex: 1,
                      backgroundColor: COLORS.brandGold,
                      color: COLORS.white,
                      padding: '16px 0',
                      borderRadius: '16px',
                      fontWeight: 'bold',
                      border: 'none',
                      cursor: 'pointer',
                      boxShadow: '0 10px 15px -3px rgba(212, 175, 55, 0.2)',
                      transition: 'background-color 0.2s'
                    }}
                  >
                    Apply Now
                  </button>
                  <button style={{ 
                    padding: '16px 32px', 
                    border: `1px solid ${COLORS.borderColor}`, 
                    borderRadius: '16px', 
                    fontWeight: 'bold', 
                    backgroundColor: 'transparent',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F9FAFB'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    Save Job
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {applyingToJob && (
          <ApplyFormModal
            jobTitle={applyingToJob.title}
            onClose={() => setApplyingToJob(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
