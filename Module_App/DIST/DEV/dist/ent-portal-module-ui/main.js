(self["webpackChunkEntPortal_module_ui"] = self["webpackChunkEntPortal_module_ui"] || []).push([["main"],{

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/home/home.component */ 8263);
/* harmony import */ var _components_alternate_customer_master_alternate_customer_master_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/alternate-customer-master/alternate-customer-master.component */ 3689);
/* harmony import */ var _components_awb_listingus_awb_listingus_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/awb-listingus/awb-listingus.component */ 7090);
/* harmony import */ var _components_capx_module_capx_module_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/capx-module/capx-module.component */ 6006);
/* harmony import */ var _components_mis_schedular_mis_schedular_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/mis-schedular/mis-schedular.component */ 4942);
/* harmony import */ var _components_stray_module_stray_module_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/stray-module/stray-module.component */ 6605);
/* harmony import */ var _components_notification_notification_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/notification/notification.component */ 5981);
/* harmony import */ var _components_customer_master_customer_master_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/customer-master/customer-master.component */ 352);
/* harmony import */ var _components_customer_group_enrty_customer_group_enrty_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/customer-group-enrty/customer-group-enrty.component */ 8250);
/* harmony import */ var _shared_components_un_authorized_access_un_authorized_access_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/components/un-authorized-access/un-authorized-access.component */ 9366);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);













const routes = [{
  path: '',
  redirectTo: '/dashboard',
  pathMatch: 'full'
}, {
  path: 'dashboard',
  component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}, {
  path: 'Alternate_Customer_master',
  component: _components_alternate_customer_master_alternate_customer_master_component__WEBPACK_IMPORTED_MODULE_1__.AlternateCustomerMasterComponent
}, {
  path: 'awb_listing',
  component: _components_awb_listingus_awb_listingus_component__WEBPACK_IMPORTED_MODULE_2__.AwbListingusComponent
}, {
  path: 'CAPX_Module',
  component: _components_capx_module_capx_module_component__WEBPACK_IMPORTED_MODULE_3__.CAPXModuleComponent
}, {
  path: 'MIS_Schedular',
  component: _components_mis_schedular_mis_schedular_component__WEBPACK_IMPORTED_MODULE_4__.MISSchedularComponent
}, {
  path: 'Stray_module',
  component: _components_stray_module_stray_module_component__WEBPACK_IMPORTED_MODULE_5__.StrayModuleComponent
}, {
  path: 'Notification',
  component: _components_notification_notification_component__WEBPACK_IMPORTED_MODULE_6__.NotificationComponent
}, {
  path: 'customer-master',
  component: _components_customer_master_customer_master_component__WEBPACK_IMPORTED_MODULE_7__.CustomerMasterComponent
}, {
  path: 'customer-group-enrty',
  component: _components_customer_group_enrty_customer_group_enrty_component__WEBPACK_IMPORTED_MODULE_8__.CustomerGroupEnrtyComponent
}, {
  path: 'un-authorized-access',
  component: _shared_components_un_authorized_access_un_authorized_access_component__WEBPACK_IMPORTED_MODULE_9__.UnAuthorizedAccessComponent
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule]
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
/* harmony import */ var src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.constants */ 2976);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var bd_common_lib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bd-common-lib */ 8919);
/* harmony import */ var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/nav/nav.component */ 994);
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/components/loader/loader.component */ 605);









const _c0 = ["toggle-sidebar-btn"];
function AppComponent_app_nav_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-nav");
  }
}
class AppComponent {
  //userservice=inject(BDCommonLibService)
  constructor(title, document, renderer) {
    this.title = title;
    this.document = document;
    this.renderer = renderer;
    this.isUserLoggedIn = false;
    // if (sessionStorage.getItem('empCode') != null) {
    //   // logged in so return true
    //   this.isUserLoggedIn = true;
    // }
    // else 
    // {
    if (src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.Environment === 'Dev') {
      this.isUserLoggedIn = true;
    }
    // }
    this.toggleButton = null;
  }
  ngAfterViewInit() {
    // this.removeButtons();
  }
  ngOnInit() {
    if (window.location.href.includes("CAPX_Module")) {
      this.title.setTitle("Capex Module");
    } else if (window.location.href.includes("Alternate_Customer_master")) {
      this.title.setTitle("Alternate Customer Master");
    } else if (window.location.href.includes("awb_listing")) {
      this.title.setTitle("Awb Listing");
    } else if (window.location.href.includes("MIS_Schedular")) {
      this.title.setTitle("MIS Schedular");
    } else if (window.location.href.includes("Notification")) {
      this.title.setTitle("Notification Module");
    } else if (window.location.href.includes("Stray_module")) {
      this.title.setTitle("Stray_module");
    }
    this.document.body.classList.toggle('toggle-sidebar');
    // let btn = this.document.getElementsByClassName('toggle-sidebar-btn');
    // console.log(btn);
    // console.log(btn.classList);
    // this.toggleButton.forEach((element:ElementRef) =>{
    //   element.nativeElement.remove();
    // })
    let boxes = Array.from(document.getElementsByClassName('bi bi-list toggle-sidebar-btn'));
    boxes.forEach(box => {
      box.remove();
    });
  }
  removeButtons() {
    // this.toggleButton.forEach((element:ElementRef) =>{
    //   this.renderer.removeChild(element.nativeElement.parentNode, element.nativeElement);
    // })
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Renderer2));
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  viewQuery: function AppComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.toggleButton = _t);
    }
  },
  decls: 6,
  vars: 1,
  consts: [[4, "ngIf"], ["id", "main", 1, "main"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "lib-bd-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AppComponent_app_nav_1_Template, 1, 0, "app-nav", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "main", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "app-loader")(4, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "lib-bd-footer");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isUserLoggedIn == true);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet, bd_common_lib__WEBPACK_IMPORTED_MODULE_7__.BdHeaderComponent, bd_common_lib__WEBPACK_IMPORTED_MODULE_7__.BdFooterComponent, _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__.NavComponent, _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__.LoaderComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 2976:
/*!**********************************!*\
  !*** ./src/app/app.constants.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppConstants": () => (/* binding */ AppConstants)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);

class AppConstants {}
//#region Service URL's
AppConstants.Environment = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.Environment;
AppConstants.USER_UI = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.userLoginUrl;
//*************DEVELOPMENT****************//
// public static BASE_URL = 'http://localhost:7077';  //DEVELOPMENT
// public static BASE_URL_NETWORK = 'http://localhost:7075'  //DEVELOPMENT
//*************LINUX TEST****************//
// public static BASE_URL = 'http://172.18.62.63:7077';  // Linux TEST
// public static BASE_URL_NETWORK = 'http://172.18.62.63:7075'  // Linux TEST
// public static BASE_URL = 'http://172.18.62.63:8083'; // Linux TEST Gateway
// public static BASE_URL_NETWORK = 'http://172.18.62.63:8083'  // Linux TEST Gateway
//*************DHL UAT****************//
// public static BASE_URL = 'https://gateway-ecs-enterprise-portal-dev.apps.mykulocp001.dhl.com';
// public static BASE_URL_NETWORK = 'https://gateway-ecs-enterprise-portal-dev.apps.mykulocp001.dhl.com'
AppConstants.BASE_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
//public static BASE_URL = 'https://gateway.test-int.apps.mykulocp001.dhl.com';
AppConstants.BASE_URL_NETWORK = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
AppConstants.STRAY_MODULE_SERVICE_URL = `${AppConstants.BASE_URL}/stray_module`;
AppConstants.NOTIFICATION_MODULE_SERVICE_URL = `${AppConstants.BASE_URL}/notification`;
AppConstants.CUSTOMER_MODULE_SERVICE_URL = `${AppConstants.BASE_URL}/altCust`;
AppConstants.SCHEDULER = `${AppConstants.BASE_URL}/misScheduler/schedule`;
AppConstants.AWB_LISTING = `${AppConstants.BASE_URL_NETWORK}/altInstAwb/rtoComReport`;
AppConstants.CAPEX = `${AppConstants.BASE_URL_NETWORK}/capex`;
AppConstants.STRAY_CSV_DOWNLOAD = `${AppConstants.STRAY_MODULE_SERVICE_URL}/stray_CSV_new`;
AppConstants.STRAY_QUERY = `${AppConstants.STRAY_MODULE_SERVICE_URL}/Strayquery_new`;
AppConstants.STRAY_IMAGE = `${AppConstants.STRAY_MODULE_SERVICE_URL}/Stray_image`;
AppConstants.STRAY_MASS_UPDATE = `${AppConstants.STRAY_MODULE_SERVICE_URL}/MassStaryUpdate`;
AppConstants.STRAY_ENTRY = `${AppConstants.STRAY_MODULE_SERVICE_URL}/strayEntry_new`;
AppConstants.STRAY_UPDATE = `${AppConstants.STRAY_MODULE_SERVICE_URL}/strayUpdate_new`;
AppConstants.STRAY_UPLOAD_FILE = `${AppConstants.STRAY_MODULE_SERVICE_URL}/UploadFiletoDatabase`;
AppConstants.NOTIFICATION_TYPE = `${AppConstants.NOTIFICATION_MODULE_SERVICE_URL}/getType`;
AppConstants.NOTIFICATION_MASTER_ENTRY = `${AppConstants.NOTIFICATION_MODULE_SERVICE_URL}/custMasterEntry`;
AppConstants.NOTIFICATION_ENTRY = `${AppConstants.NOTIFICATION_MODULE_SERVICE_URL}/custEntry`;
AppConstants.ALTERNATE_CUSTOMER_ENTRY = `${AppConstants.CUSTOMER_MODULE_SERVICE_URL}/insertSaleGrp`;
AppConstants.SCHEDULER_VIEW = `${AppConstants.BASE_URL}/misScheduler/view`;
AppConstants.EmpCode = sessionStorage.getItem('empCode');
AppConstants.EmpRole = sessionStorage.getItem('empRole');
AppConstants.EmpName = sessionStorage.getItem('empName');
AppConstants.LocCode = sessionStorage.getItem('empLocArea');
AppConstants.EmpCRRole = sessionStorage.getItem('empCRRole');
AppConstants.CDCRRole = sessionStorage.getItem('CDCRRole');
AppConstants.EmpCLevel = sessionStorage.getItem('empCLevel');
AppConstants.ServiceCode = sessionStorage.getItem('ServiceCode');
AppConstants.AuthToken = sessionStorage.getItem('authToken');

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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var bd_common_lib__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! bd-common-lib */ 8919);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ 8263);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/nav/nav.component */ 994);
/* harmony import */ var _components_alternate_customer_master_alternate_customer_master_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/alternate-customer-master/alternate-customer-master.component */ 3689);
/* harmony import */ var _components_awb_listingus_awb_listingus_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/awb-listingus/awb-listingus.component */ 7090);
/* harmony import */ var _components_capx_module_capx_module_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/capx-module/capx-module.component */ 6006);
/* harmony import */ var _components_mis_schedular_mis_schedular_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/mis-schedular/mis-schedular.component */ 4942);
/* harmony import */ var _components_stray_module_stray_module_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/stray-module/stray-module.component */ 6605);
/* harmony import */ var _components_notification_notification_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/notification/notification.component */ 5981);
/* harmony import */ var _components_stray_entry_stray_entry_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/stray-entry/stray-entry.component */ 2758);
/* harmony import */ var _components_query_query_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/query/query.component */ 1431);
/* harmony import */ var _components_mass_update_mass_update_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/mass-update/mass-update.component */ 4110);
/* harmony import */ var _components_download_csv_download_csv_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/download-csv/download-csv.component */ 3328);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _pack_stay_pack_stay_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pack-stay/pack-stay.component */ 5749);
/* harmony import */ var _components_notificationentryform_notificationentryform_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/notificationentryform/notificationentryform.component */ 2927);
/* harmony import */ var _components_customer_master_customer_master_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/customer-master/customer-master.component */ 352);
/* harmony import */ var _components_customer_group_enrty_customer_group_enrty_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/customer-group-enrty/customer-group-enrty.component */ 8250);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _shared_services_datepicker_adapter__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/services/datepicker-adapter */ 6595);
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/components/loader/loader.component */ 605);
/* harmony import */ var ngx_loading__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ngx-loading */ 2517);
/* harmony import */ var _shared_http_interceptor__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shared/http-interceptor */ 674);
/* harmony import */ var _components_stray_update_stray_update_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/stray-update/stray-update.component */ 7960);
/* harmony import */ var _shared_components_un_authorized_access_un_authorized_access_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./shared/components/un-authorized-access/un-authorized-access.component */ 9366);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/core */ 2560);

































class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineInjector"]({
  providers: [{
    provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbDateAdapter,
    useClass: _shared_services_datepicker_adapter__WEBPACK_IMPORTED_MODULE_18__.CustomAdapter
  }, {
    provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbDateParserFormatter,
    useClass: _shared_services_datepicker_adapter__WEBPACK_IMPORTED_MODULE_18__.CustomDateParserFormatter
  }, {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_25__.HTTP_INTERCEPTORS,
    useClass: _shared_http_interceptor__WEBPACK_IMPORTED_MODULE_20__.APIInterceptor,
    multi: true
  }],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_26__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, bd_common_lib__WEBPACK_IMPORTED_MODULE_27__.BDCommonLibModule, _angular_common__WEBPACK_IMPORTED_MODULE_28__.CommonModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_25__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_29__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbDatepickerModule, ngx_loading__WEBPACK_IMPORTED_MODULE_30__.NgxLoadingModule.forRoot({})]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent, _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_3__.NavComponent, _components_alternate_customer_master_alternate_customer_master_component__WEBPACK_IMPORTED_MODULE_4__.AlternateCustomerMasterComponent, _components_awb_listingus_awb_listingus_component__WEBPACK_IMPORTED_MODULE_5__.AwbListingusComponent, _components_capx_module_capx_module_component__WEBPACK_IMPORTED_MODULE_6__.CAPXModuleComponent, _components_mis_schedular_mis_schedular_component__WEBPACK_IMPORTED_MODULE_7__.MISSchedularComponent, _components_stray_module_stray_module_component__WEBPACK_IMPORTED_MODULE_8__.StrayModuleComponent, _components_notification_notification_component__WEBPACK_IMPORTED_MODULE_9__.NotificationComponent, _components_stray_entry_stray_entry_component__WEBPACK_IMPORTED_MODULE_10__.StrayEntryComponent, _components_query_query_component__WEBPACK_IMPORTED_MODULE_11__.QueryComponent, _components_mass_update_mass_update_component__WEBPACK_IMPORTED_MODULE_12__.MassUpdateComponent, _components_download_csv_download_csv_component__WEBPACK_IMPORTED_MODULE_13__.DownloadCSVComponent, _pack_stay_pack_stay_component__WEBPACK_IMPORTED_MODULE_14__.PackStayComponent, _components_notificationentryform_notificationentryform_component__WEBPACK_IMPORTED_MODULE_15__.NotificationentryformComponent, _components_customer_master_customer_master_component__WEBPACK_IMPORTED_MODULE_16__.CustomerMasterComponent, _components_customer_group_enrty_customer_group_enrty_component__WEBPACK_IMPORTED_MODULE_17__.CustomerGroupEnrtyComponent, _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_19__.LoaderComponent, _components_stray_update_stray_update_component__WEBPACK_IMPORTED_MODULE_21__.StrayUpdateComponent, _shared_components_un_authorized_access_un_authorized_access_component__WEBPACK_IMPORTED_MODULE_22__.UnAuthorizedAccessComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_26__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, bd_common_lib__WEBPACK_IMPORTED_MODULE_27__.BDCommonLibModule, _angular_common__WEBPACK_IMPORTED_MODULE_28__.CommonModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_25__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_29__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbDatepickerModule, ngx_loading__WEBPACK_IMPORTED_MODULE_30__.NgxLoadingModule]
  });
})();
_angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵsetComponentScope"](_components_stray_module_stray_module_component__WEBPACK_IMPORTED_MODULE_8__.StrayModuleComponent, function () {
  return [_angular_common__WEBPACK_IMPORTED_MODULE_28__.NgIf, _components_stray_entry_stray_entry_component__WEBPACK_IMPORTED_MODULE_10__.StrayEntryComponent, _components_query_query_component__WEBPACK_IMPORTED_MODULE_11__.QueryComponent, _components_mass_update_mass_update_component__WEBPACK_IMPORTED_MODULE_12__.MassUpdateComponent, _components_download_csv_download_csv_component__WEBPACK_IMPORTED_MODULE_13__.DownloadCSVComponent, _components_stray_update_stray_update_component__WEBPACK_IMPORTED_MODULE_21__.StrayUpdateComponent];
}, []);

/***/ }),

/***/ 3689:
/*!*********************************************************************************************!*\
  !*** ./src/app/components/alternate-customer-master/alternate-customer-master.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlternateCustomerMasterComponent": () => (/* binding */ AlternateCustomerMasterComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.constants */ 2976);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_shared_services_stray_module_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/stray.module.service */ 52);
/* harmony import */ var src_app_shared_services_csv_download_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/csv.download.service */ 529);
/* harmony import */ var bd_common_lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bd-common-lib */ 8919);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);









