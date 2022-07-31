/**
 * IR - input registration
 * IU - input update
 * M - model
 */

export type MUser = {
  error: boolean;
  data: User[];
};
export type User = {
  _id: string;
  gender: string;
  fullName: string;
  address: string;
  birthDate: string;
  age: number;
  account: {
    _id: string;
    accessLevel: string;
    email: string;
    mobileNumber: string;
    isActive: boolean;
  };
};
export type IRUser = {
  fullName: string;
  mobileNumber: string;
};
