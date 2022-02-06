import { Inject, Injectable } from '@nestjs/common';
import { UpdateProductDto } from '@dtos/product/update-product.dto';
import { CreateProductDto } from '@dtos/product/create-product.dto';
import { Repository } from 'typeorm';
import { Product } from '@entities/product.entity';
import { PaginationDto } from '@dtos/pagination.dto';
import { getPaginationQuery } from '@utils/utils';
import { Category } from '@entities/category.entity';

@Injectable()
export class ProductService {
  constructor(
    @Inject('PRODUCT_REPOSITORY')
    private productRepository: Repository<Product>,
    @Inject('CATEGORY_REPOSITORY')
    private categoryRepository: Repository<Category>,
  ) {}

  async create(dto: CreateProductDto): Promise<Product> {
    const categories = await this.categoryRepository.findByIds(dto.categories);
    const product = this.productRepository.create({ ...dto, categories });
    return this.productRepository.save(product);
  }

  async findAll(pagination: PaginationDto): Promise<Product[]> {
    return this.productRepository.find(getPaginationQuery(pagination));
  }

  async findOne(id: string): Promise<Product> {
    return this.productRepository.findOne(id);
  }

  async update(id: string, dto: UpdateProductDto): Promise<Product> {
    const product = await this.productRepository.findOne(id);
    await this.productRepository.update(product, { ...dto });
    return this.productRepository.create({ ...product, ...dto });
  }

  async remove(id: string): Promise<boolean> {
    const deleted = await this.productRepository.delete(id);
    return !!deleted;
  }
}
