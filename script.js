// CONSTANTES
const kantoLinks = {
    "Bourg Palette": "https://master-poke.forumactif.fr/f93-bourg-palette",
    "Routes 1 & 2": "https://master-poke.forumactif.fr/f105-routes-1-2",
    "Jadielle": "https://master-poke.forumactif.fr/f94-jadielle",
    "Routes 22": "https://master-poke.forumactif.fr/f107-route-22",
    "Foret de Jade": "https://master-poke.forumactif.fr/f108-foret-de-jade",
    "Argenta": "https://master-poke.forumactif.fr/f95-argenta",
    "Routes 3 & 4": "https://master-poke.forumactif.fr/f109-routes-3-4",
    "Mont Selenite": "https://master-poke.forumactif.fr/f110-mont-selenite",
    "Azuria": "https://master-poke.forumactif.fr/f96-azuria",
    "Routes 24 & 25": "https://master-poke.forumactif.fr/f112-routes-24-25",
    "Routes 5 & 6": "https://master-poke.forumactif.fr/f115-routes-5-6",
    "Caverne Azuree": "https://master-poke.forumactif.fr/f117-caverne-azuree",
    "Carmin-sur-mer": "https://master-poke.forumactif.fr/f97-carmin-sur-mer",
    "Cave Taupiqueur": "https://master-poke.forumactif.fr/f118-cave-taupiqueur",
    "Route 9": "https://master-poke.forumactif.fr/f120-route-9",
    "La Centrale": "https://master-poke.forumactif.fr/f121-la-centrale",
    "Grotte Sombre": "https://master-poke.forumactif.fr/f122-grotte-sombre",
    "Route 10": "https://master-poke.forumactif.fr/f123-route-10",
    "Lavanville": "https://master-poke.forumactif.fr/f98-lavanville",
    "Tour Pokemon": "https://master-poke.forumactif.fr/f124-tour-pokemon",
    "Routes 7 & 8": "https://master-poke.forumactif.fr/f125-routes-7-8",
    "Celadopole": "https://master-poke.forumactif.fr/f99-celadopole",
    "Safrania": "https://master-poke.forumactif.fr/f100-safrania",
    "Routes 11 & 12": "https://master-poke.forumactif.fr/f129-routes-11-12",
    "Routes 13 & 15": "https://master-poke.forumactif.fr/f131-routes-13-15",
    "Routes 16 & 18": "https://master-poke.forumactif.fr/f132-routes-16-18",
    "Parmanie": "https://master-poke.forumactif.fr/f101-parmanie",
    "Parc Safari": "https://master-poke.forumactif.fr/f136-parc-safari",
    "Chenaux 19 & 20": "https://master-poke.forumactif.fr/f137-chenaux-19-20",
    "Iles Ecume": "https://master-poke.forumactif.fr/f138-iles-ecume",
    "Cramois'ile": "https://master-poke.forumactif.fr/f102-cramois-ile",
    "Chenal 21": "https://master-poke.forumactif.fr/f140-chenal-21",
    "Manoir": "https://master-poke.forumactif.fr/f143-manoir",
    "Route Victoire": "https://master-poke.forumactif.fr/f103-route-victoire",
    "Route 23": "https://master-poke.forumactif.fr/f113-route-23"
};

const johtoLinks = {
    "Bourg Geon": "https://master-poke.forumactif.fr/f144-bourg-geon",
    "Route 29": "https://master-poke.forumactif.fr/f145-route-29",
    "Ville Griotte": "https://master-poke.forumactif.fr/f146-ville-griotte",
    "Route 30": "https://master-poke.forumactif.fr/f147-route-30",
    "Antre Noir": "https://master-poke.forumactif.fr/f148-antre-noir",
    "Route 31": "https://master-poke.forumactif.fr/f149-route-31",
    "Mauville": "https://master-poke.forumactif.fr/f150-mauville",
    "Tour Chetiflor": "https://master-poke.forumactif.fr/f160-tour-chetiflor",
    "Routes 32 & 33": "https://master-poke.forumactif.fr/f111-routes-32-33",
    "Ruines d'Alpha": "https://master-poke.forumactif.fr/f162-ruines-d-alpha",
    "Caves Jumelles": "https://master-poke.forumactif.fr/f163-caves-jumelles",
    "Ecorcia": "https://master-poke.forumactif.fr/f151-ecorcia",
    "Puits Ramoloss": "https://master-poke.forumactif.fr/f165-puits-ramoloss",
    "Bois aux Chenes": "https://master-poke.forumactif.fr/f166-bois-aux-chenes",
    "Routes 34 & 35": "https://master-poke.forumactif.fr/f167-routes-34-35",
    "Doublonville": "https://master-poke.forumactif.fr/f152-doublonville",
    "Parc naturel": "https://master-poke.forumactif.fr/f169-parc-naturel",
    "Routes 36 & 37": "https://master-poke.forumactif.fr/f170-routes-36-37",
    "Rosalia": "https://master-poke.forumactif.fr/f153-rosalia",
    "Tour Cendree": "https://master-poke.forumactif.fr/f173-tour-cendree",
    "Tour Carillon": "https://master-poke.forumactif.fr/f174-tour-carillon",
    "Routes 38 & 39": "https://master-poke.forumactif.fr/f175-routes-38-39",
    "Oliville": "https://master-poke.forumactif.fr/f154-oliville",
    "Chenaux 40 & 41": "https://master-poke.forumactif.fr/f179-chenaux-40-41",
    "Tourb'iles": "https://master-poke.forumactif.fr/f180-tourb-iles",
    "Irisia": "https://master-poke.forumactif.fr/f155-irisia",
    "Parc Safari": "https://master-poke.forumactif.fr/f114-parc-safari",
    "Route 42": "https://master-poke.forumactif.fr/f181-route-42",
    "Mont Creuset": "https://master-poke.forumactif.fr/f182-mont-creuset",
    "Route 47": "https://master-poke.forumactif.fr/f183-route-47",
    "Route 48": "https://master-poke.forumactif.fr/f184-route-48",
    "Acajou": "https://master-poke.forumactif.fr/f156-acajou",
    "Routes 43 & 44": "https://master-poke.forumactif.fr/f185-routes-43-44",
    "Lac Colere": "https://master-poke.forumactif.fr/f186-lac-colere",
    "Route de Glace": "https://master-poke.forumactif.fr/f188-route-de-glace",
    "Ebenelle": "https://master-poke.forumactif.fr/f157-ebenelle",
    "Routes 45 & 46": "https://master-poke.forumactif.fr/f189-routes-45-46",
    "Grotte Argentee": "https://master-poke.forumactif.fr/f191-grotte-argentee",
    "QG Ligue / Stade": "https://master-poke.forumactif.fr/f193-stade",
};

