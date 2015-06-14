var app = angular.module('anywhereintheworld', ['ui.router']);

app.constant('foursquare', {
  id: "TYX5XVC5JWHLR5B1JIQPHK41WY4ED14FH40RR2G4NCXJQTHJ",
  secret: "JYVVYGTZVZCPCPPTH0DNJ5BRFSPJZ2XDQ2ISR55J2STWVH5I"
}); // End app.constant

app.constant('instagram', {
  id: "8f8597fce788481a96b2a82d6e3cc475",
  secret: "f1e8b302e1e54aeaa36a0ba19009276c"
}); // End app.constant


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