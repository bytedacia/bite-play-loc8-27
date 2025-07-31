import { Link } from "react-router-dom";
import { ArrowLeft, Instagram, Twitter, Facebook, Youtube, Mail, Share2, Heart, Users, Globe } from "lucide-react";

const Social = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-brand-primary/5 text-foreground">
      <div className="container mx-auto px-4 py-8">
        <Link 
          to="/" 
          className="inline-flex items-center text-brand-primary hover:text-brand-secondary transition-all duration-300 mb-8 group"
        >
          <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform duration-300" />
          Torna alla Home
        </Link>
        
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-2xl">
                <Share2 className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent bg-clip-text text-transparent">
                Social Hub
              </h1>
            </div>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
              Unisciti alla nostra <span className="text-brand-primary font-semibold">community globale</span> e 
              vivi l'esperienza culinaria più coinvolgente del web
            </p>
            
            {/* Stats */}
            <div className="flex justify-center gap-8 mt-8">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 text-brand-primary mb-1">
                  <Users className="h-5 w-5" />
                  <span className="text-2xl font-bold">10K+</span>
                </div>
                <p className="text-sm text-foreground/60">Followers</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 text-brand-secondary mb-1">
                  <Heart className="h-5 w-5" />
                  <span className="text-2xl font-bold">50K+</span>
                </div>
                <p className="text-sm text-foreground/60">Likes</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 text-brand-accent mb-1">
                  <Globe className="h-5 w-5" />
                  <span className="text-2xl font-bold">20+</span>
                </div>
                <p className="text-sm text-foreground/60">Paesi</p>
              </div>
            </div>
          </div>

          {/* Social Platform Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <a 
              href="#" 
              className="group relative overflow-hidden bg-gradient-to-br from-card to-card/50 p-8 rounded-2xl border border-brand-primary/20 hover:border-brand-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-primary/20 hover:-translate-y-2"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-primary/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
              <Instagram className="h-12 w-12 text-brand-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-bold mb-3 group-hover:text-brand-primary transition-colors">Instagram</h3>
              <p className="text-foreground/70 mb-4 leading-relaxed">
                Foto spettacolari dei piatti più belli, stories esclusive e dietro le quinte del progetto
              </p>
              <div className="text-sm text-brand-primary font-medium">@loc8abite_official</div>
            </a>
            
            <a 
              href="#" 
              className="group relative overflow-hidden bg-gradient-to-br from-card to-card/50 p-8 rounded-2xl border border-brand-secondary/20 hover:border-brand-secondary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-secondary/20 hover:-translate-y-2"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-secondary/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
              <Twitter className="h-12 w-12 text-brand-secondary mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-bold mb-3 group-hover:text-brand-secondary transition-colors">Twitter</h3>
              <p className="text-foreground/70 mb-4 leading-relaxed">
                Aggiornamenti in tempo reale, news del progetto e interazioni dirette con la community
              </p>
              <div className="text-sm text-brand-secondary font-medium">@loc8abite</div>
            </a>
            
            <a 
              href="#" 
              className="group relative overflow-hidden bg-gradient-to-br from-card to-card/50 p-8 rounded-2xl border border-brand-accent/20 hover:border-brand-accent/50 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-accent/20 hover:-translate-y-2"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-accent/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
              <Facebook className="h-12 w-12 text-brand-accent mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-bold mb-3 group-hover:text-brand-accent transition-colors">Facebook</h3>
              <p className="text-foreground/70 mb-4 leading-relaxed">
                Community attiva, eventi culinari dal vivo e discussioni approfondite sui piatti
              </p>
              <div className="text-sm text-brand-accent font-medium">Loc8abite Community</div>
            </a>
            
            <a 
              href="#" 
              className="group relative overflow-hidden bg-gradient-to-br from-card to-card/50 p-8 rounded-2xl border border-brand-primary/20 hover:border-brand-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-primary/20 hover:-translate-y-2"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-primary/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
              <Youtube className="h-12 w-12 text-brand-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-bold mb-3 group-hover:text-brand-primary transition-colors">YouTube</h3>
              <p className="text-foreground/70 mb-4 leading-relaxed">
                Tutorial esclusivi, gameplay commentati e contenuti video premium per i veri appassionati
              </p>
              <div className="text-sm text-brand-primary font-medium">Loc8abite Gaming</div>
            </a>
            
            <a 
              href="mailto:info@loc8abite.com" 
              className="group relative overflow-hidden bg-gradient-to-br from-card to-card/50 p-8 rounded-2xl border border-brand-secondary/20 hover:border-brand-secondary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-secondary/20 hover:-translate-y-2 md:col-span-2 lg:col-span-1"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-secondary/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
              <Mail className="h-12 w-12 text-brand-secondary mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-bold mb-3 group-hover:text-brand-secondary transition-colors">Email</h3>
              <p className="text-foreground/70 mb-4 leading-relaxed">
                Contatto diretto per partnership, collaborazioni e proposte commerciali
              </p>
              <div className="text-sm text-brand-secondary font-medium">info@loc8abite.com</div>
            </a>
          </div>
          
          {/* Hashtag Section */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/10 via-brand-secondary/10 to-brand-accent/10 rounded-3xl blur-xl"></div>
            <div className="relative bg-gradient-to-r from-card/80 to-card/60 backdrop-blur-sm p-12 rounded-3xl border border-brand-primary/30 text-center">
              <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
                Hashtag Ufficiali
              </h2>
              <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
                Usa questi hashtag per far parte della community e condividere le tue esperienze culinarie
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="bg-gradient-to-r from-brand-primary/20 to-brand-primary/10 text-brand-primary px-6 py-3 rounded-full text-lg font-semibold border border-brand-primary/30 hover:scale-105 transition-transform duration-300 cursor-pointer">
                  #loc8abite
                </span>
                <span className="bg-gradient-to-r from-brand-secondary/20 to-brand-secondary/10 text-brand-secondary px-6 py-3 rounded-full text-lg font-semibold border border-brand-secondary/30 hover:scale-105 transition-transform duration-300 cursor-pointer">
                  #foodguess
                </span>
                <span className="bg-gradient-to-r from-brand-accent/20 to-brand-accent/10 text-brand-accent px-6 py-3 rounded-full text-lg font-semibold border border-brand-accent/30 hover:scale-105 transition-transform duration-300 cursor-pointer">
                  #foodgaming
                </span>
                <span className="bg-gradient-to-r from-brand-primary/20 to-brand-primary/10 text-brand-primary px-6 py-3 rounded-full text-lg font-semibold border border-brand-primary/30 hover:scale-105 transition-transform duration-300 cursor-pointer">
                  #culinarygame
                </span>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-brand-primary">
              Non perdere nemmeno un aggiornamento!
            </h3>
            <p className="text-foreground/70 max-w-xl mx-auto">
              Seguici su tutte le piattaforme per rimanere sempre connesso con la community più appassionata di food gaming
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Social;