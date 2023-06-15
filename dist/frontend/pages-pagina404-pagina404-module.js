(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pagina404-pagina404-module"],{

/***/ "W+Dx":
/*!*********************************************************************!*\
  !*** ./src/app/market-place/pages/pagina404/pagina404.component.ts ***!
  \*********************************************************************/
/*! exports provided: Pagina404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pagina404Component", function() { return Pagina404Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class Pagina404Component {
    constructor() { }
    ngOnInit() {
    }
}
Pagina404Component.ɵfac = function Pagina404Component_Factory(t) { return new (t || Pagina404Component)(); };
Pagina404Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Pagina404Component, selectors: [["pagina404"]], decls: 10, vars: 0, consts: [[1, "ps-page--404"], [1, "container"], [1, "ps-section__content"], ["src", "./assets/img/404.jpg", "alt", ""], ["routerLink", "/"]], template: function Pagina404Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Ohh! p\u00E1gina no encontrada");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Parece que no podemos encontrar lo que est\u00E1s buscando. Tal vez la b\u00FAsqueda puede ayudar o volver a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Inicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], encapsulation: 2 });
(function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Pagina404Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'pagina404',
                template: `
    <div class="ps-page--404">

      <div class="container">

        <div class="ps-section__content">

          <img src="./assets/img/404.jpg" alt="">

          <h3>Ohh! página no encontrada</h3>

          <p>Parece que no podemos encontrar lo que estás buscando. Tal vez la búsqueda puede ayudar o volver a<a routerLink="/"> Inicio</a></p>

          <!-- <form class="ps-form--widget-search" action="do_action" method="get">

            <input class="form-control" type="text" placeholder="Search...">

            <button><i class="icon-magnifier"></i></button>

          </form> -->

        </div>

      </div>

    </div>
  `
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "dJ2z":
/*!******************************************************************!*\
  !*** ./src/app/market-place/pages/pagina404/pagina404.module.ts ***!
  \******************************************************************/
/*! exports provided: Pagina404Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pagina404Module", function() { return Pagina404Module; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pagina404_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pagina404-routing.module */ "zJjU");
/* harmony import */ var _pagina404_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pagina404.component */ "W+Dx");





class Pagina404Module {
}
Pagina404Module.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: Pagina404Module });
Pagina404Module.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function Pagina404Module_Factory(t) { return new (t || Pagina404Module)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _pagina404_routing_module__WEBPACK_IMPORTED_MODULE_2__["Pagina404RoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Pagina404Module, { declarations: [_pagina404_component__WEBPACK_IMPORTED_MODULE_3__["Pagina404Component"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _pagina404_routing_module__WEBPACK_IMPORTED_MODULE_2__["Pagina404RoutingModule"]] }); })();
(function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Pagina404Module, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_pagina404_component__WEBPACK_IMPORTED_MODULE_3__["Pagina404Component"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _pagina404_routing_module__WEBPACK_IMPORTED_MODULE_2__["Pagina404RoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "zJjU":
/*!**************************************************************************!*\
  !*** ./src/app/market-place/pages/pagina404/pagina404-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: Pagina404RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pagina404RoutingModule", function() { return Pagina404RoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pagina404_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pagina404.component */ "W+Dx");





const routes = [{ path: '', component: _pagina404_component__WEBPACK_IMPORTED_MODULE_2__["Pagina404Component"] }];
class Pagina404RoutingModule {
}
Pagina404RoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: Pagina404RoutingModule });
Pagina404RoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function Pagina404RoutingModule_Factory(t) { return new (t || Pagina404RoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Pagina404RoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
(function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Pagina404RoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-pagina404-pagina404-module.js.map