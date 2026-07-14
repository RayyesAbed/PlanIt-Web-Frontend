export type Subscription = {
  name: string;
  features: [string];
  price: number;
  currency: string;
};

export type User = {
  id: string;
  name: string;
  confirmedEmail: string;
  birthDate: string;
  preferredLanguage: string;
  points: number;
  picture: string;
  subscription: Subscription;
};

export type GetUserDataQuery = {
  getUserData: User;
};
