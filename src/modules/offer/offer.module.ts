import { Module } from '@nestjs/common';
import { OfferService } from './offer.service';
import { OfferResolver } from './offer.resolver';
import { DatabaseModule } from '@database/database.module';
import { offerProviders } from 'src/database/repository.providers';

@Module({
  imports: [DatabaseModule],
  providers: [OfferResolver, OfferService, ...offerProviders],
})
export class OfferModule {}
