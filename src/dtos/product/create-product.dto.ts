import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsNotEmpty,
  IsNotEmptyObject,
  IsOptional,
  IsString,
  IsUUID,
  ValidateNested,
} from 'class-validator';
import { ProductCharacteristicsDto } from './product-characteristics.dto';

@InputType()
export class CreateProductDto {
  @IsUUID()
  id: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  description?: string;

  @IsString()
  @IsNotEmpty()
  brand: string;

  @IsBoolean()
  @IsOptional()
  active?: boolean;

  @Type(() => ProductCharacteristicsDto)
  @ValidateNested()
  @IsNotEmptyObject()
  @IsOptional()
  characteristics?: ProductCharacteristicsDto;
}
