var config = require('./application/config/config.js')

var app = config.express()
, port = config.port
, env = process.env.NODE_ENV || 'development'
, setup = require('./application/config/setup')[env];

if ('development' == env) {
  require("./application/config/development")(app, config.express, setup, require('connect-assets'));
}
require('./application/config/routes')(app)
require('./application/config/express')(app, setup, env)

exports.server = config.http.createServer(app).listen(port, function(){
    console.log("Server is running in " + "port %d and " + "%s mode", port, env)
});