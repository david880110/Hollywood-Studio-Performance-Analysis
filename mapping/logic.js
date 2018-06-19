// Define variables for our base layers
var streetmap = L.tileLayer(
  "https://api.mapbox.com/styles/v1/mapbox/outdoors-v10/tiles/256/{z}/{x}/{y}?" +
    "access_token=pk.eyJ1IjoiZGF2aWQ4ODAxMTAiLCJhIjoiY2poeG5zZXp4MGRveDN2bzN3ZnV4OWN1cyJ9.FeCJLUzK5_3wnNu7qupc1g." +
    "T6YbdDixkOBWH_k9GbS8JQ",{
  noWrap: false,
}
);
var darkmap = L.tileLayer(
  "https://api.mapbox.com/styles/v1/mapbox/dark-v9/tiles/256/{z}/{x}/{y}?" +
    "access_token=pk.eyJ1IjoiZGF2aWQ4ODAxMTAiLCJhIjoiY2poeG5zZXp4MGRveDN2bzN3ZnV4OWN1cyJ9.FeCJLUzK5_3wnNu7qupc1g." +
    "T6YbdDixkOBWH_k9GbS8JQ"
);

// Stop repeating the map


// Create a baseMaps object
var baseMaps = {
  "Street Map": streetmap,
  "Dark Map": darkmap
};

// Create 3 separate layer groups: for country
var country_2012 = L.layerGroup(countryMarkers_2012);
var country_2015 = L.layerGroup(countryMarkers_2015);
var country_2018 = L.layerGroup(countryMarkers_2018);

// Create an overlay object
var overlayMaps = {
  "Sales: The Avengers 2012": country_2012,
  "Sales: Avengers: Age of Ultron 2015": country_2015,
  "Sales: Avengers: Infinity War 2018": country_2018
};

// Define a map object
var myMap = L.map("map", {
  center: [40.00, -3.50],
  zoom: 2,
  layers: [streetmap, country_2012, country_2015, country_2018]
});



// Function to determine marker size based on total_gross
function markerSize(total_gross) {
  return total_gross / 250;
}

