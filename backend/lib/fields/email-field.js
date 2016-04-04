'use strict';

const _set = (v) => v.toLowerCase();
const _validate = (v) => /^[a-zA-Z0-9][a-zA-Z0-9\._-]+@([a-zA-Z0-9\._-]+\.)[a-zA-Z-0-9]{2}/.test(v);

const Field = {
    type: String,
    set: _set,
    validate: [_validate, 'Email {{VALUE}} inválido'],
    required: true,
    unique: true,
    index: true
};


module.exports = Field;
