import { Cartoon } from "../entities/cartoon.entities";
import { Personnage } from "../entities/personnage.entities";
import { Genre } from "../entities/genre.entities";
import type { DeleteResult } from "typeorm";

export const getOneCartoonById = async (
	_: unknown,
	args: { id: string },
): Promise<Cartoon> => {
	const oneCartoon = await Cartoon.findOneBy({ id: +args.id });

	return oneCartoon as Cartoon;
};

export const getCartoons = async (): Promise<Cartoon[]> => {
	return Cartoon.find();
};

export const createCartoon = async (
	_: unknown,
	args: { cartoon: Cartoon },
): Promise<number> => {
	const { personnages, genres, ...rest } = args.cartoon;

	/** Création du tableau d'instance de personnage */
	const newPersonnages = personnages?.map((pers) => {
		const myPers = new Personnage();
		myPers.name = pers.name;
		myPers.short_description = pers.short_description;
		myPers.role = pers.role;
		return myPers;
	}) as Personnage[];

	/** Création du tableau d'instance de genre */
	const newGenre = genres?.map((genre) => {
		const myGenre = new Genre();
		myGenre.name = genre.name;

		return myGenre;
	}) as Genre[];

	/** Association des données et instances à */
	const newCartoon: Cartoon = new Cartoon();
	Object.assign(newCartoon, rest);
	newCartoon.personnages = newPersonnages;
	newCartoon.genres = newGenre;

	const result = await newCartoon.save();
	return result.id;
};

export const deleteCartoon = async (
	_: unknown,
	args: { id: string },
): Promise<boolean> => {
	const cartoonDelete: DeleteResult = await Cartoon.delete({
		id: +args.id,
	});

	// Si la suppression s'est bien déroulée (enregistrement existant)
	if (cartoonDelete.affected !== null || cartoonDelete.affected !== undefined) {
		return true;
	}
	return false;
};
