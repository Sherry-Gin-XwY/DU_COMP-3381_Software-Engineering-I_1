
import { Component } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { Page } from "tns-core-modules/ui/page";
import { RouterExtensions } from "nativescript-angular/router";

import { UserService } from "./shared/user.service";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent {

    constructor(private userService: UserService, private routerExtensions: RouterExtensions, private page: Page) {}

    home(){
        this.routerExtensions.navigate(["/workorders"], { clearHistory: true });
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.closeDrawer();
    }

    
    creatework() {
        this.routerExtensions.navigate(["/creatework"], { clearHistory: true });
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.closeDrawer();
    }

    calendar(){
        this.routerExtensions.navigate(["/calendar"], { clearHistory: true });
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.closeDrawer();
    }

    logout() {
        this.routerExtensions.navigate(["/home"], { clearHistory: true });
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.closeDrawer();
    }
}
