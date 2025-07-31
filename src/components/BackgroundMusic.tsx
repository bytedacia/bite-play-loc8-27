import { useEffect, useRef, useState } from "react";

const BackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (hasStarted) return;

    const attemptAutoplay = async () => {
      if (audioRef.current && !hasStarted && !isPlaying) {
        try {
          setHasStarted(true);
          setIsPlaying(true);
          audioRef.current.volume = 0.3; // 30% volume
          await audioRef.current.play();
          console.log("Background music started successfully");
        } catch (error) {
          console.log("Autoplay failed, waiting for user interaction:", error);
          setHasStarted(false);
          setIsPlaying(false);
        }
      }
    };

    // Try autoplay after a short delay
    const timer = setTimeout(attemptAutoplay, 1000);

    const handleInteraction = async () => {
      if (!isPlaying && audioRef.current) {
        try {
          setHasStarted(true);
          setIsPlaying(true);
          audioRef.current.volume = 0.3;
          await audioRef.current.play();
          console.log("Background music started after user interaction");
          // Remove all listeners after successful start
          document.removeEventListener('click', handleInteraction);
          document.removeEventListener('touchstart', handleInteraction);
          document.removeEventListener('keydown', handleInteraction);
        } catch (error) {
          console.log("Failed to start audio:", error);
          setIsPlaying(false);
        }
      }
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
  }, [hasStarted, isPlaying]);

  const handleAudioEnd = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(console.error);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        preload="auto"
        onEnded={handleAudioEnd}
        style={{ display: 'none' }}
      >
        <source src="https://www.bensound.com/bensound-music/bensound-relaxing.mp3" type="audio/mpeg" />
        <source src="https://www.soundjay.com/misc/sounds/beep-28.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </>
  );
};

export default BackgroundMusic;