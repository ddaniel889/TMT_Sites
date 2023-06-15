(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-internacionales-internacionales-module"],{

/***/ "7KoS":
/*!**************************************************************************************!*\
  !*** ./src/app/market-place/pages/internacionales/internacionales-routing.module.ts ***!
  \**************************************************************************************/
/*! exports provided: InternacionalesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InternacionalesRoutingModule", function() { return InternacionalesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _internacionales_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internacionales.component */ "uRrQ");





const routes = [{ path: ':id', component: _internacionales_component__WEBPACK_IMPORTED_MODULE_2__["InternacionalesComponent"] }];
class InternacionalesRoutingModule {
}
InternacionalesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: InternacionalesRoutingModule });
InternacionalesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function InternacionalesRoutingModule_Factory(t) { return new (t || InternacionalesRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InternacionalesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
(function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InternacionalesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ILVM":
/*!******************************************************************************!*\
  !*** ./src/app/market-place/pages/internacionales/internacionales.module.ts ***!
  \******************************************************************************/
/*! exports provided: InternacionalesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InternacionalesModule", function() { return InternacionalesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _internacionales_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internacionales-routing.module */ "7KoS");
/* harmony import */ var _internacionales_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./internacionales.component */ "uRrQ");





class InternacionalesModule {
}
InternacionalesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: InternacionalesModule });
InternacionalesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function InternacionalesModule_Factory(t) { return new (t || InternacionalesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _internacionales_routing_module__WEBPACK_IMPORTED_MODULE_2__["InternacionalesRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InternacionalesModule, { declarations: [_internacionales_component__WEBPACK_IMPORTED_MODULE_3__["InternacionalesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _internacionales_routing_module__WEBPACK_IMPORTED_MODULE_2__["InternacionalesRoutingModule"]] }); })();
(function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InternacionalesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_internacionales_component__WEBPACK_IMPORTED_MODULE_3__["InternacionalesComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _internacionales_routing_module__WEBPACK_IMPORTED_MODULE_2__["InternacionalesRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "uRrQ":
/*!*********************************************************************************!*\
  !*** ./src/app/market-place/pages/internacionales/internacionales.component.ts ***!
  \*********************************************************************************/
/*! exports provided: InternacionalesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InternacionalesComponent", function() { return InternacionalesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class InternacionalesComponent {
    constructor() { }
    ngOnInit() {
    }
}
InternacionalesComponent.ɵfac = function InternacionalesComponent_Factory(t) { return new (t || InternacionalesComponent)(); };
InternacionalesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InternacionalesComponent, selectors: [["praia-internacionales"]], decls: 2, vars: 0, template: function InternacionalesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "internacionales works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hcmtldC1wbGFjZS9wYWdlcy9pbnRlcm5hY2lvbmFsZXMvaW50ZXJuYWNpb25hbGVzLmNvbXBvbmVudC5zY3NzIn0= */"] });
(function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InternacionalesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'praia-internacionales',
                templateUrl: './internacionales.component.html',
                styleUrls: ['./internacionales.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-internacionales-internacionales-module.js.map