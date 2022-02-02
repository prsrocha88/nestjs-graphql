import { InputType } from '@nestjs/graphql';
import {
  IsBoolean,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Condition } from '@enums/condition.enum';

@InputType()
export class UpdateOfferDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  name?: string;

  @IsNumber()
  @IsOptional()
  price?: number;

  @IsNumber()
  @IsOptional()
  salePrice?: number;

  @IsBoolean()
  @IsOptional()
  availability?: boolean;

  @IsInt()
  @IsOptional()
  stock?: number;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  link?: string;

  @IsNumber()
  @IsOptional()
  shippingCost?: number;

  @IsNumber()
  @IsOptional()
  deliveryTime?: number;

  @IsNumber()
  @IsOptional()
  rating?: number;

  @IsEnum(Condition)
  @IsOptional()
  condition?: Condition;

  @IsBoolean()
  @IsOptional()
  active?: boolean;
}
