import { Component }        from 'angular2/core';
import { FormBuilder,
         Validators,
         Control }          from 'angular2/common';
import { PasswordValidador, 
         EmailValidator }   from '../../common/validator';

export class LoginForm {
    public email: Control;
    public password: Control;
    
    public getControlGroup(_builder: FormBuilder) {
        this.email      = EmailValidator.get();
        this.password   = PasswordValidador.get();
        
        return _builder.group({
            email:      this.email,
            password:   this.password,
        });
    }
}