var Lmap = undefined;
function createLeafletMap() {
    Lmap = L.map('map', {
         //maxBounds: mybounds
    }).setView([24, -80.72], 5);
    L.tileLayer('data/tiles/{z}/{x}/{y}.png', {
        tms: true,
        maxZoom: 6,
        minZoom: 2
    }).addTo(Lmap);
}

// var southWest = L.latLng(0, -100),
//     northEast = L.latLng(85, 20),
//     mybounds = L.latLngBounds(southWest, northEast);

//Ajouter des couches Leaflet
var ssh = L.imageOverlay("data/images/ssh.png",[[0, -100], [85, 20]])

var colorScale = chroma.scale('OrRd').domain([0, 0.3]);
//var colorScale = chroma.scale('RdYlBu').domain([1,0]);

var depths = ['0', '109', '266', '541', '1062', '1684', '3220'];
var depth = depths[0];

var depthArrows = function(feature, latlng) {
    var html = '<div style="transform: rotate(';
    html += feature.properties.dir;
    html += 'deg);';
    html += 'font-size:';
    html += (8 + feature.properties.n * 20);
    html += 'px; color:';
    html += colorScale(feature.properties.n);
    html += '" class="rot">';
    html += '↑</div>';
    return L.marker(latlng, {
        icon: L.divIcon({
            className: 'arrow',
            html: html
        })
    });
};


$('#depthSliderInput').on('slideStop', function(e) {
    Lmap.removeLayer(depthLayer);
    depthLayer = depthLayers[e.value];
    Lmap.addLayer(depthLayer);
});

var courant_profondeur_0 = L.geoJson(null, {
    pointToLayer: depthArrows
});

var courant_profondeur_109 = L.geoJson(null, {
    pointToLayer: depthArrows
});

var courant_profondeur_266 = L.geoJson(null, {
    pointToLayer: depthArrows
});

var courant_profondeur_541 = L.geoJson(null, {
    pointToLayer: depthArrows
});

var courant_profondeur_1062 = L.geoJson(null, {
    pointToLayer: depthArrows
});

var courant_profondeur_1684 = L.geoJson(null, {
    pointToLayer: depthArrows
});

var courant_profondeur_3220 = L.geoJson(null, {
    pointToLayer: depthArrows
});

var depthLayers = [
    courant_profondeur_0,
    courant_profondeur_109,
    courant_profondeur_266,
    courant_profondeur_541,
    courant_profondeur_1062,
    courant_profondeur_1684,
    courant_profondeur_3220
];

var depthLayer = depthLayers[0];

$.getJSON("data/geojson/current_0.geojson", function(data) {
    courant_profondeur_0.addData(data);
});

$.getJSON("data/geojson/current_109.geojson", function(data) {
    courant_profondeur_109.addData(data);
});

$.getJSON("data/geojson/current_266.geojson", function(data) {
    courant_profondeur_266.addData(data);
});

$.getJSON("data/geojson/current_541.geojson", function(data) {
    courant_profondeur_541.addData(data);
});

$.getJSON("data/geojson/current_1062.geojson", function(data) {
    courant_profondeur_1062.addData(data);
});

$.getJSON("data/geojson/current_1684.geojson", function(data) {
    courant_profondeur_1684.addData(data);
});

$.getJSON("data/geojson/current_3220.geojson", function(data) {
    courant_profondeur_3220.addData(data);
});

var detroit_de_floride = L.geoJson(null);

$.getJSON("data/geojson/detroit_de_floride.geojson", function (data) {
    detroit_de_floride.addData(data);
});

var isthme_panama = L.geoJson(null, {
    style: {
        weight: 1,
        opacity: 1,
        color: '#ff1100'
        }
    });

$.getJSON("data/geojson/isthme_panama.geojson", function (data) {
    isthme_panama.addData(data);
});

