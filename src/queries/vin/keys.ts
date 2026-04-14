export const vinKeys = {
  default: ['vin'] as const,
  decode: (vin: string, modelyear?: number) => ["vin", "decode", vin, modelyear] as const,
};