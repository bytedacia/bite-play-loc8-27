const VideoBackground = () => {
  return (
    <>
      {/* Full Screen Video Background */}
      <div 
        className="video-background fixed top-0 left-0 w-full h-full -z-20"
        style={{
          width: '100vw',
          height: '100vh',
          margin: 0,
          padding: 0,
          overflow: 'hidden'
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '100vw',
            height: '56.25vw', // 16:9 aspect ratio
            minHeight: '100vh',
            minWidth: '177.78vh', // 16:9 aspect ratio
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none'
          }}
        >
          <iframe
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 'none',
              margin: 0,
              padding: 0
            }}
            src="https://www.youtube.com/embed/GWaQiFeQ87g?autoplay=1&loop=1&playlist=GWaQiFeQ87g&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&vq=hd1080&playsinline=1&start=0"
            title="Background Video"
            frameBorder="0"
            allow="autoplay; encrypted-media; fullscreen"
            allowFullScreen
          />
        </div>
      </div>
      
      {/* Dark overlay for better text readability */}
      <div className="fixed inset-0 bg-black/20 -z-10" />
    </>
  );
};

export default VideoBackground;