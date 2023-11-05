// Initialize and add the map
let map;

async function initMap() {
  // The location of Uluru
  first = 33.6471187
  second = -117.84441
  third = 33.6432551
  fourth = -117.8420085
  const position = { lat: first, lng: second };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 15,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "alp",
  });

  const marker2 = new AdvancedMarkerElement({
    map: map,
    position: { lat: third, lng: fourth },
    title: "dbh",
  });
}

initMap();
