class ActivitySerializer {

  static getSummary(activity) {

    const allowedAttributes = ["id", "name", "date", "notes"]

    let serializedActivity = {}
    for (const attribute of allowedAttributes) {
      serializedActivity[attribute] = activity[attribute]
    }

    return serializedActivity
  }
}

export default ActivitySerializer