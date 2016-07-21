var Lmap = undefined;
var Mbmap = undefined;
var timelineEvent = null;
var colorScale = chroma.scale('OrRd').domain([0, 0.3]);
var depths = ['0', '109', '266', '541', '1062', '1684', '3220'];
var depth = depths[0];
var depthLayers = [];
var depthLayer = null;
var baseStyle = {
    version: 8,
    attributionControl: true,
    sources: {
        tiles_mb: {
            type: 'raster',
            tiles: ['data/tiles/tiles_mb/{z}/{x}/{y}.png'],
            scheme: 'tms',
            tileSize: 256
        }
    },
    layers: [
        {
            id: 'tiles_mb',
            type: 'raster',
            source: 'tiles_mb',
            minzoom: 1,
            maxzoom: 5
        }
    ]
};

function createLeafletMap(options) {
    Lmap = L.map('map', options);
}

function createMapboxGlMap() {
    var bounds = [[-100, 0], [20, 80]];

    mapboxgl.accessToken = 'pk.eyJ1IjoibWJyb3V0aW4iLCJhIjoiY2lxMmN3MDdjMDA0d2hybTIxOTYxa2c3MCJ9.T5MEIB6UqZLg3_DL4YqDCQ';


    Mbmap = new mapboxgl.Map({
        container: 'map',
        zoom: 3,
        maxZoom: 4,
        maxBounds: bounds,
        center: [-70,37],
        style: baseStyle,
        attributionControl: {
            position: 'bottom-right'
        }
    });

}

function animateTimeline(ev) {
    var target = ev.target;
    var percent = target.currentTime / target.duration * 100;
    var progressBar = $('.timeline-progress');
    progressBar.css({
        'width': percent + '%'
    });
}

function depthArrows(feature, latlng) {
    var html = '<div style="transform: rotate(';
    html += feature.properties.dir;
    html += 'deg);';
    html += 'font-size:';
    html += (11 + feature.properties.n * 20);
    html += 'px; color:';
    html += colorScale(feature.properties.n);
    html += '" class="rot">';
    html += '⬆</div>'; //↑⇑
    return L.marker(latlng, {
        icon: L.divIcon({
            className: 'arrow',
            html: html
        })
    });
};

function initCurrentDepth() {
    depths.forEach(function (depth) {
        var currentDepth = L.geoJson(null, {
            pointToLayer: depthArrows
        });

        $.getJSON('data/geojson/current_' + depth + '.geojson',
            function(data) {
                currentDepth.addData(data);
            }
        );

        depthLayers.push(currentDepth);
    });

    depthLayer = depthLayers[0];

    $('#depthSliderInput').on('slideStop', function(e) {
        Lmap.removeLayer(depthLayer);
        depthLayer = depthLayers[e.value];
        Lmap.addLayer(depthLayer);
    });
}

initCurrentDepth();
