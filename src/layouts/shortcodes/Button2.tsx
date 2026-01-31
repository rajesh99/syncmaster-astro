import React from "react";

const Button2 = ({
  label,
  link,
  type,
  style = "primary",
  rel,
  className = "",
}: {
  label: string;
  link: string;
  type?: string;
  style?:
  | "primary"
  | "secondary"
  | "transparent"
  | "light"
  | "outline"
  | "ghost";
  rel?: string;
  className?: string;
}) => {
  // MakerKit button base styles
  const baseStyles = "items-center justify-center font-medium whitespace-nowrap transition-colors transition-[color,background-color,border-color,outline-color,text-decoration-color,fill,stroke] duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] cursor-pointer box-border text-sm leading-5 h-8 px-3 rounded-md border border-solid shadow-[rgba(0,0,0,0.05)_0px_1px_2px_0px] focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50";

  // Determine button style based on style prop
  const getButtonStyles = () => {
    switch (style) {
      case "primary":
        // Sign up button - primary background
        return "bg-primary text-white hover:bg-primary/90 border-primary";
      case "secondary":
      case "outline":
        // Sign in button - white background with border
        return "bg-white text-[#0a0915] border-[#e5e5e5] hover:bg-accent hover:text-accent-foreground";
      default:
        return "bg-white text-[#0a0915] border-[#e5e5e5] hover:bg-accent hover:text-accent-foreground";
    }
  };

  return (
    <a
      href={link}
      target={link.startsWith("http") ? "_blank" : "_self"}
      rel={`noopener noreferrer ${rel ? (rel === "follow" ? "" : rel) : "nofollow"}`}
      className={`${baseStyles} ${getButtonStyles()} ${className}`}
      style={{
        fontFamily: '-apple-system, BlinkMacSystemFont, "Inter", system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif',
        WebkitFontSmoothing: 'antialiased',
        WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
      }}
    >
      {label}
    </a>
  );
};

export default Button2;
