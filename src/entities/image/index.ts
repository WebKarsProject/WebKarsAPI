import {
  PrimaryGeneratedColumn,
  Entity,
  Column,
} from "typeorm";

@Entity('images')
class Image {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  img_url: string


}

export default Image