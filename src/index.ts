// A schema is a collection of type definitions (hence "typeDefs")

/** Import des librairies */
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { getOneCartoonById, getCartoons } from "./resolvers/cartoon.resolvers";

const typeDefs = `#graphql
  # This "Cartoon" type defines the queryable fields for every cartoon in our data source.
	type Personnage {
	id: ID
	name: String
	role: String
	}

  type Cartoon {
    id: ID
    name: String
    description: String
		nb_of_episodes: Int
		nb_of_seasons: Int
		genres: [String]
		realisator: String
		author: String
		personnages: [Personnage]
  }

  # The "Query" type is special: it lists all of the available queries
  type Query {
    getCartoons: [Cartoon]
		getOneCartoonById(id:ID): Cartoon,
  }
`;

// This resolver retrieves books from the "books" array above.
const resolvers = {
	Query: {
		getCartoons,
		getOneCartoonById,
	},
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
	typeDefs,
	resolvers,
});

/** Fonction auto appellée (évite la mise en constante) permettant de lancer le serveur */
(async () => {
	const { url } = await startStandaloneServer(server, {
		listen: { port: 4000 },
	});

	console.log(`🚀  Server ready at: ${url}`);
})();
