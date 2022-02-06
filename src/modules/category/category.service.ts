import { PaginationDto } from '@dtos/pagination.dto';
import { Inject, Injectable } from '@nestjs/common';
import { Category } from '@entities/category.entity';
import { CreateCategoryDto } from '@dtos/category/create-category.dto';
import { UpdateCategoryDto } from '@dtos/category/update-category.dto';
import { Repository } from 'typeorm';
import { getPaginationQuery } from 'src/utils/utils';

@Injectable()
export class CategoryService {
  constructor(
    @Inject('CATEGORY_REPOSITORY')
    private categoryRepository: Repository<Category>,
  ) {}

  async create(dto: CreateCategoryDto): Promise<Category> {
    const category = this.categoryRepository.create(dto);
    return this.categoryRepository.save(category);
  }

  async findAll(pagination: PaginationDto): Promise<Category[]> {
    return this.categoryRepository.find(getPaginationQuery(pagination));
  }

  async findOne(id: string): Promise<Category> {
    return this.categoryRepository.findOne(id);
  }

  async update(id: string, dto: UpdateCategoryDto): Promise<Category> {
    const category = await this.categoryRepository.findOne(id);
    await this.categoryRepository.update(category, { ...dto });
    return this.categoryRepository.create({ ...category, ...dto });
  }

  async remove(id: string): Promise<boolean> {
    const deleted = await this.categoryRepository.delete(id);
    return !!deleted;
  }
}
