import { Column, DataType, Model, PrimaryKey, Table } from "sequelize-typescript";
@Table({
    tableName: 'presensi',
    timestamps: false, // This line will ignore createdAt and updatedAt columns
}) // Specify the table name
export class Presensi extends Model<Presensi> {
    @PrimaryKey // Set id as primary key
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
    })
    id: number;
    @Column
    jadwal_id: String
    @Column
    karyawan_id: String
    @Column
    status_hadir: String
    @Column
    tgl_hadir: String
    @Column
    created_at: String
    @Column
    updated_at: String

}