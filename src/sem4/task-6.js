import fetch from "node-fetch";

async function getObjectFromUrl(url) {
  const response = await fetch(url);
  const text = await response.text();
  return JSON.parse(text);
}

async function getCountryBounds(country) {
  const object = await getObjectFromUrl(
    `https://nominatim.openstreetmap.org/search?country=${country}&format=json`
  );

  return {
    minLatitude: parseFloat(object[0].boundingbox[0]),
    maxLatitude: parseFloat(object[0].boundingbox[1]),
    minLongitude: parseFloat(object[0].boundingbox[2]),
    maxLongitude: parseFloat(object[0].boundingbox[3]),
  };
}

async function getPlanesOver(country)
{
  const bounds = await getCountryBounds(country);
  const url = `https://opensky-network.org/api/states/all?lamin=${bounds.minLatitude}&lomin=${bounds.minLongitude}&lamax=${bounds.maxLatitude}&lomax=${bounds.maxLongitude}`;
  const data = await getObjectFromUrl(url);

  const planes = (data.states || []).map(state => ({
    icao24: state[0],
    callsign: state[1]?.trim() || "N/A",
    originCountry: state[2],
    longitude: state[5],
    latitude: state[6],
    altitude: state[7],
    velocity: state[9],
  }));

  return planes;
}

getPlanesOver("Romania")
  .then(planes => {
    console.log(`Avioane: ${planes.length}`);
    console.log(planes);
  })
  .catch(err => console.error("Eroare:", err));