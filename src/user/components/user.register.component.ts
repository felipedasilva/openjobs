import { Component, OnInit }    from 'angular2/core';
import { FORM_DIRECTIVES, 
         FormBuilder,
         ControlGroup }         from 'angular2/common';
import { UserForm }             from '../forms/user.form';
import { Http }                 from 'angular2/http';
import { contentHeaders }       from '../../common/headers';
import { ApiRoutes }            from '../../common/api.routes';
import { Router }               from 'angular2/router';

let template = require('../static/views/form.html');
let style    = require('../../common/static/css/form-app.css');

@Component({
    template    : template,
    styles      : [style],
    directives  : [FORM_DIRECTIVES]
})
export class UserRegisterComponent implements OnInit{
    message          : string;
    processsRegister : boolean;
    userForm         : UserForm;
    form             : ControlGroup;
    
    constructor(private _builder: FormBuilder, private _http: Http, private _router: Router) {
    }
    
    ngOnInit() {
        this.userForm = new UserForm();
        this.form     = this.userForm.getControlGroup(this._builder);
    }
    
    submitData() {
        this.processsRegister = true;
        let dataForm = this.form.value; 
        if(dataForm.password != dataForm.repassword) {
            this.message = 'Senhas diferentes';            
            this.userForm.repassword.updateValue('');
            this.processsRegister = false;
        } else {
            delete dataForm.repassword;
            let body = JSON.stringify(dataForm);
            this._http.post(ApiRoutes.ROUTE_USER_REGISTER, body, { headers: contentHeaders })
                .subscribe(
                    response => {
                        localStorage.setItem("jwt", response.json().id_token);
                        this.processsRegister = false;
                        this._router.parent.navigateByUrl('/home');
                    },
                    error => {
                        this.message = error._body;
                        console.log(error);
                        this.processsRegister = false;
                    }
                );
        }
    }
}