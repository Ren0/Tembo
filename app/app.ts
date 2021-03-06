import {Component, View} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from 'angular2/router';

import {Home} from './home/home';
import {Login} from './login/login';
import {SignUp} from './signup/signup';

@Component({
    selector: 'app',
    directives: [ROUTER_DIRECTIVES],
    template: `
    <h1>-A</h1>
    <router-outlet></router-outlet>
  `
})
@RouteConfig([
    { path: '/', redirectTo: ['Login'] },
    { path: '/home', as: 'Home', component: Home },
    { path: '/login', as: 'Login', component: Login },
    { path: '/signup', as: 'SignUp', component: SignUp }
])
export class App {

    constructor() {
    }
}