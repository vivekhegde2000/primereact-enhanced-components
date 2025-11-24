import { forwardRef } from "react";
import { Button as PrimeButton, type ButtonProps } from "primereact/button";
import "./Button.scss";

/**
 * Button
 * - Thin wrapper around PrimeReact <Button>
 * - Keeps all ButtonProps intact
 * - Only customizes the "success" severity with custom CSS
 *
 * Important: ref type matches PrimeReact Button instance using
 * InstanceType<typeof PrimeButton>
 */

export type AppButtonProps = ButtonProps;

// Derive the instance type of the PrimeReact Button component
type PrimeButtonInstance = InstanceType<typeof PrimeButton>;

const Button = forwardRef<PrimeButtonInstance, AppButtonProps>((props, ref) => {
  const { severity, className = "", size, style, ...rest } = props;

  // Inject custom class only for success severity
  const customClass =
    severity === "success" ? `app-btn-success ${className}` : className;

  const customStyles = {
    padding: size === "small" ? "0.25rem 0.875rem" : undefined,
  };

  return (
    <PrimeButton
      ref={ref}
      {...rest}
      className={customClass}
      severity={severity}
      style={{ ...style, ...customStyles }}
    />
  );
});

Button.displayName = "Button";

export default Button;
