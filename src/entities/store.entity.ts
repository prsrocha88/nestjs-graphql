import { Field, HideField, ID, ObjectType } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
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

  @HideField()
  @OneToMany(() => Offer, offer => offer.store)
  offers?: Offer[];
}
