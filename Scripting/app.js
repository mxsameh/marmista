var products = [];
var imgs = [
    'afyon-sugar.webp',
    'arabes-catoDark.webp',
    'arabescato-light.webp',
    'atlas.webp',
    'avalanche-platinum.webp',
    'blue-ocean.webp',
    'classic-beige.webp',
    'dark-maroon.webp',
    'dark-tiger.webp',
    'desert.webp',
    'diana-royal.webp',
    'dragon-black.webp',
    'grey-emperador.webp',
    'kemal-pasha.webp',
    'levanto-rose.webp',
    'lilac.webp',
    'limra.webp',
    'marin-black.webp',
    'marmara.webp',
    'moon-cream.webp',
    'nero-picasso.webp',
    'nova-cream.webp',
    'ottoman.webp',
    'panda-white.webp',
    'pietra-gray.webp',
    'quartz-white.webp',
    'rustic.webp',
    'silver-dore.webp',
    'silver-afyon.webp',
    'travertine.webp',
    'travertino-navona.webp',
    'tundra.webp',
    'versace.webp',
    'vietnam-white.webp',
    'white-carrara.webp'
];
var r = [];
var l = [];
for (var i = 0; i < 8; i++) {
    var index = Math.round(Math.random() * (imgs.length - 1));
    var img = imgs[index];
    r.push(img);
    l.push(img);
}
console.log(l);
console.log(r);