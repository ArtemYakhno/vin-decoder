import { useQuery } from "@tanstack/react-query";
import { NHTSAServices } from "../../api/services/NHTSA.services";
import { variablesKeys } from "./variables.keys";
import type { TVariablesResponse } from "../../schemas/variables/variables.schema";
import type { TVariableValuesResponse } from "../../schemas/variables/variableValues.schema";

export const useVariables = () =>
  useQuery<TVariablesResponse>({
    queryKey: variablesKeys.all,
    queryFn: () => NHTSAServices.getVariables(),
    staleTime: 1000 * 60 * 10,
    meta: { suppressGlobalError: false },
  });

export const useVariableValues = (value: string) =>
  useQuery<TVariableValuesResponse>({
    queryKey: variablesKeys.variableById(value),
    queryFn: () => NHTSAServices.getVariableValues(value),
    staleTime: 1000 * 60 * 10,
    enabled: !!value,
    meta: { suppressGlobalError: true },
  });
