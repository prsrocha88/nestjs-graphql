import { PaginationDto } from '@dtos/pagination.dto';
import { Repository } from 'typeorm';
import { Inject, Injectable } from '@nestjs/common';
import { CreateOfferDto } from '@dtos/offer/create-offer.dto';
import { UpdateOfferDto } from '@dtos/offer/update-offer.dto';
import { Offer } from '@entities/offer.entity';
import { getPaginationQuery } from '@utils/utils';
import { Product } from '@entities/product.entity';
import { Store } from '@entities/store.entity';

@Injectable()
export class OfferService {
  constructor(
    @Inject('OFFER_REPOSITORY')
    private offerRepository: Repository<Offer>,
    @Inject('STORE_REPOSITORY')
    private storeRepository: Repository<Store>,
    @Inject('PRODUCT_REPOSITORY')
    private productRepository: Repository<Product>,
  ) {}

  async create(dto: CreateOfferDto): Promise<Offer> {
    const store = await this.storeRepository.findOne(dto.storeId);
    const product = await this.productRepository.findOne(dto.productId);
    const offer = this.offerRepository.create({ ...dto, store, product });
    return this.offerRepository.save(offer);
  }

  async findAll(pagination: PaginationDto): Promise<Offer[]> {
    return this.offerRepository.find(getPaginationQuery(pagination));
  }

  async findOne(id: string): Promise<Offer> {
    return this.offerRepository.findOne(id);
  }

  async update(id: string, dto: UpdateOfferDto): Promise<Offer> {
    const offer = await this.offerRepository.findOne(id);
    await this.offerRepository.update(id, { ...dto });
    return this.offerRepository.create({ ...offer, ...dto });
  }

  async remove(id: string): Promise<boolean> {
    const deleted = await this.offerRepository.delete(id);
    return !!deleted;
  }
}
