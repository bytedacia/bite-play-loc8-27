import { Link } from "react-router-dom";
import { ArrowLeft, Instagram, Twitter, Facebook, Youtube, Mail, Share2, Heart, Users, Globe } from "lucide-react";

const Social = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-brand-primary/5 text-foreground relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-brand-accent/10 to-brand-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-brand-secondary/5 to-brand-accent/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <Link 
          to="/" 
          className="inline-flex items-center text-brand-primary hover:text-brand-secondary transition-all duration-300 mb-8 group"
        >
          <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform duration-300" />
          Torna alla Home
        </Link>
        
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <div className="relative inline-block mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/20 to-brand-secondary/20 rounded-3xl blur-xl animate-pulse"></div>
              <div className="relative inline-flex items-center gap-4 p-6 bg-gradient-to-r from-card/80 to-card/60 backdrop-blur-sm rounded-3xl border border-brand-primary/30">
                <div className="p-4 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-2xl shadow-lg shadow-brand-primary/30">
                  <Share2 className="h-10 w-10 text-white animate-pulse" />
                </div>
                <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent bg-clip-text text-transparent">
                  Social Hub
                </h1>
              </div>
            </div>
            <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto leading-relaxed mb-12">
              Unisciti alla nostra <span className="text-brand-primary font-bold bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">community globale</span> e 
              vivi l'esperienza culinaria più coinvolgente del web
            </p>
          </div>

          {/* Social Platform Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {/* Instagram */}
            <a 
              href="https://instagram.com/loc8abite_official" 
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-gradient-to-br from-card/90 to-card/70 p-8 rounded-3xl border border-brand-primary/30 hover:border-brand-primary/60 transition-all duration-700 hover:shadow-2xl hover:shadow-brand-primary/30 hover:-translate-y-3 backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-brand-primary/20 to-transparent rounded-full -translate-y-20 translate-x-20 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative z-10">
                <Instagram className="h-14 w-14 text-brand-primary mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" />
                <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-primary transition-colors duration-300">Instagram</h3>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  Foto spettacolari dei piatti più belli, stories esclusive e dietro le quinte del progetto
                </p>
                <div className="text-sm text-brand-primary font-bold bg-gradient-to-r from-brand-primary/20 to-brand-primary/10 px-4 py-2 rounded-full border border-brand-primary/30 inline-block">
                  @loc8abite_official
                </div>
              </div>
            </a>
            
            {/* Twitter */}
            <a 
              href="https://twitter.com/loc8abite" 
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-gradient-to-br from-card/90 to-card/70 p-8 rounded-3xl border border-brand-secondary/30 hover:border-brand-secondary/60 transition-all duration-700 hover:shadow-2xl hover:shadow-brand-secondary/30 hover:-translate-y-3 backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-brand-secondary/20 to-transparent rounded-full -translate-y-20 translate-x-20 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative z-10">
                <Twitter className="h-14 w-14 text-brand-secondary mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" />
                <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-secondary transition-colors duration-300">Twitter</h3>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  Aggiornamenti in tempo reale, news del progetto e interazioni dirette con la community
                </p>
                <div className="text-sm text-brand-secondary font-bold bg-gradient-to-r from-brand-secondary/20 to-brand-secondary/10 px-4 py-2 rounded-full border border-brand-secondary/30 inline-block">
                  @loc8abite
                </div>
              </div>
            </a>
            
            {/* Facebook */}
            <a 
              href="https://facebook.com/loc8abite" 
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-gradient-to-br from-card/90 to-card/70 p-8 rounded-3xl border border-brand-accent/30 hover:border-brand-accent/60 transition-all duration-700 hover:shadow-2xl hover:shadow-brand-accent/30 hover:-translate-y-3 backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-brand-accent/20 to-transparent rounded-full -translate-y-20 translate-x-20 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative z-10">
                <Facebook className="h-14 w-14 text-brand-accent mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" />
                <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-accent transition-colors duration-300">Facebook</h3>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  Community attiva, eventi culinari dal vivo e discussioni approfondite sui piatti
                </p>
                <div className="text-sm text-brand-accent font-bold bg-gradient-to-r from-brand-accent/20 to-brand-accent/10 px-4 py-2 rounded-full border border-brand-accent/30 inline-block">
                  Loc8abite Community
                </div>
              </div>
            </a>
            
            {/* YouTube */}
            <a 
              href="https://youtube.com/@loc8abite" 
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-gradient-to-br from-card/90 to-card/70 p-8 rounded-3xl border border-brand-primary/30 hover:border-brand-primary/60 transition-all duration-700 hover:shadow-2xl hover:shadow-brand-primary/30 hover:-translate-y-3 backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-brand-primary/20 to-transparent rounded-full -translate-y-20 translate-x-20 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative z-10">
                <Youtube className="h-14 w-14 text-brand-primary mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" />
                <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-primary transition-colors duration-300">YouTube</h3>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  Tutorial esclusivi, gameplay commentati e contenuti video premium per i veri appassionati
                </p>
                <div className="text-sm text-brand-primary font-bold bg-gradient-to-r from-brand-primary/20 to-brand-primary/10 px-4 py-2 rounded-full border border-brand-primary/30 inline-block">
                  Loc8abite Gaming
                </div>
              </div>
            </a>
            
            {/* Email */}
            <a 
              href="mailto:info@loc8abite.com" 
              className="group relative overflow-hidden bg-gradient-to-br from-card/90 to-card/70 p-8 rounded-3xl border border-brand-secondary/30 hover:border-brand-secondary/60 transition-all duration-700 hover:shadow-2xl hover:shadow-brand-secondary/30 hover:-translate-y-3 backdrop-blur-sm md:col-span-2 lg:col-span-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-brand-secondary/20 to-transparent rounded-full -translate-y-20 translate-x-20 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative z-10">
                <Mail className="h-14 w-14 text-brand-secondary mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" />
                <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-secondary transition-colors duration-300">Email</h3>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  Contatto diretto per partnership, collaborazioni e proposte commerciali
                </p>
                <div className="text-sm text-brand-secondary font-bold bg-gradient-to-r from-brand-secondary/20 to-brand-secondary/10 px-4 py-2 rounded-full border border-brand-secondary/30 inline-block">
                  info@loc8abite.com
                </div>
              </div>
            </a>

            {/* Discord - NEW */}
            <a 
              href="https://discord.gg/loc8abite" 
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-gradient-to-br from-card/90 to-card/70 p-8 rounded-3xl border border-brand-accent/30 hover:border-brand-accent/60 transition-all duration-700 hover:shadow-2xl hover:shadow-brand-accent/30 hover:-translate-y-3 backdrop-blur-sm md:col-span-2 lg:col-span-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-brand-accent/20 to-transparent rounded-full -translate-y-20 translate-x-20 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative z-10">
                <svg className="h-14 w-14 text-brand-accent mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.211.375-.445.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-accent transition-colors duration-300">Discord</h3>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  Chat in tempo reale, eventi esclusivi e la community più attiva di food gaming
                </p>
                <div className="text-sm text-brand-accent font-bold bg-gradient-to-r from-brand-accent/20 to-brand-accent/10 px-4 py-2 rounded-full border border-brand-accent/30 inline-block">
                  discord.gg/loc8abite
                </div>
              </div>
            </a>
          </div>
          
          {/* Hashtag Section */}
          <div className="relative mb-20">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/20 via-brand-secondary/20 to-brand-accent/20 rounded-3xl blur-2xl animate-pulse"></div>
            <div className="relative bg-gradient-to-r from-card/90 to-card/70 backdrop-blur-sm p-12 rounded-3xl border border-brand-primary/40 text-center">
              <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent bg-clip-text text-transparent">
                Hashtag Ufficiali
              </h2>
              <p className="text-foreground/70 mb-10 max-w-2xl mx-auto text-lg">
                Usa questi hashtag per far parte della community e condividere le tue esperienze culinarie
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <span className="bg-gradient-to-r from-brand-primary/30 to-brand-primary/20 text-brand-primary px-8 py-4 rounded-full text-xl font-bold border border-brand-primary/40 hover:scale-110 hover:shadow-lg hover:shadow-brand-primary/30 transition-all duration-300 cursor-pointer">
                  #loc8abite
                </span>
                <span className="bg-gradient-to-r from-brand-secondary/30 to-brand-secondary/20 text-brand-secondary px-8 py-4 rounded-full text-xl font-bold border border-brand-secondary/40 hover:scale-110 hover:shadow-lg hover:shadow-brand-secondary/30 transition-all duration-300 cursor-pointer">
                  #foodguess
                </span>
                <span className="bg-gradient-to-r from-brand-accent/30 to-brand-accent/20 text-brand-accent px-8 py-4 rounded-full text-xl font-bold border border-brand-accent/40 hover:scale-110 hover:shadow-lg hover:shadow-brand-accent/30 transition-all duration-300 cursor-pointer">
                  #foodgaming
                </span>
                <span className="bg-gradient-to-r from-brand-primary/30 to-brand-primary/20 text-brand-primary px-8 py-4 rounded-full text-xl font-bold border border-brand-primary/40 hover:scale-110 hover:shadow-lg hover:shadow-brand-primary/30 transition-all duration-300 cursor-pointer">
                  #culinarygame
                </span>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center relative">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 rounded-3xl blur-xl"></div>
            <div className="relative bg-gradient-to-r from-card/80 to-card/60 backdrop-blur-sm p-10 rounded-3xl border border-brand-primary/30">
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
                Non perdere nemmeno un aggiornamento!
              </h3>
              <p className="text-foreground/70 max-w-2xl mx-auto text-lg leading-relaxed">
                Seguici su tutte le piattaforme per rimanere sempre connesso con la community più appassionata di food gaming
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Social;