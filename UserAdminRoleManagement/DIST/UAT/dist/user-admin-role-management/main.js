(self["webpackChunkUser_Admin_Role_Management"] = self["webpackChunkUser_Admin_Role_Management"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_layout_logged_out_logged_out_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/layout/logged-out/logged-out.component */ 3842);
/* harmony import */ var _shared_layout_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/layout/page-not-found/page-not-found.component */ 742);
/* harmony import */ var _shared_layout_un_authorized_access_un_authorized_access_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/layout/un-authorized-access/un-authorized-access.component */ 7923);
/* harmony import */ var _shared_services_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/services/auth.guard */ 1643);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home/home.component */ 8263);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);








const routes = [{
  path: '',
  redirectTo: '/dashboard',
  pathMatch: 'full'
}, {
  path: 'un-authorized-access',
  component: _shared_layout_un_authorized_access_un_authorized_access_component__WEBPACK_IMPORTED_MODULE_2__.UnAuthorizedAccessComponent
}, {
  path: 'logged-out',
  component: _shared_layout_logged_out_logged_out_component__WEBPACK_IMPORTED_MODULE_0__.LoggedOutComponent,
  canActivate: [_shared_services_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard]
}, {
  path: 'dashboard',
  component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__.HomeComponent
}, {
  path: "**",
  component: _shared_layout_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_1__.PageNotFoundComponent
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var bd_common_lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bd-common-lib */ 8919);
/* harmony import */ var _shared_layout_nav_nav_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/layout/nav/nav.component */ 9774);
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/components/loader/loader.component */ 605);






function AppComponent_app_nav_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-nav");
  }
}
class AppComponent {
  constructor() {
    this.title = 'User-Admin-Role-Management';
    this.isUserLoggedIn = false;
    if (sessionStorage.getItem('empCode') != null) {
      // logged in so return true
      this.isUserLoggedIn = true;
    }
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 6,
  vars: 1,
  consts: [[4, "ngIf"], ["id", "main", 1, "main"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "lib-bd-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AppComponent_app_nav_1_Template, 1, 0, "app-nav", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "main", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-loader")(4, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "lib-bd-footer");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isUserLoggedIn == true);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, bd_common_lib__WEBPACK_IMPORTED_MODULE_5__.BdHeaderComponent, bd_common_lib__WEBPACK_IMPORTED_MODULE_5__.BdFooterComponent, _shared_layout_nav_nav_component__WEBPACK_IMPORTED_MODULE_0__.NavComponent, _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_1__.LoaderComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var bd_common_lib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! bd-common-lib */ 8919);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _shared_layout_logged_out_logged_out_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/layout/logged-out/logged-out.component */ 3842);
/* harmony import */ var _shared_layout_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/layout/page-not-found/page-not-found.component */ 742);
/* harmony import */ var _shared_layout_un_authorized_access_un_authorized_access_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/layout/un-authorized-access/un-authorized-access.component */ 7923);
/* harmony import */ var _shared_layout_nav_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/layout/nav/nav.component */ 9774);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ 8263);
/* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/services/app-config.service */ 1559);
/* harmony import */ var _shared_pipes_format_date_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/pipes/format-date.pipe */ 2328);
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/components/loader/loader.component */ 605);
/* harmony import */ var ngx_loading__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-loading */ 2517);
/* harmony import */ var _shared_http_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/http-interceptor */ 674);




















class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
  providers: [{
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_11__.APP_INITIALIZER,
    useFactory: appConfigService => {
      return () => {
        return appConfigService.loadConfig();
      };
    },
    multi: true,
    deps: [_shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_7__.AppConfigService]
  }, {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HTTP_INTERCEPTORS,
    useClass: _shared_http_interceptor__WEBPACK_IMPORTED_MODULE_10__.APIInterceptor,
    multi: true
  }],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule, _angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, bd_common_lib__WEBPACK_IMPORTED_MODULE_15__.BDCommonLibModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule, ngx_loading__WEBPACK_IMPORTED_MODULE_17__.NgxLoadingModule.forRoot({})]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _shared_layout_nav_nav_component__WEBPACK_IMPORTED_MODULE_5__.NavComponent, _shared_layout_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__.PageNotFoundComponent, _shared_layout_un_authorized_access_un_authorized_access_component__WEBPACK_IMPORTED_MODULE_4__.UnAuthorizedAccessComponent, _shared_layout_logged_out_logged_out_component__WEBPACK_IMPORTED_MODULE_2__.LoggedOutComponent, _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__.HomeComponent, _shared_pipes_format_date_pipe__WEBPACK_IMPORTED_MODULE_8__.FormatDatePipe, _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_9__.LoaderComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule, _angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, bd_common_lib__WEBPACK_IMPORTED_MODULE_15__.BDCommonLibModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule, ngx_loading__WEBPACK_IMPORTED_MODULE_17__.NgxLoadingModule]
  });
})();

/***/ }),

/***/ 8263:
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var bd_common_lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bd-common-lib */ 8919);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 6908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 1989);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 8977);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var src_app_shared_global_var__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/global-var */ 2005);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ 3071);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 124);













