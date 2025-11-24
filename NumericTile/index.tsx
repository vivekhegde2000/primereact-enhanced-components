import React from "react";
import { Card } from "primereact/card";
import "./NumericTile.scss";
import { Tooltip } from "primereact/tooltip";

export interface NumericTileProps {
  /** Icon to show on left */
  icon: React.ReactElement;

  /** Main number value */
  value: string | number;

  /** Label below the number */
  label: string;

  /** Optional background circle color behind icon */
  iconBgColor?: string;

  /** Color of main value text */
  valueColor?: string;

  /** Color of label text */
  labelColor?: string;

  /** Optional card background */
  backgroundColor?: string;

  /** Optional card border radius */
  borderRadius?: string;

  /** Optional box shadow */
  shadow?: string;

  /** Custom className */
  className?: string;

  /** Custom style */
  style?: React.CSSProperties;
}

const NumericTile: React.FC<NumericTileProps> = ({
  icon,
  value,
  label,
  iconBgColor = "var(--color-numeric-tile-default-icon-bg)", // default soft green
  valueColor = "var(--color-numeric-tile-default-value-color)",
  labelColor = "var( --color-numeric-tile-default-label-color)",
  backgroundColor = "var(--color-white)",
  borderRadius = "4px",
  shadow = "0 2px 8px rgba(0, 0, 0, 0.06)",
  className,
  style,
}) => {
  return (
    <Card
      className={`numeric-tile ${className ?? ""}`}
      style={{
        backgroundColor,
        borderRadius,
        boxShadow: shadow,
        ...style,
      }}
    >
      <div className="flex items-center gap-4">
        {/* Icon container */}
        <div
          className="flex items-center justify-center icon-circle"
          style={{ backgroundColor: iconBgColor }}
        >
          {icon}
        </div>

        {/* Text section */}
        <div className="flex flex-col leading-tight">
          <span className="font-semibold text-xl" style={{ color: valueColor }}>
            {value}
          </span>
          <Tooltip style={{ fontSize: "12px" }} target={".label-tooltip"} />
          <span
            className="label-tooltip text-sm"
            data-pr-tooltip={label}
            data-pr-position="bottom"
            style={{ color: labelColor }}
          >
            {label}
          </span>
        </div>
      </div>
    </Card>
  );
};

export default NumericTile;
