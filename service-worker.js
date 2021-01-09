self.importScripts('sw-toolbox/sw-toolbox.js');
self.toolbox.precache([
    "/pictures/asphalt.jpg",
    "/pictures/home.svg",
    "/pictures/ru.svg",
    "/pictures/ua.svg",
    "/pictures/wheel.svg",
    "/pictures/engine.svg",
    "/pictures/brands-logo/gif/aeb.gif",
    "/pictures/brands-logo/gif/brc.gif",
    "/pictures/brands-logo/gif/lpg.gif",
    "/pictures/brands-logo/gif/pride.gif",
    "/pictures/brands-logo/gif/zavoli.gif",
    "/pictures/brands-logo/gif/digitronic.gif",
    "/pictures/certificates/certificate.jpg",
    "/pictures/certificates/digitronic.jpg",
    "/pictures/certificates/gratitude.jpg",
    "/pictures/certificates/torelli.jpg",
    "/pictures/certificates/zavoli-1.jpg",
    "/pictures/certificates/small/certificate.jpg",
    "/pictures/certificates/small/digitronic.jpg",
    "/pictures/certificates/small/gratitude.jpg",
    "/pictures/certificates/small/torelli.jpg",
    "/pictures/certificates/small/zavoli-1.jpg"
]);
self.toolbox.router.get('/*', toolbox.networkFirst);