var map = L.map("map", {
  center: [52, 18], // Set the initial center of the map
  zoom: 3.5, // Set the initial zoom level of the map
  layers: [
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      minZoom: 4,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }),
  ],
});
$.getJSON("oceans.geo.json", function (geojson) {
  // Réteg hozzáadása csak az óceánokkal
  L.geoJson(geojson, {
    // Meghívja a réteget
    style: function (feature) {
      // Egyedi színt rendel hozzá
      return {
        weight: 0,
        fillColor: "#000000",
      };
    },
  }).addTo(map);
});
var houseIcon = L.icon({
  iconUrl: "/javascript/houseicon.png",
  shadowUrl: "/javascript/houseiconshadow.png",
  iconSize: [18, 47], // size of the icon
  shadowSize: [25, 32], // size of the shadow
  iconAnchor: [9, 45], // point of the icon which will correspond to marker's location (center)
  shadowAnchor: [9, 45], // the same for the shadow (center)
  popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
});
L.marker([51.5, -0.09], { icon: houseIcon })
  .addTo(map)
  .bindPopup(
    `Apartment in the centre of London. <a href="index.html">See more.</a>`
  );

L.marker([45.77174648890697, 11.730266154712334], { icon: houseIcon })
  .addTo(map)
  .bindPopup(
    `Weekend house in a beautiful smalltown of North Italy. <a href="index.html">See more.</a>`
  );
