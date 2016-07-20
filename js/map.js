var Lmap = undefined;
var Mbmap = undefined;
var timelineEvent = null;
var colorScale = chroma.scale('OrRd').domain([0, 0.3]);
var depths = ['0', '109', '266', '541', '1062', '1684', '3220'];
var depth = depths[0];
var depthLayers = [];
var depthLayer = null;

function createLeafletMap(options) {
    Lmap = L.map('map', options);
}

function createMapboxGlMap() {
    mapboxgl.accessToken = 'pk.eyJ1IjoibWJyb3V0aW4iLCJhIjoiY2lxMmN3MDdjMDA0d2hybTIxOTYxa2c3MCJ9.T5MEIB6UqZLg3_DL4YqDCQ';

    var bounds = [[-100, 0], [20, 80]];

    Mbmap = new mapboxgl.Map({
        container: 'map',
        zoom: 3,
        maxZoom: 4,
        maxBounds: bounds,
        center: [-70,37],
        style: video_current
    });

    Mbmap.on('load', function () {
        var video = Mbmap.getSource('video').getVideo();
        var timeline = document.querySelector('.timeline');

        if (timeline.dataset.active) {
            video.addEventListener('timeupdate', animateTimeline);
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
