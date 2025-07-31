import { useEffect, useRef, useState } from "react";

const BackgroundMusic = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (hasStarted) return;

    const attemptAutoplay = () => {
      if (iframeRef.current && !hasStarted && !isPlaying) {
        setHasStarted(true);
        setIsPlaying(true);
        // URL YouTube embed con il video specifico richiesto
        const baseUrl = "https://www.youtube.com/embed/LgMvaRwbEOE?autoplay=1&loop=1&playlist=LgMvaRwbEOE&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&mute=0&volume=50";
        iframeRef.current.src = baseUrl;
        console.log("Background music started with YouTube video LgMvaRwbEOE");
      }
    };

    // Prova autoplay dopo un breve delay
    const timer = setTimeout(attemptAutoplay, 800);

    // Gestione interazione utente per browsers che bloccano autoplay
    const handleInteraction = () => {
      if (!hasStarted && !isPlaying) {
        attemptAutoplay();
        console.log("Background music started after user interaction");
        // Rimuovi tutti i listener dopo la prima interazione
        document.removeEventListener('click', handleInteraction);
        document.removeEventListener('touchstart', handleInteraction);
        document.removeEventListener('keydown', handleInteraction);
        document.removeEventListener('scroll', handleInteraction);
      }
    };

    // Aggiungi listener per vari tipi di interazione
    document.addEventListener('click', handleInteraction, { passive: true });
    document.addEventListener('touchstart', handleInteraction, { passive: true });
    document.addEventListener('keydown', handleInteraction, { passive: true });
    document.addEventListener('scroll', handleInteraction, { passive: true });

    return () => {
      clearTimeout(timer);
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
      document.removeEventListener('keydown', handleInteraction);
      document.removeEventListener('scroll', handleInteraction);
    };
  }, [hasStarted, isPlaying]);

  return (
    <iframe
      ref={iframeRef}
      style={{ 
        position: 'absolute', 
        top: '-9999px', 
        left: '-9999px', 
        width: '1px', 
        height: '1px',
        border: 'none',
        opacity: 0,
        visibility: 'hidden',
        pointerEvents: 'none'
      }}
      title="Background Music"
      allow="autoplay; encrypted-media"
      loading="lazy"
    />
  );
};

export default BackgroundMusic;