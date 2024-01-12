import {Activity, Item, Trip, User} from "../../models/index.js"

class ItemSeeder {
  static async seed() {
    const itemWorkout = await Activity.query().findOne({name: "Workout"})
    const itemBeach = await Activity.query().findOne({name: "Beach"})
    const itemBrunch = await Activity.query().findOne({name: "Brunch"})

    const itemSeederData = [
      {
        name: "Running Sneakers",
        activityId: itemWorkout.id
      },
      {
        name: "Shorts",
        activityId: itemWorkout.id
      },
      {
        name: "Sports Bra",
        activityId: itemWorkout.id
      },
      {
        name: "Dress",
        activityId: itemBrunch.id
      },
      {
        name: "Sandals",
        activityId: itemBrunch.id
      },
      {
        name: "White Woven Handbag",
        activityId: itemBrunch.id
      },
      {
        name: "Bathing Suit",
        activityId: itemBeach.id
      },
      {
        name: "Cover-up",
        activityId: itemBeach.id
      },
      {
        name: "Flip-Flops",
        activityId: itemBeach.id
      },
      {
        name: "Beach Bag",
        activityId: itemBeach.id
      }
    ]
    //jt: note from meeting with nick to add: items I want to pack separate from an actvity
    // review week 6 on persisting related records article to see what this is doing

    //jt:commented out the below 3 lines. copied from ne-destination-app review seeder instead
    // for (const item of itemSeederData) {
    //   const currentActivity = await Activity.query().findOne({name: activity.name})
    //   await activityOne.$relatedQuery("items").insert(item)
    // this one line of code, both makes the new item AND makes a selection that relates the acitivty to the item
    for (const item of itemSeederData) {
      const currentItem = await Item.query().findOne({name: item.name})
      if (!currentItem) {
        await Item.query().insert(item)
      }
    }
  }
}
export default ItemSeeder

