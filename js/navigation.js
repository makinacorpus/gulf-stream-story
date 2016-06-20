var i = 0;

var story = [  
    {
        'view': [[24,-80.72], 5],
        'text': 'détroit de Floride'
    },
    {
        'view': [[10.13,-58.59],5],
        'text': 'courant de Guyane + courant des antilles'
    },
    {
        'view': [[34.99,-74.97],5],
        'text': 'cap hatteras'
    },
    {
        'view': [[43.19,-50.3],5],
        'text': 'grands bancs de terre neuve'
    },
    {
        'view': [[44.72,-37.38],5],
        'text': 'courant nord atlantique'
    },
    {
        'view': [[44.72,-37.38],5],
        'text': 'courant des Açores'
    },
    {
        'view': [[29.53,-45],4],
        'text': 'courant nord equatorial'
    },
    {
        'view': [[44.72,-37.38],4],
        'text': 'courant de Guinée'
    },
    {
        'view': [[56,-4.91],5],
        'text': 'courant Greenland'
    },
    {
        'view': [[57,-12],4],
        'text': 'dérive nord atlantique'
    }
];

function init() {
    changeContent(0);
}

$('#next').on('click', function() {
    if (i < story.length - 1) {
        i = i + 1;
        changeContent(i);
    }
});

$('#prev').on('click', function() {
    if (i > 0) {
        i = i - 1;
        changeContent(i);
    }
});

function changeContent(i) {
    var state = story[i];
    console.log(state)
    if(state.view) {
        map.setView(state.view[0], state.view[1]);
    }
    if(state.text) {
        $('#text').html(state.text);
    }
}