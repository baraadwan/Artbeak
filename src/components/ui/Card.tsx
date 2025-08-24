import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  padding?: "sm" | "md" | "lg";
  shadow?: boolean;
}

const Card = ({
  children,
  className = "",
  padding = "md",
  shadow = false,
}: CardProps) => {
  const paddingClasses = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  const shadowClasses = shadow
    ? "shadow-2xl shadow-black/20"
    : "border border-gray-700";

  const classes = `bg-gray-800 rounded-lg ${shadowClasses} ${paddingClasses[padding]} ${className}`;

  return <div className={classes}>{children}</div>;
};

export default Card;
