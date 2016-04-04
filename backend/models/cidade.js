'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const dir = './../lib/fields/';

const CidadeSchema = new Schema({
    name: require(dir + 'name-field'),
    estado: {
        name: require(dir + 'name-field'),
        initials: require(dir + 'initials-field')
    }
});

module.exports = mongoose.model('Cidade', CidadeSchema);