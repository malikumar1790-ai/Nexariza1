import { useState, useEffect } from 'react';

interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

const translations: Translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.voiceBot': 'Voice Bot',
    'nav.projectBuilder': 'Project Builder',
    'nav.portfolio': 'Portfolio',
    'nav.dashboard': 'Dashboard',
    'nav.contact': 'Contact',
    'nav.getStarted': 'Get Started',
    'nav.tryVoiceAI': 'Try Voice AI',
    
    // Hero Section
    'hero.founder': 'Ahmad Yasin – Founder & AI Architect',
    'hero.title': 'Innovative AI for the Next Era',
    'hero.description': 'Premium AI solutions powered by cutting-edge technology. From GPT-powered chatbots to computer vision systems, we democratize AI with 100% free and open-source solutions tailored to your location and budget.',
    'hero.experienceFuture': 'Experience the Future',
    'hero.voiceConsultation': 'Voice Consultation',
    'hero.watchDemo': 'Watch Demo',
    
    // Trust Badges
    'trust.openSource': '100% Open Source',
    'trust.globalPricing': 'Global Pricing',
    'trust.expertTeam': 'Expert Team',
    'trust.fastDeployment': 'Fast Deployment',
    
    // Footer
    'footer.services': 'Services',
    'footer.company': 'Company',
    'footer.legal': 'Legal',
    'footer.stayUpdated': 'Stay Updated',
    'footer.emailPlaceholder': 'Enter your email',
    'footer.subscribe': 'Subscribe',
    'footer.madeWith': 'Made with',
    'footer.by': 'by Ahmad Yasin',
    'footer.poweredBy': 'Powered by AI • Built for the Future',
  },
  de: {
    // Navigation
    'nav.home': 'Startseite',
    'nav.about': 'Über uns',
    'nav.services': 'Dienstleistungen',
    'nav.voiceBot': 'Sprach-Bot',
    'nav.projectBuilder': 'Projekt-Builder',
    'nav.portfolio': 'Portfolio',
    'nav.dashboard': 'Dashboard',
    'nav.contact': 'Kontakt',
    'nav.getStarted': 'Loslegen',
    'nav.tryVoiceAI': 'Sprach-KI testen',
    
    // Hero Section
    'hero.founder': 'Ahmad Yasin – Gründer & KI-Architekt',
    'hero.title': 'Innovative KI für die nächste Ära',
    'hero.description': 'Premium-KI-Lösungen mit modernster Technologie. Von GPT-gestützten Chatbots bis hin zu Computer-Vision-Systemen demokratisieren wir KI mit 100% kostenlosen und Open-Source-Lösungen, die auf Ihren Standort und Ihr Budget zugeschnitten sind.',
    'hero.experienceFuture': 'Erleben Sie die Zukunft',
    'hero.voiceConsultation': 'Sprach-Beratung',
    'hero.watchDemo': 'Demo ansehen',
    
    // Trust Badges
    'trust.openSource': '100% Open Source',
    'trust.globalPricing': 'Globale Preisgestaltung',
    'trust.expertTeam': 'Expertenteam',
    'trust.fastDeployment': 'Schnelle Bereitstellung',
    
    // Footer
    'footer.services': 'Dienstleistungen',
    'footer.company': 'Unternehmen',
    'footer.legal': 'Rechtliches',
    'footer.stayUpdated': 'Bleiben Sie auf dem Laufenden',
    'footer.emailPlaceholder': 'E-Mail eingeben',
    'footer.subscribe': 'Abonnieren',
    'footer.madeWith': 'Erstellt mit',
    'footer.by': 'von Ahmad Yasin',
    'footer.poweredBy': 'Angetrieben von KI • Gebaut für die Zukunft',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.services': 'Services',
    'nav.voiceBot': 'Bot Vocal',
    'nav.projectBuilder': 'Créateur de Projet',
    'nav.portfolio': 'Portfolio',
    'nav.dashboard': 'Tableau de bord',
    'nav.contact': 'Contact',
    'nav.getStarted': 'Commencer',
    'nav.tryVoiceAI': 'Essayer l\'IA Vocale',
    
    // Hero Section
    'hero.founder': 'Ahmad Yasin – Fondateur & Architecte IA',
    'hero.title': 'IA Innovante pour la Prochaine Ère',
    'hero.description': 'Solutions IA premium alimentées par une technologie de pointe. Des chatbots alimentés par GPT aux systèmes de vision par ordinateur, nous démocratisons l\'IA avec des solutions 100% gratuites et open-source adaptées à votre localisation et budget.',
    'hero.experienceFuture': 'Découvrez l\'Avenir',
    'hero.voiceConsultation': 'Consultation Vocale',
    'hero.watchDemo': 'Voir la Démo',
    
    // Trust Badges
    'trust.openSource': '100% Open Source',
    'trust.globalPricing': 'Tarification Globale',
    'trust.expertTeam': 'Équipe d\'Experts',
    'trust.fastDeployment': 'Déploiement Rapide',
    
    // Footer
    'footer.services': 'Services',
    'footer.company': 'Entreprise',
    'footer.legal': 'Légal',
    'footer.stayUpdated': 'Restez Informé',
    'footer.emailPlaceholder': 'Entrez votre email',
    'footer.subscribe': 'S\'abonner',
    'footer.madeWith': 'Fait avec',
    'footer.by': 'par Ahmad Yasin',
    'footer.poweredBy': 'Alimenté par l\'IA • Construit pour l\'Avenir',
  },
  ja: {
    // Navigation
    'nav.home': 'ホーム',
    'nav.about': '会社概要',
    'nav.services': 'サービス',
    'nav.voiceBot': 'ボイスボット',
    'nav.projectBuilder': 'プロジェクトビルダー',
    'nav.portfolio': 'ポートフォリオ',
    'nav.dashboard': 'ダッシュボード',
    'nav.contact': 'お問い合わせ',
    'nav.getStarted': '始める',
    'nav.tryVoiceAI': 'ボイスAIを試す',
    
    // Hero Section
    'hero.founder': 'Ahmad Yasin – 創設者・AIアーキテクト',
    'hero.title': '次世代のための革新的AI',
    'hero.description': '最先端技術を活用したプレミアムAIソリューション。GPT搭載チャットボットからコンピュータビジョンシステムまで、お客様の地域と予算に合わせた100%無料のオープンソースソリューションでAIを民主化します。',
    'hero.experienceFuture': '未来を体験する',
    'hero.voiceConsultation': '音声相談',
    'hero.watchDemo': 'デモを見る',
    
    // Trust Badges
    'trust.openSource': '100% オープンソース',
    'trust.globalPricing': 'グローバル価格設定',
    'trust.expertTeam': 'エキスパートチーム',
    'trust.fastDeployment': '高速デプロイメント',
    
    // Footer
    'footer.services': 'サービス',
    'footer.company': '会社',
    'footer.legal': '法的事項',
    'footer.stayUpdated': '最新情報を受け取る',
    'footer.emailPlaceholder': 'メールアドレスを入力',
    'footer.subscribe': '購読する',
    'footer.madeWith': '作成者',
    'footer.by': 'Ahmad Yasin',
    'footer.poweredBy': 'AIによって駆動 • 未来のために構築',
  },
  tr: {
    // Navigation
    'nav.home': 'Ana Sayfa',
    'nav.about': 'Hakkımızda',
    'nav.services': 'Hizmetler',
    'nav.voiceBot': 'Sesli Bot',
    'nav.projectBuilder': 'Proje Oluşturucu',
    'nav.portfolio': 'Portföy',
    'nav.dashboard': 'Kontrol Paneli',
    'nav.contact': 'İletişim',
    'nav.getStarted': 'Başlayın',
    'nav.tryVoiceAI': 'Sesli AI\'yı Deneyin',
    
    // Hero Section
    'hero.founder': 'Ahmad Yasin – Kurucu & AI Mimarı',
    'hero.title': 'Yeni Çağ için Yenilikçi AI',
    'hero.description': 'Son teknoloji ile desteklenen premium AI çözümleri. GPT destekli chatbot\'lardan bilgisayarlı görü sistemlerine kadar, konumunuza ve bütçenize uygun %100 ücretsiz ve açık kaynak çözümlerle AI\'yı demokratikleştiriyoruz.',
    'hero.experienceFuture': 'Geleceği Deneyimleyin',
    'hero.voiceConsultation': 'Sesli Danışmanlık',
    'hero.watchDemo': 'Demo İzle',
    
    // Trust Badges
    'trust.openSource': '%100 Açık Kaynak',
    'trust.globalPricing': 'Küresel Fiyatlandırma',
    'trust.expertTeam': 'Uzman Ekip',
    'trust.fastDeployment': 'Hızlı Dağıtım',
    
    // Footer
    'footer.services': 'Hizmetler',
    'footer.company': 'Şirket',
    'footer.legal': 'Yasal',
    'footer.stayUpdated': 'Güncel Kalın',
    'footer.emailPlaceholder': 'E-postanızı girin',
    'footer.subscribe': 'Abone Ol',
    'footer.madeWith': 'İle yapıldı',
    'footer.by': 'Ahmad Yasin tarafından',
    'footer.poweredBy': 'AI ile Güçlendirildi • Gelecek için İnşa Edildi',
  },
  sv: {
    // Navigation
    'nav.home': 'Hem',
    'nav.about': 'Om oss',
    'nav.services': 'Tjänster',
    'nav.voiceBot': 'Röstbot',
    'nav.projectBuilder': 'Projektbyggare',
    'nav.portfolio': 'Portfolio',
    'nav.dashboard': 'Instrumentpanel',
    'nav.contact': 'Kontakt',
    'nav.getStarted': 'Kom igång',
    'nav.tryVoiceAI': 'Prova Röst-AI',
    
    // Hero Section
    'hero.founder': 'Ahmad Yasin – Grundare & AI-Arkitekt',
    'hero.title': 'Innovativ AI för Nästa Era',
    'hero.description': 'Premium AI-lösningar drivna av banbrytande teknik. Från GPT-drivna chatbots till datorseende-system, demokratiserar vi AI med 100% gratis och öppen källkod-lösningar anpassade till din plats och budget.',
    'hero.experienceFuture': 'Upplev Framtiden',
    'hero.voiceConsultation': 'Röstkonsultation',
    'hero.watchDemo': 'Se Demo',
    
    // Trust Badges
    'trust.openSource': '100% Öppen Källkod',
    'trust.globalPricing': 'Global Prissättning',
    'trust.expertTeam': 'Expertteam',
    'trust.fastDeployment': 'Snabb Distribution',
    
    // Footer
    'footer.services': 'Tjänster',
    'footer.company': 'Företag',
    'footer.legal': 'Juridiskt',
    'footer.stayUpdated': 'Håll dig Uppdaterad',
    'footer.emailPlaceholder': 'Ange din e-post',
    'footer.subscribe': 'Prenumerera',
    'footer.madeWith': 'Gjord med',
    'footer.by': 'av Ahmad Yasin',
    'footer.poweredBy': 'Driven av AI • Byggd för Framtiden',
  },
};

export function useTranslation() {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && translations[savedLanguage]) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (language: string) => {
    if (translations[language]) {
      setCurrentLanguage(language);
      localStorage.setItem('language', language);
    }
  };

  const t = (key: string): string => {
    return translations[currentLanguage]?.[key] || translations.en[key] || key;
  };

  return {
    t,
    currentLanguage,
    changeLanguage,
    availableLanguages: Object.keys(translations),
  };
}