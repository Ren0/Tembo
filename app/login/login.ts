// login.ts
import {Component} from 'angular2/core';
import {FORM_DIRECTIVES, FormBuilder, Validators, ControlGroup, NgIf} from 'angular2/common';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {AuthenticationService} from '../authentication/authentication.service';

@Component({
    selector: 'login',
    directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES, NgIf],
    template: `
    <form [ngFormModel]="form" (submit)="$event.preventDefault(); onSubmit(form.value)">
      <div *ngIf="error">Check your password</div>
      <div>
        <label for="username">Username</label>
        <input type="text" ngControl="username">
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" ngControl="password">
      </div>
      <div class="form-group">
        <button type="submit" [disabled]="!form.valid">Login</button>
      </div>
      <a [routerLink]="['SignUp']">S</a>
      <a [routerLink]="['Home']">H</a>
    </form>
  `
})

export class Login {
    form:ControlGroup;
    error:boolean = false;

    constructor(fb:FormBuilder, public auth:AuthenticationService, public router:Router) {
        this.form = fb.group({
            username: ['admin', Validators.required],
            password: ['admin', Validators.required]
        });
    }

    onSubmit(value:any) {
        this.auth.login(value.username, value.password)
            .subscribe(
                data => {
                    console.log('Token from server: ');
                    console.log(data);
                    localStorage.setItem('token', data.token);
                    this.router.navigate(['../Home'])
                }
                //,
                //err => console.log(err),
                //() => console.log('Authentication Complete')
            );
        //.subscribe(
        //    (token: any) => { this.router.navigate(['../Home']); },
        //    () => { this.error = true; }
        //);
    }
}