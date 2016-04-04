'use strict';

const _validate = (v) => v ? v.length > 3 : false;

const Field = {
    type: String,
    validate: [_validate, 'Nome precisa ser maior que 3 caracters'],
    required: true
};

module.exports = Field;
