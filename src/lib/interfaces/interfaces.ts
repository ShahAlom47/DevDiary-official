export interface User {
  email: string;
  name: string;
  password: string;
  role?: string;
  photoUrl?: string | null;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}