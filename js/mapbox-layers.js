var video_current = {
    "attributionControl": true,
    "version": 8,
    "sources": {
        "video": {
            "type": "video",
            "urls": ["https://makinacorpus.github.io/gulf-stream-story/data/video/current.mp4"],
            "coordinates": [
                [-100, 80],
                [20, 80],
                [20, 0],
                [-100, 0]
            ]
        },
        "tiles_mb": {
            "type": "raster",
            "tiles": ["data/tiles/tiles_mb/{z}/{x}/{y}.png"],
            "scheme": "tms",
            "tileSize": 256
        }
    },
    "layers": [{
        "id": "video",
        "type": "raster",
        "source": "video"
    },
    {
        "id": "tiles_mb",
        "type": "raster",
        "source": "tiles_mb",
        "minzoom": 1,
        "maxzoom": 5
    }]
};

var video_temp = {
    "version": 8,
    "sources": {
        "video": {
            "type": "video",
            "urls": ["https://makinacorpus.github.io/gulf-stream-story/data/video/temperature.mp4"],
            "coordinates": [
                [-100, 80],
                [20, 80],
                [20, 0],
                [-100, 0]
            ]
        },
        "tiles_mb": {
            "type": "raster",
            "tiles": ["data/tiles/tiles_mb/{z}/{x}/{y}.png"],
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
            "urls": ["https://makinacorpus.github.io/gulf-stream-story/data/video/salinity.mp4"],
            "coordinates": [
                [-100, 80],
                [20, 80],
                [20, 0],
                [-100, 0]
            ]
        },
        "tiles_mb": {
            "type": "raster",
            "tiles": ["data/tiles/tiles_mb/{z}/{x}/{y}.png"],
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
            "urls": ["https://makinacorpus.github.io/gulf-stream-story/data/video/wind.mp4"],
            "coordinates": [
                [-100, 80],
                [20, 80],
                [20, 0],
                [-100, 0]
            ]
        },
        "tiles_mb": {
            "type": "raster",
            "tiles": ["data/tiles/tiles_mb/{z}/{x}/{y}.png"],
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
            "tiles": ["data/tiles/tiles_mb/{z}/{x}/{y}.png"],
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
