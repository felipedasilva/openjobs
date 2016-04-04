import { Component }        from 'angular2/core';
import { FormBuilder,
         Validators,
         Control }          from 'angular2/common';
import { DescriptionValidator, 
         TypeValidator,
         TitleValidator,
         CidadeValidator }   from '../../common/validator';

export class VagaRegisterForm {
    public title:       Control;
    public description: Control;
    public type:        Control;
    public cidade:      Control;
    
    public getControlGroup(_builder: FormBuilder) {
        this.title          = TitleValidator.get();
        this.description    = DescriptionValidator.get();
        this.type           = TypeValidator.get();
        this.cidade         = CidadeValidator.get();
    
        return _builder.group({
            title:          this.title,
            description:    this.description,
            type:           this.type,
            cidade:         this.cidade
        });
    }
}