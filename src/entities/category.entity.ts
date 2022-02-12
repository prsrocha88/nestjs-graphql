import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { DateColumns } from './date-columns.entity';

@ObjectType()
@Entity()
export class Category {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @Column()
  name: string;

  @Column({ nullable: false })
  description?: string;

  @Column(() => DateColumns, { prefix: false })
  dateColumns: DateColumns;
}
