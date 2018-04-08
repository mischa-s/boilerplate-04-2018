
exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('users', function (table) {
    table.increments('id')
    table.string('password')
    table.string('email')
    table.unique('email')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('users')
}
