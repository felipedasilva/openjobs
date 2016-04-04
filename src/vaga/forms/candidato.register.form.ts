import { Component }        from 'angular2/core';
import { FormBuilder,
         Validators,
         Control }          from 'angular2/common';
import { DescriptionValidator, 
         EmailValidator,
         NameValidator,
         LinkValidator }   from '../../common/validator';

export class CandidatoRegisterForm {
    public name         : Control;
    public description  : Control;
    public email        : Control;
    public link         : Control;
    
    public getControlGroup(_builder: FormBuilder) {
        this.name         = NameValidator.get();
        this.description  = DescriptionValidator.get();
        this.email        = EmailValidator.get();
        this.link         = LinkValidator.get();
    
        return _builder.group({
            name        : this.name,
            description : this.description,
            email       : this.email,
            link        : this.link
        });
    }
}