import {Injectable} from 'angular2/core';
import {Http, Headers, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MemoService {
    token:string;
    http:Http;

    constructor(http:Http) {
        this.http = http;
        this.token = localStorage.getItem('token');
    }

    getUserMemos() {
        console.log('getUserMemos(): ' + this.token);
        return this.http.get('/api/memo', {
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'x-access-token': this.token
                })
            })
            //.map(response => response.json())

            .catch(this.handleError);
    }

    private handleError(error:Response) {
        console.log('getMemo() ERROR');
        return Observable.throw(error.json().error || 'Server error');
    }

}