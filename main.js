(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_role_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-role.service */ "./src/app/auth-role.service.ts");
/* harmony import */ var _hero_list_hero_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hero-list/hero-list.component */ "./src/app/hero-list/hero-list.component.ts");
/* harmony import */ var _login_loginform_loginform_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/loginform/loginform.component */ "./src/app/login/loginform/loginform.component.ts");
/* harmony import */ var _pimpinan_template_template_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pimpinan/template/template.component */ "./src/app/pimpinan/template/template.component.ts");
/* harmony import */ var _pimpinan_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pimpinan/dashboard/dashboard.component */ "./src/app/pimpinan/dashboard/dashboard.component.ts");
/* harmony import */ var _pimpinan_marketing_marketing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pimpinan/marketing/marketing.component */ "./src/app/pimpinan/marketing/marketing.component.ts");
/* harmony import */ var _gudang_template_gudang_template_gudang_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./gudang/template-gudang/template-gudang.component */ "./src/app/gudang/template-gudang/template-gudang.component.ts");
/* harmony import */ var _gudang_dashboard_gudang_dashboard_gudang_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./gudang/dashboard-gudang/dashboard-gudang.component */ "./src/app/gudang/dashboard-gudang/dashboard-gudang.component.ts");
/* harmony import */ var _test_point_test_point_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./test-point/test-point.component */ "./src/app/test-point/test-point.component.ts");












var routes = [
    { path: 'login', component: _login_loginform_loginform_component__WEBPACK_IMPORTED_MODULE_5__["LoginformComponent"] },
    { path: 'testpoint', component: _test_point_test_point_component__WEBPACK_IMPORTED_MODULE_11__["TestPointComponent"] },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'pimpinan', component: _pimpinan_template_template_component__WEBPACK_IMPORTED_MODULE_6__["TemplateComponent"], canActivate: [_auth_role_service__WEBPACK_IMPORTED_MODULE_3__["AuthRoleService"]],
        data: {
            expectedRole: '1'
        },
        children: [
            { path: 'dashboard', component: _pimpinan_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"] },
            { path: 'marketing', component: _pimpinan_marketing_marketing_component__WEBPACK_IMPORTED_MODULE_8__["MarketingComponent"] }
        ]
    },
    { path: 'gudang', component: _gudang_template_gudang_template_gudang_component__WEBPACK_IMPORTED_MODULE_9__["TemplateGudangComponent"], canActivate: [_auth_role_service__WEBPACK_IMPORTED_MODULE_3__["AuthRoleService"]], data: {
            expectedRole: '2'
        },
        children: [
            { path: 'dashboard', component: _gudang_dashboard_gudang_dashboard_gudang_component__WEBPACK_IMPORTED_MODULE_10__["DashboardGudangComponent"] },
            { path: 'marketing', component: _pimpinan_marketing_marketing_component__WEBPACK_IMPORTED_MODULE_8__["MarketingComponent"] }
        ]
    },
    { path: 'cek_data', component: _hero_list_hero_list_component__WEBPACK_IMPORTED_MODULE_4__["HeroListComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'my-hero';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: tokenGetter, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenGetter", function() { return tokenGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-progressbar/core */ "./node_modules/@ngx-progressbar/core/fesm5/ngx-progressbar-core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _jwt_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./jwt-service.service */ "./src/app/jwt-service.service.ts");
/* harmony import */ var _token_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./token-service.service */ "./src/app/token-service.service.ts");
/* harmony import */ var _auth_valid_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth-valid.service */ "./src/app/auth-valid.service.ts");
/* harmony import */ var _auth_role_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth-role.service */ "./src/app/auth-role.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _hero_list_hero_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./hero-list/hero-list.component */ "./src/app/hero-list/hero-list.component.ts");
/* harmony import */ var _hero_template_hero_template_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./hero-template/hero-template.component */ "./src/app/hero-template/hero-template.component.ts");
/* harmony import */ var _hero_dashboard_hero_dashboard_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./hero-dashboard/hero-dashboard.component */ "./src/app/hero-dashboard/hero-dashboard.component.ts");
/* harmony import */ var _shared_hero_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/hero.service */ "./src/app/shared/hero.service.ts");
/* harmony import */ var _pimpinan_template_template_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pimpinan/template/template.component */ "./src/app/pimpinan/template/template.component.ts");
/* harmony import */ var _pimpinan_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pimpinan/dashboard/dashboard.component */ "./src/app/pimpinan/dashboard/dashboard.component.ts");
/* harmony import */ var _login_loginform_loginform_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./login/loginform/loginform.component */ "./src/app/login/loginform/loginform.component.ts");
/* harmony import */ var _pimpinan_marketing_marketing_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pimpinan/marketing/marketing.component */ "./src/app/pimpinan/marketing/marketing.component.ts");
/* harmony import */ var _gudang_template_gudang_template_gudang_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./gudang/template-gudang/template-gudang.component */ "./src/app/gudang/template-gudang/template-gudang.component.ts");
/* harmony import */ var _gudang_dashboard_gudang_dashboard_gudang_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./gudang/dashboard-gudang/dashboard-gudang.component */ "./src/app/gudang/dashboard-gudang/dashboard-gudang.component.ts");
/* harmony import */ var _test_point_test_point_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./test-point/test-point.component */ "./src/app/test-point/test-point.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");



// HTTP CLient Module


// add Forms Modul to handle form from .html view

// Auth Guard




















function tokenGetter() {
    return localStorage.getItem('token');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
                _hero_list_hero_list_component__WEBPACK_IMPORTED_MODULE_13__["HeroListComponent"],
                _hero_template_hero_template_component__WEBPACK_IMPORTED_MODULE_14__["HeroTemplateComponent"],
                _hero_dashboard_hero_dashboard_component__WEBPACK_IMPORTED_MODULE_15__["HeroDashboardComponent"],
                _pimpinan_template_template_component__WEBPACK_IMPORTED_MODULE_17__["TemplateComponent"],
                _pimpinan_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_18__["DashboardComponent"],
                _login_loginform_loginform_component__WEBPACK_IMPORTED_MODULE_19__["LoginformComponent"],
                _pimpinan_marketing_marketing_component__WEBPACK_IMPORTED_MODULE_20__["MarketingComponent"],
                _gudang_template_gudang_template_gudang_component__WEBPACK_IMPORTED_MODULE_21__["TemplateGudangComponent"],
                _gudang_dashboard_gudang_dashboard_gudang_component__WEBPACK_IMPORTED_MODULE_22__["DashboardGudangComponent"],
                _test_point_test_point_component__WEBPACK_IMPORTED_MODULE_23__["TestPointComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
                _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_4__["NgProgressModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_25__["MatProgressBarModule"],
                // add Forms Modul to handle form from .html view
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__["BrowserAnimationsModule"]
            ],
            // add HeroService 
            providers: [_shared_hero_service__WEBPACK_IMPORTED_MODULE_16__["HeroService"], _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _jwt_service_service__WEBPACK_IMPORTED_MODULE_7__["JwtServiceService"], _token_service_service__WEBPACK_IMPORTED_MODULE_8__["TokenServiceService"], _auth_valid_service__WEBPACK_IMPORTED_MODULE_9__["AuthValidService"], _auth_role_service__WEBPACK_IMPORTED_MODULE_10__["AuthRoleService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth-role.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth-role.service.ts ***!
  \**************************************/
/*! exports provided: AuthRoleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoleService", function() { return AuthRoleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_valid_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-valid.service */ "./src/app/auth-valid.service.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");





var AuthRoleService = /** @class */ (function () {
    function AuthRoleService(router, authValid) {
        this.router = router;
        this.authValid = authValid;
    }
    AuthRoleService.prototype.canActivate = function (route) {
        // this will be passed from the route config
        // on the data property
        var expectedRole = route.data.expectedRole;
        var token = localStorage.getItem('token');
        // decode the token to get its payload
        var helperDecode = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"]();
        var tokenPayload = helperDecode.decodeToken(token);
        if (!this.authValid.isAuthenticated() ||
            tokenPayload.idn !== expectedRole) {
            this.router.navigate(['/login']);
            console.log("role gagal");
            return false;
        }
        console.log(tokenPayload.idn + " role berhasil");
        return true;
    };
    AuthRoleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _auth_valid_service__WEBPACK_IMPORTED_MODULE_3__["AuthValidService"]])
    ], AuthRoleService);
    return AuthRoleService;
}());



/***/ }),

/***/ "./src/app/auth-valid.service.ts":
/*!***************************************!*\
  !*** ./src/app/auth-valid.service.ts ***!
  \***************************************/
/*! exports provided: AuthValidService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthValidService", function() { return AuthValidService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");



var AuthValidService = /** @class */ (function () {
    function AuthValidService(jwtHelper) {
        this.jwtHelper = jwtHelper;
    }
    AuthValidService.prototype.isAuthenticated = function () {
        var token = localStorage.getItem('token');
        // Check whether the token is expired and return
        // true or false
        return !this.jwtHelper.isTokenExpired(token);
    };
    AuthValidService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]])
    ], AuthValidService);
    return AuthValidService;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_valid_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-valid.service */ "./src/app/auth-valid.service.ts");




