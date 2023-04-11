import { hashSync } from 'bcryptjs';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeUpdate,
  BeforeInsert,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';

import Address from '../address';
import Vehicle from '../vehicle';
import Comment from '../comments';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  cpf: string;

  @Column({ length: 11 })
  phone: string;

  @Column()
  password: string;

  @Column()
  birthday: Date;

  @Column()
  description: string;

  @Column()
  buyer: boolean;

  @BeforeUpdate()
  @BeforeInsert()
  hashPassword() {
    this.password = hashSync(this.password, 10);
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
