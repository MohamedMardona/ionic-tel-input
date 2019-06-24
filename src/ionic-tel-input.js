import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
import * as $ from 'jquery';
import 'intl-tel-input-mobile';
import 'intl-tel-input-mobile/build/js/utils';
var IonicTelInput = /** @class */ (function () {
    function IonicTelInput(el) {
        this.el = el;
        this.hasError = new EventEmitter();
        this.ionicTelOutput = new EventEmitter();
        this.countryChange = new EventEmitter();
        this.intlTelInputObject = new EventEmitter();
    }
   IonicTelInput.prototype.ngOnInit = function () {
        var _this = this;
        this.ionicTelInput = $(this.el.nativeElement);
        if (this.ionicTelInputOptions) {
            this.ionicTelInput.intlTelInput(this.ionicTelInputOptions);
        }
        else {
            this.ionicTelInput.intlTelInput();
        }
        this.ionicTelInput.on("countrychange", function (e, countryData) {
            _this.countryChange.emit(countryData);
        });
        this.intlTelInputObject.emit(this.ionicTelInput);
    };
   IonicTelInput.prototype.onBlur = function () {
        var isInputValid = this.isInputValid();
        if (isInputValid) {
            var telOutput = this.ionicTelInput.intlTelInput("getNumber");
            this.hasError.emit(isInputValid);
            this.ionicTelOutput.emit(telOutput);
        }
        else {
            this.hasError.emit(isInputValid);
        }
    };
   IonicTelInput.prototype.isInputValid = function () {
        return this.ionicTelInput.intlTelInput('isValidNumber') ? true : false;
    };
   IonicTelInput.prototype.setCountry = function (country) {
        this.ionicTelInput.intlTelInput('setCountry', country);
    };
   IonicTelInput.decorators = [
        { type: Directive, args: [{
                    selector: '[ionicTelInput]',
                },] },
    ];
    /** @nocollapse */
   IonicTelInput.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
   IonicTelInput.propDecorators = {
        ionicTelInputOptions: [{ type: Input, args: ['ionicTelInputOptions',] }],
        hasError: [{ type: Output, args: ['hasError',] }],
        ionicTelOutput: [{ type: Output, args: ['ionicTelOutput',] }],
        countryChange: [{ type: Output, args: ['countryChange',] }],
        intlTelInputObject: [{ type: Output, args: ['intlTelInputObject',] }],
        onBlur: [{ type: HostListener, args: ['blur',] }]
    };
    return IonicTelInput;
}());
export {IonicTelInput};
//# sourceMappingURL=ionic-tel-input.js.map