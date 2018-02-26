
//import controllers
var messages = require('./../controllers/messages')


module.exports = function(app){

  app.get('/', messages.index)
  app.post('/', messages.create)
  app.post('/:message_id', messages.comment)

}
