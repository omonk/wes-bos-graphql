const { Primsa } = require('prisma-binding');

const db = new Primsa({
  typeDefs: 'scr/generated/prisma.graphql',
  endpoint: process.env.PRISMA_ENDPOINT,
  secret: process.env.PRISMA_SECRET,
  debug: false,
});

module.exports = db;