function HomeComponent_div_8_option_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const role_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", role_r3 == null ? null : role_r3.clevel);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", role_r3 == null ? null : role_r3.cleveldesc, " ");
  }
}
function HomeComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8)(1, "h5", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "form", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function HomeComponent_div_8_Template_form_ngSubmit_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r4.submitUserForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 11)(5, "div", 3)(6, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Employee Code*");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 13)(9, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keydown", function HomeComponent_div_8_Template_input_keydown_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r6.queryEmpDetails($event));
    })("keypress", function HomeComponent_div_8_Template_input_keypress_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r7.numberOnly($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 11)(13, "div", 3)(14, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Role*");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 17)(17, "select", 18)(18, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Select Role");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, HomeComponent_div_8_option_20_Template, 2, 2, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 21)(22, "div", 3)(23, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Expiry Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 11)(28, "div", 3)(29, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Administrator");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 25)(34, "div", 26)(35, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HomeComponent_div_8_Template_button_click_37_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r8.displayRoleTable());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Module : ", ctx_r0.selectedAppication.CAPPLNAME, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r0.userForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.roleDropDownList);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r0.userForm.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r0.selectedAppication.CAPPLID);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", !ctx_r0.canShowRole ? "Show All Roles" : "Hide All Roles", " ");
  }
}
function HomeComponent_div_9_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](15, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const role_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](role_r10.CREGION);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](role_r10.LOC);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](role_r10.NAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](role_r10.CFUNCTION);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](role_r10.CGRADE);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](role_r10.LVL);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](15, 7, role_r10.DACCESSGRANTEDTO, "dd-MMM-yyyy"));
  }
}
function HomeComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4)(1, "div", 5)(2, "div", 8)(3, "div", 30)(4, "table", 31)(5, "thead")(6, "tr")(7, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HomeComponent_div_9_Template_th_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r11.sortRoleTable("CREGION", ctx_r11.sortingBooleanValue));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Region");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HomeComponent_div_9_Template_th_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r13.sortRoleTable("LOC", ctx_r13.sortingBooleanValue));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Location");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HomeComponent_div_9_Template_th_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r14.sortRoleTable("NAME", ctx_r14.sortingBooleanValue));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HomeComponent_div_9_Template_th_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r15.sortRoleTable("CFUNCTION", ctx_r15.sortingBooleanValue));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Function");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HomeComponent_div_9_Template_th_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r16.sortRoleTable("CGRADE", ctx_r16.sortingBooleanValue));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Grade");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HomeComponent_div_9_Template_th_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r17.sortRoleTable("LVL", ctx_r17.sortingBooleanValue));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Access Level");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HomeComponent_div_9_Template_th_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r18.sortRoleTable("DACCESSGRANTEDTO", ctx_r18.sortingBooleanValue));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Expiry Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, HomeComponent_div_9_tr_22_Template, 16, 10, "tr", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.roleList);
  }
}
class HomeComponent {
  constructor(authService, toastr, fb, userService, router, AES, activatedRoute) {
    this.authService = authService;
    this.toastr = toastr;
    this.fb = fb;
    this.userService = userService;
    this.router = router;
    this.AES = AES;
    this.activatedRoute = activatedRoute;
    this.isUserLoggedIn = false;
    this.empCRRole = '';
    this.empRole = '';
    this.empCode = '';
    this.empLocArea = '';
    this.empName = '';
    this.empCLevel = '';
    this.authToken = '';
    this.empCodeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this.roleList = [];
    this.roleDropDownList = [];
    this.canShowRole = false;
    this.sortingBooleanValue = false;
    this.formShow = false;
    this.selectedAppication = {
      CAPPLNAME: '',
      CAPPLID: ''
    };
    this.userForm = this.initUserForm();
    //this.getEmployeeDetails();
  }

