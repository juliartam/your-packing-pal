const Model = require("./Model.js")

class Trip extends Model {
  static get tableName() {
    return "trips"
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["name", "location", "startDate", "endDate", "userId"],
      properties: {
        name: {type: "string"},
        location: {type: "string"},
        startDate: {type: "string"},
        endDate: {type: "string"},
        userId: {type: ["integer", "string"]}
      },
    }
  }

  static get relationMappings() {
    const {Activity, Item, User} = require("./index.js")

    return {
      activities: {
        relation: Model.HasManyRelation,
        modelClass: Activity,
        join: {
          from: "trips.id",
          to: "activities.tripId"
        }
      },
      items: {
        relation: Model.HasManyRelation,
        modelClass: Item,
        join: {
          from: "trips.id",
          to: "items.tripId"
        }
      },
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "trips.userId",
          to: "users.id"
        }
      }
    }
  }
}


module.exports = Trip
