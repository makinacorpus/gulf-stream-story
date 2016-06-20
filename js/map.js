var map = L.map('map').setView([24,-80.72], 5);
L.tileLayer('data/tiles/{z}/{x}/{y}.png',{
  tms: true
  }).addTo(map);

map.on('load', function() {
    init();
});

//options de style
var style_courant = {
"color": "#ff7800" //couleur contour
};

// Ajouter la couche courant de floride
var courant_floride = L.geoJson(null, { style: style_courant } );

    $.getJSON("data/geojson/courant_de_floride.geojson", function (data) {
      courant_floride.addData(data);
    });

    courant_floride.addTo(map);


// Ajouter la couche courant de Guyane
var courant_guyane = L.geoJson(null);

    $.getJSON("data/geojson/courant_de_guyane.geojson", function (data) {
      courant_guyane.addData(data);
    });

    courant_guyane.addTo(map);


// Ajouter la couche courant des Açores
var courant_acores = L.geoJson(null);

    $.getJSON("data/geojson/courant_des_acores.geojson", function (data) {
      courant_acores.addData(data);
    });

    courant_acores.addTo(map);


// Ajouter la couche courant des Canaries
var courant_canaries = L.geoJson(null);

    $.getJSON("data/geojson/courant_des_canaries.geojson", function (data) {
      courant_canaries.addData(data);
    });

    courant_canaries.addTo(map);

// Ajouter la couche courant Nord Atlantique
var courant_nord_atlantique = L.geoJson(null);

    $.getJSON("data/geojson/courant_nord_atlantique.geojson", function (data) {
      courant_nord_atlantique.addData(data);
    });

    courant_nord_atlantique .addTo(map);

// Ajouter la couche dérive Nord Atlantique 1
var derive_nord_atlantique_1 = L.geoJson(null);

    $.getJSON("data/geojson/derive_nord_atlantique_1.geojson", function (data) {
      derive_nord_atlantique_1.addData(data);
    });

    derive_nord_atlantique_1.addTo(map);

// Ajouter la couche dérive Nord Atlantique 2
var derive_nord_atlantique_2 = L.geoJson(null);

    $.getJSON("data/geojson/derive_nord_atlantique_2.geojson", function (data) {
      derive_nord_atlantique_2.addData(data);
    });

    derive_nord_atlantique_2.addTo(map);

// Ajouter la couche GulfStream
var gulfstream = L.geoJson(null);

    $.getJSON("data/geojson/gulfstream.geojson", function (data) {
      gulfstream.addData(data);
    });

    gulfstream.addTo(map);

// Ajouter la couche points d'intérêt
var points_d_interet = L.geoJson(null);

    $.getJSON("data/geojson/points_d_interet.geojson", function (data) {
      points_d_interet.addData(data);
    });

    points_d_interet.addTo(map);
