import { default as cartoons } from "../../dataset.json";
import type { Cartoon } from "../types/cartoon.type";

type GetOneCartoonByIdArgs = {
	id: string;
};

export const getOneCartoonById = (): Cartoon => {
	return cartoons[0];
};

export const getOneCartoonsById = (
	_: unknown,
	args: GetOneCartoonByIdArgs,
): Cartoon => {
	return cartoons.find((cartoon) => cartoon.id === +args.id) as Cartoon;
};

export const getCartoons = () => {
	return cartoons;
};

export const createCartoon = (
	_: unknown,
	args: { cartoon: Cartoon },
): number => {
	const { personnages, ...rest } = args.cartoon;

	const newPersonnages = personnages.map((pers) => ({
		...pers,
		id: Date.now(),
	}));

	const id = cartoons[cartoons.length - 1].id + 1;

	const newCartoon: Cartoon = { ...rest, personnages: newPersonnages, id };

	cartoons.push(newCartoon);

	return id;
};
