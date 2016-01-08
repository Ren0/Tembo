import {Component, View} from 'angular2/core';
import {HTTP_PROVIDERS, Http} from 'angular2/http';
import {AuthHttp} from 'angular2-jwt/angular2-jwt';

export class App {

    thing: string;

    constructor(public authHttp:AuthHttp) {}

    //getNoAuthThing() {
    //    this.http.get('http://example.com/api/thing')
    //        .map(res => res.json())
    //        .subscribe(
    //            data => this.thing = data,
    //            err => console.log(error),
    //            () => console.log('Request Complete')
    //        );
    //}

    getThing() {
        this.authHttp.get('http://example.com/api/thing')
            .map(res => res.json())
            .subscribe(
                data => this.thing = data,
                err => console.log(err),
                () => console.log('Request Complete')
            );
    }
}

//bootstrap(App, [
//    HTTP_PROVIDERS,
//    provide(AuthHttp, { useFactory: () => {
//        return new AuthHttp()
//    }})
//])