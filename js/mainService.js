var app = angular.module('anywhereintheworld');

app.service('mainService', function($http, $q, foursquare, instagram){
	// FOURSQUARE
	this.searchTerm = function(place, near) {
		// FOURSQUARE
		var dfd = $q.defer();
		$http({
			method: "GET",
			url: "https://api.foursquare.com/v2/venues/search/?client_id=" + foursquare.id + "&client_secret=" + foursquare.secret + "&limit=25&radius=100000&v=20150424&intent=browse&near=" + near + "&query=" + place
		}).then(function(fsResponse){
			// FOURSQUARE DATA
			var parsedRes = fsResponse.data.response.venues;
			console.log("parsedRes", parsedRes);
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
					fsLocationId: parsedRes[i].id
				};	// End newObj
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
				});	// End parsedResArr.sort

				for (var j = 0; j < parsedResArr.length; j++) {
					for (var key in newObj) {
						if (key === 'fsLocationId') {
							// console.log("key:", key);
							var foursquareLocationId = newObj[key];
						}
					};	// End nested for loop
				};	// End outer for loop
				console.log(j, "foursquare id", foursquareLocationId);

			}	// End for loop
			// console.log("Arr", parsedResArr);
			dfd.resolve(parsedResArr);
		})

		return dfd.promise;

	};	// End this.searchTerm

});	// End app.service



// 			// // INSTAGRAM
// 			// var deferred = $q.defer();
// 			// $http({
// 			// 	method: "GET",
// 			// 	url: "https://api.instagram.com/v1/locations/search?foursquare_v2_id=" + foursquareLocationId + "&client_id=" + instagram.id
// 			// }).then(function(igResponse){
// 			// 	var igParsedRes = igResponse.data;
// 			// 	console.log("ig response", igParsedRes);
// 			// 	// for (var k = 0; k < parsedResArr.length; k++) {

// 			// 	// }
// 			// 	// for (var j = 0; j < igParsedRes.length; j++) {
// 			// 	// 	var newObj2 = {	
// 			// 	// 		// Instagram Data
// 			// 	// 		igLocationId: igParsedRes[j].location.id,
// 			// 	// 		Latitude: igParsedRes[j].location.latitude,
// 			// 	// 		Longitude: igParsedRes[j].location.longitude,
// 			// 	// 		mediaUrl: igParsedRes[j].images.standard_resolution.url,
// 			// 	// 		mediaCaption: igParsedRes[j].caption.text,
// 			// 	// 		mediaOwnerUsername: "@" + igParsedRes[j].caption.from.username,
// 			// 	// 		mediaOwnerProfPicUrl: igParsedRes[j].caption.from.profile_picture,
// 			// 	// 	};	// End newOnj
// 			// 	// };	// End for loop
					
					
// 			// })	// End .then(function(igResponse)
// 			// console.log("Arr", parsedResArr);
// 			dfd.resolve(parsedResArr);

// 		});	// End then(function(fsResponse)
			
			

// 		return dfd.promise;
// };	// End app.service


// 	// // INSTAGRAM
// 	// this.instagramResults = function(){
// 	// 	console.log("HEY");
// 	// 	var dfd = $q.defer();
// 	// 	$http({
// 	// 		method: "GET",
// 	// 		url: "https://api.instagram.com/v1/locations/search?client_id=" + instagram.id + "&foursquare_v2_id=8f8597fce788481a96b2a82d6e3cc475"

// 	// 		// "https://api.instagram.com/v1/locations/1335051/media/recent?client_id=8f8597fce788481a96b2a82d6e3cc475"

// 	// 	}).then(function(response){
// 	// 		console.log("IG response", response);
// 	// 		var parsedRes = response;
// 	// 		dfd.resolve();
// 	// 	})
// 	// 	return dfd.promise;

// 	// };	// End this.instagramResults


// 	// Foursquare location id for testing: 41326e00f964a520c9141fe3


// 	// End app.service