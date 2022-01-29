import { FindManyOptions } from 'typeorm';
import { PaginationDto } from './../dtos/pagination.dto';

export function getPaginationQuery(pagination: PaginationDto): FindManyOptions {
  return {
    skip: (pagination.page - 1) * pagination.maxResultPerPage,
    take: pagination.maxResultPerPage,
  };
}