var AuthService = /** @class */ (function () {
    function AuthService(router, authValid) {
        this.router = router;
        this.authValid = authValid;
    }
    AuthService.prototype.canActivate = function () {
        if (!this.authValid.isAuthenticated()) {
            this.router.navigateByUrl('/login');
            console.log('gagal');
            return false;
        }
        console.log('berhasil');
        return true;
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _auth_valid_service__WEBPACK_IMPORTED_MODULE_3__["AuthValidService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/gudang/dashboard-gudang/dashboard-gudang.component.css":
/*!************************************************************************!*\
  !*** ./src/app/gudang/dashboard-gudang/dashboard-gudang.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2d1ZGFuZy9kYXNoYm9hcmQtZ3VkYW5nL2Rhc2hib2FyZC1ndWRhbmcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/gudang/dashboard-gudang/dashboard-gudang.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/gudang/dashboard-gudang/dashboard-gudang.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section-header\">\n    <h1>Dashborad Gudang</h1>\n</div>\n<div class=\"row\">\n    <div class=\"col-12 col-md-6 col-lg-6\">\n        <h1>Hallo</h1>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/gudang/dashboard-gudang/dashboard-gudang.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/gudang/dashboard-gudang/dashboard-gudang.component.ts ***!
  \***********************************************************************/
/*! exports provided: DashboardGudangComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardGudangComponent", function() { return DashboardGudangComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardGudangComponent = /** @class */ (function () {
    function DashboardGudangComponent() {
    }
    DashboardGudangComponent.prototype.ngOnInit = function () {
    };
    DashboardGudangComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard-gudang',
            template: __webpack_require__(/*! ./dashboard-gudang.component.html */ "./src/app/gudang/dashboard-gudang/dashboard-gudang.component.html"),
            styles: [__webpack_require__(/*! ./dashboard-gudang.component.css */ "./src/app/gudang/dashboard-gudang/dashboard-gudang.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardGudangComponent);
    return DashboardGudangComponent;
}());



/***/ }),

/***/ "./src/app/gudang/template-gudang/template-gudang.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/gudang/template-gudang/template-gudang.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2d1ZGFuZy90ZW1wbGF0ZS1ndWRhbmcvdGVtcGxhdGUtZ3VkYW5nLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/gudang/template-gudang/template-gudang.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/gudang/template-gudang/template-gudang.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"app\">\n    <div class=\"main-wrapper main-wrapper-1\">\n        <div class=\"navbar-bg\"></div>\n        <nav class=\"navbar navbar-expand-lg main-navbar\">\n            <form class=\"form-inline mr-auto\">\n                <ul class=\"navbar-nav mr-3\">\n                    <li><a href=\"#\" data-toggle=\"sidebar\" class=\"nav-link nav-link-lg\"><i class=\"fas fa-bars\"></i></a>\n                    </li>\n                    <li><a href=\"#\" data-toggle=\"search\" class=\"nav-link nav-link-lg d-sm-none\"><i class=\"fas fa-search\"></i></a>\n                    </li>\n                </ul>\n                <div class=\"search-element\">\n                    <input class=\"form-control\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\" data-width=\"250\">\n                    <button class=\"btn\" type=\"submit\"><i class=\"fas fa-search\"></i>\n            </button>\n                    <div class=\"search-backdrop\"></div>\n                    <div class=\"search-result\">\n                        <div class=\"search-header\">\n                            Histories\n                        </div>\n                        <div class=\"search-item\">\n                            <a href=\"#\">How to hack NASA using CSS</a>\n                            <a href=\"#\" class=\"search-close\"><i class=\"fas fa-times\"></i></a>\n                        </div>\n                        <div class=\"btn-group dropup\">\n                            <button type=\"button\" class=\"btn btn-secondary\">Dropup</button>\n                            <button type=\"button\" class=\"btn btn-secondary dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                            <span class=\"sr-only\">Toggle Dropdown</span>\n                        </button>\n                            <div class=\"dropdown-menu\">\n                                ...\n                            </div>\n                        </div>\n                        <div class=\"search-item\">\n                            <a href=\"#\">Kodinger.com</a>\n                            <a href=\"#\" class=\"search-close\"><i class=\"fas fa-times\"></i></a>\n                        </div>\n                        <div class=\"search-item\">\n                            <a href=\"#\">#Stisla</a>\n                            <a href=\"#\" class=\"search-close\"><i class=\"fas fa-times\"></i></a>\n                        </div>\n                        <div class=\"search-header\">\n                            Result\n                        </div>\n                        <div class=\"search-item\">\n                            <a href=\"#\">\n                                <img class=\"mr-3 rounded\" width=\"30\" src=\"../dist/img/products/product-3-50.png\" alt=\"product\">oPhone S9 Limited Edition\n                            </a>\n                        </div>\n                        <div class=\"search-item\">\n                            <a href=\"#\">\n                                <img class=\"mr-3 rounded\" width=\"30\" src=\"../dist/img/products/product-2-50.png\" alt=\"product\">Drone X2 New Gen-7\n                            </a>\n                        </div>\n                        <div class=\"search-item\">\n                            <a href=\"#\">\n                                <img class=\"mr-3 rounded\" width=\"30\" src=\"../dist/img/products/product-1-50.png\" alt=\"product\">Headphone Blitz\n                            </a>\n                        </div>\n                        <div class=\"search-header\">\n                            Projects\n                        </div>\n                        <div class=\"search-item\">\n                            <a href=\"#\">\n                                <div class=\"search-icon bg-danger text-white mr-3\">\n                                    <i class=\"fas fa-code\"></i>\n                                </div>\n                                Stisla Admin Template\n                            </a>\n                        </div>\n                        <div class=\"search-item\">\n                            <a href=\"#\">\n                                <div class=\"search-icon bg-primary text-white mr-3\">\n                                    <i class=\"fas fa-laptop\"></i>\n                                </div>\n                                Create a new Homepage Design\n                            </a>\n                        </div>\n                    </div>\n                </div>\n            </form>\n            <ul class=\"navbar-nav navbar-right\">\n                <li class=\"dropdown dropdown-list-toggle\"><a href=\"#\" data-toggle=\"dropdown\" class=\"nav-link nav-link-lg message-toggle beep\"><i class=\"far fa-envelope\"></i></a>\n                    <div class=\"dropdown-menu dropdown-list dropdown-menu-right\">\n                        <div class=\"dropdown-header\">Messages\n                            <div class=\"float-right\">\n                                <a href=\"#\">Mark All As Read</a>\n                            </div>\n                        </div>\n                        <div class=\"dropdown-list-content dropdown-list-message\">\n                            <a href=\"#\" class=\"dropdown-item dropdown-item-unread\">\n                                <div class=\"dropdown-item-avatar\">\n                                    <img alt=\"image\" src=\"../dist/img/avatar/avatar-1.png\" class=\"rounded-circle\">\n                                    <div class=\"is-online\"></div>\n                                </div>\n                                <div class=\"dropdown-item-desc\">\n                                    <b>Kusnaedi</b>\n                                    <p>Hello, Bro!</p>\n                                    <div class=\"time\">10 Hours Ago</div>\n                                </div>\n                            </a>\n                            <a href=\"#\" class=\"dropdown-item dropdown-item-unread\">\n                                <div class=\"dropdown-item-avatar\">\n                                    <img alt=\"image\" src=\"../dist/img/avatar/avatar-2.png\" class=\"rounded-circle\">\n                                </div>\n                                <div class=\"dropdown-item-desc\">\n                                    <b>Dedik Sugiharto</b>\n                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>\n                                    <div class=\"time\">12 Hours Ago</div>\n                                </div>\n                            </a>\n                            <a href=\"#\" class=\"dropdown-item dropdown-item-unread\">\n                                <div class=\"dropdown-item-avatar\">\n                                    <img alt=\"image\" src=\"../dist/img/avatar/avatar-3.png\" class=\"rounded-circle\">\n                                    <div class=\"is-online\"></div>\n                                </div>\n                                <div class=\"dropdown-item-desc\">\n                                    <b>Agung Ardiansyah</b>\n                                    <p>Sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n                                    <div class=\"time\">12 Hours Ago</div>\n                                </div>\n                            </a>\n                            <a href=\"#\" class=\"dropdown-item\">\n                                <div class=\"dropdown-item-avatar\">\n                                    <img alt=\"image\" src=\"../dist/img/avatar/avatar-4.png\" class=\"rounded-circle\">\n                                </div>\n                                <div class=\"dropdown-item-desc\">\n                                    <b>Ardian Rahardiansyah</b>\n                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit ess</p>\n                                    <div class=\"time\">16 Hours Ago</div>\n                                </div>\n                            </a>\n                            <a href=\"#\" class=\"dropdown-item\">\n                                <div class=\"dropdown-item-avatar\">\n                                    <img alt=\"image\" src=\"../dist/img/avatar/avatar-5.png\" class=\"rounded-circle\">\n                                </div>\n                                <div class=\"dropdown-item-desc\">\n                                    <b>Alfa Zulkarnain</b>\n                                    <p>Exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>\n                                    <div class=\"time\">Yesterday</div>\n                                </div>\n                            </a>\n                        </div>\n                        <div class=\"dropdown-footer text-center\">\n                            <a href=\"#\">View All <i class=\"fas fa-chevron-right\"></i></a>\n                        </div>\n                    </div>\n                </li>\n                <li class=\"dropdown dropdown-list-toggle\"><a href=\"#\" data-toggle=\"dropdown\" class=\"nav-link notification-toggle nav-link-lg beep\"><i class=\"far fa-bell\"></i></a>\n                    <div class=\"dropdown-menu dropdown-list dropdown-menu-right\">\n                        <div class=\"dropdown-header\">Notifications\n                            <div class=\"float-right\">\n                                <a href=\"#\">Mark All As Read</a>\n                            </div>\n                        </div>\n                        <div class=\"dropdown-list-content dropdown-list-icons\">\n                            <a href=\"#\" class=\"dropdown-item dropdown-item-unread\">\n                                <div class=\"dropdown-item-icon bg-primary text-white\">\n                                    <i class=\"fas fa-code\"></i>\n                                </div>\n                                <div class=\"dropdown-item-desc\">\n                                    Template update is available now!\n                                    <div class=\"time text-primary\">2 Min Ago</div>\n                                </div>\n                            </a>\n                            <a href=\"#\" class=\"dropdown-item\">\n                                <div class=\"dropdown-item-icon bg-info text-white\">\n                                    <i class=\"far fa-user\"></i>\n                                </div>\n                                <div class=\"dropdown-item-desc\">\n                                    <b>You</b> and <b>Dedik Sugiharto</b> are now friends\n                                    <div class=\"time\">10 Hours Ago</div>\n                                </div>\n                            </a>\n                            <a href=\"#\" class=\"dropdown-item\">\n                                <div class=\"dropdown-item-icon bg-success text-white\">\n                                    <i class=\"fas fa-check\"></i>\n                                </div>\n                                <div class=\"dropdown-item-desc\">\n                                    <b>Kusnaedi</b> has moved task <b>Fix bug header</b> to <b>Done</b>\n                                    <div class=\"time\">12 Hours Ago</div>\n                                </div>\n                            </a>\n                            <a href=\"#\" class=\"dropdown-item\">\n                                <div class=\"dropdown-item-icon bg-danger text-white\">\n                                    <i class=\"fas fa-exclamation-triangle\"></i>\n                                </div>\n                                <div class=\"dropdown-item-desc\">\n                                    Low disk space. Let's clean it!\n                                    <div class=\"time\">17 Hours Ago</div>\n                                </div>\n                            </a>\n                            <a href=\"#\" class=\"dropdown-item\">\n                                <div class=\"dropdown-item-icon bg-info text-white\">\n                                    <i class=\"fas fa-bell\"></i>\n                                </div>\n                                <div class=\"dropdown-item-desc\">\n                                    Welcome to Stisla template!\n                                    <div class=\"time\">Yesterday</div>\n                                </div>\n                            </a>\n                        </div>\n                        <div class=\"dropdown-footer text-center\">\n                            <a href=\"#\">View All <i class=\"fas fa-chevron-right\"></i></a>\n                        </div>\n                    </div>\n                </li>\n                <li class=\"dropdown\">\n                    <a href=\"#\" data-toggle=\"dropdown\" class=\"nav-link dropdown-toggle nav-link-lg nav-link-user\">\n                        <img alt=\"image\" src=\"../dist/img/avatar/avatar-1.png\" class=\"rounded-circle mr-1\">\n                        <div class=\"d-sm-none d-lg-inline-block\">Hi, Ujang Maman</div>\n                    </a>\n                    <div class=\"dropdown-menu dropdown-menu-right\">\n                        <div class=\"dropdown-title\">Logged in 5 min ago</div>\n                        <a href=\"features-profile.html\" class=\"dropdown-item has-icon\">\n                            <i class=\"far fa-user\"></i> Profile\n                        </a>\n                        <a href=\"features-activities.html\" class=\"dropdown-item has-icon\">\n                            <i class=\"fas fa-bolt\"></i> Activities\n                        </a>\n                        <a href=\"features-settings.html\" class=\"dropdown-item has-icon\">\n                            <i class=\"fas fa-cog\"></i> Settings\n                        </a>\n                        <div class=\"dropdown-divider\"></div>\n                        <a href=\"\" (click)=\"onLogout()\" class=\"dropdown-item has-icon text-danger\">\n                            <i class=\"fas fa-sign-out-alt\"></i> Logout\n                        </a>\n                    </div>\n                </li>\n            </ul>\n        </nav>\n        <div class=\"main-sidebar sidebar-style-2\">\n            <aside id=\"sidebar-wrapper\">\n                <div class=\"sidebar-brand\">\n                    <a href=\"dashboard-ecommerce.html\">Stisla</a>\n                </div>\n                <div class=\"sidebar-brand sidebar-brand-sm\">\n                    <a href=\"dashboard-ecommerce.html\">St</a>\n                </div>\n                <ul class=\"sidebar-menu\">\n                    <li class=\"menu-header\">Dashboard</li>\n                    <li routerLinkActive=\"active\"><a class=\"nav-link\" routerLink=\"/pimpinan/dashboard\"><i class=\"fas fa-fire\"></i> <span>Dashboard</span></a>\n                        <li class=\"menu-header\">Starter</li>\n                        <li routerLinkActive=\"active\"><a class=\"nav-link\" routerLink=\"/pimpinan/marketing\"><i class=\"far fa-file-alt\"></i> <span>Input Data</span></a></li>\n                        <li routerLinkActive=\"active\"><a class=\"nav-link\" routerLink=\"/cek_data\"><i class=\"fas fa-plug\"></i> <span>Cek Data</span></a></li>\n                        <li routerLinkActive=\"active\"><a class=\"nav-link\" routerLink=\"/edit_data\"><i class=\"far fa-user\"></i> <span>Edit Data</span></a></li>\n                </ul>\n\n                <div class=\"mt-4 mb-4 p-3 hide-sidebar-mini\">\n                    <a href=\"https://getstisla.com\" class=\"btn btn-primary btn-lg btn-block btn-icon-split\">\n                        <i class=\"fas fa-rocket\"></i> Register Now\n                    </a>\n                </div>\n            </aside>\n        </div>\n\n        <!-- Main Content -->\n        <div class=\"main-content\">\n            <section class=\"section\">\n                <router-outlet></router-outlet>\n            </section>\n        </div>\n        <footer class=\"main-footer\">\n            <div class=\"footer-left\">\n                Copyright &copy; 2018\n                <div class=\"bullet\"></div>Design By <a href=\"https://nauval.in/\">Muhamad Nauval Azhar</a>\n            </div>\n            <div class=\"footer-right\">\n                v2.1.0\n            </div>\n        </footer>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/gudang/template-gudang/template-gudang.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/gudang/template-gudang/template-gudang.component.ts ***!
  \*********************************************************************/
/*! exports provided: TemplateGudangComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateGudangComponent", function() { return TemplateGudangComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _jwt_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../jwt-service.service */ "./src/app/jwt-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var TemplateGudangComponent = /** @class */ (function () {
    function TemplateGudangComponent(jwtService, router) {
        this.jwtService = jwtService;
        this.router = router;
    }
    TemplateGudangComponent.prototype.onLogout = function () {
        this.jwtService.logout();
        this.router.navigateByUrl('/login');
    };
    TemplateGudangComponent.prototype.ngOnInit = function () {
    };
    TemplateGudangComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-template-gudang',
            template: __webpack_require__(/*! ./template-gudang.component.html */ "./src/app/gudang/template-gudang/template-gudang.component.html"),
            styles: [__webpack_require__(/*! ./template-gudang.component.css */ "./src/app/gudang/template-gudang/template-gudang.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_jwt_service_service__WEBPACK_IMPORTED_MODULE_2__["JwtServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], TemplateGudangComponent);
    return TemplateGudangComponent;
}());



/***/ }),

