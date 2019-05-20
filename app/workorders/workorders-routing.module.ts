import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { WorkordersComponent } from "./workorders.component";

const routes: Routes = [
    { path: "", component: WorkordersComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class WorkordersRoutingModule{ }