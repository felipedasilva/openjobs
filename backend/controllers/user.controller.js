'use strict';

const jwt     = require('jsonwebtoken'),
      _       = require('lodash'),
      User    = require('../models/user'),
      config  = require('../config');

const createToken = (user) => {
    return jwt.sign(_.omit(user, 'password'), config.secret, { expiresInMinutes: 60 * 5 });
};

const login = (req, res) => {
    if (!req.body.email || !req.body.password) {
        return res.status(400).send('Email e senha obrigratórios');
    }
    let query = { email: req.body.email };
    User.findOne(query, (err, user) => {
        if (err) {
            res.status(400).send("Error: " + JSON.stringify(err));
        } else if (!user) {
            res.status(400).send("Credenciais inválidas.");
        } else {
            user.comparePassword(req.body.password, (err, isMatch) => {
                if (isMatch && !err) {
                    res.status(201).send({
                        id_token: createToken(user)
                    });
                } else
                    res.status(400).send("Credenciais inválidas.");
            });
        }
    });
};

const register = (req, res) => {
    let newUser     = new User(_.pick(req.body, ['name', 'email', 'phone', 'password']));
    newUser.enabled = true;
    newUser.role    = ['user'];

    let errForm = newUser.validateSync();
    if(errForm){
        console.log(errForm);
        return res.status(400).send("Formulário inválido.");
    }
    
    let query = { $or : [
        { email: newUser.email },
        { phone: newUser.phone }
    ] };
    User.findOne(query, (err, user) => {
        if(err) {
            res.status(400).send("Ocorreu um erro.");
        } else if (user) {
            console.log(user);
            res.status(400).send("Email ou Celular já utilizado.");
        } else {
            newUser.save((err) => {
                if(err) {
                    consoe.log(err);
                    res.status(400).send("Ocorreu um erro.");
                }else 
                    res.status(201).json({
                        id_token: createToken(newUser)
                    });    
            });
        }
    });
};

module.exports = {
    register,
    login  
};