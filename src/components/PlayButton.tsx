import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PlayButton = () => {
  const navigate = useNavigate();
  
  const handlePlay = () => {
    navigate("/game");
  };

  return (
    <Button 
      onClick={handlePlay}
      size="lg"
      className="bg-brand-primary hover:bg-brand-primary/90 text-black font-bold px-8 py-4 rounded-full border-2 border-brand-accent shadow-lg hover:shadow-brand-primary/50 transition-all duration-300 transform hover:scale-105"
    >
      <Play className="mr-2 h-5 w-5" fill="currentColor" />
      PLAY
    </Button>
  );
};

export default PlayButton;