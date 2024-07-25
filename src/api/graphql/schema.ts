import { makeExecutableSchema } from '@graphql-tools/schema';
import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';
import path from 'path';
import { fileURLToPath } from 'url';

// Convert import.meta.url to a file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const typesArray = loadFilesSync(path.join(__dirname, "./modules/**/*.graphql"));
const resolversArray = loadFilesSync(
    path.join(__dirname, "./modules/**/resolvers.ts")
);

const typeDefs = mergeTypeDefs(typesArray);
const resolvers = mergeResolvers(resolversArray);
// Create the executable schema
const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

export default schema;