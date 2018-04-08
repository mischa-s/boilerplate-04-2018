
exports.up = function (knex, Promise) {
  return knex.schema.createTable('messages', function (table) {
    table.increments('id')
    table.string('name')
    table.text('text')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('messages')
}
