import React from "react";

interface PhotoDisplayProps {
  url: string;
  name: string;
}

const PhotoDisplayFood: React.FC<PhotoDisplayProps> = ({ url, name }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-2">
      <img 
        src={url} 
        alt={name} 
        className="w-full h-full object-cover rounded-lg border-2 border-primary/20 shadow-lg"
      />
    </div>
  );
};

export default PhotoDisplayFood;