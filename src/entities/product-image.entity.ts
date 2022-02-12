import { Column, JoinColumn } from 'typeorm';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './product.entity';
import { DateColumns } from './date-columns.entity';

@ObjectType()
@Entity()
export class ProductImage {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @Column()
  source: string;

  @Column({ default: false })
  default: boolean;

  @Column(() => DateColumns, { prefix: false })
  dateColumns: DateColumns;

  @ManyToOne(() => Product, (product) => product.images, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'product_id' })
  product: Product;
}
