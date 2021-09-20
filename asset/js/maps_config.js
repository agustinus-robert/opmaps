//angka negatif lat -6.812/110.039
var cobaMap = L.map('mapsid').setView([-7.5590, 110.8217], 14);
var arr_new = [];
var push_hasil = [];
var hasil_data = [];
var polyline;
var polygon;

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(cobaMap);

// ============= polyline ====================
var latlngs = [
    [-7.5533, 110.7993],
    [-7.5860, 110.8341],
    [-7.5778, 110.8368],
    [-7.5694, 110.8278],
    [-7.5606, 110.8166],
    [-7.5580, 110.8121],
    [-7.5533, 110.7993]
];

$('#poly_line').click(function(){
    if(window.polygon){
     window.cobaMap.removeLayer(window.polygon);
    }
    
    polyline = L.polyline(latlngs, {color: 'red'}).addTo(cobaMap);


    cobaMap.fitBounds(polyline.getBounds());

    latlngs.forEach(function(val, key) {
      arr_new = [val];
      push_hasil = arr_new[0].toString();
      hasil_data =  push_hasil.split(',');

      L.marker([hasil_data[0], hasil_data[1]]).addTo(cobaMap);
    })
    
});


// ============= polygon ===================

$('#poly_gon').click(function(){
    if(window.polyline){
        window.cobaMap.removeLayer(window.polyline);
    }
    polygon = L.polygon(latlngs, {color: 'blue'}).addTo(cobaMap);

    cobaMap.fitBounds(polygon.getBounds());

    latlngs.forEach(function(val, key) {
      arr_new = [val];
      push_hasil = arr_new[0].toString();
      hasil_data =  push_hasil.split(',');

      L.marker([hasil_data[0], hasil_data[1]]).addTo(cobaMap);
    })
});
