/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async ( knex ) => {
  return knex.schema.createTable( "trips", ( table ) => {
    table.bigIncrements( "id" )
    table.string( "name" ).notNullable()
    table.string( "startDate" ).notNullable()
    table.string( "endDate" ).notNullable()
    table.string( "location" )
    table.string( "notes" )
    table.string( "status" )
    table.timestamp( "createdAt" ).notNullable().defaultTo( knex.fn.now() )
    table.timestamp( "updatedAt" ).notNullable().defaultTo( knex.fn.now() )
  } )
}

/**
 * @param {Knex} knex
 */
exports.down = ( knex ) => {
  return knex.schema.dropTableIfExists( "trips" )
}
