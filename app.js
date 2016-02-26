"use strict"

// Configure our service.
const my_service = require("multicolour")
  // Configure the service core and scan for content.
  .new_from_config_file_path("./config.js")
  .scan()

  // Register the server plugin.
  .use(require("multicolour-server-hapi"))

// Seed the database with random data based on
// your blueprints.
my_service.use(require("multicolour-seed"))

  // Register the auth plugin to the server.
my_service.get("server")
  .use(require("multicolour-hapi-jsonapi"))
  // .use(require("multicolour-auth-oauth"))

  // Start the service.
my_service.start()
