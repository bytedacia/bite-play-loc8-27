import { useEffect, useRef, useState } from "react";

const BackgroundMusic = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (hasStarted) return;

    const attemptAutoplay = () => {
      if (iframeRef.current && !hasStarted) {
        setHasStarted(true);
        // Aggiungi mute=0 per assicurarsi che l'audio non sia silenziato
        const baseUrl = "https://www.youtube.com/embed/LgMvaRwbEOE?autoplay=1&mute=0&loop=1&playlist=LgMvaRwbEOE&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1";
        iframeRef.current.src = baseUrl;
        console.log("Audio YouTube started");
      }
    };

    // Prova autoplay dopo un piccolo delay
    const timer = setTimeout(attemptAutoplay, 500);

    // Autoplay su prima interazione utente
    const handleInteraction = () => {
      if (!hasStarted) {
        attemptAutoplay();
        console.log("Audio started after user interaction");
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
          visibility: 'hidden'
        }}
        title="Background Music"
        allow="autoplay; encrypted-media"
      />
      
      {/* Debug info */}
      {process.env.NODE_ENV === 'development' && (
        <div style={{ 
          position: 'fixed', 
          top: '10px', 
          right: '10px', 
          background: 'rgba(0,0,0,0.8)', 
          color: 'white', 
          padding: '5px 10px',
          borderRadius: '5px',
          fontSize: '12px',
          zIndex: 9999
        }}>
          Audio: {hasStarted ? 'Started' : 'Waiting'}
        </div>
      )}
    </>
  );
};

export default BackgroundMusic;