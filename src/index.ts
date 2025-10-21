import 'reflect-metadata';
import dotenv from 'dotenv';
dotenv.config();
import app from './app';
import { dbContext } from './db/dbContext';

async function main() {
	try {
		await dbContext.initialize();
		console.log('Data Source has been initialized!');
		console.log('Connected to:', dbContext.options.database);
		app.listen(process.env.PORT || 3000, () =>
			console.log(
				`Server is running on http://localhost:${process.env.PORT || 3000} ✅`
			)
		);
	} catch (error) {
		console.error('Error during Data Source initialization', error);
	}
}

main();
