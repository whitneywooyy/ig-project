var app = angular.module('anywhereintheworld');

app.controller('placeCtrl', function($scope, homeService, placeService, $location, $timeout){

	// $scope.individualPlaceData = placeData;
	$scope.getPlaceData = function(place){
		placeService.getPlaceData(place).then(function(res){
			// console.log("res", res);
			$scope.placeData = res;
			console.log("$scope.placeData", $scope.placeData);
			// $timeout(function(){
			// 	$location.path('/places/placeId');
			// }, 10000);
		})
	}

});	// End app.controller