import {Control, Validators} from 'angular2/common';

export class TypeValidator {
    static get(): Control {
        return new Control('', Validators.compose([
            Validators.required,
            Validators.maxLength(80)
        ]));
    }
};