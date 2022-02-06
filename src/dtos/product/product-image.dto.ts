import { InputType } from '@nestjs/graphql';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

@InputType()
export class ProductImageDto {
  @IsString()
  @IsNotEmpty()
  source: string;

  @IsBoolean()
  @IsOptional()
  default?: boolean;
}
