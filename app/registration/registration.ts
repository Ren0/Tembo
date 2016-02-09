import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class Registration {
    token:string;
    http:Http;

    constructor(http:Http) {
        this.http = http;
        this.token = localStorage.getItem('token');
    }

    register(username:String, password:String, email:String) {
        return this.http.post('/api/register', JSON.stringify({
                username: username,
                password: password,
                emai: email
            }), {
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            })
            .map(response => response.json())
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
    }
}