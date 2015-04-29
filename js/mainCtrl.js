var app = angular.module('anywhereintheworld');

app.controller('mainCtrl', function($scope, homeService){

	$scope.searchTerm = function(){
		homeService.searchTerm($scope.location, $scope.near).then(function(resFromService){
			// console.log("resFromService", resFromService);
			$scope.searchResults = resFromService;
			// console.log("$scope.searchResults", $scope.searchResults);
			
			$scope.location = "";
			$scope.near = "";
		})

	};	// End $scope.searchTerm
	
});	// End app.controller