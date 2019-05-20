import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";

import { WorkordersRoutingModule } from "./workorders-routing.module";
import { WorkordersComponent } from "./workorders.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        WorkordersRoutingModule,
        NativeScriptUIListViewModule,
    ],
    declarations: [
        WorkordersComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class WorkordersModule { }
