import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Email {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  recipient: string;

  @Column()
  subject: string;

  @Column()
  message: string;

  @Column({ default: false })
  sent: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  response: string;
}
