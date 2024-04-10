import React from "react";

const shapes = {
  square: "rounded-[0px]",
  round: "rounded-md",
} as const;
const variants = {
  outline: {
    white_A700: "border-white-A700 border border-solid text-white-A700",
  },
  fill: {
    black_900: "bg-black-900 text-blue_gray-300",
    deep_purple_800_75: "bg-deep_purple-800_75 text-white-A700",
    blue_gray_900: "bg-blue_gray-900 text-blue_gray-300",
    gray_900: "bg-gray-900 text-blue_gray-300",
    deep_purple_800: "bg-deep_purple-800 text-white-A700",
  },
} as const;
const sizes = {
  md: "h-[48px] px-6 text-base",
  sm: "h-[38px] px-6 text-xs",
  xs: "h-[32px] pl-4 pr-6 text-[10px]",
} as const;

type ButtonProps = Omit<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  "onClick"
> &
  Partial<{
    className: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
  }>;
const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "xs",
  color = "deep_purple_800",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color as keyof (typeof variants)[typeof variant]]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
