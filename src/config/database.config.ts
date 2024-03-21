import { Sequelize } from 'sequelize-typescript';
// import { Cat } from '../cats/cat.entity';
export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3308,
        username: 'root',
        password: '',
        database: 'absensi',
      });
    //   sequelize.addModels([Cat]);
      await sequelize.sync();
      return sequelize;
    },
  },
]; 