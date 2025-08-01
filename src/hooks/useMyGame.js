// 🎮 HOOK PER IL TUO GIOCO PERSONALIZZATO (BACKEND + FRONTEND)
import { useState, useEffect } from 'react';
import { MyGameBackend } from '@/services/MyGameBackend';

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

  // 🔄 CARICA I TUOI DATI (CON BACKEND)
  const loadRoundData = async (round) => {
    try {
      if (config.getFoodData) {
        const data = await config.getFoodData(round);
        setGameState(prev => ({
          ...prev,
          currentFood: data
        }));
        
        // 💾 Salva automaticamente i progressi
        if (MyGameBackend.isAuthenticated()) {
          await MyGameBackend.saveProgress({ 
            ...gameState, 
            currentRound: round,
            currentFood: data 
          });
        }
      }
    } catch (error) {
      console.error("Errore caricamento round:", error);
    }
  };

  // 🎯 GESTISCI I TUOI TENTATIVI (CON BACKEND)
  const makeGuess = async (guess, coordinates = null) => {
    console.log("Tentativo:", guess);
    
    let isCorrect = false;
    let score = 0;
    
    // 🔗 Validazione con backend se disponibile
    if (MyGameBackend.isAuthenticated()) {
      try {
        const validation = await MyGameBackend.validateGuess(
          guess, 
          gameState.currentRound, 
          coordinates
        );
        isCorrect = validation.isCorrect;
        score = validation.score;
      } catch (error) {
        console.error("Errore validazione backend:", error);
        // Fallback a validazione locale
        isCorrect = guess.toLowerCase().includes(gameState.currentFood?.correctLocation?.toLowerCase() || '');
      }
    } else {
      // Validazione locale
      isCorrect = guess.toLowerCase().includes(gameState.currentFood?.correctLocation?.toLowerCase() || '');
    }
    
    // Chiama la tua callback
    if (config.onGuess) {
      config.onGuess(guess, isCorrect, coordinates);
    }
    
    // Aggiorna lo stato
    setGameState(prev => ({
      ...prev,
      stats: {
        ...prev.stats,
        attempts: prev.stats.attempts + 1,
        points: prev.stats.points + score
      }
    }));
    
    return { isCorrect, score };
  };

  // 🚀 INIZIA IL GIOCO (CON AUTENTICAZIONE)
  const startGame = async () => {
    // 🔐 Controlla autenticazione se necessaria
    if (!MyGameBackend.isAuthenticated() && config.requireAuth) {
      alert("Devi effettuare il login per giocare!");
      return;
    }
    
    setGameState(prev => ({
      ...prev,
      gameStarted: true
    }));
    
    // 🔄 Carica progressi salvati se disponibili
    if (MyGameBackend.isAuthenticated()) {
      try {
        const savedProgress = await MyGameBackend.loadProgress();
        if (savedProgress && savedProgress.currentRound > 1) {
          const continueGame = confirm("Vuoi continuare la partita salvata?");
          if (continueGame) {
            setGameState(prev => ({ ...prev, ...savedProgress }));
            loadRoundData(savedProgress.currentRound);
            return;
          }
        }
      } catch (error) {
        console.error("Errore caricamento progressi:", error);
      }
    }
    
    // Inizia nuovo gioco
    loadRoundData(1);
    
    if (config.onRoundStart) {
      config.onRoundStart(1);
    }
  };
  
  // 🔐 FUNZIONI AUTENTICAZIONE
  const login = async (username, password) => {
    const result = await MyGameBackend.login(username, password);
    return result;
  };
  
  const logout = () => {
    MyGameBackend.logout();
    setGameState({
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
  };

  return {
    gameState,
    actions: {
      startGame,
      makeGuess,
      loadRoundData,
      login,
      logout
    },
    backend: MyGameBackend
  };
};