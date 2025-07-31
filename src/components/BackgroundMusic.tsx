import { useEffect, useRef, useState } from "react";

const BackgroundMusic = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleUserInteraction = () => {
      if (iframeRef.current && !isLoaded) {
        // Estrai l'ID del video dal link YouTube fornito
        const videoId = "LgMvaRwbEOE";
        const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&start=0`;
        
        iframeRef.current.src = embedUrl;
        setIsLoaded(true);
        console.log("Background music loaded and playing");
        
        // Rimuovi gli event listeners dopo il primo utilizzo
        document.removeEventListener('click', handleUserInteraction);
        document.removeEventListener('touchstart', handleUserInteraction);
        document.removeEventListener('keydown', handleUserInteraction);
      }
    };

    // Prova autoplay immediato
    setTimeout(() => {
      handleUserInteraction();
    }, 1000);

    // Aggiungi listeners per interazione utente
    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('touchstart', handleUserInteraction);
    document.addEventListener('keydown', handleUserInteraction);

    return () => {
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
    };
  }, [isLoaded]);

  return (
    <iframe
      ref={iframeRef}
      style={{ 
        position: 'fixed', 
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
    />
  );
};

export default BackgroundMusic;