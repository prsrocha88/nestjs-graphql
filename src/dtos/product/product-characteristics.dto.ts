import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class ProductCharacteristicsDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  size?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  sizeSystem?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  gender?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  ageGroup?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  color?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  weight?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  height?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  width?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  length?: string;
}
