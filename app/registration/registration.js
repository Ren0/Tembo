System.register(['angular2/core', 'angular2/http', 'rxjs/add/operator/map'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var Registration;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            Registration = (function () {
                function Registration(http) {
                    this.http = http;
                    this.token = localStorage.getItem('token');
                }
                Registration.prototype.register = function (username, password, email) {
                    return this.http.post('/api/register', JSON.stringify({
                        username: username,
                        password: password,
                        emai: email
                    }), {
                        headers: new http_1.Headers({
                            'Content-Type': 'application/json'
                        })
                    })
                        .map(function (response) { return response.json(); });
                    //.subscribe(
                    //    data => {
                    //        console.log(data);
                    //        localStorage.setItem('id_token', data.id_token);
                    //    },
                    //    err => console.log(err),
                    //    () => console.log('Registration Complete')
                    //);
                    //.map((res:any) => {
                    //    let data = res.json();
                    //    console.log(data);
                    //    this.token = data.token;
                    //    localStorage.setItem('token', this.token);
                    //});
                };
                Registration = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], Registration);
                return Registration;
            })();
            exports_1("Registration", Registration);
        }
    }
});
//# sourceMappingURL=registration.js.map