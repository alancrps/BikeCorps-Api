import { DataSource } from 'typeorm';

export const dbContext = new DataSource({
	type: 'postgres',
	host: process.env.DB_HOST,
	port: Number(process.env.DB_PORT),
	username: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	logging: true,
	synchronize: true,
	entities: [__dirname + '/../**/*.entity.{js,ts}'],
	migrations: ['src/migrations/*.ts'],
});
