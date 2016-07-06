var index = 0;

var story = [
    {
        'createLeafletMap': true
    },
    {
        'view': [[24, -80.72], 5],
        'text': '#Naissance du Gulf Stream\n Pour suivre le Gulf Stream, focalisons nous sur le trajet d’une goutte d’eau qui se trouve dans le Golfe du Mexique. Elle pourrait venir d’un cumulonimbus, de l’Atlantique, du lac Itasca, source du Mississipi, ou de bien d’autres horizons. Mais sa provenance n’a que peu d’importance. Si elle ne s’évapore pas, elle se dirigera inévitablement vers le Gulf Stream.\n\n![tableau](data/images/gulf_stream_winslow_homer.jpg)\n*Gulf Stream par Winslow Homer (1899, peinture à l’huile)*'
    },
    {
        'view': [[10.13, -58.59], 4],
        'text': '#Naissance du Gulf Stream\n Le courant de Guyane, qui longe les côtes d’Amérique du Sud, se retrouve dans un cul-de-sac: l’Isthme du Panama. Il est naturellement emporté vers le nord et à l’est par la circulation anticyclonique des Açores (sens des aiguilles d’une montre). Il dirige donc notre goutte d’eau vers une seule porte de sortie : le détroit de Floride. C’est l’étroitesse de ce passage, situé entre Cuba et la Floride, qui génère un trop plein qui donne naissance au Gulf Stream.\n\n ![detroit_de_floride](data/images/detroit_de_floride.jpg)\n*Détroit de Floride*\n\n*Isthme du Panama',
        'addLayers': [courant_guyane, detroit_de_floride, pente_continentale]
    },
    {
        'view': [[34.99, -74.97], 5],
        'text': '#Le Gulf Stream continental\n Ca y est, notre goutte d’eau qui a eu du mal à se frayer un passage entre ses sœurs est entraînée à pleine vitesse dans le Gulf Stream. Elle vogue maintenant à la vitesse record de 2 m/s dans cette partie du Gulf Stream appelée courant de Floride. Ce véritable fleuve côtier reste collé au continent, canalisé par la pente continentale jusqu’au Cap Hatteras.\n\n ![detroit_de_floride](data/images/cap_hatteras.jpg)\n*Le Cap Hatteras*',
        'addLayers': [courant_floride, cap_hatteras],
        'removeLayers': [detroit_de_floride]
    },
    {
        'view': [[43.19, -62.3], 5],
        'text': '#Le Gulf Stream océanique\nEn quittant le Cap Hatteras, notre goutte d’eau s’embarque vers le large en suivant le fleuve océanique. Elle se confronte maintenant à un univers beaucoup plus chaotique. La pente continentale n’est plus là pour canaliser son mouvement qui devient tourbillonnaire. Certains petits courants sortent du flux qui file maintenant plein est, en direction de l’Europe.',
        'addLayers': [gulfstream],
    },
    {
        'view': [[43.19, -50.3], 5],
        'text': '#Les Grands Bancs de Terre Neuve\nEn arrivant aux Grands Bancs de Terre Neuve, notre goutte d’eau observe la mort du Gulf Stream. C’est le chaos du large qui en a finalement eu raison. Le fleuve océanique a perdu ses caractéristiques qui le rendait si particulier. Scientifiquement parlant, sa course s’achève à la longitude 50°W, mais le mouvent des masses d’eau ne s’arrête pas pour autant.',
        'addLayers': [grands_bancs_de_terre_neuve],
        'removeLayers': [cap_hatteras]
    },
    {
        'view': [[44.72, -37.38], 5],
        'text': '#Le courant Nord Atlantique\nA bout de souffle, le Gulf Stream passe le relais au courant Nord Atlantique qui entraîne à son tour notre goutte d’eau. Plus libre, elle n’est plus canalisée par le fleuve océanique et va rapidement se retrouver confronter à des chemins multiples.',
        'addLayers': [courant_nord_atlantique],
        'removeLayers': [grands_bancs_de_terre_neuve]
    },
    {
        'view': [[31.92, -58.59], 5],
        'text': '#Le courant des Açores\nLe courant des Açores est le premier candidat qui essaye d’emporter notre goutte d’eau et une partie de ses sœurs. Il se forme et est alimenté par l’anticyclone des Açores. Il rejoint soit le courant de Guyane soit le courant des Antilles. Dans tous les cas, c’est un retour à la case départ pour notre goutte d’eau qui repart pour un tour de Gulf Stream.',
        'addLayers': [courant_acores],
        'removeLayers': [pente_continentale]
    },
    {
        'view': [[29.53, -45], 4],
        'text': '#Le courant des Canaries\nAutre possibilité, notre goutte d’eau peut être entraînée par le courant des Canaries. A l’image du courant des Açores, l’anticyclone des Açores est le moteur du courant des Canaries et de son extension, le courant Nord Atlantique. Ce dernier finit sa course dans le courant de Guyane. C’est donc un autre retour à la case départ. Le courant de Guinée, seconde extension du courant des Canaries, sort de l’influence de l’anticyclone des Açores et emporte notre goutte d’eau le long des côtes Africaines vers l’équateur.',
        'addLayers': [courant_canaries],
    },
    {
        'view': [[56, -34.91], 4],
        'text': '#Cap sur le Groenland\nNotre goutte d’eau ne tombe pas fatalement sous l’emprise de l’anticyclone des Açores. Elle peut aussi être attirée par sa sœur nordique, la dépression d’Islande, qui tourne dans le sens inverse des aiguilles d’une montre. Encore une fois, de nombreux choix s’offrent à notre goutte d’eau. Elle peut mettre le cap vers l’Islande et le Groenland. En suivant ce chemin et en passant par la mer du Labrador, elle pourrait de nouveau être confronté au Gulf Stream.',
        'addLayers': [groenland],
    },
    {
        'view': [[57, -12], 4],
        'text': '#La dérive Nord Atlantique\nAu delà de l’influence du vent qui créé les courants de surface, un nouveau mécanisme, la pompe thermohaline, attire notre goutte d’eau vers le Nord de l’Europe et essaye petit à petit de l’entraîner vers les abysses. Nous étudierons ce phénomène un peu plus tard. En suivant cette voie, notre goutte d’eau a de fortes chances de voguer vers la mer Baltique ou de longer les côtes Norvégiennes pour continuer sa course dans l’océan Arctique. ',
        'addLayers': [derive_nord_atlantique_1, derive_nord_atlantique_2],
    },
    {
        'text': 'suppr leaflet',
        'destroyLeafletMap': true,
        'addMapboxGlMap': true
    }
];

init();

function init() {
    console.log('init nav');
    changeContent(0);
}

$('#next').on('click', function() {
    if (index < story.length - 1) {
        index = index + 1;
        changeContent(index);
    }
});

// $('#prev').on('click', function() {
//     if (index > 0) {
//         index = index - 1;
//         reverseContent(index + 1);
//         changeContent(index);
//     }
// });

function changeContent(i) {
    var state = story[i];
    console.log(state);
    if (state.view) {
        Lmap.setView(state.view[0], state.view[1]);
    }
    if (state.text) {
        $('#text').html(markdown.toHTML(state.text));
    }
    if (state.addLayers) {
        for (layer in state.addLayers) {
            Lmap.addLayer(state.addLayers[layer]);
        }
    }
    if (state.removeLayers) {
        for (layer in state.removeLayers) {
            Lmap.removeLayer(state.removeLayers[layer]);
        }
    }
    if (state.createLeafletMap) {
        createLeafletMap();
    }
    if (state.destroyLeafletMap) {
        Lmap.remove();
    }
    if (state.addMapboxGlMap) {
        createMapboxGlMap();
    }
}
