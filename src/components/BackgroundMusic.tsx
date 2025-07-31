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
        const baseUrl = "https://www.youtube.com/embed/LgMvaRwbEOE?autoplay=1&loop=1&playlist=LgMvaRwbEOE&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&mute=0&volume=30";
        iframeRef.current.src = baseUrl;
        console.log("Background music started - single instance");
      }
    };

    const timer = setTimeout(attemptAutoplay, 500);

    const handleInteraction = () => {
      if (!hasStarted && !isPlaying) {
        attemptAutoplay();
        console.log("Background music started after user interaction - single instance");
        // Remove all listeners after first interaction
        document.removeEventListener('click', handleInteraction);
        document.removeEventListener('touchstart', handleInteraction);
        document.removeEventListener('keydown', handleInteraction);
      }
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
  }, [hasStarted, isPlaying]);

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