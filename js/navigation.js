var index = 0;

var story = [
    // {
    //     'createLeafletMap': true
    // },
    {
        'category': 'Introduction',
        'slug': 'introduction',
        'view': [[24, -80.72], 5],
        'text': '## Naissance du Gulf Stream\n Pour suivre le Gulf Stream, focalisons nous sur le trajet d’une goutte d’eau qui se trouve dans le Golfe du Mexique. Elle pourrait venir d’un cumulonimbus, de l’Atlantique, du lac Itasca, source du Mississipi, ou de bien d’autres horizons. Mais sa provenance n’a que peu d’importance. Si elle ne s’évapore pas, elle se dirigera inévitablement vers le Gulf Stream.\n\n![tableau](data/images/gulf_stream_winslow_homer.jpg)\n*Gulf Stream par Winslow Homer (1899, peinture à l’huile)*'
    },
    {
        'category': 'Introduction',
        'slug': 'introduction',
        'view': [[10.13, -58.59], 4],
        'text': '## Naissance du Gulf Stream\n Le courant de Guyane, qui longe les côtes d’Amérique du Sud, se retrouve dans un cul-de-sac: l’Isthme du Panama. Il est naturellement emporté vers le nord et à l’est par la circulation anticyclonique des Açores (sens des aiguilles d’une montre). Il dirige donc notre goutte d’eau vers une seule porte de sortie : le détroit de Floride. C’est l’étroitesse de ce passage, situé entre Cuba et la Floride, qui génère un trop plein qui donne naissance au Gulf Stream.\n\n ![detroit_de_floride](data/images/detroit_de_floride.jpg)\n*Détroit de Floride*\n\n*Isthme du Panama',
        'addLayers': [courant_guyane, detroit_de_floride, pente_continentale]
    },
    {
        'category': 'Introduction',
        'slug': 'introduction',
        'view': [[34.99, -74.97], 5],
        'text': '## Le Gulf Stream continental\n Ca y est, notre goutte d’eau qui a eu du mal à se frayer un passage entre ses sœurs est entraînée à pleine vitesse dans le Gulf Stream. Elle vogue maintenant à la vitesse record de 2 m/s dans cette partie du Gulf Stream appelée courant de Floride. Ce véritable fleuve côtier reste collé au continent, canalisé par la pente continentale jusqu’au Cap Hatteras.\n\n ![detroit_de_floride](data/images/cap_hatteras.jpg)\n*Le Cap Hatteras*',
        'addLayers': [courant_floride, cap_hatteras],
        'removeLayers': [detroit_de_floride]
    },
    {
        'category': 'Introduction',
        'slug': 'introduction',
        'view': [[43.19, -62.3], 5],
        'text': '##Le Gulf Stream océanique\nEn quittant le Cap Hatteras, notre goutte d’eau s’embarque vers le large en suivant le fleuve océanique. Elle se confronte maintenant à un univers beaucoup plus chaotique. La pente continentale n’est plus là pour canaliser son mouvement qui devient tourbillonnaire. Certains petits courants sortent du flux qui file maintenant plein est, en direction de l’Europe.',
        'addLayers': [gulfstream],
    },
    {
        'category': 'Introduction',
        'slug': 'introduction',
        'view': [[43.19, -50.3], 5],
        'text': '##Les Grands Bancs de Terre Neuve\nEn arrivant aux Grands Bancs de Terre Neuve, notre goutte d’eau observe la mort du Gulf Stream. C’est le chaos du large qui en a finalement eu raison. Le fleuve océanique a perdu ses caractéristiques qui le rendait si particulier. Scientifiquement parlant, sa course s’achève à la longitude 50°W, mais le mouvent des masses d’eau ne s’arrête pas pour autant.',
        'addLayers': [grands_bancs_de_terre_neuve],
        'removeLayers': [cap_hatteras]
    },
    {
        'category': 'Introduction',
        'slug': 'introduction',
        'view': [[44.72, -37.38], 5],
        'text': '##Le courant Nord Atlantique\nA bout de souffle, le Gulf Stream passe le relais au courant Nord Atlantique qui entraîne à son tour notre goutte d’eau. Plus libre, elle n’est plus canalisée par le fleuve océanique et va rapidement se retrouver confronter à des chemins multiples.',
        'addLayers': [courant_nord_atlantique],
        'removeLayers': [grands_bancs_de_terre_neuve]
    },
    {
        'category': 'Introduction',
        'slug': 'introduction',
        'view': [[31.92, -58.59], 5],
        'text': '##Le courant des Açores\nLe courant des Açores est le premier candidat qui essaye d’emporter notre goutte d’eau et une partie de ses sœurs. Il se forme et est alimenté par l’anticyclone des Açores. Il rejoint soit le courant de Guyane soit le courant des Antilles. Dans tous les cas, c’est un retour à la case départ pour notre goutte d’eau qui repart pour un tour de Gulf Stream.',
        'addLayers': [courant_acores],
        'removeLayers': [pente_continentale]
    },
    {
        'category': 'Introduction',
        'slug': 'introduction',
        'view': [[29.53, -45], 4],
        'text': '##Le courant des Canaries\nAutre possibilité, notre goutte d’eau peut être entraînée par le courant des Canaries. A l’image du courant des Açores, l’anticyclone des Açores est le moteur du courant des Canaries et de son extension, le courant Nord Atlantique. Ce dernier finit sa course dans le courant de Guyane. C’est donc un autre retour à la case départ. Le courant de Guinée, seconde extension du courant des Canaries, sort de l’influence de l’anticyclone des Açores et emporte notre goutte d’eau le long des côtes Africaines vers l’équateur.',
        'addLayers': [courant_canaries],
    },
    {
        'category': 'Introduction',
        'slug': 'introduction',
        'view': [[56, -34.91], 4],
        'text': '##Cap sur le Groenland\nNotre goutte d’eau ne tombe pas fatalement sous l’emprise de l’anticyclone des Açores. Elle peut aussi être attirée par sa sœur nordique, la dépression d’Islande, qui tourne dans le sens inverse des aiguilles d’une montre. Encore une fois, de nombreux choix s’offrent à notre goutte d’eau. Elle peut mettre le cap vers l’Islande et le Groenland. En suivant ce chemin et en passant par la mer du Labrador, elle pourrait de nouveau être confronté au Gulf Stream.',
        'addLayers': [groenland],
    },
    {
        'category': 'Introduction',
        'slug': 'introduction',
        'view': [[57, -12], 4],
        'text': '##La dérive Nord Atlantique\nAu delà de l’influence du vent qui créé les courants de surface, un nouveau mécanisme, la pompe thermohaline, attire notre goutte d’eau vers le Nord de l’Europe et essaye petit à petit de l’entraîner vers les abysses. Nous étudierons ce phénomène un peu plus tard. En suivant cette voie, notre goutte d’eau a de fortes chances de voguer vers la mer Baltique ou de longer les côtes Norvégiennes pour continuer sa course dans l’océan Arctique. ',
        'addLayers': [derive_nord_atlantique_1, derive_nord_atlantique_2],
    },
    {
        'category': 'Les courants',
        'slug': 'courants',
        'text': '##Gulf Stream et courants Nord Atlantiques\n*Le système climatique est une machine à convertir et à distribuer l’énergie que la Terre reçoit du soleil. L’énergie solaire est transportée par deux fluides : l’atmosphère et l’océan. Ces deux entités sont en contact permanent et ne cessent d’échanger de l’énergie. C’est le couple qu’ils forment qui gère le climat de notre planète.*',
        'destroyLeafletMap': true,
        'addMapboxGlMap': true,
    },
    {
        'category': 'Les courants',
        'slug': 'courants',
        'text': '##Gulf Stream et courants Nord Atlantiques\nCette carte représente la vitesse des courants de surface, de janvier à juillet 2016. Malgré de nombreux petits courants, souvent tourbillonnaires, il est possible de retrouver la plupart des courants évoqués durant le voyage de notre goutte d’eau. Vous pouvez si vous le souhaitez les afficher à l’aide des cases à cocher.'
    },
    {
        // 'view_mb': [-70,20],
        // 'zoom_mb': 5,
        'category': 'Les courants',
        'slug': 'courants',
        'text': '##Gulf Stream et courants Nord Atlantiques\n\nLe GS se démarque clairement des courants Nord Atlantique. Sa vitesse reste inégalée. Jusqu’au Cap Hatteras, canalisé par la pente continentale, il est très linéaire et se comporte comme un jet puissant.\n\n Lorsqu’il prend le large, se créent des méandres de plus en plus sinueux. De grands tourbillons se détachent de part et d’autre du fleuve.\n\n Après les Grands Bancs de Terre Neuve, le GS perd ses caractéristiques et prend de nombreuses directions. Ses extensions sont visuellement plus difficiles à suivre car sa puissance a été répartie dans de nombreux courants.',
    },
    {
        // 'view_mb': [-70,20],
        // 'zoom_mb': 5,
        'category': 'Les courants',
        'slug': 'courants',
        'text': '##Gulf Stream et courants Nord Atlantiques\n\nNous venons d’observer ce qu’il se passe en surface mais qu’en est il en profondeur ? En utilisant l’ascenseur sur le côté gauche de la carte, vous pouvez étudier le comportement des courants à différentes profondeur. \n\n Positionnez vous par exemple à 1684m. Vous remarquerez qu’un courant de fond, opposé au Gulf Stream longe la côte américaine. (on pourrait supposer qu’il s’agit d’un courant de retour, affilié à la circulation thermohaline). \n\n Pour revenir au Gulf Stream, vous vous rendrez vite compte qu’il n’est pas qu’un courant de surface. A 1000m, il a encore une grande influence. \n\n Il se distingue des autres courants de bords ouest par son débit record qui atteint les millions de mètres cube à la seconde. Pour comparaison, l’Amazone n’a qu’un débit de 300 S000 mètre cube par seconde à son maximum. Le débit de tous les fleuves et rivières de la planète atteint 1 Sv (unité de mesure de débit). Le GS qui a un débit de 30 Sv au départ s’approche des 140 Sv en fin de course.',
    },
    {
        'category': 'Les courants',
        'slug': 'courants',
        'text': '##Gulf Stream et courants Nord Atlantiques\n\nPlusieurs facteurs viennent expliquer ce flux mondialement exceptionnel :\n\n - contrairement à ses homologues, le Gulf Stream bénéficie d’une double alimentation : le courant de Guyane et le courant des Antilles.\n\n - depuis 15 millions d’années l’Isthme de Panama est fermé, empêchant le courant de Guyane de se déverser dans le Pacifique. Le Golfe du Mexique représente un cul de sac pour le courant de Guyane qui n’a qu’une sortie possible: le détroit de Floride. Cet apport est renforcé par le courant des Antilles qui est emporté dans le courant de Floride.\n\n - la circulation thermohaline crée un appel d’eau qui n’a pas son équivalent ailleurs. Nous étudierons ce phénomène un peu plus tard.'
    },
    {
        'category': 'Les courants',
        'slug': 'courants',
        'text': '##Gulf Stream et niveau de l’Océan\n\nL’apport en eau est tellement conséquent dans le Gulf Stream que le niveau de la mer est prêt de 50cm au dessus du niveau 0.'
    },
    {
        'category': 'Les vents',
        'slug': 'vents',
        'text': '##L’influence du vent\n\n*Un principe simple de thermodynamique nous enseigne qu’entre deux corps en contact, c’est le corps chaud qui cède son énergie au corps froid jusqu’à l’équilibre. Le couple océan/atmosphère transporte et distribue l’énergie du soleil de la source chaude à la source froide. Par évaporation, les zones océaniques équatoriales (source chaude) alimentent l’atmosphère en chaleur, créant des vents qui se dirigent vers les régions polaires (source froide).*'
    },
    {
        'category': 'Les températures',
        'slug': 'temperatures',
        'text': '##Température\n\n*L’océan fournit une fraction de son énergie à l’atmosphère et distribue directement par les courants l’autre partie à l’échelle de la planète. On estime que les transferts de chaleur des régions équatoriales vers les pôles se font à égalité par l’atmosphère et l’océan.*'
    },
    {
        'category': 'Les températures',
        'slug': 'temperatures',
        'text': '##Température\n\nLe Gulf Stream a une influence considérable sur le climat de régions situées à des milliers de kilomètres des Grands Bancs de Terre Neuve.\n\nIl emporte avec lui des eaux tropicales chaudes.\n\nSes extensions qui se dirigent vers le nord, emportent ces eaux vers des latitudes beaucoup plus hautes. Par exemple, la glace qui n’arrive pas à se former au nord de la Norvège bénéficie directement d’eaux chaudes apportées par la dérive Nord Atlantique, extension du Gulf Stream.\n\nMais l’Europe, n’est pas l’unique bénéficiaire de cette source de chaleur. C’est tout l’Atlantique Nord qui profite de cet apport.\n\nContrairement à ce qui a été longtemps mis en avant, le Gulf Stream n’est pas la chaudière centrale de l’Europe. Il ne peut pas expliquer la différence moyenne de 15°C qu’il y a entre Montréal et Bordeaux qui sont sur la même latitude.',
        'style_mb': video_temp
    },
    {
        'category': 'Les températures',
        'slug': 'temperatures',
        'text': '##Température\n\nContrairement à l’atmosphère qui utilise très rapidement l’énergie qu’on lui met à disposition, l’océan a une grande mémoire. L’été, le rayonnement solaire intense échauffe les couches de surface. Il y a création d’un thermocline qui stratifie les eaux océaniques. L’océan stocke alors l’énergie thermique issue du rayonnement solaire d’été dans ses couches profondes. Sur le graphique de gauche vous pouvez ...'
    },
    {
        'category': 'Les températures',
        'slug': 'temperatures',
        'text': '##Température\n\nEn hivers le rayonnement solaire est beaucoup plus faible et les vents d’ouest se renforcent. Il y a rupture du thermocline qui remet à disposition des couches de surface le stock d’été. L’océan transmet cette énergie à l’atmosphère. Les vents d’Ouest la récupèrent et l’emportent en direction de l’Europe. L’ouest de ce continent sera le seul bénéficiaire de la mémoire calorifique estivale de l’océan Atlantique.\n\nCe phénomène semble aujourd’hui expliquer en grande partie la différence de climat entre les côtes est et ouest de l’Atlantique. Sur l’année on note une différence moyenne de 15°C.C’est ce qui explique un climat maritime (tempéré) en Europe de l’ouest et aux mêmes latitudes sur le sol américain un climat continental (froid). Le Saint Laurent gèle l’hivers, battu par les vents glacials qui suivent la dépression d’Islande.'
    },    
    {
        'category': 'Les températures',
        'slug': 'temperatures',
        'text': '##Température\n\nIl est encore aujourd’hui très difficile d’étudier l’influence exacte des différents facteurs qui jouent sur notre climat. Ils ont chacun leurs propre caractéristiques qui sont difficilement comparables. Il est aussi impossible de les isoler pour les étudier indépendamment. Les scientifiques créent des modèles toujours plus complexes pour simuler les phénomènes météorologiques et climatiques. Ils estiment aujourd’hui que sans le GS, notre climat se rafraîchirait de 4 ou 5°C.'
    }, 
    {
        'category': 'La salinité',
        'slug': 'salinite',
        'text': '##Salinité\n\nComme pour la température de surface, le Gulf Stream représente une frontière entre les eaux fortement salées qu’il emporte et les eaux de la mer du Labrador faiblement salées. Cette différence s’explique assez simplement. Au niveau de l’équateur et des tropiques, l’évaporation est très forte. Cette eau s’échappe dans l’atmosphère, renforçant les vents se dirigeants vers le nord (dans la direction imposée par l’anticyclone des Açores). Le sel, qui ne peux pas s’évaporer s’accumule dans l’océan. C’est pourquoi les eaux tropicales sont très salées.\n\nLe Gulf Stream emporte donc des eaux chaudes et salées en direction des hautes latitudes. Cet apport est particulièrement visible au niveau de la dérive Nord Atlantique qui a une influence jusqu’au nord de la Norvège.',
        'style_mb': video_salinity
    }, 
    {
        'category': 'La salinité',
        'slug': 'salinite',
        'text': '##Salinité\n\nEn arrivant aux hautes latitudes, la température chute. Les eaux emportées par les extensions du Gulf Stream deviennent froides et salées. Plus une eau est froide, plus elle est dense. Plus elle est salée, plus elle est dense. Les eaux issues du Gulf Stream sont plus salées que les eaux qui les entourent. Ce taux de sel est renforcé l’hiver par la création de glace. Elles finissent par devenir trop dense pour se maintenir à la surface et plongent jusqu’à des profondeurs supérieures au kilomètre. Elles s’écoulent lentement dans un courant de fond en direction de l’équateur. Au niveau des Tropiques, le courant se réchauffe et remonte à la surface jusqu’à leur prochain refroidissement. '
    },
        {
        'category': 'La salinité',
        'slug': 'salinite',
        'text': '##test\n impossibilité de charger leaflet + les couches',
        'destroyMapboxGlMap': true,
        'createLeafletMap': true
    },
    {
        'category': 'La salinité',
        'slug': 'salinite',
        'view': [[0,30], 2],
        'text': '##La circulation thermohaline\n\nSur cette carte vous pouvez suivre cette circulation à l’échelle planétaire. Elle est communément appelée le « tapis roulant ». On estime qu’il faudrait entre 1000 et 2000 ans pour qu’une goutte fasse un tour de ce circuit. Ce phénomène de plongée est particulièrement remarquable au large de la Norvège et au Nord Est des Grands Bancs de Terre Neuve. Le Gulf Stream, à travers les eaux salées qu’il dirige vers les hautes latitudes est un moteur essentiel de ce tapis roulant qui serait certainement bien différent sans lui.',
        'addLayers': [thermohaline_cold, thermohaline_hot]
    },
];

