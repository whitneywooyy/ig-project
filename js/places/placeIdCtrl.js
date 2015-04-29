var app = angular.module('anywhereintheworld');

app.controller('placeIdCtrl', function($scope, placeService, placeData){

	$scope.whatever = placeService.individualPlaceData;

});	// End app.controller