  ngOnInit() {
    this.setLoginSession();
    this.userService.appSelectedSubject.subscribe(value => {
      this.selectedAppication = value;
      this.userForm.controls['empCode'].setValue("");
      this.userForm.controls['empName'].setValue("");
      this.userForm.controls['role'].setValue("");
      this.userForm.controls['accessTo'].setValue("");
      this.userForm.controls['isadmin'].setValue("");
      this.canShowRole = false;
      this.formShow = false;
      this.roleList.length = 0;
      this.showAppBasedRoleDropDown();
      if (this.userForm.value.empCode == null || this.userForm.get("empCode")?.value === " " || this.userForm.get("empCode")?.value === "" || this.userForm.get("empCode")?.value != "") {
        console.log("empCode is blank -", this.userForm.value.empCode);
      } else {
        console.log("empCode is b--", this.userForm.value.empCode);
        this.validateEmployee();
      }
      if (this.selectedAppication != null) {
        this.formShow = true;
      }
    });
  }
  setLoginSession() {
    bd_common_lib__WEBPACK_IMPORTED_MODULE_5__.CommonGlobalVar.USER_UI = src_app_shared_global_var__WEBPACK_IMPORTED_MODULE_1__.GlobalVar.USER_UI.toString();
    this.activatedRoute.queryParams.subscribe(params => {
      this.empCRRole = params['ecr'];
      this.empRole = params['er'];
      this.empCode = params['ec'];
      this.empLocArea = params['el'];
      this.empName = params['en'];
      this.authToken = params['at'];
      this.empCLevel = params['cl'];
    });
    if (src_app_shared_global_var__WEBPACK_IMPORTED_MODULE_1__.GlobalVar.Environment == 'Localhost') {
      //USE THIS FOR DEVELOPMENT
      this.setDevSession();
    } else {
      //USE THIS FOR PRODUCTION & TEST
      this.setProdSession();
    }
  }
  setProdSession() {
    //USE THIS FOR PRODUCTION
    if (this.empCode === undefined && sessionStorage.getItem("empCode") === null) {
      //this.router.navigate(['/un-authorized-access']);
    } else {
      if (this.empCode !== undefined) {
        this.isUserLoggedIn = true;
        sessionStorage.setItem('empCode', this.empCode);
        sessionStorage.setItem('currentUser', this.empCode);
      }
      if (this.empCRRole !== undefined) {
        sessionStorage.setItem('empCRRole', this.empCRRole);
      }
      if (this.empRole !== undefined) {
        sessionStorage.setItem('empRole', this.empRole);
      }
      if (this.empLocArea !== undefined) {
        sessionStorage.setItem('empLocArea', this.empLocArea);
      }
      if (this.empName !== undefined) {
        sessionStorage.setItem('empName', this.empName);
      }
      if (this.empCLevel !== undefined) {
        sessionStorage.setItem('empCLevel', this.empCLevel);
      }
      if (this.authToken !== undefined) {
        sessionStorage.setItem('authToken', this.authToken);
      }
      this.authService.setReload();
    }
  }
  setDevSession() {
    sessionStorage.setItem('empCode', this.AES.encryptionAES('114516'));
    sessionStorage.setItem('empCRRole', this.AES.encryptionAES('00'));
    sessionStorage.setItem('empRole', this.AES.encryptionAES('I'));
    sessionStorage.setItem('empLocArea', this.AES.encryptionAES('HQC'));
    sessionStorage.setItem('empName', this.AES.encryptionAES('JITENDRA DAMANIA'));
    sessionStorage.setItem('empCLevel', this.AES.encryptionAES('0'));
    sessionStorage.setItem('authToken', '');
    this.authService.setReload();
  }
  numberOnly(event) {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57) || charCode == 109) {
      if (charCode == 65 || charCode == 97 || charCode == 108 || charCode == 76) {
        return true;
      } else {
        return false;
      }
    }
    return true;
  }
  /**
   * Will initiate user query form
   */
  initUserForm() {
    return this.fb.group({
      empCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      empName: [{
        value: '',
        disabled: true
      }],
      accessTo: [],
      role: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      isadmin: [false]
    });
  }
  /**
  * Will get the employee details
  */
  getEmployeeDetails() {
    this.empCodeSearchSubscripton = this.empCodeSubject.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.debounceTime)(1000), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.distinctUntilChanged)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.map)(empCode => {
      this.validateEmployee();
    })).subscribe(result => {});
  }
  /**
   * Validate employee details using employee details
   */
  validateEmployee() {
    const searchPayload = {
      pcemplcode: this.AES.decryptionAES(sessionStorage.getItem('empCode')) || '',
      mcemplcode: this.userForm.value.empCode,
      mcapplid: this.selectedAppication.CAPPLID
    };
    this.userService.validateEmp(searchPayload).subscribe({
      next: response => {
        const fullName = response.userRes || '';
        const firstChar = Array.from(fullName)[0];
        const splitName = fullName.split('~');
        switch (firstChar) {
          case 'Y':
            this.userForm.patchValue({
              empName: splitName[1] || splitName[0]
            });
            break;
          case 'N':
            this.toastr.error('Not a valid employee code');
            break;
          case 'E':
          case 'D':
          case 'O':
            this.toastr.error(response.userRes);
            break;
          default:
            const length = splitName.length;
            if (length > 0) {
              this.userForm.patchValue({
                empName: splitName[length - 1] || '',
                role: splitName[0],
                accessTo: splitName[length - 2] == '' ? '' : (0,_angular_common__WEBPACK_IMPORTED_MODULE_10__.formatDate)(splitName[length - 2], 'yyyy-MM-dd', 'en-US'),
                isadmin: splitName[length - 3] == '' ? '' : splitName[length - 3]
              });
            }
            break;
        }
      }
    });
  }
  /**
   * Update the subject with the employee id
   * @param event input text event
   */
  queryEmpDetails(event) {
    console.log("key value-", event.keyCode);
    if (event.keyCode == 13 || event.keyCode == 9) {
      if (this.userForm.value.empCode != null) {
        this.getEmployeeDetails();
      }
      const empCode = event.target.value;
      this.empCodeSubject.next(empCode);
    }
  }
  /**
   * Method to get roles based on the application id and order by region
   */
  showRole() {
    const payload = {
      applid: this.selectedAppication.CAPPLID,
      orderby: '',
      order: 'CREGION'
    };
    this.userService.showRole(payload).subscribe({
      next: response => {
        this.roleList = response;
      },
      error: () => {
        this.toastr.error('Failed to get role list. Please try again');
      }
    });
  }
  /**
   * Will sort the role table
   * @param colName column name
   * @param boolean toggle sort form asc/desc
   */
  sortRoleTable(colName, boolean) {
    this.sortingBooleanValue = !this.sortingBooleanValue;
    this.roleList.sort((a, b) => {
      const aCol = a[colName] || '';
      const bCol = b[colName] || '';
      if (boolean == true) {
        return aCol < bCol ? 1 : aCol > bCol ? -1 : 0;
      } else {
        return aCol > bCol ? 1 : aCol < bCol ? -1 : 0;
      }
    });
  }
  /**
   * Will toggle show role table
   */
  displayRoleTable() {
    this.canShowRole = !this.canShowRole;
    if (this.canShowRole) {
      this.showRole();
    } else {
      // Emptying the array list
      this.roleList.length = 0;
    }
  }
  /**
   * Method to get role drop down based on the application id
   */
  showAppBasedRoleDropDown() {
    this.userService.getRoleDropDown(this.selectedAppication.CAPPLID).subscribe({
      next: response => {
        this.roleDropDownList = response;
      },
      error: () => {
        this.toastr.error('Failed to get role drop down list. Please try again');
      }
    });
  }
  /**
   * Submit the user details to manage the role details
   */
  submitUserForm() {
    const formValue = this.userForm.value;
    const formattedAccessTo = formValue.accessTo ? moment__WEBPACK_IMPORTED_MODULE_0__(formValue.accessTo).format('DD-MMM-YYYY') : '';
    const payload = {
      applId: this.selectedAppication.CAPPLID,
      empCode: formValue.empCode,
      accessTo: formattedAccessTo,
      active: 'Y',
      role: formValue.role,
      pcemplcode: this.AES.decryptionAES(sessionStorage.getItem('empCode')) || '',
      isadmin: formValue.isadmin ? 'Y' : ''
    };
    this.userService.manageRole(payload).subscribe({
      next: response => {
        const retText = response.manageRoleResp;
        if (retText && retText.includes('Error')) {
          this.toastr.error(retText);
        } else {
          this.toastr.success('User role has been updated successfully');
          if (this.canShowRole) {
            this.showRole();
          }
        }
      },
      error: errResponse => {
        this.toastr.error('Failed to update user role. Please try again');
      }
    });
  }
  ngOnDestroy() {
    this.empCodeSearchSubscripton?.unsubscribe();
  }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) {
  return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](bd_common_lib__WEBPACK_IMPORTED_MODULE_5__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_11__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](bd_common_lib__WEBPACK_IMPORTED_MODULE_5__.AESEncryptDecryptService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute));
};
HomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: HomeComponent,
  selectors: [["app-home"]],
  decls: 10,
  vars: 2,
  consts: [[1, "content-tophead", "align-items-baseline"], [1, "pagetitle"], [1, "section", "dashboard"], [1, "row"], [1, "col-lg-12"], [1, "card"], ["class", "card-body", 4, "ngIf"], ["class", "col-lg-12", 4, "ngIf"], [1, "card-body"], [1, "card-title"], [1, "bd-form", 3, "formGroup", "ngSubmit"], [1, "col-md-6"], ["for", "", 1, "col-sm-4", "col-form-label"], [1, "col-sm-3", "bd-inputfield"], ["formControlName", "empCode", "type", "text", 1, "form-control", 3, "keydown", "keypress"], [1, "col-sm-5", "bd-inputfield"], ["formControlName", "empName", "type", "text", 1, "form-control"], [1, "col-sm-8", "bd-inputfield"], ["formControlName", "role", 1, "form-select"], ["value", "", "disabled", "", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-md-6", "mb-1"], ["type", "date", "formControlName", "accessTo", 1, "form-control"], ["for", "Administrator", 1, "col-sm-4", "col-form-label"], ["formControlName", "isadmin", "type", "checkbox", "name", "Administrator", "id", "Administrator"], [1, "col-md-12"], [1, "mt-3", "btn-groups", "ms-0"], ["type", "submit", 1, "btn", "btn-sm", "btn-primary", 3, "disabled"], ["type", "button", 1, "ms-2", "btn", "btn-light", "fw-bold", 3, "disabled", "click"], [3, "value"], [1, "table-responsive", "bd-table-bx"], [1, "table", "table-bordered", "bd-table", "border-primary", "mb-0"], ["scope", "col", 3, "click"], [4, "ngFor", "ngForOf"]],
  template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "User Administration And Role Management Module");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "section", 2)(5, "div", 3)(6, "div", 4)(7, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, HomeComponent_div_8_Template, 39, 6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, HomeComponent_div_9_Template, 23, 1, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.formShow);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.canShowRole);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe],
  styles: [".table-responsive.bd-table-bx[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    max-height: 40vh;\r\n    overflow: auto;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRTtBQUNGO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiLyoudGFibGUtcmVzcG9uc2l2ZS5iZC10YWJsZS1ieCB0aCB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0qL1xyXG4udGFibGUtcmVzcG9uc2l2ZS5iZC10YWJsZS1ieHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LWhlaWdodDogNDB2aDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 3071:
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var _shared_global_var__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/global-var */ 2005);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/app-config.service */ 1559);






