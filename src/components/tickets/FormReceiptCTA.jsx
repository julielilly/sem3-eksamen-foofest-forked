"use client";

import ButtonRounded from "@/components/common/ButtonRounded";

const FormReceiptCTA = ({ loading, isButtonDisabled, handleButtonClick, step }) => {
  return (
    <ButtonRounded isButtonDisabled={isButtonDisabled}>
      <button onClick={handleButtonClick} className={`${isButtonDisabled ? "cursor-not-allowed" : "cursor-pointer"}`}>
        {step === 1 && "Choose camping"}
        {step === 2 && (loading ? "loading..." : "Reserve tickets")}
        {step === 3 && "Go to payment"}
      </button>

      {step === 4 && (
        <input
          type="submit"
          value={loading ? "loading..." : "Proceed to checkout"}
          form="reservation-form"
          className={`${isButtonDisabled ? "cursor-not-allowed" : "cursor-pointer"}`}
          onClick={handleButtonClick} // Handle validation here
        />
      )}
    </ButtonRounded>
  );
};

export default FormReceiptCTA;
