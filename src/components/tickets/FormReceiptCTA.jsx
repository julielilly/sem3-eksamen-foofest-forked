"use client";

const FormReceiptCTA = ({ loading, isButtonDisabled, handleButtonClick, step }) => {
  return (
    <div>
      {step !== 4 && (
        <button onClick={handleButtonClick} className={`halfround-right hover:bg-background hover:text-foreground text-skranji text-left w-full ${isButtonDisabled ? "bg-[#817F77] border-[#817F77] cursor-not-allowed" : "cursor-pointer"}`}>
          {step === 1 && "Choose camping"}
          {step === 2 && (loading ? "loading..." : "Reserve tickets")}
          {step === 3 && "Go to payment"}
        </button>
      )}

      {step === 4 && (
        <input
          type="submit"
          value={loading ? "loading..." : "Proceed to checkout"}
          form="reservation-form"
          className={`halfround-right hover:bg-background hover:text-foreground text-skranji text-left w-full  ${isButtonDisabled ? "bg-[#817F77] border-[#817F77] cursor-not-allowed" : "cursor-pointer"}`}
          onClick={handleButtonClick} // Handle validation here
        />
      )}
    </div>
  );
};

export default FormReceiptCTA;
