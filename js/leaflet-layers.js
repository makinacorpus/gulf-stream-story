(function (window) {
  var L = window.L;
  var $ = window.$;
  var chroma = window.chroma;

  window.LeafletLayers = function leafletLayers() {
    var service = this;

    service.neTiles = L.tileLayer('data/tiles/natural_earth/{z}/{x}/{y}.png', {
      tms: true,
      attribution: '<a target="_blank" href="http://www.naturalearthdata.com/">Natural Earth Data</a>',
      maxZoom: 5,
      minZoom: 2
    });

    service.wh = L.tileLayer('data/tiles/gs2/{z}/{x}/{y}.png', {
      tms: true,
      attribution: '<a target="_blank" href="https://commons.wikimedia.org/wiki/File:Winslow_Homer_-_The_Gulf_Stream_-_Metropolitan_Museum_of_Art.jpg">Wikimedia</a>',
      maxZoom: 4,
      minZoom: 3
    });

    service.BFranklin = L.tileLayer('data/tiles/BFranklin/{z}/{x}/{y}.png', {
      tms: true,
      attribution: '<a target="_blank" href="https://commons.wikimedia.org/wiki/File:Franklingulfstream.jpg">Wikimedia</a>',
      maxZoom: 5,
      minZoom: 3
    });

    service.Summer_Squall = L.tileLayer('data/tiles/wh_summer_squall/{z}/{x}/{y}.png', {
      tms: true,
      attribution: '<a target="_blank" href="https://commons.wikimedia.org/wiki/File:Winslow_Homer_Summer_Squall.jpg">Wikimedia</a>',
      maxZoom: 5,
      minZoom: 3
    });

    service.point_interet = L.icon({
      iconUrl: 'data/images/compass.svg',
      iconSize: [40, 40],
      iconAnchor: [20, 40]
    });

    service.ssh = L.imageOverlay('data/images/ssh.png', [[0, -100], [85, 20]]);

    service.detroit_de_floride = L.marker([24.13, -80.64], { icon: service.point_interet })
      .bindLabel("<img alt='detroit_de_floride' src='data/images/detroit_de_floride.jpg'></br>Détroit de Floride", {
        className: 'map-label'
      });

    service.isthme_panama = L.geoJson(null, {
      style: {
        weight: 1,
        opacity: 1,
        color: '#00341d'
      }
    });

    $.getJSON('data/geojson/isthme_panama.geojson', function (data) {
      service.isthme_panama.addData(data).bindLabel('Isthme du Panama', {
        className: 'map-label'
      });
    });

    service.courant_guyane = L.geoJson(null, {
      style: {
        weight: 8,
        opacity: 1,
        color: '#337ab7'
      },
      onEachFeature: function (feature, layer) {
        layer.setText(' \u263d ', {
          repeat: true,
          offset: 4,
          attributes: {
            fill: '#BDDAFF',
            'font-weight': 'bold',
            'font-size': '12'
          }
        });
      }
    });

    $.getJSON('data/geojson/courant_de_guyane.geojson', function (data) {
      service.courant_guyane.addData(data).bindLabel('Courant de Guyane', {
        className: 'map-label'
      });
    });

    service.thermohaline_cold = L.geoJson(null, {
      style: {
        weight: 8,
        opacity: 1,
        color: '#337ab7'
      },
      onEachFeature: function (feature, layer) {
        layer.setText('   \u25b6   ', {
          repeat: true,
          offset: 3,
          attributes: {
            fill: '#A9E2F3',
            'font-weight': 'bold',
            'font-size': '12'
          }
        });
      }

    });

    $.getJSON('data/geojson/thermohaline_cold.geojson', function (data) {
      service.thermohaline_cold.addData(data).bindLabel('courant froid de profondeur', {
        className: 'map-label'
      });
    });

    service.thermohaline_hot = L.geoJson(null, {
      style: {
        weight: 8,
        opacity: 1,
        color: '#FF0000'
      },
      onEachFeature: function (feature, layer) {
        layer.setText('   \u25b6   ', {
          repeat: true,
          offset: 3,
          attributes: {
            fill: '#F5A9A9',
            'font-weight': 'bold',
            'font-size': '12'
          }
        });
      }
    });

    $.getJSON('data/geojson/test.geojson', function (data) {
      service.thermohaline_hot.addData(data).bindLabel('courant chaud de surface', {
        className: 'map-label'
      });
    });

    service.pente_continentale = L.geoJson(null, {
      style: {
        weight: 5,
        color: '#006268'
      }
    });

    $.getJSON('data/geojson/pente_continentale.geojson', function (data) {
      service.pente_continentale.addData(data).bindLabel('pente continentale', {
        className: 'map-label'
      });
    });

    service.courant_floride = L.geoJson(null, {
      style: {
        weight: 8,
        opacity: 1,
        color: '#0b4c5f'
      },
      onEachFeature: function (feature, layer) {
        layer.setText(' \u263d ', {
          repeat: true,
          offset: 4,
          attributes: {
            fill: '#C8CFEB',
            'font-weight': 'bold',
            'font-size': '12'
          }
        });
      }
    });

    $.getJSON('data/geojson/courant_de_floride.geojson', function (data) {
      service.courant_floride.addData(data).bindLabel('Gulf Stream: Courant de Floride', {
        className: 'map-label'
      });
    });

    service.cap_hatteras = L.marker([35, -75.33], { icon: service.point_interet })
      .bindLabel("<img alt='cap_hatteras' src='data/images/cap_hatteras.jpg'></br>Cap Hatteras", {
        className: 'map-label'
      });

    service.gulfstream = L.geoJson(null, {
      style: {
        weight: 8,
        opacity: 1,
        color: '#0b4c5f'
      },
      onEachFeature: function (feature, layer) {
        layer.setText(' \u263d ', {
          repeat: true,
          offset: 4,
          attributes: {
            fill: '#C8CFEB',
            'font-weight': 'bold',
            'font-size': '12'
          }
        });
      }
    });

    $.getJSON('data/geojson/gulfstream.geojson', function (data) {
      service.gulfstream.addData(data).bindLabel('Gulf Stream', {
        className: 'map-label'
      });
    });

    service.grands_bancs_de_terre_neuve = L.marker([43.19, -50.29], { icon: service.point_interet })
      .bindLabel('Grands Bancs de Terre Neuve', {
        className: 'map-label'
      });

    service.courant_nord_atlantique = L.geoJson(null, {
      style: {
        weight: 8,
        opacity: 1,
        color: '#337ab7'
      },
      onEachFeature: function (feature, layer) {
        layer.setText(' \u263d ', {
          repeat: true,
          offset: 4,
          attributes: {
            fill: '#BDDAFF',
            'font-weight': 'bold',
            'font-size': '12'
          }
        });
      }
    });

    $.getJSON('data/geojson/courant_nord_atlantique.geojson', function (data) {
      service.courant_nord_atlantique.addData(data).bindLabel('Courant Nord Atlantique', {
        className: 'map-label'
      });
    });

    service.courant_acores = L.geoJson(null, {
      style: {
        weight: 8,
        opacity: 1,
        color: '#337ab7'
      },
      onEachFeature: function (feature, layer) {
        layer.setText(' \u263d ', {
          repeat: true,
          offset: 4,
          attributes: {
            fill: '#BDDAFF',
            'font-weight': 'bold',
            'font-size': '12'
          }
        });
      }
    });

    $.getJSON('data/geojson/courant_des_acores.geojson', function (data) {
      service.courant_acores.addData(data).bindLabel('Courant des Açores', {
        className: 'map-label'
      });
    });

    service.courant_canaries = L.geoJson(null, {
      style: {
        weight: 8,
        opacity: 1,
        color: '#337ab7'
      },
      onEachFeature: function (feature, layer) {
        layer.setText(' \u263d ', {
          repeat: true,
          offset: 4,
          attributes: {
            fill: '#BDDAFF',
            'font-weight': 'bold',
            'font-size': '12'
          }
        });
      }
    });

    $.getJSON('data/geojson/courant_des_canaries.geojson', function (data) {
      service.courant_canaries.addData(data).bindLabel('Courant des Canaries', {
        className: 'map-label'
      });
    });


    service.groenland = L.geoJson(null, {
      style: {
        weight: 8,
        opacity: 1,
        color: '#337ab7'
      },
      onEachFeature: function (feature, layer) {
        layer.setText(' \u263d ', {
          repeat: true,
          offset: 4,
          attributes: {
            fill: '#BDDAFF',
            'font-weight': 'bold',
            'font-size': '12'
          }
        });
      }
    });

    $.getJSON('data/geojson/groenland.geojson', function (data) {
      service.groenland.addData(data);
    });


    service.derive_nord_atlantique_1 = L.geoJson(null, {
      style: {
        weight: 8,
        opacity: 1,
        color: '#337ab7'
      },
      onEachFeature: function (feature, layer) {
        layer.setText(' \u263d ', {
          repeat: true,
          offset: 4,
          attributes: {
            fill: '#BDDAFF',
            'font-weight': 'bold',
            'font-size': '12'
          }
        });
      }
    });

    $.getJSON('data/geojson/derive_nord_atlantique_1.geojson', function (data) {
      service.derive_nord_atlantique_1.addData(data).bindLabel('Dérive Nord Atlantique', {
        className: 'map-label'
      });
    });


    service.derive_nord_atlantique_2 = L.geoJson(null, {
      style: {
        weight: 8,
        opacity: 1,
        color: '#337ab7'
      },
      onEachFeature: function (feature, layer) {
        layer.setText(' \u263d ', {
          repeat: true,
          offset: 4,
          attributes: {
            fill: '#BDDAFF',
            'font-weight': 'bold',
            'font-size': '12'
          }
        });
      }
    });

    $.getJSON('data/geojson/derive_nord_atlantique_2.geojson', function (data) {
      service.derive_nord_atlantique_2.addData(data).bindLabel('Dérive Nord Atlantique', {
        className: 'map-label'
      });
    });

    service.golfe_mexique = L.geoJson(null, {
      style: {
        weight: 1,
        opacity: 1,
        color: '#00341d'
      }
    });

    $.getJSON('data/geojson/golfe_mexique.geojson', function (data) {
      service.golfe_mexique.addData(data).bindLabel('Golfe du Mexique', {
        className: 'map-label'
      });
    });

    service.depthLayers = [];
    service.depthLayer = null;
    service.colorScale = chroma.scale('OrRd').domain([0, 0.3]);
    service.depths = ['0', '109', '266', '541', '1062', '1684', '3220'];
    service.depth = service.depths[0];

    service.depthArrows = function depthArrows(feature, latlng) {
      var html = '<div style="transform: rotate(';
      html += feature.properties.dir;
      html += 'deg);';
      html += 'font-size:';
      html += (11 + feature.properties.n * 20);
      html += 'px; color:';
      html += service.colorScale(feature.properties.n);
      html += '" class="rot">';
      html += '⬆</div>'; // ↑⇑
      return L.marker(latlng, {
        icon: L.divIcon({
          className: 'arrow',
          html: html
        })
      });
    };

    service.initCurrentDepth = function initCurrentDepth() {
      service.depths.forEach(function (depth) {
        var currentDepth = L.geoJson(null, {
          pointToLayer: service.depthArrows
        });

        service.depthLayers.push(currentDepth);

        $.getJSON('data/geojson/current_' + depth + '.geojson',
          function (data) {
            currentDepth.addData(data);
          }
        );
      });
      service.depthLayer = service.depthLayers[0];
    };

    service.initCurrentDepth();
  };
}(window));
