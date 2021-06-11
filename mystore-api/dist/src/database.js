"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var pg_1 = require("pg");
var config_1 = require("./config/config");
dotenv_1.default.config();
// const {
//   POSTGRES_HOST,
//   POSTGRES_DB,
//   POSTGRES_USER,
//   POSTGRES_PASSWORD,
//   POSTGRES_DB_TEST,
//   PORT,
//   NODE_ENV
// } = process.env;
console.log('Environment - ' + config_1.config.node_env);
var client = new pg_1.Pool({
    host: config_1.config.host,
    user: config_1.config.username,
    password: config_1.config.password,
    port: config_1.config.port,
    database: config_1.config.node_env === 'dev' ? config_1.config.database : config_1.config.database_test
});
exports.default = client;
