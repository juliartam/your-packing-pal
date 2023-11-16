import { User } from "../../models/index.js"

class UserSeeder {
  static async seed() {
    const usersSeederData = [
      {
        email: "betty@notreal.com",
        password: "test",
      },
      {
        email: "john@notreal.com",
        password: "test",
      },
      {
        email: "alice@notreal.com",
        password: "test",
      },
    ]

    for ( const user of usersSeederData ) {
      const currentUser = await User.query().findOne( { email: user.email } )
      if ( !currentUser ) {
        await User.query().insert( user )
      }
    }
  }
}

export default UserSeeder