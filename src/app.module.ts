import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginController } from './controllers/login.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize';
import { PegawaiController } from './controllers/pegawai.controller';
import { DivisiController } from './controllers/divisi.controller';
import { KehadiranController } from './controllers/kehadiran.controller';
import { PegawaiService } from './service/pegawai.service';
import { Pegawai } from './models/Pegawai';
import { PresensiService } from './service/presensi.service';
import { DivisiService } from './service/divisi.service';
import { Presensi } from './models/Presensi';
import { Divisi } from './models/Divisi';
@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3308,
      username: 'root',
      password: '',
      database: 'absensi',
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([
      Pegawai,
      Presensi,
      Divisi,
    ]),
  ],

  controllers: [
    AppController, LoginController, PegawaiController, DivisiController, KehadiranController],
  providers: [
    AppService,
    PegawaiService,
    PresensiService,
    DivisiService,
  ],
})
export class AppModule { }
