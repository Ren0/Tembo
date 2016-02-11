System.register(['angular2/core', './memo.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, memo_service_1;
    var MemoList;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (memo_service_1_1) {
                memo_service_1 = memo_service_1_1;
            }],
        execute: function() {
            MemoList = (function () {
                function MemoList(memoService) {
                    this.memoService = memoService;
                }
                MemoList.prototype.ngOnInit = function () {
                    console.log("Get memos");
                    this.getMemos();
                };
                MemoList.prototype.getMemos = function () {
                    //this.memoService.getUserMemos()
                    //    .subscribe(
                    //        memos => this.memos = memos,
                    //        error => this.errorMessage = <any>error);
                    var _this = this;
                    this.memoService.getUserMemos()
                        .subscribe(
                    //data => {
                    //    console.log(data);
                    //},
                    function (memos) { return _this.memos = memos; }, function (err) { return console.log(err); }, function () { return console.log('Get memos Complete'); });
                };
                MemoList = __decorate([
                    core_1.Component({
                        selector: 'memo-list',
                        template: "\n  <h3>Memos:</h3>\n  <ul>\n    <li *ngFor=\"#memo of memos\">\n      {{ memo.title }}\n    </li>\n  </ul>\n  <!--New Memo:-->\n  <!--<input #newHero />-->\n  <!--<button (click)=\"addHero(newHero.value); newHero.value=''\">-->\n    <!--Add Hero-->\n  <!--</button>-->\n  <div class=\"error\" *ngIf=\"errorMessage\">{{errorMessage}}</div>\n  ",
                        styles: ['.error {color:red;}']
                    }), 
                    __metadata('design:paramtypes', [memo_service_1.MemoService])
                ], MemoList);
                return MemoList;
            })();
            exports_1("MemoList", MemoList);
        }
    }
});
//# sourceMappingURL=memo-list.js.map