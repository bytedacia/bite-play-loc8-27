// 🎮 TEMPLATE DEL TUO GIOCO - USA QUESTO COME BASE!
import React from 'react';
import { useMyGame } from '@/hooks/useMyGame';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const MyGameTemplate = ({ config }) => {
  const { gameState, actions } = useMyGame(config);

  if (!gameState.gameStarted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Card className="p-8 text-center">
          <h1 className="text-4xl font-bold mb-4">{config.gameTitle}</h1>
          <Button onClick={actions.startGame} size="lg">
            🚀 INIZIA IL TUO GIOCO
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-7xl mx-auto">
        
        {/* 📊 Header con statistiche */}
        <div className="mb-6 grid grid-cols-3 gap-4">
          <Card className="p-4 text-center">
            <div className="text-2xl font-bold">{gameState.stats.timer}</div>
            <div className="text-sm text-muted-foreground">Tempo</div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-2xl font-bold">{gameState.stats.points}</div>
            <div className="text-sm text-muted-foreground">Punti</div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-2xl font-bold">{gameState.stats.attempts}</div>
            <div className="text-sm text-muted-foreground">Tentativi</div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          
          {/* 🗺️ Area Mappa - CONFIGURABILE! */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">
              {config.mapConfig?.placeholderText || "Mappa"}
            </h3>
            <div className="h-96 bg-muted rounded-lg">
              {config.mapConfig?.renderMap ? 
                config.mapConfig.renderMap(gameState, actions) :
                <div className="h-full flex items-center justify-center">
                  <p className="text-muted-foreground">
                    🗺️ Aggiungi la tua mappa in mapConfig.renderMap
                  </p>
                </div>
              }
            </div>
          </Card>

          {/* 🎯 Area Contenuto - CONFIGURABILE! */}
          <div className="space-y-6">
            
            {/* 📸 Foto/Immagine */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Contenuto</h3>
              <div className="h-64 bg-muted rounded-lg">
                {config.components?.renderPhoto ? 
                  config.components.renderPhoto(gameState) :
                  <div className="h-full flex items-center justify-center">
                    <p className="text-muted-foreground">
                      🖼️ Aggiungi il tuo contenuto in components.renderPhoto
                    </p>
                  </div>
                }
              </div>
            </Card>

            {/* 🍕 Nome/Titolo */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Informazioni</h3>
              {config.components?.renderFoodName ? 
                config.components.renderFoodName(gameState) :
                <p className="text-muted-foreground">
                  ✏️ Aggiungi le tue informazioni in components.renderFoodName
                </p>
              }
            </Card>

            {/* 🧭 Bussola/Strumenti */}
            {config.showCompass && (
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Strumenti</h3>
                {config.components?.renderCompass ? 
                  config.components.renderCompass(gameState) :
                  <p className="text-muted-foreground">
                    🧭 Aggiungi i tuoi strumenti in components.renderCompass
                  </p>
                }
              </Card>
            )}
          </div>
        </div>

        {/* 🎮 Controlli del gioco */}
        <Card className="mt-6 p-6">
          <div className="flex gap-4 justify-center">
            <Button 
              onClick={() => actions.makeGuess("test")}
              variant="outline"
            >
              🎯 Prova Tentativo
            </Button>
            <Button 
              onClick={() => actions.loadRoundData(gameState.currentRound + 1)}
              variant="outline"
            >
              ⏭️ Round Successivo
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default MyGameTemplate;