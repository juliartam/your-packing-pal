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
      //jt: ommented out manytomanyrelation, replacing with hasMany
      // items: {
      //   relation: Model.ManyToManyRelation,
      //   modelClass: Item,
      //   join: {
      //     from: "activities.id",
      //     through: {
      //       from: "items.activityId",
      //       to: "items.itemId"
      //     },
      //     to: "items.id"
      items: {
        relation: Model.HasManyRelation,
        modelClass: Item,
        join: {
          from: "activities.id",
          to: "items.activityId"
        }
      }
    }
  }
}

module.exports = Activity
