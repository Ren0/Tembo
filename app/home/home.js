System.register(['angular2/core', 'angular2/router', '../authentication/authentication.service', '../authentication/is-loggedin', '../memo/memo-list'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, authentication_service_1, is_loggedin_1, memo_list_1;
    var Home;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (authentication_service_1_1) {
                authentication_service_1 = authentication_service_1_1;
            },
            function (is_loggedin_1_1) {
                is_loggedin_1 = is_loggedin_1_1;
            },
            function (memo_list_1_1) {
                memo_list_1 = memo_list_1_1;
            }],
        execute: function() {
            Home = (function () {
                function Home(auth, router) {
                    this.auth = auth;
                    this.router = router;
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
                Home.prototype.onLogout = function () {
                    var _this = this;
                    this.auth.logout()
                        .subscribe(function () { return _this.router.navigate(['../Login']); });
                };
                Home = __decorate([
                    core_1.Component({
                        selector: 'home',
                        directives: [memo_list_1.MemoList],
                        template: "\n    <h2>---H</h2>\n    <a href=\"#\" (click)=\"onLogout()\">Logout</a>\n    <memo-list></memo-list>\n  "
                    }),
                    router_1.CanActivate(function () { return is_loggedin_1.isLoggedin(); }), 
                    __metadata('design:paramtypes', [authentication_service_1.AuthenticationService, router_1.Router])
                ], Home);
                return Home;
            })();
            exports_1("Home", Home);
        }
    }
});
//# sourceMappingURL=home.js.map