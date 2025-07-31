import React, { useState, useEffect, useRef } from "react";
import PhotoDisplayFood from "./PhotoDisplayFood";
import WorldMap from "./WorldMap";
import confetti from "canvas-confetti";

interface PhotoData {
  image: string;
  country: string;
  name: string;
  type: string;
}

interface FoodGuessGameProps {
  currentRound: number;
  onScoreUpdate: (score: number) => void;
  onRoundComplete: () => void;
}

const FoodGuessGame: React.FC<FoodGuessGameProps> = ({ 
  currentRound, 
  onScoreUpdate, 
  onRoundComplete 
}) => {
  const [photoData, setPhotoData] = useState<PhotoData[]>([]);
  const [currentPhotoIdx, setCurrentPhotoIdx] = useState(0);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState<number | null>(null);
  const [isCorrectGuess, setIsCorrectGuess] = useState<boolean>(false);

  // Stato per timer, tentativi
  const [attempts, setAttempts] = useState(0);
  const [timer, setTimer] = useState(60);
  const [wrongCountries, setWrongCountries] = useState<string[]>([]);
  const [revealCorrect, setRevealCorrect] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Mock data per test - sostituisci con API reale
  useEffect(() => {
    const mockData: PhotoData[] = [
      {
        image: "/api/placeholder/400/300",
        country: "Italy",
        name: "Pizza Margherita",
        type: "food"
      },
      {
        image: "/api/placeholder/400/300", 
        country: "Japan",
        name: "Sushi",
        type: "food"
      },
      {
        image: "/api/placeholder/400/300",
        country: "France", 
        name: "Croissant",
        type: "food"
      }
    ];
    setPhotoData(mockData);
  }, []);

  const currentPhoto = photoData[currentPhotoIdx];

  const handleCountrySelect = (countryName: string) => {
    setSelectedCountry(countryName);
  };

  // Gestione timer
  useEffect(() => {
    if (timer === 0 || attempts >= 5) {
      setShowResult(true);
      setRevealCorrect(true);
      return;
    }
    timerRef.current = setTimeout(() => setTimer(timer - 1), 1000);
    return () => clearTimeout(timerRef.current!);
  }, [timer, attempts]);

  // Gestione submit
  const handleSubmit = () => {
    if (!selectedCountry || !currentPhoto || showResult) return;
    const isCorrect = selectedCountry.trim().toLowerCase() === currentPhoto.country.trim().toLowerCase();
    setAttempts(a => a + 1);
    
    if (isCorrect) {
      // Calcola punteggio basato su tentativi e tempo
      const timeBonus = Math.max(0, timer) * 2;
      const attemptPenalty = attempts * 15;
      const finalScore = Math.max(10, 100 + timeBonus - attemptPenalty);
      
      setScore(finalScore);
      setIsCorrectGuess(true);
      setShowResult(true);
      setRevealCorrect(true);
      setResult(`🎉 Corretto! Punteggio: ${finalScore}`);
      onScoreUpdate(finalScore);
      confetti({ particleCount: 150, spread: 100, origin: { y: 0.6 } });
    } else {
      if (!wrongCountries.includes(selectedCountry)) {
        setWrongCountries(prev => [...prev, selectedCountry]);
      }
      
      setScore(0);
      setIsCorrectGuess(false);
      setResult(`❌ Sbagliato! Hai scelto ${selectedCountry}`);
      
      if (attempts >= 4) {
        setRevealCorrect(true);
        setShowResult(true);
        onScoreUpdate(0);
      }
    }
  };

  const handleNext = () => {
    onRoundComplete();
  };

  if (!currentPhoto) return <div>Caricamento...</div>;

  return (
    <div className="w-full h-full">
      {/* Timer e tentativi */}
      <div className="mb-4 text-center">
        <div className="inline-flex gap-4 text-sm">
          <span className={`font-bold ${timer <= 10 ? 'text-red-500' : 'text-foreground'}`}>
            ⏰ {timer}s
          </span>
          <span className="font-bold text-foreground">
            🎯 {attempts}/5 tentativi
          </span>
        </div>
      </div>

      {/* Foto del cibo */}
      <div className="mb-4">
        <PhotoDisplayFood url={currentPhoto.image} name={currentPhoto.name} />
      </div>

      {/* Nome del cibo */}
      <div className="mb-4 text-center">
        <h3 className="text-lg font-semibold text-foreground">
          🍽️ {currentPhoto.name}
        </h3>
      </div>

      {/* Mappa del mondo */}
      <div className="mb-4" style={{ height: "300px" }}>
        <WorldMap
          onCountrySelect={handleCountrySelect}
          selectedCountry={selectedCountry}
          correctCountry={revealCorrect ? currentPhoto.country : null}
          wrongCountries={wrongCountries}
          showFinalResult={revealCorrect}
        />
      </div>

      {/* Bottoni di controllo */}
      <div className="flex flex-col gap-2">
        <button
          onClick={handleSubmit}
          disabled={!selectedCountry || showResult}
          className="w-full py-2 px-4 bg-primary text-primary-foreground rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Conferma Scelta
        </button>

        {showResult && (
          <button
            onClick={handleNext}
            className="w-full py-2 px-4 bg-brand-secondary text-black rounded-lg font-semibold"
          >
            {currentRound < 10 ? 'Prossimo Round' : 'Termina Partita'}
          </button>
        )}
      </div>

      {/* Risultato */}
      {showResult && result && (
        <div className="mt-4 p-4 bg-card border border-primary/20 rounded-lg text-center">
          <p className="font-semibold">{result}</p>
          {!isCorrectGuess && (
            <p className="mt-2 text-green-600">
              La risposta corretta era: <strong>{currentPhoto.country}</strong>
            </p>
          )}
        </div>
      )}

      {/* Area per feedback quando sbaglia */}
      {!isCorrectGuess && wrongCountries.length > 0 && !showResult && (
        <div className="mt-4 p-3 bg-destructive/10 border border-destructive/20 rounded-lg">
          <p className="text-sm text-center text-destructive">
            Hai sbagliato! La nazione corretta è da un'altra parte...
          </p>
        </div>
      )}
    </div>
  );
};

export default FoodGuessGame;