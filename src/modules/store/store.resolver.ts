import { PaginationDto } from '@dtos/pagination.dto';
import { UpdateStoreDto } from '@dtos/store/update-store.dto';
import { CreateStoreDto } from '@dtos/store/create-store.dto';
import { StoreService } from './store.service';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Store } from '@entities/store.entity';

@Resolver(() => Store)
export class StoreResolver {
  constructor(private storeService: StoreService) {}

  @Mutation(() => Store)
  async createStore(@Args('data') dto: CreateStoreDto): Promise<Store> {
    return this.storeService.create(dto);
  }

  @Query(() => [Store], { name: 'stores' })
  async findAll(
    @Args('pagination', {
      defaultValue: {
        page: 1,
        maxResultPerPage: 100,
      },
    })
    pagination?: PaginationDto,
  ): Promise<Store[]> {
    return this.storeService.findAll(pagination);
  }

  @Query(() => Store, { name: 'store' })
  async findOne(@Args('id') id: string): Promise<Store> {
    return this.storeService.findOne(id);
  }

  @Mutation(() => Store)
  async updateStore(
    @Args('id') id: string,
    @Args('data') dto: UpdateStoreDto,
  ): Promise<Store> {
    return this.storeService.update(id, dto);
  }

  @Mutation(() => Boolean)
  async removeStore(@Args('id') id: string): Promise<boolean> {
    return this.storeService.remove(id);
  }
}
