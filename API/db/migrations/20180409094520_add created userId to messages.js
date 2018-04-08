
exports.up = function (knex, Promise) {
  return knex.schema.table('messages', function (table) {
    table.integer('userId').references('users.id')
  })
}
exports.down = function (knex, Promise) {
  return knex.schema.table('messages', function (table) {
    table.dropColumn('userId')
  })
}
