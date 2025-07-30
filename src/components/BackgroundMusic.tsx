import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Volume2, VolumeX } from "lucide-react";

const BackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const tryAutoPlay = async () => {
    if (audioRef.current) {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
        setShowPlayButton(false);
      } catch (error) {
        console.log("Autoplay blocked, showing play button");
        setShowPlayButton(true);
      }
    }
  };

  const handlePlayMusic = async () => {
    if (audioRef.current) {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
        setShowPlayButton(false);
      } catch (error) {
        console.error("Error playing audio:", error);
      }
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    // Try autoplay after user interaction
    const handleUserInteraction = () => {
      tryAutoPlay();
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
    };

    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('touchstart', handleUserInteraction);

    // Cleanup
    return () => {
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
    };
  }, []);

  return (
    <>
      <audio
        ref={audioRef}
        loop
        preload="auto"
        onLoadedData={tryAutoPlay}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src="https://www.soundjay.com/misc/sounds/magic-chime-02.wav" type="audio/wav" />
        <source src="https://www.soundjay.com/misc/sounds/magic-chime-02.mp3" type="audio/mpeg" />
      </audio>
      
      {showPlayButton && (
        <div className="fixed top-4 right-4 z-50">
          <Button
            onClick={handlePlayMusic}
            size="sm"
            variant="outline"
            className="bg-black/20 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
          >
            <Volume2 className="h-4 w-4 mr-2" />
            Attiva Audio
          </Button>
        </div>
      )}
      
      {isPlaying && (
        <div className="fixed top-4 right-4 z-50">
          <Button
            onClick={toggleMute}
            size="sm"
            variant="outline"
            className="bg-black/20 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
          >
            {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </Button>
        </div>
      )}
    </>
  );
};

export default BackgroundMusic;