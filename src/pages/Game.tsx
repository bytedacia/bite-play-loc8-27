import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Timer, Target, RotateCcw } from "lucide-react";
import { Link } from "react-router-dom";

const Game = () => {
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
            <div className="grid grid-cols-4 gap-4 h-1/3">
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

              {/* Componente futuro */}
              <Card className="p-4 bg-gradient-to-br from-card to-card/80 border-primary/20">
                <div className="w-full h-full bg-gradient-to-br from-muted/50 to-muted/30 rounded-lg flex items-center justify-center border-2 border-dashed border-primary/20">
                  <div className="text-center space-y-2">
                    <div className="text-2xl">📝</div>
                    <p className="text-muted-foreground text-xs">Testo futuro</p>
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
          </div>

          {/* Right sidebar with photo and name */}
          <div className="lg:col-span-1 space-y-4">
            {/* Photo container */}
            <Card className="p-4 bg-gradient-to-br from-card to-card/80 border-primary/20 h-2/3">
              <div className="w-full h-full bg-gradient-to-br from-muted/50 to-muted/30 rounded-lg flex items-center justify-center border-2 border-dashed border-primary/20">
                <div className="text-center space-y-2">
                  <div className="text-6xl">📸</div>
                  <p className="text-muted-foreground">Foto del cibo</p>
                </div>
              </div>
            </Card>

            {/* Compass container */}
            <Card className="p-4 bg-gradient-to-br from-card to-card/80 border-primary/20 h-1/2">
              <div className="w-full h-full bg-gradient-to-br from-muted/50 to-muted/30 rounded-lg flex items-center justify-center border-2 border-dashed border-primary/20">
                <div className="text-center space-y-2">
                  <div className="text-4xl">🧭</div>
                  <p className="text-muted-foreground text-sm">Bussola 3D</p>
                </div>
              </div>
            </Card>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;