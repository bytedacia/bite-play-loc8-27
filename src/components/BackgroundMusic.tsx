import { useEffect, useRef } from "react";

// Global variables to prevent multiple instances
let globalAudioStarted = false;
let globalIframe: HTMLIFrameElement | null = null;

const BackgroundMusic = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // If audio already started globally, don't do anything
    if (globalAudioStarted) {
      console.log("Audio already started globally, skipping");
      return;
    }

    const attemptAutoplay = () => {
      if (iframeRef.current && !globalAudioStarted) {
        globalAudioStarted = true;
        globalIframe = iframeRef.current;
        const baseUrl = "https://www.youtube.com/embed/LgMvaRwbEOE?autoplay=1&loop=1&playlist=LgMvaRwbEOE&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1";
        iframeRef.current.src = baseUrl;
        console.log("Background music started - GLOBAL SINGLETON");
      }
    };

    const timer = setTimeout(attemptAutoplay, 500);

    const handleInteraction = () => {
      if (!globalAudioStarted) {
        attemptAutoplay();
        console.log("Background music started after interaction - GLOBAL SINGLETON");
      }
      // Remove all listeners globally
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
      document.removeEventListener('keydown', handleInteraction);
    };

    // Only add listeners if not already started
    if (!globalAudioStarted) {
      document.addEventListener('click', handleInteraction);
      document.addEventListener('touchstart', handleInteraction);
      document.addEventListener('keydown', handleInteraction);
    }

    return () => {
      clearTimeout(timer);
      // Don't remove global flag on unmount to prevent restart
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
      document.removeEventListener('keydown', handleInteraction);
    };
  }, []);

  // Only render iframe if this is the first instance
  if (globalAudioStarted && globalIframe && globalIframe !== iframeRef.current) {
    return null;
  }

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