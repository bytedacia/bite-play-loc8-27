// 🎮 HOOK PER IL TUO GIOCO PERSONALIZZATO
import { useState, useEffect } from 'react';

export const useMyGame = (config) => {
  const [gameState, setGameState] = useState({
    currentRound: 1,
    gameStarted: false,
    gameCompleted: false,
    stats: {
      timer: "3:00",
      points: 0,
      attempts: 0,
      maxAttempts: 3
    },
    roundResults: [],
    currentFood: null
  });

  // 🔄 CARICA I TUOI DATI
  const loadRoundData = async (round) => {
    if (config.getFoodData) {
      const data = await config.getFoodData(round);
      setGameState(prev => ({
        ...prev,
        currentFood: data
      }));
    }
  };

  // 🎯 GESTISCI I TUOI TENTATIVI
  const makeGuess = (guess) => {
    console.log("Tentativo:", guess);
    
    // La tua logica di verifica
    const isCorrect = true; // Implementa la tua verifica
    
    // Chiama la tua callback
    if (config.onGuess) {
      config.onGuess(guess, isCorrect);
    }
    
    // Aggiorna lo stato
    setGameState(prev => ({
      ...prev,
      stats: {
        ...prev.stats,
        attempts: prev.stats.attempts + 1
      }
    }));
  };

  // 🚀 INIZIA IL GIOCO
  const startGame = () => {
    setGameState(prev => ({
      ...prev,
      gameStarted: true
    }));
    
    loadRoundData(1);
    
    if (config.onRoundStart) {
      config.onRoundStart(1);
    }
  };

  return {
    gameState,
    actions: {
      startGame,
      makeGuess,
      loadRoundData
    }
  };
};