import { useEffect, useRef } from "react";

const BackgroundMusic = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Multiple attempts to start autoplay
    const attemptAutoplay = () => {
      if (iframeRef.current) {
        // Force reload iframe multiple times
        const baseUrl = "https://www.youtube.com/embed/LgMvaRwbEOE?autoplay=1&loop=1&playlist=LgMvaRwbEOE&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&mute=0&start=0";
        iframeRef.current.src = baseUrl + "&t=" + Date.now();
      }
    };

    // Immediate attempt
    attemptAutoplay();

    // Multiple retries with different delays
    const timers = [
      setTimeout(attemptAutoplay, 500),
      setTimeout(attemptAutoplay, 1000),
      setTimeout(attemptAutoplay, 2000),
      setTimeout(attemptAutoplay, 3000)
    ];

    // Also try on any user interaction
    const forcePlay = () => {
      attemptAutoplay();
    };

    // Add listeners for all possible interactions
    window.addEventListener('click', forcePlay, { once: true });
    window.addEventListener('touchstart', forcePlay, { once: true });
    window.addEventListener('scroll', forcePlay, { once: true });
    window.addEventListener('mousemove', forcePlay, { once: true });
    window.addEventListener('keydown', forcePlay, { once: true });

    return () => {
      timers.forEach(timer => clearTimeout(timer));
      window.removeEventListener('click', forcePlay);
      window.removeEventListener('touchstart', forcePlay);
      window.removeEventListener('scroll', forcePlay);
      window.removeEventListener('mousemove', forcePlay);
      window.removeEventListener('keydown', forcePlay);
    };
  }, []);

  return (
    <iframe
      ref={iframeRef}
      className="invisible absolute"
      src="https://www.youtube.com/embed/LgMvaRwbEOE?autoplay=1&loop=1&playlist=LgMvaRwbEOE&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&mute=0&start=0"
      title="Background Music"
      frameBorder="0"
      allow="autoplay; encrypted-media"
      style={{ 
        position: 'fixed', 
        top: '-9999px', 
        left: '-9999px', 
        width: '0px', 
        height: '0px',
        zIndex: -9999,
        opacity: 0,
        visibility: 'hidden',
        display: 'none'
      }}
    />
  );
};

export default BackgroundMusic;