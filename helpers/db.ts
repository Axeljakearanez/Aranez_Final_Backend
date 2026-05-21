import mysql from 'mysql2/promise';
import { Sequelize } from 'sequelize';
import accountModel from '../accounts/account.model';
import refreshTokenModel from '../accounts/refresh-token.model';

const db: any = {};
export default db;

initialize();

async function initialize() {
  const host = process.env.MYSQLHOST || process.env.DB_HOST || 'localhost';
  const port = Number(process.env.MYSQLPORT || process.env.DB_PORT || 3306);
  const user = process.env.MYSQLUSER || process.env.DB_USER || 'root';
  const password = process.env.MYSQLPASSWORD || process.env.DB_PASSWORD || '';
  const database = process.env.MYSQLDATABASE || process.env.DB_NAME || 'node_mysql_api';

  const isProduction = process.env.NODE_ENV === 'production';

  console.log('🔗 MySQL connection target:', {
    host,
    port,
    user,
    database,
    ssl: isProduction ? 'enabled' : 'disabled'
  });

  // create database if it doesn't exist
  const connection = await mysql.createConnection({
    host,
    port,
    user,
    password,
    ssl: isProduction
      ? {
          rejectUnauthorized: false
        }
      : undefined
  });

  await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);
  await connection.end();

  // connect to database
  const sequelize = new Sequelize(database, user, password, {
    host,
    port,
    dialect: 'mysql',
    logging: false,
    dialectOptions: isProduction
      ? {
          ssl: {
            rejectUnauthorized: false
          }
        }
      : {}
  });

  // init models
  db.Account = accountModel(sequelize);
  db.RefreshToken = refreshTokenModel(sequelize);

  // relationships
  db.Account.hasMany(db.RefreshToken, { onDelete: 'CASCADE' });
  db.RefreshToken.belongsTo(db.Account);

  // sync all models with database
  await sequelize.sync();

  console.log('✅ Database connected and synced');
}