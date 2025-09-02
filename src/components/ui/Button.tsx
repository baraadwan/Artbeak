import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isLoading?: boolean;
  variant?: "primary" | "secondary";
}

const Button = ({
  isLoading = false,
  className = "",
  disabled,
  children,
  variant = "primary",
  ...props
}: ButtonProps) => {
  const bgColorClass =
    variant === "primary"
      ? "bg-[#0047ff] hover:bg-blue-700"
      : "bg-[#222222] hover:bg-zinc-800";

  return (
    <button
      className={`${bgColorClass} text-white font-normal text-base sm:text-lg md:text-xl lg:text-2xl px-4 sm:pl-5 sm:pr-3 md:pl-6 md:pr-4 py-2 sm:py-2.5 rounded-full flex items-center justify-center transition-colors group cursor-pointer font-inter ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? "Loading..." : children}
      <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 bg-white rounded-full flex items-center justify-center ml-2 sm:ml-3 md:ml-4 transition-transform group-hover:translate-x-1">
        <svg
          width="29"
          height="28"
          viewBox="0 0 29 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#0047ff]"
        >
          <mask
            id="mask0_3302_1235"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="29"
            height="28"
          >
            <rect
              x="0.887451"
              y="0.526031"
              width="27.2801"
              height="27.2801"
              fill="#D9D9D9"
            />
          </mask>
          <g mask="url(#mask0_3302_1235)">
            <path
              d="M15.7681 22.8113C15.7851 22.8283 16.3058 22.9588 16.9251 23.1012C17.5445 23.2435 18.0579 23.3382 18.0662 23.3118C18.0744 23.2853 18.1385 22.8554 18.2085 22.3564C18.3493 21.3545 18.6901 20.1846 19.0543 19.453C20.1895 17.1728 22.2263 15.663 24.6966 15.2706L25.3257 15.1706V14.1634V13.156L24.7555 13.0603C21.0201 12.4337 18.5848 9.64063 18.1292 5.46085C18.0994 5.18792 18.0639 4.96468 18.0502 4.96468C17.9242 4.96468 15.8367 5.46776 15.7973 5.50761C15.7687 5.53643 15.79 5.7923 15.8445 6.07611C16.4486 9.21884 18.1782 11.7762 20.4226 12.8454L20.961 13.1019L9.88971 13.122L2.88892 13.1348V15.1734L9.90772 15.1861L20.9529 15.2063L20.2732 15.5507C18.5099 16.444 17.1138 18.1964 16.2917 20.5486C16.0574 21.2187 15.7039 22.7465 15.7681 22.8113Z"
              fill="currentColor"
            />
          </g>
        </svg>
      </div>
    </button>
  );
};

export default Button;
