/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useSpring, useMotionValue, useInView } from 'motion/react';
import { LanguageProvider, useLanguage } from './LanguageContext';
import { Language } from './translations';
import { 
  Trophy, 
  Flag, 
  Target, 
  Gamepad2, 
  Cake, 
  Calendar, 
  MapPin, 
  Phone, 
  Mail, 
  ChevronRight, 
  Star,
  Menu,
  X,
  Clock,
  ArrowUpRight,
  Zap,
  Users,
  Instagram,
  Facebook,
  Twitter,
  ChevronDown,
  Ticket,
  Utensils,
  Pizza,
  Coffee,
  Check
} from 'lucide-react';

const attractions = [
  {
    id: 'go-karts',
    title: 'Go Karts',
    tag: 'Speed',
    description: 'Master the curves on our pro-grade track with high-performance karts.',
    icon: Flag,
    image: 'https://i.postimg.cc/N0c9wSB0/image.png',
    color: 'from-accent to-red-800',
    gridSpan: 'md:col-span-2 md:row-span-2'
  },
  {
    id: 'mini-golf',
    title: 'Mini Golf',
    tag: 'Skill',
    description: '18 holes of neon-lit adventure.',
    icon: Target,
    image: 'https://i.postimg.cc/vmbBKntB/image.png',
    color: 'from-secondary to-emerald-600',
    gridSpan: 'md:col-span-2 md:row-span-1'
  },
  {
    id: 'arcade',
    title: 'Arcade',
    tag: 'Play',
    description: 'The ultimate gaming destination with over 100 classic and modern titles.',
    icon: Gamepad2,
    image: 'https://i.postimg.cc/vmbBKntB/image.png',
    color: 'from-primary to-blue-800',
    gridSpan: 'md:col-span-1 md:row-span-1'
  },
  {
    id: 'batting',
    title: 'Batting',
    tag: 'Power',
    description: 'Swing for the fences.',
    icon: Trophy,
    image: 'https://i.postimg.cc/kG4RpS9w/image.png',
    color: 'from-blue-500 to-primary',
    gridSpan: 'md:col-span-1 md:row-span-1'
  }
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languages: { code: Language; flag: string; label: string }[] = [
    { code: 'en', flag: '🇺🇸', label: 'English' },
    { code: 'pt', flag: '🇧🇷', label: 'Português' },
    { code: 'es', flag: '🇪🇸', label: 'Español' },
  ];

  return (
    <nav className={`absolute top-0 left-0 right-0 z-[100] transition-all duration-500 px-6 md:px-12 ${scrolled ? 'py-4' : 'py-10'}`}>
      <div className={`max-w-[1400px] mx-auto flex justify-between items-center transition-all duration-500 rounded-[2.5rem] ${scrolled ? 'glass px-10 py-4 border-white/10 shadow-2xl' : ''}`}>
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4 group cursor-pointer"
        >
          <div className="relative">
            <motion.div 
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center shadow-lg border border-accent/30 overflow-hidden neon-glow-accent"
            >
              <img 
                src="https://i.postimg.cc/pV3cqFWk/image.png" 
                alt="Family Fun Town Logo" 
                className="w-full h-full object-contain p-2"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-heading font-bold uppercase tracking-tight leading-none">Family Fun Town</span>
            <span className="text-[8px] sm:text-[10px] font-medium uppercase tracking-[0.3em] text-white/40">Orange City • Florida</span>
          </div>
        </motion.div>

        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-2 mr-4">
            {languages.map((lang) => (
              <motion.button
                key={lang.code}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setLanguage(lang.code)}
                className={`text-xl p-1 rounded-lg transition-all ${language === lang.code ? 'bg-white/10' : 'opacity-40 hover:opacity-100'}`}
                title={lang.label}
              >
                {lang.flag}
              </motion.button>
            ))}
          </div>

          {[
            { key: 'attractions', label: t.nav.attractions },
            { key: 'birthdays', label: t.nav.birthdays },
            { key: 'specials', label: t.nav.specials },
            { key: 'contact', label: t.nav.contact }
          ].map((item, i) => (
            <motion.a 
              key={item.key} 
              href={`#${item.key}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/40 hover:text-white transition-all relative group"
            >
              {item.label}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
          <div className="flex items-center gap-3 px-4 py-2 glass rounded-full border-white/5">
            <div className="w-1.5 h-1.5 bg-secondary rounded-full animate-pulse" />
            <span className="text-[9px] font-bold uppercase tracking-widest text-white/60">{t.nav.openNow}</span>
          </div>
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 bg-white text-black text-[11px] font-bold uppercase tracking-[0.1em] rounded-full transition-all"
          >
            {t.nav.bookNow}
          </motion.button>
        </div>

        <motion.button 
          whileTap={{ scale: 0.9 }}
          className="lg:hidden w-12 h-12 glass rounded-2xl flex items-center justify-center text-white" 
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      <AnimatePresence>
        {mobileMenu && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[90] bg-black/95 backdrop-blur-3xl lg:hidden flex flex-col items-center justify-center gap-8"
          >
            <div className="flex justify-between items-center w-full px-12 mb-12">
              <span className="text-2xl font-display uppercase text-white">{t.nav.menu}</span>
              <div className="flex gap-4">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`text-2xl p-1 rounded-lg ${language === lang.code ? 'bg-white/10' : 'opacity-40'}`}
                  >
                    {lang.flag}
                  </button>
                ))}
              </div>
              <button onClick={() => setMobileMenu(false)} className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-white">
                <X size={24} />
              </button>
            </div>
            {[
              { key: 'attractions', label: t.nav.attractions },
              { key: 'birthdays', label: t.nav.birthdays },
              { key: 'specials', label: t.nav.specials },
              { key: 'contact', label: t.nav.contact }
            ].map((item, i) => (
              <motion.a 
                key={item.key} 
                href={`#${item.key}`} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-5xl font-display uppercase text-white hover:text-primary transition-colors" 
                onClick={() => setMobileMenu(false)}
              >
                {item.label}
              </motion.a>
            ))}
            <motion.button 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 px-12 py-6 bg-accent text-white font-black uppercase tracking-widest rounded-3xl"
            >
              {t.nav.bookNow}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const { t } = useLanguage();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);

  return (
    <section ref={containerRef} className="relative h-[110vh] flex items-center justify-center overflow-hidden perspective-1000">
      <motion.div style={{ y, scale, rotate }} className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://i.postimg.cc/kG4RpS9w/image.png"
          className="w-full h-full object-cover opacity-40 grayscale contrast-125"
        >
          <source src="/media/videoo.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 text-center px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass mb-10 border-white/5">
            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50">{t.hero.badge}</span>
          </div>
          
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10vw] font-heading font-bold uppercase leading-[0.9] tracking-tight mb-12">
            <motion.span 
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="block"
            >
              {t.hero.title1}
            </motion.span>
            <motion.span 
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="block text-white/20"
            >
              {t.hero.title2}
            </motion.span>
          </h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-12 py-5 bg-white text-black font-bold uppercase tracking-widest text-[11px] rounded-full shadow-2xl transition-all"
            >
              <span className="relative z-10 flex items-center gap-3">
                {t.hero.getStarted} <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.05)" }}
              className="px-12 py-5 glass text-white font-bold uppercase tracking-widest text-[11px] rounded-full border-white/10"
            >
              {t.hero.viewAttractions}
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute -bottom-40 -right-40 w-[60vw] h-[60vw] bg-primary/20 rounded-full blur-[150px] pointer-events-none"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          rotate: [0, -90, 0],
          opacity: [0.1, 0.25, 0.1]
        }}
        transition={{ duration: 25, repeat: Infinity }}
        className="absolute -top-40 -left-40 w-[50vw] h-[50vw] bg-accent/20 rounded-full blur-[150px] pointer-events-none"
      />

      <div className="absolute bottom-12 left-0 w-full px-12 flex justify-between items-end z-20">
        <div className="hidden lg:block">
          <div className="flex gap-10">
            {['Instagram', 'Facebook', 'TikTok'].map(s => (
              <a key={s} href="#" className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/40 hover:text-white transition-all">
                <span className="w-8 h-[1px] bg-white/10 group-hover:w-12 group-hover:bg-primary transition-all" />
                {s}
              </a>
            ))}
          </div>
        </div>
        <motion.div 
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-6"
        >
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/30 [writing-mode:vertical-rl]">{t.hero.explore}</span>
          <div className="w-[2px] h-24 bg-gradient-to-b from-primary via-secondary to-transparent rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};

