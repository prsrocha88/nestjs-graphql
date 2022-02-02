import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProductService } from './product.service';
import { Product } from '@entities/product.entity';
import { UpdateProductDto } from '@dtos/product/update-product.dto';
import { CreateProductDto } from '@dtos/product/create-product.dto';
import { PaginationDto } from '@dtos/pagination.dto';

@Resolver(() => Product)
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Mutation(() => Product)
  async createProduct(@Args('data') dto: CreateProductDto): Promise<Product> {
    return this.productService.create(dto);
  }

  @Query(() => [Product], { name: 'products' })
  async findAll(
    @Args('pagination', {
      defaultValue: {
        page: 1,
        maxResultPerPage: 100,
      },
    })
    pagination?: PaginationDto,
  ): Promise<Product[]> {
    return this.productService.findAll(pagination);
  }

  @Query(() => Product, { name: 'product' })
  async findOne(@Args('id') id: string): Promise<Product> {
    return this.productService.findOne(id);
  }

  @Mutation(() => Product)
  async updateProduct(
    @Args('id') id: string,
    @Args('data') dto: UpdateProductDto,
  ): Promise<Product> {
    return this.productService.update(id, dto);
  }

  @Mutation(() => Boolean)
  async removeProduct(@Args('id') id: string): Promise<boolean> {
    return this.productService.remove(id);
  }
}
