import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Brain, 
  Zap, 
  Eye, 
  MessageSquare, 
  Code, 
  Star, 
  Globe, 
  Users, 
  TrendingUp,
  Sparkles,
  Play,
  Shield,
  Award,
  Rocket
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';

// 3D Particle System Component
const ParticleSystem = () => {
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, size: number, speed: number}>>([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 4 + 1,
        speed: Math.random() * 2 + 0.5
      }));
      setParticles(newParticles);
    };

    generateParticles();
    window.addEventListener('resize', generateParticles);
    return () => window.removeEventListener('resize', generateParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-blue-400/20 rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            x: [particle.x, particle.x + 100, particle.x - 50, particle.x],
            y: [particle.y, particle.y - 100, particle.y + 50, particle.y],
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
};

// Floating AI Model Cards
const AIModelCard = ({ icon, title, description, color, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.8 }}
    whileHover={{ scale: 1.05, rotateY: 5 }}
    className={`relative group cursor-pointer`}
  >
    <div className={`absolute inset-0 bg-gradient-to-r ${color} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl`}></div>
    <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:border-white/40 transition-all duration-300">
      <div className={`text-4xl mb-4 ${color.includes('blue') ? 'text-blue-400' : color.includes('purple') ? 'text-purple-400' : 'text-cyan-400'}`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </div>
  </motion.div>
);

// Stats Counter Component
const StatsCounter = ({ end, label, suffix = "" }: { end: number; label: string; suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev < end) {
          return Math.min(prev + Math.ceil(end / 100), end);
        }
        return end;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
        {count}{suffix}
      </div>
      <div className="text-gray-300 text-sm md:text-base">{label}</div>
    </motion.div>
  );
};

