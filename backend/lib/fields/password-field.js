const _validate = (v) => v.length >= 6 && v.length <= 32;

const Field = {
    type: String,
    required: true,
    validate: [_validate, 'Senha precisa estar entre 6 e 32 caracteres.']
};

module.exports = Field;
