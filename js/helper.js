/*

This file contains all of the code running in the background that makes resumeBuilder.js possible. We call these helper functions because they support your code in this course.

Don't worry, you'll learn what's going on in this file throughout the course. You won't need to make any changes to it until you start experimenting with inserting a Google Map in Problem Set 3.

Cameron Pittman
*/


/*
These are HTML strings. As part of the course, you'll be using JavaScript functions
replace the %data% placeholder text you see in them.
*/
var HTMLheaderName = '<div id="name">%data%</div>';
var HTMLheaderRole = '<div id="role">%data%</div>';

// var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
var HTMLmobile = '<core-tooltip><core-icon-button class="icons" src="images/iconPhoneTalk-128x128.png" onclick="togglePopup(&quot;Call this number?&quot;,&quot;%data%&quot;,&quot;images/iconPhoneTalk-128x128.png&quot;,&quot;tel:%data%&quot;)"></core-icon-button><div tip>%data%</div></core-tooltip><span flex></span>';
var HTMLemail = '<core-tooltip><core-icon-button class="icons" src="images/iconEmailHand-128x128.png" onclick="togglePopup(&quot;Send a message?&quot;,&quot;%data%&quot;,&quot;images/iconEmailHand-128x128.png&quot;,&quot;mailto:%data%&quot;)"></core-icon-button><div tip>%data%</div></core-tooltip><span flex></span>';
var HTMLlinkedin = '<core-tooltip><core-icon-button class="icons" src="images/iconLinkedinHand-128x128.png" onclick="togglePopup(&quot;Open my LinkedIn profile?&quot;,&quot;&quot;,&quot;images/iconLinkedinHand-128x128.png&quot;,&quot;%data%&quot;)"></core-icon-button><div tip>My LinkedIn</div></core-tooltip><span flex></span>';
var HTMLgithub = '<core-tooltip><core-icon-button class="icons" src="images/iconGitHubHand-128x128.png" onclick="togglePopup(&quot;Open my GitHub profile?&quot;,&quot;&quot;,&quot;images/iconGitHubHand-128x128.png&quot;,&quot;http://github.com/%data%&quot;)"></core-icon-button><div tip>My GitHub</div></core-tooltip><span flex></span>';
var HTMLlocation = '<core-tooltip><core-icon-button class="icons" src="images/iconLocationHand-128x128.png" onclick="togglePopup(&quot;Location :&quot;,&quot;%data%&quot;,&quot;images/iconLocationHand-128x128.png&quot;,null)"></core-icon-button><div tip>%data%</div></core-tooltip>';

var HTMLbioPic = '<img id="bioPic" src="%data%">';
var HTMLWelcomeMsg = '<p class="welcome-message">%data%</p>';

var HTMLhomeMenu = '<core-item class="menuItems"><a href="#home">Home</a></core-item>';

var HTMLskillsStart = '<h1>Skills at a Glance:</h1><ul></ul>';
var HTMLskills = '<li>%data%</li>';

var HTMLworkMenu = '<core-item class="menuItems"><a href="#workExperience">Work Experience</a></core-item>';
var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';

var HTMLprojectMenu = '<core-item class="menuItems"><a href="#projects">Projects</a></core-item>';
var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="#">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<img src="%data%">';

var HTMLeducationMenu = '<core-item class="menuItems"><a href="#education">Education</a></core-item>';
var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#">%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';

var HTMLonlineClasses = '<h2><br>Online Classes</h2>';
var HTMLonlineTitle = '<a href="#">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';

var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map"></div>';
var HTMLmapMenu = '<core-item class="menuItems"><a href="#mapDiv">Where I lived and worked</a></core-item>';


/*
The International Name challenge in Lesson 2 where you'll create a function that will need this helper code to run. Don't delete! It hooks up your code to the button you'll be appending.
*/

//Internationalize name (from lesson 2)
// function inName(name) {
  
//   name = name.trim().split(" ");
//   name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
//   name[1] = name[1].toUpperCase();

//   return name[0] + " " + name[1];
// };

// $(document).ready(function() {
//   $('button').click(function() {
//     var iName = inName() || function(){};
//     $('#name').html(iName);  
//   });
// });

/*
The next few lines about clicks are for the Collecting Click Locations quiz in Lesson 2.
*/
clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
  // your code goes here!
  var x = loc.pageX
  var y = loc.pageY

  logClicks(x,y);
});



/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map;    // declares a global map variable


/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

  var locations;

  var mapOptions = {
    disableDefaultUI: true
  };

  // This next line makes `map` a new Google Map JavaScript Object and attaches it to
  // <div id="map">, which is appended as part of an exercise late in the course.
  map = new google.maps.Map(document.querySelector('#map'), mapOptions);


  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
  function locationFinder() {

    // initializes an empty array
    var locations = [];
    var bio = octopus.getBioData();
    var education = octopus.getEducationData();
    var work = octopus.getWorkData();

    // adds the single location property from bio to the locations array
    locations.push(bio.contacts.location);

    // iterates through school locations and appends each location to
    // the locations array
    for (var school in education.schools) {
      locations.push(education.schools[school].location);
    }

    // iterates through work locations and appends each location to
    // the locations array
    for (var job in work.jobs) {
      locations.push(work.jobs[job].location);
    }

    return locations;
  }

  // infoWindows are the little helper windows that open when you click
  // or hover over a pin on a map. They usually contain more information
  // about a location.
  // Placed this outside the createMapMarker function to have only one
  // infoWindow at the time on the map
  var infoWindow = new google.maps.InfoWindow({
    content: ""
  });

  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
  function createMapMarker(placeData) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat();  // latitude from the place service
    var lon = placeData.geometry.location.lng();  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });

    // hmmmm, I wonder what this is about...
    google.maps.event.addListener(marker, 'click', function() {
      // your code goes here!
      // change content of infoWindow
      infoWindow.setContent(name);
      // open infoWindow
      infoWindow.open(map,marker);
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location
    for (var place in locations) {

      // the search request object
      var request = {
        query: locations[place]
      };

      // Actually searches the Google Maps API for location data and runs the callback
      // function with the search results after each search.
      service.textSearch(request, callback);
    }
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);

}

/*
Uncomment the code below when you're ready to implement a Google Map!
*/

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
  // Make sure the map bounds get updated on page resize
 map.fitBounds(mapBounds);
});
