const ButtonRounded = ({ children, theme = "default" }) => {
  const themeClasses = {
    fit: "w-fit",
    full: "w-full",
  };
  const themes = themeClasses[theme] || ""; // the "" is a fallback/the default theme if not specified
  return (
    <div
      className={`halfround-right ${themes} hover:bg-background hover:text-foreground cursor-pointer text-skranji`}
    >
      {children}
    </div>
  );
};

export default ButtonRounded;
