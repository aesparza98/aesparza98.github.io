

    var mymap = L.map('mapid');

      L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',{
        maxZoom: 18,
        id: 'mapbox.mapbox-traffic-v1',
        accessToken: mapbox_access_token,
      }).addTo(mymap);



      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      }).addTo(mymap);


      L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
      }).addTo(mymap);

/*
      var Stamen_Watercolor = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 1,
	maxZoom: 16,
	ext: 'jpg'
}).addTo(mymap);
/*
//Add a marker
      var marker = L.marker([51.5, -0.09]).addTo(mymap);
//Add a circle
      var circle = L.circle([51.508, -0.11], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500
      }).addTo(mymap);
//Add a polygon
      var polygon = L.polygon([
        [51.509, -0.08],
        [51.503, -0.06],
        [51.51, -0.047]
        ]).addTo(mymap);
//Add a polyline

      var polyline = L.polyline([
        [51.506, -0.08],
        [51.502, -0.06],
        [51.507, -0.047]
        ]).addTo(mymap);
//Add Popuo windows for each object:
      marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
      circle.bindPopup("I am a circle.");
      polygon.bindPopup("I am a polygon.");

      marker.on('click', function(e){
        mymap.setView(e.latlng, 14);
      });

      circle.on('click', function(e){
        mymap.setView(e.latlng, 13);
      });

      polygon.on('click', function(e) {
        mymap.setView(e.latlng, 13);
      });
*/
var options = {
  key:  geocoder_api_key ,
  limit: 10
};

var control = L.Control.openCageSearch(options).addTo(mymap);


      var ZoomViewer = L.Control.extend({
        onAdd: function(){
          var gauge = L.DomUtil.create('div');
          gauge.style.width = '200px';
          gauge.style.background = 'rgba(255,255,255,0.5)';
          gauge.style.textAlign = 'left';
          mymap.on('zoomstart zoom zoomed', function(ev){
            gauge.innerHTML = 'Zoom level: ' + mymap.getZoom();
          })
          return gauge;
        }
      });



      (new ZoomViewer).addTo(mymap);

      mymap.setView([0,0],1);
