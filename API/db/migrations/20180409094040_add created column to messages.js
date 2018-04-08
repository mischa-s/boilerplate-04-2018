exports.up = function (knex, Promise) {
  return knex.schema.table('messages', function (table) {
    table.timestamp('createdAt').defaultTo(knex.fn.now())
  })
}
exports.down = function (knex, Promise) {
  return knex.schema.table('messages', function (table) {
    table.dropColumn('createdAt')
  })
}
