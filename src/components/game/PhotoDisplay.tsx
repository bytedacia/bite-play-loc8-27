import React, { useState } from "react";
import { Card } from "@/components/ui/card";

interface PhotoDisplayProps {
  url: string;
  name: string;
  onImageLoad?: () => void;
}

const PhotoDisplay: React.FC<PhotoDisplayProps> = ({
  url,
  name,
  onImageLoad,
}) => {
  const [loaded, setLoaded] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
    if (onImageLoad) onImageLoad();
  };

  return (
    <Card className="p-4">
      <div className="space-y-4">
        <div className="text-center">
          <h2 className="text-xl font-bold">Guess the location!</h2>
          <p className="text-muted-foreground">{name}</p>
        </div>

        <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
          {!loaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-muted-foreground">Loading image...</div>
            </div>
          )}
          <img
            src={url}
            onLoad={handleLoad}
            alt="Guess location"
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </div>
    </Card>
  );
};

export default PhotoDisplay;