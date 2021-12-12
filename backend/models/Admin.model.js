const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
  first_name: {type: String, default: '' },
  middle_name: {type: String, default: ''},
  last_name: {type: String, default: ''},
  email: {type: String, index: { unique: true }},
  position: {type: String, default: 'Admin'}
},{ timestamps: { currentTime: ()=> Date.now() } })

AdminSchema.pre('save', function (next){
	if(this.isModified('email')) {
		this.email = this.email.toLowerCase();
		next();
	} else {
		next();
	}
});

AdminSchema.virtual('id').get(function(){
	return this._id.toHexString();
});

AdminSchema.virtual('fullName').get(function(){
	return `${this.first_name} ${this.middle_name.length? this.middle_name+" ": '' } ${this.last_name}`;
});

AdminSchema.set('toJSON', {
	virtuals: true
});

module.exports = mongoose.model('Admins', AdminSchema, 'Admins');
