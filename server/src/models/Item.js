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
      activity: {
        relation: Model.BelongsToOneRelation,
        modelClass: Activity,
        join: {
          from: "items.activityId",
          to: "activities.id"
        }
      }
    }
  }
}

module.exports = Item
