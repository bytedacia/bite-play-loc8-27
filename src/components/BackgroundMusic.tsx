import { useEffect, useRef, useState } from "react";

const BackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (hasStarted) return; // Evita audio duplicato

    const attemptAutoplay = () => {
      if (audioRef.current && !hasStarted) {
        setHasStarted(true);
        audioRef.current.volume = 0.5; // Volume al 50%
        audioRef.current.play().catch(err => {
          console.log("Autoplay fallito, aspetto interazione utente:", err);
        });
      }
    };

    // Prova autoplay dopo un piccolo delay
    const timer = setTimeout(attemptAutoplay, 1000);

    // Autoplay su prima interazione utente
    const handleInteraction = () => {
      if (!hasStarted) {
        attemptAutoplay();
      }
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
    };

    document.addEventListener('click', handleInteraction);
    document.addEventListener('touchstart', handleInteraction);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
    };
  }, [hasStarted]);

  return (
    <audio
      ref={audioRef}
      loop
      preload="auto"
      style={{ display: 'none' }}
    >
      <source src="/audio/background-music.mp3" type="audio/mpeg" />
    </audio>
  );
};

export default BackgroundMusic;