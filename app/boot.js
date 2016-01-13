System.register(['angular2/platform/browser', 'angular2/core', 'angular2/router', 'angular2/http', './app', './authentication/authentication'], function(exports_1) {
    var browser_1, core_1, router_1, http_1, app_1, authentication_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (app_1_1) {
                app_1 = app_1_1;
            },
            function (authentication_1_1) {
                authentication_1 = authentication_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_1.App, [
                router_1.ROUTER_PROVIDERS,
                http_1.HTTP_PROVIDERS,
                core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy }),
                authentication_1.Authentication
            ]);
        }
    }
});
//# sourceMappingURL=boot.js.map