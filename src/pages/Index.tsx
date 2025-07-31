import VideoBackground from "@/components/VideoBackground";
import Navigation from "@/components/Navigation";
import PlayButton from "@/components/PlayButton";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <VideoBackground />
      <Navigation />
      
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-white">
        <div className="text-center space-y-8">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent bg-clip-text text-transparent">
            FOOD GUESS
          </h1>
          <div className="text-2xl md:text-3xl font-semibold text-white/90">
            MODE BETA
          </div>
          <div className="mt-12">
            <PlayButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