/***/ "./src/app/hero-dashboard/hero-dashboard.component.css":
/*!*************************************************************!*\
  !*** ./src/app/hero-dashboard/hero-dashboard.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlcm8tZGFzaGJvYXJkL2hlcm8tZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/hero-dashboard/hero-dashboard.component.html":
/*!**************************************************************!*\
  !*** ./src/app/hero-dashboard/hero-dashboard.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section\">\n    <div class=\"section-header\">\n        <p>Dashboard</p>\n    </div>\n\n    <div class=\"section-body\">\n        <div class=\"row\">\n            <div class=\"col-lg-3 col-md-6 col-sm-6 col-12\">\n                <div class=\"card card-statistic-1\">\n                    <div class=\"card-icon bg-primary\">\n                        <i class=\"far fa-user\"></i>\n                    </div>\n                    <div class=\"card-wrap\">\n                        <div class=\"card-header\">\n                            <h4>Total Admin</h4>\n                        </div>\n                        <div class=\"card-body\">\n                            10\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-md-6 col-sm-6 col-12\">\n                <div class=\"card card-statistic-1\">\n                    <div class=\"card-icon bg-danger\">\n                        <i class=\"far fa-newspaper\"></i>\n                    </div>\n                    <div class=\"card-wrap\">\n                        <div class=\"card-header\">\n                            <h4>News</h4>\n                        </div>\n                        <div class=\"card-body\">\n                            42\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-md-6 col-sm-6 col-12\">\n                <div class=\"card card-statistic-1\">\n                    <div class=\"card-icon bg-warning\">\n                        <i class=\"far fa-file\"></i>\n                    </div>\n                    <div class=\"card-wrap\">\n                        <div class=\"card-header\">\n                            <h4>Reports</h4>\n                        </div>\n                        <div class=\"card-body\">\n                            1,201\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-md-6 col-sm-6 col-12\">\n                <div class=\"card card-statistic-1\">\n                    <div class=\"card-icon bg-success\">\n                        <i class=\"fas fa-circle\"></i>\n                    </div>\n                    <div class=\"card-wrap\">\n                        <div class=\"card-header\">\n                            <h4>Online Users</h4>\n                        </div>\n                        <div class=\"card-body\">\n                            47\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-12 col-md-6 col-lg-6\">\n                <div class=\"card\">\n                    <form class=\"needs-validation was-validated\" #form=\"ngForm\" novalidate>\n                        <div class=\"card-header\">\n                            <h4>Default Validation</h4>\n                        </div>\n                        <div class=\"card-body\">\n                            <div class=\"form-group\">\n                                <label>Hero Name</label>\n                                <input name=\"HeroName\" #HeroName=\"ngModel\" [(ngModel)]=\"service.formData.HeroName\" type=\"text\" class=\"form-control\" required>\n                                <div class=\"invalid-feedback\" *ngIf=\"HeroName.invalid && HeroName.touched\">\n                                    What's your hero name?\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <label>Hero Role</label>\n                                <input name=\"Role\" #Role=\"ngModel\" [(ngModel)]=\"service.formData.Role\" type=\"text\" class=\"form-control\" required>\n                                <div class=\"invalid-feedback\" *ngIf=\"Role.invalid && Role.touched\">\n                                    Field Role Type Masih Kosong\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <label>Hero Type</label>\n                                <input name=\"HeroType\" #HeroType=\"ngModel\" [(ngModel)]=\"service.formData.HeroType\" type=\"text\" class=\"form-control\" required>\n                                <div class=\"invalid-feedback\" *ngIf=\"HeroType.invalid && HeroType.touched\">\n                                    Field Hero Type Masih Kosong\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"card-footer text-right\">\n                            <button class=\"btn btn-primary\">Submit</button>\n                        </div>\n                    </form>\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-md-12 col-12 col-sm-12\">\n                <div class=\"card\">\n                    <div class=\"card-header\">\n                        <h4>Recent Activities</h4>\n                    </div>\n                    <div class=\"card-body\">\n                        <ul class=\"list-unstyled list-unstyled-border\">\n                            <li class=\"media\">\n                                <img class=\"mr-3 rounded-circle\" width=\"50\" src=\"../dist/img/avatar/avatar-1.png\" alt=\"avatar\">\n                                <div class=\"media-body\">\n                                    <div class=\"float-right text-primary\">Now</div>\n                                    <div class=\"media-title\">Farhan A Mujib</div>\n                                    <span class=\"text-small text-muted\">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.</span>\n                                </div>\n                            </li>\n                            <li class=\"media\">\n                                <img class=\"mr-3 rounded-circle\" width=\"50\" src=\"../dist/img/avatar/avatar-2.png\" alt=\"avatar\">\n                                <div class=\"media-body\">\n                                    <div class=\"float-right\">12m</div>\n                                    <div class=\"media-title\">Ujang Maman</div>\n                                    <span class=\"text-small text-muted\">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.</span>\n                                </div>\n                            </li>\n                            <li class=\"media\">\n                                <img class=\"mr-3 rounded-circle\" width=\"50\" src=\"../dist/img/avatar/avatar-3.png\" alt=\"avatar\">\n                                <div class=\"media-body\">\n                                    <div class=\"float-right\">17m</div>\n                                    <div class=\"media-title\">Rizal Fakhri</div>\n                                    <span class=\"text-small text-muted\">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.</span>\n                                </div>\n                            </li>\n                            <li class=\"media\">\n                                <img class=\"mr-3 rounded-circle\" width=\"50\" src=\"../dist/img/avatar/avatar-4.png\" alt=\"avatar\">\n                                <div class=\"media-body\">\n                                    <div class=\"float-right\">21m</div>\n                                    <div class=\"media-title\">Alfa Zulkarnain</div>\n                                    <span class=\"text-small text-muted\">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.</span>\n                                </div>\n                            </li>\n                        </ul>\n                        <div class=\"text-center pt-1 pb-1\">\n                            <a href=\"#\" class=\"btn btn-primary btn-lg btn-round\">\n          View All\n        </a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/hero-dashboard/hero-dashboard.component.ts":
/*!************************************************************!*\
  !*** ./src/app/hero-dashboard/hero-dashboard.component.ts ***!
  \************************************************************/
