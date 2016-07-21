var index = 0;
var chartThermocline;
var currentMap = null;
var story = [
    {
        category: 'Introduction',
        slug: 'introduction',
        text: '#**Le Gulf Stream**\n\nDepuis sa découverte, durant le deuxième voyage de Christophe Colomb en 1493, le Gulf Stream a de nombreuses fois fait parlé de lui. Benjamin Franklin l’a transformé en voie rapide pour le retour en Europe. Une légende l’a longtemps elevé au statut de chaudière de l’Europe, miraculeux responsable de la différence entre le climat océanique tempéré d’Europe de l’ouest et le climat continental glacial de la côte est américaine. Récemment, devenu star hollywodienne, il a fait son apparition dans plusieurs films catastrophe. Porté par cette vague alarmiste, la presse a maladroitement prévu son arrêt et le refroidissement drastique de l’Europe.\n\nMais qu’en est-il réellement? A travers un ensemble de cartes intéractives, nous vous proposons de partir à la découverte de ce véritable fleuve océanique.',
        // ####*«Le Gulf Stream est une rivière au milieu de l’océan, dont le niveau ne change ni dans les plus fortes sécheresses ni dans les plus fortes pluies. Il est limité par des eaux froides, tandis que son courant est chaud. Il prend sa source dans le golfe du Mexique et se jette dans l’océan Arctique. Il n’existe pas sur la Terre un cours d’eau plus majestueux : sa vitesse est plus rapide que celle du Mississippi ou des Amazones, et son débit 1000 fois plus conséquent.» Maury «The Physical Geography of the Sea» 1855.*
        map: {
            type: 'leaflet',
            center: [-60, 0],
            zoom: 3,
            layers: [wh],
            maxBounds: [[-100, -180],[35, 180]]
        }
    },
    {
        category: 'Introduction',
        slug: 'introduction',
        text: '## Naissance du Gulf Stream\n Pour suivre le Gulf Stream, focalisons nous sur le trajet d’une goutte d’eau qui se trouve dans le Golfe du Mexique. Elle pourrait venir d’un cumulonimbus, de l’Atlantique, du lac Itasca source du Mississipi, ou de bien d’autres horizons. Mais sa provenance n’a que peu d’importance. Si elle ne s’évapore pas, elle se dirigera inévitablement vers le Gulf Stream.',
        map: {
          type: 'leaflet',
          maxBounds: [[0, -100],[85, 20]],
          center: [24, -80.72],
          zoom: 5,
          layers: [neTiles, golfe_mexique]
        }
    },
    {
        category: 'Introduction',
        slug: 'introduction',
        text: '## Naissance du Gulf Stream\n Le courant de Guyane, qui longe les côtes d’Amérique du Sud, se retrouve dans un cul-de-sac : l’Isthme du Panama. Il est naturellement emporté vers le nord-est par la circulation anticyclonique des Açores (sens des aiguilles d’une montre). Il dirige donc notre goutte d’eau vers la seule porte de sortie possible : le détroit de Floride. L’étroitesse de ce passage situé entre Cuba et la Floride génère un trop plein d’eau. C’est cet excédent qui donne naissance au Gulf Stream.',
        map: {
          type:'leaflet',
          center: [10.13, -58.59],
          zoom: 4,
          layers: [
              neTiles,
              courant_guyane,
              detroit_de_floride,
              isthme_panama
          ]
        }
    },
    {
        category: 'Introduction',
        slug: 'introduction',
        text: '## Le Gulf Stream continental\n Ca y est, notre goutte d’eau qui a eu du mal à se frayer un passage entre ses sœurs est entraînée à pleine vitesse dans le Gulf Stream. Elle vogue maintenant à la vitesse record de 2 m/s dans cette partie du Gulf Stream appelée courant de Floride. Ce véritable fleuve côtier reste collé au continent, canalisé par la pente continentale jusqu’au Cap Hatteras.',
        map: {
          type:'leaflet',
          center: [34.99, -74.97],
          zoom: 5,
          layers: [
              neTiles,
              courant_guyane,
              courant_floride,
              cap_hatteras,
              pente_continentale
          ]
        }
    },
    {
        category: 'Introduction',
        slug: 'introduction',
        text: '##Le Gulf Stream océanique\nEn quittant le Cap Hatteras, notre goutte d’eau s’embarque vers le large en suivant le fleuve océanique. Elle se confronte maintenant à un univers beaucoup plus chaotique. La pente continentale n’est plus là pour canaliser son mouvement qui devient tourbillonnaire. Certains petits courants sortent du flux qui file maintenant plein est, en direction de l’Europe.',
        map: {
          type:'leaflet',
          center: [43.19, -62.3],
          zoom: 5,
          layers: [
              neTiles,
              courant_guyane,
              courant_floride,
              cap_hatteras,
              gulfstream
          ]
        }
    },
    {
        category: 'Introduction',
        slug: 'introduction',
        text: '##Les Grands Bancs de Terre Neuve\nEn arrivant aux Grands Bancs de Terre Neuve, notre goutte d’eau observe la mort du Gulf Stream. C’est le chaos du large qui en a finalement eu raison. Le fleuve océanique a perdu ses caractéristiques qui le rendait si particulier. Scientifiquement parlant, sa course s’achève vers 40°N 50°W, mais le mouvent des masses d’eau ne s’arrête pas pour autant.\n\nPlus libre, notre goutte d’eau va rapidement se retrouver confrontée à des chemins multiples.',
        map: {
          type:'leaflet',
          center: [43.19, -50.3],
          zoom: 5,
          layers: [
              neTiles,
              courant_guyane,
              courant_floride,
              gulfstream,
              grands_bancs_de_terre_neuve
          ]
        }
    },
    {
        category: 'Introduction',
        slug: 'introduction',
        text: '##Le courant des Açores\nLe courant des Açores est le premier candidat qui essaye d’emporter notre goutte d’eau et une partie de ses sœurs. Il est alimenté par l’anticyclone des Açores et rejoint le courant des Antilles. En empruntant cette voie, c’est un retour à la case départ pour notre goutte d’eau qui repart pour un tour de Gulf Stream.',
        map: {
          type:'leaflet',
          center: [31.92, -58.59],
          zoom: 5,
          layers: [
              neTiles,
              courant_guyane,
              courant_floride,
              gulfstream,
              courant_nord_atlantique,
              courant_acores
          ]
        }
    },
    {
        category: 'Introduction',
        slug: 'introduction',
        text: '##Le courant des Canaries\nAutre possibilité, notre goutte d’eau peut être entraînée par le courant des Canaries. L’anticyclone des Açores est encore une fois le moteur du courant des Canaries. La première extension du courant des Canaries finit sa course dans le courant de Guyane. C’est donc un autre retour à la case départ. \n\nLe courant de Guinée, seconde extension du courant des Canaries, sort de l’influence de l’anticyclone des Açores et emporte notre goutte d’eau le long des côtes Africaines vers l’équateur.',
        map: {
          type:'leaflet',
          center: [29.53, -45],
          zoom: 4,
          layers: [
              neTiles,
              courant_guyane,
              courant_floride,
              gulfstream,
              courant_nord_atlantique,
              courant_acores,
              courant_canaries
          ]
        }
    },
    {
        category: 'Introduction',
        slug: 'introduction',
        text: '##Cap sur le Groenland\nNotre goutte d’eau ne tombe pas fatalement sous l’emprise de l’anticyclone des Açores. Elle peut aussi être attirée par sa sœur nordique, la dépression d’Islande, qui tourne dans le sens inverse des aiguilles d’une montre. Encore une fois, de nombreux choix s’offrent à elle. Elle peut mettre le cap vers l’Islande et le Groenland. En suivant ce chemin et en passant par la mer du Labrador, elle pourrait de nouveau être confronté au Gulf Stream.',
        map: {
          type:'leaflet',
          center: [56, -34.91],
          zoom: 4,
          layers: [
              neTiles,
              courant_guyane,
              courant_floride,
              gulfstream,
              courant_nord_atlantique,
              courant_acores,
              courant_canaries,
              groenland
          ]
        }
    },
    {
        category: 'Introduction',
        slug: 'introduction',
        text: '##La dérive Nord Atlantique\nAu delà de l’influence du vent qui créé les courants de surface, un nouveau mécanisme, la pompe thermohaline, attire notre goutte d’eau vers le Nord de l’Europe. Il essaye petit à petit de l’entraîner vers les abysses. Nous étudierons ce phénomène un peu plus tard. En suivant cette voie, notre goutte d’eau a de fortes chances de voguer vers la mer Baltique, ou de longer les côtes Norvégiennes pour continuer sa course dans l’océan Arctique.',
        map: {
          type:'leaflet',
          center: [57, -12],
          zoom: 4,
          layers: [
              neTiles,
              courant_guyane,
              courant_floride,
              gulfstream,
              courant_nord_atlantique,
              courant_acores,
              courant_canaries,
              groenland,
              derive_nord_atlantique_1,
              derive_nord_atlantique_2
          ]
        }
    },
    {
        category: 'Les courants',
        slug: 'courants',
        text: '##Gulf Stream et courants Nord Atlantiques\nLe système climatique est une machine à convertir et à distribuer l’énergie que la Terre reçoit du soleil. L’énergie solaire est transportée par deux fluides : l’atmosphère et l’océan. Ces deux entités sont en contact permanent et ne cessent d’échanger de l’énergie. C’est le couple qu’ils forment qui gère le climat de notre planète.',
        map: {
          type:'leaflet',
          maxBounds: [[-100, -180],[73, 180]],
          center: [-65, 25],
          zoom: 3,
          layers: [
              BFranklin
          ]
        }
    },
    {
        category: 'Les courants',
        slug: 'courants',
        text: '##Gulf Stream et courants Nord Atlantiques\nCette carte représente la vitesse des courants de surface. Malgré de nombreux petits courants, souvent tourbillonnaires, il est possible de retrouver la plupart des courants évoqués durant le voyage de notre goutte d’eau.',
        map: {
            type: 'mapbox',
            sources: ['video_current']
        },
        legend: '#current-legend'
    },
    {
        category: 'Les courants',
        slug: 'courants',
        text: '##Gulf Stream et courants Nord Atlantiques\n\nLe Gulf Stream se démarque clairement des courants Nord Atlantique. Sa vitesse et son débit restent inégalés. Jusqu’au Cap Hatteras, canalisé par la pente continentale, il est très linéaire et se comporte comme un jet puissant.\n\n Lorsqu’il prend le large, se créent des méandres de plus en plus sinueux. De grands tourbillons se détachent de part et d’autre du fleuve.\n\n Après les Grands Bancs de Terre Neuve, le Gulf Stream perd ses caractéristiques et prend de nombreuses directions. Ses extensions sont visuellement plus difficiles à suivre car sa puissance a été répartie dans de nombreux courants.',
        map: {
            type:'mapbox',
            sources: ['video_current']
        },
        legend: '#current-legend'
    },
    {
        category: 'Les courants',
        slug: 'courants',
        text: '##Gulf Stream et courants Nord Atlantiques\n\nNous venons d’observer ce qu’il se passe en surface mais comment les courants se comportent ils en profondeurs ? En utilisant l’ascenseur à gauche de la carte, vous pouvez étudier leur comportement à différentes profondeurs. \n\n Positionnez vous par exemple à 1684m. Vous remarquerez qu’un courant de fond, opposé au Gulf Stream longe la côte américaine. La circulation des courants de profondeur est bien différente de celle de surface, influencée par l’action mécanique du vent. \n\n Pour revenir au Gulf Stream, vous vous rendrez vite compte qu’il n’est pas qu’un courant de surface. A 1000m, il a encore une grande influence. \n\n Il se distingue des autres courants de bords ouest par son débit record qui atteint les millions de mètres cube à la seconde. Pour comparaison, l’Amazone n’a qu’un débit de 300 000 mètres cube par seconde à son maximum. Le débit de tous les fleuves et rivières de la planète atteint 1 Sv (unité de mesure de débit). Le GS qui a un débit de 30 Sv au départ s’approche des 140 Sv en fin de course.',
        map: {
            type: 'leaflet',
            center: [24, -80.72],
            zoom: 5,
            layers: [neTiles, depthLayer]
        },
        displayDepthSlider: true,
        legend: '#arrow-legend'
    },
    {
        category: 'Les courants',
        slug: 'courants',
        text: '##Gulf Stream et courants Nord Atlantiques\n\nPlusieurs facteurs viennent expliquer ce flux mondialement exceptionnel :\n\n - contrairement à ses homologues, le Gulf Stream bénéficie d’une double alimentation : le courant de Guyane et le courant des Antilles.\n\n - depuis 15 millions d’années l’Isthme de Panama est fermé, empêchant le courant de Guyane de se déverser dans le Pacifique. Le Golfe du Mexique représente un cul de sac pour le courant de Guyane qui n’a qu’une sortie possible: le détroit de Floride. Cet apport est renforcé par le courant des Antilles qui est emporté dans le courant de Floride.\n\n - la circulation thermohaline crée un appel d’eau qui n’a pas son équivalent ailleurs. Nous étudierons ce phénomène un peu plus tard.',
        map: {
            type: 'mapbox',
            sources: ['video_current']
        },
        legend: '#current-legend'
    },
    {
        category: 'Les courants',
        slug: 'courants',
        text: '##Gulf Stream et niveau de l’Océan\n\nL’apport en eau est tellement conséquent dans le Gulf Stream que le niveau de la mer est prêt de 50cm au dessus du niveau 0.',
        map: {
            type: 'leaflet',
            center: [40, -40],
            zoom: 4,
            maxBounds: [[0, -100],[85, 20]],
            layers: [neTiles, ssh]
        },
        legend: '#ssh-legend'
    },
    {
        category: 'Les températures',
        slug: 'temperatures',
        text: '##Température\n\nLes courants et les vents sont le moteur de la machine qui convertit et distribue l’énergie que la Terre reçoit du soleil.\n\nL’océan fournit une partie de son énergie à l’atmosphère créant des vents. Ces derniers génèrent les courants de surface qui distribuent l’autre partie à l’échelle de la planète. On estime que les transferts de chaleur des régions équatoriales vers les pôles se font à parts égales entre l’atmosphère et l’océan.',
        map: {
            type: 'mapbox',
            sources: ['video_temp']
        },
        legend: '#temperature-legend',
        timeline: {
            values: [
              'jun', 'jul', 'aoû', 'sep', 'oct', 'nov', 'déc', 'jan', 'fév', 'mar', 'avr', 'mai'
            ],
            context: [
              '2015', '2016'
            ]
        }
    },
    {
        category: 'Les températures',
        slug: 'temperatures',
        text: '##Température\n\nLe Gulf Stream a une influence considérable sur le climat de régions situées à des milliers de kilomètres des Grands Bancs de Terre Neuve. Il emporte avec lui des eaux tropicales chaudes.\n\nSes extensions qui se dirigent vers le nord emportent ces eaux vers des latitudes beaucoup plus hautes. Par exemple, la glace qui n’arrive pas à se former au nord de la Norvège bénéficie directement d’eaux chaudes apportées par la dérive Nord Atlantique, extension du Gulf Stream. Pour vous rendre compte de cette influence, comparez les eaux côtières norvégiennes et les eaux côtières du Groenland. Vous remarquerez une grande différence de température.\n\nMais l’Europe, n’est pas l’unique bénéficiaire de cette source de chaleur. C’est tout l’Atlantique Nord qui profite de cet apport. Contrairement à ce qui a été longtemps mis en avant, le Gulf Stream n’est pas la chaudière centrale de l’Europe. Un autre phénomène joue un rôle majeur dans la douceur de notre climat.',
        map: {
            type: 'mapbox',
            sources: ['video_temp']
        },
        legend: '#temperature-legend',
        timeline: {
            values: [
              'jun', 'jul', 'aoû', 'sep', 'oct', 'nov', 'déc', 'jan', 'fév', 'mar', 'avr', 'mai'
            ],
            context: [
              '2015', '2016'
            ]
        }
    },
    {
        category: 'Les températures',
        slug: 'temperatures',
        text: '##Température\n\nContrairement à l’atmosphère qui utilise très rapidement l’énergie qu’on lui met à disposition, l’océan a une grande mémoire. L’été, le rayonnement solaire intense échauffe les couches de surface. Il y a création d’un thermocline qui stratifie les eaux océaniques. L’océan stocke alors l’énergie thermique issue du rayonnement solaire d’été dans ses couches profondes.\n\nSur le graphique ci-dessous vous pouvez observer la thermocline saisonnière. Il s’agit de la zone de chute de température entre les couches de surface et les couches profondes. Si cette thermocline est importante, c’est à dire comprend une grande gamme de températures, les eaux de surface et les eaux profondes sont bien stratifiées et ne se mélangent pas.',
        map: {
            type: 'mapbox',
            sources: ['video_temp']
        },
        displayThermocline: true,
        legend: '#temperature-legend',
        timeline: {
            values: [
              'jun', 'jul', 'aoû', 'sep', 'oct', 'nov', 'déc', 'jan', 'fév', 'mar', 'avr', 'mai'
            ],
            context: [
              '2015', '2016'
            ]
        }
    },
    {
        category: 'Les températures',
        slug: 'temperatures',
        text: '##Température\n\nObservez sur le graphique l’évolution du thermocline en fonction des mois. En partant d’août 2015 vous remarquerez qu’au fil des mois, la thermocline est de plus en plus petite jusqu’à sa rupture au mois de mars 2016.\n\nEn hivers le rayonnement solaire est beaucoup plus faible et les vents d’ouest se renforcent. Il y a rupture du thermocline qui remet à disposition des couches de surface le stock d’été. L’océan transmet cette énergie à l’atmosphère. Les vents d’ouest la récupèrent et l’emportent en direction de l’Europe. L’ouest de ce continent sera le seul bénéficiaire de la mémoire calorifique estivale de l’océan Atlantique.',
        map: {
            type: 'mapbox',
            sources: ['video_temp']
        },
        displayThermocline: true,
        legend: '#temperature-legend',
        timeline: {
            values: [
              'jun', 'jul', 'aoû', 'sep', 'oct', 'nov', 'déc', 'jan', 'fév', 'mar', 'avr', 'mai'
            ],
            context: [
              '2015', '2016'
            ]
        }
    },
    {
        category: 'Les températures',
        slug: 'temperatures',
        text: '##Température\n\nCe phénomène semble aujourd’hui expliquer en grande partie la différence de climat entre les côtes est et ouest de l’Atlantique. Sur l’année, on note une différence moyenne de 15°C entre ces deux côtes. C’est ce qui explique un climat maritime (tempéré) en Europe de l’ouest et aux mêmes latitudes sur le sol américain un climat continental (froid).\n\nLe Gulf Stream a tout de même un impact sur le notre climat. Les scientifiques estiment aujourd’hui que sans lui, l’Europe de l’Ouest se rafraîchirait de 4 ou 5°C.',
        map: {
            type: 'mapbox',
            sources: ['video_temp']
        },
        legend: '#temperature-legend',
        timeline: {
            values: [
              'jun', 'jul', 'aoû', 'sep', 'oct', 'nov', 'déc', 'jan', 'fév', 'mar', 'avr', 'mai'
            ],
            context: [
              '2015', '2016'
            ]
        }
    },
    {
        category: 'Les vents',
        slug: 'vents',
        text: '##L’influence du vent\n\nUn principe simple de thermodynamique nous enseigne qu’entre deux corps en contact, c’est le corps chaud qui cède son énergie au corps froid jusqu’à l’équilibre.\n\nLe couple océan/atmosphère transporte et distribue l’énergie du soleil de la source chaude à la source froide. Par évaporation, les zones océaniques équatoriales (source chaude) alimentent l’atmosphère en chaleur, créant des vents qui se dirigent vers les régions polaires (source froide).\n\nDifférents phénomènes naturels, dont la rotation de la Terre, empêchent ce transfert de se faire en ligne droite. Les vents et les courants suivent la direction de l’anticyclone des Açores (sens des aiguilles d’une montre) au sud du Gulf Stream. Au nord de ce courants, ils sont emportés par la dépression d’Islande (sens inverse des aiguilles d’une montre). L’influence de cette dernière est clairement visible sur cette carte.',
        map: {
            type: 'mapbox',
            sources: ['video_wind']
        },
        legend: '#wind-legend'
    },
    {
        category: 'Les vents',
        slug: 'vents',
        text: '##Les vents\n\nEn observant la direction des vents vous vous rendrez compte de l’existance d’un courant d’air soufflant d’ouest en est. C’est ce couloir qui récupère et dirige l’énergie d’été stockée par l’océan vers l’Europe.\n\nObservez maintenant le vent à la sortie du détroit de Floride. Son comportement suit assez bien la forme du Gulf Stream.',
        map: {
            type: 'mapbox',
            sources: ['video_wind']
        }
    },
    {
        category: 'Les vents',
        slug: 'vents',
        text: '##Les vents\n\nL’équateur est la ligne imaginaire qui représente le plus grand diamètre de la Terre. L’air qui en provient et qui se dirige vers les pôles se retrouve sur des diamètres de plus en plus petits.\n\nConséquence, sa vitesse de rotation augmente. Aux alentours des latitudes 30°, sa vitesse est tellement grande qu’au lieu de continuer vers le nord, il se retrouve entraîné dans un couloir de vent orienté est-ouest.\n\nC’est ce couloir de vents violents que nous observons sur cette carte.',
        map: {
            type: 'mapbox',
            sources: ['video_wind']
        }
    },
    {
        category: 'La salinité',
        slug: 'salinite',
        text: '##Salinité\n\nComme pour la température de surface, le Gulf Stream représente une frontière entre les eaux fortement salées qu’il emporte et les eaux de la mer du Labrador faiblement salées.\n\n Cette différence s’explique assez simplement. Au niveau de l’équateur et des tropiques, l’évaporation est très forte. Cette eau s’échappe dans l’atmosphère, renforçant les vents se dirigeants vers le nord (dans la direction imposée par l’anticyclone des Açores). Le sel, qui ne peux pas s’évaporer s’accumule dans l’océan. C’est ce qui explique la forte salinité des eaux tropicales.\n\nLe Gulf Stream emporte donc des eaux chaudes et salées en direction des hautes latitudes. Cet apport est particulièrement visible au niveau de la dérive Nord Atlantique qui a une influence jusqu’au nord de la Norvège.',
        map: {
            type: 'mapbox',
            sources: ['video_salinity']
        },
        legend: '#salinity-legend',
    },
    {
        category: 'La salinité',
        slug: 'salinite',
        text: '##Salinité\n\nEn arrivant aux hautes latitudes, la température chute. Les eaux emportées par les extensions du Gulf Stream deviennent froides et salées.\n\n Plus une eau est froide, plus elle est dense. Plus elle est salée, plus elle est dense. Les eaux issues du Gulf Stream sont plus salées que les eaux qu’il rencontre. Ce taux de sel est renforcé l’hiver par la création de glace.\n\n En se refroidissant durant leur voyage vers les hautes latitudes, elles finissent par devenir trop denses pour se maintenir à la surface et plongent jusqu’à des profondeurs supérieures au kilomètre. Elles s’écoulent lentement dans un courant de fond en direction de l’équateur.\n\nLe courant de retour que nous avions observé à 1684m peut être affilié à cette circulation. Il finira par se réchauffer pour refaire surface, permettant un échange entre les eaux de surface et les eaux profondes.',
        map: {
            type: 'mapbox',
            sources: ['video_salinity']
        }
    },
    {
        category: 'La salinité',
        slug: 'salinite',
        text: '##La circulation thermohaline\n\nSur cette carte vous pouvez suivre cette circulation à l’échelle planétaire. Elle est communément appelée le « tapis roulant ».\n\n On estime qu’il faudrait entre 1000 et 2000 ans pour qu’une goutte fasse un tour de ce circuit. Ce phénomène de plongée est particulièrement remarquable au large de la Norvège et au Nord Est des Grands Bancs de Terre Neuve.\n\n Le Gulf Stream, à travers les eaux salées qu’il dirige vers les hautes latitudes est un moteur essentiel de ce tapis roulant. Cette circulation planétaire serait bien différent sans lui.',
        map: {
            type: 'leaflet',
            center: [10, 30],
            zoom: 2,
            layers: [
                neTiles,
                thermohaline_cold,
                thermohaline_hot
            ]
        }
    },
    {
        category: 'Conclusion',
        slug: 'conclusion',
        text: '##Conclusion\n\nMême si le Gulf Stream n’est plus considéré comme la chaudière de l’Europe. Même si les voiliers ne l’empruntent plus pour envoyer le courrier du nouveau monde vers le vieux continent. Même si nous ne devons pas craindre son arrêt brutal et le refroidissement drastique de l’Europe, il n’en reste pas moins un courant remarquable.\n\nLes scientifiques estiment aujourd’hui que sans lui, l’Europe de l’Ouest se rafraîchirait de 4 ou 5°C. Il est un des moteurs de la plupart des grands courants d’Atlantique Nord. Il a une influence en surface mais aussi en profondeur en jouant un rôle déterminant sur la circulation thermohaline. Sa vitesse et son débit en font le fleuve océanique le plus puissant au monde. La climatologie étant un domaine extrêmement complexe, les scientifiques ne sont pas prêt de percer tout ses mystères.\n\nEn conclusion, ce courant majestueux n’a pas fini de faire parler de lui.',
        map: {
            type: 'leaflet',
            maxBounds: [[-100, -180],[70, 180]],
            center: [30, 60],
            zoom: 0,
            layers: [Summer_Squall]
        }
    }
];