function AlternateCustomerMasterComponent_div_86_tr_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AlternateCustomerMasterComponent_div_86_tr_28_Template_tr_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const cus_r2 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.patchForm(cus_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "th", 48)(2, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const cus_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](cus_r2.Group_Code);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](cus_r2.Region);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](cus_r2.Branch);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](cus_r2.Area);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](cus_r2.Customer_Code);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](cus_r2.Product_Code);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](cus_r2.Mode);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](cus_r2.Entry_Date);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](cus_r2.Employee_code);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](cus_r2.Pack_Type);
  }
}
function AlternateCustomerMasterComponent_div_86_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 43)(4, "table", 44)(5, "thead")(6, "tr")(7, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Group Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Region");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Branch");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Area");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Customer Code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Product Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Mode");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Entry Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Employee code");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Pack Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, AlternateCustomerMasterComponent_div_86_tr_28_Template, 22, 10, "tr", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.fsmData);
  }
}
class AlternateCustomerMasterComponent {
  constructor(fb, strayModuleService, csvService, alert, crypto, title) {
    this.fb = fb;
    this.strayModuleService = strayModuleService;
    this.csvService = csvService;
    this.alert = alert;
    this.crypto = crypto;
    this.title = title;
    this.customerData = [];
    this.fsmData = [];
    this.templateError = '';
  }
  ngOnInit() {
    this.title.setTitle("Alternate Customer Master");
    this.createForm();
  }
  createForm() {
    this.customerForm = this.fb.group({
      pccompgrp: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      pcregion: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      pcbranch: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(3)]],
      pcarea: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      pccustcode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      pcprodcode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      pcmode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(1)],
      pcpacktype: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(1)]
    });
    this.fsmData = [];
  }
  downloadCSV() {
    const payload = {
      "mcemplcode": "",
      "pccompgrp": "",
      "pcregion": "",
      "pcbranch": "",
      "pcarea": "",
      "pccustcode": "",
      "pcprodcode": "",
      "pcmode": "",
      "pcpacktype": "",
      "mcsubmit": "DOWNLOAD_CSV"
    };
    this.strayModuleService.postDetails(payload, src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.ALTERNATE_CUSTOMER_ENTRY).subscribe(res => {
      if (res.result) {
        this.alert.showSuccess('CSV Downloaded successfully', 'toast-bottom-right');
        this.csvService.exportToCsv('ALTERNATE_CUSTOMER_MASTER_ENTRY.csv', res.result.p_cursor);
      }
    }, err => {
      this.alert.showError('Error occured try again !!', 'toast-bottom-right');
    });
  }
  fetchDetails() {
    if (this.customerForm.value.pccompgrp) {
      const payload = {
        "mcemplcode": "",
        "pccompgrp": this.customerForm.value.pccompgrp,
        "pcregion": "",
        "pcbranch": "",
        "pcarea": "",
        "pccustcode": "",
        "pcprodcode": "",
        "pcmode": "",
        "pcpacktype": "",
        "mcsubmit": "DOWNLOAD_CSV"
      };
      this.templateError = '';
      this.strayModuleService.postDetails(payload, src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.ALTERNATE_CUSTOMER_ENTRY).subscribe(res => {
        if (res.result) {
          this.fsmData = res.result.p_cursor;
        }
      }, err => {
        this.alert.showError('Error occured try again !!', 'toast-bottom-right');
      });
    }
  }
  saveDetails() {
    const requestBody = {
      "mcemplcode": this.crypto.decryptionAES(sessionStorage.getItem('empCode')),
      "pccompgrp": this.customerForm.value.pccompgrp,
      "pcregion": this.customerForm.value.pcregion,
      "pcbranch": this.customerForm.value.pcbranch,
      "pcarea": this.customerForm.value.pcarea,
      "pccustcode": this.customerForm.value.pccustcode,
      "pcprodcode": this.customerForm.value.pcprodcode,
      "pcmode": this.customerForm.value.pcmode,
      "pcpacktype": this.customerForm.value.pcpacktype,
      "mcsubmit": "SAVE"
    };
    this.strayModuleService.postDetails(requestBody, src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.ALTERNATE_CUSTOMER_ENTRY).subscribe(res => {
      if (res.result.cvalidflag == "Y") {
        this.alert.showSuccess('Data Saved Succesfully', 'toast-bottom-right');
        this.createForm();
      } else {
        this.templateError = res.result.cerrmsg;
      }
    }, err => {
      this.alert.showError('Error occured try again !!', 'toast-bottom-right');
    });
  }
  removeDetails() {
    if (this.customerForm.valid) {
      let requestBody = this.customerForm.getRawValue();
      requestBody.mcsubmit = 'DELETE';
      this.strayModuleService.postDetails(requestBody, src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.ALTERNATE_CUSTOMER_ENTRY).subscribe(res => {
        if (res.result) {
          this.alert.showSuccess('Data Deleted Succesfully', 'toast-bottom-right');
          this.createForm();
        }
      }, err => {
        this.alert.showError('Error occured try again !!', 'toast-bottom-right');
      });
    }
  }
  patchForm(cus) {
    this.customerForm.patchValue(cus);
    this.customerForm.patchValue({
      pccompgrp: cus.Group_Code,
      pcregion: cus.Region,
      pcbranch: cus.Branch,
      pcarea: cus.Area,
      pccustcode: cus.Customer_Code,
      pcprodcode: cus.Product_Code,
      pcmode: cus.Mode,
      pcpacktype: cus.Pack_Type
    });
    this.customerForm.patchValue(cus);
    this.customerData = [];
  }
}
AlternateCustomerMasterComponent.ɵfac = function AlternateCustomerMasterComponent_Factory(t) {
  return new (t || AlternateCustomerMasterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_stray_module_service__WEBPACK_IMPORTED_MODULE_1__.StrayModuleService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_csv_download_service__WEBPACK_IMPORTED_MODULE_2__.CsvService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](bd_common_lib__WEBPACK_IMPORTED_MODULE_5__.NotificationAlertService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](bd_common_lib__WEBPACK_IMPORTED_MODULE_5__.AESEncryptDecryptService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.Title));
};
AlternateCustomerMasterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: AlternateCustomerMasterComponent,
  selectors: [["app-alternate-customer-master"]],
  decls: 87,
  vars: 4,
  consts: [[1, "section", "dashboard"], [1, "row"], [1, "col-lg-12"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "bd-form", 3, "formGroup"], [1, "col-md-6"], ["for", "pccompgrp", 1, "col-sm-4", "col-form-label"], [1, "col-sm-8", "bd-inputfield"], ["type", "text", "formControlName", "pccompgrp", "maxlength", "6", 1, "form-control"], ["href", "javascript:void(0)", 1, "reset-btn", 3, "click"], ["for", "pcregion", 1, "col-sm-4", "col-form-label"], ["type", "text", "formControlName", "pcregion", "maxlength", "6", 1, "form-control"], ["for", "pcbranch", 1, "col-sm-4", "col-form-label"], ["type", "text", "formControlName", "pcbranch", "maxlength", "3", 1, "form-control"], ["for", "pcarea", 1, "col-sm-4", "col-form-label"], ["type", "text", "formControlName", "pcarea", "maxlength", "3", 1, "form-control"], ["for", "customercode", 1, "col-sm-4", "col-form-label"], ["type", "text", "formControlName", "pccustcode", "maxlength", "6", 1, "form-control"], ["for", "productcode", 1, "col-sm-4", "col-form-label"], ["type", "text", "formControlName", "pcprodcode", "maxlength", "1", 1, "form-control"], ["for", "mode", 1, "col-sm-4", "col-form-label"], ["type", "text", "formControlName", "pcmode", "maxlength", "1", 1, "form-control"], ["for", "packtype", 1, "col-sm-4", "col-form-label"], ["type", "text", "formControlName", "pcpacktype", "maxlength", "1", 1, "form-control"], [1, "col-md-12", "p-0"], [1, "mt-3", "btn-groups", "ms-0"], ["type", "button", 1, "btn", "btn-sm", "btn-success", 3, "disabled", "click"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#confirmation-modal", 1, "btn", "btn-sm", "btn-danger", 3, "disabled"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "btn-sm", "btn-secondary", 3, "click"], ["id", "confirmation-modal", "tabindex", "-1", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-primary", 3, "click"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary"], ["class", "col-lg-12", 4, "ngIf"], [1, "table-responsive", "bd-table-bx"], [1, "table", "table-bordered", "bd-table", "border-primary", "mb-0"], ["scope", "col"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"], ["scope", "row"], ["href", "javascript:void(0)"]],
  template: function AlternateCustomerMasterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 1)(4, "div", 2)(5, "div", 3)(6, "div", 4)(7, "h5", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Alternate Customer Master Entry");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "form", 6)(10, "div", 7)(11, "div", 1)(12, "label", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Group Code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AlternateCustomerMasterComponent_Template_a_click_16_listener() {
        return ctx.fetchDetails();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Fetch");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 7)(19, "div", 1)(20, "label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Region");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 7)(25, "div", 1)(26, "label", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Branch");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](29, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 7)(31, "div", 1)(32, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Area");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](35, "input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 7)(37, "div", 1)(38, "label", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Customer Code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](41, "input", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 7)(43, "div", 1)(44, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "Product Code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](47, "input", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "div", 7)(49, "div", 1)(50, "label", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "Mode");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](53, "input", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 7)(55, "div", 1)(56, "label", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "Pack Type");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](59, "input", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "div", 26)(61, "div", 1)(62, "div", 27)(63, "button", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AlternateCustomerMasterComponent_Template_button_click_63_listener() {
        return ctx.saveDetails();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64, "Save");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "button", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66, "Delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "button", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AlternateCustomerMasterComponent_Template_button_click_67_listener() {
        return ctx.downloadCSV();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68, "Download CSV");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "button", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AlternateCustomerMasterComponent_Template_button_click_69_listener() {
        return ctx.createForm();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70, "Reset");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "div", 32)(72, "div", 33)(73, "div", 34)(74, "div", 35)(75, "h5", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](76, "Confirm");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](77, "button", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "div", 38)(79, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](80, " Are you sure want to delete ?");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "div", 39)(82, "button", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AlternateCustomerMasterComponent_Template_button_click_82_listener() {
        return ctx.removeDetails();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](83, "Yes");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "button", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](85, "No");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](86, AlternateCustomerMasterComponent_div_86_Template, 29, 1, "div", 42);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.customerForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](54);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.customerForm.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.customerForm.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.fsmData.length);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName],
  styles: [".table-responsive.bd-table-bx[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    max-height: 40vh;\r\n    overflow: auto;\r\n}\r\n.btn-back[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    right: 0;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hbHRlcm5hdGUtY3VzdG9tZXItbWFzdGVyL2FsdGVybmF0ZS1jdXN0b21lci1tYXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7QUFDWiIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZS1yZXNwb25zaXZlLmJkLXRhYmxlLWJ4e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtaGVpZ2h0OiA0MHZoO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuLmJ0bi1iYWNrIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 7090:
/*!*********************************************************************!*\
  !*** ./src/app/components/awb-listingus/awb-listingus.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AwbListingusComponent": () => (/* binding */ AwbListingusComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 6908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_app_app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app.constants */ 2976);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_shared_services_stray_module_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/stray.module.service */ 52);
/* harmony import */ var bd_common_lib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bd-common-lib */ 8919);
/* harmony import */ var src_app_shared_services_csv_download_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/csv.download.service */ 529);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 4497);









class AwbListingusComponent {
  constructor(fb, strayModuleService, alert, csvService, title) {
    this.fb = fb;
    this.strayModuleService = strayModuleService;
    this.alert = alert;
    this.csvService = csvService;
    this.title = title;
    this.templateError = '';
    this.mctypecheck = '';
  }
  ngOnInit() {
    this.title.setTitle("AltInst AwbListing");
    this.createForm();
  }
  createForm() {
    this.form = this.fb.group({
      groupcode: [''],
      fromdate: [moment__WEBPACK_IMPORTED_MODULE_0__(new Date()).format('YYYY-MM-DD'), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      todate: [moment__WEBPACK_IMPORTED_MODULE_0__(new Date()).format('YYYY-MM-DD'), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      statcode: [''],
      mctype: [0],
      mcawbno: ['']
    });
  }
  onSubmit() {
    this.mctypecheck = "";
    this.templateError = "";
    if (this.form.get('mctype')?.value == 0) {
      this.mctypecheck = "RTO_COMPULSORY";
    }
    if (this.form.get('mctype')?.value == 1) {
      this.mctypecheck = "COD_to_PREPAID";
    }
    if (this.form.get('mctype')?.value == 2) {
      this.mctypecheck = "DBA";
    }
    let requestBody = this.form.getRawValue();
    requestBody.fromdate = moment__WEBPACK_IMPORTED_MODULE_0__(requestBody.fromdate).format('DD-MMM-YYYY');
    requestBody.todate = moment__WEBPACK_IMPORTED_MODULE_0__(requestBody.todate).format('DD-MMM-YYYY');
    if ((this.form.get('groupcode')?.value == null || this.form.get('groupcode')?.value == "") && this.form.get('mctype')?.value == 2) {
      this.strayModuleService.postDetails(requestBody, src_app_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.AWB_LISTING).subscribe(res => {
        if (res.result) {
          let data = [];
          if (res.result.c1) {
            data = [...data, ...res.result.c1];
          }
          if (res.result.c2) {
            data = [...data, ...res.result.c2];
          }
          if (res.result.c3) {
            data = [...data, ...res.result.c3];
          }
          if (data.length) {
            this.csvService.exportToCsv(this.mctypecheck + '.csv', data);
            this.alert.showSuccess('CSV Downloaded Successfully', 'toast-bottom-right');
          } else {
            this.alert.showInfo('No Data Found', 'toast-bottom-right');
          }
        }
      }, err => {
        console.log(err);
      });
    } else {
      if (this.form.get('groupcode')?.value == null || this.form.get('groupcode')?.value == "") {
        this.templateError = "Please enter Group Code";
      } else {
        this.strayModuleService.postDetails(requestBody, src_app_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.AWB_LISTING).subscribe(res => {
          if (res.result) {
            let data = [];
            if (res.result.c1) {
              data = [...data, ...res.result.c1];
            }
            if (res.result.c2) {
              data = [...data, ...res.result.c2];
            }
            if (res.result.c3) {
              data = [...data, ...res.result.c3];
            }
            if (data.length) {
              this.alert.showSuccess('CSV Downloaded Successfully', 'toast-bottom-right');
              this.csvService.exportToCsv('StrayModuleDetails.csv', res.result);
            } else {
              this.alert.showInfo('No Data Found', 'toast-bottom-right');
            }
          }
        }, err => {
          console.log(err);
        });
      }
    }
  }
}
AwbListingusComponent.ɵfac = function AwbListingusComponent_Factory(t) {
  return new (t || AwbListingusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_stray_module_service__WEBPACK_IMPORTED_MODULE_2__.StrayModuleService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](bd_common_lib__WEBPACK_IMPORTED_MODULE_6__.NotificationAlertService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_csv_download_service__WEBPACK_IMPORTED_MODULE_3__.CsvService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.Title));
};
AwbListingusComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: AwbListingusComponent,
  selectors: [["app-awb-listingus"]],
  decls: 65,
  vars: 3,
  consts: [[1, "section", "dashboard"], [1, "row"], [1, "col-lg-12"], [1, "card"], [1, "card-body"], [1, "card-title"], [2, "color", "red"], [1, "bd-form", 3, "formGroup"], [1, "col-md-6"], ["for", "alternateinstruction", 1, "col-sm-4", "col-form-label"], [1, "col-sm-8", "bd-inputfield"], ["name", "mctype", "formControlName", "mctype", 1, "form-select"], ["value", "0"], ["value", "1"], ["value", "2"], ["for", "Groupcode", 1, "col-sm-4", "col-form-label"], ["type", "text", "formControlName", "groupcode", 1, "form-control"], ["for", "FromDate", 1, "col-sm-4", "col-form-label"], [1, "col-sm-8", "bd-inputfield", "mb-1"], ["type", "date", "formControlName", "fromdate", 1, "form-control"], ["for", "ToDate", 1, "col-sm-4", "col-form-label"], ["type", "date", "formControlName", "todate", 1, "form-control"], ["for", "status", 1, "col-sm-4", "col-form-label"], ["name", "statcode", "formControlName", "statcode", 1, "form-select"], ["value", ""], ["value", "074"], ["value", "000"], [1, "col-md-12", "p-0"], [1, "mt-3", "btn-groups", "ms-0"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", "btn-default", 3, "disabled", "click"]],
  template: function AwbListingusComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 1)(4, "div", 2)(5, "div", 3)(6, "div", 4)(7, "h5", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Alternate instruction awb listing report");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 6)(10, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "form", 7)(13, "div", 8)(14, "div", 1)(15, "label", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Alternate instruction type");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 10)(18, "select", 11)(19, "option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "RTO COMPULSORY ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "COD to PREPAID ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "DBA ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 8)(26, "div", 1)(27, "label", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "Group code ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](32, "input", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 8)(34, "div", 1)(35, "label", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "From Date ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](40, "input", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "div", 8)(42, "div", 1)(43, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44, "To Date ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](48, "input", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "div", 8)(50, "div", 1)(51, "label", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, "Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "div", 10)(54, "select", 23)(55, "option", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56, "----ALL---- ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "option", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58, "RTO-DONE ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "option", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60, "DELIVERED ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "div", 27)(62, "div", 28)(63, "button", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AwbListingusComponent_Template_button_click_63_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](64, "Generate Report");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.templateError);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](51);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.form.invalid);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6006:
/*!*****************************************************************!*\
  !*** ./src/app/components/capx-module/capx-module.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CAPXModuleComponent": () => (/* binding */ CAPXModuleComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_shared_services_stray_module_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/stray.module.service */ 52);
/* harmony import */ var bd_common_lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bd-common-lib */ 8919);
/* harmony import */ var src_app_shared_services_csv_download_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/csv.download.service */ 529);
/* harmony import */ var src_app_shared_services_capx_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/capx.service */ 6113);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);








