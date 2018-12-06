document.addEventListener('DOMContentLoaded', function(){ 
    
    var template = $("#discography").html();

    // var releases = { discography : [
    //     {
    //         year : "2017",
    //         releases: [
    //             {
    //                 artist: "Niños del Cerro",
    //                 name: "Contigo",
    //                 slug: "",
    //                 type: "Simple",
    //                 photo: "img/ninos-del-cerro.jpg",
    //                 spotify_uri: "spotify:track:6KpUoDoQXpJyK8y226l04G",
    //                 download_url: "http://smarturl.it/ndc-contigo",
    //                 description: "Rítmica carioca, instrumentación de fiesta, y algo de melancolía. “Contigo”, la primera canción de amor compuesta por Simón Campusano, adelanta los puntos fuertes de lo que será el segundo álbum de Niños del Cerro.",
    //                 youtube_url: "https://youtu.be/NzZKZk4syOw"
    //             },
    //             {
    //                 artist: "Mal Villano",
    //                 name: "Amor de Balneario",
    //                 slug: "",
    //                 type: "EP",
    //                 photo: "img/mal-villano.jpg",
    //                 spotify_uri: "spotify:album:1sivupB4UpiMZYof2ukaCn",
    //                 download_url: "http://smarturl.it/malvillano-amordb",
    //                 description: "Surf pop con aires de playa ochentera, así se define el EP debut de Mal Villano, Amor de Balneario, que a través de sus seis canciones evoca historias de amor, despecho y melancolía.",
    //                 youtube_url: "https://youtu.be/yR1IclTqhz8"
    //             },{
    //                 artist: "Patio Solar",
    //                 name: "Migración",
    //                 slug: "",
    //                 type: "LP",
    //                 photo: "img/patio-solar.jpg",
    //                 spotify_uri: "spotify:album:14RUaKopk1cPoXtV8YV9HR",
    //                 download_url: false,
    //                 description: "Patio Solar lanza su segundo disco logrando su trabajo más diverso, expansivo y complejo en lo musical, abarcando terrenos que habían explorado en entregas anteriores, uniéndolas de manera curiosa y atrevida.",
    //                 youtube_url: "https://youtu.be/PLo54P1fkNc"
    //             },{
    //                 artist: "Animales Extintos",
    //                 name: "Los vientos y las ganas",
    //                 slug: "",
    //                 type: "EP",
    //                 photo: "img/animales-extintos.jpg",
    //                 spotify_uri: "spotify:album:4myXcVzyj5r2FXYPoh79j3",
    //                 download_url: "http://smarturl.it/ae-los-vientos",
    //                 description: "Los Vientos y las Ganas, contiene 5 canciones llenas de potencia y honestidad que se mueven entre el punk, el rock y el pop donde Animales Extintos canta sobre historias de amistad, amor y escapar de lo cotidiano. El álbum, fue grabado en Estudios Rob, por Simón Campusano y Pepe Mazurett (integrantes de Niños del Cerro).",
    //                 youtube_url: "https://youtu.be/xSa1g-NDH_w"
    //             }
    //         ]
    //     },
    //     {
    //         year : "2016",
    //         releases: [
    //             {
    //                 artist: "Varios Artistas",
    //                 name: "Compilado Piloto Vol. 2",
    //                 slug: "",
    //                 type: "Compilación",
    //                 spotify_uri: "spotify:album:6IUYts0I93K4mTxLci1Yfh",
    //                 download_url: "http://smarturl.it/piloto-2",
    //                 description: "",
    //                 youtube_url: false
    //             },{
    //                 artist: "El Cómodo Silencio de los que Hablan Poco",
    //                 name: "Run Run",
    //                 slug: "",
    //                 type: "LP",
    //                 spotify_uri: "spotify:album:2jXvp67ztecHEJjgaj55Rd",
    //                 download_url: "http://smarturl.it/run-run",
    //                 description: "",
    //                 youtube_url: "https://youtu.be/NtoQMqzGrl4"
    //             }, {
    //                 artist: "Siempre Llueve al Atardecer",
    //                 name: "Siempre Llueve al Atardecer",
    //                 slug: "",
    //                 type: "EP",
    //                 spotify_uri: "spotify:album:4mfqZ1kWnGE4lGv9ZGHoLt",
    //                 download_url: "http://smarturl.it/siempre-llueve-slaa",
    //                 description: "",
    //                 youtube_url: "https://youtu.be/vsauNrtx-oc"
    //             }, {
    //                 artist: "Emisario Greda",
    //                 name: "Gotas de Cristal",
    //                 slug: "",
    //                 type: "Simple",
    //                 spotify_uri: "spotify:album:2wPIBpzjJTbbZzOnloQras",
    //                 download_url: "http://smarturl.it/eg-gotas-de-cristal",
    //                 description: "",
    //                 youtube_url: false
    //             }, {
    //                 artist: "Las Olas (Noispop)",
    //                 name: "Canciones para mis amigxs",
    //                 slug: "",
    //                 type: "EP",
    //                 spotify_uri: "spotify:album:1njO74Zrn3fy3bAKP0Qf4P",
    //                 download_url: "http://smarturl.it/las-olas-amigxs",
    //                 description: "",
    //                 youtube_url: "https://youtu.be/VhzaL_nWRP0"
    //             }, {
    //                 artist: "Patio Solar",
    //                 name: "Los Movimientos",
    //                 slug: "",
    //                 type: "EP",
    //                 spotify_uri: "spotify:album:1s8PZrlLjUkD0YJSI3FXES",
    //                 download_url: "http://smarturl.it/los-movimientos",
    //                 description: "",
    //                 youtube_url: "https://youtu.be/OWJhuN09JbY"
    //             }, {
    //                 artist: "Ablusion",
    //                 name: "Soluciones Temporales",
    //                 slug: "",
    //                 type: "EP",
    //                 spotify_uri: "spotify:album:0stmV65817fd22I0FaVLYj",
    //                 download_url: "http://smarturl.it/ablusion-st",
    //                 description: "",
    //                 youtube_url: "https://youtu.be/gnIGyFjWqtU"
    //             }, 
    //             {
    //                 artist: "MonoAzul",
    //                 name: "Regalo",
    //                 slug: "",
    //                 type: "EP",
    //                 spotify_uri: "spotify:album:32NX2nUKE5fgAsHFDOlaCU",
    //                 download_url: "http://smarturl.it/monoazul-regalo",
    //                 description: "",
    //                 youtube_url: "https://youtu.be/zW4cregBE1o"
    //             }
    //         ] 
    //     },
    //     {
    //         year : "2015",
    //         releases: [
    //             {
    //                 artist: "Silabario",
    //                 name: "Las Luces",
    //                 slug: "",
    //                 type: "Simple",
    //                 spotify_uri: "spotify:album:1Mxq0Z921p5nhXwvmxli1a",
    //                 download_url: "http://smarturl.it/silabario-las-luces",
    //                 description: "",
    //                 youtube_url: "https://youtu.be/pOYMEFwUtA0"
    //             }, {
    //                 artist: "Centinela Mira al Cielo",
    //                 name: "Mañana al Vuelo",
    //                 slug: "",
    //                 type: "EP",
    //                 spotify_uri: "spotify:album:7GCiXLLsGzpCOeH3WRjMOK",
    //                 download_url: "http://smarturl.it/centinela-el-vuelo",
    //                 description: "",
    //                 youtube_url: "https://youtu.be/_VIKgcbeoFQ"
    //             }, {
    //                 artist: "Varios Artistas",
    //                 name: "1er Compilado Piloto",
    //                 slug: "",
    //                 type: "Compilación",
    //                 spotify_uri: "spotify:album:1dVyZSm2KvcXOqM4bFrDdv",
    //                 download_url: "http://smarturl.it/1er-compilado-piloto",
    //                 description: "",
    //                 youtube_url: "https://youtu.be/_VIKgcbeoFQ"
    //             }, {
    //                 artist: "Niños del Cerro",
    //                 name: "Nonato Coo",
    //                 slug: "",
    //                 type: "LP",
    //                 spotify_uri: "spotify:album:01yj7L3Z7TnG0AxAc1JMse",
    //                 download_url: "http://smarturl.it/nonato-coo",
    //                 description: "",
    //                 youtube_url: false
    //             }, {
    //                 artist: "Niños del Cerro",
    //                 name: "Jose de los Rayos",
    //                 slug: "",
    //                 type: "Simple",
    //                 spotify_uri: "spotify:album:48cDDnj9zf1VXk0OE4WJRK",
    //                 download_url: "http://smarturl.it/jose-de-los-rayos",
    //                 description: "",
    //                 youtube_url: ""
    //             },{
    //                 artist: "Silabario",
    //                 name: "Portugal",
    //                 slug: "",
    //                 type: "Simple",
    //                 spotify_uri: "spotify:album:1wEYJsFRu4ufir7Da7JzPF",
    //                 download_url: "",
    //                 description: "",
    //                 youtube_url: "https://youtu.be/CjMNQUw2Tzo"
    //             }, 
    //             {
    //                 artist: "Pujem",
    //                 name: "Papel",
    //                 slug: "",
    //                 type: "EP",
    //                 spotify_uri: "spotify:album:5R40kWqlQKNdFEAGfgVYOr",
    //                 download_url: "http://smarturl.it/pujem-papel",
    //                 description: "",
    //                 youtube_url: false
    //             }, 
    //             {
    //                 artist: "Patio Solar",
    //                 name: "Temporada",
    //                 slug: "",
    //                 type: "LP",
    //                 spotify_uri: "spotify:album:2olM5q3eW5YEkcpz5D4nkU",
    //                 download_url: "http://smarturl.it/temporada",
    //                 description: "",
    //                 youtube_url: "https://youtu.be/Y5v_lziIzo0"
    //             }
    //         ]
    //     },{
    //         year : "2014",
    //         releases: [
    //             {
    //                 artist: "Silabario",
    //                 name: "Fiesta Mala",
    //                 slug: "",
    //                 type: "Simple",
    //                 spotify_uri: "spotify:album:07UZIdppT7rf6Xh9Xfp7Dl",
    //                 download_url: "http://smarturl.it/fiesta-mala",
    //                 description: "",
    //                 youtube_url: "https://youtu.be/z5XC_8qud6I"
    //             }, {
    //                 artist: "Pujem",
    //                 name: "Miedo a la lluvia",
    //                 slug: "",
    //                 type: "Simple",
    //                 spotify_uri: "spotify:album:6Ub3rADUUAOmTdzceKlIoU",
    //                 download_url: "http://smarturl.it/miedo-a-la-lluvia",
    //                 description: "",
    //                 youtube_url: false
    //             }, {
    //                 artist: "Niños del Cerro",
    //                 name: "La Pajareria",
    //                 slug: "",
    //                 type: "Simple",
    //                 spotify_uri: "spotify:album:6N1QzfqDROpJ2zgj9WdJn8",
    //                 download_url: "http://smarturl.it/la-pajareria",
    //                 description: "",
    //                 youtube_url: false
    //             }, {
    //                 artist: "Patio Solar",
    //                 name: "Pintura",
    //                 slug: "patio-solar-pintura",
    //                 type: "Simple",
    //                 spotify_uri: "spotify:album:3wQmDRSZK2N7zI9Duw1AWR",
    //                 download_url: "http://smarturl.it/patio-solar-pintura",
    //                 description: "",
    //                 youtube_url: false
    //             }
    //         ] 
    //     }
    // ]};

    var releases = { discography : [
        {
            year : "2018",
            releases: [
                {
                    artist: "Silabario",
                    name: "Berín",
                    slug: "",
                    type: "Simple",
                    photo: "img/silabario.jpg",
                    spotify_uri: "spotify:album:47GbeO7OMWVmzu1GmQ0IXN",
                    // download_url: "http://smarturl.it/slb-foto",
                    description: "Silabario, agrupación liderada por Walter Pérez (voz, guitarra) y Francisca Fuentes (voz, teclados) presenta Fotográfica, primer single de lo que será el disco debut de la banda. Esta sentida canción con referencias al dream pop de Julee Cruise, David Lynch y Beach House, es parte de un proyecto de más de cuatro años de trabajo.<br><br> La banda es una de las primeras agrupaciones fichadas por Piloto. Aunque ha tenido diferentes integrantes, su centro creativo está en la dupla Walter Pérez y Francisca Fuentes. <b>Fotográfica</b> fue compuesta por Walter Pérez y grabada por Alex Rojas y Silabario. El álbum doble de Silabario será editado a fines del 2018 por Piloto.",
                    youtube_url: "https://youtu.be/AWzeeBMaw94",
                    bandcamp_url: "https://pilotoscl.bandcamp.com/track/berl-n",
                    
                }]
        }
    ]};

    html = Mustache.render(template, releases);

    $("#output").append(html);
});