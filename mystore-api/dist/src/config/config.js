"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.config = {
    username: "" + process.env.POSTGRES_USER,
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
