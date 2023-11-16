const Model = require( "./Model.js" )

class Trip extends Model {
  static get tableName() {
    return "trips"
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["name", "location", "startDate", "endDate"],
      properties: {
        name: { type: "string" },
        location: { type: "string" },
        startDate: { type: "string" },
        endDate: { type: "string" },
        status: { type: "string" },
        notes: { type: "string" },
      },
    }
  }
}

module.exports = Trip
