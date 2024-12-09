const ButtonSharpEdge = ({ children, theme = "default" }) => {
  const themeClasses = {
    white:
      "bg-white border-2 border-black shadow-[6px_5px_0px_1px_var(--foreground)] hover:bg-lightblue hover:text-white hover:border-white hover:shadow-[6px_5px_0px_1px_background]",
    black:
      "bg-foreground text-white border-2 border-white shadow-[6px_5px_0px_1px_background] hover:bg-white hover:text-foreground hover:border-foreground hover:shadow-[6px_5px_0px_1px_var(--foreground)]",
    default:
      "border-2 border-white hover:bg-lightblue hover:text-white hover:shadow-[6px_5px_0px_1px_white]",
  };

  const themes = themeClasses[theme] || ""; // the "" is a fallback/the default theme if not specified

  return <div className={`sharp ${themes} `}>{children}</div>;
};

export default ButtonSharpEdge;
