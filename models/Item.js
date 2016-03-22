var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itemSchema = new Schema({
   _user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
    },
    name : {
      type:String,
    },
    cost : {
      type:Number,
    },
    descritpion : {
      type: String,
    }
});

var Item = mongoose.model('Item', itemSchema);
module.exports = Item;