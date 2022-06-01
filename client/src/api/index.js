const apiHost = "travel-advisor.p.rapidapi.com";
const apiKey = "5009b575bdmsha4a5bfbaece4c63p13b650jsne6d2ae8df5e3";
const options = {
    headers: {
        "x-rapidapi-host": apiHost,
        "x-rapidapi-key": apiKey,
    },
};

var getLocationId = function (locationName) {
    var apiURL = `https://travel-advisor.p.rapidapi.com/locations/search?query=${locationName}&limit=30&offset=0&units=mi&location_id=1&currency=USD&sort=relevance&lang=en_USommended`;

    fetch(apiURL, options)
        .then(function (response) {
            response.json().then(function (data) {
                
                locationID = data.data[0].result_object.location_id;
                get10Attractions(locationID);
            })
        })
}

var get10Attractions = function (id) {
    var apiURL = `https://travel-advisor.p.rapidapi.com/attractions/list?location_id=${id}&currency=USD&lang=en_US&lunit=mi&sort=recommended`;

    fetch(apiURL, options)
        .then(function (response) {
            response.json().then(function (data) {
                console.log(data);
                var attraction = 0;
                var currIndex = 0;
                while (attraction < 10 && currIndex < data.data.length) {
                    if (data.data[currIndex].name) {
                        console.log(data.data[currIndex].name);
                        console.log(data.data[currIndex].rating);
                        console.log(data.data[currIndex].subtype[0].name);
                        console.log(data.data[currIndex].photo.images.large.url)
                        attraction += 1;
                    }
                    currIndex += 1;
                }
            })
        })
}

searchEl.addEventListener("click", function () {
    getLocationId('miami');
})