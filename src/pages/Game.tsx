import VideoBackground from "@/components/VideoBackground";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { ArrowLeft, Play, Trophy, Star, Users } from "lucide-react";

const Game = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <VideoBackground />
      <Navigation />
      
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-white p-4">
        <Link 
          to="/" 
          className="absolute top-8 right-8 inline-flex items-center text-white/80 hover:text-white transition-all duration-300 group bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 hover:border-brand-primary/50"
        >
          <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform duration-300" />
          Torna alla Home
        </Link>

        <div className="text-center space-y-8 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent bg-clip-text text-transparent">
            INIZIA A GIOCARE
          </h1>
          
          <div className="text-xl md:text-2xl font-semibold text-white/90 mb-12">
            Scegli la tua modalità di gioco
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {/* Single Player */}
            <div className="group relative overflow-hidden bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm p-8 rounded-2xl border border-brand-primary/30 hover:border-brand-primary/60 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-primary/20 hover:-translate-y-2 cursor-pointer">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-primary/20 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
              <Play className="h-12 w-12 text-brand-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-primary transition-colors">Single Player</h3>
              <p className="text-white/70 text-lg">Gioca da solo e metti alla prova le tue conoscenze culinarie</p>
            </div>

            {/* Multiplayer */}
            <div className="group relative overflow-hidden bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm p-8 rounded-2xl border border-brand-secondary/30 hover:border-brand-secondary/60 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-secondary/20 hover:-translate-y-2 cursor-pointer">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-secondary/20 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
              <Users className="h-12 w-12 text-brand-secondary mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-secondary transition-colors">Multiplayer</h3>
              <p className="text-white/70 text-lg">Sfida i tuoi amici in tempo reale</p>
            </div>

            {/* Tournament */}
            <div className="group relative overflow-hidden bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm p-8 rounded-2xl border border-brand-accent/30 hover:border-brand-accent/60 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-accent/20 hover:-translate-y-2 cursor-pointer">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-accent/20 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
              <Trophy className="h-12 w-12 text-brand-accent mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-accent transition-colors">Torneo</h3>
              <p className="text-white/70 text-lg">Partecipa ai tornei settimanali e vinci premi esclusivi</p>
            </div>
          </div>

          <div className="mt-16 p-6 bg-gradient-to-r from-card/60 to-card/30 backdrop-blur-sm rounded-2xl border border-brand-primary/20">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Star className="h-6 w-6 text-brand-primary" />
              <h3 className="text-xl font-semibold">Modalità Beta</h3>
              <Star className="h-6 w-6 text-brand-primary" />
            </div>
            <p className="text-white/80">
              Il gioco è attualmente in fase beta. Nuove funzionalità e modalità verranno aggiunte presto!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;