// An array containing 2012 data to create markers
var data_2012 = [
 {
   "country": "North America",
   "coordinates": [54.5260, -105.2551],
   "total_gross": 623357910,
   "as_of": "6/10/2018"
 },
 {
   "country": "Argentina",
   "coordinates": [-38.416097, -63.616672],
   "total_gross": 16288553,
   "as_of": "6/10/2018"
 },
 {
   "country": "Australia",
   "coordinates": [-25.274398, 133.775136],
   "total_gross": 46352246,
   "as_of": "6/10/2018"
 },
 {
   "country": "Austria",
   "coordinates": [47.516231, 14.550072],
   "total_gross": 5561304,
   "as_of": "6/10/2018"
 },
 {
   "country": "Bahrain",
   "coordinates": [25.930414, 50.637772],
   "total_gross": 5561304,
   "as_of": "6/10/2018"
 },
 {
   "country": "Belgium",
   "coordinates": [50.503887, 4.469936],
   "total_gross": 5479402,
   "as_of": "6/10/2018"
 },
 {
   "country": "Bolivia",
   "coordinates": [-16.290154, -63.588653],
   "total_gross": 2948957,
   "as_of": "5/27/2018"
 },
 {
   "country": "Brazil",
   "coordinates": [-14.235004, -51.92528],
   "total_gross": 65822418,
   "as_of": "6/10/2018"
 },
 {
   "country": "Bulgaria",
   "coordinates": [42.733883, 25.48583],
   "total_gross": 988042,
   "as_of": "6/10/2018"
 },
 {
   "country": "Chile",
   "coordinates": [-35.675147, -71.542969],
   "total_gross": 14370631,
   "as_of": "6/10/2018"
 },
 {
   "country": "China",
   "coordinates": [35.86166, 104.195397],
   "total_gross": 366249504,
   "as_of": "6/10/2018"
 },
 {
   "country": "Colombia",
   "coordinates": [4.570868, -74.297333],
   "total_gross": 14523051,
   "as_of": "6/10/2018"
 },
 {
   "country": "Croatia",
   "coordinates": [45.1, 15.2],
   "total_gross": 771061,
   "as_of": "6/10/2018"
 },
 {
   "country": "Czech Republic",
   "coordinates": [49.817492, 15.472962],
   "total_gross": 4305197,
   "as_of": "6/10/2018"
 },
 {
   "country": "Denmark",
   "coordinates": [56.26392, 9.501785],
   "total_gross": 6655238,
   "as_of": "6/10/2018"
 },
 {
   "country": "Ecuador",
   "coordinates": [-1.831239, -78.183406],
   "total_gross": 6655238,
   "as_of": "6/10/2018"
 },
 {
   "country": "Egypt",
   "coordinates": [26.820553, 30.802498],
   "total_gross": 6655238,
   "as_of": "6/10/2018"
 },
 {
   "country": "Estonia",
   "coordinates": [58.595272, 25.013607],
   "total_gross": 6655238,
   "as_of": "6/10/2018"
 },
 {
   "country": "Finland",
   "coordinates": [61.92411, 25.748151],
   "total_gross": 3188207,
   "as_of": "6/10/2018"
 },
 {
   "country": "France",
   "coordinates": [46.227638, 2.213749],
   "total_gross": 45270964,
   "as_of": "6/10/2018"
 },
 {
   "country": "Germany",
   "coordinates": [51.165691, 10.451526],
   "total_gross": 43399760,
   "as_of": "6/10/2018"
 },
 {
   "country": "Greece",
   "coordinates": [39.074208, 21.824312],
   "total_gross": 2837253,
   "as_of": "6/10/2018"
 },
 {
   "country": "Hong Kong",
   "coordinates": [22.396428, 114.109497],
   "total_gross": 20479492,
   "as_of": "6/10/2018"
 },
 {
   "country": "Hungary",
   "coordinates": [47.162494, 19.503304],
   "total_gross": 3227236,
   "as_of": "6/10/2018"
 },
 {
   "country": "Iceland",
   "coordinates": [64.963051, -19.020835],
   "total_gross": 697010,
   "as_of": "6/10/2018"
 },
 {
   "country": "India",
   "coordinates": [20.593684, 78.96288],
   "total_gross": 43594456,
   "as_of": "6/10/2018"
 },
 {
   "country": "Israel",
   "coordinates": [31.046051, 34.851612],
   "total_gross": 25288929,
   "as_of": "6/10/2018"
 },
 {
   "country": "Italy",
   "coordinates": [41.87194, 12.56738],
   "total_gross": 21966660,
   "as_of": "6/10/2018"
 },
 {
   "country": "Japan",
   "coordinates": [36.204824, 138.252924],
   "total_gross": 33572499,
   "as_of": "6/10/2018"
 },
 {
   "country": "Jordan",
   "coordinates": [30.585164, 36.238414],
   "total_gross": 33572499,
   "as_of": "6/10/2018"
 },
 {
   "country": "Kenya",
   "coordinates": [-0.023559, 37.906193],
   "total_gross": 33572499,
   "as_of": "6/10/2018"
 },
 {
   "country": "Latvia",
   "coordinates": [56.879635, 24.603189],
   "total_gross": 33572499,
   "as_of": "6/10/2018"
 },
 {
   "country": "Lebanon",
   "coordinates": [33.854721, 35.862285],
   "total_gross": 33572499,
   "as_of": "6/10/2018"
 },
 {
   "country": "Lithuania",
   "coordinates": [55.169438, 23.881275],
   "total_gross": 408237,
   "as_of": "6/10/2018"
 },
 {
   "country": "Malaysia",
   "coordinates": [4.210484, 101.975766],
   "total_gross": 17301836,
   "as_of": "6/10/2018"
 },
 {
   "country": "Mexico",
   "coordinates": [23.634501, -102.552784],
   "total_gross": 59865090,
   "as_of": "6/10/2018"
 },
 {
   "country": "Netherlands",
   "coordinates": [52.132633, 5.291266],
   "total_gross": 10793866,
   "as_of": "6/10/2018"
 },
 {
   "country": "New Zealand",
   "coordinates": [-40.900557, 174.885971],
   "total_gross": 7178704,
   "as_of": "6/10/2018"
 },
 {
   "country": "Nigeria",
   "coordinates": [9.081999, 8.675277],
   "total_gross": 7178704,
   "as_of": "6/10/2018"
 },
 {
   "country": "Norway",
   "coordinates": [60.472024, 8.468946],
   "total_gross": 5482595,
   "as_of": "6/10/2018"
 },
 {
   "country": "Oman",
   "coordinates": [21.512583, 55.923255],
   "total_gross": 5482595,
   "as_of": "6/10/2018"
 },
 {
   "country": "Peru",
   "coordinates": [-9.189967, -75.015152],
   "total_gross": 1078729,
   "as_of": "5/27/2018"
 },
 {
   "country": "Philippines",
   "coordinates": [12.879721, 121.774017],
   "total_gross": 23292202,
   "as_of": "6/10/2018"
 },
 {
   "country": "Poland",
   "coordinates": [51.919438, 19.145136],
   "total_gross": 7183265,
   "as_of": "6/10/2018"
 },
 {
   "country": "Portugal",
   "coordinates": [39.399872, -8.224454],
   "total_gross": 2822573,
   "as_of": "6/10/2018"
 },
 {
   "country": "Romania",
   "coordinates": [45.943161, 24.96676],
   "total_gross": 2457434,
   "as_of": "6/10/2018"
 },
 {
   "country": "Russia - CIS",
   "coordinates": [61.52401, 105.318756],
   "total_gross": 34401293,
   "as_of": "6/10/2018"
 },
 {
   "country": "Serbia & Montenegro",
   "coordinates": [60.128161, 18.643501],
   "total_gross": 280036,
   "as_of": "5/9/2018"
 },
 {
   "country": "Singapore",
   "coordinates": [1.352083, 103.819836],
   "total_gross": 12133512,
   "as_of": "6/10/2018"
 },
 {
   "country": "Slovakia",
   "coordinates": [48.669026, 19.699024],
   "total_gross": 1333385,
   "as_of": "6/10/2018"
 },
 {
   "country": "Slovenia",
   "coordinates": [46.151241, 14.995463],
   "total_gross": 328866,
   "as_of": "6/10/2018"
 },
 {
   "country": "South Africa",
   "coordinates": [-30.559482, 22.937506],
   "total_gross": 5378592,
   "as_of": "6/10/2018"
 },
 {
   "country": "South Korea",
   "coordinates": [35.907757, 127.766922],
   "total_gross": 92856237,
   "as_of": "6/10/2018"
 },
 {
   "country": "Spain",
   "coordinates": [40.463667, -3.74922],
   "total_gross": 24490980,
   "as_of": "6/10/2018"
 },
 {
   "country": "Sweden",
   "coordinates": [60.128161, 18.643501],
   "total_gross": 7634007,
   "as_of": "6/10/2018"
 },
 {
   "country": "Switzerland (French-speaking)",
   "coordinates": [13.794185, -88.89653],
   "total_gross": 5463544,
   "as_of": "6/10/2018"
 },
 {
   "country": "Switzerland (German-speaking)",
   "coordinates": [13.794185, -88.89653],
   "total_gross": 5463544,
   "as_of": "6/10/2018"
 },
 {
   "country": "Taiwan",
   "coordinates": [23.69781, 120.960515],
   "total_gross": 21497834,
   "as_of": "6/10/2018"
 },
 {
   "country": "Thailand",
   "coordinates": [15.870032, 100.992541],
   "total_gross": 17944798,
   "as_of": "6/10/2018"
 },
 {
   "country": "Turkey",
   "coordinates": [38.963745, 35.243322],
   "total_gross": 6046778,
   "as_of": "6/10/2018"
 },
 {
   "country": "Ukraine",
   "coordinates": [48.379433, 31.16558],
   "total_gross": 3914908,
   "as_of": "6/10/2018"
 },
 {
   "country": "United Arab Emirates",
   "coordinates": [23.424076, 53.847818],
   "total_gross": 9872958,
   "as_of": "6/3/2018"
 },
 {
   "country": "United Kingdom",
   "coordinates": [55.378051, -3.435973],
   "total_gross": 94995922,
   "as_of": "6/10/2018"
 },
 {
   "country": "Uruguay",
   "coordinates": [-32.522779, -55.765835],
   "total_gross": 772075,
   "as_of": "5/27/2018"
 },
 {
   "country": "Venezuela",
   "coordinates": [6.42375, -66.58973],
   "total_gross": 3652028,
   "as_of": "6/10/2018"
 },
 {
   "country": "Vietnam",
   "coordinates": [14.058324, 108.277199],
   "total_gross": 3652028,
   "as_of": "6/10/2018"
 }
];

