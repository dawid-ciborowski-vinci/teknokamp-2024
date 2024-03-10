const path = require('node:path');
const csvPath = path.join(__dirname, '../data/data.csv');
const { csvToJson, jsonToCsv } = require('../utils/csvjson');

async function getAll() {
    return await csvToJson(csvPath);
}

async function addOne(time, consommation_total_grid, consommation_solaire, consommation_thermal, consommation_eolienne, consommation_hydroelectrique, consommation_nucleaire) {

    let consos = await getAll();
    const conso = {
        time, 
        consommation_total_grid, 
        consommation_solaire, 
        consommation_thermal, 
        consommation_eolienne, 
        consommation_hydroelectrique, 
        consommation_nucleaire
    };

    consos.push(conso);

    const json = JSON.stringify(consos);
    console.log(json);
    await jsonToCsv(json, csvPath);
    return json;
}

module.exports = {
    getAll,
    addOne
}