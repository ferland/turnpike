var config = require('./config.js');

module.exports = function (app, setup, env) {
  
  app.set('showStackError', true)
  app.set('views', setup.root + '/application/views')
  app.set('view engine', 'jade')
  
  app.use(config.express.compress({
    filter: function (req, res) {
      return /json|text|javascript|css/.test(res.getHeader('Content-Type'))
    },
    level: 9
  }))

  app.use(config.express.static(setup.root))
  app.use(config.express.static(setup.root + '/public'))
  app.use(config.express.bodyParser())
  app.use(app.router)
  app.use(function(err, req, res, next){
      // treat as 404
      if (err.message
        && (~err.message.indexOf('not found')
        || (~err.message.indexOf('Cast to ObjectId failed')))) {
        return next()
      }

      // log it
      // send emails if you want
      console.error(err.stack)

      // error page
      res.status(500).render('500', { error: err.stack })
    })
}
