System.register(['angular2/core', 'angular2/common', 'angular2/router', '../authentication/authentication'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, router_1, authentication_1;
    var SignUp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (authentication_1_1) {
                authentication_1 = authentication_1_1;
            }],
        execute: function() {
            SignUp = (function () {
                function SignUp(fb, auth, router) {
                    this.auth = auth;
                    this.router = router;
                    this.error = false;
                    this.form = fb.group({
                        username: ['admin', common_1.Validators.required],
                        password: ['admin', common_1.Validators.required],
                        admin: ['admin@admin.com', common_1.Validators.required]
                    });
                }
                SignUp.prototype.onSubmit = function (value) {
                    this.auth.login(value.username, value.password);
                    //.subscribe(
                    //    (token: any) => { this.router.navigate(['../Home']); },
                    //    () => { this.error = true; }
                    //);
                };
                SignUp = __decorate([
                    core_1.Component({
                        selector: 'signup',
                        directives: [common_1.FORM_DIRECTIVES, common_1.NgIf],
                        template: "\n    <form [ngFormModel]=\"form\" (submit)=\"$event.preventDefault(); onSubmit(form.value)\">\n      <div *ngIf=\"error\">TODO check error *ngIf</div>\n      <div>\n        <label for=\"username\">Username</label>\n        <input type=\"text\" ngControl=\"username\">\n      </div>\n      <div>\n        <label for=\"password\">Password</label>\n        <input type=\"password\" ngControl=\"password\">\n      </div>\n      <div>\n        <label for=\"email\">Email</label>\n        <input type=\"email\" ngControl=\"email\">\n      </div>\n      <div class=\"form-group\">\n        <button type=\"submit\" [disabled]=\"!form.valid\">Sign Up</button>\n      </div>\n    </form>\n  "
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, authentication_1.Authentication, router_1.Router])
                ], SignUp);
                return SignUp;
            })();
            exports_1("SignUp", SignUp);
        }
    }
});
//# sourceMappingURL=signup.js.map