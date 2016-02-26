"use strict"

module.exports = {
  // Where is your content? blueprints, etc
  content: `${__dirname}/content`,

  settings: {
    // Set the timeout to 30 seconds.
    timeout: 3e4,

    results: {
      // This limits the number of results
      // per page, it also affects the number
      // of results returned by any associations
      // your blueprints have
      per_page: 20
    }
  },

  auth: {
    // CHANGE THIS
    password: "wbhurigrwbjkgbjkwrnguhguirwhgo9824yt8942hio24tjpo24thioy98GO*I^&IRD%^F*YIUOVFU",

    // Configure a Twitter auth strategy.
    providers: [
      // {
      //   provider: "twitter",
      //   clientId: "",
      //   clientSecret: "",
      //   isSecure: false
      // }
    ]
  },

  // Configure the Hapi server.
  // These objects are passed directly to Hapi
  // and are not abstracted at all, all config
  // available to Hapi are available to Multicolour.
  api_connections: {
    port: 1811,
    host: "localhost",
    routes: {
      cors: {
        // You should update this to reflect only
        // the domains you wish to allow access to
        // the API being generated.
        origin: [ "localhost:1811" ]
      }
    },
    router: { stripTrailingSlash: true }
  },

  api_server: {
    connections: {
      routes: {
        security: true
      }
    },
    debug: { request: ["error"] }
  },

  // Configure your connections here,
  // if you do not specify a connection
  // in your blueprint, Multicolour will
  // connect to whatever the value of
  // process.env.NODE_ENV.toLowerCase() is
  // which in most cases is "development"
  db: {
    adapters: {
      mongo: require("sails-mongo")
    },
    connections: {
      development: {
        adapter: "mongo",
        host: "localhost",
        port: 27017,
        database: "multicolour"
      },
      production: {
        adapter: "mongo",
        host: "localhost",
        port: 27017,
        database: "multicolour"
      }
    }
  }
}
