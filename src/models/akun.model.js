import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
    class Akun extends Model {
        static associate(models) {
            // Definisikan relasi di sini (jika ada)
        }
    }

    Akun.init(
        {
            id_akun: {
                type: DataTypes.CHAR(36),
                primaryKey: true,
                allowNull: false,
            },
            no_reg_akun: {
                type: DataTypes.STRING(36),
                allowNull: false,
            },
            nameakun: {
                type: DataTypes.STRING(50),
                allowNull: false,
                unique: true,
            },
            passakun: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
            nama_lengkap: {
                type: DataTypes.STRING(45),
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING(45),
                allowNull: false,
            },
            dial_code: {
                type: DataTypes.STRING(5),
                allowNull: false,
            },
            no_hp: {
                type: DataTypes.STRING(25),
                allowNull: false,
            },
            foto_akun: {
                type: DataTypes.STRING(100),
                allowNull: true,
            },
            foto_akun_url: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            is_medic: {
                type: DataTypes.TINYINT(4),
                allowNull: true,
                defaultValue: 0,
            },
            role_akun: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
            },
            level_akun: {
                type: DataTypes.TINYINT(4),
                allowNull: false,
            },
            group_akun: {
                type: DataTypes.CHAR(5),
                allowNull: false,
            },
            status_akun: {
                type: DataTypes.TINYINT(1),
                allowNull: false,
            },
            status_delete: {
                type: DataTypes.TINYINT(1),
                allowNull: false,
                defaultValue: 0,
            },
            created_at: {
                type: DataTypes.DATE,
                allowNull: true,
            },
            updated_at: {
                type: DataTypes.DATE,
                allowNull: true,
            },
            created_at_unix: {
                type: DataTypes.BIGINT(20),
                allowNull: true,
                field: 'created_unix',
            },
            updated_at_unix: {
                type: DataTypes.BIGINT(20),
                allowNull: true,
                field: 'updated_unix',
            },
            id_akun_create: {
                type: DataTypes.CHAR(36),
                allowNull: true,
            },
            id_akun_update: {
                type: DataTypes.CHAR(36),
                allowNull: true,
            },
            refresh_token: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
        },
        {
            sequelize,
            modelName: 'Akun',
            tableName: 'akun',
            timestamps: false,
        },
    );

    return Akun;
};
