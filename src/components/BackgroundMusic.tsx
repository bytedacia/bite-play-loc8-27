import { useEffect, useRef, useState } from "react";

const BackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (hasStarted) return;

    const attemptAutoplay = async () => {
      if (audioRef.current && !hasStarted) {
        setHasStarted(true);
        audioRef.current.volume = 0.3;
        try {
          await audioRef.current.play();
          console.log("Background music started");
        } catch (error) {
          console.log("Autoplay blocked, waiting for user interaction");
        }
      }
    };

    const timer = setTimeout(attemptAutoplay, 500);

    const handleInteraction = async () => {
      if (!hasStarted && audioRef.current) {
        setHasStarted(true);
        audioRef.current.volume = 0.3;
        try {
          await audioRef.current.play();
          console.log("Background music started after user interaction");
        } catch (error) {
          console.log("Failed to play audio:", error);
        }
      }
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
      document.removeEventListener('keydown', handleInteraction);
    };

    document.addEventListener('click', handleInteraction);
    document.addEventListener('touchstart', handleInteraction);
    document.addEventListener('keydown', handleInteraction);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
      document.removeEventListener('keydown', handleInteraction);
    };
  }, [hasStarted]);

  return (
    <>
      <audio
        ref={audioRef}
        loop
        preload="auto"
        style={{ display: 'none' }}
      >
        <source src="https://www.bensound.com/bensound-music/bensound-relaxing.mp3" type="audio/mpeg" />
        <source src="https://www.bensound.com/bensound-music/bensound-summer.mp3" type="audio/mpeg" />
        <source src="https://archive.org/download/piano-chillout-relaxing-music/piano-chillout-relaxing-music.mp3" type="audio/mpeg" />
      </audio>
    </>
  );
};

export default BackgroundMusic;