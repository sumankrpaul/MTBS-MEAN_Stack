const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
  first_name: {type: String, default: '' },
  middle_name: {type: String, default: ''},
  last_name: {type: String, default: ''},
  email: {type: String, index: { unique: true }},
  position: {type: String, default: 'Admin'}
},{ timestamps: { currentTime: ()=> Date.now() } })

CustomerSchema.pre('save', function (next){
	if(this.isModified('email')) {
		this.email = this.email.toLowerCase();
		next();
	} else {
		next();
	}
});

CustomerSchema.virtual('id').get(function(){
	return this._id.toHexString();
});

CustomerSchema.virtual('fullName').get(function(){
	return `${this.first_name} 
  ${this.middle_name.length? this.middle_name+" ": '' }
  ${this.last_name}`;
});

CustomerSchema.set('toJSON', {
	virtuals: true
});

module.exports = mongoose.model('Customers', CustomerSchema, ' Customers');