init();

// var getIndexIfObjWithOwnAttr = function(array, attr, value) {
//     for(var i = 0; i < array.length; i++) {
//         if(array[i].hasOwnProperty(attr) && array[i][attr] === value) {
//             return i;
//         }
//     }
//     return -1;
// }

function init() {
    console.log('init nav');

    createLeafletMap();

    function locationHashChanged(hash) {
        console.log(hash)
    }

    window.onhashchange = locationHashChanged;

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
var lastCategory = null;

for (var i = 0; i <= story.length; i++) {
    var className = 'circle'
    if (story[i].category !== lastCategory) {
        className += ' circle-cat ' + story[i].slug
    }
    var progressItem = '<a href="#' + i + '" id="progress-item-' + i + '" class="' + className + '"><span class="label">' + i + '</span><span class="title">Address</span></a>'
    $('.progress').append(progressItem);

    lastCategory = story[i].category;
}


function changeContent(i) {
    var state = story[i];
    console.log(state);

    $('.progress .circle').removeClass('active');
    $('.progress .circle#progress-item-' + i).addClass('active');


    history.pushState({id: i, slug: state.slug}, state.slug, '#' + i);

    if (state.view) {
        console.log(state.view)
        Lmap.setView(state.view[0], state.view[1]);
    }
    if (state.view_mb) {
        Mbmap.setCenter(state.view_mb);
    }
    if (state.style_mb) {
        Mbmap.setStyle(state.style_mb);
    }
    if (state.zoom_mb) {
        Mbmap.setZoom(state.zoom_mb);
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
    if (state.destroyMapboxGlMap) {
        Mbmap.remove();
    }
}
