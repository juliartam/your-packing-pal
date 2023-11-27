/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable("selections", (table) => {
    table.bigIncrements("id")
    table.bigInteger("activityId")
      .notNullable()
      .index()
      .unsigned()
      .references("activities.id")
    table.bigInteger("itemId")
      .notNullable()
      .index()
      .unsigned()
      .references("items.id")
    table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now())
    table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now())
  })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  return knex.schema.dropTableIfExists("selections")
}