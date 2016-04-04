import { View, Component}   from 'angular2/core';
import { Location, 
         RouteConfig, 
         RouterLink, 
         Router }           from 'angular2/router';

import { LoggedInRouterOutlet }   from '../directives/LoggedInOutlet';

import { UserRegisterComponent } from '../../user/components/user.register.component';
import { LoginComponent }        from '../../user/components/login.component';
import { VagaRegisterComponent } from '../../vaga/components/vaga.register.component';  
import { VagaListComponent }     from '../../vaga/components/vaga.list.component';         

let template = require('../static/views/app.html');
let css      = require('../static/css/app.css');

@Component({
  selector: 'auth-app'
})
@View({
  template: template,
  directives: [ LoggedInRouterOutlet , RouterLink ],
  styles: [css]
})
@RouteConfig([
  { path: '/', redirectTo: ['/VagaList'] },
  { path: '/vagas',         component: VagaRegisterComponent,   as: 'VagaRegister' },
  { path: '/vagas/list',    component: VagaListComponent,       as: 'VagaList' },
  { path: '/login',         component: LoginComponent,          as: 'Login' },
  { path: '/signup',        component: UserRegisterComponent,   as: 'UserRegister' }
])

export class AppComponent {
    constructor(public router: Router) {
    }
}
