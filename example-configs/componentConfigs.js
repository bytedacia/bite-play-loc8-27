// ESEMPI: Come configurare ogni riquadro del gioco

import React from 'react';

// 1. CONFIGURAZIONE MAPPA - Con Mapbox o altra libreria
export const mapboxConfig = {
  components: {
    renderMap: (gameState, actions) => {
      // Il tuo componente mappa Mapbox
      return React.createElement('div', {
        className: "w-full h-full relative"
      }, [
        // Mappa Mapbox
        React.createElement('div', {
          key: 'map',
          id: 'mapbox-container',
          className: "w-full h-full rounded-lg",
          ref: (el) => {
            if (el && !el.hasChildNodes()) {
              // Inizializza Mapbox qui
              initializeMapbox(el, actions.makeGuess);
            }
          }
        }),
        
        // Overlay con istruzioni
        React.createElement('div', {
          key: 'overlay',
          className: "absolute top-4 left-4 bg-black/70 text-white p-2 rounded text-sm"
        }, "Clicca sulla mappa per indovinare!")
      ]);
    }
  }
};

// 2. CONFIGURAZIONE MAPPA SEMPLICE - Con click handler
export const simpleMapConfig = {
  components: {
    renderMap: (gameState, actions) => {
      return React.createElement('div', {
        className: "w-full h-full bg-gradient-to-br from-blue-400 to-green-400 rounded-lg flex items-center justify-center cursor-pointer transition-transform hover:scale-105",
        onClick: () => {
          // Simula click sulla mappa
          const randomGuesses = ["Roma, Italia", "Parigi, Francia", "Tokyo, Giappone"];
          const guess = randomGuesses[Math.floor(Math.random() * randomGuesses.length)];
          actions.makeGuess(guess);
        }
      }, [
        React.createElement('div', {
          key: 'content',
          className: "text-center text-white"
        }, [
          React.createElement('div', { key: 'icon', className: "text-6xl" }, "🌍"),
          React.createElement('p', { key: 'text', className: "mt-2 font-bold" }, "Clicca per indovinare!"),
          React.createElement('p', { key: 'subtext', className: "text-sm opacity-80" }, "Mappa interattiva")
        ])
      ]);
    }
  }
};

// 3. CONFIGURAZIONE FOTO PERSONALIZZATA
export const customPhotoConfig = {
  components: {
    renderPhoto: (gameState) => {
      const currentFood = gameState.currentFood;
      
      if (!currentFood?.image) {
        return React.createElement('div', {
          className: "w-full h-full bg-gray-200 rounded-lg flex items-center justify-center"
        }, [
          React.createElement('p', { key: 'loading' }, "Caricamento foto...")
        ]);
      }
      
      return React.createElement('div', {
        className: "w-full h-full relative overflow-hidden rounded-lg"
      }, [
        // Immagine principale
        React.createElement('img', {
          key: 'image',
          src: currentFood.image,
          alt: currentFood.name,
          className: "w-full h-full object-cover transition-transform hover:scale-110",
          style: { 
            filter: 'brightness(0.95) contrast(1.05) saturate(1.1)' 
          }
        }),
        
        // Overlay con effetti
        React.createElement('div', {
          key: 'overlay',
          className: "absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
        }),
        
        // Badge con info
        React.createElement('div', {
          key: 'badge',
          className: "absolute bottom-2 right-2 bg-white/90 px-2 py-1 rounded text-xs font-semibold"
        }, "📸 Foto originale")
      ]);
    }
  }
};

// 4. CONFIGURAZIONE NOME CIBO CON ANIMAZIONI
export const animatedFoodNameConfig = {
  components: {
    renderFoodName: (gameState) => {
      const foodName = gameState.currentFood?.name || "Caricamento...";
      
      return React.createElement('div', {
        className: "w-full h-full flex items-center justify-center"
      }, [
        React.createElement('div', {
          key: 'container',
          className: "text-center"
        }, [
          React.createElement('h3', {
            key: 'name',
            className: "text-lg font-bold text-brand-primary animate-pulse"
          }, foodName),
          
          // Stelle di difficoltà
          React.createElement('div', {
            key: 'stars',
            className: "flex justify-center mt-1 text-yellow-500"
          }, "⭐⭐⭐"),
          
          // Categoria
          React.createElement('p', {
            key: 'category',
            className: "text-xs text-muted-foreground mt-1"
          }, "Piatto Tradizionale")
        ])
      ]);
    }
  }
};

