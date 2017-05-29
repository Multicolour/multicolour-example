# Multicolour Example App

[![Greenkeeper badge](https://badges.greenkeeper.io/Multicolour/multicolour-example.svg)](https://greenkeeper.io/)

Example Multicolour App with Hapi server, Mongo and OAuth.

### Getting started

[![Join the chat https://gitter.im/newworldcode/multicolour](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/newworldcode/multicolour?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

This example app will connect to your Mongo database server, if you haven't used Mongo
before or don't have a server to connect to, please read the [Mongo Getting Started][mongo-get-started] documentation to get your own Mongo server up.

If you already have a Mongo server running, following these steps will get your server up and running.

1. Update the database configuration to your Mongo connection settings in `config.js`.  
2. Run `npm i` in the terminal to get the dependencies for the app.  
3. To use the auth plugin you'll need a registered app on the service you want to use and to add your configuration to `config.js`, also uncomment line #18 in `app.js` to enable the module.

Running `npm start` will start the server up and if your `NODE_ENV` is `"development"` it will automatically seed your database with random data. This seed will happen every time you start the server unless you comment out line #14 in `config.js`.

Once you get the `"Server running at: http://your-server:1811"` message you can view the Swagger docs by visiting [http://localhost:1811/docs](http://localhost:1811/docs).

Edit and create blueprints in the `content/blueprints` to add/edit/remove endpoints from your API.  

To learn more about the structure of these schemas, see the [Multicolour blueprint documentation](https://github.com/Multicolour/multicolour/wiki/Blueprints) or to read about how to add
[custom routes](https://github.com/Multicolour/multicolour/wiki/Routing)  

Read more on the [Multicolour wiki](https://github.com/Multicolour/multicolour/wiki)

### I don't want to use Mongo

You don't have to, Multicolour uses Waterline as it's ORM and you can switch your database tech per environment, per blueprint, however you like. Below is a list of officially supported adapters:

* `sails-disk`
* `sails-memory`
* `sails-redis`
* `sails-postgresql`
* `sails-mongo`
* `sails-mysql`
* `sails-arango`

Simply update the `require("sails-mongo")` on line #69 of `config.js` and update the connection details.

MIT 2016

[mongo-get-started]: https://docs.mongodb.org/getting-started/shell/introduction/
