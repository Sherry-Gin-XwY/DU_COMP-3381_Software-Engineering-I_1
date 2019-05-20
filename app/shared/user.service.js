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
        }).catch(this.handleErrors);
    };
    UserService.prototype.getKey = function () {
        return this.key;
    };
    UserService.prototype.getUid = function () {
        return this.uid;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBSTNDLHNDQUFpQztBQUNqQyw2Q0FBa0Q7QUFHbEQ7SUFHSSxxQkFBb0IsSUFBZTtRQUFmLFNBQUksR0FBSixJQUFJLENBQVc7SUFBRSxDQUFDO0lBRXRDLFlBQVk7SUFDWiwyQkFBSyxHQUFMLFVBQU0sSUFBVTtRQUFoQixpQkFTQztRQVJHLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFDL0MsUUFBUSxFQUFDLElBQUksQ0FBQyxRQUFRO1lBQ3RCLFFBQVEsRUFBQyxJQUFJLENBQUMsUUFBUTtTQUN6QixDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBTztZQUN4QixNQUFNO1lBQ04sS0FBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDO1lBQ25CLEtBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCw0QkFBTSxHQUFOO1FBQ0ksT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ3BCLENBQUM7SUFFRCw0QkFBTSxHQUFOO1FBQ0ksT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ3BCLENBQUM7SUFFRCxrQ0FBWSxHQUFaLFVBQWEsS0FBSztRQUNkLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdCLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQTVCUSxXQUFXO1FBRHZCLGlCQUFVLEVBQUU7eUNBSWdCLGlCQUFVO09BSDFCLFdBQVcsQ0E4QnZCO0lBQUQsa0JBQUM7Q0FBQSxBQTlCRCxJQThCQztBQTlCWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvaHR0cFwiO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4vdXNlci5tb2RlbFwiO1xyXG5cclxuaW1wb3J0IENvbmZpZyBmcm9tICcuLy4uL2NvbmZpZyc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZXtcclxuICAgIHByaXZhdGUgdWlkOnN0cmluZztcclxuICAgIHByaXZhdGUga2V5OnN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDpIdHRwQ2xpZW50KXt9XHJcblxyXG4gICAgLyog5L+u5pS5IEFQSSAqL1xyXG4gICAgbG9naW4odXNlcjogVXNlcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChDb25maWcuZ2V0VXJsKFwiL2FwaS9sb2dpblwiKSwge1xyXG4gICAgICAgICAgICB1c2VybmFtZTp1c2VyLnVzZXJuYW1lLFxyXG4gICAgICAgICAgICBwYXNzd29yZDp1c2VyLnBhc3N3b3JkLFxyXG4gICAgICAgIH0pLnRvUHJvbWlzZSgpLnRoZW4oKHJlczphbnkpPT4ge1xyXG4gICAgICAgICAgICAvL+S/neWtmOaVsOaNrlxyXG4gICAgICAgICAgICB0aGlzLnVpZCA9IHJlcy51aWQ7XHJcbiAgICAgICAgICAgIHRoaXMua2V5ID0gcmVzLmtleTtcclxuICAgICAgICB9KS5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0S2V5KCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMua2V5O1xyXG4gICAgfVxyXG5cclxuICAgIGdldFVpZCgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLnVpZDtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVFcnJvcnMoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvci5tZXNzYWdlKTtcclxuICAgIH1cclxuICAgIFxyXG59Il19