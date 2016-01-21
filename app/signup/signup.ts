import {Component} from 'angular2/core';
import {FORM_DIRECTIVES, FormBuilder, Validators, ControlGroup, NgIf} from 'angular2/common';
import {Router} from 'angular2/router';
import {Authentication} from '../authentication/authentication';

@Component({
    selector: 'signup',
    directives: [ FORM_DIRECTIVES, NgIf ],
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
    </form>
  `
})

export class SignUp {
    form: ControlGroup;
    error: boolean = false;
    constructor(fb: FormBuilder, public auth: Authentication, public router: Router) {
        this.form = fb.group({
            username:  ['admin', Validators.required],
            password:  ['admin', Validators.required],
            admin:  ['admin@admin.com', Validators.required]
        });
    }

    onSubmit(value: any) {
        this.auth.login(value.username, value.password);
        //.subscribe(
        //    (token: any) => { this.router.navigate(['../Home']); },
        //    () => { this.error = true; }
        //);
    }
}