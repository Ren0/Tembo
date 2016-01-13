// home.ts
import {Component} from 'angular2/core';
import {Router, CanActivate} from 'angular2/router';
import {Authentication} from '../authentication/authentication';
import {isLoggedin}  from '../authentication/is-loggedin';

@Component({
    selector: 'home',
    directives: [],
    template: `
    <h2>I am logged in</h2>
    <a href="#" (click)="onLogout()">Logout</a>
  `
})

@CanActivate(() => isLoggedin())
export class Home {
    constructor(public auth:Authentication, public router:Router) {
    }

    onLogout() {
        this.auth.logout()
            .subscribe(
                () => this.router.navigate(['../Login'])
            );
    }
}