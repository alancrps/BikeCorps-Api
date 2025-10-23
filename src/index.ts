import 'reflect-metadata';
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import { dbContext } from './db/dbContext';
import motoRoutes from './routes/moto.routes';

// Inicializar la app
const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// Rutas
app.use(motoRoutes);

// Función principal para inicializar DB y arrancar servidor
async function main() {
	try {
		await dbContext.initialize();
		console.log('Data Source has been initialized!');
		console.log('Connected to:', dbContext.options.database);
		const PORT = process.env.PORT || 3000;
		app.listen(PORT, () => {
			console.log(`Server is running on http://localhost:${PORT} ✅`);
		});
	} catch (error) {
		console.error('Error during Data Source initialization', error);
	}
}

main();
