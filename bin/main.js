(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\DANIEL\Documents\Archivos\ProyectoTramites2\tramitesServer\tramitesdoc\src\main.ts */"zUnb");


/***/ }),

/***/ "0CBe":
/*!**************************************!*\
  !*** ./src/app/pipes/imagen.pipe.ts ***!
  \**************************************/
/*! exports provided: ImagenPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagenPipe", function() { return ImagenPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _config_config_config_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/config/config.component */ "v4UD");



class ImagenPipe {
    transform(img) {
        let url = _config_config_config_component__WEBPACK_IMPORTED_MODULE_1__["URL_SERVICIOS"] + '/area1/' + img;
        return url;
    }
}
ImagenPipe.ɵfac = function ImagenPipe_Factory(t) { return new (t || ImagenPipe)(); };
ImagenPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "imagen", type: ImagenPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImagenPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'imagen'
            }]
    }], null, null); })();


/***/ }),

/***/ "0Cwu":
/*!********************************************!*\
  !*** ./src/app/services/service.module.ts ***!
  \********************************************/
/*! exports provided: ServiceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceModule", function() { return ServiceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _service_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service.index */ "vWu4");





class ServiceModule {
}
ServiceModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ServiceModule });
ServiceModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ServiceModule_Factory(t) { return new (t || ServiceModule)(); }, providers: [
        _service_index__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"],
        _service_index__WEBPACK_IMPORTED_MODULE_3__["TramitesService"],
        _service_index__WEBPACK_IMPORTED_MODULE_3__["Area1Service"],
        _service_index__WEBPACK_IMPORTED_MODULE_3__["ObservadosService"],
        _service_index__WEBPACK_IMPORTED_MODULE_3__["LoginGuardGuard"],
        _service_index__WEBPACK_IMPORTED_MODULE_3__["AdminGuard"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ServiceModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServiceModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
                ],
                providers: [
                    _service_index__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"],
                    _service_index__WEBPACK_IMPORTED_MODULE_3__["TramitesService"],
                    _service_index__WEBPACK_IMPORTED_MODULE_3__["Area1Service"],
                    _service_index__WEBPACK_IMPORTED_MODULE_3__["ObservadosService"],
                    _service_index__WEBPACK_IMPORTED_MODULE_3__["LoginGuardGuard"],
                    _service_index__WEBPACK_IMPORTED_MODULE_3__["AdminGuard"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ 1:
/*!**********************!*\
  !*** zlib (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "320Y":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/usuario.service */ "on2l");



class HeaderComponent {
    constructor(_usuarioService) {
        this._usuarioService = _usuarioService;
    }
    ngOnInit() {
        this.usuario = this._usuarioService.usuario;
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 5, vars: 1, consts: [[1, "nav", "justify-content-end", "navbar-dark", "bg-primary"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarTogglerDemo01", "aria-controls", "navbarTogglerDemo01", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "my-2", "my-sm-0"], [2, "color", "beige"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.usuario.nombreUsuario);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styles: []
            }]
    }], function () { return [{ type: _services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"] }]; }, null); })();


/***/ }),

/***/ 4:
/*!***********************!*\
  !*** https (ignored) ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "4UOz":
/*!**********************************************!*\
  !*** ./src/app/services/tramites.service.ts ***!
  \**********************************************/
/*! exports provided: TramitesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TramitesService", function() { return TramitesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _config_config_config_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/config/config.component */ "v4UD");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class TramitesService {
    constructor(http) {
        this.http = http;
    }
    guardarTramites(destrino, archivo) {
        return new Promise((resolve, reject) => {
            let formData = new FormData();
            let xhr = new XMLHttpRequest();
            formData.append('nombreTramite', destrino.nombreTramite);
            formData.append('nombreUsuario', destrino.nombreUsuario);
            formData.append('apellidoUsuario', destrino.apellidoUsuario);
            formData.append('archivo2', archivo, archivo.name);
            formData.append('areaDestino', destrino.areaDestino);
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        console.log('imagen subida');
                        resolve(xhr.response);
                    }
                    else {
                        console.log('fallo la subida');
                        reject(xhr.response);
                    }
                }
            };
            let url = _config_config_config_component__WEBPACK_IMPORTED_MODULE_1__["URL_SERVICIOS"] + '/tramite';
            xhr.open('POST', url, true);
            xhr.send(formData);
        });
    }
    enlistaTramite() {
        let url = _config_config_config_component__WEBPACK_IMPORTED_MODULE_1__["URL_SERVICIOS"] + '/tramitelistado';
        return this.http.get(url);
    }
}
TramitesService.ɵfac = function TramitesService_Factory(t) { return new (t || TramitesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
TramitesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TramitesService, factory: TramitesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TramitesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ 5:
/*!*********************!*\
  !*** url (ignored) ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "8D7W":
/*!******************************************!*\
  !*** ./src/app/pages/pages.component.ts ***!
  \******************************************/
/*! exports provided: PagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesComponent", function() { return PagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/header/header.component */ "320Y");
/* harmony import */ var _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/sidebar/sidebar.component */ "sRhs");




