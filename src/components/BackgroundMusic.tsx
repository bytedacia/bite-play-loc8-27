import { useEffect, useRef } from "react";

const BackgroundMusic = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Try to auto-play after a short delay
    const timer = setTimeout(() => {
      if (iframeRef.current) {
        // Reload the iframe to start the music
        const src = iframeRef.current.src;
        iframeRef.current.src = src;
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <iframe
      ref={iframeRef}
      className="hidden"
      src="https://www.youtube.com/embed/LgMvaRwbEOE?autoplay=1&loop=1&playlist=LgMvaRwbEOE&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1"
      title="Background Music"
      frameBorder="0"
      allow="autoplay; encrypted-media"
      style={{ position: 'absolute', left: '-9999px', top: '-9999px', width: '1px', height: '1px' }}
    />
  );
};

export default BackgroundMusic;