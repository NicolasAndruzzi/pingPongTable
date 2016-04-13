
app.controller("onTheTableController", function ($scope, socket) {
  socket.on("scores", function (scores) {
    console.log(scores)
  })
})
