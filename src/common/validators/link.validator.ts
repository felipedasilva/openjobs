import {Control, Validators} from 'angular2/common';

export class LinkValidator {
    static get(): Control {
        return new Control('', Validators.required);
    }
};