"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var color_1 = require("tns-core-modules/color");
var FloatLabel = /** @class */ (function () {
    function FloatLabel() {
    }
    FloatLabel.prototype.ngOnInit = function () {
    };
    FloatLabel.prototype.onFocus = function () {
        var label = this.label.nativeElement;
        var textField = this.textField.nativeElement;
        // animate the label sliding up and less transparent.
        label.animate({
            translate: { x: 0, y: -25 },
            opacity: 1,
        }).then(function () { }, function () { });
        // set the border bottom color to green to indicate focus
        textField.borderBottomColor = new color_1.Color('#00b47e');
    };
    FloatLabel.prototype.onBlur = function () {
        var label = this.label.nativeElement;
        var textField = this.textField.nativeElement;
        // if there is text in our input then don't move the label back to its initial position.
        if (!textField.text) {
            label.animate({
                translate: { x: 0, y: 0 },
                opacity: 0.4
            }).then(function () { }, function () { });
        }
        // reset border bottom color.
        textField.borderBottomColor = new color_1.Color('#cec8c8');
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], FloatLabel.prototype, "placeholder", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], FloatLabel.prototype, "secure", void 0);
    __decorate([
        core_1.ViewChild("label"),
        __metadata("design:type", core_1.ElementRef)
    ], FloatLabel.prototype, "label", void 0);
    __decorate([
        core_1.ViewChild("textField"),
        __metadata("design:type", core_1.ElementRef)
    ], FloatLabel.prototype, "textField", void 0);
    FloatLabel = __decorate([
        core_1.Component({
            selector: "FloatLabel",
            moduleId: module.id,
            template: "\n        <GridLayout rows=\"30, auto\" marginBottom=\"5\">\n            <Label #label row=\"1\" [text]=\"placeholder\" opacity=\"0.4\" fontSize=\"14\"  class=\"input\"></Label>\n            <TextField #textField [secure]=\"secure\" row=\"1\"  (focus)=\"onFocus()\" (blur)=\"onBlur()\" borderBottomWidth=\"3\" borderBottomColor=\"#cec8c8\" padding=\"2\"></TextField>\n        </GridLayout>\n    "
        }),
        __metadata("design:paramtypes", [])
    ], FloatLabel);
    return FloatLabel;
}());
exports.FloatLabel = FloatLabel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxvYXQtbGFiZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmxvYXQtbGFiZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdFO0FBQ3hFLGdEQUErQztBQVkvQztJQU1JO0lBQ0EsQ0FBQztJQUVELDZCQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsNEJBQU8sR0FBUDtRQUNJLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDO1FBQ3ZDLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDO1FBRS9DLHFEQUFxRDtRQUNyRCxLQUFLLENBQUMsT0FBTyxDQUFDO1lBQ1YsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBRSxFQUFFLEVBQUU7WUFDNUIsT0FBTyxFQUFFLENBQUM7U0FDYixDQUFDLENBQUMsSUFBSSxDQUFDLGNBQVEsQ0FBQyxFQUFFLGNBQVEsQ0FBQyxDQUFDLENBQUM7UUFFOUIseURBQXlEO1FBQ3pELFNBQVMsQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLGFBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQsMkJBQU0sR0FBTjtRQUNJLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDO1FBQ3ZDLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDO1FBRS9DLHdGQUF3RjtRQUN4RixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRTtZQUNqQixLQUFLLENBQUMsT0FBTyxDQUFDO2dCQUNWLFNBQVMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtnQkFDekIsT0FBTyxFQUFFLEdBQUc7YUFDZixDQUFDLENBQUMsSUFBSSxDQUFDLGNBQVEsQ0FBQyxFQUFFLGNBQVEsQ0FBQyxDQUFDLENBQUM7U0FDakM7UUFDRCw2QkFBNkI7UUFDN0IsU0FBUyxDQUFDLGlCQUFpQixHQUFHLElBQUksYUFBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUF0Q1E7UUFBUixZQUFLLEVBQUU7O21EQUFxQjtJQUNwQjtRQUFSLFlBQUssRUFBRTs7OENBQWlCO0lBQ0w7UUFBbkIsZ0JBQVMsQ0FBQyxPQUFPLENBQUM7a0NBQVEsaUJBQVU7NkNBQUM7SUFDZDtRQUF2QixnQkFBUyxDQUFDLFdBQVcsQ0FBQztrQ0FBWSxpQkFBVTtpREFBQztJQUpyQyxVQUFVO1FBVnRCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsWUFBWTtZQUN0QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLDZZQUtUO1NBQ0osQ0FBQzs7T0FDVyxVQUFVLENBd0N0QjtJQUFELGlCQUFDO0NBQUEsQUF4Q0QsSUF3Q0M7QUF4Q1ksZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9jb2xvclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJGbG9hdExhYmVsXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8R3JpZExheW91dCByb3dzPVwiMzAsIGF1dG9cIiBtYXJnaW5Cb3R0b209XCI1XCI+XG4gICAgICAgICAgICA8TGFiZWwgI2xhYmVsIHJvdz1cIjFcIiBbdGV4dF09XCJwbGFjZWhvbGRlclwiIG9wYWNpdHk9XCIwLjRcIiBmb250U2l6ZT1cIjE0XCIgIGNsYXNzPVwiaW5wdXRcIj48L0xhYmVsPlxuICAgICAgICAgICAgPFRleHRGaWVsZCAjdGV4dEZpZWxkIFtzZWN1cmVdPVwic2VjdXJlXCIgcm93PVwiMVwiICAoZm9jdXMpPVwib25Gb2N1cygpXCIgKGJsdXIpPVwib25CbHVyKClcIiBib3JkZXJCb3R0b21XaWR0aD1cIjNcIiBib3JkZXJCb3R0b21Db2xvcj1cIiNjZWM4YzhcIiBwYWRkaW5nPVwiMlwiPjwvVGV4dEZpZWxkPlxuICAgICAgICA8L0dyaWRMYXlvdXQ+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBGbG9hdExhYmVsIHtcbiAgICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHNlY3VyZTogYm9vbGVhbjtcbiAgICBAVmlld0NoaWxkKFwibGFiZWxcIikgbGFiZWw6IEVsZW1lbnRSZWY7XG4gICAgQFZpZXdDaGlsZChcInRleHRGaWVsZFwiKSB0ZXh0RmllbGQ6IEVsZW1lbnRSZWY7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB9XG5cbiAgICBvbkZvY3VzKCkge1xuICAgICAgICBjb25zdCBsYWJlbCA9IHRoaXMubGFiZWwubmF0aXZlRWxlbWVudDtcbiAgICAgICAgY29uc3QgdGV4dEZpZWxkID0gdGhpcy50ZXh0RmllbGQubmF0aXZlRWxlbWVudDtcblxuICAgICAgICAvLyBhbmltYXRlIHRoZSBsYWJlbCBzbGlkaW5nIHVwIGFuZCBsZXNzIHRyYW5zcGFyZW50LlxuICAgICAgICBsYWJlbC5hbmltYXRlKHtcbiAgICAgICAgICAgIHRyYW5zbGF0ZTogeyB4OiAwLCB5OiAtIDI1IH0sXG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICB9KS50aGVuKCgpID0+IHsgfSwgKCkgPT4geyB9KTtcblxuICAgICAgICAvLyBzZXQgdGhlIGJvcmRlciBib3R0b20gY29sb3IgdG8gZ3JlZW4gdG8gaW5kaWNhdGUgZm9jdXNcbiAgICAgICAgdGV4dEZpZWxkLmJvcmRlckJvdHRvbUNvbG9yID0gbmV3IENvbG9yKCcjMDBiNDdlJyk7XG4gICAgfVxuXG4gICAgb25CbHVyKCkge1xuICAgICAgICBjb25zdCBsYWJlbCA9IHRoaXMubGFiZWwubmF0aXZlRWxlbWVudDtcbiAgICAgICAgY29uc3QgdGV4dEZpZWxkID0gdGhpcy50ZXh0RmllbGQubmF0aXZlRWxlbWVudDtcblxuICAgICAgICAvLyBpZiB0aGVyZSBpcyB0ZXh0IGluIG91ciBpbnB1dCB0aGVuIGRvbid0IG1vdmUgdGhlIGxhYmVsIGJhY2sgdG8gaXRzIGluaXRpYWwgcG9zaXRpb24uXG4gICAgICAgIGlmICghdGV4dEZpZWxkLnRleHQpIHtcbiAgICAgICAgICAgIGxhYmVsLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZTogeyB4OiAwLCB5OiAwIH0sXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC40XG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHsgfSwgKCkgPT4geyB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyByZXNldCBib3JkZXIgYm90dG9tIGNvbG9yLlxuICAgICAgICB0ZXh0RmllbGQuYm9yZGVyQm90dG9tQ29sb3IgPSBuZXcgQ29sb3IoJyNjZWM4YzgnKTtcbiAgICB9XG59XG4iXX0=