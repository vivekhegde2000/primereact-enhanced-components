import React from "react";
import { InputText, type InputTextProps } from "primereact/inputtext";
import "./text-input.scss";

export interface TextInputProps extends InputTextProps {
  label?: string;
  helperText?: string;
  error?: boolean;
  required?: boolean; // 👈 NEW
  containerClassName?: string;
  labelClassName?: string;
  helperClassName?: string;
}

const TextInput: React.FC<TextInputProps> = ({
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
    <div className={`input-text flex flex-col gap-1 ${containerClassName}`}>
      {/* Label */}
      {label && (
        <label
          htmlFor={id}
          className={`input-text__label text-sm font-medium flex items-center gap-1 ${labelClassName}`}
        >
          {label}

          {/* Required Asterisk */}
          {required && <span className="text-red-500">*</span>}
        </label>
      )}

      {/* Input */}
      <InputText
        id={id}
        className={`
           px-2 text-sm
          ${error ? "p-invalid border-red-500" : ""}
          ${className ?? ""}
        `}
        {...rest}
      />

      {/* Helper Text */}
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

export default TextInput;
