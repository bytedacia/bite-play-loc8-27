import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const ChiSiamo = () => {
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
          <h1 className="text-4xl font-bold mb-8 text-brand-primary">Chi Siamo</h1>
          
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              Benvenuti in <span className="text-brand-primary font-semibold">loc8abite</span>, 
              la piattaforma innovativa che trasforma l'esperienza culinaria in un gioco coinvolgente.
            </p>
            
            <p>
              Siamo un team di appassionati sviluppatori e food lovers che crede nel potere del cibo 
              di unire le persone e creare momenti indimenticabili.
            </p>
            
            <p>
              La nostra missione è quella di rendere la scoperta di nuovi sapori e cucine 
              un'avventura divertente e social, combinando tecnologia all'avanguardia 
              con la passione per il buon cibo.
            </p>
            
            <div className="bg-card p-6 rounded-lg border border-brand-primary/20 mt-8">
              <h2 className="text-2xl font-semibold mb-4 text-brand-secondary">La Nostra Vision</h2>
              <p>
                Creare una community globale dove il cibo diventa un linguaggio universale 
                per connettere persone, culture e tradizioni culinarie da tutto il mondo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChiSiamo;