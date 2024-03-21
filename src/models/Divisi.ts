import { Column, DataType, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table({
    tableName: 'divisi',
    timestamps: false,
})
export class Divisi extends Model<Divisi> {
    @PrimaryKey
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
    })
    id: string
    @Column
    namadivisi: string
    @Column
    status: string
    @Column
    created_at: string
    @Column
    updated_at: string
    @Column
    user_id: string
}