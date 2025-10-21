import { Request, Response } from 'express';
import { Moto } from '../entities/moto.entity';

export const createMoto = async (req: Request, res: Response) => {
	try {
		const { brand, model, year, engine_cc, price, description, image_url } =
			req.body;

		const moto = new Moto();

		moto.brand = brand;
		moto.model = model;
		moto.year = year;
		moto.engine_cc = engine_cc;
		moto.price = price;
		moto.description = description;
		moto.image_url = image_url;

		await moto.save();

		return res.json(moto);
	} catch (error) {
		return res.status(500).json({ message: 'Error creating moto', error });
	}
};

export const getMotos = async (req: Request, res: Response) => {
	try {
		const motos = await Moto.find();

		return res.json(motos);
	} catch (error) {
		if (error instanceof Error) {
			return res
				.status(500)
				.json({ message: 'Error fetching motos', error: error.message });
		}
	}
};

export const getMoto = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		const moto = await Moto.findOneBy({ id: parseInt(id) });
		if (!moto) {
			return res.status(404).json({ message: 'Moto data not found' });
		}
		return res.json(moto);
	} catch (error) {
		if (error instanceof Error) {
			return res.status(500).json({ message: 'Error fetching moto', error: error.message });
		}
	}
};

export const updateMoto = async (req: Request, res: Response) => {
	try {
		const { brand, model, year, engine_cc, price, description, image_url } =
			req.body;
		const { id } = req.params;
		const moto = await Moto.findOneBy({ id: parseInt(req.params.id) });

		if (!moto) {
			return res.status(404).json({ message: 'Moto data doest not exists' });
		}
		await Moto.update(
			{ id: parseInt(id) },
			{
				brand: req.body.brand,
				model: req.body.model,
				year: req.body.year,
				engine_cc: req.body.engine_cc,
				price: req.body.price,
				description: req.body.description,
				image_url: req.body.image_url,
			}
		);

		return res.status(200).json({ message: 'Moto updated successfully' });
	} catch (error) {
		if (error instanceof Error) {
			return res
				.status(500)
				.json({ message: 'Error updating moto', error: error.message });
		}
	}
};

export const deleteMoto = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		const result = await Moto.delete({ id: parseInt(id) });
		if (result.affected === 0) {
			return res.status(404).json({ message: 'Moto data not found' });
		}
		return res.status(200).json({ message: 'Moto deleted successfully' });
	} catch (error) {
		return res.status(500).json({ message: 'Error deleting moto', error });
	}
};
