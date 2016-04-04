'use strict';

let express     = require('express'),
    jwt         = require('express-jwt'),
    config      = require('../config'),
    CidadeCtrl  = require('../controllers/cidade.controller');

let app = module.exports = express.Router();

let jwtCheck = jwt({
    secret: config.secret
});

app.use('/api/cidades', jwtCheck);
app.get('/api/cidades', CidadeCtrl.listar);

