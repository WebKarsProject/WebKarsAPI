import { PrimaryGeneratedColumn, Entity, Column } from "typeorm";

@Entity("adresses")
class Address {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 8 })
  zipcode: number;

  @Column({ length: 100 })
  city: string;

  @Column({ length: 100 })
  street: string;

  @Column({ length: 2 })
  state: string;

  @Column()
  number: string;

  @Column({ nullable: true })
  complement: string;
}

export default Address;
