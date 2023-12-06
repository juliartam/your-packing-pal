const Model = require("./Model.js")

class Item extends Model {
  static get tableName() {
    return "items"
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["name", "activityId"],
      properties: {
        activityId: {type: ["integer", "string"]},
        name: {type: "string"},

      },
    }
  }

  static get relationMappings() {
    const {Activity} = require("./index.js")

    return {
      trip: {
        relation: Model.BelongsToOneRelation,
        modelClass: Activity,
        join: {
          from: "items.activitiesId",
          to: "activities.id"
        }
      }
    }
  }
}

module.exports = Item