const hoennLinks = {
    "Bourg en Vol": "https://master-poke.forumactif.fr/f205-bourg-en-vol",
    "Route 101": "https://master-poke.forumactif.fr/f206-route-101",
    "Rosyeres": "https://master-poke.forumactif.fr/f207-rosyeres",
    "Route 102": "https://master-poke.forumactif.fr/f208-route-102",
    "Route 103": "https://master-poke.forumactif.fr/f209-route-103",
    "Clementi-Ville": "https://master-poke.forumactif.fr/f210-clementi-ville",
    "Route 104": "https://master-poke.forumactif.fr/f211-route-104",
    "Bois de Clementi": "https://master-poke.forumactif.fr/f212-bois-de-clementi",
    "Merouville": "https://master-poke.forumactif.fr/f213-merouville",
    "Route 116": "https://master-poke.forumactif.fr/f214-route-116",
    "Chenal 105": "https://master-poke.forumactif.fr/f215-chenal-105",
    "Village Myokara": "https://master-poke.forumactif.fr/f216-village-myokara",
    "Grotte Granite": "https://master-poke.forumactif.fr/f217-grotte-granite",
    "Poivressel": "https://master-poke.forumactif.fr/f218-poivressel",
    "Chenal 109": "https://master-poke.forumactif.fr/f220-chenal-109",
    "Route 110": "https://master-poke.forumactif.fr/f221-route-110",
    "Lavandia": "https://master-poke.forumactif.fr/f223-lavandia",
    "Route 117": "https://master-poke.forumactif.fr/f224-route-117",
    "New Lavandia": "https://master-poke.forumactif.fr/f225-new-lavandia",
    "Vergazon": "https://master-poke.forumactif.fr/f227-vergazon",
    "Route 111": "https://master-poke.forumactif.fr/f228-route-111",
    "Route 112": "https://master-poke.forumactif.fr/f229-route-112",
    "Vermilava": "https://master-poke.forumactif.fr/f231-vermilava",
    "Route 113": "https://master-poke.forumactif.fr/f232-route-113",
    "Mont Chimnee": "https://master-poke.forumactif.fr/f233-mont-chimnee",
    "Autequia": "https://master-poke.forumactif.fr/f230-autequia",
    "Routes 114 & 115": "https://master-poke.forumactif.fr/f235-routes-114-115",
    "Route 118": "https://master-poke.forumactif.fr/f237-route-118",
    "Route 119": "https://master-poke.forumactif.fr/f238-route-119",
    "Site Meteores": "https://master-poke.forumactif.fr/f239-site-meteores",
    "Cimetronelle": "https://master-poke.forumactif.fr/f240-cimetronelle",
    "Route 120": "https://master-poke.forumactif.fr/f241-route-120",
    "Route 121": "https://master-poke.forumactif.fr/f242-route-121",
    "Nenucrique": "https://master-poke.forumactif.fr/f244-nenucrique",
    "Chenal 124": "https://master-poke.forumactif.fr/f245-chenal-124",
    "Mont Memoria": "https://master-poke.forumactif.fr/f246-mont-memoria",
    "Parc Safari": "https://master-poke.forumactif.fr/f247-parc-safari",
    "Atalanopolis": "https://master-poke.forumactif.fr/f249-atalanopolis",
    "Chenal 128": "https://master-poke.forumactif.fr/f252-chenal-128",
    "Algatia": "https://master-poke.forumactif.fr/f251-algatia",
    "Grotte Trefonds": "https://master-poke.forumactif.fr/f250-grotte-trefonds",
    "Pacifiville": "https://master-poke.forumactif.fr/f253-pacifiville",
    "Chenaux 129 & 132": "https://master-poke.forumactif.fr/f254-chenaux-129-132",
    "Pilier Celeste": "https://master-poke.forumactif.fr/f256-pilier-celeste",
    "Eternara": "https://master-poke.forumactif.fr/f257-eternara",
    "Route Victoire": "https://master-poke.forumactif.fr/f258-route-victoire"
};

const sinnohLinks = {
    "Bonaugure": "https://master-poke.forumactif.fr/f260-bonaugure",
    "Lac Verite": "https://master-poke.forumactif.fr/f262-lac-verite",
    "Littorella": "https://master-poke.forumactif.fr/f263-littorella",
    "Routes 201 & 202": "https://master-poke.forumactif.fr/f264-routes-201-202",
    "Feli-Cite": "https://master-poke.forumactif.fr/f265-feli-cite",
    "Route 203": "https://master-poke.forumactif.fr/f266-route-203",
    "Charbourg": "https://master-poke.forumactif.fr/f267-charbourg",
    "Routes 206 & 207": "https://master-poke.forumactif.fr/f276-routes-206-207",
    "Mont Couronne": "https://master-poke.forumactif.fr/f315-mont-couronne",
    "Colonnes Lances": "https://master-poke.forumactif.fr/f399-colonnes-lances",
    "Floraville": "https://master-poke.forumactif.fr/f270-floraville",
    "Route 204": "https://master-poke.forumactif.fr/f268-route-204",
    "Forge Fuego": "https://master-poke.forumactif.fr/f273-forge-fuego",
    "Vestigion": "https://master-poke.forumactif.fr/f275-vestigion",
    "Route 205": "https://master-poke.forumactif.fr/f271-route-205",
    "Foret de Vestigion": "https://master-poke.forumactif.fr/f272-foret-de-vestigion",
    "Grotte Reveche": "https://master-poke.forumactif.fr/f278-grotte-reveche",
    "Unionpolis": "https://master-poke.forumactif.fr/f293-unionpolis",
    "Route 209": "https://master-poke.forumactif.fr/f294-route-209",
    "Route 212": "https://master-poke.forumactif.fr/f53-route-212",
    "Bonville": "https://master-poke.forumactif.fr/f295-bonville",
    "Route 210": "https://master-poke.forumactif.fr/f296-route-210",
    "Route 215": "https://master-poke.forumactif.fr/f297-route-215",
    "Celestia": "https://master-poke.forumactif.fr/f298-celestia",
    "Route 211": "https://master-poke.forumactif.fr/f299-route-211",
    "Voilaroc": "https://master-poke.forumactif.fr/f300-voilaroc",
    "Route 214": "https://master-poke.forumactif.fr/f301-route-214",
    "Grotte Retour": "https://master-poke.forumactif.fr/f303-grotte-retour",
    "Verchamps": "https://master-poke.forumactif.fr/f305-verchamps",
    "Route 213": "https://master-poke.forumactif.fr/f302-route-213",
    "Grand Marais": "https://master-poke.forumactif.fr/f307-grand-marais",
    "Lac Courage": "https://master-poke.forumactif.fr/f308-lac-courage",
    "Joliberges": "https://master-poke.forumactif.fr/f309-joliberges",
    "Route 218": "https://master-poke.forumactif.fr/f306-route-218",
    "Frimapic": "https://master-poke.forumactif.fr/f314-frimapic",
    "Lac Savoir": "https://master-poke.forumactif.fr/f312-lac-savoir",
    "Routes 216 & 217": "https://master-poke.forumactif.fr/f310-routes-216-217",
    "Temple Frimapic": "https://master-poke.forumactif.fr/f317-temple-frimapic",
    "Rivamar": "https://master-poke.forumactif.fr/f318-rivamar",
    "Route 222": "https://master-poke.forumactif.fr/f316-route-222",
    "Chenal 223": "https://master-poke.forumactif.fr/f319-chenal-223",
    "Route Victoire": "https://master-poke.forumactif.fr/f320-route-victoire",
    "Les iles Legendaires": "https://master-poke.forumactif.fr/f321-les-iles-legendaires",
    "Mont Abrupt": "https://master-poke.forumactif.fr/f322-mont-abrupt",
    "Ile Pleine Lune": "https://master-poke.forumactif.fr/f323-ile-pleine-lune",
    "Ile Nouvelle Lune": "https://master-poke.forumactif.fr/f324-ile-nouvelle-lune",
    "QG Elite / Dome": "https://master-poke.forumactif.fr/f329-dome"
};

