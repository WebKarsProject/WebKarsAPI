import { hashSync } from "bcryptjs";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeUpdate,
  BeforeInsert,
  OneToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import Address from "../address";
import Vehicle from "../vehicle";
import Comment from "../comments";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 50 })
  name: string;

  @Column({ length: 100, unique: true })
  email: string;

  @Column({ length: 150 })
  cpf: string;

  @Column({ length: 11 })
  phone: string;

  @Column({ length: 150 })
  password: string;

  @Column({ type: "date" })
  birthday: Date;

  @Column({ nullable: true })
  description: string;

  @Column({ default: true })
  buyer: boolean;

  @Column({ type: "uuid", nullable: true })
  reset_token: string;

  @BeforeUpdate()
  @BeforeInsert()
  hashPassword() {
    this.password = hashSync(this.password, 10);
  }

  @BeforeUpdate()
  @BeforeInsert()
  hashCpf() {
    this.cpf = hashSync(this.cpf, 10);
  }

  @OneToOne(() => Address)
  @JoinColumn()
  address: Address;

  @OneToMany(() => Vehicle, (vehicles) => vehicles.user)
  vehicle: Vehicle[];

  @OneToMany(() => Comment, (comments) => comments.user)
  comments: Comment[];
}

export default User;