function CAPXModuleComponent_option_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const type_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r0.drpReportType[i_r9].CODE_VAL);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", type_r8.DESC_VAL, " ");
  }
}
function CAPXModuleComponent_option_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const type_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r1.drpProductType[i_r11].CODE_VAL);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", type_r10.DESC_VAL, " ");
  }
}
function CAPXModuleComponent_option_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const type_r12 = ctx.$implicit;
    const i_r13 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r2.drpIBOBFlg[i_r13].CODE_VAL);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", type_r12.DESC_VAL, " ");
  }
}
function CAPXModuleComponent_option_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const type_r14 = ctx.$implicit;
    const i_r15 = ctx.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r4.drpLocationType[i_r15].CODE_VAL);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", type_r14.DESC_VAL, " ");
  }
}
function CAPXModuleComponent_div_55_option_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const type_r17 = ctx.$implicit;
    const i_r18 = ctx.index;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r16.drpLocationRegion[i_r18].CODE_VAL);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", type_r17.DESC_VAL, " ");
  }
}
function CAPXModuleComponent_div_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 31)(1, "div", 1)(2, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Regions");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 9)(5, "select", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, CAPXModuleComponent_div_55_option_6_Template, 2, 2, "option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r5.drpLocationRegion);
  }
}
function CAPXModuleComponent_div_56_option_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const type_r22 = ctx.$implicit;
    const i_r23 = ctx.index;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r20.drpLocationForRegionHidden[i_r23].CREGION);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", type_r22.CREGION, " ");
  }
}
function CAPXModuleComponent_div_56_option_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const type_r24 = ctx.$implicit;
    const i_r25 = ctx.index;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r21.drpLocationHidden[i_r25].CODE_VAL);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", type_r24.DESC_VAL, " ");
  }
}
function CAPXModuleComponent_div_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7)(1, "div", 1)(2, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Location For Region :");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 9)(5, "select", 34, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function CAPXModuleComponent_div_56_Template_select_change_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r27);
      const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](6);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r26.getSelectedLocDrp(_r19.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, CAPXModuleComponent_div_56_option_7_Template, 2, 2, "option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 1)(9, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Location");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 9)(12, "select", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, CAPXModuleComponent_div_56_option_13_Template, 2, 2, "option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r6.drpLocationForRegionHidden);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r6.drpLocationHidden);
  }
}
function CAPXModuleComponent_div_57_option_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const type_r31 = ctx.$implicit;
    const i_r32 = ctx.index;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r29.drpAreaForRegionHidden[i_r32].CREGION);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", type_r31.CREGION, " ");
  }
}
function CAPXModuleComponent_div_57_option_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const type_r33 = ctx.$implicit;
    const i_r34 = ctx.index;
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r30.drpAreaHidden[i_r34].CODE_VAL);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", type_r33.DESC_VAL, " ");
  }
}
function CAPXModuleComponent_div_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 36)(1, "div", 1)(2, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Area For Region :");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 9)(5, "select", 37, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function CAPXModuleComponent_div_57_Template_select_change_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r36);
      const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](6);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r35.getSelectedAreaDrp(_r28.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, CAPXModuleComponent_div_57_option_7_Template, 2, 2, "option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 1)(9, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Area :");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 9)(12, "select", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, CAPXModuleComponent_div_57_option_13_Template, 2, 2, "option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r7.drpAreaForRegionHidden);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r7.drpAreaHidden);
  }
}
class CAPXModuleComponent {
  constructor(fb, strayModuleService, alert, csvService, CapxService) {
    this.fb = fb;
    this.strayModuleService = strayModuleService;
    this.alert = alert;
    this.csvService = csvService;
    this.CapxService = CapxService;
    this.drpReportType = [];
    this.drpProductType = [];
    this.drpLocationRegion = [];
    this.drpLocationType = [];
    this.drpIBOBFlg = [];
    this.drpLocationHidden = [];
    this.drpLocationForRegionHidden = [];
    this.drpLocationRegHidden = [];
    this.drpAreaHidden = [];
    this.drpAreaForRegionHidden = [];
    this.drpLocArry = ['CODE_VAL', 'DESC_VAL'];
    this.isLoc = false;
    this.isReg = true;
    this.isArea = false;
  }
  ngOnInit() {
    this.createForm();
    testhello();
    this.populateDrp();
  }
  populateDrp() {
    let requestData = {
      pcprod: '',
      pcloctype: '',
      pcloccd: '',
      pcloc: '',
      pcsubmit: ''
    };
    this.CapxService.GetCapaxDetails(requestData).subscribe(data => {
      //console.log(data);
      if (data.status.isSuccess == true) {
        //populate dropdown CUR_REPORT 
        if (data.result.CUR_REPORT != null) {
          for (let i = 0; i <= data.result.CUR_REPORT.length - 1; i++) {
            this.drpReportType.push(data.result.CUR_REPORT[i]);
          }
        }
        //populate Dropdown CUR_PROD
        if (data.result.CUR_PROD != null) {
          for (let i = 0; i <= data.result.CUR_PROD.length - 1; i++) {
            this.drpProductType.push(data.result.CUR_PROD[i]);
          }
        }
        //populate Dropdown CUR_IBOBFLG
        if (data.result.CUR_IBOBFLG != null) {
          for (let i = 0; i <= data.result.CUR_IBOBFLG.length - 1; i++) {
            this.drpIBOBFlg.push(data.result.CUR_IBOBFLG[i]);
          }
        }
        //populate Dropdown CUR_LOCTYPE
        if (data.result.CUR_LOCTYPE != null) {
          for (let i = 0; i <= data.result.CUR_LOCTYPE.length - 1; i++) {
            this.drpLocationType.push(data.result.CUR_LOCTYPE[i]);
          }
        }
        // //populate Dropdown CUR_LOC_REG
        // if (data.result.CUR_LOC_REG != null) {
        //   for (let i = 0; i <= data.result.CUR_LOC_REG.length - 1; i++) {
        //     this.drpLocationRegion.push(data.result.CUR_LOC_REG[i]);
        //   }
        // }
      }
    });

    this.CapxService.GetRegDetails(requestData).subscribe(data => {
      if (data.status.isSuccess == true) {
        //populate Dropdown CUR_LOC_REG
        if (data.result.CUR_LOC_REG != null) {
          for (let i = 0; i <= data.result.CUR_LOC_REG.length - 1; i++) {
            this.drpLocationRegion.push(data.result.CUR_LOC_REG[i]);
          }
        }
      }
    });
  }
  getSelectedDrp(selected) {
    this.drpLocationForRegionHidden.splice(0, this.drpLocationForRegionHidden.length);
    this.drpLocationHidden.splice(0, this.drpLocationHidden.length);
    this.drpAreaForRegionHidden.splice(0, this.drpAreaForRegionHidden.length);
    this.drpAreaHidden.splice(0, this.drpAreaHidden.length);
    if (selected == 'L') {
      this.isLoc = true;
      this.isReg = false;
      this.isArea = false;
      this.pcloccd = "SOUTH2";
      this.CapxService.GetLocDetails(this.pcloccd).subscribe(data => {
        this.locresponse = data;
        if (this.locresponse.status.isSuccess == true) {
          //populate Dropdown CUR_LOCCD_LOC
          if (this.locresponse.result.CUR_LOCCD_LOC != null) {
            for (let i = 0; i <= this.locresponse.result.CUR_LOCCD_LOC.length - 1; i++) {
              this.drpLocationForRegionHidden.push(this.locresponse.result.CUR_LOCCD_LOC[i]);
            }
            this.form.controls["locforReg"].patchValue("SOUTH2");
          }
          if (this.locresponse.result.CUR_LOC_LOC != null) {
            for (let i = 0; i <= this.locresponse.result.CUR_LOC_LOC.length - 1; i++) {
              this.drpLocationHidden.push(this.locresponse.result.CUR_LOC_LOC[i]);
            }
            this.form.controls["loc"].patchValue("*");
          }
        }
      });
    }
    if (selected == 'A') {
      this.isLoc = false;
      this.isReg = false;
      this.isArea = true;
      this.pcloccd = "SOUTH2";
      this.CapxService.GetAreaDetails(this.pcloccd).subscribe(data => {
        this.arearesponse = data;
        if (this.arearesponse.status.isSuccess == true) {
          //populate Dropdown CUR_LOCCD_LOC
          if (this.arearesponse.result.CUR_LOCCD_AREA != null) {
            for (let i = 0; i <= this.arearesponse.result.CUR_LOCCD_AREA.length - 1; i++) {
              this.drpAreaForRegionHidden.push(this.arearesponse.result.CUR_LOCCD_AREA[i]);
            }
            this.form.controls["AreaForRegion"].patchValue("SOUTH2");
          }
          if (this.arearesponse.result.CUR_LOC_AREA != null) {
            for (let i = 0; i <= this.arearesponse.result.CUR_LOC_AREA.length - 1; i++) {
              this.drpAreaHidden.push(this.arearesponse.result.CUR_LOC_AREA[i]);
            }
            this.form.controls["Area"].patchValue("*");
          }
        }
      });
    }
    if (selected == 'R') {
      this.isReg = true;
      this.isLoc = false;
      this.isArea = false;
    }
  }
  getSelectedLocDrp(selectedReg) {
    this.drpLocationHidden.splice(0, this.drpLocationHidden.length);
    this.isLoc = true;
    this.isReg = false;
    this.isArea = false;
    this.pcloccd = this.form.controls["locforReg"].value;
    this.CapxService.GetLocDetails(this.pcloccd).subscribe(data => {
      this.locresponse = data;
      if (this.locresponse.status.isSuccess == true) {
        //populate Dropdown CUR_LOCCD_LOC
        if (this.locresponse.result.CUR_LOC_LOC != null) {
          for (let i = 0; i <= this.locresponse.result.CUR_LOC_LOC.length - 1; i++) {
            this.drpLocationHidden.push(this.locresponse.result.CUR_LOC_LOC[i]);
          }
        }
      }
    });
  }
  getSelectedAreaDrp(selectedReg) {
    this.drpAreaHidden.splice(0, this.drpAreaHidden.length);
    this.isLoc = false;
    this.isReg = false;
    this.isArea = true;
    this.pcloccd = this.form.controls["AreaForRegion"].value;
    this.CapxService.GetAreaDetails(this.pcloccd).subscribe(data => {
      this.arearesponse = data;
      if (this.arearesponse.status.isSuccess == true) {
        //populate Dropdown CUR_LOCCD_LOC
        if (this.arearesponse.result.CUR_LOC_AREA != null) {
          for (let i = 0; i <= this.arearesponse.result.CUR_LOC_AREA.length - 1; i++) {
            this.drpAreaHidden.push(this.arearesponse.result.CUR_LOC_AREA[i]);
          }
        }
      }
    });
  }
  createForm() {
    this.form = this.fb.group({
      mothyrfrom: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      mothyrto: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      IbObFlg: 'A',
      pcloccd: [],
      pcprod: [[], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      preportType: ['L'],
      locType: 'R',
      locforReg: '',
      loc: '',
      AreaForRegion: '',
      Reg: '',
      Area: ''
      //pcloccd: [],
      //pcloc: [[]],
      //pcsubmit: 'Y'     
    });
  }

  setReplyTypeValue() {
    // set 'predefined' or 'opentype' based on selected value of the form
    this.pcloctype = "L";
  }
  onChange(event) {
    this.pcloctype = event.target.value;
  }
  // test()
  // {
  //   this.getProd=this.form.get('pcprod')?.value
  //   alert(this.getProd);
  // }
  onSubmit() {
    if (this.form.get('locType')?.value == "R") {
      this.urlloc = this.form.get('pcloccd')?.value;
    } else if (this.form.get('locType')?.value == "L") {
      this.urlloc = this.form.get('loc')?.value;
    } else if (this.form.get('locType')?.value == "A") {
      this.urlloc = this.form.get('Area')?.value;
    } else {
      this.urlloc = '';
    }
    var ALLSTR = "&MonthYrFrom=" + this.form.get('mothyrfrom')?.value + "&MonthYrTo=" + this.form.get('mothyrto')?.value + "&IbObFlg=" + this.form.get('IbObFlg')?.value + "&Loc=" + this.urlloc + "&Prod=" + this.form.get('pcprod')?.value + "&ReportType=" + this.form.get('locType')?.value;
    if (this.form.get('preportType')?.value == 'L') {
      //this.baseUrl ='http://actbirt.bluedart.com:8700/bluedart/newrequest/do_executereport.jsp?__executableName=/GenMIS/Capex/capxlocdtl.rptdesign' + ALLSTR  + '&userID=Administrator'; //old URL
      this.baseUrl = 'https://birt-bluedart.dhl.com/iportal/BDJSAPIGeneric.html?rptName=/GenMIS/Capex/capxlocdtl.rptdesign' + ALLSTR; //New URL
      window.open(this.baseUrl, '_blank');
    } else if (this.form.get('preportType')?.value == 'P') {
      this.baseUrl = 'https://birt-bluedart.dhl.com/iportal/BDJSAPIGeneric.html?rptName=/GenMIS/Capex/capxlocpindtl.rptdesign' + ALLSTR; //New URL
      window.open(this.baseUrl, '_blank');
    }
  }
}
CAPXModuleComponent.ɵfac = function CAPXModuleComponent_Factory(t) {
  return new (t || CAPXModuleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_stray_module_service__WEBPACK_IMPORTED_MODULE_0__.StrayModuleService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](bd_common_lib__WEBPACK_IMPORTED_MODULE_5__.NotificationAlertService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_csv_download_service__WEBPACK_IMPORTED_MODULE_1__.CsvService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_capx_service__WEBPACK_IMPORTED_MODULE_2__.CapxService));
};
CAPXModuleComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: CAPXModuleComponent,
  selectors: [["app-capx-module"]],
  decls: 62,
  vars: 9,
  consts: [[1, "section", "dashboard"], [1, "row"], [1, "col-lg-12"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "bd-form", 3, "formGroup"], [1, "col-md-6"], ["for", "reporttype", 1, "col-sm-4", "col-form-label"], [1, "col-sm-8", "bd-inputfield"], ["formControlName", "preportType", "tabindex", "2", 1, "form-select"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "producttype", 1, "col-sm-4", "col-form-label"], [1, "col-sm-8", "bd-inputfield", "mb-1"], ["multiple", "multiple", "formControlName", "pcprod", "tabindex", "2", 1, "form-select"], ["for", "mothyrfrom", 1, "col-sm-4", "col-form-label"], ["type", "text", "formControlName", "mothyrfrom", "placeholder", "mmyyyy eg: 122023", 1, "form-control"], ["for", "mothyrto", 1, "col-sm-4", "col-form-label"], ["type", "text", "formControlName", "mothyrto", "placeholder", "mmyyyy eg: 122023", 1, "form-control"], ["for", "ibobtransit", 1, "col-sm-4", "col-form-label"], ["formControlName", "IbObFlg", "tabindex", "2", 1, "form-select"], ["for", "location Type", 1, "col-sm-4", "col-form-label"], ["formControlName", "locType", "tabindex", "2", 1, "form-select", 3, "change"], ["selectedVal", ""], ["class", "col-md-6", "id", "divBox", 4, "ngIf"], ["class", "col-md-6", 4, "ngIf"], ["class", "col-md-6", "id", "AreaDiv", 4, "ngIf"], [1, "col-md-12", "p-0"], [1, "mt-3", "btn-groups", "ms-0"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", "btn-default", 3, "disabled", "click"], [3, "value"], ["id", "divBox", 1, "col-md-6"], ["for", "regions", 1, "col-sm-4", "col-form-label"], ["multiple", "multiple", "formControlName", "pcloccd", "tabindex", "2", 1, "form-select"], ["formControlName", "locforReg", "tabindex", "2", 1, "form-select", 3, "change"], ["multiple", "multiple", "formControlName", "loc", "tabindex", "2", 1, "form-select"], ["id", "AreaDiv", 1, "col-md-6"], ["formControlName", "AreaForRegion", "tabindex", "2", 1, "form-select", 3, "change"], ["multiple", "multiple", "formControlName", "Area", "tabindex", "2", 1, "form-select"]],
  template: function CAPXModuleComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "html")(1, "title");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Capx-module");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "body")(4, "section", 0)(5, "div", 1)(6, "div", 2)(7, "div", 1)(8, "div", 2)(9, "div", 3)(10, "div", 4)(11, "h5", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Capx-module");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "form", 6)(14, "div", 7)(15, "div", 1)(16, "label", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Report Type");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 9)(19, "select", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, CAPXModuleComponent_option_20_Template, 2, 2, "option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 7)(22, "div", 1)(23, "label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Product Type");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 13)(26, "select", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, CAPXModuleComponent_option_27_Template, 2, 2, "option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 7)(29, "div", 1)(30, "label", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Month-Yr : From");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](33, "input", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 7)(35, "div", 1)(36, "label", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "Month-Yr : To");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](39, "input", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 7)(41, "div", 1)(42, "label", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "I/B,O/B,Transit");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 9)(45, "select", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](46, CAPXModuleComponent_option_46_Template, 2, 2, "option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 7)(48, "div", 1)(49, "label", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "Location Type");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 9)(52, "select", 22, 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function CAPXModuleComponent_Template_select_change_52_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r37);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](53);
        return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.getSelectedDrp(_r3.value));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](54, CAPXModuleComponent_option_54_Template, 2, 2, "option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](55, CAPXModuleComponent_div_55_Template, 7, 1, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](56, CAPXModuleComponent_div_56_Template, 14, 2, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](57, CAPXModuleComponent_div_57_Template, 14, 2, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 27)(59, "div", 28)(60, "button", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CAPXModuleComponent_Template_button_click_60_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "Get Report");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.drpReportType);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.drpProductType);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.drpIBOBFlg);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.drpLocationType);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isReg == true);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoc == true);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isArea == true);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.form.valid);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectMultipleControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8250:
/*!***********************************************************************************!*\
  !*** ./src/app/components/customer-group-enrty/customer-group-enrty.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerGroupEnrtyComponent": () => (/* binding */ CustomerGroupEnrtyComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.constants */ 2976);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_shared_services_stray_module_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/stray.module.service */ 52);
/* harmony import */ var bd_common_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bd-common-lib */ 8919);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 4497);







class CustomerGroupEnrtyComponent {
  constructor(fb, strayModuleService, alert, title) {
    this.fb = fb;
    this.strayModuleService = strayModuleService;
    this.alert = alert;
    this.title = title;
  }
  ngOnInit() {
    this.title.setTitle('Notification');
    this.createForm();
  }
  createForm() {
    this.notifcationForm = this.fb.group({
      mcemplcode: ['00007'],
      mcgroupname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]]
    });
  }
  onSubmit() {
    let requestBody = this.notifcationForm.getRawValue();
    this.strayModuleService.postDetails(requestBody, src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.NOTIFICATION_ENTRY).subscribe(res => {
      if (res.result) {
        this.alert.showSuccess('Data Saved Successfully', 'toast-bottom-right');
      }
    }, err => {
      this.alert.showError('Error occured try again!!', 'toast-bottom-right');
    });
  }
}
CustomerGroupEnrtyComponent.ɵfac = function CustomerGroupEnrtyComponent_Factory(t) {
  return new (t || CustomerGroupEnrtyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_stray_module_service__WEBPACK_IMPORTED_MODULE_1__.StrayModuleService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](bd_common_lib__WEBPACK_IMPORTED_MODULE_4__.NotificationAlertService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.Title));
};
CustomerGroupEnrtyComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: CustomerGroupEnrtyComponent,
  selectors: [["app-customer-group-enrty"]],
  decls: 34,
  vars: 2,
  consts: [[1, "header-nav", "ms-auto"], [1, "d-flex", "bd-topmenu", "align-items-center"], [1, "nav-item", "topmenu-li", "pe-3", "ps-3"], ["href", "/customer-master", 1, "nav-link", "nav-topmenu", "d-flex", "cursor-pointer"], [1, "BD-top-span"], ["href", "/customer-group-enrty", 1, "nav-link", "nav-topmenu", "d-flex", "cursor-pointer"], [1, "section", "dashboard"], [1, "row"], [1, "col-lg-12"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "bd-form", 3, "formGroup"], [1, "col-md-6"], ["for", "mcgroupname", 1, "col-sm-4", "col-form-label"], [2, "color", "red"], [1, "col-sm-8", "bd-inputfield"], ["type", "text", "formControlName", "mcgroupname", 1, "form-control"], [1, "col-md-12", "p-0"], [1, "mt-3", "btn-groups"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", 3, "disabled", "click"]],
  template: function CustomerGroupEnrtyComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nav", 0)(1, "ul", 1)(2, "li", 2)(3, "a", 3)(4, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Customer Master");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "li", 2)(7, "a", 5)(8, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Customer Group Entry");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "section", 6)(11, "div", 7)(12, "div", 8)(13, "div", 7)(14, "div", 8)(15, "div", 9)(16, "div", 10)(17, "h5", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Notification Group Master Entry");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "form", 12)(20, "div", 13)(21, "div", 7)(22, "label", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Group Name ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "span", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 18)(29, "div", 7)(30, "div", 18)(31, "div", 19)(32, "button", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CustomerGroupEnrtyComponent_Template_button_click_32_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Submit");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.notifcationForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.notifcationForm.invalid);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 352:
/*!*************************************************************************!*\
  !*** ./src/app/components/customer-master/customer-master.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerMasterComponent": () => (/* binding */ CustomerMasterComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.constants */ 2976);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_shared_services_notification_module_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/notification.module.service */ 1771);
/* harmony import */ var src_app_shared_services_csv_download_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/csv.download.service */ 529);
/* harmony import */ var bd_common_lib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bd-common-lib */ 8919);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);










function CustomerMasterComponent_option_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const prod_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", prod_r2.CSDNTYPE);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", prod_r2.CSDNDESC, " ");
  }
}
function CustomerMasterComponent_div_88_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CustomerMasterComponent_div_88_tr_18_Template_tr_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      const cus_r4 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r5.patchForm(cus_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "th", 46)(2, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const cus_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](cus_r4.CAREA);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](cus_r4.CCUSTCODE);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](cus_r4.CTOEMAILID);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](cus_r4.CCCEMAILID);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](cus_r4.CGROUPCODE);
  }
}
function CustomerMasterComponent_div_88_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8)(1, "div", 9)(2, "div", 10)(3, "div", 41)(4, "table", 42)(5, "thead")(6, "tr")(7, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Area");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Customer");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Email To");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Email cc");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Group Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, CustomerMasterComponent_div_88_tr_18_Template, 12, 5, "tr", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.fsmData);
  }
}
class CustomerMasterComponent {
  constructor(fb, notificationModuleService, csvService, crypto, alert, title) {
    this.fb = fb;
    this.notificationModuleService = notificationModuleService;
    this.csvService = csvService;
    this.crypto = crypto;
    this.alert = alert;
    this.title = title;
    this.customerData = [];
    this.fsmData = [];
    this.productList = [];
    this.templateError = '';
    this.templateDone = '';
  }
  ngOnInit() {
    this.title.setTitle('Notification');
    this.createForm();
    //this.getNotiDetails();
  }

  createForm() {
    this.customerForm = this.fb.group({
      mctype: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      Area: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      Custcode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      Mailto: [''],
      Mailcc: [''],
      pcMobileNo: [''],
      mcpart1: [''],
      mcpart2: ['']
    });
    this.fsmData = [];
  }
  downloadCSV() {
    const payload = {
      "mcEmplCode": "",
      "mcarea": "",
      "mccustcode": "",
      "mcnotitype": "",
      "mctoemailid": "",
      "mcccemailid": "",
      "mAdd": "",
      "mCPART1": "",
      "mCPART2": "",
      "mMobileNo": "",
      "mcgroupcode": ""
    };
    this.notificationModuleService.postDetails(payload, src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.NOTIFICATION_MASTER_ENTRY).subscribe(res => {
      if (res.result) {
        this.alert.showSuccess('CSV Downloaded successfully', 'toast-bottom-right');
        this.csvService.exportToCsv('ALTERNATE_CUSTOMER_MASTER_ENTRY.csv', res.result.p_cursor);
      }
    }, err => {
      this.alert.showError('Error occured try again !!', 'toast-bottom-right');
    });
  }
  patchForm(cus) {
    this.customerForm.patchValue(cus);
    this.customerForm.patchValue({
      Custcode: cus.CCUSTCODE,
      Mailto: cus.CTOEMAILID,
      Mailcc: cus.CCCEMAILID
    });
    this.customerForm.patchValue(cus);
    this.customerData = [];
  }
  getNotiDetails() {
    {
      let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpParams();
      queryParams = queryParams.append('pprodvar', 'test');
      this.notificationModuleService.GetNotificationDetails(queryParams).subscribe(res => {
        if (res.result) {
          this.productList = res.result.p_cursor;
        }
      });
    }
  }
  fetchDetails() {
    this.templateError = '';
    if (this.customerForm.value.Custcode) {
      const payload = {
        "mcEmplCode": "",
        "mcarea": this.customerForm.value.Area,
        "mccustcode": this.customerForm.value.Custcode,
        "mcnotitype": this.customerForm.value.mctype,
        "mctoemailid": "S1",
        "mcccemailid": "",
        "mcAdd": "fetch",
        "mcPART1": "",
        "mcPART2": "",
        "mcMobileNo": "",
        "mcgroupcode": ""
      };
      this.templateError = '';
      this.notificationModuleService.postDetails(payload, src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.NOTIFICATION_MASTER_ENTRY).subscribe(res => {
        if (res.result.mvalidFlag == 'Y') {
          this.fsmData = res.result.p_cursor;
        } else {
          this.templateError = res.result.cerrmsg;
        }
      }, err => {
        this.alert.showError('Error occured try again !!', 'toast-bottom-right');
      });
    }
  }
  saveDetails() {
    this.templateError = '';
    this.templateDone = '';
    const payload = {
      "mcEmplCode": this.crypto.decryptionAES(sessionStorage.getItem('empCode')),
      "mcarea": this.customerForm.value.Area,
      "mccustcode": this.customerForm.value.Custcode,
      "mcnotitype": this.customerForm.value.mctype,
      "mctoemailid": this.customerForm.value.Mailto,
      "mcccemailid": this.customerForm.value.Mailcc,
      "mcAdd": "SUBMIT",
      "mcPART1": this.customerForm.value.mcpart1,
      "mcPART2": this.customerForm.value.mcpart2,
      "mcMobileNo": this.customerForm.value.pcMobileNo,
      "mcgroupcode": ""
    };
    this.notificationModuleService.postDetails(payload, src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.NOTIFICATION_MASTER_ENTRY).subscribe(res => {
      if (res.result.cvalidflag == "Y") {
        this.alert.showSuccess('Data Saved Succesfully', 'toast-bottom-right');
        this.createForm();
        this.templateDone = res.result.cerrmsg;
      } else {
        this.templateError = res.result.cerrmsg;
      }
    }, err => {
      this.alert.showError('Error occured try again !!', 'toast-bottom-right');
    });
  }
}
CustomerMasterComponent.ɵfac = function CustomerMasterComponent_Factory(t) {
  return new (t || CustomerMasterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_notification_module_service__WEBPACK_IMPORTED_MODULE_1__.NotificationModuleService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_csv_download_service__WEBPACK_IMPORTED_MODULE_2__.CsvService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](bd_common_lib__WEBPACK_IMPORTED_MODULE_6__.AESEncryptDecryptService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](bd_common_lib__WEBPACK_IMPORTED_MODULE_6__.NotificationAlertService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.Title));
};
CustomerMasterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: CustomerMasterComponent,
  selectors: [["app-customer-master"]],
  decls: 89,
  vars: 6,
  consts: [[1, "header-nav", "ms-auto"], [1, "d-flex", "bd-topmenu", "align-items-center"], [1, "nav-item", "topmenu-li", "pe-3", "ps-3"], ["href", "/customer-master", 1, "nav-link", "nav-topmenu", "d-flex", "cursor-pointer"], [1, "BD-top-span"], ["href", "/customer-group-enrty", 1, "nav-link", "nav-topmenu", "d-flex", "cursor-pointer"], [1, "section", "dashboard"], [1, "row"], [1, "col-lg-12"], [1, "card"], [1, "card-body"], [1, "card-title"], [2, "color", "red"], [2, "color", "green"], [1, "bd-form", 3, "formGroup"], [1, "col-md-6"], ["for", "pccompgrp", 1, "col-sm-4", "col-form-label"], [1, "col-sm-8", "bd-inputfield"], ["name", "mctype", "formControlName", "mctype", 1, "form-select"], ["selected", "", "disabled", "", 3, "ngValue"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "Area", 1, "col-sm-4", "col-form-label"], ["type", "text", "formControlName", "Area", "maxlength", "6", 1, "form-control"], ["for", "Custcode", 1, "col-sm-4", "col-form-label"], ["type", "text", "formControlName", "Custcode", "maxlength", "6", 1, "form-control"], ["href", "javascript:void(0)", 1, "reset-btn", 3, "click"], ["for", "pcbranch", 1, "col-sm-4", "col-form-label"], [1, "col-sm-8", "bd-inputfield", "mb-1"], ["type", "text", "formControlName", "Mailto", 1, "form-control"], ["type", "text", "formControlName", "Mailcc", 1, "form-control"], ["for", "pcMobileNo", 1, "col-sm-4", "col-form-label"], ["type", "text", "formControlName", "pcMobileNo", 1, "form-control"], ["for", "customercode", 1, "col-sm-4", "col-form-label"], ["name", "mcpart1", "formControlName", "mcpart1", 1, "form-select"], ["value", "N"], ["name", "mcpart2", "formControlName", "mcpart2", 1, "form-select"], [1, "col-md-12", "p-0"], [1, "mt-3", "btn-groups", "ms-0"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", 3, "click"], ["class", "col-lg-12", 4, "ngIf"], [3, "value"], [1, "table-responsive", "bd-table-bx"], [1, "table", "table-bordered", "bd-table", "border-primary", "mb-0"], ["scope", "col"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"], ["scope", "row"], ["href", "javascript:void(0)"]],
  template: function CustomerMasterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nav", 0)(1, "ul", 1)(2, "li", 2)(3, "a", 3)(4, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Customer Master");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "li", 2)(7, "a", 5)(8, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Customer Group Entry");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "section", 6)(11, "div", 7)(12, "div", 8)(13, "div", 7)(14, "div", 8)(15, "div", 9)(16, "div", 10)(17, "h5", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Customer Master");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 12)(20, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 13)(23, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "form", 14)(26, "div", 15)(27, "div", 7)(28, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Notification Type");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 17)(31, "select", 18)(32, "option", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Select Notification");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, CustomerMasterComponent_option_34_Template, 2, 2, "option", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 15)(36, "div", 7)(37, "label", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "Area");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](40, "input", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 15)(42, "div", 7)(43, "label", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "Custcode");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](46, "input", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "a", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CustomerMasterComponent_Template_a_click_47_listener() {
        return ctx.fetchDetails();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "Fetch");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 15)(50, "div", 7)(51, "label", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "Mail To");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](54, "textarea", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 15)(56, "div", 7)(57, "label", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, "Mail CC");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](60, "textarea", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "div", 15)(62, "div", 7)(63, "label", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64, "Mobile No");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](66, "input", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "div", 15)(68, "div", 7)(69, "label", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70, "Part1");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "div", 17)(72, "select", 33)(73, "option", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74, "N");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "div", 15)(76, "div", 7)(77, "label", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78, "Part2");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "div", 17)(80, "select", 35)(81, "option", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](82, "N");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "div", 36)(84, "div", 7)(85, "div", 37)(86, "button", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CustomerMasterComponent_Template_button_click_86_listener() {
        return ctx.saveDetails();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](87, "Submit");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](88, CustomerMasterComponent_div_88_Template, 19, 1, "div", 39);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.templateError);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.templateDone);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.customerForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngValue", null);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.productList);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](54);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.fsmData.length);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName],
  styles: [".table-responsive.bd-table-bx[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    max-height: 40vh;\r\n    overflow: auto;\r\n}\r\n.btn-back[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    right: 0;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jdXN0b21lci1tYXN0ZXIvY3VzdG9tZXItbWFzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0FBQ1oiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUtcmVzcG9uc2l2ZS5iZC10YWJsZS1ieHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LWhlaWdodDogNDB2aDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcbi5idG4tYmFjayB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 3328:
/*!*******************************************************************!*\
  !*** ./src/app/components/download-csv/download-csv.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DownloadCSVComponent": () => (/* binding */ DownloadCSVComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 6908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_app_app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app.constants */ 2976);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_shared_services_stray_module_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/stray.module.service */ 52);
