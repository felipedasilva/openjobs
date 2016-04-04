'use strict';

const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;
const dir       = './../lib/fields/';

const VagaSchema = new Schema({
    title:        require(dir + 'title-field'),
    description:  require(dir + 'description-field'),
    type:         require(dir + 'type-field'),
    status:       require(dir + 'enabled-field'),
    created_at:   require(dir + 'created_at-field'),
    cidade:       {type: Schema.Types.ObjectId, ref: 'Cidade', require: true},
    user:         {type: Schema.Types.ObjectId, ref: 'User', require: true}
});

module.exports = mongoose.model('Vaga', VagaSchema);