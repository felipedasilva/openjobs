import { Component, View }                      from 'angular2/core';
import { Router, RouterLink }                   from 'angular2/router';
import { CORE_DIRECTIVES, FORM_DIRECTIVES }     from 'angular2/common';
import { Http }                                 from 'angular2/http';
import { contentHeaders }                       from '../common/headers';
import { Settings }                             from '../common/settings';

let styles   = require('./signup.css');
let template = require('./signup.html');

@Component({
    selector: 'signup'
})
@View({
    directives: [RouterLink, CORE_DIRECTIVES, FORM_DIRECTIVES],
    template: template,
    styles: [styles]
})
export class Signup {
    message: string;
    
    constructor(public router: Router, public http: Http) {
    }

    signup(event, name, email, phone, password, repassword) {
        event.preventDefault();
        if(password != repassword) {
            this.message = "Senhas diferentes";
            return false;
        }
        let body = JSON.stringify({ 
            name, 
            email,
            phone,
            password             
        });
        this.http.post(Settings.API_ENDPOINT + '/users', body, { headers: contentHeaders })
            .subscribe(
                response => {
                    localStorage.setItem('jwt', response.json().id_token);
                    this.router.parent.navigateByUrl('/home');
                },
                error => {
                    this.message = error.text();
                    console.log(error.text());
                }
            );
    }

    login(event) {
        event.preventDefault();
        this.router.parent.navigateByUrl('/login');
    }

}
