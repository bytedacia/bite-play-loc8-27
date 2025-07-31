import { useEffect, useRef, useState } from "react";

const BackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const startAudio = async () => {
      try {
        audio.volume = 0.3; // Volume al 30%
        await audio.play();
        setHasStarted(true);
        console.log("Audio di sottofondo avviato");
      } catch (error) {
        console.log("Autoplay bloccato, attendo interazione utente");
      }
    };

    const handleUserInteraction = async () => {
      if (!hasStarted && audio) {
        try {
          await audio.play();
          setHasStarted(true);
          console.log("Audio avviato dopo interazione utente");
        } catch (error) {
          console.error("Errore riproduzione audio:", error);
        }
        
        // Rimuovi listeners
        document.removeEventListener('click', handleUserInteraction);
        document.removeEventListener('touchstart', handleUserInteraction);
        document.removeEventListener('keydown', handleUserInteraction);
      }
    };

    // Prova autoplay
    startAudio();

    // Fallback con interazione utente
    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('touchstart', handleUserInteraction);
    document.addEventListener('keydown', handleUserInteraction);

    return () => {
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
    };
  }, [hasStarted]);

  return (
    <audio
      ref={audioRef}
      loop
      preload="auto"
      style={{ display: 'none' }}
    >
      {/* Uso un file audio di sottofondo generico che funziona meglio dell'embed YouTube */}
      <source src="https://www.soundjay.com/misc/sounds-765.mp3" type="audio/mpeg" />
      <source src="https://file-examples.com/storage/fe68c1842d4538cd73ad2df/2017/11/file_example_MP3_700KB.mp3" type="audio/mpeg" />
    </audio>
  );
};

export default BackgroundMusic;