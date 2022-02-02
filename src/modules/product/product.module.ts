import { DatabaseModule } from '@database/database.module';
import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductResolver } from './product.resolver';
import { productProviders } from '@database/repository.providers';

@Module({
  imports: [DatabaseModule],
  providers: [ProductResolver, ProductService, ...productProviders],
})
export class ProductModule {}
