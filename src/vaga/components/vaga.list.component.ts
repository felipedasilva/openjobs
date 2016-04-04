import { Component, 
         OnInit }                   from 'angular2/core';
import { ControlGroup,
         FormBuilder }              from 'angular2/common';
import { VagaService }              from '../services/vaga.service';
import { Vaga }                     from '../models/vaga';
import { CandidatoRegisterForm }    from '../forms/candidato.register.form';
import { CandidatoService }         from '../services/candidato.service';
import { ApiRoutes }                from '../../common/api.routes';

 let template = require('../static/views/vaga.list.html');
 let css      = require('../static/css/vaga.list.css');
 let cssForm  = require('../../common/static/css/form-app.css');

@Component({
    styles      : [css, cssForm],
    template    : template,
    providers   : [VagaService, CandidatoService]
})
export class VagaListComponent implements OnInit {
    vagas                 : Array<Vaga>;
    selectedVaga          : Vaga;
    form                  : ControlGroup;
    candidatoForm         : CandidatoRegisterForm;
    processSubmit         : Boolean;
    message               : String;
    successSubmit         : Boolean;
    openCurriculum        : Boolean;
    api_vaga_route        : String;
    
    constructor(private _service          : VagaService,
                private _candidatoService : CandidatoService,
                private _builder          : FormBuilder) { }    
    
    ngOnInit() {
        this.candidatoForm  = new CandidatoRegisterForm();
        this.form           = this.candidatoForm.getControlGroup(this._builder);
        this.api_vaga_route = ApiRoutes.ROUTE_VAGA_LIST;
        this._service.list()
            .subscribe(
                vagas => {
                    this.vagas = vagas;
                },
                err => {
                    console.log(err);
                }
            );
    }
    
    onSubmit() {
        this.processSubmit = true;
        let data     = this.form.value;
        data.vaga    = this.selectedVaga;
        this.message = 'Enviando ...';
        this.successSubmit = true;
        this._candidatoService.register(data)
            .subscribe(
                res => {
                    console.log(res);
                    this.processSubmit = false;
                    this.message       = 'Curriculum enviado com sucesso!';
                    this.successSubmit = true;
                    this.form          = this.candidatoForm.getControlGroup(this._builder);
                },
                err => {
                    console.log(err);
                    this.processSubmit = false;
                    this.message       = 'Ocorreu um erro, tente mais tarde.'
                    this.successSubmit = false;
                }
            );
    }
    
    closeCurriculum() {
        this.processSubmit  = false;
        this.message        = '';
        this.openCurriculum = false;
        this.form           = this.candidatoForm.getControlGroup(this._builder);
    }

}