/* harmony import */ var src_app_shared_services_csv_download_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/csv.download.service */ 529);
/* harmony import */ var bd_common_lib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bd-common-lib */ 8919);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);









class DownloadCSVComponent {
  constructor(fb, strayModuleService, csvService, alert, crypto) {
    this.fb = fb;
    this.strayModuleService = strayModuleService;
    this.csvService = csvService;
    this.alert = alert;
    this.crypto = crypto;
    this.months = [undefined, 'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    this.empCode = '';
    this.empLocArea = '';
    this.downloadList = [];
  }
  ngOnInit() {
    this.empCode = this.crypto.decryptionAES(sessionStorage.getItem('empCode'));
    this.empLocArea = this.crypto.decryptionAES(sessionStorage.getItem('empLocArea'));
    this.createForm();
    //console.log(Math.floor(Math.random()*500000000000));
  }

  createForm() {
    this.downloadcvcForm = this.fb.group({
      mregion: ['ALL'],
      mcfromdate: [moment__WEBPACK_IMPORTED_MODULE_0__(new Date()).format('DD-MM-YYYY')],
      mctodate: [moment__WEBPACK_IMPORTED_MODULE_0__(new Date()).format('DD-MM-YYYY')],
      mcstrayloc: [this.empLocArea],
      mcvehicleno: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(30)]],
      mcvehicleorigin: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(3)]],
      mcroute: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(10)]],
      mcstatus: ['O'],
      mcommodity: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(25)]]
    });
  }
  onSubmit() {
    let fromdtMonth = this.months[Number(this.downloadcvcForm.controls['mcfromdate'].value.trim().split("-")[1])];
    let fromdtDate = this.downloadcvcForm.controls['mcfromdate'].value.split("-")[0] + '-' + fromdtMonth + '-' + this.downloadcvcForm.controls['mcfromdate'].value.split("-")[2];
    let todtMonth = this.months[Number(this.downloadcvcForm.controls['mctodate'].value.trim().split("-")[1])];
    let todtDate = this.downloadcvcForm.controls['mctodate'].value.split("-")[0] + '-' + todtMonth + '-' + this.downloadcvcForm.controls['mctodate'].value.split("-")[2];
    let requestBody = this.downloadcvcForm.getRawValue();
    requestBody.mcfromdate = fromdtDate;
    requestBody.mctodate = todtDate;
    requestBody.mcpackdesc = null;
    requestBody.mcremarks = null;
    requestBody.mcremarks = null;
    //console.log(requestBody);
    this.strayModuleService.postDetails(requestBody, src_app_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.STRAY_CSV_DOWNLOAD).subscribe(res => {
      //console.log(res);
      let no = res.result.pcursor.length - 1;
      let selectItem1 = [];
      if (res.result.pcursor.length > 0) {
        for (let i = 0; i < res.result.pcursor.length; i++) {
          let selectItem = {};
          selectItem['Stray No'] = res.result.pcursor[i].CSTRAYNO;
          selectItem['Stray Date'] = moment__WEBPACK_IMPORTED_MODULE_0__(res.result.pcursor[i].DSTRAYDATE).format('DD-MMM-YY');
          selectItem['Stray Loc'] = res.result.pcursor[i].CSTRAYLOC;
          selectItem.EmpCode = res.result.pcursor[i].CUPDEMPLCODE;
          selectItem.EmpName = res.result.pcursor[i].CEMPLNAME;
          selectItem.PackDesc = res.result.pcursor[i].CPACKDESC;
          selectItem.Awbno = res.result.pcursor[i].CAWBNO;
          selectItem.Remarks = res.result.pcursor[i].CREMARKS;
          selectItem.Status = res.result.pcursor[i].CSTATUS;
          selectItem.Vehicleno = res.result.pcursor[i].CVEHICLENO;
          selectItem['Vehicle Origin'] = res.result.pcursor[i].CVEHICLEORIGIN;
          selectItem.Route = res.result.pcursor[i].CROUTE;
          selectItem.Commodity = res.result.pcursor[i].COMMODITY;
          selectItem['Update Date'] = res.result.pcursor[i].DUPDATEDT === null ? '' : moment__WEBPACK_IMPORTED_MODULE_0__(res.result.pcursor[i].DUPDATEDT).format('DD/MMM/YYYY HH:mm');
          selectItem['Update Emp'] = res.result.pcursor[i].CUPDEMPLCODE;
          this.downloadList?.push(selectItem);
        }
        //console.log(this.downloadList);
        this.csvService.exportToCsv('STRAY_DOWNLOAD.csv', this.downloadList);
        this.alert.showSuccess('CSV Downloaded Successfully', 'toast-bottom-right');
      } else {
        this.alert.showSuccess('No records found!', 'toast-bottom-right');
      }
    }, err => {
      console.log(err);
    });
  }
}
DownloadCSVComponent.ɵfac = function DownloadCSVComponent_Factory(t) {
  return new (t || DownloadCSVComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_stray_module_service__WEBPACK_IMPORTED_MODULE_2__.StrayModuleService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_csv_download_service__WEBPACK_IMPORTED_MODULE_3__.CsvService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](bd_common_lib__WEBPACK_IMPORTED_MODULE_6__.NotificationAlertService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](bd_common_lib__WEBPACK_IMPORTED_MODULE_6__.AESEncryptDecryptService));
};
DownloadCSVComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: DownloadCSVComponent,
  selectors: [["app-download-csv"]],
  decls: 90,
  vars: 2,
  consts: [[1, "section", "dashboard"], [1, "row"], [1, "col-lg-12"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "bd-form", 3, "formGroup"], [1, "col-md-6"], ["for", "mcfromdate", 1, "col-sm-4", "col-form-label"], [1, "col-sm-8", "bd-inputfield", "mb-1"], ["type", "text", "formControlName", "mcfromdate", "ngbDatepicker", "", "placeholder", "dd-mm-yyyy", 1, "form-control", 3, "click"], ["mcfromdate", "ngbDatepicker"], ["for", "mctodate", 1, "col-sm-4", "col-form-label"], ["type", "text", "formControlName", "mctodate", "ngbDatepicker", "", "placeholder", "dd-mm-yyyy", 1, "form-control", 3, "click"], ["mctodate", "ngbDatepicker"], ["for", "region", 1, "col-sm-4", "col-form-label"], [1, "col-sm-8", "bd-inputfield"], ["name", "mregion", "formControlName", "mregion", 1, "form-select"], ["value", "ALL"], ["value", "WEST1"], ["value", "WEST2"], ["value", "SOUTH1"], ["value", "SOUTH2"], ["value", "EAST"], ["value", "NORTH"], ["for", "strayloc", 1, "col-sm-4", "col-form-label"], ["type", "text", "formControlName", "mcstrayloc", "maxlength", "3", 1, "form-control"], ["for", "status", 1, "col-sm-4", "col-form-label"], ["name", "mcstatus", "formControlName", "mcstatus", 1, "form-select"], ["value", "C"], ["value", "O"], ["for", "vechileno", 1, "col-sm-4", "col-form-label"], ["type", "text", "formControlName", "mcvehicleno", "maxlength", "30", 1, "form-control"], ["for", "vechileorigin", 1, "col-sm-4", "col-form-label"], ["type", "text", "formControlName", "mcvehicleorigin", "maxlength", "3", 1, "form-control"], ["for", "route", 1, "col-sm-4", "col-form-label"], ["type", "text", "formControlName", "mcroute", "maxlength", "10", 1, "form-control"], ["for", "commodity", 1, "col-sm-4", "col-form-label"], ["type", "text", "formControlName", "mcommodity", "maxlength", "25", 1, "form-control"], [1, "col-md-12", "p-0"], [1, "mt-3", "btn-groups"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", 3, "disabled", "click"]],
  template: function DownloadCSVComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 1)(4, "div", 2)(5, "div", 3)(6, "div", 4)(7, "h5", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "down CSV");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "form", 6)(10, "div", 7)(11, "div", 1)(12, "label", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Stray Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 9)(15, "input", 10, 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DownloadCSVComponent_Template_input_click_15_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2);
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](16);
        return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](_r0.toggle());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 7)(18, "div", 1)(19, "label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "To");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 9)(22, "input", 13, 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DownloadCSVComponent_Template_input_click_22_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](23);
        return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](_r1.toggle());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 7)(25, "div", 1)(26, "label", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "Region");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 16)(29, "select", 17)(30, "option", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "ALL");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "option", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "WEST1");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "option", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "WEST2");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "option", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, "SOUTH1");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "option", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "SOUTH2");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "option", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, "EAST");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "option", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43, "NORTH");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "div", 7)(45, "div", 1)(46, "label", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47, " Stray Loc");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](49, "input", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "div", 7)(51, "div", 1)(52, "label", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](53, "Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "div", 16)(55, "select", 28)(56, "option", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](57, "Closed");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "option", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](59, "Open");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "div", 7)(61, "div", 1)(62, "label", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](63, "Vechile No");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](65, "input", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "div", 7)(67, "div", 1)(68, "label", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](69, "Vechile origin");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](71, "input", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "div", 7)(73, "div", 1)(74, "label", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](75, "Route");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](77, "input", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](78, "div", 7)(79, "div", 1)(80, "label", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](81, "Commodity");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](83, "input", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](84, "div", 39)(85, "div", 1)(86, "div", 39)(87, "div", 40)(88, "button", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DownloadCSVComponent_Template_button_click_88_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](89, "Submit");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.downloadcvcForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](79);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.downloadcvcForm.invalid);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbInputDatepicker],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

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
/* harmony import */ var bd_common_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bd-common-lib */ 8919);
/* harmony import */ var src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.constants */ 2976);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);





class HomeComponent {
  constructor(authService, activatedRoute, router, encrypt) {
    this.authService = authService;
    this.activatedRoute = activatedRoute;
    this.router = router;
    this.encrypt = encrypt;
    this.isUserLoggedIn = false;
    this.empCRRole = '';
    this.empRole = '';
    this.empCode = '';
    this.empLocArea = '';
    this.empName = '';
    this.empCLevel = '';
    this.CDCRRole = '';
    this.authToken = '';
    this.redirectUrl = '';
  }
  ngOnInit() {
    bd_common_lib__WEBPACK_IMPORTED_MODULE_1__.CommonGlobalVar.USER_UI = src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.USER_UI;
    this.activatedRoute.queryParams.subscribe(params => {
      this.empCRRole = params['ecr'];
      this.empRole = params['er'];
      this.empCode = params['ec'];
      this.empLocArea = params['el'];
      this.empName = params['en'];
      this.empCLevel = params['cl'];
      this.authToken = params['at'];
      this.CDCRRole = params['crrole'];
      this.redirectUrl = params['ru'];
    });
    if (src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.Environment !== 'Localhost') {
      //USE THIS FOR PRODUCTION & TEST
      this.setProdSession();
      this.router.navigateByUrl("/" + this.encrypt.decryptionAES(this.redirectUrl));
    } else {
      //USE THIS FOR DEVELOPMENT
      this.setDevSession();
    }
  }
  setProdSession() {
    //USE THIS FOR PRODUCTION
    if (this.empCode === undefined && sessionStorage.getItem("empCode") === null) {
      this.router.navigate(['/un-authorized-access']);
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
      if (this.CDCRRole !== undefined) {
        sessionStorage.setItem('CDCRRole', this.CDCRRole);
      }
      if (this.authToken !== undefined) {
        sessionStorage.setItem('authToken', this.authToken);
      }
      this.authService.setReload();
    }
  }
  setDevSession() {
    sessionStorage.setItem('empCode', this.encrypt.encryptionAES('114516'));
    sessionStorage.setItem('empCRRole', this.encrypt.encryptionAES('01050809A3A4A5A6A7A8A9B1B2B3'));
    sessionStorage.setItem('empRole', this.encrypt.encryptionAES('I'));
    sessionStorage.setItem('empLocArea', this.encrypt.encryptionAES('BOM'));
    sessionStorage.setItem('empName', this.encrypt.encryptionAES('JITENDRA DAMANIA'));
    sessionStorage.setItem('empCLevel', this.encrypt.encryptionAES('1'));
    sessionStorage.setItem('CDCRRole', this.encrypt.encryptionAES('01'));
    sessionStorage.setItem('ServiceCode', this.encrypt.encryptionAES(''));
    sessionStorage.setItem('authToken', '');
    // sessionStorage.setItem('empCode','W68006');
    // sessionStorage.setItem('empName','Rakesh Gohil');
    // sessionStorage.setItem('currentUser','W68006');
    // sessionStorage.setItem('empLocArea','HQC');
    // sessionStorage.setItem('empCRRole','01050809A3A4A5A6A7A8A9B1B2B3');
    // sessionStorage.setItem('CDCRRole', '01');
    // sessionStorage.setItem('ServiceCode', 'HQC');
    this.authService.setReload();
  }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) {
  return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](bd_common_lib__WEBPACK_IMPORTED_MODULE_1__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](bd_common_lib__WEBPACK_IMPORTED_MODULE_1__.AESEncryptDecryptService));
};
HomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: HomeComponent,
  selectors: [["app-home"]],
  decls: 0,
  vars: 0,
  template: function HomeComponent_Template(rf, ctx) {},
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4110:
/*!*****************************************************************!*\
  !*** ./src/app/components/mass-update/mass-update.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MassUpdateComponent": () => (/* binding */ MassUpdateComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.constants */ 2976);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_shared_services_stray_module_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/stray.module.service */ 52);
/* harmony import */ var bd_common_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bd-common-lib */ 8919);






class MassUpdateComponent {
  constructor(fb, strayModuleService, alert, crypto) {
    this.fb = fb;
    this.strayModuleService = strayModuleService;
    this.alert = alert;
    this.crypto = crypto;
    this.empCode = '';
    this.empLocArea = '';
  }
  ngOnInit() {
    this.empCode = this.crypto.decryptionAES(sessionStorage.getItem('empCode'));
    this.empLocArea = this.crypto.decryptionAES(sessionStorage.getItem('empLocArea'));
    this.createForm();
  }
  createForm() {
    this.massupdateForm = this.fb.group({
      mcstraynos: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
      mcstrayloc: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.maxLength(3)]],
      mcawbno: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.maxLength(11)]],
      mcstatus: ['O', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      mcremarks: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.maxLength(100)]]
    });
  }
  onSubmit() {
    let requestBody = this.massupdateForm.getRawValue();
    requestBody.mcTotal = null;
    requestBody.mcemplcode = this.empCode;
    requestBody.mcSubmit = '';
    this.strayModuleService.postDetails(requestBody, src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.STRAY_MASS_UPDATE).subscribe(res => {
      if (res.status.isSuccess) {
        this.alert.showSuccess('Data Saved Successfully', 'toast-bottom-right');
        this.massupdateForm.reset();
      }
    }, err => {
      console.log(err);
    });
  }
}
MassUpdateComponent.ɵfac = function MassUpdateComponent_Factory(t) {
  return new (t || MassUpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_stray_module_service__WEBPACK_IMPORTED_MODULE_1__.StrayModuleService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](bd_common_lib__WEBPACK_IMPORTED_MODULE_4__.NotificationAlertService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](bd_common_lib__WEBPACK_IMPORTED_MODULE_4__.AESEncryptDecryptService));
};
MassUpdateComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: MassUpdateComponent,
  selectors: [["app-mass-update"]],
  decls: 52,
  vars: 2,
  consts: [[1, "section", "dashboard"], [1, "row"], [1, "col-lg-12"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "bd-form", 3, "formGroup"], [1, "col-md-6"], ["for", "strayloc", 1, "col-sm-4", "col-form-label"], [2, "color", "red"], [1, "col-sm-8", "bd-inputfield"], ["type", "text", "formControlName", "mcstraynos", 1, "form-control"], ["type", "text", "formControlName", "mcstrayloc", "maxlength", "3", 1, "form-control"], ["for", "AwbNo", 1, "col-sm-4", "col-form-label"], ["type", "text", "formControlName", "mcawbno", "maxlength", "11", 1, "form-control"], ["for", "status", 1, "col-sm-4", "col-form-label"], ["name", "mcstatus", "formControlName", "mcstatus", 1, "form-select"], ["selected", "", "value", "C"], ["value", "O"], ["for", "mcremarks", 1, "col-sm-4", "col-form-label"], ["formControlName", "mcremarks", "maxlength", "100", 1, "form-control", 2, "height", "100px"], [1, "col-md-12", "p-0"], [1, "mt-3", "btn-groups"], ["type", "submit", 1, "btn", "btn-sm", "btn-primary", 3, "disabled", "click"]],
  template: function MassUpdateComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 1)(4, "div", 2)(5, "div", 3)(6, "div", 4)(7, "h5", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Stray Mass Update");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "form", 6)(10, "div", 7)(11, "div", 1)(12, "label", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Stray Nos (comma sperated) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 7)(19, "div", 1)(20, "label", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Stray Loc");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 7)(25, "div", 1)(26, "label", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Awb no");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](29, "input", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 7)(31, "div", 1)(32, "label", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 10)(35, "select", 16)(36, "option", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "Closed");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "option", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Open");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 7)(41, "div", 1)(42, "label", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "Remarks");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](45, "textarea", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 21)(47, "div", 1)(48, "div", 21)(49, "div", 22)(50, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MassUpdateComponent_Template_button_click_50_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "Submit");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.massupdateForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](41);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.massupdateForm.invalid);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4942:
/*!*********************************************************************!*\
  !*** ./src/app/components/mis-schedular/mis-schedular.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MISSchedularComponent": () => (/* binding */ MISSchedularComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 6908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_shared_services_stray_module_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/stray.module.service */ 52);
/* harmony import */ var bd_common_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bd-common-lib */ 8919);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);








