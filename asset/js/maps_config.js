var cobaMap = L.map('mapsid').setView([-7.5590, 110.8217], 14);

var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
osmAttrib = '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors',
osm = L.tileLayer(osmUrl, { maxZoom: 18, attribution: osmAttrib }),
            
drawnItems = L.featureGroup().addTo(cobaMap);
    L.control.layers({
        'osm': osm.addTo(cobaMap),
        "google": L.tileLayer('http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}', {
            attribution: 'google'
        })
    }, { 'drawlayer': drawnItems }, { position: 'topleft', collapsed: false }).addTo(cobaMap);
    cobaMap.addControl(new L.Control.Draw({
        edit: {
            featureGroup: drawnItems,
            poly: {
                allowIntersection: false
            }
        },
        draw: {
            polygon: {
                allowIntersection: false,
                showArea: true
            },
             polyline: false,
             marker: false,
             circle: false,
             rectangle: false,
             circlemarker: false
        }
    }));

    var arr_tambah = 0;
    var koor_tambah = 0;
    var arr_hasil = [];
    var arr_data = [];
    cobaMap.on(L.Draw.Event.CREATED, function (event) {
        var layer = event.layer;

      
         arr_data[arr_tambah++] = event;
         
         var koordinat_tulis = [];
         for(var j = 0; j < arr_data.length; j++){
            if(arr_data[j].layerType == "polyline"){
                
                arr_hasil[j] = '{"type" : "Feature","geometry" : { "type" : "LineString", "coordinates" : [';
                                
                for(const latls of arr_data[j].layer._latlngs){
                    koordinat_tulis =  "["+latls.lng+','+latls.lat+"],";
                    
                    arr_hasil[j] += koordinat_tulis;
                }
                //arr_hasil[j] = arr_hasil[j].replace('undefined', '');
                arr_hasil[j] = arr_hasil[j].replace(/(^,)|(,$)/g, "");
                //console.log(L.polyline(arr_hasil).toGeoJSON(12));
               // arr_hasil[j] = L.polyline(JSON.parse("["+arr_hasil[j].replace('undefined', '')+"]")).toGeoJSON();
              arr_hasil[j] += ']}}';
                
              

       
             } else if(arr_data[j].layerType == "polygon"){
                 var id = Math.floor((Math.random() * 500) + 1);
                 layer._leaflet_id = id;
                 // arr_hasil[j] = '{"type":"Feature","properties":{"id":'+layer._leaflet_id+'},"geometry":{"type":"Polygon","coordinates":[[';
                  
                  
                arr_hasil[j] += "[[";
                for(const latls of arr_data[j].layer._latlngs){
                    
                    for(const dptlt of latls){
                        
                        koordinat_tulis =  "["+dptlt.lng+','+dptlt.lat+"],";
                        arr_hasil[j] += koordinat_tulis;
                    }
                    
//                    for(const dptlt of latls){
//                        
//                        koordinat_tulis =  "{"+dptlt.lng+','+dptlt.lat+"},";
//                        arr_hasil[j] += koordinat_tulis;
//                    }
                    
                    
                }
                
                arr_hasil[j] = arr_hasil[j].replace(/(^,)|(,$)/g, "").replace('undefined','');
                arr_hasil[j] += "]]";
                
               
              /// arr_hasil[j] = L.polyline(JSON.parse("["+arr_hasil[j].replace('undefined', '')+"]")).toGeoJSON();
               
               // arr_hasil[j] += ']]}}';
                
               
             }    
         }
        
     
        $('#tampil_data').text(arr_hasil);
        drawnItems.addLayer(layer);
       
       //  featureGroup.addLayer(e.layer);
        
    });

//    var geojsonLayer = new L.GeoJSON.AJAX('geo_dt', {
//        'onEachFeature': function (feature, layer) {
//            layer.bindPopup(feature.properties.nama_jalan);
//                     
//            
//        },
//        style: function (feature){
//            if(feature.properties.jumlah === "3"){
//                return {color: "green"};
//            }
//        }
//    }).addTo(cobaMap);

    function fiturMap(feature, layer){
         layer.bindPopup(feature.properties.nama_jalan);
         
         layer.on({
            mouseover: function(e){
                e.target.setStyle({
                    fillOpacity: 0.8,
                    dashArray: '',
                    weight: 2,
                    opacity: 1
                });
            }, 
            mouseout: function(e){
                geojsonLayer.resetStyle(e.target);
            },
            click : function(e){
                alert(e.latlng);
            }
         });
    }
    
    function mapstyle(feature){
        if(feature.properties.jumlah === "3"){
           return {color: "green"};
        }
    }
    
    var geojsonLayer = new L.GeoJSON.AJAX('get_stat_dt', {
        onEachFeature : fiturMap,
        style : mapstyle,
    }).addTo(cobaMap);
    
  
     

     
