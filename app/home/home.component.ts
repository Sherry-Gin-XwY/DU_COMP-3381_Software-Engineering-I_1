import { Component, OnInit, Injectable } from "@angular/core";
import { FloatLabel } from "../float-label/float-label.component";
import { request } from "tns-core-modules/http";
import { Page } from "tns-core-modules/ui/page";
import { RouterExtensions } from "nativescript-angular/router";

import { User } from "../shared/user.model";
import { UserService } from "../shared/user.service";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    user: User;
    processing = false;

    constructor(private page: Page, private userService: UserService, private routerExtensions: RouterExtensions) {
        this.page.actionBarHidden = true;
        this.user = new User();
        this.user.username = "user";
        this.user.password = "Passw0rd!";
    }

    ngOnInit(): void {
    }

    submit() {
        if (!this.user.username || !this.user.password) {
            this.alert("Please provide both an email address and password.");
            return;
        }

        this.processing = true;
        
        //alert("112233");
        
        this.login();
    }

    login() {
        this.userService.login(this.user)
            .then((res:any) => {
                console.log("登录成功:", res);
                this.processing = false;
                this.routerExtensions.navigate(["/workorders"], { clearHistory: true });
/*                 this.alert("Uid: " + this.userService.getUid());
                this.alert("Key: " + this.userService.getKey()); */

            })
            .catch((err:any) => {
                console.log("登录失败:",err);
                this.processing = false;
                this.alert("用户名密码错误");
            });
    }

    alert(message: string) {
        return alert({
            title: "APP NAME",
            okButtonText: "OK",
            message: message
        });
    }
}
