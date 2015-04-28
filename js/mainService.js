var app = angular.module('anywhereintheworld');

app.service('mainService', function($http, $q, foursquare, instagram){

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
					Latitude: parsedRes[i].location.formattedAddress.lat,
					Longitude: parsedRes[i].location.formattedAddress.lng,
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




// for (var key in newObj) {
			// 	if (key === 'igLocationId') {
			// 		// console.log("key:", key);
			// 		instagramLocationId = newObj[key];
			// 	}
			// };	// End for loop
			// console.log("instagramLocationId", instagramLocationId);

			// $http({
			// 	method: "GET",
			// 	url: "https://api.instagram.com/v1/locations/" + instagramLocationId + "/media/recent?&client_id=" + instagram.id
			// }).then(function(igResponse2){
			// 	// console.log("igResponse2", igResponse2);
			// 	igMediaData = igResponse2.data.data;
			// 	console.log("igMediaData", igMediaData);
			// 	console.log("parsedResArr", parsedResArr);
			// 	// for (var m = 0; m < parsedResArr.length; m++) {
			// 	// 	if (parsedResArr[m].igLocationId === instagramLocationId) {
			// 	// 		// console.log("igMediaData", igMediaData);
			// 	// 		newObj.Latitude = igParsedResponse[m].location.latitude;
			// 	// 		newObj.Longitude = igParsedResponse[m].location.longitude;
			// 	// 		newObj.mediaUrl = igParsedResponse[m].images.standard_resolution.url;
			// 	// 		newObj.mediaCaption = igParsedResponse[m].caption.text;
			// 	// 		newObj.mediaOwnerUsername = "@" + igParsedResponse[m].caption.from.username;
			// 	// 		newObj.mediaOwnerProfPicUrl = igParsedResponse[m].caption.from.profile_picture;
			// 	// 	}
			// 	// }	// End for loop

			// 	// console.log("igResponse2", igResponse2);
			// });	// End .then(function(igReponse2)



						
						// 		// if (key === 'fsLocationId') {
						// 		// 	// console.log("key:", key);
						// 		// 	var foursquareLocationId = newObj[key];
						// 		// }
							// };	// End nested for loop
							// console.log("newObj.igLocationId", newObj.igLocationId);






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
						// igLocationId: igParsedRes[j].location.id,
						// Latitude: igParsedRes[j].location.latitude,
						// Longitude: igParsedRes[j].location.longitude,
						// mediaUrl: igParsedRes[j].images.standard_resolution.url,
						// mediaCaption: igParsedRes[j].caption.text,
						// mediaOwnerUsername: "@" + igParsedRes[j].caption.from.username,
						// mediaOwnerProfPicUrl: igParsedRes[j].caption.from.profile_picture,
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