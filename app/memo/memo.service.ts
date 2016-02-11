import {Injectable} from 'angular2/core';
import {Http, Headers, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import {Memo} from './memo';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class MemoService {
    http:Http;

    constructor(http:Http) {
        this.http = http;
    }

    getUserMemos() {
        console.log('getUserMemos(): ' + localStorage.getItem('token'));
        return this.http.get('/api/memo', {
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'x-access-token': localStorage.getItem('token')
                })
            })
            .map(response => <Memo[]> response.json().data)
            .do(data => console.log(data))
            .catch(this.handleError);
    }

    // lost connection or token expired?
    private handleError(error:Response) {
        console.log(error.json());
        console.log(error.status);
        if(error.status == 401) {
            //this.router.navigate(['../Login'])
            localStorage.removeItem('token');
        }
        return Observable.throw(error.json().error || 'Server error');
    }

}