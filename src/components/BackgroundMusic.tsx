import { useEffect, useRef, useState } from "react";

const BackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const handleFirstInteraction = () => {
      if (!hasInteracted) {
        setHasInteracted(true);
        playAudio();
      }
    };

    const playAudio = async () => {
      if (audioRef.current && !isPlaying) {
        try {
          await audioRef.current.play();
          setIsPlaying(true);
          console.log("Background music started");
        } catch (error) {
          console.log("Autoplay prevented:", error);
        }
      }
    };

    // Prova autoplay subito
    if (!hasInteracted) {
      const timer = setTimeout(() => {
        playAudio();
      }, 1000);

      // Listener per interazione utente
      const events = ['click', 'touchstart', 'keydown'];
      events.forEach(event => {
        document.addEventListener(event, handleFirstInteraction, { once: true });
      });

      return () => {
        clearTimeout(timer);
        events.forEach(event => {
          document.removeEventListener(event, handleFirstInteraction);
        });
      };
    }
  }, [hasInteracted, isPlaying]);

  return (
    <audio
      ref={audioRef}
      loop
      preload="auto"
      style={{ display: 'none' }}
    >
      <source src="https://audio.jukehost.co.uk/h2i0kM5iGZLqLQ5m7FUojOZLTxKZOuEm" type="audio/mpeg" />
    </audio>
  );
};

export default BackgroundMusic;