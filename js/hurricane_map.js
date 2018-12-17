mapboxgl.accessToken = 'pk.eyJ1IjoiYXRsYXNrd29rIiwiYSI6ImNqbzAzZGo4ejAwNnczd3BnZjY0cmdlMnAifQ.-1JEsHM_MmQMXonEUsnzgw';

var map1 = new mapboxgl.Map({
    container: 'map1', // container id
    style: 'mapbox://styles/atlaskwok/cjpsjuh4o120g2so25po6cjoq', // stylesheet location
    center: [-90, 30], // starting position [lng, lat]
    zoom: 3 // starting zoom
});

var map2 = new mapboxgl.Map({
    container: 'map2', // container id
    style: 'mapbox://styles/atlaskwok/cjpsjuh4o120g2so25po6cjoq', // stylesheet location
    center: [-85, 30], // starting position [lng, lat]
    zoom: 5 // starting zoom
});
