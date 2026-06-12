import { z } from 'zod';

export const DecodeItemSchema = z.object({
  Value: z.string().nullable(),
  ValueId: z.string().nullable(),
  Variable: z.string(),
  VariableId: z.number(),
});

export const DecodeResponseSchema = z.object({
  Count: z.number(),
  Message: z.string(),
  SearchCriteria: z.string(),
  Results: z.array(DecodeItemSchema),
});

export type TDecodeItem = z.infer<typeof DecodeItemSchema>;
export type TDecodeResponse = z.infer<typeof DecodeResponseSchema>;