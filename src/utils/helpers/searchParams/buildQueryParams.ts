export const buildQueryParams= (params: Record<string, string | number | boolean | undefined>): string => {
  const search = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      search.append(key, String(value));
    }
  });

  return search.toString();
};