class UserService {
  constructor(httpClient, appConfigService) {
    this.httpClient = httpClient;
    this.appConfigService = appConfigService;
    this.appSelectedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.appConfig = this.appConfigService.appConfig;
  }
  /**
   * Update the selected app subject, it will be called from nav component
   * @param app selected app
   */
  updateAppSelection(app) {
    this.appSelectedSubject.next(app);
  }
  /**
   * Make REST call to back end with the employee payload
   * @param payload Validate employee payload
   * @returns a response of employee object
   */
  validateEmp(payload) {
    const serverUrl = `${_shared_global_var__WEBPACK_IMPORTED_MODULE_0__.GlobalVar.BASE_API_URL}/user/validateEmp`;
    return this.httpClient.post(serverUrl, payload).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
      return response.result;
    }));
  }
  /**
   * Makes REST call to get list of application id for the given employee id
   * @param payload employee id
   * @returns a response with list of application list
   */
  getAppList(employeeId) {
    const payload = {
      pcemplcode: employeeId
    };
    console.log("Payload-", payload);
    const serverUrl = `${_shared_global_var__WEBPACK_IMPORTED_MODULE_0__.GlobalVar.BASE_API_URL}/user/getMenu`;
    return this.httpClient.post(serverUrl, payload).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
      return response.result;
    }));
  }
  /**
   * Makes REST call to get list of roles
   * @param payload Show role payload
   * @returns Response with role list
   */
  showRole(payload) {
    const serverUrl = `${_shared_global_var__WEBPACK_IMPORTED_MODULE_0__.GlobalVar.BASE_API_URL}/user/showRole`;
    return this.httpClient.post(serverUrl, payload).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
      return [...response.result.roleResponseList];
    }));
  }
  /**
   * Makes REST call to set role
   * @param payload Manage role payload
   * @returns Response with updated role
   */
  manageRole(payload) {
    const serverUrl = `${_shared_global_var__WEBPACK_IMPORTED_MODULE_0__.GlobalVar.BASE_API_URL}/user/manageRole`;
    return this.httpClient.post(serverUrl, payload).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
      return response.result;
    }));
  }
  getAppName(payload) {
    const serverUrl = `${_shared_global_var__WEBPACK_IMPORTED_MODULE_0__.GlobalVar.BASE_API_URL}/user/getAppName`;
    return this.httpClient.post(serverUrl, payload).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
      return response.result;
    }));
  }
  /**
   * Get role based drop down by application id
   * @param payload String
   * @returns roleDropdownList
   */
  getRoleDropDown(payload) {
    const serverUrl = `${_shared_global_var__WEBPACK_IMPORTED_MODULE_0__.GlobalVar.BASE_API_URL}/user/getRoleDropdown?appId=${payload}`;
    return this.httpClient.get(serverUrl).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
      return [...response.result.roleDropdownList];
    }));
  }
}
UserService.ɵfac = function UserService_Factory(t) {
  return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_1__.AppConfigService));
};
UserService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: UserService,
  factory: UserService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 2982:
