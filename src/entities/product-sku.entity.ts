import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { DateColumns } from './date-columns.entity';
import { Product } from './product.entity';

@ObjectType()
@Entity()
export class ProductSku {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @Column()
  sku: string;

  @Column(() => DateColumns, { prefix: false })
  dateColumns: DateColumns;

  @ManyToOne(() => Product, (product) => product.skus, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'product_id' })
  product: Product;
}
