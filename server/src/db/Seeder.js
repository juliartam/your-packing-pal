/* eslint-disable no-console */
import {connection} from "../boot.js"
import UserSeeder from './seeders/UsersSeeder.js'
import TripSeeder from './seeders/TripSeeder.js'
import ActivitySeeder from './seeders/ActivitySeeder.js'
import ItemSeeder from './seeders/ItemSeeder.js'

class Seeder {
  static async seed() {
    console.log("seeding users...")
    await UserSeeder.seed()

    console.log("seeding trips...")
    await TripSeeder.seed()

    console.log("seeding activities...")
    await ActivitySeeder.seed()

    console.log("seeding items...")
    await ItemSeeder.seed()

    console.log("Done!")
    await connection.destroy()
  }
}

export default Seeder