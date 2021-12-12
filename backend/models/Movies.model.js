const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  name: {type: String, default: '' },
  desc: {type: String, default: ''},
  genres: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Genres'
    }]
},{ timestamps: { currentTime: ()=> Date.now() } })

MovieSchema.pre('save', function (next){
	if(this.isModified('email')) {
		this.email = this.email.toLowerCase();
		next();
	} else {
		next();
	}
});

MovieSchema.virtual('id').get(function(){
	return this._id.toHexString();
});

MovieSchema.virtual('fullName').get(function(){
	return `${this.first_name} 
  ${this.middle_name.length? this.middle_name+" ": '' }
  ${this.last_name}`;
});


MovieSchema.set('toJSON', {
	virtuals: true
});

module.exports = mongoose.model('Movies', MovieSchema, ' Movies');
