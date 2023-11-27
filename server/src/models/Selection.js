const Model = require("./Model.js")

class Selection extends Model {
  static get tableName() {
    return "selections"
  }

  // static get jsonSchema() {
  //   return {
  //     type: "object",
  //     required: [],
  //     properties: {},
  //   }
  // }

  static get relationMappings() {
    const {Activity, Item} = require("./index.js")

    return {}
    // later, we will want to relate our Selection, to the items table, and to the Activities table, but the app will work without
  }
}

module.exports = Selection
