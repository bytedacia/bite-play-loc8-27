import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface WorldMapProps {
  onCountrySelect: (countryName: string) => void;
  selectedCountry: string | null;
  correctCountry?: string | null;
  wrongCountries?: string[];
  showFinalResult?: boolean;
}

const WorldMap: React.FC<WorldMapProps> = ({
  onCountrySelect,
  selectedCountry,
  correctCountry,
  wrongCountries = [],
  showFinalResult = false,
}) => {
  const countries = [
    "Italy", "France", "Germany", "Spain", "United Kingdom",
    "United States", "Japan", "China", "India", "Brazil",
    "Mexico", "Canada", "Australia", "Russia", "South Korea"
  ];

  return (
    <Card className="p-4">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Select a country</h3>
        
        {/* Simple world map placeholder */}
        <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
          <div className="text-6xl">🌍</div>
        </div>
        
        {/* Country selection buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {countries.map((country) => {
            let variant: "default" | "secondary" | "destructive" | "outline" = "outline";
            
            if (showFinalResult && country === correctCountry) {
              variant = "default"; // Green for correct
            } else if (wrongCountries.includes(country)) {
              variant = "destructive"; // Red for wrong
            } else if (country === selectedCountry) {
              variant = "secondary"; // Selected
            }
            
            return (
              <Button
                key={country}
                variant={variant}
                size="sm"
                onClick={() => onCountrySelect(country)}
                disabled={showFinalResult}
                className="text-xs"
              >
                {country}
              </Button>
            );
          })}
        </div>
        
        {selectedCountry && (
          <div className="text-sm text-muted-foreground">
            Selected: {selectedCountry}
          </div>
        )}
      </div>
    </Card>
  );
};

export default WorldMap;