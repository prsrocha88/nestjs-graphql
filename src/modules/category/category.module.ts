import { DatabaseModule } from '@database/database.module';
import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryResolver } from './category.resolver';
import { categoryProviders } from '@database/repository.providers';

@Module({
  imports: [DatabaseModule],
  providers: [CategoryResolver, CategoryService, ...categoryProviders],
})
export class CategoryModule {}
