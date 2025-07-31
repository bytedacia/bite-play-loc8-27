import { useEffect, useRef, useState } from "react";

const BackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const playAudio = () => {
      audio.play().then(() => {
        setIsPlaying(true);
        console.log("Background music started");
      }).catch((error) => {
        console.log("Audio autoplay blocked:", error);
      });
    };

    // Prova autoplay immediato
    playAudio();

    // Se l'autoplay è bloccato, aspetta interazione utente
    const handleInteraction = () => {
      if (!isPlaying) {
        playAudio();
      }
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
      document.removeEventListener('keydown', handleInteraction);
    };

    document.addEventListener('click', handleInteraction);
    document.addEventListener('touchstart', handleInteraction);
    document.addEventListener('keydown', handleInteraction);

    return () => {
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
      document.removeEventListener('keydown', handleInteraction);
    };
  }, [isPlaying]);

  return (
    <audio
      ref={audioRef}
      loop
      autoPlay
      style={{ display: 'none' }}
    >
      <source src="https://cdn.pixabay.com/download/audio/2023/10/05/audio_ec9da82077.mp3" type="audio/mpeg" />
    </audio>
  );
};

export default BackgroundMusic;