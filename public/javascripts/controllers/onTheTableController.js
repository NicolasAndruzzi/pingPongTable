
app.controller("onTheTableController", function ($scope, socket) {
  socket.on("scores", function (scores) {
    console.log(scores)
    $scope.playerOneScore = scores.playerOneScore;
    $scope.playerTwoScore = scores.playerTwoScore;
    $scope.$digest()
  })
})
