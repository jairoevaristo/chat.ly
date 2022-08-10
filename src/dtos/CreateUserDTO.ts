export interface ICreateUserDTO {
  name: string;
  email: string;
  occupation: string;
  avatar: File[];
  password: string;
}