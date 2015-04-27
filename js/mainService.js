var app = angular.module('anywhereintheworld');

app.service('mainService', function($http, $q, foursquare, instagram){
	// FOURSQUARE
	this.searchTerm = function(place, near) {
		var dfd = $q.defer();
		$http({
			method: "GET",
			url: "https://api.foursquare.com/v2/venues/search/?client_id=" + foursquare.id + "&client_secret=" + foursquare.secret + "&limit=25&radius=100000&v=20150424&intent=browse&near=" + near + "&query=" + place
		}).then(function(response){
			// console.log("Response", response);
			var parsedRes = response.data.response.venues;
			// console.log("parsedRes", parsedRes);
			var parsedResArr = [];
			for (var i = 0; i < parsedRes.length; i++) {
				var locationId = parsedRes[i].id;
				var newObj = {
					Place: parsedRes[i].name,
					StreetAddress: parsedRes[i].location.address,
					City: parsedRes[i].location.city,
					State: parsedRes[i].location.formattedAddress.state,
					ZipCode: parsedRes[i].location.formattedAddress.postalCode,
					Country: parsedRes[i].location.country,
					Latitude: parsedRes[i].location.formattedAddress.lat,
					Longitude: parsedRes[i].location.formattedAddress.lng,
					Checkins: parsedRes[i].stats.checkinsCount,
					LocationId: locationId
				};
				parsedResArr.push(newObj);
				parsedResArr.sort(function(a, b){
					if (a.Checkins < b.Checkins) {
						return 1;
					}
					else if (a.Checkins > b.Checkins) {
						return -1;
					}
					// If a is equal to b
					return 0;
				});

			}
			var locationID = newObj.LocationId;
			// console.log("Arr", parsedResArr);
			dfd.resolve(parsedResArr);
		})

		return dfd.promise;

	};	// End this.searchTerm


	// // INSTAGRAM
	// this.instagramResults = function(){
	// 	console.log("HEY");
	// 	var dfd = $q.defer();
	// 	$http({
	// 		method: "GET",
	// 		url: "https://api.instagram.com/v1/locations/search?client_id=" + instagram.id + "&foursquare_v2_id=8f8597fce788481a96b2a82d6e3cc475"

	// 		// "https://api.instagram.com/v1/locations/1335051/media/recent?client_id=8f8597fce788481a96b2a82d6e3cc475"

	// 	}).then(function(response){
	// 		console.log("IG response", response);
	// 		var parsedRes = response;
	// 		dfd.resolve();
	// 	})
	// 	return dfd.promise;

	// };	// End this.instagramResults


});	// End app.service