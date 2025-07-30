import { Link } from "react-router-dom";
import { ArrowLeft, Target, Users, Gamepad2 } from "lucide-react";

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
          <h1 className="text-4xl font-bold mb-8 text-brand-primary">Il Progetto</h1>
          
          <div className="space-y-8">
            <div className="text-lg leading-relaxed">
              <p className="mb-6">
                <span className="text-brand-primary font-semibold">loc8abite</span> è molto più di un semplice gioco: 
                è una piattaforma innovativa che unisce tecnologia, cibo e social gaming.
              </p>
            </div>
            
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
            
            <div className="bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 p-8 rounded-lg border border-brand-primary/30">
              <h2 className="text-2xl font-semibold mb-4 text-brand-primary">Food Guess Mode Beta</h2>
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