const Models = require("../models");

module.exports = {
  signInAdmin: async (email, password) => {
    const authUsers = await Models.authUsersModel.findOne({email: email.toLowerCase()});
    if(authUsers && authUsers.isAdmin) {
      const isMatch = authUsers.comparePassword(password);
      if(isMatch) {
        const token = authUsers.generateToken();
        const adminProfile = await Models.adminModel.findById(authUsers.adminProfile);
        return {
          authToken: token,
          profile: adminProfile.toJSON()
        }
      } 
      throw new Error("PasswordWrong");
    } 
    return null;
  },
  insertNewAdmin: async (adminDetails) => {
    const newAdmin = new Models.adminModel(adminDetails);
    const insertedAdmin = await newAdmin.save();
    const adminAuth = new Models.authUsersModel({
      email: adminDetails.email,
      password: adminDetails.default_password,
      adminProfile: insertedAdmin._id
    });
    await adminAuth.save();
  },
  checkExistingAdmin: async (admin_email) =>{
    if(admin_email) {
      const admins = await Models.adminModel.find({email: admin_email});
      return admins.map((admin)=> admin.toJSON());
    } else {
      throw new Error("NoEmail");
    }
  },
  getAdminList: async () => {
    const admins = await Models.adminModel.find();
    return admins.map((admin)=> admin.toJSON());
  }
}