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

const firstName = process.argv[2];
const lastName = process.argv[3];
const dob = process.argv[4];

knex('famous_people').insert([{
  first_name: firstName,
  last_name: lastName,
  birthdate: dob
}])
.asCallback(function(err) {
  if (err) {
   console.log(err);
   knex.destroy();
  }
  knex('famous_people').select()
  .asCallback(function(err,rows) {
    if (err) return console.log(err);
    console.log(rows);
    knex.destroy();
  });
});