const unysLinks = {
    "Renouet": "https://master-poke.forumactif.fr/f333-renouet",
    "Route 1": "https://master-poke.forumactif.fr/f334-route-1",
    "Route 18": "https://master-poke.forumactif.fr/f336-route-18",
    "Pavonnay": "https://master-poke.forumactif.fr/f335-pavonnay",
    "Chenal 17": "https://master-poke.forumactif.fr/f337-chenal-17",
    "Arabelle": "https://master-poke.forumactif.fr/f338-arabelle",
    "Route 2": "https://master-poke.forumactif.fr/f339-route-2",
    "Amaillide": "https://master-poke.forumactif.fr/f340-amaillide",
    "Ranch d'Amaillide": "https://master-poke.forumactif.fr/f342-ranch-d-amaillide",
    "Ogoesse": "https://master-poke.forumactif.fr/f343-ogoesse",
    "Route 3": "https://master-poke.forumactif.fr/f344-route-3",
    "Vestiges du Reve": "https://master-poke.forumactif.fr/f345-vestiges-du-reve",
    "Veine Souterraine": "https://master-poke.forumactif.fr/f346-veine-souterraine",
    "Maillard": "https://master-poke.forumactif.fr/f347-maillard",
    "La Foret d'Empoigne": "https://master-poke.forumactif.fr/f348-la-foret-d-empoigne",
    "Ondes-Sur-Mer": "https://master-poke.forumactif.fr/f349-ondes-sur-mer",
    "Routes 19 & 20": "https://master-poke.forumactif.fr/f350-routes-19-20",
    "Volucite": "https://master-poke.forumactif.fr/f351-volucite",
    "Route 4": "https://master-poke.forumactif.fr/f352-route-4",
    "Desert Delassant": "https://master-poke.forumactif.fr/f353-desert-delassant",
    "Meanville": "https://master-poke.forumactif.fr/f355-meanville",
    "Routes 5 & 16": "https://master-poke.forumactif.fr/f356-routes-5-16",
    "Pont Yoneuve": "https://master-poke.forumactif.fr/f358-pont-yoneuve",
    "Port Yoneuve": "https://master-poke.forumactif.fr/f359-port-yoneuve",
    "Route 6": "https://master-poke.forumactif.fr/f360-route-6",
    "Grotte Electrolithe": "https://master-poke.forumactif.fr/f361-grotte-electrolithe",
    "Grotte Parsemille": "https://master-poke.forumactif.fr/f362-grotte-parsemille",
    "Parsemille": "https://master-poke.forumactif.fr/f363-parsemille",
    "Parc Safari": "https://master-poke.forumactif.fr/f177-parc-safari",
    "Route 7": "https://master-poke.forumactif.fr/f364-route-7",
    "Tour des Cieux": "https://master-poke.forumactif.fr/f365-tour-des-cieux",
    "Mont Fore": "https://master-poke.forumactif.fr/f366-mont-fore",
    "Flocombe": "https://master-poke.forumactif.fr/f367-flocombe",
    "Route 8": "https://master-poke.forumactif.fr/f368-route-8",
    "Tour Dragospire": "https://master-poke.forumactif.fr/f369-tour-dragospire",
    "Tourbiere Flocombe": "https://master-poke.forumactif.fr/f370-tourbiere-flocombe",
    "Route 9": "https://master-poke.forumactif.fr/f371-route-9",
    "Antre d'Entrainement": "https://master-poke.forumactif.fr/f372-antre-d-entrainement",
    "Janusia": "https://master-poke.forumactif.fr/f373-janusia",
    "Route 10": "https://master-poke.forumactif.fr/f374-route-10",
    "Route 11": "https://master-poke.forumactif.fr/f375-route-11",
    "Pont du Hameau": "https://master-poke.forumactif.fr/f376-pont-du-hameau",
    "Route 12": "https://master-poke.forumactif.fr/f377-route-12",
    "Route Victoire": "https://master-poke.forumactif.fr/f378-route-victoire",
    "Papeloa": "https://master-poke.forumactif.fr/f379-papeloa",
    "Route 21": "https://master-poke.forumactif.fr/f380-route-21",
    "Route 22": "https://master-poke.forumactif.fr/f381-route-22",
    "Entrelasque": "https://master-poke.forumactif.fr/f382-entrelasque",
    "Grotte Cyclopeenne": "https://master-poke.forumactif.fr/f383-grotte-cyclopeenne",
    "Route 13": "https://master-poke.forumactif.fr/f384-route-13",
    "Vaguelone": "https://master-poke.forumactif.fr/f385-vaguelone",
    "Routes 14 & 15": "https://master-poke.forumactif.fr/f387-routes-14-15",
    "Foret Blanche": "https://master-poke.forumactif.fr/f282-foret-blanche",
    "Ville Noire": "https://master-poke.forumactif.fr/f65-ville-noire",
    "Autel Abondance": "https://master-poke.forumactif.fr/f389-autel-abondance",
    "Arpentieres": "https://master-poke.forumactif.fr/f390-arpentieres",
    "Mont Renenvers": "https://master-poke.forumactif.fr/f391-mont-renenvers",
    "Institut Myrtille": "https://master-poke.forumactif.fr/f585-institut-myrtille",
    "Biome Savane": "https://master-poke.forumactif.fr/f586-biome-savane",
    "Biome Canyon": "https://master-poke.forumactif.fr/f587-biome-canyon",
    "Biome Cotier": "https://master-poke.forumactif.fr/f588-biome-cotier",
    "Biome Polaire": "https://master-poke.forumactif.fr/f589-biome-polaire"
};

const kalosLinks = {
    "Bourg Croquis": "https://master-poke.forumactif.fr/f410-bourg-croquis",
    "Routes 1 & 2 & 3": "https://master-poke.forumactif.fr/f411-routes-1-2-3",
    "Quarellis": "https://master-poke.forumactif.fr/f412-quarellis",
    "Foret de Neuvartault": "https://master-poke.forumactif.fr/f414-foret-de-neuvartault",
    "Neuvartault": "https://master-poke.forumactif.fr/f416-neuvartault",
    "Route 22": "https://master-poke.forumactif.fr/f432-route-22",
    "Chambre Neant": "https://master-poke.forumactif.fr/f433-chambre-neant",
    "Route 4": "https://master-poke.forumactif.fr/f434-route-4",
    "Illumis": "https://master-poke.forumactif.fr/f417-illumis",
    "Route 5": "https://master-poke.forumactif.fr/f435-route-5",
    "Fort-Vanitas": "https://master-poke.forumactif.fr/f418-fort-vanitas",
    "Routes 6 & 7": "https://master-poke.forumactif.fr/f436-routes-6-7",
    "Palais Chaydeuvre": "https://master-poke.forumactif.fr/f438-palais-chaydeuvre",
    "Cave Connecterre": "https://master-poke.forumactif.fr/f439-cave-connecterre",
    "Route 8": "https://master-poke.forumactif.fr/f440-route-8",
    "Roche-sur-Gliffe": "https://master-poke.forumactif.fr/f419-roche-sur-gliffe",
    "Route 9": "https://master-poke.forumactif.fr/f441-route-9",
    "Grotte Etincelante": "https://master-poke.forumactif.fr/f442-grotte-etincelante",
    "Relifac-Le-Haut": "https://master-poke.forumactif.fr/f420-relifac-le-haut",
    "Route 10": "https://master-poke.forumactif.fr/f443-route-10",
    "Cromlac'h": "https://master-poke.forumactif.fr/f421-cromlac-h",
    "Route 11": "https://master-poke.forumactif.fr/f444-route-11",
    "Grotte Miroitante": "https://master-poke.forumactif.fr/f445-grotte-miroitante",
    "Yantreizh": "https://master-poke.forumactif.fr/f422-yantreizh",
    "Route 12": "https://master-poke.forumactif.fr/f446-route-12",
    "Port Temperes": "https://master-poke.forumactif.fr/f423-port-temperes",
    "Baie Azur": "https://master-poke.forumactif.fr/f447-baie-azur",
    "Antre Nereen": "https://master-poke.forumactif.fr/f448-antre-nereen",
    "Route 13": "https://master-poke.forumactif.fr/f449-route-13",
    "Romant-sous-Bois": "https://master-poke.forumactif.fr/f424-romant-sous-bois",
    "Route 14": "https://master-poke.forumactif.fr/f450-route-14",
    "Routes 15 & 16": "https://master-poke.forumactif.fr/f451-routes-15-16",
    "Hotel Desolation": "https://master-poke.forumactif.fr/f452-hotel-desolation",
    "La Frescale": "https://master-poke.forumactif.fr/f425-la-frescale",
    "Caverne Gelee": "https://master-poke.forumactif.fr/f454-caverne-gelee",
    "Route 17": "https://master-poke.forumactif.fr/f455-route-17",
    "Flusselles": "https://master-poke.forumactif.fr/f426-flusselles",
    "Route 18": "https://master-poke.forumactif.fr/f456-route-18",
    "Grotte Coda": "https://master-poke.forumactif.fr/f457-grotte-coda",
    "Mozheim": "https://master-poke.forumactif.fr/f427-mozheim",
    "Routes 19 & 20": "https://master-poke.forumactif.fr/f458-routes-19-20",
    "Auffrac-les-Congeres": "https://master-poke.forumactif.fr/f428-auffrac-les-congeres",
    "Village Pokemon": "https://master-poke.forumactif.fr/f460-village-pokemon",
    "Route 21": "https://master-poke.forumactif.fr/f461-route-21",
    "Route Victoire": "https://master-poke.forumactif.fr/f429-route-victoire",
    "Batisques": "https://master-poke.forumactif.fr/f468-batisques",
    "Parc Safari": "https://master-poke.forumactif.fr/f466-parc-safari"
};

