const FormChooseTicket = () => {
  // Will try to use the method from this article to create a clip-path of the ticket-pattern I created in Figma
  // link: https://www.sarasoueidan.com/blog/css-svg-clipping/
  // converting svg to clip path here: https://yoksel.github.io/relative-clip-path/
  return (
    <div className="grid">
      <div className="ticket-clip flex items-center justify-center fill-transparent p-4  row-start-1 col-span-full "></div>
      <h2 className=" text-2xl row-start-1 col-span-full">Title</h2>
    </div>
  );
};

export default FormChooseTicket;
