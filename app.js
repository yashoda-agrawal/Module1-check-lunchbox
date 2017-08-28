(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController',LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.itemList = "";
  $scope.message = "";
  $scope.checkItem = function () {
    var numberOfItem = calculateItem($scope.itemList)
    if(numberOfItem == 0){
      $scope.message = "Please enter data first";
    } else if (numberOfItem > 3) {
      $scope.message = "Too much!";
    } else if(numberOfItem <= 3) {
      $scope.message = "Enjoy!";
    }
  };
  function calculateItem(string){
    if(string==""){
      return 0;
    }
    var itemCount = 0;
    var items = string.split(",");
    for (var i = 0; i < items.length; i++) {
      itemCount += 1;
    }
    return itemCount;
  }
}

})();