const alolaLinks = {
    "Lili'i": "https://master-poke.forumactif.fr/f469-lili-i",
    "Route 1": "https://master-poke.forumactif.fr/f490-route-1",
    "Colline Dicarat": "https://master-poke.forumactif.fr/f491-colline-dicarat",
    "Sentier de Mahalo": "https://master-poke.forumactif.fr/f492-sentier-de-mahalo",
    "Ekaeka": "https://master-poke.forumactif.fr/f470-ekaeka",
    "Route 2": "https://master-poke.forumactif.fr/f493-route-2",
    "Cimetiere": "https://master-poke.forumactif.fr/f494-cimetiere",
    "Grotte Verdoyante": "https://master-poke.forumactif.fr/f495-grotte-verdoyante",
    "Jardin de Mele-Mele": "https://master-poke.forumactif.fr/f496-jardin-de-mele-mele",
    "Baie de Kala'e": "https://master-poke.forumactif.fr/f497-baie-de-kala-e",
    "Route 3": "https://master-poke.forumactif.fr/f499-route-3",
    "Ho'ohale": "https://master-poke.forumactif.fr/f481-ho-ohale",
    "Routes 4 & 5": "https://master-poke.forumactif.fr/f500-routes-4-5",
    "Tunnel Taupiqueur": "https://master-poke.forumactif.fr/f502-tunnel-taupiqueur",
    "Plage Hano-Hano": "https://master-poke.forumactif.fr/f506-plage-hano-hano",
    "Ohana": "https://master-poke.forumactif.fr/f482-ohana",
    "Ranch Ohana": "https://master-poke.forumactif.fr/f508-ranch-ohana",
    "Colline Clapotis": "https://master-poke.forumactif.fr/f509-colline-clapotis",
    "Routes 6 & 7": "https://master-poke.forumactif.fr/f511-routes-6-7",
    "Dome Royal": "https://master-poke.forumactif.fr/f483-dome-royal",
    "Parc Volcanique": "https://master-poke.forumactif.fr/f514-parc-volcanique",
    "Route 8": "https://master-poke.forumactif.fr/f517-route-8",
    "Jungle Sombrefeuille": "https://master-poke.forumactif.fr/f518-jungle-sombrefeuille",
    "Konikoni": "https://master-poke.forumactif.fr/f484-konikoni",
    "Route 9": "https://master-poke.forumactif.fr/f520-route-9",
    "Colline Memento": "https://master-poke.forumactif.fr/f521-colline-memento",
    "Cote Reculee d'Akala": "https://master-poke.forumactif.fr/f522-cote-reculee-d-akala",
    "Malie": "https://master-poke.forumactif.fr/f485-malie",
    "Parc de Malie": "https://master-poke.forumactif.fr/f524-parc-de-malie",
    "Routes 10 & 11": "https://master-poke.forumactif.fr/f525-routes-10-11",
    "Mont Hokulani": "https://master-poke.forumactif.fr/f527-mont-hokulani",
    "Route 12": "https://master-poke.forumactif.fr/f535-route-12",
    "Mont Ardent": "https://master-poke.forumactif.fr/f536-mont-ardent",
    "Village Toko": "https://master-poke.forumactif.fr/f486-village-toko",
    "Routes 13 & 14 & 15": "https://master-poke.forumactif.fr/f528-routes-13-14-15",
    "Desert Haina": "https://master-poke.forumactif.fr/f530-desert-haina",
    "Ancien site Bradley Prix": "https://master-poke.forumactif.fr/f532-ancien-site-bradley-prix",
    "Mont Lanakila": "https://master-poke.forumactif.fr/f534-mont-lanakila",
    "Kokohio": "https://master-poke.forumactif.fr/f487-kokohio",
    "Routes 16 & 17": "https://master-poke.forumactif.fr/f516-routes-16-17",
    "Jardin d'Ula-Ula": "https://master-poke.forumactif.fr/f519-jardin-d-ula-ula",
    "Lac du Halo Lunaire": "https://master-poke.forumactif.fr/f523-lac-du-halo-lunaire",
    "Village Flottant": "https://master-poke.forumactif.fr/f488-village-flottant",
    "Ile Noadkoko": "https://master-poke.forumactif.fr/f510-ile-noadkoko",
    "Prairie de Poni": "https://master-poke.forumactif.fr/f513-prairie-de-poni",
    "Paradis AEther": "https://master-poke.forumactif.fr/f515-paradis-aether",
    "Grand Canyon de Poni": "https://master-poke.forumactif.fr/f489-grand-canyon-de-poni",
    "Vieille Route": "https://master-poke.forumactif.fr/f498-vieille-route",
    "Recif de Poni": "https://master-poke.forumactif.fr/f501-recif-de-poni",
    "Plaine de Poni": "https://master-poke.forumactif.fr/f503-plaine-de-poni",
    "Jardin de Poni": "https://master-poke.forumactif.fr/f505-jardin-de-poni",
    "Caverne Coda": "https://master-poke.forumactif.fr/f507-caverne-coda"
};

const galarLinks = {
    "Paddoxton": "https://master-poke.forumactif.fr/f161-paddoxton",
    "Route 01": "https://master-poke.forumactif.fr/f255-route-01",
    "Foret de Sleepwood": "https://master-poke.forumactif.fr/f259-foret-de-sleepwood",
    "Couronneige": "https://master-poke.forumactif.fr/f465-couronneige",
    "Montagnes": "https://master-poke.forumactif.fr/f467-montagnes",
    "Zone Temperee": "https://master-poke.forumactif.fr/f471-zone-temperee",
    "Zone Polaire": "https://master-poke.forumactif.fr/f473-zone-polaire",
    "Brasswick": "https://master-poke.forumactif.fr/f164-brasswick",
    "Route 02": "https://master-poke.forumactif.fr/f261-route-02",
    "Plaine Verdoyante": "https://master-poke.forumactif.fr/f277-plaine-verdoyante",
    "Motorby": "https://master-poke.forumactif.fr/f168-motorby",
    "Route 03": "https://master-poke.forumactif.fr/f279-route-03",
    "Mine de Galar": "https://master-poke.forumactif.fr/f281-mine-de-galar",
    "Route 04": "https://master-poke.forumactif.fr/f283-route-04",
    "Lac Coupenotte": "https://master-poke.forumactif.fr/f284-lac-coupenotte",
    "Plaines Sauvages": "https://master-poke.forumactif.fr/f171-plaines-sauvages",
    "Greenbury": "https://master-poke.forumactif.fr/f176-greenbury",
    "Route 05": "https://master-poke.forumactif.fr/f291-route-05",
    "Lac Ouragan": "https://master-poke.forumactif.fr/f292-lac-ouragan",
    "Skifford": "https://master-poke.forumactif.fr/f304-skifford",
    "Mine de Galar n2": "https://master-poke.forumactif.fr/f311-mine-de-galar-n2",
    "Plaine Rocheuse": "https://master-poke.forumactif.fr/f325-plaine-rocheuse",
    "Miroir du Geant": "https://master-poke.forumactif.fr/f326-miroir-du-geant",
    "Kickenham": "https://master-poke.forumactif.fr/f178-kickenham",
    "Route 07": "https://master-poke.forumactif.fr/f328-route-07",
    "Route 08": "https://master-poke.forumactif.fr/f341-route-08",
    "Plateau de Kickenham": "https://master-poke.forumactif.fr/f357-plateau-de-kickenham",
    "Old Chister": "https://master-poke.forumactif.fr/f187-old-chister",
    "Route 06": "https://master-poke.forumactif.fr/f388-route-06",
    "Corrifey": "https://master-poke.forumactif.fr/f190-corrifey",
    "Foret de Lumirinth": "https://master-poke.forumactif.fr/f392-foret-de-lumirinth",
    "Ludester": "https://master-poke.forumactif.fr/f192-ludester",
    "Route 09": "https://master-poke.forumactif.fr/f393-route-09",
    "Smashings": "https://master-poke.forumactif.fr/f236-smashings",
    "Chenal de Smashings": "https://master-poke.forumactif.fr/f397-chenal-de-smashings",
    "Isolamure": "https://master-poke.forumactif.fr/f409-isolamure",
    "Zone Sud": "https://master-poke.forumactif.fr/f453-zone-sud",
    "Zone Centrale": "https://master-poke.forumactif.fr/f462-zone-centrale",
    "Zone Nord": "https://master-poke.forumactif.fr/f463-zone-nord",
    "Winscor": "https://master-poke.forumactif.fr/f248-winscor",
    "Route 10": "https://master-poke.forumactif.fr/f402-route-10"
};