// An array containing 2015 data to create markers
var data_2015 = [
 {
   "country": "North America",
   "coordinates": [54.5260, -105.2551],
   "total_gross": 459005868,
   "as_of": "6/10/2018"
 },
 {
   "country": "Argentina",
   "coordinates": [-38.416097, -63.616672],
   "total_gross": 16288553,
   "as_of": "6/10/2018"
 },
 {
   "country": "Australia",
   "coordinates": [-25.274398, 133.775136],
   "total_gross": 46352246,
   "as_of": "6/10/2018"
 },
 {
   "country": "Austria",
   "coordinates": [47.516231, 14.550072],
   "total_gross": 5561304,
   "as_of": "6/10/2018"
 },
 {
   "country": "Bahrain",
   "coordinates": [25.930414, 50.637772],
   "total_gross": 5561304,
   "as_of": "6/10/2018"
 },
 {
   "country": "Belgium",
   "coordinates": [50.503887, 4.469936],
   "total_gross": 5479402,
   "as_of": "6/10/2018"
 },
 {
   "country": "Bolivia",
   "coordinates": [-16.290154, -63.588653],
   "total_gross": 2948957,
   "as_of": "5/27/2018"
 },
 {
   "country": "Brazil",
   "coordinates": [-14.235004, -51.92528],
   "total_gross": 65822418,
   "as_of": "6/10/2018"
 },
 {
   "country": "Bulgaria",
   "coordinates": [42.733883, 25.48583],
   "total_gross": 988042,
   "as_of": "6/10/2018"
 },
 {
   "country": "Chile",
   "coordinates": [-35.675147, -71.542969],
   "total_gross": 14370631,
   "as_of": "6/10/2018"
 },
 {
   "country": "China",
   "coordinates": [35.86166, 104.195397],
   "total_gross": 366249504,
   "as_of": "6/10/2018"
 },
 {
   "country": "Colombia",
   "coordinates": [4.570868, -74.297333],
   "total_gross": 14523051,
   "as_of": "6/10/2018"
 },
 {
   "country": "Croatia",
   "coordinates": [45.1, 15.2],
   "total_gross": 771061,
   "as_of": "6/10/2018"
 },
 {
   "country": "Czech Republic",
   "coordinates": [49.817492, 15.472962],
   "total_gross": 4305197,
   "as_of": "6/10/2018"
 },
 {
   "country": "Denmark",
   "coordinates": [56.26392, 9.501785],
   "total_gross": 6655238,
   "as_of": "6/10/2018"
 },
 {
   "country": "Ecuador",
   "coordinates": [-1.831239, -78.183406],
   "total_gross": 6655238,
   "as_of": "6/10/2018"
 },
 {
   "country": "Egypt",
   "coordinates": [26.820553, 30.802498],
   "total_gross": 6655238,
   "as_of": "6/10/2018"
 },
 {
   "country": "Estonia",
   "coordinates": [58.595272, 25.013607],
   "total_gross": 6655238,
   "as_of": "6/10/2018"
 },
 {
   "country": "Finland",
   "coordinates": [61.92411, 25.748151],
   "total_gross": 3188207,
   "as_of": "6/10/2018"
 },
 {
   "country": "France",
   "coordinates": [46.227638, 2.213749],
   "total_gross": 45270964,
   "as_of": "6/10/2018"
 },
 {
   "country": "Germany",
   "coordinates": [51.165691, 10.451526],
   "total_gross": 43399760,
   "as_of": "6/10/2018"
 },
 {
   "country": "Greece",
   "coordinates": [39.074208, 21.824312],
   "total_gross": 2837253,
   "as_of": "6/10/2018"
 },
 {
   "country": "Hong Kong",
   "coordinates": [22.396428, 114.109497],
   "total_gross": 20479492,
   "as_of": "6/10/2018"
 },
 {
   "country": "Hungary",
   "coordinates": [47.162494, 19.503304],
   "total_gross": 3227236,
   "as_of": "6/10/2018"
 },
 {
   "country": "Iceland",
   "coordinates": [64.963051, -19.020835],
   "total_gross": 697010,
   "as_of": "6/10/2018"
 },
 {
   "country": "India",
   "coordinates": [20.593684, 78.96288],
   "total_gross": 43594456,
   "as_of": "6/10/2018"
 },
 {
   "country": "Israel",
   "coordinates": [31.046051, 34.851612],
   "total_gross": 25288929,
   "as_of": "6/10/2018"
 },
 {
   "country": "Italy",
   "coordinates": [41.87194, 12.56738],
   "total_gross": 21966660,
   "as_of": "6/10/2018"
 },
 {
   "country": "Japan",
   "coordinates": [36.204824, 138.252924],
   "total_gross": 33572499,
   "as_of": "6/10/2018"
 },
 {
   "country": "Jordan",
   "coordinates": [30.585164, 36.238414],
   "total_gross": 33572499,
   "as_of": "6/10/2018"
 },
 {
   "country": "Kenya",
   "coordinates": [-0.023559, 37.906193],
   "total_gross": 33572499,
   "as_of": "6/10/2018"
 },
 {
   "country": "Latvia",
   "coordinates": [56.879635, 24.603189],
   "total_gross": 33572499,
   "as_of": "6/10/2018"
 },
 {
   "country": "Lebanon",
   "coordinates": [33.854721, 35.862285],
   "total_gross": 33572499,
   "as_of": "6/10/2018"
 },
 {
   "country": "Lithuania",
   "coordinates": [55.169438, 23.881275],
   "total_gross": 408237,
   "as_of": "6/10/2018"
 },
 {
   "country": "Malaysia",
   "coordinates": [4.210484, 101.975766],
   "total_gross": 17301836,
   "as_of": "6/10/2018"
 },
 {
   "country": "Mexico",
   "coordinates": [23.634501, -102.552784],
   "total_gross": 59865090,
   "as_of": "6/10/2018"
 },
 {
   "country": "Netherlands",
   "coordinates": [52.132633, 5.291266],
   "total_gross": 10793866,
   "as_of": "6/10/2018"
 },
 {
   "country": "New Zealand",
   "coordinates": [-40.900557, 174.885971],
   "total_gross": 7178704,
   "as_of": "6/10/2018"
 },
 {
   "country": "Nigeria",
   "coordinates": [9.081999, 8.675277],
   "total_gross": 7178704,
   "as_of": "6/10/2018"
 },
 {
   "country": "Norway",
   "coordinates": [60.472024, 8.468946],
   "total_gross": 5482595,
   "as_of": "6/10/2018"
 },
 {
   "country": "Oman",
   "coordinates": [21.512583, 55.923255],
   "total_gross": 5482595,
   "as_of": "6/10/2018"
 },
 {
   "country": "Peru",
   "coordinates": [-9.189967, -75.015152],
   "total_gross": 1078729,
   "as_of": "5/27/2018"
 },
 {
   "country": "Philippines",
   "coordinates": [12.879721, 121.774017],
   "total_gross": 23292202,
   "as_of": "6/10/2018"
 },
 {
   "country": "Poland",
   "coordinates": [51.919438, 19.145136],
   "total_gross": 7183265,
   "as_of": "6/10/2018"
 },
 {
   "country": "Portugal",
   "coordinates": [39.399872, -8.224454],
   "total_gross": 2822573,
   "as_of": "6/10/2018"
 },
 {
   "country": "Romania",
   "coordinates": [45.943161, 24.96676],
   "total_gross": 2457434,
   "as_of": "6/10/2018"
 },
 {
   "country": "Russia - CIS",
   "coordinates": [61.52401, 105.318756],
   "total_gross": 34401293,
   "as_of": "6/10/2018"
 },
 {
   "country": "Serbia & Montenegro",
   "coordinates": [60.128161, 18.643501],
   "total_gross": 280036,
   "as_of": "5/9/2018"
 },
 {
   "country": "Singapore",
   "coordinates": [1.352083, 103.819836],
   "total_gross": 12133512,
   "as_of": "6/10/2018"
 },
 {
   "country": "Slovakia",
   "coordinates": [48.669026, 19.699024],
   "total_gross": 1333385,
   "as_of": "6/10/2018"
 },
 {
   "country": "Slovenia",
   "coordinates": [46.151241, 14.995463],
   "total_gross": 328866,
   "as_of": "6/10/2018"
 },
 {
   "country": "South Africa",
   "coordinates": [-30.559482, 22.937506],
   "total_gross": 5378592,
   "as_of": "6/10/2018"
 },
 {
   "country": "South Korea",
   "coordinates": [35.907757, 127.766922],
   "total_gross": 92856237,
   "as_of": "6/10/2018"
 },
 {
   "country": "Spain",
   "coordinates": [40.463667, -3.74922],
   "total_gross": 24490980,
   "as_of": "6/10/2018"
 },
 {
   "country": "Sweden",
   "coordinates": [60.128161, 18.643501],
   "total_gross": 7634007,
   "as_of": "6/10/2018"
 },
 {
   "country": "Switzerland (French-speaking)",
   "coordinates": [13.794185, -88.89653],
   "total_gross": 5463544,
   "as_of": "6/10/2018"
 },
 {
   "country": "Switzerland (German-speaking)",
   "coordinates": [13.794185, -88.89653],
   "total_gross": 5463544,
   "as_of": "6/10/2018"
 },
 {
   "country": "Taiwan",
   "coordinates": [23.69781, 120.960515],
   "total_gross": 21497834,
   "as_of": "6/10/2018"
 },
 {
   "country": "Thailand",
   "coordinates": [15.870032, 100.992541],
   "total_gross": 17944798,
   "as_of": "6/10/2018"
 },
 {
   "country": "Turkey",
   "coordinates": [38.963745, 35.243322],
   "total_gross": 6046778,
   "as_of": "6/10/2018"
 },
 {
   "country": "Ukraine",
   "coordinates": [48.379433, 31.16558],
   "total_gross": 3914908,
   "as_of": "6/10/2018"
 },
 {
   "country": "United Arab Emirates",
   "coordinates": [23.424076, 53.847818],
   "total_gross": 9872958,
   "as_of": "6/3/2018"
 },
 {
   "country": "United Kingdom",
   "coordinates": [55.378051, -3.435973],
   "total_gross": 94995922,
   "as_of": "6/10/2018"
 },
 {
   "country": "Uruguay",
   "coordinates": [-32.522779, -55.765835],
   "total_gross": 772075,
   "as_of": "5/27/2018"
 },
 {
   "country": "Venezuela",
   "coordinates": [6.42375, -66.58973],
   "total_gross": 3652028,
   "as_of": "6/10/2018"
 },
 {
   "country": "Vietnam",
   "coordinates": [14.058324, 108.277199],
   "total_gross": 3652028,
   "as_of": "6/10/2018"
 }
];