/*!*****************************************************!*\
  !*** ./src/app/shared/components/loader.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoaderService": () => (/* binding */ LoaderService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class LoaderService {
  constructor() {
    this.isLoading = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
  }
  show() {
    this.isLoading.next(true);
  }
  hide() {
    this.isLoading.next(false);
  }
}
LoaderService.ɵfac = function LoaderService_Factory(t) {
  return new (t || LoaderService)();
};
LoaderService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: LoaderService,
  factory: LoaderService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 605:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/loader/loader.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoaderComponent": () => (/* binding */ LoaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../loader.service */ 2982);
/* harmony import */ var ngx_loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-loading */ 2517);



class LoaderComponent {
  constructor(loaderService) {
    this.loaderService = loaderService;
    this.loading = false;
  }
  ngOnInit() {
    this.loaderService.isLoading.subscribe(res => {
      this.loading = res;
    });
  }
}
LoaderComponent.ɵfac = function LoaderComponent_Factory(t) {
  return new (t || LoaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_loader_service__WEBPACK_IMPORTED_MODULE_0__.LoaderService));
};
LoaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: LoaderComponent,
  selectors: [["app-loader"]],
  decls: 1,
  vars: 1,
  consts: [[3, "show"]],
  template: function LoaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ngx-loading", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("show", ctx.loading);
    }
  },
  dependencies: [ngx_loading__WEBPACK_IMPORTED_MODULE_2__.NgxLoadingComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 2005:
/*!**************************************!*\
  !*** ./src/app/shared/global-var.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalVar": () => (/* binding */ GlobalVar)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);

const GlobalVar = Object.freeze({
  BASE_API_URL: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BASE_API_URL,
  //BASE_API_URL: 'http://localhost:7065/wdl/',
  USER_UI: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.USER_UI,
  Environment: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.Environment,
  //Envirnoment : 'Dev',
  EmpCode: sessionStorage.getItem('empCode'),
  EmpRole: sessionStorage.getItem('empRole'),
  EmpName: sessionStorage.getItem('empName'),
  LocCode: sessionStorage.getItem('empLocArea'),
  EmpCRRole: sessionStorage.getItem('empCRRole'),
  CDCRRole: sessionStorage.getItem('CDCRRole'),
  EmpRegion: sessionStorage.getItem('empRegion'),
  EmpCLevel: sessionStorage.getItem('empCLevel'),
  ServiceCode: sessionStorage.getItem('ServiceCode'),
  AuthToken: sessionStorage.getItem('authToken')
});

/***/ }),

/***/ 674:
/*!********************************************!*\
  !*** ./src/app/shared/http-interceptor.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "APIInterceptor": () => (/* binding */ APIInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 9337);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _global_var__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global-var */ 2005);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _components_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/loader.service */ 2982);
/* harmony import */ var bd_common_lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bd-common-lib */ 8919);






