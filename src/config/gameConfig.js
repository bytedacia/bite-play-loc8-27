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
  
  // CONFIGURAZIONE MAPPA - COMPLETA!
  mapConfig: {
    showMap: true,
    mapComponent: null, // Il tuo componente mappa personalizzato
    mapProps: {}, // Props per il tuo componente mappa
    placeholderText: "Mappa del gioco",
    placeholderIcon: "🗺️",
    
    // FUNZIONI MAPPA CONFIGURABILI
    onMapClick: null, // (coordinates, locationName) => void
    onMapReady: null, // (mapInstance) => void
    calculateDistance: null, // (guess, correct) => number (in km)
    reverseGeocode: null, // (lat, lng) => Promise<string>
    forwardGeocode: null, // (locationName) => Promise<{lat, lng}>
    calculateScoreFromDistance: null, // (distance, maxDistance) => number
    formatDistance: null, // (distance) => string
    getMapCenter: null, // (round) => {lat, lng}
    getMapZoom: null, // (round) => number
    restrictMapBounds: false,
    mapBounds: null // {north, south, east, west}
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
  
  // CONFIGURAZIONE MAPPA PERSONALIZZATA CON FUNZIONI
  mapConfig: {
    showMap: true,
    placeholderText: "Clicca sulla mappa per indovinare!",
    placeholderIcon: "🌍",
    
    // FUNZIONI MAPPA PERSONALIZZATE
    onMapClick: (coordinates, locationName) => {
      console.log(`Click sulla mappa: ${locationName} (${coordinates.lat}, ${coordinates.lng})`);
      // La tua logica personalizzata per i click
    },
    
    onMapReady: (mapInstance) => {
      console.log("Mappa pronta:", mapInstance);
      // Configura la mappa quando è pronta
      // Aggiungi marker, stili, layer personalizzati, etc.
    },
    
    // Calcola distanza con formula di Haversine personalizzata
    calculateDistance: (guess, correct) => {
      const R = 6371; // Raggio Terra in km
      const dLat = (correct.lat - guess.lat) * Math.PI / 180;
      const dLng = (correct.lng - guess.lng) * Math.PI / 180;
      const a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(guess.lat * Math.PI / 180) * Math.cos(correct.lat * Math.PI / 180) *
        Math.sin(dLng/2) * Math.sin(dLng/2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
      return R * c; // Distanza in km
    },
    
    // Geocoding inverso personalizzato
    reverseGeocode: async (lat, lng) => {
      try {
        // OPZIONE 1: Usa il tuo servizio di geocoding
        const response = await fetch(`/api/reverse-geocode?lat=${lat}&lng=${lng}`);
        const data = await response.json();
        return data.locationName;
        
        // OPZIONE 2: Usa Mapbox Geocoding API
        // const response = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${mapboxToken}`);
        // const data = await response.json();
        // return data.features[0]?.place_name || "Località sconosciuta";
        
      } catch (error) {
        console.error("Errore geocoding:", error);
        return "Località sconosciuta";
      }
    },
    
    // Geocoding diretto personalizzato
    forwardGeocode: async (locationName) => {
      try {
        // OPZIONE 1: Usa il tuo servizio
        const response = await fetch(`/api/geocode?location=${encodeURIComponent(locationName)}`);
        const data = await response.json();
        return { lat: data.lat, lng: data.lng };
        
        // OPZIONE 2: Usa Mapbox
        // const response = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(locationName)}.json?access_token=${mapboxToken}`);
        // const data = await response.json();
        // const coords = data.features[0]?.center;
        // return { lat: coords[1], lng: coords[0] };
        
      } catch (error) {
        console.error("Errore geocoding:", error);
        return { lat: 0, lng: 0 };
      }
    },
    
    // Calcolo punteggio basato sulla distanza
    calculateScoreFromDistance: (distance, maxDistance = 20000) => {
      if (distance === 0) return 1000; // Perfetto
      if (distance >= maxDistance) return 0; // Troppo lontano
      
      // Punteggio inversamente proporzionale alla distanza
      const scorePercentage = Math.max(0, (maxDistance - distance) / maxDistance);
      return Math.round(scorePercentage * 1000);
    },
    
    // Formattazione distanza
    formatDistance: (distance) => {
      if (distance < 1) {
        return `${Math.round(distance * 1000)}m`;
      } else if (distance < 100) {
        return `${distance.toFixed(1)}km`;
      } else {
        return `${Math.round(distance)}km`;
      }
    },
    
    // Centro mappa per round
    getMapCenter: (round) => {
      // Centra la mappa in base al round
      const centers = [
        { lat: 41.9028, lng: 12.4964 }, // Europa (Roma)
        { lat: 35.6762, lng: 139.6503 }, // Asia (Tokyo)
        { lat: 40.7128, lng: -74.0060 }, // America (New York)
        { lat: -33.8688, lng: 151.2093 }, // Oceania (Sydney)
        { lat: 30.0444, lng: 31.2357 }, // Africa (Cairo)
      ];
      return centers[round % centers.length] || { lat: 0, lng: 0 };
    },
    
    // Zoom mappa per round
    getMapZoom: (round) => {
      // Zoom diverso per difficoltà crescente
      if (round <= 3) return 4; // Zoom globale
      if (round <= 6) return 5; // Zoom continentale
      return 6; // Zoom regionale
    },
    
    // Limiti mappa
    restrictMapBounds: true,
    mapBounds: {
      north: 85,
      south: -85,
      east: 180,
      west: -180
    }
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