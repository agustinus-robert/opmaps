//angka negatif lat -6.812/110.039
var cobaMap = L.map('mapsid').setView([-7.5590, 110.8217], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(cobaMap);

