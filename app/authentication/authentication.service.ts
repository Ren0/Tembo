// authentication.ts
import {Injectable} from 'angular2/core';
import {Http, Headers, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
    token:string;
    http:Http;

    constructor(http:Http) {
        this.http = http;
        this.token = localStorage.getItem('token');
    }

    login(username:String, password:String) {
        return this.http.post('/api/authenticate', JSON.stringify({
                username: username,
                password: password
            }), {
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            })
            .map(response => response.json())
            //.subscribe(
            //    data => {
            //        console.log('Token from server: ');
            //        console.log(data);
            //        localStorage.setItem('token', data.id_token);
            //    }
            //)

        //.catch(this,handleError);
    }

    private handleError(error:Response) {

    }

    logout() {
        return this.http.get('/logout', {
                headers: new Headers({
                    'x-security-token': this.token
                })
            })
            .map((res:any) => {
                this.token = undefined;
                localStorage.removeItem('token');
            });
    }
}