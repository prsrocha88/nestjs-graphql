import { DatabaseModule } from './../../database/database.module';
import { Module } from '@nestjs/common';
import { StoreResolver } from './store.resolver';
import { StoreService } from './store.service';
import { storeProviders } from '../../database/repository.providers';

@Module({
  imports: [DatabaseModule],
  providers: [StoreResolver, StoreService, ...storeProviders],
})
export class StoreModule {}