class PagesComponent {
    constructor() { }
    ngOnInit() {
    }
}
PagesComponent.ɵfac = function PagesComponent_Factory(t) { return new (t || PagesComponent)(); };
PagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PagesComponent, selectors: [["app-pages"]], decls: 5, vars: 0, consts: [[1, "outlet"]], template: function PagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"]], styles: [".outlet[_ngcontent-%COMP%]{\r\n    margin: 10px;\r\n    margin-left: 50px;\r\n    margin-top: 60px;\r\n}\r\n\r\n.header[_ngcontent-%COMP%]{\r\n    margin-top: 0px;\r\n    position: absolute;\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGFnZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjs7QUFFdEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wYWdlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm91dGxldHtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNjBweDtcclxufVxyXG5cclxuLmhlYWRlcntcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIFxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pages',
                templateUrl: './pages.component.html',
                styleUrls: ['./pages.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "B0km":
/*!************************************************!*\
  !*** ./src/app/services/guards/admin.guard.ts ***!
  \************************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../usuario.service */ "on2l");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class AdminGuard {
    constructor(_usuarioService, router) {
        this._usuarioService = _usuarioService;
        this.router = router;
    }
    canActivate() {
        //var currentColor = JSON.parse(localStorage.getItem('user'));
        var currentColor = this._usuarioService.cargarNombre();
        if (currentColor.rolUsuario === 'Trabajador') {
            console.log('paso guard');
            return true;
        }
        else {
            console.log('Bloqueado');
            //this._usuarioService.logout();
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('No tiene Privilegios');
            this.router.navigate(['/dashboard']);
            return false;
        }
    }
}
AdminGuard.ɵfac = function AdminGuard_Factory(t) { return new (t || AdminGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AdminGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AdminGuard, factory: AdminGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "H8NT":
/*!*************************************************!*\
  !*** ./src/app/services/areas/area1.service.ts ***!
  \*************************************************/
/*! exports provided: Area1Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Area1Service", function() { return Area1Service; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _config_config_config_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/config/config.component */ "v4UD");





class Area1Service {
    constructor(http) {
        this.http = http;
    }
    cargarArea1() {
        let url = _config_config_config_component__WEBPACK_IMPORTED_MODULE_2__["URL_SERVICIOS"] + '/area1';
        return this.http.get(url);
    }
    //Upload file
    cargarArchivo(img) {
        let url = _config_config_config_component__WEBPACK_IMPORTED_MODULE_2__["URL_SERVICIOS"] + '/area1/' + 'img';
        return this.http.get(url);
    }
    //Download File
    downloadFile(file, id) {
        return this.http.post(_config_config_config_component__WEBPACK_IMPORTED_MODULE_2__["URL_SERVICIOS"] + '/area1/' + id, file, {
            responseType: 'blob',
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().append('content-type', 'application/json')
        });
    }
}
Area1Service.ɵfac = function Area1Service_Factory(t) { return new (t || Area1Service)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
Area1Service.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: Area1Service, factory: Area1Service.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Area1Service, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "ITgV":
/*!******************************************************!*\
  !*** ./src/app/services/guards/login-guard.guard.ts ***!
  \******************************************************/
/*! exports provided: LoginGuardGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginGuardGuard", function() { return LoginGuardGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../usuario.service */ "on2l");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class LoginGuardGuard {
    constructor(_usuarioService, router) {
        this._usuarioService = _usuarioService;
        this.router = router;
    }
    canActivate() {
        if (this._usuarioService.estaLogueado()) {
            console.log('paso guard');
            return true;
        }
        else {
            console.log('no paso guard dashboard');
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    }
}
LoginGuardGuard.ɵfac = function LoginGuardGuard_Factory(t) { return new (t || LoginGuardGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
LoginGuardGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoginGuardGuard, factory: LoginGuardGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginGuardGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "MtyA":
/*!************************************************!*\
  !*** ./src/app/model/usuario/usuario.model.ts ***!
  \************************************************/
/*! exports provided: Usuario */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Usuario", function() { return Usuario; });
class Usuario {
    constructor(idUsuario, nombreUsuario, apellidoUsuario, telefonoUsuario, areaUsuario, rolUsuario, nombre, email, password, img) {
        this.idUsuario = idUsuario;
        this.nombreUsuario = nombreUsuario;
        this.apellidoUsuario = apellidoUsuario;
        this.telefonoUsuario = telefonoUsuario;
        this.areaUsuario = areaUsuario;
        this.rolUsuario = rolUsuario;
        this.nombre = nombre;
        this.email = email;
        this.password = password;
        this.img = img;
    }
}


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "320Y");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "sRhs");






class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
        _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
        _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                declarations: [
                    _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                    _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"]
                ],
                exports: [
                    _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                    _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "RUEf":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: APP_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_ROUTES", function() { return APP_ROUTES; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _pages_pages_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/pages.component */ "8D7W");
/* harmony import */ var _services_guards_login_guard_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/guards/login-guard.guard */ "ITgV");




const appRoutes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    // {path:'area1',component:Area1Component},
    { path: '',
        component: _pages_pages_component__WEBPACK_IMPORTED_MODULE_2__["PagesComponent"],
        canActivate: [_services_guards_login_guard_guard__WEBPACK_IMPORTED_MODULE_3__["LoginGuardGuard"]],
        loadChildren: './pages/pages.module#PagesModule'
    },
];
const APP_ROUTES = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes, { useHash: true });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'tramitesdoc';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _pages_pages_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/pages.component */ "8D7W");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-pdf-viewer */ "IkSl");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.routes */ "RUEf");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _services_service_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/service.module */ "0Cwu");
/* harmony import */ var _pipes_imagen_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipes/imagen.pipe */ "0CBe");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "tyNb");






