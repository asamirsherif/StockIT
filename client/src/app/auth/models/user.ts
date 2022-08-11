import { Role } from './role';

export class User {
  id: number;
  username: string;
  phone: string;
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  avatar: string;
  role_id: number;
  status: number;
  access_token: string;
  permissions: string[];
}
