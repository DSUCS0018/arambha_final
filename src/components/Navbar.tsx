import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/ALogo.png";

export default function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      // Show navbar when scrolling up OR near the top
      if (currentY < 10 || currentY < lastScrollY.current) {
        setVisible(true);
      } else {
        setVisible(false);
        setIsMenuOpen(false); // close mobile menu when hiding
      }
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/programs", label: "Programs" },
    { path: "/services", label: "Services" },
    { path: "/careers", label: "Careers" },
  ];

  return (
    <nav
      className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur-md shadow-sm transition-transform duration-300 ease-in-out"
      style={{ transform: visible ? "translateY(0)" : "translateY(-100%)" }}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 py-4 w-full">
        <Link to="/" className="flex items-center gap-2 sm:gap-3">
          <img
            alt="Arambha Logo"
            className="h-10 sm:h-12 w-auto"
            src={logo}
          />
          <div className="text-base sm:text-xl font-extrabold text-primary tracking-tighter leading-none font-serif">
            Arambha<br />
            <span className="text-accent-gold text-xs sm:text-sm font-bold tracking-normal font-sans">Skill Solutions</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              className={`text-sm font-semibold tracking-tight transition-colors pb-1 ${
                isActive(link.path)
                  ? 'text-primary border-b-2 border-accent-gold'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
              to={link.path}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/login" className="hidden lg:block text-sm font-semibold text-on-surface-variant hover:text-primary transition-all">Login</Link>
          <button className="brand-gradient-gold text-white px-4 lg:px-6 py-2.5 rounded-lg text-sm font-semibold shadow-md hover:brightness-110 active:scale-95 transition-all whitespace-nowrap">
            Book a Class
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-primary hover:bg-slate-100 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                className={`block px-4 py-3 rounded-lg font-semibold transition-all ${
                  isActive(link.path)
                    ? 'bg-accent-gold text-white'
                    : 'text-on-surface-variant hover:bg-slate-50'
                }`}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/login"
              className="block px-4 py-3 rounded-lg font-semibold text-on-surface-variant hover:bg-slate-50 transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Link>
            <button className="w-full brand-gradient-gold text-white px-6 py-3 rounded-lg font-semibold shadow-md">
              Book a Class
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
