var config = require('../config/config.js')

index = {
  index : function(req, res){
    res.render('dashboard/index')
  }
}

module.exports = index;