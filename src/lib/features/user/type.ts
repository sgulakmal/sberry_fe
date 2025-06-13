export interface UserState {
  user?: AuthUser;
}

export interface LoginResponse {
  access_token: string;
  user?: User;
}

export interface User {
  userId: string,
  email: string,
  username: string,
  firstName: string,
  lastName: string,
  profilePictureUrl: string,
  isAdmin: boolean,
  companyId: string,
  companyBranchId: string,
  designation: string
}

export interface AuthUser extends User {
  id: string,
  access_token: string;
}
