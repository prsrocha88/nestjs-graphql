import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path/posix';
import { StoreModule } from './modules/store/store.module';
import { OfferModule } from './modules/offer/offer.module';
import { ProductModule } from './modules/product/product.module';
import { CategoryModule } from './modules/category/category.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    StoreModule,
    OfferModule,
    ProductModule,
    CategoryModule,
  ],
})
export class AppModule {}
