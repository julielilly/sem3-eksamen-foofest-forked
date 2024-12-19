const PageTitle = ({ children }) => {
  return (
    <div className="pagetitle_first_grid col-full pt-xl pb-m  w-fit ">
      <div className="pagetitle_bg_  bg-black  row-span-full"></div>
      <h1 className="pagetitle_h1 col-main  w-fit row-span-full text-title halfround-right">
        {children}
      </h1>
    </div>
  );
};

export default PageTitle;
