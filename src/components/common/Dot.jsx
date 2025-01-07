const Dot = ({ item, isOpen }) => {
  return (
    <span
      className={`grid place-content-center rounded-full w-8 h-8 border-2 border-foreground hover:bg-red transition-all ${
        isOpen === item ? "bg-red" : "bg-white "
      }`}
    >
      <span className="rounded-full w-4 h-4 border-2 border-foreground bg-black"></span>
    </span>
  );
};

export default Dot;