/*! exports provided: HeroDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroDashboardComponent", function() { return HeroDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_hero_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/hero.service */ "./src/app/shared/hero.service.ts");



var HeroDashboardComponent = /** @class */ (function () {
    function HeroDashboardComponent(service) {
        this.service = service;
    }
    HeroDashboardComponent.prototype.ngOnInit = function () {
        this.resetForm();
    };
    HeroDashboardComponent.prototype.resetForm = function (form) {
        if (form != null)
            form.resetForm();
        this.service.formData = {
            HeroID: null,
            HeroName: '',
            Role: '',
            HeroType: ''
        };
    };
    HeroDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hero-dashboard',
            template: __webpack_require__(/*! ./hero-dashboard.component.html */ "./src/app/hero-dashboard/hero-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./hero-dashboard.component.css */ "./src/app/hero-dashboard/hero-dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_hero_service__WEBPACK_IMPORTED_MODULE_2__["HeroService"]])
    ], HeroDashboardComponent);
    return HeroDashboardComponent;
}());



/***/ }),

/***/ "./src/app/hero-list/hero-list.component.css":
/*!***************************************************!*\
  !*** ./src/app/hero-list/hero-list.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlcm8tbGlzdC9oZXJvLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/hero-list/hero-list.component.html":
/*!****************************************************!*\
  !*** ./src/app/hero-list/hero-list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section\">\r\n    <div class=\"section-header\">\r\n        <p>Data List Hero</p>\r\n    </div>\r\n\r\n    <div class=\"section-body\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-4 col-md-12 col-12 col-sm-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\">\r\n                        <h4>Recent Activities</h4>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <ul class=\"list-unstyled list-unstyled-border\">\r\n                            <li class=\"media\">\r\n                                <img class=\"mr-3 rounded-circle\" width=\"50\" src=\"../dist/img/avatar/avatar-1.png\" alt=\"avatar\">\r\n                                <div class=\"media-body\">\r\n                                    <div class=\"float-right text-primary\">Now</div>\r\n                                    <div class=\"media-title\">Farhan A Mujib</div>\r\n                                    <span class=\"text-small text-muted\">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.</span>\r\n                                </div>\r\n                            </li>\r\n                            <li class=\"media\">\r\n                                <img class=\"mr-3 rounded-circle\" width=\"50\" src=\"../dist/img/avatar/avatar-2.png\" alt=\"avatar\">\r\n                                <div class=\"media-body\">\r\n                                    <div class=\"float-right\">12m</div>\r\n                                    <div class=\"media-title\">Ujang Maman</div>\r\n                                    <span class=\"text-small text-muted\">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.</span>\r\n                                </div>\r\n                            </li>\r\n                            <li class=\"media\">\r\n                                <img class=\"mr-3 rounded-circle\" width=\"50\" src=\"../dist/img/avatar/avatar-3.png\" alt=\"avatar\">\r\n                                <div class=\"media-body\">\r\n                                    <div class=\"float-right\">17m</div>\r\n                                    <div class=\"media-title\">Rizal Fakhri</div>\r\n                                    <span class=\"text-small text-muted\">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.</span>\r\n                                </div>\r\n                            </li>\r\n                            <li class=\"media\">\r\n                                <img class=\"mr-3 rounded-circle\" width=\"50\" src=\"../dist/img/avatar/avatar-4.png\" alt=\"avatar\">\r\n                                <div class=\"media-body\">\r\n                                    <div class=\"float-right\">21m</div>\r\n                                    <div class=\"media-title\">Alfa Zulkarnain</div>\r\n                                    <span class=\"text-small text-muted\">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.</span>\r\n                                </div>\r\n                            </li>\r\n                        </ul>\r\n                        <div class=\"text-center pt-1 pb-1\">\r\n                            <a href=\"#\" class=\"btn btn-primary btn-lg btn-round\">\r\n                                View All\r\n                              </a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/hero-list/hero-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/hero-list/hero-list.component.ts ***!
  \**************************************************/
/*! exports provided: HeroListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroListComponent", function() { return HeroListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeroListComponent = /** @class */ (function () {
    function HeroListComponent() {
    }
    HeroListComponent.prototype.ngOnInit = function () {
    };
    HeroListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hero-list',
            template: __webpack_require__(/*! ./hero-list.component.html */ "./src/app/hero-list/hero-list.component.html"),
            styles: [__webpack_require__(/*! ./hero-list.component.css */ "./src/app/hero-list/hero-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeroListComponent);
    return HeroListComponent;
}());



/***/ }),

