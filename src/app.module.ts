import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path/posix';
import { StoreModule } from './modules/store/store.module';
import { OfferModule } from './modules/offer/offer.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    StoreModule,
    OfferModule,
  ],
})
export class AppModule {}
