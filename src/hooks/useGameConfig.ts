import { useState, useCallback } from 'react';
import { GameConfig, GameState, GameRound } from '@/types/game';

// Configurazione di default - facilmente sostituibile
const defaultConfig: GameConfig = {
  maxRounds: 10,
  gameTitle: "FOOD GUESS",
  roundTimeLimit: 180, // 3 minuti
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
    hintMessage: (hint: string) => `💡 Suggerimento: ${hint}`,
  }
};

const defaultGameState: GameState = {
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
  hintsUsed: 0,
  showHint: false
};

export const useGameConfig = (customConfig?: Partial<GameConfig>) => {
  const [config] = useState<GameConfig>({ ...defaultConfig, ...customConfig });
  const [gameState, setGameState] = useState<GameState>(defaultGameState);

  // Funzioni configurabili per la logica del gioco
  const startGame = useCallback(() => {
    setGameState(prev => ({ ...prev, gameStarted: true }));
    config.onRoundStart?.(1);
  }, [config]);

  const resetGame = useCallback(() => {
    setGameState(defaultGameState);
  }, []);

  const nextRound = useCallback(() => {
    if (gameState.currentRound < config.maxRounds) {
      const nextRoundNumber = gameState.currentRound + 1;
      setGameState(prev => ({ 
        ...prev, 
        currentRound: nextRoundNumber,
        stats: { ...prev.stats, attempts: 0, timer: "03:00" },
        showHint: false,
        hintMessage: undefined
      }));
      config.onRoundStart?.(nextRoundNumber);
    } else {
      setGameState(prev => ({ ...prev, gameCompleted: true }));
      config.onGameComplete?.(gameState.roundResults);
    }
  }, [gameState.currentRound, config, gameState.roundResults]);

  const makeGuess = useCallback((guess: string) => {
    const isCorrect = gameState.currentFood?.correctLocation === guess;
    const newAttempts = gameState.stats.attempts + 1;
    
    // Calcola punteggio se è configurato
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

    config.onGuess?.(guess, isCorrect);

    if (isCorrect || newAttempts >= gameState.stats.maxAttempts) {
      // Round completato
      const roundResult: GameRound = {
        round: gameState.currentRound,
        points,
        time: gameState.stats.timer,
        attempts: newAttempts,
        food: gameState.currentFood?.name || "",
        image: gameState.currentFood?.image || "",
        correctLocation: gameState.currentFood?.correctLocation || "",
        correctCountry: gameState.currentFood?.correctCountry || "",
        guessedAttempts: [] // Dovrai tracciare questo nel tuo gioco
      };

      setGameState(prev => ({
        ...prev,
        roundResults: [...prev.roundResults, roundResult]
      }));

      config.onRoundEnd?.(roundResult);
    }
  }, [gameState, config]);

  const showHint = useCallback(() => {
    if (gameState.currentFood?.hints && gameState.hintsUsed < gameState.currentFood.hints.length) {
      const hint = gameState.currentFood.hints[gameState.hintsUsed];
      setGameState(prev => ({
        ...prev,
        hintsUsed: prev.hintsUsed + 1,
        showHint: true,
        hintMessage: config.messages.hintMessage(hint)
      }));
    }
  }, [gameState, config]);

  const updateTimer = useCallback((newTime: string) => {
    setGameState(prev => ({
      ...prev,
      stats: { ...prev.stats, timer: newTime }
    }));

    if (newTime === "00:00") {
      config.onTimeUp?.();
    }
  }, [config]);

  const loadFoodData = useCallback(async (round: number) => {
    if (config.getFoodData) {
      const foodData = await config.getFoodData(round);
      setGameState(prev => ({
        ...prev,
        currentFood: foodData,
        hintsUsed: 0,
        showHint: false,
        hintMessage: undefined
      }));
    }
  }, [config]);

  return {
    config,
    gameState,
    actions: {
      startGame,
      resetGame,
      nextRound,
      makeGuess,
      showHint,
      updateTimer,
      loadFoodData
    }
  };
};