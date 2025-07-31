import React from "react";
import { Card } from "@/components/ui/card";

type LatLng = { lat: number; lng: number };

interface MapSectionProps {
  guess: LatLng | null;
  correct?: LatLng | null;
  onMapClick: (lat: number, lng: number) => void;
}

const MapSection: React.FC<MapSectionProps> = ({
  guess,
  correct,
  onMapClick,
}) => {
  const handleMapClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Simple conversion for demo - replace with actual map logic
    const lat = 90 - (y / rect.height) * 180;
    const lng = (x / rect.width) * 360 - 180;
    
    onMapClick(lat, lng);
  };

  return (
    <Card className="p-4">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Click on the map to guess</h3>
        
        <div 
          className="relative h-64 bg-muted rounded-lg cursor-crosshair overflow-hidden"
          onClick={handleMapClick}
        >
          {/* Simple world map placeholder */}
          <div className="absolute inset-0 flex items-center justify-center text-6xl">
            🗺️
          </div>
          
          {/* Guess marker */}
          {guess && (
            <div 
              className="absolute w-4 h-4 bg-blue-500 rounded-full border-2 border-white transform -translate-x-2 -translate-y-2"
              style={{
                left: `${((guess.lng + 180) / 360) * 100}%`,
                top: `${((90 - guess.lat) / 180) * 100}%`,
              }}
            />
          )}
          
          {/* Correct marker */}
          {correct && (
            <div 
              className="absolute w-4 h-4 bg-green-500 rounded-full border-2 border-white transform -translate-x-2 -translate-y-2"
              style={{
                left: `${((correct.lng + 180) / 360) * 100}%`,
                top: `${((90 - correct.lat) / 180) * 100}%`,
              }}
            />
          )}
        </div>

        {guess && (
          <div className="text-sm text-muted-foreground">
            Marker at: {guess.lat.toFixed(4)}, {guess.lng.toFixed(4)}
          </div>
        )}
      </div>
    </Card>
  );
};

export default MapSection;