"use strict";
$(document).ready(() => {
    console.log(3);
    $("#outOfTimeContainer").hide();
    $("#congratsContainer").hide();

    const trivia = [
        {
            question: 'What is the capital of Afghanistan?',
            answer: 'Kabul',
            choices: [
                'Tirana',
                'Kabul',
                'Dushanbe',
                'Tashkent'
            ]
        },
        {
            question: 'What is the capital of Australia?',
            answer: 'Canberra',
            choices: [
                'Canberra',
                'Sydney',
                'Melbourne',
                'Ottawa'
            ]
        },
        {
            question: 'What is the capital of Belgium?',
            answer: 'Brussels',
            choices: [
                'Amsterdam',
                'Luxemburg',
                'Brussels',
                'Stockholm'
            ]
        },
        {
            question: 'What is the capital of Greece?',
            answer: 'Athens',
            choices: [
                'Ankara',
                'Athens',
                'Sofia',
                'Thessaloniki'
            ]
        },
        {
            question: 'What is the capital of Italy?',
            answer: 'Rome',
            choices: [
                'Venice',
                'Rome',
                'Naples',
                'Milan'
            ]
        },
        {
            question: 'What is the capital of Israel?',
            answer: 'Jerusalem',
            choices: [
                'Tel Aviv',
                'Kabul',
                'Jerusalem',
                'Islamabad'
            ]
        },
        {
            question: 'What is the capital of Germany?',
            answer: 'Berlin',
            choices: [
                'Frankfurt',
                'Berlin',
                'Munich',
                'Hamburg'
            ]
        },
        {
            question: 'What is the capital of Norway?',
            answer: 'Oslo',
            choices: [
                'Stockholm',
                'Helsinki',
                'Oslo',
                'Copenhagen'
            ]
        },
        {
            question: 'What is the capital and largest city of Hawaii, the 50th US state?',
            answer: 'Honolulu',
            choices: [
                'Little Rock',
                'Dover',
                'Frankfort',
                'Honolulu'
            ]
        },
        {
            question: 'When the streams Biya and Katun join in Altai Krai, they form this mighty river. It is located in West Siberia, Russia and has many names- the Siberian Tatars call it Omar or Umar, the Samoyedes- Kolta or Kuay and to the Ostiaks it is known as the As, Yag, Kolta and Yema. It joins the Irtysh river, forming the longest river flow in Russia. What is its name?',
            answer: 'Ob',
            choices: [
                'Ural',
                'Volga',
                'Ob',
                'Lena'
            ]
        },
        {
            question: 'Although the Amazon river is generally regarded as the second-longest in the world, it is the river with greatest total flow, carrying more than the Mississippi, Nile, and Yangtze rivers combined.  It ends in the Atlantic Ocean, but it is believed to begin its long journey from this mountain peak.',
            answer: 'Nevado Mismi',
            choices: [
                'Nevado Mismi',
                'Misti',
                'Cotopaxi',
                'Mount Chimborazo'
            ]
        },
        {
            question: 'inghai Province, flows for 6,380km (3964miles) and finally empties into the East China Sea. What is the name of this river?',
            answer: 'Yangtze',
            choices: [
                'Irtysh',
                'Huai River',
                'Yangtze',
                'Mekong'
            ]
        },
        {
            question: 'Huang He is the second-longest river in China. Its source is in the Kunlun Mountains at 4,500m (14,764 feet) above sea level. Due to the silts that the river carries, the color of its waters becomes so unnatural that it gave the name of the river . What is the color of the waters of Huang He?',
            answer: 'Yellow',
            choices: [
                'Brown',
                'Orange',
                'Yellow',
                'Red'
            ]
        },
        {
            question: 'It is the second-longest river in the United States. The longest one, Missouri, joins it to form the longest river flow in North America. This river flows through ten states- Minnesota, Wisconsin, Iowa, Illinois, Missouri, Kentucky, Arkansas, Tennessee, Mississippi and Louisiana and mouths into the Gulf of Mexico. I am not going to ask you about its name, but about its source. What is the origin of the Mississippi river?',
            answer: 'Lake Itasca',
            choices: [
                'Lake Superior',
                'Lake Pepin',
                'Lake Itasca',
                'Cass Lake'
            ]
        },
        {
            question: 'This is the twelfth-longest river in the world. It runs through China, Myanmar, Thailand, Laos, Cambodia and Vietnam. There are various theories about the source and the exact length of the river because there are several effluents of it that are too difficult to explore. Due to the many rapids and waterfalls, as well as the extreme changes in the flow of the river, sailing is extremely difficult. What is the name of this river?',
            answer: 'Mekong',
            choices: [
                'Mekong',
                'Saskatchewan',
                'Angara',
                'Brahmaputra'
            ]
        },
        {
            question: 'The longest river in Europe is Volga. But do you know which is the second longest one? It flows through several major European cities, such as Ulm, Vienna, Bratislava, Budapest and Belgrade. The river empties in the Black Sea on the terrirories of Romania and Ukraine.',
            answer: 'Danube',
            choices: [
                'Don',
                'Dniepr',
                'Danube',
                'Emba'
            ]
        },
        {
            question: 'ueen Victoria by David Livingstone, the explorer who visited them in 1855. The falls are 128 m (420 ft) high and are situated on this river.',
            answer: 'Zambezi',
            choices: [
                'Zambezi',
                'Congo',
                'Gambia',
                'Orange'
            ]
        },
        {
            question: 'The Nile is generally considered the longest river in the world.  The source of this mighty river remained unknown for centuries. Finally Lake Victoria was decided to be its source, although there are other theories. Lake Victoria is located on the territories of these three countries.',
            answer: 'Uganda, Kenya and Tanzania',
            choices: [
                'Sudan, Ethiopia and Kenya',
                'Zambia, Angola and Sudan',
                'Uganda, Kenya and Tanzania',
                'Egypt, Morocco and Zimbabwe'
            ]
        },
        {
            question: 'Name the line, which is the same distance from the North Pole and South Pole and runs horizontally around the world.',
            answer: 'Equator',
            choices: [
                'Tropic of Capricorn',
                'Equator',
                'Tropic of Cancer',
                'Prime Meridian'
            ]
        },
        {
            question: 'What term refers to the horizontal line, 23.5 degrees S, which passes through South America, Africa, and Australia?',
            answer: 'Tropic of Capricorn',
            choices: [
                'Tropic of Cancer',
                'Prime Meridian',
                'Tropic of Capricorn',
                'Equator'
            ]
        },
        {
            question: 'Which continents are entirely in the Southern Hemisphere?',
            answer: 'Australia and Antarctica',
            choices: [
                'South America, Africa, and Australia',
                'Australia and Antarctica',
                'South America, Australia and Antarctica',
                'South America and Australia'
            ]
        },
        {
            question: 'Which continents (landmasses, not peripheral islands) are entirely in the Northern Hemisphere?',
            answer: 'North America, Europe, and Asia',
            choices: [
                'North America and Europe',
                'Europe, Africa and Asia',
                'North America, Africa, and Asia',
                'North America, Europe, and Asia'
            ]
        },
        {
            question: 'Which continents are entirely in the Western Hemisphere?',
            answer: 'North America and South America',
            choices: [
                'North America, Europe, and Asia',
                'Europe, Asia, Africa, Australia',
                'Australia and Antarctica',
                'North America and South America'
            ]
        },
        {
            question: 'Which feature on a map helps determine direction?',
            answer: 'a compass rose',
            choices: [
                'a key',
                'a legend',
                'a compass rose',
                'a scale'
            ]
        },
        {
            question: 'Which of these is not a type of map projection?',
            answer: 'Crusoe',
            choices: [
                'Robinson',
                'Crusoe',
                'Mercator',
                'Interrupted'
            ]
        },
        {
            question: 'Which of these continents is largest (by territory)?',
            answer: 'North America',
            choices: [
                'South America',
                'Antarctica',
                'North America',
                'Europe'
            ]
        },
        {
            question: 'Which of these countries is smallest (by territory)?',
            answer: 'San Marino',
            choices: [
                'Seychelles',
                'Liechtenstein',
                'San Marino',
                'Marshall Islands'
            ]
        },
        {
            question: 'Which of these US cities is largest (by population)?',
            answer: 'Houston',
            choices: [
                'Houston',
                'Phoenix',
                'Philadelphia',
                'San Antonio'
            ]
        },
        {
            question: 'Which of these mountains is highest?',
            answer: 'Mount McKinley',
            choices: [
                'Puncak Jaya',
                'Mount McKinley',
                'Mount Elbrus',
                'Mount Kilimanjaro'
            ]
        },
        {
            question: 'Which of these lakes is deepest?',
            answer: 'Tanganyika',
            choices: [
                'Caspian Sea',
                'Malawi or Nyasa',
                'Tanganyika',
                'Issyk-Kul'
            ]
        },
        {
            question: 'Which of these rivers is longest?',
            answer: 'Huang',
            choices: [
                'Lena',
                'Huang',
                'Amur',
                'Ob-Irtysh'
            ]
        },
        {
            question: 'Which of these seas is largest?',
            answer: 'Mediterranean',
            choices: [
                'Bering',
                'Arabian Sea',
                'Mediterranean',
                'Gulf of Mexico'
            ]
        },
        {
            question: 'Which of these deserts is largest?',
            answer: 'Syrian',
            choices: [
                'Chihuahuan',
                'Syrian',
                'Thar',
                'Great Sandy'
            ]
        },
        {
            question: 'Which of these inhabited places is wettest?',
            answer: 'Moulein',
            choices: [
                'Moulein',
                'Sylhet',
                'Baguio',
                'Lae'
            ]
        },
        {
            question: 'Which of these oceans has the greatest depth?',
            answer: 'Pacific Ocean',
            choices: [
                'Pacific Ocean',
                'Indian Ocean',
                'Atlantic Ocean',
                'Arctic Ocean'
            ]
        },
        {
            question: 'The rivers - the Tajo, the Ebro, the Duero, and the Guadiana, are located in this country.',
            answer: 'Spain',
            choices: [
                'Columbia',
                'Portugal',
                'Spain',
                'Brazil'
            ]
        },
        {
            question: 'The volcanoes - Akan, Aso, Mount Fuji and Rausu are located in this country.',
            answer: 'Japan',
            choices: [
                'Japan',
                'Malaysia',
                'North Korea',
                'Indonesia'
            ]
        },
        {
            question: 'Onega, Khanka and Chudskoye are three of the many lakes in this country.',
            answer: 'Russia',
            choices: [
                'Kazakhstan',
                'Mongolia',
                'Ukraine',
                'Russia'
            ]
        },
        {
            question: 'The valleys of the Yellow River and the Pearl River are two of the seven main national valleys in this country.',
            answer: 'China',
            choices: [
                'Burma',
                'China',
                'Thailand',
                'India'
            ]
        },
        {
            question: 'Pico da Bandeira, Pico do Cruzeiro and Pedra da Mina are three of the numerous mountains located in this South American country.',
            answer: 'Brazil',
            choices: [
                'Argentina',
                'Chili',
                'Brazil',
                'Peru'
            ]
        },
        {
            question: 'Chauvet Cave and Meyrieres Cave are two caves located in this European state.',
            answer: 'France',
            choices: [
                'France',
                'Netherlands',
                'Spain',
                'Belgium'
            ]
        },
        {
            question: 'Kainji Lake and Lake Chad are considered lakes of this country.',
            answer: 'Nigeria',
            choices: [
                'Niger',
                'Nigeria',
                'Cameroon',
                'Chad'
            ]
        },
        {
            question: 'Mitchell, Jardine, Staaten, Flinders, Leichhardt, and Nicholson are just few of the rivers in this country.',
            answer: 'Australia',
            choices: [
                'Indonesia',
                'Australia',
                'Papua New Guinea',
                'New Zealand'
            ]
        },
        {
            question: 'Kaskaspakte, Akka and Sielmmacohkka are three mountains in this country.',
            answer: 'Sweden',
            choices: [
                'Norway',
                'Finland',
                'Denmark',
                'Sweden'
            ]
        },
        {
            question: 'Dasht-e Kavir and Kavir-e Lut are deserts located in this Asian country.',
            answer: 'Iran',
            choices: [
                'India',
                'Iran',
                'Pakistan',
                'Iraq'
            ]
        },
        {
            question: 'Which two countries border the Dead Sea?',
            answer: 'Jordan and Israel',
            choices: [
                'Jordan and Israel',
                'Lebanon and Jordan',
                'Syria and Jordan',
                'Lebanon and Israel'
            ]
        },
        {
            question: 'What are the three Benelux countries?',
            answer: 'Belgium, Netherlands and Luxembourg',
            choices: [
                'Belgium, Netherlands and Luxembourg',
                'Finland, Sweden and Denmark',
                'The U.S.A., Canada and Mexico',
                'Honduras, Nicaragua and Belize'
            ]
        },
        {
            question: 'What are the Tropic of Cancer and the Tropic of Capricorn?',
            answer: 'Lines of latitude',
            choices: [
                'Lines of latitude',
                'Lines of longitude',
                'Parallel to the Greenwhich Meridian',
                'None of these'
            ]
        },
        {
            question: 'Which statement about the emu and the kangaroo is not true?',
            answer: 'Both are indigenous only to Australia.',
            choices: [
                'Both are indigenous only to Australia.',
                'Both are on the national emblem of Australia.',
                'Both are incapable of flying.',
                'Both are incapable of  walking backwards.'
            ]
        },
        {
            question: 'What was the former name of the city of Istanbul ?',
            answer: 'Constantinople',
            choices: [
                'Constantinople',
                'Persia',
                'Zaire',
                'Siam'
            ]
        },
        {
            question: 'Where would you find the shortest river in the world?',
            answer: 'Montana',
            choices: [
                'Wales',
                'Ecuador',
                'Tasmania',
                'Montana'
            ]
        },
        {
            question: 'What major geographical feature is located at 23.5 degrees North latitude?',
            answer: 'The Tropic of Cancer',
            choices: [
                'The Equator',
                'The Arctic Circle',
                'The Tropic of Capricorn',
                'The Tropic of Cancer'
            ]
        },
        {
            question: 'Which would be found at 39 degrees 43 minutes North latitude?',
            answer: 'The majority of the Mason-Dixon Line.',
            choices: [
                'The Tropic of Cancer',
                'The Tropic of Capricorn',
                'The majority of the Mason-Dixon Line.',
                'The border between Canada and  Washington State.'
            ]
        },
        {
            question: 'Which country held the record for the highest birth rate in the 2005 world statistics?',
            answer: 'Niger',
            choices: [
                'Niger',
                'Uganda',
                'Mali',
                'Vatican City'
            ]
        },
        {
            question: 'How many US states border the Gulf of Mexico?',
            answer: '5',
            choices: [
                '4',
                '3',
                '5',
                '10'
            ]
        },
        {
            question: 'Measuring at the Equator, what is the closest approximation of the Earths circumference?',
            answer: '24,900 miles',
            choices: [
                '24,900,000 miles',
                '24,900 miles',
                '249,000 miles',
                '2,490,000 miles'
            ]
        },
        {
            question: 'The people of which country watched the most TV per week in 2005?',
            answer: 'Thailand',
            choices: [
                'Thailand',
                'The Philippines',
                'The USA',
                'Egypt'
            ]
        },
        {
            question: 'How many US states border the Pacific Ocean?',
            answer: '5',
            choices: [
                '11',
                '4',
                '5',
                '3'
            ]
        },
        {
            question: 'Which one of these ski resorts is not located in the Alps?',
            answer: 'Mont-Tremblant',
            choices: [
                'Kitzbuhel',
                'Zermatt',
                'Mont-Tremblant',
                'Chamonix-Mont-Blanc'
            ]
        },
        {
            question: 'The tallest mountain peak in the US is Mount McKinley. This is the second tallest.',
            answer: 'Mount Saint Elias',
            choices: [
                'Mount Saint Elias',
                'Glacier Peak',
                'Mount Washington',
                'Gannett Peak'
            ]
        },
        {
            question: 'Which one of these mountains is not a volcano?',
            answer: 'Mount Aspiring',
            choices: [
                'Mauna Kea',
                'Mount St. Helens',
                'Mount Vesuvius',
                'Mount Aspiring'
            ]
        },
        {
            question: 'The highest mountain peak on our planet is Mount Everest. It was first climbed by Edmund Hillary and Tenzing Norgay on May 29, 1953. What is the home country of Sir Edmund Hillary?',
            answer: 'New Zealand',
            choices: [
                'United Kingdom',
                'The United States',
                'France',
                'New Zealand'
            ]
        },
        {
            question: 'Which saltwater lake, bordered on the west by Azerbaijan and Russia, is the largest inland body of water in the world?',
            answer: 'Caspian Sea',
            choices: [
                'Tanganyika',
                'Victoria',
                'Baikal',
                'Caspian Sea'
            ]
        },
        {
            question: 'This country, situated in North Europe, has almost 200 000 lakes - more than any other country in the world.',
            answer: 'Finland',
            choices: [
                'Finland',
                'Sweden',
                'The Netherlands',
                'Georgia'
            ]
        },
        {
            question: 'Which body of water, situated in Southern Siberia, is the deepest and oldest freshwater lake on Earth?',
            answer: 'Baikal',
            choices: [
                'Onega',
                'Ladoga',
                'Huron',
                'Baikal'
            ]
        },
        {
            question: 'This water body, which is South Americas largest freshwater lake, is the highest commercially navigable lake.',
            answer: 'Titicaca',
            choices: [
                'Nyasa',
                'Nicaragua',
                'Titicaca',
                'Michigan'
            ]
        },
        {
            question: 'This country has more than 60% of worlds lakes due to its special drainage system.',
            answer: 'Canada',
            choices: [
                'Australia',
                'Russia',
                'Canada',
                'The USA'
            ]
        },
        {
            question: 'This freshwater-lake island, with a surface area of 2,766 km², is the biggest on Earth.',
            answer: 'Manitoulin Island',
            choices: [
                'Islandlake',
                'Ainslie',
                'Manitoulin Island',
                'Isle of Wight'
            ]
        },
        {
            question: 'What Canadian lake is the largest in the world, located on an island?',
            answer: 'Nettilling Lake',
            choices: [
                'Nettilling Lake',
                'Aral',
                'Winnipeg',
                'Michigan'
            ]
        },
        {
            question: 'This is the lowest lake on Earth, situated at about 400 meters below sea level on the border between Israel and Jordan.',
            answer: 'Dead Sea',
            choices: [
                'Issyk-Kul',
                'Balkhash',
                'Urmia',
                'Dead Sea'
            ]
        },
        {
            question: 'Which tiny lake located in Tibet is the highest lake on Earth?',
            answer: 'Lhagba Pool',
            choices: [
                'Lhagba Pool',
                'Rush Lake',
                'Laguna Lobato',
                'Poquentica Lake'
            ]
        },
        {
            question: 'With a surface area of about 82,000 km², this lake between Ontario and Minnesota is the largest single freshwater lake in the world.',
            answer: 'Lake Superior',
            choices: [
                'Turkana',
                'Michigan',
                'Lake Superior',
                'Onega'
            ]
        },
        {
            question: 'The word volcano comes from the name of the Roman god of fire, Vulcan. Who is the analogue of Vulcan in Greek mythology?',
            answer: 'Hephaestus',
            choices: [
                'Hephaestus',
                'Helios',
                'Hermes',
                'Zeus'
            ]
        },
        {
            question: 'If magma contains more than 65% silica, the lava is called this.',
            answer: 'felsic or acidic',
            choices: [
                'felsic or acidic',
                'thick',
                'mafic or basic',
                'dense'
            ]
        },
        {
            question: 'Yellowstone Caldera is considered a supervolcano because within the past two million years it has erupted extremely violently three times . The most recent eruption occurred this long ago, and spread volcanic ash over most of the North American continent.',
            answer: '640,000 years',
            choices: [
                '1,510,000 years',
                '40,000 years',
                '640,000 years',
                '17,000 years'
            ]
        },
        {
            question: 'Which of the following states of America is an inland one and has an official motto that does not come from Latin?',
            answer: 'Montana',
            choices: [
                'Montana',
                'Virginia',
                'Oklahoma',
                'South Carolina'
            ]
        },
        {
            question: 'Which of the following states has an official motto In God we trust, which is also the official motto of the United States of America?',
            answer: 'Florida',
            choices: [
                'Georgia',
                'Washington',
                'South Dakota',
                'Florida'
            ]
        },
        {
            question: 'Three of these US states have an official motto related to liberty. Spot the odd one.',
            answer: 'Oklahoma',
            choices: [
                'Iowa',
                'Oklahoma',
                'New Jersey',
                'New Hampshire'
            ]
        },
        {
            question: 'This famous Latin maxim, which is the official motto of South Carolina, means While I breathe, I hope.',
            answer: 'Dum spiro spero',
            choices: [
                'Si quaeris peninsulam amoenam circumspice',
                'Nil sine numine',
                'Salus populi suprema lex esto',
                'Dum spiro spero'
            ]
        },
        {
            question: 'Three of the following US states have a motto consisting of one single word in English. Which one does not belong to the group?',
            answer: 'West Virginia',
            choices: [
                'Utah',
                'Texas',
                'West Virginia',
                'Rhode Island'
            ]
        },
        {
            question: 'North to the Future is the official motto of this US state, which is the largest in area.',
            answer: 'Alaska',
            choices: [
                'Texas',
                'Alaska',
                'Nevada',
                'Colorado'
            ]
        },
        {
            question: 'Which of the following maxims, meaning The people rule, is the official state motto of Arkansas?',
            answer: 'Regnat populus',
            choices: [
                'Esto perpetua',
                'Regnat populus',
                'Dirigo',
                'Ditat Deus'
            ]
        },
        {
            question: 'This famous exclamation, which has been attributed to ancient scientist Archimedes, is the official state motto of California.',
            answer: 'Eureka',
            choices: [
                'Excelsior!',
                'Virtute et armis',
                'Ad astra per aspera',
                'Eureka'
            ]
        },
        {
            question: 'The official motto of this state in the Pacific Northwest of the United States comes from Chinook Jargon.',
            answer: 'Washington',
            choices: [
                'Wisconsin',
                'Washington',
                'Pennsylvania',
                'New York'
            ]
        },
        {
            question: 'Which of these states has an official motto that doesnt include the word rights in it?',
            answer: 'Indiana',
            choices: [
                'Iowa',
                'Indiana',
                'Wyoming',
                'Alabama'
            ]
        },
        {
            question: 'Which volcano, located on Ross Island, Antarctica, is the southernmost active volcano on Earth?',
            answer: 'Mount Erebus',
            choices: [
                'Mayon Volcano',
                'Cold Bay Volcano',
                'Mount Erebus',
                'Teide'
            ]
        },
        {
            question: 'This volcano, which is the largest in Europe, is located on the largest island in the Mediterranean Sea.',
            answer: 'Mount Etna',
            choices: [
                'Mount Etna',
                'Hekla',
                'El Misti',
                'Santorini'
            ]
        },
        {
            question: 'Popocatépetl, a volcano whose name means Smoking Mountain, is 70 km away from the capital of which American country?',
            answer: 'Mexico',
            choices: [
                'Mexico',
                'Peru',
                'Canada',
                'Argentina'
            ]
        },
        {
            question: 'Mount Vesuvius, that is notorious for the destruction of two Roman cities in the year 79, was linked most closely to which hero and demigod?',
            answer: 'Hercules',
            choices: [
                'Asclepius',
                'Apollo',
                'Zeus',
                'Hercules'
            ]
        },
        {
            question: 'What is the biggest extinct volcano in Ecuador, situated in the Andes mountain.',
            answer: 'Chimborazo',
            choices: [
                'Chimborazo',
                'Ojos Del Salado',
                'Llullaillaco',
                'Cotopaxi'
            ]
        },
        {
            question: 'This dormant volcano, which is 66 km northeast of Tehran, is the symbol of Iranian resistance against foreign rule.',
            answer: 'Mount Damavand',
            choices: [
                'Mount Hood',
                'Krakatoa',
                'Mount Damavand',
                'Krafla'
            ]
        },
        {
            question: 'This active volcano, whose name means long mountain in Hawaiian, is one of the five peaks that form the Island of Hawaii.',
            answer: 'Mauna Loa',
            choices: [
                'Cotopaxi',
                'Mauna Loa',
                'Mount Kea',
                'Hekla'
            ]
        },
        {
            question: 'What volcano located on the island of Tenerife represents the highest mountain on Spanish territories?',
            answer: 'Teide',
            choices: [
                'Teide',
                'Stromboli',
                'Santorini',
                'Duvalo'
            ]
        },
        {
            question: 'The name of this volcano, located on the Alaska Peninsula, means new eruption.',
            answer: 'Novarupta',
            choices: [
                'Newatsa',
                'Mount Rainier',
                'Novarupta',
                'Mount Hood'
            ]
        },
        {
            question: 'Which is the volcanically active region that is situated in a famous national US park and has a territory of 55 kilometers by 72 kilometers?',
            answer: 'Yellowstone Caldera',
            choices: [
                'Yosemite Valley',
                'Yellowstone Caldera',
                'Mount Shasta',
                'Cold Bay Volcano'
            ]
        },
        {
            question: 'Where is the southernmost point in all 50 states?',
            answer: 'Hawaii',
            choices: [
                'Texas',
                'Hawaii',
                'Florida',
                'California'
            ]
        },
        {
            question: 'And where is the lowest point in the USA, North America, and western hemisphere? I need the state and national park name.',
            answer: 'California, Death Valley NP',
            choices: [
                'Maine, Acadia NP',
                'California, Death Valley NP',
                'Arizona, Grand Canyon NP',
                'Wyoming, Yellowstone NP'
            ]
        },
        {
            question: 'The state with the largest area in the lower 48 is?',
            answer: 'Texas',
            choices: [
                'California',
                'Texas',
                'Montana',
                'Arizona'
            ]
        },
        {
            question: 'England, Norway, Belgium and Denmark all border this sea.',
            answer: 'North sea',
            choices: [
                'Baltic sea',
                'Black sea',
                'North sea',
                'Aegean sea'
            ]
        },
        {
            question: 'Towards the beginning of the new millennium, three of these four countries had a population of approximately 32 million people. Which is the odd one?',
            answer: 'Colombia',
            choices: [
                'Algeria',
                'Kenya',
                'Colombia',
                'Morocco'
            ]
        },
        {
            question: 'USA is considered to be one of the most popular destinations, where thousands of immigrants come to seek asylum. Just one of these four states is similar in to USA in this respect.',
            answer: 'France',
            choices: [
                'France',
                'Finland',
                'Japan',
                'Portugal'
            ]
        },
        {
            question: 'Ireland, Germany and Austria are famous for the high consumption of this alcohol.',
            answer: 'Beer',
            choices: [
                'Brandy',
                'Beer',
                'Wine',
                'Vodka'
            ]
        },
        {
            question: 'This island is well known in scientific fields for being home of five percent of the worlds plant and animal species, with 80% of them unique to it. The island is also the fourth biggest on Earth, with population of about 17,500,000 people.',
            answer: 'Madagascar',
            choices: [
                'Greenland',
                'Madagascar',
                'New Guinea',
                'Tasmania'
            ]
        },
        {
            question: 'In Greek mythology, this island is the legendary birthplace of the goddess of beauty, love, and passion, the charming Aphrodite, where according to the legend, she emerged from the sea foam.',
            answer: 'Cyprus',
            choices: [
                'Crete',
                'Cyprus',
                'Limnos',
                'Rhodes'
            ]
        },
        {
            question: 'Because of its spectacular nature forms, one of this insular countrys islands has been a set for the filming of many movie productions, including the highly successful, Lord of the Rings and The Chronicles of Narnia.',
            answer: 'New Zealand',
            choices: [
                'The Philippines',
                'New Zealand',
                'Indonesia',
                'New Guinea'
            ]
        },
        {
            question: 'Despite being the largest in the world, this island is sparsely populated, due to its unfavourable climate.',
            answer: 'Greenland',
            choices: [
                'Greenland',
                'New Guinea',
                'Victoria Island',
                'Madagascar'
            ]
        },
        {
            question: 'Being the most populous in the world, with bigger population than Australia and Antarctica, the density of this islands inhabitants forced the countrys government to start transmigration programs, aimed at resettling people to other, less-crowded parts of the country.',
            answer: 'Java',
            choices: [
                'Java',
                'Sumatra',
                'Borneo',
                'Sulawesi'
            ]
        },
        {
            question: 'This is the largest island in the Mediterranean Sea, famous for one of the worlds most active volcanoes - Etna.',
            answer: 'Sicily',
            choices: [
                'Sicily',
                'Crete',
                'Sardinia',
                'Corse'
            ]
        },
        {
            question: 'Al Nakheel Properties, one of the leading real estate developers in Dubai and creator of the worldwide famous Palm Islands, is also the initiator of another grand project of artificial islands, which resembles the shape of what?',
            answer: 'The globe',
            choices: [
                'A seashell',
                'The globe',
                'A human face',
                'A dolphin'
            ]
        },
        {
            question: 'The gowni is a typical national costume in which African country?',
            answer: 'Tanzania',
            choices: [
                'Tanzania',
                'Malawi',
                'Uganda',
                'Indonesia'
            ]
        },
        {
            question: 'These knee-breeches made of leather are a traditional Bavarian garment.',
            answer: 'Lederhosen',
            choices: [
                'Kilt',
                'Lederhosen',
                'Kisen',
                'Wrestlers'
            ]
        },
        {
            question: 'Hijab, which is also a term meaning barrier, is worn as a traditional clothing in which countries?',
            answer: 'Arabic',
            choices: [
                'African',
                'European',
                'Arabic',
                'Latin'
            ]
        },
        {
            question: 'Which of these national costumes is closely related to Sikhism - a religion that comes from 16th-century northern India?',
            answer: 'Turban',
            choices: [
                'Khalsa',
                'Sari',
                'Turban',
                'Sayyid'
            ]
        },
        {
            question: 'Barong is the embroidered formal garment of which country in South-East Asia?',
            answer: 'The Philippines',
            choices: [
                'Russia',
                'Indonesia',
                'The Philippines',
                'Japan'
            ]
        },
        {
            question: 'Which of these national costumes does not belong to a European nation?',
            answer: 'Hanfu',
            choices: [
                'Hanfu',
                'Tracht',
                'Kilt',
                'Kroje'
            ]
        },
        {
            question: 'Which of these pieces of clothing is worn on the head?',
            answer: 'Fez',
            choices: [
                'Fez',
                'Mitumba',
                'Koto',
                'Kiondo'
            ]
        },
        {
            question: 'Three of the enlisted national garments are African, while the fourth one is Norwegian. Which one?',
            answer: 'Bunad',
            choices: [
                'Sanafil',
                'Bunad',
                'Dashiki',
                'Boubou'
            ]
        },
        {
            question: 'According to the legend, which of these is a part of the Three Fortunate Concealments that protect Britain from any danger coming from the sea?',
            answer: 'The head of Bran the Blessed',
            choices: [
                'The head of Bran the Blessed',
                'Stone of Destiny',
                'The Dragons',
                'The bones of Gwerthefyr the Blessed'
            ]
        },
        {
            question: 'While driving or walking down Kings Cross Road and Farringdon Road in London few people are aware that unseen beneath them runs which river?',
            answer: 'River Fleet',
            choices: [
                'River Thames',
                'River Avon (Shakespeares Avon)',
                'River Rhodda',
                'River Fleet'
            ]
        },
        {
            question: 'Who made the statue of King Richard I outside the Houses of Parliament in Old Palace Yard in London?',
            answer: 'Baron Carlo Marochetti',
            choices: [
                'John Doubleday',
                'Baron Carlo Marochetti',
                'Sir George Frampton',
                'Joseph Edgar Boehm'
            ]
        },
        {
            question: 'The Great Pavement, a hidden, unknown to most tourists and seldom-displayed treasure, is located in which building in London?',
            answer: 'Westminster Abbey',
            choices: [
                'Buckingham Palace',
                'Tate Gallery',
                'St Jamess Palace',
                'Westminster Abbey'
            ]
        },
        {
            question: 'The famous department store Harrods that occupies an entire block is located on which road in London?',
            answer: 'Brompton Road',
            choices: [
                'Abbey Road',
                'Threadneedle Street',
                'Brompton Road',
                'Fleet Street'
            ]
        },
        {
            question: 'The Old Royal Observatory, which is a part of the National Maritime Museum in London, was built in what year?',
            answer: '1675',
            choices: [
                '1675',
                '1765',
                '1567',
                '1657'
            ]
        },
        {
            question: 'This famous writer, whose house was at 17 Gough Square in London, said: When a man is tired of London, he is tired of life, for there is in London all life can afford.',
            answer: 'Dr Samuel Johnson',
            choices: [
                'Charles Dickens',
                'Dr Samuel Johnson',
                'Thomas Chestre',
                'Tomas John Dibdin'
            ]
        },
        {
            question: 'The Badwater basin, the lowest point in North America, is located in which US valley?',
            answer: 'Death Valley',
            choices: [
                'Sun Valley',
                'Death Valley',
                'Big Smoky Valley',
                'Hudson Valley'
            ]
        },
        {
            question: 'The Big Smoky Valley, that runs between the Toiyabe Range and the Toquima Range, is located in which US state?',
            answer: 'Nevada',
            choices: [
                'Minnesota',
                'Indiana',
                'Oregon',
                'Nevada'
            ]
        },
        {
            question: 'The Grand Valley is an extended populated agricultural valley located along which US river?',
            answer: 'Colorado River',
            choices: [
                'Alabama River',
                'Mississippi River',
                'Colorado River',
                'Missouri River'
            ]
        },
        {
            question: 'Which scenic US valley was described by conservationist John Muir in the following way: (...) None can escape its charms. Its natural beauty cleans and warms like a fire, and you will be willing to stay forever in one place like a tree.?',
            answer: 'Yosemite Valley',
            choices: [
                'Willamette Valley',
                'Yosemite Valley',
                'Sun Valley',
                'Yakima Valley'
            ]
        },
        {
            question: 'This densely populated valley in the state of Utah is enclosed by steep mountains in every direction except the northwest.',
            answer: 'Salt Lake Valley',
            choices: [
                'St. Lawrence Valley',
                'Livermore Valley',
                'Las Vegas Valley',
                'Salt Lake Valley'
            ]
        },
        {
            question: 'The Shenandoah Valley in western Virginia derives its name from a Native American expression meaning what?',
            answer: 'Beautiful Daughter of the Stars',
            choices: [
                'Beautiful Daughter of the Fields',
                'Beautiful Mother of the Fruits',
                'Beautiful Mother of the Land',
                'Beautiful Daughter of the Stars'
            ]
        },
        {
            question: 'The Menomonee Valley along the Menomonee River in Milwaukee, Wisconsin has what peculiar shape?',
            answer: 'U-shape',
            choices: [
                'S-shape',
                'Y-shape',
                'U-shape',
                'V-shape'
            ]
        },
        {
            question: 'Owens Valley, the arid ranching valley of the Owens River, stretches for approximately 75 miles (120 km) on the territory of which US state?',
            answer: 'California',
            choices: [
                'California',
                'Arkansas',
                'Alabama',
                'Arizona'
            ]
        },
        {
            question: 'According to the 2000 Census, what is the approximate population of The Bronx, New York?',
            answer: '1.3 million',
            choices: [
                '530,000',
                '1.3 million',
                '930,000',
                '130,000'
            ]
        },
        {
            question: 'Who was the first European to see The Bronx, NY?',
            answer: 'Henry Hudson',
            choices: [
                'Henry Hutchinson',
                'Jonas Bronck',
                'Henry Hudson',
                'Jonas Valerian'
            ]
        },
        {
            question: 'Which one of these statements is true about The Bronx, NY?',
            answer: 'The only borough that is not an island',
            choices: [
                'The only borough with a zoo',
                'The only borough  that has no colleges',
                'The only borough that is not an island',
                'The highest  borough above sea level .'
            ]
        },
        {
            question: 'In 1643, a Native American uprising killed this unauthorized Puritan preacher of a dissident church discussion group, and pioneer in Rhode Island and the Bronx.',
            answer: 'Anne Hutchinson',
            choices: [
                'Peter Cooper',
                'Richard Morris',
                'Anne Hutchinson',
                'Roger Williams'
            ]
        },
        {
            question: 'This oldest house in The Bronx, build in 1748, is New York Citys first house museum, operated since 1897 as a public museum by The National Society of Colonial Dames in the State of New York.',
            answer: 'Van Cortlandt House',
            choices: [
                'Valerian House',
                'Van Cortlandt House',
                'Throgs Neck',
                'Fordam Arms'
            ]
        },
        {
            question: 'In 1776, 400 British and Hessian troops land in The Bronx.  A group of 400 American troops held them off while Washington got the main army away safely.  What was this battle called ?',
            answer: 'The Battle of Pells Point',
            choices: [
                'The Battle of Pells Point',
                'The Battle of Throgs Neck',
                'The Battle of Eastchester',
                'The Battle of The Bronx'
            ]
        },
        {
            question: 'The first college in The Bronx, known as this today, was built in 1884.',
            answer: 'Fordham University',
            choices: [
                'Mercy College',
                'Manhattan College',
                'Fordham University',
                'Lehman College'
            ]
        },
        {
            question: 'Edgar Allen Poe wrote this famous poem in The Bronx in 1846.',
            answer: 'Annabel Lee',
            choices: [
                'Call Me Ishmal',
                'Our American War',
                'Annabel Lee',
                'Hiawatha'
            ]
        },
        {
            question: 'In 1899, this  world famous institution was opened in The Bronx.',
            answer: 'The Bronx Zoo',
            choices: [
                'Columbia University',
                'The U.S. Olympic Hall of Fame',
                'The Bronx Zoo',
                'The American Hall of Fame'
            ]
        },
        {
            question: 'This world famous building opened in The Bronx in 1923.',
            answer: 'Yankee Stadium',
            choices: [
                'The Top of the Sixes',
                'Yankee Stadium',
                'The Louis Morris Building',
                'The Shlump Towers'
            ]
        },
        {
            question: 'What are the colors on the flag of  The Bronx, NY?',
            answer: 'Blue, White, Orange',
            choices: [
                'Red, White, Blue',
                'Blue, White, Green',
                'Blue, White, Orange',
                'Red, Green, Orange'
            ]
        },
        {
            question: 'Little Rock is the capital and most populous city of this US state.',
            answer: 'Arkansas',
            choices: [
                'Arkansas',
                'Wichita',
                'Kansas',
                'Topeka'
            ]
        },
        {
            question: 'What US state borders the states of Virginia, Kentucky, Ohio, Pennsylvania and Maryland?',
            answer: 'West Virginia',
            choices: [
                'Tennessee',
                'Virginia',
                'West Virginia',
                'North Carolina'
            ]
        },
        {
            question: 'Which US state is nicknamed The Pine Tree State?',
            answer: 'Maine',
            choices: [
                'New Hampshire',
                'Missouri',
                'Massachusetts',
                'Maine'
            ]
        },
        {
            question: 'The southern region of what US state is known as Little Egypt?',
            answer: 'Illinois',
            choices: [
                'Virginia',
                'Illinois',
                'Ohio',
                'Maryland'
            ]
        },
        {
            question: 'The capital city of this US state is Trenton, and its largest city is Newark.',
            answer: 'New Jersey',
            choices: [
                'Montana',
                'New Hampshire',
                'New Mexico',
                'New Jersey'
            ]
        },
        {
            question: 'The name of which American state means red people in the Choctaw language?',
            answer: 'Oklahoma',
            choices: [
                'Ohio',
                'Oklahoma',
                'North Dakota',
                'Oregon'
            ]
        },
        {
            question: 'What US state is known as The Volunteer State?',
            answer: 'Tennessee',
            choices: [
                'Utah',
                'Delaware',
                'Tennessee',
                'Colorado'
            ]
        },
        {
            question: 'The flag of what US state features a gold torch and nineteen stars on a blue rectangular field?',
            answer: 'Indiana',
            choices: [
                'Illinois',
                'Idaho',
                'Indiana',
                'Iowa'
            ]
        },
        {
            question: 'What US state is known as the Peach State?',
            answer: 'Georgia',
            choices: [
                'Louisiana',
                'Georgia',
                'Montana',
                'Connecticut'
            ]
        },
        {
            question: 'The name of this US state means flat water and is derived from the name of the Platte River that flows through the state.',
            answer: 'Nebraska',
            choices: [
                'Montana',
                'Nebraska',
                'Utah',
                'Oklahoma'
            ]
        },
        {
            question: 'Which country is known as Österreich in their native language?',
            answer: 'Austria',
            choices: [
                'Bulgaria',
                'Germany',
                'Austria',
                'The Netherlands'
            ]
        },
        {
            question: 'Which countrys capital city is considered de facto capital of the European Union?',
            answer: 'Belgiums',
            choices: [
                'UKs',
                'Hollands',
                'Belgiums',
                'Frances'
            ]
        },
        {
            question: 'Which country has the river Danube as most of its northern border?',
            answer: 'Bulgaria',
            choices: [
                'Austria',
                'Hungary',
                'Bulgaria',
                'Romania'
            ]
        },
        {
            question: 'Which EU member is divided into a Greek and a Turkish part?',
            answer: 'Cyprus',
            choices: [
                'Greece',
                'Slovenia',
                'Cyprus',
                'Bulgaria'
            ]
        },
        {
            question: 'Which countrys first president was Václav Havel, a writer and dramatist?',
            answer: 'Czech Republic',
            choices: [
                'Hungary',
                'Poland',
                'Czech Republic',
                'Slovakia'
            ]
        },
        {
            question: 'Which Nordic country was first to enter the European Union?',
            answer: 'Denmark',
            choices: [
                'Denmark',
                'Sweden',
                'Finland',
                'Norway'
            ]
        },
        {
            question: 'Which European Union member is home to Santa Claus?',
            answer: 'Finland',
            choices: [
                'Finland',
                'Cyprus',
                'Turkey',
                'Sweden'
            ]
        },
        {
            question: 'Which of the EU founding members is the country of Liberté, Égalité, Fraternité?',
            answer: 'France',
            choices: [
                'France',
                'UK',
                'Germany',
                'Italy'
            ]
        },
        {
            question: 'Which European Union member has the greatest number of islands?',
            answer: 'Greece',
            choices: [
                'Greece',
                'Italy',
                'UK',
                'Denmark'
            ]
        },
        {
            question: 'Which country is the only member of the European Union that is partly located in Africa?',
            answer: 'Spain',
            choices: [
                'France',
                'UK',
                'Spain',
                'Malta'
            ]
        },
        {
            question: 'Which EU member has a significant part of its territory below sea level?',
            answer: 'The Netherlands',
            choices: [
                'Belgium',
                'The Netherlands',
                'Poland',
                'Estonia'
            ]
        },
        {
            question: 'This European Union member was once known for huge migration of its people, mainly to the US and UK. Nowadays, however, it attracts many immigrants from new EU members.',
            answer: 'Ireland',
            choices: [
                'Spain',
                'Ireland',
                'Italy',
                'Germany'
            ]
        },
        {
            question: 'Which EU member was the largest country in Europe in XIV century, but now has land area of just 65 000 sq. km?',
            answer: 'Lithuania',
            choices: [
                'Denmark',
                'Lithuania',
                'Austria',
                'Netherlands'
            ]
        },
        {
            question: 'Which mini country was among the European Union founding members?',
            answer: 'Luxembourg',
            choices: [
                'Luxembourg',
                'Malta',
                'Monaco',
                'Liechtenstien'
            ]
        },
        {
            question: 'In which European Union member the native people make up only 60% of the total population?',
            answer: 'Latvia',
            choices: [
                'Poland',
                'Austria',
                'Latvia',
                'France'
            ]
        },
        {
            question: 'Which former British colony joined the European Union in 2004?',
            answer: 'Malta',
            choices: [
                'Gibraltar',
                'Ireland',
                'Syria',
                'Malta'
            ]
        },
        {
            question: 'Which country is the biggest contributor to the European Union budget?',
            answer: 'Germany',
            choices: [
                'UK',
                'Germany',
                'Italy',
                'France'
            ]
        },
        {
            question: 'Which country has twice rejected European Union membership in national referendums?',
            answer: 'Norway',
            choices: [
                'Poland',
                'Norway',
                'Turkey',
                'UK'
            ]
        },
        {
            question: 'Which European Union member was the first country to reject communist rule and thus sparkle the liberation of so called Eastern Block?',
            answer: 'Poland',
            choices: [
                'Czech Republic',
                'Romania',
                'Germany',
                'Poland'
            ]
        },
        {
            question: 'Where is the European Unions westernmost point not counting overseas territories?',
            answer: 'In Portugals Azores islands',
            choices: [
                'In Spains Canary islands',
                'In Portugals Azores islands',
                'In Iceland',
                'In Ireland'
            ]
        },
        {
            question: 'Which EU member state was known to the ancient Greeks and Romans as Dacia?',
            answer: 'Romania',
            choices: [
                'Macedonia',
                'Bulgaria',
                'Romania',
                'Slovenia'
            ]
        },
        {
            question: 'Which country is the youngest independent state to be a member of the European Union? (It has been an independent country only since 1993.)',
            answer: 'Slovakia',
            choices: [
                'Montenegro',
                'Slovenia',
                'Slovakia',
                'Cyprus'
            ]
        },
        {
            question: 'In May 2004 the European Union accepted 10 new countries. Which of them was first to adopt the Euro as its national currency?',
            answer: 'Slovenia',
            choices: [
                'Slovenia',
                'Poland',
                'Slovakia',
                'Estonia'
            ]
        },
        {
            question: 'Which country associated with banking is not a member of the European Union?',
            answer: 'Switzerland',
            choices: [
                'Luxembourg',
                'UK',
                'Austria',
                'Switzerland'
            ]
        },
        {
            question: 'In which country is the European Union’s biggest lake located?',
            answer: 'In Sweden',
            choices: [
                'In Finland',
                'In Poland',
                'In Sweden',
                'In Hungary'
            ]
        },
        {
            question: 'Which Muslim country was recognized as a candidate for accession in the EU on December 12th, 1999 at the Helsinki summit of the European Council?',
            answer: 'Turkey',
            choices: [
                'Israel',
                'Morocco',
                'Syria',
                'Turkey'
            ]
        },
        {
            question: 'All but three European Union official languages are from the Indo-European family. They are Finnish, Estonian and which other language?',
            answer: 'Hungarian',
            choices: [
                'Greek',
                'Hungarian',
                'Polsih',
                'Bulgarian'
            ]
        },
        {
            question: 'Most of the European Union members are also part of a Schengen Agreement that allows their citizens to travel without passports across the member states. Which EU member is outside of the Schengen group?',
            answer: 'UK',
            choices: [
                'Lithuania',
                'UK',
                'Poland',
                'Denmark'
            ]
        },
        {
            question: 'Which member of the European Union completely surrounds two countries that are outside of the club?',
            answer: 'Italy',
            choices: [
                'Austria',
                'France',
                'Spain',
                'Italy'
            ]
        },
        {
            question: 'Wat Chiang Man is a temple in Thailand. In it, fifteen of these animals represent a sea of unformed matter upon which the cosmos of the Chedi floats.',
            answer: 'Elephants',
            choices: [
                'Fish',
                'Monkeys',
                'Birds',
                'Elephants'
            ]
        },
        {
            question: 'The Shaolin temples are perhaps the Buddhist monasteries best known in the West. The word Shaolin means this.',
            answer: 'Young Forest',
            choices: [
                'Blue Sky',
                'Silent Soul',
                'Young Forest',
                'Pure Water'
            ]
        },
        {
            question: 'Which EU country or US state is not entirely situated on (an) island(s)?',
            answer: 'Rhode Island',
            choices: [
                'UK',
                'Hawaii',
                'Rhode Island',
                'Cyprus'
            ]
        },
        {
            question: 'Which country or state was the first to be attacked in WWII?',
            answer: 'Poland',
            choices: [
                'Denmark',
                'Hawaii',
                'Poland',
                'US Virgin Islands'
            ]
        },
        {
            question: 'Where was the colonial settlement New Amsterdam located?',
            answer: 'The state of New York',
            choices: [
                'UK',
                'New Jersey',
                'Holland',
                'The state of New York'
            ]
        },
        {
            question: 'Which of these is the largest in terms of area?',
            answer: 'Germany',
            choices: [
                'Georgia',
                'Florida',
                'Germany',
                'Finland'
            ]
        },
        {
            question: 'Which of these peaks is the highest?',
            answer: 'McKinley (Alaska)',
            choices: [
                'Grossglockner (Austria)',
                'McKinley (Alaska)',
                'Mont Blanc (France)',
                'Mount Elbert (Colorado)'
            ]
        },
        {
            question: 'Which of the following metropolitan areas is the largest in terms of population?',
            answer: 'New York City',
            choices: [
                'London',
                'New York City',
                'Paris',
                'Los Angeles'
            ]
        },
        {
            question: 'Which river, flowing entirely through a single country or state, is the longest?',
            answer: 'Vistula (Poland)',
            choices: [
                'Vistula (Poland)',
                'Loire (France)',
                'Iowa (Iowa)',
                'Illinois (Illinois)'
            ]
        },
        {
            question: 'What is the location of the worlds largest particle physics laboratory, established in 1954?',
            answer: 'In neither of them',
            choices: [
                'In the EU',
                'Both have laboratories of equal size.',
                'In the US',
                'In neither of them'
            ]
        },
        {
            question: 'Which of the following countries and states shares its name with its capital city?',
            answer: 'Luxembourg',
            choices: [
                'New York',
                'Malta',
                'Luxembourg',
                'Oklahoma'
            ]
        },
        {
            question: 'Which of these cities was established first?',
            answer: 'Madrid (Spain)',
            choices: [
                'New York City (New York)',
                'Copenhagen (Denmark)',
                'Madrid (Spain)',
                'Boston (Massachusetts)'
            ]
        },
        {
            question: 'Which of the following flags doesnt include a cross?',
            answer: 'the flag of Alaska',
            choices: [
                'the flag of Mississippi',
                'the flag of the UK',
                'the flag of Denmark',
                'the flag of Alaska'
            ]
        },
        {
            question: 'Birmingham is the most populous city of which country or US state?',
            answer: 'Alabama',
            choices: [
                'Austria',
                'Alabama',
                'the UK',
                'Utah'
            ]
        },
        {
            question: 'Which one of these is not a Greek Mediterranean island?',
            answer: 'Minorca',
            choices: [
                'Minorca',
                'Lemnos',
                'Crete',
                'Santorini'
            ]
        },
        {
            question: 'Which one of these Mediterranean islands is the smallest in area?',
            answer: 'Corfu',
            choices: [
                'Corsica',
                'Cyprus',
                'Crete',
                'Corfu'
            ]
        },
        {
            question: 'What two colors are featured on the flag and coat of arms of Malta, a country consisting of seven Mediterranean islands?',
            answer: 'White and red',
            choices: [
                'Green and black',
                'Yellow and purple',
                'White and red',
                'Blue and yellow'
            ]
        },
        {
            question: 'Which one of these Mediterranean islands, belonging to Italy, is the largest in area?',
            answer: 'Sardinia',
            choices: [
                'Sardinia',
                'Procida',
                'Capri',
                'Ischia'
            ]
        },
        {
            question: 'This island, on which the volcano Etna is situated, is the largest Mediterranean island.',
            answer: 'Sicily',
            choices: [
                'Sicily',
                'Corsica',
                'Rhodes',
                'Sardinia'
            ]
        },
        {
            question: 'Which French Mediterranean island is the birthplace of Napoléon Bonaparte?',
            answer: 'Corsica',
            choices: [
                'Cyprus',
                'Gozo',
                'Corsica',
                'Montecristo'
            ]
        },
        {
            question: 'aeda carried out a terrorist attack near a synagogue on which Tunisian island?',
            answer: 'Djerba',
            choices: [
                'Djerba',
                'Yalikavak',
                'Salih Ada',
                'Kargi Adasi'
            ]
        },
        {
            question: 'Which one of these Mediterranean islands does not belong to the group of the Balearic Islands?',
            answer: 'Capri',
            choices: [
                'Ibiza',
                'Mallorca',
                'Capri',
                'Formentera'
            ]
        },
        {
            question: 'Which of these Mediterranean islands belongs to Croatia and is home of the endangered Griffon Vulture?',
            answer: 'Cres',
            choices: [
                'Filfla',
                'Procida',
                'Cres',
                'Gorgona'
            ]
        },
        {
            question: 'What motto do North Carolina license plates carry?',
            answer: 'First In Flight',
            choices: [
                'The Old North State',
                'First In Flight',
                'Nothing Finer',
                'Tarheel State'
            ]
        },
        {
            question: 'North Carolina has been well represented on the American Idol TV series Which contestant from the state became Americas Idol in 2004?',
            answer: 'Fantasia Barrino',
            choices: [
                'Fantasia Barrino',
                'Kerrier Ann Pickler',
                'Clay Aiken',
                'Taylor Hicks'
            ]
        },
        {
            question: 'In 1838 the Federal Indian Removal Policy was forced into effect by The Treaty of New Echota. Twenty Cherokee Indians, none elected officials of the Cherokee Nation, signed over all Cherokee Territory east of the Mississippi for five million dollars. The Cherokee Indians were then forced to march from their home in the mountain of North Carolina to Okalahoma. This journey became know by what name?',
            answer: 'Trail of Tears',
            choices: [
                'Journey of No Return',
                'Trail of Tears',
                'Cherokee Death March',
                'March of Sorrow'
            ]
        },
        {
            question: 'This military complex in North Carolina is one of the largest in the world and home to the 82 Airborne, the Golden Knights, and U.S. Army Special Operations Command.',
            answer: 'Fort Bragg',
            choices: [
                'Fort Bragg',
                'Fort Campbell',
                'Fort Polk',
                'Fort Dix'
            ]
        },
        {
            question: 'Riga is the capital of which Baltic country?',
            answer: 'Latvia',
            choices: [
                'Estonia',
                'Lithuania',
                'Belarus',
                'Latvia'
            ]
        },
        {
            question: 'What country gained independence from the British Mandate for Palestine in 1948?',
            answer: 'Israel',
            choices: [
                'Syria',
                'Sierra Leone',
                'Jordan',
                'Israel'
            ]
        },
        {
            question: 'What city is the capital of Madagascar?',
            answer: 'Antananarivo',
            choices: [
                'Antananarivo',
                'Toamasina',
                'Harare',
                'Maputo'
            ]
        },
        {
            question: 'What river encountered during the Lewis and Clark expedition (1804-1806) flows directly into the Pacific Ocean between Washington and Oregon?',
            answer: 'Columbia',
            choices: [
                'Missouri',
                'Snake',
                'Columbia',
                'Colorado'
            ]
        },
        {
            question: 'Which explorer was the first to reach the South Pole?',
            answer: 'Roald Amundsen',
            choices: [
                'Richard Byrd',
                'Sir Robert Falcon Scott',
                'Roald Amundsen',
                'Sir Ernest Henry Shackleton'
            ]
        },
        {
            question: 'What sea captain claimed British possession of the eastern part of Australia in 1770 naming it New South Wales?',
            answer: 'James Cook',
            choices: [
                'James Cook',
                'Horatio Nelson',
                'Cuthbert Collingwood',
                'Arthur Phillip'
            ]
        },
        {
            question: 'In what South American country was Che Ernesto Guevara born?',
            answer: 'Argentina',
            choices: [
                'Paraguay',
                'Argentina',
                'Bolivia',
                'Suriname'
            ]
        },
        {
            question: 'Near what sea was the ancient city of Troy located ?',
            answer: 'Aegean',
            choices: [
                'Aegean',
                'Mediterranean',
                'Ionian',
                'Adriatic'
            ]
        },
        {
            question: 'Which of these rivers runs through the Czech Republic and Germany?',
            answer: 'Elbe River',
            choices: [
                'Elbe River',
                'Rhine River',
                'Danube River',
                'Rhone River'
            ]
        },
        {
            question: 'Name the European co-principality whose heads of state are the President of France and the Bishop of Urgel.',
            answer: 'Andorra',
            choices: [
                'Andorra',
                'Vatican City',
                'San Marino',
                'Malta'
            ]
        },
        {
            question: 'After World War II, this country was split into two states which were not reunited until 1990.',
            answer: 'Germany',
            choices: [
                'France',
                'Spain',
                'Austria',
                'Germany'
            ]
        },
        {
            question: 'Mount Erebus is a volcano located on this continent.',
            answer: 'Antarctica',
            choices: [
                'Antarctica',
                'Europe',
                'South America',
                'Asia'
            ]
        },
        {
            question: 'Rastafarianism is a religion that venerates Haile Selassie as a god. Haile Selassie was the emperor of the third most populous country in Africa. Name that country.',
            answer: 'Ethiopia',
            choices: [
                'Libya',
                'Ethiopia',
                'Mozambique',
                'Gabon'
            ]
        },
        {
            question: 'Name Asias most densely populated country which has about three million people and an area of less than 250 square miles (402 km²).',
            answer: 'Singapore',
            choices: [
                'Hokkaido',
                'Taiwan',
                'Laos',
                'Singapore'
            ]
        },
        {
            question: 'In what city in Switzerland is the headquarters of the World Trade Organization (WTO) located?',
            answer: 'Geneva',
            choices: [
                'Geneva',
                'Berne',
                'Born',
                'Bamako'
            ]
        },
        {
            question: 'What is a ridge of coral in the sea called?',
            answer: 'Coral Reef',
            choices: [
                'Atoll',
                'Coral Reef',
                'None of these',
                'Coral Island'
            ]
        },
        {
            question: 'It has been found that the black mineral soil from the Dead Sea area of Israel helps maintain a good, young complexion. What is the name of the Israeli company that exports beauty products from the Dead Sea area?',
            answer: 'Ahava',
            choices: [
                'Naot',
                'Kfar Gideon',
                'Rafaele',
                'Ahava'
            ]
        },
        {
            question: 'umran, are believed to have been made by a group of people called what?',
            answer: 'Essenes',
            choices: [
                'BHais',
                'Sircurai',
                'Essenes',
                'Sarafai'
            ]
        },
        {
            question: 'To which countrys territory does the Dead Sea belong?',
            answer: 'Israel and Jordan share ownership',
            choices: [
                'Egypt and Israel share ownership',
                'Israel and Jordan share ownership',
                'Israels territory',
                'Saudi Arabias territory'
            ]
        },
        {
            question: 'What is the average salinity of the Dead Sea?',
            answer: '30 %',
            choices: [
                '11 %',
                '30 %',
                '49 %',
                '54 %'
            ]
        },
        {
            question: 'What body of water feeds the Dead Sea?',
            answer: 'The Jordan River',
            choices: [
                'The Euphrates River',
                'The Mediterranean Ocean',
                'The Red Sea',
                'The Jordan River'
            ]
        },
        {
            question: 'The Bible tells the story of a woman that was turned into a pillar of salt near the Dead Sea. Who was her famous husband?',
            answer: 'Lot',
            choices: [
                'Issac',
                'Abraham',
                'Pharoah',
                'Lot'
            ]
        },
        {
            question: 'The Dead Sea, the lowest point on Earth, is how far below sea level?',
            answer: '418 meters',
            choices: [
                '349  meters',
                '418 meters',
                '517  meters',
                '2608 meters'
            ]
        },
        {
            question: 'What was the name of the great fortification built in 37-31 BC by Roman king Herod I on a high hill above the Dead Sea?',
            answer: 'Masada',
            choices: [
                'Masada',
                'Kadesh-Barnea',
                'Herods Citadel',
                'Vespasians Citadel'
            ]
        },
        {
            question: 'The Dead Sea is part of the Great Rift Valley. How far does this valley extend in length?',
            answer: '3700 miles',
            choices: [
                '6700 miles',
                '697 miles',
                '1697 miles',
                '3700 miles'
            ]
        },
        {
            question: 'What famous California prison was home to Charles Manson?',
            answer: 'Folsom',
            choices: [
                'The Bastille',
                'Sing Sing',
                'Joliet',
                'Folsom'
            ]
        },
        {
            question: 'The Rosenbergs, who were convicted of conspiracy, were held at what prison?',
            answer: 'Sing Sing',
            choices: [
                'Folsom',
                'Alcatraz',
                'Attica',
                'Sing Sing'
            ]
        },
        {
            question: 'Nelsons Column, built to commemorate Admiral Horatio Nelsons death, is a monument in this famous London square.',
            answer: 'Trafalgar Square',
            choices: [
                'Soho Square',
                'Leicester Square',
                'Piccadilly Circus',
                'Trafalgar Square'
            ]
        },
        {
            question: 'Tiananmen Square, which has been the site of a number of political events and student protests, is located in what Chinese city?',
            answer: 'Beijing',
            choices: [
                'Beijing',
                'Shanghai',
                'Guangzhou',
                'Taipei'
            ]
        },
        {
            question: 'The Kremlin, a historic fortified complex at the heart of Moscow, overlooks this square to the east.',
            answer: 'Red Square',
            choices: [
                'Black Square',
                'Azadi Square',
                'Palace Square',
                'Red Square'
            ]
        },
        {
            question: 'What iconic world landmark, sometimes called the Crossroads of the World, was formerly named Longacre Square?',
            answer: 'Times Square',
            choices: [
                'Grosvenor Square',
                'Times Square',
                'Madison Square',
                'St Jamess Square'
            ]
        },
        {
            question: 'What famous square is located in Vatican City, the papal enclave within Rome?',
            answer: 'St. Peters Square',
            choices: [
                'Campo dei Fiori',
                'St. Pauls Square',
                'St. Peters Square',
                'Piazza San Marco'
            ]
        },
        {
            question: 'Grand Place, which is known for its large flower carpet, is the main square of this capital European city.',
            answer: 'Brussels',
            choices: [
                'Berlin',
                'Paris',
                'Strasbourg',
                'Brussels'
            ]
        },
        {
            question: 'Which square is not correctly matched with the capital city in which it is located?',
            answer: 'Azadi Square - Karachi',
            choices: [
                'Red Square - Moscow',
                'Senate Square - Helsinki',
                'Azadi Square - Karachi',
                'Leicester Square - London'
            ]
        },
        {
            question: 'Piazza San Marco (St Marks Square), which Napoleon allegedly called The drawing room of Europe, is the principal square of this Italian city.',
            answer: 'Venice',
            choices: [
                'Florence',
                'Venice',
                'Rome',
                'Milan'
            ]
        },
        {
            question: 'What city in Eastern Europe, often associated with the story of Dracula, is also famous for Revolution Square, which was the site of a 1989 revolt?',
            answer: 'Bucharest',
            choices: [
                'Bucharest',
                'Warsaw',
                'Budapest',
                'Prague'
            ]
        },
        {
            question: 'What former president has addressed more than a million people on many occasions on Plaza de la Revolución in Havana?',
            answer: 'Fidel Castro',
            choices: [
                'Benito Mussolini',
                'Fidel Castro',
                'Salvador Allende',
                'Francisco Franco'
            ]
        },
        {
            question: 'What is the name of the sea that borders the Netherlands?',
            answer: 'North Sea',
            choices: [
                'Red Sea',
                'Black Sea',
                'North Sea',
                'Mediterranean Sea'
            ]
        },
        {
            question: 'What are the three colours of the national flag of the Netherlands from top to bottom?',
            answer: 'Red, white, and blue',
            choices: [
                'Red, white, and blue',
                'Blue, yellow, and red',
                'Red, blue, and white',
                'Green, red, and white'
            ]
        },
        {
            question: 'What is the capital city of the Netherlands?',
            answer: 'Amsterdam',
            choices: [
                'Amsterdam',
                'Amersfort',
                'The Hague',
                'Zwolle'
            ]
        },
        {
            question: 'What two countries border the Netherlands?',
            answer: 'Belgium and Germany',
            choices: [
                'Germany and Lithuania',
                'Germany and France',
                'France and Belgium',
                'Belgium and Germany'
            ]
        },
        {
            question: 'Dutch is the official language of the Netherlands. What is the second official language of the country?',
            answer: 'Frisian',
            choices: [
                'Low Saxon',
                'Frisian',
                'French',
                'English'
            ]
        },
        {
            question: 'Demographically, the Netherlands matches which of this characteristics?',
            answer: 'All of these',
            choices: [
                'All of these',
                'Its population is first in average height in the world.',
                'It is one of most densely populated countries in the world.',
                'It is one of the most densely cabled countries in the world.'
            ]
        },
        {
            question: 'What Mediterranean island is divided between a Greek community and a Turkish community (although the latter is not internationally recognized as a separate entity)?',
            answer: 'Cyprus',
            choices: [
                'Cyprus',
                'Crete',
                'Corsica',
                'Malta'
            ]
        },
        {
            question: 'What South American island is shared by Chile and Argentina?',
            answer: 'Tierra Del Fuego',
            choices: [
                'Islas Malvinas',
                'Tierra Del Fuego',
                'Islas Galapagos',
                'Isla De Pascua'
            ]
        },
        {
            question: 'What island is shared by Indonesia and the nation of East Timor?',
            answer: 'Timor',
            choices: [
                'Timor',
                'New Guinea',
                'Borneo',
                'Flores'
            ]
        },
        {
            question: 'What European island is partially occupied by a neighbouring island nation, which has led to centuries of dispute?',
            answer: 'Ireland',
            choices: [
                'Sardinia',
                'Sicily',
                'Iceland',
                'Ireland'
            ]
        },
        {
            question: 'Which of these islands is shared by three countries?',
            answer: 'Borneo',
            choices: [
                'Luzon',
                'Ireland',
                'Madagascar',
                'Borneo'
            ]
        },
        {
            question: 'What is the name of the island shared by Haiti and the Dominican Republic?',
            answer: 'Hispaniola',
            choices: [
                'Ile dHaiti',
                'Hispaniola',
                'Isla Dominica',
                'Carib Island'
            ]
        },
        {
            question: 'What island is shared by the nations of Indonesia and Papua New Guinea?',
            answer: 'New Guinea',
            choices: [
                'Bougainville',
                'New Guinea',
                'Timor',
                'Borneo'
            ]
        },
        {
            question: 'This tiny Caribbean island is shared by France and the Netherlands.',
            answer: 'St. Martin',
            choices: [
                'St. Lucia',
                'St. Mark',
                'St. Martin',
                'St. Bartholomew'
            ]
        },
        {
            question: 'The tiny island of Märket / Märketin in the Baltic Sea is shared by these two nations.',
            answer: 'Finland and Sweden',
            choices: [
                'Sweden and Denmark',
                'Finland and Estonia',
                'Finland and Russia',
                'Finland and Sweden'
            ]
        },
        {
            question: 'The island of Sebatik, located east of Borneo, is shared by Indonesia and what other nation?',
            answer: 'Malaysia',
            choices: [
                'The Philippines',
                'Singapore',
                'Malaysia',
                'Brunei'
            ]
        },
        {
            question: 'Which is the smallest ocean?',
            answer: 'The Arctic Ocean',
            choices: [
                'The Atlantic Ocean',
                'The Indian Ocean',
                'The Southern Ocean',
                'The Arctic Ocean'
            ]
        },
        {
            question: 'What portion of the Earth’s surface do oceans cover?',
            answer: 'More than two thirds',
            choices: [
                'More than two thirds',
                'One third',
                'Half of it',
                'One fourth'
            ]
        },
        {
            question: 'The Marianas Trench, the deepest location on the surface of the Earths crust, lies in this ocean.',
            answer: 'The Pacific Ocean',
            choices: [
                'The Pacific Ocean',
                'The Southern Ocean',
                'The Indian Ocean',
                'The Atlantic Ocean'
            ]
        },
        {
            question: 'The Pacific Ocean is the largest of the Earths oceanic divisions. Its name is derived from the Latin name Mare Pacificum which has the following meaning.',
            answer: 'The Peaceful Sea',
            choices: [
                'The Peaceful Sea',
                'The Lonely Sea',
                'The Smooth Sea',
                'The Lonely Sea'
            ]
        },
        {
            question: 'Which one of these Asian rivers does not flow into the Indian Ocean?',
            answer: 'Saigon',
            choices: [
                'Zambezi',
                'Saigon',
                'Indus',
                'Ganges'
            ]
        },
        {
            question: 'What sea is known to be the only sea without shores?',
            answer: 'The Sargasso Sea',
            choices: [
                'The Sargasso Sea',
                'The Norwegian Sea',
                'The Labrador Sea',
                'The Celtic Sea'
            ]
        },
        {
            question: 'The Bering Sea is a part of which ocean?',
            answer: 'The Pacific Ocean',
            choices: [
                'The Arctic Ocean',
                'The Pacific Ocean',
                'The Indian Ocean',
                'The Atlantic Ocean'
            ]
        },
        {
            question: 'The Mediterranean Sea is connected to the Atlantic Ocean by this strait.',
            answer: 'The Strait of Gibraltar',
            choices: [
                'The Strait of Gibraltar',
                'The Dardanelles',
                'Strait of Magellan',
                'Strait of Dover'
            ]
        },
        {
            question: 'The famous Île Notre-Dame, an artificial island built from earth excavated for a metropolitan railway, is located in which country?',
            answer: 'Canada',
            choices: [
                'England',
                'Canada',
                'France',
                'Switzerland'
            ]
        },
        {
            question: 'What is the popular name of the artificial island in Tokyo Bay, whose name is Yume No Shima in Japanese?',
            answer: 'Dream Island',
            choices: [
                'Dream Island',
                'Water Lilly',
                'Wind Island',
                'Sun Island'
            ]
        },
        {
            question: 'What is the name of the Peruvian floating islands, located in Lake Titicaca?',
            answer: 'Uros',
            choices: [
                'Chaka',
                'Laka',
                'Uros',
                'Barro'
            ]
        },
        {
            question: 'Which man-made island, located to the southwest of Singapore, was created by joining several natural islands?',
            answer: 'Jurong Island',
            choices: [
                'Formoza',
                'Jurong Island',
                'Spiral Island',
                'Neeltje-Jans'
            ]
        },
        {
            question: 'What is the name of the artificial island located in the Gatun Lake portion of the Panama Canal?',
            answer: 'Barro Colorado Island',
            choices: [
                'Thilafushi',
                'Shui Keng Teng',
                'Chubu',
                'Barro Colorado Island'
            ]
        },
        {
            question: 'Which 20-kilometre artificial island, situated in the river Danube, was nicknamed the Copa Kagrana?',
            answer: 'Donauinsel',
            choices: [
                'Peberholm',
                'Burj al-Arab',
                'Odaiba',
                'Donauinsel'
            ]
        },
        {
            question: 'Rokko island, constructed between 1973 and 1992, is an artificial island situated in which country?',
            answer: 'Japan',
            choices: [
                'France',
                'China',
                'The Netherlands',
                'Japan'
            ]
        },
        {
            question: 'Which artificial island is situated in San Francisco Bay, between San Francisco and Oakland?',
            answer: 'Treasure Island',
            choices: [
                'Hulhumalé',
                'Treasure Island',
                'Port Island',
                'Flakfortet'
            ]
        },
        {
            question: 'This artificial island, whose name literally means Pepper Islet, is part of the Oresund Bridge, connecting Denmark with Sweden.',
            answer: 'Peberholm',
            choices: [
                'Peberholm',
                'Kansai',
                'Flakfortet',
                'Palm Islands'
            ]
        },
        {
            question: 'Spiral Island, a small Mexican artificial floating island, was situated on the coast of which sea?',
            answer: 'The Caribbean Sea',
            choices: [
                'The Black Sea',
                'The Caribbean Sea',
                'The Aegean Sea',
                'The North Sea'
            ]
        },
        {
            question: 'The history of EU began on 25th of March 1957 when the European Economic Community was formed. What is the founding act called?',
            answer: 'Treaty of Rome',
            choices: [
                'Treaty of Paris',
                'Schengen Agreement',
                'Schuman Declaration',
                'Treaty of Rome'
            ]
        },
        {
            question: 'Which country was not among the founding states of the European Economic Community (the European Union predecessor)?',
            answer: 'UK',
            choices: [
                'Luxembourg',
                'Italy',
                'France',
                'UK'
            ]
        },
        {
            question: 'When did Ireland join the European Union?',
            answer: '1973',
            choices: [
                '1995',
                '1973',
                '1960',
                '1986'
            ]
        },
        {
            question: 'The citizens of which country rejected the idea of joining the EU in 1972 and again in 1994?',
            answer: 'Norway',
            choices: [
                'Norway',
                'Denmark',
                'Iceland',
                'Finland'
            ]
        },
        {
            question: 'The EU has been a western club for most of its history. But which of these western countries has stayed out of the EU?',
            answer: 'Switzerland',
            choices: [
                'Belgium',
                'Spain',
                'Switzerland',
                'Luxembourg'
            ]
        },
        {
            question: 'Which former Yugoslavian republic was the first to be admitted to the European Union?',
            answer: 'Slovenia',
            choices: [
                'Macedonia',
                'Serbia',
                'Croatia',
                'Slovenia'
            ]
        },
        {
            question: 'The 6th European Union enlargement took place on May 1 2004. How many countries were admitted then?',
            answer: '10',
            choices: [
                '8',
                '12',
                '10',
                '14'
            ]
        },
        {
            question: 'Many countries held national referenda before joining the European Union. Which of the following nations showed the highest support for joining (92% in favour)?',
            answer: 'Slovakia',
            choices: [
                'Poland',
                'Ireland',
                'Lithuania',
                'Slovakia'
            ]
        },
        {
            question: 'What kind of agreement is the Schengen Agreement?',
            answer: 'It allows EU citizens to travel without passports within the EU borders.',
            choices: [
                'It is a visionary chapter about a further EU enlargement.',
                'It allows EU citizens to travel without passports within the EU borders.',
                'It regulates the relationships with non-EU countries, especially Russia.',
                'It introduced a common currency - the Euro.'
            ]
        },
        {
            question: 'When did the euro become the official currency of the Eurozone?',
            answer: '2002',
            choices: [
                '1999',
                '1994',
                '2002',
                '2004'
            ]
        },
        {
            question: 'The flag of which US state features a white American Bison on a blue field?',
            answer: 'Wyoming',
            choices: [
                'Nevada',
                'Wyoming',
                'Texas',
                'South Dakota'
            ]
        },
        {
            question: 'The name of which US state means large creek in the Seneca language?',
            answer: 'Ohio',
            choices: [
                'Idaho',
                'Ohio',
                'Texas',
                'Wisconsin'
            ]
        },
        {
            question: 'Montgomery is the capital city of this US state, and its largest city is Birmingham.',
            answer: 'Alabama',
            choices: [
                'Arizona',
                'Alaska',
                'Arkansas',
                'Alabama'
            ]
        },
        {
            question: 'Everglades National Park is located in this US state.',
            answer: 'Florida',
            choices: [
                'Hawaii',
                'Nevada',
                'Georgia',
                'Florida'
            ]
        },
        {
            question: 'The state drink of this US state is milk, its state bird is the Western Meadowlark, its state flower is the Wild Prairie Rose, and its state slogan is Legendary.',
            answer: 'North Dakota',
            choices: [
                'North Dakota',
                'South Dakota',
                'North Carolina',
                'South Carolina'
            ]
        },
        {
            question: 'According to one theory, the name of this US state comes from the French word for hurricane.',
            answer: 'Oregon',
            choices: [
                'Arizona',
                'Oregon',
                'Colorado',
                'Vermont'
            ]
        },
        {
            question: 'Baton Rouge is the capital of what US state?',
            answer: 'Louisiana',
            choices: [
                'New Hampshire',
                'Maine',
                'Louisiana',
                'North Carolina'
            ]
        },
        {
            question: 'The largest city in what US state hosts Summerfest, or The Worlds Largest Music Festival?',
            answer: 'Wisconsin',
            choices: [
                'New Jersey',
                'Wisconsin',
                'Kentucky',
                'Maryland'
            ]
        },
        {
            question: 'The name of this US state means great river and its symbol is the magnolia tree.',
            answer: 'Mississippi',
            choices: [
                'Missouri',
                'Massachusetts',
                'Mississippi',
                'Minnesota'
            ]
        },
        {
            question: 'Which US state has been nicknamed The First State, The Small Wonder, Blue Hen State, and The Diamond State?',
            answer: 'Delaware',
            choices: [
                'Pennsylvania',
                'Virginia',
                'Delaware',
                'New York'
            ]
        },
        {
            question: 'The Ifugao Rice Terraces are  located in Luzon, in the Philippines. If it were possible to place them end to  end, how long would they extend?',
            answer: '1,400 miles',
            choices: [
                '1,500 miles',
                '5,800 miles',
                '8,000 miles',
                '1,400 miles'
            ]
        },
        {
            question: 'What are the largest cities in the Philippines in terms of land area?',
            answer: 'Davao City and Puerto Princesa City',
            choices: [
                'Manila and Davao City',
                'Zamballes and Puerto Princesa City',
                'Zamballes and Manila',
                'Davao City and Puerto Princesa City'
            ]
        },
        {
            question: 'The Philippines has the worlds largest deposit of heavy water which can be used for atomic energy, in spectroscopy, and as an automobile fuel. What makes heavy water different from water?',
            answer: 'The presence of deuterium',
            choices: [
                'An extra hydrogen molecule',
                'One  less hydrogen molecule making it HO not H2O',
                'An extra oxygen molecule',
                'The presence of deuterium'
            ]
        },
        {
            question: 'From 1888-1889, American traders Simon and Thomas Metcalfe brought some men from Manila to the Western Hemisphere. Which state did they bring them to?',
            answer: 'Alaska',
            choices: [
                'California',
                'Mexico',
                'Oregon',
                'Alaska'
            ]
        },
        {
            question: 'Who was the first  female  President of the Philippines?',
            answer: 'Corazon Aquino',
            choices: [
                'Eleanor Concepcion',
                'Louiza Rizal',
                'Ramona  Magsaysay',
                'Corazon Aquino'
            ]
        },
        {
            question: 'Who is the first Filipino-American to become Governor of a US state?',
            answer: 'Benjamin Cayetano',
            choices: [
                'Franklin  Rakata',
                'Jose Nisperos',
                'Jose Rizal',
                'Benjamin Cayetano'
            ]
        },
        {
            question: 'On December 7, 1941 the Japanese launched a sneak attack on Pearl Harbor. On that day they also launched a similar attack on this American airbase in the Philippines.',
            answer: 'Angeles, Pampanga, Philippines',
            choices: [
                'Subic Bay, Luzon, Philippines',
                'Capas Air Base,Tarlac, Philippines',
                'Angeles, Pampanga, Philippines',
                'Clark Air Force Base, Pampanga, Philippines'
            ]
        },
        {
            question: 'Which best  describes the religious distribution of the populace of the Philippines?',
            answer: '82% Catholic, 9% Protestant, 5% Muslim and  3 % Buddhist',
            choices: [
                '82% Catholic, 9% Protestant, 5% Muslim and  3 % Buddhist',
                '92 % Catholic, 7 % Muslim, 1% all others',
                '57 % Muslim, 40 % Protestant, 1 % Catholic',
                '41% Catholic, 38 % Muslim, 10% Buddhist , 9 % Protestant'
            ]
        },
        {
            question: 'This US President was born in South Carolina although he lived in Tennessee when he became president.',
            answer: 'Andrew Jackson',
            choices: [
                'William Henry Harrison',
                'Zachary Taylor',
                'Andrew Jackson',
                'Jimmy Carter'
            ]
        },
        {
            question: 'Which of the following states borders South Carolina?',
            answer: 'Georgia',
            choices: [
                'Alabama',
                'Tennessee',
                'Virginia',
                'Georgia'
            ]
        },
        {
            question: 'What South Carolina Senator lived to be one hundred years old while still holding office?',
            answer: 'Strom Thurmond',
            choices: [
                'Strom Thurmond',
                'Mike Mansfield',
                'James, (Jimmy)  Byrnes',
                'Fritz Hollings'
            ]
        },
        {
            question: 'Francis Marion fought the British in the swamps of South Carolina during the Revolutionary War, using guerrilla tactics, that the communist Vietcong in Vietnam would have understood well. For this Marion was given the following nickname.',
            answer: 'The Swamp Fox',
            choices: [
                'The Swamp Fox',
                'The Yankee Ghost',
                'The Carolina Gamecock',
                'The Fighting Gator'
            ]
        },
        {
            question: 'The Grand Strand is a long stretch of sandy beach situated near which of the following?',
            answer: 'Myrtle Beach',
            choices: [
                'Hilton Head',
                'Follie Beach',
                'Myrtle Beach',
                'Charleston'
            ]
        },
        {
            question: 'The city of Fargo is the largest city in which of these U.S. states?',
            answer: 'North Dakota',
            choices: [
                'North Carolina',
                'South Dakota',
                'North Dakota',
                'South Carolina'
            ]
        },
        {
            question: 'Name the capital city of the U.S. state of Washington.',
            answer: 'Olympia',
            choices: [
                'Seattle',
                'Olympia',
                'Madison',
                'Boise'
            ]
        },
        {
            question: 'Which U.S. state has been nicknamed The Cornhusker State?',
            answer: 'Nebraska',
            choices: [
                'Nevada',
                'Ohio',
                'Nebraska',
                'Wyoming'
            ]
        },
        {
            question: 'Topeka is the capital city of which U.S. state?',
            answer: 'Kansas',
            choices: [
                'Kansas',
                'Arkansas',
                'Missouri',
                'Colorado'
            ]
        },
        {
            question: 'Which of these nicknames refers to the U.S. state of Idaho?',
            answer: 'Gem State',
            choices: [
                'Emerald State',
                'Pearl State',
                'Gem State',
                'Golden State'
            ]
        },
        {
            question: 'What does the name of the U.S. state of Utah mean in the Ute language?',
            answer: 'People of the mountains',
            choices: [
                'Spirits of the rivers',
                'Children of the winds',
                'People of the mountains',
                'Land around the great lake'
            ]
        },
        {
            question: 'Saint Paul is the capital city of what US state?',
            answer: 'Minnesota',
            choices: [
                'Missouri',
                'Minnesota',
                'Mississippi',
                'None of these'
            ]
        },
        {
            question: 'The Black Sea drains into the Atlantic Ocean via the Sea of Marmara and the Mediterranean Sea on the South West. On the other, North East side of the Black Sea, there is a small sea which is connected to the Black Sea via the Strait of Kerch. Name this sea.',
            answer: 'The Sea of Azov',
            choices: [
                'The White Sea',
                'The Caspian Sea',
                'The Aral Sea',
                'The Sea of Azov'
            ]
        },
        {
            question: 'Six countries are located along the Black Sea border. Which one among them has the longest Black Sea coast line (not including the Sea of Azov coast line)?',
            answer: 'Turkey',
            choices: [
                'Romania',
                'Turkey',
                'Russia',
                'Ukraine'
            ]
        },
        {
            question: 'Not counting Istanbul, which of these cities is located on Bosphorus on the side of the Sea of Marmara and is the biggest city on the coast of the Black Sea?',
            answer: 'Odessa, Ukraine',
            choices: [
                'Trabzon, Turkey',
                'Sukhumi, Georgia',
                'Varna, Bulgaria',
                'Odessa, Ukraine'
            ]
        },
        {
            question: 'The names of three large rivers flowing into the Black Sea begin with a letter D. Danube, the largest of the three, flows through ten European countries and enters the Black Sea in Romania. The other two end their flow in this country.',
            answer: 'Ukraine',
            choices: [
                'Bulgaria',
                'Turkey',
                'Ukraine',
                'Russia'
            ]
        },
        {
            question: 'The Black Sea city of Sukhumi is the capital of this republic that proclaimed its independence from Georgia in the 90s.',
            answer: 'Abkhazia',
            choices: [
                'Ajaria',
                'Iberia',
                'Ossetia',
                'Abkhazia'
            ]
        },
        {
            question: 'The Black Sea, whose waters are known to be meromictic, is the largest water basin in the world where water layers do not intermix, and, thus, lack the dissolved form of what?',
            answer: 'Oxygen',
            choices: [
                'Salt',
                'Nitrogen',
                'Oxygen',
                'Hydrogen Sulfide'
            ]
        },
        {
            question: 'The Crimean peninsula has been under the control of multiple powers over the centuries. Although it is considered to be an autonomous republic, it is a part of this nation.',
            answer: 'Ukraine',
            choices: [
                'Ukraine',
                'Romania',
                'Bulgaria',
                'Russia'
            ]
        },
        {
            question: 'From the viewpoint of physical geography and ecology, the Ukrainian territories to the north of the Black Sea are known to contain what?',
            answer: 'Steppes or plains',
            choices: [
                'Low hills and forests',
                'Steppes or plains',
                'Mountains',
                'Sand desert'
            ]
        },
        {
            question: 'The Black Sea reaches the maximum depth of 2,210 m. Its neighbor, the Sea of Azov, is unique in terms of sea depth for what reason?',
            answer: 'It is the shallowest sea in the world.',
            choices: [
                'Its floor sinks constantly because it is located on a large basalt plate.',
                'It is the shallowest sea in the world.',
                'It has almost perfectly flat sea floor with a depth of 1370 m.',
                'It has no established sea floor, it changes constantly with currents.'
            ]
        },
        {
            question: 'All these entities are located around the Black Sea except for one. Name the exception.',
            answer: 'Ural mountains',
            choices: [
                'Ural mountains',
                'Balkan peninsula',
                'Caucasus mountains',
                'Anatolia'
            ]
        },
        {
            question: 'The summit ridge of Mount Everest marks the border between which two Asian countries?',
            answer: 'China and Nepal',
            choices: [
                'India and China',
                'Nepal and India',
                'China and Georgia',
                'China and Nepal'
            ]
        },
        {
            question: 'The locals of Nepal call the highest mount in the world - Mount Everest -  Sagarmatha. What is the meaning of this name in Sanskrit?',
            answer: 'Head of the Sky',
            choices: [
                'Holy Mountain',
                'Ice Zone',
                'Leader Among the Others',
                'Head of the Sky'
            ]
        },
        {
            question: 'The highest mountain in the world is named after Sir George Everest, a famous Welshman. What was his profession?',
            answer: 'Surveyor and geographer',
            choices: [
                'Defender of human rights',
                'Actor',
                'Surveyor and geographer',
                'President'
            ]
        },
        {
            question: 'The Himalayan range, part of which is Mount Everest, stretches across five different countries in Asia. Which of the following countries is not among them?',
            answer: 'Israel',
            choices: [
                'Israel',
                'Bhutan',
                'Pakistan',
                'India'
            ]
        },
        {
            question: 'Edmund Hillary, the first mountaineer to reach mount Everest, was from what country?',
            answer: 'New Zealand',
            choices: [
                'The USA',
                'Great Britain',
                'Norway',
                'New Zealand'
            ]
        },
        {
            question: 'What nationality was mathematician and surveyor Radhanath Sikdar, who was the first person to measure the height of Everest?',
            answer: 'Bengali-Indian',
            choices: [
                'Bengali-Indian',
                'Chinese',
                'Pakistani',
                'Tibetan'
            ]
        },
        {
            question: 'Which of the following paths is one of the two most popular climbing routes to Mount Everest?',
            answer: 'The southeast ridge from Nepal',
            choices: [
                'The south ridge from Tibet',
                'The east ridge from Pakistan',
                'The west ridge from India',
                'The southeast ridge from Nepal'
            ]
        },
        {
            question: 'What nationality was Junko Tabei - the first woman to reach the peak of Mount Everest?',
            answer: 'Japanese',
            choices: [
                'Japanese',
                'Chinese',
                'Indian',
                'Nepalese'
            ]
        },
        {
            question: 'This Italian climber, who was in the first expedition to reach Mount Everest without oxygen tanks, later became the first person to climb the summit alone.',
            answer: 'Reinhold Messner',
            choices: [
                'Reinhold Messner',
                'Laurie Skreslet',
                'Jerzy Kukuczka',
                'Tim Macartney'
            ]
        },
        {
            question: 'The term death zone refers to high altitudes, where the amount of oxygen cannot sustain human life and altitude acclimatization becomes impossible.  While this definition still applies, mount Everests death zone is significantly more difficult to survive.  Why?',
            answer: 'Extremely low temperatures result in quick freezing of body parts',
            choices: [
                'Visibility is decreased due to constant snowstorms',
                'Extremely low temperatures result in quick freezing of body parts',
                'High wind velocity causes deadly avalanches',
                'Polar bears pose a serious threat to climbers'
            ]
        },
        {
            question: 'What is the largest island on the planet in terms of territory?',
            answer: 'Greenland',
            choices: [
                'Madagascar',
                'Sumatra',
                'Greenland',
                'New Guinea'
            ]
        },
        {
            question: 'This island, located north of Australia, is the second-largest island on the planet.',
            answer: 'New Guinea',
            choices: [
                'Tasmania',
                'New Guinea',
                'South Island',
                'Sri Lanka'
            ]
        },
        {
            question: 'This is the third-largest island on the planet, and it is also known as Kalimantan.',
            answer: 'Borneo',
            choices: [
                'Bali',
                'Borneo',
                'Taiwan',
                'Java'
            ]
        },
        {
            question: 'This is the fourth-largest island in the world, and it is home to 5% of the plant and animal species on the planet.',
            answer: 'Madagascar',
            choices: [
                'Jamaica',
                'Madagascar',
                'Tasmania',
                'Cuba'
            ]
        },
        {
            question: 'This is the largest European island, and the ninth-largest island on the planet.',
            answer: 'None of these',
            choices: [
                'Sicily',
                'Sardinia',
                'None of these',
                'Cyprus'
            ]
        },
        {
            question: 'What is the largest island of Canada, and the fifth-largest island in the world?',
            answer: 'Baffin Island',
            choices: [
                'Victoria Island',
                'Baffin Island',
                'Banks Island',
                'Devon Island'
            ]
        },
        {
            question: 'What is the most populous island in the world?',
            answer: 'Java',
            choices: [
                'Java',
                'Cuba',
                'Borneo',
                'Honshu'
            ]
        },
        {
            question: 'This island is located in the Indian Ocean and is also known as Ceylon.',
            answer: 'Sri Lanka',
            choices: [
                'Borneo',
                'Taiwan',
                'Sumatra',
                'Sri Lanka'
            ]
        },
        {
            question: 'The capital of this island country is Kingston.',
            answer: 'Jamaica',
            choices: [
                'Jamaica',
                'Haiti',
                'Hispaniola',
                'Cuba'
            ]
        },
        {
            question: 'What is the largest island in the Mediterranean Sea?',
            answer: 'Sicily',
            choices: [
                'Crete',
                'Corsica',
                'Sicily',
                'Cyprus'
            ]
        },
        {
            question: 'Which nation claims ownership of the South Pole?',
            answer: 'No nation does.',
            choices: [
                'Russia',
                'No nation does.',
                'France',
                'The USA'
            ]
        },
        {
            question: 'In 1728, he became the first person to sail into the Arctic Ocean and proved that Asia and North America are not joined by land.',
            answer: 'Bering',
            choices: [
                'Cook',
                'Bering',
                'Scott',
                'Peary'
            ]
        },
        {
            question: 'Who is given credit  for being the first person to reach the North Pole?',
            answer: 'Peary',
            choices: [
                'Peary',
                'Bering',
                'Amundsen',
                'Scott'
            ]
        },
        {
            question: 'What happened at the North Pole on August 3, 1958?',
            answer: 'A submarine travelled underwater under the Pole.',
            choices: [
                'The northernmost US city, Naavetau, was founded.',
                'The first airport in the Arctic was built.',
                'A submarine travelled underwater under the Pole.',
                'The last Arctic Moa was killed.'
            ]
        },
        {
            question: 'The first time Antarctica was officially visited is a subject of controversy. Three people have claimed to have achieved this feat. Which of these is not one them?',
            answer: 'James Cook',
            choices: [
                'Edward Bransfield',
                'Nathaniel B. Palmer',
                'Fabian von Bellinghausen',
                'James Cook'
            ]
        },
        {
            question: 'Which statement is true about the explorer and glaciologist Albert P. Crary?',
            answer: 'He was the first person to reach both the North and South Poles.',
            choices: [
                'He was the first person to set foot on Antarctica.',
                'He was the first pilot to fly across the South Pole.',
                'He was the first person to build a home above the Arctic Circle.',
                'He was the first person to reach both the North and South Poles.'
            ]
        },
        {
            question: 'Who was the first person to reach the South Pole?',
            answer: 'Amundsen',
            choices: [
                'Scott',
                'Amundsen',
                'Henson',
                'Peary'
            ]
        },
        {
            question: 'Few animals inhabit the North Pole. Which of these types of animals can never be seen there?',
            answer: 'Penguins',
            choices: [
                'Penguins',
                'Bears',
                'Birds',
                'Fish'
            ]
        },
        {
            question: 'What river, draining into the Caspian Sea, is the longest in Europe?',
            answer: 'Volga',
            choices: [
                'Danube',
                'Ural',
                'Dnieper',
                'Volga'
            ]
        },
        {
            question: 'Where are the origins of the Rhine?',
            answer: 'Switzerland',
            choices: [
                'Switzerland',
                'Austria',
                'Belgium',
                'Germany'
            ]
        },
        {
            question: 'What is the longest river in France?',
            answer: 'Loire',
            choices: [
                'Loire',
                'Maine',
                'Odet',
                'Erdre'
            ]
        },
        {
            question: 'What river rises in the northwestern Czech Republic, flows through Germany and into the North Sea?',
            answer: 'Elbe',
            choices: [
                'Elbe',
                'Viskan',
                'Morava',
                'Oste'
            ]
        },
        {
            question: 'What river named after a mythological figure is the longest river of Great Britain?',
            answer: 'Severn',
            choices: [
                'Trent',
                'Great Ouse',
                'Thames',
                'Severn'
            ]
        },
        {
            question: 'What river flows through ten European countries and is the longest in the European Union?',
            answer: 'Danube',
            choices: [
                'Rhine',
                'Dnieper',
                'Danube',
                'Elbe'
            ]
        },
        {
            question: 'What river that flows through Spain and Portugal is the longest river on the Iberian Peninsula?',
            answer: 'Tagus',
            choices: [
                'Guadiana',
                'Duero',
                'Guadalquivir',
                'Tagus'
            ]
        },
        {
            question: 'What is the longest river in Poland and the ninth longest in Europe?',
            answer: 'Vistula',
            choices: [
                'Wda',
                'Nogat',
                'Vistula',
                'Dunajec'
            ]
        },
        {
            question: 'In what country does the River Po rise?',
            answer: 'Italy',
            choices: [
                'France',
                'Italy',
                'Belgium',
                'Switzerland'
            ]
        },
        {
            question: 'This bridge, that spans the Tagus River, is the longest bridge in Europe.',
            answer: 'Vasco da Gama Bridge',
            choices: [
                'Vizcaya Bridge',
                'Guadiana International Bridge',
                'Vasco da Gama Bridge',
                'Merida Bridge'
            ]
        },
        {
            question: 'How would you say What is your name? in Tagalog?',
            answer: 'Ano ang pangalan mo?',
            choices: [
                'Ilang taong gulang ka na?',
                'Ano ang ginagawa mo?',
                'Ano ang pangalan mo?',
                'Saan ka nakatira?'
            ]
        },
        {
            question: 'What does the Filipino word lungsod mean in English?',
            answer: 'city',
            choices: [
                'market',
                'city',
                'island',
                'province'
            ]
        },
        {
            question: 'The Filipino word pangalan means name in English. What does the word pangngalan mean?',
            answer: 'noun',
            choices: [
                'address',
                'adjective',
                'noun',
                'verb'
            ]
        },
        {
            question: 'What Filipino word means money in English?',
            answer: 'pera',
            choices: [
                'tindahan',
                'mura',
                'pera',
                'wala'
            ]
        },
        {
            question: 'What does the Filipino word salita mean in English?',
            answer: 'word',
            choices: [
                'word',
                'phrase',
                'sentence',
                'meaning'
            ]
        },
        {
            question: 'How will you say I Love You in Filipino?',
            answer: 'Mahal Kita',
            choices: [
                'Mahal Kita',
                'Ikaw Na Nga',
                'Sino Ka',
                'Hindi Ko Alam'
            ]
        },
        {
            question: 'This western half of this island is part of Indonesia, while the eastern half is a nation which gained independence in 2002, following hundreds of years of European colonialism and 25 years of Indonesian occupation.',
            answer: 'Timor',
            choices: [
                'Borneo',
                'Sumatra',
                'Timor',
                'Celebes'
            ]
        },
        {
            question: 'Which Indonesian island is shared by four Indonesian provinces and two other nations: the eastern half of Malaysia and the tiny oil-rich sultanate of Brunei?',
            answer: 'Borneo',
            choices: [
                'New Guinea',
                'Sumatra',
                'Borneo',
                'Flores'
            ]
        },
        {
            question: 'These islands were the original spice islands, which have drawn traders from all over the world for thousands of years, and were a major factor in causing the European age of exploration, as explorers set out to find the fabled East Indies.',
            answer: 'Ternate, Tidore and Banda',
            choices: [
                'Ternate, Tidore and Banda',
                'Timor, Flores and Sumba',
                'Celebes and New Guinea',
                'Sumatra and Borneo'
            ]
        },
        {
            question: 'Which Indonesian island was in the news in 2003 when the remains of an extinct variety of small hominids (popularly referred to as Hobbits), measuring about 3 feet in height, were found there?',
            answer: 'Flores',
            choices: [
                'Sumatra',
                'New Guinea',
                'Timor',
                'Flores'
            ]
        },
        {
            question: 'This island, the second largest in the world, is shared by Indonesia and another country. Because of its impenetrable swamps, jungles and towering mountains, it wasnt explored by outsiders until the past 100 years, and new tribes of humans with stone-age societies are still being discovered in the interior.',
            answer: 'New Guinea',
            choices: [
                'New Guinea',
                'Flores',
                'Celebes',
                'Sumatra'
            ]
        },
        {
            question: 'This island is the third largest in Indonesia, and is probably known for its coffee. It is also home to unique (and endangered) species of elephants, tigers, and rhinoceroses. It is also one of two islands which have indigenous orangutans.',
            answer: 'Sumatra',
            choices: [
                'Timor',
                'Sumatra',
                'New Guinea',
                'Celebes'
            ]
        },
        {
            question: 'Which of these describes best the location of the volcanic island of Krakatau (sometimes erroneously called Krakatoa), which had a well-known and devastating eruption on August 23, 1883?',
            answer: 'Between Java and Sumatra',
            choices: [
                'West of New Guinea',
                'East of Java',
                'Between Java and Sumatra',
                'Off the coast of Borneo'
            ]
        },
        {
            question: 'This volcano, located on the island of Sumbawa, erupted in 1815, generally regarded as the largest volcanic eruption in recorded history. The eruption killed thousands, and changed global climatic patterns.',
            answer: 'Tambora',
            choices: [
                'Merapi',
                'Krakatau',
                'Mandiri',
                'Tambora'
            ]
        },
        {
            question: 'Wichita, the county seat of Sedgwick County, is nicknamed what?',
            answer: 'Air Capital',
            choices: [
                'Air Capital',
                'Mountain Capital',
                'Plain Capital',
                'River capital'
            ]
        },
        {
            question: 'This multifunctional facility is located at 225 West Douglas, Wichita, Kansas.',
            answer: 'Century II Convention center',
            choices: [
                'Exploration Place',
                'None of these',
                'Century II Convention center',
                'Hyatt hotel'
            ]
        },
        {
            question: 'What is the name of the European peninsula on which Italy is located?',
            answer: 'Italian Peninsula',
            choices: [
                'Scandinavian Peninsula',
                'Iberian Peninsula',
                'Italian Peninsula',
                'Balkan Peninsula'
            ]
        },
        {
            question: 'What is the capital and largest city of Italy?',
            answer: 'Rome',
            choices: [
                'Milan',
                'Genoa',
                'Rome',
                'Venice'
            ]
        },
        {
            question: 'What large mountain range is located entirely within the territory of Italy?',
            answer: 'Apennines',
            choices: [
                'Alps',
                'Andes',
                'Apennines',
                'Carpathians'
            ]
        },
        {
            question: 'Italy is a major world exporter of which of the following?',
            answer: 'All of these',
            choices: [
                'All of these',
                'Sport and luxury vehicles',
                'Motor vehicles',
                'Fashion items'
            ]
        },
        {
            question: 'What is the meaning of the Italian word riavvolgere, from which the name of the popular Italian dish ravioli originated?',
            answer: 'To wrap',
            choices: [
                'Poor peasant',
                'Onion',
                'To wrap',
                'To indulge'
            ]
        },
        {
            question: 'Which of these colors is not present on the national flag of the Italian Republic?',
            answer: 'Blue',
            choices: [
                'White',
                'Red',
                'Blue',
                'Green'
            ]
        },
        {
            question: 'What is the title of the national anthem of the Italian Republic?',
            answer: 'The Song of the Italians',
            choices: [
                'The Italian Anthem',
                'The Song of the Italians',
                'Italia, Land of Glory',
                'Italian Dream'
            ]
        },
        {
            question: 'What is the meaning of the name of Italy according to scientists who have studied its origin?',
            answer: 'Land of young cattle',
            choices: [
                'Land of the holy water',
                'Land of the lamb',
                'Land of young cattle',
                'Land of mountains'
            ]
        },
        {
            question: 'What is the shape of the Italian Peninsula?',
            answer: 'Boot',
            choices: [
                'Skull',
                'Boot',
                'Dog',
                'Hand'
            ]
        },
        {
            question: 'In which of these years did the Italian national football team win the FIFA World Cup?',
            answer: 'All of these',
            choices: [
                '1982',
                '2006',
                'All of these',
                '1938'
            ]
        },
        {
            question: 'Maryland Day is celebrated every year on what date?',
            answer: 'March 25th',
            choices: [
                'The first day of crab season',
                'Preakness Saturday',
                'March 25th',
                'March 1st'
            ]
        },
        {
            question: 'Which was the seat of colonial government in Maryland until 1708?',
            answer: 'St. Mary’s City',
            choices: [
                'Annapolis',
                'Port Tobacco',
                'Baltimore',
                'St. Mary’s City'
            ]
        },
        {
            question: 'The Mason Dixon Line is a demarcation line surveyed between 1763 and 1767 by Charles Mason and Jeremiah Dixon to determine what?',
            answer: 'The boundary between Maryland and Pennsylvania',
            choices: [
                'The boundary between the confederacy and the union',
                'The boundary between the slave states and free states',
                'The boundary between Maryland and Pennsylvania',
                'The boundary between southern colonies and northern colonies'
            ]
        },
        {
            question: 'What are Maryland’s two official state nicknames?',
            answer: '“The Old Line State” and “The Free State”',
            choices: [
                '“The Old Line State” and “The Free State”',
                '“The Crab State” and “Our Chesapeake Heritage”',
                '“The Crab State” and “The Old Line State”',
                '“The Free State” and “Our Chesapeake Heritage”'
            ]
        },
        {
            question: 'What is the state sport of Maryland?',
            answer: 'Jousting',
            choices: [
                'Steeplechase',
                'Jousting',
                'Lacrosse',
                'Horse racing'
            ]
        },
        {
            question: 'Which of the following famous people is NOT a Marylander?',
            answer: 'Valerie Bertinelli',
            choices: [
                'John Wilkes Booth',
                'Frederick Douglass',
                'Tom Clancy',
                'Valerie Bertinelli'
            ]
        },
        {
            question: 'Which is the state flower of Maryland?',
            answer: 'Black-eyed Susan',
            choices: [
                'Mountain Laurel',
                'Peach Blossom',
                'Black-eyed Susan',
                'Flowering Dogwood'
            ]
        },
        {
            question: 'How tall is Mount Everest?',
            answer: '8,848 m',
            choices: [
                '8,859 m',
                '8,848 m',
                '8,850 m',
                '8,840 m'
            ]
        },
        {
            question: 'What is the Tibetan name of Mt. Everest?',
            answer: 'Chomolungma',
            choices: [
                'Appa Sherpa',
                'Sagarmatha',
                'Chomolungma',
                'Temba Tsheri'
            ]
        },
        {
            question: 'The term Death Zone refers to what altitude?',
            answer: 'above 8,000 m',
            choices: [
                'above 8,100 m',
                'above 8,000 m',
                'above 7,900 m',
                'above 7,500 m'
            ]
        },
        {
            question: 'What is considered to be the final major hurdle before reaching the summit of Mt. Everest from the South Col Route?',
            answer: 'Hillary Step',
            choices: [
                'Hillary Step',
                'First Step, Second Step and Third Step',
                'Kangshung face',
                'Lhotse face'
            ]
        },
        {
            question: 'Part of the Southeast Ridge Route for climbing Mt. Everest is the Lhotse Face in which Camp III is established. There are 14 peaks over 8,000 meters. Where does Lhotse rank?',
            answer: '4',
            choices: [
                '4',
                '3',
                '8',
                '13'
            ]
        },
        {
            question: 'Who is the first American to ascend all fourteen peaks over 8,000m without oxygen?',
            answer: 'Ed Viesturs',
            choices: [
                'Reinhold Messner',
                'Peter Habeler',
                'Ed Viesturs',
                'George Mallory'
            ]
        },
        {
            question: 'During Roman occupation, this city, popular nowadays as the Heaven of Romance, was called Lutetia.',
            answer: 'Paris',
            choices: [
                'Venice',
                'Paris',
                'London',
                'Rome'
            ]
        },
        {
            question: 'In what European city are Piazza San Marco and Canale Grande located?',
            answer: 'Venice',
            choices: [
                'Venice',
                'Lisbon',
                'Madrid',
                'Florence'
            ]
        },
        {
            question: 'In what country will you find the impressive Neuschwanstein Castle, which was the inspiration for Sleeping Beauty Castle at Disneyland Park?',
            answer: 'Germany',
            choices: [
                'Denmark',
                'Austria',
                'Germany',
                'England'
            ]
        },
        {
            question: 'What is the birthplace of Johann Strauss II, also known as The Waltz King?',
            answer: 'Vienna',
            choices: [
                'Salzburg',
                'Vienna',
                'Berlin',
                'Prague'
            ]
        },
        {
            question: 'What popular tourist destination stands at the foot of the Maritime Alps?',
            answer: 'Monte Carlo',
            choices: [
                'Monte Carlo',
                'Verona',
                'Vatican City',
                'Lisbon'
            ]
        },
        {
            question: 'This city, situated on the River Vltava, is sometimes called the mother of cities, the city of a hundred spires and the golden city.',
            answer: 'Prague',
            choices: [
                'Athens',
                'Rome',
                'Prague',
                'Bucharest'
            ]
        },
        {
            question: 'What city is home of Broadway Theatre?',
            answer: 'New York',
            choices: [
                'Washington',
                'Boston',
                'New Orleans',
                'New York'
            ]
        },
        {
            question: 'This island in the Pacific Ocean is surrounded by a lagoon and a barrier reef.',
            answer: 'Bora Bora',
            choices: [
                'Bora Bora',
                'Cyprus',
                'Thasos',
                'Tupai'
            ]
        },
        {
            question: 'The city of Casablanca, which is the setting of the classic 1942 movie, starring Humphrey Bogart and Ingrid Bergman, is located in what African country?',
            answer: 'Morocco',
            choices: [
                'Egypt',
                'Morocco',
                'Tunisia',
                'Algeria'
            ]
        },
        {
            question: 'What islands are knows as “The beautiful garland in the Indian Ocean”?',
            answer: 'Maldives Islands',
            choices: [
                'Aeolian Islands',
                'Pontine Islands',
                'Flegrean Islands',
                'Maldives Islands'
            ]
        },
        {
            question: 'This island, located in the Caribbean Sea, is the largest island of an archipelago called Greater Antilles. The city of Havana is located on it.',
            answer: 'Cuba',
            choices: [
                'Cuba',
                'Hispaniola',
                'Haiti',
                'Jamaica'
            ]
        },
        {
            question: 'This island, also known as Formosa, is the largest island of the Republic of China.',
            answer: 'Taiwan',
            choices: [
                'Matsu',
                'Taiwan',
                'Penghu',
                'Honshu'
            ]
        },
        {
            question: 'What island, located in the North Pacific Ocean, is also known as the Big Island?',
            answer: 'Hawaii',
            choices: [
                'Cuba',
                'Haiti',
                'Hawaii',
                'Maui'
            ]
        },
        {
            question: 'This island country whose capital is Nicosia is the third-largest Mediterranean island.',
            answer: 'Cyprus',
            choices: [
                'Cyprus',
                'Crete',
                'Malta',
                'Lesbos'
            ]
        },
        {
            question: 'This island is one of Indonesias 33 provinces.',
            answer: 'Bali',
            choices: [
                'Java',
                'Sumatra',
                'Bali',
                'Lombok'
            ]
        },
        {
            question: 'This European island is situated in the North Atlantic Ocean, south of the Arctic Circle. Its largest city is Reykjavik.',
            answer: 'Iceland',
            choices: [
                'Iceland',
                'Ireland',
                'Greenland',
                'None of these'
            ]
        },
        {
            question: 'This is the sixth largest island in the world, and the largest island that is entirely in Indonesia.',
            answer: 'Sumatra',
            choices: [
                'Sumatra',
                'New Guinea',
                'Java',
                'Borneo'
            ]
        },
        {
            question: 'This island, sometimes called island of inspiration, is part of a very large country, and has a unique fauna.',
            answer: 'Tasmania',
            choices: [
                'Hawaii',
                'Tasmania',
                'Madagascar',
                'Greenland'
            ]
        },
        {
            question: 'Valletta is the capital city of this island country in the Mediterranean.',
            answer: 'Malta',
            choices: [
                'Majorca',
                'Malta',
                'Corsica',
                'Cyprus'
            ]
        },
        {
            question: 'Name the largest of the Canary Islands.',
            answer: 'Tenerife',
            choices: [
                'Tenerife',
                'Gran Canaria',
                'La Palma',
                'Montana Clara'
            ]
        },
        {
            question: 'What is the name of the capital and largest city of Spain?',
            answer: 'Madrid',
            choices: [
                'Madrid',
                'Rome',
                'Milan',
                'Valencia'
            ]
        },
        {
            question: 'What is the meaning of the name of Spain according to a popular theory?',
            answer: 'All of these',
            choices: [
                'Land of rabbits',
                'All of these',
                'Edge',
                'Land of the setting sun'
            ]
        },
        {
            question: 'Spain does not share a border with which one of these countries?',
            answer: 'Germany',
            choices: [
                'Germany',
                'Portugal',
                'France',
                'Andorra'
            ]
        },
        {
            question: 'What is the official language spoken on the territory of Spain?',
            answer: 'Spanish',
            choices: [
                'All of these',
                'Spanish and Galician',
                'Spanish and Basque',
                'Spanish'
            ]
        },
        {
            question: 'When is the national holiday called Hispanic Day celebrated annually in Spain?',
            answer: 'October 12',
            choices: [
                'October 12',
                'August 15',
                'December 6',
                'December 8'
            ]
        },
        {
            question: 'What is the title of the national anthem of Spain?',
            answer: 'The Royal March',
            choices: [
                'My Precious Kingdom',
                'God Save Spain',
                'Proud Spain',
                'The Royal March'
            ]
        },
        {
            question: 'What are the colors of the three vertical stripes on the national flag of Spain?',
            answer: 'Red, yellow, red',
            choices: [
                'Blue, white, blue',
                'Yellow, red and black',
                'Red, yellow, red',
                'White, blue and red'
            ]
        },
        {
            question: 'What is the main ingredient of the traditional Spanish dish paella?',
            answer: 'Rice',
            choices: [
                'Lentils',
                'Rice',
                'Dough',
                'Potatoes'
            ]
        },
        {
            question: 'Which of these popular musicians was not born in Spain?',
            answer: 'Shakira',
            choices: [
                'Paco de Lucia',
                'Shakira',
                'Alejandro Sanz',
                'Enrique Iglesias'
            ]
        },
        {
            question: 'Spanish painter and sculptor Pablo Picasso is known for co-founding what art movement?',
            answer: 'Cubism',
            choices: [
                'Cubism',
                'Expressionism',
                'Surrealism',
                'Neorealism'
            ]
        },
        {
            question: 'In which section of Israel is Eilat located?',
            answer: 'South',
            choices: [
                'East',
                'West',
                'South',
                'North'
            ]
        },
        {
            question: 'When was the city of Eilat founded?',
            answer: '1951',
            choices: [
                '1951',
                '1939',
                '1941',
                '1929'
            ]
        },
        {
            question: 'What is the population of Eilat according to the Israel Central Bureau of Statistics end of 2004 census?',
            answer: '45,800',
            choices: [
                '45,800',
                '179,400',
                '79,200',
                '129,700'
            ]
        },
        {
            question: 'What best describes the climate of Eilat?',
            answer: 'Hot and dry all year',
            choices: [
                'Hot and dry all year',
                'Humid and hot  summers and humid and cool winters',
                'Humid, hot summers and dry, cool winters',
                'Hot, dry summers and humid, cool winters'
            ]
        },
        {
            question: 'Which city is a sister city to Eilat?',
            answer: 'Los Angeles, California',
            choices: [
                'Hollywood, Florida',
                'West Palm Beach, Florida',
                'Los Angeles, California',
                'Boca Raton, Florida'
            ]
        },
        {
            question: 'Which is the major source of revenue for the Eilat area?',
            answer: 'Tourism',
            choices: [
                'Agriculture',
                'Tourism',
                'Jewelry',
                'Mining'
            ]
        },
        {
            question: 'Which four countries can be seen from Eilat?',
            answer: 'Israel, Egypt, Jordan, Saudi Arabia',
            choices: [
                'Israel, Egypt, Saudi Arabia, Yemen',
                'Israel, Egypt, Jordan, Saudi Arabia',
                'Israel, Jordan, Syria, Lebanon',
                'Israel, Egypt, Jordan, Syria'
            ]
        },
        {
            question: 'In 1967, Egypt effectively blockaded Eilat by closing this area to Israel.',
            answer: 'The Straits of Tiran',
            choices: [
                'The Golan Heights',
                'The Sinai Peninsula',
                'The Straits of Tiran',
                'The Suez Canal'
            ]
        },
        {
            question: 'The Peace Treaty between Jordan and Israel was signed near Eilat. In what year did this happen?',
            answer: 'October, 1994',
            choices: [
                'October, 2004',
                'October,1968',
                'October, 1975',
                'October, 1994'
            ]
        },
        {
            question: 'Where does the Freedom Trail begin and end?',
            answer: 'Boston Common, Charlestown Navy Yard',
            choices: [
                'Kings Chapel, Bunker Hill Monument',
                'Trinity Church, Long Wharf',
                'Boston Public Gardens, Old North Church',
                'Boston Common, Charlestown Navy Yard'
            ]
        },
        {
            question: 'On October 24, 1901, Annie Edson Taylor became the first person to go over the Niagara Falls in a barrel as a publicity stunt. How old was she at the time?',
            answer: '63',
            choices: [
                '63',
                '23',
                '43',
                '33'
            ]
        },
        {
            question: 'What is the famous Niagara boat called?',
            answer: 'Maid of the Mist',
            choices: [
                'Niagara-on-the-Lake',
                'Lady Horseshoe',
                'Maid of the Mist',
                'Lady of the Mist'
            ]
        },
        {
            question: 'Name the smallest of the three waterfalls that make up the Niagara Falls.',
            answer: 'Bridal Veil Falls',
            choices: [
                'Bridal Veil Falls',
                'There are only two waterfalls that make up the Niagara Falls.',
                'Goat Falls',
                'Horseshoe'
            ]
        },
        {
            question: 'Approximately what percentage of the water of the Niagara River flows over the Horseshoe Falls?',
            answer: '90%',
            choices: [
                '70%',
                '90%',
                '50%',
                '10%'
            ]
        },
        {
            question: 'The flow of the water over the American Falls was completely blocked from June to November in what year?',
            answer: '1969',
            choices: [
                '1942',
                '1969',
                '1983',
                '1936'
            ]
        },
        {
            question: 'How long is the crest of the American Falls if measured along the jagged lip of the falls?',
            answer: '950  feet  (290 m)',
            choices: [
                '393  feet  (120 m)',
                '950  feet  (290 m)',
                '688  feet  (210 m)',
                '1310 feet  (400 m)'
            ]
        },
        {
            question: 'What event related to the Niagara Falls occurred on March 29th 1848?',
            answer: 'The flow of water over both falls stopped to the point where people could walk around the riverbed.',
            choices: [
                'The flow of water over both falls stopped to the point where people could walk around the riverbed.',
                'The flow of water was stopped completely over the American Falls.',
                'The waterfalls were named',
                'A third, much smaller waterfall was discovered.'
            ]
        },
        {
            question: 'When was the Skylon Tower, Niagaras most famous landmark, built?',
            answer: 'in the 1960s',
            choices: [
                'in the 1950s',
                'in the 1940s',
                'in the 1960s',
                'in the 1990s'
            ]
        },
        {
            question: 'Around the year 1859, Jean-François Blondin crossed the gorge below Niagara Falls on a tightrope 1100 feet (335 m) long, 160 feet (50 m) above the water. He made this accomplishment several times including which of the following theatrical variations?',
            answer: 'All of these',
            choices: [
                'All of these',
                'He carried his manager on his back.',
                'He sat down midway while he cooked and ate an omelette.',
                'He was blindfolded.'
            ]
        },
        {
            question: 'Which U.S. state is nicknamed The Natural State?',
            answer: 'Arkansas',
            choices: [
                'Alabama',
                'Alaska',
                'Arizona',
                'Arkansas'
            ]
        },
        {
            question: 'What nickname has been given to the U.S. state of Oregon?',
            answer: 'Beaver State',
            choices: [
                'All of these',
                'Marmot State',
                'Beaver State',
                'Otter State'
            ]
        },
        {
            question: 'What U.S. state is nicknamed Land of Infinite Variety?',
            answer: 'South Dakota',
            choices: [
                'South Carolina',
                'Florida',
                'Delaware',
                'South Dakota'
            ]
        },
        {
            question: 'Which of these nicknames has been given to the U.S. state of Colorado?',
            answer: 'Switzerland of America',
            choices: [
                'Sweden of America',
                'Himalayas of America',
                'All of these',
                'Switzerland of America'
            ]
        },
        {
            question: 'Which of these nicknames has been given to the U.S. state of Illinois?',
            answer: 'Corn State',
            choices: [
                'Corn State',
                'Rubber State',
                'Cotton State',
                'Paper State'
            ]
        },
        {
            question: 'This U.S. state was nicknamed Vacationland, and the nickname is used on license plates.',
            answer: 'Maine',
            choices: [
                'Hawaii',
                'Maine',
                'Nevada',
                'California'
            ]
        },
        {
            question: 'The Independence State is one of the nicknames of this U.S. state.',
            answer: 'Pennsylvania',
            choices: [
                'Virginia',
                'New Hampshire',
                'Pennsylvania',
                'West Virginia'
            ]
        },
        {
            question: 'Which U.S. state is nicknamed The Cowboy State?',
            answer: 'Wyoming',
            choices: [
                'Texas',
                'Iowa',
                'Wyoming',
                'Idaho'
            ]
        },
        {
            question: 'What nickname has been given to the U.S. state of Rhode Island?',
            answer: 'Ocean State',
            choices: [
                'Ocean State',
                'Marine State',
                'Island State',
                'All of these'
            ]
        },
        {
            question: 'ueen State has been given to this U.S. state.',
            answer: 'Maryland',
            choices: [
                'West Virginia',
                'Virginia',
                'All of these',
                'Maryland'
            ]
        },
        {
            question: 'Which country, Slovakia or Slovenia, used to be part of Yugoslavia?',
            answer: 'Slovenia',
            choices: [
                'Slovenia',
                'Both',
                'Slovakia',
                'None of them'
            ]
        },
        {
            question: 'Which former empire were both Slovenia and Slovakia part of?',
            answer: 'Austria-Hungary',
            choices: [
                'Austria-Hungary',
                'Byzantium',
                'Ottoman Empire',
                'Roman Empire'
            ]
        },
        {
            question: 'Slovakia and Slovenia joined the European Union on the same day (May 1, 2004). Which of them was first to accept the euro currency?',
            answer: 'Slovenia',
            choices: [
                'None of them has accepted the EURO currency.',
                'Both did on the day of their accession to the EU.',
                'Slovakia',
                'Slovenia'
            ]
        },
        {
            question: 'What is the capital of Slovakia?',
            answer: 'Bratislava',
            choices: [
                'Ljubljana',
                'Prague',
                'Zagreb',
                'Bratislava'
            ]
        },
        {
            question: 'What is the capital of Slovenia?',
            answer: 'Ljubljana',
            choices: [
                'Prague',
                'Bratislava',
                'Ljubljana',
                'Zagreb'
            ]
        },
        {
            question: 'Which country borders both Slovenia and Slovakia?',
            answer: 'Austria',
            choices: [
                'Serbia',
                'Austria',
                'Poland',
                'Germany'
            ]
        },
        {
            question: 'Which statement concerning Slovakia and Slovenia is true?',
            answer: 'Slovenia has access to the Adriatic Sea.',
            choices: [
                'Both countries have access to the Black Sea.',
                'Slovenia has access to the Adriatic Sea.',
                'Slovakia has access to the Baltic Sea.',
                'Both countries are landlocked.'
            ]
        },
        {
            question: 'The Danube river flows through many Central European countries. Which of these statements concerning Slovakia and Slovenia is true?',
            answer: 'Of the two countries, only Slovakia has Danubian banks.',
            choices: [
                'The Danube does not flow through either of the 2 countries.',
                'The Danube originates in Slovakia and then enters Slovenia.',
                'Of the two countries, only Slovakia has Danubian banks.',
                'The Danube originates in Slovenia and then flows through Slovakia.'
            ]
        },
        {
            question: 'Which of these statements regarding Slovakia and Slovenia is true?',
            answer: 'Only Slovenia is an Alpine country.',
            choices: [
                'Only Slovakia is an Alpine country.',
                'Only Slovenia is an Alpine country.',
                'None of them is an Alpine country.',
                'Both are Alpine countries.'
            ]
        },
        {
            question: 'Which country, Slovakia or Slovenia, borders a country that did not join the European Union in the period 1951-2007?',
            answer: 'Both share borders with countries that did not became EU members during this period.',
            choices: [
                'Only Slovakia borders a country that did not join the EU during this period.',
                'Both share borders only with countries that became EU members during this period.',
                'Both share borders with countries that did not became EU members during this period.',
                'Only Slovenia borders a country that did not join the EU during this period.'
            ]
        },
        {
            question: 'What design is depicted on the national flag of Switzerland?',
            answer: 'Cross',
            choices: [
                'Sun',
                'Cross',
                'Star',
                'Leaf'
            ]
        },
        {
            question: 'Switzerland is often associated with this product which is produced at the highest quality in the country.',
            answer: 'All of these',
            choices: [
                'Chocolate',
                'Watches',
                'All of these',
                'Cheese'
            ]
        },
        {
            question: 'What is the unofficial national motto of Switzerland?',
            answer: 'One for all, all for one',
            choices: [
                'Progress ans prosperity',
                'In God we trust',
                'One for all, all for one',
                'Higher and stronger'
            ]
        },
        {
            question: 'What is the capital city of Switzerland?',
            answer: 'Bern',
            choices: [
                'Bonn',
                'Bern',
                'Berlin',
                'Zurich'
            ]
        },
        {
            question: 'What mountain covers about 65% of the territory of Switzerland?',
            answer: 'the Alps',
            choices: [
                'the Apennines',
                'the Andes',
                'Ararat',
                'the Alps'
            ]
        },
        {
            question: 'What language is adopted as official for the territory of Switzerland?',
            answer: 'All of these',
            choices: [
                'German',
                'Italian',
                'French',
                'All of these'
            ]
        },
        {
            question: 'What is the title of the national anthem of Switzerland?',
            answer: 'Swiss Psalm',
            choices: [
                'Swiss Vow',
                'Swiss Song',
                'Swiss Anthem',
                'Swiss Psalm'
            ]
        },
        {
            question: 'What is the main ingredient of the traditional Swiss dish Rosti?',
            answer: 'Potatoes',
            choices: [
                'Cheese',
                'Cabbage',
                'Fish',
                'Potatoes'
            ]
        },
        {
            question: 'What is the largest city in Switzerland?',
            answer: 'Zurich',
            choices: [
                'Geneva',
                'Zurich',
                'Bern',
                'Munich'
            ]
        },
        {
            question: 'Which of these famous philosophers was of Swiss descent?',
            answer: 'Jean-Jacques Rousseau',
            choices: [
                'Jean-Jacques Rousseau',
                'Michel Foucault',
                'Friedrich Schiller',
                'Jean-Paul Sartre'
            ]
        },
        {
            question: 'Which of these is the capital and the largest city in North Korea?',
            answer: 'Pyongyang',
            choices: [
                'Nampho',
                'Hungnam',
                'Sinuiju',
                'Pyongyang'
            ]
        },
        {
            question: 'What type of climate does North Korea have?',
            answer: 'Continental',
            choices: [
                'Oceanic',
                'Humid subtropical',
                'Continental',
                'Tropical'
            ]
        },
        {
            question: 'Which of these seas surrounds the Korean Peninsula, in the northern part of which North Korea is located?',
            answer: 'All of these',
            choices: [
                'All of these',
                'East China Sea',
                'Sea of Japan',
                'Yellow Sea'
            ]
        },
        {
            question: 'The establishment of the Democratic Peoples Republic of Korea in this year set the official beginning of North Koreas history.',
            answer: '1948',
            choices: [
                '1940',
                '1950',
                '1948',
                '1945'
            ]
        },
        {
            question: 'Which of these statements is true about the division of Korea into two parts?',
            answer: 'All of these',
            choices: [
                'Korea was divided at the 38th parallel.',
                'North Korea was to be administered by the Soviet union.',
                'All of these',
                'It followed the end of World War II.'
            ]
        },
        {
            question: 'Which of these natural disasters is known to hit the lands of North Korea on the regular?',
            answer: 'All of these',
            choices: [
                'All of these',
                'Droughts',
                'Floods',
                'Typhoons'
            ]
        },
        {
            question: 'What is the official language that is spoken in North Korea?',
            answer: 'Korean',
            choices: [
                'All of these',
                'Russian',
                'Korean',
                'Japanese'
            ]
        },
        {
            question: 'Which of these religious movements has many adherents among the people of North Korea?',
            answer: 'All of these',
            choices: [
                'Korean shamanism',
                'Cheondoism',
                'All of these',
                'Buddhism'
            ]
        },
        {
            question: 'Which of these musicians became the first US musical group ever to perform in North Korea?',
            answer: 'The New York Philharmonic Orchestra',
            choices: [
                'The Black Eyed Peas',
                'The New York Philharmonic Orchestra',
                'The Helen Henderson Choir of Victory Baptist Church',
                'Linkin Park'
            ]
        },
        {
            question: 'Which of these events is regularly performed only in North Korea?',
            answer: 'Mass games',
            choices: [
                'Mass games',
                'Senior citizens beauty pageant',
                'Politicians athletics',
                'Binoculars football games'
            ]
        },
        {
            question: 'What other name is commonly used to refer to the Colorado River in North America?',
            answer: 'Red River',
            choices: [
                'Black River',
                'Yellow River',
                'Blue River',
                'Red River'
            ]
        },
        {
            question: 'What is the name of the longest river in the United States of America?',
            answer: 'Missouri',
            choices: [
                'Colorado',
                'Missouri',
                'Rio Grande',
                'Mississippi'
            ]
        },
        {
            question: 'The Ohio River does not flow though the territory of this American state.',
            answer: 'Virginia',
            choices: [
                'Illinois',
                'Virginia',
                'Kentucky',
                'West Virginia'
            ]
        },
        {
            question: 'What is the longest river located entirely within the territory of the state of California?',
            answer: 'Sacramento River',
            choices: [
                'Mad River',
                'Salmon River',
                'Big River',
                'Sacramento River'
            ]
        },
        {
            question: 'What is the meaning of the name of the Mississippi River, which originated from the Ojibwe word misi-ziibi?',
            answer: 'Great river',
            choices: [
                'Holy water',
                'Fast river',
                'River of life',
                'Great river'
            ]
        },
        {
            question: 'What ocean fish migrates from the Pacific Ocean to the Columbia River to spawn at the end of their life cycles?',
            answer: 'All of these',
            choices: [
                'Steelhead salmon (Rainbow trout)',
                'All of these',
                'Coho salmon',
                'Chinook salmon'
            ]
        },
        {
            question: 'What is the The Rio Grande river called in Mexico?',
            answer: 'Rio Bravo',
            choices: [
                'All of these',
                'Rio Bravo',
                'Rio Rojo',
                'Rio del Fuego'
            ]
        },
        {
            question: 'What river in North America provides food for the largest wintering Bald Eagle population in the continental United States?',
            answer: 'Skagit River',
            choices: [
                'Fraser',
                'Skeena',
                'St. Lawrence',
                'Skagit River'
            ]
        },
        {
            question: 'What does the Mohawk name of the Saint Lawrence River, Kaniatarowanenneh, mean?',
            answer: 'Big waterway',
            choices: [
                'Female river',
                'Murmur of the gods',
                'Burning water',
                'Big waterway'
            ]
        },
        {
            question: 'More than half of the Yukon River is located within this American state.',
            answer: 'Alaska',
            choices: [
                'North Dakota',
                'Kansas',
                'Alaska',
                'Texas'
            ]
        },
        {
            question: 'What is the name of the capital and largest city of Norway?',
            answer: 'Oslo',
            choices: [
                'Reykjavik',
                'Bergen',
                'Oslo',
                'Helsinki'
            ]
        },
        {
            question: 'According to some medieval texts, the name of Norway originated from the name of which of the following?',
            answer: 'The name of a king',
            choices: [
                'A mountain',
                'The name of a king',
                'The name of a river',
                'An animal'
            ]
        },
        {
            question: 'What type of government does Norway have?',
            answer: 'Constitutional monarchy',
            choices: [
                'Absolute monarchy',
                'Constitutional monarchy',
                'Democratic republic',
                'Presidential republic'
            ]
        },
        {
            question: 'What animal is depicted on the Coat of Arms of Norway?',
            answer: 'Lion',
            choices: [
                'Lion',
                'Bear',
                'Deer',
                'Wolf'
            ]
        },
        {
            question: 'What is the predominant form of Christianity in Norway?',
            answer: 'Protestantism',
            choices: [
                'Anglicanism',
                'Eastern Orthodox Christianity',
                'Roman Catholicism',
                'Protestantism'
            ]
        },
        {
            question: 'What is the official language adopted by the government of Norway?',
            answer: 'Norwegian',
            choices: [
                'Norwegian and Finnish',
                'Norwegian and English',
                'Norwegian and Romani',
                'Norwegian'
            ]
        },
        {
            question: 'What is the title of the national anthem of Norway?',
            answer: 'Yes, We Love This Country',
            choices: [
                'Glory, Glory',
                'Oh, Amazing Land',
                'The Way North',
                'Yes, We Love This Country'
            ]
        },
        {
            question: 'What is Bunad?',
            answer: 'A Norwegian costume',
            choices: [
                'A traditional Norwegian celebration',
                'A Norwegian song',
                'A Norwegian costume',
                'A Norwegian meal'
            ]
        },
        {
            question: 'What is the popular Norwegian delicacy called Smalahove made from?',
            answer: 'Lamb head',
            choices: [
                'Pork intestines',
                'Fish liver',
                'Chicken popes nose',
                'Lamb head'
            ]
        },
        {
            question: 'Which of the following is present on the national flag of Norway?',
            answer: 'Cross',
            choices: [
                'Star',
                'Cross',
                'Sun',
                'Mountain'
            ]
        },
        {
            question: 'What is the largest carnivorous mammal endemic to the island of Madagascar?',
            answer: 'Fossa',
            choices: [
                'Short-tailed Mongoose',
                'Fanaloka',
                'Meerkat',
                'Fossa'
            ]
        },
        {
            question: 'Which of these statements is true about Madagascar?',
            answer: 'None of these',
            choices: [
                'It is slightly smaller than France.',
                'It is the worlds 56th-largest country in terms of area.',
                'None of these',
                'It is the fifth largest island in the world.'
            ]
        },
        {
            question: 'What is the title of the national anthem of Madagascar, written by Norbert Raharisoa and composed by Rahajason?',
            answer: 'Oh, Our Beloved Fatherland',
            choices: [
                'Dear Motherland',
                'Blessed Island',
                'Oh, Our Beloved Fatherland',
                'Rise, Oh, Rise'
            ]
        },
        {
            question: 'What are the colors on the national flag of Madagascar, adopted on October 14, 1958?',
            answer: 'White, red and green',
            choices: [
                'Red, yellow and blue',
                'Yellow and green',
                'Blue, green and yellow',
                'White, red and green'
            ]
        },
        {
            question: 'What city is the capital and largest city of Madagascar?',
            answer: 'Antananarivo',
            choices: [
                'Fianarantsoa',
                'Mahajanga',
                'Antananarivo',
                'Toliara'
            ]
        },
        {
            question: 'What are the official languages spoken in Madagascar?',
            answer: 'Malagasy, French and English',
            choices: [
                'Malagasy, French and English',
                'Malagasy and English',
                'Malagasy and French',
                'English and French'
            ]
        },
        {
            question: 'What is the name some ecologists use wen referring to Madagascar?',
            answer: 'The eight continent',
            choices: [
                'The eight continent',
                'All of these',
                'The island of Adam and Eve',
                'The garden of Eden'
            ]
        },
        {
            question: 'What kind of traditional ritual is the Famadihana, practiced by the Malagasy people in Madagascar?',
            answer: 'Turning of the dead',
            choices: [
                'Circumcision',
                'Introducing boys into manhood by tattooing and scarring them',
                'Turning of the dead',
                'Animal sacrifice'
            ]
        },
        {
            question: 'What type of meal is the godro-godro, which is very popular in the Madagascar cuisine?',
            answer: 'Pudding',
            choices: [
                'Seafood meal',
                'Rice meal',
                'Pudding',
                'Vegetable stew'
            ]
        },
        {
            question: 'This tree is a very important part of the Madagascar dry deciduous forests and six species of it are endemic to the island.',
            answer: 'All of these',
            choices: [
                'All of these',
                'Bottle tree',
                'Monkey bread tree',
                'Upside-down tree'
            ]
        },
        {
            question: 'How many new species of animals and plants were discovered on Borneo between July 2005 and September 2006?',
            answer: '52',
            choices: [
                'None',
                '121',
                '3',
                '52'
            ]
        },
        {
            question: 'From the 1600s to the 1800s, the British and Dutch were interested in Borneo because they wanted control of this resource.',
            answer: 'Pepper',
            choices: [
                'Pepper',
                'Salt',
                'Coffee',
                'Tea'
            ]
        },
        {
            question: 'Which of the characteristics below is typical for the buildings on the Greek archipelago of Santorini?',
            answer: 'The white-and-blue colouring',
            choices: [
                'The white-and-blue colouring',
                'The huge balconies',
                'The red-tiled roofs',
                'The arched doors'
            ]
        },
        {
            question: 'What is the biggest Greek island ?',
            answer: 'Crete',
            choices: [
                'Rhodes',
                'Cyprus',
                'Euboea',
                'Crete'
            ]
        },
        {
            question: 'The Navagio Bay (also known as the Shipwreck) is the most popular beach of which Greek island?',
            answer: 'Zakynthos',
            choices: [
                'Mykonos',
                'Zakynthos',
                'Lefkada',
                'Thasos'
            ]
        },
        {
            question: 'Halkidiki, one of the Greek peninsulas, has a peculiar form which resembles what?',
            answer: 'A trident',
            choices: [
                'A horseshoe',
                'A trident',
                'An olive twig',
                'The Greek letter Omega'
            ]
        },
        {
            question: 'Which medieval monument is an essential part of the archaeological sites of the Greek island Rhodes?',
            answer: 'The Palace of the Grand Master',
            choices: [
                'The Palace of the Grand Master',
                'The White Tower',
                'The Venice Castle of Naoussa',
                'The Odeon'
            ]
        },
        {
            question: 'Which island is NOT a part of Greece?',
            answer: 'Gozo',
            choices: [
                'Kea',
                'Hydra',
                'Gozo',
                'Kos'
            ]
        },
        {
            question: 'The Corinth Canal separates this Greek peninsula from the mainland of Greece.',
            answer: 'Peloponnese',
            choices: [
                'Halkidiki',
                'Mani',
                'Elounda',
                'Peloponnese'
            ]
        },
        {
            question: 'Which is the largest group of Greek islands?',
            answer: 'The Cyclades',
            choices: [
                'The Cyclades',
                'The Sporades',
                'The Ionian',
                'The East Aegean'
            ]
        },
        {
            question: 'The Cave of Melissani is among the most popular geological landmarks of which Greek island?',
            answer: 'Kefallonia',
            choices: [
                'Kefallonia',
                'Lefkada',
                'Mykonos',
                'Samos'
            ]
        },
        {
            question: 'Which of the following places in Greece is NOT an island?',
            answer: 'Kavala',
            choices: [
                'Alonissos',
                'Ithaka',
                'Kavala',
                'Kythira'
            ]
        },
        {
            question: 'What is the name of the leader of the first squad of Shinsengumi?',
            answer: 'Okita Sōji',
            choices: [
                'Okita Sōji',
                'Inoue Genzaburō',
                'Harada Sanosuke',
                'Tōdō Heisuke'
            ]
        },
        {
            question: 'At its peak, how many members did the Shinsengumi group have?',
            answer: '300+',
            choices: [
                '50+',
                '300+',
                '200+',
                '100+'
            ]
        },
        {
            question: 'According to the Shinsengumi rules, if the leader of a unit is mortally wounded in a fight, what should the rest of the group do?',
            answer: 'All members of the unit must fight and die on the spot.',
            choices: [
                'Run away',
                'Take the body and run away',
                'Commit Seppuku',
                'All members of the unit must fight and die on the spot.'
            ]
        },
        {
            question: 'In which city was the Shinsengumi group founded?',
            answer: 'Kyoto',
            choices: [
                'Kyoto',
                'Tokyo',
                'Nagasaki',
                'Osaka'
            ]
        },
        {
            question: 'Who was Shinsengumi Commander from 1863 to 1868?',
            answer: 'Kondō Isami',
            choices: [
                'Nagakura Shinpachi',
                'Harada Sanosuke',
                'Tōdō Heisuke',
                'Kondō Isami'
            ]
        },
        {
            question: 'The code of Shinsengumi comprised five rules. What was the punishment for breaking these rules?',
            answer: 'Sepuku',
            choices: [
                'Sepuku',
                'Cutting of one finger',
                'Exile',
                'Paying six gold coins'
            ]
        },
        {
            question: 'What was the favorite weapon of Harada Sanosuke, the 10th unit captain of the Shinsengumi?',
            answer: 'Spear',
            choices: [
                'Kozuka Blade',
                'Spear',
                'Sword',
                'Shuriken'
            ]
        },
        {
            question: 'This river flows through the southern part of England and passes through the capital of the country.',
            answer: 'The Thames',
            choices: [
                'The Avon',
                'All of these',
                'The Thames',
                'The Mersey'
            ]
        },
        {
            question: 'What river is considered the longest river on the planet?',
            answer: 'The Nile',
            choices: [
                'The Nile',
                'The Tigris',
                'The Mississippi',
                'The Amazon'
            ]
        },
        {
            question: 'What is the name of the holy river of the Hindu people?',
            answer: 'The Ganges',
            choices: [
                'The Ganges',
                'The Euphrates',
                'The Indus',
                'The Tigris'
            ]
        },
        {
            question: 'What river flows through the central part of the French capital, Paris?',
            answer: 'Seine',
            choices: [
                'Seine',
                'Loire',
                'Charente',
                'Rhine'
            ]
        },
        {
            question: 'What is the name of the longest river in Asia, and the third-longest in the world?',
            answer: 'The Yangtze',
            choices: [
                'The Yangtze',
                'The Mekong-Lancang',
                'The Tigris',
                'The Huang He'
            ]
        },
        {
            question: 'This river is the longest in the United States, and it gave its name to one of the states.',
            answer: 'The Missouri River',
            choices: [
                'The Missouri River',
                'The Mississippi River',
                'The Alabama River',
                'The Ohio River'
            ]
        },
        {
            question: 'What is the largest river on the planet by volume?',
            answer: 'The Amazon',
            choices: [
                'The Mississippi',
                'The Amazon',
                'The Nile',
                'The Ganges'
            ]
        },
        {
            question: 'What is the name of the river in which Jesus Christ was baptized by John the Baptist?',
            answer: 'The Jordan',
            choices: [
                'The Tigris',
                'The Jordan',
                'The Euphrates',
                'The Nile'
            ]
        },
        {
            question: 'This North American river is also called Kaniatarowanenneh, which means big waterway in Mohawk.',
            answer: 'Saint Lawrence River',
            choices: [
                'Saint Lawrence River',
                'Rio Grande',
                'Colorado',
                'Ohio River'
            ]
        },
        {
            question: 'This European river originates in Germany and empties in the Black Sea via a delta.',
            answer: 'The Danube',
            choices: [
                'The Volga',
                'The Danube',
                'The Rhine',
                'All of these'
            ]
        },
        {
            question: 'In what Oklahoma city was the shopping cart invented?',
            answer: 'Ardmore',
            choices: [
                'Ardmore',
                'Guthrie',
                'Duncan',
                'Broken Arrow'
            ]
        },
        {
            question: 'How many of the astronauts who have flown in space between 1959 and 2009 were from Oklahoma?',
            answer: '6',
            choices: [
                '6',
                '20',
                '0',
                '3'
            ]
        },
        {
            question: 'A windspeed of 100 feet above the ground was observed in 1999 in what Oklahoma city?',
            answer: 'Moore',
            choices: [
                'Lawton',
                'Norman',
                'Moore',
                'Midwest City'
            ]
        },
        {
            question: 'Will Rogers World Airport and the Wiley Post Airport were named after people who died in 1935. How did they meet their demise?',
            answer: 'in a plane crash',
            choices: [
                'in a plane crash',
                'by murder',
                'in a car crash',
                'as a result of a boat accident'
            ]
        },
        {
            question: 'Carl Albert High School was named after Carl Bert Albert, who was the Speaker of the House of Representatives from 1971 to 1977. What small Oklahoma town did he hail from?',
            answer: 'Bugtussle',
            choices: [
                'Enid',
                'Bushyhead',
                'Slaughterville',
                'Bugtussle'
            ]
        },
        {
            question: 'Which of the following is NOT an Oklahoma city?',
            answer: 'Toledo',
            choices: [
                'Peoria',
                'Burbank',
                'St. Louis',
                'Toledo'
            ]
        },
        {
            question: 'The national motto of the Republic of Botswana is Pula. What does this mean in English?',
            answer: 'Rain',
            choices: [
                'Rain',
                'Strength',
                'Wisdom',
                'Sunshine'
            ]
        },
        {
            question: 'The national motto of what country is A Mari Usque Ad Mare, meaning From Sea to Sea in Latin?',
            answer: 'Canada',
            choices: [
                'Jamaica',
                'Spain',
                'Canada',
                'Haiti'
            ]
        },
        {
            question: 'What does the national motto of India, Satyameva Jayate, mean in Sanskrit?',
            answer: 'Truth Alone Triumphs',
            choices: [
                'The Supreme Treasure of Truth',
                'Truth Alone Triumphs',
                'Truth Is The Best Way',
                'Truth Is Divine'
            ]
        },
        {
            question: 'The national motto of what country is Peace at Home, Peace in the World?',
            answer: 'Turkey',
            choices: [
                'Afghanistan',
                'Somalia',
                'Nigeria',
                'Turkey'
            ]
        },
        {
            question: 'The national motto of this South American country is Libertad o muerte, Spanish for Liberty or Death.',
            answer: 'Uruguay',
            choices: [
                'Peru',
                'Uruguay',
                'Argentina',
                'Brazil'
            ]
        },
        {
            question: 'The slogan Sub Umbra Floreo, or Under the Shade I Flourish is the national motto of what Central American country?',
            answer: 'Belize',
            choices: [
                'Costa Rica',
                'Belize',
                'Guatemala',
                'Nicaragua'
            ]
        },
        {
            question: 'The national motto of what island country is Ever Conscious of God We Aspire, Build and Advance as One People?',
            answer: 'Grenada',
            choices: [
                'Grenada',
                'New Zealand',
                'Papua New Guinea',
                'Micronesia'
            ]
        },
        {
            question: 'The national motto of this Arabic country is God is the greatest.',
            answer: 'Iraq',
            choices: [
                'Morocco',
                'Iran',
                'Syria',
                'Iraq'
            ]
        },
        {
            question: 'What is the meaning of the national motto of the Republic of Indonesia, Bhinneka Tunggal Ika?',
            answer: 'Unity in Diversity',
            choices: [
                'Unity in Diversity',
                'Past Present Future',
                'Progress and Stability',
                'We Are Strong Together'
            ]
        },
        {
            question: 'In what country is the Angel Falls, the highest waterfall on the planet, located?',
            answer: 'Venezuela',
            choices: [
                'Brazil',
                'Argentina',
                'Colombia',
                'Venezuela'
            ]
        },
        {
            question: 'Which of these is a section of the famous Niagara Falls?',
            answer: 'Horseshoe Falls',
            choices: [
                'Horseback Falls',
                'Horseshoe Falls',
                'Horsetail Falls',
                'Horseman Falls'
            ]
        },
        {
            question: 'In what U.S. state is the famous Bridalveil Fall located?',
            answer: 'California',
            choices: [
                'California',
                'Florida',
                'Colorado',
                'Hawaii'
            ]
        },
        {
            question: 'What is the name of the tallest waterfall made by humans, which is located in Umbria, Italy?',
            answer: 'Cascata delle Marmore',
            choices: [
                'Cascata delle Marmore',
                'Cascata del Maria',
                'Cascata del Mare',
                'Cascata delle Maccheroni'
            ]
        },
        {
            question: 'Jog Falls is the highest plunge waterfall in this Asian country.',
            answer: 'India',
            choices: [
                'India',
                'Japan',
                'China',
                'Thailand'
            ]
        },
        {
            question: 'What is the name of the second-tallest waterfall on the planet?',
            answer: 'Tugela Falls',
            choices: [
                'Temola Falls',
                'Tugela Falls',
                'Tierra Falls',
                'Tamilla Falls'
            ]
        },
        {
            question: 'In what European country are the Rhine Falls located?',
            answer: 'Switzerland',
            choices: [
                'Germany',
                'Switzerland',
                'Austria',
                'Belgium'
            ]
        },
        {
            question: 'In what U.S. state is the tallest waterfall in the country, Waihilau Falls, located?',
            answer: 'Hawaii',
            choices: [
                'Idaho',
                'Wyoming',
                'Hawaii',
                'Iowa'
            ]
        },
        {
            question: 'In what country is Jurong Falls, the tallest artificial waterfall in the world, located?',
            answer: 'Singapore',
            choices: [
                'Indonesia',
                'Singapore',
                'Vietnam',
                'North Korea'
            ]
        },
        {
            question: 'What is the name of the tallest waterfall in eastern North America?',
            answer: 'Pissing Mare Falls',
            choices: [
                'Pissing Mare Falls',
                'Pissing Horse Falls',
                'Pissing Elephant Falls',
                'Pissing Buffalo Falls'
            ]
        },
        {
            question: 'What is the old name of the country of Madagascar?',
            answer: 'Malagasy Republic',
            choices: [
                'Rhodesia',
                'Mozambique',
                'Malaysia',
                'Malagasy Republic'
            ]
        },
        {
            question: 'Where is Madagascar?',
            answer: 'Off the Southeast Coast of Africa',
            choices: [
                'Off the Southeast Coast of South America',
                'Off the Southeast Coast of South America',
                'Off the Southwest Coast of Africa',
                'Off the Southeast Coast of Africa'
            ]
        },
        {
            question: 'What are the 2 main languages spoken in Madagascar?',
            answer: 'French and Malagasy',
            choices: [
                'Italian and French',
                'French and English',
                'English and Malagasy',
                'French and Malagasy'
            ]
        },
        {
            question: 'Madagascar is the worlds largest producer and exporter of what product?',
            answer: 'Vanilla',
            choices: [
                'Sugarcane',
                'Vanilla',
                'Tapioca',
                'Rice'
            ]
        },
        {
            question: 'Of the 10,000 plants native to Madagascar, what percent are found nowhere else in the world?',
            answer: '90%',
            choices: [
                '49%',
                '13%',
                '90%',
                '72%'
            ]
        },
        {
            question: 'On what island is the country of Madagascar located?',
            answer: 'Madagascar Island',
            choices: [
                'Madagascar Island',
                'Nias Island',
                'Simeulue Island',
                'Christmas Island'
            ]
        },
        {
            question: 'Which of the following is NOT located in the country of Madagascar?',
            answer: 'Bodrum',
            choices: [
                'Nosy-Be',
                'Antananarivo',
                'Antsirabe',
                'Bodrum'
            ]
        },
        {
            question: 'I am a primate endemic to Madagascar. I have large, reflective eyes. I have a long tail. I have long toes, and opposable thumbs, useful for grasping tree branches. What am I?',
            answer: 'A lemur',
            choices: [
                'An iguana',
                'An ape',
                'A monkey',
                'A lemur'
            ]
        },
        {
            question: 'What Portuguese explorer was the first to sight the island of Madagascar?',
            answer: 'Diego Dias',
            choices: [
                'Henry the Navigator',
                'Diego Dias',
                'Diogo Cao',
                'Vasco da Gama'
            ]
        },
        {
            question: 'Where is New Guinea ranked in terms of size, among the islands of the world?',
            answer: 'New Guinea is the second largest island in the world.',
            choices: [
                'New Guinea is the third largest island in the world.',
                'New Guinea is the fourth largest island in the world.',
                'New Guinea is the second largest island in the world.',
                'New Guinea is the largest island in the world.'
            ]
        },
        {
            question: 'New Guinea is an island north of Australia. It is divided into 2 roughly equal halves. What are they?',
            answer: 'The western portion is part of Indonesia. The eastern portion is the country called Papua New Guinea.',
            choices: [
                'The western portion is part of Australia. The eastern portion is the country called Sumatra.',
                'The western portion is part of Indonesia. The eastern portion is the country called Papua New Guinea.',
                'The western portion is part of Indonesia. The eastern portion is the country called Sumatra.',
                'The western portion is part of Australia. The eastern portion is the country called Papua New Guinea.'
            ]
        },
        {
            question: 'New Guinea is the most linguistically diverse area in the world. Approximately how many separate languages are spoken there?',
            answer: '1000',
            choices: [
                '80',
                '20',
                '650',
                '1000'
            ]
        },
        {
            question: 'The island of New Guinea was named after the country of Guinea. Which is Guinea located?',
            answer: 'Africa',
            choices: [
                'Africa',
                'In the Pacific Ocean',
                'South America',
                'Asia'
            ]
        },
        {
            question: 'The country of Papua New Guinea gained its independence from this country in 1975.',
            answer: 'Australia',
            choices: [
                'Mozambique',
                'Australia',
                'Indonesia',
                'New Zealand'
            ]
        },
        {
            question: 'The west half of the island of New Guinea is part of Indonesia, which comprises how many islands?',
            answer: '17,508',
            choices: [
                '4',
                '8,407',
                '17,508',
                '247,542'
            ]
        },
        {
            question: 'Approximately what percentage of the population of the country of Papua New Guinea lives in rural areas?',
            answer: '86%',
            choices: [
                '50%',
                '34%',
                '97%',
                '86%'
            ]
        },
        {
            question: 'In the country of Papua New Guinea, how many children does the average woman give birth to during her lifetime according to 2006 estimates?',
            answer: '4.6',
            choices: [
                '1.2',
                '2.8',
                '4.6',
                '3.9'
            ]
        },
        {
            question: 'What is the capital city of the country of Papua New Guinea?',
            answer: 'Port Moresby',
            choices: [
                'Port Moresby',
                'Madang',
                'Wau',
                'Lae'
            ]
        },
        {
            question: 'The islands of the Pacific are collectively termed Oceania. Oceania is divided into several sub-groupings. In which of these is New Guinea located?',
            answer: 'Melanesia',
            choices: [
                'Polynesia',
                'None of these',
                'Melanesia',
                'Micronesia'
            ]
        },
        {
            question: 'What is the literal translation of the title of the national anthem of Egypt, Bilady, Bilady, Bilady?',
            answer: 'My country, my country, my country',
            choices: [
                'Amazing, amazing, amazing',
                'Sing, sing, sing',
                'My country, my country, my country',
                'Blessed, blessed, blessed'
            ]
        },
        {
            question: 'What sea borders Egypt to the east?',
            answer: 'Red Sea',
            choices: [
                'Black Sea',
                'Yellow Sea',
                'Mediterranean Sea',
                'Red Sea'
            ]
        },
        {
            question: 'Why was Egypt called Kemet, or black land, back in the ancient times?',
            answer: 'Because of the black soils',
            choices: [
                'Because of the coal',
                'Because of the black soils',
                'Because of the petrol',
                'All of these'
            ]
        },
        {
            question: 'What is the official language spoken in Egypt?',
            answer: 'Arabic',
            choices: [
                'Arabic and French',
                'Arabic',
                'Arabic, English and French',
                'Arabic and English'
            ]
        },
        {
            question: 'What Egyptian city is the largest city not only in Africa, but also in the whole Middle East?',
            answer: 'Cairo',
            choices: [
                'Cairo',
                'Alexandria',
                'Giza',
                'Ismailia'
            ]
        },
        {
            question: 'What animal is depicted on Egypts national emblem, which is featured on the national flag of Egypt, adopted in 1984?',
            answer: 'Eagle',
            choices: [
                'Bear',
                'Jackal',
                'Eagle',
                'Lion'
            ]
        },
        {
            question: 'Where was Omar Sharif, one of the most famous Egyptian actors, born?',
            answer: 'Alexandria, Egypt',
            choices: [
                'Paris, France',
                'New York City, USA',
                'Hamburg, Germany',
                'Alexandria, Egypt'
            ]
        },
        {
            question: 'What sport is rated as the most popular sport among Egyptians?',
            answer: 'Football (soccer)',
            choices: [
                'Football (soccer)',
                'Baseball',
                'Handball',
                'Tennis'
            ]
        },
        {
            question: 'The Egyptian territory is calculated to be roughly twice as large as the territory of this European country.',
            answer: 'Spain',
            choices: [
                'Poland',
                'Spain',
                'France',
                'United Kingdom'
            ]
        },
        {
            question: 'What expression is commonly used in Egypt to refer to the annual flooding of the river Nile, the longest river in the world?',
            answer: 'The Gift of the Nile',
            choices: [
                'Feeding of the Soil',
                'The Gift of the Nile',
                'The Blessing of the Nile',
                'The Mother of Abundance'
            ]
        },
        {
            question: 'Luxembourg is bordered by all of the following nations except this one.',
            answer: 'Netherlands',
            choices: [
                'Belgium',
                'France',
                'Germany',
                'Netherlands'
            ]
        },
        {
            question: 'What languages are spoken in Luxembourg?',
            answer: 'All of these',
            choices: [
                'All of these',
                'German',
                'French',
                'Luxembourgish'
            ]
        },
        {
            question: 'Which of the following organizations is Luxembourg a member of?',
            answer: 'All of these',
            choices: [
                'OECD',
                'United Nations',
                'European Union',
                'All of these'
            ]
        },
        {
            question: 'Luxembourg has a population of approximately how many people?',
            answer: 'one half million',
            choices: [
                '30,000',
                'one half million',
                'two million',
                'three and one half million'
            ]
        },
        {
            question: 'Why is Luxembourg City one of the wealthiest cities in the world?',
            answer: 'It is a banking and administrative center.',
            choices: [
                'It is the European center of computer and computer related companies.',
                'There is great mineral wealth in the area around the city.',
                'It is a banking and administrative center.',
                'Rich retired people have ranked it as the most desirable place in Europe to live.'
            ]
        },
        {
            question: 'What is the official name of Luxembourg?',
            answer: 'Grand Duchy of Luxembourg',
            choices: [
                'The Peoples Republic of Luxembourg',
                'Grand Duchy of Luxembourg',
                'The Luxembourg Democratic Republic',
                'The Kingdom of Luxembourg'
            ]
        },
        {
            question: 'How does Luxembourg, which is a member of NATO, contribute to NATO?',
            answer: 'by maintaining a small army',
            choices: [
                'by maintaining the sixth largest NATO air force',
                'by maintaining a small army',
                'by allowing extensive US and British military installations on its territory',
                'by financially supporting a navy even though is has no coastline'
            ]
        },
        {
            question: 'What is the predominant religion in Luxembourg?',
            answer: 'Roman Catholic',
            choices: [
                'Islam',
                'Orthodox Catholic',
                'Protestant',
                'Roman Catholic'
            ]
        },
        {
            question: 'In what country is Virginia Falls located?',
            answer: 'Canada',
            choices: [
                'United States',
                'Austarlia',
                'Wales',
                'Canada'
            ]
        },
        {
            question: 'What is the name of the tallest waterfall in Asia?',
            answer: 'Hannoki Falls',
            choices: [
                'Midagahara Falls',
                'Hannoki Falls',
                'Shomyo Falls',
                'Toyama Falls'
            ]
        },
        {
            question: 'The Eas a Chual Aluinn is the highest waterfall in this country.',
            answer: 'Great Britain',
            choices: [
                'France',
                'China',
                'Sri Lanka',
                'Great Britain'
            ]
        },
        {
            question: 'What is the English name of the Mosi-oa-Tunya waterfall located between Zambia and Zimbabwe?',
            answer: 'Victoria Falls',
            choices: [
                'Virginia Falls',
                'Veronica Falls',
                'Valeria Falls',
                'Victoria Falls'
            ]
        },
        {
            question: 'In what country is Yumbilla Falls, the fifth-tallest waterfall on the planet, located?',
            answer: 'Peru',
            choices: [
                'Chile',
                'Peru',
                'Thailand',
                'Australia'
            ]
        },
        {
            question: 'Where is the third-tallest waterfall on the planet, Ramnefjellsfossen, located?',
            answer: 'Norway',
            choices: [
                'Norway',
                'Finland',
                'Switzerland',
                'Denmark'
            ]
        },
        {
            question: 'What does the name of the Iguazu Falls, located in South America, mean in English?',
            answer: 'Big water',
            choices: [
                'Way to heaven',
                'River storm',
                'Devils waterfall',
                'Big water'
            ]
        },
        {
            question: 'In what country is Gocta Waterfall located?',
            answer: 'Peru',
            choices: [
                'Venezuela',
                'Peru',
                'Spain',
                'Nicaragua'
            ]
        },
        {
            question: 'What is the name of the highest waterfall in North America?',
            answer: 'James Bruce Falls',
            choices: [
                'Richard Brown Falls',
                'Johnathan Stevens Falls',
                'James Bruce Falls',
                'John Cliff Falls'
            ]
        },
        {
            question: 'In which U.S. state is the Multnomah Falls located?',
            answer: 'Oregon',
            choices: [
                'Ohio',
                'Oregon',
                'Maine',
                'Missouri'
            ]
        },
        {
            question: 'What is the name of the largest volcano on Earth in terms of area?',
            answer: 'Mauna Loa',
            choices: [
                'Mauna Loa',
                'Taal Volcano',
                'Mauna Kea',
                'Mount Etna'
            ]
        },
        {
            question: 'In what Asian country is the Mount Unzen volcanic group located?',
            answer: 'Japan',
            choices: [
                'Vietnam',
                'Japan',
                'China',
                'Thailand'
            ]
        },
        {
            question: 'The area around what Italian volcano is the most densely populated volcanic region in the world, making the volcano one of the most dangerous on the planet?',
            answer: 'Mount Vesuvius',
            choices: [
                'Mount Vesuvius',
                'Mount Etna',
                'None of these',
                'Stromboli'
            ]
        },
        {
            question: 'This Andean stratovolcano in Colombia erupted in 1993, killing 9 people.',
            answer: 'Galeras',
            choices: [
                'Galeras',
                'Pasto',
                'Nina',
                'Paloma'
            ]
        },
        {
            question: 'The Santorini volcanic islands are part of what European country?',
            answer: 'Greece',
            choices: [
                'Denmark',
                'Spain',
                'Italy',
                'Greece'
            ]
        },
        {
            question: 'This Russian volcano, located on the Kamchatka Peninsula, is one of the most active volcanoes on the planet.',
            answer: 'Avachinsky',
            choices: [
                'Elbrus',
                'Anik Mountain',
                'Sikhote-Alin',
                'Avachinsky'
            ]
        },
        {
            question: 'What is the name of the dangerous active volcano located in the Western Highlands of Guatemala?',
            answer: 'Santa Maria',
            choices: [
                'Santa Lucia',
                'Santa Fernanda',
                'Santa Beatrice',
                'Santa Maria'
            ]
        },
        {
            question: 'On which of the Philippine islands is the active Taal Volcano located?',
            answer: 'Luzon',
            choices: [
                'Mindanao',
                'Visayas',
                'Luzon',
                'None of these'
            ]
        },
        {
            question: 'What is the highest point in the state of Illinois?',
            answer: 'Charles Mound',
            choices: [
                'Lincoln Mound',
                'Devils Mound',
                'Charles Mound',
                'Mount Vernon'
            ]
        },
        {
            question: 'Who is the 16th president of the United States?',
            answer: 'Abraham Lincoln',
            choices: [
                'Abraham Lincoln',
                'Andrew Johnson',
                'James Polk',
                'Ulysses P. Grant'
            ]
        },
        {
            question: 'The city of Saint Louis, nicknamed Gateway to the West, is located in which state?',
            answer: 'Missouri',
            choices: [
                'Missouri',
                'Nebraska',
                'Mississippi',
                'Ohio'
            ]
        },
        {
            question: 'Malcolm X, the founder of the Organization of Afro-American Unity,  was born in what US city?',
            answer: 'Omaha',
            choices: [
                'Kansas City',
                'Omaha',
                'Saint Louis',
                'Belleville'
            ]
        },
        {
            question: 'What is the capital of Illinois, the 21st US State?',
            answer: 'Springfield',
            choices: [
                'Chicago',
                'Lincoln',
                'Springfield',
                'Omaha'
            ]
        },
        {
            question: 'This city, located in Colorado, is the highest city in the United States.',
            answer: 'Leadville',
            choices: [
                'Vail',
                'Leadville',
                'Colorado Springs',
                'Denver'
            ]
        },
        {
            question: 'Amelia Earhart, the first woman to fly solo across the Atlantic, was born in what city and state?',
            answer: 'Atchison, Kansas',
            choices: [
                'Omaha, Nebraska',
                'Louisville, Kentucky',
                'New York City, New York',
                'Atchison, Kansas'
            ]
        },
        {
            question: 'In geography, the term desert is used to refer to a region that receives little or no precipitation. Approximately one-third of Earths land surface is desert, with the largest such region being which of these?',
            answer: 'Antarctica',
            choices: [
                'Sahara',
                'Antarctica',
                'Kalahari',
                'Greenland'
            ]
        },
        {
            question: 'The Kalahari Desert, meaning great thirst translated from the local language, is a vast area of red-brown sands, taking up a considerable area of which of these regions?',
            answer: 'South Africa',
            choices: [
                'Central Asia',
                'South Africa',
                'The Middle East',
                'Southwest Asia'
            ]
        },
        {
            question: 'This African desert, famous for its enormous sand dunes, is considered the oldest desert in the world, having endured its current arid conditions for at least 80 million years.',
            answer: 'Namib Desert',
            choices: [
                'Libyan Desert',
                'Kalahari Desert',
                'Namib Desert',
                'Kara Kum Desert'
            ]
        },
        {
            question: 'Rangipo Desert in the central part of New Zealands North Island, does not have its barren and lifeless appearance because of the lack of rain, but rather, due to which of these?',
            answer: 'Soil structure',
            choices: [
                'Intense use of pesticides',
                'Constant powerful winds',
                'Soil structure',
                'Frequent destructive storms'
            ]
        },
        {
            question: 'The Atacama Desert of Chile and Peru is one of the driest and most lifeless places on Earth. This virtually rainless plateau is made up of sand, lava flows, and what other substance?',
            answer: 'Salt',
            choices: [
                'Limestone',
                'Salt',
                'Clay',
                'Ash'
            ]
        },
        {
            question: 'This Australian desert of nearly 600,000 square kilometres is famous for its spectacular land and rock formations, such as Uluru and Kata Tjuta, its estimated 1,100 parallel dunes running north-south, and the fresh water lake, Rainbow Valley.',
            answer: 'Simpson Desert',
            choices: [
                'Tanami Desert',
                'Simpson Desert',
                'Great Victoria Desert',
                'Great Sandy Desert'
            ]
        },
        {
            question: 'The largest natural karst crater on Earth - Ramon Crater, with a length of 40 km (25 miles) and width of 2 to 10 km (1.5 to 6 miles), is situated in the heart of this Middle East desert.',
            answer: 'Negev desert',
            choices: [
                'Kyzyl Kum',
                'Negev desert',
                'Judean Desert',
                'Mojave desert'
            ]
        },
        {
            question: 'Which one of these countries is largest in area?',
            answer: 'Japan',
            choices: [
                'Japan',
                'Jordan and Japan are equal in size',
                'Jordan',
                'Jamaica'
            ]
        },
        {
            question: 'Which of the following oceans is the worlds largest?',
            answer: 'Pacific Ocean',
            choices: [
                'Indian Ocean',
                'Arctic Ocean',
                'Atlantic Ocean',
                'Pacific Ocean'
            ]
        },
        {
            question: 'Which of the following countries is the worlds smallest continent, and can also be considered an island since it is surrounded by water?',
            answer: 'Australia',
            choices: [
                'India',
                'Africa',
                'Madagascar',
                'Australia'
            ]
        },
        {
            question: 'This is the worlds smallest independent state with a population in 2007 of approximately 821.',
            answer: 'Vatican City',
            choices: [
                'Vatican City',
                'Monaco',
                'San Marino',
                'Tuvalu'
            ]
        },
        {
            question: 'Which central European countrys all pre-1989 neighbors do not exist any more? The country is now bordered by 7 states.',
            answer: 'Poland',
            choices: [
                'Austria',
                'Poland',
                'Hungary',
                'Romania'
            ]
        },
        {
            question: 'The African kingdom of Dahomey was powerful in the XVIII century. Which modern day country did it cover?',
            answer: 'Benin',
            choices: [
                'Burma',
                'Burkina Faso',
                'Benin',
                'DR Congo'
            ]
        },
        {
            question: 'The Holy Roman Empire of the German Nation was a loosely coupled union of mostly German speaking principalities. Which part of the union was the driver of the 19th century unification of Germany?',
            answer: 'Prussia',
            choices: [
                'Austria',
                'Prussia',
                'Saxony',
                'Bavaria'
            ]
        },
        {
            question: 'Where was the late medieval kingdom of Aragon situated?',
            answer: 'Eastern Spain, major islands on the Mediterranean Sea and southern Italy',
            choices: [
                'Ireland and parts of Scotland',
                'Eastern Spain, major islands on the Mediterranean Sea and southern Italy',
                'Tolkiens fiction',
                'Syria, Turkey and northern Iraq'
            ]
        },
        {
            question: 'When Yugoslavia collapsed, one of its republics became an independent state known as FYROM. To which country does the acronym refer?',
            answer: 'Macedonia',
            choices: [
                'Albania',
                'Bosnia and Herzegovina',
                'Montenegro',
                'Macedonia'
            ]
        },
        {
            question: 'By the end of the 16th century, a country called Commonwealth of Both Nations covered almost 1 million square kilometers of Europe. Which two countries formed it?',
            answer: 'Poland and Lithuania',
            choices: [
                'Sweden and Denmark',
                'Russia and Ukraine',
                'Poland and Lithuania',
                'Austria and Hungary'
            ]
        },
        {
            question: 'Phoenicia was an ancient civilization that spread maritime trade over the Mediterranean Sea. From where did the Phoenicians originate?',
            answer: 'Modern day Liban (Sidon, Tyre)',
            choices: [
                'North Africa (Tunis, Algier)',
                'Sicily (Syracuse)',
                'Greek islands on the Aegean Sea',
                'Modern day Liban (Sidon, Tyre)'
            ]
        },
        {
            question: 'Myanmar is a south-eastern Asian country. Under which name was it known before a military junta took over?',
            answer: 'Burma',
            choices: [
                'Siam',
                'Burma',
                'Bhutan',
                'Noth Vietnam'
            ]
        },
        {
            question: 'The Ottoman Empire used to rule over North Africa, the Middle East and south-eastern Europe. Which modern day country is the successor of the empire?',
            answer: 'Turkey',
            choices: [
                'Israel',
                'Saudi Arabia',
                'Turkey',
                'Egypt'
            ]
        },
        {
            question: 'Which independent country was not a Soviet republic?',
            answer: 'Albania',
            choices: [
                'Georgia',
                'Armenia',
                'Lithuania',
                'Albania'
            ]
        },
        {
            question: 'Where was the monastic state of the Teutonic Knights located?',
            answer: 'Northern Poland, southern Lithuania, part of Latvia and the Russian enclave of Kaliningrad',
            choices: [
                'Seperated spots on modern day German territory',
                'Northern Poland, southern Lithuania, part of Latvia and the Russian enclave of Kaliningrad',
                'Southern France (Provance)',
                'Malta and other islands on the Mediterranean'
            ]
        },
        {
            question: 'Where were the Boer Republics located?',
            answer: 'Across South Africa',
            choices: [
                'In the Netherlands',
                'Across South Africa',
                'They were early Puritan settlements in the eastern North America',
                'Minor British isles'
            ]
        },
        {
            question: 'Finish this Irish saying: A tune is more lasting than the song of birds. And a word is more lasting than ________.',
            answer: 'the wealth of the world',
            choices: [
                'an old mans teeth',
                'the wealth of the world',
                'a maidens beauty',
                'a bottle of whiskey'
            ]
        },
        {
            question: 'What is the missing word in this Irish saying: Every dog is _____ at his own house door.?',
            answer: 'bold',
            choices: [
                'asleep',
                'lonely',
                'bold',
                'fearful'
            ]
        },
        {
            question: 'Complete this Irish saying: The whole world cannot make a ________ out of a donkey.',
            answer: 'race horse',
            choices: [
                'poet',
                'race horse',
                'nobleman',
                'artist'
            ]
        },
        {
            question: 'Finish the following Irish saying: However long the day it ends with _______.',
            answer: 'night',
            choices: [
                'some bread',
                'a lullaby',
                'night',
                'a bang'
            ]
        },
        {
            question: 'Complete this Irish saying: Dont let your ______ cut your throat.',
            answer: 'tongue',
            choices: [
                'jealousy',
                'mother-in-law',
                'tongue',
                'stale bread'
            ]
        },
        {
            question: 'What is the missing word in this Irish saying: ______ is the poor mans doctor.?',
            answer: 'Death',
            choices: [
                'An apple',
                'Socialism',
                'Death',
                'Over-the-counter medication'
            ]
        },
        {
            question: 'Complete the following Irish saying: If you want ______, always carry the back tooth of a horse with you.',
            answer: 'money',
            choices: [
                'to go swimming',
                'beauty',
                'money',
                'to be the life of the party'
            ]
        },
        {
            question: 'Finish this Irish saying: If someone is sick turn his bed so that it faces _________.',
            answer: 'north',
            choices: [
                'the TV',
                'the wall',
                'north',
                'a window'
            ]
        },
        {
            question: 'Finish this Irish saying: The far off hills are _______.',
            answer: 'the greenest',
            choices: [
                'covered with clouds',
                'alive with the sound of music',
                'the farthest away',
                'the greenest'
            ]
        },
        {
            question: 'Finish this Irish saying: Often has the likely failed and the unlikely _________.',
            answer: 'succeeded',
            choices: [
                'failed too',
                'wrote a novel about the failure',
                'laughed at the failure',
                'succeeded'
            ]
        },
        {
            question: 'What is the capital and largest city of Jamaica?',
            answer: 'Kingston',
            choices: [
                'Montego Bay',
                'Kigali',
                'Harare',
                'Kingston'
            ]
        },
        {
            question: 'What is the name of the capital city of India?',
            answer: 'New Delhi',
            choices: [
                'Jaipur',
                'Mumbai',
                'Calcutta',
                'New Delhi'
            ]
        },
        {
            question: 'Tegucigalpa is the capital and largest city of this country.',
            answer: 'Honduras',
            choices: [
                'Namibia',
                'Honduras',
                'Uzbekistan',
                'Laos'
            ]
        },
        {
            question: 'What is the capital and largest city of Romania?',
            answer: 'Bucharest',
            choices: [
                'Ankara',
                'Sofia',
                'Kiev',
                'Bucharest'
            ]
        },
        {
            question: 'Addis Ababa is the capital of what country?',
            answer: 'Ethiopia',
            choices: [
                'Samoa',
                'Paraguay',
                'Ghana',
                'Ethiopia'
            ]
        },
        {
            question: 'What is the capital and largest city of Lebanon?',
            answer: 'Beirut',
            choices: [
                'Bujumbura',
                'Dhaka',
                'Baghdad',
                'Beirut'
            ]
        },
        {
            question: 'Kathmandu is the capital city of what country?',
            answer: 'Nepal',
            choices: [
                'Gabon',
                'Nepal',
                'Togo',
                'Rwanda'
            ]
        },
        {
            question: 'What is the name of the capital city of Latvia?',
            answer: 'Riga',
            choices: [
                'Reykjavik',
                'Port Vila',
                'Porto-Novo',
                'Riga'
            ]
        },
        {
            question: 'This city is the capital of the Kingdom of Morocco.',
            answer: 'Rabat',
            choices: [
                'Suva',
                'Yaounde',
                'Tehran',
                'Rabat'
            ]
        },
        {
            question: 'uito?',
            answer: 'Ecuador',
            choices: [
                'Bolivia',
                'Macedonia',
                'Ecuador',
                'Yemen'
            ]
        },
        {
            question: 'Name Zimbabwes capital which is an independent city equivalent to a province.',
            answer: 'Harare',
            choices: [
                'Harare',
                'Cairo',
                'Rome',
                'Tunis'
            ]
        },
        {
            question: 'Name Moroccos capital that is also the capital of the Rabat-Salé-Zemmour-Zaer region.',
            answer: 'Rabat',
            choices: [
                'Casablanca',
                'Pretoria',
                'Niamey',
                'Rabat'
            ]
        },
        {
            question: 'What is the capital and largest city of the Republic of the Congo?',
            answer: 'Brazzaville',
            choices: [
                'Brazzaville',
                'Lusaka',
                'Lima',
                'Libreville'
            ]
        },
        {
            question: 'What port on the Atlantic Ocean is the capital and largest city of Guinea.',
            answer: 'Conakry',
            choices: [
                'Baku',
                'Dhaka',
                'Conakry',
                'Bujumbura'
            ]
        },
        {
            question: 'What is the capital and largest commercial city of Libya?',
            answer: 'Tripoli',
            choices: [
                'Ethiopia',
                'Windhoek',
                'Nouakchott',
                'Tripoli'
            ]
        },
        {
            question: 'This city is Kenyas capital and the most populous city in East Africa.',
            answer: 'Nairobi',
            choices: [
                'Cape Town',
                'Nairobi',
                'Port Louis',
                'Tripoli'
            ]
        },
        {
            question: 'What is the currency of Russia?',
            answer: 'ruble',
            choices: [
                'franc',
                'ruble',
                'dollar',
                'peso'
            ]
        },
        {
            question: 'How do you say hello in Russian?',
            answer: 'Zdravstvuite',
            choices: [
                'Spasiba',
                'Zdravstvuite',
                'Dobry den',
                'Do svidanya'
            ]
        },
        {
            question: 'What phrase means I love you in Russian?',
            answer: 'Ya lyublyu tebya',
            choices: [
                'Eu te amo',
                'Ya lyublyu tebya',
                'Te iu besc',
                'Volim te'
            ]
        },
        {
            question: 'Who is the first President of the Russian Federation?',
            answer: 'Boris Yeltsin',
            choices: [
                'Mikhail Kasyanov',
                'Viktor Khristenko',
                'Boris Yeltsin',
                'Vladimir Putin'
            ]
        },
        {
            question: 'Who commissioned  the St. Basils Cathedral?',
            answer: 'Ivan the Terrible',
            choices: [
                'Ivan the Marvelous',
                'Ivan the Terrible',
                'Ivan the Ultimate',
                'Ivan the Magnificent'
            ]
        },
        {
            question: 'Name the capital city of the U.S. state of Wyoming.',
            answer: 'Cheyenne',
            choices: [
                'Boise',
                'Des Moines',
                'Salt Lake City',
                'Cheyenne'
            ]
        },
        {
            question: 'The U.S. state of Oregon has been nicknamed after this animal, which is the official state animal.',
            answer: 'Beaver',
            choices: [
                'Raccoon',
                'Beaver',
                'Marmot',
                'Bear'
            ]
        },
        {
            question: 'Which U.S. state has been nicknamed The Silver State?',
            answer: 'Nevada',
            choices: [
                'Nevada',
                'Nebraska',
                'North Dakota',
                'New Mexico'
            ]
        },
        {
            question: 'Albuquerque is the largest city of which U.S. state?',
            answer: 'New Mexico',
            choices: [
                'Ohio',
                'Kansas',
                'Oklahoma',
                'New Mexico'
            ]
        },
        {
            question: 'Name the capital city of the U.S. state of Montana.',
            answer: 'Helena',
            choices: [
                'Helena',
                'Billings',
                'Pierre',
                'Sioux Falls'
            ]
        },
        {
            question: 'What does the name of the U.S. state of Texas literally mean in Caddo?',
            answer: 'Friends',
            choices: [
                'Vast',
                'Buffalo',
                'Wilderness',
                'Friends'
            ]
        },
        {
            question: 'The state of Louisiana is bordered by the Gulf of Mexico on the south and three states. Which state does NOT border Louisiana?',
            answer: 'Oklahoma',
            choices: [
                'Oklahoma',
                'Texas',
                'Arkansas',
                'Mississippi'
            ]
        },
        {
            question: 'When René-Robert Cavelier, Sieur de La Salle (Yikes!) claimed the territory he named it La Louisiane, which means....',
            answer: 'Land of Louis or The Lousiana.',
            choices: [
                'Land of Lords or Land of the Lords.',
                'Land of France or Long Live France.',
                'Land of Life or The Life.',
                'Land of Louis or The Lousiana.'
            ]
        },
        {
            question: 'What is the closest definition of Santeria?',
            answer: 'A Cuban based religion popular in Lousiana.',
            choices: [
                'Another name for the Catholic Church in Lousiana.',
                'Another name for the Protestant Baptists religion in Lousiana.',
                'A Cuban based religion popular in Lousiana.',
                'A Jewish based religion popular in Lousiana.'
            ]
        },
        {
            question: 'The first recorded Euroregion, Gronau, was founded in 1958. What countries established it?',
            answer: 'Germany and Netherlands',
            choices: [
                'Austria and Switzerland',
                'Germany and Austria',
                'Germany and Netherlands',
                'Switzerland and Germany'
            ]
        },
        {
            question: 'The Beskidy (Beskydy) Euroregion is located in the west part of the Carpathian mountain range. Which three countries does it span?',
            answer: 'Czech Republic, Poland, Slovakia',
            choices: [
                'Hungary, Romania, Ukraine',
                'Czech Republic, Poland, Slovakia',
                'Czech Republic, Austria, Slovakia',
                'Poland, Slovakia, Ukraine'
            ]
        },
        {
            question: 'Which country is not a member of the Adriatic Euroregion?',
            answer: 'Serbia',
            choices: [
                'Montenegro',
                'Albania',
                'Serbia',
                'Italy'
            ]
        },
        {
            question: 'The ore and coal rich region of Silesia (pol.: Ślask, ger.: Schliesien, cz.: Slezsko) was ruled by Germans, Poles, Czechs and Austrians. To which country does it mostly belong today?',
            answer: 'Poland',
            choices: [
                'Slovakia',
                'Germany',
                'Poland',
                'Czech Republic'
            ]
        },
        {
            question: 'Where would you find the Tornio River Valley Euroregion?',
            answer: 'Sweden / Finland',
            choices: [
                'Sweden / Finland',
                'Italy / Slovenia',
                'Italy / France',
                'Austria / Italy'
            ]
        },
        {
            question: 'The Cross Channel Euroregion includes France, the UK and what other country?',
            answer: 'Belgium',
            choices: [
                'Belgium',
                'Ireland',
                'Spain',
                'Netherlands'
            ]
        },
        {
            question: 'The region of Pomerania (ger.: Pomern, pol.: Pomorze) is located in north Germany and Poland. Which river divides the region into two parts?',
            answer: 'Oder (Odra)',
            choices: [
                'Vistula',
                'Danube',
                'Elbe',
                'Oder (Odra)'
            ]
        },
        {
            question: 'The TriRhena Euroregion is spans these three countries crossed by the Rhine River.',
            answer: 'France, Germany and Switzerland',
            choices: [
                'France, Germany and Switzerland',
                'Belgium, Germany and Luxembourg',
                'Austria, Germany and Switzerland',
                'France, Germany and Holland'
            ]
        },
        {
            question: 'The Pyrenees-Mediterranean region is located along the border of which two countries?',
            answer: 'France - Spain',
            choices: [
                'France - Italy',
                'Norway - Sweden',
                'France - Spain',
                'Spain - Portugal'
            ]
        },
        {
            question: 'Where would you find the Ore Mountains Euroregion?',
            answer: 'Czech Republic and Germany',
            choices: [
                'Greece and Bulgaria',
                'Spain and France',
                'Czech Republic and Germany',
                'Norway and Sweden'
            ]
        },
        {
            question: 'What is the state animal of Colorado and the symbol of Rocky Mountain National Park?',
            answer: 'Big Horned Sheep',
            choices: [
                'Mustang',
                'Big Horned Sheep',
                'White Tailed Deer',
                'Buffalo'
            ]
        },
        {
            question: 'Mesa Verde National Park in southern Colorado is best known for which of the following?',
            answer: 'The best-preserved cliff dwellings in the U.S.',
            choices: [
                'Rather large, fossilized dinosaur tracks',
                'Massive trees known as Sequoias',
                'The best-preserved cliff dwellings in the U.S.',
                'A very rare flower that only grows in the mountains'
            ]
        },
        {
            question: 'The Colorado River, the major river of the American southwest, flows through which national landmark?',
            answer: 'All of these',
            choices: [
                'The Hoover Dam',
                'The Grand Canyon',
                'Arches National Park',
                'All of these'
            ]
        },
        {
            question: 'Located at the Peterson Air Force base in Colorado, NORAD is a military organization that tracks aircraft, missiles and space vehicles. It also tracks what fictional character?',
            answer: 'Santa',
            choices: [
                'The Easter Bunny',
                'The Tooth Fairy',
                'None of these',
                'Santa'
            ]
        },
        {
            question: 'What U.S. interstate runs east and west through Colorado?',
            answer: 'I-70',
            choices: [
                'I-40',
                'I-80',
                'I-90',
                'I-70'
            ]
        },
        {
            question: 'Today people visit Colorado to go skiing, hiking, mountain biking and to enjoy the scenery. But 100 years ago, tourists more often went to the mountains to do what?',
            answer: 'Soak in hot springs',
            choices: [
                'Soak in hot springs',
                'Play golf',
                'Record music',
                'Go horseback riding'
            ]
        },
        {
            question: 'The huge grain industry in Colorado gives rise to breweries. Which of the following owns the biggest single site brewery located in Golden, Colorado?',
            answer: 'Molson Coors Brewing Company',
            choices: [
                'Anheuser-Busch',
                'Molson Coors Brewing Company',
                'Jacob Leinenkugel Brewing Company',
                'Highfalls Brewing Company'
            ]
        },
        {
            question: 'What is the state motto of Colorado?',
            answer: 'Nothing Without the Deity',
            choices: [
                'Nothing Without the Deity',
                'The people rule',
                'God enriches',
                'We Dare Defend Our Rights'
            ]
        },
        {
            question: 'What does the word Colorado mean?',
            answer: 'Colored Red',
            choices: [
                'Colored Red',
                'Indian Sky',
                'Rocky Mountains',
                'Mountain High'
            ]
        },
        {
            question: 'What is the state fish of Colorado?',
            answer: 'Greenback Cutthroat Trout',
            choices: [
                'Rainbow Trout',
                'Greenback Cutthroat Trout',
                'Walleye',
                'Salmon'
            ]
        },
        {
            question: 'What city in Colorado is known as the Richest Square Mile on Earth?',
            answer: 'Central City, Colorado',
            choices: [
                'Central City, Colorado',
                'Denver, Colorado',
                'Leadville, Colorado',
                'Colorado Springs, Colorado'
            ]
        },
        {
            question: 'What was the popular slogan of the Colorado Gold Rush?',
            answer: 'Pikes Peak or Bust',
            choices: [
                'Westward Ho',
                'Colorado Gold to Go',
                'Go West Young Men',
                'Pikes Peak or Bust'
            ]
        },
        {
            question: 'What year did Colorado become a state?',
            answer: '1876',
            choices: [
                '1876',
                '1796',
                '1896',
                '1776'
            ]
        },
        {
            question: 'What city boasts the most parks in the US?',
            answer: 'Denver, Colorado',
            choices: [
                'Colorado Springs, Colorado',
                'Golden, Colorado',
                'Denver, Colorado',
                'Aspen, Colorado'
            ]
        },
        {
            question: 'What legendary American frontiersman commanded a major fort in Colorado?',
            answer: 'Kit Carson',
            choices: [
                'Daniel Boone',
                'Kit Carson',
                'Wild Bill Cody',
                'Jim Bowie'
            ]
        },
        {
            question: 'Glenwood Springs, Colorado was known for its hot springs and hospital. What famous outlaw and gun slinger expired from Tuberculosis there?',
            answer: 'Doc Holliday',
            choices: [
                'Billy The Kid',
                'Jesse James',
                'Doc Holliday',
                'Wyatt Earp'
            ]
        },
        {
            question: 'On which continent is the famous active volcano Mount Nyiragongo located?',
            answer: 'Africa',
            choices: [
                'Asia',
                'Australia',
                'South America',
                'Africa'
            ]
        },
        {
            question: 'On which of the islands of Papua New Guinea is the active volcano Ulawun located?',
            answer: 'New Britain',
            choices: [
                'New Britain',
                'New Guinea',
                'Bougainville',
                'New Ireland'
            ]
        },
        {
            question: 'The Arabic name of Mount Etna, the second-largest active volcano in Europe, was Jebel Utlamat. What does this mean in English?',
            answer: 'Mountain of Fire',
            choices: [
                'The Edge of the World',
                'Mountain of Fire',
                'Home of the Devil',
                'Breathing Mountain'
            ]
        },
        {
            question: 'In what country is the active volcano Sakurajima located?',
            answer: 'Japan',
            choices: [
                'India',
                'Peru',
                'Japan',
                'South Africa'
            ]
        },
        {
            question: 'What is the name of the most active volcano in Mexico, located mostly in the Mexican state of Jalisco?',
            answer: 'Colima',
            choices: [
                'Nevado de Toluca',
                'Barcena',
                'Colima',
                'Las Cumbres'
            ]
        },
        {
            question: 'What does the Indonesian name of the Mount Merapi volcano, Gunung Merapi, mean in English?',
            answer: 'Mountain of Fire',
            choices: [
                'Gods Wrath',
                'Cursed Mountain',
                'Mountain of Fire',
                'Hell Mountain'
            ]
        },
        {
            question: 'In what country is the active volcano Koryaksky located?',
            answer: 'Russia',
            choices: [
                'Russia',
                'Ukraine',
                'Latvia',
                'Poland'
            ]
        },
        {
            question: 'In what US state is the Fourpeaked Volcano, also known as Fourpeaked Mountain, situated?',
            answer: 'Alaska',
            choices: [
                'Colorado',
                'Oregon',
                'Alaska',
                'Montana'
            ]
        },
        {
            question: 'What is the name of the highest volcano in Asia, and the highest point in the Middle East?',
            answer: 'Mount Damavand',
            choices: [
                'Bazman',
                'Sabalan',
                'Taftan',
                'Mount Damavand'
            ]
        },
        {
            question: 'What is the name of the active volcano situated in Skamania County, Washington, USA, 50 miles (80 km) northeast of Portland, Oregon?',
            answer: 'Mount St. Helens',
            choices: [
                'Mount St. Augustus',
                'Mount St. Paul',
                'Mount St. Georges',
                'Mount St. Helens'
            ]
        },
        {
            question: 'What type of government does Sweden have?',
            answer: 'Constitutional monarchy',
            choices: [
                'Absolute monarchy',
                'Constitutional monarchy',
                'None of these',
                'Presidential republic'
            ]
        },
        {
            question: 'Which of these European countries shares a land border with Sweden?',
            answer: 'Norway',
            choices: [
                'Switzerland',
                'Denmark',
                'Lithuania',
                'Norway'
            ]
        },
        {
            question: 'What are the colors of the national flag of Sweden?',
            answer: 'Blue and yellow',
            choices: [
                'Blue and yellow',
                'White and blue',
                'White and red',
                'Red and yellow'
            ]
        },
        {
            question: 'What is the official language spoken by the citizens of Sweden?',
            answer: 'Swedish',
            choices: [
                'Finnish and Swedish',
                'Swedish',
                'German and Swedish',
                'Danish'
            ]
        },
        {
            question: 'What is the name of the largest city and capital of Sweden?',
            answer: 'Stockholm',
            choices: [
                'Helsinki',
                'Stockholm',
                'Oslo',
                'Gothenburg'
            ]
        },
        {
            question: 'The Swedish name of Sweden is Sverige. What does this word literally mean?',
            answer: 'Kingdom of the Swedes',
            choices: [
                'Snow kingdom',
                'Kingdom of the Swedes',
                'Land of snow',
                'Northern land'
            ]
        },
        {
            question: 'Which of these celebrities is not Swedish?',
            answer: 'Lars Ulrich',
            choices: [
                'the members of ABBA',
                'Lars Ulrich',
                'Greta Garbo',
                'Ingrid Bergman'
            ]
        },
        {
            question: 'What type of food is the popular Swedish dish called Surstromming?',
            answer: 'Fish',
            choices: [
                'Fish',
                'Salad',
                'Soup',
                'Dessert'
            ]
        },
        {
            question: 'What song is used as a de facto anthem of Sweden?',
            answer: 'Thou Ancient, Thou Free',
            choices: [
                'Beautiful Sweden',
                'The Song of the King',
                'We Bow Before Thee',
                'Thou Ancient, Thou Free'
            ]
        },
        {
            question: 'What is the prevailing religion in Sweden?',
            answer: 'Lutheranism',
            choices: [
                'Lutheranism',
                'Eastern Orthodoxy',
                'Protestantism',
                'Roman Catholicism'
            ]
        },
        {
            question: 'What is the capital city of the Federative Republic of Brazil?',
            answer: 'Brasilia',
            choices: [
                'Sao Paulo',
                'Bogota',
                'Rio de Janeiro',
                'Brasilia'
            ]
        },
        {
            question: 'What is the meaning of the Portuguese word brasa from which the name of Brazil possibly originated?',
            answer: 'Ember',
            choices: [
                'Jungle',
                'River',
                'Heaven',
                'Ember'
            ]
        },
        {
            question: 'Which of these statements is wrong about the wildlife of Brazil?',
            answer: 'Brazil is the country with the most endemic species in the world.',
            choices: [
                'It contains the most mammal species on the planet.',
                'Brazil is the country with the largest biodiversity on the planet.',
                'All of these',
                'Brazil is the country with the most endemic species in the world.'
            ]
        },
        {
            question: 'What are the colors of the national flag of the Federative Republic of Brazil?',
            answer: 'White, blue, green and yellow',
            choices: [
                'Yellow, green, black and blue',
                'White, blue, green and yellow',
                'Red, green and yellow',
                'Green and black'
            ]
        },
        {
            question: 'What is the official language of the Federative Republic of Brazil?',
            answer: 'Portuguese',
            choices: [
                'English and Spanish',
                'Spanish',
                'Spanish and Portuguese',
                'Portuguese'
            ]
        },
        {
            question: 'What is the most popular sport among the people living in Brazil?',
            answer: 'Football',
            choices: [
                'Volleyball',
                'Rugby',
                'Basketball',
                'Football'
            ]
        }
    ];

    function startTrivia(loadTriviaFunc){
        var startScreen="<div id=\'startScreen\'>\n  " +
            "  <h1>\n        Start Trivia\n    </h1>\n  " +
            "  <button id=\'startButton\'>Start Trivia</button>\n</div>";
        return startScreen;
    }

    function getTrivia(tr) {
        let randomTriviaIndex = Math.floor(Math.random() * tr.length);
        return trivia[randomTriviaIndex];
    }

    function consOutOfTime(ca){
     var outOfTimeSection=  "<div class=\"center\">\n" +
         "<h2 class=\"outOfTimeComponent\">\n" +
         "  OUT OF TIME\n" +
         "</h2>\n" +
         `  <p class=\"outOfTimeComponent\">CORRECT ANSWER IS ${ca}</p>\n` +
         "  </div>";

     return outOfTimeSection;
    }

    function consForm(t) {
        let choice = t.choices;
        let q = t.question;
        var s1 = "<form>\n" +
            `<p id='timeLeft'></p>\n`+
            `<h3>${q}</h3>\n` +
            "<div class=\"form-check\">\n" +
            `  <input class=\"form-check-input\" type=\"checkbox\" value=\"${choice[0]}\" id=\"0\">\n` +
            "  <label class=\"form-check-label\" for=\"0\">\n" +
            `    ${choice[0]}\n` +
            "  </label>\n" +
            "</div>\n" +
            "  <div class=\"form-check\">\n" +
            `  <input class=\"form-check-input\" type=\"checkbox\" value=\"${choice[1]}\" id=\"1\">\n` +
            "  <label class=\"form-check-label\" for=\"1\">\n" +
            `    ${choice[1]}\n` +
            "  </label>\n" +
            "</div>\n" +
            "  <div class=\"form-check\">\n" +
            `  <input class=\"form-check-input\" type=\"checkbox\" value=\"${choice[2]}\" id=\"2\">\n` +
            "  <label class=\"form-check-label\" for=\"2\">\n" +
            `    ${choice[2]}\n` +
            "  </label>\n" +
            "</div>\n" +
            "  <div class=\"form-check\">\n" +
            `  <input class=\"form-check-input\" type=\"checkbox\" value=\"${choice[3]}\" id=\"3\">\n` +
            "  <label class=\"form-check-label\" for=\"d3\">\n" +
            `    ${choice[3]}\n` +
            "  </label>\n" +
            "</div>\n" +
            "  </form>\n";


        return s1;
    }

    function consWrong(ans){
      var wrongAns="<div id=\'wrongSection\'>\n  " +
          `  <h4>Sorry try again!</h4>\n   ` +
          ` <p id=\'wrongResponseSection\'>\n   ` +
          `    The correct response is ${ans}\n    </p>  `+
          "  \n</div>\n";
      return wrongAns;
    }
    function consCongrats(ans) {
        let banners = "<h1 class=\"banner\">\n" +
            "    <span class=\"flag\"></span>\n" +
            "    <span class=\"flag\">C</span>\n" +
            "    <span class=\"flag\">O</span>\n" +
            "    <span class=\"flag\">N</span>\n" +
            "    <span class=\"flag\">G</span>\n" +
            "    <span class=\"flag\">R</span>\n" +
            "    <span class=\"flag\">A</span>\n" +
            "    <span class=\"flag\">T</span>\n" +
            "    <span class=\"flag\">S</span>\n" +
            "    <span class=\"flag\"></span>\n" +
            "    <span class=\"string\">\n" +
            "    <svg width=\"800\" height=\"230\" viewBox=\"0 0 800 230\">\n" +
            "      <path fill=\"none\" d=\"M0,0 C100,100 700,200 800,100\" />\n" +
            "    </svg>\n" +
            "  </span>\n" +
            "</h1>\n" +
            `<p id=\"correctResponse\">${ans} is the correct response!</p>\n` +
            "<h1 class=\"banner\">\n" +
            "    <span class=\"flag\"></span>\n" +
            "    <span class=\"flag\"></span>\n" +
            "    <span class=\"flag\"></span>\n" +
            "    <span class=\"flag\"></span>\n" +
            "    <span class=\"flag\"></span>\n" +
            "    <span class=\"flag\"></span>\n" +
            "    <span class=\"flag\"></span>\n" +
            "    <span class=\"flag\"></span>\n" +
            "    <span class=\"flag\"></span>\n" +
            "    <span class=\"flag\"></span>\n" +
            "    <span class=\"string\">\n" +
            "    <svg width=\"800\" height=\"230\" viewBox=\"0 0 800 230\">\n" +
            "      <path fill=\"none\" d=\"M0,0 C100,100 700,200 800,100\" />\n" +
            "    </svg>\n" +
            "  </span>\n" +
            "</h1>\n" +
            "<script  src=\"assets/javascript/congrats.js\"></script>";
        return banners;
    }

    function toggleGameContainer(ans,action){
        let gameC=$("#gameContainer");
        gameC.empty();
        gameC.hide();

        let a=action(ans);
        a.hide(10000,()=>$("body").removeClass());

        gameC.show(11000);
    }

    function showOutOfTime(ans){
        let otc=$("#outOfTimeContainer");

        otc.empty();
        otc.show();
        otc.append(consOutOfTime(ans));
       // $("body").addClass("outOfTime");
        return otc;
    }


    var Trivia = /** @class */ (function () {
        function Trivia(trv) {

            //console.log(this.gameStatus + "ddd");
            this.question = trv.question;
            this.answer = trv.answer;
            this.choices = trv.choices;
            this.gameStatus = trv.gameStatus;
            this.time = trv.time;

        }

        Trivia.prototype.guess = function (choice) {
            return choice == this.answer;
        };
        Trivia.prototype.setGameStatus = function (choice) {

            this.usersGuess = choice;
            if (this.guess(choice)) {
                this.gameStatus = "Won";
                return;
            } else {
                this.gameStatus = "Lost";

                return;
            }
            this.gameStatus = "InPlay";
        };
        Trivia.prototype.canPickNext = () => {
            return this.gameStatus == undefined ? false : true;
        };
        Trivia.prototype.canGuess = () => {
            return this.canPickNext() ? false : true;
        };
        Trivia.prototype.doLuckyPick = () => {
            return Math.floor(Math.random() * 4);
        };
        return Trivia;
    }());

    var newTrivia = {};

    var timer = 40;
    var interval;
    var timerCancelled=false;

    function startTimer(){
    timer=40;
    interval=false;
    timerCancelled=false;
    if(!interval){
    interval  = setInterval(function() {
        timer--;
          $('#timeLeft').text(`Time left: ${timer}`);

        if (timer === 0 && !timerCancelled) {

            toggleGameContainer(newTrivia.answer,(ans)=>{
             var outOfT=  showOutOfTime(ans);
                return outOfT;
            });
            loadTrivia();
            clearInterval(interval);

            timer=40;
        }
    }, 1000);}}



    function loadTrivia() {
        newTrivia = new Trivia(getTrivia(trivia));

        var formToInject = consForm(newTrivia);
        $("#gameContainer").append(formToInject);
        console.log(newTrivia);
        startTimer();
    }


    $("body").prepend(startTrivia(null));
 //   loadTrivia();

    $("body").on("click", "#startButton",()=>{
        $("#startScreen").remove();
        loadTrivia();
    });

    $("body").on("click", ".form-check-input", (event) => {

       var userGuessed=$(`#${event.target.id}`).attr("value");

        if (newTrivia.guess(userGuessed)) {
            clearInterval(interval);
            timerCancelled=true;
          toggleGameContainer(userGuessed,(a2)=>{
              let cc=$("#congratsContainer");
              cc.empty();
              cc.append(consCongrats(a2)).show();
              return cc;
          });
          console.log("reached this point?");
            loadTrivia();
            return;
        } else {
            clearInterval(interval);
            timerCancelled=true;
            toggleGameContainer(newTrivia.answer,(a2)=>{
                let cc=$("#congratsContainer");
                cc.empty();
                cc.append(consWrong(a2)).show();
                return cc;
            });
            loadTrivia();
            return;
        }

    });


});