function MISSchedularComponent_div_239_tr_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](19, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const cus_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](cus_r2.CREPORTNAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](5, 8, cus_r2.DSTARTDATE, "dd-MMM-yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](8, 11, cus_r2.DENDDATE, "dd-MMM-yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](cus_r2.CREGION);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](cus_r2.CAREA);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](cus_r2.CCUSTCODE);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](cus_r2.CGRPCODE);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](19, 14, cus_r2.DENTRYDATE, "dd-MMM-yyyy hh:mm:ss"));
  }
}
function MISSchedularComponent_div_239_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 119)(4, "table", 120)(5, "thead")(6, "tr")(7, "th", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Report Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "th", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Start Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "th", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "End Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "th", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Region");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "th", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Area");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "th", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Customer Code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "th", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Group Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "th", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Scheduled Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "th", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "File Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, MISSchedularComponent_div_239_tr_26_Template, 21, 17, "tr", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.data);
  }
}
class MISSchedularComponent {
  constructor(fb, strayModuleService, alert, crypto, title) {
    this.fb = fb;
    this.strayModuleService = strayModuleService;
    this.alert = alert;
    this.crypto = crypto;
    this.title = title;
    this.data = [];
  }
  ngOnInit() {
    this.title.setTitle("MIS Scheduler");
    this.createForm();
  }
  createForm() {
    this.schedularForm = this.fb.group({
      mcemplcode: [''],
      mreportid: ['000003'],
      mdatefrom: [moment__WEBPACK_IMPORTED_MODULE_0__(new Date()).format('YYYY-MM-DD'), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      mdateto: [moment__WEBPACK_IMPORTED_MODULE_0__(new Date()).format('YYYY-MM-DD'), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      mregion: [''],
      marea: [''],
      mcustomercode: [''],
      mgroupcode: [''],
      mtype: [''],
      mvalue: ['']
    });
  }
  onView() {
    //let requestBody = this.schedularForm.getRawValue();
    //requestBody.mSubmit = 'View';
    //requestBody.mdatefrom = moment(requestBody.mdatefrom).format('DD-MMM-YYYY');
    //requestBody.mdateto = moment(requestBody.mdateto).format('DD-MMM-YYYY');
    if (this.schedularForm.valid) {
      const payload = {
        "mreportid": this.schedularForm.value.mreportid,
        "mdatefrom": moment__WEBPACK_IMPORTED_MODULE_0__(this.schedularForm.value.mdatefrom).format('DD-MMM-YYYY'),
        "mdateto": moment__WEBPACK_IMPORTED_MODULE_0__(this.schedularForm.value.mdateto).format('DD-MMM-YYYY'),
        "mregion": this.schedularForm.value.mregion,
        "marea": "",
        "mcustomercode": "",
        "mgroupcode": "",
        "mtype": "",
        "mvalue": "",
        "msubmit": "DOWNLOAD"
      };
      console.log(payload);
      this.strayModuleService.postViewDetails(payload).subscribe(res => {
        if (res.result && res.result.p_cursor) {
          this.data = res.result.p_cursor;
        } else {
          this.alert.showInfo('No Data Found', 'toast-bottom-right');
        }
      }, err => {
        console.log(err);
      });
    }
  }
  onSchdeule() {
    console.log(this.schedularForm.value.mreportid);
    if (this.schedularForm.value.mreportid != "") {
      const payload = {
        "mcemplcode": this.crypto.decryptionAES(sessionStorage.getItem('empCode')),
        "mreportid": this.schedularForm.value.mreportid,
        "mdatefrom": moment__WEBPACK_IMPORTED_MODULE_0__(this.schedularForm.value.mdatefrom).format('DD-MMM-YYYY'),
        "mdateto": moment__WEBPACK_IMPORTED_MODULE_0__(this.schedularForm.value.mdateto).format('DD-MMM-YYYY'),
        "mregion": this.schedularForm.value.mregion,
        "marea": "",
        "mcustomercode": "",
        "mgroupcode": "",
        "mtype": "",
        "mvalue": "",
        "msubmit": "Schedule"
      };
      this.strayModuleService.postScheduleDetails(payload).subscribe(res => {
        if (res.result) {
          this.createForm();
          this.alert.showSuccess('Report Scheduled Sucessfully', 'toast-bottom-right');
        }
      }, err => {
        console.log(err);
      });
    } else {
      this.alert.showError('Please enter Report Type', 'toast-bottom-right');
    }
  }
}
MISSchedularComponent.ɵfac = function MISSchedularComponent_Factory(t) {
  return new (t || MISSchedularComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_stray_module_service__WEBPACK_IMPORTED_MODULE_1__.StrayModuleService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](bd_common_lib__WEBPACK_IMPORTED_MODULE_4__.NotificationAlertService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](bd_common_lib__WEBPACK_IMPORTED_MODULE_4__.AESEncryptDecryptService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.Title));
};
MISSchedularComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: MISSchedularComponent,
  selectors: [["app-mis-schedular"]],
  decls: 240,
  vars: 4,
  consts: [[1, "section", "dashboard"], [1, "row"], [1, "col-lg-12"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "bd-form", 3, "formGroup"], [1, "col-md-6"], ["for", "reporttype", 1, "col-sm-4", "col-form-label"], [1, "col-sm-8", "bd-inputfield"], ["name", "mReportid", "formControlName", "mreportid", "onchange", "data=[]", 1, "form-select"], ["value", "Empty"], ["value", "000003"], ["value", "000004"], ["value", "000005"], ["value", "000006"], ["value", "000008"], ["value", "000011"], ["value", "000015"], ["value", "000020"], ["value", "000024"], ["value", "000025"], ["value", "000026"], ["value", "000027"], ["value", "000029"], ["value", "000031"], ["value", "000032"], ["value", "000033"], ["value", "000034"], ["value", "000035"], ["value", "000036"], ["value", "000037"], ["value", "000038"], ["value", "000039"], ["value", "000041"], ["value", "000042"], ["value", "000043"], ["value", "000044"], ["value", "000045"], ["value", "000048"], ["value", "000070"], ["value", "000071"], ["value", "000072"], ["value", "000073"], ["value", "000074"], ["value", "000075"], ["value", "000076"], ["value", "000077"], ["value", "000078"], ["value", "000079"], ["value", "000080"], ["value", "000081"], ["value", "000082"], ["value", "000083"], ["value", "000084"], ["value", "000085"], ["value", "000086"], ["value", "000088"], ["value", "000089"], ["value", "000090"], ["value", "000091"], ["value", "000092"], ["value", "000093"], ["value", "000095"], ["value", "000096"], ["value", "000097"], ["value", "000098"], ["value", "000099"], ["value", "000101"], ["value", "000102"], ["value", "000103"], ["value", "000105"], ["value", "000107"], ["value", "000108"], ["value", "000109"], ["value", "000111"], ["value", "000112"], ["value", "000113"], ["value", "000114"], ["value", "000115"], ["value", "000116"], ["value", "000117"], ["value", "000118"], ["value", "000119"], ["value", "000120"], ["value", "000121"], ["value", "000122"], ["value", "000123"], ["value", "000125"], ["value", "000126"], ["value", "000127"], ["value", "000128"], ["value", "000129"], ["value", "000130"], ["value", "000131"], ["value", "000132"], ["value", "000133"], ["value", "000134"], ["for", "FromDate", 1, "col-sm-4", "col-form-label"], [2, "color", "red"], [1, "col-sm-8", "bd-inputfield", "mb-1"], ["type", "date", "formControlName", "mdatefrom", "placeholder", "dd-mm-yyyy", 1, "form-control"], ["for", "ToDate", 1, "col-sm-4", "col-form-label"], ["type", "date", "formControlName", "mdateto", "placeholder", "dd-mm-yyyy", 1, "form-control"], ["for", "region", 1, "col-sm-4", "col-form-label"], ["name", "mRegion", "formControlName", "mregion", 1, "form-select"], ["selected", "", "value", ""], ["value", "EAST"], ["value", "HO"], ["value", "NORTH"], ["value", "SOUTH1"], ["value", "SOUTH2"], ["value", "WEST1"], ["value", "WEST2"], [1, "col-md-12", "p-0"], [1, "mt-3", "btn-groups", "ms-0"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", "btn-default", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-sm", "btn-secondary", "btn-default", 3, "disabled", "click"], ["class", "col-lg-12", 4, "ngIf"], [1, "table-responsive", "bd-table-bx"], [1, "table", "table-bordered", "bd-table", "border-primary", "mb-0"], ["scope", "col"], [4, "ngFor", "ngForOf"]],
  template: function MISSchedularComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 1)(4, "div", 2)(5, "div", 3)(6, "div", 4)(7, "h5", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "ScheduleMIS Report");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "form", 6)(10, "div", 7)(11, "div", 1)(12, "label", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Report Type ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 9)(15, "select", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "COD Non-Delivery Reports ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "OSCODReport ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "OSCASHReport ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "OSFODReport ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "option", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "OSDEMURAGEReport ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "option", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "EBTDATA ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "option", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "EBTDescripencyReport ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "option", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "RtoReport ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "option", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "GST_CASH_WITHOUT_IRN ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "option", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "GST_DEMM ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "option", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "GST_FOD_WITHOUT_IRN ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "option", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "GST_FOD_RTO ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "option", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "CODJV_AWBDATA ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "option", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "STATUS_LOG_ANALYSIS_SUMMARY ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "option", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "CLOSURE_COD_AWB_REPORT ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "option", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "CLOSURE_FOD_AWB_REPORT ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "option", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "GST_CASH_WITH_IRN ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "option", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "MISSING_GST_DEMM ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "option", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "GST_FOD_WITH_IRN ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "option", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "MISSING_GST_FOD_RTO ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "option", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "GSL_NSL_REPORT ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "option", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "STATUS_DELAY_UPDATE ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "option", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "COD_JV_DIGIPAY ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "option", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "COD_ADJ_DATA ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "option", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "FOD_IB_AWB ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "option", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "COD_IB_AWB ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "option", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, "NETWORK_RUN_ENTRY ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "option", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, "NSL_DAILY_REPORT ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "option", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, "COLLJV_DR_CR_Entry_Report ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "option", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, "INBOUND_REPORTS ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "option", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, "OUTBOUND_REPORTS ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "option", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, "ESA_Client_Wise_Summary ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "option", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, "ESA_Statement_Summary ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "option", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84, "ESA_detail_report ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "option", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86, "FOV_CLIENT_REPORT ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "option", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, "FOV INS ARRANGEMENT SUMMARY ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "option", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](90, "FOV INS ARRANGEMENT DETAIL ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "option", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](92, "FOV Owner Risk Summary ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "option", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](94, "FOV Owner Risk Detail ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "option", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](96, "ESA_Retail_Report ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "option", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](98, "DOD_Shipment_Report ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "option", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](100, "Fod_Shipment_orgwise_detail ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "option", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](102, "Fod_Shipment_destwise_detail ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "option", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](104, "Nykaa_DATA ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "option", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](106, "OPSMBO ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "option", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](108, "NSL_EDD_TOPCUST_REPORT ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](109, "option", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](110, "FEEDER_RUN_REPORT ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "option", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](112, "channelBRC ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "option", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](114, "channelREG ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "option", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](116, "RTOALTINST ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "option", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](118, "IntlUndlv ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](119, "option", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](120, "SURFACE_RUN ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](121, "option", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](122, "AIRNETWORK_RUN ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](123, "option", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](124, "AIRCOLOADER_RUN ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](125, "option", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](126, "SPEEDTRUCK_RUN ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](127, "option", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](128, "AMAZON_PTOP ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](129, "option", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](130, "cmplts vs pcs ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](131, "option", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](132, "cmplt type mom ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](133, "option", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](134, "NPA_DATA_TP10 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](135, "option", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](136, "NPA_DATA_TP6 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](137, "option", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](138, "NPA_DATA_TP8 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](139, "option", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](140, "NPA_DATA_TP9 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](141, "option", 74);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](142, "Stat105 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](143, "option", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](144, "WDL_REWEIGH_SUMMARY ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](145, "option", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](146, "COD_COLL_AF_DEPOSITSHIP ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](147, "option", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](148, "ExotelAwb ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](149, "option", 78);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](150, "Automation_tool ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](151, "option", 79);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](152, "IntltoDHL ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](153, "option", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](154, "MPS_NOT_OR_PARTIALLY_LINKED ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](155, "option", 81);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](156, "WDL_INSCANNED_WT_NOT_CAPTURED ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](157, "option", 82);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](158, "SNAPDEAL_WDL_DATA ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](159, "option", 83);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](160, "CALLSID_HYD083532 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](161, "option", 84);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](162, "CUSTOMER_REVENUE_REPORT ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](163, "option", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](164, "HFILE_REPORT ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](165, "option", 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](166, "IntltoDHLpu ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](167, "option", 87);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](168, "NETWORK_RUN_REPORT ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](169, "option", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](170, "API_http_hits ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](171, "option", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](172, "DOD_Collection ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](173, "option", 90);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](174, "BD_COMMERCIAL ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](175, "option", 91);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](176, "PDA_DATA ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](177, "option", 92);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](178, "EV_Delivery ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](179, "option", 93);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](180, "TRN_TYPE_DATA ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](181, "option", 94);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](182, "DHL_RW ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](183, "option", 95);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](184, "DHL_111440 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](185, "option", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](186, "DHL_112125 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](187, "option", 97);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](188, "DHL_112136 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](189, "option", 97);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](190, "DHL_112840 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](191, "option", 97);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](192, "DHL_113050 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](193, "option", 97);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](194, "DHL_116480 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](195, "div", 7)(196, "div", 1)(197, "label", 98);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](198, "From Date ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](199, "span", 99);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](200, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](201, "div", 100);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](202, "input", 101);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](203, "div", 7)(204, "div", 1)(205, "label", 102);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](206, "To Date ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](207, "span", 99);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](208, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](209, "div", 100);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](210, "input", 103);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](211, "div", 7)(212, "div", 1)(213, "label", 104);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](214, "Region");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](215, "div", 9)(216, "select", 105)(217, "option", 106);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](218, "All Regions");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](219, "option", 107);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](220, "EAST");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](221, "option", 108);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](222, "HO");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](223, "option", 109);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](224, "NORTH");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](225, "option", 110);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](226, "SOUTH1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](227, "option", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](228, "SOUTH2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](229, "option", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](230, "WEST1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](231, "option", 113);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](232, "WEST2 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](233, "div", 114)(234, "div", 115)(235, "button", 116);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MISSchedularComponent_Template_button_click_235_listener() {
        return ctx.onSchdeule();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](236, "Schedule");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](237, "button", 117);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MISSchedularComponent_Template_button_click_237_listener() {
        return ctx.onView();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](238, "View");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](239, MISSchedularComponent_div_239_Template, 27, 1, "div", 118);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.schedularForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](226);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.schedularForm.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.schedularForm.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.data.length);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe],
  styles: [".table-responsive.bd-table-bx[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    max-height: 40vh;\r\n    overflow: auto;\r\n}\r\n.btn-back[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    right: 0;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9taXMtc2NoZWR1bGFyL21pcy1zY2hlZHVsYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7QUFDWiIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZS1yZXNwb25zaXZlLmJkLXRhYmxlLWJ4e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtaGVpZ2h0OiA0MHZoO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuLmJ0bi1iYWNrIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 994:
/*!*************************************************!*\
  !*** ./src/app/components/nav/nav.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavComponent": () => (/* binding */ NavComponent)
/* harmony export */ });
/* harmony import */ var src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.constants */ 2976);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



class NavComponent {
  ngOnInit() {
    if (src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.Environment === 'Dev') {}
  }
}
NavComponent.ɵfac = function NavComponent_Factory(t) {
  return new (t || NavComponent)();
};
NavComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: NavComponent,
  selectors: [["app-nav"]],
  decls: 44,
  vars: 0,
  consts: [["id", "sidebar", 1, "sidebar"], ["id", "sidebar-nav", 1, "sidebar-nav"], [1, "nav-item"], ["href", "/Alternate_Customer_master", 1, "nav-link"], [1, "bi", "bi-caret-right"], ["href", "/awb_listing", 1, "nav-link", "collapsed"], ["href", "/CAPX_Module", 1, "nav-link", "collapsed"], ["href", "/MIS_Schedular", 1, "nav-link", "collapsed"], ["href", "/Stray_module", 1, "nav-link", "collapsed"], ["data-bs-target", "#tables-nav", "data-bs-toggle", "collapse", "href", "javascript:void(0)", "aria-expanded", "false", 1, "nav-link", "collapsed"], [1, "bi", "bi-chevron-down", "ms-auto"], ["id", "tables-nav", "data-bs-parent", "#sidebar-nav", 1, "nav-content", "collapse", 2, "background-color", "#fff"], ["routerLink", "/customer-master"], [1, "bi", "bi-circle"], ["routerLink", "/customer-group-enrty"]],
  template: function NavComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "aside", 0)(1, "ul", 1)(2, "li", 2)(3, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Alternate Customer Master");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "li", 2)(8, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "AltInst AwbListing");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li", 2)(13, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "CAPX");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li", 2)(18, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "i", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "MIS Scheduler");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "li", 2)(23, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "i", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Stray Module");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "li", 2)(28, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "i", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Notification");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "i", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "ul", 11)(34, "li")(35, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "i", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Customer Master");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "li")(40, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "i", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Customer Group Entry");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5981:
/*!*******************************************************************!*\
  !*** ./src/app/components/notification/notification.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationComponent": () => (/* binding */ NotificationComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.constants */ 2976);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_shared_services_stray_module_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/stray.module.service */ 52);
/* harmony import */ var bd_common_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bd-common-lib */ 8919);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 4497);







class NotificationComponent {
  constructor(fb, strayModuleService, alert, crypto, title) {
    this.fb = fb;
    this.strayModuleService = strayModuleService;
    this.alert = alert;
    this.crypto = crypto;
    this.title = title;
  }
  ngOnInit() {
    this.title.setTitle("Notification");
    this.createForm();
  }
  createForm() {
    this.notifcationForm = this.fb.group({
      mcemplcode: ['00007'],
      mcgroupname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]]
    });
  }
  onSubmit() {
    //let requestBody = this.notifcationForm.getRawValue();
    const requestBody = {
      "mcemplcode": this.crypto.decryptionAES(sessionStorage.getItem('empCode')),
      "mcgroupname": this.notifcationForm.value.mcgroupname
    };
    this.strayModuleService.postDetails(requestBody, src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.NOTIFICATION_ENTRY).subscribe(res => {
      if (res.result) {
        this.alert.showSuccess('Data Saved Successfully', 'toast-bottom-right');
      }
    }, err => {
      this.alert.showError('Error occured try again!!', 'toast-bottom-right');
    });
  }
}
NotificationComponent.ɵfac = function NotificationComponent_Factory(t) {
  return new (t || NotificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_stray_module_service__WEBPACK_IMPORTED_MODULE_1__.StrayModuleService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](bd_common_lib__WEBPACK_IMPORTED_MODULE_4__.NotificationAlertService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](bd_common_lib__WEBPACK_IMPORTED_MODULE_4__.AESEncryptDecryptService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.Title));
};
NotificationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: NotificationComponent,
  selectors: [["app-notification"]],
  decls: 24,
  vars: 2,
  consts: [[1, "section", "dashboard"], [1, "row"], [1, "col-lg-12"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "bd-form", 3, "formGroup"], [1, "col-md-6"], ["for", "mcgroupname", 1, "col-sm-4", "col-form-label"], [2, "color", "red"], [1, "col-sm-8", "bd-inputfield"], ["type", "text", "formControlName", "mcgroupname", 1, "form-control"], [1, "col-md-12", "p-0"], [1, "mt-3", "btn-groups"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", 3, "disabled", "click"]],
  template: function NotificationComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 1)(4, "div", 2)(5, "div", 3)(6, "div", 4)(7, "h5", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Notification Group Master Entry");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "form", 6)(10, "div", 7)(11, "div", 1)(12, "label", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Group Name ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 12)(19, "div", 1)(20, "div", 12)(21, "div", 13)(22, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NotificationComponent_Template_button_click_22_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Submit");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.notifcationForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.notifcationForm.invalid);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 2927:
/*!*************************************************************************************!*\
  !*** ./src/app/components/notificationentryform/notificationentryform.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationentryformComponent": () => (/* binding */ NotificationentryformComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.constants */ 2976);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_shared_services_stray_module_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/stray.module.service */ 52);
/* harmony import */ var src_app_shared_services_csv_download_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/csv.download.service */ 529);
/* harmony import */ var bd_common_lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bd-common-lib */ 8919);







