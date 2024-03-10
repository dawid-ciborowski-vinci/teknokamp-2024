const express = require('express');

const conso = require('../models/conso')

const router = express.Router();

router.get('/', async (req, res) => {
    const data = await conso.getAll();
    console.log(data);
    return res.json(data);
});

router.post('/', async (req, res) => {
  const time = req.body.time;  
  const consommation_total_grid = req.body.consommation_total_grid; 
  const consommation_solaire = req.body.consommation_solaire; 
  const consommation_thermal = req.body.consommation_thermal;
  const consommation_eolienne = req.body.consommation_eolienne;
  const consommation_hydroelectrique = req.body.consommation_hydroelectrique; 
  const consommation_nucleaire = req.body.consommation_nucleaire;

  const json = await conso.addOne(time, consommation_total_grid, consommation_solaire, consommation_thermal, consommation_eolienne, consommation_hydroelectrique, consommation_nucleaire);
  console.log(json);
  return res.json(json);
});

module.exports = router;