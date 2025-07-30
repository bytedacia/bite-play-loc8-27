import { useEffect, useRef } from "react";

const BackgroundMusic = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Function to start music on user interaction
    const startMusic = () => {
      if (iframeRef.current) {
        const src = iframeRef.current.src;
        iframeRef.current.src = src + "&autoplay=1";
      }
      // Remove listeners after first interaction
      document.removeEventListener('click', startMusic);
      document.removeEventListener('touchstart', startMusic);
      document.removeEventListener('keydown', startMusic);
    };

    // Add multiple interaction listeners
    document.addEventListener('click', startMusic);
    document.addEventListener('touchstart', startMusic);
    document.addEventListener('keydown', startMusic);

    // Try immediate autoplay as fallback
    const timer = setTimeout(() => {
      if (iframeRef.current) {
        const src = iframeRef.current.src;
        iframeRef.current.src = src;
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('click', startMusic);
      document.removeEventListener('touchstart', startMusic);
      document.removeEventListener('keydown', startMusic);
    };
  }, []);

  return (
    <iframe
      ref={iframeRef}
      className="hidden"
      src="https://www.youtube.com/embed/LgMvaRwbEOE?autoplay=1&loop=1&playlist=LgMvaRwbEOE&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&mute=0"
      title="Background Music"
      frameBorder="0"
      allow="autoplay; encrypted-media"
      style={{ position: 'absolute', left: '-9999px', top: '-9999px', width: '1px', height: '1px' }}
    />
  );
};

export default BackgroundMusic;