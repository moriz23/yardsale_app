var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    username : {
      type : String,
      unique : true
    },
    password: {
      type : String,
    },
    createdDate : {
      type : Date,
      default : Date.now()
    },
    items : [{
       type : Schema.Types.ObjectId,
        ref : 'Item'
      }]
});

var User = mongoose.model('User', userSchema);
module.exports = User;