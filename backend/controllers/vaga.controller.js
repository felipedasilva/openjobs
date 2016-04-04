'use strict';

const Vaga = require('../models/vaga'),
         _ = require('lodash');

const adicionar = (req, res) => {
    let newVaga  = new Vaga(_.pick(req.body, ['title', 'description', 'type', 'cidade']));
    newVaga.user = req.user._id;
    let errForm  = newVaga.validateSync();
    if (errForm) {
        console.log(errForm);
        return res.status(400).send('Formulário inválido.');
    }
    
    newVaga.save((err, vaga) => {
        if (err) {
            console.log(errForm);
            res.status(400).send('Ocorreu um erro.');
        } else {
            res.status(201).json(vaga);
        }
    });
};

const listar = (req, res) => {
    Vaga.find({})
        .populate('cidade')
        .populate('user', {'name': 1, 'email': 1, 'phone': 1, '_id': 0})
        .exec((err, vagas) => {
            if (err) {
                console.log(err);
                return res.status(400).send('Erro na busca das vagas.');
            }
            res.status(200).json(vagas);
        });
};

module.exports = {
    adicionar,
    listar
}; 