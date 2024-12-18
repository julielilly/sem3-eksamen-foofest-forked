"use client";

import { PaymentCardInput } from "@/stores/PaymentCardInput";
import { useState } from "react";
import FormPaymentCard from "../form/FormPaymentCard";

const Payment = ({ register, errors, validationErrors }) => {
  const { cardNumber, cardName, expiryDate, cardCvc, setCardNumber, setCardName, setExpiryDate, setCardCvc } = PaymentCardInput();
  const [paymentMethod, setPaymentMethod] = useState("card");

  // Handler to update the selected payment method
  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  return (
    <fieldset className="_step_4_ px-m">
      <legend className="font-germania-one text-step-2 text-center before:w-1/2">Payment details</legend>

      {/* Payment method selection */}
      <section className="underline-border pt-2xs grid grid-cols-[1fr,1fr] [&>*]:text-nowrap place-items-center [&>*]:hover:cursor-pointer">
        <h3 className="col-span-full pb-0">PAYMENT OPTION</h3>

        <div className="flex items-center gap-2xs">
          <input type="radio" id="payment-mobilepay" name="payment" value="mobilepay" onChange={handlePaymentChange} checked={paymentMethod === "mobilepay"} className="_payment_option_ custom-radio" />
          <label htmlFor="payment-mobilepay" className="_option_">
            MobilePay
          </label>
        </div>

        <div className="flex items-center gap-2xs">
          <input type="radio" id="payment-card" name="payment" value="card" onChange={handlePaymentChange} checked={paymentMethod === "card"} className="_payment_option_ custom-radio" />
          <label htmlFor="payment-card" className="_option_">
            Card Payment
          </label>
        </div>
      </section>

      {/* Conditional rendering based on payment method */}
      <div className="_payment_layout_">
        {/* Show MobilePay details if selected */}
        {paymentMethod === "mobilepay" && (
          <div id="mobilepay-details">
            <label htmlFor="mobilepay-number">MobilePay Number:</label>
            <input type="tel" id="mobilepay-number" {...register("mobilepayNumber")} className="input" maxLength={8} />
            {errors.mobilepayNumber && <p className="error">{errors.mobilepayNumber.message}</p>}
          </div>
        )}

        {/* Show Card payment details if selected */}
        {paymentMethod === "card" && (
          <div id="card-payment-details">
            <FormPaymentCard />
            <label htmlFor="card-number">Card Number:</label>
            <input type="text" inputMode="numeric" id="card-number" value={cardNumber} {...register("cardNumber")} className="input" onChange={(e) => setCardNumber(e.target.value)} maxLength={19} />
            {validationErrors?.cardNumber && <p className="error-message">{validationErrors?.cardNumber?._errors[0]}</p>}

            <label htmlFor="card-name">Cardholder Name:</label>
            <input type="text" id="card-name" {...register("cardName")} value={cardName} className="input" onChange={(e) => setCardName(e.target.value)} />
            {validationErrors?.cardName && <p className="error-message">{validationErrors?.cardName?._errors[0]}</p>}

            <label htmlFor="card-expiry">Expiry Date:</label>
            <input type="text" id="card-expiry" {...register("expiryDate")} className="input" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} placeholder="MM/YY" maxLength={5} />
            {validationErrors?.expiryDate && <p className="error-message">{validationErrors?.expiryDate?._errors[0]}</p>}

            <label htmlFor="card-cvc">Security Code:</label>
            <input type="text" inputMode="numeric" id="card-cvc" {...register("cardCvc")} value={cardCvc} className="input" placeholder="***" onChange={(e) => setCardCvc(e.target.value)} maxLength={3} />
            {validationErrors?.cardCvc && <p className="error-message">{validationErrors?.cardCvc?._errors[0]}</p>}
          </div>
        )}
      </div>
    </fieldset>
  );
};

export default Payment;
