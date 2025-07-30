import { Link } from "react-router-dom";
import { ArrowLeft, Instagram, Twitter, Facebook, Youtube, Mail } from "lucide-react";

const Social = () => {
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
          <h1 className="text-4xl font-bold mb-8 text-brand-primary">Seguici sui Social</h1>
          
          <div className="space-y-8">
            <p className="text-lg leading-relaxed">
              Unisciti alla nostra community e resta sempre aggiornato sulle ultime novità, 
              sfide culinarie e contenuti esclusivi di <span className="text-brand-primary font-semibold">loc8abite</span>.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <a 
                href="#" 
                className="group bg-card p-6 rounded-lg border border-brand-primary/20 hover:border-brand-primary/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <Instagram className="h-8 w-8 text-brand-primary mb-4 group-hover:text-brand-secondary transition-colors" />
                <h3 className="text-xl font-semibold mb-2">Instagram</h3>
                <p className="text-sm text-foreground/70">
                  Foto dei piatti più belli e stories esclusive
                </p>
              </a>
              
              <a 
                href="#" 
                className="group bg-card p-6 rounded-lg border border-brand-secondary/20 hover:border-brand-secondary/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <Twitter className="h-8 w-8 text-brand-secondary mb-4 group-hover:text-brand-accent transition-colors" />
                <h3 className="text-xl font-semibold mb-2">Twitter</h3>
                <p className="text-sm text-foreground/70">
                  Aggiornamenti in tempo reale e news del progetto
                </p>
              </a>
              
              <a 
                href="#" 
                className="group bg-card p-6 rounded-lg border border-brand-accent/20 hover:border-brand-accent/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <Facebook className="h-8 w-8 text-brand-accent mb-4 group-hover:text-brand-primary transition-colors" />
                <h3 className="text-xl font-semibold mb-2">Facebook</h3>
                <p className="text-sm text-foreground/70">
                  Community, eventi e discussioni culinarie
                </p>
              </a>
              
              <a 
                href="#" 
                className="group bg-card p-6 rounded-lg border border-brand-primary/20 hover:border-brand-primary/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <Youtube className="h-8 w-8 text-brand-primary mb-4 group-hover:text-brand-secondary transition-colors" />
                <h3 className="text-xl font-semibold mb-2">YouTube</h3>
                <p className="text-sm text-foreground/70">
                  Tutorial, gameplay e contenuti video esclusivi
                </p>
              </a>
              
              <a 
                href="mailto:info@loc8abite.com" 
                className="group bg-card p-6 rounded-lg border border-brand-secondary/20 hover:border-brand-secondary/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <Mail className="h-8 w-8 text-brand-secondary mb-4 group-hover:text-brand-accent transition-colors" />
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-sm text-foreground/70">
                  Contattaci direttamente per partnership e collaborazioni
                </p>
              </a>
            </div>
            
            <div className="bg-gradient-to-r from-brand-primary/10 to-brand-accent/10 p-8 rounded-lg border border-brand-primary/30 text-center">
              <h2 className="text-2xl font-semibold mb-4 text-brand-primary">Hashtag Ufficiali</h2>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="bg-brand-primary/20 text-brand-primary px-3 py-1 rounded-full text-sm font-medium">
                  #loc8abite
                </span>
                <span className="bg-brand-secondary/20 text-brand-secondary px-3 py-1 rounded-full text-sm font-medium">
                  #foodguess
                </span>
                <span className="bg-brand-accent/20 text-brand-accent px-3 py-1 rounded-full text-sm font-medium">
                  #foodgaming
                </span>
                <span className="bg-brand-primary/20 text-brand-primary px-3 py-1 rounded-full text-sm font-medium">
                  #culinarygame
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Social;