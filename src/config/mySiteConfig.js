// 🌐 CONFIGURAZIONE COMPLETA DEL TUO SITO
// Modifica questo file per personalizzare tutto il sito

export const MY_SITE_CONFIG = {
  // ========== INFORMAZIONI SITO ==========
  site: {
    name: "Il Mio Sito",
    description: "Descrizione del mio sito web",
    logo: "/logo.png",
    favicon: "/favicon.ico",
    language: "it",
    author: "Il Tuo Nome"
  },

  // ========== NAVIGAZIONE ==========
  navigation: {
    header: [
      { name: "Home", path: "/", icon: "home" },
      { name: "Chi Siamo", path: "/chi-siamo", icon: "users" },
      { name: "Progetto", path: "/progetto", icon: "folder" },
      { name: "Gioco", path: "/game", icon: "gamepad2" },
      { name: "Social", path: "/social", icon: "share2" }
    ],
    footer: [
      { name: "Privacy", path: "/privacy" },
      { name: "Termini", path: "/terms" },
      { name: "Contatti", path: "/contact" }
    ]
  },

  // ========== API ENDPOINTS ==========
  api: {
    baseUrl: process.env.NODE_ENV === 'production' ? 'https://tuodominio.com/api' : '/api',
    endpoints: {
      contact: '/contact',
      newsletter: '/newsletter',
      search: '/search'
    }
  },

  // ========== PAGINE ==========
  pages: {
    home: {
      enabled: true,
      component: 'MyHomepage',
      meta: {
        title: "Home - Il Mio Sito",
        description: "Benvenuto nel mio sito"
      }
    },
    chiSiamo: {
      enabled: true,
      component: 'ChiSiamo',
      meta: {
        title: "Chi Siamo",
        description: "Scopri chi siamo"
      }
    },
    progetto: {
      enabled: true,
      component: 'Progetto',
      meta: {
        title: "Il Progetto",
        description: "Dettagli del progetto"
      }
    },
    game: {
      enabled: true,
      component: 'Game',
      meta: {
        title: "Gioco",
        description: "Gioca al nostro gioco"
      }
    },
    social: {
      enabled: true,
      component: 'Social',
      meta: {
        title: "Social",
        description: "I nostri social media"
      }
    }
  },

  // ========== COMPONENTI PERSONALIZZABILI ==========
  components: {
    // 🎨 Header personalizzato
    renderHeader: (config) => {
      // Sostituisci con il tuo header personalizzato
      return null; // Usa quello di default
    },

    // 🦶 Footer personalizzato
    renderFooter: (config) => {
      // Sostituisci con il tuo footer personalizzato
      return null; // Usa quello di default
    },

    // 🔔 Notifiche personalizzate
    renderNotifications: (notifications) => {
      // Sostituisci con le tue notifiche
      return null; // Usa quelle di default
    },

    // 📄 Layout personalizzato
    renderLayout: (children, config) => {
      // Sostituisci con il tuo layout
      return null; // Usa quello di default
    }
  },

  // ========== FEATURES ==========
  features: {
    // 📧 Newsletter
    newsletter: {
      enabled: true,
      placeholder: "Inserisci la tua email",
      buttonText: "Iscriviti"
    },

    // 🔍 Ricerca
    search: {
      enabled: true,
      placeholder: "Cerca nel sito...",
      minLength: 3
    },

    // 🍪 Cookie consent
    cookies: {
      enabled: true,
      message: "Questo sito utilizza cookie per migliorare l'esperienza utente.",
      acceptText: "Accetta",
      rejectText: "Rifiuta"
    },

    // 📱 Progressive Web App
    pwa: {
      enabled: false,
      name: "Il Mio Sito",
      shortName: "MySite",
      description: "La mia app web"
    }
  },

  // ========== HOOKS PERSONALIZZATI ==========
  hooks: {
    // 🚀 Quando il sito si carica
    onSiteLoad: () => {
      console.log("Sito caricato!");
      // La tua logica di inizializzazione
    },

    // 📄 Quando cambia pagina
    onPageChange: (from, to) => {
      console.log(`Navigazione: ${from} → ${to}`);
      // La tua logica di tracking
    },

    // 📧 Quando si iscrive alla newsletter
    onNewsletterSignup: async (email) => {
      console.log(`Newsletter signup: ${email}`);
      // La tua logica newsletter
      return { success: true };
    },

    // 📞 Quando invia form contatti
    onContactSubmit: async (formData) => {
      console.log("Form contatti:", formData);
      // La tua logica contatti
      return { success: true };
    }
  },

  // ========== SVILUPPO ==========
  development: {
    showDebugInfo: process.env.NODE_ENV === 'development',
    mockData: true,
    apiDelay: 1000 // Simula latenza API
  }
};

// 🚀 ESPORTA LA CONFIGURAZIONE
export default MY_SITE_CONFIG;