//rUtAs loGiN//








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            //PAGES_ROUTES,
            _app_routes__WEBPACK_IMPORTED_MODULE_6__["APP_ROUTES"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _services_service_module__WEBPACK_IMPORTED_MODULE_8__["ServiceModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
            ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_5__["PdfViewerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _pages_pages_component__WEBPACK_IMPORTED_MODULE_3__["PagesComponent"],
        _pipes_imagen_pipe__WEBPACK_IMPORTED_MODULE_9__["ImagenPipe"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _services_service_module__WEBPACK_IMPORTED_MODULE_8__["ServiceModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
        ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_5__["PdfViewerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _pages_pages_component__WEBPACK_IMPORTED_MODULE_3__["PagesComponent"],
                    _pipes_imagen_pipe__WEBPACK_IMPORTED_MODULE_9__["ImagenPipe"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    //PAGES_ROUTES,
                    _app_routes__WEBPACK_IMPORTED_MODULE_6__["APP_ROUTES"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _services_service_module__WEBPACK_IMPORTED_MODULE_8__["ServiceModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
                    ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_5__["PdfViewerModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "eh8i":
/*!************************************************!*\
  !*** ./src/app/services/observados.service.ts ***!
  \************************************************/
/*! exports provided: ObservadosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObservadosService", function() { return ObservadosService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _config_config_config_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/config/config.component */ "v4UD");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class ObservadosService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
    }
    actualizarEstado(id, body) {
        let url = _config_config_config_component__WEBPACK_IMPORTED_MODULE_1__["URL_SERVICIOS"] + '/area1/' + id;
        console.log('control 1');
        return this.http.put(url, body);
    }
    mostrarObservados() {
        let url = _config_config_config_component__WEBPACK_IMPORTED_MODULE_1__["URL_SERVICIOS"] + '/observados';
        return this.http.get(url);
    }
}
ObservadosService.ɵfac = function ObservadosService_Factory(t) { return new (t || ObservadosService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ObservadosService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ObservadosService, factory: ObservadosService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ObservadosService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "on2l":
/*!*********************************************!*\
  !*** ./src/app/services/usuario.service.ts ***!
  \*********************************************/
/*! exports provided: UsuarioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioService", function() { return UsuarioService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _config_config_config_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/config/config.component */ "v4UD");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






class UsuarioService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.cargarStorage();
    }
    estaLogueado() {
        return (this.token.length > 5) ? true : false;
    }
    cargarStorage() {
        if (localStorage.getItem('token')) {
            this.token = localStorage.getItem('token');
            this.usuario = JSON.parse(localStorage.getItem('user'));
            console.log('paso po el cargastorage');
        }
        else {
            this.token = '';
            this.usuario = null;
            console.log('no paso');
        }
    }
    crearUsuario(usuario) {
        let url = _config_config_config_component__WEBPACK_IMPORTED_MODULE_1__["URL_SERVICIOS"] + '/usuario';
        return this.http.post(url, usuario);
    }
    guardarStorage(token, usuario) {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(usuario));
        //this.usuario = usuario;
        this.token = token;
    }
    logout() {
        this.usuario = null,
            this.token = '';
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        this.router.navigate(['/login']);
        console.log('se deslogueo');
    }
    login(usuario) {
        let url = _config_config_config_component__WEBPACK_IMPORTED_MODULE_1__["URL_SERVICIOS"] + '/login';
        return this.http.post(url, usuario).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((resp) => {
            localStorage.setItem('token', resp.token);
            localStorage.setItem('user', JSON.stringify(resp.user));
            this.token = resp.token;
            this.usuario = resp.user;
            console.log(this.usuario);
            return true;
        }));
    }
    cargarUsuarios() {
        let url = _config_config_config_component__WEBPACK_IMPORTED_MODULE_1__["URL_SERVICIOS"] + '/usuario';
        console.log(this.usuario, this.token, 'hola');
        return this.http.get(url);
    }
    eliminarUsuarios(usuarioId) {
        let url = _config_config_config_component__WEBPACK_IMPORTED_MODULE_1__["URL_SERVICIOS"] + '/usuario/' + usuarioId;
        return this.http.delete(url);
    }
    cargarNombre() {
        const userData = JSON.parse(localStorage.getItem('user'));
        return userData;
    }
}
UsuarioService.ɵfac = function UsuarioService_Factory(t) { return new (t || UsuarioService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
UsuarioService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UsuarioService, factory: UsuarioService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsuarioService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "sRhs":
/*!*****************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar.component.ts ***!
  \*****************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/usuario.service */ "on2l");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class SidebarComponent {
    constructor(_usuarioService) {
        this._usuarioService = _usuarioService;
    }
    ngOnInit() {
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"])); };
SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], decls: 38, vars: 0, consts: [[1, "s-layout"], [1, "s-layout__sidebar"], [1, "s-sidebar__trigger"], [1, "fa", "fa-bars"], [1, "s-sidebar__nav"], ["routerLink", "/dashboard", "href", "#0", 1, "s-sidebar__nav-link"], [1, "fa", "fa-home"], ["routerLink", "/tramite", "href", "#0", 1, "s-sidebar__nav-link"], ["routerLink", "/usuario", "href", "#0", 1, "s-sidebar__nav-link"], [1, "fa", "fa-user"], ["routerLink", "/usuariolistado", "href", "#0", 1, "s-sidebar__nav-link"], [1, "fa", "fa-users"], ["routerLink", "/area1", "href", "#0", 1, "s-sidebar__nav-link"], [1, "fa", "fa-folder"], [2, "background-color", "goldenrod"], [1, "s-sidebar__nav-link", 3, "click"], [1, "fa", "fa-sign-out"], [1, "s-layout__content"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Registrar Tramite");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Lista Usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Recepcion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_a_click_32_listener() { return ctx._usuarioService.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Salir");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "main", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\r\n  box-sizing: border-box;\r\n}\r\nbody[_ngcontent-%COMP%] {\r\n  font-family: sans-serif;\r\n  font-size: 1em;\r\n  color: #333;\r\n}\r\nh1[_ngcontent-%COMP%] {\r\n font-size: 1.4em;\r\n}\r\nem[_ngcontent-%COMP%] {\r\n  font-style: normal;\r\n}\r\na[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  color: inherit;\r\n}\r\n\r\n.s-layout[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  width: 100%;\r\n  min-height: 100vh;\r\n}\r\n.s-layout__content[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex: 1;\r\n}\r\n\r\n.s-sidebar__trigger[_ngcontent-%COMP%] {\r\n  z-index: 2;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 4em;\r\n  background: #192b3c;\r\n}\r\n.s-sidebar__trigger[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  margin: 1.5em 0 0 1.5em;\r\n  color: #f07ab0;\r\n}\r\n.s-sidebar__nav[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  top: 0;\r\n  left: -15em;\r\n  overflow: hidden;\r\n  transition: all .3s ease-in;\r\n  width: 15em;\r\n  height: 100%;\r\n  background: #243e56;\r\n  color: rgba(255, 255, 255, 0.7);\r\n}\r\n.s-sidebar__nav[_ngcontent-%COMP%]:hover, .s-sidebar__nav[_ngcontent-%COMP%]:focus, .s-sidebar__trigger[_ngcontent-%COMP%]:focus    + .s-sidebar__nav[_ngcontent-%COMP%], .s-sidebar__trigger[_ngcontent-%COMP%]:hover    + .s-sidebar__nav[_ngcontent-%COMP%] {\r\n  left: 0;\r\n}\r\n.s-sidebar__nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 4em;\r\n  left: 0;\r\n  margin: 0;\r\n  padding: 0;\r\n  width: 15em;\r\n}\r\n.s-sidebar__nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n.s-sidebar__nav-link[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  display: inline-block;\r\n  width: 100%;\r\n  height: 4em;\r\n}\r\n.s-sidebar__nav-link[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 4em;\r\n  transform: translateY(-50%);\r\n}\r\n.s-sidebar__nav-link[_ngcontent-%COMP%]:hover {\r\n  background: #4d6276;\r\n}\r\n.s-sidebar__nav-link[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  display: inline-block;\r\n  width: 4em;\r\n  height: 4em;\r\n}\r\n.s-sidebar__nav-link[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%]::before {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\n@media (min-width: 42em) {\r\n  .s-layout__content[_ngcontent-%COMP%] {\r\n     margin-left: 4em;\r\n  }\r\n  \r\n  \r\n  .s-sidebar__trigger[_ngcontent-%COMP%] {\r\n     width: 4em;\r\n  }\r\n  \r\n  .s-sidebar__nav[_ngcontent-%COMP%] {\r\n     width: 4em;\r\n     left: 0;\r\n  }\r\n  \r\n  .s-sidebar__nav[_ngcontent-%COMP%]:hover, .s-sidebar__nav[_ngcontent-%COMP%]:focus, .s-sidebar__trigger[_ngcontent-%COMP%]:hover    + .s-sidebar__nav[_ngcontent-%COMP%], .s-sidebar__trigger[_ngcontent-%COMP%]:focus    + .s-sidebar__nav[_ngcontent-%COMP%] {\r\n     width: 15em;\r\n  }\r\n}\r\n@media (min-width: 68em) {\r\n  .s-layout__content[_ngcontent-%COMP%] {\r\n     margin-left: 15em;\r\n  }\r\n  \r\n  \r\n  .s-sidebar__trigger[_ngcontent-%COMP%] {\r\n     display: none\r\n  }\r\n  \r\n  .s-sidebar__nav[_ngcontent-%COMP%] {\r\n     width: 15em;\r\n  }\r\n  \r\n  .s-sidebar__nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n     top: 1.3em;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxtQkFBbUI7QUFDbkI7RUFDRSxzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsV0FBVztBQUNiO0FBRUE7Q0FDQyxnQkFBZ0I7QUFDakI7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEI7QUFFQSxXQUFXO0FBQ1g7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsT0FBTztBQUNUO0FBRUEsWUFBWTtBQUNaO0VBQ0UsVUFBVTtFQUNWLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sV0FBVztFQUNYLGdCQUFnQjtFQUNoQiwyQkFBMkI7RUFDM0IsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsK0JBQStCO0FBQ2pDO0FBRUE7Ozs7RUFJRSxPQUFPO0FBQ1Q7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsT0FBTztFQUNQLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztBQUNiO0FBRUE7RUFDRSxXQUFXO0FBQ2I7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsV0FBVztFQUNYLFdBQVc7QUFDYjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsMkJBQTJCO0FBQzdCO0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsV0FBVztBQUNiO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7QUFDbEM7QUFFQSxpQkFBaUI7QUFDakI7RUFDRTtLQUNHLGdCQUFnQjtFQUNuQjs7RUFFQSxZQUFZO0VBQ1o7S0FDRyxVQUFVO0VBQ2I7O0VBRUE7S0FDRyxVQUFVO0tBQ1YsT0FBTztFQUNWOztFQUVBOzs7O0tBSUcsV0FBVztFQUNkO0FBQ0Y7QUFFQTtFQUNFO0tBQ0csaUJBQWlCO0VBQ3BCOztFQUVBLFlBQVk7RUFDWjtLQUNHO0VBQ0g7O0VBRUE7S0FDRyxXQUFXO0VBQ2Q7O0VBRUE7S0FDRyxVQUFVO0VBQ2I7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vKiBQcmltYXJ5IFN0eWxlcyAqL1xyXG4qLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDFlbTtcclxuICBjb2xvcjogIzMzMztcclxufVxyXG5cclxuaDEge1xyXG4gZm9udC1zaXplOiAxLjRlbTtcclxufVxyXG5cclxuZW0ge1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5cclxuYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG59IFxyXG5cclxuLyogTGF5b3V0ICovXHJcbi5zLWxheW91dCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLnMtbGF5b3V0X19jb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuLyogU2lkZWJhciAqL1xyXG4ucy1zaWRlYmFyX190cmlnZ2VyIHtcclxuICB6LWluZGV4OiAyO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDRlbTtcclxuICBiYWNrZ3JvdW5kOiAjMTkyYjNjO1xyXG59XHJcblxyXG4ucy1zaWRlYmFyX190cmlnZ2VyID4gaSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbjogMS41ZW0gMCAwIDEuNWVtO1xyXG4gIGNvbG9yOiAjZjA3YWIwO1xyXG59XHJcblxyXG4ucy1zaWRlYmFyX19uYXYge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogLTE1ZW07XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW47XHJcbiAgd2lkdGg6IDE1ZW07XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICMyNDNlNTY7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcclxufVxyXG5cclxuLnMtc2lkZWJhcl9fbmF2OmhvdmVyLFxyXG4ucy1zaWRlYmFyX19uYXY6Zm9jdXMsXHJcbi5zLXNpZGViYXJfX3RyaWdnZXI6Zm9jdXMgKyAucy1zaWRlYmFyX19uYXYsXHJcbi5zLXNpZGViYXJfX3RyaWdnZXI6aG92ZXIgKyAucy1zaWRlYmFyX19uYXYge1xyXG4gIGxlZnQ6IDA7XHJcbn1cclxuXHJcbi5zLXNpZGViYXJfX25hdiB1bCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNGVtO1xyXG4gIGxlZnQ6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgd2lkdGg6IDE1ZW07XHJcbn1cclxuXHJcbi5zLXNpZGViYXJfX25hdiB1bCBsaSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zLXNpZGViYXJfX25hdi1saW5rIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNGVtO1xyXG59XHJcblxyXG4ucy1zaWRlYmFyX19uYXYtbGluayBlbSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDRlbTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuXHJcbi5zLXNpZGViYXJfX25hdi1saW5rOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjNGQ2Mjc2O1xyXG59XHJcblxyXG4ucy1zaWRlYmFyX19uYXYtbGluayA+IGkge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDRlbTtcclxuICBoZWlnaHQ6IDRlbTtcclxufVxyXG5cclxuLnMtc2lkZWJhcl9fbmF2LWxpbmsgPiBpOjpiZWZvcmUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbn1cclxuXHJcbi8qIE1vYmlsZSBGaXJzdCAqL1xyXG5AbWVkaWEgKG1pbi13aWR0aDogNDJlbSkge1xyXG4gIC5zLWxheW91dF9fY29udGVudCB7XHJcbiAgICAgbWFyZ2luLWxlZnQ6IDRlbTtcclxuICB9XHJcbiAgXHJcbiAgLyogU2lkZWJhciAqL1xyXG4gIC5zLXNpZGViYXJfX3RyaWdnZXIge1xyXG4gICAgIHdpZHRoOiA0ZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5zLXNpZGViYXJfX25hdiB7XHJcbiAgICAgd2lkdGg6IDRlbTtcclxuICAgICBsZWZ0OiAwO1xyXG4gIH1cclxuICBcclxuICAucy1zaWRlYmFyX19uYXY6aG92ZXIsXHJcbiAgLnMtc2lkZWJhcl9fbmF2OmZvY3VzLFxyXG4gIC5zLXNpZGViYXJfX3RyaWdnZXI6aG92ZXIgKyAucy1zaWRlYmFyX19uYXYsXHJcbiAgLnMtc2lkZWJhcl9fdHJpZ2dlcjpmb2N1cyArIC5zLXNpZGViYXJfX25hdiB7XHJcbiAgICAgd2lkdGg6IDE1ZW07XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNjhlbSkge1xyXG4gIC5zLWxheW91dF9fY29udGVudCB7XHJcbiAgICAgbWFyZ2luLWxlZnQ6IDE1ZW07XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFNpZGViYXIgKi9cclxuICAucy1zaWRlYmFyX190cmlnZ2VyIHtcclxuICAgICBkaXNwbGF5OiBub25lXHJcbiAgfVxyXG4gIFxyXG4gIC5zLXNpZGViYXJfX25hdiB7XHJcbiAgICAgd2lkdGg6IDE1ZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5zLXNpZGViYXJfX25hdiB1bCB7XHJcbiAgICAgdG9wOiAxLjNlbTtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidebar',
                templateUrl: './sidebar.component.html',
                styleUrls: ['./sidebar.component.css']
            }]
    }], function () { return [{ type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"] }]; }, null); })();


/***/ }),

/***/ "v4UD":
/*!***************************************************!*\
  !*** ./src/app/config/config/config.component.ts ***!
  \***************************************************/
/*! exports provided: URL_SERVICIOS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL_SERVICIOS", function() { return URL_SERVICIOS; });
const URL_SERVICIOS = 'https://tramitesapp.herokuapp.com';
//export const URL_SERVICIOS = 'http://localhost:4000';


/***/ }),

/***/ "vWu4":
/*!*******************************************!*\
  !*** ./src/app/services/service.index.ts ***!
  \*******************************************/
/*! exports provided: LoginGuardGuard, AdminGuard, UsuarioService, TramitesService, Area1Service, ObservadosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _guards_login_guard_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guards/login-guard.guard */ "ITgV");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginGuardGuard", function() { return _guards_login_guard_guard__WEBPACK_IMPORTED_MODULE_0__["LoginGuardGuard"]; });

/* harmony import */ var _guards_admin_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guards/admin.guard */ "B0km");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return _guards_admin_guard__WEBPACK_IMPORTED_MODULE_1__["AdminGuard"]; });

