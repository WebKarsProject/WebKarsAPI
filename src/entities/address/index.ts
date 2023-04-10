import {
  PrimaryGeneratedColumn,
  Entity,
  Column,
} from "typeorm";

@Entity('adresses')
class Address {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  zipcode: number

  @Column()
  city: string

  @Column()
  street: string

  @Column()
  state: string

  @Column()
  number: string

  @Column()
  complement: string
}

export default Address