const paldeaLinks = {
    "Cuchalaga": "https://master-poke.forumactif.fr/f198-cuchalaga",
    "Route de Cuchalaga": "https://master-poke.forumactif.fr/f415-route-de-cuchalaga",
    "Caverne de la Crique": "https://master-poke.forumactif.fr/f479-caverne-de-la-crique",
    "Mer du Sud": "https://master-poke.forumactif.fr/f480-mer-du-sud",
    "Plato Real": "https://master-poke.forumactif.fr/f504-plato-real",
    "Zone Sud 1": "https://master-poke.forumactif.fr/f512-zone-sud-1",
    "Zone Sud 4": "https://master-poke.forumactif.fr/f526-zone-sud-4",
    "Mesaledo": "https://master-poke.forumactif.fr/f529-mesaledo",
    "Zone Sud 3": "https://master-poke.forumactif.fr/f531-zone-sud-3",
    "Zone Sud 5": "https://master-poke.forumactif.fr/f533-zone-sud-5",
    "Plage Secrete": "https://master-poke.forumactif.fr/f537-plage-secrete",
    "Sevaro": "https://master-poke.forumactif.fr/f538-sevaro",
    "Zone Sud 2": "https://master-poke.forumactif.fr/f539-zone-sud-2",
    "Les Oliveraies": "https://master-poke.forumactif.fr/f540-les-oliveraies",
    "Alforneira": "https://master-poke.forumactif.fr/f541-alforneira",
    "Zone Sud 6": "https://master-poke.forumactif.fr/f542-zone-sud-6",
    "Grotte d'Alforneira": "https://master-poke.forumactif.fr/f543-grotte-d-alforneira",
    "Jarramanca": "https://master-poke.forumactif.fr/f544-jarramanca",
    "Desert Rotissable": "https://master-poke.forumactif.fr/f545-desert-rotissable",
    "Porto Marinada": "https://master-poke.forumactif.fr/f546-porto-marinada",
    "Zone Ouest 1": "https://master-poke.forumactif.fr/f547-zone-ouest-1",
    "Zone Ouest 2": "https://master-poke.forumactif.fr/f548-zone-ouest-2",
    "La Grotte aux Colonnes": "https://master-poke.forumactif.fr/f549-la-grotte-aux-colonnes",
    "Mer de l'Ouest": "https://master-poke.forumactif.fr/f550-mer-de-l-ouest",
    "Mezclamora": "https://master-poke.forumactif.fr/f551-mezclamora",
    "Zone Ouest 3": "https://master-poke.forumactif.fr/f552-zone-ouest-3",
    "Lac Asrol": "https://master-poke.forumactif.fr/f553-lac-asrol",
    "Foret Toastee": "https://master-poke.forumactif.fr/f554-foret-toastee",
    "Mont Nappe": "https://master-poke.forumactif.fr/f555-mont-nappe",
    "Tunnel Mezcla-Pincho": "https://master-poke.forumactif.fr/f556-tunnel-mezcla-pincho",
    "Zone Nord 1": "https://master-poke.forumactif.fr/f557-zone-nord-1",
    "Zone Nord 2": "https://master-poke.forumactif.fr/f558-zone-nord-2",
    "Cascade Furie": "https://master-poke.forumactif.fr/f559-cascade-furie",
    "Frigao": "https://master-poke.forumactif.fr/f560-frigao",
    "Zone Nord 3": "https://master-poke.forumactif.fr/f561-zone-nord-3",
    "Mer du Nord": "https://master-poke.forumactif.fr/f562-mer-du-nord",
    "Cuencia": "https://master-poke.forumactif.fr/f563-cuencia",
    "Zone Est 1": "https://master-poke.forumactif.fr/f564-zone-est-1",
    "Levalendura": "https://master-poke.forumactif.fr/f565-levalendura",
    "Zone Est 2": "https://master-poke.forumactif.fr/f566-zone-est-2",
    "Mer de l'Est": "https://master-poke.forumactif.fr/f567-mer-de-l-est",
    "Pinchoria": "https://master-poke.forumactif.fr/f568-pinchoria",
    "Zone Est 3": "https://master-poke.forumactif.fr/f569-zone-est-3",
    "Bosquet Tague": "https://master-poke.forumactif.fr/f570-bosquet-tague",
    "Cratere de Paldea": "https://master-poke.forumactif.fr/f571-cratere-de-paldea",
    "Zone Zero": "https://master-poke.forumactif.fr/f572-zone-zero",
};

const mtLinks = {
    "Master Tower": "https://master-poke.forumactif.fr/f66-master-tower-c-o-m-b-a-t-s",
};

const almiaLinks = {
    "Le Cap de la Terreur": "https://master-poke.forumactif.fr/f37-le-cap-de-la-terreur",
    "Ile d'Hisui": "https://master-poke.forumactif.fr/f25-ile-d-hisui",
    "Jaderaude": "https://master-poke.forumactif.fr/f591-jaderaude",
    "Mont Strueux": "https://master-poke.forumactif.fr/f592-mont-strueux",
    "Zone Fluviale": "https://master-poke.forumactif.fr/f593-zone-fluviale",
    "Nord de Septentria": "https://master-poke.forumactif.fr/f594-nord-de-septentria",
};

const hqLinks = {
    "Polygone": "https://master-poke.forumactif.fr/f226-polygone",
    "Glaive de Themis": "https://master-poke.forumactif.fr/f172-glaive-de-themis",
    "Zone Zero": "https://master-poke.forumactif.fr/f134-zone-zero",
    "Salon de l'Elevage": "https://master-poke.forumactif.fr/f274-salon-de-l-elevage",
    "Tour du Savoir et de la Recherche": "https://master-poke.forumactif.fr/f354-tour-du-savoir-et-de-la-recherche",
    "Ile de Puwai": "https://master-poke.forumactif.fr/f126-ile-de-puwai",
};

