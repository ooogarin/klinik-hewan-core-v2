import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('staging_cloudcare_klinikhewan_db', 'root', 'PqlUbiHm6QM3svD', {
    host: '103.176.79.54',
    dialect: 'mysql',
    port: '3311',
});

// Test koneksi
async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('Koneksi ke database berhasil!');
    } catch (error) {
        console.error('Gagal terhubung ke database:', error);
    }
}

testConnection();

export default sequelize;
