import { UpdateStoreDto } from './../../dtos/store/update-store.dto';
import { CreateStoreDto } from '../../dtos/store/create-store.dto';
import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Store } from './store.entity';

@Injectable()
export class StoreService {
  constructor(
    @Inject('STORE_REPOSITORY')
    private storeRepository: Repository<Store>,
  ) {}

  async create(dto: CreateStoreDto): Promise<Store> {
    const store = this.storeRepository.create(dto);
    return this.storeRepository.save(store);
  }

  async findAll(): Promise<Store[]> {
    return this.storeRepository.find();
  }

  async findOne(id: string): Promise<Store> {
    return this.storeRepository.findOne(id);
  }

  async update(id: string, dto: UpdateStoreDto): Promise<Store> {
    const store = await this.storeRepository.findOne(id);
    console.log(store)
    await this.storeRepository.update(store, { ...dto });
    return this.storeRepository.create({ ...store, ...dto });
  }

  async remove(id: string): Promise<boolean> {
    const deleted = await this.storeRepository.delete(id);
    return !!deleted;
  }
}