// An array containing 2018 data to create markers
var data_2018 = [
 {
   "country": "North America",
   "coordinates": [54.5260, -105.2551],
   "total_gross": 660323950,
   "as_of": "6/10/2018"
 },
 {
   "country": "Argentina",
   "coordinates": [-38.416097, -63.616672],
   "total_gross": 16288553,
   "as_of": "6/10/2018"
 },
 {
   "country": "Australia",
   "coordinates": [-25.274398, 133.775136],
   "total_gross": 46352246,
   "as_of": "6/10/2018"
 },
 {
   "country": "Austria",
   "coordinates": [47.516231, 14.550072],
   "total_gross": 5561304,
   "as_of": "6/10/2018"
 },
 {
   "country": "Belgium",
   "coordinates": [50.503887, 4.469936],
   "total_gross": 5479402,
   "as_of": "6/10/2018"
 },
 {
   "country": "Bolivia",
   "coordinates": [-16.290154, -63.588653],
   "total_gross": 2948957,
   "as_of": "5/27/2018"
 },
 {
   "country": "Brazil",
   "coordinates": [-14.235004, -51.92528],
   "total_gross": 65822418,
   "as_of": "6/10/2018"
 },
 {
   "country": "Bulgaria",
   "coordinates": [42.733883, 25.48583],
   "total_gross": 988042,
   "as_of": "6/10/2018"
 },
 {
   "country": "Chile",
   "coordinates": [-35.675147, -71.542969],
   "total_gross": 14370631,
   "as_of": "6/10/2018"
 },
 {
   "country": "China",
   "coordinates": [35.86166, 104.195397],
   "total_gross": 366249504,
   "as_of": "6/10/2018"
 },
 {
   "country": "Colombia",
   "coordinates": [4.570868, -74.297333],
   "total_gross": 14523051,
   "as_of": "6/10/2018"
 },
 {
   "country": "Croatia",
   "coordinates": [45.1, 15.2],
   "total_gross": 771061,
   "as_of": "6/10/2018"
 },
 {
   "country": "Czech Republic",
   "coordinates": [49.817492, 15.472962],
   "total_gross": 4305197,
   "as_of": "6/10/2018"
 },
 {
   "country": "Denmark",
   "coordinates": [56.26392, 9.501785],
   "total_gross": 6655238,
   "as_of": "6/10/2018"
 },
 {
   "country": "Finland",
   "coordinates": [61.92411, 25.748151],
   "total_gross": 3188207,
   "as_of": "6/10/2018"
 },
 {
   "country": "France",
   "coordinates": [46.227638, 2.213749],
   "total_gross": 45270964,
   "as_of": "6/10/2018"
 },
 {
   "country": "Germany",
   "coordinates": [51.165691, 10.451526],
   "total_gross": 43399760,
   "as_of": "6/10/2018"
 },
 {
   "country": "Greece",
   "coordinates": [39.074208, 21.824312],
   "total_gross": 2837253,
   "as_of": "6/10/2018"
 },
 {
   "country": "Hong Kong",
   "coordinates": [22.396428, 114.109497],
   "total_gross": 20479492,
   "as_of": "6/10/2018"
 },
 {
   "country": "Hungary",
   "coordinates": [47.162494, 19.503304],
   "total_gross": 3227236,
   "as_of": "6/10/2018"
 },
 {
   "country": "Iceland",
   "coordinates": [64.963051, -19.020835],
   "total_gross": 697010,
   "as_of": "6/10/2018"
 },
 {
   "country": "India",
   "coordinates": [20.593684, 78.96288],
   "total_gross": 43594456,
   "as_of": "6/10/2018"
 },
 {
   "country": "Indonesia",
   "coordinates": [-0.789275, 113.921327],
   "total_gross": 25288929,
   "as_of": "6/10/2018"
 },
 {
   "country": "Italy",
   "coordinates": [41.87194, 12.56738],
   "total_gross": 21966660,
   "as_of": "6/10/2018"
 },
 {
   "country": "Japan",
   "coordinates": [36.204824, 138.252924],
   "total_gross": 33572499,
   "as_of": "6/10/2018"
 },
 {
   "country": "Lithuania",
   "coordinates": [55.169438, 23.881275],
   "total_gross": 408237,
   "as_of": "6/10/2018"
 },
 {
   "country": "Malaysia",
   "coordinates": [4.210484, 101.975766],
   "total_gross": 17301836,
   "as_of": "6/10/2018"
 },
 {
   "country": "Mexico",
   "coordinates": [23.634501, -102.552784],
   "total_gross": 59865090,
   "as_of": "6/10/2018"
 },
 {
   "country": "Netherlands",
   "coordinates": [52.132633, 5.291266],
   "total_gross": 10793866,
   "as_of": "6/10/2018"
 },
 {
   "country": "New Zealand",
   "coordinates": [-40.900557, 174.885971],
   "total_gross": 7178704,
   "as_of": "6/10/2018"
 },
 {
   "country": "Norway",
   "coordinates": [60.472024, 8.468946],
   "total_gross": 5482595,
   "as_of": "6/10/2018"
 },
 {
   "country": "Paraguay",
   "coordinates": [-23.442503, -58.443832],
   "total_gross": 1078729,
   "as_of": "5/27/2018"
 },
 {
   "country": "Philippines",
   "coordinates": [12.879721, 121.774017],
   "total_gross": 23292202,
   "as_of": "6/10/2018"
 },
 {
   "country": "Poland",
   "coordinates": [51.919438, 19.145136],
   "total_gross": 7183265,
   "as_of": "6/10/2018"
 },
 {
   "country": "Portugal",
   "coordinates": [39.399872, -8.224454],
   "total_gross": 2822573,
   "as_of": "6/10/2018"
 },
 {
   "country": "Romania",
   "coordinates": [45.943161, 24.96676],
   "total_gross": 2457434,
   "as_of": "6/10/2018"
 },
 {
   "country": "Russia - CIS",
   "coordinates": [61.52401, 105.318756],
   "total_gross": 34401293,
   "as_of": "6/10/2018"
 },
 {
   "country": "Serbia & Montenegro",
   "coordinates": [60.128161, 18.643501],
   "total_gross": 280036,
   "as_of": "5/9/2018"
 },
 {
   "country": "Singapore",
   "coordinates": [1.352083, 103.819836],
   "total_gross": 12133512,
   "as_of": "6/10/2018"
 },
 {
   "country": "Slovakia",
   "coordinates": [48.669026, 19.699024],
   "total_gross": 1333385,
   "as_of": "6/10/2018"
 },
 {
   "country": "Slovenia",
   "coordinates": [46.151241, 14.995463],
   "total_gross": 328866,
   "as_of": "6/10/2018"
 },
 {
   "country": "South Africa",
   "coordinates": [-30.559482, 22.937506],
   "total_gross": 5378592,
   "as_of": "6/10/2018"
 },
 {
   "country": "South Korea",
   "coordinates": [35.907757, 127.766922],
   "total_gross": 92856237,
   "as_of": "6/10/2018"
 },
 {
   "country": "Spain",
   "coordinates": [40.463667, -3.74922],
   "total_gross": 24490980,
   "as_of": "6/10/2018"
 },
 {
   "country": "Sweden",
   "coordinates": [60.128161, 18.643501],
   "total_gross": 7634007,
   "as_of": "6/10/2018"
 },
 {
   "country": "Switzerland",
   "coordinates": [46.818188, 8.227512],
   "total_gross": 5463544,
   "as_of": "6/10/2018"
 },
 {
   "country": "Taiwan",
   "coordinates": [23.69781, 120.960515],
   "total_gross": 21497834,
   "as_of": "6/10/2018"
 },
 {
   "country": "Thailand",
   "coordinates": [15.870032, 100.992541],
   "total_gross": 17944798,
   "as_of": "6/10/2018"
 },
 {
   "country": "Turkey",
   "coordinates": [38.963745, 35.243322],
   "total_gross": 6046778,
   "as_of": "6/10/2018"
 },
 {
   "country": "Ukraine",
   "coordinates": [48.379433, 31.16558],
   "total_gross": 3914908,
   "as_of": "6/10/2018"
 },
 {
   "country": "United Arab Emirates",
   "coordinates": [23.424076, 53.847818],
   "total_gross": 9872958,
   "as_of": "6/3/2018"
 },
 {
   "country": "United Kingdom",
   "coordinates": [55.378051, -3.435973],
   "total_gross": 94995922,
   "as_of": "6/10/2018"
 },
 {
   "country": "Uruguay",
   "coordinates": [-32.522779, -55.765835],
   "total_gross": 772075,
   "as_of": "5/27/2018"
 },
 {
   "country": "Venezuela",
   "coordinates": [6.42375, -66.58973],
   "total_gross": 3652028,
   "as_of": "6/10/2018"
 }
];

