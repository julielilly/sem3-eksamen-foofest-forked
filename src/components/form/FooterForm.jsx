"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { validationSchemaFooterForm } from "@/schemas/validationSchema";

const FooterForm = () => {
  // initialize react form hook with zod validation
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: zodResolver(validationSchemaFooterForm) });

  // submit function
  const footerFormSubmit = (data) => {
    console.log(data); // Logs the form element

    // Clear the form inputs by resetting the form
    reset();

    // confirmation message
    alert(`Subscription successful! Welcome, ${data.name}. You will now receive updates at ${data.email}.`);
  };

  return (
    <form className="text-background flex flex-col gap-3xs max-w-[400px]" aria-labelledby="form-footer-header" onSubmit={handleSubmit(footerFormSubmit)}>
      <label htmlFor="name" className="_option_">
        First name*
      </label>
      <input
        type="text"
        id="name"
        {...register("name")} // register the input for react hook form
        aria-invalid={errors.name} // makes the input invalid for screenreaders if there are errors
        aria-describedby={errors.name ? "name-error" : undefined} // ties the input to the error message
        className="halfround-right border-background"
      />
      {errors.name && (
        <p id="name-error" className="error-message">
          {errors.name.message}
        </p>
      )}

      <label htmlFor="email" className="_option_">
        E-mail*
      </label>
      <input type="email" id="email" {...register("email")} aria-invalid={errors.name} aria-describedby={errors.email ? "email-error" : undefined} className="halfround-right border-background" />
      {errors.email && (
        <p id="email-error" className="error-message">
          {errors.email.message}
        </p>
      )}

      <button className="halfround-right bg-background text-foreground mt-xs hover:text-background hover:bg-lightblue" type="submit">
        subscribe to newsletter
      </button>
    </form>
  );
};

export default FooterForm;
