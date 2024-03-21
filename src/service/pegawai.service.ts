import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Sequelize } from 'sequelize-typescript';
import { Pegawai } from "src/models/Pegawai";


@Injectable()
export class PegawaiService {
    constructor(
        @InjectModel(Pegawai)
        private readonly pegawaiModel: typeof Pegawai,
        private readonly sequelize: Sequelize
    ) { }
    async listPegawai(email: String): Promise<any> {
        const data = await this.sequelize.query('SELECT * FROM users WHERE email = ?', {
            type: 'SELECT',
            replacements: [email],
        });
        return data
    }
    async Create(
        cabang_id: string,
        username: string,
        name: string,
        password: string,
        email: string,
        tmlevel_id: string,
        role: string,
        statuslogin: string,
        token: string,
    ): Promise<any> {
        try {
            const query = `
            INSERT INTO users (
              cabang_id,
              username,
              name,
              password,
              email,
              tmlevel_id,
              role,
              statuslogin,
              token,
             ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
            const [result] = await this.sequelize.query(query, {
                type: 'INSERT',
                replacements: [
                    cabang_id,
                    username,
                    name,
                    password,
                    email,
                    tmlevel_id,
                    role,
                    statuslogin,
                    token,
                ],
            });

            return result;
        } catch (error) {
            console.error('Failed to create user:', error);
            throw new Error('Failed to create user');
        }
    }
    async Destroy(id: number): Promise<any> {
        console.log(id, "data pagawai")
        const query = `
        delete from users where id = ?`;
        return await this.sequelize.query(query, {
            type: 'DELETE',
            replacements: [
                id
            ],
        });

    }
    async Insert(data: Partial<Pegawai>): Promise<Pegawai> {
        try {
            return await this.pegawaiModel.create(data);
        } catch (error) {
            console.error('Failed to create pegawai:', error);
            throw new Error('Failed to create user');
        }
    }

    async Update(id: number, data: Partial<Pegawai>): Promise<Pegawai> {
        try {
            const [affectedRows, updateRows] = await this.pegawaiModel.update(data, {
                where: { id },
                returning: true,
            });
            return
        } catch (error) {
            throw new Error('Failed to create user');
        }
    }

    async showData(id: number): Promise<Pegawai> {
        try {
            return await this.pegawaiModel.findByPk(id);
        } catch (error) {
            console.error('Failed to create pegawai:', error);
            throw new Error('Failed to fetcth user');
        }
    }

}