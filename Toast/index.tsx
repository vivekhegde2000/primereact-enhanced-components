// src/components/common/Toast.tsx

import { forwardRef } from "react";
import { Toast as PrimeToast, type ToastProps } from "primereact/toast";

/**
 * Reusable Toast wrapper component.
 *
 * This component keeps all ToastProps from PrimeReact intact,
 * adds forwardRef support, and allows you to use it anywhere
 * as a standardized Toast component across your app.
 */

export type AppToastProps = ToastProps;

const Toast = forwardRef<PrimeToast, AppToastProps>((props, ref) => {
  return <PrimeToast ref={ref} {...props} />;
});

Toast.displayName = "Toast";

export default Toast;