const pnjNames = ["Mister MP", "Mister J", "Mister K", "Mister L", "Miss E"];
const noModerationString = [
    "(non modéré)",
    "[non modéré]",
    "(non modere)",
    "[non modere]",
    "[p2b]",
    "concours de coordination n°",
];
const noModerationStringInfo = noModerationString.concat([
    "non modéré",
    "non modere",
    "non-modéré",
    "non-modere",
]);
const rankColors = [
    "rgb(137, 47, 182)", // scientifique
    "rgb(0, 0, 0)", // sbire
    "rgb(43, 42, 130)", // agent
    "rgb(207, 110, 72)", // ranger
]
const baseUrl = "https://master-poke.forumactif.fr/"

const kantoBtn = document.getElementById('kantoBtn');
const johtoBtn = document.getElementById('johtoBtn');
const hoennBtn = document.getElementById('hoennBtn');
const sinnohBtn = document.getElementById('sinnohBtn');
const unysBtn = document.getElementById('unysBtn');
const kalosBtn = document.getElementById('kalosBtn');
const alolaBtn = document.getElementById('alolaBtn');
const galarBtn = document.getElementById('galarBtn');
const paldeaBtn = document.getElementById('paldeaBtn');
const mtBtn = document.getElementById('mtBtn');
const almiaBtn = document.getElementById('almiaBtn');
const hqBtn = document.getElementById('hqBtn');

let resizeTimeout;
const warningTelP = document.getElementById('warningTel');

// PROGRAMME
async function scrapeData(url, placeName) {
    const data = [];

    const tbody = document.getElementById('table-content')
    const row = tbody.insertRow();
    const cell = row.insertCell();

    try {

        const response = await fetch(url, {
            headers: {
                "Host": "master-poke.forumactif.fr",
            }
        });
        const html = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        const rows = doc.querySelectorAll('table.forumline tr:has(div.topictitle)');

        rows.forEach(function(row) {
            const principalTd = row.querySelector('div.topictitle')
            const topicName = principalTd.querySelector('a.topictitle').innerText
            const creatorName = principalTd.querySelector('span.name span')?.innerText
            const creatorColor = principalTd.querySelector('span.name span')?.style?.color

            let infoCompl = row.querySelector('span.genmed')?.innerText
            infoCompl = infoCompl === undefined ? "" : infoCompl;

            const lastResponseTd = row.querySelector('span.list_topics')
            const lastResponseName = lastResponseTd.querySelector('strong')?.innerText
            const lastResponseColor = lastResponseTd.querySelector('span')?.style?.color

            const lastResponseDate = lastResponseTd.firstChild.nodeValue.trim()
            let lastResponseLink = lastResponseTd.querySelector('a').getAttribute('href')
            lastResponseLink = `<a href="${baseUrl}${lastResponseLink}" target="_blank">Dernier message</a>`

            if (!shouldAppear(creatorName, topicName, infoCompl, lastResponseName, lastResponseDate, creatorColor))
                return

            const creator = `<span style="color:${creatorColor}">${creatorName}</span>`
            const response = `<span style="color:${lastResponseColor}">${lastResponseName}</span>`

            const newData = [topicName, creator, response, infoCompl, lastResponseDate, lastResponseLink]
            const newDataNoInfo = [topicName, creatorName, lastResponseName, lastResponseDate, lastResponseLink]
            if (!data.some(list => JSON.stringify(list) === JSON.stringify(newDataNoInfo)))
                data.push(newData)
        });

        cell.colSpan = 6;
        cell.classList.add('place')
        cell.innerHTML = `<a href="${url}" target="_blank">${placeName}</a>`;

        if (data.length === 0) {
            row.classList.add('table-success')
            cell.innerHTML += " - Aucun sujet";
        } else {
            row.classList.add('table-primary')
            data.forEach(rowData => {
                const row = tbody.insertRow();
                rowData.forEach(cellData => {
                    const cell = row.insertCell();
                    cell.innerHTML = cellData;
                });
            });
        }
    } catch (error) {
        cell.colSpan = 6;
        cell.classList.add('place')
        cell.classList.add('table-danger')
        cell.innerHTML = `<a href="${url}" target="_blank">${placeName}</a> - Une erreur est survenue`;

        console.error(error);
    }
}

async function changeRegion(dictLinks, button) {
    let tableBody = document.querySelector('tbody');
    while (tableBody.firstChild) {
        tableBody.removeChild(tableBody.firstChild);
    }

    document.querySelectorAll('button').forEach(bouton => bouton.classList.remove('btn-success'));
    document.querySelectorAll('button').forEach(bouton => bouton.disabled = true);
    button.classList.add('btn-success');

    for (let key in dictLinks) {
        await scrapeData(dictLinks[key], key);
    }

    document.querySelectorAll('button').forEach(bouton => bouton.disabled = false);
}

// EVENT LISTENER
kantoBtn.addEventListener('click', function() { changeRegion(kantoLinks, kantoBtn); });
johtoBtn.addEventListener('click', function() { changeRegion(johtoLinks, johtoBtn); });
hoennBtn.addEventListener('click', function() { changeRegion(hoennLinks, hoennBtn); });
sinnohBtn.addEventListener('click', function() { changeRegion(sinnohLinks, sinnohBtn); });
unysBtn.addEventListener('click', function() { changeRegion(unysLinks, unysBtn); });
kalosBtn.addEventListener('click', function() { changeRegion(kalosLinks, kalosBtn); });
alolaBtn.addEventListener('click', function() { changeRegion(alolaLinks, alolaBtn); });
galarBtn.addEventListener('click', function() { changeRegion(galarLinks, galarBtn); });
paldeaBtn.addEventListener('click', function() { changeRegion(paldeaLinks, paldeaBtn); });
mtBtn.addEventListener('click', function() { changeRegion(mtLinks, mtBtn); });
almiaBtn.addEventListener('click', function() { changeRegion(almiaLinks, almiaBtn); });
hqBtn.addEventListener('click', function() { changeRegion(hqLinks, hqBtn); });
document.addEventListener("DOMContentLoaded", function() { managePhoneWarning(); });
window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);

    resizeTimeout = setTimeout(function() {
        managePhoneWarning();
    }, 200); });

// UTILS
function shouldAppear(creatorName, topicName, infoCompl, lastResponseName, lastResponseDate, color = "rgb(46, 139, 248)") {
    // Test sur le nom du créateur et le nom du topic pour les centres commerciaux
    if (creatorName === undefined || (pnjNames.includes(creatorName) && !topicName.toLowerCase().includes("centre commercial")))
        return false;

    // Test si 'non modéré' dans le nom du topic ou le sous-titre
    if (
        noModerationString.some(item => topicName.toLowerCase().includes(item)) ||
        noModerationStringInfo.some(item => infoCompl.toLowerCase().includes(item))
    )
        return false;

    // Test sur la dernière réponse
    if (lastResponseName === undefined)
        return false;

    if (pnjNames.includes(lastResponseName)) {
        // Autre PNJ que Mister MP
        if (lastResponseName !== "Mister MP")
            return false;

        // Si topic créer par un dresseur, coordinateur ou éthologue
        if (!rankColors.includes(color))
            return false;

        // Si le sujet ou sous-titre ne contient pas "mission"
        if (!topicName.toLowerCase().includes("mission") && !infoCompl.toLowerCase().includes("mission"))
            return false
    }

    // Test sur la date
    const lastResponse = convertDate(lastResponseDate)
    const dateMax = new Date();
    dateMax.setMonth(dateMax.getMonth() - 1);

    // On vire les dates qui ont plus d'un mois et celle dans le futur (cas si on récupère une date sans l'année et
    // qu'on force l'année à celle en cours)
    if (lastResponse < dateMax || lastResponse > new Date())
        return false;

    // Return final
    return true;
}