var courant_guyane = L.geoJson(null, {
    style: {
        weight: 15,
        opacity: 1,
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

var thermohaline_cold = L.geoJson(null, {
    style: {
        weight: 18,
        opacity: 1,
        color: '#006FFF'
    }
});

$.getJSON("data/geojson/thermohaline_cold.geojson", function (data) {
    thermohaline_cold.addData(data);
});

var thermohaline_hot = L.geoJson(null, {
    style: {
        weight: 18,
        opacity: 1,
        color: '#FF0000'
    }
});

$.getJSON("data/geojson/thermohaline_hot.geojson", function (data) {
    thermohaline_hot.addData(data);
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
        opacity: 1,
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
        opacity: 1,
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
        opacity: 1,
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
        opacity: 1,
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
        opacity: 1,
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
        opacity: 1,
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
        opacity: 1,
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
        opacity: 1,
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

//Ajout de couches MapBox
Mbmap = undefined;
function createMapboxGlMap() {
    mapboxgl.accessToken = 'pk.eyJ1IjoibWJyb3V0aW4iLCJhIjoiY2lxMmN3MDdjMDA0d2hybTIxOTYxa2c3MCJ9.T5MEIB6UqZLg3_DL4YqDCQ';   
    var video_current = {
        "version": 8,
        "sources": {
            "video": {
                "type": "video",
                "urls": ["https://seafile.makina-corpus.net/seafhttp/files/18c176f1-b733-4589-91b3-85a08e98adaa/current.mp4"],
                "coordinates": [
                    [-100, 80],
                    [20, 80],
                    [20, 0],
                    [-100, 0]
                ]
            },
            "tiles_mb": {
                "type": "raster",
                "tiles": ["data/tiles_mb/{z}/{x}/{y}.png"],
                "scheme": "tms",
                "tileSize": 256
            }
        },
        "layers": [{
            "id": "video",
            "type": "raster",
            "source": "video"
        }, {
            "id": "tiles_mb",
            "type": "raster",
            "source": "tiles_mb",
            "minzoom": 1,
            "maxzoom": 5
        }]
    };

    var bounds = [[-100, 0], [20, 80]];

    Mbmap = new mapboxgl.Map({
        container: 'map',
        zoom: 2,
        maxZoom: 4,
        maxBounds: bounds,
        center: [-40, 40],
        style: video_current
    });
}


var video_temp = {
    "version": 8,
    "sources": {
        "video": {
            "type": "video",
            "urls": ["https://seafile.makina-corpus.net/seafhttp/files/a7b3c09a-46a1-4647-8852-4a02cabed9e4/temperature.mp4"],
            "coordinates": [
                [-100, 80],
                [20, 80],
                [20, 0],
                [-100, 0]
            ]
        },
        "tiles_mb": {
            "type": "raster",
            "tiles": ["data/tiles_mb/{z}/{x}/{y}.png"],
            "scheme": "tms",
            "tileSize": 256
        }
    },
    "layers": [{
        "id": "video",
        "type": "raster",
        "source": "video"
    }, {
        "id": "tiles_mb",
        "type": "raster",
        "source": "tiles_mb",
        "minzoom": 1,
        "maxzoom": 5
    }]
};

var video_salinity = {
    "version": 8,
    "sources": {
        "video": {
            "type": "video",
            "urls": ["https://seafile.makina-corpus.net/seafhttp/files/9ce1069d-3294-4e5c-ad95-2d0930316912/salinity.mp4"],
            "coordinates": [
                [-100, 80],
                [20, 80],
                [20, 0],
                [-100, 0]
            ]
        },
        "tiles_mb": {
            "type": "raster",
            "tiles": ["data/tiles_mb/{z}/{x}/{y}.png"],
            "scheme": "tms",
            "tileSize": 256
        }
    },
    "layers": [{
        "id": "video",
        "type": "raster",
        "source": "video"
    }, {
        "id": "tiles_mb",
        "type": "raster",
        "source": "tiles_mb",
        "minzoom": 1,
        "maxzoom": 5
    }]
};

var video_wind = {
    "version": 8,
    "sources": {
        "video": {
            "type": "video",
            "urls": ["https://seafile.makina-corpus.net/seafhttp/files/cacf2c5f-7bc4-47e3-a08d-37d39c1df0d1/wind.mp4"],
            "coordinates": [
                [-100, 80],
                [20, 80],
                [20, 0],
                [-100, 0]
            ]
        },
        "tiles_mb": {
            "type": "raster",
            "tiles": ["data/tiles_mb/{z}/{x}/{y}.png"],
            "scheme": "tms",
            "tileSize": 256
        }
    },
    "layers": [{
        "id": "video",
        "type": "raster",
        "source": "video"
    }, {
        "id": "tiles_mb",
        "type": "raster",
        "source": "tiles_mb",
        "minzoom": 1,
        "maxzoom": 5
    }]
};

var pente_continentale_mb = {
    "version": 8,
    "sources": {
        "video": {
            "type": "video",
            "urls": ["../data/video/temperature.mp4"],
            "coordinates": [
                [-100, 80],
                [20, 80],
                [20, 0],
                [-100, 0]
            ]
        },
        "tiles_mb": {
            "type": "raster",
            "tiles": ["data/tiles_mb/{z}/{x}/{y}.png"],
            "scheme": "tms",
            "tileSize": 256
        },
        "pente_cont": {
            "type": "vector",
            "urls": ["data/geojson/pente_continentale.geojson"],
            "source-layer": "pent_c"
        }
    },
    "layers": [{
        "id": "video",
        "type": "raster",
        "source": "video"
    }, {
        "id": "tiles_mb",
        "type": "raster",
        "source": "tiles_mb",
        "minzoom": 1,
        "maxzoom": 5
    }, {
        "id": "pente_cont",
        "type": "line",
        "source": "pente_cont",
        "source-layer": "pent_c",
        "minzoom": 1,
        "maxzoom": 5
    }]
};

