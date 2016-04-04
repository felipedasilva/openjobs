import {Control, Validators} from 'angular2/common';

export class DescriptionValidator {
    static get(): Control {
        return new Control('', Validators.compose([
            Validators.required,
            Validators.minLength(10)
        ]));
    }
};