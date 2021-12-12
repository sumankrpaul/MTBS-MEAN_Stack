const HandleErrorsFunctions = {
  handleError: function(err) {
    if(!err.statusCode) {
      console.log(err);
    }
    this.message = err.message;
    this.statusCode = err.statusCode || 500;
    this.status = 'failure';
  },
  generateAppError: function(message, status = 500) {
    this.message = message;
    this.statusCode = status;
    this.status = 'failure';
  }
}

module.exports = HandleErrorsFunctions;