// Tipi per la configurazione del gioco
export interface GameRound {
  round: number;
  points: number;
  time: string;
  attempts: number;
  food: string;
  image: string;
  correctLocation: string;
  correctCountry: string;
  guessedAttempts: string[];
}

export interface GameStats {
  timer: string;
  points: number;
  attempts: number;
  maxAttempts: number;
}

export interface GameConfig {
  // Configurazione generale
  maxRounds: number;
  gameTitle: string;
  
  // Configurazione timer
  roundTimeLimit: number; // in secondi
  
  // Configurazione punteggio
  maxPointsPerRound: number;
  timeBonus: boolean;
  attemptPenalty: number;
  
  // Configurazione UI
  showCompass: boolean;
  showHints: boolean;
  enableSound: boolean;
  
  // Callback personalizzabili
  onRoundStart?: (round: number) => void;
  onRoundEnd?: (result: GameRound) => void;
  onGameComplete?: (results: GameRound[]) => void;
  onGuess?: (guess: string, isCorrect: boolean) => void;
  onTimeUp?: () => void;
  
  // Provider di dati personalizzabili
  getFoodData?: (round: number) => Promise<{
    name: string;
    image: string;
    correctLocation: string;
    correctCountry: string;
    hints?: string[];
  }>;
  
  calculateScore?: (time: number, attempts: number, isCorrect: boolean) => number;
  
  // Configurazione messaggi
  messages: {
    roundComplete: string;
    gameComplete: string;
    timeUp: string;
    correctGuess: string;
    incorrectGuess: string;
    hintMessage: (hint: string) => string;
  };
}

export interface GameState {
  currentRound: number;
  gameCompleted: boolean;
  gameStarted: boolean;
  stats: GameStats;
  roundResults: GameRound[];
  currentFood?: {
    name: string;
    image: string;
    correctLocation: string;
    correctCountry: string;
    hints?: string[];
  };
  hintsUsed: number;
  showHint: boolean;
  hintMessage?: string;
}