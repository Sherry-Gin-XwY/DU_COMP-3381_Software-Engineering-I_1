import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { DetailComponent } from "./detail/detail.component";


const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadChildren: "./home/home.module#HomeModule" },
    { path: "workorders", loadChildren: "./workorders/workorders.module#WorkordersModule" },
    { path: "creatework", loadChildren: "./creatework/creatwork.module#CreateworkModule" },
    { path: "calendar", loadChildren: "./calendar/calendar.module#CalendarModule" },
    { path: "detail", component: DetailComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
