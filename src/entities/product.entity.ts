
import { Category } from './category.entity';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Offer } from './offer.entity';
import { ProductImage } from './product-image.entity';
import { ProductSku } from './product-sku.entity';
import { DateColumns } from './date-columns.entity';

@ObjectType()
export class ProductCharacteristics {
  size?: string;
  sizeSystem?: string;
  gender?: string;
  ageGroup?: string;
  color?: string;
  weight?: string;
  height?: string;
  width?: string;
  length?: string;
}

@ObjectType()
@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  description?: string;

  @Column()
  brand: string;

  @Column({ default: true })
  active: boolean;

  @Column({
    type: 'jsonb',
    nullable: true,
  })
  characteristics?: ProductCharacteristics;

  @Column(() => DateColumns, { prefix: false })
  dateColumns: DateColumns;

  @OneToMany(() => Offer, (offer) => offer.product, { eager: true })
  offers?: Offer[];

  @OneToMany(() => ProductImage, (image) => image.product, {
    cascade: true,
    eager: true,
  })
  images?: ProductImage[];

  @OneToMany(() => ProductSku, (sku) => sku.product, {
    cascade: true,
    eager: true,
  })
  skus?: ProductSku[];

  @ManyToMany(() => Category, { eager: true })
  @JoinTable({ name: 'product_category' })
  categories: Category[];
}
