import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CategoryService } from './category.service';
import { Category } from '@entities/category.entity';
import { CreateCategoryDto } from '@dtos/category/create-category.dto';
import { UpdateCategoryDto } from '@dtos/category/update-category.dto';
import { PaginationDto } from '@dtos/pagination.dto';

@Resolver(() => Category)
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  @Mutation(() => Category)
  async createCategory(
    @Args('data') dto: CreateCategoryDto,
  ): Promise<Category> {
    return this.categoryService.create(dto);
  }

  @Query(() => [Category], { name: 'categories' })
  async findAll(
    @Args('pagination', {
      defaultValue: {
        page: 1,
        maxResultPerPage: 100,
      },
    })
    pagination?: PaginationDto,
  ): Promise<Category[]> {
    return this.categoryService.findAll(pagination);
  }

  @Query(() => Category, { name: 'category' })
  async findOne(@Args('id') id: string): Promise<Category> {
    return this.categoryService.findOne(id);
  }

  @Mutation(() => Category)
  async updateCategory(
    @Args('id') id: string,
    @Args('data') dto: UpdateCategoryDto,
  ): Promise<Category> {
    return this.categoryService.update(id, dto);
  }

  @Mutation(() => Boolean)
  async removeCategory(@Args('id') id: string): Promise<boolean> {
    return this.categoryService.remove(id);
  }
}