class NotificationentryformComponent {
  constructor(fb, strayModuleService, csvService, alert) {
    this.fb = fb;
    this.strayModuleService = strayModuleService;
    this.csvService = csvService;
    this.alert = alert;
    this.customerData = [];
    this.fsmData = [];
    this.templateError = '';
    this.notificationentryform = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
      notificationtype: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
      customergroup: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
      area: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
      custcode: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('')
    });
  }
  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.notificationentryform = this.fb.group({
      notificationtype: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
      customergroup: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
      area: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(3)]],
      custcode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]]
    });
    this.fsmData = [];
  }
  downloadCSV() {
    const payload = {
      "mcemplcode": "",
      "pccompgrp": "",
      "pcregion": "",
      "pcbranch": "",
      "pcarea": "",
      "pccustcode": "",
      "pcprodcode": "",
      "pcmode": "",
      "pcpacktype": "",
      "mcsubmit": "DOWNLOAD_CSV"
    };
    this.strayModuleService.postDetails(payload, src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.ALTERNATE_CUSTOMER_ENTRY).subscribe(res => {
      if (res.result) {
        this.alert.showSuccess('CSV Downloaded successfully', 'toast-bottom-right');
        this.csvService.exportToCsv('ALTERNATE_CUSTOMER_MASTER_ENTRY.csv', res.result.p_cursor);
      }
    }, err => {
      this.alert.showError('Error occured try again !!', 'toast-bottom-right');
    });
  }
  fetchDetails() {
    if (this.customerForm.value.pccompgrp) {
      const payload = {
        "mcemplcode": "",
        "pccompgrp": this.customerForm.value.pccompgrp,
        "pcregion": "",
        "pcbranch": "",
        "pcarea": "",
        "pccustcode": "",
        "pcprodcode": "",
        "pcmode": "",
        "pcpacktype": "",
        "mcsubmit": "DOWNLOAD_CSV"
      };
      this.templateError = '';
      this.strayModuleService.postDetails(payload, src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.ALTERNATE_CUSTOMER_ENTRY).subscribe(res => {
        if (res.result) {
          this.fsmData = res.result.p_cursor;
        }
      }, err => {
        this.alert.showError('Error occured try again !!', 'toast-bottom-right');
      });
    }
  }
  saveDetails() {
    let requestBody = this.customerForm.getRawValue();
    requestBody.mcsubmit = 'SAVE';
    this.strayModuleService.postDetails(requestBody, src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.ALTERNATE_CUSTOMER_ENTRY).subscribe(res => {
      if (res.result.cvalidflag == "Y") {
        this.alert.showSuccess('Data Saved Succesfully', 'toast-bottom-right');
        this.createForm();
      } else {
        this.templateError = res.result.cerrmsg;
      }
    }, err => {
      this.alert.showError('Error occured try again !!', 'toast-bottom-right');
    });
  }
}
NotificationentryformComponent.ɵfac = function NotificationentryformComponent_Factory(t) {
  return new (t || NotificationentryformComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_stray_module_service__WEBPACK_IMPORTED_MODULE_1__.StrayModuleService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_csv_download_service__WEBPACK_IMPORTED_MODULE_2__.CsvService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](bd_common_lib__WEBPACK_IMPORTED_MODULE_5__.NotificationAlertService));
};
NotificationentryformComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: NotificationentryformComponent,
  selectors: [["app-notificationentryform"]],
  decls: 81,
  vars: 1,
  consts: [[1, "section", "dashboard"], [1, "row"], [1, "col-lg-12"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "bd-form", 3, "formGroup"], [1, "col-md-6"], ["for", "notificationtype", 1, "col-sm-4", "col-form-label"], [1, "col-sm-8", "bd-inputfield"], [1, "form-select"], ["selected", ""], ["for", "customergroup", 1, "col-sm-4", "col-form-label"], ["for", "area", 1, "col-sm-4", "col-form-label"], ["type", "text", "formControlName", "area", 1, "form-control"], ["for", "custcode", 1, "col-sm-4", "col-form-label"], ["type", "text", "formControlName", "custcode", 1, "form-control"], ["href", "javascript:void(0)", 1, "reset-btn", 3, "click"], [1, "col-md-12", "p-0"], [1, "col-md-6", "p-0"], [1, "mt-3", "btn-groups", "d-flex", "justify-content-center"], ["type", "submit", 1, "btn", "btn-sm", "btn-primary", "btn-default"], [1, "table-responsive", "bd-table-bx"], [1, "table", "table-bordered", "bd-table", "border-primary", "mb-0"], ["scope", "col"], ["scope", "row"]],
  template: function NotificationentryformComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 1)(4, "div", 2)(5, "div", 3)(6, "div", 4)(7, "h5", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Notification entry form");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "form", 6)(10, "div", 7)(11, "div", 1)(12, "label", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Notification type");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 9)(15, "select", 10)(16, "option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Sorrry card");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 7)(20, "div", 1)(21, "label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Customer Group");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 9)(24, "select", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "option", 11)(26, "option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 7)(28, "div", 1)(29, "label", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "Area");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](32, "input", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 7)(34, "div", 1)(35, "label", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "Custocode");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](38, "input", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NotificationentryformComponent_Template_a_click_39_listener() {
        return ctx.fetchDetails();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "Fetch");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div", 18)(42, "div", 1)(43, "div", 19)(44, "div", 20)(45, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NotificationentryformComponent_Template_a_click_45_listener() {
        return ctx.fetchDetails();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, "Fetch");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "div", 18)(48, "div", 1)(49, "div", 19)(50, "div", 20)(51, "button", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, " SUBMIT ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "section")(54, "div", 2)(55, "div", 3)(56, "div", 4)(57, "h5", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58, "Notification entry form");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "div", 22)(60, "table", 23)(61, "thead")(62, "tr")(63, "th", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](64, "Area");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "th", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](66, "Customer");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "th", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](68, "Email To");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "th", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](70, "Email cc");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "th", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](72, "Group Code");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "tbody")(74, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](75, "th", 25)(76, "td")(77, "td")(78, "td")(79, "td")(80, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.notificationentryform);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 1431:
/*!*****************************************************!*\
  !*** ./src/app/components/query/query.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryComponent": () => (/* binding */ QueryComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 6908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_app_app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app.constants */ 2976);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_shared_services_stray_module_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/stray.module.service */ 52);
/* harmony import */ var src_app_shared_services_csv_download_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/csv.download.service */ 529);
/* harmony import */ var bd_common_lib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bd-common-lib */ 8919);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _stray_module_stray_module_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../stray-module/stray-module.component */ 6605);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);












const _c0 = ["tickAll"];
const _c1 = ["imageurl"];
function QueryComponent_section_0_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 20)(1, "div", 10)(2, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Stray Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 22)(5, "input", 29, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function QueryComponent_section_0_div_16_Template_input_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20);
      const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](6);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](_r18.toggle());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
}
function QueryComponent_section_0_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 20)(1, "div", 10)(2, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "To");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 22)(5, "input", 32, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function QueryComponent_section_0_div_17_Template_input_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r23);
      const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](6);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](_r21.toggle());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
}
function QueryComponent_section_0_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 20)(1, "div", 10)(2, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Region");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 22)(5, "select", 35)(6, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "ALL");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "WEST1");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "WEST2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "SOUTH1");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "SOUTH2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "EAST");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "NORTH");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
  }
}
function QueryComponent_section_0_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 20)(1, "div", 10)(2, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Stray Loc");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}
function QueryComponent_section_0_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 20)(1, "div", 10)(2, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 22)(5, "select", 46)(6, "option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Closed");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Open");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
  }
}
function QueryComponent_section_0_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 20)(1, "div", 10)(2, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Vechile No");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}
function QueryComponent_section_0_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 20)(1, "div", 10)(2, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Vechile origin");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}
function QueryComponent_section_0_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 20)(1, "div", 10)(2, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Route");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}
function QueryComponent_section_0_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 20)(1, "div", 10)(2, "label", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Commodity");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}
function QueryComponent_section_0_div_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 20)(1, "div", 10)(2, "label", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function QueryComponent_section_0_div_31_Template_label_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r25);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r24.showOption());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Click here for Advanced Query");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}
function QueryComponent_section_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section", 14)(1, "div", 10)(2, "div", 15)(3, "div", 10)(4, "div", 15)(5, "div", 16)(6, "div", 17)(7, "h5", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Query");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "form", 19)(10, "div", 20)(11, "div", 10)(12, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Stray #s");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "textarea", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, QueryComponent_section_0_div_16_Template, 7, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, QueryComponent_section_0_div_17_Template, 7, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, QueryComponent_section_0_div_18_Template, 20, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, QueryComponent_section_0_div_19_Template, 6, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, QueryComponent_section_0_div_20_Template, 10, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, QueryComponent_section_0_div_21_Template, 6, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, QueryComponent_section_0_div_22_Template, 6, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, QueryComponent_section_0_div_23_Template, 6, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, QueryComponent_section_0_div_24_Template, 6, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 25)(26, "div", 10)(27, "div", 25)(28, "div", 26)(29, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function QueryComponent_section_0_Template_button_click_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r27);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r26.onSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, QueryComponent_section_0_div_31_Template, 4, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r0.queryForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.showAdvanceOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.showAdvanceOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.showAdvanceOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.showAdvanceOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.showAdvanceOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.showAdvanceOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.showAdvanceOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.showAdvanceOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.showAdvanceOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r0.queryForm.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r0.showAdvanceOptions);
  }
}
function QueryComponent_section_1_th_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th")(1, "input", 64, 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function QueryComponent_section_1_th_13_Template_input_change_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r33);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r32.chkAll());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function QueryComponent_section_1_tr_47_td_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 70)(1, "input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function QueryComponent_section_1_tr_47_td_1_Template_input_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r39);
      const i_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index;
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r37.setSelection($event, i_r35));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function QueryComponent_section_1_tr_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, QueryComponent_section_1_tr_47_td_1_Template, 2, 0, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "th", 67)(3, "a", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function QueryComponent_section_1_tr_47_Template_a_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r41);
      const data_r34 = restoredCtx.$implicit;
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r40.goToEdit(data_r34));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](32, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "td")(36, "a", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function QueryComponent_section_1_tr_47_Template_a_click_36_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r41);
      const i_r35 = restoredCtx.index;
      const data_r34 = restoredCtx.$implicit;
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r42.showImage(i_r35, data_r34.cstrayno));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, "Download");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const data_r34 = ctx.$implicit;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r29.showMassUpdateAsPerRole);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r34.cstrayno);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](7, 16, data_r34.dstraydate, "dd-MM-yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r34.cstrayloc);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r34.centemplcode);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r34.cemplname);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r34.cpackdesc);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r34.cawbno);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r34.cremarks);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r34.cstatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r34.cvehicleno);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r34.cvehicleorigin);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r34.croute);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r34.COMMODITY);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](32, 19, data_r34.DUPDATEDT, "dd-MM-yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r34.cupdemplcode);
  }
}
function QueryComponent_section_1_tr_48_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function QueryComponent_section_1_tr_48_button_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r45);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r44.goToMassUpdate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Mass Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function QueryComponent_section_1_tr_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, QueryComponent_section_1_tr_48_button_2_Template, 2, 0, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r30.isGridFormValid && ctx_r30.showMassUpdateBtn);
  }
}
function QueryComponent_section_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section")(1, "div", 15)(2, "div", 16)(3, "div", 17)(4, "h5", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Query");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 58)(7, "div", 59)(8, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function QueryComponent_section_1_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r47);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r46.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "table", 61)(11, "thead")(12, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, QueryComponent_section_1_th_13_Template, 3, 0, "th", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "th", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Stray No");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "th", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Stray Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "th", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Stray Loc");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "th", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "EmpCode");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "th", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "EmpName");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "th", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "PackDesc");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "th", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "Awbno");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "th", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "Remarks");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "th", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "staus");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "th", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "Vehicleno");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "th", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "Vehicleorigin");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "th", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, "Route");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "th", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "Commodity");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "th", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, "Update Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "th", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43, "Update Emp");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "th", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, "Display Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](47, QueryComponent_section_1_tr_47_Template, 38, 22, "tr", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](48, QueryComponent_section_1_tr_48_Template, 3, 1, "tr", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.showMassUpdateAsPerRole);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.data);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.showMassUpdateAsPerRole);
  }
}
function QueryComponent_section_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section", 14)(1, "div", 10)(2, "div", 15)(3, "div", 10)(4, "div", 15)(5, "div", 16)(6, "div", 17)(7, "h5", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Stray Mass Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "form", 19)(10, "div", 20)(11, "div", 10)(12, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Stray Loc");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 20)(17, "div", 10)(18, "label", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Awb no");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "input", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 20)(23, "div", 10)(24, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 22)(27, "select", 76)(28, "option", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "Closed");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "Open");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 20)(33, "div", 10)(34, "label", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "Remarks");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](37, "textarea", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div", 25)(39, "div", 10)(40, "div", 25)(41, "div", 26)(42, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function QueryComponent_section_2_Template_button_click_42_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r49);
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r48.onMassUpdate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r2.massupdateForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r2.massupdateForm.invalid);
  }
}
function QueryComponent_section_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section", 14)(1, "div", 10)(2, "div", 15)(3, "div", 10)(4, "div", 15)(5, "div", 16)(6, "div", 17)(7, "h5", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Stray Entry");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "form", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function QueryComponent_section_3_Template_form_ngSubmit_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r52);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r51.onStrayUpdate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 20)(11, "div", 10)(12, "label", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Stray No");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 20)(17, "div", 10)(18, "label", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Stray Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 22)(21, "input", 83, 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function QueryComponent_section_3_Template_input_click_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r52);
      const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](22);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](_r50.toggle());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 20)(24, "div", 10)(25, "label", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "Stray Loc");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](28, "input", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 20)(30, "div", 10)(31, "label", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "Pack Desc");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](34, "textarea", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div", 20)(36, "div", 10)(37, "label", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, "Vehicle No");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](40, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "div", 20)(42, "div", 10)(43, "label", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44, "Route");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](46, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "div", 20)(48, "div", 10)(49, "label", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50, "Awb No");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](52, "input", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "div", 20)(54, "div", 10)(55, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "div", 22)(58, "select", 76)(59, "option", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60, "Closed");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](62, "Open");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "div", 20)(64, "div", 10)(65, "label", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](66, "Remarks");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](68, "textarea", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "div", 25)(70, "div", 10)(71, "div", 25)(72, "div", 26)(73, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](74, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](75, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "button", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function QueryComponent_section_3_Template_button_click_76_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r52);
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r54.goBackToGrid());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](77, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r3.strayEntryForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r3.editStrayNo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r3.strayEntryForm.invalid);
  }
}
function QueryComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 15)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "There is no Image to display");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function QueryComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r55 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate2"]("src", "data:", data_r55.mime_TYPE, ";base64, ", data_r55.bimagefile, "", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
  }
}
class QueryComponent {
  constructor(fb, strayModuleService, csvService, alert, crypto, _sanitizer, strayModule) {
    this.fb = fb;
    this.strayModuleService = strayModuleService;
    this.csvService = csvService;
    this.alert = alert;
    this.crypto = crypto;
    this._sanitizer = _sanitizer;
    this.strayModule = strayModule;
    this.data = [];
    this.imageData = [];
    this.months = [undefined, 'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    this.empCode = '';
    this.empLocArea = '';
    this.showAdvanceOptions = false;
    this.isImageAvailable = false;
    this.isGridFormValid = false;
    this.showGrid = false;
    this.showUpdateForm = false;
    this.showStrayUpdateForm = false;
    this.editStrayNo = '';
    this.showMassUpdateAsPerRole = false;
    this.showMassUpdateBtn = false;
    this.imageurl = null;
    this.tickAll = null;
  }
  ngOnInit() {
    this.empCode = this.crypto.decryptionAES(sessionStorage.getItem('empCode'));
    this.empLocArea = this.crypto.decryptionAES(sessionStorage.getItem('empLocArea'));
    this.createForm();
    console.log(this.crypto.decryptionAES(src_app_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.EmpCLevel));
    if (this.crypto.decryptionAES(src_app_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.EmpCLevel) === "0") {
      this.showMassUpdateAsPerRole = true;
    } else {
      this.showMassUpdateAsPerRole = false;
    }
  }
  createForm() {
    this.queryForm = this.fb.group({
      mcstrayno: [''],
      mcfromdate: [moment__WEBPACK_IMPORTED_MODULE_0__(new Date()).format('DD-MM-YYYY')],
      mctodate: [moment__WEBPACK_IMPORTED_MODULE_0__(new Date()).format('DD-MM-YYYY')],
      mregion: ['ALL'],
      mcstrayloc: [this.empLocArea, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(3)]],
      mcstatus: ['C'],
      mcvehicleno: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(30)]],
      mcvehicleorigin: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(3)]],
      mcroute: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(10)]],
      mcommodity: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(25)]]
    });
    this.massupdateForm = this.fb.group({
      mcstrayloc: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(3)]],
      mcawbno: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(11)]],
      mcstatus: ['O', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      mcremarks: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(100)]]
    });
    this.strayEntryForm = this.fb.group({
      mdstraydate: [[_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
      mcstrayloc: [this.empLocArea, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
      mcpackdesc: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
      mcvehicleno: [''],
      mcroute: [''],
      mcawbno: [''],
      mcstatus: [''],
      mcremarks: ['']
    });
  }
  onSubmit() {
    this.showGrid = true;
    this.showUpdateForm = false;
    this.showMassUpdateBtn = true;
    if (this.data.length > 0) {
      this.data.splice(0, this.data.length);
    }
    let fromdtMonth = this.months[Number(this.queryForm.controls['mcfromdate'].value.trim().split("-")[1])];
    let fromdtDate = this.queryForm.controls['mcfromdate'].value.split("-")[0] + '-' + fromdtMonth + '-' + this.queryForm.controls['mcfromdate'].value.split("-")[2];
    let todtMonth = this.months[Number(this.queryForm.controls['mctodate'].value.trim().split("-")[1])];
    let todtDate = this.queryForm.controls['mctodate'].value.split("-")[0] + '-' + todtMonth + '-' + this.queryForm.controls['mctodate'].value.split("-")[2];
    let requestBody = this.queryForm.getRawValue();
    requestBody.mcEmplCode = this.empCode;
    requestBody.mcfromdate = fromdtDate;
    requestBody.mctodate = todtDate;
    requestBody.mcpackdesc = null;
    requestBody.mcawbno = null;
    requestBody.mcremarks = null;
    requestBody.mcSubmit = 'Submit';
    requestBody.mcorderby = null;
    requestBody.mcorder = null;
    requestBody.mccheckall = null;
    requestBody.mcTotal = null;
    if (this.queryForm.controls['mcstrayloc'].value.trim() === '') {
      requestBody.mcstrayloc = null;
    }
    if (this.queryForm.controls['mcvehicleno'].value.trim() === '') {
      requestBody.mcvehicleno = null;
    }
    if (this.queryForm.controls['mcvehicleorigin'].value.trim() === '') {
      requestBody.mcvehicleorigin = null;
    }
    if (this.queryForm.controls['mcroute'].value.trim() === '') {
      requestBody.mcroute = null;
    }
    if (this.queryForm.controls['mcstrayno'].value != '') {
      requestBody.mcfromdate = null;
      requestBody.mctodate = null;
      requestBody.mregion = null;
      requestBody.mcstatus = null;
      requestBody.mcstrayloc = null;
    }
    console.log(requestBody);
    this.strayModuleService.postDetails(requestBody, src_app_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.STRAY_QUERY).subscribe(res => {
      console.log(res);
      if (res.result) {
        if (res.result.p_cursorList != null) {
          this.data = res.result.p_cursorList;
          //this.imageData = res.result.p_cursorList1s;
          this.data.forEach(function (e) {
            if (typeof e === "object") {
              e["ISSELECTED"] = false;
            }
          });
          if (this.data.length === 0) {
            this.showMassUpdateBtn = false;
          }
        } else {
          this.showMassUpdateBtn = false;
        }
      }
    }, err => {
      console.log(err);
    });
  }
  chkAll() {
    const isChecked = this.tickAll.nativeElement.checked;
    const checkboxes = document.getElementsByClassName('chkbxApprove');
    for (let i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = isChecked;
    }
    for (let i = 0; i < this.data.length; i++) {
      this.data[i].ISSELECTED = isChecked;
    }
    console.log(this.data);
    this.isGridFormValid = isChecked;
  }
  setSelection(e, index) {
    let isAnyOneChecked = false;
    let falseCount = 0;
    this.data[index].ISSELECTED = e.target.checked;
    const checkboxes = document.getElementsByClassName('chkbxApprove');
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked === true) {
        isAnyOneChecked = true;
        break;
      } else {
        falseCount += 1;
      }
    }
    if (checkboxes.length == falseCount) {
      this.tickAll.nativeElement.checked = false;
    }
    if (falseCount == 0) {
      this.tickAll.nativeElement.checked = true;
    }
    this.isGridFormValid = isAnyOneChecked;
    console.log(this.data);
  }
  showOption() {
    this.showAdvanceOptions = !this.showAdvanceOptions;
  }
  showImage(i, strayNo) {
    this.isImageAvailable = false;
    this.imageData.splice(0, this.imageData.length);
    // let r =  this.imageData.filter(x => x.cstrayno == strayNo);
    // if(r.length === 0)
    // {
    //   this.isImageAvailable = false;
    // }
    // else
    // {
    //   this.isImageAvailable = true;
    //   console.log(r[0].bimagefile)
    //   this.imagePath = 'data:'+ r[0].mime_TYPE + ';base64,' + r[0].bimagefile;
    // }
    let requestBody = {
      pstrayno: strayNo
    };
    console.log('Image Request : ', requestBody);
    this.strayModuleService.postDetails(requestBody, src_app_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.STRAY_IMAGE).subscribe(res => {
      console.log('Response : ', res);
      if (res.result) {
        if (res.result.p_cursorList1s != null) {
          this.imageData = res.result.p_cursorList1s;
          console.log('Image Data : ', this.imageData);
          console.log('Image Data length : ', this.imageData.length);
          this.isImageAvailable = true;
          if (this.imageData.length == 0) {
            this.isImageAvailable = false;
          }
        }
      }
    }, err => {
      console.log(err);
    });
  }
  showImage1(i, strayNo) {
    let r = this.imageData.filter(x => x.cstrayno == strayNo);
    if (r.length === 0) {
      this.isImageAvailable = false;
    } else {
      this.isImageAvailable = true;
      console.log(r[0].bimagefile);
      // let reader = new FileReader();
      // reader.addEventListener("load", () => {
      //     this.imagePath = reader.result;
      // }, false);
      // reader.readAsDataURL(r[0].BIMAGEFILE);
      // if (r[0].BIMAGEFILE) {
      //     reader.readAsDataURL(r[0].BIMAGEFILE);
      // }
      // const reader = new FileReader();
      // reader.onload = (e) => this.imagePath = r[0].BIMAGEFILE;
      // reader.readAsDataURL(new Blob([r[0].BIMAGEFILE]));W
      //this.imagePath = this._sanitizer.bypassSecurityTrustResourceUrl('data:'+ r[0].MIME_TYPE + ';base64,' + r[0].BIMAGEFILE);
      this.imagePath = 'data:' + r[0].mime_TYPE + ';base64,' + r[0].bimagefile;
      //this.imagePath = r[0].BIMAGEFILE;
      // const base64String = btoa(String.fromCharCode(r[0].BIMAGEFILE));
      // const imageUrl = 'data:image/png;base64,' + r[0].BIMAGEFILE;
      // this.imagePath = this._sanitizer.bypassSecurityTrustUrl(imageUrl);
      // var bytes = [r[0].BIMAGEFILE]; // get from server
      // var uints = new Uint8Array(bytes);
      // var base64 = btoa(String.fromCharCode(0,uints));
      // var url = 'data:image/jpeg;base64,' + base64;
      // let byteCharacters = atob(r[0].BIMAGEFILE);
      // let byteNumbers = new Array(byteCharacters.length);
      // for (let i = 0; i < byteCharacters.length; i++) {
      //   byteNumbers[i] = byteCharacters.charCodeAt(i);
      // }
      // let byteArray = new Uint8Array(byteNumbers);
      // let blob = new Blob([byteArray], { type: 'image/png' });
      // this.imagePath = this._sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(blob));
      // console.log(this.imagePath);
    }
  }

  goBack() {
    this.showGrid = false;
    this.showUpdateForm = false;
    this.showStrayUpdateForm = false;
  }
  goToMassUpdate() {
    this.showGrid = false;
    this.showUpdateForm = true;
    this.showStrayUpdateForm = false;
  }
  goBackToGrid() {
    this.showGrid = true;
    this.showUpdateForm = false;
    this.showStrayUpdateForm = false;
  }
  onMassUpdate() {
    let straynos = '';
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].ISSELECTED === true) {
        straynos += this.data[i].cstrayno + ',';
      }
    }
    let requestBody = this.massupdateForm.getRawValue();
    requestBody.mcstraynos = straynos.substring(0, straynos.length - 1);
    requestBody.mcTotal = null;
    requestBody.mcemplcode = this.empCode;
    requestBody.mcSubmit = '';
    this.strayModuleService.postDetails(requestBody, src_app_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.STRAY_MASS_UPDATE).subscribe(res => {
      if (res.status.isSuccess) {
        this.alert.showSuccess('Data Saved Successfully', 'toast-bottom-right');
        this.massupdateForm.reset();
        this.showGrid = false;
        this.showUpdateForm = false;
      }
    }, err => {
      console.log(err);
    });
  }
  goToEdit(data) {
    //this.strayModule.assignComponent('StrayUpdateComponent', data);
    this.showGrid = false;
    this.showUpdateForm = false;
    this.showStrayUpdateForm = true;
    this.editStrayNo = data.cstrayno;
    this.strayEntryForm.patchValue({
      mdstraydate: moment__WEBPACK_IMPORTED_MODULE_0__(data.dstraydate).format('DD-MM-YYYY'),
      mcstrayloc: data.cstrayloc,
      mcpackdesc: data.cpackdesc,
      mcvehicleno: data.cvehicleno,
      mcroute: data.croute,
      mcawbno: data.cawbno,
      mcstatus: data.cstatus,
      mcremarks: data.cremarks
    });
  }
  onStrayUpdate() {
    let strayDTMonth = this.months[Number(this.strayEntryForm.controls['mdstraydate'].value.trim().split("-")[1])];
    let strayDTDate = this.strayEntryForm.controls['mdstraydate'].value.split("-")[0] + '-' + strayDTMonth + '-' + this.strayEntryForm.controls['mdstraydate'].value.split("-")[2];
    let requestBody = {
      ...this.strayEntryForm.value,
      mdstraydate: strayDTDate,
      mcstrayno: this.editStrayNo,
      mcSubmit: 'mcSubmit',
      mcEmplCode: this.empCode
    };
    console.log(requestBody);
    this.strayModuleService.postDetails(requestBody, src_app_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.STRAY_UPDATE).subscribe(res => {
      console.log(res);
      if (res.result) {
        this.alert.showSuccess('Data Saved Successfully', 'toast-bottom-right');
        this.strayEntryForm.reset();
      }
    }, err => {
      this.alert.showError('Error occured try again!!', 'toast-bottom-right');
    });
  }
}
QueryComponent.ɵfac = function QueryComponent_Factory(t) {
  return new (t || QueryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_stray_module_service__WEBPACK_IMPORTED_MODULE_2__.StrayModuleService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_csv_download_service__WEBPACK_IMPORTED_MODULE_3__.CsvService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](bd_common_lib__WEBPACK_IMPORTED_MODULE_7__.NotificationAlertService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](bd_common_lib__WEBPACK_IMPORTED_MODULE_7__.AESEncryptDecryptService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_stray_module_stray_module_component__WEBPACK_IMPORTED_MODULE_4__.StrayModuleComponent));
};
QueryComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: QueryComponent,
  selectors: [["app-query"]],
  viewQuery: function QueryComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.tickAll = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.imageurl = _t.first);
    }
  },
  decls: 16,
  vars: 6,
  consts: [["class", "section dashboard", 4, "ngIf"], [4, "ngIf"], ["id", "viewImage", "tabindex", "-1", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-lg"], ["CeModal", ""], [1, "modal-content"], [1, "modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], ["closebutton", ""], [1, "modal-body", 2, "min-height", "400px", "max-height", "400px", "overflow", "scroll"], [1, "row"], ["class", "col-lg-12", 4, "ngIf"], ["class", "col-lg-12", "style", "margin-top:10px;", 4, "ngFor", "ngForOf"], [1, "modal-footer"], [1, "section", "dashboard"], [1, "col-lg-12"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "bd-form", 3, "formGroup"], [1, "col-md-6"], ["for", "mcstrayno", 1, "col-sm-4", "col-form-label"], [1, "col-sm-8", "bd-inputfield"], ["formControlName", "mcstrayno", 1, "form-control", 2, "height", "100px"], ["class", "col-md-6", 4, "ngIf"], [1, "col-md-12", "p-0"], [1, "mt-3", "btn-groups"], ["type", "submit", 1, "btn", "btn-sm", "btn-primary", 3, "disabled", "click"], ["for", "mcfromdate", 1, "col-sm-4", "col-form-label"], ["type", "text", "formControlName", "mcfromdate", "ngbDatepicker", "", "placeholder", "dd-mm-yyyy", 1, "form-control", 3, "click"], ["mcfromdate", "ngbDatepicker"], ["for", "mctodate", 1, "col-sm-4", "col-form-label"], ["type", "text", "formControlName", "mctodate", "ngbDatepicker", "", "placeholder", "dd-mm-yyyy", 1, "form-control", 3, "click"], ["mctodate", "ngbDatepicker"], ["for", "region", 1, "col-sm-4", "col-form-label"], ["name", "mregion", "formControlName", "mregion", 1, "form-control"], ["value", "ALL", "selected", ""], ["value", "WEST1"], ["value", "WEST2"], ["value", "SOUTH1"], ["value", "SOUTH2"], ["value", "EAST"], ["value", "NORTH"], ["for", "strayloc", 1, "col-sm-4", "col-form-label"], ["type", "text", "formControlName", "mcstrayloc", "maxlength", "3", 1, "form-control"], ["for", "status", 1, "col-sm-4", "col-form-label"], ["name", "mcstatus", "formControlName", "mcstatus", 1, "form-control"], ["value", "C"], ["value", "O"], ["for", "vechileno", 1, "col-sm-4", "col-form-label"], ["type", "text", "formControlName", "mcvehicleno", "maxlength", "30", 1, "form-control"], ["for", "vechileorigin", 1, "col-sm-4", "col-form-label"], ["type", "text", "formControlName", "mcvehicleorigin", "maxlength", "3", 1, "form-control"], ["for", "route", 1, "col-sm-4", "col-form-label"], ["type", "text", "formControlName", "mcroute", "maxlength", "10", 1, "form-control"], ["for", "commodity", 1, "col-sm-4", "col-form-label"], ["type", "text", "formControlName", "mcommodity", "maxlength", "25", 1, "form-control"], [1, "col-sm-8", "col-form-label", "cursor-pointer", 2, "text-decoration", "underline", "color", "red", 3, "click"], [1, "table-responsive", "bd-table-bx", 2, "max-height", "400px"], [1, "col-md-2"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", "btn-input", 3, "click"], [1, "table", "table-bordered", "bd-table", "border-primary", "mb-0"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["type", "checkbox", "id", "tick", "name", "tick", 1, "tick", 3, "change"], ["tickAll", ""], ["class", "text-center", 4, "ngIf"], ["scope", "row"], [1, "cursor-pointer", 3, "click"], ["data-bs-toggle", "modal", "data-bs-target", "#viewImage", 1, "cursor-pointer", 3, "click"], [1, "text-center"], ["type", "checkbox", 1, "tick", "chkbxApprove", 3, "change"], ["colspan", "17"], ["type", "button", "class", "btn btn-sm btn-primary btn-input", 3, "click", 4, "ngIf"], ["for", "AwbNo", 1, "col-sm-4", "col-form-label"], ["type", "text", "formControlName", "mcawbno", "maxlength", "11", 1, "form-control"], ["name", "mcstatus", "formControlName", "mcstatus", 1, "form-select"], ["selected", "", "value", "C"], ["for", "mcremarks", 1, "col-sm-4", "col-form-label"], ["formControlName", "mcremarks", "maxlength", "100", 1, "form-control", 2, "height", "100px"], [1, "bd-form", 3, "formGroup", "ngSubmit"], ["for", "mcstrayloc", 1, "col-sm-4", "col-form-label"], ["for", "strayDate", 1, "col-sm-4", "col-form-label"], ["type", "text", "formControlName", "mdstraydate", "ngbDatepicker", "", "tabindex", "1", "placeholder", "dd-mm-yyyy", 1, "form-control", 3, "click"], ["mdstraydate", "ngbDatepicker"], ["type", "text", "formControlName", "mcstrayloc", "maxlength", "3", 1, "form-control", "text-uppercase"], ["for", "packdesc", 1, "col-sm-4", "col-form-label"], [1, "col-sm-8", "bd-inputfield", "mb-1"], ["formControlName", "mcpackdesc", "rows", "7", "cols", "75", "maxlength", "10000", 1, "form-control"], ["for", "mcvehicleno", 1, "col-sm-4", "col-form-label"], ["for", "mcroute", 1, "col-sm-4", "col-form-label"], ["for", "mcawbno", 1, "col-sm-4", "col-form-label"], ["type", "text", "formControlName", "mcawbno", "maxlength", "12", 1, "form-control"], ["for", "mcremarks ", 1, "col-sm-4", "col-form-label"], ["type", "text", "formControlName", "mcremarks", "maxlength", "100", "rows", "4", "cols", "75", 1, "form-control"], ["type", "submit", 1, "btn", "btn-sm", "btn-primary", 3, "disabled"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", 3, "click"], [1, "col-lg-12", 2, "margin-top", "10px"], [3, "src"]],
  template: function QueryComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, QueryComponent_section_0_Template, 32, 12, "section", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, QueryComponent_section_1_Template, 49, 3, "section", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, QueryComponent_section_2_Template, 44, 2, "section", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, QueryComponent_section_3_Template, 78, 3, "section", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 2)(5, "div", 3, 4)(7, "div", 5)(8, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "button", 7, 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 9)(12, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, QueryComponent_div_13_Template, 3, 0, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, QueryComponent_div_14_Template, 2, 2, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.showGrid && !ctx.showUpdateForm && !ctx.showStrayUpdateForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showGrid);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showUpdateForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showStrayUpdateForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.imageData.length == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.imageData);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbInputDatepicker, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 2758:
