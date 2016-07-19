var index = 0;

var story = [
    {
        'category': 'Introduction',
        'slug': 'introduction',
        'text': '#**Le Gulf Stream**\n\nDepuis sa découverte, durant le deuxième voyage de Christophe Colomb en 1493, le Gulf Stream a de nombreuses fois fait parlé de lui. Benjamin Franklin l’a transformé en voie rapide pour le retour en Europe. Une légende l’a longtemps elevé au statut de chaudière de l’Europe, miraculeux responsable de la différence entre le climat continental glacial de la côte est américaine et le climat océanique tempéré d’Europe de l’ouest. Récemment, devenu star hollywodienne, il a fait son apparition dans plusieurs films catastrophe. Porté par cette vague alarmiste, la presse a maladroitement prévu son arrêt et le refroidissement drastique de l’Europe.\n\nMais qu’en est-il réellement? A travers un ensemble de cartes, nous vous proposons de partir à la découverte de ce véritable fleuve océanique.',
        // ####*«Le Gulf Stream est une rivière au milieu de l’océan, dont le niveau ne change ni dans les plus fortes sécheresses ni dans les plus fortes pluies. Il est limité par des eaux froides, tandis que son courant est chaud. Il prend sa source dans le golfe du Mexique et se jette dans l’océan Arctique. Il n’existe pas sur la Terre un cours d’eau plus majestueux : sa vitesse est plus rapide que celle du Mississippi ou des Amazones, et son débit 1000 fois plus conséquent.» Maury «The Physical Geography of the Sea» 1855.*
        // 'destroyMapboxGlMap': true,
        'createLeafletMap': {
            // 'destroyMapbox': true,
            'layers': [wh],
            'view': [[-60, 0], 3],
            'setMaxBounds': [[-100, -180],[35, 180]]
        }
    },
    {
        'category': 'Introduction',
        'slug': 'introduction',
        'setMaxBounds': [[0, -100],[85, 20]],
        'view': [[24, -80.72], 5],
        'text': '## Naissance du Gulf Stream\n Pour suivre le Gulf Stream, focalisons nous sur le trajet d’une goutte d’eau qui se trouve dans le Golfe du Mexique. Elle pourrait venir d’un cumulonimbus, de l’Atlantique, du lac Itasca source du Mississipi, ou de bien d’autres horizons. Mais sa provenance n’a que peu d’importance. Si elle ne s’évapore pas, elle se dirigera inévitablement vers le Gulf Stream.',
        'addLayers': [neTiles],
        'removeLayers': [wh] 
    },
    {
        'category': 'Introduction',
        'slug': 'introduction',
        'view': [[10.13, -58.59], 4],
        'text': '## Naissance du Gulf Stream\n Le courant de Guyane, qui longe les côtes d’Amérique du Sud, se retrouve dans un cul-de-sac: l’Isthme du Panama. Il est naturellement emporté vers le nord et à l’est par la circulation anticyclonique des Açores (sens des aiguilles d’une montre). Il dirige donc notre goutte d’eau vers la seule porte de sortie possible : le détroit de Floride. L’étroitesse de ce passage situé entre Cuba et la Floride génère un trop plein. C’est cet excédent qui donne naissance au Gulf Stream.',
        'addLayers': [courant_guyane, detroit_de_floride, isthme_panama]
    },
    {
        'category': 'Introduction',
        'slug': 'introduction',
        'view': [[34.99, -74.97], 5],
        'text': '## Le Gulf Stream continental\n Ca y est, notre goutte d’eau qui a eu du mal à se frayer un passage entre ses sœurs est entraînée à pleine vitesse dans le Gulf Stream. Elle vogue maintenant à la vitesse record de 2 m/s dans cette partie appelée courant de Floride. Ce véritable fleuve côtier reste collé au continent, canalisé par la pente continentale jusqu’au Cap Hatteras',
        'addLayers': [courant_floride, cap_hatteras, pente_continentale],
        'removeLayers': [detroit_de_floride, isthme_panama]
    },
    {
        'category': 'Introduction',
        'slug': 'introduction',
        'view': [[43.19, -62.3], 5],
        'text': '##Le Gulf Stream océanique\nEn quittant le Cap Hatteras, notre goutte d’eau s’embarque vers le large en suivant le fleuve océanique. Elle se confronte maintenant à un univers beaucoup plus chaotique. La pente continentale n’est plus là pour canaliser son mouvement qui devient tourbillonnaire. Certains petits courants sortent du flux qui file maintenant plein est, en direction de l’Europe.',
        'addLayers': [gulfstream],
        'removeLayers': [pente_continentale]
    },
    {
        'category': 'Introduction',
        'slug': 'introduction',
        'view': [[43.19, -50.3], 5],
        'text': '##Les Grands Bancs de Terre Neuve\nEn arrivant aux Grands Bancs de Terre Neuve, notre goutte d’eau observe la mort du Gulf Stream. C’est le chaos du large qui en a finalement eu raison. Le fleuve océanique a perdu ses caractéristiques qui le rendait si particulier. Scientifiquement parlant, sa course s’achève vers la longitude 40°N 50°W, mais le mouvent des masses d’eau ne s’arrête pas pour autant.',
        'addLayers': [grands_bancs_de_terre_neuve],
        'removeLayers': [cap_hatteras]
    },
    {
        'category': 'Introduction',
        'slug': 'introduction',
        'view': [[44.72, -37.38], 5],
        'text': '##Le courant Nord Atlantique\nA bout de souffle, le Gulf Stream passe le relais au courant Nord Atlantique qui entraîne à son tour notre goutte d’eau. Plus libre, elle n’est plus canalisée par le fleuve océanique et va rapidement se retrouver confrontée à des chemins multiples.',
        'addLayers': [courant_nord_atlantique],
        'removeLayers': [grands_bancs_de_terre_neuve]
    },
    {
        'category': 'Introduction',
        'slug': 'introduction',
        'view': [[31.92, -58.59], 5],
        'text': '##Le courant des Açores\nLe courant des Açores est le premier candidat qui essaye d’emporter notre goutte d’eau et une partie de ses sœurs. Il est créé et alimenté par l’anticyclone des Açores et rejoint le courant des Antilles. En empruntant cette voie, c’est un retour à la case départ pour notre goutte d’eau qui repart pour un tour de Gulf Stream.',
        'addLayers': [courant_acores],
        'removeLayers': [pente_continentale]
    },
    {
        'category': 'Introduction',
        'slug': 'introduction',
        'view': [[29.53, -45], 4],
        'text': '##Le courant des Canaries\nAutre possibilité, notre goutte d’eau peut être entraînée par le courant des Canaries. A l’image du courant des Açores, l’anticyclone des Açores est le moteur du courant des Canaries. Il finit sa course dans le courant de Guyane. C’est donc un autre retour à la case départ. \n\nLe courant de Guinée, seconde extension du courant des Canaries, sort de l’influence de l’anticyclone des Açores et emporte notre goutte d’eau le long des côtes Africaines vers l’équateur.',
        'addLayers': [courant_canaries],
    },
    {
        'category': 'Introduction',
        'slug': 'introduction',
        'view': [[56, -34.91], 4],
        'text': '##Cap sur le Groenland\nNotre goutte d’eau ne tombe pas fatalement sous l’emprise de l’anticyclone des Açores. Elle peut aussi être attirée par sa sœur nordique, la dépression d’Islande, qui tourne dans le sens inverse des aiguilles d’une montre. Encore une fois, de nombreux choix s’offrent à elle. Elle peut mettre le cap vers l’Islande et le Groenland. En suivant ce chemin et en passant par la mer du Labrador, elle pourrait de nouveau être confronté au Gulf Stream.',
        'addLayers': [groenland],
    },
    {
        'category': 'Introduction',
        'slug': 'introduction',
        'view': [[57, -12], 4],
        'text': '##La dérive Nord Atlantique\nAu delà de l’influence du vent qui créé les courants de surface, un nouveau mécanisme, la pompe thermohaline, attire notre goutte d’eau vers le Nord de l’Europe et essaye petit à petit de l’entraîner vers les abysses. Nous étudierons ce phénomène un peu plus tard. En suivant cette voie, notre goutte d’eau a de fortes chances de voguer vers la mer Baltique, ou de longer les côtes Norvégiennes pour continuer sa course dans l’océan Arctique. ',
        'addLayers': [derive_nord_atlantique_1, derive_nord_atlantique_2],
    },
    {
        'category': 'Les courants',
        'slug': 'courants',
        'setMaxBounds': [[-100, -180],[73, 180]],
        'view': [[-65, 25], 3],
        'text': '##Gulf Stream et courants Nord Atlantiques\n*Le système climatique est une machine à convertir et à distribuer l’énergie que la Terre reçoit du soleil. L’énergie solaire est transportée par deux fluides : l’atmosphère et l’océan. Ces deux entités sont en contact permanent et ne cessent d’échanger de l’énergie. C’est le couple qu’ils forment qui gère le climat de notre planète.*',
        'addLayers': [BFranklin],
        'removeLayers': [derive_nord_atlantique_1, derive_nord_atlantique_2, groenland, courant_canaries, courant_acores, courant_nord_atlantique, gulfstream, courant_guyane, courant_floride, neTiles]
        
    },
    {
        // 'view_mb': [-70,35],
        // 'zoom_mb': 3,
        'category': 'Les courants',
        'slug': 'courants',
        'text': '##Gulf Stream et courants Nord Atlantiques\nCette carte représente la vitesse des courants de surface, de janvier à juillet 2016. Malgré de nombreux petits courants, souvent tourbillonnaires, il est possible de retrouver la plupart des courants évoqués durant le voyage de notre goutte d’eau. Vous pouvez si vous le souhaitez les afficher à l’aide des cases à cocher.',
        'destroyLeafletMap': true,
        'addMapboxGlMap': true,
        'showLegend': '#current-legend'
    },
    {
        'category': 'Les courants',
        'slug': 'courants',
        'text': '##Gulf Stream et courants Nord Atlantiques\n\nLe Gulf Stream se démarque clairement des courants Nord Atlantique. Sa vitesse et son débit restent inégalés. Jusqu’au Cap Hatteras, canalisé par la pente continentale, il est très linéaire et se comporte comme un jet puissant.\n\n Lorsqu’il prend le large, se créent des méandres de plus en plus sinueux. De grands tourbillons se détachent de part et d’autre du fleuve.\n\n Après les Grands Bancs de Terre Neuve, le Gulf Stream perd ses caractéristiques et prend de nombreuses directions. Ses extensions sont visuellement plus difficiles à suivre car sa puissance a été répartie dans de nombreux courants.',
    },
    {
        'category': 'Les courants',
        'slug': 'courants',
        'createLeafletMap': {
            // ne marche pas 'setMaxBounds': [[0, -100],[85, 20]],
            'layers': [neTiles, depthLayer],
            'view': [[24, -80.72], 5],
        },
        'displayDepthSlider': true,
        'destroyMapboxGlMap': true,
        // 'view': [[30, -70], 5],
        'text': '##Gulf Stream et courants Nord Atlantiques\n\nNous venons d’observer ce qu’il se passe en surface mais comment les courants se comportent ils en profondeurs ? En utilisant l’ascenseur à gauche de la carte, vous pouvez étudier leur comportement à différentes profondeurs. \n\n Positionnez vous par exemple à 1684m. Vous remarquerez qu’un courant de fond, opposé au Gulf Stream longe la côte américaine. La circulation des courants de profondeur est bien différente de celle de surface, influencée par l’action mécanique du vent. \n\n Pour revenir au Gulf Stream, vous vous rendrez vite compte qu’il n’est pas qu’un courant de surface. A 1000m, il a encore une grande influence. \n\n Il se distingue des autres courants de bords ouest par son débit record qui atteint les millions de mètres cube à la seconde. Pour comparaison, l’Amazone n’a qu’un débit de 300 000 mètres cube par seconde à son maximum. Le débit de tous les fleuves et rivières de la planète atteint 1 Sv (unité de mesure de débit). Le GS qui a un débit de 30 Sv au départ s’approche des 140 Sv en fin de course.',
        'hideLegend': '#current-legend'
    },
    {
        'category': 'Les courants',
        'slug': 'courants',
        'text': '##Gulf Stream et courants Nord Atlantiques\n\nPlusieurs facteurs viennent expliquer ce flux mondialement exceptionnel :\n\n - contrairement à ses homologues, le Gulf Stream bénéficie d’une double alimentation : le courant de Guyane et le courant des Antilles.\n\n - depuis 15 millions d’années l’Isthme de Panama est fermé, empêchant le courant de Guyane de se déverser dans le Pacifique. Le Golfe du Mexique représente un cul de sac pour le courant de Guyane qui n’a qu’une sortie possible: le détroit de Floride. Cet apport est renforcé par le courant des Antilles qui est emporté dans le courant de Floride.\n\n - la circulation thermohaline crée un appel d’eau qui n’a pas son équivalent ailleurs. Nous étudierons ce phénomène un peu plus tard.',
        'destroyLeafletMap': true,
        'addMapboxGlMap': true,
        'hideDepthSlider': true,
        'removeLayers': [neTiles],
        'showLegend': '#current-legend'
    },
    {
        'destroyMapboxGlMap': true,
        'createLeafletMap': {
            'layers': [neTiles, ssh],
            'view': [[40, -40], 4],
            'setMaxBounds': [[0, -100],[85, 20]]
        },
        'category': 'Les courants',
        'slug': 'courants',
        'text': '##Gulf Stream et niveau de l’Océan\n\nL’apport en eau est tellement conséquent dans le Gulf Stream que le niveau de la mer est prêt de 50cm au dessus du niveau 0.',
        'hideLegend': '#current-legend',
        'showLegend': '#ssh-legend'
    },
    {
        'category': 'Les températures',
        'slug': 'temperatures',
        'text': '##Température\n\n*Les courants et les vents sont le moteur de la machine qui convertit et distribue l’énergie que la Terre reçoit du soleil. L’océan fournit une fraction de son énergie à l’atmosphère et distribue directement par les courants l’autre partie à l’échelle de la planète. On estime que les transferts de chaleur des régions équatoriales vers les pôles se font à égalité par l’atmosphère et l’océan.*',
        'destroyLeafletMap': true,
        'addMapboxGlMap': true,
        'removeLayers': [neTiles],
        'style_mb': video_temp,
        'showLegend': '#temperature-legend',
        'hideLegend': '#ssh-legend'
        
    },
    {
        'category': 'Les températures',
        'slug': 'temperatures',
        'text': '##Température\n\nLe Gulf Stream a une influence considérable sur le climat de régions situées à des milliers de kilomètres des Grands Bancs de Terre Neuve.\n\nIl emporte avec lui des eaux tropicales chaudes.\n\nSes extensions qui se dirigent vers le nord emportent ces eaux vers des latitudes beaucoup plus hautes. Par exemple, la glace qui n’arrive pas à se former au nord de la Norvège bénéficie directement d’eaux chaudes apportées par la dérive Nord Atlantique, extension du Gulf Stream.\n\nMais l’Europe, n’est pas l’unique bénéficiaire de cette source de chaleur. C’est tout l’Atlantique Nord qui profite de cet apport.\n\nContrairement à ce qui a été longtemps mis en avant, le Gulf Stream n’est pas la chaudière centrale de l’Europe. Il ne peut pas expliquer la différence moyenne de 15°C qu’il y a entre Montréal et Bordeaux qui sont sur la même latitude.'
    },
    {
        'category': 'Les températures',
        'slug': 'temperatures',
        'text': '##Température\n\nContrairement à l’atmosphère qui utilise très rapidement l’énergie qu’on lui met à disposition, l’océan a une grande mémoire. L’été, le rayonnement solaire intense échauffe les couches de surface. Il y a création d’un thermocline qui stratifie les eaux océaniques. L’océan stocke alors l’énergie thermique issue du rayonnement solaire d’été dans ses couches profondes.\n\nSur le graphique de gauche vous pouvez observer la thermocline saisonnière. Il s’agit de la zone de chute de température entre les couches de surface et les couches profondes. Si cette thermocline est importante, c’est à dire comprend une grande gamme de températures, les eaux de surface et les eaux profondes sont bien stratifiées et ne se mélangent pas.',
        'displayThermocline': true,
    },
    {
        'category': 'Les températures',
        'slug': 'temperatures',
        'text': '##Température\n\nEn hivers le rayonnement solaire est beaucoup plus faible et les vents d’ouest se renforcent. Il y a rupture du thermocline qui remet à disposition des couches de surface le stock d’été. L’océan transmet cette énergie à l’atmosphère. Les vents d’ouest la récupèrent et l’emportent en direction de l’Europe. L’ouest de ce continent sera le seul bénéficiaire de la mémoire calorifique estivale de l’océan Atlantique.\n\nCe phénomène semble aujourd’hui expliquer en grande partie la différence de climat entre les côtes est et ouest de l’Atlantique. Sur l’année on note une différence moyenne de 15°C. C’est ce qui explique un climat maritime (tempéré) en Europe de l’ouest et aux mêmes latitudes sur le sol américain un climat continental (froid).'
    },  
    {
        'category': 'Les vents',
        'slug': 'vents',
        'text': '##L’influence du vent\n\n*Un principe simple de thermodynamique nous enseigne qu’entre deux corps en contact, c’est le corps chaud qui cède son énergie au corps froid jusqu’à l’équilibre. Le couple océan/atmosphère transporte et distribue l’énergie du soleil de la source chaude à la source froide. Par évaporation, les zones océaniques équatoriales (source chaude) alimentent l’atmosphère en chaleur, créant des vents qui se dirigent vers les régions polaires (source froide).*',
        'style_mb': video_wind,
        'hideThermocline': true,
        'showLegend': '#wind-legend',
        'hideLegend': '#temperature-legend'
    },  
    {
        'category': 'Les vents',
        'slug': 'vents',
        'text': '##Les vents\n\nL’équateur est la ligne imaginaire qui représente le plus grand diamètre de la Terre. L’air qui en provient et qui se dirige vers les pôles, se retrouve sur des diamètres de plus en plus petits.\n\nConséquence, sa vitesse de rotation augmente. Aux alentours des latitudes 30°, sa vitesse est tellement grande qu’au lieu de continuer vers le nord. Il se retrouve entraîné dans un couloir de vent orienté est-ouest : le courant jet.\n\nLes pilotes de ligne le connaissent bien. Ils s’en servent dans le sens New York-Paris et le contournent dans la direction inverse.\n\nCe courant jet emporte l’énergie solaire emmaganisée l’été par le soleil vers l’Europe.' 
    }, 
    {
        'category': 'La salinité',
        'slug': 'salinite',
        'text': '##Salinité\n\nComme pour la température de surface, le Gulf Stream représente une frontière entre les eaux fortement salées qu’il emporte et les eaux de la mer du Labrador faiblement salées. Cette différence s’explique assez simplement. Au niveau de l’équateur et des tropiques, l’évaporation est très forte. Cette eau s’échappe dans l’atmosphère, renforçant les vents se dirigeants vers le nord (dans la direction imposée par l’anticyclone des Açores). Le sel, qui ne peux pas s’évaporer s’accumule dans l’océan. C’est pourquoi les eaux tropicales sont très salées.\n\nLe Gulf Stream emporte donc des eaux chaudes et salées en direction des hautes latitudes. Cet apport est particulièrement visible au niveau de la dérive Nord Atlantique qui a une influence jusqu’au nord de la Norvège.',
        'style_mb': video_salinity,
        'showLegend': '#salinity-legend',
        'hideLegend': '#wind-legend',
    }, 
    {
        'category': 'La salinité',
        'slug': 'salinite',
        'text': '##Salinité\n\nEn arrivant aux hautes latitudes, la température chute. Les eaux emportées par les extensions du Gulf Stream deviennent froides et salées.\n\n Plus une eau est froide, plus elle est dense. Plus elle est salée, plus elle est dense. Les eaux issues du Gulf Stream sont plus salées que les eaux qui les entourent. Ce taux de sel est renforcé l’hiver par la création de glace. En se refroidissant durant leur voyage vers les hautes latitudes, elles finissent par devenir trop denses pour se maintenir à la surface et plongent jusqu’à des profondeurs supérieures au kilomètre. Elles s’écoulent lentement dans un courant de fond en direction de l’équateur. Le courant de retour que nous avions observé à 1684m peut être affilié à cette circulation. Au niveau des Tropiques, le courant se réchauffe et remonte à la surface jusqu’à leur prochain refroidissement.',
        'hideLegend': '#salinity-legend'
    },
    {
        'destroyMapboxGlMap': true,
        'createLeafletMap': {
            'layers': [neTiles, thermohaline_cold, thermohaline_hot],
            'view': [[0, 30], 2],
        },
        'category': 'La salinité',
        'slug': 'salinite',
        'text': '##La circulation thermohaline\n\nSur cette carte vous pouvez suivre cette circulation à l’échelle planétaire. Elle est communément appelée le « tapis roulant ».\n\n On estime qu’il faudrait entre 1000 et 2000 ans pour qu’une goutte fasse un tour de ce circuit. Ce phénomène de plongée est particulièrement remarquable au large de la Norvège et au Nord Est des Grands Bancs de Terre Neuve.\n\n Le Gulf Stream, à travers les eaux salées qu’il dirige vers les hautes latitudes est un moteur essentiel de ce tapis roulant. Cette circulation planétaire serait bien différent sans lui.'
    },
    {
        'category': 'Conclusion',
        'slug': 'conclusion',
        'view': [[-65, 25], 3],
        'setMaxBounds': [[-100, -180],[73, 180]],
    //     'text': '##Conclusion\n\nLes scientifiques estiment aujourd’hui que sans le GS, notre climat se rafraîchirait de 4 ou 5°C. Mais cette information reste très hypothétique. Il est encore aujourd’hui très difficile d’étudier l’influence exacte des différents facteurs qui jouent sur notre climat. Ils dépendent de la géométrie de la Terre, de sa rotation, de l’attraction de la Lune et du Soleil et de bien d’autres facteurs. Ils ont chacun leurs propres caractéristiques qui sont difficilement comparables. De plus, il est impossible de les isoler pour les étudier indépendamment. Les scientifiques créent des modèles simplifiant la réalité pour simuler les phénomènes météorologiques et climatiques. Mais la simplification de phénomènes aussi complexes font de la climatologie un domaine passionnant ou de nombreuses découvertes sont encore à faire.',
        'addLayers': [BFranklin],
        'removeLayers': [neTiles, thermohaline_cold, thermohaline_hot]
    }
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

for (var i = 0; i < story.length; i++) {
    var className = 'circle'
    if (story[i].category !== lastCategory) {
        className += ' circle-cat ' + story[i].slug
    }
    var progressItem = '<a href="#' + i + '" id="progress-item-' + i + '" class="' + className + '"><span class="label">' + i + '</span><span class="title"></span></a>'
    $('.progress').append(progressItem);

    lastCategory = story[i].category;
}

changeContent(0);

$('.circle-cat').on('click', function(e) {
    var indexPage = e.target.innerText;
    index = parseInt(indexPage);
    changeContent(indexPage);
});

function changeContent(i) {
    var state = story[i];
    console.log(i);
    console.log(state);

    $('.progress .circle').removeClass('active');
    $('.progress .circle').removeClass('passed');
    $('.progress .circle#progress-item-' + i).addClass('active');

    for (var j = 0; j < i; j++) {
        $('.progress .circle#progress-item-' + j).addClass('passed');
    }


    history.pushState({id: i, slug: state.slug}, state.slug, '#' + i);

    if (state.setMaxBounds) {
        Lmap.setMaxBounds(state.setMaxBounds);
    }
    if (state.view) {
        Lmap.setView(state.view[0], state.view[1]);
    }
    if (state.view_mb) {
        Mbmap.setCenter(state.view_mb);
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
        createLeafletMap(state.createLeafletMap);
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
    if (state.style_mb) {
        Mbmap.setStyle(state.style_mb);
    }    
    if (state.displayDepthSlider) {
        $('#depthSlider').css('display', 'block');
        var slider = $('#depthSliderInput').slider({
            value: 0,
            ticks: [0, 1, 2, 3, 4, 5, 6],
            tooltip: 'hide',
            ticks_labels: ['0 m', '-109 m', '-266 m', '-541 m', '-1062 m', '-1684 m', '-3220 m'],
            step: 1
        });
    }
    if (state.hideDepthSlider) {
        $('#depthSlider').css('display', 'none');
    }
    if (state.displayThermocline) {
        $('.left-panel').removeClass('col-md-9');
        $('.left-panel').addClass('col-md-6');
        $('.right-panel').removeClass('col-md-3');
        $('.right-panel').addClass('col-md-6');
        createGraphThermocline();
    }
    if (state.hideThermocline) {
        $('.left-panel').removeClass('col-md-6');
        $('.left-panel').addClass('col-md-9');
        $('.right-panel').removeClass('col-md-6');
        $('.right-panel').addClass('col-md-3');
        removeGraphThermocline();
    }
    if (state.showLegend) {
        $(state.showLegend).css('display', 'block');
    }
    if (state.hideLegend) {
        $(state.hideLegend).css('display', 'none');
    }
}

var chartThermocline;

function createGraphThermocline() {
    chartThermocline = $('#container').highcharts({
        chart: {
            type: 'line',
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
                    return this.value + 'm';
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
                    return this.value + '°C';
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
            }
        },
        series: [
        {
        name: 'Août 2015',
        data:[[-0.494  , 24.65], [-1.541  , 24.65], [-2.646  , 24.65], [-3.819  , 24.65], [-5.078  , 24.65], [-6.441  , 24.65], [-7.930  , 24.65], [-9.573  , 24.65], [-11.405 , 24.65], [-13.467 , 24.55], [-15.810 , 24.35], [-18.496 , 23.95], [-21.599 , 23.35], [-25.211 , 22.65], [-29.445 , 21.85], [-34.434 , 21.05], [-40.344 , 20.25], [-47.374 , 19.45], [-55.764 , 18.75], [-65.807 , 18.25], [-77.854 , 17.75], [-92.326 , 17.35], [-109.729, 16.95], [-130.666, 16.55], [-155.851, 16.25], [-186.126, 15.85], [-222.475, 15.45], [-266.040, 15.05], [-318.127, 14.65], [-380.213, 14.15], [-453.938, 13.75], [-541.089, 13.35]]
        },
        {
        name: 'Octobre 2015',
        data: [[-0.494  , 22.95], [-1.541  , 22.95], [-2.646  , 22.85], [-3.819  , 22.85], [-5.078  , 22.85], [-6.441  , 22.85], [-7.930  , 22.85], [-9.573  , 22.85], [-11.405 , 22.85], [-13.467 , 22.85], [-15.810 , 22.75], [-18.496 , 22.75], [-21.599 , 22.75], [-25.211 , 22.65], [-29.445 , 22.65], [-34.434 , 22.45], [-40.344 , 22.15], [-47.374 , 21.45], [-55.764 , 20.55], [-65.807 , 19.35], [-77.854 , 17.75], [-92.326 , 16.85], [-109.729, 16.15], [-130.666, 15.65], [-155.851, 15.35], [-186.126, 15.25], [-222.475, 15.05], [-266.040, 14.75], [-318.127, 14.45], [-380.213, 14.25], [-453.938, 13.85], [-541.089, 13.45]] 
        },
        {
        name: 'Décembre 2015',
        data: [[-0.494  , 19.35], [-1.541  , 19.35], [-2.646  , 19.35], [-3.819  , 19.35], [-5.078  , 19.35], [-6.441  , 19.35], [-7.930  , 19.35], [-9.573  , 19.35], [-11.405 , 19.35], [-13.467 , 19.35], [-15.810 , 19.35], [-18.496 , 19.35], [-21.599 , 19.35], [-25.211 , 19.35], [-29.445 , 19.35], [-34.434 , 19.35], [-40.344 , 19.35], [-47.374 , 19.35], [-55.764 , 19.35], [-65.807 , 19.35], [-77.854 , 19.05], [-92.326 , 17.95], [-109.729, 17.05], [-130.666, 16.65], [-155.851, 16.25], [-186.126, 15.85], [-222.475, 15.55], [-266.040, 15.25], [-318.127, 14.95], [-380.213, 14.65], [-453.938, 14.05], [-541.089, 13.65]]
        },
        {
        name: 'Mars 2016',
        data: [[-0.494  , 16.65], [-1.541  , 16.65], [-2.646  , 16.55], [-3.819  , 16.55], [-5.078  , 16.55], [-6.441  , 16.55], [-7.930  , 16.55], [-9.573  , 16.55], [-11.405 , 16.55], [-13.467 , 16.55], [-15.810 , 16.55], [-18.496 , 16.55], [-21.599 , 16.55], [-25.211 , 16.55], [-29.445 , 16.45], [-34.434 , 16.45], [-40.344 , 16.45], [-47.374 , 16.45], [-55.764 , 16.45], [-65.807 , 16.45], [-77.854 , 16.45], [-92.326 , 16.45], [-109.729, 16.45], [-130.666, 16.45], [-155.851, 16.45], [-186.126, 16.25], [-222.475, 15.95], [-266.040, 15.45], [-318.127, 14.95], [-380.213, 14.55], [-453.938, 14.05], [-541.089, 13.65]]

        }]   
    });
};

function removeGraphThermocline() {
    $('#container').highcharts().destroy();
};






