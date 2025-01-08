import { z } from "zod";

// step 1: Validate ticket selection
export const validationSchemaStep1 = z
  .object({
    // Validates the generalTickets field, ensuring it's a number
    generalTickets: z.number(),
    // Validates the vipTickets field, ensuring it's a number
    vipTickets: z.number(),
  })
  .refine((data) => data.generalTickets > 0 || data.vipTickets > 0, {
    // This ensures that at least one ticket (either general or VIP) is selected
    message: "You must select at least one ticket (general or VIP)", // Error message if neither ticket is selected
    path: ["generalTickets"], // Show error on the generalTickets field if validation fails
  });

// step 2: Validate camping area and number of tents
export const validationSchemaStep2 = (numberOfParticipants) =>
  z.object({
    // Ensures that the camping area field is non-empty
    campingArea: z.string().min(1, "Please select a camping area"),
    // Ensures that the number of tents matches the number of participants
    tents: z.number().refine((value) => value === numberOfParticipants, {
      // Error message if the number of tents doesn't match the participants
      message: "The number of tents must match the number of tickets",
    }),
  });

// step 3: Validate participants' information
export const validationSchemaStep3 = (numberOfParticipants) =>
  z.object({
    // Validates that participants array has the correct number of participants
    participants: z
      .array(
        z.object({
          // Ensures that each participant's name is a non-empty string
          name: z.string().min(1, "Full name is required"),
          // Ensures that each participant's email is a valid email
          email: z.string().min(1, "Email is required").email("Please add a valid email"),
          // Ensures that each participant's phone number is a non-empty string
          number: z
            .string()
            .min(1, "Phone number is required")
            .refine((value) => value.replace(/[^0-9]/g, "").length >= 8, "Please add a valid phone number (00 00 00 00)"),
        })
      )
      .length(numberOfParticipants, "All participants must be filled out"), // Ensures the number of participants matches the given length
  });

// step 4: Validate payment details (card information)
export const validationSchemaStep4 = z.object({
  // Validates card number as a non-empty string and ensures it's at least 19 characters (e.g., for formatting)
  cardNumber: z.string().min(1, "Card number is required").min(19, "Card number is too short"),
  // Validates the cardholder's name as a non-empty string
  cardName: z.string().min(1, "Cardholder name is required"),
  // Validates expiry date as a non-empty string and ensures it's at least 5 characters (e.g., MM/YY format)
  expiryDate: z.string().min(1, "Expiry date is required").min(5, "Please add valid date (dd/mm)"),
  // Validates the CVC code as a string with at least 3 characters
  cardCvc: z.string().min(1, "CVC is required").min(3, "Please add a valid CVC (***)"),
});

// validantion for footer form
export const validationSchemaFooterForm = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Please add a valid email"),
});
