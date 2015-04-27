var app = angular.module('anywhereintheworld');

app.controller('mainCtrl', function($scope, mainService){
	// $scope.test = "WORK!";
	$scope.searchTerm = function(){
		mainService.searchTerm($scope.location, $scope.near).then(function(resFromService){
			console.log("resFromService", resFromService);
			$scope.searchResults = resFromService;
			$scope.location = "";
			$scope.near = "";
		})

	};	// End $scope.searchTerm

	$scope.igResults = function(){
		mainService.instagramResults($scope.searchTerm).then(function(igResFromService){
			console.log("igResFromService", igResFromService);
			$scope.igSearchResults = igResFromService;
		})

	};	// End $scope.igResults

});	// End app.controller