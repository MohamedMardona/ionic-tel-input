import { NgModule } from '@angular/core';
import { IonicTelInput } from './ionic-tel-input';

var IonicTelInputModule = /** @class */ (function () {
    function  ionicTelInputModule() {
    }
     ionicTelInputModule.forRoot = function () {
        return {
            ngModule:  ionicTelInputModule,
            providers: []
        };
    };
     ionicTelInputModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [IonicTelInput],
                    exports: [IonicTelInput]
                },] },
    ];
    return  ionicTelInputModule;
}());
export { IonicTelInputModule };
//# sourceMappingURL= ionic-tel-input.module.js.map