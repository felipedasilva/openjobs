import {Control, Validators} from 'angular2/common';

export class CidadeValidator {
    static get(): Control {
        return new Control('', Validators.compose([
            Validators.required
        ]));
    }
};