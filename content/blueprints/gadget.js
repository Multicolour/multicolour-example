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
    type: {
      required: true,
      type: "string",
      enum: ["mobile phone", "tablet", "laptop", "tower"]
    },

    cost: {
      required: true,
      type: "float",
      size: 8,
      min: 0,
      max: 3000
    },

    /*
     * But sometimes, we just want to define
     * it's type, so that's okay as well.
     */
    brand: "string",

    /*
     * This gadget is owned by someone,
     * set up a one to one relationship
     * between this gadget and a person
     */
    owner: {
      model: "person"
    }
  }
}
