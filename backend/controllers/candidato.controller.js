'use strict';

const _       = require('lodash'),
      Mailgun = require('mailgun-js');

//consulte: http://blog.mailgun.com/how-to-send-transactional-emails-in-a-nodejs-app-using-the-mailgun-api/
const api_key   = 'key-627cb354d9ea01a5266470a712b39865';
const domain    = 'sandbox577eec398ece443ebd7ba38da027337b.mailgun.org';
const from_who  = 'postmaster@sandbox577eec398ece443ebd7ba38da027337b.mailgun.org';

const sendMail = (Vaga, Candidato, res) => {
    const body = '<div><h5>Nome: '+Candidato.name+', Email: '+Candidato.email+'</h5><p><b>Mensagem: '+Candidato.description+'</b></p><p><b>Link: </b> '+Candidato.link+'</p></div>';
    let   data = {
        from: from_who,
        to: Vaga.user.email,  
        subject: 'Um novo candidato a vaga: ' + Vaga.title,
        html: body
    }
    
    const mailgun = new Mailgun({apiKey: api_key, domain: domain});        
    mailgun.messages().send(data, function (err, body) {
        if (err) {
            console.log(err);
            return res.status(400).send('Ocorreu um erro.');
        }
        else {
            console.log('Email enviado com successo.');
            return res.status(200).send('Email enviado com successo.');
        }
    });
};

const novoCandidato = (req, res) => {
    const Vaga      = _.pick(req.body, ['vaga']).vaga;
    const Candidato = _.pick(req.body, ['link', 'name', 'description', 'email']);
    
    sendMail(Vaga, Candidato, res);
};

module.exports = {
    novoCandidato
} 