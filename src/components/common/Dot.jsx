const Dot = ({ item, isOpen }) => {
  return (
    <span
      className={
        isOpen === item
          ? `grid place-content-center rounded-full w-8 h-8 border-2 border-foreground bg-red hover:bg-red transition-all `
          : `grid place-content-center rounded-full w-8 h-8 border-2 border-foreground bg-white hover:bg-red transition-all `
      }
    >
      <span className="rounded-full w-4 h-4 border-2 border-foreground bg-black"></span>
    </span>
  );
};

export default Dot;
