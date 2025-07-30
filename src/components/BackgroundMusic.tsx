import { useEffect, useRef, useState } from "react";

const BackgroundMusic = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (hasStarted) return; // Evita audio duplicato

    const attemptAutoplay = () => {
      if (iframeRef.current && !hasStarted) {
        setHasStarted(true);
        const baseUrl = "https://www.youtube.com/embed/LgMvaRwbEOE?autoplay=1&loop=1&playlist=LgMvaRwbEOE&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&mute=0";
        iframeRef.current.src = baseUrl;
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
  );
};

export default BackgroundMusic;