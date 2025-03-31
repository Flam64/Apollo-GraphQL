import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Cartoon {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@Column()
	description: string;

	@Column()
	nb_of_episodes: number;

	@Column()
	nb_of_seasons: number;

	@Column()
	realisator: string;

	@Column()
	author: string;

	@Column()
	ft_diffusion: string;
}

@Entity()
export class Genre {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@Column()
	cartoon_id: number;
}

@Entity()
export class Personnage {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@Column()
	role: string;

	@Column()
	short_description: string;

	@Column()
	cartoon_id: number;
}
