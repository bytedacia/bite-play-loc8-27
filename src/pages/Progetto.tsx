import { Link } from "react-router-dom";
import { ArrowLeft, Target, Users, Gamepad2, Code, Zap } from "lucide-react";
import loc8abiteLogo from "../assets/loc8abite-logo.png";
import codeMonitor from "../assets/code-monitor.jpg";
import colorfulCode from "../assets/colorful-code.jpg";
import circuitBoard from "../assets/circuit-board.jpg";

const Progetto = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8">
        <Link 
          to="/" 
          className="inline-flex items-center text-brand-primary hover:text-brand-secondary transition-colors mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Torna alla Home
        </Link>
        
        <div className="max-w-4xl mx-auto">
          {/* Hero Section con Logo */}
          <div className="text-center mb-12">
            <img 
              src={loc8abiteLogo} 
              alt="loc8abite Logo" 
              className="w-32 h-32 mx-auto mb-6 drop-shadow-lg hover:scale-105 transition-transform duration-300"
            />
            <h1 className="text-4xl font-bold mb-4 text-brand-primary">Il Progetto</h1>
            <div className="text-lg leading-relaxed">
              <p className="mb-6">
                <span className="text-brand-primary font-semibold">loc8abite</span> è molto più di un semplice gioco: 
                è una piattaforma innovativa che unisce tecnologia, cibo e social gaming.
              </p>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-lg border border-brand-primary/20">
                <Target className="h-8 w-8 text-brand-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-brand-secondary">Obiettivo</h3>
                <p className="text-sm">
                  Creare un'esperienza di gioco unica che permette agli utenti di scoprire, 
                  indovinare e condividere piatti da tutto il mondo.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border border-brand-secondary/20">
                <Users className="h-8 w-8 text-brand-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-brand-accent">Community</h3>
                <p className="text-sm">
                  Costruire una community globale di food lovers che condividono 
                  la passione per la cucina e la scoperta di nuovi sapori.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border border-brand-accent/20">
                <Gamepad2 className="h-8 w-8 text-brand-accent mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-brand-primary">Gameplay</h3>
                <p className="text-sm">
                  Un sistema di gioco coinvolgente con sfide, classifiche e premi 
                  che rendono l'apprendimento culinario divertente e competitivo.
                </p>
              </div>
            </div>

            {/* Sezione Tecnologia con immagini */}
            <div className="bg-gradient-to-r from-brand-primary/5 to-brand-secondary/5 p-8 rounded-lg border border-brand-primary/20">
              <h2 className="text-2xl font-semibold mb-6 text-brand-primary flex items-center">
                <Code className="mr-3 h-6 w-6" />
                Tecnologia e Sviluppo
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="relative group">
                  <img 
                    src={codeMonitor} 
                    alt="Sviluppo Java" 
                    className="w-full h-48 object-cover rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg flex items-end">
                    <p className="text-white p-4 font-medium">Frontend Development</p>
                  </div>
                </div>
                <div className="relative group">
                  <img 
                    src={colorfulCode} 
                    alt="Codice colorato" 
                    className="w-full h-48 object-cover rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg flex items-end">
                    <p className="text-white p-4 font-medium">Web Technologies</p>
                  </div>
                </div>
                <div className="relative group">
                  <img 
                    src={circuitBoard} 
                    alt="Circuit Board" 
                    className="w-full h-48 object-cover rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg flex items-end">
                    <p className="text-white p-4 font-medium">Backend Architecture</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 text-center">
                <p className="text-foreground/80">
                  Sviluppato con React, TypeScript e tecnologie moderne per garantire performance ottimali e scalabilità.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 p-8 rounded-lg border border-brand-primary/30">
              <h2 className="text-2xl font-semibold mb-4 text-brand-primary flex items-center">
                <Zap className="mr-3 h-6 w-6" />
                Food Guess Mode Beta
              </h2>
              <p className="text-lg mb-4">
                La modalità attualmente in sviluppo che permetterà ai giocatori di:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>Indovinare piatti da immagini e descrizioni</li>
                <li>Scoprire l'origine geografica dei cibi</li>
                <li>Competere con amici in sfide culinarie</li>
                <li>Guadagnare punti e sbloccare achievement</li>
                <li>Condividere le proprie scoperte gastronomiche</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progetto;