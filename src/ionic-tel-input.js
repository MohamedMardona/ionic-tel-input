import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
import * as $ from 'jquery';
import 'intl-tel-input-mobile';
import 'intl-tel-input-mobile/build/js/utils';
var IonicTelInput = /** @class */ (function () {
    function  ionicTelInput(el) {
        this.el = el;
        this.hasError = new EventEmitter();
        this.ionicTelOutput = new EventEmitter();
        this.countryChaionice = new EventEmitter();
        this.intlTelInputObject = new EventEmitter();
    }
     ionicTelInput.prototype.ngOnInit = function () {
        var _this = this;
        this.ionicTelInput = $(this.el.nativeElement);
        if (this.ionicTelInputOptions) {
            this.ionicTelInput.intlTelInput(this.ionicTelInputOptions);
        }
        else {
            this.ionicTelInput.intlTelInput();
        }
        this.ionicTelInput.on("countrychaionice", function (e, countryData) {
            _this.countryChaionice.emit(countryData);
        });
        this.intlTelInputObject.emit(this.ionicTelInput);
    };
     ionicTelInput.prototype.onBlur = function () {
        var isInputValid = this.isInputValid();
        if (isInputValid) {
            var telOutput = this.ionicTelInput.intlTelInput("getNumber");
            this.hasError.emit(isInputValid);
            this. ionicTelOutput.emit(telOutput);
        }
        else {
            this.hasError.emit(isInputValid);
        }
    };
     ionicTelInput.prototype.isInputValid = function () {
        return this.ionicTelInput.intlTelInput('isValidNumber') ? true : false;
    };
     ionicTelInput.prototype.setCountry = function (country) {
        this.ionicTelInput.intlTelInput('setCountry', country);
    };
     ionicTelInput.decorators = [
        { type: Directive, args: [{
                    selector: '[ionicTelInput]',
                },] },
    ];
    /** @nocollapse */
     ionicTelInput.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
     ionicTelInput.propDecorators = {
         ionicTelInputOptions: [{ type: Input, args: ['ionicTelInputOptions',] }],
        hasError: [{ type: Output, args: ['hasError',] }],
         ionicTelOutput: [{ type: Output, args: ['ionicTelOutput',] }],
        countryChaionice: [{ type: Output, args: ['countryChaionice',] }],
        intlTelInputObject: [{ type: Output, args: ['intlTelInputObject',] }],
        onBlur: [{ type: HostListener, args: ['blur',] }]
    };
    return  ionicTelInput;
}());
export { IonicTelInput };
//# sourceMappiionicURL= ionic-tel-input.js.map