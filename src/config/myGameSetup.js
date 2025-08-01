// 🎮 IL TUO GIOCO PERSONALIZZATO - CONFIGURA QUI!
// Sostituisci tutto questo file con la tua implementazione

export const MY_GAME_CONFIG = {
  // ========== CONFIGURAZIONE BASE ==========
  gameTitle: "IL MIO GIOCO", // Cambia il titolo
  maxRounds: 10,
  roundTimeLimit: 180,
  
  // ========== LA TUA MAPPA ==========
  mapConfig: {
    showMap: true,
    
    // 🗺️ IL TUO COMPONENTE MAPPA - Sostituisci con la tua mappa!
    renderMap: (gameState, actions) => {
      // ESEMPIO: Sostituisci con il tuo componente mappa
      return React.createElement('div', {
        className: "w-full h-full bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300",
        onClick: () => {
          // La tua logica quando cliccano sulla mappa
          const guess = "Roma, Italia"; // Calcola dalla tua mappa
          actions.makeGuess(guess);
        }
      }, "🗺️ LA TUA MAPPA QUI - Sostituisci questo componente!");
    },
    
    // 🌍 LE TUE FUNZIONI MAPPA - Implementa la tua logica!
    onMapClick: (coordinates, locationName) => {
      console.log("Click mappa:", coordinates, locationName);
      // La tua logica personalizzata
    },
    
    calculateDistance: (guess, correct) => {
      // La tua formula di calcolo distanza
      return 0; // Implementa il tuo calcolo
    },
    
    reverseGeocode: async (lat, lng) => {
      // Il tuo servizio di geocoding
      return "La tua località";
    }
  },
  
  // ========== I TUOI COMPONENTI ==========
  components: {
    // 📸 LA TUA FOTO/IMMAGINE - Sostituisci!
    renderPhoto: (gameState) => {
      return React.createElement('div', {
        className: "w-full h-full bg-blue-100 rounded-lg flex items-center justify-center"
      }, "🖼️ LA TUA FOTO QUI");
    },
    
    // 🍕 IL TUO CONTENUTO - Sostituisci!
    renderFoodName: (gameState) => {
      return React.createElement('div', {
        className: "text-center"
      }, "🎯 IL TUO CONTENUTO QUI");
    },
    
    // 🧭 LA TUA BUSSOLA - Sostituisci!
    renderCompass: (gameState) => {
      return React.createElement('div', {
        className: "text-center"
      }, "🧭 LA TUA BUSSOLA QUI");
    }
  },
  
  // ========== I TUOI DATI (BACKEND + FRONTEND) ==========
  getFoodData: async (round) => {
    try {
      // 🔗 OPZIONE 1: Chiamata alla tua API backend
      const response = await fetch(`/api/my-game/round/${round}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('auth_token')}` // Se usi auth
        }
      });
      const data = await response.json();
      
      return {
        name: data.name,
        image: data.image,
        correctLocation: data.origin,
        correctCountry: data.country,
        hints: data.hints || []
      };
      
    } catch (error) {
      console.error("Errore API:", error);
      
      // 🔄 FALLBACK: Dati locali se API non disponibile
      return {
        name: "Pizza",
        image: "/api/placeholder/400/300",
        correctLocation: "Napoli, Italia",
        correctCountry: "🇮🇹 Italia",
        hints: ["È italiana", "Si mangia calda"]
      };
    }
  },
  
  // ========== LE TUE CALLBACK (BACKEND) ==========
  onRoundStart: async (round) => {
    console.log(`Round ${round} iniziato`);
    
    // 📊 Traccia inizio round nel tuo backend
    try {
      await fetch('/api/my-game/round-start', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          round, 
          timestamp: new Date().toISOString(),
          playerId: localStorage.getItem('player_id')
        })
      });
    } catch (error) {
      console.error("Errore salvataggio round:", error);
    }
  },
  
  onGuess: async (guess, isCorrect, coordinates = null) => {
    console.log(`Tentativo: ${guess}, Corretto: ${isCorrect}`);
    
    // 💾 Salva tentativo nel tuo backend
    try {
      await fetch('/api/my-game/guess', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          guess,
          isCorrect,
          coordinates,
          timestamp: new Date().toISOString(),
          playerId: localStorage.getItem('player_id'),
          round: getCurrentRound() // Implementa questa funzione
        })
      });
    } catch (error) {
      console.error("Errore salvataggio tentativo:", error);
    }
  },
  
  onGameComplete: async (results) => {
    console.log("Gioco completato!", results);
    
    // 🏆 Salva risultati finali nel tuo backend
    try {
      const response = await fetch('/api/my-game/complete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          results,
          totalScore: results.reduce((sum, r) => sum + r.points, 0),
          completedAt: new Date().toISOString(),
          playerId: localStorage.getItem('player_id')
        })
      });
      
      const data = await response.json();
      
      // 📈 Mostra leaderboard o statistiche
      if (data.rank) {
        alert(`Posizione in classifica: ${data.rank}`);
      }
      
    } catch (error) {
      console.error("Errore salvataggio risultati:", error);
    }
  },
  
  // ========== IL TUO PUNTEGGIO ==========
  calculateScore: (timeUsed, attempts, isCorrect) => {
    // La tua formula di punteggio
    return isCorrect ? 1000 : 0;
  }
};

// 🚀 ESPORTA LA TUA CONFIGURAZIONE
export default MY_GAME_CONFIG;