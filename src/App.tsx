import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarEnhanced from './components/Navbar-enhanced';
import ChatWidget from './components/ChatWidget';
import HomepageNew from './pages/Homepage-new';
import AboutEnhanced from './pages/About-enhanced';
import ServicesEnhanced from './pages/Services-enhanced';
import VoiceBot from './pages/VoiceBot';
import ProjectBuilderEnhanced from './pages/ProjectBuilder-enhanced';
import Dashboard from './pages/Dashboard';
import PortfolioEnhanced from './pages/Portfolio-enhanced';
import ContactEnhanced from './pages/Contact-enhanced';
import Footer from './components/Footer-enhanced';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <Router>
      <div className={`${darkMode ? 'dark' : ''} min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-x-hidden`}>
        <div className="relative">
          {/* Advanced Background Effects inspired by imagine.art */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            {/* Gradient Mesh Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20"></div>
            
            {/* Interactive Mouse Following Gradient */}
            <div 
              className="absolute w-96 h-96 bg-gradient-conic from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-full blur-3xl transition-all duration-1000 ease-out"
              style={{
                left: mousePosition.x - 192,
                top: mousePosition.y - 192,
              }}
            ></div>
            
            {/* Floating Orbs */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
            <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-3000"></div>
            
            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="w-full h-full bg-gradient-to-r from-transparent via-white/2 to-transparent bg-[length:60px_60px] bg-repeat"></div>
            </div>
          </div>
          
          <div className="relative z-10">
            <NavbarEnhanced darkMode={darkMode} setDarkMode={setDarkMode} />
            <Routes>
              <Route path="/" element={<HomepageNew />} />
              <Route path="/about" element={<AboutEnhanced />} />
              <Route path="/services" element={<ServicesEnhanced />} />
              <Route path="/voice-bot" element={<VoiceBot />} />
              <Route path="/project-builder" element={<ProjectBuilderEnhanced />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/portfolio" element={<PortfolioEnhanced />} />
              <Route path="/contact" element={<ContactEnhanced />} />
            </Routes>
            <Footer />
            <ChatWidget />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;