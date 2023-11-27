const Model = require("./Model.js")

class Activity extends Model {
  static get tableName() {
    return "activities"
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["name", "tripId"],
      properties: {
        tripId: {type: ["integer", "string"]},
        name: {type: "string"},
        date: {type: "string"},
        notes: {type: "string"}
      },
    }
  }

  static get relationMappings() {
    const {Trip, Item} = require("./index.js")

    return {
      trip: {
        relation: Model.BelongsToOneRelation,
        modelClass: Trip,
        join: {
          from: "activities.tripId",
          to: "trips.id"
        }
      },
      items: {
        relation: Model.ManyToManyRelation,
        modelClass: Item,
        join: {
          from: "activities.id",
          through: {
            from: "selections.activityId",
            to: "selections.itemId"
          },
          to: "items.id"
        }
      }
    }
  }
}

module.exports = Activity
