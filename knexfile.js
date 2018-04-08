// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: 'postgres',
      password: 'postgres',
      database: 'boilerplate_04_2018'
    },
    migrations: {
      directory: './API/db/migrations'
    },
    seeds: {
      directory: './API/db/seeds'
    }
  },

  test: {
    client: 'sqlite3',
    connection: {
      filename: ':memory:'
    },
    migrations: {
      directory: './API/db/migrations'
    },
    seeds: {
      directory: './API/db/seeds'
    },
    useNullAsDefault: true
  },

  staging: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './API/db/migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './API/db/seeds'
    }
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './API/db/migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './API/db/seeds'
    }
  }

};
