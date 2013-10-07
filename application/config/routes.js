var index = require('../controllers/index');

var Routes = function (app) {
  app.get('/', index.index)
}

module.exports = Routes