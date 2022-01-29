import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { OfferService } from './offer.service';
import { Offer } from '../../entities/offer.entity';
import { CreateOfferDto } from '../../dtos/offer/create-offer.dto';
import { UpdateOfferDto } from '../../dtos/offer/update-offer.dto';
import { PaginationDto } from '../../dtos/pagination.dto';

@Resolver(() => Offer)
export class OfferResolver {
  constructor(private readonly offerService: OfferService) {}

  @Mutation(() => Offer)
  async createOffer(@Args('data') dto: CreateOfferDto): Promise<Offer> {
    return this.offerService.create(dto);
  }

  @Query(() => [Offer], { name: 'offers' })
  async findAll(
    @Args('pagination', {
      defaultValue: {
        page: 1,
        maxResultPerPage: 100,
      },
    })
    pagination?: PaginationDto,
  ): Promise<Offer[]> {
    return this.offerService.findAll(pagination);
  }

  @Query(() => Offer, { name: 'offer' })
  async findOne(@Args('id') id: string): Promise<Offer> {
    return this.offerService.findOne(id);
  }

  @Mutation(() => Offer)
  async updateOffer(@Args('id') id: string, @Args('data') dto: UpdateOfferDto) {
    return this.offerService.update(id, dto);
  }

  @Mutation(() => Boolean)
  async removeOffer(@Args('id') id: string): Promise<boolean> {
    return this.offerService.remove(id);
  }
}
