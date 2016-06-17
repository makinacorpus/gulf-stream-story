var i = 0;

var story = [
    {
        'zoom': 2,
        'text': 'etape 1'
    },
    {
        'zoom': 5,
        'text': 'etape 2'
    },
    {
        'zoom': 3,
        'text': 'etape 3'
    },
    {
        'zoom': 4,
        'text': 'etape 4'
    }
];

$('#next').on('click', function() {
    if (i < story.length - 1) {
        i += 1;
        changeContent(i);
    }
});

$('#prev').on('click', function() {
    if (i > 0) {
        i -= 1;
        changeContent(i);
    }
});

function changeContent(i) {
    var state = story[i];
    if(state.zoom) {
        map.setZoom(state.zoom);
    }
    if(state.text) {
        $('#text').html(state.text);
    }
}