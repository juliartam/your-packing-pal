/* eslint-disable no-console */
import { connection } from "../boot.js"
import TripSeeder from './seeders/TripSeeder.js'
import UserSeeder from './seeders/UsersSeeder.js'

class Seeder {
  static async seed() {
    console.log( "seeding trips..." )
    await TripSeeder.seed()

    console.log( "seeding users..." )
    await UserSeeder.seed()

    console.log( "Done!" )
    await connection.destroy()
  }
}

export default Seeder