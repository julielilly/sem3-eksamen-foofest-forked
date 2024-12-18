const PageTitle = ({ children }) => {
  return (
    // <div className="col-full pt-xl pb-m [&>*+*]:col-main">
    //   <div className="halfround-right text-title col-start-1 col-span-2 w-fit px-l  ">
    //     <h1 className="">{children}</h1>
    //   </div>
    // </div>

    <h1 className="page-title my-xl">{children}</h1>
  );
};

export default PageTitle;
