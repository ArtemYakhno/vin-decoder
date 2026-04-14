export const variablesKeys = {
  all: ['variables'] as const,
  variableById: (id: string) => [...variablesKeys.all, id] as const,
};