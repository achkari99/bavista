import React, { useState, useEffect } from 'react';
import { Instagram, Twitter, Facebook, Mail, Phone, MapPin, Quote, ChevronRight, Star } from 'lucide-react';

export function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [formState, setFormState] = useState({
    eventType: '',
    date: '',
    guests: '',
    name: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up', 'opacity-100');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
      el.classList.add('opacity-0');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden font-sans selection:bg-[#D4AF37] selection:text-black">
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap');

        :root {
          --gold: #D4AF37;
          --gold-light: #FFD700;
          --gold-dark: #AA8B2C;
          --bg-dark: #0a0a0a;
          --bg-card: rgba(20, 20, 20, 0.7);
        }

        .font-serif-bavista {
          font-family: 'Cormorant Garamond', serif;
        }

        .glass-panel {
          background: var(--bg-card);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(212, 175, 55, 0.15);
        }

        .glass-panel-heavy {
          background: rgba(10, 10, 10, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(212, 175, 55, 0.2);
        }

        .text-gold-gradient {
          background: linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: shimmer 5s infinite linear;
          background-size: 200% auto;
        }

        .text-glow {
          text-shadow: 0 0 20px rgba(212, 175, 55, 0.5), 0 0 40px rgba(212, 175, 55, 0.3);
        }

        @keyframes shimmer {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }

        @keyframes float-delay {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-5deg); }
        }

        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .blob-1 {
          position: absolute;
          top: 20%;
          left: 10%;
          width: 40vw;
          height: 40vw;
          background: radial-gradient(circle, rgba(212,175,55,0.15) 0%, rgba(0,0,0,0) 70%);
          border-radius: 50%;
          filter: blur(60px);
          animation: float 15s infinite ease-in-out;
          pointer-events: none;
        }

        .blob-2 {
          position: absolute;
          bottom: 10%;
          right: 10%;
          width: 50vw;
          height: 50vw;
          background: radial-gradient(circle, rgba(255,149,0,0.1) 0%, rgba(0,0,0,0) 70%);
          border-radius: 50%;
          filter: blur(80px);
          animation: float-delay 20s infinite ease-in-out reverse;
          pointer-events: none;
        }

        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />

      {/* NAVIGATION */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-panel-heavy py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="font-serif-bavista text-2xl tracking-wider text-[#D4AF37] font-semibold flex items-center gap-2">
            <span className="text-3xl">✧</span>
            Mocktail by Bavista
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#experience" className="text-sm uppercase tracking-widest text-gray-300 hover:text-[#D4AF37] transition-colors">Experience</a>
            <a href="#drinks" className="text-sm uppercase tracking-widest text-gray-300 hover:text-[#D4AF37] transition-colors">Our Drinks</a>
            <a href="#gallery" className="text-sm uppercase tracking-widest text-gray-300 hover:text-[#D4AF37] transition-colors">Gallery</a>
            <a href="#book" className="px-6 py-2.5 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-300 text-sm uppercase tracking-widest rounded-sm">
              Reserve Your Event
            </a>
          </div>
          <button className="md:hidden text-[#D4AF37]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="blob-1"></div>
        <div className="blob-2"></div>
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen">
          <img src="/hero-bg.png" alt="Luxury Bar" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
        </div>
        <div className="absolute top-1/4 left-[15%] text-4xl" style={{ animation: 'float 6s infinite ease-in-out' }}>🥂</div>
        <div className="absolute bottom-1/3 right-[20%] text-5xl" style={{ animation: 'float-delay 8s infinite ease-in-out' }}>✨</div>
        <div className="absolute top-1/3 right-[15%] text-3xl" style={{ animation: 'float 7s infinite ease-in-out' }}>🍹</div>
        <div className="absolute bottom-1/4 left-[20%] text-4xl opacity-70" style={{ animation: 'float-delay 9s infinite ease-in-out' }}>🧊</div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-10">
          <h2 className="text-[#D4AF37] tracking-[0.3em] uppercase text-sm mb-6 reveal-on-scroll">Premium Bar Service</h2>
          <h1 className="font-serif-bavista text-6xl md:text-8xl lg:text-9xl mb-6 text-gold-gradient text-glow leading-tight reveal-on-scroll" style={{ animationDelay: '0.2s' }}>
            Elevate Your Events
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light mb-12 max-w-2xl mx-auto leading-relaxed reveal-on-scroll" style={{ animationDelay: '0.4s' }}>
            Luxury mocktail experience for your most unforgettable celebrations
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center reveal-on-scroll" style={{ animationDelay: '0.6s' }}>
            <a href="#book" className="group relative px-8 py-4 bg-[#D4AF37] text-black font-semibold uppercase tracking-widest overflow-hidden rounded-sm hover:scale-105 transition-transform duration-300">
              <span className="relative z-10 flex items-center gap-2">
                Book Your Experience <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            </a>
            <a href="#drinks" className="px-8 py-4 border-2 border-white/20 hover:border-[#D4AF37] hover:text-[#D4AF37] bg-white/5 backdrop-blur-sm uppercase tracking-widest transition-all duration-300 rounded-sm">
              Explore Our Drinks
            </a>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
          <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M19 12l-7 7-7-7"/>
          </svg>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] to-[#0f0a14] z-0"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20 reveal-on-scroll">
            <h2 className="font-serif-bavista text-4xl md:text-5xl mb-4"><span className="text-[#D4AF37]">The Bavista</span> Experience</h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '💍', title: 'Weddings', desc: 'Make your special day extraordinary with our bespoke mocktail curation.' },
              { icon: '🎉', title: 'Celebrations', desc: 'Turn any anniversary or birthday into a luxury affair to remember.' },
              { icon: '🌟', title: 'Corporate Events', desc: 'Impress clients and reward your team with premium bar service.' }
            ].map((card, i) => (
              <div key={i} className="glass-panel p-10 rounded-xl text-center group hover:-translate-y-2 transition-all duration-500 reveal-on-scroll" style={{ animationDelay: `${i * 0.2}s` }}>
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{card.icon}</div>
                <h3 className="font-serif-bavista text-2xl mb-4 text-white group-hover:text-[#D4AF37] transition-colors">{card.title}</h3>
                <p className="text-gray-400 font-light leading-relaxed">{card.desc}</p>
                <div className="w-0 h-0.5 bg-[#D4AF37] mx-auto mt-8 group-hover:w-full transition-all duration-500 opacity-50"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DRINKS SHOWCASE */}
      <section id="drinks" className="py-32 relative bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 reveal-on-scroll">
            <span className="text-sm tracking-[0.2em] text-[#D4AF37] uppercase mb-4 block">Taste The Extraordinary</span>
            <h2 className="font-serif-bavista text-4xl md:text-5xl">Our Signature Collection</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '🍓', name: 'Velvet Rose', desc: 'Muddled strawberries, rose water, fresh lemon, topped with sparkling elderflower.', glow: 'rgba(220, 20, 60, 0.4)' },
              { icon: '🍋', name: 'Citrus Crown', desc: 'Charred lemon, yuzu extract, agave, smoked sea salt rim.', glow: 'rgba(255, 215, 0, 0.3)' },
              { icon: '🫐', name: 'Midnight Berry', desc: 'Blackberry reduction, activated charcoal, lime, ginger beer.', glow: 'rgba(138, 43, 226, 0.3)' },
              { icon: '🥭', name: 'Golden Mango', desc: 'Alphonso mango purée, jalapeño simple syrup, chili-lime salt.', glow: 'rgba(255, 140, 0, 0.3)' },
              { icon: '🌿', name: 'The Garden', desc: 'Cucumber ribbons, fresh basil, lime juice, aloe vera water.', glow: 'rgba(46, 139, 87, 0.3)' },
              { icon: '🍊', name: 'Sunset Blaze', desc: 'Blood orange, grapefruit bitters, rosemary sprig, tonic.', glow: 'rgba(255, 69, 0, 0.3)' },
            ].map((drink, i) => (
              <div
                key={i}
                className="glass-panel p-8 rounded-xl relative overflow-hidden group transition-all duration-500 reveal-on-scroll"
                style={{ animationDelay: `${i * 0.15}s`, boxShadow: `0 10px 30px rgba(0,0,0,0.5)` }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 20px 40px ${drink.glow}`;
                  e.currentTarget.style.transform = 'scale(1.03) rotate(1deg)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `0 10px 30px rgba(0,0,0,0.5)`;
                  e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                }}
              >
                <div
                  className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full blur-[50px] opacity-20 group-hover:opacity-60 transition-opacity duration-700"
                  style={{ background: drink.glow.replace('0.3', '1').replace('0.4', '1') }}
                ></div>
                <div className="text-6xl mb-6 relative z-10">{drink.icon}</div>
                <h3 className="font-serif-bavista text-2xl text-[#D4AF37] mb-3 relative z-10">{drink.name}</h3>
                <p className="text-gray-400 font-light text-sm leading-relaxed relative z-10">{drink.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-32 relative bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 reveal-on-scroll">
            <h2 className="font-serif-bavista text-4xl md:text-5xl mb-4">What Our Clients Say</h2>
            <div className="w-24 h-px bg-[#D4AF37] mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { text: "The presentation alone was worth it, but the flavors were incredible. Our wedding guests are still talking about the Velvet Rose.", author: "Sarah & James", event: "Wedding Reception" },
              { text: "Bavista elevated our corporate gala to a completely new level. Professional, visually stunning, and absolutely delicious.", author: "Marcus T.", event: "Corporate Gala" },
              { text: "We wanted something special for our anniversary that didn't involve alcohol. This was luxurious and perfect.", author: "Elena R.", event: "10th Anniversary" }
            ].map((testimonial, i) => (
              <div key={i} className="bg-[#111] border border-[#222] hover:border-[#D4AF37]/50 p-8 rounded-xl relative group transition-colors duration-500 reveal-on-scroll" style={{ animationDelay: `${i * 0.2}s` }}>
                <Quote className="absolute top-6 right-6 text-[#D4AF37] opacity-20 w-12 h-12" />
                <div className="flex gap-1 mb-6 text-[#D4AF37]">
                  {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                </div>
                <p className="text-gray-300 font-light italic mb-8 relative z-10">"{testimonial.text}"</p>
                <div>
                  <h4 className="font-serif-bavista text-xl text-white">{testimonial.author}</h4>
                  <span className="text-sm tracking-wider text-[#D4AF37] uppercase text-xs">{testimonial.event}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY STRIP */}
      <section id="gallery" className="py-24 overflow-hidden relative">
        <div className="text-center mb-16 reveal-on-scroll">
          <h2 className="font-serif-bavista text-4xl md:text-5xl">Moments We've Created</h2>
        </div>
        <div className="w-full flex overflow-hidden">
          <div className="flex gap-4 px-2 whitespace-nowrap" style={{ animation: 'scrollLeft 30s linear infinite', width: 'max-content' }}>
            {[...Array(2)].map((_, j) => (
              <React.Fragment key={j}>
                {[
                  { icon: '🎊', bg: 'from-purple-900/40 to-black', text: 'New Year Eve 2024' },
                  { img: '/gallery-1.png', text: "Sarah's Wedding" },
                  { icon: '🥂', bg: 'from-amber-900/40 to-black', text: 'Corporate Gala' },
                  { icon: '💫', bg: 'from-blue-900/40 to-black', text: 'Fashion Week Party' },
                  { icon: '🍹', bg: 'from-rose-900/40 to-black', text: 'Summer Soirée' },
                  { icon: '🌟', bg: 'from-emerald-900/40 to-black', text: 'Awards Night' },
                ].map((item, i) => (
                  <div key={i} className="relative w-72 md:w-96 h-64 md:h-80 rounded-xl overflow-hidden flex-shrink-0 group/item">
                    {item.img ? (
                      <img src={item.img} alt={item.text} className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-700" />
                    ) : (
                      <div className={`w-full h-full bg-gradient-to-br ${item.bg} flex items-center justify-center text-6xl group-hover/item:scale-110 transition-transform duration-700`}>
                        {item.icon}
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/40 group-hover/item:bg-black/20 transition-colors duration-500"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover/item:translate-y-0 group-hover/item:opacity-100 transition-all duration-300">
                      <h4 className="font-serif-bavista text-xl text-white">{item.text}</h4>
                    </div>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING CTA SECTION */}
      <section id="book" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/20 via-black to-black opacity-30"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 glass-panel-heavy p-10 md:p-16 rounded-2xl border border-[#D4AF37]/30 shadow-[0_0_50px_rgba(212,175,55,0.1)] reveal-on-scroll">
          <div className="text-center mb-10">
            <h2 className="font-serif-bavista text-4xl md:text-5xl mb-4 text-[#D4AF37]">Ready to Elevate Your Event?</h2>
            <p className="text-gray-300 font-light text-lg">Limited dates available for 2025. Reserve your experience today.</p>
          </div>
          {isSubmitted ? (
            <div className="text-center py-16 animate-fade-in-up">
              <div className="w-20 h-20 rounded-full bg-[#D4AF37]/20 flex items-center justify-center mx-auto mb-6">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3 className="font-serif-bavista text-3xl mb-2 text-white">Request Received</h3>
              <p className="text-gray-400">We will be in touch within 24 hours to discuss your event.</p>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-400">Event Type</label>
                  <select
                    name="eventType"
                    required
                    value={formState.eventType}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-colors appearance-none"
                  >
                    <option value="" disabled className="bg-[#111]">Select event type</option>
                    <option value="Wedding" className="bg-[#111]">Wedding</option>
                    <option value="Birthday" className="bg-[#111]">Birthday / Anniversary</option>
                    <option value="Corporate" className="bg-[#111]">Corporate Event</option>
                    <option value="Other" className="bg-[#111]">Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-400">Event Date</label>
                  <input
                    type="date"
                    name="date"
                    required
                    value={formState.date}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-colors [color-scheme:dark]"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-400">Guest Count</label>
                  <input
                    type="number"
                    name="guests"
                    placeholder="e.g. 150"
                    required
                    value={formState.guests}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-400">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-400">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-colors"
                  />
                </div>
              </div>
              <div className="pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#D4AF37] hover:bg-[#FFD700] text-black font-semibold uppercase tracking-widest py-4 rounded-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] disabled:opacity-70 flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : "Request Your Quote"}
                </button>
                <p className="text-center text-xs text-gray-500 mt-4">We'll get back to you within 24 hours.</p>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="font-serif-bavista text-2xl tracking-wider text-[#D4AF37] font-semibold flex items-center gap-2 mb-6">
              <span className="text-3xl">✧</span>
              Mocktail by Bavista
            </a>
            <p className="text-gray-400 font-light max-w-sm mb-8">
              Elevating events with premium, visually stunning, and delightfully crafted mocktail experiences.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-serif-bavista text-xl mb-6 text-white">Contact</h4>
            <ul className="space-y-4 text-gray-400 font-light text-sm">
              <li className="flex items-center gap-3"><Mail size={16} className="text-[#D4AF37]" /> hello@bavista.com</li>
              <li className="flex items-center gap-3"><Phone size={16} className="text-[#D4AF37]" /> +1 (555) 123-4567</li>
              <li className="flex items-start gap-3"><MapPin size={16} className="text-[#D4AF37] mt-1" /> Los Angeles, CA<br/>Available Nationwide</li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif-bavista text-xl mb-6 text-white">Company</h4>
            <ul className="space-y-3 text-gray-400 font-light text-sm">
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Testimonials</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs tracking-wider uppercase">© 2025 Mocktail by Bavista. All rights reserved.</p>
          <p className="text-gray-600 text-xs">Designed for unforgettable moments.</p>
        </div>
      </footer>
    </div>
  );
}
