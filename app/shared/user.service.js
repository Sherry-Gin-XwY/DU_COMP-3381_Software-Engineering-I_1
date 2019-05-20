"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var config_1 = require("./../config");
var http_1 = require("@angular/common/http");
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    /* 修改 API */
    UserService.prototype.login = function (user) {
        var _this = this;
        return this.http.post(config_1.default.getUrl("/api/login"), {
            username: user.username,
            password: user.password,
        }).toPromise().then(function (res) {
            //保存数据
            _this.uid = res.uid;
            _this.key = res.key;
            console.log("saved uid and keys");
        }).catch(this.handleErrors);
    };
    UserService.prototype.getUid = function () {
        if (!this.uid)
            console.error("GET UID called but no uid");
        return this.uid;
    };
    UserService.prototype.getKey = function () {
        return this.key;
    };
    UserService.prototype.handleErrors = function (error) {
        console.error(error.message);
        return Promise.reject(error.message);
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBSTNDLHNDQUFpQztBQUNqQyw2Q0FBa0Q7QUFHbEQ7SUFHSSxxQkFBb0IsSUFBZTtRQUFmLFNBQUksR0FBSixJQUFJLENBQVc7SUFDbkMsQ0FBQztJQUVELFlBQVk7SUFDWiwyQkFBSyxHQUFMLFVBQU0sSUFBVTtRQUFoQixpQkFVQztRQVRHLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFDL0MsUUFBUSxFQUFDLElBQUksQ0FBQyxRQUFRO1lBQ3RCLFFBQVEsRUFBQyxJQUFJLENBQUMsUUFBUTtTQUN6QixDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBTztZQUN4QixNQUFNO1lBQ04sS0FBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDO1lBQ25CLEtBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQztZQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDdEMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsNEJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRztZQUNULE9BQU8sQ0FBQyxLQUFLLENBQUMsMkJBQTJCLENBQUMsQ0FBQztRQUMvQyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDcEIsQ0FBQztJQUVELDRCQUFNLEdBQU47UUFDSSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDcEIsQ0FBQztJQUdELGtDQUFZLEdBQVosVUFBYSxLQUFLO1FBQ2QsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0IsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBakNRLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTt5Q0FJZ0IsaUJBQVU7T0FIMUIsV0FBVyxDQW1DdkI7SUFBRCxrQkFBQztDQUFBLEFBbkNELElBbUNDO0FBbkNZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9odHRwXCI7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi91c2VyLm1vZGVsXCI7XHJcblxyXG5pbXBvcnQgQ29uZmlnIGZyb20gJy4vLi4vY29uZmlnJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNle1xyXG4gICAgcHJpdmF0ZSB1aWQ6c3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBrZXk6c3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOkh0dHBDbGllbnQpe1xyXG4gICAgfVxyXG5cclxuICAgIC8qIOS/ruaUuSBBUEkgKi9cclxuICAgIGxvZ2luKHVzZXI6IFVzZXIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoQ29uZmlnLmdldFVybChcIi9hcGkvbG9naW5cIiksIHtcclxuICAgICAgICAgICAgdXNlcm5hbWU6dXNlci51c2VybmFtZSxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6dXNlci5wYXNzd29yZCxcclxuICAgICAgICB9KS50b1Byb21pc2UoKS50aGVuKChyZXM6YW55KT0+IHtcclxuICAgICAgICAgICAgLy/kv53lrZjmlbDmja5cclxuICAgICAgICAgICAgdGhpcy51aWQgPSByZXMudWlkO1xyXG4gICAgICAgICAgICB0aGlzLmtleSA9IHJlcy5rZXk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2F2ZWQgdWlkIGFuZCBrZXlzXCIpO1xyXG4gICAgICAgIH0pLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRVaWQoKXtcclxuICAgICAgICBpZiAoIXRoaXMudWlkKVxyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiR0VUIFVJRCBjYWxsZWQgYnV0IG5vIHVpZFwiKTtcclxuICAgICAgICByZXR1cm4gdGhpcy51aWQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0S2V5KCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMua2V5O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBoYW5kbGVFcnJvcnMoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvci5tZXNzYWdlKTtcclxuICAgIH1cclxuICAgIFxyXG59Il19