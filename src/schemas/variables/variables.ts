import { z } from "zod";

const DATA_TYPES = ["string", "lookup", "int", "decimal"] as const;

export const VariableItemSchema = z.object({
  ID: z.number(),
  Name: z.string(),
  DataType: z.enum(DATA_TYPES),       
  Description: z.string(),
  GroupName: z.string().nullable(),
});

export const VariablesResponseSchema = z.object({
  Count: z.number(),
  Message: z.string(),
  SearchCriteria: z.string().nullable(),
  Results: z.array(VariableItemSchema),
});

export type TVariableItem = z.infer<typeof VariableItemSchema>;
export type TVariablesResponse = z.infer<typeof VariablesResponseSchema>;