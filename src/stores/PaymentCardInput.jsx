import { create } from "zustand";

export const PaymentCardInput = create((set) => ({
  cardNumber: "",
  cardName: "",
  expiryDate: "",
  cardCvc: "",
  setCardNumber: (value) =>
    set((state) => ({
      cardNumber: value
        .replace(/[^0-9]/g, "") // this allows only numbers
        .replace(/(\d{4})/g, "$1 ") // this adds space after every
        .trim(), // remove any spaces before and after
    })),
  setCardName: (value) =>
    set({
      cardName: value.replace(/[^a-zA-Z\u00C0-\u024F\u1E00-\u1EFF\s-]/g, ""),
    }),
  setExpiryDate: (
    value // yy/mm format of the expiry date field
  ) =>
    set((state) => ({
      expiryDate: value
        .replace(/\/$/, "") // remove trailing slash if present
        .replace(/[^0-9/]/g, "") // this allows only numbers and "/"
        .replace(/(\d{2})(\d{2})/, "$1/$2"), // formats the input so it looks like mm/yy. if user writes "1234", this will split it into "12/34".
    })),
  setCardCvc: (value) =>
    set((state) => ({
      cardCvc: value.replace(/[^0-9]/g, ""), // this allows only numbers
    })),
}));
