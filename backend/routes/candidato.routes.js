'use strict';

let express         = require('express'),
    CandidatoCtrl   = require('../controllers/candidato.controller');

let app = module.exports = express.Router();

app.post('/api/candidato', CandidatoCtrl.novoCandidato);