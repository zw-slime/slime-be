export interface PageInfo {
  pn: number;
  ps: number;
}

export interface CreateUser {
  userName: string;
  email: string;
  password: string;
}

export interface Search extends PageInfo {
  search: string;
}
