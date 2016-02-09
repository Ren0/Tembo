import {Component} from 'angular2/core';
import {FORM_DIRECTIVES, FormBuilder, Validators, ControlGroup, NgIf} from 'angular2/common';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {AuthenticationService} from '../authentication/authentication.service';
import {Registration} from "../registration/registration";

@Component({
    selector: 'signup',
    directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES, NgIf],
    template: `
    <form [ngFormModel]="form" (submit)="$event.preventDefault(); onSubmit(form.value)">
      <div *ngIf="error">TODO check error *ngIf</div>
      <div>
        <label for="username">Username</label>
        <input type="text" ngControl="username">
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" ngControl="password">
      </div>
      <div>
        <label for="email">Email</label>
        <input type="email" ngControl="email">
      </div>
      <div class="form-group">
        <button type="submit" [disabled]="!form.valid">Sign Up</button>
      </div>
      <a [routerLink]="['Login']">L</a>
      <a [routerLink]="['Home']">H</a>
    </form>
  `
})

export class SignUp {
    form: ControlGroup;
    error: boolean = false;
    constructor(fb: FormBuilder, public reg: Registration, public router: Router) {
        this.form = fb.group({
            username:  ['admin', Validators.required],
            password:  ['admin', Validators.required],
            email:  ['admin@admin.com', Validators.required]
        });
    }

    onSubmit(value: any) {
        this.reg.register(value.username, value.password, value.email)
        .subscribe(
            data => {
                console.log("HERE");
                console.log(data);
                localStorage.setItem('token', data.id_token);
                this.router.navigate(['../Home'])
            },
            err => console.log(err),
            () => console.log('Registration Complete')
        );
    }
}