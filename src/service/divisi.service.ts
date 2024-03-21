import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Sequelize } from 'sequelize-typescript';
import { Divisi } from "src/models/Divisi";

@Injectable()
export class DivisiService {
    constructor(
        @InjectModel(Divisi)
        private readonly divisimodel: typeof Divisi,
        private readonly sequelize: Sequelize,

    ) { }

    async getDivisiAll(): Promise<any> {
        return await this.divisimodel.findAll();
    }

    async getAll(): Promise<any> {
        const data = await this.sequelize.query('SELECT * FROM divisi', {
            type: 'SELECT',
        });
        return data
    }
    async GetById(id: number): Promise<any> {
        return await this.sequelize.query("SELECT * from divisi where id =?", {
            type: "SELECT",
            replacements: [
                id
            ]
        })
    }
}