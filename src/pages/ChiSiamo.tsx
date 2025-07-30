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
              <span className="text-brand-primary font-semibold">Loc8abite</span> è il primo food game interattivo al mondo che trasforma il cibo e la cultura gastronomica globale in una sfida digitale. Creato da un giovane team guidato dalla passione per il viaggio, la tecnologia e la cucina, Loc8abite unisce gioco e scoperta, permettendo agli utenti di esplorare piatti, ristoranti e sapori da tutto il mondo… con un solo clic.
            </p>
            
            <p>
              Il progetto è nato quasi per caso, dall'intuizione di un giovane informatico italo-rumeno residente in Italia, che ha avuto l'idea osservando storie e video di una ragazza che ama da quattro anni. Non cercava successo, ma solo un modo per farle arrivare la sua visione del mondo — e forse, farsi guardare da lei con occhi diversi. Da quel sentimento profondo è nato qualcosa di autentico, che oggi parla a migliaia di persone attraverso il linguaggio universale del cibo e del gioco.
            </p>
            
            <p>
              Il nostro obiettivo è semplice: rendere la geografia gastronomica divertente, educativa e competitiva. In un'epoca in cui il cibo è diventato identità, comunicazione e cultura, noi vogliamo celebrarlo attraverso un'esperienza unica, accessibile e stimolante per tutti.
            </p>
            
            <p>
              <span className="text-brand-primary font-semibold">Loc8abite</span> nasce in Italia, ma parla tutte le lingue del mondo. Ogni modalità di gioco è progettata per far viaggiare i giocatori tra continenti, cucine e tradizioni, sfidando le proprie conoscenze culinarie o semplicemente scoprendo nuovi sapori.
            </p>
            
            <div className="bg-card p-6 rounded-lg border border-brand-primary/20 mt-8">
              <h2 className="text-2xl font-semibold mb-4 text-brand-secondary">La Nostra Mission</h2>
              <p>
                Dietro Loc8abite c'è un progetto indipendente, finanziato dal basso e costruito con cura, creatività e rispetto per i veri creatori dei contenuti che popolano la piattaforma. Crediamo nel valore della collaborazione, della cultura e dell'etica digitale.
              </p>
              <p className="mt-4 text-brand-primary font-semibold">
                Siamo solo all'inizio. E tu puoi essere dei nostri.
              </p>
              <p className="mt-2 italic">
                Assaggia il mondo. Gioca con il gusto. Benvenuto su Loc8abite.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChiSiamo;