// Configurazione di default del gioco - FACILMENTE MODIFICABILE
export const defaultGameConfig = {
  // Configurazione generale
  gameTitle: "FOOD GUESS",
  maxRounds: 10,
  
  // Timer e punteggio
  roundTimeLimit: 180, // secondi
  maxPointsPerRound: 1000,
  timeBonus: true,
  attemptPenalty: 100,
  
  // Funzionalità UI
  showCompass: true,
  showHints: true,
  enableSound: false,
  
  // CONFIGURAZIONE MAPPA - NUOVO!
  mapConfig: {
    showMap: true,
    mapComponent: null, // Il tuo componente mappa personalizzato
    mapProps: {}, // Props per il tuo componente mappa
    placeholderText: "Mappa del gioco",
    placeholderIcon: "🗺️"
  },
  
  // CONFIGURAZIONE COMPONENTI PERSONALIZZATI
  components: {
    // Mappa personalizzata
    renderMap: null, // Funzione che ritorna JSX per la mappa
    // Foto personalizzata
    renderPhoto: null, // Funzione che ritorna JSX per la foto
    // Nome cibo personalizzato
    renderFoodName: null, // Funzione che ritorna JSX per nome cibo
    // Bussola personalizzata
    renderCompass: null, // Funzione che ritorna JSX per bussola
    // Area messaggi personalizzata
    renderMessages: null // Funzione che ritorna JSX per messaggi
  },
  
  // Messaggi del gioco
  messages: {
    roundComplete: "Round completato!",
    gameComplete: "Gioco completato!",
    timeUp: "Tempo scaduto!",
    correctGuess: "Risposta corretta!",
    incorrectGuess: "Riprova!",
    hintMessage: (hint) => `💡 Suggerimento: ${hint}`,
  }
};

// ESEMPIO: La tua configurazione personalizzata
export const myGameConfig = {
  ...defaultGameConfig,
  
  // Personalizza titolo e round
  gameTitle: "IL MIO FOOD GAME",
  maxRounds: 15,
  
  // CONFIGURAZIONE MAPPA PERSONALIZZATA
  mapConfig: {
    showMap: true,
    placeholderText: "Clicca sulla mappa per indovinare!",
    placeholderIcon: "🌍"
  },
  
  // COMPONENTI PERSONALIZZATI
  components: {
    // Mappa personalizzata - ESEMPIO con Mapbox
    renderMap: (gameState, actions) => {
      // Ritorna il tuo componente mappa
      return React.createElement('div', {
        className: "w-full h-full bg-blue-100 rounded-lg flex items-center justify-center cursor-pointer",
        onClick: (e) => {
          // La tua logica di click sulla mappa
          const guess = "Milano, Italia"; // Calcola dalla posizione del click
          actions.makeGuess(guess);
        }
      }, [
        React.createElement('p', { key: 'text' }, 'La tua mappa interattiva qui!')
      ]);
    },
    
    // Foto personalizzata
    renderPhoto: (gameState) => {
      if (!gameState.currentFood?.image) return null;
      
      return React.createElement('img', {
        src: gameState.currentFood.image,
        alt: gameState.currentFood.name,
        className: "w-full h-full object-cover rounded-lg shadow-lg",
        style: { filter: 'brightness(0.9) contrast(1.1)' }
      });
    },
    
    // Nome cibo con animazione
    renderFoodName: (gameState) => {
      const name = gameState.currentFood?.name || "???";
      
      return React.createElement('div', {
        className: "text-center animate-pulse"
      }, [
        React.createElement('h3', {
          key: 'name',
          className: "text-xl font-bold text-brand-primary"
        }, name)
      ]);
    }
  },
  
  // I tuoi callback personalizzati
  onRoundStart: (round) => {
    console.log(`Iniziando round ${round}`);
    // QUI: Carica i dati del tuo round
    // fetch(`/api/my-foods/${round}`)...
  },
  
  onGuess: (guess, isCorrect, coordinates) => {
    console.log(`Tentativo: ${guess}, Corretto: ${isCorrect}`, coordinates);
    // QUI: Salva le statistiche del giocatore + coordinate
    // savePlayerStats(guess, isCorrect, coordinates)...
  },
  
  onGameComplete: (results) => {
    console.log("Gioco completato!", results);
    // QUI: Salva il punteggio finale
    // saveGameScore(results)...
  },
  
  onTimeUp: () => {
    console.log("Tempo scaduto!");
    // QUI: Gestisci timeout
  },
  
  // Il tuo provider di dati
  getFoodData: async (round) => {
    // QUI: Sostituisci con la tua logica
    try {
      // Esempio con fetch
      const response = await fetch(`/api/foods/${round}`);
      const data = await response.json();
      
      return {
        name: data.name,
        image: data.image,
        correctLocation: data.origin,
        correctCountry: data.country,
        hints: data.hints || []
      };
    } catch (error) {
      console.error("Errore caricamento cibo:", error);
      // Fallback data
      return {
        name: "Pizza",
        image: "/api/placeholder/400/300",
        correctLocation: "Napoli, Italia",
        correctCountry: "🇮🇹 Italia",
        hints: ["È italiana", "Si mangia calda", "Ha la mozzarella"]
      };
    }
  },
  
  // Il tuo calcolo punteggio personalizzato
  calculateScore: (timeUsed, attempts, isCorrect) => {
    if (!isCorrect) return 0;
    
    const baseScore = 1000;
    const timeBonus = Math.max(0, 180 - timeUsed) * 3;
    const attemptPenalty = (attempts - 1) * 100;
    
    return Math.max(baseScore + timeBonus - attemptPenalty, 50);
  },
  
  // I tuoi messaggi personalizzati
  messages: {
    ...defaultGameConfig.messages,
    roundComplete: "Ottimo lavoro! 🎉",
    gameComplete: "Sei un esperto di cucina mondiale! 🏆",
    correctGuess: "Perfetto! 🎯",
  }
};

// ESEMPIO: Configurazione semplificata
export const simpleGameConfig = {
  gameTitle: "QUIZ CIBO",
  maxRounds: 5,
  showCompass: false,
  showHints: false,
  
  // Solo le funzioni essenziali
  getFoodData: async (round) => {
    // I tuoi dati semplici
    const foods = [
      { name: "Pizza", image: "/pizza.jpg", correctLocation: "Napoli", correctCountry: "🇮🇹 Italia" },
      { name: "Sushi", image: "/sushi.jpg", correctLocation: "Tokyo", correctCountry: "🇯🇵 Giappone" },
      // ... altri cibi
    ];
    
    return foods[round - 1] || foods[0];
  }
};