/***/ "./src/app/hero-template/hero-template.component.css":
/*!***********************************************************!*\
  !*** ./src/app/hero-template/hero-template.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlcm8tdGVtcGxhdGUvaGVyby10ZW1wbGF0ZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/hero-template/hero-template.component.html":
/*!************************************************************!*\
  !*** ./src/app/hero-template/hero-template.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"app\">\n    <div class=\"main-wrapper main-wrapper-1\">\n        <div class=\"navbar-bg\"></div>\n        <nav class=\"navbar navbar-expand-lg main-navbar\">\n            <form class=\"form-inline mr-auto\">\n                <ul class=\"navbar-nav mr-3\">\n                    <li><a href=\"#\" data-toggle=\"sidebar\" class=\"nav-link nav-link-lg\"><i class=\"fas fa-bars\"></i></a>\n                    </li>\n                    <li><a href=\"#\" data-toggle=\"search\" class=\"nav-link nav-link-lg d-sm-none\"><i class=\"fas fa-search\"></i></a>\n                    </li>\n                </ul>\n                <div class=\"search-element\">\n                    <input class=\"form-control\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\" data-width=\"250\">\n                    <button class=\"btn\" type=\"submit\"><i class=\"fas fa-search\"></i>\n                </button>\n                    <div class=\"search-backdrop\"></div>\n                    <div class=\"search-result\">\n                        <div class=\"search-header\">\n                            Histories\n                        </div>\n                        <div class=\"search-item\">\n                            <a href=\"#\">How to hack NASA using CSS</a>\n                            <a href=\"#\" class=\"search-close\"><i class=\"fas fa-times\"></i></a>\n                        </div><div class=\"btn-group dropup\">\n                            <button type=\"button\" class=\"btn btn-secondary\">Dropup</button>\n                            <button type=\"button\" class=\"btn btn-secondary dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                <span class=\"sr-only\">Toggle Dropdown</span>\n                            </button>\n                            <div class=\"dropdown-menu\">\n                                ...\n                            </div>\n                        </div>\n                        <div class=\"search-item\">\n                            <a href=\"#\">Kodinger.com</a>\n                            <a href=\"#\" class=\"search-close\"><i class=\"fas fa-times\"></i></a>\n                        </div>\n                        <div class=\"search-item\">\n                            <a href=\"#\">#Stisla</a>\n                            <a href=\"#\" class=\"search-close\"><i class=\"fas fa-times\"></i></a>\n                        </div>\n                        <div class=\"search-header\">\n                            Result\n                        </div>\n                        <div class=\"search-item\">\n                            <a href=\"#\">\n                                <img class=\"mr-3 rounded\" width=\"30\" src=\"../dist/img/products/product-3-50.png\" alt=\"product\">oPhone S9 Limited Edition\n                            </a>\n                        </div>\n                        <div class=\"search-item\">\n                            <a href=\"#\">\n                                <img class=\"mr-3 rounded\" width=\"30\" src=\"../dist/img/products/product-2-50.png\" alt=\"product\">Drone X2 New Gen-7\n                            </a>\n                        </div>\n                        <div class=\"search-item\">\n                            <a href=\"#\">\n                                <img class=\"mr-3 rounded\" width=\"30\" src=\"../dist/img/products/product-1-50.png\" alt=\"product\">Headphone Blitz\n                            </a>\n                        </div>\n                        <div class=\"search-header\">\n                            Projects\n                        </div>\n                        <div class=\"search-item\">\n                            <a href=\"#\">\n                                <div class=\"search-icon bg-danger text-white mr-3\">\n                                    <i class=\"fas fa-code\"></i>\n                                </div>\n                                Stisla Admin Template\n                            </a>\n                        </div>\n                        <div class=\"search-item\">\n                            <a href=\"#\">\n                                <div class=\"search-icon bg-primary text-white mr-3\">\n                                    <i class=\"fas fa-laptop\"></i>\n                                </div>\n                                Create a new Homepage Design\n                            </a>\n                        </div>\n                    </div>\n                </div>\n            </form>\n            <ul class=\"navbar-nav navbar-right\">\n                <li class=\"dropdown dropdown-list-toggle\"><a href=\"#\" data-toggle=\"dropdown\" class=\"nav-link nav-link-lg message-toggle beep\"><i class=\"far fa-envelope\"></i></a>\n                    <div class=\"dropdown-menu dropdown-list dropdown-menu-right\">\n                        <div class=\"dropdown-header\">Messages\n                            <div class=\"float-right\">\n                                <a href=\"#\">Mark All As Read</a>\n                            </div>\n                        </div>\n                        <div class=\"dropdown-list-content dropdown-list-message\">\n                            <a href=\"#\" class=\"dropdown-item dropdown-item-unread\">\n                                <div class=\"dropdown-item-avatar\">\n                                    <img alt=\"image\" src=\"../dist/img/avatar/avatar-1.png\" class=\"rounded-circle\">\n                                    <div class=\"is-online\"></div>\n                                </div>\n                                <div class=\"dropdown-item-desc\">\n                                    <b>Kusnaedi</b>\n                                    <p>Hello, Bro!</p>\n                                    <div class=\"time\">10 Hours Ago</div>\n                                </div>\n                            </a>\n                            <a href=\"#\" class=\"dropdown-item dropdown-item-unread\">\n                                <div class=\"dropdown-item-avatar\">\n                                    <img alt=\"image\" src=\"../dist/img/avatar/avatar-2.png\" class=\"rounded-circle\">\n                                </div>\n                                <div class=\"dropdown-item-desc\">\n                                    <b>Dedik Sugiharto</b>\n                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>\n                                    <div class=\"time\">12 Hours Ago</div>\n                                </div>\n                            </a>\n                            <a href=\"#\" class=\"dropdown-item dropdown-item-unread\">\n                                <div class=\"dropdown-item-avatar\">\n                                    <img alt=\"image\" src=\"../dist/img/avatar/avatar-3.png\" class=\"rounded-circle\">\n                                    <div class=\"is-online\"></div>\n                                </div>\n                                <div class=\"dropdown-item-desc\">\n                                    <b>Agung Ardiansyah</b>\n                                    <p>Sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n                                    <div class=\"time\">12 Hours Ago</div>\n                                </div>\n                            </a>\n                            <a href=\"#\" class=\"dropdown-item\">\n                                <div class=\"dropdown-item-avatar\">\n                                    <img alt=\"image\" src=\"../dist/img/avatar/avatar-4.png\" class=\"rounded-circle\">\n                                </div>\n                                <div class=\"dropdown-item-desc\">\n                                    <b>Ardian Rahardiansyah</b>\n                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit ess</p>\n                                    <div class=\"time\">16 Hours Ago</div>\n                                </div>\n                            </a>\n                            <a href=\"#\" class=\"dropdown-item\">\n                                <div class=\"dropdown-item-avatar\">\n                                    <img alt=\"image\" src=\"../dist/img/avatar/avatar-5.png\" class=\"rounded-circle\">\n                                </div>\n                                <div class=\"dropdown-item-desc\">\n                                    <b>Alfa Zulkarnain</b>\n                                    <p>Exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>\n                                    <div class=\"time\">Yesterday</div>\n                                </div>\n                            </a>\n                        </div>\n                        <div class=\"dropdown-footer text-center\">\n                            <a href=\"#\">View All <i class=\"fas fa-chevron-right\"></i></a>\n                        </div>\n                    </div>\n                </li>\n                <li class=\"dropdown dropdown-list-toggle\"><a href=\"#\" data-toggle=\"dropdown\" class=\"nav-link notification-toggle nav-link-lg beep\"><i class=\"far fa-bell\"></i></a>\n                    <div class=\"dropdown-menu dropdown-list dropdown-menu-right\">\n                        <div class=\"dropdown-header\">Notifications\n                            <div class=\"float-right\">\n                                <a href=\"#\">Mark All As Read</a>\n                            </div>\n                        </div>\n                        <div class=\"dropdown-list-content dropdown-list-icons\">\n                            <a href=\"#\" class=\"dropdown-item dropdown-item-unread\">\n                                <div class=\"dropdown-item-icon bg-primary text-white\">\n                                    <i class=\"fas fa-code\"></i>\n                                </div>\n                                <div class=\"dropdown-item-desc\">\n                                    Template update is available now!\n                                    <div class=\"time text-primary\">2 Min Ago</div>\n                                </div>\n                            </a>\n                            <a href=\"#\" class=\"dropdown-item\">\n                                <div class=\"dropdown-item-icon bg-info text-white\">\n                                    <i class=\"far fa-user\"></i>\n                                </div>\n                                <div class=\"dropdown-item-desc\">\n                                    <b>You</b> and <b>Dedik Sugiharto</b> are now friends\n                                    <div class=\"time\">10 Hours Ago</div>\n                                </div>\n                            </a>\n                            <a href=\"#\" class=\"dropdown-item\">\n                                <div class=\"dropdown-item-icon bg-success text-white\">\n                                    <i class=\"fas fa-check\"></i>\n                                </div>\n                                <div class=\"dropdown-item-desc\">\n                                    <b>Kusnaedi</b> has moved task <b>Fix bug header</b> to <b>Done</b>\n                                    <div class=\"time\">12 Hours Ago</div>\n                                </div>\n                            </a>\n                            <a href=\"#\" class=\"dropdown-item\">\n                                <div class=\"dropdown-item-icon bg-danger text-white\">\n                                    <i class=\"fas fa-exclamation-triangle\"></i>\n                                </div>\n                                <div class=\"dropdown-item-desc\">\n                                    Low disk space. Let's clean it!\n                                    <div class=\"time\">17 Hours Ago</div>\n                                </div>\n                            </a>\n                            <a href=\"#\" class=\"dropdown-item\">\n                                <div class=\"dropdown-item-icon bg-info text-white\">\n                                    <i class=\"fas fa-bell\"></i>\n                                </div>\n                                <div class=\"dropdown-item-desc\">\n                                    Welcome to Stisla template!\n                                    <div class=\"time\">Yesterday</div>\n                                </div>\n                            </a>\n                        </div>\n                        <div class=\"dropdown-footer text-center\">\n                            <a href=\"#\">View All <i class=\"fas fa-chevron-right\"></i></a>\n                        </div>\n                    </div>\n                </li>\n                <li class=\"dropdown\">\n                    <a href=\"#\" data-toggle=\"dropdown\" class=\"nav-link dropdown-toggle nav-link-lg nav-link-user\">\n                        <img alt=\"image\" src=\"../dist/img/avatar/avatar-1.png\" class=\"rounded-circle mr-1\">\n                        <div class=\"d-sm-none d-lg-inline-block\">Hi, Ujang Maman</div>\n                    </a>\n                    <div class=\"dropdown-menu dropdown-menu-right\">\n                        <div class=\"dropdown-title\">Logged in 5 min ago</div>\n                        <a href=\"features-profile.html\" class=\"dropdown-item has-icon\">\n                            <i class=\"far fa-user\"></i> Profile\n                        </a>\n                        <a href=\"features-activities.html\" class=\"dropdown-item has-icon\">\n                            <i class=\"fas fa-bolt\"></i> Activities\n                        </a>\n                        <a href=\"features-settings.html\" class=\"dropdown-item has-icon\">\n                            <i class=\"fas fa-cog\"></i> Settings\n                        </a>\n                        <div class=\"dropdown-divider\"></div>\n                        <a href=\"#\" class=\"dropdown-item has-icon text-danger\">\n                            <i class=\"fas fa-sign-out-alt\"></i> Logout\n                        </a>\n                    </div>\n                </li>\n            </ul>\n        </nav>\n        <div class=\"main-sidebar sidebar-style-2\">\n            <aside id=\"sidebar-wrapper\">\n                <div class=\"sidebar-brand\">\n                    <a href=\"dashboard-ecommerce.html\">Stisla</a>\n                </div>\n                <div class=\"sidebar-brand sidebar-brand-sm\">\n                    <a href=\"dashboard-ecommerce.html\">St</a>\n                </div>\n                <ul class=\"sidebar-menu\">\n                    <li class=\"menu-header\">Dashboard</li>\n                    <li routerLinkActive=\"active\"><a class=\"nav-link\" routerLink=\"/dashboard\"><i class=\"fas fa-fire\"></i> <span>Dashboard</span></a>\n                        <li class=\"menu-header\">Starter</li>\n                        <li routerLinkActive=\"active\"><a class=\"nav-link\" routerLink=\"/input_data\"><i class=\"far fa-file-alt\"></i> <span>Input Data</span></a></li>\n                        <li routerLinkActive=\"active\"><a class=\"nav-link\" routerLink=\"/cek_data\"><i class=\"fas fa-plug\"></i> <span>Cek Data</span></a></li>\n                        <li routerLinkActive=\"active\"><a class=\"nav-link\" routerLink=\"/edit_data\"><i class=\"far fa-user\"></i> <span>Edit Data</span></a></li>\n                </ul>\n\n                <div class=\"mt-4 mb-4 p-3 hide-sidebar-mini\">\n                    <a href=\"https://getstisla.com\" class=\"btn btn-primary btn-lg btn-block btn-icon-split\">\n                        <i class=\"fas fa-rocket\"></i> Register Now\n                    </a>\n                </div>\n            </aside>\n        </div>\n\n        <!-- Main Content -->\n        <div class=\"main-content\">\n            <router-outlet></router-outlet>\n        </div>\n        <footer class=\"main-footer\">\n            <div class=\"footer-left\">\n                Copyright &copy; 2018\n                <div class=\"bullet\"></div>Design By <a href=\"https://nauval.in/\">Muhamad Nauval Azhar</a>\n            </div>\n            <div class=\"footer-right\">\n                v2.1.0\n            </div>\n        </footer>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/hero-template/hero-template.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/hero-template/hero-template.component.ts ***!
  \**********************************************************/
/*! exports provided: HeroTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroTemplateComponent", function() { return HeroTemplateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeroTemplateComponent = /** @class */ (function () {
    function HeroTemplateComponent() {
    }
    HeroTemplateComponent.prototype.ngOnInit = function () {
    };
    HeroTemplateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hero-template',
            template: __webpack_require__(/*! ./hero-template.component.html */ "./src/app/hero-template/hero-template.component.html"),
            styles: [__webpack_require__(/*! ./hero-template.component.css */ "./src/app/hero-template/hero-template.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeroTemplateComponent);
    return HeroTemplateComponent;
}());



/***/ }),

/***/ "./src/app/jwt-service.service.ts":
/*!****************************************!*\
  !*** ./src/app/jwt-service.service.ts ***!
  \****************************************/
/*! exports provided: JwtServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtServiceService", function() { return JwtServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var JwtServiceService = /** @class */ (function () {
    function JwtServiceService(http) {
        this.http = http;
        this.baseurl = 'http://localhost:8000';
    }
    JwtServiceService.prototype.signin = function (data) {
        return this.http.post(this.baseurl + "/login", data);
    };
    JwtServiceService.prototype.logout = function () {
        localStorage.removeItem('token');
    };
    JwtServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], JwtServiceService);
    return JwtServiceService;
}());



/***/ }),

