const BlueSpuarFull = ({ children, YourOwnGrid }) => {
  return (
    <section className="col-full relative bg-[--blue-light] min-h-[200px] py-10 my-10">
      {/* write your own grid */}
      <div className={`col-main row-start-1 ${YourOwnGrid}`}>{children}</div>
    </section>
  );
};

export default BlueSpuarFull;
