import { Link } from "react-router-dom";
import { ArrowLeft, Users, Target, Globe } from "lucide-react";

const ChiSiamo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background/95">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent py-20">
        <div className="container mx-auto px-4">
          <Link 
            to="/" 
            className="inline-flex items-center text-white/80 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Torna alla Home
          </Link>
          
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Chi Siamo
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Il primo food game interattivo che trasforma la cultura gastronomica in una sfida digitale
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          
          {/* Story Section */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-brand-primary">La Nostra Storia</h2>
                <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                  <p>
                    <span className="text-brand-primary font-semibold">Loc8abite</span> è il primo food game interattivo al mondo che trasforma il cibo e la cultura gastronomica globale in una sfida digitale. Creato da un giovane team guidato dalla passione per il viaggio, la tecnologia e la cucina, Loc8abite unisce gioco e scoperta, permettendo agli utenti di esplorare piatti, ristoranti e sapori da tutto il mondo… con un solo clic.
                  </p>
                  
                  <p>
                    Il progetto è nato quasi per caso, dall'intuizione di un giovane informatico italo-rumeno residente in Italia, che ha avuto l'idea osservando storie e video di una ragazza che ama da quattro anni. Non cercava successo, ma solo un modo per farle arrivare la sua visione del mondo — e forse, farsi guardare da lei con occhi diversi.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 p-8 rounded-2xl border border-brand-primary/20">
                <Users className="h-12 w-12 text-brand-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-foreground">Team Giovane e Appassionato</h3>
                <p className="text-muted-foreground">
                  Da quel sentimento profondo è nato qualcosa di autentico, che oggi parla a migliaia di persone attraverso il linguaggio universale del cibo e del gioco.
                </p>
              </div>
            </div>
          </div>

          {/* Mission & Vision Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="bg-card p-8 rounded-2xl border border-brand-primary/20 shadow-lg hover:shadow-xl transition-shadow">
              <Target className="h-12 w-12 text-brand-secondary mb-4" />
              <h3 className="text-2xl font-semibold mb-4 text-brand-secondary">Il Nostro Obiettivo</h3>
              <p className="text-muted-foreground leading-relaxed">
                Rendere la geografia gastronomica divertente, educativa e competitiva. In un'epoca in cui il cibo è diventato identità, comunicazione e cultura, noi vogliamo celebrarlo attraverso un'esperienza unica, accessibile e stimolante per tutti.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-2xl border border-brand-primary/20 shadow-lg hover:shadow-xl transition-shadow">
              <Globe className="h-12 w-12 text-brand-accent mb-4" />
              <h3 className="text-2xl font-semibold mb-4 text-brand-accent">Visione Globale</h3>
              <p className="text-muted-foreground leading-relaxed">
                <span className="text-brand-primary font-semibold">Loc8abite</span> nasce in Italia, ma parla tutte le lingue del mondo. Ogni modalità di gioco è progettata per far viaggiare i giocatori tra continenti, cucine e tradizioni, sfidando le proprie conoscenze culinarie.
              </p>
            </div>
          </div>

          {/* Values Section */}
          <div className="bg-gradient-to-r from-brand-primary/5 via-brand-secondary/5 to-brand-accent/5 p-10 rounded-3xl border border-brand-primary/10">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-primary">I Nostri Valori</h2>
            <div className="text-center space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                Dietro Loc8abite c'è un progetto indipendente, finanziato dal basso e costruito con cura, creatività e rispetto per i veri creatori dei contenuti che popolano la piattaforma. Crediamo nel valore della collaborazione, della cultura e dell'etica digitale.
              </p>
              
              <div className="pt-6 border-t border-brand-primary/20">
                <p className="text-xl font-semibold text-brand-primary mb-2">
                  Siamo solo all'inizio. E tu puoi essere dei nostri.
                </p>
                <p className="text-2xl font-bold bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent bg-clip-text text-transparent">
                  Assaggia il mondo. Gioca con il gusto. Benvenuto su Loc8abite.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChiSiamo;