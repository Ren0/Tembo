// home.ts
import {Component, OnInit} from 'angular2/core';
import {Router, CanActivate} from 'angular2/router';
import {AuthenticationService} from '../authentication/authentication.service';
import {isLoggedin}  from '../authentication/is-loggedin';
import {MemoService} from '../memo/memo.service';

@Component({
    selector: 'home',
    directives: [],
    template: `
    <h2>---H</h2>
    <a href="#" (click)="onLogout()">Logout</a>
  `
})

@CanActivate(() => isLoggedin())
export class Home implements OnInit {
    constructor(public auth:AuthenticationService, public router:Router, public memoservice:MemoService) {
    }

    ngOnInit() {
        console.log('Home onInit');
        this.memoservice.getUserMemos()
            .subscribe(
                data => {
                    console.log(data);
                },
                err => console.log(err),
                () => console.log('Get memos Complete')
            );
    }

    onLogout() {
        this.auth.logout()
            .subscribe(
                () => this.router.navigate(['../Login'])
            );
    }
}