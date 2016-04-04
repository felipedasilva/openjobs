import {Control, Validators} from 'angular2/common';

export class NameValidator {
    static get(): Control {
        return new Control('', Validators.compose([
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(30)
        ]));
    }
};