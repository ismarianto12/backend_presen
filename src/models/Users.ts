import { Model, DataTypes } from 'sequelize';

export class Users extends Model {
  public id!: number;
  public cabang_id!: number;
  public username!: string;
  public name!: string;
  public password!: string;
  public email!: string;
  public tmlevel_id!: number;
  public role!: string;
  public created_at!: Date;
  public statuslogin!: boolean;
  public token!: string;
  public updated_at!: Date;
  public id_user!: string;

  // Add any additional methods or associations here
}

export const initUser = (sequelize: any) => {
  Users.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      cabang_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      tmlevel_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      statuslogin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      token: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      id_user: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users', // Change 'users' to your actual table name
      timestamps: false, // Disable Sequelize's default timestamps
    },
  );
};
