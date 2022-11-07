export interface IUsers {
  userName: string;
  password: string | null;
  usersID: string;
  id: string;
  fullName: string;
  confirmPassword: string;
}

export interface IRoles {
  id: string;
  name: string;
}


export interface IUserRoles {
  userId: string;
  id: number;
  claimValue: string;
  claimType: string;
}

export interface LoginVm {
  userName: string;
  password: string;
}
