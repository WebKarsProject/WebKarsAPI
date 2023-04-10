import { hashSync } from "bcryptjs";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeUpdate,
  BeforeInsert,
  OneToOne,
  JoinColumn,
} from "typeorm";

import Address from "../address";

@Entity('users')
class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string

  @Column()
  email: string

  @Column()
  cpf: string

  @Column({ length: 11 })
  phone: string

  @Column()
  password: string

  @Column()
  birthday: Date

  @Column()
  description: string

  @Column()
  buyer: boolean

  @BeforeUpdate()
  @BeforeInsert()
  hashPassword() {
    this.password = hashSync(this.password, 10);
  }

  @OneToOne(() => Address) @JoinColumn()
  address: Address
}

export default User;