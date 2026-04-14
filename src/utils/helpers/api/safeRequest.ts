import type z from "zod";
import { fromError } from "zod-validation-error";

export async function safeRequest<T>(
  request: Promise<unknown>,
  schema: z.ZodSchema<T>
): Promise<T> {
  const data = await request;
  const parsed = schema.safeParse(data);

  if (!parsed.success) {
    throw fromError(parsed.error);
  }

  return parsed.data;
}