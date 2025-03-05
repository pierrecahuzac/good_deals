export class UserDTO {
  id: string;
  email: string;
  username: string | null;
  password: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
}
