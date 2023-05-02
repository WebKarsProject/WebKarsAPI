import { PrimaryGeneratedColumn, Entity, Column, ManyToOne } from 'typeorm';
import Vehicle from '../vehicle';

@Entity('images')
class Image {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  img_url: string;

  @ManyToOne(() => Vehicle, (vehicles) => vehicles.images, {
    onDelete: 'CASCADE',
  })
  vehicle: Vehicle;
}

export default Image;
