//src/types/cartoon.type.ts
import type { Personnage } from "./personnage.type";
//import type { Genre } from "./genre.type";

export type Cartoon = {
	id: number;
	name: string;
	description: string;
	nb_of_episodes: number;
	nb_of_seasons: number;
	genres: string[];
	realisator: string;
	author: string;
	ft_diffusion: string;
	personnages: Personnage[];
};
