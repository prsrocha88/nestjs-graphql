import { Store } from './../../entities/store.entity';
import { PaginationDto } from './../../dtos/pagination.dto';
import { Repository } from 'typeorm';
import { Inject, Injectable } from '@nestjs/common';
import { CreateOfferDto } from '../../dtos/offer/create-offer.dto';
import { UpdateOfferDto } from '../../dtos/offer/update-offer.dto';
import { Offer } from '../../entities/offer.entity';
import { getPaginationQuery } from '../../utils/utils';

@Injectable()
export class OfferService {
  constructor(
    @Inject('OFFER_REPOSITORY')
    private offerRepository: Repository<Offer>,
    @Inject('STORE_REPOSITORY')
    private storeRepository: Repository<Store>,
  ) {}

  async create(dto: CreateOfferDto): Promise<Offer> {
    const store = await this.storeRepository.findOne(dto.storeId);
    const offer = this.offerRepository.create({ ...dto, store });
    return this.offerRepository.save(offer);
  }

  async findAll(pagination: PaginationDto): Promise<Offer[]> {
    return this.offerRepository.find(getPaginationQuery(pagination));
  }

  async findOne(id: string): Promise<Offer> {
    return this.offerRepository.findOne(id);
  }

  async update(id: string, dto: UpdateOfferDto) {
    const offer = await this.offerRepository.findOne(id);
    await this.offerRepository.update(offer, { ...dto });
    return this.offerRepository.create({ ...offer, ...dto });
  }

  async remove(id: string) {
    const deleted = await this.offerRepository.delete(id);
    return !!deleted;
  }
}
