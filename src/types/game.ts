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
  
  // CONFIGURAZIONE MAPPA - COMPLETA!
  mapConfig?: {
    showMap: boolean;
    mapComponent?: any;
    mapProps?: any;
    placeholderText: string;
    placeholderIcon: string;
    
    // FUNZIONI MAPPA CONFIGURABILI
    onMapClick?: (coordinates: { lat: number; lng: number }, locationName?: string) => void;
    onMapReady?: (mapInstance: any) => void;
    onMapError?: (error: any) => void;
    calculateDistance?: (guess: { lat: number; lng: number }, correct: { lat: number; lng: number }) => number;
    reverseGeocode?: (lat: number, lng: number) => Promise<string>;
    forwardGeocode?: (locationName: string) => Promise<{ lat: number; lng: number }>;
    calculateScoreFromDistance?: (distance: number, maxDistance: number) => number;
    formatDistance?: (distance: number) => string;
    getMapCenter?: (round: number) => { lat: number; lng: number };
    getMapZoom?: (round: number) => number;
    restrictMapBounds?: boolean;
    mapBounds?: { north: number; south: number; east: number; west: number };
  };
  
  // CONFIGURAZIONE COMPONENTI PERSONALIZZATI
  components?: {
    renderMap?: (gameState: any, actions: any, mapConfig?: any) => any;
    renderPhoto?: (gameState: any) => any;
    renderFoodName?: (gameState: any) => any;
    renderCompass?: (gameState: any) => any;
    renderMessages?: (gameState: any, actions: any) => any;
  };
  
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