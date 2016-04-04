import { Component }        from 'angular2/core';
import { FormBuilder,
         Validators,
         Control }          from 'angular2/common';
import { PasswordValidador, 
         EmailValidator, 
         PhoneValidator, 
         NameValidator }    from '../../common/validator';

export class UserForm {
    public name: Control;
    public email: Control;
    public phone: Control;
    public password: Control;
    public repassword: Control;
    
    public getControlGroup(_builder: FormBuilder) {
        this.name       = NameValidator.get();
        this.email      = EmailValidator.get();
        this.phone      = PhoneValidator.get();
        this.password   = PasswordValidador.get();
        this.repassword = PasswordValidador.get();
        
        return _builder.group({
            name:       this.name,
            email:      this.email,
            phone:      this.phone,
            password:   this.password,
            repassword: this.repassword
        });
    }
}