//    $.ajax({
//        type: "GET",
//        url: myd,
//        dataType: "text",
//        success: function(response){
//            console.log(response);
//        },error: function(xml, error) {
//            console.log(error);
//         }
//    });
    // console.log(geojsonLayer);
//   geojsonLayer.on('data:loaded', function(){
//       
//        geojsonLayer.addTo(cobaMap);
//    });
     
var arr_new = [];
var push_hasil = [];
var hasil_data = [];
var tampung_tulisan = [];
var polyline, polygon, reactangle;
  var lines = [];
var data_show;

//var polyline_tulis = new L.Polyline([]).addTo(cobaMap);

 var wilayah = [{
    "type": "Feature",
    "properties": {"tipe": "ls"},
    "geometry": {
        "type": "LineString",
        "coordinates": [
            [110.8341, -7.5860],
            [110.8368, -7.5778],
            [110.8278, -7.5694],
            [110.8166, -7.5606],
            [110.8121, -7.5580],
            [110.7993, -7.5533]
        ]
    }
}, {
    "type": "Feature",
    "properties": {"tipe": "pl"},
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
           [110.7935, -7.5809],
           [110.7935, -7.5601],
           [110.8204, -7.5601],
           [110.8204, -7.5809]
        ]]
    }
}];

//console.log(wilayah);

//L.geoJSON(wilayah, {
//    style: function(feature) {
//        switch (feature.properties.tipe) {
//            case 'ls': return {color: "green"};
//            case 'pl':   return {color: "purple"};
//        }
//    }
//}).addTo(cobaMap);

//console.log(wilayah);
for(var i = 0; i < wilayah.length; i++){
    //document.getElementById('#tampil_data').innerText;
    
    data_show += JSON.stringify(wilayah[i]);
   // $("#tampil_data").text(data_show.replace('undefined',''));
   // console.log();
}


$('#save').click(function(){
  
  var nama = $('#nama').val();
  var jumlah = $('#jumlah').val();
  var id_leflet = Math.floor((Math.random() * 500) + 1);
  $.ajax({
    method : "POST",
    url: urls,
    data: {
        'text-data' : arr_hasil,
        'nama_jalan' : nama,
        'jumlah' : jumlah,
        'id_leflet' : id_leflet
    },
    success: function(data){
      if(data == "ok"){
          alert("data telah masuk");
      } else {
          alert(data);
      }
    }
  });
});


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(cobaMap);


//tulis maps
//cobaMap.on('click', function(event) {
// var marker = L.marker(event.latlng).addTo(cobaMap);
//polyline_tulis.addLatLng(event.latlng);
//   tampung_tulisan.push(event.latlng); 
//
//   console.log(tampung_tulisan);
//});

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

function markerOnClick(e){
    var popup = L.popup()
    .setLatLng(e.latlng)
    .setContent('<p>Posisi Latitude dan longitude : '+e.latlng+'</p>')
    .openOn(cobaMap);
}

$('#poly_line').click(function(){
    if(window.polygon){
     window.cobaMap.removeLayer(window.polygon);
    } 
    
    if(window.rectangle){
        window.cobaMap.removeLayer(window.rectangle);
    }
    
    polyline = L.polyline(latlngs, {color: 'red'}).addTo(cobaMap);


    cobaMap.fitBounds(polyline.getBounds());

    latlngs.forEach(function(val, key) {
      arr_new = [val];
      push_hasil = arr_new[0].toString();
      hasil_data =  push_hasil.split(',');

      L.marker([hasil_data[0], hasil_data[1]]).on('click', markerOnClick).addTo(cobaMap);
    })
    
});


// ============= polygon ===================

$('#poly_gon').click(function(){
    if(window.polyline){
        window.cobaMap.removeLayer(window.polyline);
    }
    
    if(window.rectangle){
        window.cobaMap.removeLayer(window.rectangle);
    }
    
    polygon = L.polygon(latlngs, {color: 'blue'}).addTo(cobaMap);

    cobaMap.fitBounds(polygon.getBounds());

    latlngs.forEach(function(val, key) {
      arr_new = [val];
      push_hasil = arr_new[0].toString();
      hasil_data =  push_hasil.split(',');

      L.marker([hasil_data[0], hasil_data[1]]).on('click', markerOnClick).addTo(cobaMap);
    })
});

$('#rect_angle').click(function(){
   if(window.polyline){
        window.cobaMap.removeLayer(window.polyline);
    } 
    
    if(window.polygon){
         window.cobaMap.removeLayer(window.polygon);
    }
    
    rectangle = L.rectangle(latlngs, {color: 'green'}).addTo(cobaMap);

    cobaMap.fitBounds(rectangle.getBounds());

    latlngs.forEach(function(val, key) {
      arr_new = [val];
      push_hasil = arr_new[0].toString();
      hasil_data =  push_hasil.split(',');

      L.marker([hasil_data[0], hasil_data[1]]).on('click', markerOnClick).addTo(cobaMap);
    })
});