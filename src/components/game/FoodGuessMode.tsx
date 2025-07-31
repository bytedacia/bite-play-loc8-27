import React, { useState, useEffect, useRef } from "react";
import PhotoDisplayFood from "./PhotoDisplayFood";
import WorldMap from "./WorldMap";
import ResultModalFood from "./ResultModalFood";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface PhotoData {
  image: string;
  country: string;
  name: string;
  type: string;
}

interface FoodGuessModeProps {
  onBack?: () => void;
}

const FoodGuessMode: React.FC<FoodGuessModeProps> = ({ onBack }) => {
  const [photoData, setPhotoData] = useState<PhotoData[]>([]);
  const [currentPhotoIdx, setCurrentPhotoIdx] = useState(0);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState<number | null>(null);
  const [started, setStarted] = useState(false);
  const [flashCelebration, setFlashCelebration] = useState(false);
  const [revealCorrect, setRevealCorrect] = useState(false);
  const [isCorrectGuess, setIsCorrectGuess] = useState<boolean>(false);
  const [attempts, setAttempts] = useState(0);
  const [timer, setTimer] = useState(60);
  const [wrongCountries, setWrongCountries] = useState<string[]>([]);
  const [round, setRound] = useState(1);
  const [gameOver, setGameOver] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  const [history, setHistory] = useState<any[]>([]);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Mock data for now - replace with actual API call
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
      }
    ];
    setPhotoData(mockData);
  }, []);

  useEffect(() => {
    audioRef.current = new Audio("/audio/celebrate.mp3");
  }, []);

  const startRound = () => {
    if (photoData.length > 0) {
      const randomIdx = Math.floor(Math.random() * photoData.length);
      setCurrentPhotoIdx(randomIdx);
      setStarted(true);
      setRound(1);
      setGameOver(false);
      setTotalScore(0);
      setHistory([]);
    }
  };

  const currentPhoto = photoData[currentPhotoIdx];

  const handleCountrySelect = (countryName: string) => {
    setSelectedCountry(countryName);
  };

  const handleSubmit = () => {
    if (!selectedCountry || !currentPhoto || showResult) return;
    const isCorrect = selectedCountry.trim().toLowerCase() === currentPhoto.country.trim().toLowerCase();
    setAttempts(a => a + 1);
    
    if (isCorrect) {
      const timeBonus = Math.max(0, timer) * 2;
      const attemptPenalty = attempts * 15;
      const finalScore = Math.max(10, 100 + timeBonus - attemptPenalty);
      
      setScore(finalScore);
      setIsCorrectGuess(true);
      setShowResult(true);
      setRevealCorrect(true);
      setResult(`🎉 Correct! You guessed the country! Score: ${finalScore}`);
      
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
      }
      setFlashCelebration(true);
    } else {
      if (!wrongCountries.includes(selectedCountry)) {
        setWrongCountries(prev => [...prev, selectedCountry]);
      }
      
      setScore(0);
      setIsCorrectGuess(false);
      setResult(`❌ Wrong! You chose ${selectedCountry}`);
      
      if (attempts >= 4) {
        setRevealCorrect(true);
        setShowResult(true);
      }
    }
  };

  const handleNext = () => {
    setSelectedCountry(null);
    setResult(null);
    setShowResult(false);
    setScore(null);
    setRevealCorrect(false);
    setFlashCelebration(false);
    setIsCorrectGuess(false);
    setAttempts(0);
    setTimer(60);
    setWrongCountries([]);
    
    if (score !== null) {
      setTotalScore(s => s + score);
      setHistory(h => [...h, {
        round,
        image: currentPhoto.image,
        food: currentPhoto.name,
        correct: currentPhoto.country,
        guess: selectedCountry,
        isCorrect: isCorrectGuess,
        score: score
      }]);
    }
    
    if (round >= 10) {
      setGameOver(true);
      return;
    }
    
    setRound(r => r + 1);
    if (photoData.length > 0) {
      const randomIdx = Math.floor(Math.random() * photoData.length);
      setCurrentPhotoIdx(randomIdx);
    }
  };

  if (!currentPhoto) return <div>Loading...</div>;

  return (
    <div className={`min-h-screen p-4 ${flashCelebration ? "animate-pulse" : ""}`}>
      {!started ? (
        <div className="max-w-2xl mx-auto space-y-4">
          <Card className="p-6 cursor-pointer hover:shadow-lg transition-all" onClick={startRound}>
            <div className="text-center space-y-4">
              <div className="text-6xl">🍽️</div>
              <h3 className="text-xl font-bold">▶️ Start Food Guess</h3>
              <p className="text-muted-foreground">Try to guess which country this food is from!</p>
            </div>
          </Card>
          {onBack && (
            <Card className="p-6 cursor-pointer hover:shadow-lg transition-all" onClick={onBack}>
              <div className="text-center space-y-4">
                <div className="text-6xl">🔙</div>
                <h3 className="text-xl font-bold">Back to Menu</h3>
                <p className="text-muted-foreground">Return to mode selection screen</p>
              </div>
            </Card>
          )}
        </div>
      ) : gameOver ? (
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold">🎉 Game Over!</h2>
          <p className="text-xl">Total Score: <strong>{totalScore}</strong>/1000</p>
          <div className="space-y-4">
            <Button onClick={startRound} size="lg">Play Again</Button>
            {onBack && <Button onClick={onBack} variant="outline">Back to Menu</Button>}
          </div>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto">
          <div className="mb-6 text-center">
            <h3 className="text-xl font-bold">Round {round}/10</h3>
            <div className="w-full bg-muted rounded-full h-2 mt-2">
              <div 
                className="bg-primary h-2 rounded-full transition-all duration-500" 
                style={{ width: `${((round - 1) / 10) * 100}%` }}
              />
            </div>
          </div>
          
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-4">
              <PhotoDisplayFood url={currentPhoto.image} name={currentPhoto.name} />
              <div className="flex justify-between text-sm">
                <span>⏰ {timer}s</span>
                <span>🏆 {totalScore} pts</span>
                <span>{attempts}/5 attempts</span>
              </div>
              <div className="space-y-4">
                <Button
                  onClick={handleSubmit}
                  disabled={!selectedCountry}
                  className="w-full"
                  size="lg"
                >
                  Submit Guess
                </Button>
                {showResult && !isCorrectGuess && !revealCorrect && (
                  <Button
                    onClick={() => setRevealCorrect(true)}
                    variant="outline"
                    className="w-full"
                  >
                    Reveal Correct Country
                  </Button>
                )}
                <Button
                  onClick={handleNext}
                  variant="outline"
                  className="w-full"
                >
                  ⏭️ {round < 10 ? 'Next Round' : 'Finish'}
                </Button>
              </div>
            </div>
            
            <div className="space-y-4">
              <WorldMap
                onCountrySelect={handleCountrySelect}
                selectedCountry={selectedCountry}
                correctCountry={revealCorrect ? currentPhoto.country : null}
                wrongCountries={wrongCountries}
                showFinalResult={revealCorrect}
              />
            </div>
          </div>

          <ResultModalFood result={result} show={showResult} score={score} />
        </div>
      )}
    </div>
  );
};

export default FoodGuessMode;