import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ArrowLeft, Timer, Target, RotateCcw, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

// Import game components
import PhotoGuessMode from "@/components/game/PhotoGuessMode";
import FoodGuessMode from "@/components/game/FoodGuessMode";

const Game = () => {
  const isMobile = useIsMobile();
  const [gameMode, setGameMode] = useState<"photo" | "food" | null>(null);
  const [currentRound, setCurrentRound] = useState(1);
  const [gameCompleted, setGameCompleted] = useState(false);

  const handleBackToMenu = () => {
    setGameMode(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5 p-2 sm:p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header with back button */}
        <div className="mb-4 sm:mb-6">
          <Link to="/">
            <Button variant="outline" className="mb-4 text-xs sm:text-sm">
              <ArrowLeft className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
              Torna alla Home
            </Button>
          </Link>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent bg-clip-text text-transparent">
            LOC8ABITE
          </h1>
        </div>

        {/* Game Mode Selection */}
        {gameMode === null && (
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            <Card 
              className="p-6 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl bg-gradient-to-br from-card to-card/80 border-primary/20"
              onClick={() => setGameMode("photo")}
            >
              <div className="text-center space-y-4">
                <div className="text-6xl">📷</div>
                <h3 className="text-xl font-bold">Photo Guess Mode</h3>
                <p className="text-muted-foreground">
                  Indovina il luogo guardando una foto di un posto famoso o di una scena.
                </p>
                <Button className="w-full bg-gradient-to-r from-brand-primary to-brand-secondary">
                  Gioca Ora
                </Button>
              </div>
            </Card>

            <Card 
              className="p-6 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl bg-gradient-to-br from-card to-card/80 border-primary/20"
              onClick={() => setGameMode("food")}
            >
              <div className="text-center space-y-4">
                <div className="text-6xl">🍽️</div>
                <h3 className="text-xl font-bold">Food Guess Mode</h3>
                <p className="text-muted-foreground">
                  Indovina la posizione basandoti su deliziose immagini di cibo da ristoranti.
                </p>
                <Button className="w-full bg-gradient-to-r from-brand-primary to-brand-secondary">
                  Gioca Ora
                </Button>
              </div>
            </Card>
          </div>
        )}

        {/* Photo Guess Mode */}
        {gameMode === "photo" && (
          <PhotoGuessMode onBack={handleBackToMenu} />
        )}

        {/* Food Guess Mode */}
        {gameMode === "food" && (
          <FoodGuessMode onBack={handleBackToMenu} />
        )}
      </div>
    </div>
  );
};

export default Game;