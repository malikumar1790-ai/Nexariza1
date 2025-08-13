import { motion } from 'framer-motion';
import { 
  Mail, Phone, MapPin, Clock, 
  Twitter, Linkedin, Github, Instagram,
  ArrowUp, Sparkles, Bot, Heart,
  ExternalLink, Star
} from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    services: [
      { name: 'AI Chatbots', href: '/services' },
      { name: 'Computer Vision', href: '/services' },
      { name: 'Voice AI', href: '/voice-bot' },
      { name: 'Custom Solutions', href: '/services' },
    ],
    company: [
      { name: t('nav.about'), href: '/about' },
      { name: 'Portfolio', href: '/portfolio' },
      { name: t('nav.projectBuilder'), href: '/project-builder' },
      { name: t('nav.contact'), href: '/contact' },
    ],
    resources: [
      { name: 'Documentation', href: '#' },
      { name: 'API Reference', href: '#' },
      { name: 'Case Studies', href: '#' },
      { name: 'Blog', href: '#' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'GDPR Compliance', href: '#' },
    ]
  };

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/nexariza', color: 'hover:text-blue-400' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/nexariza', color: 'hover:text-blue-500' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/nexariza', color: 'hover:text-gray-300' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/nexariza', color: 'hover:text-pink-400' },
  ];

  const contactInfo = [
    { icon: Mail, text: 'contact@nexariza.com', href: 'mailto:contact@nexariza.com' },
    { icon: Phone, text: '+971 50 123 4567', href: 'tel:+971501234567' },
    { icon: MapPin, text: 'Dubai, UAE', href: '#' },
    { icon: Clock, text: '24/7 Support', href: '#' },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-black via-gray-900 to-black border-t border-white/5 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Main Footer Content */}
        <div className="pt-20 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center space-x-4 mb-8">
                  <motion.div
                    className="relative"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.8, type: "spring" }}
                  >
                    <div className="w-14 h-14 bg-gradient-to-r from-blue-400 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25">
                      <Bot className="w-8 h-8 text-white" />
                    </div>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 rounded-2xl blur-lg opacity-30"
                      animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                  <div>
                    <h3 className="text-3xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent tracking-tight">
                      Nexariza
                    </h3>
                    <div className="flex items-center space-x-2 text-sm text-gray-300 font-medium">
                      <span>POWERED BY AI</span>
                      <Sparkles className="w-4 h-4 text-blue-400" />
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-200 mb-8 leading-relaxed text-lg">
                  Leading AI solutions company transforming businesses worldwide with cutting-edge artificial intelligence. 
                  We create intelligent systems that drive innovation, growth, and success.
                </p>

                {/* Contact Info */}
                <div className="space-y-4">
                  {contactInfo.map((contact, index) => (
                    <motion.a
                      key={index}
                      href={contact.href}
                      <div className="p-2 bg-white/5 rounded-lg group-hover:bg-blue-500/20 transition-all duration-300">
                        <contact.icon className={`h-5 w-5 group-hover:scale-110 transition-transform`} />
                      </div>
                      whileHover={{ x: 8, scale: 1.02 }}
                        <p className="font-medium">{contact.text}</p>
                      <span className="text-sm">{contact.text}</span>
                    </motion.a>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex space-x-4 mt-8">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-white/10 backdrop-blur-lg rounded-2xl flex items-center justify-center text-gray-300 ${social.color} transition-all duration-300 hover:bg-white/20 hover:shadow-lg hover:shadow-white/10`}
                      whileHover={{ scale: 1.15, rotate: 10 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-bold mb-6 flex items-center text-lg">
                <Bot className="w-5 h-5 mr-3 text-blue-400" />
                {t('footer.services')}
              </h4>
              <ul className="space-y-4">
                {footerLinks.services.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a
                      href={link.href}
                      className="text-gray-200 hover:text-blue-400 transition-all duration-300 flex items-center group hover:translate-x-2"
                    >
                      <span className="font-medium">{link.name}</span>
                      <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-white font-bold mb-6 flex items-center text-lg">
                <Star className="w-5 h-5 mr-3 text-purple-400" />
                {t('footer.company')}
              </h4>
              <ul className="space-y-4">
                {footerLinks.company.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a
                      href={link.href}
                      className="text-gray-200 hover:text-purple-400 transition-all duration-300 flex items-center group hover:translate-x-2"
                    >
                      <span className="font-medium">{link.name}</span>
                      <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-white font-bold mb-6 flex items-center text-lg">
                <Sparkles className="w-5 h-5 mr-3 text-green-400" />
                {t('footer.legal')}
              </h4>
              <ul className="space-y-4">
                {footerLinks.legal.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a
                      href={link.href}
                      className="text-gray-200 hover:text-green-400 transition-all duration-300 flex items-center group hover:translate-x-2"
                    >
                      <span className="font-medium">{link.name}</span>
                      <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t border-white/5 pt-12 pb-8"
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-3">{t('footer.stayUpdated')}</h3>
              <p className="text-gray-200 mb-6 text-lg">Get the latest AI insights and updates delivered to your inbox</p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder={t('footer.emailPlaceholder')}
                  className="flex-1 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-all duration-300 font-medium"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-blue-500/25"
                >
                  {t('footer.subscribe')}
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 pb-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-gray-300 flex items-center font-medium">
              <span>© {currentYear} Nexariza. {t('footer.madeWith')}</span>
              <Heart className="w-5 h-5 mx-2 text-red-400 animate-pulse" />
              <span>{t('footer.by')}</span>
            </div>
            
            <div className="flex items-center space-x-8">
              <div className="text-gray-300 font-medium">
                {t('footer.poweredBy')}
              </div>
              
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              >
                <ArrowUp className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