export default function Homepage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const { t } = useTranslation();

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO, TechFlow Inc",
      content: "Nexariza transformed our customer service with an AI chatbot that reduced response time by 80%. The location-based pricing made it incredibly affordable for our startup.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Marcus Rodriguez",
      role: "Founder, DataDriven Solutions",
      content: "The computer vision system they built for our manufacturing line detected defects with 99.2% accuracy. ROI was achieved in just 3 months.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Dr. Amina Hassan",
      role: "Head of Innovation, HealthTech Labs",
      content: "Their NLP model for medical document analysis saved our team 40 hours per week. The free open-source approach aligned perfectly with our budget constraints.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black overflow-hidden relative">
      {/* Premium Background Images */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/50 to-black"></div>
        
        {/* Rotating Background Images */}
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{ 
            backgroundImage: [
              'url(https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1920&h=1080&fit=crop&crop=center)',
              'url(https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1920&h=1080&fit=crop&crop=center)',
              'url(https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&h=1080&fit=crop&crop=center)',
              'url(https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&h=1080&fit=crop&crop=center)',
              'url(https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=1080&fit=crop&crop=center)'
            ]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        
        {/* Overlay Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30"></div>
      </div>

      {/* Particle Background */}
      <ParticleSystem />
      
      {/* Geometric Patterns */}
      <div className="absolute inset-0 opacity-5 z-10">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 border border-blue-400 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-purple-400 rounded-lg"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-cyan-400 rounded-full"
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative z-20 min-h-screen flex items-center justify-center px-6">
        <div className="max-w-8xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
              className="inline-flex items-center bg-white/10 backdrop-blur-2xl border border-white/20 rounded-full px-8 py-4 mb-12 shadow-2xl shadow-black/50"
            >
              <Sparkles className="text-yellow-400 mr-3" size={24} />
              <span className="text-white font-semibold text-lg">{t('hero.founder')}</span>
            </motion.div>
            
            <h1 className="text-6xl md:text-9xl font-black mb-8 leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-blue-300 via-purple-400 to-cyan-300 bg-clip-text text-transparent drop-shadow-2xl">
                {t('hero.title').split(' ')[0]} {t('hero.title').split(' ')[1]}
              </span>
              <br />
              <span className="text-white drop-shadow-2xl">for the</span>
              <br />
              <motion.span
                className="bg-gradient-to-r from-green-300 via-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-2xl"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                {t('hero.title').split(' ')[4]} {t('hero.title').split(' ')[5]}
              </motion.span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-xl md:text-3xl text-gray-100 max-w-6xl mx-auto mb-16 leading-relaxed font-light drop-shadow-lg"
            >
              {t('hero.description').split('100% free and open-source')[0]}
              <span className="text-blue-300 font-bold bg-blue-500/20 px-3 py-1 rounded-full border border-blue-400/30">
                100% free and open-source
              </span>
              {t('hero.description').split('100% free and open-source')[1]}
            </motion.p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-8 justify-center mb-20"
          >
            <Link to="/project-builder">
              <motion.button
                whileHover={{ scale: 1.08, boxShadow: "0 0 40px rgba(59, 130, 246, 0.6)" }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-10 py-5 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-3xl overflow-hidden transition-all duration-300 shadow-2xl shadow-blue-500/25 text-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative flex items-center">
                  {t('hero.experienceFuture')}
                  <Rocket className="ml-3 group-hover:translate-x-2 transition-transform duration-300" size={24} />
                </span>
              </motion.button>
            </Link>
            
            <Link to="/voice-bot">
              <motion.button
                whileHover={{ scale: 1.08, boxShadow: "0 0 40px rgba(168, 85, 247, 0.6)" }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-10 py-5 bg-white/10 backdrop-blur-2xl border-2 border-white/20 text-white font-bold rounded-3xl hover:border-white/40 transition-all duration-300 shadow-2xl text-lg"
              >
                <span className="relative flex items-center">
                  {t('hero.voiceConsultation')}
                  <MessageSquare className="ml-3 group-hover:animate-pulse" size={24} />
                </span>
              </motion.button>
            </Link>

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsVideoPlaying(true)}
              className="group relative px-10 py-5 bg-gradient-to-r from-green-500 to-cyan-600 text-white font-bold rounded-3xl transition-all duration-300 shadow-2xl shadow-green-500/25 text-lg"
            >
              <span className="relative flex items-center">
                {t('hero.watchDemo')}
                <Play className="ml-3 group-hover:scale-110 transition-transform duration-300" size={24} />
              </span>
            </motion.button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="flex flex-wrap justify-center items-center gap-12 text-gray-200"
          >
            <motion.div 
              className="flex items-center bg-white/5 backdrop-blur-lg px-6 py-3 rounded-2xl border border-white/10"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
            >
              <Shield className="text-green-400 mr-3" size={24} />
              <span className="font-semibold">{t('trust.openSource')}</span>
            </motion.div>
            <motion.div 
              className="flex items-center bg-white/5 backdrop-blur-lg px-6 py-3 rounded-2xl border border-white/10"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
            >
              <Globe className="text-blue-400 mr-3" size={24} />
              <span className="font-semibold">{t('trust.globalPricing')}</span>
            </motion.div>
            <motion.div 
              className="flex items-center bg-white/5 backdrop-blur-lg px-6 py-3 rounded-2xl border border-white/10"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
            >
              <Award className="text-purple-400 mr-3" size={24} />
              <span className="font-semibold">{t('trust.expertTeam')}</span>
            </motion.div>
            <motion.div 
              className="flex items-center bg-white/5 backdrop-blur-lg px-6 py-3 rounded-2xl border border-white/10"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
            >
              <Zap className="text-yellow-400 mr-3" size={24} />
              <span className="font-semibold">{t('trust.fastDeployment')}</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Floating AI Models Section */}
      <section className="relative z-20 py-32 px-6 bg-gradient-to-b from-transparent via-black/50 to-transparent">
        <div className="max-w-8xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-8 tracking-tight">
              AI Technologies We Master
            </h2>
            <p className="text-2xl text-gray-100 max-w-4xl mx-auto font-light">
              Cutting-edge AI models and frameworks, all using free and open-source solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <AIModelCard
              icon={<Brain />}
              title="Gemini Pro"
              description="Advanced multimodal AI for text, code, and analysis with free API access"
              color="from-blue-500 to-cyan-600"
              delay={0.1}
            />
            <AIModelCard
              icon={<Eye />}
              title="Computer Vision"
              description="Open-source image recognition and processing using TensorFlow and OpenCV"
              color="from-purple-500 to-pink-600"
              delay={0.2}
            />
            <AIModelCard
              icon={<MessageSquare />}
              title="NLP & Chatbots"
              description="Natural language processing with Hugging Face transformers and free models"
              color="from-green-500 to-teal-600"
              delay={0.3}
            />
            <AIModelCard
              icon={<Code />}
              title="Custom Models"
              description="Tailored AI solutions using PyTorch, scikit-learn, and open datasets"
              color="from-orange-500 to-red-600"
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-20 py-32 px-6">
        <div className="max-w-8xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-16 shadow-2xl"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
              <StatsCounter end={500} label="Projects Completed" suffix="+" />
              <StatsCounter end={98} label="Client Satisfaction" suffix="%" />
              <StatsCounter end={40} label="Countries Served" suffix="+" />
              <StatsCounter end={24} label="Support Hours" suffix="/7" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative z-20 py-32 px-6 bg-gradient-to-b from-transparent via-black/30 to-transparent">
        <div className="max-w-8xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-8 tracking-tight">
              What Clients Say
            </h2>
            <p className="text-2xl text-gray-100 max-w-4xl mx-auto font-light">
              Real results from real businesses using our AI solutions
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-12 text-center shadow-2xl"
              >
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={28} />
                  ))}
                </div>
                
                <blockquote className="text-2xl text-gray-100 mb-8 italic font-light leading-relaxed">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>
                
                <div className="flex items-center justify-center">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full mr-6 border-2 border-white/20"
                  />
                  <div className="text-left">
                    <div className="text-white font-bold text-lg">{testimonials[currentTestimonial].name}</div>
                    <div className="text-gray-300">{testimonials[currentTestimonial].role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center mt-10 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-blue-400 scale-125' : 'bg-gray-500 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-20 py-32 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-2xl border border-white/20 rounded-3xl p-16 shadow-2xl"
          >
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tight">
              Ready to Transform Your Business?
            </h2>
            <p className="text-2xl text-gray-100 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
              Join hundreds of companies already using our AI solutions. Get started with a free consultation and personalized quote.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/project-builder">
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-2xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-2xl shadow-blue-500/25 text-lg"
                >
                  Start Your AI Project
                </motion.button>
              </Link>
              
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-white/10 backdrop-blur-2xl border border-white/20 text-white font-bold rounded-2xl hover:border-white/40 transition-all duration-300 shadow-2xl text-lg"
                >
                  Get Free Consultation
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={() => setIsVideoPlaying(false)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl">
                <div className="text-center text-white">
                  <Play size={80} className="mx-auto mb-6" />
                  <p className="text-2xl font-bold">Demo Video Coming Soon</p>
                  <p className="text-gray-200 text-lg">Watch our AI solutions in action</p>
                </div>
              </div>
              <button
                onClick={() => setIsVideoPlaying(false)}
                className="absolute -top-6 -right-6 w-12 h-12 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors text-xl font-bold"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}