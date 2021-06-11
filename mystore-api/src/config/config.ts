import dotenv from 'dotenv';
dotenv.config();

export const config = {
  username: `${process.env.POSTGRES_USER}`,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  port: Number(process.env.PORT),
  host: process.env.POSTGRES_HOST,
  node_env: process.env.NODE_ENV,
  salt_rounds: process.env.SALT_ROUNDS,
  database_test: process.env.POSTGRES_DB_TEST,
  bcrypt_password: process.env.BCRYPT_PASSWORD,
  token_secret: process.env.TOKEN_SECRET,
  test_token: process.env.TEST_TOKEN
};
