import { useState, useCallback } from 'react';

// Hook configurabile che funziona con JavaScript
export const useGameConfig = (customConfig = {}) => {
  // Configurazione di default
  const defaultConfig = {
    maxRounds: 10,
    gameTitle: "FOOD GUESS",
    roundTimeLimit: 180,
    maxPointsPerRound: 1000,
    timeBonus: true,
    attemptPenalty: 100,
    showCompass: true,
    showHints: true,
    enableSound: false,
    
    messages: {
      roundComplete: "Round completato!",
      gameComplete: "Gioco completato!",
      timeUp: "Tempo scaduto!",
      correctGuess: "Risposta corretta!",
      incorrectGuess: "Riprova!",
      hintMessage: (hint) => `💡 Suggerimento: ${hint}`,
    }
  };

  // Merge configurazione
  const config = { ...defaultConfig, ...customConfig };

  // Stato del gioco
  const [gameState, setGameState] = useState({
    currentRound: 1,
    gameCompleted: false,
    gameStarted: false,
    stats: {
      timer: "03:00",
      points: 0,
      attempts: 0,
      maxAttempts: 3
    },
    roundResults: [],
    currentFood: null,
    hintsUsed: 0,
    showHint: false,
    hintMessage: null
  });

  // Azioni del gioco
  const actions = {
    startGame: useCallback(() => {
      setGameState(prev => ({ ...prev, gameStarted: true }));
      if (config.onRoundStart) {
        config.onRoundStart(1);
      }
    }, [config]),

    resetGame: useCallback(() => {
      setGameState({
        currentRound: 1,
        gameCompleted: false,
        gameStarted: false,
        stats: {
          timer: "03:00",
          points: 0,
          attempts: 0,
          maxAttempts: 3
        },
        roundResults: [],
        currentFood: null,
        hintsUsed: 0,
        showHint: false,
        hintMessage: null
      });
    }, []),

    nextRound: useCallback(() => {
      if (gameState.currentRound < config.maxRounds) {
        const nextRoundNumber = gameState.currentRound + 1;
        setGameState(prev => ({ 
          ...prev, 
          currentRound: nextRoundNumber,
          stats: { ...prev.stats, attempts: 0, timer: "03:00" },
          showHint: false,
          hintMessage: null
        }));
        if (config.onRoundStart) {
          config.onRoundStart(nextRoundNumber);
        }
      } else {
        setGameState(prev => ({ ...prev, gameCompleted: true }));
        if (config.onGameComplete) {
          config.onGameComplete(gameState.roundResults);
        }
      }
    }, [gameState.currentRound, config, gameState.roundResults]),

    makeGuess: useCallback((guess) => {
      const isCorrect = gameState.currentFood?.correctLocation === guess;
      const newAttempts = gameState.stats.attempts + 1;
      
      // Calcola punteggio
      let points = 0;
      if (config.calculateScore) {
        const timeUsed = 180 - parseInt(gameState.stats.timer.split(':')[0]) * 60 - parseInt(gameState.stats.timer.split(':')[1]);
        points = config.calculateScore(timeUsed, newAttempts, isCorrect);
      } else {
        // Punteggio di default
        if (isCorrect) {
          points = Math.max(config.maxPointsPerRound - (newAttempts - 1) * config.attemptPenalty, 100);
        }
      }

      setGameState(prev => ({
        ...prev,
        stats: { ...prev.stats, attempts: newAttempts, points: prev.stats.points + points }
      }));

      if (config.onGuess) {
        config.onGuess(guess, isCorrect);
      }

      if (isCorrect || newAttempts >= gameState.stats.maxAttempts) {
        // Round completato
        const roundResult = {
          round: gameState.currentRound,
          points,
          time: gameState.stats.timer,
          attempts: newAttempts,
          food: gameState.currentFood?.name || "",
          image: gameState.currentFood?.image || "",
          correctLocation: gameState.currentFood?.correctLocation || "",
          correctCountry: gameState.currentFood?.correctCountry || "",
          guessedAttempts: [] // Traccia questo nel tuo gioco
        };

        setGameState(prev => ({
          ...prev,
          roundResults: [...prev.roundResults, roundResult]
        }));

        if (config.onRoundEnd) {
          config.onRoundEnd(roundResult);
        }
      }
    }, [gameState, config]),

    showHint: useCallback(() => {
      if (gameState.currentFood?.hints && gameState.hintsUsed < gameState.currentFood.hints.length) {
        const hint = gameState.currentFood.hints[gameState.hintsUsed];
        setGameState(prev => ({
          ...prev,
          hintsUsed: prev.hintsUsed + 1,
          showHint: true,
          hintMessage: config.messages.hintMessage(hint)
        }));
      }
    }, [gameState, config]),

    updateTimer: useCallback((newTime) => {
      setGameState(prev => ({
        ...prev,
        stats: { ...prev.stats, timer: newTime }
      }));

      if (newTime === "00:00" && config.onTimeUp) {
        config.onTimeUp();
      }
    }, [config]),

    loadFoodData: useCallback(async (round) => {
      if (config.getFoodData) {
        try {
          const foodData = await config.getFoodData(round);
          setGameState(prev => ({
            ...prev,
            currentFood: foodData,
            hintsUsed: 0,
            showHint: false,
            hintMessage: null
          }));
        } catch (error) {
          console.error("Errore caricamento dati cibo:", error);
        }
      }
    }, [config])
  };

  return {
    config,
    gameState,
    actions
  };
};