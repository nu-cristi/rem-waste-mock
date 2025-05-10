import React, { useState } from "react";
import { Skip } from "../../types/skip";
import { SkipCard } from "../SkipCard/SkipCard";
import "./SkipGrid.css";

interface SkipGridProps {
  skips: Skip[];
}

export const SkipGrid: React.FC<SkipGridProps> = ({ skips }) => {
  const [selectedSkipId, setSelectedSkipId] = useState<number | null>(null);
  const [activeTooltipId, setActiveTooltipId] = useState<number | null>(null);

  const handleTooltipToggle = (skipId: number) => {
    setActiveTooltipId(activeTooltipId === skipId ? null : skipId);
  };

  return (
    <div className="skip-container">
      <div className="skip-header">
        <h1>Choose Your Skip Size</h1>
        <p>Select the skip size that best suits your needs</p>
      </div>
      <div className="skip-grid">
        {skips.map((skip) => (
          <SkipCard
            key={skip.id}
            skip={skip}
            isSelected={selectedSkipId === skip.id}
            showPriceDetails={activeTooltipId === skip.id}
            onSelect={() => setSelectedSkipId(skip.id)}
            onTooltipToggle={() => handleTooltipToggle(skip.id)}
          />
        ))}
      </div>
    </div>
  );
};
