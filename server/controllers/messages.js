var mongoose = require('mongoose')
var Message = mongoose.model('Message')



exports.index = function(req, res){
  Message.find({}, function(errors, messages){

    if(errors){
      console.log(errors)
      res.render('index', {messages:[]})
    } else {
      console.log(messages)
      res.render('index', {messages: messages})
    }

  }).sort({createdAt:-1})
}

exports.create = function(req, res){

  var newMessage = new Message({name:req.body.name, text:req.body.text})
  newMessage.save(function(err){
    if (err){
      console.log(err)
      res.redirect('/')
    } else {
      console.log('new message successfully created')
      res.redirect('/')
    }
  })

}

exports.comment = function(req, res){
  console.log("attempting to add comment to message with ID...")
  console.log(req.params.message_id)

  Message.findOne({_id:req.params.message_id}, function(err, message){

    var comment = {name:req.body.name, text:req.body.text}
    message.comments.push(comment);
    message.save(function(message_error){
      if (message_error){
        console.log(message_error);
        res.redirect('/')
      } else {
        console.log("comment saved to message successfully")
        res.redirect('/')
      }

    })

  })


}
