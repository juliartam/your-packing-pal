/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable("trips", (table) => {
    table.bigIncrements("id");
    table.string("name").notNullable();
    table.timestamp("startDate").notNullable();
    table.timestamp("endDate").notNullable();
    table.string("location");
    table.text("notes");
    table.string("status");
    table.bigInteger("userId").notNullable().index().unsigned().references("users.id");
    table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now());
    table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now());
  });
};

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  return knex.schema.dropTableIfExists("destinations");
};
