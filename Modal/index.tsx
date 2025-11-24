import React from "react";
import { Dialog, type DialogProps } from "primereact/dialog";
import Button from "../Button"; // your custom button component
import "./modal.scss";

export interface ModalButtonConfig {
  label: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  severity?:
    | "secondary"
    | "success"
    | "info"
    | "warning"
    | "danger"
    | "help"
    | "contrast"
    | undefined;
  visible?: boolean;
  outlined?: boolean;
  rounded?: boolean;
  className?: string;
  text?: boolean;
  buttonProps?: Record<string, any>;
}

export interface ModalProps extends DialogProps {
  /** Show or hide bottom border under header */
  showHeaderBottomBorder?: boolean;

  /** Primary button (usually Delete / Save / Confirm) */
  primaryActionButton?: ModalButtonConfig;

  /** Secondary button (Cancel, Close, Back) */
  secondaryActionButton?: ModalButtonConfig;

  /** Additional dynamic buttons (right aligned) */
  customButtons?: ModalButtonConfig[];

  /** Custom class for content container */
  contentClassName?: string;

  /** Custom footer override */
  footerRenderer?: () => React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  showHeaderBottomBorder = false,
  primaryActionButton,
  secondaryActionButton,
  customButtons = [],
  contentClassName = "",
  footerRenderer,
  children,
  ...dialogProps
}) => {
  /** Render a single reusable button */
  const renderButton = (btn?: ModalButtonConfig) => {
    if (!btn || btn.visible === false) return null;

    return (
      <Button
        label={btn.label}
        icon={btn.icon}
        severity={btn.severity}
        outlined={btn.outlined}
        rounded={btn.rounded}
        text={btn.text}
        className={btn.className}
        onClick={btn.onClick}
        {...btn.buttonProps}
      />
    );
  };

  /** Default footer (if custom renderer not provided) */
  const footer = footerRenderer ? (
    footerRenderer()
  ) : (
    <div className="flex justify-end gap-3 py-3 px-1">
      {renderButton(secondaryActionButton)}
      {renderButton(primaryActionButton)}
      {customButtons.map((btn, idx) => (
        <React.Fragment key={idx}>{renderButton(btn)}</React.Fragment>
      ))}
    </div>
  );

  return (
    <Dialog
      {...dialogProps}
      className={`custom-modal ${dialogProps.className ?? ""}`}
      draggable={false}
      resizable={false}
      footer={footer}
      headerClassName={`flex justify-between items-center ${
        showHeaderBottomBorder ? "modal-header-border" : ""
      }`}
      contentClassName={contentClassName}
      dismissableMask={false}
      closeOnEscape={false}
    >
      {children}
    </Dialog>
  );
};

export default Modal;
