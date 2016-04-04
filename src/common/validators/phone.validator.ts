import {Control, Validators} from 'angular2/common';

interface ValidationResult {
    [key: string]: boolean;
}

export class PhoneValidator {
    static get(): Control {
        return new Control('', Validators.compose([
            Validators.required,
            Validators.minLength(8),
            PhoneValidator.mailFormat 
        ]));
    }
    
    static mailFormat(control: Control): ValidationResult {
        let EMAIL_REGEXP = /^\d+$/;
        if (control.value != "" && (control.value.length >= 8 && !EMAIL_REGEXP.test(control.value))) {
            return { "incorrectPhoneFormat": true };
        }
        return null;
    }
}