/***/ "./src/app/login/loginform/loginform.component.css":
/*!*********************************************************!*\
  !*** ./src/app/login/loginform/loginform.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luZm9ybS9sb2dpbmZvcm0uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/login/loginform/loginform.component.html":
/*!**********************************************************!*\
  !*** ./src/app/login/loginform/loginform.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section\">\n    <div class=\"container mt-5\">\n        <div class=\"row\">\n            <div class=\"col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4\">\n                <div class=\"card card-primary\">\n                    <div class=\"card-header\">\n                        <h4>Project Realtime Detector</h4>\n                    </div>\n\n                    <div class=\"card-body\">\n                        <div class=\"text-center mt-4 mb-3\">\n                            <div class=\"text-job text-muted\">\n                                <video hidden id=\"vid\" width=\"300\" height=\"300\" autoplay></video>\n                                <canvas id=\"canvas\"></canvas>\n                            </div>\n                        </div>\n                        <div class=\"text-center mt-4 mb-3\">\n                            <div class=\"text-job text-muted\">PAPAP PROJECT</div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"mt-5 text-muted text-center\">\n\n                </div>\n                <div class=\"simple-footer\">\n                    Copyright &copy; papap 2019\n                </div>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/login/loginform/loginform.component.ts":
/*!********************************************************!*\
  !*** ./src/app/login/loginform/loginform.component.ts ***!
  \********************************************************/
/*! exports provided: LoginformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginformComponent", function() { return LoginformComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tensorflow_models_coco_ssd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tensorflow-models/coco-ssd */ "./node_modules/@tensorflow-models/coco-ssd/dist/coco-ssd.esm.js");


//import COCO-SSD model as cocoSSD

var LoginformComponent = /** @class */ (function () {
    function LoginformComponent() {
        var _this = this;
        this.title = 'TF-ObjectDetection';
        this.detectFrame = function (video, model) {
            model.detect(video).then(function (predictions) {
                _this.renderPredictions(predictions);
                requestAnimationFrame(function () {
                    _this.detectFrame(video, model);
                });
            });
        };
        this.renderPredictions = function (predictions) {
            var canvas = document.getElementById("canvas");
            var ctx = canvas.getContext("2d");
            canvas.width = 300;
            canvas.height = 300;
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            // Font options.
            var font = "16px sans-serif";
            ctx.font = font;
            ctx.textBaseline = "top";
            ctx.drawImage(_this.video, 0, 0, 300, 300);
            predictions.forEach(function (prediction) {
                var x = prediction.bbox[0];
                var y = prediction.bbox[1];
                var width = prediction.bbox[2];
                var height = prediction.bbox[3];
                // Draw the bounding box.
                ctx.strokeStyle = "#00FFFF";
                ctx.lineWidth = 2;
                ctx.strokeRect(x, y, width, height);
                // Draw the label background.
                ctx.fillStyle = "#00FFFF";
                var textWidth = ctx.measureText(prediction.class).width;
                var textHeight = parseInt(font, 10); // base 10
                ctx.fillRect(x, y, textWidth + 4, textHeight + 4);
            });
            predictions.forEach(function (prediction) {
                var x = prediction.bbox[0];
                var y = prediction.bbox[1];
                // Draw the text last to ensure it's on top.
                ctx.fillStyle = "#000000";
                ctx.fillText(prediction.class, x, y);
            });
        };
    }
    LoginformComponent.prototype.ngOnInit = function () {
        this.webcam_init();
        this.predictWithCocoModel();
    };
    LoginformComponent.prototype.predictWithCocoModel = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var model;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _tensorflow_models_coco_ssd__WEBPACK_IMPORTED_MODULE_2__["load"]('lite_mobilenet_v2')];
                    case 1:
                        model = _a.sent();
                        this.detectFrame(this.video, model);
                        console.log('model loaded');
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginformComponent.prototype.webcam_init = function () {
        var _this = this;
        this.video = document.getElementById("vid");
        navigator.mediaDevices
            .getUserMedia({
            audio: true,
            video: { facingMode: "user", }
        })
            .then(function (stream) {
            _this.video.srcObject = stream;
            _this.video.onloadedmetadata = function () {
                _this.video.play();
            };
        });
    };
    LoginformComponent.prototype.onSubmit = function () {
    };
    LoginformComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loginform',
            template: __webpack_require__(/*! ./loginform.component.html */ "./src/app/login/loginform/loginform.component.html"),
            styles: [__webpack_require__(/*! ./loginform.component.css */ "./src/app/login/loginform/loginform.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginformComponent);
    return LoginformComponent;
}());



/***/ }),

/***/ "./src/app/pimpinan/dashboard/dashboard.component.css":
/*!************************************************************!*\
  !*** ./src/app/pimpinan/dashboard/dashboard.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BpbXBpbmFuL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pimpinan/dashboard/dashboard.component.html":
/*!*************************************************************!*\
  !*** ./src/app/pimpinan/dashboard/dashboard.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section-header\">\n    <h1>Dashborad</h1>\n</div>\n<div class=\"row\">\n    <div class=\"col-12 col-md-6 col-lg-6\">\n        <h1>Hallo</h1>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/pimpinan/dashboard/dashboard.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/pimpinan/dashboard/dashboard.component.ts ***!
  \***********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/pimpinan/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/pimpinan/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/pimpinan/marketing/marketing.component.css":
/*!************************************************************!*\
  !*** ./src/app/pimpinan/marketing/marketing.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BpbXBpbmFuL21hcmtldGluZy9tYXJrZXRpbmcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pimpinan/marketing/marketing.component.html":
/*!*************************************************************!*\
  !*** ./src/app/pimpinan/marketing/marketing.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section-header\">\n    <h1>Marketing</h1>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-12 col-md-6 col-lg-12\">\n        <div class=\"card\">\n            <div class=\"card-header\">\n                <h4>Simple Table</h4>\n            </div>\n            <div class=\"card-body\">\n                <div class=\"table-responsive\">\n                    <table class=\"table table-bordered table-md\">\n                        <tr>\n                            <th>#</th>\n                            <th>Name</th>\n                            <th>Created At</th>\n                            <th>Status</th>\n                            <th>Action</th>\n                        </tr>\n                        <tr>\n                            <td>1</td>\n                            <td>Irwansyah Saputra</td>\n                            <td>2017-01-09</td>\n                            <td>\n                                <div class=\"badge badge-success\">Active</div>\n                            </td>\n                            <td><a href=\"#\" class=\"btn btn-secondary\">Detail</a></td>\n                        </tr>\n                        <tr>\n                            <td>2</td>\n                            <td>Hasan Basri</td>\n                            <td>2017-01-09</td>\n                            <td>\n                                <div class=\"badge badge-success\">Active</div>\n                            </td>\n                            <td><a href=\"#\" class=\"btn btn-secondary\">Detail</a></td>\n                        </tr>\n                        <tr>\n                            <td>3</td>\n                            <td>Kusnadi</td>\n                            <td>2017-01-11</td>\n                            <td>\n                                <div class=\"badge badge-danger\">Not Active</div>\n                            </td>\n                            <td><a href=\"#\" class=\"btn btn-secondary\">Detail</a></td>\n                        </tr>\n                        <tr>\n                            <td>4</td>\n                            <td>Rizal Fakhri</td>\n                            <td>2017-01-11</td>\n                            <td>\n                                <div class=\"badge badge-success\">Active</div>\n                            </td>\n                            <td><a href=\"#\" class=\"btn btn-secondary\">Detail</a></td>\n                        </tr>\n                    </table>\n                </div>\n            </div>\n            <div class=\"card-footer text-right\">\n                <nav class=\"d-inline-block\">\n                    <ul class=\"pagination mb-0\">\n                        <li class=\"page-item disabled\">\n                            <a class=\"page-link\" href=\"#\" tabindex=\"-1\"><i class=\"fas fa-chevron-left\"></i></a>\n                        </li>\n                        <li class=\"page-item active\"><a class=\"page-link\" href=\"#\">1 <span class=\"sr-only\">(current)</span></a></li>\n                        <li class=\"page-item\">\n                            <a class=\"page-link\" href=\"#\">2</a>\n                        </li>\n                        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n                        <li class=\"page-item\">\n                            <a class=\"page-link\" href=\"#\"><i class=\"fas fa-chevron-right\"></i></a>\n                        </li>\n                    </ul>\n                </nav>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/pimpinan/marketing/marketing.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/pimpinan/marketing/marketing.component.ts ***!
  \***********************************************************/
/*! exports provided: MarketingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketingComponent", function() { return MarketingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MarketingComponent = /** @class */ (function () {
    function MarketingComponent() {
    }
    MarketingComponent.prototype.ngOnInit = function () {
    };
    MarketingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-marketing',
            template: __webpack_require__(/*! ./marketing.component.html */ "./src/app/pimpinan/marketing/marketing.component.html"),
            styles: [__webpack_require__(/*! ./marketing.component.css */ "./src/app/pimpinan/marketing/marketing.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MarketingComponent);
    return MarketingComponent;
}());



/***/ }),