const AttractionSection = () => {
  const { t } = useLanguage();
  return (
    <section id="attractions" className="py-40 bg-black relative overflow-hidden">
      {/* Background Floating Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ 
            y: [0, -100, 0],
            x: [0, 50, 0],
            rotate: [0, 45, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"
        />
        <motion.div 
          animate={{ 
            y: [0, 100, 0],
            x: [0, -50, 0],
            rotate: [0, -45, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-[100px]"
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-6">{t.attractions.badge}</div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold uppercase leading-[0.95] mb-8 text-white">
              {t.attractions.title1} <br />
              <span className="text-white/20">{t.attractions.title2}</span>
            </h2>
            <p className="text-lg text-white/40 font-medium leading-relaxed">
              {t.attractions.desc}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {attractions.map((attr, i) => {
            const trans = t.attractions.items[attr.id.replace(/-([a-z])/g, (g: any) => g[1].toUpperCase())];
            return (
              <motion.div
                key={attr.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-[2.5rem] glass border border-white/5 hover:border-primary/30 transition-all group"
              >
                <div className="mb-6">
                  <span className="px-4 py-1.5 bg-white/5 rounded-full text-[9px] font-bold uppercase tracking-widest text-white/60 mb-4 inline-block">
                    {trans.tag}
                  </span>
                  <h3 className="text-3xl font-heading font-bold uppercase text-white mb-4 group-hover:text-primary transition-colors">{trans.title}</h3>
                  <p className="text-sm text-white/40 leading-relaxed">{trans.desc}</p>
                </div>
                <div className="w-12 h-[1px] bg-white/10 group-hover:w-full group-hover:bg-primary transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};




const PricingSection = () => {
  const { t } = useLanguage();
  return (
    <section id="specials" className="py-40 bg-zinc-950 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="text-accent font-bold uppercase tracking-[0.3em] text-[10px] mb-6">{t.pricing.badge}</div>
            <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-heading font-bold uppercase leading-[0.95] mb-8 text-white">
            {t.pricing.title1} <br />
            <span className="text-white/20">{t.pricing.title2}</span>
          </h2>
          <p className="text-lg text-white/40 font-medium max-w-2xl mx-auto">
            {t.pricing.desc}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {t.pricing.items.map((item: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className={`relative p-10 rounded-[2.5rem] border ${i === 1 ? 'bg-white border-white shadow-2xl' : 'glass border-white/5'}`}
            >
              {i === 1 && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-accent text-white text-[9px] font-bold uppercase tracking-widest rounded-full">
                  Most Popular
                </div>
              )}
              <div className="mb-10">
                <h3 className={`text-2xl font-heading font-bold uppercase mb-4 ${i === 1 ? 'text-black' : 'text-white'}`}>{item.title}</h3>
                <div className="flex items-baseline gap-2">
                  <span className={`text-5xl font-heading font-bold ${i === 1 ? 'text-black' : 'text-white'}`}>{item.price}</span>
                  <span className={`text-[10px] font-bold uppercase tracking-widest ${i === 1 ? 'text-black/40' : 'text-white/20'}`}>/ Person</span>
                </div>
              </div>
              <ul className="space-y-4 mb-12">
                {item.features.map((feature: string, j: number) => (
                  <li key={j} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${i === 1 ? 'bg-black/5 text-black' : 'bg-white/5 text-white/40'}`}>
                      <Check size={12} />
                    </div>
                    <span className={`text-xs font-medium ${i === 1 ? 'text-black/70' : 'text-white/40'}`}>{feature}</span>
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-5 rounded-full font-bold uppercase tracking-widest text-[10px] transition-all ${i === 1 ? 'bg-black text-white' : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'}`}
              >
                {t.pricing.book}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FoodSection = () => {
  const { t } = useLanguage();
  return (
    <section className="py-40 bg-zinc-950 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="text-accent font-bold uppercase tracking-[0.3em] text-[10px] mb-6">{t.food.badge}</div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold uppercase leading-[0.95] mb-8 text-white">
              {t.food.title1} <br />
              <span className="text-white/20">{t.food.title2}</span>
            </h2>
            <p className="text-lg text-white/40 font-medium leading-relaxed">
              {t.food.desc}
            </p>
          </motion.div>
          <div className="hidden lg:flex gap-4">
            <div className="w-20 h-20 rounded-3xl glass flex items-center justify-center border-white/5">
              <Pizza className="text-accent" size={32} />
            </div>
            <div className="w-20 h-20 rounded-3xl glass flex items-center justify-center border-white/5">
              <Coffee className="text-primary" size={32} />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.food.items.map((item: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative glass p-8 rounded-[2rem] border-white/5 overflow-hidden"
            >
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-heading font-bold uppercase leading-none text-white">{item.title}</h3>
                  <span className="text-xl font-heading font-bold text-accent">{item.price}</span>
                </div>
                <p className="text-xs text-white/40 font-medium leading-relaxed mb-8">
                  {item.desc}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/20 group-hover:text-primary transition-colors">
                    <Utensils size={16} />
                  </div>
                  <div className="h-[1px] flex-grow bg-white/5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PlanSection = () => {
  const { t } = useLanguage();
  return (
    <section className="py-40 bg-black relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-secondary font-bold uppercase tracking-[0.3em] text-[10px] mb-6">{t.plan.badge}</div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold uppercase leading-[0.95] mb-10 text-white">
              {t.plan.title1} <br />
              <span className="text-white/20">{t.plan.title2}</span>
            </h2>
            <p className="text-lg text-white/40 mb-16 font-medium leading-relaxed mx-auto">
              {t.plan.desc}
            </p>

            <div className="space-y-8 text-left max-w-xl mx-auto">
              {t.plan.items.map((item: any, i: number) => (
                <div key={i} className="flex gap-6">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary shrink-0">
                    {i === 0 ? <Star size={20} /> : i === 1 ? <Clock size={20} /> : <MapPin size={20} />}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest mb-1 text-white">{item.title}</h4>
                    <p className="text-xs text-white/40 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const BirthdaySection = () => {
  const { t } = useLanguage();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section ref={containerRef} id="birthdays" className="py-40 bg-zinc-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-2/3 h-full bg-primary/5 blur-[180px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-2/3 h-full bg-secondary/5 blur-[180px] rounded-full translate-y-1/2 -translate-x-1/2" />
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-accent font-bold uppercase tracking-[0.3em] text-[10px] mb-6">{t.birthdays.badge}</div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold uppercase leading-[0.95] mb-10 text-white">
              {t.birthdays.title1} <br />
              <span className="text-white/20">{t.birthdays.title2}</span>
            </h2>
            <p className="text-lg text-white/40 mb-14 font-medium leading-relaxed mx-auto">
              {t.birthdays.desc}
            </p>
            
            <div className="grid gap-4 mb-16 text-left max-w-xl mx-auto">
              {[
                { title: t.birthdays.features[0].title, desc: t.birthdays.features[0].desc, icon: Zap, color: 'text-primary' },
                { title: t.birthdays.features[1].title, desc: t.birthdays.features[1].desc, icon: Users, color: 'text-secondary' },
                { title: t.birthdays.features[2].title, desc: t.birthdays.features[2].desc, icon: Trophy, color: 'text-accent' }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-6 p-6 glass-dark rounded-[2rem] hover:bg-white/5 transition-all group border-white/5"
                >
                  <div className={`w-12 h-12 rounded-full bg-white/5 flex items-center justify-center ${item.color} group-hover:bg-white group-hover:text-black transition-all duration-500`}>
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase tracking-widest text-xs mb-1 text-white">{item.title}</h4>
                    <p className="text-[10px] text-white/40">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-6 bg-white text-black font-bold uppercase tracking-[0.2em] text-[10px] rounded-full transition-all shadow-2xl font-heading max-w-xl mx-auto block"
            >
              {t.birthdays.exploreElite}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer id="contact" className="bg-black pt-40 pb-20 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-40">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 overflow-hidden">
                <img 
                  src="https://i.postimg.cc/pV3cqFWk/image.png" 
                  alt="Family Fun Town Logo" 
                  className="w-full h-full object-contain p-2"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-4xl font-heading font-bold uppercase tracking-tight text-white">Family Fun Town</span>
            </div>
            <h3 className="text-3xl font-light text-white/30 max-w-md leading-tight mb-12">
              {t.footer.desc}
            </h3>
            <div className="flex gap-6">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <motion.a 
                  key={i} 
                  href="#" 
                  whileHover={{ y: -5, color: "#ff3131" }}
                  className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-white/40 transition-all border-white/5"
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[9px] font-bold uppercase tracking-[0.3em] text-accent mb-10">{t.footer.explore}</h4>
            <ul className="space-y-4">
              {[
                { key: 'attractions', label: t.nav.attractions },
                { key: 'birthdays', label: t.nav.birthdays },
                { key: 'specials', label: t.nav.specials },
                { key: 'calendar', label: 'Calendar' },
                { key: 'careers', label: 'Careers' }
              ].map(item => (
                <li key={item.key}>
                  <a href="#" className="text-[13px] font-medium text-white/30 hover:text-white transition-all uppercase tracking-widest block">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[9px] font-bold uppercase tracking-[0.3em] text-secondary mb-10">{t.footer.support}</h4>
            <ul className="space-y-4">
              {['Contact Us', 'FAQs', 'Safety', 'Rules', 'Feedback'].map(item => (
                <li key={item}>
                  <a href="#" className="text-[13px] font-medium text-white/30 hover:text-white transition-all uppercase tracking-widest block">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-[9px] font-bold uppercase tracking-[0.3em] text-accent mb-10">{t.footer.location}</h4>
            <div className="space-y-8">
              <div className="flex gap-6">
                <MapPin className="text-white/20 shrink-0" size={20} />
                <span className="text-sm text-white/40 leading-relaxed font-medium">
                  401 S. Volusia Ave<br />
                  Orange City, FL 32763
                </span>
              </div>
              <div className="flex gap-6">
                <Phone className="text-white/20 shrink-0" size={20} />
                <span className="text-sm text-white/40 font-medium">(386) 775-3181</span>
              </div>
              <div className="p-6 glass rounded-[2rem] border-white/5">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="text-accent" size={16} />
                  <span className="text-[9px] font-bold uppercase tracking-widest text-white/60">{t.footer.openToday}</span>
                </div>
                <p className="text-sm font-bold text-white">10:00 AM — 11:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-8">
          <p className="text-[10px] font-black uppercase tracking-[0.5em] text-white/10">
            © 2026 Family Fun Town • {t.footer.designed}
          </p>
          <div className="flex gap-12">
            <a href="#" className="text-[10px] font-black uppercase tracking-[0.5em] text-white/10 hover:text-white transition-colors">{t.footer.privacy}</a>
            <a href="#" className="text-[10px] font-black uppercase tracking-[0.5em] text-white/10 hover:text-white transition-colors">{t.footer.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

const ImageCarousel = () => {
  const images = [
    '/images/2020-09-09 (1).webp',
    '/images/2020-09-09 (2).webp',
    '/images/2020-09-09 (3).webp',
    '/images/2020-09-09 (4).webp',
    '/images/2020-09-09 (5).webp',
    '/images/2020-09-09 (6).webp',
    '/images/2020-09-09.webp',
    '/images/unnamed (1).webp',
    '/images/unnamed (2).webp',
    '/images/unnamed (3).webp',
    '/images/unnamed (4).webp',
    '/images/unnamed.webp',
  ];

  // Duplicate images for infinite scroll effect
  const duplicatedImages = [...images, ...images];

  return (
    <section className="py-24 bg-black overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end gap-6"
        >
          <div>
            <div className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Visual Experience</div>
            <h2 className="text-4xl md:text-6xl font-heading font-bold uppercase text-white leading-none">
              Captured <span className="text-white/20">Moments</span>
            </h2>
          </div>
          <p className="text-sm text-white/40 max-w-sm font-medium">
            Take a glimpse into the high-energy atmosphere and unforgettable memories created at Family Fun Town.
          </p>
        </motion.div>
      </div>

      <div className="relative flex">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-6 px-3"
        >
          {duplicatedImages.map((src, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 0.98 }}
              className="w-[300px] md:w-[450px] aspect-[4/3] rounded-[2.5rem] overflow-hidden flex-shrink-0 border border-white/5 relative group"
            >
              <img
                src={src}
                alt={`Gallery image ${i}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const ImgsCarousel = () => {
  const images = [
    '/imgs/2020-09-09 (1).webp',
    '/imgs/2020-09-09 (2).webp',
    '/imgs/2020-09-09 (3).webp',
    '/imgs/2020-09-09 (4).webp',
    '/imgs/2020-09-09 (5).webp',
    '/imgs/2020-09-09.webp',
    '/imgs/2023-11-21 (1).webp',
    '/imgs/2023-11-21 (2).webp',
    '/imgs/2023-11-21.webp',
  ];

  const duplicatedImages = [...images, ...images];

  return (
    <section className="py-24 bg-zinc-950 overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end gap-6"
        >
          <div>
            <div className="text-accent font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Action & Speed</div>
            <h2 className="text-4xl md:text-6xl font-heading font-bold uppercase text-white leading-none">
              Pure <span className="text-white/20">Adrenaline</span>
            </h2>
          </div>
          <p className="text-sm text-white/40 max-w-sm font-medium">
            Feel the rush of our pro-grade tracks and high-performance machines.
          </p>
        </motion.div>
      </div>

      <div className="relative flex">
        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-6 px-3"
        >
          {duplicatedImages.map((src, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 0.98 }}
              className="w-[300px] md:w-[450px] aspect-[4/3] rounded-[2.5rem] overflow-hidden flex-shrink-0 border border-white/5 relative group"
            >
              <img
                src={src}
                alt={`Gallery image ${i}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

function AppContent() {
  const { t } = useLanguage();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-black selection:bg-white selection:text-black relative font-sans overflow-x-hidden">
      <div className="noise" />
      
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-white z-[200] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      <Hero />
      
      {/* Ticker */}
      <div className="py-12 bg-white overflow-hidden whitespace-nowrap border-y border-black relative z-20">
        <motion.div 
          animate={{ x: [0, -2500] }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="inline-block"
        >
          {[...Array(15)].map((_, i) => (
            <span key={i} className="text-3xl sm:text-5xl font-heading font-bold uppercase text-black mx-8 sm:mx-16 inline-flex items-center gap-4 sm:gap-8">
              <Star className="fill-current w-6 h-6 sm:w-10 sm:h-10" />
              {t.ticker.fun}
              <Zap className="fill-current w-6 h-6 sm:w-10 sm:h-10" />
              {t.ticker.racing}
              <Target className="fill-current w-6 h-6 sm:w-10 sm:h-10" />
              {t.ticker.golf}
              <Gamepad2 className="fill-current w-6 h-6 sm:w-10 sm:h-10" />
              {t.ticker.arcade}
            </span>
          ))}
        </motion.div>
      </div>

      <AttractionSection />

      <ImageCarousel />

      <PricingSection />

      <FoodSection />

      <ImgsCarousel />

      <PlanSection />

      {/* Stats Section */}
      <section className="py-60 bg-black relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid md:grid-cols-3 gap-32 relative z-10">
          {[
            { label: t.stats.guests, val: 500000, suffix: '+', color: 'text-white' },
            { label: t.stats.games, val: 100, suffix: '+', color: 'text-white' },
            { label: t.stats.rooms, val: 12, suffix: '', color: 'text-white' }
          ].map((s, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="text-center"
            >
              <div className={`text-6xl sm:text-8xl md:text-9xl font-heading font-bold uppercase mb-6 ${s.color} tracking-tight`}>
                <Counter value={s.val} />{s.suffix}
              </div>
              <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/20">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <BirthdaySection />

      {/* Call to Action */}
      <section className="py-40 bg-black">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative rounded-[3rem] overflow-hidden p-20 md:p-32 text-center border border-white/5"
          >
            <div className="absolute inset-0 z-0">
              <img 
                src="https://i.postimg.cc/vmbBKntB/image.png" 
                className="w-full h-full object-cover opacity-10 grayscale"
                alt="CTA Background"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            </div>
            <div className="relative z-10">
              <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-heading font-bold uppercase leading-[0.95] mb-12 text-white">
                {t.cta.title1} <br />
                <span className="text-white/20">{t.cta.title2}</span>
              </h2>
              <div className="flex justify-center">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-16 py-6 bg-white text-black font-bold uppercase tracking-[0.2em] text-[11px] rounded-full shadow-2xl transition-all"
            >
              {t.cta.book}
            </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <CustomCursor />
    </div>
  );
}

const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('a')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full bg-white/5 border border-white/10 pointer-events-none z-[9999] hidden md:block"
        animate={{
          x: mousePos.x - 16,
          y: mousePos.y - 16,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-1 h-1 rounded-full bg-white pointer-events-none z-[9999] hidden md:block"
        animate={{
          x: mousePos.x - 2,
          y: mousePos.y - 2,
        }}
        transition={{ type: "spring", stiffness: 1000, damping: 40, mass: 0.2 }}
      />
    </>
  );
};

const Counter = ({ value }: { value: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count >= 1000 ? (count / 1000).toFixed(0) + 'k' : count}</span>;
};
