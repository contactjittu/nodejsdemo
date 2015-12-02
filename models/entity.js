var mongoose = require('mongoose')
    ,Schema = mongoose.Schema;

var blogSchema = new Schema({
  bookName:  {type:String},
  author: {type:String},
  desc:   {type:String}
});
var blog = mongoose.model('blogdata', blogSchema);    

module.exports = {
	blog:blog,
};
