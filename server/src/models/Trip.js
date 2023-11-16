const Model = require("./Model.js");

class Trip extends Model {
  static get tableName() {
    return "trips";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["name", "location", "startDate", "endDate", "userId"],
      properties: {
        id: { type: ["string, integer"] },
        name: { type: "string" },
        location: { type: "string" },
        startDate: { type: "timestamp" },
        endDate: { type: "timestamp" },
        status: { type: "string" },
        notes: { type: "text" },
        userId: { type: ["integer", "string"] },
      },
    };
  }

  static get relationMappings() {
    const { User } = require("./index.js");
    return {
      users: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "trips.userId",
          to: "users.id",
        },
      },
    };
  }
}

module.exports = Trip;
