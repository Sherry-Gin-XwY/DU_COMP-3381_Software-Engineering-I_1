import { Injectable } from "@angular/core";
import { request } from "tns-core-modules/http";
import { User } from "./user.model";

import Config from './../config';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService{
    private uid:string;
    private key:string;
    constructor(private http:HttpClient){
    }

    /* 修改 API */
    login(user: User) {
        return this.http.post(Config.getUrl("/api/login"), {
            username:user.username,
            password:user.password,
        }).toPromise().then((res:any)=> {
            //保存数据
            this.uid = res.uid;
            this.key = res.key;
            console.log("saved uid and keys");
        }).catch(this.handleErrors);
    }

    getUid(){
        if (!this.uid)
            console.error("GET UID called but no uid");
        return this.uid;
    }

    getKey(){
        return this.key;
    }


    handleErrors(error) {
        console.error(error.message);
        return Promise.reject(error.message);
    }
    
}