import { registerEnumType } from '@nestjs/graphql';

export enum Condition {
  NEW = 'new',
  USER = 'used',
  REFURBISHED = 'refurbished',
}

registerEnumType(Condition, { name: 'Condition' });
