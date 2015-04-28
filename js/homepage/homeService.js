var app = angular.module('anywhereintheworld');

app.service('homeService', function($http, $q, foursquare, instagram){

		var parsedRes = undefined;
		var parsedResArr = [];
		var newObj = {};
		var foursquareLocationId = undefined;
		var igParsedResponse = undefined;
		var instagramLocationId = undefined;
		var igMediaData = undefined;

	// FOURSQUARE
	this.searchTerm = function(place, near) {
		var dfd = $q.defer();
		$http({
			method: "GET",
			url: "https://api.foursquare.com/v2/venues/search/?client_id=" + foursquare.id + "&client_secret=" + foursquare.secret + "&limit=10&radius=100000&v=20150424&intent=browse&near=" + near + "&query=" + place
		}).then(function(fsResponse){
			parsedRes = fsResponse.data.response.venues;
			// parsedRes.forEach(function(item, index){
			for (var i = 0; i < parsedRes.length; i++) {
				// console.log("Index", index);
				newObj = {
					Place: parsedRes[i].name,
					StreetAddress: parsedRes[i].location.address,
					City: parsedRes[i].location.city,
					State: parsedRes[i].location.formattedAddress.state,
					ZipCode: parsedRes[i].location.formattedAddress.postalCode,
					Country: parsedRes[i].location.country,
					Checkins: parsedRes[i].stats.checkinsCount,
					fsLocationId: parsedRes[i].id
				};	// End newObj
				parsedResArr.push(newObj);
			};	// End for loop

			parsedResArr.sort(function(a, b){
				if (a.Checkins < b.Checkins) {
					return 1;
				}
				else if (a.Checkins > b.Checkins) {
					return -1;
				}
				// If a is equal to b
				return 0;
			});	// End parsedResArr.sort

			console.log("parsedResArr", parsedResArr);
				
			dfd.resolve(parsedResArr);

		})	// End .then(function(fsResponse)

		return dfd.promise;
			
	};	// End this.searchTerm

});	// End app.service