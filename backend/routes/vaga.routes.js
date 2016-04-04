'use strict';

let express  = require('express'),
    jwt      = require('express-jwt'),
    config   = require('../config'),
    VagaCtrl = require('../controllers/vaga.controller');

let app = module.exports = express.Router();

let jwtCheck = jwt({
    secret: config.secret
});

app.post('/api/vagas', jwtCheck, VagaCtrl.adicionar);
app.get('/api/vagas', VagaCtrl.listar);