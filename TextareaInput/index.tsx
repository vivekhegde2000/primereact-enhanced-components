import React from "react";
import {
  InputTextarea,
  type InputTextareaProps,
} from "primereact/inputtextarea";
import "../TextInput/text-input.scss";

export interface TextareaInputProps extends InputTextareaProps {
  label?: string;
  helperText?: string;
  error?: boolean;
  required?: boolean;
  containerClassName?: string;
  labelClassName?: string;
  helperClassName?: string;
}

const TextareaInput: React.FC<TextareaInputProps> = ({
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
    <div className={`textarea-input flex flex-col gap-1 ${containerClassName}`}>
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

      {/* Textarea */}
      <InputTextarea
        id={id}
        className={`
          p-2 text-sm
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

export default TextareaInput;
