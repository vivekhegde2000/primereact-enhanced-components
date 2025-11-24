import React from "react";
import { InputNumber, type InputNumberProps } from "primereact/inputnumber";
import "../TextInput/text-input.scss";

export interface NumberInputProps extends InputNumberProps {
  label?: string;
  helperText?: string;
  error?: boolean;
  required?: boolean;
  containerClassName?: string;
  labelClassName?: string;
  helperClassName?: string;
}

const NumberInput: React.FC<NumberInputProps> = ({
  label,
  helperText,
  error = false,
  required = false,
  containerClassName = "",
  labelClassName = "",
  helperClassName = "",
  id,
  className,
  ...rest
}) => {
  return (
    <div className={`input-number flex flex-col gap-1 ${containerClassName}`}>
      {/* Label */}
      {label && (
        <label
          htmlFor={id}
          className={`input-text__label text-sm font-medium flex items-center gap-1 ${labelClassName}`}
        >
          {label}
          {required && <span className="text-red-500">*</span>}
        </label>
      )}

      {/* InputNumber */}
      <InputNumber
        id={id}
        className={`
          w-full text-sm
          ${error ? "p-invalid border-red-500" : ""}
          ${className ?? ""}
        `}
        {...rest}
      />

      {/* Helper */}
      {helperText && (
        <small
          className={`
            text-xs
            ${error ? "text-red-500" : "text-gray-500"}
            ${helperClassName}
          `}
        >
          {helperText}
        </small>
      )}
    </div>
  );
};

export default NumberInput;
