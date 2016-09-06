(function (window) {
  window.stories = [
    {
      category: 'Introduction',
      slug: 'introduction',
      text: '#**Le Gulf Stream**\n\nDepuis sa découverte, durant le deuxième voyage de Christophe Colomb en 1493, le Gulf Stream a de nombreuses fois fait parler de lui.\n\nBenjamin Franklin l’a transformé en voie rapide pour le retour en Europe. Une légende l’a longtemps elevé au statut de chaudière de l’Europe, miraculeux responsable de la différence entre le climat océanique tempéré d’Europe de l’Ouest et le climat continental glacial de la côte est américaine. Récemment, devenu star hollywoodienne, il a fait son apparition dans plusieurs films catastrophe. Porté par cette vague alarmiste, la presse a maladroitement prévu son arrêt et le refroidissement drastique de l’Europe.\n\nMais qu’en est-il réellement? À travers un ensemble de cartes intéractives, nous vous proposons de partir à la découverte de ce véritable fleuve océanique.',
      art: 'The Gulf Stream - Winslow Homer, 1899, peinture à l’huile',
      map: {
        type: 'leaflet',
        center: [-60, 0],
        zoom: 3,
        layers: ['wh'],
        maxBounds: [[-100, -180], [35, 180]]
      }
    },
    {
      category: 'Introduction',
      slug: 'introduction',
      text: '## Naissance du Gulf Stream\n Pour suivre le Gulf Stream, focalisons-nous sur le trajet d’une goutte d’eau qui se trouve dans le Golfe du Mexique. Elle pourrait venir d’un cumulonimbus, de l’Atlantique, du lac Itasca, source du Mississipi, ou de bien d’autres horizons. Mais sa provenance n’a que peu d’importance. Si elle ne s’évapore pas, elle se dirigera inévitablement vers le Gulf Stream.',
      map: {
        type: 'leaflet',
        center: [24, -80.72],
        maxBounds: [[0, -100], [85, 20]],
        zoom: 3,
        layers: ['neTiles', 'golfe_mexique']
      }
    },
    {
      category: 'Introduction',
      slug: 'introduction',
      text: '## Naissance du Gulf Stream\n Le courant de Guyane, qui longe les côtes d’Amérique du Sud, se retrouve dans un cul-de-sac : l’Isthme du Panama. Il est naturellement emporté vers le nord-est par la circulation anticyclonique des Açores (sens des aiguilles d’une montre). Il dirige donc notre goutte d’eau vers la seule porte de sortie possible : le détroit de Floride. L’étroitesse de ce passage situé entre Cuba et la Floride génère un trop plein d’eau. C’est cet excédent qui donne naissance au Gulf Stream.',
      map: {
        type: 'leaflet',
        center: [10.13, -58.59],
        zoom: 4,
        layers: [
          'neTiles',
          'courant_guyane',
          'detroit_de_floride',
          'isthme_panama'
        ]
      }
    },
    {
      category: 'Introduction',
      slug: 'introduction',
      text: '## Le Gulf Stream continental\n Ça y est, notre goutte d’eau qui a eu du mal à se frayer un passage entre ses sœurs est entraînée à pleine vitesse dans le Gulf Stream. Elle vogue maintenant à la vitesse record de 2 m/s dans cette partie du Gulf Stream appelée courant de Floride. Ce véritable fleuve côtier reste collé au continent, canalisé par la pente continentale jusqu’au Cap Hatteras.',
      map: {
        type: 'leaflet',
        center: [34.99, -74.97],
        zoom: 5,
        layers: [
          'neTiles',
          'courant_guyane',
          'courant_floride',
          'cap_hatteras',
          'pente_continentale'
        ]
      }
    },
    {
      category: 'Introduction',
      slug: 'introduction',
      text: '##Le Gulf Stream océanique\nEn quittant le Cap Hatteras, notre goutte d’eau s’embarque vers le large en suivant le fleuve océanique. Elle se confronte maintenant à un univers beaucoup plus chaotique. La pente continentale n’est plus là pour canaliser son mouvement qui devient tourbillonnaire. Certains petits courants sortent du flux qui file maintenant plein est, en direction de l’Europe.',
      map: {
        type: 'leaflet',
        center: [43.19, -62.3],
        zoom: 5,
        layers: [
          'neTiles',
          'courant_guyane',
          'courant_floride',
          'cap_hatteras',
          'gulfstream'
        ]
      }
    },
    {
      category: 'Introduction',
      slug: 'introduction',
      text: '##Les Grands Bancs de Terre-Neuve\nEn arrivant aux Grands Bancs de Terre-Neuve, notre goutte d’eau observe la mort du Gulf Stream. C’est le chaos du large qui en a finalement eu raison. Le fleuve océanique a perdu les caractéristiques qui le rendait si particulier. Scientifiquement parlant, sa course s’achève vers 40°N 50°W, mais le mouvement des masses d’eau ne s’arrête pas pour autant.\n\nPlus libre, notre goutte d’eau va rapidement se retrouver confrontée à des chemins multiples.',
      map: {
        type: 'leaflet',
        center: [43.19, -50.3],
        zoom: 5,
        layers: [
          'neTiles',
          'courant_guyane',
          'courant_floride',
          'gulfstream',
          'grands_bancs_de_terre_neuve'
        ]
      }
    },
    {
      category: 'Introduction',
      slug: 'introduction',
      text: '##Le courant des Açores\nLe courant des Açores est le premier candidat qui essaye d’emporter notre goutte d’eau et une partie de ses sœurs. Il est alimenté par l’anticyclone des Açores et rejoint le courant des Antilles. En empruntant cette voie, c’est un retour à la case départ pour notre goutte d’eau qui repart pour un tour de Gulf Stream.',
      map: {
        type: 'leaflet',
        center: [31.92, -58.59],
        zoom: 5,
        layers: [
          'neTiles',
          'courant_guyane',
          'courant_floride',
          'gulfstream',
          'courant_acores'
        ]
      }
    },
    {
      category: 'Introduction',
      slug: 'introduction',
      text: '##Le courant des Canaries\nAutre possibilité, notre goutte d’eau peut être entraînée par le courant des Canaries. L’anticyclone des Açores est encore une fois le moteur du courant des Canaries. La première extension du courant des Canaries finit sa course dans le courant de Guyane. C’est donc un autre retour à la case départ. \n\nLe courant de Guinée, seconde extension du courant des Canaries, sort de l’influence de l’anticyclone des Açores et emporte notre goutte d’eau le long des côtes africaines vers l’Équateur.',
      map: {
        type: 'leaflet',
        center: [29.53, -45],
        zoom: 4,
        layers: [
          'neTiles',
          'courant_guyane',
          'courant_floride',
          'gulfstream',
          'courant_nord_atlantique',
          'courant_acores',
          'courant_canaries'
        ]
      }
    },
    {
      category: 'Introduction',
      slug: 'introduction',
      text: '##Cap sur le Groenland\nNotre goutte d’eau ne tombe pas fatalement sous l’emprise de l’anticyclone des Açores. Elle peut aussi être attirée par sa sœur nordique, la dépression d’Islande, qui tourne dans le sens inverse des aiguilles d’une montre. Encore une fois, de nombreux choix s’offrent à elle. Elle peut mettre le cap vers l’Islande et le Groenland. En suivant ce chemin et en passant par la mer du Labrador, elle pourrait de nouveau être confrontée au Gulf Stream.',
      map: {
        type: 'leaflet',
        center: [56, -34.91],
        zoom: 4,
        layers: [
          'neTiles',
          'courant_guyane',
          'courant_floride',
          'gulfstream',
          'courant_nord_atlantique',
          'courant_acores',
          'courant_canaries',
          'groenland'
        ]
      }
    },
    {
      category: 'Introduction',
      slug: 'introduction',
      text: '##La dérive Nord Atlantique\nAu delà de l’influence du vent qui créé les courants de surface, un nouveau mécanisme, la pompe thermohaline, attire notre goutte d’eau vers le nord de l’Europe. Elle essaye petit à petit de l’entraîner vers les abysses. Nous étudierons ce phénomène un peu plus tard. En suivant cette voie, notre goutte d’eau a de fortes chances de voguer vers la mer Baltique, ou de longer les côtes norvégiennes pour continuer sa course dans l’océan Arctique.',
      map: {
        type: 'leaflet',
        center: [57, -12],
        zoom: 4,
        layers: [
          'neTiles',
          'courant_guyane',
          'courant_floride',
          'gulfstream',
          'courant_nord_atlantique',
          'courant_acores',
          'courant_canaries',
          'groenland',
          'derive_nord_atlantique_1',
          'derive_nord_atlantique_2'
        ]
      }
    },
    {
      category: 'Les courants',
      slug: 'courants',
      text: '##Gulf Stream et courants Nord Atlantiques\nLe système climatique est une machine à convertir et à distribuer l’énergie que la Terre reçoit du soleil. L’énergie solaire est transportée par deux fluides : l’atmosphère et l’océan. Ces deux entités sont en contact permanent et ne cessent d’échanger de l’énergie. C’est le couple qu’ils forment qui gère le climat de notre planète.\n\nSuite à la conquète de l’Amérique, le Gulf Stream a été un courant d’intérêt pour les navigateurs. Sa puissance a significativement accéléré le retour des voiliers en Europe. Cette première carte du Gulf Stream datant de 1769 a été réalisée suite à une commande de Benjamin Franklin. Responsable de l’administration des postes, il souhaitait accélérer le retour du courrier en Grande-Bretagne.',
      map: {
        type: 'leaflet',
        maxBounds: [[-100, -180], [73, 180]],
        center: [-65, 25],
        zoom: 3,
        layers: [
          'BFranklin'
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
      legend: '#current-legend',
      // timeline: {
      //   source: 'video_current',
      //   values: [
      //     'jan', 'fév', 'mar', 'avr', 'mai', 'jun'
      //   ],
      //   context: [
      //     '2016'
      //   ]
      // }
    },
    {
      category: 'Les courants',
      slug: 'courants',
      text: '##Gulf Stream et courants Nord Atlantiques\n\nLe Gulf Stream se démarque clairement des courants Nord Atlantique. Sa vitesse et son débit restent inégalés. Jusqu’au Cap Hatteras, canalisé par la pente continentale, il est très linéaire et se comporte comme un jet puissant.\n\n Lorsqu’il prend le large, se créent des méandres de plus en plus sinueux. Observez les grands tourbillons qui se détachent de part et d’autre du fleuve.\n\n Après les Grands Bancs de Terre Neuve, le Gulf Stream perd ses caractéristiques et prend de nombreuses directions. Ses extensions sont visuellement plus difficiles à suivre car sa puissance a été répartie dans de nombreux courants.',
      map: {
        type: 'mapbox',
        sources: ['video_current']
      },
      legend: '#current-legend',
      // timeline: {
      //   source: 'video_current',
      //   values: [
      //     'jan', 'fév', 'mar', 'avr', 'mai', 'jun'
      //   ],
      //   context: [
      //     '2016'
      //   ]
      // }
    },
    {
      category: 'Les courants',
      slug: 'courants',
      text: '##Gulf Stream et courants Nord Atlantiques\n\nNous venons d’observer ce qu’il se passe en surface mais comment les courants se comportent ils en profondeurs ? En utilisant l’ascenseur à gauche de la carte, vous pouvez étudier leur comportement à différentes profondeurs. \n\n Positionnez vous par exemple à 1684m. Vous remarquerez qu’un courant de fond, opposé au Gulf Stream longe la côte américaine. La circulation des courants de profondeur est bien différente de celle de surface, influencée par l’action mécanique du vent. \n\n Pour revenir au Gulf Stream, vous vous rendrez vite compte qu’il n’est pas qu’un courant de surface. A 1000m, il a encore une grande influence. \n\n Il se distingue des autres courants de bords ouest par son débit record qui atteint les millions de mètres cube à la seconde. Pour comparaison, l’Amazone n’a qu’un débit de 300 000 mètres cube par seconde à son maximum. Le débit de tous les fleuves et rivières de la planète atteint 1 Sv (unité de mesure de débit). Le GS qui a un débit de 30 Sv au départ s’approche des 140 Sv en fin de course.',
      map: {
        type: 'leaflet',
        center: [24, -80.72],
        zoom: 5,
        layers: ['neTiles', 'depthLayer']
      },
      displayDepthSlider: true,
      legend: '#arrow-legend'
    },
    {
      category: 'Les courants',
      slug: 'courants',
      text: '##Gulf Stream et courants Nord Atlantiques\n\nPlusieurs facteurs viennent expliquer ce flux mondialement exceptionnel :\n\n - contrairement à ses homologues, le Gulf Stream bénéficie d’une double alimentation : le courant de Guyane et le courant des Antilles.\n\n - depuis 15 millions d’années l’Isthme de Panama est fermé, empêchant le courant de Guyane de se déverser dans le Pacifique. Le Golfe du Mexique représente un cul de sac pour le courant de Guyane qui n’a qu’une sortie possible : le détroit de Floride. Cet apport est renforcé par le courant des Antilles qui est emporté dans le courant de Floride.\n\n - la circulation thermohaline crée un appel d’eau qui n’a pas son équivalent ailleurs. Nous étudierons ce phénomène un peu plus tard.',
      map: {
        type: 'mapbox',
        sources: ['video_current']
      },
      legend: '#current-legend',
      // timeline: {
      //   source: 'video_current',
      //   values: [
      //     'jan', 'fév', 'mar', 'avr', 'mai', 'jun'
      //   ],
      //   context: [
      //     '2016'
      //   ]
      // }
    },
    {
      category: 'Les courants',
      slug: 'courants',
      text: '##Gulf Stream et niveau de l’Océan\n\nL’apport en eau est tellement conséquent dans le Gulf Stream que le niveau de la mer est près de 50 cm au-dessus du niveau 0.',
      map: {
        type: 'leaflet',
        center: [40, -40],
        zoom: 4,
        maxBounds: [[0, -100], [85, 20]],
        layers: ['neTiles', 'ssh']
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
      // timeline: {
      //   source: 'video_temp',
      //   values: [
      //     'jun', 'jul', 'aoû', 'sep', 'oct', 'nov', 'déc', 'jan', 'fév', 'mar', 'avr', 'mai'
      //   ],
      //   context: [
      //     '2015', '2016'
      //   ]
      // }
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
      // timeline: {
      //   source: 'video_temp',
      //   values: [
      //     'jun', 'jul', 'aoû', 'sep', 'oct', 'nov', 'déc', 'jan', 'fév', 'mar', 'avr', 'mai'
      //   ],
      //   context: [
      //     '2015', '2016'
      //   ]
      // }
    },
    {
      category: 'Les températures',
      slug: 'temperatures',
      text: '##Température\n\nContrairement à l’atmosphère qui utilise très rapidement l’énergie qu’on lui met à disposition, l’océan a une grande mémoire. L’été, le rayonnement solaire intense échauffe les couches de surface. Il y a création d’un thermocline qui stratifie les eaux océaniques. L’océan stocke alors l’énergie thermique issue du rayonnement solaire d’été dans ses couches profondes.\n\nSur le graphique ci-dessous vous pouvez observer la thermocline saisonnière. Il s’agit de la zone de chute de température entre les couches de surface et les couches profondes. Si cette thermocline est importante, c’est à dire comprend une grande gamme de températures, les eaux de surface et les eaux profondes sont bien stratifiées et ne se mélangent pas.',
      map: {
        type: 'mapbox',
        sources: ['video_temp'],
          // markers: ['temperature_sampling'],
        setCenter: [-10, 40]
      },
      displayThermocline: true,
      legend: '#temperature-legend',
      // timeline: {
      //   source: 'video_temp',
      //   values: [
      //     'jun', 'jul', 'aoû', 'sep', 'oct', 'nov', 'déc', 'jan', 'fév', 'mar', 'avr', 'mai'
      //   ],
      //   context: [
      //     '2015', '2016'
      //   ]
      // }
    },
    {
      category: 'Les températures',
      slug: 'temperatures',
      text: '##Température\n\nObservez sur le graphique l’évolution du thermocline en fonction des mois. En partant d’août 2015 vous remarquerez qu’au fil des mois, la thermocline est de plus en plus petite jusqu’à sa rupture au mois de mars 2016.\n\nEn hivers le rayonnement solaire est beaucoup plus faible et les vents d’ouest se renforcent. Il y a rupture du thermocline qui remet à disposition des couches de surface le stock d’été. L’océan transmet cette énergie à l’atmosphère. Les vents d’ouest la récupèrent et l’emportent en direction de l’Europe. L’ouest de ce continent sera le seul bénéficiaire de la mémoire calorifique estivale de l’océan Atlantique.',
      map: {
        type: 'mapbox',
        sources: ['video_temp'],
          // markers: ['temperature_sampling'],
        setCenter: [-20, 40]
      },
      displayThermocline: true,
      legend: '#temperature-legend',
      // timeline: {
      //   source: 'video_temp',
      //   values: [
      //     'jun', 'jul', 'aoû', 'sep', 'oct', 'nov', 'déc', 'jan', 'fév', 'mar', 'avr', 'mai'
      //   ],
      //   context: [
      //     '2015', '2016'
      //   ]
      // }
    },
    {
      category: 'Les températures',
      slug: 'temperatures',
      text: '##Température\n\nCe phénomène semble aujourd’hui expliquer en grande partie la différence de climat entre les côtes est et ouest de l’Atlantique. Sur l’année, on note une différence moyenne de 15°C entre ces deux côtes. C’est ce qui explique un climat maritime (tempéré) en Europe de l’ouest et aux mêmes latitudes sur le sol américain un climat continental (froid).\n\nLe Gulf Stream a tout de même un impact sur notre climat. Les scientifiques estiment aujourd’hui que sans lui, l’Europe de l’Ouest se rafraîchirait de 4 ou 5°C.',
      map: {
        type: 'mapbox',
        sources: ['video_temp']
      },
      legend: '#temperature-legend',
      // timeline: {
      //   source: 'video_temp',
      //   values: [
      //     'jun', 'jul', 'aoû', 'sep', 'oct', 'nov', 'déc', 'jan', 'fév', 'mar', 'avr', 'mai'
      //   ],
      //   context: [
      //     '2015', '2016'
      //   ]
      // }
    },
    {
      category: 'Les vents',
      slug: 'vents',
      text: '##L’influence du vent\n\nUn principe simple de thermodynamique nous enseigne qu’entre deux corps en contact, c’est le corps chaud qui cède son énergie au corps froid jusqu’à l’équilibre.\n\nLe couple océan/atmosphère transporte et distribue l’énergie du soleil de la source chaude à la source froide. Par évaporation, les zones océaniques équatoriales (source chaude) alimentent l’atmosphère en chaleur, créant des vents qui se dirigent vers les régions polaires (source froide).\n\nDifférents phénomènes naturels, dont la rotation de la Terre, empêchent ce transfert de se faire en ligne droite. Les vents et les courants suivent la direction de l’anticyclone des Açores (sens des aiguilles d’une montre) au sud du Gulf Stream. Au nord de ce courants, ils sont emportés par la dépression d’Islande (sens inverse des aiguilles d’une montre). L’influence de cette dernière est clairement visible sur cette carte.',
      map: {
        type: 'mapbox',
        sources: ['video_wind']
      },
      legend: '#wind-legend',
      // timeline: {
      //   source: 'video_wind',
      //   values: [
      //     'mar', 'avr', 'mai', 'jun'
      //   ],
      //   context: [
      //     '2016'
      //   ]
      // }
    },
    {
      category: 'Les vents',
      slug: 'vents',
      text: '##Les vents\n\nEn observant la direction des vents vous vous rendrez compte de l’existance d’un courant d’air soufflant d’ouest en est. C’est ce couloir qui récupère et dirige l’énergie d’été stockée par l’océan vers l’Europe.\n\nObservez maintenant le vent à la sortie du détroit de Floride. Son comportement suit assez bien la forme du Gulf Stream.',
      map: {
        type: 'mapbox',
        sources: ['video_wind']
      },
      legend: '#wind-legend',
      // timeline: {
      //   source: 'video_wind',
      //   values: [
      //     'mar', 'avr', 'mai', 'jun'
      //   ],
      //   context: [
      //     '2016'
      //   ]
      // }
    },
    {
      category: 'Les vents',
      slug: 'vents',
      text: '##Les vents\n\nL’équateur est la ligne imaginaire qui représente le plus grand diamètre de la Terre. L’air qui en provient et qui se dirige vers les pôles se retrouve sur des diamètres de plus en plus petits.\n\nConséquence, sa vitesse de rotation augmente. Aux alentours des latitudes 30°, sa vitesse est tellement grande qu’au lieu de continuer vers le nord, il se retrouve entraîné dans un couloir de vent orienté est-ouest.\n\nC’est ce couloir de vents violents que nous observons sur cette carte.',
      map: {
        type: 'mapbox',
        sources: ['video_wind']
      },
      legend: '#wind-legend',
      // timeline: {
      //   source: 'video_wind',
      //   values: [
      //     'mar', 'avr', 'mai', 'jun'
      //   ],
      //   context: [
      //     '2016'
      //   ]
      // }
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
      // timeline: {
      //   source: 'video_salinity',
      //   values: [
      //     'jun', 'jul', 'aoû', 'sep', 'oct', 'nov', 'déc', 'jan', 'fév', 'mar', 'avr', 'mai'
      //   ],
      //   context: [
      //     '2015',
      //     '2016'
      //   ]
      // }
    },
    {
      category: 'La salinité',
      slug: 'salinite',
      text: '##Salinité\n\nEn arrivant aux hautes latitudes, la température chute. Les eaux emportées par les extensions du Gulf Stream deviennent froides et salées.\n\n Plus une eau est froide, plus elle est dense. Plus elle est salée, plus elle est dense. Les eaux issues du Gulf Stream sont plus salées que les eaux qu’il rencontre. Ce taux de sel est renforcé l’hiver par la création de glace.\n\n En se refroidissant durant leur voyage vers les hautes latitudes, elles finissent par devenir trop denses pour se maintenir à la surface et plongent jusqu’à des profondeurs supérieures au kilomètre. Elles s’écoulent lentement dans un courant de fond en direction de l’équateur.\n\nLe courant de retour que nous avions observé à 1684m peut être affilié à cette circulation. Il finira par se réchauffer pour refaire surface, permettant un échange entre les eaux de surface et les eaux profondes.',
      map: {
        type: 'mapbox',
        sources: ['video_salinity']
      },
      legend: '#salinity-legend',
      // timeline: {
      //   source: 'video_salinity',
      //   values: [
      //     'jun', 'jul', 'aoû', 'sep', 'oct', 'nov', 'déc', 'jan', 'fév', 'mar', 'avr', 'mai'
      //   ],
      //   context: [
      //     '2015',
      //     '2016'
      //   ]
      // }
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
          'neTiles',
          'thermohaline_cold',
          'thermohaline_hot'
        ]
      }
    },
    {
      category: 'Conclusion',
      slug: 'conclusion',
      text: '##Conclusion\n\nMême si le Gulf Stream n’est plus considéré comme la chaudière de l’Europe. Même si les voiliers ne l’empruntent plus pour envoyer le courrier du nouveau monde vers le vieux continent. Même si nous ne devons pas craindre son arrêt brutal et le refroidissement drastique de l’Europe, il n’en reste pas moins un courant remarquable.\n\nLes scientifiques estiment aujourd’hui que sans lui, l’Europe de l’Ouest se rafraîchirait de 4 ou 5°C. Il est un des moteurs de la plupart des grands courants d’Atlantique Nord. Il a une influence en surface mais aussi en profondeur en jouant un rôle déterminant sur la circulation thermohaline. Sa vitesse et son débit en font le fleuve océanique le plus puissant au monde. La climatologie étant un domaine extrêmement complexe, les scientifiques ne sont pas prêt de percer tout ses mystères.\n\nEn conclusion, ce courant majestueux n’a pas fini de faire parler de lui.',
      art: 'Summer Squall - Winslow Homer, 1904, peinture à l’huile',
      map: {
        type: 'leaflet',
        center: [30, 60],
        zoom: 3,
        layers: ['Summer_Squall'],
        maxBounds: [[-100, -180], [70, 180]]
      }
    },
    {
      category: 'credits',
      slug: 'credits',
      text: '##Crédits\n\nCette application a été conçue à partir de données Marine Copernicus. Copernicus est le programme européen d’observation et de surveillance de la Terre. Copernicus Marine Environment Monitoring Service (CMEMS) a pour mission de fournir un accès libre et gratuit à une information scientifiquement qualifiée et régulière sur l’état physique et biogéochimique de tous les océans du globe, en surface comme en profondeur.\n\nCette application est le résultat d’un stage de géomatique réalisé par Mathias Broutin et supervisé par Frédéric Bonifas au sein de Makina Corpus. Société de services en ingénierie logicielle, Makina Corpus développe des applications innovantes open source. La société s’est spécialisée dans le développement d’applications métiers web et mobiles, les portails complexes, le traitement d’informations spatiales et la cartographie interactive.\n\n[![Copernicus](data/images/copernicus.jpg)](http://marine.copernicus.eu/)[![Makina Corpus](data/images/makina_corpus.png)](http://makina-corpus.com)',
      map: {
        type: 'leaflet',
        center: [30, 60],
        zoom: 3,
        layers: ['Summer_Squall'],
        maxBounds: [[-100, -180], [70, 180]]
      }
    }
  ];
}(window));
