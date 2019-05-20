"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var appSettings = require("application-settings");
var app = require("application");
var router_1 = require("nativescript-angular/router");
var CreateworkComponent = /** @class */ (function () {
    function CreateworkComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
        this.num = "";
        this.str = "";
        this.bool = false;
    }
    CreateworkComponent.prototype.ngOnInit = function () {
        // second parameter to getXXX() is a default value
        var num = appSettings.getNumber("someNumber", 0);
        this.num = num === 0 ? "" : num.toString();
        this.str = appSettings.getString("someString", "");
        this.bool = appSettings.getBoolean("someBoolean", false);
    };
    /* Submit data to the database */
    CreateworkComponent.prototype.submit = function () {
    };
    CreateworkComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    CreateworkComponent.prototype.cancel = function () {
        this.routerExtensions.navigate(["/workorders"], { clearHistory: true });
    };
    CreateworkComponent = __decorate([
        core_1.Component({
            selector: "Creatework",
            moduleId: module.id,
            templateUrl: "./creatework.component.html",
            styleUrls: ['./creatework.component.css']
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], CreateworkComponent);
    return CreateworkComponent;
}());
exports.CreateworkComponent = CreateworkComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRld29yay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjcmVhdGV3b3JrLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUVsRCxrREFBb0Q7QUFDcEQsaUNBQW1DO0FBQ25DLHNEQUErRDtBQVMvRDtJQU1JLDZCQUFvQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUp0RCxRQUFHLEdBQVcsRUFBRSxDQUFDO1FBQ2pCLFFBQUcsR0FBVyxFQUFFLENBQUM7UUFDakIsU0FBSSxHQUFZLEtBQUssQ0FBQztJQUd0QixDQUFDO0lBRUQsc0NBQVEsR0FBUjtRQUNJLGtEQUFrRDtRQUNsRCxJQUFNLEdBQUcsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRTNDLElBQUksQ0FBQyxHQUFHLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLElBQUksR0FBRyxXQUFXLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsaUNBQWlDO0lBQ2pDLG9DQUFNLEdBQU47SUFFQSxDQUFDO0lBRUQsK0NBQWlCLEdBQWpCO1FBQ0ksSUFBTSxVQUFVLEdBQWtCLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwRCxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVELG9DQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsYUFBYSxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBOUJRLG1CQUFtQjtRQU4vQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFlBQVk7WUFDdEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSw2QkFBNkI7WUFDMUMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7U0FDNUMsQ0FBQzt5Q0FPd0MseUJBQWdCO09BTjdDLG1CQUFtQixDQStCL0I7SUFBRCwwQkFBQztDQUFBLEFBL0JELElBK0JDO0FBL0JZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXJcIjtcbmltcG9ydCAqIGFzIGFwcFNldHRpbmdzIGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJhcHBsaWNhdGlvblwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IGFsZXJ0IH0gZnJvbSBcInVpL2RpYWxvZ3NcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiQ3JlYXRld29ya1wiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9jcmVhdGV3b3JrLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbJy4vY3JlYXRld29yay5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ3JlYXRld29ya0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBudW06IHN0cmluZyA9IFwiXCI7XG4gICAgc3RyOiBzdHJpbmcgPSBcIlwiO1xuICAgIGJvb2w6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICAvLyBzZWNvbmQgcGFyYW1ldGVyIHRvIGdldFhYWCgpIGlzIGEgZGVmYXVsdCB2YWx1ZVxuICAgICAgICBjb25zdCBudW0gPSBhcHBTZXR0aW5ncy5nZXROdW1iZXIoXCJzb21lTnVtYmVyXCIsIDApO1xuICAgICAgICB0aGlzLm51bSA9IG51bSA9PT0gMCA/IFwiXCIgOiBudW0udG9TdHJpbmcoKTtcblxuICAgICAgICB0aGlzLnN0ciA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcInNvbWVTdHJpbmdcIiwgXCJcIik7XG4gICAgICAgIHRoaXMuYm9vbCA9IGFwcFNldHRpbmdzLmdldEJvb2xlYW4oXCJzb21lQm9vbGVhblwiLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgLyogU3VibWl0IGRhdGEgdG8gdGhlIGRhdGFiYXNlICovXG4gICAgc3VibWl0KCl7XG4gICAgICAgIFxuICAgIH1cblxuICAgIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XG4gICAgICAgIHNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xuICAgIH1cblxuICAgIGNhbmNlbCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi93b3Jrb3JkZXJzXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICB9XG59XG4iXX0=