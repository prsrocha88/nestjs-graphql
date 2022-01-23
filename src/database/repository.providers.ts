import { Store } from '../modules/store/store.entity';
import { Connection } from 'typeorm';


export const storeProviders = [
  {
    provide: 'STORE_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Store),
    inject: ['POSTGRES_CONNECTION'],
  },
];
