import { Model, Column, Table, PrimaryKey, DataType } from 'sequelize-typescript';

@Table({ tableName: 'pegawai' }) // Specify the table name
export class Pegawai extends Model<Pegawai> {
    @PrimaryKey // Set id as primary key
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
    })
    id: number;
    @Column
    id_fingerprint: string;
    @Column
    nik: string;
    @Column
    nama: string;
    @Column
    jk: string;
    @Column
    ttl: string;
    @Column
    email: string;
    @Column
    password: string;
    @Column
    alamat: string;
    @Column
    telp: string;
    @Column
    id_divisi: string;
    @Column
    dept: string;
    @Column
    intensif: string;
    @Column
    jam_mengajar: string;
    @Column
    nominal_jam: string;
    @Column
    bpjs: string;
    @Column
    koperasi: string;
    @Column
    simpanan: string;
    @Column
    tabungan: string;
    @Column
    id_pend: string;
    @Column
    kode_reff: string;
    @Column
    jumlah_reff: string;
    @Column
    role_id: string;
    @Column
    status: string;
    @Column
    date_created: string;
    @Column
    updated_at: string;
    @Column
    created_at: string;
    @Column
    user_id: number;
}
