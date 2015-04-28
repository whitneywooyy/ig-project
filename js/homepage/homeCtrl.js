var app = angular.module('anywhereintheworld');

app.controller('homeCtrl', function($scope, placeService){
	$scope.getPlaceData = placeService.getPlaceData;
});	// End app.controller