class APIInterceptor {
  constructor(loaderService, notify) {
    this.loaderService = loaderService;
    this.notify = notify;
  }
  intercept(request, next) {
    //how to update the request Parameters
    this.loaderService.show();
    //console.log("Before making api call : ");
    if (_global_var__WEBPACK_IMPORTED_MODULE_0__.GlobalVar.Environment.toString().trim() != 'Localhost') {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ` + sessionStorage.getItem('authToken')
        }
      });
    }
    return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(event => {
      //logging the http response to browser's console in case of a success
      if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpResponse) {
        this.loaderService.hide();
        // console.log("api call success :", event);
      }
    }, error => {
      this.loaderService.hide();
      //this.notify.showError(error?.error?.error, 'toast-bottom-right');
      if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpResponse) {
        //console.log("api call error :", event);
      }
    }));
  }
}
APIInterceptor.ɵfac = function APIInterceptor_Factory(t) {
  return new (t || APIInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_components_loader_service__WEBPACK_IMPORTED_MODULE_1__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](bd_common_lib__WEBPACK_IMPORTED_MODULE_5__.NotificationAlertService));
};
APIInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: APIInterceptor,
  factory: APIInterceptor.ɵfac
});

/***/ }),

/***/ 3842:
/*!******************************************************************!*\
  !*** ./src/app/shared/layout/logged-out/logged-out.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoggedOutComponent": () => (/* binding */ LoggedOutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var bd_common_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bd-common-lib */ 8919);


class LoggedOutComponent {
  constructor(authService) {
    this.authService = authService;
  }
  ngOnInit() {
    this.authService.setReload();
  }
}
LoggedOutComponent.ɵfac = function LoggedOutComponent_Factory(t) {
  return new (t || LoggedOutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](bd_common_lib__WEBPACK_IMPORTED_MODULE_1__.AuthenticationService));
};
LoggedOutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: LoggedOutComponent,
  selectors: [["app-logged-out"]],
  decls: 2,
  vars: 0,
  consts: [[2, "color", "green"]],
  template: function LoggedOutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "You are now successfully logged out.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 9774:
/*!****************************************************!*\
  !*** ./src/app/shared/layout/nav/nav.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavComponent": () => (/* binding */ NavComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/user.service */ 3071);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var bd_common_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bd-common-lib */ 8919);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);





function NavComponent_li_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 5)(1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavComponent_li_4_Template_a_click_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const app_r1 = restoredCtx.$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.clickOnAppLists($event, app_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const app_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](app_r1.CAPPLNAME);
  }
}
class NavComponent {
  constructor(userService, toastr, AES) {
    this.userService = userService;
    this.toastr = toastr;
    this.AES = AES;
    this.appList = [];
  }
  ngOnInit() {
    const employeeId = this.AES.decryptionAES(sessionStorage.getItem('empCode')) || '';
    this.userService.getAppList(employeeId).subscribe({
      next: response => {
        this.appList = response.applicationList;
      },
      error: errResponse => {
        this.toastr.error('Failed to application list. Please try again');
      }
    });
  }
  clickOnAppLists(event, app) {
    this.userService.updateAppSelection(app);
    console.log("employeeId--");
  }
}
NavComponent.ɵfac = function NavComponent_Factory(t) {
  return new (t || NavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](bd_common_lib__WEBPACK_IMPORTED_MODULE_3__.AESEncryptDecryptService));
};
NavComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: NavComponent,
  selectors: [["app-nav"]],
  decls: 13,
  vars: 1,
  consts: [["id", "sidebar", 1, "sidebar"], ["id", "sidebar-nav", 1, "sidebar-nav"], [1, "nav-heading"], ["class", "nav-item", 4, "ngFor", "ngForOf"], [1, "copyright"], [1, "nav-item"], ["href", "javascript:void(0);", 1, "nav-link", 3, "click"], [1, "bi", "bi-caret-right"]],
  template: function NavComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "aside", 0)(1, "ul", 1)(2, "li", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "APPLICATIONS");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, NavComponent_li_4_Template, 5, 1, "li", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " \u00A9 Copyright ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "strong")(8, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Blue Dart Express Limited");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, ".");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " All Rights Reserved ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.appList);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 742:
/*!**************************************************************************!*\
  !*** ./src/app/shared/layout/page-not-found/page-not-found.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageNotFoundComponent": () => (/* binding */ PageNotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class PageNotFoundComponent {}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) {
  return new (t || PageNotFoundComponent)();
};
PageNotFoundComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: PageNotFoundComponent,
  selectors: [["app-page-not-found"]],
  decls: 2,
  vars: 0,
  template: function PageNotFoundComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "The page you are trying to access could not be found.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 7923:
/*!**************************************************************************************!*\
  !*** ./src/app/shared/layout/un-authorized-access/un-authorized-access.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnAuthorizedAccessComponent": () => (/* binding */ UnAuthorizedAccessComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var bd_common_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bd-common-lib */ 8919);


class UnAuthorizedAccessComponent {
  constructor(authService) {
    this.authService = authService;
  }
  ngOnInit() {
    this.authService.setReload();
  }
}
UnAuthorizedAccessComponent.ɵfac = function UnAuthorizedAccessComponent_Factory(t) {
  return new (t || UnAuthorizedAccessComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](bd_common_lib__WEBPACK_IMPORTED_MODULE_1__.AuthenticationService));
};
UnAuthorizedAccessComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: UnAuthorizedAccessComponent,
  selectors: [["app-un-authorized-access"]],
  decls: 2,
  vars: 0,
  consts: [[2, "color", "red"]],
  template: function UnAuthorizedAccessComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "You are un-authorized to view this page. Please login to view.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 2328:
/*!**************************************************!*\
  !*** ./src/app/shared/pipes/format-date.pipe.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormatDatePipe": () => (/* binding */ FormatDatePipe)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 6908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class FormatDatePipe {
  transform(date) {
    if (!date) {
      return '';
    }
    return moment__WEBPACK_IMPORTED_MODULE_0__(date).format('DD-MM-YYYY');
  }
}
FormatDatePipe.ɵfac = function FormatDatePipe_Factory(t) {
  return new (t || FormatDatePipe)();
};
FormatDatePipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
  name: "formatDate",
  type: FormatDatePipe,
  pure: true
});

/***/ }),

/***/ 1559:
/*!*******************************************************!*\
  !*** ./src/app/shared/services/app-config.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppConfigService": () => (/* binding */ AppConfigService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);


class AppConfigService {
  constructor(http) {
    this.http = http;
  }
  loadConfig() {
    return this.http.get('../assets/config/environment.json').toPromise().then(config => {
      this._appConfig = config;
    }).catch(err => {
      console.error(err);
    });
  }
  get appConfig() {
    return this._appConfig;
  }
  set appConfig(value) {
    this._appConfig = value;
  }
}
AppConfigService.ɵfac = function AppConfigService_Factory(t) {
  return new (t || AppConfigService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
};
AppConfigService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: AppConfigService,
  factory: AppConfigService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 1643:
/*!***********************************************!*\
  !*** ./src/app/shared/services/auth.guard.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class AuthGuard {
  constructor(router) {
    this.router = router;
  }
  canActivate(route, state) {
    if (sessionStorage.getItem('currentUser') != null) {
      // logged in so return true
      return true;
    }
    // not logged in so redirect to login page with the return url
    this.router.navigate(['/un-authorized-access']);
    return false;
  }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) {
  return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
};
AuthGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: AuthGuard,
  factory: AuthGuard.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: false,
  Environment: 'UAT',
  BASE_API_URL: 'https://gateway.test-int.apps.mykulocp001.dhl.com',
  USER_UI: 'https://entportaluat-bluedart.dhl.com/'
};

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 6700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 8685,
	"./af.js": 8685,
	"./ar": 254,
	"./ar-dz": 4312,
	"./ar-dz.js": 4312,
	"./ar-kw": 2614,
	"./ar-kw.js": 2614,
	"./ar-ly": 8630,
	"./ar-ly.js": 8630,
	"./ar-ma": 8674,
	"./ar-ma.js": 8674,
	"./ar-sa": 9032,
	"./ar-sa.js": 9032,
	"./ar-tn": 4730,
	"./ar-tn.js": 4730,
	"./ar.js": 254,
	"./az": 3052,
	"./az.js": 3052,
	"./be": 150,
	"./be.js": 150,
	"./bg": 3069,
	"./bg.js": 3069,
	"./bm": 3466,
	"./bm.js": 3466,
	"./bn": 8516,
	"./bn-bd": 557,
	"./bn-bd.js": 557,
	"./bn.js": 8516,
	"./bo": 6273,
	"./bo.js": 6273,
	"./br": 9588,
	"./br.js": 9588,
	"./bs": 9815,
	"./bs.js": 9815,
	"./ca": 3331,
	"./ca.js": 3331,
	"./cs": 1320,
	"./cs.js": 1320,
	"./cv": 2219,
	"./cv.js": 2219,
	"./cy": 8266,
	"./cy.js": 8266,
	"./da": 6427,
	"./da.js": 6427,
	"./de": 7435,
	"./de-at": 2871,
	"./de-at.js": 2871,
	"./de-ch": 2994,
	"./de-ch.js": 2994,
	"./de.js": 7435,
	"./dv": 2357,
	"./dv.js": 2357,
	"./el": 5649,
	"./el.js": 5649,
	"./en-au": 9961,
	"./en-au.js": 9961,
	"./en-ca": 9878,
	"./en-ca.js": 9878,
	"./en-gb": 3924,
	"./en-gb.js": 3924,
	"./en-ie": 864,
	"./en-ie.js": 864,
	"./en-il": 1579,
	"./en-il.js": 1579,
	"./en-in": 940,
	"./en-in.js": 940,
	"./en-nz": 6181,
	"./en-nz.js": 6181,
	"./en-sg": 4301,
	"./en-sg.js": 4301,
	"./eo": 5291,
	"./eo.js": 5291,
	"./es": 4529,
	"./es-do": 3764,
	"./es-do.js": 3764,
	"./es-mx": 2584,
	"./es-mx.js": 2584,
	"./es-us": 3425,
	"./es-us.js": 3425,
	"./es.js": 4529,
	"./et": 5203,
	"./et.js": 5203,
	"./eu": 678,
	"./eu.js": 678,
	"./fa": 3483,
	"./fa.js": 3483,
	"./fi": 6262,
	"./fi.js": 6262,
	"./fil": 2521,
	"./fil.js": 2521,
	"./fo": 4555,
	"./fo.js": 4555,
	"./fr": 3131,
	"./fr-ca": 8239,
	"./fr-ca.js": 8239,
	"./fr-ch": 1702,
	"./fr-ch.js": 1702,
	"./fr.js": 3131,
	"./fy": 267,
	"./fy.js": 267,
	"./ga": 3821,
	"./ga.js": 3821,
	"./gd": 1753,
	"./gd.js": 1753,
	"./gl": 4074,
	"./gl.js": 4074,
	"./gom-deva": 2762,
	"./gom-deva.js": 2762,
	"./gom-latn": 5969,
	"./gom-latn.js": 5969,
	"./gu": 2809,
	"./gu.js": 2809,
	"./he": 5402,
	"./he.js": 5402,
	"./hi": 315,
	"./hi.js": 315,
	"./hr": 410,
	"./hr.js": 410,
	"./hu": 8288,
	"./hu.js": 8288,
	"./hy-am": 7928,
	"./hy-am.js": 7928,
	"./id": 1334,
	"./id.js": 1334,
	"./is": 6959,
	"./is.js": 6959,
	"./it": 4864,
	"./it-ch": 1124,
	"./it-ch.js": 1124,
	"./it.js": 4864,
	"./ja": 6141,
	"./ja.js": 6141,
	"./jv": 9187,
	"./jv.js": 9187,
	"./ka": 2136,
	"./ka.js": 2136,
	"./kk": 4332,
	"./kk.js": 4332,
	"./km": 8607,
	"./km.js": 8607,
	"./kn": 4305,
	"./kn.js": 4305,
	"./ko": 234,
	"./ko.js": 234,
	"./ku": 6003,
	"./ku.js": 6003,
	"./ky": 5061,
	"./ky.js": 5061,
	"./lb": 2786,
	"./lb.js": 2786,
	"./lo": 6183,
	"./lo.js": 6183,
	"./lt": 29,
	"./lt.js": 29,
	"./lv": 4169,
	"./lv.js": 4169,
	"./me": 8577,
	"./me.js": 8577,
	"./mi": 8177,
	"./mi.js": 8177,
	"./mk": 337,
	"./mk.js": 337,
	"./ml": 5260,
	"./ml.js": 5260,
	"./mn": 2325,
	"./mn.js": 2325,
	"./mr": 4695,
	"./mr.js": 4695,
	"./ms": 5334,
	"./ms-my": 7151,
	"./ms-my.js": 7151,
	"./ms.js": 5334,
	"./mt": 3570,
	"./mt.js": 3570,
	"./my": 7963,
	"./my.js": 7963,
	"./nb": 8028,
	"./nb.js": 8028,
	"./ne": 6638,
	"./ne.js": 6638,
	"./nl": 302,
	"./nl-be": 6782,
	"./nl-be.js": 6782,
	"./nl.js": 302,
	"./nn": 3501,
	"./nn.js": 3501,
	"./oc-lnc": 563,
	"./oc-lnc.js": 563,
	"./pa-in": 869,
	"./pa-in.js": 869,
	"./pl": 5302,
	"./pl.js": 5302,
	"./pt": 9687,
	"./pt-br": 4884,
	"./pt-br.js": 4884,
	"./pt.js": 9687,
	"./ro": 9107,
	"./ro.js": 9107,
	"./ru": 3627,
	"./ru.js": 3627,
	"./sd": 355,
	"./sd.js": 355,
	"./se": 3427,
	"./se.js": 3427,
	"./si": 1848,
	"./si.js": 1848,
	"./sk": 4590,
	"./sk.js": 4590,
	"./sl": 184,
	"./sl.js": 184,
	"./sq": 6361,
	"./sq.js": 6361,
	"./sr": 8965,
	"./sr-cyrl": 1287,
	"./sr-cyrl.js": 1287,
	"./sr.js": 8965,
	"./ss": 5456,
	"./ss.js": 5456,
	"./sv": 451,
	"./sv.js": 451,
	"./sw": 7558,
	"./sw.js": 7558,
	"./ta": 1356,
	"./ta.js": 1356,
	"./te": 3693,
	"./te.js": 3693,
	"./tet": 1243,
	"./tet.js": 1243,
	"./tg": 2500,
	"./tg.js": 2500,
	"./th": 5768,
	"./th.js": 5768,
	"./tk": 7761,
	"./tk.js": 7761,
	"./tl-ph": 5780,
	"./tl-ph.js": 5780,
	"./tlh": 9590,
	"./tlh.js": 9590,
	"./tr": 3807,
	"./tr.js": 3807,
	"./tzl": 3857,
	"./tzl.js": 3857,
	"./tzm": 654,
	"./tzm-latn": 8806,
	"./tzm-latn.js": 8806,
	"./tzm.js": 654,
	"./ug-cn": 845,
	"./ug-cn.js": 845,
	"./uk": 9232,
	"./uk.js": 9232,
	"./ur": 7052,
	"./ur.js": 7052,
	"./uz": 7967,
	"./uz-latn": 2233,
	"./uz-latn.js": 2233,
	"./uz.js": 7967,
	"./vi": 8615,
	"./vi.js": 8615,
	"./x-pseudo": 2320,
	"./x-pseudo.js": 2320,
	"./yo": 1313,
	"./yo.js": 1313,
	"./zh-cn": 4490,
	"./zh-cn.js": 4490,
	"./zh-hk": 5910,
	"./zh-hk.js": 5910,
	"./zh-mo": 8262,
	"./zh-mo.js": 8262,
	"./zh-tw": 4223,
	"./zh-tw.js": 4223
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 6700;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map