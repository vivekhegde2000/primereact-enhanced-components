import React from "react";
import { AutoComplete, type AutoCompleteProps } from "primereact/autocomplete";
import "../TextInput/text-input.scss";

export interface AutoCompleteInputProps
  extends Omit<AutoCompleteProps<any, any>, "multiple"> {
  label?: string;
  helperText?: string;
  error?: boolean;
  required?: boolean;
  multiple?: boolean;

  containerClassName?: string;
  labelClassName?: string;
  helperClassName?: string;
}

const AutoCompleteInput: React.FC<AutoCompleteInputProps> = ({
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
      className={`autocomplete-input w-[100%    ] flex flex-col gap-1 ${containerClassName}`}
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

      {/* AutoComplete */}
      <AutoComplete
        id={id}
        className={`
          text-sm w-[100%]
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

export default AutoCompleteInput;
