import { Component }            from 'angular2/core';
import { FORM_DIRECTIVES, 
         FormBuilder,
         ControlGroup }         from 'angular2/common';
import { LoginForm }            from '../forms/login.form';
import { Http }                 from 'angular2/http';
import { contentHeaders }       from '../../common/headers';
import { ApiRoutes }            from '../../common/api.routes';
import { Router }               from 'angular2/router';

let template = require('../static/views/login.html');
let style    = require('../../common/static/css/form-app.css');

@Component({
    template: template,
    styles: [style] ,
    directives: [FORM_DIRECTIVES]
})
export class LoginComponent {
    message:          string;
    processsRegister: boolean;
    loginForm:        LoginForm;
    form:             ControlGroup;
    
    constructor(private _builder: FormBuilder, private _http: Http, private _router: Router) {
        this.loginForm = new LoginForm();
        this.form      = this.loginForm.getControlGroup(_builder);
    }
 
    submitData() {
        this.processsRegister = true;
        let dataForm          = this.form.value;
        let body              = JSON.stringify(dataForm);
        this._http.post(ApiRoutes.ROUTE_LOGIN, body, {headers: contentHeaders})
            .map(res => res.json())
            .subscribe(
                res =>{
                    console.log(res);
                    localStorage.setItem("jwt", res.id_token);
                    this._router.parent.navigateByUrl('/home');
                },
                err => {
                    this.message = err.text();
                    this.processsRegister = false;
                    console.log(err.text())
                }
            );
    }
    
}