import { DataSource } from "typeorm";
import { Cartoon, Genre, Personnage } from "../entities/cartoon.entities";

export const datasource = new DataSource({
	type: "sqlite",
	database: "./db.sqlite",
	entities: [Cartoon, Genre, Personnage],
	synchronize: true,
});
