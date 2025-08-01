// ESEMPIO: Come configurare il tuo gioco con JavaScript

// 1. CONFIGURAZIONE SEMPLICE
export const mySimpleConfig = {
  gameTitle: "IL MIO GIOCO CIBO",
  maxRounds: 8,
  showCompass: false
};

// 2. CONFIGURAZIONE COMPLETA
export const myFullConfig = {
  // Impostazioni base
  gameTitle: "WORLD FOOD CHALLENGE",
  maxRounds: 15,
  roundTimeLimit: 120, // 2 minuti
  maxPointsPerRound: 1500,
  attemptPenalty: 150,
  showCompass: true,
  showHints: true,
  
  // CALLBACK PERSONALIZZATI - Qui metti la tua logica
  onRoundStart: (round) => {
    console.log(`Round ${round} iniziato`);
    // Esempio: carica dati dal tuo server
    // loadRoundData(round);
  },
  
  onGuess: (guess, isCorrect) => {
    console.log(`Tentativo: ${guess}, Corretto: ${isCorrect}`);
    // Esempio: salva statistiche
    // savePlayerGuess(guess, isCorrect);
  },
  
  onGameComplete: (results) => {
    console.log("Gioco finito!", results);
    // Esempio: salva punteggio finale
    // saveGameResults(results);
  },
  
  onTimeUp: () => {
    console.log("Tempo scaduto!");
    // Esempio: gestisci timeout
    // handleTimeout();
  },
  
  // PROVIDER DATI - Sostituisci con i tuoi dati
  getFoodData: async (round) => {
    try {
      // OPZIONE 1: Dati da API
      const response = await fetch(`https://mia-api.com/foods/${round}`);
      const data = await response.json();
      
      return {
        name: data.name,
        image: data.photo,
        correctLocation: data.origin,
        correctCountry: data.country,
        hints: data.clues
      };
      
    } catch (error) {
      console.error("Errore API:", error);
      
      // OPZIONE 2: Dati statici di fallback
      const foods = [
        { name: "Pizza", image: "/pizza.jpg", correctLocation: "Napoli", correctCountry: "🇮🇹 Italia", hints: ["È italiana", "Ha pomodoro"] },
        { name: "Sushi", image: "/sushi.jpg", correctLocation: "Tokyo", correctCountry: "🇯🇵 Giappone", hints: ["È giapponese", "Ha pesce crudo"] },
        { name: "Tacos", image: "/tacos.jpg", correctLocation: "Messico", correctCountry: "🇲🇽 Messico", hints: ["È messicano", "Ha tortilla"] }
      ];
      
      return foods[round - 1] || foods[0];
    }
  },
  
  // CALCOLO PUNTEGGIO PERSONALIZZATO
  calculateScore: (timeUsed, attempts, isCorrect) => {
    if (!isCorrect) return 0;
    
    const baseScore = 1000;
    const timeBonus = Math.max(0, 120 - timeUsed) * 5; // Bonus tempo
    const attemptPenalty = (attempts - 1) * 100; // Penalità tentativi
    
    return Math.max(baseScore + timeBonus - attemptPenalty, 100);
  },
  
  // MESSAGGI PERSONALIZZATI
  messages: {
    roundComplete: "Fantastico! 🎉",
    gameComplete: "Sei un esperto mondiale! 🏆",
    timeUp: "Oops, tempo finito! ⏰",
    correctGuess: "Perfetto! 🎯",
    incorrectGuess: "Riprova, ce la fai! 💪",
    hintMessage: (hint) => `💡 Aiutino: ${hint}`,
  }
};

// 3. CONFIGURAZIONE CON DATABASE (Esempio Supabase)
export const supabaseConfig = {
  gameTitle: "FOOD GUESS DB",
  maxRounds: 10,
  
  getFoodData: async (round) => {
    // Sostituisci con il tuo client Supabase
    const { data, error } = await supabase
      .from('foods')
      .select('*')
      .eq('round', round)
      .single();
    
    if (error) {
      console.error("Errore Supabase:", error);
      return fallbackFood;
    }
    
    return {
      name: data.name,
      image: data.image_url,
      correctLocation: data.origin_city,
      correctCountry: data.origin_country,
      hints: data.hints
    };
  },
  
  onGameComplete: async (results) => {
    // Salva risultati in database
    await supabase
      .from('game_results')
      .insert({
        player_id: getCurrentPlayerId(),
        total_score: results.reduce((sum, r) => sum + r.points, 0),
        rounds_data: results
      });
  }
};

// 4. CONFIGURAZIONE LOCALE (Senza server)
export const localConfig = {
  gameTitle: "FOOD QUIZ LOCALE",
  maxRounds: 5,
  
  getFoodData: async (round) => {
    // Dati hardcoded per test locale
    const localFoods = [
      { name: "Carbonara", image: "/local/carbonara.jpg", correctLocation: "Roma", correctCountry: "🇮🇹 Italia" },
      { name: "Croissant", image: "/local/croissant.jpg", correctLocation: "Parigi", correctCountry: "🇫🇷 Francia" },
      { name: "Hamburger", image: "/local/burger.jpg", correctLocation: "New York", correctCountry: "🇺🇸 USA" },
      { name: "Paella", image: "/local/paella.jpg", correctLocation: "Valencia", correctCountry: "🇪🇸 Spagna" },
      { name: "Ramen", image: "/local/ramen.jpg", correctLocation: "Tokyo", correctCountry: "🇯🇵 Giappone" }
    ];
    
    return localFoods[round - 1];
  },
  
  onGuess: (guess, isCorrect) => {
    // Salva in localStorage
    const stats = JSON.parse(localStorage.getItem('gameStats') || '[]');
    stats.push({ guess, isCorrect, timestamp: Date.now() });
    localStorage.setItem('gameStats', JSON.stringify(stats));
  }
};

// COME USARE LE CONFIGURAZIONI:
// 
// 1. Nel tuo componente:
// import { myFullConfig } from './example-configs/myGameConfig.js';
// <Game customConfig={myFullConfig} />
//
// 2. Oppure inline:
// <Game customConfig={{
//   gameTitle: "TEST",
//   maxRounds: 3,
//   getFoodData: async (round) => ({ ... })
// }} />
//
// 3. O senza configurazione (usa default):
// <Game />