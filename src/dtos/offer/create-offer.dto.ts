import { InputType } from '@nestjs/graphql';
import {
  IsBoolean,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import { Condition } from 'src/enums/condition.enum';

@InputType()
export class CreateOfferDto {
  @IsUUID()
  storeId: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  price: number;

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
  link: string;

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
