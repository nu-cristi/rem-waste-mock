import React from "react";
import { Skip } from "../../types/skip";
import "./SkipCard.css";

interface SkipCardProps {
  skip: Skip;
  isSelected: boolean;
  showPriceDetails: boolean;
  onSelect: () => void;
  onTooltipToggle: () => void;
}

export const SkipCard: React.FC<SkipCardProps> = ({
  skip,
  isSelected,
  showPriceDetails,
  onSelect,
  onTooltipToggle,
}) => {
  const totalPrice = skip.price_before_vat * (1 + skip.vat / 100);
  const priceBeforeVat = skip.price_before_vat;
  const vatAmount = skip.price_before_vat * (skip.vat / 100);

  const handlePriceClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onTooltipToggle();
  };

  const hasAdditionalCosts =
    (skip.transport_cost !== null && skip.transport_cost > 0) ||
    (skip.per_tonne_cost !== null && skip.per_tonne_cost > 0);

  // Determine which additional cost is the last one
  const isTransportLast =
    skip.transport_cost !== null &&
    skip.transport_cost > 0 &&
    (skip.per_tonne_cost === null || skip.per_tonne_cost === 0);

  return (
    <div
      className={`skip-card ${isSelected ? "selected" : ""}`}
      onClick={onSelect}
    >
      <div className="skip-image">
        <img
          src={`/skips/${skip.size}yard.svg`}
          alt={`${skip.size} Yard Skip`}
        />
        <div className="warning-labels">
          {!skip.allowed_on_road && (
            <div className="warning-label">Not Allowed On Road</div>
          )}
          {!skip.allows_heavy_waste && (
            <div className="warning-label">No Heavy Waste</div>
          )}
        </div>
      </div>
      <div className="skip-info">
        <div className="main-info">
          <div className="title-group">
            <span className="yard-size">{skip.size} Yard Skip</span>
            <p className="hire-period">
              {skip.hire_period_days} day hire period
            </p>
          </div>
          <div className="price-container">
            <button className="price-button" onClick={handlePriceClick}>
              <span className="price">£{totalPrice.toFixed(0)}</span>
              <span className="price-info-icon">ℹ</span>
            </button>
            {showPriceDetails && (
              <div className="price-popup">
                <div className="price-breakdown">
                  <div
                    className={`breakdown-item ${
                      !hasAdditionalCosts ? "no-border" : ""
                    }`}
                  >
                    <span>Base Price:</span>
                    <span>£{priceBeforeVat.toFixed(2)}</span>
                  </div>
                  <div
                    className={`breakdown-item ${
                      !hasAdditionalCosts ? "no-border" : ""
                    }`}
                  >
                    <span>VAT ({skip.vat}%):</span>
                    <span>£{vatAmount.toFixed(2)}</span>
                  </div>
                  {skip.transport_cost !== null && skip.transport_cost > 0 && (
                    <div
                      className={`breakdown-item transport ${
                        !isTransportLast ? "" : "no-border"
                      }`}
                    >
                      <span>Transport fee:</span>
                      <span>+ £{skip.transport_cost.toFixed(2)}</span>
                    </div>
                  )}
                  {skip.per_tonne_cost !== null && skip.per_tonne_cost > 0 && (
                    <div className="breakdown-item per-tonne no-border">
                      <span>Per Tonne:</span>
                      <span>£{skip.per_tonne_cost.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="breakdown-item total">
                    <span>Total:</span>
                    <span>£{totalPrice.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <button className={`select-button ${isSelected ? "selected" : ""}`}>
          {isSelected ? "Selected" : "Select This Skip"}
        </button>
      </div>
    </div>
  );
};
