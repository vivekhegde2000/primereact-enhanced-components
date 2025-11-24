import React from "react";
import { Calendar, type CalendarProps } from "primereact/calendar";
import "../TextInput/text-input.scss";

export interface CalendarInputProps extends CalendarProps {
  label?: string;
  helperText?: string;
  error?: boolean;
  required?: boolean;

  containerClassName?: string;
  labelClassName?: string;
  helperClassName?: string;
}

const CalendarInput: React.FC<CalendarInputProps> = ({
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
    <div className={`calendar-input flex flex-col gap-1 ${containerClassName}`}>
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

      {/* Calendar */}
      <Calendar
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

export default CalendarInput;
