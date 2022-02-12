import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { DateColumns } from './date-columns.entity';
import { Offer } from './offer.entity';

@ObjectType()
@Entity()
export class Store {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  image?: string;

  @Column({ default: true })
  active?: boolean;

  @Column(() => DateColumns, { prefix: false })
  dateColumns: DateColumns;

  @OneToMany(() => Offer, (offer) => offer.store, { eager: true })
  offers?: Offer[];
}
