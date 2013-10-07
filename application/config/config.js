var config = {
  path :require('path'),
  http:require('http'),
  passport :require('passport'),
  express: require('express'),
  port :process.env.PORT || 8888
}

module.exports = config;