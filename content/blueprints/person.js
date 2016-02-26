"use strict"

module.exports = {
  /*
   * We define our columns/keys in the `attributes`
   * property of our blueprints.
   */
  attributes: {
    /*
     * Properties in our table/collection
     * are defined as objects in our blueprints.
     */
    name: {
      required: true,
      type: "string"
    },

    age: {
      type: "integer",
      size: 8,
      min: 1,
      max: 130
    },

    /*
     * But sometimes, we just want to define
     * it's type, so that's okay as well.
     */
    secret: "string",

    /*
     * A person can have many gadgets so
     * we set up an association to another
     * collection (blueprint) which will
     * be automatically populated for us.
     *
     * This is a "one to many" relationship.
     */
    gadgets: {
      collection: "gadget"
    },

    /*
     * A person also has a user.
     *
     * This is a "one to one" relationship.
     */
    user: {
      model: "multicolour_user"
    },

    /**
     * We have a `secret` to keep, only this
     * person should ever know their secret
     * so let's make sure we don't return it
     * in any of our endpoints.
     *
     * @return {Object -> Person} Our person without their secret.
     */
    toJSON: function() {
      // Get our Person as an object.
      const person = this.toObject()

      // Get rid of their secret!
      delete person.secret

      // Return our; now safe, Person.
      return person
    }
  }
}
