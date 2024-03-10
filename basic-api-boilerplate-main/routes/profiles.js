const express = require('express');
const { csvToJson, jsonToCsv } = require('../utils/csvjson');
const path = require('node:path');

const router = express.Router();

const csvPath = path.join(__dirname, '/../data/data.csv');

router.get('/', async (req, res) => {
    const data = await csvToJson(csvPath);
    console.log(data);
    return res.json(data);
});

router.post('/', async (req, res) => {
  const label = req.body.label;

  const profil = {
    label
  };

  const json = JSON.stringify(profil);
  await jsonToCsv(json, csvPath);

  return res.json(json);
});

module.exports = router;