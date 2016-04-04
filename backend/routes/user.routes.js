'use strict';

let express = require('express'),
    UserCtrl = require('../controllers/user.controller');
    
let app = module.exports = express.Router();

app.post('/api/users', UserCtrl.register);

app.post('/api/sessions/create', UserCtrl.login);