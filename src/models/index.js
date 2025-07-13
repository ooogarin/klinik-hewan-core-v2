import fs from 'fs';
import path from 'path';
import { Sequelize } from 'sequelize';
import sequelize from '../../databases/mysql.connection.js';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const db = {};

const files = fs.readdirSync(__dirname).filter((file) => {
    return file.indexOf('.') !== 0 && file !== path.basename(__filename) && file.endsWith('.js');
});

for (const file of files) {
    const model = (await import(path.join(__dirname, file))).default(sequelize);
    db[model.name] = model;
}

Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
