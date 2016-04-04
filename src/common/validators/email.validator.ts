import {Control, Validators} from 'angular2/common';

interface ValidationResult {
    [key: string]: boolean;
}

export class EmailValidator{
    static get(): Control {
        return new Control('', Validators.compose([
            Validators.required,
            EmailValidator.mailFormat
        ]));
    }
    
    static mailFormat(control: Control): ValidationResult {
        let EMAIL_REGEXP = /^[a-zA-Z0-9][a-zA-Z0-9\._-]+@([a-zA-Z0-9\._-]+\.)[a-zA-Z-0-9]{2}/;
        if (control.value != "" && (control.value.length <= 5 || !EMAIL_REGEXP.test(control.value))) {
            return { "incorrectMailFormat": true };
        }
        return null;
    }
}