// Define arrays to hold created country markers
var countryMarkers_2012 = [];

// Loop through data_2012 and create country markers
for (var i = 0; i < data_2012.length; i++) {
  // Setting the marker radius for the country by passing total_gross into the markerSize function
  countryMarkers_2012.push(
    L.circle(data_2012[i].coordinates, {
      stroke: false,
      fillOpacity: 0.2,
      color: "black",
      fillColor: "red",
      radius: markerSize(data_2012[i].total_gross)
    }).bindPopup("<h1>" + data_2012[i].country 
	+ "</h1> <hr> <li>2012 Sales: "
	+ "$" + data_2012[i].total_gross.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + "</li>" 
	).addTo(myMap)
)};

// Define arrays to hold created country markers
var countryMarkers_2015 = [];

// Loop through data_2015 and create country markers
for (var j = 0; j < data_2015.length; j++) {
  // Setting the marker radius for the country by passing total_gross into the markerSize function
  countryMarkers_2015.push(
    L.circle(data_2015[j].coordinates, {
      stroke: false,
      fillOpacity: 0.2,
      color: "black",
      fillColor: "yellow",
      radius: markerSize(data_2015[j].total_gross)
    }).bindPopup("<h1>" + data_2015[j].country 
	+ "</h1> <hr> <li>2015 Sales: " 
	+ "$" + data_2015[j].total_gross.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + "</li>"
	).addTo(myMap)
)};

// Define arrays to hold created country markers
var countryMarkers_2018 = [];

// Loop through data_2018 and create country markers
for (var i = 0; i < data_2018.length; i++) {
  // Setting the marker radius for the country by passing total_gross into the markerSize function
  countryMarkers_2018.push(
    L.circle(data_2018[i].coordinates, {
      stroke: false,
      fillOpacity: 0.2,
      color: "black",
      fillColor: "green",
      radius: markerSize(data_2018[i].total_gross)
    }).bindPopup("<h1>" + data_2018[i].country 
	+ "</h1> <hr> <li>2018 Sales: " 
	+ "$" + data_2018[i].total_gross.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + "</li>"
	).addTo(myMap)
)};

// Pass our map layers into our layer control
// Add the layer control to the map
L.control.layers(baseMaps, overlayMaps, {
  collapsed: false
}).addTo(myMap);
