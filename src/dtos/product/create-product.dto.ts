import { ProductSkuDto } from './product-sku.dto';
import { ProductImageDto } from './product-image.dto';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import {
  IsArray,
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
  @IsUUID(undefined, { each: true })
  categories: string[];

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

  @IsArray()
  @Type(() => ProductImageDto)
  @ValidateNested({ each: true })
  @IsOptional()
  images?: ProductImageDto[];

  @IsArray()
  @Type(() => ProductSkuDto)
  @ValidateNested({ each: true })
  @IsOptional()
  skus?: ProductSkuDto[];
}
