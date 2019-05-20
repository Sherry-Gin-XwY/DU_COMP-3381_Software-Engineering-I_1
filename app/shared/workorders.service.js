"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var config_1 = require("../config");
var http_1 = require("@angular/common/http");
var user_service_1 = require("./user.service");
var WorkordersService = /** @class */ (function () {
    function WorkordersService(http, userService) {
        this.http = http;
        this.userService = userService;
    }
    WorkordersService.prototype.workordersList = function () {
        this.alert("Uid: " + this.userService.getUid());
        this.alert("Key: " + this.userService.getKey());
        return this.http.get(config_1.default.getUrl("/api/workorder" + "?uid=" + this.userService.getUid()
            + "&key=" + this.userService.getKey()
        /*
        return this.http.get(Config.getUrl(
            "/api/workorder" + "?uid=" + "5cc74e2ffac2300017132a54"
            + "&key=" + "1v11GXXqy35M8dbO7l7d2kgScZ+cFOfByS4pJA2jrLqPRGs2jA7C+nvWWbjRFd62xNjRQEuPscuBtDUWsN2Ap6oKKA9cpwMe0BzcSUygT3j8jtyb6qaXn239N23uUd3JpIUSJeuVIvtTCxab4OhdKFyXayGHMbJ1SpLas4l7vOQ="
             */
        )).toPromise().then(function (res) {
            console.log("第一次得到", res);
            return res;
        }).catch(this.handleErrors);
    };
    WorkordersService.prototype.handleErrors = function (error) {
        console.error(error.message);
        return Promise.reject(error.message);
    };
    WorkordersService.prototype.alert = function (message) {
        return alert({
            title: "APP NAME",
            okButtonText: "OK",
            message: message
        });
    };
    WorkordersService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient, user_service_1.UserService])
    ], WorkordersService);
    return WorkordersService;
}());
exports.WorkordersService = WorkordersService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya29yZGVycy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid29ya29yZGVycy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRTNDLG9DQUErQjtBQUMvQiw2Q0FBa0Q7QUFHbEQsK0NBQTZDO0FBRzdDO0lBRUksMkJBQW9CLElBQWUsRUFBVSxXQUF3QjtRQUFqRCxTQUFJLEdBQUosSUFBSSxDQUFXO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFDckUsQ0FBQztJQUVELDBDQUFjLEdBQWQ7UUFDSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQ2hELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQU0sQ0FBQyxNQUFNLENBRTlCLGdCQUFnQixHQUFHLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRTtjQUNwRCxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUU7UUFDckM7Ozs7ZUFJTztTQUNOLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFPO1lBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1lBQ3pCLE9BQU8sR0FBRyxDQUFDO1FBQ2YsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUVwQyxDQUFDO0lBRUQsd0NBQVksR0FBWixVQUFhLEtBQUs7UUFDZCxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3QixPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFDRCxpQ0FBSyxHQUFMLFVBQU0sT0FBZTtRQUNqQixPQUFPLEtBQUssQ0FBQztZQUNULEtBQUssRUFBRSxVQUFVO1lBQ2pCLFlBQVksRUFBRSxJQUFJO1lBQ2xCLE9BQU8sRUFBRSxPQUFPO1NBQ25CLENBQUMsQ0FBQztJQUNQLENBQUM7SUFsQ1EsaUJBQWlCO1FBRDdCLGlCQUFVLEVBQUU7eUNBR2dCLGlCQUFVLEVBQXVCLDBCQUFXO09BRjVELGlCQUFpQixDQW1DN0I7SUFBRCx3QkFBQztDQUFBLEFBbkNELElBbUNDO0FBbkNZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW1wb3J0IENvbmZpZyBmcm9tICcuLi9jb25maWcnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5cclxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi9zaGFyZWQvdXNlci5tb2RlbFwiO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4vdXNlci5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFdvcmtvcmRlcnNTZXJ2aWNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6SHR0cENsaWVudCwgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UpIHtcclxuICAgIH1cclxuXHJcbiAgICB3b3Jrb3JkZXJzTGlzdCgpIHtcclxuICAgICAgICB0aGlzLmFsZXJ0KFwiVWlkOiBcIiArIHRoaXMudXNlclNlcnZpY2UuZ2V0VWlkKCkpO1xyXG4gICAgICAgIHRoaXMuYWxlcnQoXCJLZXk6IFwiICsgdGhpcy51c2VyU2VydmljZS5nZXRLZXkoKSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoQ29uZmlnLmdldFVybChcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFwiL2FwaS93b3Jrb3JkZXJcIiArIFwiP3VpZD1cIiArIHRoaXMudXNlclNlcnZpY2UuZ2V0VWlkKClcclxuICAgICAgICAgICAgKyBcIiZrZXk9XCIgKyB0aGlzLnVzZXJTZXJ2aWNlLmdldEtleSgpXHJcbiAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KENvbmZpZy5nZXRVcmwoXHJcbiAgICAgICAgICAgICAgICBcIi9hcGkvd29ya29yZGVyXCIgKyBcIj91aWQ9XCIgKyBcIjVjYzc0ZTJmZmFjMjMwMDAxNzEzMmE1NFwiXHJcbiAgICAgICAgICAgICAgICArIFwiJmtleT1cIiArIFwiMXYxMUdYWHF5MzVNOGRiTzdsN2Qya2dTY1orY0ZPZkJ5UzRwSkEyanJMcVBSR3MyakE3QytudldXYmpSRmQ2MnhOalJRRXVQc2N1QnREVVdzTjJBcDZvS0tBOWNwd01lMEJ6Y1NVeWdUM2o4anR5YjZxYVhuMjM5TjIzdVVkM0pwSVVTSmV1Vkl2dFRDeGFiNE9oZEtGeVhheUdITWJKMVNwTGFzNGw3dk9RPVwiXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgKSkudG9Qcm9taXNlKCkudGhlbigocmVzOmFueSk9PntcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi56ys5LiA5qyh5b6X5YiwXCIsIHJlcylcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcclxuICAgICAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlRXJyb3JzKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvci5tZXNzYWdlKTtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgICBhbGVydChtZXNzYWdlOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gYWxlcnQoe1xyXG4gICAgICAgICAgICB0aXRsZTogXCJBUFAgTkFNRVwiLFxyXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIixcclxuICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il19