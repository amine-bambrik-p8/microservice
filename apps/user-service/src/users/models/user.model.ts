interface IEditUser {
  username?: string;
  email?: string;
}
interface IUser {
  id?: number;
  username: string;
  email: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
}
export class User {
  #data: IUser;
  get id() {
    return this.#data.id;
  }
  get username() {
    return this.#data.username;
  }
  get email() {
    return this.#data.email;
  }
  get password() {
    return this.#data.password;
  }
  get createdAt() {
    return this.#data.createdAt;
  }
  get updatedAt() {
    return this.#data.updatedAt;
  }

  constructor(data: IUser) {
    this.#data = data;
  }
  edit({ username, email }: IEditUser) {
    this.#data.username = username ?? this.#data.username;
    this.#data.email = email ?? this.#data.email;
  }

  getData() {
    return this.#data;
  }
}
