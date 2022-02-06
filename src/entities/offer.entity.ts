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
import { Product } from './product.entity';

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

  @ManyToOne(() => Store, (store) => store.offers, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'store_id' })
  store: Store;

  @ManyToOne(() => Product, (product) => product.offers, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'product_id' })
  product: Product;
}
