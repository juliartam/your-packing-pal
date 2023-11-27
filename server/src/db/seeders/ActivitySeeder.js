import {Activity} from "../../models/index.js"

class ActivitySeeder {
  static async seed() {
    const activitySeederData = [
      {
        name: "Workout",
        date: "September 14, 2023",
        notes: "At home workout",
        tripId: 1
      },
      {
        name: "Workout",
        date: "September 15, 2023",
        notes: "Spinning class @  SpinCity",
        tripId: 1
      }
    ]
    for (const activity of activitySeederData) {
      const currentActivity = await Activity.query().findOne({name: activity.name})
      if (!currentActivity) {
        await Activity.query().insert(activity)
      }
    }
  }
}
export default ActivitySeeder
