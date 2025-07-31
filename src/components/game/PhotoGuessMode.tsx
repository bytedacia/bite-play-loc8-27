import React, { useState, useEffect, useRef } from "react";
import PhotoDisplay from "./PhotoDisplay";
import MapSection from "./MapSection";
import ResultModal from "./ResultModal";
import { haversineDistance, calculateScore } from "./haversine";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface PhotoData {
  image: string;
  lat: number;
  lng: number;
  name: string;
  type: string;
}

export type LatLng = { lat: number; lng: number };

interface PhotoGuessModeProps {
  onBack?: () => void;
}

function getRandomIndex(length: number) {
  return Math.floor(Math.random() * length);
}

function getFeedbackPhrase(distance: number): string {
  if (distance < 0.1) return "Incredible! Spot on!";
  if (distance < 10) return "Amazing! Super close!";
  if (distance < 100) return "Very close!";
  if (distance < 250) return "Not bad!";
  if (distance < 500) return "Pretty far!";
  return "Way off! Try again!";
}

const PhotoGuessMode: React.FC<PhotoGuessModeProps> = ({ onBack }) => {
  const [photoData, setPhotoData] = useState<PhotoData[]>([]);
  const [currentPhotoIdx, setCurrentPhotoIdx] = useState(0);
  const [guess, setGuess] = useState<LatLng | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState<number | null>(null);
  const [started, setStarted] = useState(false);
  const [flashCelebration, setFlashCelebration] = useState(false);
  const [revealCorrect, setRevealCorrect] = useState(false);

  useEffect(() => {
    // Mock data for now - replace with actual API call
    const mockData: PhotoData[] = [
      {
        image: "/api/placeholder/400/300",
        lat: 48.8584,
        lng: 2.2945,
        name: "Eiffel Tower",
        type: "landmark"
      },
      {
        image: "/api/placeholder/400/300",
        lat: 40.7589,
        lng: -73.9851,
        name: "Times Square",
        type: "landmark"
      }
    ];
    setPhotoData(mockData);
  }, []);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/audio/celebrate.mp3");
  }, []);

  const startRound = () => {
    if (photoData.length > 0) {
      setCurrentPhotoIdx(getRandomIndex(photoData.length));
      setStarted(true);
    }
  };

  const currentPhoto = photoData[currentPhotoIdx];

  const handleMapClick = (lat: number, lng: number) => {
    setGuess({ lat, lng });
  };

  const handleSubmit = () => {
    if (!guess || !currentPhoto) return;
    const distance = haversineDistance(
      guess.lat,
      guess.lng,
      currentPhoto.lat,
      currentPhoto.lng
    );
    const scoreValue = calculateScore(distance);
    setScore(scoreValue);
    const phrase = getFeedbackPhrase(distance);
    setResult(
      `Your guess was ${distance.toFixed(
        2
      )} km away.\n${phrase}\nScore: ${scoreValue}/100`
    );
    setShowResult(true);

    if (scoreValue >= 90) {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
      }
      setFlashCelebration(true);
    }
  };

  const handleNext = () => {
    setGuess(null);
    setResult(null);
    setShowResult(false);
    setScore(null);
    setRevealCorrect(false);
    if (photoData.length > 0) {
      setCurrentPhotoIdx(getRandomIndex(photoData.length));
    }
    setFlashCelebration(false);
  };

  if (!currentPhoto) return <div>Loading...</div>;

  return (
    <div className={`min-h-screen p-4 ${flashCelebration ? "animate-pulse" : ""}`}>
      {!started ? (
        <div className="max-w-2xl mx-auto space-y-4">
          <Card className="p-6 cursor-pointer hover:shadow-lg transition-all" onClick={startRound}>
            <div className="text-center space-y-4">
              <div className="text-6xl">📷</div>
              <h3 className="text-xl font-bold">▶️ Start Photo Guess</h3>
              <p className="text-muted-foreground">Try to guess where the photo was taken!</p>
            </div>
          </Card>
          {onBack && (
            <Card className="p-6 cursor-pointer hover:shadow-lg transition-all" onClick={onBack}>
              <div className="text-center space-y-4">
                <div className="text-6xl">🔙</div>
                <h3 className="text-xl font-bold">Back to Menu</h3>
                <p className="text-muted-foreground">Return to the mode selection screen.</p>
              </div>
            </Card>
          )}
        </div>
      ) : (
        <div className="max-w-7xl mx-auto grid gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <PhotoDisplay url={currentPhoto.image} name={currentPhoto.name} />
            <div className="space-y-4">
              <Button
                onClick={handleSubmit}
                disabled={!guess}
                className="w-full"
                size="lg"
              >
                Submit Guess
              </Button>
              {showResult && !revealCorrect && (
                <Button
                  onClick={() => setRevealCorrect(true)}
                  variant="outline"
                  className="w-full"
                >
                  Show Correct Location
                </Button>
              )}
              <Button
                onClick={handleNext}
                variant="outline"
                className="w-full"
              >
                ⏭️ Skip / Next Photo
              </Button>
            </div>
          </div>
          
          <div className="space-y-4">
            <MapSection
              guess={guess}
              correct={
                revealCorrect
                  ? { lat: currentPhoto.lat, lng: currentPhoto.lng }
                  : null
              }
              onMapClick={handleMapClick}
            />
          </div>

          <ResultModal
            result={result}
            show={showResult}
            score={score}
          />
        </div>
      )}
    </div>
  );
};

export default PhotoGuessMode;