import { safeRequest } from "../../utils/helpers/api/safeRequest";
import {
  DecodeResponseSchema,
  type TDecodeResponse,
} from "../../schemas/vin/decode.schema";
import { axiosClient } from "../axiosClient";
import { buildQueryParams } from "../../utils/searchParams/buildQueryParams";
import { VariablesResponseSchema, type TVariablesResponse } from "../../schemas/variables/variables.schema";
import { VariableValuesResponseSchema, type TVariableValuesResponse } from "../../schemas/variables/variableValues.schema";

export interface IDecodeQueryParams {
  modelyear?: number;
}

export const NHTSAServices = {
  decodeVin: (
    vin: string,
    params?: IDecodeQueryParams,
  ): Promise<TDecodeResponse> => {
    const queryParams = buildQueryParams({ format: "json", ...params });
    return safeRequest(
      axiosClient.get(`vehicles/decodevin/${vin}?${queryParams}`),
      DecodeResponseSchema,
    );
  },

  getVariables: (): Promise<TVariablesResponse> =>
    safeRequest(
      axiosClient.get(`vehicles/getvehiclevariablelist?format=json`),
      VariablesResponseSchema,
    ),

  getVariableValues: (value: string): Promise<TVariableValuesResponse> =>
    safeRequest(
      axiosClient.get(
        `vehicles/getvehiclevariablevalueslist/${value}?format=json`,
      ),
      VariableValuesResponseSchema,
    ),
};
