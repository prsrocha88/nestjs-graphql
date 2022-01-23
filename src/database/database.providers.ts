import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'POSTGRES_CONNECTION',
    useFactory: async () =>
      await createConnection({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'roxaroxa',
        database: 'nest-graphql',
        entities: ['dist/**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
  },
];
