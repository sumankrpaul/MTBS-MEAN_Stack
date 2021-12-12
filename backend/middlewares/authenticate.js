const HandleErrorsFunctions = require('./errorObject');
const AuthUser = require('../models').authUsersModel;
const Customer = require('../models').customersModel;
const Admin = require('../models').adminModel;

const authenticate = async (req, res, next) => {
  try {
    const {headers} = req;
    if(headers.authorization) {
      const user = await AuthUser
      .getUserByToken(headers.authorization);
      
      if(user) {
        req.user = {
          isAdmin: user.isAdmin,
          profile: user.adminProfile || user.customerProfile
        }
        next();
        return;
      }
    }

    res.status(401).json({
      status: "failure",
      message: "You are not logged in"
    })
      
  } catch(e) {
    const {statusCode, ...errorResponse} = new HandleErrorsFunctions.handleError(e);
    res.status(statusCode)
    .json(errorResponse)
  }
}

module.exports = authenticate;