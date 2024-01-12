import {User} from "../../models/index.js"

class UserSeeder {
  static async seed() {
    const usersSeederData = [
      {
        email: "userOne@testing.com",
        //jt: replaced cryptedPassword: with password: to match ne-destination-app
        // cryptedPassword: "test",
        password: "userOne"
      },
      {
        email: "userTwo@testing.com",
        // cryptedPassword: "test",
        password: "userTwo"
      },
      {
        email: "userThree@testing.com",
        // cryptedPassword: "test",
        password: "userThree"
      },
    ]

    for (const user of usersSeederData) {
      const currentUser = await User.query().findOne({email: user.email})
      if (!currentUser) {
        await User.query().insert(user)
      }
    }
  }
}

export default UserSeeder