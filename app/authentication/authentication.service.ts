// authentication.ts
import {Injectable} from 'angular2/core';
import {Http, Headers, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
    http:Http;

    constructor(http: Http) {
        this.http = http;
    }

    login(username: String, password: String) {
        return this.http.post('/api/authenticate', JSON.stringify({
                username: username,
                password: password
            }), {
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            })
            .map(response => response.json())
    }

    private handleError(error:Response) {}

    logout() {
        return this.http.post('/api/logout', '',
            {
                headers: new Headers({
                    'x-access-token': localStorage.getItem('token')
                })
            })
            .map((res: any) => {
                localStorage.removeItem('token');
            });
    }
}