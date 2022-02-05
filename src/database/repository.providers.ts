import { Product } from '@entities/product.entity';
import { Offer } from '@entities/offer.entity';
import { Store } from '@entities/store.entity';
import { Connection } from 'typeorm';

export const storeProviders = [
  {
    provide: 'STORE_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Store),
    inject: ['POSTGRES_CONNECTION'],
  },
];

export const offerProviders = [
  {
    provide: 'OFFER_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Offer),
    inject: ['POSTGRES_CONNECTION'],
  },
  {
    provide: 'STORE_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Store),
    inject: ['POSTGRES_CONNECTION'],
  },
  {
    provide: 'PRODUCT_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Product),
    inject: ['POSTGRES_CONNECTION'],
  },
];

export const productProviders = [
  {
    provide: 'PRODUCT_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Product),
    inject: ['POSTGRES_CONNECTION'],
  },
];
