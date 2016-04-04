'use strict';

const Cidade = require('../models/cidade');

const listar = (req, res) => {
    Cidade.find({}, (err, cidades) => {
        if (err) {
            console.log(err);
            return res.status(400).send('Erro na busca das cidades.');
        }
        
        res.status(200).json(cidades);
    });
};

module.exports = {
    listar
}; 