/*!*****************************************************************!*\
  !*** ./src/app/components/stray-entry/stray-entry.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StrayEntryComponent": () => (/* binding */ StrayEntryComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.constants */ 2976);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ 6908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_shared_services_stray_module_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/stray.module.service */ 52);
/* harmony import */ var bd_common_lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bd-common-lib */ 8919);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);








class StrayEntryComponent {
  constructor(fb, strayModuleService, alert, ngbCalendar, dateAdapter, crypto) {
    this.fb = fb;
    this.strayModuleService = strayModuleService;
    this.alert = alert;
    this.ngbCalendar = ngbCalendar;
    this.dateAdapter = dateAdapter;
    this.crypto = crypto;
    this.months = [undefined, 'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    this.empCode = '';
    this.empLocArea = '';
    this.mcstrayno = '';
    this.imagepath = '';
  }
  ngOnInit() {
    this.empCode = this.crypto.decryptionAES(sessionStorage.getItem('empCode'));
    this.empLocArea = this.crypto.decryptionAES(sessionStorage.getItem('empLocArea'));
    this.createForm();
  }
  createForm() {
    this.strayEntryForm = this.fb.group({
      mdstraydate: [moment__WEBPACK_IMPORTED_MODULE_1__().format('DD-MM-yyyy')],
      mcstrayloc: [this.empLocArea, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
      mcpackdesc: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
      mcvehicleno: [''],
      mcvehicleorigin: [''],
      mcroute: [''],
      mcommodity: ['']
    });
  }
  onSubmit() {
    //alert(this.strayEntryForm.controls['mdstraydate'].value);
    if (this.mcstrayno == '') {
      this.alert.showError('Image provided could not be uploaded please contact administrator.', 'toast-bottom-right');
      return;
    } else {
      let strayDTMonth = this.months[Number(this.strayEntryForm.controls['mdstraydate'].value.trim().split("-")[1])];
      let strayDTDate = this.strayEntryForm.controls['mdstraydate'].value.split("-")[0] + '-' + strayDTMonth + '-' + this.strayEntryForm.controls['mdstraydate'].value.split("-")[2];
      let requestBody = {
        ...this.strayEntryForm.value,
        mdstraydate: strayDTDate,
        mcstrayno: this.mcstrayno,
        mcSubmit: 'mcSubmit',
        mcEmplCode: this.empCode
      };
      console.log(requestBody);
      this.strayModuleService.postDetails(requestBody, src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.STRAY_ENTRY).subscribe(res => {
        console.log(res);
        if (res.result) {
          if (res.result.cvalidFlag === 'Y') {
            this.alert.showSuccess('Data Saved Successfully', 'toast-bottom-right');
            this.strayEntryForm.reset();
            this.strayEntryForm.patchValue({
              mdstraydate: [moment__WEBPACK_IMPORTED_MODULE_1__(new Date()).format('DD-MM-YYYY')],
              mcstrayloc: [this.empLocArea, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]]
            });
          } else {
            this.alert.showError(res.result.errormsg, 'toast-bottom-right');
          }
        }
      }, err => {
        this.alert.showError('Error occured try again!!', 'toast-bottom-right');
      });
    }
  }
  onSelectedChange(input) {
    const file = input.files[0];
    const reader = new FileReader();
    let fileExt = file.name.split('.');
    let fileType = file.type;
    let extention = fileExt[1];
    console.log(file.size);
    if (extention.toLowerCase() != 'jpg' && extention.toLowerCase() != 'jpeg' && extention.toLowerCase() !== 'png') {
      this.alert.showError('Please upload valid image file jpeg or png', 'toast-bottom-right');
      return;
    }
    // if(parseInt(file.size) > 1500000)
    // {
    //   this.alert.showError('Image file size cannot be greater then 1.5MB', 'toast-bottom-right');
    //   return;
    // }
    reader.onload = e => {
      const bytes = e.target.result.split('base64,')[1];
      console.log(bytes);
      this.imagepath = bytes;
      let requestBody = {
        mcfilename: Math.floor(Math.random() * 500000000000) + "." + extention,
        mbimagefile: bytes,
        mmime_type: fileType,
        mduploaddt: moment__WEBPACK_IMPORTED_MODULE_1__().format('DD-MMM-YYYY'),
        mcuplodemplcode: this.empCode,
        mncounter: "1"
        //mcstrayno1:"41944"
      };

      console.log(requestBody);
      this.strayModuleService.postDetails(requestBody, src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.STRAY_UPLOAD_FILE).subscribe(res => {
        if (res.result) {
          this.mcstrayno = res.result.mcstrayno;
          console.log(this.mcstrayno);
        } else {
          this.alert.showError('Error occured try again!!', 'toast-bottom-right');
        }
      }, err => {
        this.alert.showError('Error occured try again!!', 'toast-bottom-right');
      });
    };
    reader.readAsDataURL(file);
  }
  onFileSelect(input) {
    //const file = input.files[0]; 
    // const reader = new FileReader();
    // let byteArray;
    // let fileExt =  file.name.split('.');
    //   let fileType = file.type;
    //   let extention = fileExt[1];
    // let r;
    // reader.addEventListener("loadend", function () {
    //   // convert image file to base64 string
    //   console.log('base64', reader.result);
    //   // byteArray = convertDataURIToBinary(reader.result);
    //   // console.log('byte array', byteArray);
    //   r = reader.result;
    // }, false);
    // if (file) {
    //   reader.readAsDataURL(file);
    // }
    // console.log('base64', r);
    // let requestBody : any = {
    //   mcfilename : Math.floor(Math.random()*500000000000) + "." + extention,
    //   mbimagefile : r,
    //   mmime_type : fileType,
    //   mduploaddt : moment().format('DD-MMM-YYYY'),
    //   mcuplodemplcode : this.empCode,
    //   mncounter:"1",
    //   //mcstrayno1:"41944"
    // } 
    // console.log(requestBody);
    // this.strayModuleService.postDetails(requestBody, AppConstants.STRAY_UPLOAD_FILE).subscribe((res: any) => {
    //   if(res.result)
    //   {
    //     this.mcstrayno = res.result.mcstrayno;
    //     console.log(this.mcstrayno);
    //   }
    //   else
    //   {
    //     this.alert.showError('Error occured try again!!', 'toast-bottom-right');
    //   }
    // }, (err) => {
    //   this.alert.showError('Error occured try again!!', 'toast-bottom-right');
    // })
    debugger;
    const file = input.files[0];
    const reader = new FileReader();
    let fileExt = file.name.split('.');
    let fileType = file.type;
    let extention = fileExt[1];
    reader.onload = e => {
      const bytes = e.target.result.split('base64,')[1];
      //const bytes = this.convertDataURIToBinary(e.target.result);
      console.log(bytes);
      //this.mcstrayno = "41934";
      let requestBody = {
        mcfilename: Math.floor(Math.random() * 500000000000) + "." + extention,
        mbimagefile: bytes,
        mmime_type: fileType,
        mduploaddt: moment__WEBPACK_IMPORTED_MODULE_1__().format('DD-MMM-YYYY'),
        mcuplodemplcode: this.empCode,
        mncounter: "1"
        //mcstrayno1:"41944"
      };

      console.log(requestBody);
      this.strayModuleService.postDetails(requestBody, src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.STRAY_UPLOAD_FILE).subscribe(res => {
        if (res.result) {
          this.mcstrayno = res.result.mcstrayno;
          console.log(this.mcstrayno);
        } else {
          this.alert.showError('Error occured try again!!', 'toast-bottom-right');
        }
      }, err => {
        this.alert.showError('Error occured try again!!', 'toast-bottom-right');
      });
    };
    // reader.readAsDataURL(file);
    //console.log(input.files);
    //let byteArray;
    // if (input.files && input.files[0]) {
    //   console.log(input.files[0]);
    //   var reader = new FileReader();
    //   reader.onload = (e: any) => {
    //     console.log('Got here: ', e.target.result);
    //     //this.obj.photoUrl = e.target.result;
    //     //reader.readAsDataURL(input.files[0]);
    //     //byteArray = this.convertDataURIToBinary(reader.result);
    //     //console.log(byteArray);
    //   }
    // }
  }

  onFileChange(event) {
    if (event.target.files && event.target.files.length) {
      debugger;
      const file = event.target.files[0];
      const fileReader = new FileReader();
      fileReader.onload = e => {
        const arrayBuffer = fileReader.result;
        const uintArray = new Uint8Array(arrayBuffer);
        const byteArray = Array.from(uintArray);
        console.log(byteArray); // Do whatever you need with the byte array here
        const bytes = e.target.result.split('base64,')[1];
        let fileExt = file.name.split('.');
        let fileType = file.type;
        let extention = fileExt[1];
        let requestBody = {
          mcfilename: Math.floor(Math.random() * 500000000000) + "." + extention,
          mbimagefile: bytes,
          mmime_type: fileType,
          mduploaddt: moment__WEBPACK_IMPORTED_MODULE_1__().format('DD-MMM-YYYY'),
          mcuplodemplcode: this.empCode,
          mncounter: "1"
          //mcstrayno1:"41944"
        };

        console.log(requestBody);
        this.strayModuleService.postDetails(requestBody, src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.STRAY_UPLOAD_FILE).subscribe(res => {
          if (res.result) {
            this.mcstrayno = res.result.mcstrayno;
            //console.log(this.mcstrayno);
          } else {
            this.alert.showError('Error occured try again!!', 'toast-bottom-right');
          }
        }, err => {
          this.alert.showError('Error occured try again!!', 'toast-bottom-right');
        });
      };
      fileReader.readAsArrayBuffer(file);
    }
  }
  convertDataURIToBinary(dataURI) {
    var base64Index = dataURI.indexOf(';base64,') + ';base64,'.length;
    var base64 = dataURI.substring(base64Index);
    var raw = window.atob(base64);
    var rawLength = raw.length;
    var array = new Uint8Array(new ArrayBuffer(rawLength));
    for (let i = 0; i < rawLength; i++) {
      array[i] = raw.charCodeAt(i);
    }
    return array;
  }
}
StrayEntryComponent.ɵfac = function StrayEntryComponent_Factory(t) {
  return new (t || StrayEntryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_stray_module_service__WEBPACK_IMPORTED_MODULE_2__.StrayModuleService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](bd_common_lib__WEBPACK_IMPORTED_MODULE_5__.NotificationAlertService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbCalendar), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDateAdapter), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](bd_common_lib__WEBPACK_IMPORTED_MODULE_5__.AESEncryptDecryptService));
};
StrayEntryComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: StrayEntryComponent,
  selectors: [["app-stray-entry"]],
  decls: 65,
  vars: 2,
  consts: [[1, "section", "dashboard"], [1, "row"], [1, "col-lg-12"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "bd-form", 3, "formGroup", "ngSubmit"], [1, "col-md-6"], ["for", "strayDate", 1, "col-sm-4", "col-form-label"], [1, "col-sm-8", "bd-inputfield"], ["type", "text", "formControlName", "mdstraydate", "ngbDatepicker", "", "tabindex", "1", "placeholder", "dd-mm-yyyy", 1, "form-control", 3, "click"], ["mdstraydate", "ngbDatepicker"], ["for", "mcstrayloc", 1, "col-sm-4", "col-form-label"], ["type", "text", "formControlName", "mcstrayloc", "maxlength", "3", 1, "form-control"], ["for", "file", 1, "col-sm-4", "col-form-label"], ["type", "file", "id", "file", "accept", "image/*", 3, "change"], ["for", "packdesc", 1, "col-sm-4", "col-form-label"], [1, "col-sm-8", "bd-inputfield", "mb-1"], ["formControlName", "mcpackdesc", "rows", "7", "cols", "75", 1, "form-control"], ["for", "mcvehicleno", 1, "col-sm-4", "col-form-label"], ["type", "text", "formControlName", "mcvehicleno", "maxlength", "30", 1, "form-control"], ["for", "mcvehicleorigin", 1, "col-sm-4", "col-form-label"], ["type", "text", "formControlName", "mcvehicleorigin", "maxlength", "3", 1, "form-control"], ["for", "mcroute", 1, "col-sm-4", "col-form-label"], ["type", "text", "formControlName", "mcroute", "maxlength", "10", 1, "form-control"], ["for", "mcommodity ", 1, "col-sm-4", "col-form-label"], ["type", "text", "formControlName", "mcommodity", "maxlength", "25", 1, "form-control"], [1, "col-md-12", "p-0"], [1, "mt-3", "btn-groups"], ["type", "submit", 1, "btn", "btn-sm", "btn-primary", 3, "disabled"]],
  template: function StrayEntryComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 1)(4, "div", 2)(5, "div", 3)(6, "div", 4)(7, "h5", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Stray Entry");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "form", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function StrayEntryComponent_Template_form_ngSubmit_9_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 7)(11, "div", 1)(12, "label", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Stray Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 9)(15, "input", 10, 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function StrayEntryComponent_Template_input_click_15_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](16);
        return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r0.toggle());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 7)(18, "div", 1)(19, "label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Stray Loc");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 7)(24, "div", 1)(25, "label", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Upload Image");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 9)(28, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function StrayEntryComponent_Template_input_change_28_listener($event) {
        return ctx.onSelectedChange($event.target);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 7)(30, "div", 1)(31, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "PackDesc");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](34, "textarea", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 7)(36, "div", 1)(37, "label", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "Vehicle No");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](40, "input", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div", 7)(42, "div", 1)(43, "label", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "Vehicle origin");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](46, "input", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "div", 7)(48, "div", 1)(49, "label", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, "Route");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](52, "input", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "div", 7)(54, "div", 1)(55, "label", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56, "Commodity");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](58, "input", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "div", 27)(60, "div", 1)(61, "div", 27)(62, "div", 28)(63, "button", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](64, "Submit");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.strayEntryForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](54);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.strayEntryForm.invalid);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbInputDatepicker],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6605:
/*!*******************************************************************!*\
  !*** ./src/app/components/stray-module/stray-module.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StrayModuleComponent": () => (/* binding */ StrayModuleComponent)
