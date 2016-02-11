import {Component, OnInit} from 'angular2/core';
import {Router, CanActivate} from 'angular2/router';
import {AuthenticationService} from '../authentication/authentication.service';
import {isLoggedin}  from '../authentication/is-loggedin';
import {MemoService} from '../memo/memo.service';
import {MemoList} from '../memo/memo-list';

@Component({
    selector: 'home',
    directives: [MemoList],
    template: `
    <h2>---H</h2>
    <a href="#" (click)="onLogout()">Logout</a>
    <memo-list></memo-list>
  `
})

@CanActivate(() => isLoggedin())
export class Home {
    constructor(public auth: AuthenticationService, public router: Router) {
    }

    //ngOnInit() {
    //    this.memoservice.getUserMemos()
    //        .subscribe(
    //            data => {
    //                console.log(data);
    //            },
    //            err => console.log(err),
    //            () => console.log('Get memos Complete')
    //        );
    //}

    onLogout() {
        this.auth.logout()
            .subscribe(
                () => this.router.navigate(['../Login'])
            );
    }
}