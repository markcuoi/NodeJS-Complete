const fs = require("fs");
const { parse } = require("csv-parse");
const path = require("path");

const results = [];

const habitablePlanet = [];

function isHabitablePlanet(planet) {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
}

/*
  const promise = new Promise((resolve, reject)=>{
    resolve(42)
  })
  promise.then((result)=>{

  })

  const result = await promise
*/

function loadPlanetsData() {
  return new Promise((resolve, rejects) => {
    // This line opens the file as a readable stream
    fs.createReadStream(
      path.join(__dirname, "..", "..", "data", "kepler_data.csv")
    )
      .pipe(
        parse({
          comment: "#",
          columns: true,
        })
      )
      .on("data", (data) => {
        if (isHabitablePlanet(data)) habitablePlanet.push(data);
      })
      .on("error", (err) => {
        console.log(err);
        rejects(err);
      })
      .on("end", () => {
        console.log(`${habitablePlanet.length} habitable planets found!`);
        resolve();
      });
  });
}

function getAllPlanets() {
  return habitablePlanet;
}

module.exports = {
  loadPlanetsData,
  getAllPlanets,
};