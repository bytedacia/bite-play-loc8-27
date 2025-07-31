import { useEffect, useRef, useState } from "react";

const BackgroundMusic = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (hasStarted) return;

    const startMusic = () => {
      if (iframeRef.current && !hasStarted) {
        setHasStarted(true);
        // YouTube video: https://youtu.be/LgMvaRwbEOE
        const videoId = "LgMvaRwbEOE";
        const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&mute=0&volume=100&start=0`;
        iframeRef.current.src = embedUrl;
        console.log("Background music started with YouTube video:", videoId);
      }
    };

    // Avvia immediatamente
    const immediateTimer = setTimeout(startMusic, 100);

    // Gestisci interazione utente per browsers che bloccano autoplay
    const handleUserInteraction = () => {
      if (!hasStarted) {
        startMusic();
        // Rimuovi listener dopo prima interazione
        document.removeEventListener('click', handleUserInteraction);
        document.removeEventListener('touchstart', handleUserInteraction);
        document.removeEventListener('keydown', handleUserInteraction);
        document.removeEventListener('mousedown', handleUserInteraction);
      }
    };

    // Aggiungi listener per interazioni
    document.addEventListener('click', handleUserInteraction, { passive: true, once: true });
    document.addEventListener('touchstart', handleUserInteraction, { passive: true, once: true });
    document.addEventListener('keydown', handleUserInteraction, { passive: true, once: true });
    document.addEventListener('mousedown', handleUserInteraction, { passive: true, once: true });

    return () => {
      clearTimeout(immediateTimer);
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
      document.removeEventListener('mousedown', handleUserInteraction);
    };
  }, [hasStarted]);

  return (
    <iframe
      ref={iframeRef}
      style={{ 
        position: 'fixed', 
        top: '-200px', 
        left: '-200px', 
        width: '1px', 
        height: '1px',
        border: 'none',
        opacity: 0,
        visibility: 'hidden',
        pointerEvents: 'none',
        zIndex: -1000
      }}
      title="Background Music"
      allow="autoplay; encrypted-media; accelerometer; gyroscope; picture-in-picture"
      sandbox="allow-scripts allow-same-origin allow-presentation"
      loading="eager"
    />
  );
};

export default BackgroundMusic;