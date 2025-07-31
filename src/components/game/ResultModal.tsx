import React from "react";
import { Card } from "@/components/ui/card";

interface ResultModalProps {
  result: string | null;
  show: boolean;
  score?: number | null;
}

function getScoreColor(score: number | null): string {
  if (score === null) return "text-muted-foreground";
  if (score >= 90) return "text-green-500";
  if (score >= 70) return "text-lime-500";
  if (score >= 40) return "text-yellow-500";
  if (score >= 20) return "text-orange-500";
  return "text-red-500";
}

const ResultModal: React.FC<ResultModalProps> = ({ result, show, score }) => {
  if (!show || !result) return null;
  
  const lines = result.split("\n");
  
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <Card className="p-6 max-w-md mx-4">
        <div className="text-center space-y-2">
          <div className={`font-semibold text-lg ${getScoreColor(score)}`}>
            {lines.map((line, idx) => (
              <div key={idx}>{line}</div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ResultModal;