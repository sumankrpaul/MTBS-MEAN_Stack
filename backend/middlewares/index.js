const authenticate = require('./authenticate');
const HandleErrorsFunctions = require('./errorObject');

module.exports = {
  handleErrorFunction: HandleErrorsFunctions,
  authenticate: authenticate
}