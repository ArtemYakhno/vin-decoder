import { z } from "zod";

export const VariableValueItemSchema = z.object({
  Id: z.number(),
  Name: z.string(),
  ElementName: z.string(),  
});

export const VariableValuesResponseSchema = z.object({
  Count: z.number(),
  Message: z.string(),
  SearchCriteria: z.string().nullable(),
  Results: z.array(VariableValueItemSchema),
});

export type TVariableValueItem = z.infer<typeof VariableValueItemSchema>;
export type TVariableValuesResponse = z.infer<typeof VariableValuesResponseSchema>;