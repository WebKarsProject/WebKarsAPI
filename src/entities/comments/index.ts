import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import User from '../user';
import Vehicle from '../vehicle';

@Entity('comments')
class Comment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 256 })
  description: string;

  @ManyToOne(() => User)
  user: User;

  @ManyToOne(() => Vehicle)
  vehicle: Vehicle;
}

export default Comment;
