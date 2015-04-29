var app = angular.module('anywhereintheworld');

app.controller('placeCtrl', function($scope, $routeParams, mainCtrl, placeService){
		$scope.whatever = function(){
			$routeParams.placeId = placeService.fsLocationId;
			console.log("$routeParams.placeId", $routeParams.placeId);
		};	
});	// End app.controller