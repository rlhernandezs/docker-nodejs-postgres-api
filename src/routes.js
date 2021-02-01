'use strict'

require('dotenv').config();

const express = require('express');


const routes = express.Router();

const Pool = require('pg').Pool
const pool = new Pool({
  user: process.env.USERBD,
  host: process.env.HOST_BD,
  database: process.env.DATABASE,
  password: process.env.PASS_BD,
  port: process.env.PORT_BD,
});

let sqlExecute = require('./sql');

routes.get('/', (req, res) => {
  res.send('API SERVER RUNNING.\n');
});

routes.post('/agenda', (req, res) => {
  const { agenda_id } = req.body;

  pool.query(sqlExecute.select(agenda_id), (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
});


module.exports = routes;