// 5. CONFIGURAZIONE BUSSOLA 3D PERSONALIZZATA
export const custom3DCompassConfig = {
  components: {
    renderCompass: (gameState) => {
      // Calcola direzione verso il cibo (esempio)
      const direction = gameState.currentFood ? "Nord-Est" : "---";
      
      return React.createElement('div', {
        className: "w-full h-full flex flex-col items-center justify-center"
      }, [
        // Bussola animata
        React.createElement('div', {
          key: 'compass',
          className: "relative w-16 h-16 mb-2"
        }, [
          React.createElement('div', {
            key: 'base',
            className: "w-full h-full bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center shadow-lg"
          }, [
            React.createElement('div', {
              key: 'needle',
              className: "text-2xl animate-spin",
              style: { animationDuration: '8s' }
            }, "🧭")
          ])
        ]),
        
        // Direzione
        React.createElement('p', {
          key: 'direction',
          className: "text-sm font-bold text-brand-primary"
        }, direction),
        
        React.createElement('p', {
          key: 'label',
          className: "text-xs text-muted-foreground"
        }, "Direzione suggerita")
      ]);
    }
  }
};

// 6. CONFIGURAZIONE MESSAGGI E SUGGERIMENTI
export const customMessagesConfig = {
  components: {
    renderMessages: (gameState, actions) => {
      const hasHint = gameState.showHint && gameState.hintMessage;
      
      return React.createElement('div', {
        className: "w-full h-full flex items-center justify-between px-4"
      }, [
        // Messaggio principale
        React.createElement('div', {
          key: 'message',
          className: "flex-1"
        }, [
          hasHint 
            ? React.createElement('div', {
                key: 'hint',
                className: "flex items-center gap-2 text-sm"
              }, [
                React.createElement('span', { key: 'icon' }, "💡"),
                React.createElement('span', { key: 'text', className: "text-yellow-600 font-medium" }, gameState.hintMessage)
              ])
            : React.createElement('p', {
                key: 'default',
                className: "text-sm text-muted-foreground"
              }, gameState.gameStarted ? "Dove pensi che sia originario questo cibo?" : "Pronto per iniziare?")
        ]),
        
        // Bottoni azione
        React.createElement('div', {
          key: 'actions',
          className: "flex gap-2"
        }, [
          // Bottone suggerimento
          gameState.gameStarted && React.createElement('button', {
            key: 'hint-btn',
            className: "px-3 py-1 bg-yellow-500 text-white rounded text-xs hover:bg-yellow-600 transition-colors",
            onClick: actions.showHint,
            disabled: !gameState.currentFood?.hints || gameState.hintsUsed >= (gameState.currentFood?.hints?.length || 0)
          }, "💡 Aiuto"),
          
          // Bottone skip (esempio)
          gameState.gameStarted && React.createElement('button', {
            key: 'skip-btn',
            className: "px-3 py-1 bg-gray-500 text-white rounded text-xs hover:bg-gray-600 transition-colors",
            onClick: () => actions.nextRound()
          }, "⏭️ Salta")
        ])
      ]);
    }
  }
};

// 7. CONFIGURAZIONE COMPLETA - Tutto personalizzato
export const fullCustomConfig = {
  gameTitle: "WORLD FOOD EXPLORER",
  maxRounds: 12,
  
  // Combina tutte le configurazioni
  components: {
    ...mapboxConfig.components,
    ...customPhotoConfig.components,
    ...animatedFoodNameConfig.components,
    ...custom3DCompassConfig.components,
    ...customMessagesConfig.components
  },
  
  // Callback personalizzati
  onRoundStart: (round) => {
    console.log(`🎮 Round ${round} iniziato!`);
    // Inizializza la mappa per il nuovo round
    // setupMapForRound(round);
  },
  
  onGuess: (guess, isCorrect, coordinates) => {
    console.log(`📍 Guess: ${guess} (${coordinates?.lat}, ${coordinates?.lng}) - ${isCorrect ? '✅' : '❌'}`);
    // Salva guess con coordinate
    // saveGuessWithCoordinates(guess, isCorrect, coordinates);
  },
  
  // Provider dati
  getFoodData: async (round) => {
    // I tuoi dati personalizzati
    const response = await fetch(`/api/foods/${round}`);
    return await response.json();
  }
};

// HELPER: Funzione per inizializzare Mapbox (esempio)
function initializeMapbox(container, onMapClick) {
  // Questo è solo un esempio - sostituisci con la tua implementazione Mapbox
  console.log("Inizializzando Mapbox in:", container);
  
  // Simula click sulla mappa
  container.addEventListener('click', (e) => {
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Converti coordinate click in guess geografico
    const guess = convertClickToLocation(x, y);
    onMapClick(guess);
  });
  
  // Aggiungi contenuto di esempio
  container.innerHTML = `
    <div style="width: 100%; height: 100%; background: linear-gradient(45deg, #4CAF50, #2196F3); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">
      🌍 La tua mappa Mapbox qui!<br>
      <small>Clicca ovunque per testare</small>
    </div>
  `;
}

function convertClickToLocation(x, y) {
  // Logica per convertire coordinate click in location
  // Questo è solo un esempio
  const locations = ["Roma, Italia", "Parigi, Francia", "Tokyo, Giappone", "New York, USA"];
  return locations[Math.floor(Math.random() * locations.length)];
}