/* harmony export */ });
/* harmony import */ var src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.constants */ 2976);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var bd_common_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bd-common-lib */ 8919);




function StrayModuleComponent_li_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 6)(1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StrayModuleComponent_li_7_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.assignComponent("StrayEntryComponent", ""));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Stray Entry");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
}
function StrayModuleComponent__app_app_stray_entry_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-stray-entry");
  }
}
function StrayModuleComponent__app_app_stray_update_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-stray-update");
  }
}
function StrayModuleComponent__app_app_query_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-query");
  }
}
function StrayModuleComponent__app_app_mass_update_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-mass-update");
  }
}
function StrayModuleComponent__app_app_download_csv_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-download-csv");
  }
}
class StrayModuleComponent {
  constructor(title, crypto) {
    this.title = title;
    this.crypto = crypto;
    this.showEntryFormAsPerRole = true;
  }
  ngOnInit() {
    this.title.setTitle("Stray Module");
    //this.assignComponent('StrayEntryComponent', '');
    if (this.crypto.decryptionAES(src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.EmpCLevel) === "0") {
      this.showEntryFormAsPerRole = false;
    } else {
      this.showEntryFormAsPerRole = true;
    }
  }
  assignComponent(component, strayDetail) {
    this.activeComponent = component;
  }
  logout() {
    window.opener.location.href = 'http://localhost:4200/dashboard?mode=logout';
    //window.close();
  }
}

StrayModuleComponent.ɵfac = function StrayModuleComponent_Factory(t) {
  return new (t || StrayModuleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](bd_common_lib__WEBPACK_IMPORTED_MODULE_3__.AESEncryptDecryptService));
};
StrayModuleComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: StrayModuleComponent,
  selectors: [["app-stray-module"]],
  decls: 22,
  vars: 6,
  consts: [[1, "row"], [1, "col-lg-12"], [1, "card-title"], [1, "header-nav", "ms-auto"], [1, "d-flex", "bd-topmenu", "align-items-center"], ["class", "nav-item topmenu-li pe-3 ps-3", 4, "ngIf"], [1, "nav-item", "topmenu-li", "pe-3", "ps-3"], [1, "nav-link", "nav-topmenu", "d-flex", "cursor-pointer", 3, "click"], [1, "BD-top-span"], [4, "ngIf"]],
  template: function StrayModuleComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section")(1, "div", 0)(2, "div", 1)(3, "h5", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Welcome to Stray Entry Module");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "nav", 3)(6, "ul", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, StrayModuleComponent_li_7_Template, 4, 0, "li", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li", 6)(9, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StrayModuleComponent_Template_a_click_9_listener() {
        return ctx.assignComponent("QueryComponent", "");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Query");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li", 6)(13, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StrayModuleComponent_Template_a_click_13_listener() {
        return ctx.assignComponent("DownloadCSVComponent", "");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Download CSV");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "section");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, StrayModuleComponent__app_app_stray_entry_17_Template, 1, 0, "app-stray-entry", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, StrayModuleComponent__app_app_stray_update_18_Template, 1, 0, "app-stray-update", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, StrayModuleComponent__app_app_query_19_Template, 1, 0, "app-query", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, StrayModuleComponent__app_app_mass_update_20_Template, 1, 0, "app-mass-update", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, StrayModuleComponent__app_app_download_csv_21_Template, 1, 0, "app-download-csv", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showEntryFormAsPerRole);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.activeComponent == "StrayEntryComponent");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.activeComponent == "StrayUpdateComponent");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.activeComponent == "QueryComponent");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.activeComponent == "MassUpdateComponent");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.activeComponent == "DownloadCSVComponent");
    }
  },
  styles: [".header-nav[_ngcontent-%COMP%]   .topmenu-dropdown[_ngcontent-%COMP%] {\r\n    min-width: 150px;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9zdHJheS1tb2R1bGUvc3RyYXktbW9kdWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLW5hdiAudG9wbWVudS1kcm9wZG93biB7XHJcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 7960:
/*!*******************************************************************!*\
  !*** ./src/app/components/stray-update/stray-update.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StrayUpdateComponent": () => (/* binding */ StrayUpdateComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.constants */ 2976);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ 6908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_shared_services_stray_module_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/stray.module.service */ 52);
/* harmony import */ var bd_common_lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bd-common-lib */ 8919);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);








class StrayUpdateComponent {
  constructor(fb, strayModuleService, alert, ngbCalendar, dateAdapter, crypto) {
    this.fb = fb;
    this.strayModuleService = strayModuleService;
    this.alert = alert;
    this.ngbCalendar = ngbCalendar;
    this.dateAdapter = dateAdapter;
    this.crypto = crypto;
    this.editStrayNo = '';
    this.months = [undefined, 'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    this.empCode = '';
    this.empLocArea = '';
  }
  ngOnInit() {
    this.empCode = this.crypto.decryptionAES(sessionStorage.getItem('empCode'));
    this.empLocArea = this.crypto.decryptionAES(sessionStorage.getItem('empLocArea'));
    this.createForm();
  }
  createForm() {
    this.strayEntryForm = this.fb.group({
      mdstraydate: [[_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
      mcstrayloc: [this.empLocArea, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
      mcpackdesc: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
      mcvehicleno: [''],
      mcroute: [''],
      mcawbno: [''],
      mcstatus: [''],
      mcremarks: ['']
    });
  }
  onSubmit() {
    //alert(this.strayEntryForm.controls['mdstraydate'].value);
    let strayDTMonth = this.months[Number(this.strayEntryForm.controls['mdstraydate'].value.trim().split("-")[1])];
    let strayDTDate = this.strayEntryForm.controls['mdstraydate'].value.split("-")[0] + '-' + strayDTMonth + '-' + this.strayEntryForm.controls['mdstraydate'].value.split("-")[2];
    let requestBody = {
      ...this.strayEntryForm.value,
      mdstraydate: strayDTDate,
      mcstrayno: this.editStrayNo,
      mcSubmit: 'mcSubmit',
      mcEmplCode: this.empCode
    };
    console.log(requestBody);
    this.strayModuleService.postDetails(requestBody, src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.STRAY_ENTRY).subscribe(res => {
      console.log(res);
      if (res.result) {
        if (res.result.cvalidFlag === 'Y') {
          this.alert.showSuccess('Data Saved Successfully', 'toast-bottom-right');
          this.strayEntryForm.reset();
          this.strayEntryForm.patchValue({
            mdstraydate: [moment__WEBPACK_IMPORTED_MODULE_1__(new Date()).format('DD-MM-YYYY')],
            mcstrayloc: [this.empLocArea, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]]
          });
        } else {
          this.alert.showError(res.result.errormsg, 'toast-bottom-right');
        }
      }
    }, err => {
      this.alert.showError('Error occured try again!!', 'toast-bottom-right');
    });
  }
  setEditForm(data) {
    this.editStrayNo = data.cstrayno;
    this.strayEntryForm.patchValue({
      mcstrayloc: data.cstrayloc
    });
  }
}
StrayUpdateComponent.ɵfac = function StrayUpdateComponent_Factory(t) {
  return new (t || StrayUpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_stray_module_service__WEBPACK_IMPORTED_MODULE_2__.StrayModuleService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](bd_common_lib__WEBPACK_IMPORTED_MODULE_5__.NotificationAlertService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbCalendar), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDateAdapter), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](bd_common_lib__WEBPACK_IMPORTED_MODULE_5__.AESEncryptDecryptService));
};
StrayUpdateComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: StrayUpdateComponent,
  selectors: [["app-stray-update"]],
  decls: 75,
  vars: 3,
  consts: [[1, "section", "dashboard"], [1, "row"], [1, "col-lg-12"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "bd-form", 3, "formGroup", "ngSubmit"], [1, "col-md-6"], ["for", "mcstrayloc", 1, "col-sm-4", "col-form-label"], [1, "col-sm-8", "bd-inputfield"], ["for", "strayDate", 1, "col-sm-4", "col-form-label"], ["type", "text", "formControlName", "mdstraydate", "ngbDatepicker", "", "tabindex", "1", "placeholder", "dd-mm-yyyy", 1, "form-control", 3, "click"], ["mdstraydate", "ngbDatepicker"], ["type", "text", "formControlName", "mcstrayloc", "maxlength", "3", 1, "form-control", "text-uppercase"], ["for", "packdesc", 1, "col-sm-4", "col-form-label"], [1, "col-sm-8", "bd-inputfield", "mb-1"], ["formControlName", "mcpackdesc", "rows", "7", "cols", "75", "maxlength", "10000", 1, "form-control"], ["for", "mcvehicleno", 1, "col-sm-4", "col-form-label"], ["type", "text", "formControlName", "mcvehicleno", "maxlength", "30", 1, "form-control"], ["for", "mcroute", 1, "col-sm-4", "col-form-label"], ["type", "text", "formControlName", "mcroute", "maxlength", "10", 1, "form-control"], ["for", "mcawbno", 1, "col-sm-4", "col-form-label"], ["type", "text", "formControlName", "mcawbno", "maxlength", "12", 1, "form-control"], ["for", "status", 1, "col-sm-4", "col-form-label"], ["name", "mcstatus", "formControlName", "mcstatus", 1, "form-select"], ["selected", "", "value", "C"], ["value", "O"], ["for", "mcremarks ", 1, "col-sm-4", "col-form-label"], ["type", "text", "formControlName", "mcremarks", "maxlength", "100", 1, "form-control"], [1, "col-md-12", "p-0"], [1, "mt-3", "btn-groups"], ["type", "submit", 1, "btn", "btn-sm", "btn-primary", 3, "disabled"]],
  template: function StrayUpdateComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 1)(4, "div", 2)(5, "div", 3)(6, "div", 4)(7, "h5", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Stray Entry");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "form", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function StrayUpdateComponent_Template_form_ngSubmit_9_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 7)(11, "div", 1)(12, "label", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Stray No");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 7)(17, "div", 1)(18, "label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Stray Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 9)(21, "input", 11, 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function StrayUpdateComponent_Template_input_click_21_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](22);
        return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r0.toggle());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 7)(24, "div", 1)(25, "label", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Stray Loc");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 7)(30, "div", 1)(31, "label", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "Pack Desc");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](34, "textarea", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 7)(36, "div", 1)(37, "label", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "Vehicle No");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](40, "input", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div", 7)(42, "div", 1)(43, "label", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "Route");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](46, "input", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "div", 7)(48, "div", 1)(49, "label", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, "Awb No");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](52, "input", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "div", 7)(54, "div", 1)(55, "label", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56, "Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "div", 9)(58, "select", 24)(59, "option", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](60, "Closed");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "option", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](62, "Open");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "div", 7)(64, "div", 1)(65, "label", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](66, "Remarks");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](68, "input", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "div", 29)(70, "div", 1)(71, "div", 29)(72, "div", 30)(73, "button", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](74, "Submit");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.strayEntryForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.editStrayNo, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](58);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.strayEntryForm.invalid);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbInputDatepicker],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});
StrayUpdateComponent.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: StrayUpdateComponent,
  factory: StrayUpdateComponent.ɵfac
});

/***/ }),

/***/ 5749:
/*!**************************************************!*\
  !*** ./src/app/pack-stay/pack-stay.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PackStayComponent": () => (/* binding */ PackStayComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class PackStayComponent {
  constructor() {
    this.packstay = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroup({});
  }
}
PackStayComponent.ɵfac = function PackStayComponent_Factory(t) {
  return new (t || PackStayComponent)();
};
PackStayComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: PackStayComponent,
  selectors: [["app-pack-stay"]],
  decls: 0,
  vars: 0,
  template: function PackStayComponent_Template(rf, ctx) {},
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
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

/***/ 9366:
/*!******************************************************************************************!*\
  !*** ./src/app/shared/components/un-authorized-access/un-authorized-access.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnAuthorizedAccessComponent": () => (/* binding */ UnAuthorizedAccessComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class UnAuthorizedAccessComponent {}
UnAuthorizedAccessComponent.ɵfac = function UnAuthorizedAccessComponent_Factory(t) {
  return new (t || UnAuthorizedAccessComponent)();
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
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "You are un-authorized to view this page or your auth tokent has expired. Please login again to view.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
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
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app.constants */ 2976);
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
    if (_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.Environment.toString().trim() !== 'Localhost') {
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
      }
    }, error => {
      this.loaderService.hide();
      this.notify.showError(error?.error?.error, 'toast-bottom-right');
      if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpResponse) {}
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

/***/ 6113:
/*!*************************************************!*\
  !*** ./src/app/shared/services/capx.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CapxService": () => (/* binding */ CapxService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9337);
/* harmony import */ var src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.constants */ 2976);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);




class CapxService {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  postDetails(payload, endPoint) {
    return this.httpClient.post(endPoint, payload);
  }
  GetCapaxDetails(body) {
    return this.httpClient.post(src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.CAPEX + '/paraForm', {
      params: body
    });
  }
  GetDrpDetails(body) {
    return this.httpClient.post(src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.CAPEX + '/getparaformreg', {
      params: body
    });
  }
  GetRegDetails(body) {
    return this.httpClient.get(src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.CAPEX + '/getparaformreg', {});
  }
  GetLocDetails1(body) {
    return this.httpClient.get(src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.CAPEX + '/getparaformloc', {});
  }
  GetLocDetails(region) {
    return this.httpClient.get(src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.CAPEX + '/getparaformloc?pcloccd=' + region).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.tap)());
  }
  GetAreaDetails1(body) {
    return this.httpClient.get(src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.CAPEX + '/getparaformarea', {});
  }
  GetAreaDetails(region) {
    return this.httpClient.get(src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.CAPEX + '/getparaformarea?pcloccd=' + region).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.tap)());
  }
}
CapxService.ɵfac = function CapxService_Factory(t) {
  return new (t || CapxService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
};
CapxService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: CapxService,
  factory: CapxService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 529:
/*!*********************************************************!*\
  !*** ./src/app/shared/services/csv.download.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CsvService": () => (/* binding */ CsvService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class CsvService {
  exportToCsv(filename, rows) {
    if (!rows || !rows.length) {
      return;
    }
    const separator = ',';
    const keys = Object.keys(rows[0]);
    const csvContent = keys.join(separator) + '\n' + rows.map(row => {
      return keys.map(k => {
        let cell = row[k] === null || row[k] === undefined ? '' : row[k];
        cell = cell instanceof Date ? cell.toLocaleString() : cell.toString().replace(/"/g, '""');
        if (cell.search(/("|,|\n)/g) >= 0) {
          cell = `"${cell}"`;
        }
        return cell;
      }).join(separator);
    }).join('\n');
    const blob = new Blob([csvContent], {
      type: 'text/csv;charset=utf-8;'
    });
    if (navigator.msSaveBlob) {
      // IE 10+
      navigator.msSaveBlob(blob, filename);
    } else {
      const link = document.createElement('a');
      if (link.download !== undefined) {
        // Browsers that support HTML5 download attribute
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', filename);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }
  }
}
CsvService.ɵfac = function CsvService_Factory(t) {
  return new (t || CsvService)();
};
CsvService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: CsvService,
  factory: CsvService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 6595:
/*!*******************************************************!*\
  !*** ./src/app/shared/services/datepicker-adapter.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomAdapter": () => (/* binding */ CustomAdapter),
/* harmony export */   "CustomDateParserFormatter": () => (/* binding */ CustomDateParserFormatter)
/* harmony export */ });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class CustomAdapter extends _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__.NgbDateAdapter {
  constructor() {
    super(...arguments);
    this.DELIMITER = '-';
  }
  fromModel(value) {
    if (value) {
      const date = value.split(this.DELIMITER);
      return {
        day: parseInt(date[0], 10),
        month: parseInt(date[1], 10),
        year: parseInt(date[2], 10)
      };
    }
    return null;
  }
  toModel(date) {
    return date ? date.day + this.DELIMITER + date.month + this.DELIMITER + date.year : null;
  }
}
/**
 * This Service handles how the date is rendered and parsed from keyboard i.e. in the bound input field.
 */
CustomAdapter.ɵfac = /*@__PURE__*/function () {
  let ɵCustomAdapter_BaseFactory;
  return function CustomAdapter_Factory(t) {
    return (ɵCustomAdapter_BaseFactory || (ɵCustomAdapter_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](CustomAdapter)))(t || CustomAdapter);
  };
}();
CustomAdapter.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: CustomAdapter,
  factory: CustomAdapter.ɵfac
});
class CustomDateParserFormatter extends _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__.NgbDateParserFormatter {
  constructor() {
    super(...arguments);
    this.DELIMITER = '-';
  }
  parse(value) {
    if (value) {
      const date = value.split(this.DELIMITER);
      return {
        day: parseInt(date[0], 10),
        month: parseInt(date[1], 10),
        year: parseInt(date[2], 10)
      };
    }
    return null;
  }
  format(date) {
    return date ? (date.day <= 9 ? '0' + date.day : date.day) + this.DELIMITER + (date.month <= 9 ? '0' + date.month : date.month) + this.DELIMITER + date.year : '';
  }
}
CustomDateParserFormatter.ɵfac = /*@__PURE__*/function () {
  let ɵCustomDateParserFormatter_BaseFactory;
  return function CustomDateParserFormatter_Factory(t) {
    return (ɵCustomDateParserFormatter_BaseFactory || (ɵCustomDateParserFormatter_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](CustomDateParserFormatter)))(t || CustomDateParserFormatter);
  };
}();
CustomDateParserFormatter.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: CustomDateParserFormatter,
  factory: CustomDateParserFormatter.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 1771:
/*!****************************************************************!*\
  !*** ./src/app/shared/services/notification.module.service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationModuleService": () => (/* binding */ NotificationModuleService)
/* harmony export */ });
/* harmony import */ var src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.constants */ 2976);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class NotificationModuleService {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  postDetails(payload, endPoint) {
    return this.httpClient.post(endPoint, payload);
  }
  GetNotificationDetails(body) {
    return this.httpClient.post(src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.NOTIFICATION_TYPE, {
      params: body
    });
  }
}
NotificationModuleService.ɵfac = function NotificationModuleService_Factory(t) {
  return new (t || NotificationModuleService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
NotificationModuleService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: NotificationModuleService,
  factory: NotificationModuleService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 52:
/*!*********************************************************!*\
  !*** ./src/app/shared/services/stray.module.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StrayModuleService": () => (/* binding */ StrayModuleService)
/* harmony export */ });
/* harmony import */ var src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.constants */ 2976);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class StrayModuleService {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  postDetails(payload, endPoint) {
    return this.httpClient.post(endPoint, payload);
  }
  postScheduleDetails(payload) {
    return this.httpClient.post(src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.SCHEDULER, payload);
  }
  postViewDetails(payload) {
    return this.httpClient.post(src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.SCHEDULER, payload);
  }
}
StrayModuleService.ɵfac = function StrayModuleService_Factory(t) {
  return new (t || StrayModuleService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
StrayModuleService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: StrayModuleService,
  factory: StrayModuleService.ɵfac,
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
  Environment: `Development`,
  apiUrl: 'https://gateway-ecs-enterprise-portal-dev.apps.mykulocp001.dhl.com',
  userLoginUrl: 'https://entportaldev-bluedart.dhl.com'
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
/// <reference types="@angular/localize" />


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
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(6344), __webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map