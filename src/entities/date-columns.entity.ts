import { ObjectType } from '@nestjs/graphql';
import { IsDate } from 'class-validator';
import { CreateDateColumn, UpdateDateColumn } from 'typeorm';

@ObjectType({ isAbstract: true })
export class DateColumns {
  @IsDate()
  @CreateDateColumn()
  createdAt: Date;

  @IsDate()
  @UpdateDateColumn()
  updatedAt: Date;
}
