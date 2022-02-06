import { InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class ProductSkuDto {
  @IsString()
  @IsNotEmpty()
  sku: string;
}