/***/ "./src/app/pimpinan/template/template.component.css":
/*!**********************************************************!*\
  !*** ./src/app/pimpinan/template/template.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BpbXBpbmFuL3RlbXBsYXRlL3RlbXBsYXRlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pimpinan/template/template.component.html":
/*!***********************************************************!*\
  !*** ./src/app/pimpinan/template/template.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"app\">\n    <div class=\"main-wrapper main-wrapper-1\">\n        <div class=\"navbar-bg\"></div>\n        <nav class=\"navbar navbar-expand-lg main-navbar\">\n            <form class=\"form-inline mr-auto\">\n                <ul class=\"navbar-nav mr-3\">\n                    <li><a href=\"#\" data-toggle=\"sidebar\" class=\"nav-link nav-link-lg\"><i class=\"fas fa-bars\"></i></a>\n                    </li>\n                    <li><a href=\"#\" data-toggle=\"search\" class=\"nav-link nav-link-lg d-sm-none\"><i class=\"fas fa-search\"></i></a>\n                    </li>\n                </ul>\n                <div class=\"search-element\">\n                    <input class=\"form-control\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\" data-width=\"250\">\n                    <button class=\"btn\" type=\"submit\"><i class=\"fas fa-search\"></i>\n              </button>\n                    <div class=\"search-backdrop\"></div>\n                    <div class=\"search-result\">\n                        <div class=\"search-header\">\n                            Histories\n                        </div>\n                        <div class=\"search-item\">\n                            <a href=\"#\">How to hack NASA using CSS</a>\n                            <a href=\"#\" class=\"search-close\"><i class=\"fas fa-times\"></i></a>\n                        </div>\n                        <div class=\"btn-group dropup\">\n                            <button type=\"button\" class=\"btn btn-secondary\">Dropup</button>\n                            <button type=\"button\" class=\"btn btn-secondary dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                              <span class=\"sr-only\">Toggle Dropdown</span>\n                          </button>\n                            <div class=\"dropdown-menu\">\n                                ...\n                            </div>\n                        </div>\n                        <div class=\"search-item\">\n                            <a href=\"#\">Kodinger.com</a>\n                            <a href=\"#\" class=\"search-close\"><i class=\"fas fa-times\"></i></a>\n                        </div>\n                        <div class=\"search-item\">\n                            <a href=\"#\">#Stisla</a>\n                            <a href=\"#\" class=\"search-close\"><i class=\"fas fa-times\"></i></a>\n                        </div>\n                        <div class=\"search-header\">\n                            Result\n                        </div>\n                        <div class=\"search-item\">\n                            <a href=\"#\">\n                                <img class=\"mr-3 rounded\" width=\"30\" src=\"../dist/img/products/product-3-50.png\" alt=\"product\">oPhone S9 Limited Edition\n                            </a>\n                        </div>\n                        <div class=\"search-item\">\n                            <a href=\"#\">\n                                <img class=\"mr-3 rounded\" width=\"30\" src=\"../dist/img/products/product-2-50.png\" alt=\"product\">Drone X2 New Gen-7\n                            </a>\n                        </div>\n                        <div class=\"search-item\">\n                            <a href=\"#\">\n                                <img class=\"mr-3 rounded\" width=\"30\" src=\"../dist/img/products/product-1-50.png\" alt=\"product\">Headphone Blitz\n                            </a>\n                        </div>\n                        <div class=\"search-header\">\n                            Projects\n                        </div>\n                        <div class=\"search-item\">\n                            <a href=\"#\">\n                                <div class=\"search-icon bg-danger text-white mr-3\">\n                                    <i class=\"fas fa-code\"></i>\n                                </div>\n                                Stisla Admin Template\n                            </a>\n                        </div>\n                        <div class=\"search-item\">\n                            <a href=\"#\">\n                                <div class=\"search-icon bg-primary text-white mr-3\">\n                                    <i class=\"fas fa-laptop\"></i>\n                                </div>\n                                Create a new Homepage Design\n                            </a>\n                        </div>\n                    </div>\n                </div>\n            </form>\n            <ul class=\"navbar-nav navbar-right\">\n                <li class=\"dropdown dropdown-list-toggle\"><a href=\"#\" data-toggle=\"dropdown\" class=\"nav-link nav-link-lg message-toggle beep\"><i class=\"far fa-envelope\"></i></a>\n                    <div class=\"dropdown-menu dropdown-list dropdown-menu-right\">\n                        <div class=\"dropdown-header\">Messages\n                            <div class=\"float-right\">\n                                <a href=\"#\">Mark All As Read</a>\n                            </div>\n                        </div>\n                        <div class=\"dropdown-list-content dropdown-list-message\">\n                            <a href=\"#\" class=\"dropdown-item dropdown-item-unread\">\n                                <div class=\"dropdown-item-avatar\">\n                                    <img alt=\"image\" src=\"../dist/img/avatar/avatar-1.png\" class=\"rounded-circle\">\n                                    <div class=\"is-online\"></div>\n                                </div>\n                                <div class=\"dropdown-item-desc\">\n                                    <b>Kusnaedi</b>\n                                    <p>Hello, Bro!</p>\n                                    <div class=\"time\">10 Hours Ago</div>\n                                </div>\n                            </a>\n                            <a href=\"#\" class=\"dropdown-item dropdown-item-unread\">\n                                <div class=\"dropdown-item-avatar\">\n                                    <img alt=\"image\" src=\"../dist/img/avatar/avatar-2.png\" class=\"rounded-circle\">\n                                </div>\n                                <div class=\"dropdown-item-desc\">\n                                    <b>Dedik Sugiharto</b>\n                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>\n                                    <div class=\"time\">12 Hours Ago</div>\n                                </div>\n                            </a>\n                            <a href=\"#\" class=\"dropdown-item dropdown-item-unread\">\n                                <div class=\"dropdown-item-avatar\">\n                                    <img alt=\"image\" src=\"../dist/img/avatar/avatar-3.png\" class=\"rounded-circle\">\n                                    <div class=\"is-online\"></div>\n                                </div>\n                                <div class=\"dropdown-item-desc\">\n                                    <b>Agung Ardiansyah</b>\n                                    <p>Sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n                                    <div class=\"time\">12 Hours Ago</div>\n                                </div>\n                            </a>\n                            <a href=\"#\" class=\"dropdown-item\">\n                                <div class=\"dropdown-item-avatar\">\n                                    <img alt=\"image\" src=\"../dist/img/avatar/avatar-4.png\" class=\"rounded-circle\">\n                                </div>\n                                <div class=\"dropdown-item-desc\">\n                                    <b>Ardian Rahardiansyah</b>\n                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit ess</p>\n                                    <div class=\"time\">16 Hours Ago</div>\n                                </div>\n                            </a>\n                            <a href=\"#\" class=\"dropdown-item\">\n                                <div class=\"dropdown-item-avatar\">\n                                    <img alt=\"image\" src=\"../dist/img/avatar/avatar-5.png\" class=\"rounded-circle\">\n                                </div>\n                                <div class=\"dropdown-item-desc\">\n                                    <b>Alfa Zulkarnain</b>\n                                    <p>Exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>\n                                    <div class=\"time\">Yesterday</div>\n                                </div>\n                            </a>\n                        </div>\n                        <div class=\"dropdown-footer text-center\">\n                            <a href=\"#\">View All <i class=\"fas fa-chevron-right\"></i></a>\n                        </div>\n                    </div>\n                </li>\n                <li class=\"dropdown dropdown-list-toggle\"><a href=\"#\" data-toggle=\"dropdown\" class=\"nav-link notification-toggle nav-link-lg beep\"><i class=\"far fa-bell\"></i></a>\n                    <div class=\"dropdown-menu dropdown-list dropdown-menu-right\">\n                        <div class=\"dropdown-header\">Notifications\n                            <div class=\"float-right\">\n                                <a href=\"#\">Mark All As Read</a>\n                            </div>\n                        </div>\n                        <div class=\"dropdown-list-content dropdown-list-icons\">\n                            <a href=\"#\" class=\"dropdown-item dropdown-item-unread\">\n                                <div class=\"dropdown-item-icon bg-primary text-white\">\n                                    <i class=\"fas fa-code\"></i>\n                                </div>\n                                <div class=\"dropdown-item-desc\">\n                                    Template update is available now!\n                                    <div class=\"time text-primary\">2 Min Ago</div>\n                                </div>\n                            </a>\n                            <a href=\"#\" class=\"dropdown-item\">\n                                <div class=\"dropdown-item-icon bg-info text-white\">\n                                    <i class=\"far fa-user\"></i>\n                                </div>\n                                <div class=\"dropdown-item-desc\">\n                                    <b>You</b> and <b>Dedik Sugiharto</b> are now friends\n                                    <div class=\"time\">10 Hours Ago</div>\n                                </div>\n                            </a>\n                            <a href=\"#\" class=\"dropdown-item\">\n                                <div class=\"dropdown-item-icon bg-success text-white\">\n                                    <i class=\"fas fa-check\"></i>\n                                </div>\n                                <div class=\"dropdown-item-desc\">\n                                    <b>Kusnaedi</b> has moved task <b>Fix bug header</b> to <b>Done</b>\n                                    <div class=\"time\">12 Hours Ago</div>\n                                </div>\n                            </a>\n                            <a href=\"#\" class=\"dropdown-item\">\n                                <div class=\"dropdown-item-icon bg-danger text-white\">\n                                    <i class=\"fas fa-exclamation-triangle\"></i>\n                                </div>\n                                <div class=\"dropdown-item-desc\">\n                                    Low disk space. Let's clean it!\n                                    <div class=\"time\">17 Hours Ago</div>\n                                </div>\n                            </a>\n                            <a href=\"#\" class=\"dropdown-item\">\n                                <div class=\"dropdown-item-icon bg-info text-white\">\n                                    <i class=\"fas fa-bell\"></i>\n                                </div>\n                                <div class=\"dropdown-item-desc\">\n                                    Welcome to Stisla template!\n                                    <div class=\"time\">Yesterday</div>\n                                </div>\n                            </a>\n                        </div>\n                        <div class=\"dropdown-footer text-center\">\n                            <a href=\"#\">View All <i class=\"fas fa-chevron-right\"></i></a>\n                        </div>\n                    </div>\n                </li>\n                <li class=\"dropdown\">\n                    <a href=\"#\" data-toggle=\"dropdown\" class=\"nav-link dropdown-toggle nav-link-lg nav-link-user\">\n                        <img alt=\"image\" src=\"../dist/img/avatar/avatar-1.png\" class=\"rounded-circle mr-1\">\n                        <div class=\"d-sm-none d-lg-inline-block\">Hi, Ujang Maman</div>\n                    </a>\n                    <div class=\"dropdown-menu dropdown-menu-right\">\n                        <div class=\"dropdown-title\">Logged in 5 min ago</div>\n                        <a href=\"features-profile.html\" class=\"dropdown-item has-icon\">\n                            <i class=\"far fa-user\"></i> Profile\n                        </a>\n                        <a href=\"features-activities.html\" class=\"dropdown-item has-icon\">\n                            <i class=\"fas fa-bolt\"></i> Activities\n                        </a>\n                        <a href=\"features-settings.html\" class=\"dropdown-item has-icon\">\n                            <i class=\"fas fa-cog\"></i> Settings\n                        </a>\n                        <div class=\"dropdown-divider\"></div>\n                        <a href=\"\" (click)=\"onLogout()\" class=\"dropdown-item has-icon text-danger\">\n                            <i class=\"fas fa-sign-out-alt\"></i> Logout\n                        </a>\n                    </div>\n                </li>\n            </ul>\n        </nav>\n        <div class=\"main-sidebar sidebar-style-2\">\n            <aside id=\"sidebar-wrapper\">\n                <div class=\"sidebar-brand\">\n                    <a href=\"dashboard-ecommerce.html\">Stisla</a>\n                </div>\n                <div class=\"sidebar-brand sidebar-brand-sm\">\n                    <a href=\"dashboard-ecommerce.html\">St</a>\n                </div>\n                <ul class=\"sidebar-menu\">\n                    <li class=\"menu-header\">Dashboard</li>\n                    <li routerLinkActive=\"active\"><a class=\"nav-link\" routerLink=\"/pimpinan/dashboard\"><i class=\"fas fa-fire\"></i> <span>Dashboard</span></a>\n                        <li class=\"menu-header\">Starter</li>\n                        <li routerLinkActive=\"active\"><a class=\"nav-link\" routerLink=\"/pimpinan/marketing\"><i class=\"far fa-file-alt\"></i> <span>Input Data</span></a></li>\n                        <li routerLinkActive=\"active\"><a class=\"nav-link\" routerLink=\"/cek_data\"><i class=\"fas fa-plug\"></i> <span>Cek Data</span></a></li>\n                        <li routerLinkActive=\"active\"><a class=\"nav-link\" routerLink=\"/edit_data\"><i class=\"far fa-user\"></i> <span>Edit Data</span></a></li>\n                </ul>\n\n                <div class=\"mt-4 mb-4 p-3 hide-sidebar-mini\">\n                    <a href=\"https://getstisla.com\" class=\"btn btn-primary btn-lg btn-block btn-icon-split\">\n                        <i class=\"fas fa-rocket\"></i> Register Now\n                    </a>\n                </div>\n            </aside>\n        </div>\n\n        <!-- Main Content -->\n        <div class=\"main-content\">\n            <section class=\"section\">\n                <router-outlet></router-outlet>\n            </section>\n        </div>\n        <footer class=\"main-footer\">\n            <div class=\"footer-left\">\n                Copyright &copy; 2018\n                <div class=\"bullet\"></div>Design By <a href=\"https://nauval.in/\">Muhamad Nauval Azhar</a>\n            </div>\n            <div class=\"footer-right\">\n                v2.1.0\n            </div>\n        </footer>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/pimpinan/template/template.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/pimpinan/template/template.component.ts ***!
  \*********************************************************/
