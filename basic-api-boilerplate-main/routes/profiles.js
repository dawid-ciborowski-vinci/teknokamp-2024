const express = require('express');
const { csvToJson, jsonToCsv } = require('../utils/csvjson');

const router = express.Router();

const csvPath = '../data/data.csv';

router.get('/', (req, res) => {
    const data = csvToJson(csvPath);
    return res.json(data);
});

router.post('/', (req, res) => {
  const label = req.body.label;

  const profil = {
    label
  };

  const json = JSON.stringify(profil);
  jsonToCsv(json, csvPath);

  return res.json(json);
});

module.exports = router;