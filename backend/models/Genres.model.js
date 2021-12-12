const mongoose = require("mongoose");

const GenreSchema = mongoose.Schema({
  name: String,
  desc: String,
  search_tags: [String]
},{ timestamps: { currentTime: ()=> Date.now() } })

GenreSchema.virtual('id').get(function(){
	return this._id.toHexString();
});

GenreSchema.set('toJSON', {
	virtuals: true
});

module.exports = mongoose.model('Genres', GenreSchema, ' Genres');
