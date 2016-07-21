var neTiles = L.tileLayer('data/tiles/natural_earth/{z}/{x}/{y}.png', {
    tms: true,
    attribution: '<a target="_blank" href="http://www.naturalearthdata.com/">Natural Earth Data</a>',
    maxZoom: 5,
    minZoom: 2
});

var wh = L.tileLayer('data/tiles/gs2/{z}/{x}/{y}.png', {
    tms: true,
    attribution: '<a target="_blank" href="https://commons.wikimedia.org/wiki/File:Winslow_Homer_-_The_Gulf_Stream_-_Metropolitan_Museum_of_Art.jpg">Wikimedia</a>',
    maxZoom: 4,
    minZoom: 3
});

var BFranklin = L.tileLayer('data/tiles/BFranklin/{z}/{x}/{y}.png', {
    tms: true,
    attribution: '<a target="_blank" href="https://commons.wikimedia.org/wiki/File:Franklingulfstream.jpg">Wikimedia</a>',
    maxZoom: 5,
    minZoom: 3
});

var point_interet = L.icon({
    iconUrl: 'data/images/compass.svg',
    iconSize: [40,40]
});

var ssh = L.imageOverlay("data/images/ssh.png",[[0, -100], [85, 20]]);

var detroit_de_floride = L.marker([24.13,-80.64], {icon: point_interet}).bindLabel("<img alt='detroit_de_floride' src='data/images/detroit_de_floride.jpg'></br>Détroit de Floride");

var isthme_panama = L.geoJson(null, {
    style: {
        weight: 1,
        opacity: 1,
        color: '#00341d'
        }
    });

$.getJSON("data/geojson/isthme_panama.geojson", function (data) {
    isthme_panama.addData(data).bindLabel("Isthme du Panama");
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
    courant_guyane.addData(data).bindLabel("Courant de Guyane");
});

var thermohaline_cold = L.geoJson(null, {
    style: {
        weight: 15,
        opacity: 1,
        color: '#006FFF'
    },
    onEachFeature: function (feature, layer) {
        layer.setText('   \u25b6   ', {
            repeat: true,
            offset: 3,
            attributes: {
                'fill': '#A9E2F3',
                'font-weight': 'bold',
                'font-size': '12'
            }
        });
    }

});

$.getJSON("data/geojson/thermohaline_cold.geojson", function (data) {
    thermohaline_cold.addData(data).bindLabel("courant froid de profondeur");
});

var thermohaline_hot = L.geoJson(null, {
    style: {
        weight: 15,
        opacity: 1,
        color: '#FF0000'
    },
    onEachFeature: function (feature, layer) {
        layer.setText('   \u25b6   ', {
            repeat: true,
            offset: 3,
            attributes: {
                'fill': '#F5A9A9',
                'font-weight': 'bold',
                'font-size': '12'
            }
        });
    }
});

$.getJSON("data/geojson/test.geojson", function (data) {
    thermohaline_hot.addData(data).bindLabel("courant chaud de surface");
});

var pente_continentale = L.geoJson(null, {
    style: {
        weight: 5,
        color: '#006268'
    }
});

$.getJSON("data/geojson/pente_continentale.geojson", function (data) {
    pente_continentale.addData(data).bindLabel("pente continentale");
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
  courant_floride.addData(data).bindLabel("Gulf Stream: Courant de Floride");
});

var cap_hatteras = L.marker([35,-75.33], {icon: point_interet}).bindLabel("<img alt='cap_hatteras' src='data/images/cap_hatteras.jpg'></br>Cap Hatteras");

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

$.getJSON("data/geojson/gulfstream.geojson", function(data) {
    gulfstream.addData(data).bindLabel("Gulf Stream");
});

var grands_bancs_de_terre_neuve = L.marker([43.19,-50.29], {icon: point_interet}).bindLabel("Grands Bancs de Terre Neuve");

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
    courant_nord_atlantique.addData(data).bindLabel("Courant Nord Atlantique");
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
    courant_acores.addData(data).bindLabel("Courant des Açores");
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
    courant_canaries.addData(data).bindLabel("Courant des Canaries");
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
    derive_nord_atlantique_1.addData(data).bindLabel("Dérive Nord Atlantique");
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
    derive_nord_atlantique_2.addData(data).bindLabel("Dérive Nord Atlantique");
});

var golfe_mexique = L.geoJson(null, {
        style: {
            weight: 1,
            opacity: 1,
            color: '#00341d'
        }
    });

$.getJSON("data/geojson/golfe_mexique.geojson", function (data) {
    golfe_mexique.addData(data).bindLabel("Golfe du Mexique");
});
