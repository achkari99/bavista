import React, { useState, useEffect, useRef } from 'react';
import {
  Instagram, Twitter, Facebook, Mail, Phone, MapPin, Quote, ChevronRight, Star,
  Diamond, PartyPopper, Briefcase, Cherry, Citrus, Moon, Sun, Leaf, Flame,
  Menu, X, GlassWater, Heart, Sparkles
} from 'lucide-react';

export function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formState, setFormState] = useState({ eventType: '', date: '', guests: '', name: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const revealedRef = useRef<Set<Element>>(new Set());

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll reveal — runs once, tracks revealed elements to prevent double-trigger
  useEffect(() => {
    const revealed = revealedRef.current;
    const targets = Array.from(document.querySelectorAll<HTMLElement>('.reveal-on-scroll')).filter(
      (el) => !revealed.has(el)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !revealed.has(entry.target)) {
            revealed.add(entry.target);
            (entry.target as HTMLElement).setAttribute('data-revealed', 'true');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 4000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const navLinks = [
    { href: '#experience', label: 'Experience' },
    { href: '#drinks', label: 'Our Drinks' },
    { href: '#gallery', label: 'Gallery' },
  ];

  const drinks = [
    { Icon: Cherry, name: 'Velvet Rose', desc: 'Muddled strawberries, rose water, fresh lemon, topped with sparkling elderflower.', glow: 'rgba(220, 20, 60, 0.45)', glowSolid: '#DC143C' },
    { Icon: Citrus, name: 'Citrus Crown', desc: 'Charred lemon, yuzu extract, agave, smoked sea salt rim.', glow: 'rgba(255, 215, 0, 0.35)', glowSolid: '#FFD700' },
    { Icon: Moon, name: 'Midnight Berry', desc: 'Blackberry reduction, activated charcoal, lime, ginger beer.', glow: 'rgba(138, 43, 226, 0.35)', glowSolid: '#8B2BE2' },
    { Icon: Sun, name: 'Golden Mango', desc: 'Alphonso mango purée, jalapeño simple syrup, chili-lime salt.', glow: 'rgba(255, 140, 0, 0.35)', glowSolid: '#FF8C00' },
    { Icon: Leaf, name: 'The Garden', desc: 'Cucumber ribbons, fresh basil, lime juice, aloe vera water.', glow: 'rgba(46, 139, 87, 0.35)', glowSolid: '#2E8B57' },
    { Icon: Flame, name: 'Sunset Blaze', desc: 'Blood orange, grapefruit bitters, rosemary sprig, tonic.', glow: 'rgba(255, 69, 0, 0.35)', glowSolid: '#FF4500' },
  ];

  const events = [
    { Icon: Diamond, title: 'Weddings', desc: 'Make your special day extraordinary with our bespoke mocktail curation.' },
    { Icon: PartyPopper, title: 'Celebrations', desc: 'Turn any anniversary or birthday into a luxury affair to remember.' },
    { Icon: Briefcase, title: 'Corporate Events', desc: 'Impress clients and reward your team with premium bar service.' },
  ];

  const gallery = [
    { img: '/gallery-newyear.jpg', text: 'New Year Eve 2024' },
    { img: '/gallery-wedding.jpg', text: "Sarah's Wedding" },
    { img: '/gallery-corporate.jpg', text: 'Corporate Gala' },
    { img: '/gallery-fashion.jpg', text: 'Fashion Week Party' },
    { img: '/gallery-summer.jpg', text: 'Summer Soirée' },
    { img: '/gallery-awards.jpg', text: 'Awards Night' },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap');

        body { font-family: 'Inter', sans-serif; }

        .font-serif-bav { font-family: 'Cormorant Garamond', serif; }

        .glass-panel {
          background: rgba(20, 20, 20, 0.7);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(212, 175, 55, 0.15);
        }
        .glass-heavy {
          background: rgba(10, 10, 10, 0.88);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(212, 175, 55, 0.2);
        }
        .gold-grad {
          background: linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: shimmer 5s infinite linear;
          background-size: 200% auto;
        }
        .gold-glow { text-shadow: 0 0 20px rgba(212,175,55,0.5), 0 0 40px rgba(212,175,55,0.25); }

        @keyframes shimmer { 0%{background-position:0% center} 100%{background-position:200% center} }
        @keyframes float { 0%,100%{transform:translateY(0) rotate(0deg)} 50%{transform:translateY(-18px) rotate(4deg)} }
        @keyframes floatB { 0%,100%{transform:translateY(0) rotate(0deg)} 50%{transform:translateY(-13px) rotate(-4deg)} }
        @keyframes scrollLeft { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }

        .blob1 {
          position:absolute; top:20%; left:10%; width:40vw; height:40vw;
          background:radial-gradient(circle,rgba(212,175,55,0.14) 0%,transparent 70%);
          border-radius:50%; filter:blur(60px);
          animation:float 15s infinite ease-in-out; pointer-events:none;
        }
        .blob2 {
          position:absolute; bottom:10%; right:10%; width:50vw; height:50vw;
          background:radial-gradient(circle,rgba(255,149,0,0.10) 0%,transparent 70%);
          border-radius:50%; filter:blur(80px);
          animation:floatB 20s infinite ease-in-out reverse; pointer-events:none;
        }

        /* Scroll reveal — CSS-transition based, no double-animation */
        .reveal-on-scroll {
          opacity: 0;
          transform: translateY(36px);
          transition: opacity 0.75s cubic-bezier(0.16,1,0.3,1), transform 0.75s cubic-bezier(0.16,1,0.3,1);
        }
        .reveal-on-scroll[data-revealed="true"] {
          opacity: 1;
          transform: translateY(0);
        }
      `}} />

      {/* ── NAVIGATION ── */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-heavy py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3" onClick={() => setMobileMenuOpen(false)}>
            <img src="/logo.png" alt="Mocktail by Bavista" className="h-12 w-12 rounded-full object-cover" />
            <span className="font-serif-bav text-xl tracking-wider text-[#D4AF37] font-semibold hidden sm:block">Mocktail by Bavista</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ href, label }) => (
              <a key={href} href={href} className="text-sm uppercase tracking-widest text-gray-300 hover:text-[#D4AF37] transition-colors duration-200">{label}</a>
            ))}
            <a href="#book" className="px-6 py-2.5 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-300 text-sm uppercase tracking-widest rounded-sm">
              Reserve Your Event
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-[#D4AF37] p-2"
            onClick={() => setMobileMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden glass-heavy border-t border-[#D4AF37]/10 px-6 py-6 flex flex-col gap-5">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-sm uppercase tracking-widest text-gray-300 hover:text-[#D4AF37] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >{label}</a>
            ))}
            <a
              href="#book"
              className="mt-2 px-6 py-3 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-300 text-sm uppercase tracking-widest rounded-sm text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Reserve Your Event
            </a>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="blob1" />
        <div className="blob2" />
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen">
          <img src="/hero-bg.png" alt="Luxury event bar" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
        </div>

        {/* Floating lucide icons */}
        <GlassWater size={36} className="absolute top-[26%] left-[14%] text-[#D4AF37] opacity-60" style={{ animation: 'float 6s infinite ease-in-out' }} />
        <Sparkles size={32} className="absolute bottom-[34%] right-[19%] text-amber-300 opacity-70" style={{ animation: 'floatB 8s infinite ease-in-out' }} />
        <Star size={28} className="absolute top-[34%] right-[14%] text-[#D4AF37] opacity-50" style={{ animation: 'float 7s infinite ease-in-out' }} />
        <Heart size={26} className="absolute bottom-[26%] left-[21%] text-rose-400 opacity-40" style={{ animation: 'floatB 9s infinite ease-in-out' }} />

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-10">
          <p className="text-[#D4AF37] tracking-[0.3em] uppercase text-sm mb-6 reveal-on-scroll">Premium Bar Service</p>
          <h1 className="font-serif-bav text-6xl md:text-8xl lg:text-[7rem] mb-6 gold-grad gold-glow leading-tight reveal-on-scroll" style={{ transitionDelay: '0.15s' }}>
            Elevate Your Events
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light mb-12 max-w-2xl mx-auto leading-relaxed reveal-on-scroll" style={{ transitionDelay: '0.3s' }}>
            Luxury mocktail experience for your most unforgettable celebrations
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center reveal-on-scroll" style={{ transitionDelay: '0.45s' }}>
            <a href="#book" className="group relative px-8 py-4 bg-[#D4AF37] text-black font-semibold uppercase tracking-widest overflow-hidden rounded-sm hover:scale-105 transition-transform duration-300 flex items-center gap-2">
              Book Your Experience
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#drinks" className="px-8 py-4 border-2 border-white/20 hover:border-[#D4AF37] hover:text-[#D4AF37] bg-white/5 backdrop-blur-sm uppercase tracking-widest transition-all duration-300 rounded-sm">
              Explore Our Drinks
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 animate-bounce">
          <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M19 12l-7 7-7-7"/>
          </svg>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section id="experience" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] to-[#0f0a14] z-0" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20 reveal-on-scroll">
            <h2 className="font-serif-bav text-4xl md:text-5xl mb-4">
              <span className="text-[#D4AF37]">The Bavista</span> Experience
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {events.map(({ Icon, title, desc }, i) => (
              <div
                key={i}
                className="glass-panel p-10 rounded-xl text-center group hover:-translate-y-2 transition-all duration-500 reveal-on-scroll"
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#D4AF37]/10 flex items-center justify-center group-hover:bg-[#D4AF37]/20 transition-colors duration-300">
                  <Icon size={30} className="text-[#D4AF37]" />
                </div>
                <h3 className="font-serif-bav text-2xl mb-4 text-white group-hover:text-[#D4AF37] transition-colors">{title}</h3>
                <p className="text-gray-400 font-light leading-relaxed">{desc}</p>
                <div className="w-0 h-0.5 bg-[#D4AF37] mx-auto mt-8 group-hover:w-16 transition-all duration-500 opacity-60" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DRINKS SHOWCASE ── */}
      <section id="drinks" className="py-32 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 reveal-on-scroll">
            <span className="text-sm tracking-[0.2em] text-[#D4AF37] uppercase mb-4 block">Taste The Extraordinary</span>
            <h2 className="font-serif-bav text-4xl md:text-5xl">Our Signature Collection</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {drinks.map(({ Icon, name, desc, glow, glowSolid }, i) => (
              <div
                key={i}
                className="glass-panel p-8 rounded-xl relative overflow-hidden group cursor-default transition-all duration-500 reveal-on-scroll"
                style={{ transitionDelay: `${i * 0.1}s`, boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 45px ${glow}`;
                  (e.currentTarget as HTMLElement).style.transform = 'scale(1.03) rotate(0.8deg)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
                  (e.currentTarget as HTMLElement).style.transform = '';
                }}
              >
                <div className="absolute -bottom-16 -right-16 w-36 h-36 rounded-full blur-[50px] opacity-15 group-hover:opacity-55 transition-opacity duration-700" style={{ background: glowSolid }} />
                <div className="w-14 h-14 mb-6 rounded-xl bg-white/5 flex items-center justify-center relative z-10">
                  <Icon size={28} className="text-[#D4AF37]" />
                </div>
                <h3 className="font-serif-bav text-2xl text-[#D4AF37] mb-3 relative z-10">{name}</h3>
                <p className="text-gray-400 font-light text-sm leading-relaxed relative z-10">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-32 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 reveal-on-scroll">
            <h2 className="font-serif-bav text-4xl md:text-5xl mb-4">What Our Clients Say</h2>
            <div className="w-24 h-px bg-[#D4AF37] mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { text: "The presentation alone was worth it, but the flavors were incredible. Our wedding guests are still talking about the Velvet Rose.", author: "Sarah & James", event: "Wedding Reception" },
              { text: "Bavista elevated our corporate gala to a completely new level. Professional, visually stunning, and absolutely delicious.", author: "Marcus T.", event: "Corporate Gala" },
              { text: "We wanted something special for our anniversary that didn't involve alcohol. This was luxurious and perfect.", author: "Elena R.", event: "10th Anniversary" },
            ].map((t, i) => (
              <div key={i} className="bg-[#111] border border-[#1e1e1e] hover:border-[#D4AF37]/40 p-8 rounded-xl relative group transition-all duration-500 reveal-on-scroll" style={{ transitionDelay: `${i * 0.15}s` }}>
                <Quote className="absolute top-6 right-6 text-[#D4AF37] opacity-15 w-10 h-10" />
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => <Star key={j} size={14} fill="#D4AF37" className="text-[#D4AF37]" />)}
                </div>
                <p className="text-gray-300 font-light italic mb-8 leading-relaxed">"{t.text}"</p>
                <div>
                  <p className="font-serif-bav text-lg text-white">{t.author}</p>
                  <p className="text-xs tracking-widest text-[#D4AF37] uppercase mt-1">{t.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY STRIP ── */}
      <section id="gallery" className="py-24 overflow-hidden">
        <div className="text-center mb-16 reveal-on-scroll">
          <h2 className="font-serif-bav text-4xl md:text-5xl">Moments We've Created</h2>
        </div>
        <div className="w-full flex overflow-hidden">
          <div className="flex gap-5 px-2 whitespace-nowrap" style={{ animation: 'scrollLeft 35s linear infinite', width: 'max-content' }}>
            {[...Array(2)].map((_, j) => (
              <React.Fragment key={j}>
                {gallery.map((item, i) => (
                  <div key={i} className="relative w-72 md:w-96 h-64 md:h-72 rounded-xl overflow-hidden flex-shrink-0 group">
                    <img src={item.img} alt={item.text} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <p className="font-serif-bav text-lg text-white">{item.text}</p>
                    </div>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOOKING CTA ── */}
      <section id="book" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 glass-heavy p-10 md:p-16 rounded-2xl border border-[#D4AF37]/25 shadow-[0_0_60px_rgba(212,175,55,0.08)] reveal-on-scroll">
          <div className="text-center mb-10">
            <h2 className="font-serif-bav text-4xl md:text-5xl mb-4 text-[#D4AF37]">Ready to Elevate Your Event?</h2>
            <p className="text-gray-300 font-light text-lg">Limited dates available for 2025. Reserve your experience today.</p>
          </div>

          {isSubmitted ? (
            <div className="text-center py-14">
              <div className="w-20 h-20 rounded-full bg-[#D4AF37]/15 flex items-center justify-center mx-auto mb-6">
                <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h3 className="font-serif-bav text-3xl mb-2 text-white">Request Received</h3>
              <p className="text-gray-400">We will be in touch within 24 hours to discuss your event.</p>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-400">Event Type</label>
                  <select name="eventType" required value={formState.eventType} onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors appearance-none">
                    <option value="" disabled className="bg-[#111]">Select event type</option>
                    <option value="Wedding" className="bg-[#111]">Wedding</option>
                    <option value="Birthday" className="bg-[#111]">Birthday / Anniversary</option>
                    <option value="Corporate" className="bg-[#111]">Corporate Event</option>
                    <option value="Other" className="bg-[#111]">Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-400">Event Date</label>
                  <input type="date" name="date" required value={formState.date} onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors [color-scheme:dark]" />
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { name: 'guests', label: 'Guest Count', type: 'number', placeholder: 'e.g. 150' },
                  { name: 'name', label: 'Your Name', type: 'text', placeholder: 'John Doe' },
                  { name: 'email', label: 'Email Address', type: 'email', placeholder: 'john@example.com' },
                ].map(({ name, label, type, placeholder }) => (
                  <div key={name} className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-gray-400">{label}</label>
                    <input type={type} name={name} placeholder={placeholder} required
                      value={formState[name as keyof typeof formState]}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors" />
                  </div>
                ))}
              </div>
              <div className="pt-4">
                <button type="submit" disabled={isSubmitting}
                  className="w-full bg-[#D4AF37] hover:bg-[#FFD700] text-black font-semibold uppercase tracking-widest py-4 rounded-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.35)] disabled:opacity-70 flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Processing...
                    </>
                  ) : "Request Your Quote"}
                </button>
                <p className="text-center text-xs text-gray-500 mt-4">We'll get back to you within 24 hours.</p>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-black py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-6">
              <img src="/logo.png" alt="Mocktail by Bavista" className="h-12 w-12 rounded-full object-cover" />
              <span className="font-serif-bav text-xl text-[#D4AF37]">Mocktail by Bavista</span>
            </a>
            <p className="text-gray-400 font-light max-w-sm mb-8 leading-relaxed">
              Elevating events with premium, visually stunning, and delightfully crafted mocktail experiences.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all">
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-serif-bav text-xl mb-6 text-white">Contact</h4>
            <ul className="space-y-4 text-gray-400 font-light text-sm">
              <li className="flex items-center gap-3"><Mail size={15} className="text-[#D4AF37] flex-shrink-0" /> hello@bavista.com</li>
              <li className="flex items-center gap-3"><Phone size={15} className="text-[#D4AF37] flex-shrink-0" /> +1 (555) 123-4567</li>
              <li className="flex items-start gap-3"><MapPin size={15} className="text-[#D4AF37] mt-0.5 flex-shrink-0" /><span>Los Angeles, CA<br/>Available Nationwide</span></li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif-bav text-xl mb-6 text-white">Company</h4>
            <ul className="space-y-3 text-gray-400 font-light text-sm">
              {['Our Story', 'Testimonials', 'FAQ', 'Privacy Policy'].map(l => (
                <li key={l}><a href="#" className="hover:text-[#D4AF37] transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs tracking-wider uppercase">© 2025 Mocktail by Bavista. All rights reserved.</p>
          <p className="text-gray-600 text-xs">Designed for unforgettable moments.</p>
        </div>
      </footer>
    </div>
  );
}
