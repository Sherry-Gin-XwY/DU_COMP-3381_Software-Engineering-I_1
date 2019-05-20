"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("tns-core-modules/ui/page");
var router_1 = require("nativescript-angular/router");
var user_model_1 = require("../shared/user.model");
var user_service_1 = require("../shared/user.service");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(page, userService, routerExtensions) {
        this.page = page;
        this.userService = userService;
        this.routerExtensions = routerExtensions;
        this.processing = false;
        this.page.actionBarHidden = true;
        this.user = new user_model_1.User();
        this.user.username = "user";
        this.user.password = "Passw0rd!";
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.submit = function () {
        if (!this.user.username || !this.user.password) {
            this.alert("Please provide both an email address and password.");
            return;
        }
        this.processing = true;
        //alert("112233");
        this.login();
    };
    HomeComponent.prototype.login = function () {
        var _this = this;
        this.userService.login(this.user)
            .then(function (res) {
            console.log("登录成功:", res);
            _this.processing = false;
            _this.routerExtensions.navigate(["/workorders"], { clearHistory: true });
            /*                 this.alert("Uid: " + this.userService.getUid());
                            this.alert("Key: " + this.userService.getKey()); */
        })
            .catch(function (err) {
            console.log("登录失败:", err);
            _this.processing = false;
            _this.alert("用户名密码错误");
        });
    };
    HomeComponent.prototype.alert = function (message) {
        return alert({
            title: "APP NAME",
            okButtonText: "OK",
            message: message
        });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./home.component.html",
            styleUrls: ['./home.component.css']
        }),
        __metadata("design:paramtypes", [page_1.Page, user_service_1.UserService, router_1.RouterExtensions])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE4RDtBQUc5RCxpREFBZ0Q7QUFDaEQsc0RBQStEO0FBRS9ELG1EQUE0QztBQUM1Qyx1REFBcUQ7QUFRckQ7SUFJSSx1QkFBb0IsSUFBVSxFQUFVLFdBQXdCLEVBQVUsZ0JBQWtDO1FBQXhGLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFGNUcsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUdmLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUNqQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksaUJBQUksRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQztRQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUM7SUFDckMsQ0FBQztJQUVELGdDQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsOEJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQzVDLElBQUksQ0FBQyxLQUFLLENBQUMsb0RBQW9ELENBQUMsQ0FBQztZQUNqRSxPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUV2QixrQkFBa0I7UUFFbEIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRCw2QkFBSyxHQUFMO1FBQUEsaUJBZUM7UUFkRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQzVCLElBQUksQ0FBQyxVQUFDLEdBQU87WUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztZQUMxQixLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUN4QixLQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsYUFBYSxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUN4RjsrRUFDbUU7UUFFdkQsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUMsR0FBTztZQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3pCLEtBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQ3hCLEtBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsNkJBQUssR0FBTCxVQUFNLE9BQWU7UUFDakIsT0FBTyxLQUFLLENBQUM7WUFDVCxLQUFLLEVBQUUsVUFBVTtZQUNqQixZQUFZLEVBQUUsSUFBSTtZQUNsQixPQUFPLEVBQUUsT0FBTztTQUNuQixDQUFDLENBQUM7SUFDUCxDQUFDO0lBbERRLGFBQWE7UUFOekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1NBQ3RDLENBQUM7eUNBSzRCLFdBQUksRUFBdUIsMEJBQVcsRUFBNEIseUJBQWdCO09BSm5HLGFBQWEsQ0FtRHpCO0lBQUQsb0JBQUM7Q0FBQSxBQW5ERCxJQW1EQztBQW5EWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRmxvYXRMYWJlbCB9IGZyb20gXCIuLi9mbG9hdC1sYWJlbC9mbG9hdC1sYWJlbC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2h0dHBcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vc2hhcmVkL3VzZXIubW9kZWxcIjtcclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi4vc2hhcmVkL3VzZXIuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJIb21lXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9ob21lLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICB1c2VyOiBVc2VyO1xyXG4gICAgcHJvY2Vzc2luZyA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykge1xyXG4gICAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudXNlciA9IG5ldyBVc2VyKCk7XHJcbiAgICAgICAgdGhpcy51c2VyLnVzZXJuYW1lID0gXCJ1c2VyXCI7XHJcbiAgICAgICAgdGhpcy51c2VyLnBhc3N3b3JkID0gXCJQYXNzdzByZCFcIjtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIH1cclxuXHJcbiAgICBzdWJtaXQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnVzZXIudXNlcm5hbWUgfHwgIXRoaXMudXNlci5wYXNzd29yZCkge1xyXG4gICAgICAgICAgICB0aGlzLmFsZXJ0KFwiUGxlYXNlIHByb3ZpZGUgYm90aCBhbiBlbWFpbCBhZGRyZXNzIGFuZCBwYXNzd29yZC5cIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IHRydWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9hbGVydChcIjExMjIzM1wiKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmxvZ2luKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9naW4oKSB7XHJcbiAgICAgICAgdGhpcy51c2VyU2VydmljZS5sb2dpbih0aGlzLnVzZXIpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXM6YW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIueZu+W9leaIkOWKnzpcIiwgcmVzKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi93b3Jrb3JkZXJzXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcclxuLyogICAgICAgICAgICAgICAgIHRoaXMuYWxlcnQoXCJVaWQ6IFwiICsgdGhpcy51c2VyU2VydmljZS5nZXRVaWQoKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KFwiS2V5OiBcIiArIHRoaXMudXNlclNlcnZpY2UuZ2V0S2V5KCkpOyAqL1xyXG5cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnI6YW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIueZu+W9leWksei0pTpcIixlcnIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KFwi55So5oi35ZCN5a+G56CB6ZSZ6K+vXCIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhbGVydChtZXNzYWdlOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gYWxlcnQoe1xyXG4gICAgICAgICAgICB0aXRsZTogXCJBUFAgTkFNRVwiLFxyXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIixcclxuICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==