import dotenv from 'dotenv';
import { Pool } from 'pg';
import { config } from './config/config';

dotenv.config();

// const {
//   POSTGRES_HOST,
//   POSTGRES_DB,
//   POSTGRES_USER,
//   POSTGRES_PASSWORD,
//   POSTGRES_DB_TEST,
//   PORT,
//   NODE_ENV
// } = process.env;

console.log('Environment - ' + config.node_env);

const client: Pool = new Pool({
  host: config.host,
  user: config.username,
  password: config.password,
  port: config.port,
  database: config.node_env === 'dev' ? config.database : config.database_test
});

export default client;
