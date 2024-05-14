import React,{ MutableRefObject } from "react";

interface Iprops {
  children: React.ReactNode;
  className?: string;
  width?: "w-full" | "w-fit";
  onClick?: () => void; // Add this line
  ref?: MutableRefObject<null>;
}

const Button = ({ children, className, width = "w-full", ... rest }: Iprops) => {
  return (
    <button
      className={`${className} ${width} rounded-md px-4 py-2 text-white`}
      {... rest}
    >
      {children}
    </button>
  );
};

export default Button;
