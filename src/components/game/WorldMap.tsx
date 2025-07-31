import React from "react";

interface MapSectionFoodProps {
  onCountrySelect: (countryName: string) => void;
  selectedCountry: string | null;
  correctCountry: string | null;
  wrongCountries?: string[];
  showFinalResult?: boolean;
}

const WorldMap: React.FC<MapSectionFoodProps> = ({
  onCountrySelect,
  selectedCountry,
  correctCountry,
  wrongCountries = [],
  showFinalResult = false,
}) => {
  return (
    <div className="w-full h-full bg-muted/30 rounded-lg flex items-center justify-center border-2 border-dashed border-primary/20">
      <div className="text-center space-y-2">
        <div className="text-4xl">🗺️</div>
        <p className="text-muted-foreground text-sm">Mappa interattiva</p>
        {selectedCountry && (
          <p className="font-bold text-primary">
            Selezionato: {selectedCountry}
          </p>
        )}
        {showFinalResult && correctCountry && (
          <p className="font-bold text-green-600">
            Risposta corretta: {correctCountry}
          </p>
        )}
        <div className="grid grid-cols-2 gap-2 max-w-xs mx-auto">
          <button 
            onClick={() => onCountrySelect("Italy")}
            disabled={showFinalResult}
            className={`px-3 py-2 text-sm rounded transition-colors ${
              selectedCountry === "Italy" 
                ? "bg-primary text-primary-foreground" 
                : "bg-primary/10 hover:bg-primary/20"
            } ${showFinalResult && correctCountry === "Italy" ? "bg-green-500 text-white" : ""}`}
          >
            🇮🇹 Italy
          </button>
          <button 
            onClick={() => onCountrySelect("France")}
            disabled={showFinalResult}
            className={`px-3 py-2 text-sm rounded transition-colors ${
              selectedCountry === "France" 
                ? "bg-primary text-primary-foreground" 
                : "bg-primary/10 hover:bg-primary/20"
            } ${showFinalResult && correctCountry === "France" ? "bg-green-500 text-white" : ""}`}
          >
            🇫🇷 France
          </button>
          <button 
            onClick={() => onCountrySelect("Japan")}
            disabled={showFinalResult}
            className={`px-3 py-2 text-sm rounded transition-colors ${
              selectedCountry === "Japan" 
                ? "bg-primary text-primary-foreground" 
                : "bg-primary/10 hover:bg-primary/20"
            } ${showFinalResult && correctCountry === "Japan" ? "bg-green-500 text-white" : ""}`}
          >
            🇯🇵 Japan
          </button>
          <button 
            onClick={() => onCountrySelect("Spain")}
            disabled={showFinalResult}
            className={`px-3 py-2 text-sm rounded transition-colors ${
              selectedCountry === "Spain" 
                ? "bg-primary text-primary-foreground" 
                : "bg-primary/10 hover:bg-primary/20"
            } ${showFinalResult && correctCountry === "Spain" ? "bg-green-500 text-white" : ""}`}
          >
            🇪🇸 Spain
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorldMap;