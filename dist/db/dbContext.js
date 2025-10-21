"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbContext = void 0;
const typeorm_1 = require("typeorm");
exports.dbContext = new typeorm_1.DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    logging: true,
    synchronize: false,
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    migrations: ['src/migrations/*.ts'],
});
