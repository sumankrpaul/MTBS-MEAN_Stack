const middlewares = require('../middlewares');
const Service = require('../services');

module.exports = {
  signIn: async (req, res) => {
    try {
      const { body } = req;
      if(body.email && body.email.length && body.password && body.password.length){
        const admin = await Service.adminService.checkExistingAdmin(body.email);
        if(admin.length) {
          try {
            const response = await Service.adminService.signInAdmin(body.email, body.password);
            if(response){
              res.json({
                status: "success",
                details: response
              });

            } else {
              res.status(404).json({
                status: "failure",
                message: "Sorry, you are not admin"
              });
            }
            return;
          } catch (e) {
            if(e.message === "PasswordWrong"){
              throw new middlewares.handleErrorFunction.generateAppError("The password is wrong ", 400);
            } else throw e;
          }
        }
        throw new middlewares.handleErrorFunction.generateAppError("This Email is not registered", 404);
      }
      throw new middlewares.handleErrorFunction.generateAppError("Email is required", 400);
    }
    catch (e) {
      const {statusCode, ...errorResponse} = new middlewares.handleErrorFunction.handleError(e);
      res.status(statusCode)
      .json(errorResponse)
    }
  },
  addNewAdmin: async (req, res) => {
    try {
      const {body} = req;
      if(body.email && body.email.length && body.default_password && body.default_password.length) {
        const admin = await Service.adminService.checkExistingAdmin(body.email);
        if(!admin.length) {
          await Service.adminService.insertNewAdmin(body);
          res.json({
            status: "success",
            message: "Admin added successfully"
          });
          return;
        }
        throw new middlewares.handleErrorFunction.generateAppError("Email already registered as Admin", 400);
      }

      throw new middlewares.handleErrorFunction.generateAppError("Email and Default Password is required", 400);

    } catch (e) {
      const {statusCode, ...errorResponse} = new middlewares.handleErrorFunction.handleError(e);
      res.status(statusCode)
      .json(errorResponse)
    }
  },
  listOfAllAdmins: async (req, res) => {
    try {
      const adminList = await Service.adminService.getAdminList();
      res.json({
        status: "success",
        admin_list: adminList
      })
    } catch (e) {
      const {statusCode, ...errorResponse} = new middlewares.handleErrorFunction.handleError(e);
      res.status(statusCode)
      .json(errorResponse)
    }
  }
}