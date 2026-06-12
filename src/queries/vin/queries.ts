import { useQuery } from '@tanstack/react-query';
import { vinKeys } from './keys';
import { NHTSAServices } from '../../api/services/nhtsa';
import type { TDecodeResponse } from '../../schemas/vin/decode';

export const useDecodeVin = (vin: string, modelyear?: number) =>
  useQuery<TDecodeResponse>({
    queryKey: vinKeys.decode(vin, modelyear),
    queryFn: () => NHTSAServices.decodeVin(vin, { modelyear }),
    enabled: !!vin,
    staleTime: 1000 * 60 * 10,
    meta: { suppressGlobalError: true },
  });