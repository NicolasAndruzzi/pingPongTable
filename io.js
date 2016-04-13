var Socket = require('socket.io');
var io = Socket()
io.on('connection', function(socket){
  console.log('Someone connected');
})
module.exports = io
