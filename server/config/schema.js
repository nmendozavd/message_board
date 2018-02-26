var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/message_board_db');
mongoose.Promise = global.Promise;

var Schema = mongoose.Schema;

var CommentSchema = new Schema({
  name:{type:String, required:true, minlength:4},
  text:{type:String, required:true},
}, {timestamps:true});

var MessageSchema = new Schema({
  name:{type:String, required:true, minlength:4},
  text:{type:String, required:true},
  comments:[CommentSchema] //comments will be embedded documents
}, {timestamps:true});

mongoose.model('Message', MessageSchema);
