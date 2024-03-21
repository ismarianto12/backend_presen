import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Sequelize } from 'sequelize-typescript';
import { Presensi } from "src/models/Presensi";

@Injectable()
export class PresensiService {
    constructor(
        @InjectModel(Presensi)
         private readonly sequelize: Sequelize,
         private readonly presensmodel: typeof Presensi,

    ) { }
    async getAll() {
        return await this.sequelize.query(`SELECT * from presensi left join karyawan 
             on presensi.karyawan_id = karyawan.id 
            `, {
            type: 'SELECT',
        })
    }
    async getByKaryawan(id: number): Promise<any> {
        return await this.sequelize.query(`SELECT * from presensi left join pegawai 
              on presensi.pegawai_id = pegawai.id 
              where pegawai.id = ?
             `, {
            type: 'SELECT',
            replacements: [
                id
            ]
        })
    }
    async storedata(data: Partial<Presensi>): Promise<Presensi> {
        try {
            return await this.presensmodel.create(data)
        } catch (error) {
            console.error('Failed to create pegawai:', error);
            throw new Error('Failed to create user');
        }

    }

}