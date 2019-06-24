import { NgModule } from '@angular/core';
import {IonicTelInput } from './ionic-tel-input';
var IonicTelInputModule = /** @class */ (function () {
    function IonicTelInputModule() {
    }
    IonicTelInputModule.forRoot = function () {
        return {
            ngModule: IonicTelInputModule,
            providers: []
        };
    };
    IonicTelInputModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [IonicTelInput],
                    exports: [IonicTelInput]
                },] },
    ];
    return IonicTelInputModule;
}());
export { IonicTelInputModule };
//# sourceMappingURL=ionic-tel-input.module.js.map