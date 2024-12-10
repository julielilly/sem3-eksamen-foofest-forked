const LineUpHeader = ({ children, edge = "default", title, header }) => {
  const roundEdge = {
    left: "rounded-l-full flex-row-reverse ",
    right: "rounded-r-full flex-row",
  };
  const edges = roundEdge[edge] || "";
  return (
    <div
      className={`${edges} flex flex-[200px] hover:flex-[300px] transition-all justify-between items-center bg-background text-foreground  py-1xs pr-s pl-l   border-2 border-foreground text-nowrap`}
    >
      <div
        className={
          edge == "left" ? `flex flex-col items-end` : `flex flex-col `
        }
      >
        <p className="capitalize text-text text-[--blue-light]">{title}</p>
        <h4 className="capitalize text-step-3 font-bold">{header}</h4>
      </div>
      {children}
    </div>
  );
};

export default LineUpHeader;
