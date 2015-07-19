var app = angular.module('anywhereintheworld', ['ui.router']);




app.config(function($stateProvider, $urlRouterProvider){
    
    $urlRouterProvider
    .otherwise("/");

    //router here
    $stateProvider
    .state('home', {
      url: '/'
    })
    .state('places', {
      url: "/places",
      templateUrl: "js/places/placeTmpl.html",
      controller: "placeCtrl",
      // resolve: {
      //   placeData: function($){

      //   }
      // }
      // resolve: {
      //   placeData: function($route, placeService) {
      //     return placeService.getPlaceData($route.current.params.place);
      //   }
      // }
    })  // End .state
    .state('places.placeId', {
      url: "/placeId",
      templateUrl: "js/places/placeTmpl.placeId.html",
      controller: "placeIdCtrl",
      resolve: {
        placeData: function(placeService, place){
          console.log("$scope.place", $scope.place);
          return placeService.individualPlaceData;
        }
      }
    })  // End .state


}); // End app.config