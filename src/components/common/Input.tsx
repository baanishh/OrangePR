import React from "react";

type InputProps = {
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  className?: string;
  rows?: number;
  isTextArea?: boolean;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> &
  Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "onChange">;

const Input = React.forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  InputProps
>(
  (
    {
      type = "text",
      placeholder,
      value,
      onChange,
      className = "",
      rows = 4,
      isTextArea = false,
      ...props
    },
    ref,
  ) => {
    const baseClasses =
      "w-full border border-[#D9D9D9] rounded-[5px] bg-white px-6 py-4 text-[15px] text-[#1E1E1E] placeholder:text-[#1E1E1E] focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all";

    if (isTextArea || type === "textarea") {
      return (
        <textarea
          ref={ref as React.ForwardedRef<HTMLTextAreaElement>}
          rows={rows}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`${baseClasses} resize-none ${className}`}
          {...props}
        />
      );
    }

    return (
      <input
        ref={ref as React.ForwardedRef<HTMLInputElement>}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`${baseClasses} ${className}`}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";

export default Input;
