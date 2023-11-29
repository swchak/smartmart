import { Column, PrimaryGeneratedColumn, Entity } from "typeorm";

@Entity({ name: "user", schema: "public", synchronize: true })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({
    unique: true,
  })
  email: string;

  @Column()
  password: string;
}
