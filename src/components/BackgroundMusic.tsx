import { useEffect, useRef, useState } from "react";

// Global flag to prevent multiple instances
let isGlobalAudioPlaying = false;

const BackgroundMusic = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    // Check if audio is already playing globally
    if (hasStarted || isGlobalAudioPlaying) return;

    const attemptAutoplay = () => {
      if (iframeRef.current && !hasStarted && !isGlobalAudioPlaying) {
        setHasStarted(true);
        isGlobalAudioPlaying = true;
        const baseUrl = "https://www.youtube.com/embed/LgMvaRwbEOE?autoplay=1&loop=1&playlist=LgMvaRwbEOE&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1";
        iframeRef.current.src = baseUrl;
        console.log("Background music YouTube started - SINGLE INSTANCE");
      }
    };

    const timer = setTimeout(attemptAutoplay, 500);

    const handleInteraction = () => {
      if (!hasStarted && !isGlobalAudioPlaying) {
        attemptAutoplay();
        console.log("Background music YouTube started after user interaction - SINGLE INSTANCE");
        // Remove listeners immediately after starting
        document.removeEventListener('click', handleInteraction);
        document.removeEventListener('touchstart', handleInteraction);
        document.removeEventListener('keydown', handleInteraction);
      }
    };

    // Only add listeners if audio isn't already playing
    if (!isGlobalAudioPlaying) {
      document.addEventListener('click', handleInteraction);
      document.addEventListener('touchstart', handleInteraction);
      document.addEventListener('keydown', handleInteraction);
    }

    return () => {
      clearTimeout(timer);
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
      document.removeEventListener('keydown', handleInteraction);
    };
  }, [hasStarted]);

  // Don't render iframe if audio is already playing globally
  if (isGlobalAudioPlaying && !hasStarted) {
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