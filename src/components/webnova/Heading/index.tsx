import React from "react";

const sizes = {
  xl: "text-5xl font-extrabold md:text-[44px] sm:text-[38px]",
  s: "text-[10px] font-bold",
  md: "text-xs font-semibold",
  xs: "text-[8px] font-bold",
  lg: "text-xl font-semibold",
};

export type HeadingProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  children,
  className = "",
  size = "md",
  as,
  ...restProps
}) => {
  const Component = as || "h6";

  return (
    <Component className={`text-blue_gray-300 font-nunitosans ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
