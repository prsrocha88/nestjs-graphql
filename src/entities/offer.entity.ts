import { ObjectType, Field, ID } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Condition } from '../enums/condition.enum';
import { Store } from './store.entity';

@ObjectType()
@Entity()
export class Offer {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column({ nullable: true })
  salePrice?: number;

  @Column({ nullable: true })
  availability?: boolean;

  @Column({ nullable: true })
  stock?: number;

  @Column()
  link: string;

  @Column({ nullable: true })
  shippingCost?: number;

  @Column({ nullable: true })
  deliveryTime?: number;

  @Column({ nullable: true })
  rating?: number;

  @Column({
    type: 'enum',
    enum: Condition,
    default: Condition.NEW,
  })
  condition: Condition;

  @Column({ default: true })
  active: boolean;

  @ManyToOne(() => Store, store => store.offer, { nullable: false })
  @JoinColumn({ name: 'store_id' })
  store: Store;
}
