import Game from "@/pages/Game";
import { GameConfig } from "@/types/game";

// Esempio di come personalizzare il gioco
export const CustomFoodGuessGame = () => {
  const customConfig: Partial<GameConfig> = {
    gameTitle: "WORLD FOOD CHALLENGE",
    maxRounds: 15,
    roundTimeLimit: 120, // 2 minuti
    maxPointsPerRound: 1500,
    attemptPenalty: 150,
    showCompass: false, // Disabilita la bussola
    showHints: true,
    
    // Callback personalizzati
    onRoundStart: (round) => {
      console.log(`Iniziando round ${round}`);
      // QUI puoi caricare i dati del round dal tuo backend
    },
    
    onGuess: (guess, isCorrect) => {
      console.log(`Tentativo: ${guess}, Corretto: ${isCorrect}`);
      // QUI puoi salvare le statistiche
    },
    
    onGameComplete: (results) => {
      console.log("Gioco completato!", results);
      // QUI puoi salvare il punteggio finale
    },
    
    // Provider di dati personalizzabile
    getFoodData: async (round) => {
      // QUI fai chiamata al tuo backend per ottenere i dati del cibo
      const response = await fetch(`/api/food/${round}`);
      const data = await response.json();
      return {
        name: data.name,
        image: data.image,
        correctLocation: data.origin,
        correctCountry: data.country,
        hints: data.hints
      };
    },
    
    // Calcolo punteggio personalizzato
    calculateScore: (timeUsed, attempts, isCorrect) => {
      if (!isCorrect) return 0;
      
      const baseScore = 1000;
      const timeBonus = Math.max(0, 120 - timeUsed) * 5; // Bonus tempo
      const attemptPenalty = (attempts - 1) * 100; // Penalità tentativi
      
      return Math.max(baseScore + timeBonus - attemptPenalty, 100);
    },
    
    // Messaggi personalizzati
    messages: {
      roundComplete: "Round completato! 🎉",
      gameComplete: "Hai completato la sfida! 🏆",
      timeUp: "Tempo scaduto! ⏰",
      correctGuess: "Perfetto! 🎯",
      incorrectGuess: "Riprova! 🤔",
      hintMessage: (hint) => `💡 Suggerimento: ${hint}`,
    }
  };

  return <Game customConfig={customConfig} />;
};

// Esempio di configurazione minima
export const SimpleFoodGame = () => {
  const simpleConfig: Partial<GameConfig> = {
    gameTitle: "FOOD QUIZ",
    maxRounds: 5,
    showCompass: false,
    showHints: false,
  };

  return <Game customConfig={simpleConfig} />;
};