import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as appSettings from "application-settings";
import * as app from "application";
import { RouterExtensions } from "nativescript-angular/router";
import { alert } from "ui/dialogs";

@Component({
    selector: "Creatework",
    moduleId: module.id,
    templateUrl: "./creatework.component.html",
    styleUrls: ['./creatework.component.css']
})
export class CreateworkComponent implements OnInit {

    num: string = "";
    str: string = "";
    bool: boolean = false;

    constructor(private routerExtensions: RouterExtensions) {
    }

    ngOnInit(): void {
        // second parameter to getXXX() is a default value
        const num = appSettings.getNumber("someNumber", 0);
        this.num = num === 0 ? "" : num.toString();

        this.str = appSettings.getString("someString", "");
        this.bool = appSettings.getBoolean("someBoolean", false);
    }

    /* Submit data to the database */
    submit(){
        
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    cancel(): void {
        this.routerExtensions.navigate(["/workorders"], { clearHistory: true });
    }
}
