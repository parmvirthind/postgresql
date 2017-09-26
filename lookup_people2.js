const settings = require('./settings');

const knex = require('knex')({
  client: 'postgresql',
  connection: {
    host: settings.hostname,
    user: settings.user,
    password: settings.password,
    database: settings.database
  }
});


knex('famous_people').where('first_name', 'Abraham')
.asCallback(function(err,rows) {
  if (err) return console.log(err);
  console.log(rows);
  knex.destroy();
});