import { createConnection } from 'typeorm';
import { NamingStrategy } from './naming-strategy';

export const databaseProviders = [
  {
    provide: 'POSTGRES_CONNECTION',
    useFactory: async () =>
      await createConnection({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'postgres',
        database: 'para-o-meu-bebe',
        entities: ['dist/**/*.entity{.ts,.js}'],
        synchronize: true,
        namingStrategy: new NamingStrategy(),
      }),
  },
];
