export interface User {
  id: number;
  name: string;
  email: string;
}

export interface NewUser {
  name: string;
  email: string;
}

export interface SessionPayload {
  id: number;
  email: string;
}
