document.addEventListener('DOMContentLoaded', function(){ 
    
    var template = $("#discography").html();

    var releases = { discography : [
        {
            year : "2017",
            releases: [
                {
                    artist: "Patio Solar",
                    name: "Migración",
                    slug: "",
                    type: "LP",
                    photo: "img/patio-solar.jpg",
                    spotify_uri: "spotify:album:14RUaKopk1cPoXtV8YV9HR",
                    download_url: false,
                    description: "Patio Solar lanza su segundo disco logrando su trabajo más diverso, expansivo y complejo en lo musical, abarcando terrenos que habían explorado en entregas anteriores, uniéndolas de manera curiosa y atrevida.",
                    youtube_url: "https://youtu.be/PLo54P1fkNc"
                },{
                    artist: "Animales Extintos",
                    name: "Los vientos y las ganas",
                    slug: "",
                    type: "EP",
                    photo: "img/animales-extintos.jpg",
                    spotify_uri: "spotify:album:4myXcVzyj5r2FXYPoh79j3",
                    download_url: "http://smarturl.it/ae-los-vientos",
                    description: "Los Vientos y las Ganas, contiene 5 canciones llenas de potencia y honestidad que se mueven entre el punk, el rock y el pop donde Animales Extintos canta sobre historias de amistad, amor y escapar de lo cotidiano. El álbum, fue grabado en Estudios Rob, por Simón Campusano y Pepe Mazurett (integrantes de Niños del Cerro).",
                    youtube_url: "https://youtu.be/xSa1g-NDH_w"
                }
            ]
        },
        {
            year : "2016",
            releases: [
                {
                    artist: "Varios Artistas",
                    name: "Compilado Piloto Vol. 2",
                    slug: "",
                    type: "Compilación",
                    spotify_uri: "spotify:album:6IUYts0I93K4mTxLci1Yfh",
                    download_url: "http://smarturl.it/piloto-2",
                    description: "",
                    youtube_url: false
                },{
                    artist: "El Cómodo Silencio de los que Hablan Poco",
                    name: "Run Run",
                    slug: "",
                    type: "LP",
                    spotify_uri: "spotify:album:2jXvp67ztecHEJjgaj55Rd",
                    download_url: "http://smarturl.it/run-run",
                    description: "",
                    youtube_url: false
                }, {
                    artist: "Siempre Llueve al Atardecer",
                    name: "Siempre Llueve al Atardecer",
                    slug: "",
                    type: "EP",
                    spotify_uri: "spotify:album:4mfqZ1kWnGE4lGv9ZGHoLt",
                    download_url: "http://smarturl.it/siempre-llueve-slaa",
                    description: "",
                    youtube_url: false
                }, {
                    artist: "Emisario Greda",
                    name: "Gotas de Cristal",
                    slug: "",
                    type: "Simple",
                    spotify_uri: "spotify:album:2wPIBpzjJTbbZzOnloQras",
                    download_url: "http://smarturl.it/eg-gotas-de-cristal",
                    description: "",
                    youtube_url: false
                }, {
                    artist: "Las Olas (Noispop)",
                    name: "Canciones para mis amigxs",
                    slug: "",
                    type: "EP",
                    spotify_uri: "spotify:album:1njO74Zrn3fy3bAKP0Qf4P",
                    download_url: "http://smarturl.it/las-olas-amigxs",
                    description: "",
                    youtube_url: false
                }, {
                    artist: "Patio Solar",
                    name: "Los Movimientos",
                    slug: "",
                    type: "EP",
                    spotify_uri: "spotify:album:1s8PZrlLjUkD0YJSI3FXES",
                    download_url: "http://smarturl.it/los-movimientos",
                    description: "",
                    youtube_url: false
                }, {
                    artist: "Ablusion",
                    name: "Soluciones Temporales",
                    slug: "",
                    type: "EP",
                    spotify_uri: "spotify:album:0stmV65817fd22I0FaVLYj",
                    download_url: "http://smarturl.it/ablusion-st",
                    description: "",
                    youtube_url: false
                }, {
                    artist: "Los Valentina",
                    name: "Señoras",
                    slug: "",
                    type: "EP",
                    spotify_uri: "spotify:album:0JtXn99bSPKUp8q6Dyn3uH",
                    download_url: "http://smarturl.it/senoras",
                    description: "",
                    youtube_url: false
                }, 
                {
                    artist: "MonoAzul",
                    name: "Regalo",
                    slug: "",
                    type: "EP",
                    spotify_uri: "spotify:album:32NX2nUKE5fgAsHFDOlaCU",
                    download_url: "http://smarturl.it/monoazul-regalo",
                    description: "",
                    youtube_url: false
                }
            ] 
        },
        {
            year : "2015",
            releases: [
                {
                    artist: "Silabario",
                    name: "Las Luces",
                    slug: "",
                    type: "Simple",
                    spotify_uri: "spotify:album:1Mxq0Z921p5nhXwvmxli1a",
                    download_url: "http://smarturl.it/silabario-las-luces",
                    description: "",
                    youtube_url: false
                }, {
                    artist: "Centinela Mira al Cielo",
                    name: "Mañana al Vuelo",
                    slug: "",
                    type: "EP",
                    spotify_uri: "spotify:album:7GCiXLLsGzpCOeH3WRjMOK",
                    download_url: "http://smarturl.it/centinela-al-vuelo",
                    description: "",
                    youtube_url: false
                }, {
                    artist: "Varios Artistas",
                    name: "1er Compilado Piloto",
                    slug: "",
                    type: "Compilación",
                    spotify_uri: "spotify:album:1dVyZSm2KvcXOqM4bFrDdv",
                    download_url: "http://smarturl.it/1er-compilado-piloto",
                    description: "",
                    youtube_url: false
                }, {
                    artist: "Niños del Cerro",
                    name: "Nonato Coo",
                    slug: "",
                    type: "LP",
                    spotify_uri: "spotify:album:01yj7L3Z7TnG0AxAc1JMse",
                    download_url: "http://smarturl.it/nonato-coo",
                    description: "",
                    youtube_url: false
                }, {
                    artist: "Niños del Cerro",
                    name: "Jose de los Rayos",
                    slug: "",
                    type: "Simple",
                    spotify_uri: "spotify:album:48cDDnj9zf1VXk0OE4WJRK",
                    download_url: "http://smarturl.it/jose-de-los-rayos",
                    description: "",
                    youtube_url: false
                },{
                    artist: "Silabario",
                    name: "Portugal",
                    slug: "",
                    type: "Simple",
                    spotify_uri: "spotify:album:1wEYJsFRu4ufir7Da7JzPF",
                    download_url: "#",
                    description: "",
                    youtube_url: false
                }, 
                {
                    artist: "Pujem",
                    name: "Papel",
                    slug: "",
                    type: "EP",
                    spotify_uri: "spotify:album:5R40kWqlQKNdFEAGfgVYOr",
                    download_url: "http://smarturl.it/pujem-papel",
                    description: "",
                    youtube_url: false
                }, 
                {
                    artist: "Patio Solar",
                    name: "Temporada",
                    slug: "",
                    type: "LP",
                    spotify_uri: "spotify:album:2olM5q3eW5YEkcpz5D4nkU",
                    download_url: "http://smarturl.it/temporada",
                    description: "",
                    youtube_url: false
                }
            ]
        },
        {
            year : "2014",
            releases: [
                {
                    artist: "Silabario",
                    name: "Fiesta Mala",
                    slug: "",
                    type: "Simple",
                    spotify_uri: "spotify:album:07UZIdppT7rf6Xh9Xfp7Dl",
                    download_url: "http://smarturl.it/fiesta-mala",
                    description: "",
                    youtube_url: false
                }, {
                    artist: "Pujem",
                    name: "Miedo a la lluvia",
                    slug: "",
                    type: "Simple",
                    spotify_uri: "spotify:album:6Ub3rADUUAOmTdzceKlIoU",
                    download_url: "http://smarturl.it/miedo-a-la-lluvia",
                    description: "",
                    youtube_url: false
                }, {
                    artist: "Niños del Cerro",
                    name: "La Pajareria",
                    slug: "",
                    type: "Simple",
                    spotify_uri: "spotify:album:6N1QzfqDROpJ2zgj9WdJn8",
                    download_url: "http://smarturl.it/la-pajareria",
                    description: "",
                    youtube_url: false
                }, {
                    artist: "Patio Solar",
                    name: "Pintura",
                    slug: "patio-solar-pintura",
                    type: "Simple",
                    spotify_uri: "spotify:album:3wQmDRSZK2N7zI9Duw1AWR",
                    download_url: "http://smarturl.it/patio-solar-pintura",
                    description: "",
                    youtube_url: false
                }
            ] 
        }
    ]};

    html = Mustache.render(template, releases);

    $("#output").append(html);
});