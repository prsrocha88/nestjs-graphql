import { Inject, Injectable } from '@nestjs/common';
import { UpdateProductDto } from '@dtos/product/update-product.dto';
import { CreateProductDto } from '@dtos/product/create-product.dto';
import { Repository } from 'typeorm';
import { Offer } from '@entities/offer.entity';
import { Store } from '@entities/store.entity';
import { Product } from '@entities/product.entity';
import { PaginationDto } from '@dtos/pagination.dto';

@Injectable()
export class ProductService {
  constructor(
    @Inject('PRODUCT_REPOSITORY')
    private productRepository: Repository<Product>,
    @Inject('OFFER_REPOSITORY')
    private offerRepository: Repository<Offer>,
    @Inject('STORE_REPOSITORY')
    private storeRepository: Repository<Store>,
  ) {}

  async create(dto: CreateProductDto): Promise<Product> {
    return;
  }

  async findAll(pagination: PaginationDto): Promise<Product[]> {
    return;
  }

  async findOne(id: string): Promise<Product> {
    return;
  }

  async update(id: string, dto: UpdateProductDto): Promise<Product> {
    return;
  }

  async remove(id: string): Promise<boolean> {
    return;
  }
}
