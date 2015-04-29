var app = angular.module('anywhereintheworld');

app.controller('mainCtrl', function($scope, homeService){

	$scope.searchTerm = function(){
		homeService.searchTerm($scope.location, $scope.near).then(function(resFromService){
			// console.log("resFromService", resFromService);
			$scope.searchResults = resFromService;
			
			$scope.location = "";
			$scope.near = "";
		})

	};	// End $scope.searchTerm
	
});	// End app.controller