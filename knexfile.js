// Update with your config settings.
const settings = require("./settings")

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host: settings.hostname,
      user: settings.user,
      password: settings.password,
      database: settings.database
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
};
