var Lmap = undefined;
function createLeafletMap() {
    Lmap = L.map('map').setView([24,-80.72], 5);
    L.tileLayer('data/tiles/{z}/{x}/{y}.png',{
        tms: true
    }).addTo(Lmap);
}
// Ajouter des couches
var detroit_de_floride = L.geoJson(null);

$.getJSON("data/geojson/detroit_de_floride.geojson", function (data) {
    detroit_de_floride.addData(data);
});


var courant_guyane = L.geoJson(null, {
    style: {
        weight: 15,
        color: '#006FFF'
    },
    onEachFeature: function (feature, layer) {
        layer.setText(' \u263d ', {
            repeat: true, 
            offset: 7,
            attributes: {
                'fill': '#BDDAFF',
                'font-weight': 'bold',
                'font-size': '19'
            }
        });
    }
});

$.getJSON("data/geojson/courant_de_guyane.geojson", function (data) {
    courant_guyane.addData(data);
});

var pente_continentale = L.geoJson(null, {
    style: {
        weight: 1,
        color: '#000000'
    }
});

$.getJSON("data/geojson/pente_continentale.geojson", function (data) {
    pente_continentale.addData(data);
});

var courant_floride = L.geoJson(null, {
    style: {
        weight: 15,
        color: '#0000D5'
    },
//\u2652 \u263e \u2312 \u2322 \u23d6 \u25dc \u25dd
    onEachFeature: function (feature, layer) {
        layer.setText(' \u263d ', {
            repeat: true, 
            offset: 7,
            attributes: {
                //"style": "writing-mode: tb-rl; glyph-orientation-vertical: 180;",
                'fill': '#C8CFEB',
                'font-weight': 'bold',
                'font-size': '19'
            }
        });
    }
});

$.getJSON("data/geojson/courant_de_floride.geojson", function (data) {
  courant_floride.addData(data);
});


var cap_hatteras = L.geoJson(null);

$.getJSON("data/geojson/cap_hatteras.geojson", function (data) {
    cap_hatteras.addData(data);
});


 var gulfstream = L.geoJson(null, {
    style: {
        weight: 15,
        color: '#0000D5'
    },
    onEachFeature: function (feature, layer) {
        layer.setText(' \u263d ', {
            repeat: true, 
            offset: 7,
            attributes: {
                'fill': '#C8CFEB',
                'font-weight': 'bold',
                'font-size': '19'
            }
        });
    }
});


var grands_bancs_de_terre_neuve = L.geoJson(null);

$.getJSON("data/geojson/grands_bancs_de_terre_neuve.geojson", function (data) {
    grands_bancs_de_terre_neuve.addData(data);
});

var courant_nord_atlantique = L.geoJson(null, {
    style: {
        weight: 15,
        color: '#006FFF'
    },
    onEachFeature: function (feature, layer) {
        layer.setText(' \u263d ', {
            repeat: true, 
            offset: 7,
            attributes: {
                'fill': '#BDDAFF',
                'font-weight': 'bold',
                'font-size': '19'
            }
        });
    }
});

$.getJSON("data/geojson/courant_nord_atlantique.geojson", function (data) {
    courant_nord_atlantique.addData(data);
});

var courant_acores = L.geoJson(null, {
    style: {
        weight: 15,
        color: '#006FFF'
    },
    onEachFeature: function (feature, layer) {
        layer.setText(' \u263d ', {
            repeat: true, 
            offset: 7,
            attributes: {
                'fill': '#BDDAFF',
                'font-weight': 'bold',
                'font-size': '19'
            }
        });
    }
});

$.getJSON("data/geojson/courant_des_acores.geojson", function (data) {
    courant_acores.addData(data);
});

var courant_canaries = L.geoJson(null, {
    style: {
        weight: 15,
        color: '#006FFF'
    },
    onEachFeature: function (feature, layer) {
        layer.setText(' \u263d ', {
            repeat: true, 
            offset: 7,
            attributes: {
                'fill': '#BDDAFF',
                'font-weight': 'bold',
                'font-size': '19'
            }
        });
    }
});

$.getJSON("data/geojson/courant_des_canaries.geojson", function (data) {
    courant_canaries.addData(data);
});



var groenland = L.geoJson(null, {
    style: {
        weight: 15,
        color: '#006FFF'
    },
    onEachFeature: function (feature, layer) {
        layer.setText(' \u263d ', {
            repeat: true, 
            offset: 7,
            attributes: {
                'fill': '#BDDAFF',
                'font-weight': 'bold',
                'font-size': '19'
            }
        });
    }
});

$.getJSON("data/geojson/groenland.geojson", function (data) {
    groenland.addData(data);
});



var derive_nord_atlantique_1 = L.geoJson(null, {
    style: {
        weight: 15,
        color: '#006FFF'
    },
    onEachFeature: function (feature, layer) {
        layer.setText(' \u263d ', {
            repeat: true, 
            offset: 7,
            attributes: {
                'fill': '#BDDAFF',
                'font-weight': 'bold',
                'font-size': '19'
            }
        });
    }
});

$.getJSON("data/geojson/derive_nord_atlantique_1.geojson", function(data) {
    derive_nord_atlantique_1.addData(data);
});



var derive_nord_atlantique_2 = L.geoJson(null, {
    style: {
        weight: 15,
        color: '#006FFF'
    },
    onEachFeature: function(feature, layer) {
        layer.setText(' \u263d ', {
            repeat: true, 
            offset: 7,
            attributes: {
                'fill': '#BDDAFF',
                'font-weight': 'bold',
                'font-size': '19'
            }
        });
    }
});

$.getJSON("data/geojson/derive_nord_atlantique_2.geojson", function(data) {
    derive_nord_atlantique_2.addData(data);
});



$.getJSON("data/geojson/gulfstream.geojson", function(data) {
    gulfstream.addData(data);
});

Mbmap = undefined;
function createMapboxGlMap() {
    mapboxgl.accessToken = 'pk.eyJ1IjoibWJyb3V0aW4iLCJhIjoiY2lxMmN3MDdjMDA0d2hybTIxOTYxa2c3MCJ9.T5MEIB6UqZLg3_DL4YqDCQ';
    var videoStyle = {
        "version": 8,
        "sources": {
            "satellite": {
                "type": "raster",
                "url": "mapbox://mapbox.satellite",
                "tileSize": 256
            },
            "video": {
                "type": "video",
                "urls": ["../data/video/temperature.mp4"],
                "coordinates": [
                    [-100, 80],
                    [20, 80],
                    [20, 0],
                    [-100, 0]
                ]
            }
        },
        "layers": [{
            "id": "background",
            "type": "background",
            "paint": {
                "background-color": "rgb(4,7,14)"
            }
        }, {
            "id": "satellite",
            "type": "raster",
            "source": "satellite"
        }, {
            "id": "video",
            "type": "raster",
            "source": "video"
        }]
    };

    Mbmap = new mapboxgl.Map({
        container: 'map',
        zoom: 2,
        center: [-122.514426, 37.562984],
        style: videoStyle,
    });
}


