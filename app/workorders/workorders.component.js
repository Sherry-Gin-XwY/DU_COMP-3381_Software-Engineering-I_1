"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var app = require("application");
var user_service_1 = require("../shared/user.service");
var workorders_service_1 = require("~/shared/workorders.service");
var WorkordersComponent = /** @class */ (function () {
    function WorkordersComponent(workorderService, userService, routerExtensions) {
        this.workorderService = workorderService;
        this.userService = userService;
        this.routerExtensions = routerExtensions;
        this.items = [
            { desc: "Montair #415", service: "Cleaning", time: "6/12/19", constractor: "", status: "pending", showName: true },
            { desc: "Test Apartment Complex #101", service: "Painting", time: "11/13/19", constractor: "John S.", status: "Due", showName: true },
            { desc: "Test Apartment Complex 2 # 201", service: "Draining", time: "6/12/19", constractor: "John S.", status: "Completed", showName: true },
            { desc: "Test Apartment Complex 2 # 201", service: "Draining", time: "6/18/19", constractor: "", status: "in_Progress", showName: false },
            { desc: "2411 E Asubry Ave  #415", service: "Texture Repair", time: "6/12/19", constractor: "", status: "pending", showName: false },
            { desc: "2411 E Asubry Ave  #415", service: "Drywall Repair", time: "6/12/19", constractor: "John S.", status: "pending", showName: true },
            { desc: "2411 E Asubry Ave  #415", service: "Cleaning", time: "6/12/19", constractor: "", status: "pending", showName: false },
            { desc: "Montair #415", service: "Custom", time: "6/12/19", constractor: "", status: "pending", showName: false },
            { desc: "2411 E Asubry Ave  #415", service: "Custom", time: "6/12/19", constractor: "John S.", status: "pending", showName: true },
            { desc: "Montair #415", service: "Cleaning", time: "6/12/19", constractor: "", status: "pending", showName: false },
            { desc: "Montair #415", service: "Others", time: "6/12/19", constractor: "", status: "pending", showName: false }
        ];
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
    WorkordersComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    WorkordersComponent.prototype.onDetail = function () {
        this.routerExtensions.navigate(["/detail"], {
            animated: true,
            transition: {
                name: "slideLeft",
                duration: 200,
                curve: "easeIn"
            }
        });
    };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya29yZGVycy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3b3Jrb3JkZXJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxzREFBK0Q7QUFFL0QsaUNBQW1DO0FBS25DLHVEQUFxRDtBQUNyRCxrRUFBZ0U7QUFRaEU7SUFzQkksNkJBQW9CLGdCQUFtQyxFQUFVLFdBQXdCLEVBQVcsZ0JBQWtDO1FBQWxILHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBbUI7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFXLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFoQnRJLFVBQUssR0FBOEc7WUFFL0csRUFBRSxJQUFJLEVBQUMsY0FBYyxFQUFFLE9BQU8sRUFBQyxVQUFVLEVBQUUsSUFBSSxFQUFDLFNBQVMsRUFBRSxXQUFXLEVBQUMsRUFBRSxFQUFFLE1BQU0sRUFBQyxTQUFTLEVBQUUsUUFBUSxFQUFDLElBQUksRUFBQztZQUMzRyxFQUFFLElBQUksRUFBQyw2QkFBNkIsRUFBRSxPQUFPLEVBQUMsVUFBVSxFQUFFLElBQUksRUFBQyxVQUFVLEVBQUUsV0FBVyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUMsS0FBSyxFQUFFLFFBQVEsRUFBQyxJQUFJLEVBQUM7WUFDOUgsRUFBRSxJQUFJLEVBQUMsZ0NBQWdDLEVBQUUsT0FBTyxFQUFDLFVBQVUsRUFBRSxJQUFJLEVBQUMsU0FBUyxFQUFFLFdBQVcsRUFBQyxTQUFTLEVBQUUsTUFBTSxFQUFDLFdBQVcsRUFBRSxRQUFRLEVBQUMsSUFBSSxFQUFDO1lBQ3RJLEVBQUUsSUFBSSxFQUFDLGdDQUFnQyxFQUFFLE9BQU8sRUFBQyxVQUFVLEVBQUUsSUFBSSxFQUFDLFNBQVMsRUFBRSxXQUFXLEVBQUMsRUFBRSxFQUFFLE1BQU0sRUFBQyxhQUFhLEVBQUUsUUFBUSxFQUFDLEtBQUssRUFBQztZQUNsSSxFQUFFLElBQUksRUFBQyx5QkFB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QUNELE9BQU8sYUFBYSxDQUFDO1NBQ3hCO0lBQ0wsQ0FBQztJQUVELCtDQUFpQixHQUFqQjtRQUNJLElBQU0sVUFBVSxHQUFrQixHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEQsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFHRCxzQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3hDLFFBQVEsRUFBRSxJQUFJO1lBQ2QsVUFBVSxFQUFFO2dCQUNSLElBQUksRUFBRSxXQUFXO2dCQUNqQixRQUFRLEVBQUUsR0FBRztnQkFDYixLQUFLLEVBQUUsUUFBUTthQUNsQjtTQUNKLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxtQ0FBSyxHQUFMLFVBQU0sT0FBZTtRQUNqQixPQUFPLEtBQUssQ0FBQztZQUNULEtBQUssRUFBRSxVQUFVO1lBQ2pCLFlBQVksRUFBRSxJQUFJO1lBQ2xCLE9BQU8sRUFBRSxPQUFPO1NBQ25CLENBQUMsQ0FBQztJQUNQLENBQUM7SUE5RVEsbUJBQW1CO1FBTi9CLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsWUFBWTtZQUN0QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDZCQUE2QjtZQUMxQyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztTQUM1QyxDQUFDO3lDQXVCd0Msc0NBQWlCLEVBQXVCLDBCQUFXLEVBQTZCLHlCQUFnQjtPQXRCN0gsbUJBQW1CLENBK0UvQjtJQUFELDBCQUFDO0NBQUEsQUEvRUQsSUErRUM7QUEvRVksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBTZWFyY2hCYXIgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9zZWFyY2gtYmFyXCJcclxuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJhcHBsaWNhdGlvblwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XHJcbmltcG9ydCB7IGlzSU9TIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcclxuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiY29sb3JcIjtcclxuXHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4uL3NoYXJlZC91c2VyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgV29ya29yZGVyc1NlcnZpY2UgfSBmcm9tIFwifi9zaGFyZWQvd29ya29yZGVycy5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIldvcmtvcmRlcnNcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3dvcmtvcmRlcnMuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogWycuL3dvcmtvcmRlcnMuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBXb3Jrb3JkZXJzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHNlYXJjaFBocmFzZTogc3RyaW5nO1xyXG4gICAgb25TZWFyY2hTdWJtaXQoYXJncyk6IHZvaWQge1xyXG4gICAgICAgIGxldCBzZWFyY2hCYXIgPSA8U2VhcmNoQmFyPiBhcmdzLm9iamVjdDtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIllvdSBhcmUgc2VhcmNoaW5nIGZybyBcIiArIHNlYXJjaEJhci50ZXh0KTtcclxuICAgIH1cclxuICAgIGl0ZW1zOiB7IGRlc2M6IHN0cmluZywgc2VydmljZTogc3RyaW5nLCB0aW1lOiBzdHJpbmcsIGNvbnN0cmFjdG9yOiBzdHJpbmcsIHN0YXR1czogc3RyaW5nLCBzaG93TmFtZTogYm9vbGVhbn0gW10gPSBbXHJcbiAgICAgICAgXHJcbiAgICAgICAgeyBkZXNjOlwiTW9udGFpciAjNDE1XCIsIHNlcnZpY2U6XCJDbGVhbmluZ1wiLCB0aW1lOlwiNi8xMi8xOVwiLCBjb25zdHJhY3RvcjpcIlwiLCBzdGF0dXM6XCJwZW5kaW5nXCIsIHNob3dOYW1lOnRydWV9LFxyXG4gICAgICAgIHsgZGVzYzpcIlRlc3QgQXBhcnRtZW50IENvbXBsZXggIzEwMVwiLCBzZXJ2aWNlOlwiUGFpbnRpbmdcIiwgdGltZTpcIjExLzEzLzE5XCIsIGNvbnN0cmFjdG9yOlwiSm9obiBTLlwiLCBzdGF0dXM6XCJEdWVcIiwgc2hvd05hbWU6dHJ1ZX0sXHJcbiAgICAgICAgeyBkZXNjOlwiVGVzdCBBcGFydG1lbnQgQ29tcGxleCAyICMgMjAxXCIsIHNlcnZpY2U6XCJEcmFpbmluZ1wiLCB0aW1lOlwiNi8xMi8xOVwiLCBjb25zdHJhY3RvcjpcIkpvaG4gUy5cIiwgc3RhdHVzOlwiQ29tcGxldGVkXCIsIHNob3dOYW1lOnRydWV9LFxyXG4gICAgICAgIHsgZGVzYzpcIlRlc3QgQXBhcnRtZW50IENvbXBsZXggMiAjIDIwMVwiLCBzZXJ2aWNlOlwiRHJhaW5pbmdcIiwgdGltZTpcIjYvMTgvMTlcIiwgY29uc3RyYWN0b3I6XCJcIiwgc3RhdHVzOlwiaW5fUHJvZ3Jlc3NcIiwgc2hvd05hbWU6ZmFsc2V9LFxyXG4gICAgICAgIHsgZGVzYzpcIjI0MTEgRSBBc3VicnkgQXZlICAjNDE1XCIsIHNlcnZpY2U6XCJUZXh0dXJlIFJlcGFpclwiLCB0aW1lOlwiNi8xMi8xOVwiLCBjb25zdHJhY3RvcjpcIlwiLCBzdGF0dXM6XCJwZW5kaW5nXCIsIHNob3dOYW1lOmZhbHNlfSxcclxuICAgICAgICB7IGRlc2M6XCIyNDExIEUgQXN1YnJ5IEF2ZSAgIzQxNVwiLCBzZXJ2aWNlOlwiRHJ5d2FsbCBSZXBhaXJcIiwgdGltZTpcIjYvMTIvMTlcIiwgY29uc3RyYWN0b3I6XCJKb2huIFMuXCIsIHN0YXR1czpcInBlbmRpbmdcIiwgc2hvd05hbWU6dHJ1ZX0sXHJcbiAgICAgICAgeyBkZXNjOlwiMjQxMSBFIEFzdWJyeSBBdmUgICM0MTVcIiwgc2VydmljZTpcIkNsZWFuaW5nXCIsIHRpbWU6XCI2LzEyLzE5XCIsIGNvbnN0cmFjdG9yOlwiXCIsIHN0YXR1czpcInBlbmRpbmdcIiwgc2hvd05hbWU6ZmFsc2V9LFxyXG4gICAgICAgIHsgZGVzYzpcIk1vbnRhaXIgIzQxNVwiLCBzZXJ2aWNlOlwiQ3VzdG9tXCIsIHRpbWU6XCI2LzEyLzE5XCIsIGNvbnN0cmFjdG9yOlwiXCIsIHN0YXR1czpcInBlbmRpbmdcIiwgc2hvd05hbWU6ZmFsc2V9LFxyXG4gICAgICAgIHsgZGVzYzpcIjI0MTEgRSBBc3VicnkgQXZlICAjNDE1XCIsIHNlcnZpY2U6XCJDdXN0b21cIiwgdGltZTpcIjYvMTIvMTlcIiwgY29uc3RyYWN0b3I6XCJKb2huIFMuXCIsIHN0YXR1czpcInBlbmRpbmdcIiwgc2hvd05hbWU6dHJ1ZX0sXHJcbiAgICAgICAgeyBkZXNjOlwiTW9udGFpciAjNDE1XCIsIHNlcnZpY2U6XCJDbGVhbmluZ1wiLCB0aW1lOlwiNi8xMi8xOVwiLCBjb25zdHJhY3RvcjpcIlwiLCBzdGF0dXM6XCJwZW5kaW5nXCIsIHNob3dOYW1lOmZhbHNlfSxcclxuICAgICAgICB7IGRlc2M6XCJNb250YWlyICM0MTVcIiwgc2VydmljZTpcIk90aGVyc1wiLCB0aW1lOlwiNi8xMi8xOVwiLCBjb25zdHJhY3RvcjpcIlwiLCBzdGF0dXM6XCJwZW5kaW5nXCIsIHNob3dOYW1lOmZhbHNlfVxyXG4gICAgXVxyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHdvcmtvcmRlclNlcnZpY2U6IFdvcmtvcmRlcnNTZXJ2aWNlLCBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSwgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyApIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy53b3Jrb3JkZXJTZXJ2aWNlLndvcmtvcmRlcnNMaXN0KClcclxuICAgICAgICAudGhlbigocmVzKT0+IHtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi56ys5LqM5qyh5b6X5YiwXCIsIHJlcyk7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGxlYXJuKGl0ZW0sIGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIjEyMTIxMjEyMTJcIiwgaXRlbSwgaW5kZXgpXHJcbiAgICAgICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAgICAgZGVzYzogaXRlbS5hcHRDb21wbGV4LFxyXG4gICAgICAgICAgICAgICAgICAgIHNlcnZpY2U6IGl0ZW0uc2VydmljZSxcclxuICAgICAgICAgICAgICAgICAgICB0aW1lOiBpdGVtLmR1ZURhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3RyYWN0b3I6IGl0ZW0ub3JkZXJlZEJ5LFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogc2VsZi5nZXRTdGF0dXMoaXRlbSksXHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd05hbWU6IGl0ZW0ub2NjdXBpZWQsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5pdGVtcyA9IHJlcy5tYXAobGVhcm4pXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0IGRhdGEgZGF0YSBkYXRhIGRhdGEgZGF0YVwiKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U3RhdHVzKGl0ZW0pIHtcclxuICAgICAgICBpZihpdGVtLmNvbXBsZXRlZCl7XHJcbiAgICAgICAgICAgIHJldHVybiBcIkNvbXBsZXRlZFwiO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICByZXR1cm4gXCJpbl9Qcm9ncmVzc1wiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XHJcbiAgICAgICAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIG9uRGV0YWlsKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvZGV0YWlsXCJdLCB7XHJcbiAgICAgICAgICAgIGFuaW1hdGVkOiB0cnVlLFxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcInNsaWRlTGVmdFwiLFxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMCxcclxuICAgICAgICAgICAgICAgIGN1cnZlOiBcImVhc2VJblwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhbGVydChtZXNzYWdlOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gYWxlcnQoe1xyXG4gICAgICAgICAgICB0aXRsZTogXCJBUFAgTkFNRVwiLFxyXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIixcclxuICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il19