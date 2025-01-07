const ValidationErrors = ({ validationErrors, step }) => {
  return (
    <div className="max-w-[20ch] py-3xs">
      {/* Step 1 Error Handling */}
      {validationErrors && validationErrors.generalTickets && <p className="error-message">{validationErrors.generalTickets._errors[0]}</p>}

      {/* Step 2 Error Handling */}
      {validationErrors && validationErrors.campingArea && <p className="error-message">Please select a camping area</p>}

      {validationErrors && !validationErrors.campingArea && validationErrors.tents && <p className="error-message">{validationErrors.tents._errors[0]}</p>}

      {step === 2 && validationErrors && !validationErrors.campingArea && !validationErrors.tents && <p className="error-message">{validationErrors}</p>}
    </div>
  );
};

export default ValidationErrors;