function convertDate(dateStr) {
    if (dateStr.includes("Hier")) {
        return convertYesterday(dateStr);
    }

    if (dateStr.includes("Aujourd'hui")) {
        return convertToday(dateStr);
    }

    const moisEnFr = ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil", "Aoû", "Sep", "Oct", "Nov", "Déc"];
    const date = new Date();
    let [day, month, year] = dateStr.split(" ").slice(1);
    let [hours, minutes] = dateStr.split("-")[1].trim().split(':').slice();

    month = moisEnFr.indexOf(month);
    if (year === '-') {
        // Si on n'a pas l'année, on force celle en cours... Sauf si on est au moins de janvier avec un mois trouvé à
        // décembre, on fait année - 1
        year = date.getMonth() === 0 && month === 11 ? date.getFullYear() - 1 : date.getFullYear();
    }

    date.setFullYear(year);
    date.setMonth(month);
    date.setDate(day);
    date.setHours(Number(hours), Number(minutes), 0, 0);

    return date;
}

function convertYesterday(dateStr) {
    let date = new Date();
    date.setDate(date.getDate() - 1);

    let time = dateStr.split(" à ")[1];
    let [hours, minutes] = time.split(":");

    date.setHours(hours, minutes, 0, 0);
    return date;
}

function convertToday(dateStr) {
    let today = new Date();
    let time = dateStr.split(" à ")[1];
    let [hours, minutes] = time.split(":");

    today.setHours(hours, minutes, 0, 0);
    return today;
}

function isMobleOrSmallWidth() {
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobileOrTablet = /(iphone|ipod|android.*mobile|windows.*phone|ipad|android(?!.*mobile))/.test(userAgent);
    const windowWidth = window.innerWidth;

    return isMobileOrTablet || windowWidth <= 768;
}

function managePhoneWarning() {
    if (isMobleOrSmallWidth()) {
        warningTelP.classList.remove('hidden')
    } else {
        warningTelP.classList.add('hidden')
    }
}

// TESTS UNITAIRES
function assertEquals(expected, actual, testName) {
    if (expected === actual) {
        console.info(`${testName} réussi !`);
    } else {
        console.error(`${testName} échoué. Attendu : ${expected}, obtenu : ${actual}`);
    }
}

function assertEqualsDate(expected, actual, testName) {
    if (expected.getTime() === actual.getTime()) {
        console.info(`${testName} réussi !`);
    } else {
        console.error(`${testName} échoué. Attendu : ${expected}, obtenu : ${actual}, différence : ${expected - actual}`);
    }
}

function testCreatorName() {
    console.info('-- TEST CREATOR NAME --')
    let creatorName = "Mister MP"
    let topicName = "centre commercial"
    const infoCompl= "rien"
    const lastResponseName = "Titi"
    const lastResponseDate = "Hier à 9:46"

    assertEquals(true, shouldAppear(creatorName, topicName, infoCompl, lastResponseName, lastResponseDate), "Test 1");

    creatorName = "Mister J"
    topicName = "Centre commercial"
    assertEquals(true, shouldAppear(creatorName, topicName, infoCompl, lastResponseName, lastResponseDate), "Test 2");

    creatorName = "Mister K"
    topicName = "Centre Commercial"
    assertEquals(true, shouldAppear(creatorName, topicName, infoCompl, lastResponseName, lastResponseDate), "Test 3");

    creatorName = "Mister L"
    assertEquals(true, shouldAppear(creatorName, topicName, infoCompl, lastResponseName, lastResponseDate), "Test 4");

    creatorName = "Mister L"
    topicName = "Pokémon sauvage"
    assertEquals(false, shouldAppear(creatorName, topicName, infoCompl, lastResponseName, lastResponseDate), "Test 5");

    creatorName = "Titi"
    topicName = "A l'attaque"
    assertEquals(true, shouldAppear(creatorName, topicName, infoCompl, lastResponseName, lastResponseDate), "Test 6");
}

function testTopicName() {
    console.info('-- TEST TOPIC NAME --')
    const creatorName = "Titi"
    let topicName = "A l'attaque"
    let infoCompl= ""
    const lastResponseName = "Titi"
    const lastResponseDate = "Hier à 9:46"

    assertEquals(true, shouldAppear(creatorName, topicName, infoCompl, lastResponseName, lastResponseDate), "Test 1");

    topicName = "[Non Modéré] A l'attaque"
    assertEquals(false, shouldAppear(creatorName, topicName, infoCompl, lastResponseName, lastResponseDate), "Test 2");

    topicName = "[Modéré] A l'attaque"
    assertEquals(true, shouldAppear(creatorName, topicName, infoCompl, lastResponseName, lastResponseDate), "Test 3");

    topicName = "Attaque non modéré"
    assertEquals(true, shouldAppear(creatorName, topicName, infoCompl, lastResponseName, lastResponseDate), "Test 4");

    infoCompl = "Non-modéré"
    assertEquals(false, shouldAppear(creatorName, topicName, infoCompl, lastResponseName, lastResponseDate), "Test 5");

    infoCompl = "modéré"
    assertEquals(true, shouldAppear(creatorName, topicName, infoCompl, lastResponseName, lastResponseDate), "Test 6");

    topicName = "[P2B] A l'attaque"
    infoCompl= null
    assertEquals(false, shouldAppear(creatorName, topicName, infoCompl, lastResponseName, lastResponseDate), "Test 7");

    topicName = "Concours de coordination n°45"
    assertEquals(false, shouldAppear(creatorName, topicName, infoCompl, lastResponseName, lastResponseDate), "Test 8");

    topicName = "A l'attaque"
    infoCompl = "[NON MODERE]"
    assertEquals(false, shouldAppear(creatorName, topicName, infoCompl, lastResponseName, lastResponseDate), "Test 9");

    topicName = "[Modéré] A l'attaque"
    infoCompl = "[NON-MODERE]"
    assertEquals(false, shouldAppear(creatorName, topicName, infoCompl, lastResponseName, lastResponseDate), "Test 10");

    topicName = "A l'attaque"
    infoCompl = "[p2b]"
    assertEquals(false, shouldAppear(creatorName, topicName, infoCompl, lastResponseName, lastResponseDate), "Test 11");
}

