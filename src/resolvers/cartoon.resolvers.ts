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
