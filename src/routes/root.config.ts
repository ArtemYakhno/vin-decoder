export const RoutePath = {
  Default: '/',
  Home: '/home',
  Variables: '/variables',
  VariableDetailes: '/variables/:id',
  NotFound: '*',
} as const;

export type RoutePath = (typeof RoutePath)[keyof typeof RoutePath];


// export const getPath = {
//   editPetProfile: (id: number | string) => `/edit-pet-profile/${id}`,
//   pet: (id: number | string) => `/pets/${id}`,
// };
