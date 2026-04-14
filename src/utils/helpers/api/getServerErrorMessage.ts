import { isAxiosError } from 'axios';

export const getServerErrorMessage = (error: unknown, fallback = 'Something went wrong'): string => {
  if (isAxiosError(error)) {
    return error.message ?? fallback;
  }

  if (error instanceof Error) {
    return error.message;
  }

  return fallback;
};