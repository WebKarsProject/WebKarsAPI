import {
  PrimaryGeneratedColumn,
  Entity,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import User from '../user';
import Image from '../image';
import Comment from '../comments';

@Entity('vehicles')
class Vehicle {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  brand: string;

  @Column()
  model: string;

  @Column()
  year: string;

  @Column()
  fuel: string;

  @Column()
  color: string;

  @Column()
  mileage: number;

  @Column()
  price: number;

  @Column()
  fipe: number;

  @Column()
  description: string;

  @Column()
  published: boolean;

  @ManyToOne(() => User, (users) => users.vehicle)
  user: User;

  @OneToMany(() => Image, (images) => images.vehicle)
  images: Image[];

  @OneToMany(() => Comment, (comments) => comments.vehicle)
  comments: Comment[];
}

export default Vehicle;
