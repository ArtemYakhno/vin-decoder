import z from "zod";

export const vinFormSchema =z.object({
  vin: z
    .string()
    .min(1, "VIN cannot be empty")
    .length(17, "VIN must be exactly 17 characters")
    .regex(
      /^[A-HJ-NPR-Z0-9]{17}$/i,
      "VIN can only contain letters (except I, O, Q) and digits",
    ),
  modelyear: z
    .number()
    .int()
    .min(1900, "Year must be after 1900")
    .max(new Date().getFullYear() + 1, "Year is too far in the future")
    .optional(),
});

export type TVinFormValues = z.infer<typeof vinFormSchema>;