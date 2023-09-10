import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class UserSchema {
  @PrimaryGeneratedColumn() id?: number;
  @Column() username: string;
  @Column() email: string;
  @Column() password: string;
  @Column() createdAt: Date;
  @Column() updatedAt: Date;
  constructor(data: UserSchema) {
    this.id = data?.id;
    this.username = data?.username;
    this.email = data?.email;
    this.password = data?.password;
    this.createdAt = data?.createdAt;
    this.updatedAt = data?.updatedAt;
  }
}
