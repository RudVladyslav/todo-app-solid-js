import { Component, JSX } from "solid-js";

interface ButtonProps {
  type: "submit" | "button";
  disabled: boolean;
  onClick?: () => void;
  children: JSX.Element;
}

const Button: Component<ButtonProps> = ({
  children,
  disabled,
  type,
  onClick,
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 ease-in-out"
    >
      {children}
    </button>
  );
};

export default Button;
