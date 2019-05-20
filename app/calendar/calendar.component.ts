import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as appSettings from "application-settings";
import * as app from "application";
import { RouterExtensions } from "nativescript-angular/router";
import { alert } from "ui/dialogs";
import * as calendarModule from "nativescript-ui-calendar";
import { Color } from "tns-core-modules/color/color";

@Component({
    selector: "Calendar",
    moduleId: module.id,
    templateUrl: "./calendar.component.html",
    styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

    num: string = "";
    str: string = "";
    bool: boolean = false;
    calendarEvents = [];

    

    constructor(private routerExtensions: RouterExtensions) {
    
        // source from https://play.nativescript.org/?template=play-ng&id=DKSI1b&v=10
        let events = [];
        let now = new Date();
        let startDate;
        let endDate;
        let colors = [new Color(200, 188, 26, 214), new Color(220, 255, 109, 130), new Color(255, 55, 45, 255), new Color(199, 17, 227, 10), new Color(255, 255, 54, 3)];
        for (let i = 1; i < 10; i++) {
            startDate = new Date(now.getFullYear(), now.getMonth(), i * 2, 1);
            endDate = new Date(now.getFullYear(), now.getMonth(), (i * 2), 3);
            let event = new calendarModule.CalendarEvent("event " + i, startDate, endDate, false, colors[i * 10 % (colors.length - 1)]);
            events.push(event);
            if (i % 3 == 0) {
                event = new calendarModule.CalendarEvent("second " + i, startDate, endDate, true, colors[i * 5 % (colors.length - 1)]);
                events.push(event);
            }
        }
        this.calendarEvents = events;
    
    }

    ngOnInit(): void {
        // second parameter to getXXX() is a default value
        const num = appSettings.getNumber("someNumber", 0);
        this.num = num === 0 ? "" : num.toString();

        this.str = appSettings.getString("someString", "");
        this.bool = appSettings.getBoolean("someBoolean", false);
    }

    createWorkorder(){
        this.routerExtensions.navigate(["/creatework"], { clearHistory: true });
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    home(){
        this.routerExtensions.navigate(["/home"], { clearHistory: true });
    }

}
