const knex = require('knex');

module.exports = function (app) {
  const { client, connection } = app.get('postgres');
  console.log(client, 'client', connection, 'connection')
  const db = knex({ client, connection });

  app.set('knexClient', db);
};
