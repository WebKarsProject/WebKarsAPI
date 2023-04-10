import { hashSync } from "bcryptjs";
import {
  PrimaryGeneratedColumn,
  Entity,
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
  cpf: number

  @Column({ length: 11 })
  phone: number

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