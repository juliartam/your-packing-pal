/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable("activities", (table) => {
    table.bigIncrements("id")
    table.string("name").notNullable()
    table.string("notes")
    table.string("date")
    table
      .bigInteger("tripId")
      .notNullable()
      .index()
      .unsigned()
      .references("trips.id")
    table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now())
    table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now())
  })
}
/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  return knex.schema.dropTableIfExists("activities")
}