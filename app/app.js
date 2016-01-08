System.register([], function(exports_1) {
    var App;
    return {
        setters:[],
        execute: function() {
            App = (function () {
                function App(authHttp) {
                    this.authHttp = authHttp;
                }
                //getNoAuthThing() {
                //    this.http.get('http://example.com/api/thing')
                //        .map(res => res.json())
                //        .subscribe(
                //            data => this.thing = data,
                //            err => console.log(error),
                //            () => console.log('Request Complete')
                //        );
                //}
                App.prototype.getThing = function () {
                    var _this = this;
                    this.authHttp.get('http://example.com/api/thing')
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) { return _this.thing = data; }, function (err) { return console.log(err); }, function () { return console.log('Request Complete'); });
                };
                return App;
            })();
            exports_1("App", App);
        }
    }
});
//bootstrap(App, [
//    HTTP_PROVIDERS,
//    provide(AuthHttp, { useFactory: () => {
//        return new AuthHttp()
//    }})
//]) 
//# sourceMappingURL=app.js.map