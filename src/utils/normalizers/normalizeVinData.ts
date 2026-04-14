import type { TDecodeItem } from "../../schemas/vin/decode.schema";

interface INormalizedVINData {
  normalizedData: TDecodeItem[];
  hasErrors: boolean;
  errorText: string | null;
  additionalErrorText: string | null;
}

const NHTSA_META_IDS = {
  SUGGESTED_VIN: 142,
  ERROR_CODE: 143,
  POSSIBLE_VALUES: 144,
  ADDITIONAL_ERROR_TEXT: 156,
  ERROR_TEXT: 191,
  VEHICLE_DESCRIPTOR: 196,
} as const;

const META_IDS = new Set<number>(Object.values(NHTSA_META_IDS));

const findValue = (results: TDecodeItem[], id: number) =>
  results.find((r) => r.VariableId === id)?.Value ?? null;

const isMetaField = (r: TDecodeItem) => META_IDS.has(r.VariableId);
const hasValue = (r: TDecodeItem) => r.Value !== null && r.Value !== "";

export const normalizeVinData = (data: TDecodeItem[]): INormalizedVINData => {
  const normalizedData = data.filter((r) => !isMetaField(r) && hasValue(r));
  const errorCode = findValue(data, NHTSA_META_IDS.ERROR_CODE);
  // const errors = results.filter(r => isMetaField(r) && hasValue(r));
  const errorText = findValue(data, NHTSA_META_IDS.ERROR_TEXT);
  const additionalErrorText = findValue(
    data,
    NHTSA_META_IDS.ADDITIONAL_ERROR_TEXT,
  );

  return {
    normalizedData,
    hasErrors: errorCode !== "0",
    errorText,
    additionalErrorText,
  };
};
