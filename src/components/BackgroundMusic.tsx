import { useEffect, useRef, useState } from "react";

const BackgroundMusic = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (hasStarted) return;

    const attemptAutoplay = () => {
      if (iframeRef.current && !hasStarted) {
        setHasStarted(true);
        const baseUrl = "https://www.youtube.com/embed/LgMvaRwbEOE?autoplay=1&loop=1&playlist=LgMvaRwbEOE&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1";
        iframeRef.current.src = baseUrl;
        console.log("Background music YouTube started");
      }
    };

    const timer = setTimeout(attemptAutoplay, 500);

    const handleInteraction = () => {
      if (!hasStarted) {
        attemptAutoplay();
        console.log("Background music YouTube started after user interaction");
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
    </>
  );
};

export default BackgroundMusic;