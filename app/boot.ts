import {bootstrap} from 'angular2/platform/browser';
import {provide} from 'angular2/core';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {App} from './app';
import {AuthenticationService} from './authentication/authentication.service';
import {Registration} from './registration/registration';
import {MemoService} from './memo/memo.service';

bootstrap(App, [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy}),
    AuthenticationService,
    Registration,
    MemoService
]);
