import {Item} from "../../models/index.js"

class ItemSeeder {
  static async seed() {
    // retrieve existing activities
    const activityOne = await Activity.findOne({"Workout"})




    const itemSeederData = [
      {
        name: "Lululemon shorts",
        tripId: 1
      },
      {
        name: "Workout",
        date: "September 15, 2023",
        notes: "Spinning class @  SpinCity",
        tripId: 1
      }
    ]
    // items I want to pack separate from an actvity
    for (const item of itemSeederData) {
      // review week 6 on persisting related records article to see what this is doing
      await activityOne.$relatedQuery("items").insert(item)
      // this one line of code, both makes the new item AND makes a selection that relates the acitivty to the item
    }
  }
}
export default ActivitySeeder

