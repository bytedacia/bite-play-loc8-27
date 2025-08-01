import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ArrowLeft, Timer, Target, RotateCcw, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useGameConfig } from "@/hooks/useGameConfig";
import { GameConfig } from "@/types/game";

// Interfaccia per props configurabili (opzionale)
interface GamePageProps {
  customConfig?: Partial<GameConfig>;
}

const Game = ({ customConfig }: GamePageProps = {}) => {
  // Stato locale per la demo (mantiene la struttura originale)
  const [currentRound, setCurrentRound] = useState(1);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [roundResults, setRoundResults] = useState([
    { round: 1, points: 850, time: "2:30", attempts: 2, food: "Pizza Margherita", image: "/api/placeholder/60/60", correctLocation: "Napoli, Italia", correctCountry: "🇮🇹 Italia", guessedAttempts: ["Roma, Italia", "Napoli, Italia"] },
    { round: 2, points: 920, time: "1:45", attempts: 1, food: "Sushi", image: "/api/placeholder/60/60", correctLocation: "Tokyo, Giappone", correctCountry: "🇯🇵 Giappone", guessedAttempts: ["Tokyo, Giappone"] },
    { round: 3, points: 650, time: "3:20", attempts: 3, food: "Croissant", image: "/api/placeholder/60/60", correctLocation: "Parigi, Francia", correctCountry: "🇫🇷 Francia", guessedAttempts: ["Londra, UK", "Berlino, Germania", "Parigi, Francia"] },
    { round: 4, points: 780, time: "2:10", attempts: 2, food: "Tacos", image: "/api/placeholder/60/60", correctLocation: "Città del Messico", correctCountry: "🇲🇽 Messico", guessedAttempts: ["Los Angeles, USA", "Città del Messico"] },
    { round: 5, points: 950, time: "1:30", attempts: 1, food: "Paella", image: "/api/placeholder/60/60", correctLocation: "Valencia, Spagna", correctCountry: "🇪🇸 Spagna", guessedAttempts: ["Valencia, Spagna"] },
    { round: 6, points: 720, time: "2:50", attempts: 3, food: "Pad Thai", image: "/api/placeholder/60/60", correctLocation: "Bangkok, Tailandia", correctCountry: "🇹🇭 Tailandia", guessedAttempts: ["Singapore", "Manila, Filippine", "Bangkok, Tailandia"] },
    { round: 7, points: 890, time: "1:55", attempts: 1, food: "Hamburger", image: "/api/placeholder/60/60", correctLocation: "New York, USA", correctCountry: "🇺🇸 USA", guessedAttempts: ["New York, USA"] },
    { round: 8, points: 630, time: "3:45", attempts: 3, food: "Ramen", image: "/api/placeholder/60/60", correctLocation: "Tokyo, Giappone", correctCountry: "🇯🇵 Giappone", guessedAttempts: ["Seoul, Korea", "Pechino, Cina", "Tokyo, Giappone"] },
    { round: 9, points: 810, time: "2:25", attempts: 2, food: "Fish & Chips", image: "/api/placeholder/60/60", correctLocation: "Londra, UK", correctCountry: "🇬🇧 Regno Unito", guessedAttempts: ["Dublino, Irlanda", "Londra, UK"] },
    { round: 10, points: 900, time: "1:40", attempts: 1, food: "Gelato", image: "/api/placeholder/60/60", correctLocation: "Roma, Italia", correctCountry: "🇮🇹 Italia", guessedAttempts: ["Roma, Italia"] }
  ]);

  // Hook configurabile (pronto per quando integrerai il tuo gioco)
  const { config, gameState, actions } = useGameConfig(customConfig);

  // Simula completamento dopo 10 round (logica originale)
  const handleNextRound = () => {
    if (currentRound < 10) {
      setCurrentRound(prev => prev + 1);
    } else {
      setGameCompleted(true);
    }
    // Quando integrerai il tuo gioco, sostituisci con: actions.nextRound()
  };

  const handleRestart = () => {
    setCurrentRound(1);
    setGameCompleted(false);
    // Quando integrerai il tuo gioco, sostituisci con: actions.resetGame()
  };

  const totalScore = roundResults.reduce((total, round) => total + round.points, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header with back button */}
        <div className="mb-6">
          <Link to="/">
            <Button variant="outline" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Torna alla Home
            </Button>
          </Link>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent bg-clip-text text-transparent">
            FOOD GUESS
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[calc(100vh-200px)]">
          {/* Main map area */}
          <div className="lg:col-span-3 space-y-4">
            {/* Map container */}
            <Card className="h-2/3 p-4 bg-gradient-to-br from-card to-card/80 border-primary/20">
              <div className="w-full h-full bg-gradient-to-br from-muted/50 to-muted/30 rounded-lg flex items-center justify-center border-2 border-dashed border-primary/20">
                <div className="text-center space-y-2">
                  <div className="text-6xl">🗺️</div>
                  <p className="text-muted-foreground">Mappa del gioco</p>
                </div>
              </div>
            </Card>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 h-1/4">
              {/* Timer */}
              <Card className="p-4 bg-gradient-to-br from-card to-card/80 border-primary/20">
                <div className="flex items-center justify-between h-full">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Timer className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold">Timer</h3>
                    </div>
                    <p className="text-3xl font-bold text-primary">02:30</p>
                  </div>
                </div>
              </Card>

              {/* Punti */}
              <Card className="p-4 bg-gradient-to-br from-card to-card/80 border-primary/20">
                <div className="flex items-center justify-between h-full">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Target className="h-5 w-5 text-brand-secondary" />
                      <h3 className="font-semibold">Punti</h3>
                    </div>
                    <p className="text-3xl font-bold text-brand-secondary">0</p>
                  </div>
                </div>
              </Card>

              {/* Tentativi */}
              <Card className="p-4 bg-gradient-to-br from-card to-card/80 border-primary/20">
                <div className="flex items-center justify-between h-full">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <RotateCcw className="h-5 w-5 text-brand-accent" />
                      <h3 className="font-semibold">Tentativi</h3>
                    </div>
                    <p className="text-3xl font-bold text-brand-accent">3</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Componente futuro - rettangolo lungo */}
            <Card className="p-3 bg-gradient-to-br from-card to-card/80 border-primary/20 h-16">
              <div className="w-full h-full bg-gradient-to-br from-muted/50 to-muted/30 rounded-lg flex items-center justify-center border-2 border-dashed border-primary/20">
                <div className="text-center">
                  <p className="text-muted-foreground text-sm">Componente futuro per testo</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Right sidebar with photo and name */}
          <div className="lg:col-span-1 space-y-4">
            {/* Round indicator */}
            <Card className="p-3 bg-gradient-to-br from-card to-card/80 border-primary/20 h-14">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <p className="text-muted-foreground text-sm font-semibold">Round {currentRound}/10</p>
                  <p className="text-muted-foreground text-xs">{(currentRound / 10 * 100)}%</p>
                </div>
                {/* Progress bar */}
                <div className="w-full bg-muted/30 rounded-full h-2 overflow-hidden">
                  <div className="bg-gradient-to-r from-primary to-brand-secondary h-2 rounded-full transition-all duration-500 ease-out relative" style={{width: `${(currentRound / 10 * 100)}%`}}>
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/50 to-transparent w-6 animate-[slide_1.5s_ease-in-out_infinite] -translate-x-full"></div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Photo container */}
            <Card className="p-4 bg-gradient-to-br from-card to-card/80 border-primary/20 h-1/2">
              <div className="w-full h-full bg-gradient-to-br from-muted/50 to-muted/30 rounded-lg flex items-center justify-center border-2 border-dashed border-primary/20">
                <div className="text-center space-y-2">
                  <div className="text-6xl">📸</div>
                  <p className="text-muted-foreground">Foto del cibo</p>
                </div>
              </div>
            </Card>

            {/* Nome del cibo */}
            <Card className="p-3 bg-gradient-to-br from-card to-card/80 border-primary/20 h-16">
              <div className="w-full h-full bg-gradient-to-br from-muted/50 to-muted/30 rounded-lg flex items-center justify-center border-2 border-dashed border-primary/20">
                <div className="text-center">
                  <p className="text-muted-foreground text-sm">Nome del cibo</p>
                </div>
              </div>
            </Card>

            {/* Compass container */}
            <Card className="p-4 bg-gradient-to-br from-card to-card/80 border-primary/20 h-1/4">
              <div className="w-full h-full bg-gradient-to-br from-muted/50 to-muted/30 rounded-lg flex items-center justify-center border-2 border-dashed border-primary/20">
                <div className="text-center space-y-2">
                  <div className="text-4xl">🧭</div>
                  <p className="text-muted-foreground text-sm">Bussola 3D</p>
                </div>
              </div>
            </Card>

            {/* Bottone classifica quando completato */}
            {gameCompleted && (
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-primary/90 hover:to-brand-secondary/90 text-black font-bold shadow-lg">
                    <Trophy className="mr-2 h-4 w-4" />
                    Vedi Classifica
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl mx-auto bg-gradient-to-br from-card to-card/80 border-primary/20 max-h-[90vh] overflow-hidden">
                  <DialogHeader>
                    <DialogTitle className="text-center text-2xl font-bold bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent bg-clip-text text-transparent">
                      🏆 CLASSIFICA FINALE
                    </DialogTitle>
                  </DialogHeader>
                  
                  <div className="space-y-4">
                    {/* Punteggio totale */}
                    <Card className="p-4 bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 border-brand-primary/30">
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">Punteggio Totale</p>
                        <p className="text-3xl font-bold text-brand-primary">{totalScore.toLocaleString()}</p>
                      </div>
                    </Card>
                    
                    {/* Lista round dettagliata */}
                    <div className="max-h-80 overflow-y-auto space-y-3 pr-2">
                      {roundResults.map((result, index) => (
                        <Card key={result.round} className="p-4 bg-gradient-to-r from-card/50 to-card/30 border-primary/10 hover:border-primary/30 transition-all">
                          <div className="grid grid-cols-12 gap-4 items-center">
                            {/* Round number e cibo */}
                            <div className="col-span-3">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full flex items-center justify-center text-sm font-bold text-black">
                                  {result.round}
                                </div>
                                <div>
                                  <img 
                                    src={result.image} 
                                    alt={result.food}
                                    className="w-12 h-12 rounded-lg object-cover border-2 border-primary/20"
                                  />
                                  <div className="text-xs font-semibold text-foreground mt-1">{result.food}</div>
                                </div>
                              </div>
                            </div>
                            
                            {/* Punteggio e stats */}
                            <div className="col-span-2 text-center">
                              <div className="text-lg font-bold text-brand-primary">{result.points}</div>
                              <div className="text-xs text-muted-foreground">punti</div>
                            </div>
                            
                            {/* Tempo e tentativi */}
                            <div className="col-span-2 text-center">
                              <div className="text-sm">⏱️ {result.time}</div>
                              <div className="text-sm">🎯 {result.attempts} tent.</div>
                            </div>
                            
                            {/* Posizioni e tentativi */}
                            <div className="col-span-5">
                              <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                  <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">✓ CORRETTO</span>
                                  <span className="text-xs font-medium">{result.correctLocation}</span>
                                  <span className="text-xs">{result.correctCountry}</span>
                                </div>
                                
                                <div className="space-y-1">
                                  <span className="text-xs bg-orange-500/20 text-orange-400 px-2 py-1 rounded-full">🎯 I TUOI TENTATIVI</span>
                                  {result.guessedAttempts.map((attempt, attemptIndex) => (
                                    <div key={attemptIndex} className="flex items-center gap-2 ml-4">
                                      <span className={`text-xs px-2 py-1 rounded-full ${
                                        attemptIndex === result.guessedAttempts.length - 1 && attempt === result.correctLocation
                                          ? 'bg-green-500/20 text-green-400'
                                          : 'bg-red-500/20 text-red-400'
                                      }`}>
                                        {attemptIndex + 1}°
                                      </span>
                                      <span className="text-xs font-medium">{attempt}</span>
                                      {attemptIndex === result.guessedAttempts.length - 1 && attempt === result.correctLocation && (
                                        <span className="text-xs text-green-400">✓</span>
                                      )}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                    
                    {/* Bottone rigioca - SEMPRE VISIBILE */}
                    <div className="mt-6 pt-4 border-t border-primary/20">
                      <Button 
                        onClick={handleRestart}
                        className="w-full bg-gradient-to-r from-brand-secondary to-brand-accent hover:from-brand-secondary/90 hover:to-brand-accent/90 text-black font-bold text-lg py-3"
                      >
                        🔄 RIGIOCA
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            )}

            {/* Bottone temporaneo per testare (rimuovi in produzione) */}
            {!gameCompleted && (
              <Button 
                onClick={handleNextRound}
                variant="outline"
                className="w-full text-xs"
              >
                Simula Round {currentRound < 10 ? 'Successivo' : 'Completato'}
              </Button>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;