import { Link } from "react-router-dom";
import { ArrowLeft, Target, Users, Gamepad2, Code, Sparkles, Globe, Trophy, Heart, Zap } from "lucide-react";
import codeMonitor from "../assets/code-monitor.jpg";
import colorfulCode from "../assets/colorful-code.jpg";
import circuitBoard from "../assets/circuit-board.jpg";

const Progetto = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-brand-primary/5">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),transparent)] pointer-events-none" />
      
      <div className="relative container mx-auto px-4 py-8">
        <Link 
          to="/" 
          className="inline-flex items-center text-brand-primary hover:text-brand-secondary transition-all duration-300 hover:scale-105 mb-12 group"
        >
          <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          Torna alla Home
        </Link>
        
        <div className="max-w-6xl mx-auto">
          {/* Hero Section con Logo */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="relative inline-block mb-8">
              <img 
                src="/lovable-uploads/c797b669-1094-4e0e-bc36-6faef0818cd5.png" 
                alt="Loc8ABite Logo" 
                className="w-48 h-auto mx-auto drop-shadow-2xl hover:scale-110 transition-all duration-500 hover:drop-shadow-[0_0_30px_rgba(120,119,198,0.3)]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/20 to-brand-secondary/20 rounded-full blur-3xl -z-10 animate-pulse" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent bg-clip-text text-transparent">
              Il Progetto
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl md:text-2xl leading-relaxed text-foreground/90 mb-4">
                <span className="font-bold bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">Loc8ABite</span> 
                &nbsp;è molto più di un semplice gioco
              </p>
              <p className="text-lg text-foreground/70">
                Una piattaforma innovativa che unisce tecnologia, cibo e social gaming 
                per creare esperienze culinarie uniche e coinvolgenti.
              </p>
            </div>
          </div>
          
          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="group bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-brand-primary/20 hover:border-brand-primary/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-primary/10">
              <div className="bg-gradient-to-br from-brand-primary to-brand-primary/70 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-brand-primary">Obiettivo</h3>
              <p className="text-foreground/80 leading-relaxed">
                Creare un'esperienza di gioco unica che permette agli utenti di scoprire, 
                indovinare e condividere piatti da tutto il mondo attraverso la geolocalizzazione.
              </p>
            </div>
            
            <div className="group bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-brand-secondary/20 hover:border-brand-secondary/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-secondary/10">
              <div className="bg-gradient-to-br from-brand-secondary to-brand-secondary/70 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-brand-secondary">Community</h3>
              <p className="text-foreground/80 leading-relaxed">
                Costruire una community globale di food lovers che condividono 
                la passione per la cucina e la scoperta di nuovi sapori dal mondo.
              </p>
            </div>
            
            <div className="group bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-brand-accent/20 hover:border-brand-accent/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-accent/10">
              <div className="bg-gradient-to-br from-brand-accent to-brand-accent/70 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Gamepad2 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-brand-accent">Gameplay</h3>
              <p className="text-foreground/80 leading-relaxed">
                Un sistema di gioco coinvolgente con sfide, classifiche e premi 
                che rendono l'apprendimento culinario divertente e competitivo.
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-gradient-to-br from-brand-primary/10 to-brand-primary/5 p-6 rounded-xl border border-brand-primary/20 text-center hover:scale-105 transition-transform duration-300">
              <Globe className="h-12 w-12 text-brand-primary mx-auto mb-4" />
              <h4 className="font-semibold text-brand-primary mb-2">Esplorazione Globale</h4>
              <p className="text-sm text-foreground/70">Scopri piatti da ogni angolo del mondo</p>
            </div>
            <div className="bg-gradient-to-br from-brand-secondary/10 to-brand-secondary/5 p-6 rounded-xl border border-brand-secondary/20 text-center hover:scale-105 transition-transform duration-300">
              <Trophy className="h-12 w-12 text-brand-secondary mx-auto mb-4" />
              <h4 className="font-semibold text-brand-secondary mb-2">Competizioni</h4>
              <p className="text-sm text-foreground/70">Sfida amici e scalatore le classifiche</p>
            </div>
            <div className="bg-gradient-to-br from-brand-accent/10 to-brand-accent/5 p-6 rounded-xl border border-brand-accent/20 text-center hover:scale-105 transition-transform duration-300">
              <Heart className="h-12 w-12 text-brand-accent mx-auto mb-4" />
              <h4 className="font-semibold text-brand-accent mb-2">Social Gaming</h4>
              <p className="text-sm text-foreground/70">Condividi le tue scoperte culinarie</p>
            </div>
            <div className="bg-gradient-to-br from-brand-primary/10 to-brand-accent/5 p-6 rounded-xl border border-brand-primary/20 text-center hover:scale-105 transition-transform duration-300">
              <Sparkles className="h-12 w-12 text-brand-primary mx-auto mb-4" />
              <h4 className="font-semibold text-brand-primary mb-2">AI Powered</h4>
              <p className="text-sm text-foreground/70">Intelligenza artificiale per sfide uniche</p>
            </div>
          </div>

          {/* Technology Section */}
          <div className="bg-gradient-to-r from-card/80 to-card/60 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-brand-primary/20 shadow-2xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center justify-center">
                <Code className="mr-4 h-8 w-8 text-brand-primary" />
                <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
                  Tecnologia e Sviluppo
                </span>
              </h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Un ecosistema tecnologico all'avanguardia per garantire performance eccezionali e scalabilità
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="relative group overflow-hidden rounded-2xl">
                <img 
                  src={codeMonitor} 
                  alt="Frontend Development" 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h4 className="text-white font-bold text-xl mb-2">Frontend Development</h4>
                    <p className="text-white/80 text-sm">Interfacce moderne e responsive</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-brand-primary/20 backdrop-blur-sm rounded-full p-2">
                  <Zap className="h-5 w-5 text-white" />
                </div>
              </div>
              
              <div className="relative group overflow-hidden rounded-2xl">
                <img 
                  src={colorfulCode} 
                  alt="Web Technologies" 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h4 className="text-white font-bold text-xl mb-2">Web Technologies</h4>
                    <p className="text-white/80 text-sm">Stack tecnologico avanzato</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-brand-secondary/20 backdrop-blur-sm rounded-full p-2">
                  <Code className="h-5 w-5 text-white" />
                </div>
              </div>
              
              <div className="relative group overflow-hidden rounded-2xl">
                <img 
                  src={circuitBoard} 
                  alt="Backend Architecture" 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h4 className="text-white font-bold text-xl mb-2">Backend Architecture</h4>
                    <p className="text-white/80 text-sm">Infrastruttura scalabile e sicura</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-brand-accent/20 backdrop-blur-sm rounded-full p-2">
                  <Globe className="h-5 w-5 text-white" />
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-brand-primary/5 to-brand-secondary/5 rounded-2xl p-8 border border-brand-primary/10">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-brand-primary">Stack Tecnologico</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                      <span className="text-foreground/80">React & TypeScript</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-brand-secondary rounded-full"></div>
                      <span className="text-foreground/80">JavaScript ES6+</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-brand-accent rounded-full"></div>
                      <span className="text-foreground/80">Tecnologie moderne</span>
                    </div>
                  </div>
                </div>
                <div className="text-center md:text-right">
                  <p className="text-lg text-foreground/70 leading-relaxed">
                    Sviluppato con <span className="font-semibold text-brand-primary">React</span>, 
                    <span className="font-semibold text-brand-secondary"> JavaScript</span>, 
                    <span className="font-semibold text-brand-accent"> TypeScript</span> 
                    e tecnologie moderne per garantire performance ottimali e scalabilità.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progetto;