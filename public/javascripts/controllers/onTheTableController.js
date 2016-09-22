
app.controller("onTheTableController", function ($scope, socket) {
    $scope.playerOneScore = 0;
    $scope.playerTwoScore = 0;
  socket.on("scores", function (scores) {
    console.log(scores)
    $scope.playerOneScore = 0;
    $scope.playerTwoScore = 0;
    // $scope.playerOneScore = scores.playerOneScore;
    // $scope.playerTwoScore = scores.playerTwoScore;
    // $scope.$digest()
  })
})
