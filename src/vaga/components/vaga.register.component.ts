import { Component, 
         OnInit }           from 'angular2/core';
import { ControlGroup,
         FormBuilder }      from 'angular2/common';
import { VagaService }      from '../services/vaga.service';
import { VagaRegisterForm } from '../forms/vaga.register.form';
import { Cidade }           from '../../cidade/models/cidade';
import { CidadeService }    from '../../cidade/service/cidade.service';

let template = require('../static/views/vaga.register.html');
let css      = require('../../common/static/css/form-app.css');

@Component({
    styles: [css],
    template: template,
    providers: [VagaService, CidadeService]
})
export class VagaRegisterComponent implements OnInit{
    vagaForm      : VagaRegisterForm;
    form          : ControlGroup;       
    message       : String;
    successSubmit : Boolean;
    processSubmit : Boolean;
    cidades       : Array<Cidade>;
         
    constructor(private _service        : VagaService,
                private _cidadeService  : CidadeService,
                private _builder        : FormBuilder) { }    
    
    ngOnInit() {
        this._cidadeService.list()
            .subscribe(
                cidades => {
                    console.log(cidades);
                    this.cidades = cidades;
                },
                err     => console.log(err)
            );
        this.vagaForm   = new VagaRegisterForm();
        this.form       = this.vagaForm.getControlGroup(this._builder);
    }
    
    onSubmit() {
        this.processSubmit = true;
        let data = this.form.value;

        this._service.register(data)
            .subscribe(
                res => {
                    this.successSubmit  = true;
                    this.message        = 'Vaga adicionada com sucesso.';
                    this.processSubmit  = false;
                    this.form = this.vagaForm.getControlGroup(this._builder);
                },
                err => {
                    console.log(err);
                    this.successSubmit  = false;
                    this.message        = err._body;
                    this.processSubmit  = false;
                }
            );
    }
    
}
