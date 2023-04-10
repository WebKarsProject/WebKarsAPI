import {
  PrimaryGeneratedColumn,
  Entity,
  Column,
} from "typeorm";

@Entity('vehicles')
class Vehicle {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  brand: string

  @Column()
  model: string

  @Column()
  year: Date

  @Column()
  fuel: string

  @Column()
  mileage: number

  @Column()
  price: number

  @Column()
  fipe: number

  @Column()
  description: string

  @Column()
  published: boolean
}

export default Vehicle