var plotBands = {
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

var plotBandsMonths = {
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
}

function sameArrays(a1, a2) {
    return (a1.length == a2.length) && a1.every(function(element, index) {
        return element === a2[index];
    });
}

function init() {
    var lastCategory = null;

    // Init nav
    console.log('init nav');
    for (var i = 0; i < story.length; i++) {
        var className = 'circle';
        if (story[i].category !== lastCategory) {
            className += ' circle-cat ' + story[i].slug;
        }
        var progressItem = '<a href="#' + i + '" id="progress-item-' + i + '" class="' + className + '"><span class="label">' + i + '</span><span class="title"></span></a>';
        $('.progress').append(progressItem);

        lastCategory = story[i].category;
    }

    // Bind events
    $('#next').on('click', goToNextState);
    $('.circle-cat').on('click', goToState);

    // Load first content
    changeContent(0);
}

function goToNextState() {
  if (index < story.length - 1) {
      index = index + 1;
      changeContent(index);
  }
}

function goToState(e) {
    var indexPage = e.target.innerText;
    index = parseInt(indexPage);
    changeContent(indexPage);
}


function updateLeafletMap(newMap) {
    if (currentMap && currentMap.type === 'mapbox' && Mbmap) {
        Mbmap.remove();
        Mbmap = null;
        currentMap = {};
    }
    var newZoom = newMap.zoom || currentMap.zoom || 3;
    var newCenter = newMap.center || currentMap.center || [-60, 0];
    var newBounds = newMap.maxBounds || currentMap.maxBounds || null;
    var newLayers = newMap.layers;

    if (!Lmap) {
        var options = newMap.options || {
            center: [-60, 0],
            zoom: 3
        };
        createLeafletMap(options);
    }

    if (newBounds) {
        Lmap.setMaxBounds(newBounds);
    }
    Lmap.setView(newCenter, newZoom);

    if (newLayers) {
        var layersToRemove = [];
        var layersToAdd = [];
        var oldLayers = currentMap ? currentMap.layers : null;

        if (oldLayers && oldLayers.length > 0) {
            layersToAdd = newLayers.filter(function(add) {
                return oldLayers.indexOf(add) < 0;
            });
            layersToRemove = oldLayers.filter(function(rem) {
                return newLayers.indexOf(rem) < 0;
            });
        } else {
            layersToAdd = newLayers;
        }

        for (var j = 0; j < layersToRemove.length; j++) {
            Lmap.removeLayer(layersToRemove[j]);
        }

        for (var i = 0; i < layersToAdd.length; i++) {
            Lmap.addLayer(layersToAdd[i]);
        }

    }
}

function updateMapboxMap(newMap) {
    var newSources = newMap.sources;

    if (currentMap && currentMap.type === 'leaflet' && Lmap) {
        if (currentMap.layers) {
            for (var i = 0; i < currentMap.layers.length; i++) {
                Lmap.removeLayer(currentMap.layers[i]);
            }
        }
        Lmap.remove();
        Lmap = null;
        currentMap = {};
    }

    if (!Mbmap) {
        createMapboxGlMap();
    }

    if (newSources) {
        if (!currentMap || !currentMap.sources || !sameArrays(newSources, currentMap.sources)) {
            var newStyle = $.extend(true, {}, baseStyle);
            for (var i = 0; i < newSources.length; i++) {
                newStyle.sources[newSources[i]] = mapboxLayers[newSources[i]];
                newStyle.layers.unshift({
                    "id": newSources[i] + '_layer',
                    "type": 'raster',
                    "source": newSources[i]
                });
                // Mbmap.once('style.load', function () {
                //     Mbmap.style.sources[newSources[i]].attribution = 'Source';
                // });
                // Mbmap.once('load', function () {
                //     var video = Mbmap.getSource(newSources[i]).getVideo();
                //     var timeline = document.querySelector('.timeline');
                //
                //     if (timeline.dataset.active) {
                //         video.addEventListener('timeupdate', animateTimeline);
                //     }
                // });
            }
            Mbmap.setStyle(newStyle);
        }

    }

    for (var method in newMap) {
        if (Mbmap && newMap.hasOwnProperty(method) && typeof Mbmap[method] === 'function') {
            Mbmap[method](newMap[method]);
        }
    }
}

function updateMap(newMap) {
    if (newMap.type === 'leaflet') {
        updateLeafletMap(newMap);
    }

    if (newMap.type === 'mapbox') {
        updateMapboxMap(newMap);
    }
    currentMap = newMap;
}



function changeContent(i) {

    var state = story[i];

    $('.progress .circle').removeClass('active');
    $('.progress .circle').removeClass('passed');
    $('.progress .circle#progress-item-' + i).addClass('active');

    for (var j = 0; j < i; j++) {
        $('.progress .circle#progress-item-' + j).addClass('passed');
    }

    history.pushState({id: i, slug: state.slug}, state.slug, '#' + i);

    if (state.map) {
        updateMap(state.map);
    }
    if (state.text) {
        $('#text').html(markdown.toHTML(state.text));
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
    } else {
        $('#depthSlider').css('display', 'none');
    }
    if (state.displayThermocline) {
        $('.left-panel').removeClass('col-md-9');
        $('.left-panel').addClass('col-md-6');
        $('.right-panel').removeClass('col-md-3');
        $('.right-panel').addClass('col-md-6');
        createGraphThermocline();
    } else {
        $('.left-panel').removeClass('col-md-6');
        $('.left-panel').addClass('col-md-9');
        $('.right-panel').removeClass('col-md-6');
        $('.right-panel').addClass('col-md-3');
        removeGraphThermocline();
    }
    if (state.legend) {
        $('.legend').css('display', 'none');
        $(state.legend).css('display', 'block');
    } else {
        $('.legend').css('display', 'none');
    }
    if (state.timeline) {
        var timeline = state.timeline;
        var valuesLength = timeline.values.length;
        var contextLength = timeline.context.length;
        for (var i = 0; i < valuesLength; i++) {
          var valueElement = document.createElement('li');
          valueElement.innerHTML = timeline.values[i];
          document.querySelector('.timeline-values').appendChild(valueElement);
        }
        for (var j = 0; j < contextLength; j++) {
          var contextElement = document.createElement('li');
          contextElement.innerHTML = timeline.context[j];
          document.querySelector('.timeline-context').appendChild(contextElement);
        }
        document.querySelector('.timeline').dataset.active = true;
        document.querySelector('.timeline').classList.remove('hidden');
    } else {
      document.querySelector('.timeline').dataset.active = false;
        document.querySelector('.timeline').classList.add('hidden');
    }
}

function createGraphThermocline() {
    chartThermocline = $('#container').highcharts({
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
            },
            series: {
                point: {
                    events: {
                        mouseOver: function(e) {
                            var name = e.target.series.name;
                            var type = e.target.series.options.type;
                            if (type === 'line') {
                                var chart = $('#container').highcharts();
                                var seriesLength = chart.series.length;
                                var plotBandsValues = plotBandsMonths[name];

                                for (var band in plotBands) {
                                    var plotBand = plotBands[band];
                                    plotBand.from = plotBandsValues[band + '_from']
                                    plotBand.to = plotBandsValues[band + '_to']
                                    chart.xAxis[0].addPlotBand(plotBand);
                                }
                            }
                        },
                        mouseOut: function(e) {
                            var name = e.target.series.name;
                            var type = e.target.series.options.type;
                            if (type === 'line') {
                                var chart = $('#container').highcharts();
                                var seriesLength = chart.series.length;
                                for (var band in plotBands) {
                                    chart.xAxis[0].removePlotBand('plot-band-' + band);
                                }
                            }
                        },
                    }
                }
            }
        },
        series: [{
            name: 'Surface - Août 2015',
            type: 'area',
            data: [[0, 13],[0, 25], [-200, 25], [-200, 13]],
            color: '#B1C4D6',
            visible: false
        },
        {
            name: 'Thermocline - Août 2015',
            type: 'area',
            data: [[-11.405, 13],[-11.405, 25], [-200, 25], [-200, 13]],
            color: '#567797',
            visible: false
        },
        {
            name: 'Fond - Août 2015',
            type: 'area',
            data: [[-130.666, 13],[-130.666, 25], [-200, 25], [-200, 13]],
            color: '#33577A',
            visible: false
        },
        {
            name: 'Surface - Octobre 2015',
            type: 'area',
            data: [[0, 13],[0, 25], [-200, 25], [-200, 13]],
            color: '#B1C4D6',
            visible: false
        },
        {
            name: 'Thermocline - Octobre 2015',
            type: 'area',
            data: [[-29.445, 13],[-29.445, 25], [-200, 25], [-200, 13]],
            color: '#567797',
            visible: false
        },
        {
            name: 'Fond - Octobre 2015',
            type: 'area',
            data: [[-109.729, 13],[-109.729, 25], [-200, 25], [-200, 13]],
            color: '#33577A',
            visible: false
        },
        {
            name: 'Surface - Décembre 2015',
            type: 'area',
            data: [[0, 13],[0, 25], [-200, 25], [-200, 13]],
            color: '#B1C4D6',
            visible: false
        },
        {
            name: 'Thermocline - Décembre 2015',
            type: 'area',
            data: [[-65.807, 13],[-65.807, 25], [-200, 25], [-200, 13]],
            color: '#567797',
            visible: false
        },
        {
            name: 'Fond - Décembre 2015',
            type: 'area',
            data: [[-109.729, 13],[-109.729, 25], [-200, 25], [-200, 13]],
            color: '#33577A',
            visible: false
        },
        {
            name: 'Surface - Mars 2016',
            type: 'area',
            data: [[0, 13],[0, 25], [-200, 25], [-200, 13]],
            color: '#B1C4D6',
            visible: false
        },
        {
            name: 'Août 2015',
            type: 'line',
            data:[[-0.494  , 24.65], [-1.541  , 24.65], [-2.646  , 24.65], [-3.819  , 24.65], [-5.078  , 24.65], [-6.441  , 24.65], [-7.930  , 24.65], [-9.573  , 24.65], [-11.405 , 24.65], [-13.467 , 24.55], [-15.810 , 24.35], [-18.496 , 23.95], [-21.599 , 23.35], [-25.211 , 22.65], [-29.445 , 21.85], [-34.434 , 21.05], [-40.344 , 20.25], [-47.374 , 19.45], [-55.764 , 18.75], [-65.807 , 18.25], [-77.854 , 17.75], [-92.326 , 17.35], [-109.729, 16.95], [-130.666, 16.55], [-155.851, 16.25], [-186.126, 15.85], [-222.475, 15.45], [-266.040, 15.05], [-318.127, 14.65], [-380.213, 14.15], [-453.938, 13.75], [-541.089, 13.35]]
        },
        {
            name: 'Octobre 2015',
            type: 'line',
            data: [[-0.494  , 22.95], [-1.541  , 22.95], [-2.646  , 22.85], [-3.819  , 22.85], [-5.078  , 22.85], [-6.441  , 22.85], [-7.930  , 22.85], [-9.573  , 22.85], [-11.405 , 22.85], [-13.467 , 22.85], [-15.810 , 22.75], [-18.496 , 22.75], [-21.599 , 22.75], [-25.211 , 22.65], [-29.445 , 22.65], [-34.434 , 22.45], [-40.344 , 22.15], [-47.374 , 21.45], [-55.764 , 20.55], [-65.807 , 19.35], [-77.854 , 17.75], [-92.326 , 16.85], [-109.729, 16.15], [-130.666, 15.65], [-155.851, 15.35], [-186.126, 15.25], [-222.475, 15.05], [-266.040, 14.75], [-318.127, 14.45], [-380.213, 14.25], [-453.938, 13.85], [-541.089, 13.45]]
        },
        {
            name: 'Décembre 2015',
            type: 'line',
            color: '#FF9F00',
            data: [[-0.494  , 19.35], [-1.541  , 19.35], [-2.646  , 19.35], [-3.819  , 19.35], [-5.078  , 19.35], [-6.441  , 19.35], [-7.930  , 19.35], [-9.573  , 19.35], [-11.405 , 19.35], [-13.467 , 19.35], [-15.810 , 19.35], [-18.496 , 19.35], [-21.599 , 19.35], [-25.211 , 19.35], [-29.445 , 19.35], [-34.434 , 19.35], [-40.344 , 19.35], [-47.374 , 19.35], [-55.764 , 19.35], [-65.807 , 19.35], [-77.854 , 19.05], [-92.326 , 17.95], [-109.729, 17.05], [-130.666, 16.65], [-155.851, 16.25], [-186.126, 15.85], [-222.475, 15.55], [-266.040, 15.25], [-318.127, 14.95], [-380.213, 14.65], [-453.938, 14.05], [-541.089, 13.65]]
        },
        {
            name: 'Mars 2016',
            type: 'line',
            color: '#A2B209',
            data: [[-0.494  , 16.65], [-1.541  , 16.65], [-2.646  , 16.55], [-3.819  , 16.55], [-5.078  , 16.55], [-6.441  , 16.55], [-7.930  , 16.55], [-9.573  , 16.55], [-11.405 , 16.55], [-13.467 , 16.55], [-15.810 , 16.55], [-18.496 , 16.55], [-21.599 , 16.55], [-25.211 , 16.55], [-29.445 , 16.45], [-34.434 , 16.45], [-40.344 , 16.45], [-47.374 , 16.45], [-55.764 , 16.45], [-65.807 , 16.45], [-77.854 , 16.45], [-92.326 , 16.45], [-109.729, 16.45], [-130.666, 16.45], [-155.851, 16.45], [-186.126, 16.25], [-222.475, 15.95], [-266.040, 15.45], [-318.127, 14.95], [-380.213, 14.55], [-453.938, 14.05], [-541.089, 13.65]]
        }]
    });
};

function removeGraphThermocline() {
    if ($('#container').highcharts()) {
        $('#container').highcharts().destroy();
    }
};

init();
