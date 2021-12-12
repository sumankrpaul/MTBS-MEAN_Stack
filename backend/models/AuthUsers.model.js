const mongoose = require("mongoose");
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const configs = require('../configs');

const saltRounds = 10;

const AuthUserSchema = new mongoose.Schema({
  email: {type: String, index: { unique: true }},
  password: String,
  isAdmin: {
    type: Boolean, default: false
  },
  adminProfile: {
    type:mongoose.Schema.Types.ObjectId,
    ref: 'Admin',
    default: null
  },
  customerProfile: {
    type:mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
    default: null
  },
}, { timestamps: { currentTime: ()=> Date.now() } })

// Encrypt Password

getEncryptPassword = (password) => {
	const salt = bcrypt.genSaltSync(saltRounds);
	const hash = bcrypt.hashSync(password, salt);
	return hash
}

AuthUserSchema.statics.getEncryptPassword = getEncryptPassword;

AuthUserSchema.pre('save', function (next) {
	const userSchema = this;
	this.isModified
	if(userSchema.isModified('password')){
    const hash = getEncryptPassword(userSchema.password);
		userSchema.password = hash;
		next();
	} 
	if(userSchema.isModified('email')) {
		userSchema.email = userSchema.email.toLowerCase();
		next();
	} else {
		next();
	}
});

// Compare Password

AuthUserSchema.methods.comparePassword = function (password) {
	return new Promise((resolve, reject)=>{
		bcrypt.compare(password, this.password, (err, isMatch)=>{
			if(err) reject(err);
			resolve(isMatch);
		})
	})
}

// Send User Token
AuthUserSchema.methods.generateToken = function() {
	const token=jwt.sign(this.id,configs.secret_string);
	return token;
}

AuthUserSchema.statics.getUserByToken = function(token) {
	return new Promise((resolve, reject)=> {
		jwt.verify(token, configs.secret_string, (err, decode)=>{
			if(err) reject(err);
			else {
				this.findOne({"_id": decode}).exec((err, user)=>{
					if(err) reject(err);
					else resolve(user);
				});
			}
		});
	});
}

// Define virtual
AuthUserSchema.virtual('id').get(function(){
	return this._id.toHexString();
});

AuthUserSchema.virtual('adminProfileId').get(function(){
  if(this.adminProfile){
    return this.adminProfile.toHexString();
  }
  return null;
});

AuthUserSchema.virtual('customerProfileId').get(function(){
	if(this.customerProfile){
    return this.customerProfile.toHexString();
  }
  return null;
});

AuthUserSchema.set('toJSON', {
	virtuals: true
});

module.exports = mongoose.model('AuthUser', AuthUserSchema, 'AuthUser');