/*! exports provided: TemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateComponent", function() { return TemplateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _jwt_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../jwt-service.service */ "./src/app/jwt-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var TemplateComponent = /** @class */ (function () {
    function TemplateComponent(jwtService, router) {
        this.jwtService = jwtService;
        this.router = router;
    }
    TemplateComponent.prototype.onLogout = function () {
        this.jwtService.logout();
    };
    TemplateComponent.prototype.ngOnInit = function () {
    };
    TemplateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'pimpinan',
            template: __webpack_require__(/*! ./template.component.html */ "./src/app/pimpinan/template/template.component.html"),
            styles: [__webpack_require__(/*! ./template.component.css */ "./src/app/pimpinan/template/template.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_jwt_service_service__WEBPACK_IMPORTED_MODULE_2__["JwtServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], TemplateComponent);
    return TemplateComponent;
}());



/***/ }),

/***/ "./src/app/shared/hero.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/hero.service.ts ***!
  \****************************************/
/*! exports provided: HeroService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroService", function() { return HeroService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeroService = /** @class */ (function () {
    function HeroService() {
    }
    HeroService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeroService);
    return HeroService;
}());



/***/ }),

/***/ "./src/app/test-point/test-point.component.css":
/*!*****************************************************!*\
  !*** ./src/app/test-point/test-point.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3QtcG9pbnQvdGVzdC1wb2ludC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/test-point/test-point.component.html":
/*!******************************************************!*\
  !*** ./src/app/test-point/test-point.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section\">\n    <div class=\"container mt-5\">\n        <div class=\"row\">\n            <div class=\"col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4\">\n                <div class=\"card card-primary\">\n                    <div class=\"card-header\">\n                        <h4>Test Point</h4>\n                    </div>\n\n                    <div class=\"card-body\">\n                        <mat-progress-bar mode=\"determinate\" [value]=\"precent\"></mat-progress-bar>\n\n                        <div [hidden]=\"!massage\" class=\"alert alert-danger\">\n                            {{massage}}\n                        </div>\n\n                        <form #loginForm=ngForm (ngSubmit)=\"onUpload()\" class=\"needs-validation\" novalidate=\"\">\n\n                            <div class=\"form-group\">\n                                <label for=\"email\">Username</label>\n                                <input [(ngModel)]=\"form.nama\" required id=\"username\" type=\"text\" class=\"form-control\" name=\"username\" tabindex=\"1\" required autofocus>\n                                <div class=\"invalid-feedback\">\n                                    Please fill in your username\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <label for=\"email\">Password</label>\n                                <input [(ngModel)]=\"form.password\" required id=\"password\" type=\"password\" class=\"form-control\" name=\"password\" tabindex=\"1\" required autofocus>\n                                <div class=\"invalid-feedback\">\n                                    Please fill in your password\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <label for=\"email\">Level</label>\n                                <input [(ngModel)]=\"form.level\" required id=\"level\" type=\"text\" class=\"form-control\" name=\"password\" tabindex=\"1\" required autofocus>\n                                <div class=\"invalid-feedback\">\n                                    Please fill in your level\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <div class=\"col-sm-12 col-md-7\">\n                                    <div [ngStyle]=\"{'background-image': 'url(' + fileUpload + ')','background-size': '100% 100%'}\" id=\"image-preview\" class=\"image-preview\">\n                                        <label for=\"image-upload\" id=\"image-label\">Choose File</label>\n                                        <input #fileInput type=\"file\" name=\"image\" id=\"image-upload\" multiple (change)=\"onSelectFile($event)\" />\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"form-group \">\n                                <button [disabled]=\"!loginForm.valid \" type=\"submit \" class=\"btn btn-primary btn-lg btn-block \" tabindex=\"4 \">\n                                  Submit\n                                </button>\n                            </div>\n                        </form>\n                        <div class=\"text-center mt-4 mb-3 \">\n                            <div class=\"text-job text-muted \">Login With Social</div>\n                        </div>\n                        <div class=\"row sm-gutters \">\n                            <div class=\"col-6 \">\n                                <a class=\"btn btn-block btn-social btn-facebook \">\n                                    <span class=\"fab fa-facebook \"></span> Facebook\n                                </a>\n                            </div>\n                            <div class=\"col-6 \">\n                                <a class=\"btn btn-block btn-social btn-twitter \">\n                                    <span class=\"fab fa-twitter \"></span> Twitter\n                                </a>\n                            </div>\n                        </div>\n\n                    </div>\n                </div>\n                <div class=\"mt-5 text-muted text-center \">\n                    Don't have an account? <a href=\"auth-register.html \">Create One</a>\n                </div>\n                <div class=\"simple-footer \">\n                    Copyright &copy; Stisla 2018\n                </div>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/test-point/test-point.component.ts":
/*!****************************************************!*\
  !*** ./src/app/test-point/test-point.component.ts ***!
  \****************************************************/
/*! exports provided: TestPointComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestPointComponent", function() { return TestPointComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-progressbar/core */ "./node_modules/@ngx-progressbar/core/fesm5/ngx-progressbar-core.js");




var HttpUploadOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Content-Type": "application/json" })
};
var TestPointComponent = /** @class */ (function () {
    function TestPointComponent(http, progress) {
        this.http = http;
        this.progress = progress;
        this.baseurl = 'http://localhost:8000';
        this.precent = null;
        this.form = {
            nama: null,
            password: null,
            level: null,
            foto: null
        };
        this.imgSrc = null;
        this.fileUpload = null;
    }
    TestPointComponent.prototype.getFileLater = function () {
        console.log("Data Native " + this.el.nativeElement.files[0]);
    };
    TestPointComponent.prototype.onSelectFile = function (event) {
        var _this = this;
        //console.log(event);
        //console.log(this.el);
        console.log(event.target.files[0]);
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (event) {
                _this.fileUpload = event.target.result;
                //this.imgSrc =<File>event.target.files[0];
                //console.log(this.imgSrc);
            };
            reader.readAsDataURL(event.target.files[0]);
            this.imgSrc = event.target.files[0];
        }
        //this.getFileLater();
    };
    // headers
    TestPointComponent.prototype.onUpload = function () {
        var _this = this;
        var data = new FormData();
        data.append('nama', this.form.nama);
        data.append('password', this.form.password);
        data.append('level', this.form.level);
        data.append('foto', this.imgSrc, this.imgSrc.name);
        this.http.post(this.baseurl + "/marketing", data, { reportProgress: true, observe: 'events' }).subscribe(function (event) {
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].UploadProgress) {
                _this.precent = Math.round(event.loaded / event.total * 100);
                console.log(_this.precent);
            }
        }, function (error) {
            console.log(error);
        });
        console.log(this.imgSrc);
    };
    TestPointComponent.prototype.onSubmit = function () {
        //this.http.post(`${this.baseurl}/login`,this.form)
    };
    TestPointComponent.prototype.ngOnInit = function () {
        var sampleUrl = 'http://slowwly.robertomurray.co.uk/delay/6000/url/https://jsonplaceholder.typicode.com/posts/1';
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fileInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], TestPointComponent.prototype, "el", void 0);
    TestPointComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-test-point',
            template: __webpack_require__(/*! ./test-point.component.html */ "./src/app/test-point/test-point.component.html"),
            styles: [__webpack_require__(/*! ./test-point.component.css */ "./src/app/test-point/test-point.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_3__["NgProgress"]])
    ], TestPointComponent);
    return TestPointComponent;
}());



/***/ }),

/***/ "./src/app/token-service.service.ts":
/*!******************************************!*\
  !*** ./src/app/token-service.service.ts ***!
  \******************************************/
/*! exports provided: TokenServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenServiceService", function() { return TokenServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var TokenServiceService = /** @class */ (function () {
    function TokenServiceService(router) {
        this.router = router;
    }
    TokenServiceService.prototype.handleToken = function (token) {
        this.setToken(token);
        var tokenDecode = this.tokenPayload(token);
        if (tokenDecode.idn == 1) {
            this.router.navigateByUrl('/pimpinan/marketing');
        }
        else if (tokenDecode.idn == 2) {
            this.router.navigateByUrl('/gudang/dashboard');
        }
        else if (tokenDecode.idn == 3) {
            this.router.navigateByUrl('/marketing/dashboard');
        }
        else {
            this.router.navigateByUrl('/login');
        }
    };
    TokenServiceService.prototype.setToken = function (token) {
        localStorage.setItem('token', token);
    };
    TokenServiceService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    TokenServiceService.prototype.removeToken = function () {
        localStorage.removeItem('token');
    };
    TokenServiceService.prototype.tokenPayload = function (token) {
        var helperDecode = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]();
        return helperDecode.decodeToken(token);
    };
    TokenServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], TokenServiceService);
    return TokenServiceService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Programing\angular\cobaapi\my-hero\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!****************************!*\
  !*** node-fetch (ignored) ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!********************************!*\
  !*** string_decoder (ignored) ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!****************************!*\
  !*** node-fetch (ignored) ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map