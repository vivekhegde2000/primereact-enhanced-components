import React from "react";
import { TabMenu, type TabMenuProps } from "primereact/tabmenu";
import "./tabmenu.scss";
import type { AppButtonProps } from "../Button";
import Button from "../Button";
export interface ActionButtonConfig {
  visible?: boolean;
  label?: string;
  icon?: string | React.ReactElement;
  onClick?: () => void;
  buttonProps?: AppButtonProps;
}

export interface TabMenuWithActionProps extends TabMenuProps {
  /** Optional right-aligned action button */
  actionButton?: ActionButtonConfig;

  /** Extra wrapper class */
  containerClassName?: string;

  /** Extra wrapper styles */
  containerStyle?: React.CSSProperties;
}

/**
 * TabMenu (full width) + right-aligned button inside same background layer.
 */
export const TabMenuWithAction: React.FC<TabMenuWithActionProps> = ({
  actionButton,
  containerClassName,
  containerStyle,
  ...tabMenuProps
}) => {
  const showButton = actionButton?.visible ?? false;

  return (
    <div
      className={`relative w-full tabmenu ${containerClassName ?? ""}`}
      style={containerStyle}
    >
      {/* Full width TabMenu */}
      <TabMenu {...tabMenuProps} />

      {/* Button positioned inside the same TabMenu background */}
      {showButton && (
        <div className="absolute top-1/2 translate-y-[-54%] right-2">
          <Button
            label={actionButton?.label}
            icon={actionButton?.icon}
            onClick={actionButton?.onClick}
            {...actionButton?.buttonProps}
          />
        </div>
      )}
    </div>
  );
};

export default TabMenuWithAction;
