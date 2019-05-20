"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var forms_1 = require("nativescript-angular/forms");
var angular_1 = require("nativescript-ui-listview/angular");
var workorders_routing_module_1 = require("./workorders-routing.module");
var workorders_component_1 = require("./workorders.component");
var WorkordersModule = /** @class */ (function () {
    function WorkordersModule() {
    }
    WorkordersModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                forms_1.NativeScriptFormsModule,
                workorders_routing_module_1.WorkordersRoutingModule,
                angular_1.NativeScriptUIListViewModule,
            ],
            declarations: [
                workorders_component_1.WorkordersComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], WorkordersModule);
    return WorkordersModule;
}());
exports.WorkordersModule = WorkordersModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya29yZGVycy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3b3Jrb3JkZXJzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxzREFBdUU7QUFDdkUsb0RBQXFFO0FBQ3JFLDREQUFnRjtBQUVoRix5RUFBc0U7QUFDdEUsK0RBQTZEO0FBZ0I3RDtJQUFBO0lBQWdDLENBQUM7SUFBcEIsZ0JBQWdCO1FBZDVCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxpQ0FBd0I7Z0JBQ3hCLCtCQUF1QjtnQkFDdkIsbURBQXVCO2dCQUN2QixzQ0FBNEI7YUFDL0I7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsMENBQW1CO2FBQ3RCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxnQkFBZ0IsQ0FBSTtJQUFELHVCQUFDO0NBQUEsQUFBakMsSUFBaUM7QUFBcEIsNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3L2FuZ3VsYXJcIjtcclxuXHJcbmltcG9ydCB7IFdvcmtvcmRlcnNSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vd29ya29yZGVycy1yb3V0aW5nLm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBXb3Jrb3JkZXJzQ29tcG9uZW50IH0gZnJvbSBcIi4vd29ya29yZGVycy5jb21wb25lbnRcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxyXG4gICAgICAgIFdvcmtvcmRlcnNSb3V0aW5nTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUsXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgV29ya29yZGVyc0NvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIHNjaGVtYXM6IFtcclxuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBXb3Jrb3JkZXJzTW9kdWxlIHsgfVxyXG4iXX0=