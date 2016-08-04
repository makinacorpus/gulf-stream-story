(function (window) {
  var $ = window.$;
  var mapboxgl = window.mapboxgl;
  var markdown = window.markdown;
  var gulfStream;

  var sameArrays = window.sameArrays = function sameArrays(a1, a2) {
    return (a1.length === a2.length) && a1.every(function (element, index) {
      return element === a2[index];
    });
  };

  window.App = function App() {
    var app = this;

    app.index = 0;
    app.currentSource = {};
    app.chartThermocline = null;
    app.currentMap = {};
    app.currentMarkers = {};
    app.leafletLayers = new window.LeafletLayers();
    app.mapboxLayers = new window.MapboxLayers();
    app.mapService = new window.MapService();
    app.stories = window.stories;

    app.plotBands = {
      surface: {
        from: null,
        to: null,
        color: 'rgba(177,196,214,0.6)',
        label: {
          text: 'Eaux de surface',
          style: {
            color: '#606060'
          }
        },
        id: 'plot-band-surface'
      },
      thermocline: {
        from: null,
        to: null,
        color: 'rgba(86, 119, 151, 0.6)',
        label: {
          text: 'Thermocline',
          style: {
            color: '#606060'
          }
        },
        id: 'plot-band-thermocline'
      },
      depth: {
        from: null,
        to: null,
        color: 'rgba(51, 87, 122, 0.6)',
        label: {
          text: 'Eaux profondes',
          style: {
            color: '#606060'
          }
        },
        id: 'plot-band-depth'
      }
    };

    app.plotBandsMonths = {
      'Août 2015': {
        surface_from: 0,
        surface_to: -11.405,
        thermocline_from: -11.405,
        thermocline_to: -130.666,
        depth_from: -130.666,
        depth_to: -200
      },
      'Octobre 2015': {
        surface_from: 0,
        surface_to: -29.445,
        thermocline_from: -29.445,
        thermocline_to: -109.729,
        depth_from: -109.729,
        depth_to: -200
      },
      'Décembre 2015': {
        surface_from: 0,
        surface_to: -65.807,
        thermocline_from: -65.807,
        thermocline_to: -109.729,
        depth_from: -109.729,
        depth_to: -200
      },
      'Mars 2016': {
        surface_from: 0,
        surface_to: -200
      }
    };

    app.init = function init() {
      var lastCategory = null;
      var initialCategory = 0;
      var urlParser;
      var urlHash;
      var i;
      var className;
      var progressItem;

      urlParser = document.createElement('a');
      urlParser.href = window.location.href;
      urlHash = urlParser.hash;

        // Init nav
      console.log('init nav');
      for (i = 0; i < app.stories.length; i++) {
        className = 'circle';
        if (app.stories[i].category !== lastCategory) {
          className += ' circle-cat ' + app.stories[i].slug;
        }
        progressItem = '' +
          '<a href="#' + i + '" id="progress-item-' + i + '" class="' + className + '">' +
            '<span class="label">' + i + '</span>' +
            '<span class="title"></span>' +
          '</a>';

        $('.progress').append(progressItem);

        lastCategory = app.stories[i].category;
      }

        // Bind events
      $('#next').on('click', app.goToNextState);
      $('.circle-cat').on('click', app.goToState);
      $('#depthSliderInput').on('slideStop', function (e) {
        app.mapService.Lmap.removeLayer(app.leafletLayers.depthLayer);
        app.leafletLayers.depthLayer = app.leafletLayers.depthLayers[e.value];
        app.mapService.Lmap.addLayer(app.leafletLayers.depthLayer);
      });

        // Load first content
      if (urlHash) {
        initialCategory = urlHash.substring(1);
        app.index = parseInt(initialCategory, 10);
      }
      app.changeContent(initialCategory);
    };

    app.goToNextState = function goToNextState() {
      if (app.index < app.stories.length - 1) {
        app.index = 1 + app.index;
        app.changeContent(app.index);
      }
    };

    app.goToState = function goToState(e) {
      var indexPage = e.target.innerText;
      app.index = parseInt(indexPage, 10);
      app.changeContent(indexPage);
    };


    app.updateLeafletMap = function updateLeafletMap(newMap) {
      var newZoom = newMap.zoom;
      var newCenter = newMap.center;
      var newBounds = newMap.maxBounds;
      var newLayers = newMap.layers;
      var options = {
        center: [-60, 0],
        zoom: 3
      };
      var j;
      var i;
      var layersToRemove = [];
      var layersToAdd = [];
      var oldLayers = [];

      // Remove mapbox map if it exists
      if (app.currentMap && app.currentMap.type === 'mapbox' && app.mapService.Mbmap) {
        app.mapService.Mbmap.remove();
        app.mapService.Mbmap = null;
        app.currentMap = {};
        app.currentMarkers = {};
        app.currentSource = {};
      }

      if (!newZoom) {
        newZoom = app.currentMap ? app.currentMap.zoom : 3;
      }

      if (!newCenter) {
        newCenter = app.currentMap ? app.currentMap.center : [-60, 0];
      }

      if (!newBounds) {
        newBounds = app.currentMap ? app.currentMap.maxBounds : null;
      }

      if (!app.mapService.Lmap) {
        if (newMap.options) options = newMap.options;
        app.mapService.createLeafletMap(options);
      }

      if (newBounds) {
        app.mapService.Lmap.setMaxBounds(newBounds);
      }
      app.mapService.Lmap.setView(newCenter, newZoom);

      if (newLayers) {
        layersToRemove = [];
        layersToAdd = [];
        oldLayers = app.currentMap ? app.currentMap.layers : null;

        if (oldLayers && oldLayers.length > 0) {
          layersToAdd = newLayers.filter(function (add) {
            return oldLayers.indexOf(add) < 0;
          });
          layersToRemove = oldLayers.filter(function (rem) {
            return newLayers.indexOf(rem) < 0;
          });
        } else {
          layersToAdd = newLayers;
        }

        for (j = 0; j < layersToRemove.length; j++) {
          app.mapService.Lmap.removeLayer(app.leafletLayers[layersToRemove[j]]);
        }

        for (i = 0; i < layersToAdd.length; i++) {
          app.mapService.Lmap.addLayer(app.leafletLayers[layersToAdd[i]]);
        }
      }
    };

    app.updateMapboxMap = function updateMapboxMap(newMap) {
      var newSources = newMap.sources;
      var newMarkers = newMap.markers;
      var i;
      var markersToRemove = [];
      var markersToAdd = [];
      var oldMarkers = [];

      if (app.currentMap && app.currentMap.type === 'leaflet' && app.mapService.Lmap) {
        if (app.currentMap.layers) {
          for (i = 0; i < app.currentMap.layers.length; i++) {
            app.mapService.Lmap.removeLayer(app.currentMap.layers[i]);
          }
        }
        app.mapService.Lmap.remove();
        app.mapService.Lmap = null;
        app.currentMap = {};
      }

      if (!app.mapService.Mbmap) {
        app.mapService.createMapboxGlMap();
      }

      if (newSources) {
        if (!app.currentMap || !app.currentMap.sources || !sameArrays(newSources, app.currentMap.sources)) {
          var newStyle = $.extend(true, {}, app.mapService.baseStyle);
          for (var i = 0; i < newSources.length; i++) {
            newStyle.sources[newSources[i]] = app.mapboxLayers[newSources[i]];
            newStyle.layers.unshift({
              id: newSources[i] + '_layer',
              type: 'raster',
              source: newSources[i]
            });
          }
          app.mapService.Mbmap.setStyle(newStyle);
        }
      }

      if (newMarkers) {
        markersToRemove = [];
        markersToAdd = [];
        oldMarkers = app.currentMap ? app.currentMap.markers : null;

        if (oldMarkers && oldMarkers.length > 0) {
          markersToAdd = newMarkers.filter(function (add) {
            return oldMarkers.indexOf(add) < 0;
          });
          markersToRemove = oldMarkers.filter(function (rem) {
            return newMarkers.indexOf(rem) < 0;
          });
        } else {
          markersToAdd = newMarkers;
        }

        for (var j = 0; j < markersToRemove.length; j++) {
          app.currentMarkers[markersToRemove[j]].remove();
          delete app.currentMarkers[markersToRemove[i]];
        }

        for (var i = 0; i < markersToAdd.length; i++) {
          var newImg = document.createElement('img');
          newImg.src = 'data/images/compass.svg';
          var label = document.createElement('div');
          label.className = 'mapbox-label map-label';
          label.innerHTML = app.mapboxMarkers[markersToAdd[i]].label;
          var marker = document.createElement('div');
          marker.className = 'mapbox-icon-marker';
          marker.appendChild(label);
          marker.appendChild(newImg);

          app.currentMarkers[markersToAdd[i]] = new mapboxgl.Marker(marker)
            .setLngLat(app.mapboxLayers.mapboxMarkers[markersToAdd[i]].coordinates)
            .addTo(app.mapService.Mbmap);
        }
      } else {
        var markersToRemove = app.currentMap ? app.currentMap.markers : null;
        if (markersToRemove && markersToRemove.length > 0) {
          for (var j = 0; j < markersToRemove.length; j++) {
            app.currentMarkers[markersToRemove[j]].remove();
            delete app.currentMarkers[markersToRemove[i]];
          }
        }
      }

      for (var method in newMap) {
        if (app.mapService.Mbmap && newMap.hasOwnProperty(method) && typeof app.mapService.Mbmap[method] === 'function') {
          app.mapService.Mbmap[method](newMap[method]);
        }
      }
    };

    app.updateMap = function updateMap(newMap) {
      if (newMap.type === 'leaflet') {
        app.updateLeafletMap(newMap);
      }

      if (newMap.type === 'mapbox') {
        app.updateMapboxMap(newMap);
      }
      app.currentMap = newMap;
    };

    app.updateTimeline = function updateTimeline(timeline, map) {
      var valuesLength = timeline.values.length;
      var contextLength = timeline.context.length;
      var valueElement = null;
      var contextElement = null;
      var timeSource = null;
      var i = 0;
      var j = 0;

      document.querySelector('.timeline-values').innerHTML = '';
      for (i = 0; i < valuesLength; i++) {
        valueElement = document.createElement('li');
        valueElement.innerHTML = timeline.values[i];
        document.querySelector('.timeline-values').appendChild(valueElement);
      }

      document.querySelector('.timeline-context').innerHTML = '';
      for (j = 0; j < contextLength; j++) {
        contextElement = document.createElement('li');
        contextElement.innerHTML = timeline.context[j];
        document.querySelector('.timeline-context').appendChild(contextElement);
      }

      document.querySelector('.timeline').dataset.active = true;
      document.querySelector('.timeline').classList.remove('hidden');

      if (timeline && map.sources.indexOf(timeline.source) > -1) {
        timeSource = timeline.source;
        if (app.mapService.Mbmap._loaded) {
          app.mapService.Mbmap.on('render', function () {
            app.triggerTimelineAnimation(timeSource);
          });
        } else {
          app.mapService.Mbmap.once('load', function () {
            app.triggerTimelineAnimation(timeSource);
          });
        }
      }
    };

    app.triggerTimelineAnimation = function triggerTimelineAnimation(timeSource) {
      var newSource = app.mapService.Mbmap.getSource(timeSource);
      var newVideo = newSource ? newSource.getVideo() : null;
      if (newSource && newVideo && (!app.currentSource || app.currentSource.id !== timeSource)) {
        app.resetTimeline();
        app.currentSource = newSource;
        app.mapService.Mbmap.off('render', function () {
          triggerTimelineAnimation(timeSource);
        });
        newVideo.addEventListener('timeupdate', app.mapService.animateTimeline);
      }
    };

    app.resetTimeline = function resetTimeline() {
      var currentVideo = null;
      if (app.currentSource.id) {
        currentVideo = app.currentSource.getVideo();
        currentVideo.removeEventListener('timeupdate', app.mapService.animateTimeline);
        $(currentVideo).remove();
        app.currentSource = null;
      }

      $('.timeline-progress').css({
        width: '0'
      });
    };

    app.hideTimeline = function hideTimeline() {
      document.querySelector('.timeline').dataset.active = false;
      document.querySelector('.timeline').classList.add('hidden');
      app.resetTimeline();
    };

    app.changeContent = function changeContent(i) {
      var state = app.stories[i] ? app.stories[i] : app.stories[0];
      var j = 0;

      $('.progress .circle').removeClass('active');
      $('.progress .circle').removeClass('passed');
      $('.progress .circle#progress-item-' + i).addClass('active');

      for (j = 0; j < i; j++) {
        $('.progress .circle#progress-item-' + j).addClass('passed');
      }

      history.pushState({ id: i, slug: state.slug }, state.slug, '#' + i);

      if (state.map) {
        app.updateMap(state.map);
      }
      if (state.text) {
        $('#text').html(markdown.toHTML(state.text));
      }
      if (state.art) {
        $('#art').html(markdown.toHTML(state.art));
      } else {
        $('#art').html('');
      }
      if (state.displayDepthSlider) {
        $('#depthSlider').css('display', 'block');
        $('#depthSliderInput').slider({
          value: 0,
          ticks: [0, 1, 2, 3, 4, 5, 6],
          tooltip: 'hide',
          ticks_labels: ['0 m', '-109 m', '-266 m', '-541 m', '-1062 m', '-1684 m', '-3220 m'],
          step: 1
        });
      } else {
        $('#depthSlider').css('display', 'none');
      }
      if (state.displayThermocline) {
        $('.left-panel').removeClass('col-md-9');
        $('.left-panel').addClass('col-md-6');
        $('.right-panel').removeClass('col-md-3');
        $('.right-panel').addClass('col-md-6');
        app.createGraphThermocline();
        if (app.mapService.Mbmap) {
          app.mapService.Mbmap.resize();
        }
      } else {
        $('.left-panel').removeClass('col-md-6');
        $('.left-panel').addClass('col-md-9');
        $('.right-panel').removeClass('col-md-6');
        $('.right-panel').addClass('col-md-3');
        app.removeGraphThermocline();
        if (app.mapService.Mbmap) {
          app.mapService.Mbmap.resize();
        }
      }
      if (state.legend) {
        $('.legend').css('display', 'none');
        $(state.legend).css('display', 'block');
      } else {
        $('.legend').css('display', 'none');
      }
      if (state.timeline) {
        app.updateTimeline(state.timeline, state.map);
      } else {
        app.hideTimeline();
      }
    };

    app.createGraphThermocline = function createGraphThermocline() {
      app.chartThermocline = $('#container').highcharts({
        chart: {
          height: 500,
          inverted: true
        },
        title: {
          text: 'Température de l’eau en fonction de la profondeur'
        },
        subtitle: {
          text: 'Août 2015 - Mars 2016 à 40°N 20°W (données Marine Copernicus)'
        },
        xAxis: {
          min: -200,
          max: 0,
          reversed: false,
          title: {
            enabled: true,
            text: 'Profondeur'
          },
          labels: {
            formatter: function () {
              return app.value + 'm';
            }
          },
          maxPadding: 0.05,
          showLastLabel: true
        },
        yAxis: {
          min: 13,
          max: 25,
          title: {
            text: 'Température'
          },
          labels: {
            formatter: function () {
              return app.value + '°C';
            }
          },
          lineWidth: 2
        },
        legend: {
          enabled: false
        },
        tooltip: {
          headerFormat: '<b>{series.name}</b><br/>',
          pointFormat: '{point.x} m: {point.y}°C'
        },
        plotOptions: {
          spline: {
            marker: {
              enable: false
            }
          },
          series: {
            point: {
              events: {
                mouseOver: function (e) {
                  var name = e.target.series.name;
                  var type = e.target.series.options.type;
                  var chart;
                  var plotBandsValues;
                  var plotBand;
                  var band;

                  if (type === 'line') {
                    chart = $('#container').highcharts();
                    plotBandsValues = app.plotBandsMonths[name];

                    for (band in app.plotBands) {
                      plotBand = app.plotBands[band];
                      plotBand.from = plotBandsValues[band + '_from'];
                      plotBand.to = plotBandsValues[band + '_to'];
                      chart.xAxis[0].addPlotBand(plotBand);
                    }
                  }
                },
                mouseOut: function (e) {
                  var type = e.target.series.options.type;
                  var chart;
                  var band;
                  if (type === 'line') {
                    chart = $('#container').highcharts();
                    for (band in app.plotBands) {
                      chart.xAxis[0].removePlotBand('plot-band-' + band);
                    }
                  }
                }
              }
            }
          }
        },
        series: [{
          name: 'Surface - Août 2015',
          type: 'area',
          data: [[0, 13], [0, 25], [-200, 25], [-200, 13]],
          color: '#B1C4D6',
          visible: false
        },
        {
          name: 'Thermocline - Août 2015',
          type: 'area',
          data: [[-11.405, 13], [-11.405, 25], [-200, 25], [-200, 13]],
          color: '#567797',
          visible: false
        },
        {
          name: 'Fond - Août 2015',
          type: 'area',
          data: [[-130.666, 13], [-130.666, 25], [-200, 25], [-200, 13]],
          color: '#33577A',
          visible: false
        },
        {
          name: 'Surface - Octobre 2015',
          type: 'area',
          data: [[0, 13], [0, 25], [-200, 25], [-200, 13]],
          color: '#B1C4D6',
          visible: false
        },
        {
          name: 'Thermocline - Octobre 2015',
          type: 'area',
          data: [[-29.445, 13], [-29.445, 25], [-200, 25], [-200, 13]],
          color: '#567797',
          visible: false
        },
        {
          name: 'Fond - Octobre 2015',
          type: 'area',
          data: [[-109.729, 13], [-109.729, 25], [-200, 25], [-200, 13]],
          color: '#33577A',
          visible: false
        },
        {
          name: 'Surface - Décembre 2015',
          type: 'area',
          data: [[0, 13], [0, 25], [-200, 25], [-200, 13]],
          color: '#B1C4D6',
          visible: false
        },
        {
          name: 'Thermocline - Décembre 2015',
          type: 'area',
          data: [[-65.807, 13], [-65.807, 25], [-200, 25], [-200, 13]],
          color: '#567797',
          visible: false
        },
        {
          name: 'Fond - Décembre 2015',
          type: 'area',
          data: [[-109.729, 13], [-109.729, 25], [-200, 25], [-200, 13]],
          color: '#33577A',
          visible: false
        },
        {
          name: 'Surface - Mars 2016',
          type: 'area',
          data: [[0, 13], [0, 25], [-200, 25], [-200, 13]],
          color: '#B1C4D6',
          visible: false
        },
        {
          name: 'Août 2015',
          type: 'line',
          color: '#000000',
          data: [[-0.494, 24.65], [-1.541, 24.65], [-2.646, 24.65], [-3.819, 24.65], [-5.078, 24.65], [-6.441, 24.65], [-7.930, 24.65], [-9.573, 24.65], [-11.405, 24.65], [-13.467, 24.55], [-15.810, 24.35], [-18.496, 23.95], [-21.599, 23.35], [-25.211, 22.65], [-29.445, 21.85], [-34.434, 21.05], [-40.344, 20.25], [-47.374, 19.45], [-55.764, 18.75], [-65.807, 18.25], [-77.854, 17.75], [-92.326, 17.35], [-109.729, 16.95], [-130.666, 16.55], [-155.851, 16.25], [-186.126, 15.85], [-222.475, 15.45], [-266.040, 15.05], [-318.127, 14.65], [-380.213, 14.15], [-453.938, 13.75], [-541.089, 13.35]]
        },
        {
          name: 'Octobre 2015',
          type: 'line',
          color: '#4a8fd2',
          data: [[-0.494, 22.95], [-1.541, 22.95], [-2.646, 22.85], [-3.819, 22.85], [-5.078, 22.85], [-6.441, 22.85], [-7.930, 22.85], [-9.573, 22.85], [-11.405, 22.85], [-13.467, 22.85], [-15.810, 22.75], [-18.496, 22.75], [-21.599, 22.75], [-25.211, 22.65], [-29.445, 22.65], [-34.434, 22.45], [-40.344, 22.15], [-47.374, 21.45], [-55.764, 20.55], [-65.807, 19.35], [-77.854, 17.75], [-92.326, 16.85], [-109.729, 16.15], [-130.666, 15.65], [-155.851, 15.35], [-186.126, 15.25], [-222.475, 15.05], [-266.040, 14.75], [-318.127, 14.45], [-380.213, 14.25], [-453.938, 13.85], [-541.089, 13.45]]
        },
        {
          name: 'Décembre 2015',
          type: 'line',
          color: '#FF9F00',
          data: [[-0.494, 19.35], [-1.541, 19.35], [-2.646, 19.35], [-3.819, 19.35], [-5.078, 19.35], [-6.441, 19.35], [-7.930, 19.35], [-9.573, 19.35], [-11.405, 19.35], [-13.467, 19.35], [-15.810, 19.35], [-18.496, 19.35], [-21.599, 19.35], [-25.211, 19.35], [-29.445, 19.35], [-34.434, 19.35], [-40.344, 19.35], [-47.374, 19.35], [-55.764, 19.35], [-65.807, 19.35], [-77.854, 19.05], [-92.326, 17.95], [-109.729, 17.05], [-130.666, 16.65], [-155.851, 16.25], [-186.126, 15.85], [-222.475, 15.55], [-266.040, 15.25], [-318.127, 14.95], [-380.213, 14.65], [-453.938, 14.05], [-541.089, 13.65]]
        },
        {
          name: 'Mars 2016',
          type: 'line',
          color: '#bd0c0c',
          data: [[-0.494, 16.65], [-1.541, 16.65], [-2.646, 16.55], [-3.819, 16.55], [-5.078, 16.55], [-6.441, 16.55], [-7.930, 16.55], [-9.573, 16.55], [-11.405, 16.55], [-13.467, 16.55], [-15.810, 16.55], [-18.496, 16.55], [-21.599, 16.55], [-25.211, 16.55], [-29.445, 16.45], [-34.434, 16.45], [-40.344, 16.45], [-47.374, 16.45], [-55.764, 16.45], [-65.807, 16.45], [-77.854, 16.45], [-92.326, 16.45], [-109.729, 16.45], [-130.666, 16.45], [-155.851, 16.45], [-186.126, 16.25], [-222.475, 15.95], [-266.040, 15.45], [-318.127, 14.95], [-380.213, 14.55], [-453.938, 14.05], [-541.089, 13.65]]
        }]
      });
    };

    app.removeGraphThermocline = function removeGraphThermocline() {
      if ($('#container').highcharts()) {
        $('#container').highcharts().destroy();
      }
    };
  };

  gulfStream = new window.App();
  gulfStream.init();
}(window));
