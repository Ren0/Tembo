import {Component, OnInit} from 'angular2/core';
import {Memo} from './memo';
import {MemoService} from './memo.service';

@Component({
    selector: 'memo-list',
    template: `
  <h3>Memos:</h3>
  <ul>
    <li *ngFor="#memo of memos">
      {{ memo.title }}
    </li>
  </ul>
  <!--New Memo:-->
  <!--<input #newHero />-->
  <!--<button (click)="addHero(newHero.value); newHero.value=''">-->
    <!--Add Hero-->
  <!--</button>-->
  <div class="error" *ngIf="errorMessage">{{errorMessage}}</div>
  `,
    styles: ['.error {color:red;}']
})
export class MemoList implements OnInit {
    constructor(private memoService: MemoService) {
    }

    errorMessage: string;
    memos: Memo[];


    ngOnInit() {
        console.log("Get memos");
        this.getMemos();
    }

    getMemos() {
        //this.memoService.getUserMemos()
        //    .subscribe(
        //        memos => this.memos = memos,
        //        error => this.errorMessage = <any>error);

        this.memoService.getUserMemos()
            .subscribe(
                //data => {
                //    console.log(data);
                //},
                memos => this.memos = memos,
                err => console.log(err),
                () => console.log('Get memos Complete')
            );
    }

    //addHero(name:string) {
    //    if (!name) {
    //        return;
    //    }
    //    this._heroService.addHero(name)
    //        .subscribe(
    //            hero => this.heroes.push(hero),
    //            error => this.errorMessage = <any>error);
    //}
}