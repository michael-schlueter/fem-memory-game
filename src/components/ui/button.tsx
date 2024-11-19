import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "small" | "medium" | "large";
  variant?: "primary" | "secondary" | "menu";
  isActive?: boolean;
  className?: string;
  children: ReactNode;
}

export default function Button({
  size = "medium",
  variant = "primary",
  isActive = false,
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles = "w-full flex items-center justify-center rounded-[26px] font-bold text-white shadow transition-all duration-300";

  const variants = {
    primary: "bg-bright-orange hover:bg-light-orange",
    secondary: "bg-gray text-dark-blue-gray hover:bg-blue hover:text-white",
    menu: "bg-light-gray-blue hover:bg-blue",
  };

  const sizes = {
    small: "text-lg pt-[10px] md:pt-[13px] pb-[10px] md:pb-[14px]",
    medium: "text-[1rem] md:text-[1.625rem] pt-[10px] md:pt-[11px] pb-[10px] md:pb-[9px] leading-5 md:leading-8",
    large: "text-lg md:text-xl pt-3 md:pt-4 pb-[14px] lg:rounded-[35px] leading-[22px] md:leading-10",
  };

  const activeStyles = isActive ? "bg-dark-blue-gray pointer-events-none" : "";

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        activeStyles,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
