var test = L.map('mapsidd', {
	preferCanvas: true,
	zoomControl: true,
        doubleClickZoom : false
}).setView([-7.5590, 110.8217], 14);

var latlngs = [
    [45.51, -122.68],
    [37.77, -122.43],
    [34.04, -118.2]
];

var polyline = L.polyline(latlngs, {color: 'red'}).toGeoJSON();
L.geoJSON(polyline).addTo(test);

function onclick(e){
     var layer = L.marker([-7.5590, 110.8217]).addTo(test);
     layer.add();
}
//layer bisa terpasang jika sudah ada event
test.once('click', onclick);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(test);