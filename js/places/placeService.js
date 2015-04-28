var app = angular.module('anywhereintheworld');

app.service('placeService', function($http, $q, homeService, instagram){

	var parsedResArr2 = homeService.parsedResArr;
	var igParsedResponse = undefined;
	var igParsedMediaResponse = undefined;

	// INSTAGRAM - USER SELECTION
	this.getPlaceData = function(place){

		// console.log("place", place);
		
		var dfd = $q.defer();

		$http({
			method: "GET",
			url: "https://api.instagram.com/v1/locations/search?foursquare_v2_id=" + place.fsLocationId + "&client_id=" + instagram.id
		}).then(function(igResponse){
			// console.log("igResponse", igResponse);
			igParsedResponse = igResponse.data.data;
			// console.log("igParsedResponse", igParsedResponse);
			place.igLocationId = igParsedResponse[0].id;
			place.igLocationLat = igParsedResponse[0].latitude;
			place.igLocationLng = igParsedResponse[0].longitude;
			place.igLocationName = igParsedResponse[0].name;
			console.log("placeData", place);

			$http({
				method: "GET",
				url: "https://api.instagram.com/v1/locations/" + place.igLocationId + "/media/recent?client_id=" + instagram.id
			}).then(function(igMediaResponse){
				console.log("igMediaResponse", igMediaResponse)
				igParsedMediaResponse = igMediaResponse.data.data;
				// console.log("igParsedMediaResponse", igParsedMediaResponse);

				place.mediaDataArray = [];
				for (var i = 0; i < igParsedMediaResponse.length; i++) {
					var mediaDataObj = {
						dateCreated: igParsedMediaResponse[i].created_time,
						imageUrl: igParsedMediaResponse[i].images.standard_resolution.url,
						imageThumb: igParsedMediaResponse[i].images.thumbnail.url,
						likeCount: igParsedMediaResponse[i].likes.count,
						username: igParsedMediaResponse[i].user.username,
						usernameProfPic: igParsedMediaResponse[i].user.profile_picture
					};	// End place.mediaArray
					// console.log("place", place);
					place.mediaDataArray.push(mediaDataObj);
					// place.mediaDataObj.push(mediaDataArray);
				};	// End for loop
				// console.log("place", place);
				

			});	// End 

			dfd.resolve(place);

		});	// End .then(function(igResponse)

		return dfd.promise;
		
	};	// End this.getPlaceData

});	// End app.service