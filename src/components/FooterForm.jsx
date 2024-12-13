const FooterForm = () => {
  return (
    <form className="text-background flex flex-col gap-3xs max-w-[400px]">
      <label htmlFor="name">First name*</label>
      <input type="text" id="name" className="halfround-right border-background" />

      <label htmlFor="email">E-mail*</label>
      <input type="email" id="email" className="halfround-right border-background" />

      <button className="halfround-right bg-background text-foreground mt-xs hover:text-background hover:bg-lightblue">subscribe to newsletter</button>
    </form>
  );
};

export default FooterForm;
