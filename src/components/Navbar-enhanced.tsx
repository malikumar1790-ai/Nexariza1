import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Bot, Moon, Sun, Zap, Sparkles, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import LanguageSelector from './LanguageSelector';
import { useTranslation } from '../hooks/useTranslation';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { t, currentLanguage, changeLanguage } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: t('nav.home'), href: '/', icon: '🏠' },
    { name: t('nav.about'), href: '/about', icon: '👥' },
    { name: t('nav.services'), href: '/services', icon: '🤖' },
    { name: t('nav.voiceBot'), href: '/voice-bot', icon: '🎤', badge: 'AI' },
    { name: t('nav.projectBuilder'), href: '/project-builder', icon: '🛠️', badge: 'New' },
    { name: t('nav.portfolio'), href: '/portfolio', icon: '💼' },
    { name: t('nav.dashboard'), href: '/dashboard', icon: '📊' },
    { name: t('nav.contact'), href: '/contact', icon: '📞' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-black/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl shadow-black/50' 
          : 'bg-black/30 backdrop-blur-xl border-b border-white/5'
      }`}
    >
      <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center py-5">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div 
              className="relative"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.8, type: "spring" }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25">
                <Zap className="h-7 w-7 text-white" />
              </div>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 rounded-2xl blur-lg opacity-30"
                animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              ></motion.div>
            </motion.div>
            <div className="flex flex-col">
              <span className="text-3xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent tracking-tight">
                Nexariza
              </span>
              <span className="text-xs text-gray-300 -mt-1 font-medium tracking-wider">AI SOLUTIONS</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navigation.map((item) => (
              <motion.div key={item.name} className="relative">
                <Link
                  to={item.href}
                  className={`relative px-5 py-3 rounded-2xl transition-all duration-300 group flex items-center space-x-2 font-medium ${
                    location.pathname === item.href
                      ? 'text-blue-400 bg-blue-500/20 backdrop-blur-lg border border-blue-500/30 shadow-lg shadow-blue-500/10'
                      : 'text-gray-200 hover:text-white hover:bg-white/10 backdrop-blur-lg border border-transparent hover:border-white/20 hover:shadow-lg hover:shadow-white/5'
                  }`}
                >
                  <span className="text-base">{item.icon}</span>
                  <span>{item.name}</span>
                  {item.badge && (
                    <motion.span 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="px-2 py-0.5 bg-gradient-to-r from-green-400 to-blue-500 text-white text-xs font-bold rounded-full shadow-lg"
                    >
                      {item.badge}
                    </motion.span>
                  )}
                  {location.pathname === item.href && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl border border-blue-500/30"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <LanguageSelector 
              currentLanguage={currentLanguage} 
              onLanguageChange={changeLanguage} 
            />
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setDarkMode(!darkMode)}
              className="p-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl text-white hover:border-white/40 transition-all duration-300 hover:shadow-lg hover:shadow-white/10"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>
            
            <Link to="/voice-bot">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-2xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center space-x-2 group shadow-lg shadow-purple-500/25"
              >
                <Bot size={18} />
                <span>{t('nav.tryVoiceAI')}</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
            
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-bold rounded-2xl hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 shadow-lg shadow-blue-500/25 flex items-center space-x-2"
              >
                <Sparkles size={18} />
                <span>{t('nav.getStarted')}</span>
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-3">
            <LanguageSelector 
              currentLanguage={currentLanguage} 
              onLanguageChange={changeLanguage} 
            />
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setDarkMode(!darkMode)}
              className="p-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl text-white hover:border-white/40 transition-all duration-300"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl text-white hover:border-white/40 transition-all duration-300"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/95 backdrop-blur-2xl border-t border-white/10"
          >
            <div className="px-6 py-8 space-y-4">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center space-x-4 px-5 py-4 rounded-2xl transition-all duration-300 font-medium ${
                      location.pathname === item.href
                        ? 'text-blue-400 bg-blue-500/20 border border-blue-500/30 shadow-lg shadow-blue-500/10'
                        : 'text-gray-200 hover:text-white hover:bg-white/10 border border-transparent hover:border-white/20'
                    }`}
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-lg">{item.name}</span>
                    {item.badge && (
                      <span className="px-2 py-0.5 bg-gradient-to-r from-green-400 to-blue-500 text-white text-xs font-bold rounded-full shadow-lg">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                </motion.div>
              ))}
              
              {/* Mobile CTA Buttons */}
              <div className="pt-6 border-t border-white/10 space-y-4">
                <Link to="/voice-bot" onClick={() => setIsOpen(false)}>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-5 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-2xl flex items-center justify-center space-x-2 shadow-lg shadow-purple-500/25"
                  >
                    <Bot size={18} />
                    <span>{t('nav.tryVoiceAI')}</span>
                  </motion.button>
                </Link>
                
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-5 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-bold rounded-2xl flex items-center justify-center space-x-2 shadow-lg shadow-blue-500/25"
                  >
                    <Sparkles size={18} />
                    <span>{t('nav.getStarted')}</span>
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