/* harmony import */ var _usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./usuario.service */ "on2l");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UsuarioService", function() { return _usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"]; });

/* harmony import */ var _tramites_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tramites.service */ "4UOz");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TramitesService", function() { return _tramites_service__WEBPACK_IMPORTED_MODULE_3__["TramitesService"]; });

/* harmony import */ var _areas_area1_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./areas/area1.service */ "H8NT");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Area1Service", function() { return _areas_area1_service__WEBPACK_IMPORTED_MODULE_4__["Area1Service"]; });

/* harmony import */ var _observados_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./observados.service */ "eh8i");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ObservadosService", function() { return _observados_service__WEBPACK_IMPORTED_MODULE_5__["ObservadosService"]; });









/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _model_usuario_usuario_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/usuario/usuario.model */ "MtyA");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_service_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/service.index */ "vWu4");








class LoginComponent {
    constructor(router, _usuarioService) {
        this.router = router;
        this._usuarioService = _usuarioService;
        //Combobox
        this.City = ['administracion', 'area1'];
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
        this.forma.setValue({
            email: "daniel@gmail.com",
            password: "123"
        });
        console.log('aqui');
    }
    ngOnInit() {
    }
    ingresar(forma) {
        let usuario = new _model_usuario_usuario_model__WEBPACK_IMPORTED_MODULE_2__["Usuario"]("", "", "", "", "", "", "", forma.value.email, forma.value.password, "");
        this._usuarioService.login(usuario)
            .subscribe(resp => {
            this.router.navigate(['/dashboard']);
        }, err => {
            console.error('fallo');
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Error en el login', err.error.msg, 'error');
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_service_index__WEBPACK_IMPORTED_MODULE_5__["UsuarioService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 49, vars: 0, consts: [["id", "wrapper"], [1, "login-register", 2, "background-image", "url(assets/images/background/login-register.jpg)"], [1, "login-box", "card"], [1, "card-body"], ["id", "loginform", "action", "index.html", 1, "form-horizontal", "form-material", 3, "ngSubmit"], ["f", "ngForm"], [1, "box-title", "m-b-20"], [1, "form-group"], [1, "col-xs-12"], ["ngModel", "dasaba@gmail.com", "name", "email", "type", "email", "required", "", "placeholder", "Correo electronico", 1, "form-control"], ["ngModel", "123", "name", "password", "type", "password", "required", "", "placeholder", "Contrase\u00F1a", 1, "form-control"], [1, "form-group", "row"], [1, "col-md-12"], [1, "checkbox", "checkbox-info", "pull-left", "p-t-0"], ["id", "checkbox-signup", "type", "checkbox", 1, "filled-in", "chk-col-light-blue"], ["for", "checkbox-signup"], ["href", "javascript:void(0)", "id", "to-recover", 1, "text-dark", "pull-right"], [1, "fa", "fa-lock", "m-r-5"], [1, "form-group", "text-center"], [1, "col-xs-12", "p-b-20"], ["type", "submit", 1, "btn", "btn-block", "btn-lg", "btn-info", "btn-rounded"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "m-t-10", "text-center"], [1, "social"], ["href", "javascript:void(0)", "data-toggle", "tooltip", "title", "Login with Facebook", 1, "btn", "btn-facebook"], ["aria-hidden", "true", 1, "fa", "fa-facebook"], ["href", "javascript:void(0)", "data-toggle", "tooltip", "title", "Login with Google", 1, "btn", "btn-googleplus"], ["aria-hidden", "true", 1, "fa", "fa-google-plus"], ["id", "recoverform", "action", "index.html", 1, "form-horizontal"], [1, "text-muted"], ["type", "text", "required", "", "placeholder", "Email", 1, "form-control"], [1, "form-group", "text-center", "m-t-20"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", "btn-block", "text-uppercase", "waves-effect", "waves-light"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return ctx.ingresar(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "INGRESAR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Recordarme ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Recordarme?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Log In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "form", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Recordar contrase\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Enter your Email and instructions will be sent to you! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"]], styles: [".login-register[_ngcontent-%COMP%] {\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-position: center center;\r\n    height: 100%;\r\n    width: 100%;\r\n    padding: 10% 0;\r\n    position: fixed; }\r\n.login-box[_ngcontent-%COMP%] {\r\n    width: 400px;\r\n    margin: 0 auto; }\r\n.login-box[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\r\n      width: 100%;\r\n      left: 0px;\r\n      right: 0px; }\r\n.login-box[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%] {\r\n      display: block;\r\n      margin-bottom: 30px; }\r\n#recoverform[_ngcontent-%COMP%] {\r\n    display: none; }\r\n.login-sidebar[_ngcontent-%COMP%] {\r\n    padding: 0px;\r\n    margin-top: 0px; }\r\n.login-sidebar[_ngcontent-%COMP%]   .login-box[_ngcontent-%COMP%] {\r\n      right: 0px;\r\n      position: absolute;\r\n      height: 100%; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Q0FLQztBQUNEOzs7OztDQUtDO0FBQ0QsZUFBZTtBQUNmLGtCQUFrQjtBQUNsQixlQUFlO0FBQ2YsZUFBZTtBQUNmLGlCQUFpQjtBQUNqQjs7a0JBRWtCO0FBQ2xCO0lBQ0ksc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QixrQ0FBa0M7SUFDbEMsWUFBWTtJQUNaLFdBQVc7SUFDWCxjQUFjO0lBQ2QsZUFBZSxFQUFFO0FBRW5CO0lBQ0UsWUFBWTtJQUNaLGNBQWMsRUFBRTtBQUNoQjtNQUNFLFdBQVc7TUFDWCxTQUFTO01BQ1QsVUFBVSxFQUFFO0FBQ2Q7TUFDRSxjQUFjO01BQ2QsbUJBQW1CLEVBQUU7QUFFekI7SUFDRSxhQUFhLEVBQUU7QUFFakI7SUFDRSxZQUFZO0lBQ1osZUFBZSxFQUFFO0FBQ2pCO01BQ0UsVUFBVTtNQUNWLGtCQUFrQjtNQUNsQixZQUFZLEVBQUUiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuVGVtcGxhdGUgTmFtZTogQWRtaW4gcHJvIEFkbWluXHJcbkF1dGhvcjogV3JhcHBpeGVsXHJcbkVtYWlsOiBuaXJhdmpvc2hpODdAZ21haWwuY29tXHJcbkZpbGU6IHNjc3NcclxuKi9cclxuLypcclxuVGVtcGxhdGUgTmFtZTogQWRtaW4gUHJvIEFkbWluXHJcbkF1dGhvcjogV3JhcHBpeGVsXHJcbkVtYWlsOiBuaXJhdmpvc2hpODdAZ21haWwuY29tXHJcbkZpbGU6IHNjc3NcclxuKi9cclxuLypUaGVtZSBDb2xvcnMqL1xyXG4vKmJvb3RzdHJhcCBDb2xvciovXHJcbi8qTGlnaHQgY29sb3JzKi9cclxuLypOb3JtYWwgQ29sb3IqL1xyXG4vKkV4dHJhIFZhcmlhYmxlKi9cclxuLyoqKioqKioqKioqKioqKioqKipcclxuTG9naW4gcmVnaXN0ZXIgYW5kIHJlY292ZXIgcGFzc3dvcmQgUGFnZVxyXG4qKioqKioqKioqKioqKioqKiovXHJcbi5sb2dpbi1yZWdpc3RlciB7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEwJSAwO1xyXG4gICAgcG9zaXRpb246IGZpeGVkOyB9XHJcbiAgXHJcbiAgLmxvZ2luLWJveCB7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bzsgfVxyXG4gICAgLmxvZ2luLWJveCAuZm9vdGVyIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgcmlnaHQ6IDBweDsgfVxyXG4gICAgLmxvZ2luLWJveCAuc29jaWFsIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7IH1cclxuICBcclxuICAjcmVjb3ZlcmZvcm0ge1xyXG4gICAgZGlzcGxheTogbm9uZTsgfVxyXG4gIFxyXG4gIC5sb2dpbi1zaWRlYmFyIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG1hcmdpbi10b3A6IDBweDsgfVxyXG4gICAgLmxvZ2luLXNpZGViYXIgLmxvZ2luLWJveCB7XHJcbiAgICAgIHJpZ2h0OiAwcHg7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgaGVpZ2h0OiAxMDAlOyB9XHJcbiAgIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _services_service_index__WEBPACK_IMPORTED_MODULE_5__["UsuarioService"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./pages/pages.module": [
		"dgmN",
		"pages-pages-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "zn8P";
module.exports = webpackAsyncContext;

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map