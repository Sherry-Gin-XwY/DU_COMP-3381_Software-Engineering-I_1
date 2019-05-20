"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var user_service_1 = require("../shared/user.service");
var workorders_service_1 = require("~/shared/workorders.service");
var WorkordersComponent = /** @class */ (function () {
    function WorkordersComponent(workorderService, userService, routerExtensions) {
        this.workorderService = workorderService;
        this.userService = userService;
        this.routerExtensions = routerExtensions;
        this.items = [];
    }
    WorkordersComponent.prototype.onSearchSubmit = function (args) {
        var searchBar = args.object;
        console.log("You are searching fro " + searchBar.text);
    };
    WorkordersComponent.prototype.ngOnInit = function () {
        var _this = this;
        var self = this;
        this.workorderService.workordersList()
            .then(function (res) {
            console.log("第二次得到", res);
            function learn(item, index) {
                console.log("1212121212", item, index);
                return {
                    desc: item.aptComplex,
                    service: item.service,
                    time: item.dueDate,
                    constractor: item.orderedBy,
                    status: self.getStatus(item),
                    showName: item.occupied,
                };
            }
            _this.items = res.map(learn);
            console.log("get data data data data data");
        });
    };
    WorkordersComponent.prototype.getStatus = function (item) {
        if (item.completed) {
            return "Completed";
        }
        else {
            return "in_Progress";
        }
    };
    /*
        logout() {
            this.userService.logout();
            this.routerExtensions.navigate(["/login"], { clearHistory: true });
        } */
    /*
        onDrawerButtonTap(): void {
            const sideDrawer = <RadSideDrawer>app.getRootView();
            sideDrawer.showDrawer();
        } */
    /*
        onDetail(): void {
            this.routerExtensions.navigate(["/detail"], {
                animated: true,
                transition: {
                    name: "slideLeft",
                    duration: 200,
                    curve: "easeIn"
                }
            });
        } */
    WorkordersComponent.prototype.alert = function (message) {
        return alert({
            title: "APP NAME",
            okButtonText: "OK",
            message: message
        });
    };
    WorkordersComponent = __decorate([
        core_1.Component({
            selector: "Workorders",
            moduleId: module.id,
            templateUrl: "./workorders.component.html",
            styleUrls: ['./workorders.component.css']
        }),
        __metadata("design:paramtypes", [workorders_service_1.WorkordersService, user_service_1.UserService, router_1.RouterExtensions])
    ], WorkordersComponent);
    return WorkordersComponent;
}());
exports.WorkordersComponent = WorkordersComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya29yZGVycy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3b3Jrb3JkZXJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxzREFBK0Q7QUFPL0QsdURBQXFEO0FBQ3JELGtFQUFnRTtBQVFoRTtJQVNJLDZCQUFvQixnQkFBbUMsRUFBVSxXQUF3QixFQUFXLGdCQUFrQztRQUFsSCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQW1CO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBSHRJLFVBQUssR0FBOEcsRUFBRSxDQUFBO0lBSXJILENBQUM7SUFSRCw0Q0FBYyxHQUFkLFVBQWUsSUFBSTtRQUNmLElBQUksU0FBUyxHQUFlLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQU9ELHNDQUFRLEdBQVI7UUFBQSxpQkFvQkM7UUFuQkcsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLEVBQUU7YUFDckMsSUFBSSxDQUFDLFVBQUMsR0FBRztZQUVOLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQzFCLFNBQVMsS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLO2dCQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUE7Z0JBQ3RDLE9BQU07b0JBQ0YsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVO29CQUNyQixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87b0JBQ3JCLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTztvQkFDbEIsV0FBVyxFQUFFLElBQUksQ0FBQyxTQUFTO29CQUMzQixNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7b0JBQzVCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtpQkFDMUIsQ0FBQTtZQUNMLENBQUM7WUFDRCxLQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFBO1FBQy9DLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELHVDQUFTLEdBQVQsVUFBVSxJQUFJO1FBQ1YsSUFBRyxJQUFJLENBQUMsU0FBUyxFQUFDO1lBQ2QsT0FBTyxXQUFXLENBQUM7U0FDdEI7YUFBSTtZQUNELE9BQU8sYUFBYSxDQUFDO1NBQ3hCO0lBQ0wsQ0FBQztJQUNMOzs7O1lBSVE7SUFDUjs7OztZQUlRO0lBQ1I7Ozs7Ozs7Ozs7WUFVUTtJQUVKLG1DQUFLLEdBQUwsVUFBTSxPQUFlO1FBQ2pCLE9BQU8sS0FBSyxDQUFDO1lBQ1QsS0FBSyxFQUFFLFVBQVU7WUFDakIsWUFBWSxFQUFFLElBQUk7WUFDbEIsT0FBTyxFQUFFLE9BQU87U0FDbkIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQXJFUSxtQkFBbUI7UUFOL0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsNkJBQTZCO1lBQzFDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO1NBQzVDLENBQUM7eUNBVXdDLHNDQUFpQixFQUF1QiwwQkFBVyxFQUE2Qix5QkFBZ0I7T0FUN0gsbUJBQW1CLENBc0UvQjtJQUFELDBCQUFDO0NBQUEsQUF0RUQsSUFzRUM7QUF0RVksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBTZWFyY2hCYXIgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9zZWFyY2gtYmFyXCJcclxuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJhcHBsaWNhdGlvblwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XHJcbmltcG9ydCB7IGlzSU9TIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcclxuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiY29sb3JcIjtcclxuXHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4uL3NoYXJlZC91c2VyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgV29ya29yZGVyc1NlcnZpY2UgfSBmcm9tIFwifi9zaGFyZWQvd29ya29yZGVycy5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIldvcmtvcmRlcnNcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3dvcmtvcmRlcnMuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogWycuL3dvcmtvcmRlcnMuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBXb3Jrb3JkZXJzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHNlYXJjaFBocmFzZTogc3RyaW5nO1xyXG4gICAgb25TZWFyY2hTdWJtaXQoYXJncyk6IHZvaWQge1xyXG4gICAgICAgIGxldCBzZWFyY2hCYXIgPSA8U2VhcmNoQmFyPiBhcmdzLm9iamVjdDtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIllvdSBhcmUgc2VhcmNoaW5nIGZybyBcIiArIHNlYXJjaEJhci50ZXh0KTtcclxuICAgIH1cclxuICAgIGl0ZW1zOiB7IGRlc2M6IHN0cmluZywgc2VydmljZTogc3RyaW5nLCB0aW1lOiBzdHJpbmcsIGNvbnN0cmFjdG9yOiBzdHJpbmcsIHN0YXR1czogc3RyaW5nLCBzaG93TmFtZTogYm9vbGVhbn0gW10gPSBbXVxyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHdvcmtvcmRlclNlcnZpY2U6IFdvcmtvcmRlcnNTZXJ2aWNlLCBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSwgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyApIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy53b3Jrb3JkZXJTZXJ2aWNlLndvcmtvcmRlcnNMaXN0KClcclxuICAgICAgICAudGhlbigocmVzKT0+IHtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi56ys5LqM5qyh5b6X5YiwXCIsIHJlcyk7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGxlYXJuKGl0ZW0sIGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIjEyMTIxMjEyMTJcIiwgaXRlbSwgaW5kZXgpXHJcbiAgICAgICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAgICAgZGVzYzogaXRlbS5hcHRDb21wbGV4LFxyXG4gICAgICAgICAgICAgICAgICAgIHNlcnZpY2U6IGl0ZW0uc2VydmljZSxcclxuICAgICAgICAgICAgICAgICAgICB0aW1lOiBpdGVtLmR1ZURhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3RyYWN0b3I6IGl0ZW0ub3JkZXJlZEJ5LFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogc2VsZi5nZXRTdGF0dXMoaXRlbSksXHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd05hbWU6IGl0ZW0ub2NjdXBpZWQsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5pdGVtcyA9IHJlcy5tYXAobGVhcm4pXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0IGRhdGEgZGF0YSBkYXRhIGRhdGEgZGF0YVwiKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U3RhdHVzKGl0ZW0pIHtcclxuICAgICAgICBpZihpdGVtLmNvbXBsZXRlZCl7XHJcbiAgICAgICAgICAgIHJldHVybiBcIkNvbXBsZXRlZFwiO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICByZXR1cm4gXCJpbl9Qcm9ncmVzc1wiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuLyogXHJcbiAgICBsb2dvdXQoKSB7XHJcbiAgICAgICAgdGhpcy51c2VyU2VydmljZS5sb2dvdXQoKTtcclxuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2xvZ2luXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcclxuICAgIH0gKi9cclxuLyogXHJcbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XHJcbiAgICAgICAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XHJcbiAgICB9ICovXHJcbi8qIFxyXG4gICAgb25EZXRhaWwoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9kZXRhaWxcIl0sIHtcclxuICAgICAgICAgICAgYW5pbWF0ZWQ6IHRydWUsXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwic2xpZGVMZWZ0XCIsXHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwLFxyXG4gICAgICAgICAgICAgICAgY3VydmU6IFwiZWFzZUluXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSAqL1xyXG5cclxuICAgIGFsZXJ0KG1lc3NhZ2U6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiBhbGVydCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkFQUCBOQU1FXCIsXHJcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iXX0=