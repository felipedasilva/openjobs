import {Control, Validators} from 'angular2/common';

export class PasswordValidador {
    static get(): Control {
        return new Control('', Validators.compose([
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(12)
        ]));
    }
}
