import { JSX, splitProps } from "solid-js";

type IconButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type IconButtonSize = "sm" | "md" | "lg";

export interface IconButtonProps extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: IconButtonVariant;
  size?: IconButtonSize;
  icon: JSX.Element;
  label: string; // For accessibility
  loading?: boolean;
  rounded?: boolean;
}

export function IconButton(props: IconButtonProps) {
  const [local, others] = splitProps(props, [
    "class", 
    "variant", 
    "size", 
    "icon", 
    "label", 
    "loading", 
    "rounded", 
    "disabled"
  ]);

  const variant = () => local.variant || "primary";
  const size = () => local.size || "md";
  const disabled = () => local.disabled || local.loading;
  const isRounded = () => local.rounded !== false;

  const variantClasses = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500",
    outline: "bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500",
    ghost: "bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-500"
  };

  const sizeClasses = {
    sm: "p-1",
    md: "p-2",
    lg: "p-3"
  };

  const iconSizeClasses = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6"
  };

  const baseClasses = "inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors";
  const roundedClass = isRounded() ? "rounded-full" : "rounded-md";
  const disabledClass = disabled() ? "opacity-50 cursor-not-allowed" : "";

  return (
    <button
      type="button"
      class={`${baseClasses} ${variantClasses[variant()]} ${sizeClasses[size()]} ${roundedClass} ${disabledClass} ${local.class || ""}`}
      disabled={disabled()}
      aria-label={local.label}
      {...others}
    >
      {local.loading ? (
        <svg class={`animate-spin ${iconSizeClasses[size()]}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      ) : (
        <span class={iconSizeClasses[size()]}>{local.icon}</span>
      )}
    </button>
  );
}