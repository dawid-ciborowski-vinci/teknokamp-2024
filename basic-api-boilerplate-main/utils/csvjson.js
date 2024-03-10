const csvJson = require('csvtojson');
const jsonCsv = require('json2csv').parse;
const fs = require('fs').promises;

const csvToJson = async (csvFilePath) => {
    try {
        const jsonArray = await csvJson().fromFile(csvFilePath);
        return jsonArray;
    } catch (error) {
        console.error('Erreur lors de la conversion CSV en JSON :', error);
        throw error;
    }
};

const jsonToCsv = async (jsonData, csvFilePath) => {
    try {
        const csvData = jsonCsv(jsonData, { header: true });
        await fs.writeFile(csvFilePath, csvData);
        console.log('Données JSON converties avec succès en CSV.');
    } catch (error) {
        console.error('Erreur lors de la conversion JSON en CSV :', error);
        throw error;
    }
};

module.exports = { csvToJson, jsonToCsv };
