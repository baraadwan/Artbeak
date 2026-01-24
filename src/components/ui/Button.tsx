import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isLoading?: boolean;
  variant?: "primary" | "secondary";
  buttonId?: string;
}

const Button = ({
  isLoading = false,
  className = "",
  disabled,
  children,
  variant = "primary",
  buttonId,
  ...props
}: ButtonProps) => {
  const bgColorClass =
    variant === "primary"
      ? "bg-[#0047ff] hover:bg-blue-700"
      : "bg-[#222222] hover:bg-zinc-800";

  return (
    <button
      id={buttonId}
      className={`${bgColorClass} text-white font-normal text-base sm:text-lg md:text-xl lg:text-2xl px-4 sm:pl-5 sm:pr-3 md:pl-6 md:pr-4 py-2 sm:py-2.5 rounded-full flex items-center justify-center transition-all duration-300 group cursor-pointer font-inter hover:shadow-lg hover:shadow-blue-500/30 hover:scale-105 ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? "Loading..." : children}
      {/* icon stays the same */}
    </button>
  );
};

export default Button;
