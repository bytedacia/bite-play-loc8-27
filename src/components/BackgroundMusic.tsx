import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Volume2 } from "lucide-react";

const BackgroundMusic = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [showPlayButton, setShowPlayButton] = useState(false);

  const handlePlayMusic = () => {
    if (iframeRef.current) {
      // Reload iframe to start playing
      const src = iframeRef.current.src;
      iframeRef.current.src = src;
      setShowPlayButton(false);
    }
  };

  useEffect(() => {
    // Show play button after a delay if autoplay doesn't work
    const timer = setTimeout(() => {
      setShowPlayButton(true);
    }, 3000);

    // Try to hide play button on user interaction
    const handleUserInteraction = () => {
      setShowPlayButton(false);
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
    };

    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('touchstart', handleUserInteraction);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
    };
  }, []);

  return (
    <>
      <iframe
        ref={iframeRef}
        className="hidden"
        src="https://www.youtube.com/embed/LgMvaRwbEOE?autoplay=1&loop=1&playlist=LgMvaRwbEOE&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1"
        title="Background Music"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        style={{ position: 'absolute', left: '-9999px', top: '-9999px', width: '1px', height: '1px' }}
      />
      
      {showPlayButton && (
        <div className="fixed top-4 right-4 z-50">
          <Button
            onClick={handlePlayMusic}
            size="sm"
            variant="outline"
            className="bg-black/20 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
          >
            <Volume2 className="h-4 w-4 mr-2" />
            Attiva Musica
          </Button>
        </div>
      )}
    </>
  );
};

export default BackgroundMusic;