function testLastResponseName() {
    console.info('-- TEST LAST RESPONSE NAME --')
    const creatorName = "Titi"
    let topicName = "A l'attaque"
    const infoCompl= ""
    let lastResponseName = "Titi"
    const lastResponseDate = "Hier à 9:46"
    let color = "rgb(46, 139, 248)"

    assertEquals(true, shouldAppear(creatorName, topicName, infoCompl, lastResponseName, lastResponseDate), "Test 1");

    lastResponseName = "Mister MP"
    assertEquals(false, shouldAppear(creatorName, topicName, infoCompl, lastResponseName, lastResponseDate), "Test 2");

    lastResponseName = "Mister K"
    assertEquals(false, shouldAppear(creatorName, topicName, infoCompl, lastResponseName, lastResponseDate), "Test 3");

    lastResponseName = "Mister J"
    assertEquals(false, shouldAppear(creatorName, topicName, infoCompl, lastResponseName, lastResponseDate), "Test 4");

    lastResponseName = "Mister L"
    assertEquals(false, shouldAppear(creatorName, topicName, infoCompl, lastResponseName, lastResponseDate), "Test 5");

    lastResponseName = "Miss E"
    assertEquals(false, shouldAppear(creatorName, topicName, infoCompl, lastResponseName, lastResponseDate), "Test 6");

    topicName = "[Mission] A l'attaque"
    lastResponseName = "Mister MP"
    assertEquals(false, shouldAppear(creatorName, topicName, infoCompl, lastResponseName, lastResponseDate, color), "Test 7");

    topicName = "(Mission) A l'attaque"
    assertEquals(false, shouldAppear(creatorName, topicName, infoCompl, lastResponseName, lastResponseDate, color), "Test 8");

    topicName = "J'ai raté ma mission"
    assertEquals(false, shouldAppear(creatorName, topicName, infoCompl, lastResponseName, lastResponseDate, color), "Test 9");

    topicName = "[Mission] A l'attaque"
    color = rankColors[0]
    assertEquals(true, shouldAppear(creatorName, topicName, infoCompl, lastResponseName, lastResponseDate, color), "Test 10");

    topicName = "(Mission) A l'attaque"
    assertEquals(true, shouldAppear(creatorName, topicName, infoCompl, lastResponseName, lastResponseDate, color), "Test 11");

    topicName = "J'ai raté ma mission"
    assertEquals(true, shouldAppear(creatorName, topicName, infoCompl, lastResponseName, lastResponseDate, color), "Test 12");

    topicName = "[Mission] A l'attaque"
    color = rankColors[1]
    assertEquals(true, shouldAppear(creatorName, topicName, infoCompl, lastResponseName, lastResponseDate, color), "Test 13");

    topicName = "(Mission) A l'attaque"
    assertEquals(true, shouldAppear(creatorName, topicName, infoCompl, lastResponseName, lastResponseDate, color), "Test 14");

    topicName = "J'ai raté ma mission"
    assertEquals(true, shouldAppear(creatorName, topicName, infoCompl, lastResponseName, lastResponseDate, color), "Test 15");

    topicName = "[Mission] A l'attaque"
    color = rankColors[2]
    assertEquals(true, shouldAppear(creatorName, topicName, infoCompl, lastResponseName, lastResponseDate, color), "Test 16");

    topicName = "(Mission) A l'attaque"
    assertEquals(true, shouldAppear(creatorName, topicName, infoCompl, lastResponseName, lastResponseDate, color), "Test 17");

    topicName = "J'ai raté ma mission"
    assertEquals(true, shouldAppear(creatorName, topicName, infoCompl, lastResponseName, lastResponseDate, color), "Test 18");

    topicName = "[Mission] A l'attaque"
    color = rankColors[3]
    assertEquals(true, shouldAppear(creatorName, topicName, infoCompl, lastResponseName, lastResponseDate, color), "Test 19");

    topicName = "(Mission) A l'attaque"
    assertEquals(true, shouldAppear(creatorName, topicName, infoCompl, lastResponseName, lastResponseDate, color), "Test 20");

    topicName = "J'ai raté ma mission"
    assertEquals(true, shouldAppear(creatorName, topicName, infoCompl, lastResponseName, lastResponseDate, color), "Test 21");

    lastResponseName = "Miss E"
    assertEquals(false, shouldAppear(creatorName, topicName, infoCompl, lastResponseName, lastResponseDate, color), "Test 22");
}

function testDateResponseName() {
    console.info('-- TEST DATE RESPONSE NAME --')
    const creatorName = "Titi"
    const topicName = "A l'attaque"
    const infoCompl= ""
    const lastResponseName = "Titi"
    let lastResponseDate = "Aujourd'hui à 00:01"

    assertEquals(true, shouldAppear(creatorName, topicName, infoCompl, lastResponseName, lastResponseDate), "Test 1");

    lastResponseDate = "Hier à 00:15"
    assertEquals(true, shouldAppear(creatorName, topicName, infoCompl, lastResponseName, lastResponseDate), "Test 2");

    let date = new Date();
    date.setDate(date.getDate() - 20)
    let optionsDate = { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' };
    let optionsHour = { hour: '2-digit', minute: '2-digit', hour12: false };
    let dateFormated = date.toLocaleDateString('fr-FR', optionsDate);
    let heureFormated = date.toLocaleTimeString('fr-FR', optionsHour);
    lastResponseDate = `${dateFormated.replaceAll('.', '')} - ${heureFormated}`;
    lastResponseDate = lastResponseDate.replaceAll('janv', 'Jan')
    assertEquals(true, shouldAppear(creatorName, topicName, infoCompl, lastResponseName, lastResponseDate), "Test 3");

    date = new Date();
    date.setDate(date.getDate() - 30)
    dateFormated = date.toLocaleDateString('fr-FR', optionsDate);
    heureFormated = date.toLocaleTimeString('fr-FR', optionsHour);
    lastResponseDate = `${dateFormated.replaceAll('.', '')} - ${heureFormated}`;
    lastResponseDate = lastResponseDate.replaceAll('janv', 'Jan')
    assertEquals(true, shouldAppear(creatorName, topicName, infoCompl, lastResponseName, lastResponseDate), "Test 4");

    lastResponseDate = "Ven 1 Nov 2024 - 16:52"
    assertEquals(false, shouldAppear(creatorName, topicName, infoCompl, lastResponseName, lastResponseDate), "Test 5");

    lastResponseDate = "Ven 30 Juin 2023 - 16:52"
    assertEquals(false, shouldAppear(creatorName, topicName, infoCompl, lastResponseName, lastResponseDate), "Test 6");

    date = new Date();
    if (date.getMonth() === 0 && date.getDate() <= 7) {
        lastResponseDate = "Ven 01 Jan - 00:01"
        assertEquals(true, shouldAppear(creatorName, topicName, infoCompl, lastResponseName, lastResponseDate), "Test 7");

        lastResponseDate = "Ven 01 Fév - 00:01"
        assertEquals(false, shouldAppear(creatorName, topicName, infoCompl, lastResponseName, lastResponseDate), "Test 8");

        lastResponseDate = "Ven 08 Jan - 00:01"
        assertEquals(false, shouldAppear(creatorName, topicName, infoCompl, lastResponseName, lastResponseDate), "Test 9");

        lastResponseDate = "Ven 10 Déc - 00:01"
        assertEquals(true, shouldAppear(creatorName, topicName, infoCompl, lastResponseName, lastResponseDate), "Test 10");
    }

    if (date.getMonth() !== 0 && date.getMonth() !== 11) {
        lastResponseDate = "Ven 01 Jan - 00:01"
        assertEquals(false, shouldAppear(creatorName, topicName, infoCompl, lastResponseName, lastResponseDate), "Test 11");

        lastResponseDate = "Ven 10 Déc - 00:01"
        assertEquals(false, shouldAppear(creatorName, topicName, infoCompl, lastResponseName, lastResponseDate), "Test 12");
    }
}

function testConvertDate() {
    console.info('-- TEST CONVERT DATE --')
    let date = new Date()
    date.setHours(14, 15, 0, 0);
    assertEqualsDate(date, convertDate("Aujourd'hui à 14:15"), "Test 1");

    date = new Date()
    date.setDate(date.getDate() - 1);
    date.setHours(0, 59, 0, 0);
    assertEqualsDate(date, convertDate("Hier à 00:59"), "Test 2");

    date = new Date()
    date.setDate(8);
    date.setMonth(3);
    date.setFullYear(2024);
    date.setHours(9, 34, 0, 0);
    assertEqualsDate(date, convertDate("Lun 8 Avr 2024 - 9:34"), "Test 3");

    date = new Date()
    date.setDate(25);
    date.setMonth(4);
    date.setFullYear(2023);
    date.setHours(18, 15, 0, 0);
    assertEqualsDate(date, convertDate("Jeu 25 Mai 2023 - 18:15"), "Test 4");

    const today = new Date()
    date = new Date()
    date.setDate(10);
    date.setMonth(11);
    date.setHours(16, 29, 0, 0);

    if (today.getMonth() === 0) {
        date.setFullYear(date.getFullYear() - 1);
        assertEqualsDate(date, convertDate("Mar 10 Déc - 16:29"), "Test 5.1");
    } else {
        date.setFullYear(date.getFullYear());
        assertEqualsDate(date, convertDate("Mar 10 Déc - 16:29"), "Test 5.2");
    }

    date = new Date()
    date.setDate(10);
    date.setMonth(8);
    date.setFullYear(date.getFullYear());
    date.setHours(16, 29, 0, 0);
    assertEqualsDate(date, convertDate("Mar 10 Sep - 16:29"), "Test 6");
}

function runTests() {
    testCreatorName();
    testTopicName();
    testLastResponseName();
    testConvertDate();
    testDateResponseName();
}

runTests();
