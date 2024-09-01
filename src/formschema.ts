import { z } from "zod";

export const heardfromOptions = [
  "Google",
  "Facebook",
  "Instagram",
  "LinkedIn",
  "Twitter",
  "Friend",
  "Other",
] as const;

export const interestOptions = [
  "For Business",
  "For Community",
  "Others",
] as const;

export const schema = z.object({
  firstname: z.string().min(1, {
    message: "Please enter firtname",
  }),
  lastname: z.string().min(1, {
    message: "Please enter lastname",
  }),
  //任意?
  company: z.string().min(1, {
    message: "Please enter company",
  }),
  email: z
    .string()
    .email({
      message: "Please enter a valid email",
    })
    .min(1, {
      message: "Please enter email",
    }),
  emailconfirm: z
    .string()
    .email({
      message: "Please enter a valid email",
    })
    .min(1, {
      message: "Please enter email",
    }),
  contact: z
    .string()
    .min(1, {
      message: "Please enter contact number",
    })
    .regex(/^[\d!-/:-@[-`{-~ ]*$/, "Please enter valid contact number"),
  interest: z.enum(interestOptions, {
    message: "Please choose one of the options",
  }),
  heardfrom: z.enum(heardfromOptions, {
    message: "Please choose one of the options",
  }),
  message: z.string().min(1, {
    message: "Please enter message",
  }),
});

export const refinedSchema = schema.refine(
  (data) => data.email === data.emailconfirm,
  {
    message: "Emails don't match",
    path: ["emailconfirm"],
  }
);
