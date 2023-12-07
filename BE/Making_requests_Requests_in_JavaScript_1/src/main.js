const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";

function getAllNames() {
  const url = "http://localhost:5000/constellations";
axios
  .get(url)
  .then((response) => {
    const result = response.data.map(constellation => constellation.name);
    console.log(result);
  });
}

function getConstellationsByQuadrant(quadrant) {
  const url = "http://localhost:5000/constellations";
  axios
    .get(url)
    .then((response) => {
      const result = response.data.filter((constellation) => {
        return constellation.quadrant === quadrant;
      });
      console.log(result);
    })
    .catch((error) => {
      console.log(error.message);
    });
}

module.exports = {
  getAllNames,
  getConstellationsByQuadrant,
};
