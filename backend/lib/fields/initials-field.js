'use strict';

const _validate = (v) => v ? v.length <= 3 : false;

const Field = {
    type: String,
    validate: [_validate, 'Sigla não pode ser ter mais de 3 caracters'],
    required: true
};

module.exports = Field;
