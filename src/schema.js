const { loadFilesSync } = require("@graphql-tools/load-files")
const { mergeTypeDefs, mergeResolvers } = require("@graphql-tools/merge")
const { makeExecutableSchema } = require("@graphql-tools/schema");

const loadedTypes = loadFilesSync(`${__dirname}/**/*.typeDefs.js`);
const loadedResolvers = loadFilesSync(`${__dirname}/**/*.{mutations,queries,resolvers}.js`);

const typeDefs = mergeTypeDefs(loadedTypes);
const resolvers = mergeResolvers(loadedResolvers);

const schema = makeExecutableSchema({typeDefs, resolvers});

export default schema;