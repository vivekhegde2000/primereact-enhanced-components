import React from "react";
import { MultiSelect, type MultiSelectProps } from "primereact/multiselect";
import "../TextInput/text-input.scss";

export interface MultiSelectInputProps extends MultiSelectProps {
  label?: string;
  helperText?: string;
  error?: boolean;
  required?: boolean;

  containerClassName?: string;
  labelClassName?: string;
  helperClassName?: string;
}

const MultiSelectInput: React.FC<MultiSelectInputProps> = ({
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
    <div
      className={`multiselect-input flex flex-col gap-1 ${containerClassName}`}
    >
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

      {/* MultiSelect */}
      <MultiSelect
        id={id}
        className={`
           w-full text-sm
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

export default MultiSelectInput;
