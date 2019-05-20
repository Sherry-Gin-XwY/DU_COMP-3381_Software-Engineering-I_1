import { Injectable } from "@angular/core";

import Config from '../config';
import { HttpClient } from '@angular/common/http';

import { User } from "../shared/user.model";
import { UserService } from './user.service';

@Injectable()
export class WorkordersService {

    constructor(private http:HttpClient, private userService: UserService) {
    }

    workordersList() {
        this.alert("Uid: " + this.userService.getUid());
        this.alert("Key: " + this.userService.getKey());
        return this.http.get(Config.getUrl(
            
            "/api/workorder" + "?uid=" + this.userService.getUid()
            + "&key=" + this.userService.getKey()
            /*
            return this.http.get(Config.getUrl(
                "/api/workorder" + "?uid=" + "5cc74e2ffac2300017132a54"
                + "&key=" + "1v11GXXqy35M8dbO7l7d2kgScZ+cFOfByS4pJA2jrLqPRGs2jA7C+nvWWbjRFd62xNjRQEuPscuBtDUWsN2Ap6oKKA9cpwMe0BzcSUygT3j8jtyb6qaXn239N23uUd3JpIUSJeuVIvtTCxab4OhdKFyXayGHMbJ1SpLas4l7vOQ="
                 */
            )).toPromise().then((res:any)=>{
                console.log("第一次得到", res)
                return res;
            }).catch(this.handleErrors);
            
    }

    handleErrors(error) {
        console.error(error.message);
        return Promise.reject(error.message);
    }
    alert(message: string) {
        return alert({
            title: "APP NAME",
            okButtonText: "OK",
            message: message
        });
    }
}