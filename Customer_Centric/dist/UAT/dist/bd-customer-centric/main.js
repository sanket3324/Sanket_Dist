"use strict";
(self["webpackChunkBD_CustomerCentric"] = self["webpackChunkBD_CustomerCentric"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_callbridge_callbridge_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/callbridge/callbridge.component */ 8638);
/* harmony import */ var _components_channel_sales_report_channel_sales_report_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/channel-sales-report/channel-sales-report.component */ 6929);
/* harmony import */ var _components_cockpit_summary_cockpit_summary_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/cockpit-summary/cockpit-summary.component */ 9416);
/* harmony import */ var _components_cust_variance_cust_variance_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/cust-variance/cust-variance.component */ 7394);
/* harmony import */ var _components_customer_centric_customer_centric_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/customer-centric/customer-centric.component */ 3088);
/* harmony import */ var _components_dhldgf_report_dhldgf_report_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/dhldgf-report/dhldgf-report.component */ 4186);
/* harmony import */ var _components_edp_reports_edp_reports_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/edp-reports/edp-reports.component */ 2302);
/* harmony import */ var _components_etail_tracker_etail_tracker_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/etail-tracker/etail-tracker.component */ 9252);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/home/home.component */ 8263);
/* harmony import */ var _components_industry_verticals_industry_verticals_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/industry-verticals/industry-verticals.component */ 3916);
/* harmony import */ var _components_kam_actual_vs_target_kam_actual_vs_target_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/kam-actual-vs-target/kam-actual-vs-target.component */ 6864);
/* harmony import */ var _components_kam_customer_growth_kam_customer_growth_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/kam-customer-growth/kam-customer-growth.component */ 4383);
/* harmony import */ var _components_kam_region_growth_kam_region_growth_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/kam-region-growth/kam-region-growth.component */ 8544);
/* harmony import */ var _components_marketing_reports_marketing_reports_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/marketing-reports/marketing-reports.component */ 6232);
/* harmony import */ var _components_product_yield_report_product_yield_report_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/product-yield-report/product-yield-report.component */ 2597);
/* harmony import */ var _components_ITC_Undelivered_ITC_Undelivered_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/ITC_Undelivered/ITC_Undelivered.component */ 9373);
/* harmony import */ var _components_members_members_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/members/members.component */ 8440);
/* harmony import */ var _components_ndr_action_due_ndr_action_due_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/ndr-action-due/ndr-action-due.component */ 5485);
/* harmony import */ var _components_ops_mbo_ops_mbo_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/ops-mbo/ops-mbo.component */ 9335);
/* harmony import */ var _shared_layout_logged_out_logged_out_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/layout/logged-out/logged-out.component */ 3842);
/* harmony import */ var _shared_layout_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shared/layout/page-not-found/page-not-found.component */ 742);
/* harmony import */ var _shared_layout_un_authorized_access_un_authorized_access_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shared/layout/un-authorized-access/un-authorized-access.component */ 7923);
/* harmony import */ var _components_shipping_pattern_shipping_pattern_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/shipping-pattern/shipping-pattern.component */ 5441);
/* harmony import */ var _components_sales_sales_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/sales/sales.component */ 8230);
/* harmony import */ var _components_service_quality_service_quality_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/service-quality/service-quality.component */ 9642);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/core */ 2560);




























const routes = [{
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
}, {
  path: 'un-authorized-access',
  component: _shared_layout_un_authorized_access_un_authorized_access_component__WEBPACK_IMPORTED_MODULE_21__.UnAuthorizedAccessComponent
}, {
  path: 'logged-out',
  component: _shared_layout_logged_out_logged_out_component__WEBPACK_IMPORTED_MODULE_19__.LoggedOutComponent
}, {
  path: 'home',
  component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__.HomeComponent
}, {
  path: 'cust-variance',
  component: _components_cust_variance_cust_variance_component__WEBPACK_IMPORTED_MODULE_3__.CustVarianceComponent
}, {
  path: 'industry-verticals',
  component: _components_industry_verticals_industry_verticals_component__WEBPACK_IMPORTED_MODULE_9__.IndustryVerticalsComponent
}, {
  path: 'ops-mbo',
  component: _components_ops_mbo_ops_mbo_component__WEBPACK_IMPORTED_MODULE_18__.OpsMboComponent
}, {
  path: 'call-Bridge',
  component: _components_callbridge_callbridge_component__WEBPACK_IMPORTED_MODULE_0__.CallbridgeComponent
}, {
  path: 'dhldgf-report',
  component: _components_dhldgf_report_dhldgf_report_component__WEBPACK_IMPORTED_MODULE_5__.DhldgfReportComponent
}, {
  path: 'marketing-reports',
  component: _components_marketing_reports_marketing_reports_component__WEBPACK_IMPORTED_MODULE_13__.MarketingReportsComponent
}, {
  path: 'etail-tracker',
  component: _components_etail_tracker_etail_tracker_component__WEBPACK_IMPORTED_MODULE_7__.EtailTrackerComponent
}, {
  path: 'cockpit-summary',
  component: _components_cockpit_summary_cockpit_summary_component__WEBPACK_IMPORTED_MODULE_2__.CockpitSummaryComponent
}, {
  path: 'channel-sales-report',
  component: _components_channel_sales_report_channel_sales_report_component__WEBPACK_IMPORTED_MODULE_1__.ChannelSalesReportComponent
}, {
  path: 'kam-customer-growth',
  component: _components_kam_customer_growth_kam_customer_growth_component__WEBPACK_IMPORTED_MODULE_11__.KamCustomerGrowthComponent
}, {
  path: 'kam-region-growth',
  component: _components_kam_region_growth_kam_region_growth_component__WEBPACK_IMPORTED_MODULE_12__.KamRegionGrowthComponent
}, {
  path: 'kam-actualsvstarget',
  component: _components_kam_actual_vs_target_kam_actual_vs_target_component__WEBPACK_IMPORTED_MODULE_10__.KamActualVsTargetComponent
}, {
  path: 'product-yield-report',
  component: _components_product_yield_report_product_yield_report_component__WEBPACK_IMPORTED_MODULE_14__.ProductYieldReportComponent
}, {
  path: 'ITC_Undelivered',
  component: _components_ITC_Undelivered_ITC_Undelivered_component__WEBPACK_IMPORTED_MODULE_15__.ITC_UndeliveredComponent
}, {
  path: 'members',
  component: _components_members_members_component__WEBPACK_IMPORTED_MODULE_16__.MembersComponent
}, {
  path: 'ndr-action-due',
  component: _components_ndr_action_due_ndr_action_due_component__WEBPACK_IMPORTED_MODULE_17__.NdrActionDueComponent
}, {
  path: 'edp-reports',
  component: _components_edp_reports_edp_reports_component__WEBPACK_IMPORTED_MODULE_6__.EdpReportsComponent
}, {
  path: 'customer-centric',
  component: _components_customer_centric_customer_centric_component__WEBPACK_IMPORTED_MODULE_4__.CustomerCentricComponent
}, {
  path: 'shipping-pattern',
  component: _components_shipping_pattern_shipping_pattern_component__WEBPACK_IMPORTED_MODULE_22__.ShippingPatternComponent
}, {
  path: 'sales',
  component: _components_sales_sales_component__WEBPACK_IMPORTED_MODULE_23__.SalesComponent
}, {
  path: 'service-quality',
  component: _components_service_quality_service_quality_component__WEBPACK_IMPORTED_MODULE_24__.ServiceQualityComponent
}, {
  path: "**",
  component: _shared_layout_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_20__.PageNotFoundComponent
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_26__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_26__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_26__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_26__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
    this.title = 'BD-CustomerCentric';
    this.isUserLoggedIn = false;
    if (sessionStorage.getItem('empCode') != null) {
      //    logged in so return true
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var bd_common_lib__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! bd-common-lib */ 8919);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _shared_layout_logged_out_logged_out_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/layout/logged-out/logged-out.component */ 3842);
/* harmony import */ var _shared_layout_nav_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/layout/nav/nav.component */ 9774);
/* harmony import */ var _shared_layout_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/layout/page-not-found/page-not-found.component */ 742);
/* harmony import */ var _shared_layout_un_authorized_access_un_authorized_access_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/layout/un-authorized-access/un-authorized-access.component */ 7923);
/* harmony import */ var _components_cust_variance_cust_variance_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/cust-variance/cust-variance.component */ 7394);
/* harmony import */ var _components_industry_verticals_industry_verticals_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/industry-verticals/industry-verticals.component */ 3916);
/* harmony import */ var _components_ops_mbo_ops_mbo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/ops-mbo/ops-mbo.component */ 9335);
/* harmony import */ var _components_callbridge_callbridge_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/callbridge/callbridge.component */ 8638);
/* harmony import */ var _components_dhldgf_report_dhldgf_report_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/dhldgf-report/dhldgf-report.component */ 4186);
/* harmony import */ var _components_marketing_reports_marketing_reports_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/marketing-reports/marketing-reports.component */ 6232);
/* harmony import */ var _components_etail_tracker_etail_tracker_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/etail-tracker/etail-tracker.component */ 9252);
/* harmony import */ var _components_cockpit_summary_cockpit_summary_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/cockpit-summary/cockpit-summary.component */ 9416);
/* harmony import */ var _components_channel_sales_report_channel_sales_report_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/channel-sales-report/channel-sales-report.component */ 6929);
/* harmony import */ var _components_edp_reports_edp_reports_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/edp-reports/edp-reports.component */ 2302);
/* harmony import */ var _components_kam_customer_growth_kam_customer_growth_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/kam-customer-growth/kam-customer-growth.component */ 4383);
/* harmony import */ var _components_kam_region_growth_kam_region_growth_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/kam-region-growth/kam-region-growth.component */ 8544);
/* harmony import */ var _components_kam_actual_vs_target_kam_actual_vs_target_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/kam-actual-vs-target/kam-actual-vs-target.component */ 6864);
/* harmony import */ var _components_product_yield_report_product_yield_report_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/product-yield-report/product-yield-report.component */ 2597);
/* harmony import */ var _components_ITC_Undelivered_ITC_Undelivered_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/ITC_Undelivered/ITC_Undelivered.component */ 9373);
/* harmony import */ var _components_members_members_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/members/members.component */ 8440);
/* harmony import */ var _components_ndr_action_due_ndr_action_due_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/ndr-action-due/ndr-action-due.component */ 5485);
/* harmony import */ var _components_customer_centric_customer_centric_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/customer-centric/customer-centric.component */ 3088);
/* harmony import */ var _components_shipping_pattern_shipping_pattern_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/shipping-pattern/shipping-pattern.component */ 5441);
/* harmony import */ var _components_sales_sales_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/sales/sales.component */ 8230);
/* harmony import */ var _components_service_quality_service_quality_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/service-quality/service-quality.component */ 9642);
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./shared/components/loader/loader.component */ 605);
/* harmony import */ var ngx_loading__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ngx-loading */ 2517);
/* harmony import */ var _shared_http_interceptor__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./shared/http-interceptor */ 674);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/core */ 2560);





































class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdefineInjector"]({
  providers: [{
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_30__.HTTP_INTERCEPTORS,
    useClass: _shared_http_interceptor__WEBPACK_IMPORTED_MODULE_28__.APIInterceptor,
    multi: true
  }],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_31__.BrowserModule, _angular_common__WEBPACK_IMPORTED_MODULE_32__.CommonModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, bd_common_lib__WEBPACK_IMPORTED_MODULE_33__.BDCommonLibModule, _angular_forms__WEBPACK_IMPORTED_MODULE_34__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_30__.HttpClientModule, ngx_loading__WEBPACK_IMPORTED_MODULE_35__.NgxLoadingModule.forRoot({})]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _shared_layout_nav_nav_component__WEBPACK_IMPORTED_MODULE_3__.NavComponent, _shared_layout_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__.PageNotFoundComponent, _shared_layout_un_authorized_access_un_authorized_access_component__WEBPACK_IMPORTED_MODULE_5__.UnAuthorizedAccessComponent, _shared_layout_logged_out_logged_out_component__WEBPACK_IMPORTED_MODULE_2__.LoggedOutComponent, _components_cust_variance_cust_variance_component__WEBPACK_IMPORTED_MODULE_6__.CustVarianceComponent, _components_industry_verticals_industry_verticals_component__WEBPACK_IMPORTED_MODULE_7__.IndustryVerticalsComponent, _components_ops_mbo_ops_mbo_component__WEBPACK_IMPORTED_MODULE_8__.OpsMboComponent, _components_callbridge_callbridge_component__WEBPACK_IMPORTED_MODULE_9__.CallbridgeComponent, _components_dhldgf_report_dhldgf_report_component__WEBPACK_IMPORTED_MODULE_10__.DhldgfReportComponent, _components_marketing_reports_marketing_reports_component__WEBPACK_IMPORTED_MODULE_11__.MarketingReportsComponent, _components_etail_tracker_etail_tracker_component__WEBPACK_IMPORTED_MODULE_12__.EtailTrackerComponent, _components_cockpit_summary_cockpit_summary_component__WEBPACK_IMPORTED_MODULE_13__.CockpitSummaryComponent, _components_channel_sales_report_channel_sales_report_component__WEBPACK_IMPORTED_MODULE_14__.ChannelSalesReportComponent, _components_edp_reports_edp_reports_component__WEBPACK_IMPORTED_MODULE_15__.EdpReportsComponent, _components_kam_customer_growth_kam_customer_growth_component__WEBPACK_IMPORTED_MODULE_16__.KamCustomerGrowthComponent, _components_kam_region_growth_kam_region_growth_component__WEBPACK_IMPORTED_MODULE_17__.KamRegionGrowthComponent, _components_kam_actual_vs_target_kam_actual_vs_target_component__WEBPACK_IMPORTED_MODULE_18__.KamActualVsTargetComponent, _components_product_yield_report_product_yield_report_component__WEBPACK_IMPORTED_MODULE_19__.ProductYieldReportComponent, _components_ITC_Undelivered_ITC_Undelivered_component__WEBPACK_IMPORTED_MODULE_20__.ITC_UndeliveredComponent, _components_members_members_component__WEBPACK_IMPORTED_MODULE_21__.MembersComponent, _components_ndr_action_due_ndr_action_due_component__WEBPACK_IMPORTED_MODULE_22__.NdrActionDueComponent, _components_customer_centric_customer_centric_component__WEBPACK_IMPORTED_MODULE_23__.CustomerCentricComponent, _components_shipping_pattern_shipping_pattern_component__WEBPACK_IMPORTED_MODULE_24__.ShippingPatternComponent, _components_sales_sales_component__WEBPACK_IMPORTED_MODULE_25__.SalesComponent, _components_service_quality_service_quality_component__WEBPACK_IMPORTED_MODULE_26__.ServiceQualityComponent, _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_27__.LoaderComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_31__.BrowserModule, _angular_common__WEBPACK_IMPORTED_MODULE_32__.CommonModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, bd_common_lib__WEBPACK_IMPORTED_MODULE_33__.BDCommonLibModule, _angular_forms__WEBPACK_IMPORTED_MODULE_34__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_30__.HttpClientModule, ngx_loading__WEBPACK_IMPORTED_MODULE_35__.NgxLoadingModule]
  });
})();

/***/ }),

/***/ 9373:
/*!*************************************************************************!*\
  !*** ./src/app/components/ITC_Undelivered/ITC_Undelivered.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ITC_UndeliveredComponent": () => (/* binding */ ITC_UndeliveredComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var src_app_shared_services_global_var__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/global-var */ 2480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_Sales_Sales_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/Sales/Sales.service */ 7065);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var bd_common_lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bd-common-lib */ 8919);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);







function ITC_UndeliveredComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9)(1, "div", 3)(2, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "User Submitted Data URL");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "textarea", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
}
class ITC_UndeliveredComponent {
  constructor(salesService, fb, encrypt, renderer, alert) {
    this.salesService = salesService;
    this.fb = fb;
    this.encrypt = encrypt;
    this.renderer = renderer;
    this.alert = alert;
    this.geoList = [];
    this.hideURL = false;
  }
  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.ITC_UndeliveredForm = this.fb.group({
      mcURL: []
    });
  }
  myReportsFun() {
    var rtypevar = null;
    var rvaluevar = null;
    var rapplid = "0002";
    let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
    queryParams = queryParams.append('puid', this.encrypt.decryptionAES(src_app_shared_services_global_var__WEBPACK_IMPORTED_MODULE_0__.GlobalVar.EmpCode));
    queryParams = queryParams.append('papplid', rapplid);
    this.salesService.getAllGeoDetails(queryParams).subscribe(res => {
      if (res.result) {
        this.geoList = res.result.geoAccessList;
        rtypevar = this.geoList[0].CGEOTYPE;
        rvaluevar = this.geoList[0].CGEOACCESS;
        var ALLSTR = "&tRtype=" + rtypevar + "&tRvalue=" + rvaluevar;
        var baseUrl = this.encrypt.decryptionAES(sessionStorage.getItem('reporturl')) + '/Resources/UserData/reportuser/ITCUDSUM.rptdesign' + ALLSTR;
        this.ITC_UndeliveredForm.patchValue({
          mcURL: baseUrl
        });
        window.open(baseUrl, '_blank');
      }
    });
  }
}
ITC_UndeliveredComponent.ɵfac = function ITC_UndeliveredComponent_Factory(t) {
  return new (t || ITC_UndeliveredComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_Sales_Sales_service__WEBPACK_IMPORTED_MODULE_1__.SalesService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](bd_common_lib__WEBPACK_IMPORTED_MODULE_5__.AESEncryptDecryptService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](bd_common_lib__WEBPACK_IMPORTED_MODULE_5__.NotificationAlertService));
};
ITC_UndeliveredComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ITC_UndeliveredComponent,
  selectors: [["app-ITC_Undelivered"]],
  decls: 19,
  vars: 2,
  consts: [[1, "content-tophead", "align-items-baseline"], [1, "pagetitle"], [1, "section", "dashboard"], [1, "row"], [1, "col-lg-12"], [1, "card"], [1, "card-body"], [1, "card-title"], ["method", "post", 1, "row", "bd-form", 3, "formGroup"], [1, "col-md-12"], [1, "btn-groups", "mt-3", "ms-0"], [1, "btn", "btn-sm", "btn-primary", 3, "click"], ["class", "col-md-12", 4, "ngIf"], ["for", ""], ["formControlName", "mcURL", "id", "cmultiple", "rows", "4", "cols", "100", 1, "form-select"]],
  template: function ITC_UndeliveredComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Customer Centric");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "section", 2)(5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "h5", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "ITC Undelivered");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "form", 8)(12, "div", 9)(13, "div", 10)(14, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ITC_UndeliveredComponent_Template_button_click_14_listener() {
        return ctx.myReportsFun();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Generate Report");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "pre")(17, "pre");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, ITC_UndeliveredComponent_div_18_Template, 6, 0, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.ITC_UndeliveredForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.hideURL);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8638:
/*!***************************************************************!*\
  !*** ./src/app/components/callbridge/callbridge.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CallbridgeComponent": () => (/* binding */ CallbridgeComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var src_app_shared_services_global_var__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/global-var */ 2480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_CallBridge_CallBridge_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/CallBridge/CallBridge.service */ 729);
/* harmony import */ var bd_common_lib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bd-common-lib */ 8919);









function CallbridgeComponent_div_27_option_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const cal_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", cal_r7.CNAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", cal_r7.CNAME, " ");
  }
}
function CallbridgeComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10)(1, "div", 3)(2, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Report Month");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 12)(5, "select", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, CallbridgeComponent_div_27_option_6_Template, 2, 2, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.calanderList);
  }
}
function CallbridgeComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10)(1, "div", 3)(2, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Customer Group");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 12)(5, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keypress", function CallbridgeComponent_div_28_Template_input_keypress_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r8.numberOnly($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
}
function CallbridgeComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10)(1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 29)(6, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CallbridgeComponent_div_29_Template_a_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r10.onFetechCustGroup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Search");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CallbridgeComponent_div_29_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r12.callBridgeForm.reset());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Reset");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
}
function CallbridgeComponent_div_30_option_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const cal_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", cal_r14.CVALUE);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", cal_r14.CVALUE, " ");
  }
}
function CallbridgeComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10)(1, "div", 3)(2, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Location");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 12)(5, "select", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, CallbridgeComponent_div_30_option_6_Template, 2, 2, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.locationList);
  }
}
function CallbridgeComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10)(1, "div", 3)(2, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "OUTSCAN DATE");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
}
function CallbridgeComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18)(1, "div", 3)(2, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "User Submitted Data URL");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "textarea", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
}
class CallbridgeComponent {
  constructor(callBridgeService, fb, encrypt, alert) {
    this.callBridgeService = callBridgeService;
    this.fb = fb;
    this.encrypt = encrypt;
    this.alert = alert;
    this.prev1StartDate = new Date(new Date().getFullYear(), new Date().getMonth() - 1, 1);
    this.prev2StartDate = new Date(new Date().getFullYear(), new Date().getMonth() - 2, 1);
    this.currentDate = new Date();
    this.CurrMonthandYear = (0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.formatDate)(new Date(), 'MMMyyyy', 'en-US');
    this.Prev1MonthandYear = (0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.formatDate)(this.prev1StartDate, 'MMMyyyy', 'en-US');
    this.Prev2MonthandYear = (0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.formatDate)(this.prev2StartDate, 'MMMyyyy', 'en-US');
    //callBridgeForm!: FormGroup;
    this.callBridgeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({});
    this.callBridgeData = [];
    this.geoList = [];
    this.locationList = [];
    this.CustGroupList = [];
    this.templateError = '';
    this.mcSearchtext = '';
    this.mcCustomerGroup = '';
    this.calanderList = [];
    this.hideURL = false;
    this.ReportMonthShow = false;
    this.CustGroupShow = false;
    this.CustGroupShow1 = false;
    this.LocationShow = false;
    this.OUTSCANDATEshow = false;
  }
  ngOnInit() {
    this.createForm();
    this.ReportMonthShow = true;
    this.CustGroupShow = true;
    this.CustGroupShow1 = true;
    this.LocationShow = false;
    this.OUTSCANDATEshow = false;
    this.getCalanderDetails();
  }
  createForm() {
    this.callBridgeForm = this.fb.group({
      mcURL: [],
      mcCustomer: ['CUS'],
      mcRMonth: [this.CurrMonthandYear.toUpperCase()],
      mcCustomerGroup: [],
      mcSearchtext: [],
      mcLocation: [],
      PDATE: []
    });
  }
  toggleTypes(item) {
    if (item.target.value == "CUS") {
      this.ReportMonthShow = true;
      this.CustGroupShow = true;
      this.CustGroupShow1 = true;
      this.LocationShow = false;
      this.OUTSCANDATEshow = false;
    } else if (item.target.value == "EMP") {
      this.ReportMonthShow = false;
      this.CustGroupShow = false;
      this.CustGroupShow1 = false;
      this.LocationShow = true;
      this.OUTSCANDATEshow = true;
      this.getLocationDetails();
    } else if (item.target.value == "QRY") {
      this.ReportMonthShow = false;
      this.CustGroupShow = false;
      this.CustGroupShow1 = false;
      this.LocationShow = false;
      this.OUTSCANDATEshow = false;
    }
  }
  getCalanderDetails() {
    {
      let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpParams();
      queryParams = queryParams.append('puid', '');
      this.callBridgeService.getAllCalanderDetails(queryParams).subscribe(res => {
        if (res.result) {
          this.calanderList = res.result.list;
        }
      });
    }
  }
  getLocationDetails() {
    {
      var puid = this.encrypt.decryptionAES(src_app_shared_services_global_var__WEBPACK_IMPORTED_MODULE_0__.GlobalVar.EmpCode);
      let queryParams1 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpParams();
      queryParams1 = queryParams1.append('puid', puid);
      queryParams1 = queryParams1.append('papplid', '0002');
      this.callBridgeService.getAllGeoDetails(queryParams1).subscribe(res => {
        if (res.result) {
          this.geoList = res.result.geoAccessList;
          let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpParams();
          queryParams = queryParams.append('prtype', this.geoList[0].CGEOTYPE);
          queryParams = queryParams.append('prvalue', this.geoList[0].CGEOACCESS);
          this.callBridgeService.getAllLocationDetails(queryParams).subscribe(res => {
            if (res.result) {
              this.locationList = res.result.list;
            }
          });
        }
      });
    }
  }
  numberOnly(event) {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57) || charCode == 109) {
      return false;
    }
    return true;
  }
  onFetechCustGroup() {
    this.mcCustomerGroup = '';
    this.mcSearchtext = '';
    if (this.callBridgeForm.get("mcCustomerGroup")?.value == "" || this.callBridgeForm.get("mcCustomerGroup")?.value == null) {
      this.templateError = "Please enter Cust Group";
    } else {
      this.templateError = '';
      let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpParams();
      queryParams = queryParams.append('CCOMPGRP', this.callBridgeForm.get("mcCustomerGroup")?.value);
      this.callBridgeService.getCustGroupDetails(queryParams).subscribe(res => {
        if (res.result) {
          if (res.result.custGroupList == null || res.result.custGroupList === 0 || res.result.custGroupList.length === 0) {
            this.templateError = "No Data for" + "   " + "[" + this.callBridgeForm.get("mcCustomerGroup")?.value + "]" + "   " + "this Cust Group";
          } else {
            this.callBridgeForm.patchValue({
              mcCustomerGroup: res.result.custGroupList[0].CCOMPGRP,
              mcSearchtext: res.result.custGroupList[0].CCOMPNAME
            });
          }
        }
      });
    }
  }
  myReportsFun() {
    var rtypevar = null;
    var rvaluevar = null;
    var rprodvar = null;
    var rapplid = "0002";
    var vcprodcode = this.callBridgeForm.get('vcprodcode')?.value == undefined ? null : this.callBridgeForm.get('vcprodcode')?.value;
    ;
    var mcreptype = this.callBridgeForm.get('mcCustomer')?.value == undefined ? null : this.callBridgeForm.get('mcCustomer')?.value;
    ;
    var rtype = this.callBridgeForm.get('rtype')?.value == undefined ? null : this.callBridgeForm.get('rtype')?.value;
    ;
    var rvalue = this.callBridgeForm.get('rvalue')?.value == undefined ? null : this.callBridgeForm.get('rvalue')?.value;
    ;
    var mtPeriod = this.callBridgeForm.get('mtPeriod')?.value == undefined ? null : this.callBridgeForm.get('mtPeriod')?.value;
    ;
    var mcsubprdcd = "";
    var mcpacktype = "";
    var mrevpu = "B";
    var mtscrcd = null;
    var tcprodcode = this.callBridgeForm.get('vcprodcode')?.value == undefined ? null : this.callBridgeForm.get('vcprodcode')?.value;
    ;
    var mcsupergrcd = this.callBridgeForm.get('mcsupergrcd')?.value == undefined ? null : this.callBridgeForm.get('mcsupergrcd')?.value;
    ;
    if (mcsupergrcd == null) {
      mcsupergrcd = "";
    }
    var mcsupergrnm = this.callBridgeForm.get('mcsupergrnm')?.value == undefined ? null : this.callBridgeForm.get('mcsupergrnm')?.value;
    ;
    if (mcsupergrnm == null) {
      mcsupergrnm = "";
    }
    if (mcreptype == null) {
      mcreptype = "CUS";
    }
    if (vcprodcode != null && (vcprodcode == "T" || vcprodcode == "A" || vcprodcode == "C" || vcprodcode == "D" || vcprodcode == "E" || vcprodcode == "G" || vcprodcode == "I" || vcprodcode == "K" || vcprodcode == "L" || vcprodcode == "P" || vcprodcode == "V")) {
      var var1 = vcprodcode.substring(0, 1);
      var var2 = "T";
      var var3 = "T";
      tcprodcode = var1;
      mcsubprdcd = var2;
      mcpacktype = var3;
    }
    if (vcprodcode != null && (vcprodcode == "APC" || vcprodcode == "EPC")) {
      var var1 = vcprodcode.substring(0, 1);
      var var2 = "PC";
      var var3 = "T";
      tcprodcode = var1;
      mcsubprdcd = var2;
      mcpacktype = var3;
    }
    if (vcprodcode != null && vcprodcode == "APCL") {
      var var1 = vcprodcode.substring(0, 1);
      var var2 = "PC";
      var var3 = "L";
      tcprodcode = var1;
      mcsubprdcd = var2;
      mcpacktype = var3;
    }
    let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpParams();
    queryParams = queryParams.append('puid', this.encrypt.decryptionAES(src_app_shared_services_global_var__WEBPACK_IMPORTED_MODULE_0__.GlobalVar.EmpCode));
    queryParams = queryParams.append('papplid', rapplid);
    this.callBridgeService.getAllGeoDetails(queryParams).subscribe(res => {
      if (res.result) {
        this.geoList = res.result.geoAccessList;
      }
    });
    rtypevar = this.geoList[0];
    rvaluevar = this.geoList[1];
    rprodvar = this.geoList[2];
    if (rtypevar != null && (rtypevar == "R" || rtypevar == "B" || rtypevar == "A" || rtypevar == "S")) {
      rtype = rtypevar;
      rvalue = rvaluevar;
    }
    this.templateError = '';
    if (this.callBridgeForm.get('mcCustomer')?.value != null) {
      var puid = this.encrypt.decryptionAES(src_app_shared_services_global_var__WEBPACK_IMPORTED_MODULE_0__.GlobalVar.EmpCode);
      let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpParams();
      queryParams = queryParams.append('puid', puid);
      queryParams = queryParams.append('papplid', rapplid);
      this.callBridgeService.getAllGeoDetails(queryParams).subscribe(res => {
        if (res.result) {
          this.geoList = res.result.geoAccessList;
          rtypevar = this.geoList[0].CGEOTYPE;
          rvaluevar = this.geoList[0].CGEOACCESS;
          console.log(this.geoList[0].CGEOTYPE);
          console.log(this.geoList[0].CGEOACCESS);
          if (this.callBridgeForm.get('mcCustomer')?.value == "CUS") {
            var ALLSTR = "&tUserCode=" + puid + "&rType=" + this.geoList[0].CGEOTYPE + "&rValue=" + this.geoList[0].CGEOACCESS + "&mccompgrp=" + this.callBridgeForm.get('mcCustomerGroup')?.value + "&MTHYY=" + this.callBridgeForm.get('mcRMonth')?.value + "&TREVPU=" + mrevpu;
            var baseUrl = this.encrypt.decryptionAES(sessionStorage.getItem('reporturl')) + '/exotel/Exotel_Cust1.rptdesign' + ALLSTR;
            this.callBridgeForm.patchValue({
              mcURL: baseUrl
            });
            window.open(baseUrl, '_blank');
          }
          if (this.callBridgeForm.get('mcCustomer')?.value == "EMP") {
            var ALLSTR2 = "&tUserCode=" + puid + "&rType=" + this.geoList[0].CGEOTYPE + "&rValue=" + this.geoList[0].CGEOACCESS + "&mccompgrp=" + "" + "&tosdate=" + this.callBridgeForm.get('PDATE')?.value + "&tscrcd=" + this.callBridgeForm.get('mcLocation')?.value;
            var baseUrl = this.encrypt.decryptionAES(sessionStorage.getItem('reporturl')) + '/exotel/Exotel_emp.rptdesign' + ALLSTR2;
            this.callBridgeForm.patchValue({
              mcURL: baseUrl
            });
            window.open(baseUrl, '_blank');
          }
          if (this.callBridgeForm.get('mcCustomer')?.value == "QRY") {
            var baseUrl = this.encrypt.decryptionAES(sessionStorage.getItem('reporturl')) + '/Details_not_available_in_JSP_file';
            this.callBridgeForm.patchValue({
              mcURL: baseUrl
            });
            window.open(baseUrl, '_blank');
          }
        }
      });
    } else {
      this.templateError = "Please Enter/Select All required fileds";
    }
  }
}
CallbridgeComponent.ɵfac = function CallbridgeComponent_Factory(t) {
  return new (t || CallbridgeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_CallBridge_CallBridge_service__WEBPACK_IMPORTED_MODULE_1__.CallBridgeService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](bd_common_lib__WEBPACK_IMPORTED_MODULE_6__.AESEncryptDecryptService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](bd_common_lib__WEBPACK_IMPORTED_MODULE_6__.NotificationAlertService));
};
CallbridgeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: CallbridgeComponent,
  selectors: [["app-callbridge"]],
  decls: 42,
  vars: 8,
  consts: [[1, "content-tophead", "align-items-baseline"], [1, "pagetitle"], [1, "section", "dashboard"], [1, "row"], [1, "col-lg-12"], [1, "card"], [1, "card-body"], [1, "card-title"], [2, "color", "red"], ["method", "post", 1, "bd-form", 3, "formGroup"], [1, "col-md-6"], ["for", "", 1, "col-sm-4", "col-form-label"], [1, "col-sm-8", "bd-inputfield"], ["name", "mcCustomer", "formControlName", "mcCustomer", 1, "form-select", 3, "change"], ["selected", "", "value", "CUS"], ["value", "EMP"], ["value", "QRY"], ["class", "col-md-6", 4, "ngIf"], [1, "col-md-12"], [1, "bd-note", "mb-1", "mt-1", "font-italic", "fw-bold"], [1, "btn-groups", "mt-3", "ms-0"], [1, "btn", "btn-sm", "btn-primary", 3, "click"], ["class", "col-md-12", 4, "ngIf"], ["name", "mcRMonth", "formControlName", "mcRMonth", 1, "form-select"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["type", "text", "onKeyPress", "if(this.value.length==6) return false;", "name", "mcCustomerGroup", "formControlName", "mcCustomerGroup", "value", "", 1, "form-control", 3, "keypress"], [1, "col-sm-6", "bd-inputfield"], ["type", "text", "readonly", "", "name", "mcSearchtext", "formControlName", "mcSearchtext", 1, "form-control"], [1, "col-sm-2", "bd-inputfield"], ["href", "javascript:void(0)", 1, "btn", "btn-sm", "btn-primary", "btn-input", 3, "click"], ["type", "button", 1, "btn", "btn-sm", "btn-secondary", 3, "click"], ["name", "mcLocation", "formControlName", "mcLocation", 1, "form-select"], ["type", "date", "name", "PDATE", "formControlName", "PDATE", 1, "form-control"], ["for", ""], ["formControlName", "mcURL", "id", "cmultiple", "rows", "4", "cols", "100", 1, "form-select"]],
  template: function CallbridgeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Customer Centric");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "section", 2)(5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "h5", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Call Bridge : Input Parameters");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 8)(12, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "form", 9)(15, "div", 10)(16, "div", 3)(17, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Report Option");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 12)(20, "select", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function CallbridgeComponent_Template_select_change_20_listener($event) {
        return ctx.toggleTypes($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Customer");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Delivery Empl");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "option", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Waybill Query");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, CallbridgeComponent_div_27_Template, 7, 1, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, CallbridgeComponent_div_28_Template, 6, 0, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, CallbridgeComponent_div_29_Template, 10, 0, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, CallbridgeComponent_div_30_Template, 7, 1, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, CallbridgeComponent_div_31_Template, 6, 0, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 18)(33, "p", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Data is available for two months");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 18)(36, "div", 20)(37, "button", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CallbridgeComponent_Template_button_click_37_listener() {
        return ctx.myReportsFun();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Continue");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "pre")(40, "pre");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](41, CallbridgeComponent_div_41_Template, 6, 0, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.templateError);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.callBridgeForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.ReportMonthShow);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.CustGroupShow);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.CustGroupShow1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.LocationShow);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.OUTSCANDATEshow);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.hideURL);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6929:
/*!***********************************************************************************!*\
  !*** ./src/app/components/channel-sales-report/channel-sales-report.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChannelSalesReportComponent": () => (/* binding */ ChannelSalesReportComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var src_app_shared_services_global_var__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/global-var */ 2480);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_ChannelSalesReport_ChannelSalesReport_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/ChannelSalesReport/ChannelSalesReport.service */ 8138);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var bd_common_lib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bd-common-lib */ 8919);








function ChannelSalesReportComponent_option_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const chn_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", chn_r3.CVALUE);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", chn_r3.CCHANNEL, " ");
  }
}
function ChannelSalesReportComponent_option_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const reg_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", reg_r4.CVALUE);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", reg_r4.CVALUE, " ");
  }
}
function ChannelSalesReportComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 19)(1, "div", 3)(2, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "User Submitted Data URL");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "textarea", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
}
class ChannelSalesReportComponent {
  constructor(channelSalesReportService, fb, encrypt, alert) {
    this.channelSalesReportService = channelSalesReportService;
    this.fb = fb;
    this.encrypt = encrypt;
    this.alert = alert;
    this.regionList = [];
    this.channelList = [];
    this.geoList = [];
    this.templateError = '';
    this.date = new Date();
    this.Curryear = this.date.getFullYear();
    this.rtypevarNew = "";
    this.rvaluevarNew = "";
    this.GeoAll = false;
    this.hideURL = false;
  }
  ngOnInit() {
    //this.getChannelDetails();
    this.getGeoDetail();
    this.createForm();
  }
  createForm() {
    this.channelSalesReportForm = this.fb.group({
      mcURL: [],
      mcYear: [(0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.formatDate)(new Date(), 'yyyy', 'en-US')],
      mcRegion: ['EAST'],
      mcChannel: ['ADR']
    });
  }
  getChannelDetails() {
    {
      let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams();
      queryParams = queryParams.append('puid', this.encrypt.decryptionAES(src_app_shared_services_global_var__WEBPACK_IMPORTED_MODULE_0__.GlobalVar.EmpCode));
      this.channelSalesReportService.getAllChannelDetails(queryParams).subscribe(res => {
        if (res.result) {
          this.channelList = res.result.channelDetails;
        }
      });
    }
  }
  getGeoDetail() {
    var puid = this.encrypt.decryptionAES(src_app_shared_services_global_var__WEBPACK_IMPORTED_MODULE_0__.GlobalVar.EmpCode);
    this.channelList = [];
    let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams();
    queryParams = queryParams.append('puid', puid);
    queryParams = queryParams.append('papplid', '0002');
    this.channelSalesReportService.getAllGeoDetails(queryParams).subscribe(res => {
      if (res.result) {
        this.geoList = res.result.geoAccessList;
        this.rtypevarNew = this.geoList[0].CGEOTYPE;
        this.rvaluevarNew = this.geoList[0].CGEOACCESS;
        console.log("rtypevarNew", this.rtypevarNew);
        console.log("rvaluevarNew", this.rvaluevarNew);
        if (this.rtypevarNew != null && (this.rtypevarNew == "B" || this.rtypevarNew == "R")) {
          let queryParams2 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams();
          queryParams2 = queryParams2.append('puid', puid);
          this.channelSalesReportService.getAllChannelDetails(queryParams2).subscribe(res => {
            console.log("Channel Inside-1", res.result.list[0].CCHANNEL);
            if (res.result) {
              this.channelList = res.result.list;
              console.log(res.result.list);
              this.channelSalesReportForm.patchValue({
                mcChannel: res.result.list[0].CVALUE
              });
              console.log("Channel inside -2", res.result.list[0].CCHANNEL);
            }
          });
        } else {
          this.channelList = [];
          console.log("Else Channel Inside-1");
          this.channelList[0] = {
            "CCHANNEL": "ALL",
            "CVALUE": "T"
          };
          this.channelList[1] = {
            "CCHANNEL": "ESA",
            "CVALUE": "R"
          };
          this.channelList[2] = {
            "CCHANNEL": "One Retail",
            "CVALUE": "O"
          };
          this.channelList[3] = {
            "CCHANNEL": "Consolidator",
            "CVALUE": "C"
          };
          this.channelList[4] = {
            "CCHANNEL": "FCC",
            "CVALUE": "F"
          };
          this.channelList[5] = {
            "CCHANNEL": "RSP",
            "CVALUE": "R"
          };
          this.channelSalesReportForm.patchValue({
            mcChannel: this.channelList[0].CVALUE
          });
          console.log("Patch Channel Inside-2");
        }
        let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams();
        queryParams = queryParams.append('prtype', this.rtypevarNew);
        queryParams = queryParams.append('prvalue', this.rvaluevarNew);
        this.channelSalesReportService.getAllRegionDetails(queryParams).subscribe(res => {
          if (res.result) {
            this.regionList = res.result.list;
            console.log(res.result.list);
            this.channelSalesReportForm.patchValue({
              mcRegion: res.result.list[0].CVALUE
            });
            console.log(res.result.list[0].CVALUE);
          }
        });
      }
    });
  }
  getRegionDetails() {
    {
      var puid = this.encrypt.decryptionAES(src_app_shared_services_global_var__WEBPACK_IMPORTED_MODULE_0__.GlobalVar.EmpCode);
      var papplid = "0002";
      let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams();
      queryParams = queryParams.append('puid', puid);
      queryParams = queryParams.append('papplid', papplid);
      this.channelSalesReportService.getAllGeoDetails(queryParams).subscribe(res => {
        if (res.result) {
          this.geoList = res.result.geoAccessList;
          let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams();
          queryParams = queryParams.append('prtype', this.geoList[0].CGEOTYPE);
          queryParams = queryParams.append('prvalue', this.geoList[0].CGEOACCESS);
          this.channelSalesReportService.getAllRegionDetails(queryParams).subscribe(res => {
            if (res.result) {
              if (this.geoList[0].CGEOACCESS == "ALLCO") {
                this.regionList = res.result.list;
                this.GeoAll = true;
                this.channelSalesReportForm.patchValue({
                  mcGeography: '0: null'
                });
              } else {
                this.GeoAll = false;
                this.regionList = res.result.list;
                console.log(res.result.list);
                this.channelSalesReportForm.patchValue({
                  mcGeography: res.result.list[0].CVALUE
                });
              }
            }
          });
        }
      });
    }
  }
  myReportsFun() {
    var rtypevar = null;
    var rvaluevar = null;
    var rprodvar = null;
    var rcchannel = null;
    var rcbranch = null;
    var rcregion = null;
    var rapplid = "0002";
    var vcprodcode = this.channelSalesReportForm.get('vcprodcode')?.value;
    var mcreptype = this.channelSalesReportForm.get('mcreptype')?.value;
    var rtype = this.channelSalesReportForm.get('rtype')?.value;
    var rvalue = this.channelSalesReportForm.get('rvalue')?.value;
    var frmPeriod = this.channelSalesReportForm.get('frmPeriod')?.value;
    var toPeriod = this.channelSalesReportForm.get('toPeriod')?.value;
    var mcsubprdcd = "";
    var mcpacktype = "";
    var tcprodcode = this.channelSalesReportForm.get('vcprodcode')?.value;
    var RPT = this.channelSalesReportForm.get('RPT')?.value;
    var PMTH = this.channelSalesReportForm.get('PMTH')?.value;
    var PYEAR = this.channelSalesReportForm.get('PYEAR')?.value;
    var PTYPE = this.channelSalesReportForm.get('PTYPE')?.value;
    var DREG = this.channelSalesReportForm.get('DREG')?.value;
    var mcmthyear = this.channelSalesReportForm.get('mcmthyear')?.value;
    var PDST = this.channelSalesReportForm.get('PDST')?.value;
    var prtype = "";
    var prvalue = "";
    var tmcmthyr = this.channelSalesReportForm.get('tmcmthyr')?.value;
    var tpcchannel = this.channelSalesReportForm.get('tpcchannel')?.value;
    if (vcprodcode != null && (vcprodcode == "T" || vcprodcode == "A" || vcprodcode == "C" || vcprodcode == "D" || vcprodcode == "E" || vcprodcode == "G" || vcprodcode == "I" || vcprodcode == "K" || vcprodcode == "L" || vcprodcode == "P" || vcprodcode == "V")) {
      var var1 = vcprodcode;
      var var2 = "T";
      var var3 = "T";
      tcprodcode = var1;
      mcsubprdcd = var2;
      mcpacktype = var3;
    }
    if (vcprodcode != null && (vcprodcode == "APC" || vcprodcode == "EPC")) {
      var var1 = vcprodcode;
      var var2 = "PC";
      var var3 = "T";
      tcprodcode = var1;
      mcsubprdcd = var2;
      mcpacktype = var3;
    }
    if (vcprodcode != null && vcprodcode == "APCL") {
      var var1 = vcprodcode;
      var var2 = "PC";
      var var3 = "L";
      tcprodcode = var1;
      mcsubprdcd = var2;
      mcpacktype = var3;
    }
    let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams();
    queryParams = queryParams.append('puid', this.encrypt.decryptionAES(src_app_shared_services_global_var__WEBPACK_IMPORTED_MODULE_0__.GlobalVar.EmpCode));
    queryParams = queryParams.append('papplid', rapplid);
    this.channelSalesReportService.getAllGeoDetails(queryParams).subscribe(res => {
      if (res.result) {
        this.geoList = res.result.geoAccessList;
      }
    });
    rtypevar = this.geoList[0];
    rvaluevar = this.geoList[1];
    rprodvar = this.geoList[2];
    if (rtypevar != null && (rtypevar == "R" || rtypevar == "B" || rtypevar == "A" || rtypevar == "S")) {
      rtype = rtypevar;
      rvalue = rvaluevar;
    }
    if (rvalue != null) {
      var vlength = rvalue.length();
      rtype = rvalue.substring(0, 1);
      rvalue = rvalue.substring(1, vlength);
    }
    if (DREG != null && (DREG.equals("B") || DREG.equals("E"))) {
      prtype = DREG;
      prvalue = PDST;
    } else {
      prtype = rtype;
      prvalue = rvalue;
    }
    let queryParams1 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams();
    queryParams1 = queryParams1.append('puid', this.encrypt.decryptionAES(src_app_shared_services_global_var__WEBPACK_IMPORTED_MODULE_0__.GlobalVar.EmpCode));
    this.channelSalesReportService.getAllCalanderDetails(queryParams1).subscribe(res => {
      if (res.result) {
        this.channelList = res.result.channelDetails;
      }
    });
    rcbranch = this.channelList[0];
    rcregion = this.channelList[1];
    if (rcbranch != null && rcbranch == "ALL") {
      prtype = "R";
      prvalue = rcregion;
      rtypevar = "R";
      rvaluevar = rcregion;
    }
    if (rcbranch != null && rcbranch != "ALL") {
      prtype = "B";
      prvalue = rcregion;
      rtypevar = "R";
      rvaluevar = rcregion;
    }
    this.templateError = '';
    var mcRegion = this.channelSalesReportForm.get('mcRegion')?.value;
    if (mcRegion != null) {
      var mychannel = this.channelSalesReportForm.get('mcChannel')?.value;
      var mychannelfinal = "";
      if (mychannel == "ALL") {
        mychannelfinal = "T";
      }
      if (mychannel == "ESA") {
        mychannelfinal = "E";
      }
      if (mychannel == "One Retail") {
        mychannelfinal = "O";
      }
      if (mychannel == "Consolidator") {
        mychannelfinal = "C";
      }
      if (mychannel == "FCC") {
        mychannelfinal = "F";
      }
      if (mychannel == "RSP") {
        mychannelfinal = "R";
      }
      if (mychannelfinal == null) {
        mychannelfinal = this.channelSalesReportForm.get('mcChannel')?.value;
      }
      var puid = this.encrypt.decryptionAES(src_app_shared_services_global_var__WEBPACK_IMPORTED_MODULE_0__.GlobalVar.EmpCode);
      let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams();
      queryParams = queryParams.append('puid', puid);
      queryParams = queryParams.append('papplid', rapplid);
      this.channelSalesReportService.getAllGeoDetails(queryParams).subscribe(res => {
        if (res.result) {
          this.geoList = res.result.geoAccessList;
          rtypevar = this.geoList[0].CGEOTYPE;
          rvaluevar = this.geoList[0].CGEOACCESS;
          console.log(this.geoList[0].CGEOTYPE);
          console.log(this.geoList[0].CGEOACCESS);
          var ALLSTR = "&tmcmthyr=" + this.channelSalesReportForm.get('mcYear')?.value + "&tpcchannel=" + this.channelSalesReportForm.get('mcChannel')?.value + "&tprtype=" + this.geoList[0].CGEOTYPE + "&tpttag=" + this.geoList[0].CGEOTYPE + "&tprvalue=" + this.channelSalesReportForm.get('mcRegion')?.value + "&tcemplcode=" + this.encrypt.decryptionAES(src_app_shared_services_global_var__WEBPACK_IMPORTED_MODULE_0__.GlobalVar.EmpCode);
          if (prtype != null && prtype == "B") {
            var baseUrl = this.encrypt.decryptionAES(sessionStorage.getItem('reporturl')) + '/Resources/UserData/reportuser/CHANNEL_BRC.rptdesign' + ALLSTR;
            this.channelSalesReportForm.patchValue({
              mcURL: baseUrl
            });
            window.open(baseUrl, '_blank');
          } else {
            var baseUrl = this.encrypt.decryptionAES(sessionStorage.getItem('reporturl')) + '/Resources/UserData/reportuser/CHANNEL_SUM.rptdesign' + ALLSTR;
            this.channelSalesReportForm.patchValue({
              mcURL: baseUrl
            });
            window.open(baseUrl, '_blank');
          }
          this.getGeoDetail();
        }
      });
    } else {
      this.templateError = "Please Enter/Select All required fileds";
    }
  }
}
ChannelSalesReportComponent.ɵfac = function ChannelSalesReportComponent_Factory(t) {
  return new (t || ChannelSalesReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_ChannelSalesReport_ChannelSalesReport_service__WEBPACK_IMPORTED_MODULE_1__.ChannelSalesReportService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](bd_common_lib__WEBPACK_IMPORTED_MODULE_6__.AESEncryptDecryptService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](bd_common_lib__WEBPACK_IMPORTED_MODULE_6__.NotificationAlertService));
};
ChannelSalesReportComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ChannelSalesReportComponent,
  selectors: [["app-channel-sales-report"]],
  decls: 44,
  vars: 7,
  consts: [[1, "content-tophead", "align-items-baseline"], [1, "pagetitle"], [1, "section", "dashboard"], [1, "row"], [1, "col-lg-12"], [1, "card"], [1, "card-body"], [1, "card-title"], [2, "color", "red"], ["method", "post", 1, "bd-form", 3, "formGroup"], [1, "col-md-6"], ["for", "", 1, "col-sm-4", "col-form-label"], [1, "col-sm-8", "bd-inputfield"], ["name", "mcYear", "formControlName", "mcYear", 1, "form-select"], ["selected", "", 3, "value"], ["name", "mcChannel", "formControlName", "mcChannel", 1, "form-select"], ["selected", "", 3, "ngValue", 4, "ngFor", "ngForOf"], ["name", "mcRegion", "formControlName", "mcRegion", 1, "form-select"], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "col-md-12"], [1, "btn-groups", "mt-3", "ms-0"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", 3, "click"], ["class", "col-md-12", 4, "ngIf"], ["selected", "", 3, "ngValue"], [3, "ngValue"], ["for", ""], ["formControlName", "mcURL", "id", "cmultiple", "rows", "4", "cols", "100", 1, "form-select"]],
  template: function ChannelSalesReportComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Customer Centric");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "section", 2)(5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "h5", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Channel Sales Report");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 8)(12, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "form", 9)(15, "div", 10)(16, "div", 3)(17, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Year");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 12)(20, "select", 13)(21, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 10)(24, "div", 3)(25, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Channel");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 12)(28, "select", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, ChannelSalesReportComponent_option_29_Template, 2, 2, "option", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 10)(31, "div", 3)(32, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Region");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 12)(35, "select", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](36, ChannelSalesReportComponent_option_36_Template, 2, 2, "option", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 19)(38, "div", 20)(39, "button", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ChannelSalesReportComponent_Template_button_click_39_listener() {
        return ctx.myReportsFun();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Run Report");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "pre")(42, "pre");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](43, ChannelSalesReportComponent_div_43_Template, 6, 0, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.templateError);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.channelSalesReportForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.Curryear);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.Curryear);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.channelList);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.regionList);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.hideURL);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 9416:
/*!*************************************************************************!*\
  !*** ./src/app/components/cockpit-summary/cockpit-summary.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CockpitSummaryComponent": () => (/* binding */ CockpitSummaryComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var src_app_shared_services_global_var__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/global-var */ 2480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_CockpitSummary_CockpitSummary_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/CockpitSummary/CockpitSummary.service */ 231);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var bd_common_lib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bd-common-lib */ 8919);








function CockpitSummaryComponent_option_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const cal_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", cal_r4.CNAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", cal_r4.CNAME, " ");
  }
}
function CockpitSummaryComponent_option_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const reg_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", reg_r5.CVALUE);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", reg_r5.CVALUE, " ");
  }
}
function CockpitSummaryComponent_div_41_label_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Brc ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function CockpitSummaryComponent_div_41_label_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Area ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function CockpitSummaryComponent_div_41_label_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function CockpitSummaryComponent_div_41_option_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const prod_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", prod_r10.CVALUE);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", prod_r10.CNAME, " ");
  }
}
function CockpitSummaryComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 33)(1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CockpitSummaryComponent_div_41_label_2_Template, 2, 0, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, CockpitSummaryComponent_div_41_label_3_Template, 2, 0, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, CockpitSummaryComponent_div_41_label_4_Template, 2, 0, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 12)(6, "select", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, CockpitSummaryComponent_div_41_option_7_Template, 2, 2, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.ForBrachShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.ForAreaShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.ForAllShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.PDSTList);
  }
}
function CockpitSummaryComponent_div_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 36)(1, "div", 3)(2, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "User Submitted Data URL");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "textarea", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
}
class CockpitSummaryComponent {
  constructor(cockpitSummaryService, fb, encrypt, alert) {
    this.cockpitSummaryService = cockpitSummaryService;
    this.fb = fb;
    this.encrypt = encrypt;
    this.alert = alert;
    this.date = new Date();
    this.Curyear = this.date.getFullYear();
    this.Pryear = this.date.getFullYear() - 1;
    this.geoList = [];
    this.calanderList = [];
    this.regionList = [];
    this.GeoAll = false;
    this.hideURL = false;
    this.templateError = '';
    this.ForBrachShow = false;
    this.ForAllShow = false;
    this.ForAreaShow = false;
    this.toggleSetgeoDREGalue = '';
    this.toggleSetRegionValue = '';
    this.PDSTList = [];
    this.PDSTShow = false;
  }
  ngOnInit() {
    this.createForm();
    this.getCalanderDetails();
    this.getRegionDetails();
    this.toggleSetgeoDREGalue = '';
    this.toggleSetRegionValue = '';
  }
  createForm() {
    this.cockpitSummaryForm = this.fb.group({
      mcURL: [],
      mcMonth: [(0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.formatDate)(new Date(), 'MMMyyyy', 'en-US').toUpperCase()],
      mcRegion: [],
      mcGeo: ['A'],
      mcReportType: ['M'],
      mcScoreCard: ['R'],
      PDST: []
    });
  }
  toggleSetRegion(item) {
    this.toggleSetRegionValue = item.target.value;
    this.PDSTShow = false;
    this.cockpitSummaryForm.patchValue({
      mcGeo: ['A']
    });
  }
  toggleGetPDSTDetails(item) {
    if (this.cockpitSummaryForm.get('mcGeo')?.value == "A" || this.cockpitSummaryForm.get('mcRegion')?.value == "ALLCO") {
      this.PDSTShow = false;
    } else {
      this.PDSTShow = true;
    }
    if (this.PDSTShow == true) {
      //this.PDSTShow = true;
      if (item.target.value == "B") {
        this.ForBrachShow = true;
        this.ForAreaShow = false;
        this.ForAllShow = false;
      } else if (item.target.value == "E") {
        this.ForBrachShow = false;
        this.ForAreaShow = true;
        this.ForAllShow = false;
      } else if (item.target.value == "A") {
        this.ForBrachShow = false;
        this.ForAreaShow = false;
        this.ForAllShow = true;
      }
      var test = this.toggleSetRegionValue.split(":");
      console.log("Lenght", test.length);
      console.log("Split Test", test);
      var finalRegion = "";
      if (test.length == 2) {
        finalRegion = test[1];
      } else {
        finalRegion = this.toggleSetRegionValue;
      }
      console.log("Final Region", finalRegion);
      console.log(this.toggleSetRegionValue);
      this.toggleSetgeoDREGalue = item.target.value;
      let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams();
      queryParams = queryParams.append('pctype', item.target.value);
      queryParams = queryParams.append('pcregion', finalRegion.trim());
      this.cockpitSummaryService.getAllPDSTDetails(queryParams).subscribe(res => {
        if (res.result) {
          this.PDSTList = res.result.geoDetailsList;
        }
        this.cockpitSummaryForm.patchValue({
          PDST: res.result.geoDetailsList[0].CVALUE
        });
      });
    }
  }
  getRegionDetails() {
    {
      var puid = this.encrypt.decryptionAES(src_app_shared_services_global_var__WEBPACK_IMPORTED_MODULE_0__.GlobalVar.EmpCode);
      var papplid = "0002";
      let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams();
      queryParams = queryParams.append('puid', puid);
      queryParams = queryParams.append('papplid', papplid);
      this.cockpitSummaryService.getAllGeoDetails(queryParams).subscribe(res => {
        if (res.result) {
          this.geoList = res.result.geoAccessList;
          let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams();
          queryParams = queryParams.append('prtype', this.geoList[0].CGEOTYPE);
          queryParams = queryParams.append('prvalue', this.geoList[0].CGEOACCESS);
          this.cockpitSummaryService.getAllRegionDetails(queryParams).subscribe(res => {
            if (res.result) {
              if (this.geoList[0].CGEOACCESS == "ALLCO") {
                this.regionList = res.result.list;
                this.GeoAll = true;
                this.cockpitSummaryForm.patchValue({
                  mcRegion: res.result.list[0].CVALUE
                });
              } else {
                this.regionList = [];
                this.GeoAll = false;
                this.regionList = res.result.list;
                console.log(res.result.list[0].CVALUE);
                this.cockpitSummaryForm.patchValue({
                  mcRegion: res.result.list[0].CVALUE
                });
              }
            }
          });
        }
      });
    }
  }
  getCalanderDetails() {
    {
      let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams();
      queryParams = queryParams.append('puid', '');
      this.cockpitSummaryService.getAllCalanderDetails(queryParams).subscribe(res => {
        if (res.result) {
          this.calanderList = res.result.list;
        }
      });
    }
  }
  myReportsFun() {
    var rtypevar = null;
    var rvaluevar = null;
    var rprodvar = null;
    var rapplid = "0002";
    var vcprodcode = this.cockpitSummaryForm.get('vcprodcode')?.value == undefined ? null : this.cockpitSummaryForm.get('vcprodcode')?.value == undefined ? null : this.cockpitSummaryForm.get('vcprodcode')?.value;
    var mcreptype = this.cockpitSummaryForm.get('mcreptype')?.value == undefined ? null : this.cockpitSummaryForm.get('mcreptype')?.value;
    var rtype = this.cockpitSummaryForm.get('rtype')?.value == undefined ? null : this.cockpitSummaryForm.get('rtype')?.value;
    var rvalue = this.cockpitSummaryForm.get('rvalue')?.value == undefined ? null : this.cockpitSummaryForm.get('rvalue')?.value;
    var frmPeriod = this.cockpitSummaryForm.get('frmPeriod')?.value == undefined ? null : this.cockpitSummaryForm.get('frmPeriod')?.value;
    var toPeriod = this.cockpitSummaryForm.get('toPeriod')?.value == undefined ? null : this.cockpitSummaryForm.get('toPeriod')?.value;
    var mcsubprdcd = "";
    var mcpacktype = "";
    var tcprodcode = this.cockpitSummaryForm.get('vcprodcode')?.value == undefined ? null : this.cockpitSummaryForm.get('vcprodcode')?.value;
    var RPT = this.cockpitSummaryForm.get('RPT')?.value == undefined ? null : this.cockpitSummaryForm.get('RPT')?.value;
    var PMTH = this.cockpitSummaryForm.get('PMTH')?.value == undefined ? null : this.cockpitSummaryForm.get('PMTH')?.value;
    var PYEAR = this.cockpitSummaryForm.get('PYEAR')?.value == undefined ? null : this.cockpitSummaryForm.get('PYEAR')?.value;
    var PTYPE = this.cockpitSummaryForm.get('PTYPE')?.value == undefined ? null : this.cockpitSummaryForm.get('PTYPE')?.value;
    var DREG = this.cockpitSummaryForm.get('DREG')?.value == undefined ? null : this.cockpitSummaryForm.get('DREG')?.value;
    var mcmthyear = this.cockpitSummaryForm.get('mcmthyear')?.value == undefined ? null : this.cockpitSummaryForm.get('mcmthyear')?.value;
    var PDST = this.cockpitSummaryForm.get('PDST')?.value == undefined ? null : this.cockpitSummaryForm.get('PDST')?.value;
    var prtype = "";
    var prvalue = "";
    if (vcprodcode != null && (vcprodcode == "T" || vcprodcode == "A" || vcprodcode == "C" || vcprodcode == "D" || vcprodcode == "E" || vcprodcode == "G" || vcprodcode == "I" || vcprodcode == "K" || vcprodcode == "L" || vcprodcode == "P" || vcprodcode == "V")) {
      var var1 = vcprodcode.substring(0, 1);
      var var2 = "T";
      var var3 = "T";
      tcprodcode = var1;
      mcsubprdcd = var2;
      mcpacktype = var3;
    }
    if (vcprodcode != null && (vcprodcode == "APC" || vcprodcode == "EPC")) {
      var var1 = vcprodcode.substring(0, 1);
      var var2 = "PC";
      var var3 = "T";
      tcprodcode = var1;
      mcsubprdcd = var2;
      mcpacktype = var3;
    }
    if (vcprodcode != null && vcprodcode == "APCL") {
      var var1 = vcprodcode.substring(0, 1);
      var var2 = "PC";
      var var3 = "L";
      tcprodcode = var1;
      mcsubprdcd = var2;
      mcpacktype = var3;
    }
    let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams();
    queryParams = queryParams.append('puid', this.encrypt.decryptionAES(src_app_shared_services_global_var__WEBPACK_IMPORTED_MODULE_0__.GlobalVar.EmpCode));
    queryParams = queryParams.append('papplid', rapplid);
    this.cockpitSummaryService.getAllGeoDetails(queryParams).subscribe(res => {
      if (res.result) {
        this.geoList = res.result.geoAccessList;
      }
    });
    rtypevar = this.geoList[0];
    rvaluevar = this.geoList[1];
    rprodvar = this.geoList[2];
    if (rtypevar != null && (rtypevar == "R" || rtypevar == "B" || rtypevar == "A" || rtypevar == "S")) {
      rtype = rtypevar;
      rvalue = rvaluevar;
    }
    if (rvalue != null) {
      var vlength = rvalue.length();
      rtype = rvalue.substring(0, 1);
      rvalue = rvalue.substring(1, vlength);
    }
    if (DREG != null && (DREG.equals("B") || DREG.equals("E"))) {
      prtype = DREG;
      prvalue = PDST;
    } else {
      prtype = rtype;
      prvalue = rvalue;
    }
    this.templateError = '';
    var mcGeo = this.cockpitSummaryForm.get('mcGeo')?.value;
    var Tscorecard = this.cockpitSummaryForm.get('mcScoreCard')?.value;
    if (this.cockpitSummaryForm.get('mcMonth')?.value != null && this.cockpitSummaryForm.get('mcRegion')?.value != null && this.cockpitSummaryForm.get('mcGeo')?.value != null && this.cockpitSummaryForm.get('mcReportType')?.value != null && this.cockpitSummaryForm.get('mcScoreCard')?.value != null) {
      //var puid=68530;
      var puid = this.encrypt.decryptionAES(src_app_shared_services_global_var__WEBPACK_IMPORTED_MODULE_0__.GlobalVar.EmpCode);
      let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams();
      queryParams = queryParams.append('puid', puid);
      queryParams = queryParams.append('papplid', rapplid);
      this.cockpitSummaryService.getAllGeoDetails(queryParams).subscribe(res => {
        if (res.result) {
          this.geoList = res.result.geoAccessList;
          rtypevar = this.geoList[0].CGEOTYPE;
          rvaluevar = this.geoList[0].CGEOACCESS;
          console.log(this.geoList[0].CGEOTYPE);
          console.log(this.geoList[0].CGEOACCESS);
          var TrtypeNew = "";
          var TrtypeNew2 = "";
          if (this.cockpitSummaryForm.get('mcGeo')?.value == "A") {
            TrtypeNew = this.cockpitSummaryForm.get('mcRegion')?.value;
          } else {
            TrtypeNew = this.cockpitSummaryForm.get('PDST')?.value;
          }
          if (this.cockpitSummaryForm.get('mcGeo')?.value == "A" && this.cockpitSummaryForm.get('mcRegion')?.value == "ALLCO") {
            TrtypeNew2 = "C";
          } else if (this.cockpitSummaryForm.get('mcGeo')?.value == "A" && this.cockpitSummaryForm.get('mcRegion')?.value != "ALLCO") {
            TrtypeNew2 = "R";
          } else {
            TrtypeNew2 = this.cockpitSummaryForm.get('mcGeo')?.value;
          }
          var ALLSTR = "&Tmthyr=" + (0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.formatDate)(this.cockpitSummaryForm.get('mcMonth')?.value, 'MMMyy', 'en-US').toUpperCase() + "&Tscorecard=" + Tscorecard + "&Trtype=" + TrtypeNew2 + "&Trvalue=" + TrtypeNew + "&Tctype=" + this.cockpitSummaryForm.get('mcReportType')?.value;
          if (Tscorecard == 'R') {
            var baseUrl = this.encrypt.decryptionAES(sessionStorage.getItem('reporturl')) + '/Resources/UserData/reportuser/Cockpit_Summary.rptdesign' + ALLSTR;
            this.cockpitSummaryForm.patchValue({
              mcURL: baseUrl
            });
            window.open(baseUrl, '_blank');
          } else {
            var baseUrl = this.encrypt.decryptionAES(sessionStorage.getItem('reporturl')) + '/Resources/UserData/reportuser/Cockpit_Healthcard.rptdesign' + ALLSTR;
            this.cockpitSummaryForm.patchValue({
              mcURL: baseUrl
            });
            window.open(baseUrl, '_blank');
          }
        }
      });
    } else {
      this.templateError = "Please Enter/Select All required fileds";
    }
  }
}
CockpitSummaryComponent.ɵfac = function CockpitSummaryComponent_Factory(t) {
  return new (t || CockpitSummaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_CockpitSummary_CockpitSummary_service__WEBPACK_IMPORTED_MODULE_1__.CockpitSummaryService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](bd_common_lib__WEBPACK_IMPORTED_MODULE_6__.AESEncryptDecryptService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](bd_common_lib__WEBPACK_IMPORTED_MODULE_6__.NotificationAlertService));
};
CockpitSummaryComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: CockpitSummaryComponent,
  selectors: [["app-cockpit-summary"]],
  decls: 68,
  vars: 6,
  consts: [[1, "content-tophead", "align-items-baseline"], [1, "pagetitle"], [1, "section", "dashboard"], [1, "row"], [1, "col-lg-12"], [1, "card"], [1, "card-body"], [1, "card-title"], [2, "color", "red"], ["method", "post", 1, "row", "bd-form", 3, "formGroup"], [1, "col-md-3"], ["for", "", 1, "col-sm-4", "col-form-label"], [1, "col-sm-8", "bd-inputfield"], ["name", "mcMonth", "formControlName", "mcMonth", 1, "form-select"], [3, "value", 4, "ngFor", "ngForOf"], ["name", "mcRegion", "formControlName", "mcRegion", 1, "form-select", 3, "change"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["name", "mcGeo", "formControlName", "mcGeo", 1, "form-select", 3, "change"], ["value", "A"], ["value", "B"], ["value", "E"], ["class", "col-md-6", 4, "ngIf"], ["name", "mcReportType", "formControlName", "mcReportType", 1, "form-select"], ["value", "M"], ["value", "Y"], ["name", "mcScoreCard", "formControlName", "mcScoreCard", 1, "form-select"], ["value", "R"], ["value", "H"], [1, "col-sm-6", "bd-inputfield"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", 3, "click"], ["class", "col-md-12", 4, "ngIf"], [3, "value"], [3, "ngValue"], [1, "col-md-6"], ["for", "", "class", "col-sm-4 col-form-label", 4, "ngIf"], ["name", "PDST", "formControlName", "PDST", 1, "form-select"], [1, "col-md-12"], ["for", ""], ["formControlName", "mcURL", "id", "cmultiple", "rows", "4", "cols", "100", 1, "form-select"]],
  template: function CockpitSummaryComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Customer Centric");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "section", 2)(5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "h5", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Cockpit Summary");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 8)(12, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "form", 9)(15, "div", 10)(16, "div", 3)(17, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Month");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 12)(20, "select", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, CockpitSummaryComponent_option_21_Template, 2, 2, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 10)(23, "div", 3)(24, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Region");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 12)(27, "select", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function CockpitSummaryComponent_Template_select_change_27_listener($event) {
        return ctx.toggleSetRegion($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, CockpitSummaryComponent_option_28_Template, 2, 2, "option", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 10)(30, "div", 3)(31, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Geo");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 12)(34, "select", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function CockpitSummaryComponent_Template_select_change_34_listener($event) {
        return ctx.toggleGetPDSTDetails($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "option", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "a.All");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "option", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "b.Branch");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "option", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "c.Area");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](41, CockpitSummaryComponent_div_41_Template, 8, 4, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 10)(43, "div", 3)(44, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Report Type");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 12)(47, "select", 22)(48, "option", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Monthly");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "option", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "Yearly");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 10)(53, "div", 3)(54, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "Score Card");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 12)(57, "select", 25)(58, "option", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "Revenue");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "option", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "Health Card");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 28)(63, "button", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CockpitSummaryComponent_Template_button_click_63_listener() {
        return ctx.myReportsFun();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "Run");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](65, "pre")(66, "pre");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](67, CockpitSummaryComponent_div_67_Template, 6, 0, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.templateError);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.cockpitSummaryForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.calanderList);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.regionList);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.PDSTShow);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.hideURL);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 7394:
/*!*********************************************************************!*\
  !*** ./src/app/components/cust-variance/cust-variance.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustVarianceComponent": () => (/* binding */ CustVarianceComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var src_app_shared_services_global_var__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/global-var */ 2480);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_CustVariance_CustVariance_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/CustVariance/CustVariance.service */ 5596);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var bd_common_lib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bd-common-lib */ 8919);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);









function CustVarianceComponent_option_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const prod_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", prod_r7.CVALUE);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", prod_r7.CNAME, " ");
  }
}
function CustVarianceComponent_option_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const reg_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", reg_r9.CVALUE);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" \u00A0\u00A0\u00A0\u00A0", reg_r9.CVALUE, " ");
  }
}
function CustVarianceComponent_option_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const cal_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", cal_r10.CNAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", cal_r10.CNAME, " ");
  }
}
function CustVarianceComponent_option_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const cal_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", cal_r11.CNAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", cal_r11.CNAME, " ");
  }
}
function CustVarianceComponent_option_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const cal_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", cal_r12.CNAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", cal_r12.CNAME, " ");
  }
}
function CustVarianceComponent_option_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const cal_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", cal_r13.CNAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", cal_r13.CNAME, " ");
  }
}
function CustVarianceComponent_div_134_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 43)(1, "div", 3)(2, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "User Submitted Data URL");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "textarea", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
}
class CustVarianceComponent {
  constructor(custVarianceService, fb, NofityService, route, encrypt) {
    this.custVarianceService = custVarianceService;
    this.fb = fb;
    this.NofityService = NofityService;
    this.route = route;
    this.encrypt = encrypt;
    this.productList = [];
    this.regionList = [];
    this.calanderList = [];
    this.geoList = [];
    this.custVarianceData = [];
    this.templateError = '';
    this.dataitem = [];
    this.CollectionTypes = [];
    this.displayheaderResponseData = [];
    this.setSelectedProductList = "All Products";
    this.test = "";
    this.GeoAll = false;
    this.hideURL = false;
    this.rtypevarNew = "";
    this.rvaluevarNew = "";
  }
  ngOnInit() {
    this.createForm();
    this.getProdDetails();
    this.getRegionDetails();
    this.getCalanderDetails();
  }
  numberOnly(event) {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57) || charCode == 109) {
      return false;
    }
    return true;
  }
  createForm() {
    this.custVarianceForm = this.fb.group({
      mcURL: [],
      mcProduct: [],
      mcGeography: [],
      mcFromMonth: [],
      mcToMonth: [],
      mcFromMonthC: [],
      mcToMonthC: [],
      mcDataMeasure: [],
      mcWithPS: [],
      mcEvaluateU: [],
      mcVolta: [],
      mcVariance: [],
      mcReportType: [],
      mcDisLimit: []
    });
  }
  myReportsFun() {
    var rtypevar = null;
    var rvaluevar = null;
    var rapplid = "0002";
    var mcsubprdcd = "";
    var mcpacktype = "";
    var vcprodcode = this.custVarianceForm.get('mcProduct')?.value;
    var tcprodcode = vcprodcode;
    var puid = this.encrypt.decryptionAES(src_app_shared_services_global_var__WEBPACK_IMPORTED_MODULE_0__.GlobalVar.EmpCode);
    this.templateError = '';
    if (this.custVarianceForm.get('mcProduct')?.value != null && this.custVarianceForm.get('mcGeography')?.value != null && this.custVarianceForm.get('mcToMonth')?.value != null && this.custVarianceForm.get('mcToMonth')?.value != null && this.custVarianceForm.get('mcFromMonthC')?.value != null && this.custVarianceForm.get('mcToMonthC')?.value != null && this.custVarianceForm.get('mcDataMeasure')?.value != null && this.custVarianceForm.get('mcWithPS')?.value != null && this.custVarianceForm.get('mcEvaluateU')?.value != null && this.custVarianceForm.get('mcVolta')?.value != null && this.custVarianceForm.get('mcVariance')?.value != null && this.custVarianceForm.get('mcReportType')?.value != null && this.custVarianceForm.get('mcDisLimit')?.value != null) {
      let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
      queryParams = queryParams.append('puid', puid);
      queryParams = queryParams.append('papplid', rapplid);
      this.custVarianceService.getAllGeoDetails(queryParams).subscribe(res => {
        if (res.result) {
          this.geoList = res.result.geoAccessList;
          rtypevar = this.geoList[0].CGEOTYPE;
          rvaluevar = this.geoList[0].CGEOACCESS;
          console.log(this.geoList[0].CGEOTYPE);
          console.log(this.geoList[0].CGEOACCESS);
          if (vcprodcode != null && (vcprodcode == "T" || vcprodcode == "A" || vcprodcode == "C" || vcprodcode == "D" || vcprodcode == "E" || vcprodcode == "G" || vcprodcode == "I" || vcprodcode == "K" || vcprodcode == "L" || vcprodcode == "P" || vcprodcode == "V")) {
            var var1 = vcprodcode.substring(0, 1);
            var var2 = "T";
            var var3 = "T";
            tcprodcode = var1;
            mcsubprdcd = var2;
            mcpacktype = var3;
          }
          if (vcprodcode != null && (vcprodcode == "APC" || vcprodcode == "EPC")) {
            var var1 = vcprodcode.substring(0, 1);
            var var2 = "PC";
            var var3 = "T";
            tcprodcode = var1;
            mcsubprdcd = var2;
            mcpacktype = var3;
          }
          if (vcprodcode != null && vcprodcode == "APCL") {
            var var1 = vcprodcode.substring(0, 1);
            var var2 = "PC";
            var var3 = "L";
            tcprodcode = var1;
            mcsubprdcd = var2;
            mcpacktype = var3;
          }
          console.log("rvaluevar value--", rvaluevar);
          console.log("Region selected value--", this.custVarianceForm.get('mcGeography')?.value);
          if (rvaluevar != this.custVarianceForm.get('mcGeography')?.value) {
            rtypevar = "R";
            rvaluevar = this.custVarianceForm.get('mcGeography')?.value;
          }
          var ALLSTR = "&tprType=" + rtypevar + "&tprValue=" + rvaluevar + "&tPprod=" + tcprodcode + "&tfmthyr=" + this.custVarianceForm.get('mcFromMonth')?.value + "&tftmthyr=" + this.custVarianceForm.get('mcToMonth')?.value + "&tcmthyr=" + this.custVarianceForm.get('mcFromMonthC')?.value + "&tctmthyr=" + this.custVarianceForm.get('mcToMonthC')?.value + "&ttorder=" + this.custVarianceForm.get('mcEvaluateU')?.value + "&tvarlimit=" + this.custVarianceForm.get('mcVariance')?.value + "&tdlimit=" + this.custVarianceForm.get('mcDisLimit')?.value + "&tfsflg=" + this.custVarianceForm.get('mcWithPS')?.value + "&tdataflg=" + this.custVarianceForm.get('mcDataMeasure')?.value + "&tpCsubprdcd=" + mcsubprdcd + "&tpCpacktype=" + mcpacktype + "&tcustflg=" + '';
          console.log(ALLSTR);
          var baseUrl = "";
          if (this.custVarianceForm.get('mcReportType')?.value == "D") {
            var baseUrl = this.encrypt.decryptionAES(sessionStorage.getItem('reporturl')) + '/Resources/UserData/reportuser/Negvar_detail.rptdesign' + ALLSTR;
          } else {
            var baseUrl = this.encrypt.decryptionAES(sessionStorage.getItem('reporturl')) + '/Resources/UserData/reportuser/Negvar_sum.rptdesign' + ALLSTR;
          }
          this.custVarianceForm.patchValue({
            mcURL: baseUrl
          });
          window.open(baseUrl, '_blank');
        }
      });
    } else {
      this.templateError = "Please Enter/Select All required fileds";
    }
  }
  PostDetails() {
    if (this.custVarianceForm.value.mcProductType) {
      const payload = {
        mcProduct: this.custVarianceForm.value.mcProductType,
        mcGeography: this.custVarianceForm.value.mcGeography,
        mcFromMonth: this.custVarianceForm.value.mcFromMonth,
        mcToMonth: this.custVarianceForm.value.mcToMonth,
        mcDisLimit: this.custVarianceForm.value.mcDisLimit
      };
      let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
      queryParams = queryParams.append('pctype', this.custVarianceForm.value.mcProductType ? 'A' : 'A');
      //queryParams = queryParams.append('pcleg',this.pendingConnectionFirstMileForm.value.mcLeg ? 'A' :'A');
      queryParams = queryParams.append("pcregion", this.custVarianceForm.value.mcRegion ? 'ALL' : 'ALL');
      this.custVarianceService.getAllProductDetails(queryParams).subscribe(res => {
        if (res.result) {
          this.custVarianceData = res.result.geoDetailsList;
        }
      });
    }
  }
  getProdDetails() {
    {
      let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
      queryParams = queryParams.append('pprodvar', '');
      this.custVarianceService.getAllProductDetails(queryParams).subscribe(res => {
        if (res.result) {
          this.productList = res.result.list;
          this.custVarianceForm.patchValue({
            mcProduct: 'T',
            mcFromMonth: (0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.formatDate)(new Date(new Date().getFullYear() - 1, new Date().getMonth(), 1), 'MMMyyyy', 'en-US').toUpperCase(),
            mcToMonth: (0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.formatDate)(new Date(new Date().getFullYear() - 1, new Date().getMonth(), 1), 'MMMyyyy', 'en-US').toUpperCase(),
            mcFromMonthC: (0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.formatDate)(new Date(), 'MMMyyyy', 'en-US').toUpperCase(),
            mcToMonthC: (0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.formatDate)(new Date(), 'MMMyyyy', 'en-US').toUpperCase(),
            mcDataMeasure: 'R',
            mcWithPS: 'Y',
            mcEvaluateU: 'G',
            mcVolta: 'N',
            mcVariance: '-1',
            mcReportType: 'S',
            mcDisLimit: '100'
          });
        }
      });
    }
  }
  getRegionDetails() {
    {
      console.log("Before decryption--", src_app_shared_services_global_var__WEBPACK_IMPORTED_MODULE_0__.GlobalVar.EmpCode);
      var puid = this.encrypt.decryptionAES(src_app_shared_services_global_var__WEBPACK_IMPORTED_MODULE_0__.GlobalVar.EmpCode);
      console.log("After decryption--", puid);
      var papplid = "0002";
      let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
      queryParams = queryParams.append('puid', puid);
      queryParams = queryParams.append('papplid', papplid);
      this.custVarianceService.getAllGeoDetails(queryParams).subscribe(res => {
        if (res.result) {
          this.geoList = res.result.geoAccessList;
          let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
          console.log(this.geoList[0].CGEOTYPE);
          queryParams = queryParams.append('prtype', this.geoList[0].CGEOTYPE);
          queryParams = queryParams.append('prvalue', this.geoList[0].CGEOACCESS);
          this.custVarianceService.getAllRegionDetails(queryParams).subscribe(res => {
            if (res.result) {
              if (this.geoList[0].CGEOACCESS == "ALLCO") {
                this.regionList = res.result.list;
                this.GeoAll = true;
                this.custVarianceForm.patchValue({
                  mcGeography: res.result.list[0].CVALUE
                });
              } else {
                this.GeoAll = false;
                this.regionList = res.result.list;
                console.log(res.result.list);
                this.custVarianceForm.patchValue({
                  mcGeography: res.result.list[0].CVALUE
                });
              }
            }
          });
        }
      });
    }
  }
  getCalanderDetails() {
    {
      let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
      queryParams = queryParams.append('puid', '');
      this.custVarianceService.getAllCalanderDetails(queryParams).subscribe(res => {
        if (res.result) {
          this.calanderList = res.result.list;
        }
      });
    }
  }
}
CustVarianceComponent.ɵfac = function CustVarianceComponent_Factory(t) {
  return new (t || CustVarianceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_CustVariance_CustVariance_service__WEBPACK_IMPORTED_MODULE_1__.CustVarianceService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](bd_common_lib__WEBPACK_IMPORTED_MODULE_6__.NotificationAlertService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](bd_common_lib__WEBPACK_IMPORTED_MODULE_6__.AESEncryptDecryptService));
};
CustVarianceComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: CustVarianceComponent,
  selectors: [["app-cust-variance"]],
  decls: 135,
  vars: 9,
  consts: [[1, "content-tophead", "align-items-baseline"], [1, "pagetitle"], [1, "section", "dashboard"], [1, "row"], [1, "col-lg-12"], [1, "card"], [1, "card-body"], [1, "card-title"], [2, "color", "red"], ["method", "post", 1, "row", "bd-form", 3, "formGroup"], [1, "col-md-6"], ["for", "", 1, "col-sm-4", "col-form-label"], [1, "col-sm-8", "bd-inputfield"], ["name", "mcProduct", "formControlName", "mcProduct", 1, "form-select"], [3, "value", 4, "ngFor", "ngForOf"], ["name", "mcGeography", "formControlName", "mcGeography", 1, "form-select"], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "col-md-6", "mb-2"], [1, "col-sm-4", "bd-inputfield"], ["for", "inputNanme4", 1, "form-label"], ["name", "mcFromMonthC", "formControlName", "mcFromMonthC", 1, "form-select"], ["name", "mcToMonthC", "formControlName", "mcToMonthC", 1, "form-select"], ["name", "mcFromMonth", "formControlName", "mcFromMonth", 1, "form-select"], ["name", "mcToMonth", "formControlName", "mcToMonth", 1, "form-select"], ["name", "mcDataMeasure", "formControlName", "mcDataMeasure", 1, "form-select"], ["selected", "", "value", "R"], ["value", "P"], ["value", "W"], ["name", "mcWithPS", "formControlName", "mcWithPS", 1, "form-select"], ["selected", "", "value", "Y"], ["value", "N"], ["name", "mcEvaluateU", "formControlName", "mcEvaluateU", 1, "form-select"], ["selected", "", "value", "G"], ["value", "A"], ["value", "T"], ["name", "mcVolta", "formControlName", "mcVolta", 1, "form-select"], ["value", "Y"], ["type", "number", "pattern", "^-?\\d+$", "onKeyPress", "if(this.value.length==3) return false;", "placeholder", "Enter Variance No Only", "name", "mcVariance", "formControlName", "mcVariance", "value", "-1", 1, "form-control"], [1, "bd-note", "mb-1", "font-italic", "fw-bold"], ["name", "mcReportType", "formControlName", "mcReportType", 1, "form-select"], ["value", "S"], [1, "col-md-6", "mb-1"], ["onKeyPress", "if(this.value.length==5) return false;", "name", "mcDisLimit", "placeholder", "Enter Limit", "formControlName", "mcDisLimit", "type", "text", "value", "100", 1, "form-control", 3, "keypress"], [1, "col-md-12"], [1, "bd-note", "mb-1", "mt-3", "font-italic", "fw-bold"], [1, "bd-note", "font-italic", "fw-bold"], [1, "btn-groups", "ms-0"], [1, "btn", "btn-sm", "btn-primary", 3, "click"], ["class", "col-md-12", 4, "ngIf"], [3, "value"], [3, "ngValue"], ["for", ""], ["formControlName", "mcURL", "id", "cmultiple", "rows", "4", "cols", "100", 1, "form-select"]],
  template: function CustVarianceComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Customer Centric");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "section", 2)(5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "h5", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Customer Variance Report : Input Parameters");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 8)(12, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "form", 9)(15, "div", 10)(16, "div", 3)(17, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Products");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 12)(20, "select", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, CustVarianceComponent_option_21_Template, 2, 2, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 10)(23, "div", 3)(24, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Geography");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 12)(27, "select", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, CustVarianceComponent_option_28_Template, 2, 2, "option", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 17)(30, "div", 3)(31, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Compaired Against");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 18)(34, "label", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "From Month");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "select", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, CustVarianceComponent_option_37_Template, 2, 2, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 18)(39, "label", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "To Month");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "select", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](42, CustVarianceComponent_option_42_Template, 2, 2, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 17)(44, "div", 3)(45, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "Evaluation Period");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 18)(48, "label", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "From Month");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "select", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](51, CustVarianceComponent_option_51_Template, 2, 2, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 18)(53, "label", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "To Month");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "select", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](56, CustVarianceComponent_option_56_Template, 2, 2, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 10)(58, "div", 3)(59, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "Data Measure");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 12)(62, "select", 24)(63, "option", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "Revenue");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "option", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "Prices");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "option", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "Weight");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 10)(70, "div", 3)(71, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, "With FS (Y/N)");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 12)(74, "select", 28)(75, "option", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, "Yes");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "option", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, "No");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "div", 10)(80, "div", 3)(81, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, "Evaluate Using");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "div", 12)(84, "select", 31)(85, "option", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86, "Total");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "option", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, "Avg.per Day");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "option", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](90, "Avg.per Month");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "div", 10)(92, "div", 3)(93, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](94, "Volta Customer (Y/N)");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "div", 12)(96, "select", 35)(97, "option", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](98, "No");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "option", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](100, "Yes");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "div", 10)(102, "div", 3)(103, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](104, "Variance Threshold (+/-)");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](106, "input", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "p", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](108, "(-1= Negative Variance / +1=Positive Variance / 0=Top Customers)");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](109, "div", 10)(110, "div", 3)(111, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](112, "Report Type");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "div", 12)(114, "select", 39)(115, "option", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](116, "Summary");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "div", 41)(118, "div", 3)(119, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](120, "Display Limit (Top-n)");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](121, "div", 12)(122, "input", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keypress", function CustVarianceComponent_Template_input_keypress_122_listener($event) {
        return ctx.numberOnly($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](123, "div", 43)(124, "p", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](125, "Data is available form Jan 2017");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](126, "p", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](127, "To get negative variance, Enter negative figure in variance (+/-) filter.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](128, "div", 43)(129, "div", 46)(130, "button", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustVarianceComponent_Template_button_click_130_listener() {
        return ctx.myReportsFun();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](131, "Continue");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](132, "pre")(133, "pre");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](134, CustVarianceComponent_div_134_Template, 6, 0, "div", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.templateError);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.custVarianceForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.productList);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.regionList);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.calanderList);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.calanderList);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.calanderList);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.calanderList);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](78);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.hideURL);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 3088:
/*!***************************************************************************!*\
  !*** ./src/app/components/customer-centric/customer-centric.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerCentricComponent": () => (/* binding */ CustomerCentricComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var src_app_shared_services_global_var__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/global-var */ 2480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_CustomerCentric_CustomerCentric_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/CustomerCentric/CustomerCentric.service */ 3689);
/* harmony import */ var bd_common_lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bd-common-lib */ 8919);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);









function CustomerCentricComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14)(1, "div", 3)(2, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "User Submitted Data URL");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "textarea", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
}
class CustomerCentricComponent {
  constructor(customerCentricService, fb, encrypt, alert, route) {
    this.customerCentricService = customerCentricService;
    this.fb = fb;
    this.encrypt = encrypt;
    this.alert = alert;
    this.route = route;
    this.productList = [];
    this.regionList = [];
    this.calanderList = [];
    this.geoList = [];
    this.templateError = '';
    this.hideURL = false;
  }
  ngOnInit() {
    this.createForm();
    this.getProdDetails();
  }
  createForm() {
    this.customerCentricForm = this.fb.group({
      mcURL: [],
      mcCustGroup: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      mcArea: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      mcAreaDis: []
    });
  }
  myReportsFun() {
    this.templateError = '';
    var tcprodcode = this.customerCentricForm.get('mcProduct')?.value;
    var vcprodcode = this.customerCentricForm.get('mcProduct')?.value;
    var mcsubprdcd = this.customerCentricForm.get('mcEvaluateU')?.value;
    var mcpacktype = '';
    var rtypevar = null;
    var rvaluevar = null;
    var rprodvar = null;
    var rapplid = '0002';
    var rtype = null;
    var rvalue = null;
    if (vcprodcode != null && (vcprodcode == "T" || vcprodcode == "A" || vcprodcode == "C" || vcprodcode == "D" || vcprodcode == "E" || vcprodcode == "G" || vcprodcode == "I" || vcprodcode == "K" || vcprodcode == "L" || vcprodcode == "P" || vcprodcode == "V")) {
      var var1 = vcprodcode;
      var var2 = "T";
      var var3 = "T";
      tcprodcode = var1;
      mcsubprdcd = var2;
      mcpacktype = var3;
    }
    if (vcprodcode != null && (vcprodcode == "APC" || vcprodcode == "EPC")) {
      var var1 = vcprodcode;
      var var2 = "PC";
      var var3 = "T";
      tcprodcode = var1;
      mcsubprdcd = var2;
      mcpacktype = var3;
    }
    if (vcprodcode != null && vcprodcode == "APCL") {
      var var1 = vcprodcode;
      var var2 = "PC";
      var var3 = "L";
      tcprodcode = var1;
      mcsubprdcd = var2;
      mcpacktype = var3;
    }
    let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams();
    queryParams = queryParams.append('puid', this.encrypt.decryptionAES(src_app_shared_services_global_var__WEBPACK_IMPORTED_MODULE_0__.GlobalVar.EmpCode));
    queryParams = queryParams.append('papplid', rapplid);
    this.customerCentricService.getAllGeoDetails(queryParams).subscribe(res => {
      if (res.result) {
        this.geoList = res.result.geoAccessList;
      }
    });
    rtypevar = this.geoList[0];
    rvaluevar = this.geoList[1];
    rprodvar = this.geoList[2];
    if (rtypevar != null && (rtypevar == "R" || rtypevar == "B" || rtypevar == "A" || rtypevar == "S")) {
      rtype = rtypevar;
      rvalue = rvaluevar;
    }
    if (this.customerCentricForm.get('mcReportType')?.value != null) {
      var ALLSTR = "&tprType=" + rtype +
      //null
      "&tprValue=" + rvalue +
      //ALLCO
      "&tPprod=" + tcprodcode; //D
      var baseUrl = this.encrypt.decryptionAES(sessionStorage.getItem('reporturl')) + '/Resources/UserData/reportuser/Negvar_sum.rptdesign' + ALLSTR;
      this.customerCentricForm.patchValue({
        mcURL: baseUrl
      });
      window.open(baseUrl, '_blank');
    } else {
      this.templateError = "Please Enter/Select All required fileds";
    }
  }
  PostDetails() {
    if (this.customerCentricForm.value.mcProductType) {
      const payload = {
        mcProduct: this.customerCentricForm.value.mcProductType,
        mcGeography: this.customerCentricForm.value.mcGeography
      };
      let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams();
      queryParams = queryParams.append('pctype', this.customerCentricForm.value.mcProductType ? 'A' : 'A');
      //queryParams = queryParams.append('pcleg',this.pendingConnectionFirstMileForm.value.mcLeg ? 'A' :'A');
      queryParams = queryParams.append("pcregion", this.customerCentricForm.value.mcRegion ? 'ALL' : 'ALL');
      this.customerCentricService.getAllProductDetails(queryParams).subscribe(res => {
        if (res.result) {
          //this.custVarianceData = res.result.geoDetailsList;
        }
      });
    }
  }
  getProdDetails() {
    {
      let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams();
      queryParams = queryParams.append('pprodvar', '');
      this.customerCentricService.getAllProductDetails(queryParams).subscribe(res => {
        if (res.result) {
          this.productList = res.result.list;
        }
      });
    }
  }
  clearInput() {
    this.customerCentricForm.get('mcCustGroup')?.reset();
    this.customerCentricForm.get('mcArea')?.reset();
    this.customerCentricForm.get('mcAreaDis')?.reset();
  }
}
CustomerCentricComponent.ɵfac = function CustomerCentricComponent_Factory(t) {
  return new (t || CustomerCentricComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_CustomerCentric_CustomerCentric_service__WEBPACK_IMPORTED_MODULE_1__.CustomerCentricService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](bd_common_lib__WEBPACK_IMPORTED_MODULE_5__.AESEncryptDecryptService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](bd_common_lib__WEBPACK_IMPORTED_MODULE_5__.NotificationAlertService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
};
CustomerCentricComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: CustomerCentricComponent,
  selectors: [["app-customer-centric"]],
  decls: 40,
  vars: 3,
  consts: [[1, "content-tophead", "align-items-baseline"], [1, "pagetitle"], [1, "section", "dashboard"], [1, "row"], [1, "col-lg-12"], [1, "card"], [1, "card-body"], [1, "card-title"], [2, "color", "red"], ["method", "post", 1, "row", "bd-form", 3, "formGroup"], [1, "col-md-6"], ["for", "", 1, "col-sm-4", "col-form-label"], [1, "col-sm-6", "bd-inputfield"], ["type", "text", "maxlength", "6", "placeholder", "Please enter customer Group", "name", "mcCustGroup", "formControlName", "mcCustGroup", "value", "", 1, "form-control"], [1, "col-md-12"], ["for", "", 1, "col-sm-2", "col-form-label"], [1, "col-sm-3", "bd-inputfield"], ["type", "text", "maxlength", "80", "placeholder", "Please enter Area/ Cutomer Code", "name", "mcArea", "formControlName", "mcArea", "value", "", 1, "form-control"], [1, "col-sm-4", "bd-inputfield"], ["type", "text", "placeholder", "Auto generated value", "name", "mcAreaDis", "formControlName", "mcAreaDis", "value", "", 1, "form-control"], [1, "btn-groups", "mt-3", "ms-0"], [1, "btn", "btn-sm", "btn-primary", 3, "click"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "mb-0", "fst-italic", "fw-bold"], ["class", "col-md-12", 4, "ngIf"], ["for", ""], ["formControlName", "mcURL", "id", "cmultiple", "rows", "4", "cols", "100", 1, "form-select"]],
  template: function CustomerCentricComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Customer Centric");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "section", 2)(5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "h5", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Select Customer Group");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 8)(12, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "form", 9)(15, "div", 10)(16, "div", 3)(17, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Cutomer Group");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 14)(22, "div", 3)(23, "label", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Area / Customer Code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "input", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 14)(30, "div", 20)(31, "button", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomerCentricComponent_Template_button_click_31_listener() {
        return ctx.myReportsFun();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Select");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "button", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomerCentricComponent_Template_button_click_33_listener() {
        return ctx.clearInput();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Clear");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "p", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Tip: To Get List of values, type atleast three characters of name and press F2 Key");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "pre")(38, "pre");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](39, CustomerCentricComponent_div_39_Template, 6, 0, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.templateError);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.customerCentricForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.hideURL);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4186:
/*!*********************************************************************!*\
  !*** ./src/app/components/dhldgf-report/dhldgf-report.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DhldgfReportComponent": () => (/* binding */ DhldgfReportComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_DHLDGFReport_DHLDGFReport_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/DHLDGFReport/DHLDGFReport.service */ 9822);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var bd_common_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bd-common-lib */ 8919);






function DhldgfReportComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15)(1, "div", 3)(2, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "User Submitted Data URL");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "textarea", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
}
class DhldgfReportComponent {
  constructor(dHLDGFReport, fb, encrypt, alert) {
    this.dHLDGFReport = dHLDGFReport;
    this.fb = fb;
    this.encrypt = encrypt;
    this.alert = alert;
    this.date = new Date();
    this.year = this.date.getFullYear();
    this.month = this.date.getMonth();
    this.CurrDayMinus1 = (0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.formatDate)(new Date(new Date().setDate(new Date().getDate() - 1)), 'dd-MMM-yyyy', 'en-US');
    this.CurrMonth1Day = (0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.formatDate)(new Date(this.year, this.month, 1), 'dd-MMM-yyyy', 'en-US');
    this.templateError = '';
    this.mcFromDate = '';
    this.hideURL = false;
  }
  ngOnInit() {
    this.date = new Date();
    this.year = this.date.getFullYear();
    this.month = this.date.getMonth();
    this.CurrDayMinus1 = (0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.formatDate)(new Date(new Date().setDate(new Date().getDate() - 1)), 'dd-MMM-yyyy', 'en-US');
    this.CurrMonth1Day = (0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.formatDate)(new Date(this.year, this.month, 1), 'dd-MMM-yyyy', 'en-US');
    this.createForm(this.CurrDayMinus1, this.CurrMonth1Day);
  }
  createForm(CurrDayMinus1, CurrMonth1Day) {
    this.dHLDGFReportForm = this.fb.group({
      mcURL: [],
      //mcFromDate:CurrMonth1Day,
      //mcToDate:CurrDayMinus1
      mcFromDate: [''],
      mcToDate: ['']
    });
  }
  myReportsFun() {
    this.templateError = '';
    if (this.dHLDGFReportForm.get('mcFromDate')?.value != null && this.dHLDGFReportForm.get('mcToDate')?.value != null) {
      var ALLSTR = "&fromDT=" + (0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.formatDate)(this.dHLDGFReportForm.get('mcFromDate')?.value, 'dd-MMM-yy', 'en-US').toUpperCase() + "&ToDate=" + (0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.formatDate)(this.dHLDGFReportForm.get('mcToDate')?.value, 'dd-MMM-yy', 'en-US').toUpperCase();
      var baseUrl = this.encrypt.decryptionAES(sessionStorage.getItem('reporturl')) + '/Resources/UserData/reportuser/dhlmis.rptdesign' + ALLSTR;
      this.dHLDGFReportForm.patchValue({
        mcURL: baseUrl
      });
      window.open(baseUrl, '_blank');
    } else {
      this.templateError = 'Please select from Date and To Date';
    }
  }
}
DhldgfReportComponent.ɵfac = function DhldgfReportComponent_Factory(t) {
  return new (t || DhldgfReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_DHLDGFReport_DHLDGFReport_service__WEBPACK_IMPORTED_MODULE_0__.DHLDGFReportService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](bd_common_lib__WEBPACK_IMPORTED_MODULE_4__.AESEncryptDecryptService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](bd_common_lib__WEBPACK_IMPORTED_MODULE_4__.NotificationAlertService));
};
DhldgfReportComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: DhldgfReportComponent,
  selectors: [["app-dhldgf-report"]],
  decls: 34,
  vars: 5,
  consts: [[1, "content-tophead", "align-items-baseline"], [1, "pagetitle"], [1, "section", "dashboard"], [1, "row"], [1, "col-lg-12"], [1, "card"], [1, "card-body"], [1, "card-title"], [2, "color", "red"], ["method", "post", 1, "bd-form", 3, "formGroup"], [1, "col-md-6"], ["for", "", 1, "col-sm-4", "col-form-label"], [1, "col-sm-8", "bd-inputfield"], ["type", "date", "formControlName", "mcFromDate", "name", "mcFromDate", 1, "form-control", 3, "value"], ["type", "date", "formControlName", "mcToDate", "name", "mcToDate", 1, "form-control", 3, "value"], [1, "col-md-12"], [1, "btn-groups", "mt-3", "ms-0"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", 3, "click"], ["class", "col-md-12", 4, "ngIf"], ["for", ""], ["formControlName", "mcURL", "id", "cmultiple", "rows", "4", "cols", "100", 1, "form-select"]],
  template: function DhldgfReportComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Customer Centric");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "section", 2)(5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "h5", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "DHLDGF Report");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8)(12, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "form", 9)(15, "div", 10)(16, "div", 3)(17, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "From Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 10)(22, "div", 3)(23, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "To Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "input", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 15)(28, "div", 16)(29, "button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DhldgfReportComponent_Template_button_click_29_listener() {
        return ctx.myReportsFun();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Run Report");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "pre")(32, "pre");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, DhldgfReportComponent_div_33_Template, 6, 0, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.templateError);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.dHLDGFReportForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx.CurrMonth1Day);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx.CurrDayMinus1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.hideURL);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 2302:
/*!*****************************************************************!*\
  !*** ./src/app/components/edp-reports/edp-reports.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EdpReportsComponent": () => (/* binding */ EdpReportsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var src_app_shared_services_global_var__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/global-var */ 2480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_EDPReports_EDPReports_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/EDPReports/EDPReports.service */ 6803);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var bd_common_lib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bd-common-lib */ 8919);








function EdpReportsComponent_option_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const reg_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", reg_r3.CVALUE);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", reg_r3.CVALUE, " ");
  }
}
function EdpReportsComponent_div_58_label_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Brc ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function EdpReportsComponent_div_58_label_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "S/c ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function EdpReportsComponent_div_58_label_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Area ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function EdpReportsComponent_div_58_option_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const prod_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", prod_r8.CVALUE);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", prod_r8.CNAME, " ");
  }
}
function EdpReportsComponent_div_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10)(1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, EdpReportsComponent_div_58_label_2_Template, 2, 0, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, EdpReportsComponent_div_58_label_3_Template, 2, 0, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, EdpReportsComponent_div_58_label_4_Template, 2, 0, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 12)(6, "select", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, EdpReportsComponent_div_58_option_7_Template, 2, 2, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.ForBrachShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.ForLocationShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.ForAreaShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.PDSTList);
  }
}
function EdpReportsComponent_div_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 25)(1, "div", 3)(2, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "User Submitted Data URL");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "textarea", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
}
class EdpReportsComponent {
  constructor(eDPReportsService, fb, encrypt, alert) {
    this.eDPReportsService = eDPReportsService;
    this.fb = fb;
    this.encrypt = encrypt;
    this.alert = alert;
    this.geoList = [];
    this.date = new Date();
    this.Curyear = this.date.getFullYear();
    this.Pryear = this.date.getFullYear() - 1;
    this.prev1StartDate = new Date(new Date().getFullYear(), new Date().getMonth() - 1, 1);
    this.prev2StartDate = new Date(new Date().getFullYear(), new Date().getMonth() - 2, 1);
    this.currentDate = new Date();
    this.CurrMonthandYear = (0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.formatDate)(new Date(), 'MMMyy', 'en-US');
    this.Prev1MonthandYear = (0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.formatDate)(this.prev1StartDate, 'MMMyy', 'en-US');
    this.Prev2MonthandYear = (0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.formatDate)(this.prev2StartDate, 'MMMyy', 'en-US');
    this.GeoAll = false;
    this.hideURL = false;
    this.PDSTShow = false;
    this.toggleSetRegionValue = '';
    this.toggleSetProdCodeValue = '';
    this.toggleSetgeoDREGalue = '';
    this.PDSTList = [];
    this.ForBrachShow = false;
    this.ForLocationShow = false;
    this.ForAreaShow = false;
    this.ForAllShow = false;
    this.regionList = [];
    this.templateError = '';
  }
  ngOnInit() {
    this.getRegionDetails();
    this.createForm();
    this.toggleSetRegionValue = '';
    this.toggleSetgeoDREGalue = '';
    this.ForAllShow = false;
  }
  createForm() {
    this.edpReportsForm = this.fb.group({
      mcURL: [],
      mcMonth: [(0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.formatDate)(new Date(), 'MMMyy', 'en-US')],
      mcReportType: ['S'],
      mcRegion: ['ALL'],
      mcGeo: ['A'],
      PDST: []
    });
  }
  toggleSetRegion(item) {
    this.toggleSetRegionValue = item.target.value;
    this.PDSTShow = false;
    this.edpReportsForm.patchValue({
      mcGeo: ['A']
    });
  }
  toggleGetPDSTDetails(item) {
    console.log(this.edpReportsForm.get('mcRegion')?.value);
    if (this.edpReportsForm.get('mcGeo')?.value == "A" || this.edpReportsForm.get('mcRegion')?.value == "ALLCO") {
      this.PDSTShow = false;
    } else {
      this.PDSTShow = true;
    }
    console.log(this.PDSTShow);
    if (this.PDSTShow == true) {
      if (item.target.value == "B") {
        this.ForBrachShow = true;
        this.ForLocationShow = false;
        this.ForAreaShow = false;
      } else if (item.target.value == "S") {
        this.ForBrachShow = false;
        this.ForLocationShow = true;
        this.ForAreaShow = false;
      } else if (item.target.value == "E") {
        this.ForBrachShow = false;
        this.ForLocationShow = false;
        this.ForAreaShow = true;
      } else if (item.target.value == "A") {
        this.ForBrachShow = false;
        this.ForLocationShow = false;
        this.ForAreaShow = false;
        this.ForAllShow = true;
      }
      var test = this.toggleSetRegionValue.split(":");
      console.log("Lenght", test.length);
      console.log("Split Test", test);
      var finalRegion = "";
      if (test.length == 2) {
        finalRegion = test[1];
      } else {
        finalRegion = this.toggleSetRegionValue;
      }
      console.log("Final Region", finalRegion);
      this.PDSTList = [];
      this.toggleSetgeoDREGalue = item.target.value;
      let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams();
      queryParams = queryParams.append('pctype', item.target.value);
      queryParams = queryParams.append('pcregion', finalRegion.trim());
      this.eDPReportsService.getAllPDSTDetails(queryParams).subscribe(res => {
        if (res.result) {
          this.PDSTList = res.result.geoDetailsList;
        }
        this.edpReportsForm.patchValue({
          PDST: res.result.geoDetailsList[0].CVALUE
        });
      });
    }
  }
  getRegionDetails() {
    {
      var puid = this.encrypt.decryptionAES(src_app_shared_services_global_var__WEBPACK_IMPORTED_MODULE_0__.GlobalVar.EmpCode);
      var papplid = "0002";
      let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams();
      queryParams = queryParams.append('puid', puid);
      queryParams = queryParams.append('papplid', papplid);
      this.eDPReportsService.getAllGeoDetails(queryParams).subscribe(res => {
        if (res.result) {
          this.geoList = res.result.geoAccessList;
          let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams();
          queryParams = queryParams.append('prtype', this.geoList[0].CGEOTYPE);
          queryParams = queryParams.append('prvalue', this.geoList[0].CGEOACCESS);
          this.eDPReportsService.getAllRegionDetails(queryParams).subscribe(res => {
            if (res.result) {
              if (this.geoList[0].CGEOACCESS == "ALLCO") {
                this.regionList = res.result.list;
                this.GeoAll = true;
                this.edpReportsForm.patchValue({
                  mcRegion: res.result.list[0].CVALUE
                });
              } else {
                this.GeoAll = false;
                this.regionList = res.result.list;
                console.log(res.result.list);
                this.edpReportsForm.patchValue({
                  mcRegion: res.result.list[0].CVALUE
                });
              }
            }
          });
        }
      });
    }
  }
  myReportsFun() {
    var rtypevar = null;
    var rvaluevar = null;
    var rprodvar = null;
    var rapplid = "0002";
    var vcprodcode = this.edpReportsForm.get('vcprodcode')?.value == undefined ? null : this.edpReportsForm.get('vcprodcode')?.value;
    ;
    var mcreptype = this.edpReportsForm.get('mcreptype')?.value == undefined ? null : this.edpReportsForm.get('mcreptype')?.value;
    ;
    var rtype = this.edpReportsForm.get('rtype')?.value == undefined ? null : this.edpReportsForm.get('rtype')?.value;
    ;
    var rvalue = this.edpReportsForm.get('rvalue')?.value == undefined ? null : this.edpReportsForm.get('rvalue')?.value;
    ;
    var frmPeriod = this.edpReportsForm.get('frmPeriod')?.value == undefined ? null : this.edpReportsForm.get('frmPeriod')?.value;
    ;
    var toPeriod = this.edpReportsForm.get('toPeriod')?.value == undefined ? null : this.edpReportsForm.get('toPeriod')?.value;
    ;
    var mcsubprdcd = "";
    var mcpacktype = "";
    var tcprodcode = this.edpReportsForm.get('vcprodcode')?.value == undefined ? null : this.edpReportsForm.get('vcprodcode')?.value;
    ;
    var RPT = this.edpReportsForm.get('RPT')?.value == undefined ? null : this.edpReportsForm.get('RPT')?.value;
    ;
    var PMTH = this.edpReportsForm.get('PMTH')?.value == undefined ? null : this.edpReportsForm.get('PMTH')?.value;
    ;
    var PYEAR = this.edpReportsForm.get('PYEAR')?.value == undefined ? null : this.edpReportsForm.get('PYEAR')?.value;
    ;
    var PTYPE = this.edpReportsForm.get('PTYPE')?.value == undefined ? null : this.edpReportsForm.get('PTYPE')?.value;
    ;
    var DREG = this.edpReportsForm.get('DREG')?.value == undefined ? null : this.edpReportsForm.get('DREG')?.value;
    ;
    var mcmthyear = this.edpReportsForm.get('mcmthyear')?.value == undefined ? null : this.edpReportsForm.get('mcmthyear')?.value;
    ;
    var PDST = this.edpReportsForm.get('PDST')?.value == undefined ? null : this.edpReportsForm.get('PDST')?.value;
    ;
    var prtype = "";
    var prvalue = "";
    if (vcprodcode != null && (vcprodcode == "T" || vcprodcode == "A" || vcprodcode == "C" || vcprodcode == "D" || vcprodcode == "E" || vcprodcode == "G" || vcprodcode == "I" || vcprodcode == "K" || vcprodcode == "L" || vcprodcode == "P" || vcprodcode == "V")) {
      var var1 = vcprodcode.substring(0, 1);
      var var2 = "T";
      var var3 = "T";
      tcprodcode = var1;
      mcsubprdcd = var2;
      mcpacktype = var3;
    }
    if (vcprodcode != null && (vcprodcode == "APC" || vcprodcode == "EPC")) {
      var var1 = vcprodcode.substring(0, 1);
      var var2 = "PC";
      var var3 = "T";
      tcprodcode = var1;
      mcsubprdcd = var2;
      mcpacktype = var3;
    }
    if (vcprodcode != null && vcprodcode == "APCL") {
      var var1 = vcprodcode.substring(0, 1);
      var var2 = "PC";
      var var3 = "L";
      tcprodcode = var1;
      mcsubprdcd = var2;
      mcpacktype = var3;
    }
    let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams();
    queryParams = queryParams.append('puid', this.encrypt.decryptionAES(src_app_shared_services_global_var__WEBPACK_IMPORTED_MODULE_0__.GlobalVar.EmpCode));
    queryParams = queryParams.append('papplid', rapplid);
    this.eDPReportsService.getAllGeoDetails(queryParams).subscribe(res => {
      if (res.result) {
        this.geoList = res.result.geoAccessList;
      }
    });
    rtypevar = this.geoList[0];
    rvaluevar = this.geoList[1];
    rprodvar = this.geoList[2];
    if (rtypevar != null && (rtypevar == "R" || rtypevar == "B" || rtypevar == "A" || rtypevar == "S")) {
      rtype = rtypevar;
      rvalue = rvaluevar;
    }
    if (rvalue != null) {
      var vlength = rvalue.length();
      rtype = rvalue.substring(0, 1);
      rvalue = rvalue.substring(1, vlength);
    }
    if (DREG != null && (DREG.equals("B") || DREG.equals("E"))) {
      prtype = DREG;
      prvalue = PDST;
    } else {
      prtype = rtype;
      prvalue = rvalue;
    }
    this.templateError = '';
    if (this.edpReportsForm.get('mcMonth')?.value != null && this.edpReportsForm.get('mcReportType')?.value != null && this.edpReportsForm.get('mcGeo')?.value != null) {
      var TrtypeNew = "";
      var TrtypeNew2 = "";
      if (this.edpReportsForm.get('mcGeo')?.value == "A") {
        if (this.edpReportsForm.get('mcRegion')?.value == "ALLCO") {
          TrtypeNew = "ALL";
        } else {
          TrtypeNew = this.edpReportsForm.get('mcRegion')?.value;
        }
      } else {
        TrtypeNew = this.edpReportsForm.get('PDST')?.value;
      }
      if (this.edpReportsForm.get('mcGeo')?.value == "A" && this.edpReportsForm.get('mcRegion')?.value == "ALLCO") {
        TrtypeNew2 = "C";
      } else if (this.edpReportsForm.get('mcGeo')?.value == "A" && this.edpReportsForm.get('mcRegion')?.value != "ALLCO") {
        TrtypeNew2 = "R";
      } else {
        TrtypeNew2 = this.edpReportsForm.get('mcGeo')?.value;
      }
      var ALLSTR = "&tddate=" + this.edpReportsForm.get('mcMonth')?.value.toUpperCase() + "&tRTYPE=" + TrtypeNew2 + "&tRVALUE=" + TrtypeNew;
      var baseUrl = this.encrypt.decryptionAES(sessionStorage.getItem('reporturl')) + '/Resources/UserData/reportuser/EDPDSS.rptdesign' + ALLSTR;
      this.edpReportsForm.patchValue({
        mcURL: baseUrl
      });
      window.open(baseUrl, '_blank');
    } else {
      this.templateError = "Please Enter/Select All required fileds";
    }
  }
}
EdpReportsComponent.ɵfac = function EdpReportsComponent_Factory(t) {
  return new (t || EdpReportsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_EDPReports_EDPReports_service__WEBPACK_IMPORTED_MODULE_1__.EDPReportsService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](bd_common_lib__WEBPACK_IMPORTED_MODULE_6__.AESEncryptDecryptService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](bd_common_lib__WEBPACK_IMPORTED_MODULE_6__.NotificationAlertService));
};
EdpReportsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: EdpReportsComponent,
  selectors: [["app-edp-reports"]],
  decls: 66,
  vars: 11,
  consts: [[1, "content-tophead", "align-items-baseline"], [1, "pagetitle"], [1, "section", "dashboard"], [1, "row"], [1, "col-lg-12"], [1, "card"], [1, "card-body"], [1, "card-title"], [2, "color", "red"], ["method", "post", 1, "bd-form", 3, "formGroup"], [1, "col-md-6"], ["for", "", 1, "col-sm-4", "col-form-label"], [1, "col-sm-8", "bd-inputfield"], ["name", "mcMonth", "formControlName", "mcMonth", 1, "form-select"], [3, "value"], ["name", "mcReportType", "formControlName", "mcReportType", 1, "form-select"], ["value", "S"], ["value", "R"], ["name", "mcRegion", "formControlName", "mcRegion", 1, "form-select", 3, "change"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["name", "mcGeo", "formControlName", "mcGeo", 1, "form-select", 3, "change"], ["value", "A"], ["value", "B"], ["value", "E"], ["class", "col-md-6", 4, "ngIf"], [1, "col-md-12"], [1, "btn-groups", "mt-3", "ms-0"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", 3, "click"], ["class", "col-md-12", 4, "ngIf"], [3, "ngValue"], ["for", "", "class", "col-sm-4 col-form-label", 4, "ngIf"], ["name", "PDST", "formControlName", "PDST", 1, "form-select"], [3, "value", 4, "ngFor", "ngForOf"], ["for", ""], ["formControlName", "mcURL", "id", "cmultiple", "rows", "4", "cols", "100", 1, "form-select"]],
  template: function EdpReportsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Customer Centric");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "section", 2)(5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "h5", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "EDP Report");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 8)(12, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "form", 9)(15, "div", 10)(16, "div", 3)(17, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Month");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 12)(20, "select", 13)(21, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 10)(28, "div", 3)(29, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Report");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 12)(32, "select", 15)(33, "option", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "DSS Reports");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "option", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "DSR Reports");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 10)(38, "div", 3)(39, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Region");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 12)(42, "select", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function EdpReportsComponent_Template_select_change_42_listener($event) {
        return ctx.toggleSetRegion($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](43, EdpReportsComponent_option_43_Template, 2, 2, "option", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 10)(45, "div", 3)(46, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "GEO");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 12)(49, "select", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function EdpReportsComponent_Template_select_change_49_listener($event) {
        return ctx.toggleGetPDSTDetails($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "option", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "a.All");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "option", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "b.Branch");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "option", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "c.Area");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "option", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "e.Location");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](58, EdpReportsComponent_div_58_Template, 8, 4, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 25)(60, "div", 26)(61, "button", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EdpReportsComponent_Template_button_click_61_listener() {
        return ctx.myReportsFun();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "Run");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](63, "pre")(64, "pre");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](65, EdpReportsComponent_div_65_Template, 6, 0, "div", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.templateError);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.edpReportsForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.CurrMonthandYear);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.CurrMonthandYear);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.Prev1MonthandYear);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.Prev1MonthandYear);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.Prev2MonthandYear);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.Prev2MonthandYear);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.regionList);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.PDSTShow);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.hideURL);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 9252:
/*!*********************************************************************!*\
  !*** ./src/app/components/etail-tracker/etail-tracker.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EtailTrackerComponent": () => (/* binding */ EtailTrackerComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var src_app_shared_services_global_var__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/global-var */ 2480);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_EtailTracker_EtailTracker_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/EtailTracker/EtailTracker.service */ 9583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var bd_common_lib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bd-common-lib */ 8919);








function EtailTrackerComponent_option_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const reg_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", reg_r2.CVALUE);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" \u00A0\u00A0\u00A0\u00A0", reg_r2.CVALUE, " ");
  }
}
function EtailTrackerComponent_div_81_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 36)(1, "div", 3)(2, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "User Submitted Data URL");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "textarea", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
}
class EtailTrackerComponent {
  constructor(etailTrackerService, fb, encrypt, alert) {
    this.etailTrackerService = etailTrackerService;
    this.fb = fb;
    this.encrypt = encrypt;
    this.alert = alert;
    this.date = new Date();
    this.Curyear = this.date.getFullYear();
    this.Pryear = this.date.getFullYear() - 1;
    this.regionList = [];
    this.geoList = [];
    this.templateError = '';
    this.mcCustomerSearch = '';
    this.mcCustomerSearchValue = '';
    this.GeoAll = false;
    this.hideURL = false;
  }
  ngOnInit() {
    this.getRegionDetails();
    this.createForm();
  }
  createForm() {
    this.etailTrackerForm = this.fb.group({
      mcURL: [],
      mcMonth: ['01'],
      mcYear: [(0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.formatDate)(new Date(), 'yyyy', 'en-US')],
      mcGeography: [],
      mcCustomerSearch: ['ALL'],
      mcCustomerSearchValue: ['ALL']
    });
  }
  getRegionDetails() {
    {
      var puid = this.encrypt.decryptionAES(src_app_shared_services_global_var__WEBPACK_IMPORTED_MODULE_0__.GlobalVar.EmpCode);
      var papplid = "0002";
      let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams();
      queryParams = queryParams.append('puid', puid);
      queryParams = queryParams.append('papplid', papplid);
      this.etailTrackerService.getAllGeoDetails(queryParams).subscribe(res => {
        if (res.result) {
          this.geoList = res.result.geoAccessList;
          let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams();
          queryParams = queryParams.append('prtype', this.geoList[0].CGEOTYPE);
          queryParams = queryParams.append('prvalue', this.geoList[0].CGEOACCESS);
          this.etailTrackerService.getAllRegionDetails(queryParams).subscribe(res => {
            if (res.result) {
              if (this.geoList[0].CGEOACCESS == "ALLCO") {
                this.regionList = res.result.list;
                this.GeoAll = true;
                this.etailTrackerForm.patchValue({
                  mcGeography: res.result.list[0].CVALUE
                });
              } else {
                this.GeoAll = false;
                this.regionList = res.result.list;
                console.log(res.result.list);
                this.etailTrackerForm.patchValue({
                  mcGeography: res.result.list[0].CVALUE
                });
              }
            }
          });
        }
      });
    }
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
  onFetechCustGroup() {
    this.mcCustomerSearch = '';
    this.mcCustomerSearchValue = '';
    if (this.etailTrackerForm.get("mcCustomerSearch")?.value == "" || this.etailTrackerForm.get("mcCustomerSearch")?.value == null) {
      this.templateError = "Please enter Cust Group";
    } else {
      this.templateError = '';
      let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams();
      queryParams = queryParams.append('CCOMPGRP', this.etailTrackerForm.get("mcCustomerSearch")?.value);
      this.etailTrackerService.getCustGroupDetails(queryParams).subscribe(res => {
        if (res.result) {
          if (res.result.custGroupList == null || res.result.custGroupList === 0 || res.result.custGroupList.length === 0) {
            if (this.etailTrackerForm.get("mcCustomerSearch")?.value == "ALL" || this.etailTrackerForm.get("mcCustomerSearch")?.value == "All" || this.etailTrackerForm.get("mcCustomerSearch")?.value == "all" || this.etailTrackerForm.get("mcCustomerSearch")?.value == "All" || this.etailTrackerForm.get("mcCustomerSearch")?.value == "all" || this.etailTrackerForm.get("mcCustomerSearch")?.value == "aLL" || this.etailTrackerForm.get("mcCustomerSearch")?.value == "aLl") {
              this.mcCustomerSearchValue = 'ALL';
            } else {
              this.templateError = "No Data for" + "   " + "[" + this.etailTrackerForm.get("mcCustomerSearch")?.value + "]" + "   " + "this Cust Group";
              this.etailTrackerForm.patchValue({
                mcCustomerSearchValue: ""
              });
            }
          } else {
            this.etailTrackerForm.patchValue({
              mcCustomerSearch: res.result.custGroupList[0].CCOMPGRP,
              mcCustomerSearchValue: res.result.custGroupList[0].CCOMPNAME
            });
          }
          if (this.etailTrackerForm.get("mcCustomerSearch")?.value == "ALL" || this.etailTrackerForm.get("mcCustomerSearch")?.value == "All" || this.etailTrackerForm.get("mcCustomerSearch")?.value == "all" || this.etailTrackerForm.get("mcCustomerSearch")?.value == "All" || this.etailTrackerForm.get("mcCustomerSearch")?.value == "all" || this.etailTrackerForm.get("mcCustomerSearch")?.value == "aLL" || this.etailTrackerForm.get("mcCustomerSearch")?.value == "aLl") {
            this.etailTrackerForm.patchValue({
              mcCustomerSearch: "ALL",
              mcCustomerSearchValue: "ALL"
            });
          }
        }
      });
    }
  }
  onCustGroupEnter(event) {
    this.mcCustomerSearch = '';
    this.mcCustomerSearchValue = '';
    if (this.etailTrackerForm.get("mcCustomerSearch")?.value == "" || this.etailTrackerForm.get("mcCustomerSearch")?.value == null) {
      this.templateError = "Please enter Cust Group";
    } else {
      if (event.keyCode == 13 || event.keyCode == 9) {
        this.templateError = '';
        let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams();
        queryParams = queryParams.append('CCOMPGRP', this.etailTrackerForm.get("mcCustomerSearch")?.value);
        this.etailTrackerService.getCustGroupDetails(queryParams).subscribe(res => {
          if (res.result) {
            if (res.result.custGroupList == null || res.result.custGroupList === 0 || res.result.custGroupList.length === 0) {
              if (this.etailTrackerForm.get("mcCustomerSearch")?.value == "ALL" || this.etailTrackerForm.get("mcCustomerSearch")?.value == "All" || this.etailTrackerForm.get("mcCustomerSearch")?.value == "all" || this.etailTrackerForm.get("mcCustomerSearch")?.value == "All" || this.etailTrackerForm.get("mcCustomerSearch")?.value == "all" || this.etailTrackerForm.get("mcCustomerSearch")?.value == "aLL" || this.etailTrackerForm.get("mcCustomerSearch")?.value == "aLl") {
                this.mcCustomerSearchValue = 'ALL';
              } else {
                this.templateError = "No Data for" + "   " + "[" + this.etailTrackerForm.get("mcCustomerSearch")?.value + "]" + "   " + "this Cust Group";
                this.etailTrackerForm.patchValue({
                  mcCustomerSearchValue: ""
                });
              }
            } else {
              this.etailTrackerForm.patchValue({
                mcCustomerSearch: res.result.custGroupList[0].CCOMPGRP,
                mcCustomerSearchValue: res.result.custGroupList[0].CCOMPNAME
              });
            }
            if (this.etailTrackerForm.get("mcCustomerSearch")?.value == "ALL" || this.etailTrackerForm.get("mcCustomerSearch")?.value == "All" || this.etailTrackerForm.get("mcCustomerSearch")?.value == "all" || this.etailTrackerForm.get("mcCustomerSearch")?.value == "All" || this.etailTrackerForm.get("mcCustomerSearch")?.value == "all" || this.etailTrackerForm.get("mcCustomerSearch")?.value == "aLL" || this.etailTrackerForm.get("mcCustomerSearch")?.value == "aLl") {
              this.etailTrackerForm.patchValue({
                mcCustomerSearch: "ALL",
                mcCustomerSearchValue: "ALL"
              });
            }
          }
        });
      }
    }
  }
  myReportsFun() {
    this.templateError = '';
    if (this.etailTrackerForm.get('mcMonth')?.value != null && this.etailTrackerForm.get('mcYear')?.value != null && this.etailTrackerForm.get('mcGeography')?.value != null && this.etailTrackerForm.get('mcCustomerSearchValue')?.value != null) {
      var ALLSTR = "&PMTH=" + this.etailTrackerForm.get('mcMonth')?.value + "&PYEAR=" + this.etailTrackerForm.get('mcYear')?.value + "&PREG=" + this.etailTrackerForm.get('mcGeography')?.value + "&PCUST=" + this.etailTrackerForm.get('mcCustomerSearch')?.value;
      var baseUrl = this.encrypt.decryptionAES(sessionStorage.getItem('reporturl')) + '/Resources/UserData/reportuser/ETAIL_TRACKER.rptdesign' + ALLSTR;
      this.etailTrackerForm.patchValue({
        mcURL: baseUrl
      });
      window.open(baseUrl, '_blank');
    } else {
      this.templateError = "Please Enter/Select All required fileds";
    }
  }
}
EtailTrackerComponent.ɵfac = function EtailTrackerComponent_Factory(t) {
  return new (t || EtailTrackerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_EtailTracker_EtailTracker_service__WEBPACK_IMPORTED_MODULE_1__.EtailTrackerService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](bd_common_lib__WEBPACK_IMPORTED_MODULE_6__.AESEncryptDecryptService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](bd_common_lib__WEBPACK_IMPORTED_MODULE_6__.NotificationAlertService));
};
EtailTrackerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: EtailTrackerComponent,
  selectors: [["app-etail-tracker"]],
  decls: 82,
  vars: 8,
  consts: [[1, "content-tophead", "align-items-baseline"], [1, "pagetitle"], [1, "section", "dashboard"], [1, "row"], [1, "col-lg-12"], [1, "card"], [1, "card-body"], [1, "card-title"], [2, "color", "red"], ["method", "post", 1, "bd-form", 3, "formGroup"], [1, "col-md-6"], ["for", "", 1, "col-sm-4", "col-form-label"], [1, "col-sm-8", "bd-inputfield"], ["name", "mcMonth", "formControlName", "mcMonth", 1, "form-select"], ["value", "01"], ["value", "02"], ["value", "03"], ["value", "04"], ["value", "05"], ["value", "06"], ["value", "07"], ["value", "08"], ["value", "09"], ["value", "10"], ["value", "11"], ["value", "12"], ["name", "mcYear", "formControlName", "mcYear", 1, "form-select"], [3, "value"], ["name", "mcGeography", "formControlName", "mcGeography", 1, "form-select"], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "col-sm-2", "bd-inputfield"], ["type", "text", "onKeyPress", "if(this.value.length==6) return false;", "name", "mcCustomerSearch", "formControlName", "mcCustomerSearch", 1, "form-control", 3, "keypress", "keydown"], [1, "col-sm-4", "bd-inputfield"], ["type", "text", "readonly", "", "name", "mcCustomerSearchValue", "formControlName", "mcCustomerSearchValue", "value", "", 1, "form-control"], ["href", "javascript:void(0)", 1, "btn", "btn-sm", "btn-primary", "btn-input", 3, "click"], ["type", "button", 1, "btn", "btn-sm", "btn-secondary", 3, "click"], [1, "col-md-12"], [1, "btn-groups", "ms-0"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", 3, "click"], ["class", "col-md-12", 4, "ngIf"], [3, "ngValue"], ["for", ""], ["formControlName", "mcURL", "id", "cmultiple", "rows", "4", "cols", "100", 1, "form-select"]],
  template: function EtailTrackerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Customer Centric");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "section", 2)(5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "h5", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Etail Tracker");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 8)(12, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "form", 9)(15, "div", 10)(16, "div", 3)(17, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Month");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 12)(20, "select", 13)(21, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "JAN");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "FEB");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "option", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "MAR");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "option", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "APR");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "option", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "MAY");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "option", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "JUN");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "option", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "JUL");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "option", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "AUG");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "option", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "SEP");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "option", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "OCT");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "option", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "NOV");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "option", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "DEC");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 10)(46, "div", 3)(47, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Year");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 12)(50, "select", 26)(51, "option", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "option", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 10)(56, "div", 3)(57, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "Region");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 12)(60, "select", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](61, EtailTrackerComponent_option_61_Template, 2, 2, "option", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 10)(63, "div", 3)(64, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "Customer");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 30)(67, "input", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keypress", function EtailTrackerComponent_Template_input_keypress_67_listener($event) {
        return ctx.numberOnly($event);
      })("keydown", function EtailTrackerComponent_Template_input_keydown_67_listener($event) {
        return ctx.onCustGroupEnter($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](69, "input", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 30)(71, "a", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EtailTrackerComponent_Template_a_click_71_listener() {
        return ctx.onFetechCustGroup();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, "Search");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "button", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EtailTrackerComponent_Template_button_click_73_listener() {
        return ctx.etailTrackerForm.reset();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, "Reset");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "div", 36)(76, "div", 37)(77, "button", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EtailTrackerComponent_Template_button_click_77_listener() {
        return ctx.myReportsFun();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, "Continue");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](79, "pre")(80, "pre");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](81, EtailTrackerComponent_div_81_Template, 6, 0, "div", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.templateError);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.etailTrackerForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](37);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.Curyear);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.Curyear);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.Pryear);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.Pryear);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.regionList);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.hideURL);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8263:
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var bd_common_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bd-common-lib */ 8919);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var src_app_shared_services_global_var__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/global-var */ 2480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_CustomerCentric_CustomerCentric_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/CustomerCentric/CustomerCentric.service */ 3689);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);







class HomeComponent {
  constructor(authService, ReportURLService, activatedRoute, router, encrypt) {
    this.authService = authService;
    this.ReportURLService = ReportURLService;
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
    this.empBranch = '';
    this.CDCRRole = '';
    this.authToken = '';
    this.empRegion = '';
    this.rapplid = '';
  }
  ngOnInit() {
    bd_common_lib__WEBPACK_IMPORTED_MODULE_2__.CommonGlobalVar.USER_UI = src_app_shared_services_global_var__WEBPACK_IMPORTED_MODULE_0__.GlobalVar.USER_UI.toString();
    sessionStorage.removeItem('empCode');
    sessionStorage.removeItem('currentUser');
    sessionStorage.removeItem('empCRRole');
    sessionStorage.removeItem('empName');
    sessionStorage.removeItem('empCLevel');
    sessionStorage.removeItem('authToken');
    sessionStorage.removeItem('CDCRRole');
    sessionStorage.removeItem('ServiceCode');
    sessionStorage.removeItem('empRegion');
    sessionStorage.removeItem('empLocArea');
    this.activatedRoute.queryParams.subscribe(params => {
      this.empCRRole = params['ecr'];
      this.empRole = params['er'];
      this.empCode = params['ec'];
      this.empLocArea = params['el'];
      this.empName = params['en'];
      this.empCLevel = params['cl'];
      this.authToken = params['at'];
    });
    if (src_app_shared_services_global_var__WEBPACK_IMPORTED_MODULE_0__.GlobalVar.Environment == 'Localhost') {
      //USE THIS FOR DEVELOPMENT
      this.setDevSession();
    } else {
      //USE THIS FOR PRODUCTION & TEST
      this.setProdSession();
    }
  }
  GetReportURL(callfrom) {
    let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
    queryParams = queryParams.append('rptype', callfrom);
    this.ReportURLService.getReportURLdetails(queryParams).subscribe(res => {
      if (res.result) {
        sessionStorage.setItem('reporturl', this.encrypt.encryptionAES(res.result.reportURLDetails[0].URLDETAILS));
        console.log("Output URL-", res.result.reportURLDetails[0].URLDETAILS);
        console.log("Output URL session-", sessionStorage.getItem('reporturl'));
      }
    });
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
      if (this.authToken !== undefined) {
        sessionStorage.setItem('authToken', this.authToken);
      }
      this.GetReportURL("PROD");
      this.authService.setReload();
    }
  }
  setDevSession() {
    sessionStorage.setItem('empCode', this.encrypt.encryptionAES('68530'));
    sessionStorage.setItem('empCRRole', this.encrypt.encryptionAES('I'));
    sessionStorage.setItem('empRole', this.encrypt.encryptionAES('I'));
    sessionStorage.setItem('empLocArea', this.encrypt.encryptionAES('HQC'));
    sessionStorage.setItem('empName', this.encrypt.encryptionAES('Ashish Dhavale'));
    sessionStorage.setItem('empCLevel', this.encrypt.encryptionAES('-1'));
    sessionStorage.setItem('rapplid', this.encrypt.encryptionAES('0002'));
    this.GetReportURL("DEV");
    this.authService.setReload();
  }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) {
  return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](bd_common_lib__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_CustomerCentric_CustomerCentric_service__WEBPACK_IMPORTED_MODULE_1__.CustomerCentricService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](bd_common_lib__WEBPACK_IMPORTED_MODULE_2__.AESEncryptDecryptService));
};
HomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: HomeComponent,
  selectors: [["app-home"]],
  decls: 11,
  vars: 0,
  consts: [[1, "content-tophead", "align-items-baseline"], [1, "pagetitle"], [1, "section", "dashboard"], [1, "row"], [1, "col-lg-12"], [1, "card"], [1, "card-body"], [1, "card-title"]],
  template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Customer Centric");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "section", 2)(5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "h5", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Dashboard");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 3916:
/*!*******************************************************************************!*\
  !*** ./src/app/components/industry-verticals/industry-verticals.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndustryVerticalsComponent": () => (/* binding */ IndustryVerticalsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var src_app_shared_services_global_var__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/global-var */ 2480);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_IndustryVerticals_IndustryVerticals_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/IndustryVerticals/IndustryVerticals.service */ 9111);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var bd_common_lib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bd-common-lib */ 8919);








function IndustryVerticalsComponent_option_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const prod_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", prod_r7.CVALUE);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", prod_r7.CNAME, " ");
  }
}
function IndustryVerticalsComponent_option_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const reg_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", reg_r8.CVALUE);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" \u00A0\u00A0\u00A0\u00A0", reg_r8.CVALUE, " ");
  }
}
function IndustryVerticalsComponent_option_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const cal_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", cal_r9.CNAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", cal_r9.CNAME, " ");
  }
}
function IndustryVerticalsComponent_option_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const cal_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", cal_r10.CNAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", cal_r10.CNAME, " ");
  }
}
function IndustryVerticalsComponent_option_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const cal_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", cal_r11.CNAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", cal_r11.CNAME, " ");
  }
}
function IndustryVerticalsComponent_option_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const cal_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", cal_r12.CNAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", cal_r12.CNAME, " ");
  }
}
function IndustryVerticalsComponent_div_120_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 40)(1, "div", 3)(2, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "User Submitted Data URL");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "textarea", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
}
class IndustryVerticalsComponent {
  constructor(industryVerticalsService, fb, encrypt, alert) {
    this.industryVerticalsService = industryVerticalsService;
    this.fb = fb;
    this.encrypt = encrypt;
    this.alert = alert;
    this.productList = [];
    this.regionList = [];
    this.geoList = [];
    this.calanderList = [];
    this.industryVerticalsData = [];
    this.templateError = '';
    this.GeoAll = false;
    this.hideURL = false;
  }
  ngOnInit() {
    this.getProdDetails();
    this.getRegionDetails();
    this.getCalanderDetails();
    this.createForm();
  }
  createForm() {
    this.industryVerticalsForm = this.fb.group({
      mcURL: [],
      mcProduct: [],
      mcGeography: [],
      mcFromMonth: [],
      mcToMonth: [],
      mcFromMonthC: [],
      mcToMonthC: [],
      mcSegmentType: [],
      mcDataMeasure: [],
      mcEvaluateU: [],
      mcWithPS: [],
      mcCashCredit: []
    });
  }
  myReportsFun() {
    var rtypevar = null;
    var rvaluevar = null;
    var rprodvar = null;
    var rapplid = "0002";
    var vcprodcode = this.industryVerticalsForm.get('mcProduct')?.value;
    var mcsubprdcd = "";
    var mcpacktype = "";
    var tcprodcode = vcprodcode;
    this.templateError = '';
    var rtypevar = null;
    var rvaluevar = null;
    var rtype = null;
    var rvalue = null;
    if (vcprodcode != null && (vcprodcode == "T" || vcprodcode == "A" || vcprodcode == "C" || vcprodcode == "D" || vcprodcode == "E" || vcprodcode == "G" || vcprodcode == "I" || vcprodcode == "K" || vcprodcode == "L" || vcprodcode == "P" || vcprodcode == "V")) {
      var var1 = vcprodcode.substring(0, 1);
      var var2 = "T";
      var var3 = "T";
      tcprodcode = var1;
      mcsubprdcd = var2;
      mcpacktype = var3;
    }
    if (vcprodcode != null && (vcprodcode == "APC" || vcprodcode == "EPC")) {
      var var1 = vcprodcode.substring(0, 1);
      var var2 = "PC";
      var var3 = "T";
      tcprodcode = var1;
      mcsubprdcd = var2;
      mcpacktype = var3;
    }
    if (vcprodcode != null && vcprodcode == "APCL") {
      var var1 = vcprodcode.substring(0, 1);
      var var2 = "PC";
      var var3 = "L";
      tcprodcode = var1;
      mcsubprdcd = var2;
      mcpacktype = var3;
    }
    let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
    queryParams = queryParams.append('puid', this.encrypt.decryptionAES(src_app_shared_services_global_var__WEBPACK_IMPORTED_MODULE_0__.GlobalVar.EmpCode));
    queryParams = queryParams.append('papplid', rapplid);
    this.industryVerticalsService.getAllGeoDetails(queryParams).subscribe(res => {
      if (res.result) {
        this.geoList = res.result.geoAccessList;
      }
    });
    rtypevar = this.geoList[0];
    rvaluevar = this.geoList[1];
    rprodvar = this.geoList[2];
    if (rtypevar != null && (rtypevar == "R" || rtypevar == "B" || rtypevar == "A" || rtypevar == "S")) {
      rtype = rtypevar;
      rvalue = rvaluevar;
    }
    if (this.industryVerticalsForm.get('mcProduct')?.value != null && this.industryVerticalsForm.get('mcGeography')?.value != null && this.industryVerticalsForm.get('mcToMonth')?.value != null && this.industryVerticalsForm.get('mcToMonth')?.value != null && this.industryVerticalsForm.get('mcFromMonthC')?.value != null && this.industryVerticalsForm.get('mcToMonthC')?.value != null && this.industryVerticalsForm.get('mcDataMeasure')?.value != null && this.industryVerticalsForm.get('mcWithPS')?.value != null && this.industryVerticalsForm.get('mcEvaluateU')?.value != null && this.industryVerticalsForm.get('mcSegmentType')?.value != null && this.industryVerticalsForm.get('mcCashCredit')?.value != null) {
      var puid = this.encrypt.decryptionAES(src_app_shared_services_global_var__WEBPACK_IMPORTED_MODULE_0__.GlobalVar.EmpCode);
      let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
      queryParams = queryParams.append('puid', puid);
      queryParams = queryParams.append('papplid', rapplid);
      this.industryVerticalsService.getAllGeoDetails(queryParams).subscribe(res => {
        if (res.result) {
          this.geoList = res.result.geoAccessList;
          rtypevar = this.geoList[0].CGEOTYPE;
          rvaluevar = this.geoList[0].CGEOACCESS;
          console.log(this.geoList[0].CGEOTYPE);
          console.log(this.geoList[0].CGEOACCESS);
          var ALLSTR = "&tUserCode=" + puid +
          //null
          "&tPrttype=" + this.geoList[0].CGEOTYPE +
          //null
          "&tPrvalue=" + this.industryVerticalsForm.get('mcGeography')?.value +
          //ALLCO
          "&tCprod=" + tcprodcode +
          //D
          "&tCsubprdcd=" + mcsubprdcd +
          //D
          "&tpCpacktype=" + mcpacktype +
          //T
          "&tfmthyr=" + this.industryVerticalsForm.get('mcFromMonth')?.value +
          //MAY2022
          "&tftmthyr=" + this.industryVerticalsForm.get('mcToMonth')?.value +
          //MAY2022
          "&tcmthyr=" + this.industryVerticalsForm.get('mcFromMonthC')?.value +
          //MAY2023
          "&tctmthyr=" + this.industryVerticalsForm.get('mcToMonthC')?.value +
          //MAY2023
          "&ttorder=" + this.industryVerticalsForm.get('mcEvaluateU')?.value +
          //G
          "&tfsflg=" + this.industryVerticalsForm.get('mcWithPS')?.value +
          //
          "&tSegmnt=" + this.industryVerticalsForm.get('mcSegmentType')?.value +
          //  
          "&tDataflg=" + this.industryVerticalsForm.get('mcDataMeasure')?.value +
          //R
          "&tPcshcr=" + this.industryVerticalsForm.get('mcCashCredit')?.value;
          var baseUrl = this.encrypt.decryptionAES(sessionStorage.getItem('reporturl')) + '/Resources/UserData/reportuser/Indvert_sum.rptdesign' + ALLSTR;
          this.industryVerticalsForm.patchValue({
            mcURL: baseUrl
          });
          window.open(baseUrl, '_blank');
        }
      });
    } else {
      this.templateError = "Please Enter/Select All required fileds";
    }
  }
  getProdDetails() {
    {
      let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
      queryParams = queryParams.append('pprodvar', '');
      this.industryVerticalsService.getAllProductDetails(queryParams).subscribe(res => {
        if (res.result) {
          this.productList = res.result.list;
          this.industryVerticalsForm.patchValue({
            mcProduct: 'T',
            mcFromMonth: (0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.formatDate)(new Date(), 'MMMyyyy', 'en-US').toUpperCase(),
            mcToMonth: (0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.formatDate)(new Date(), 'MMMyyyy', 'en-US').toUpperCase(),
            mcFromMonthC: (0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.formatDate)(new Date(new Date().getFullYear() - 1, new Date().getMonth(), 1), 'MMMyyyy', 'en-US').toUpperCase(),
            mcToMonthC: (0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.formatDate)(new Date(new Date().getFullYear() - 1, new Date().getMonth(), 1), 'MMMyyyy', 'en-US').toUpperCase(),
            mcSegmentType: 'I',
            mcDataMeasure: 'R',
            mcEvaluateU: 'T',
            mcWithPS: 'Y',
            mcCashCredit: 'T'
          });
        }
      });
    }
  }
  getRegionDetails() {
    {
      var puid = this.encrypt.decryptionAES(src_app_shared_services_global_var__WEBPACK_IMPORTED_MODULE_0__.GlobalVar.EmpCode);
      var papplid = "0002";
      let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
      queryParams = queryParams.append('puid', puid);
      queryParams = queryParams.append('papplid', papplid);
      this.industryVerticalsService.getAllGeoDetails(queryParams).subscribe(res => {
        if (res.result) {
          this.geoList = res.result.geoAccessList;
          let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
          queryParams = queryParams.append('prtype', this.geoList[0].CGEOTYPE);
          queryParams = queryParams.append('prvalue', this.geoList[0].CGEOACCESS);
          this.industryVerticalsService.getAllRegionDetails(queryParams).subscribe(res => {
            if (res.result) {
              if (this.geoList[0].CGEOACCESS == "ALLCO") {
                this.regionList = res.result.list;
                this.GeoAll = true;
                this.industryVerticalsForm.patchValue({
                  mcGeography: res.result.list[0].CVALUE
                });
              } else {
                this.GeoAll = false;
                this.regionList = res.result.list;
                console.log(res.result.list);
                this.industryVerticalsForm.patchValue({
                  mcGeography: res.result.list[0].CVALUE
                });
              }
            }
          });
        }
      });
    }
  }
  getCalanderDetails() {
    {
      let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
      queryParams = queryParams.append('puid', '');
      this.industryVerticalsService.getAllCalanderDetails(queryParams).subscribe(res => {
        if (res.result) {
          this.calanderList = res.result.list;
        }
      });
    }
  }
}
IndustryVerticalsComponent.ɵfac = function IndustryVerticalsComponent_Factory(t) {
  return new (t || IndustryVerticalsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_IndustryVerticals_IndustryVerticals_service__WEBPACK_IMPORTED_MODULE_1__.IndustryVerticalsService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](bd_common_lib__WEBPACK_IMPORTED_MODULE_6__.AESEncryptDecryptService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](bd_common_lib__WEBPACK_IMPORTED_MODULE_6__.NotificationAlertService));
};
IndustryVerticalsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: IndustryVerticalsComponent,
  selectors: [["app-industry-verticals"]],
  decls: 121,
  vars: 9,
  consts: [[1, "content-tophead", "align-items-baseline"], [1, "pagetitle"], [1, "section", "dashboard"], [1, "row"], [1, "col-lg-12"], [1, "card"], [1, "card-body"], [1, "card-title"], [2, "color", "red"], ["method", "post", 1, "row", "bd-form", 3, "formGroup"], [1, "col-md-6"], ["for", "", 1, "col-sm-4", "col-form-label"], [1, "col-sm-8", "bd-inputfield"], ["name", "mcProduct", "formControlName", "mcProduct", 1, "form-select"], [3, "value", 4, "ngFor", "ngForOf"], ["name", "mcGeography", "formControlName", "mcGeography", 1, "form-select"], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "col-md-6", "mb-2"], [1, "col-sm-4", "bd-inputfield"], ["for", "inputNanme4", 1, "form-label"], ["name", "mcFromMonth", "formControlName", "mcFromMonth", 1, "form-select"], ["name", "mcToMonth", "formControlName", "mcToMonth", 1, "form-select"], ["name", "mcFromMonthC", "formControlName", "mcFromMonthC", 1, "form-select"], ["name", "mcToMonthC", "formControlName", "mcToMonthC", 1, "form-select"], ["name", "mcSegmentType", "formControlName", "mcSegmentType", 1, "form-select"], ["selected", "", "value", "I"], ["value", "M"], ["name", "mcDataMeasure", "formControlName", "mcDataMeasure", 1, "form-select"], ["selected", "", "value", "R"], ["value", "P"], ["value", "W"], ["name", "mcEvaluateU", "formControlName", "mcEvaluateU", 1, "form-select"], ["selected", "", "value", "T"], ["value", "A"], ["name", "mcWithPS", "formControlName", "mcWithPS", 1, "form-select"], ["selected", "", "value", "Y"], ["value", "N"], ["name", "mcCashCredit", "formControlName", "mcCashCredit", 1, "form-select"], ["value", "R"], ["value", "C"], [1, "col-md-12"], [1, "bd-note", "mb-1", "mt-3", "font-italic", "fw-bold"], [1, "btn-groups", "ms-0"], [1, "btn", "btn-sm", "btn-primary", 3, "click"], ["class", "col-md-12", 4, "ngIf"], [3, "value"], [3, "ngValue"], ["for", ""], ["formControlName", "mcURL", "id", "cmultiple", "rows", "4", "cols", "100", 1, "form-select"]],
  template: function IndustryVerticalsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Customer Centric");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "section", 2)(5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "h5", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Industry Vertical Report : Input Parameters");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 8)(12, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "form", 9)(15, "div", 10)(16, "div", 3)(17, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Products");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 12)(20, "select", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, IndustryVerticalsComponent_option_21_Template, 2, 2, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 10)(23, "div", 3)(24, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Geography");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 12)(27, "select", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, IndustryVerticalsComponent_option_28_Template, 2, 2, "option", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 17)(30, "div", 3)(31, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Evaluation Period");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 18)(34, "label", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "From Month");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "select", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, IndustryVerticalsComponent_option_37_Template, 2, 2, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 18)(39, "label", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "To Month");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "select", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](42, IndustryVerticalsComponent_option_42_Template, 2, 2, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 17)(44, "div", 3)(45, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "Compaired Against");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 18)(48, "label", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "From Month");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "select", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](51, IndustryVerticalsComponent_option_51_Template, 2, 2, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 18)(53, "label", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "To Month");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "select", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](56, IndustryVerticalsComponent_option_56_Template, 2, 2, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 10)(58, "div", 3)(59, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "Segment Type");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 12)(62, "select", 24)(63, "option", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "Industry");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "option", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "Market");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div", 10)(68, "div", 3)(69, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, "Data Measure");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "div", 12)(72, "select", 27)(73, "option", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, "Revenue");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "option", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, "Pieces");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "option", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, "Weight");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "div", 10)(80, "div", 3)(81, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, "Evaluate Using");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "div", 12)(84, "select", 31)(85, "option", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86, "Total");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "option", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, "Avg.Per Month");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "div", 10)(90, "div", 3)(91, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](92, "With FS (Y/N)");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "div", 12)(94, "select", 34)(95, "option", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](96, "Yes");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "option", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](98, "No");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "div", 10)(100, "div", 3)(101, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](102, "Cash/Credit");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "div", 12)(104, "select", 37)(105, "option", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](106, "Total");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "option", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](108, "Credit");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](109, "option", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](110, "Cash");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "div", 40)(112, "p", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](113, "Data is available form Jan 2017");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](114, "div", 40)(115, "div", 42)(116, "button", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function IndustryVerticalsComponent_Template_button_click_116_listener() {
        return ctx.myReportsFun();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](117, "Continue");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](118, "pre")(119, "pre");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](120, IndustryVerticalsComponent_div_120_Template, 6, 0, "div", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.templateError);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.industryVerticalsForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.productList);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.regionList);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.calanderList);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.calanderList);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.calanderList);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.calanderList);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](64);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.hideURL);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6864:
/*!***********************************************************************************!*\
  !*** ./src/app/components/kam-actual-vs-target/kam-actual-vs-target.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KamActualVsTargetComponent": () => (/* binding */ KamActualVsTargetComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var src_app_shared_services_global_var__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/global-var */ 2480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_KAMActualvsTarget_KAMActualvsTarget_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/KAMActualvsTarget/KAMActualvsTarget.service */ 9550);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var bd_common_lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bd-common-lib */ 8919);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);







function KamActualVsTargetComponent_option_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const reg_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", reg_r2.CVALUE);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", reg_r2.CVALUE, " ");
  }
}
function KamActualVsTargetComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 15)(1, "div", 3)(2, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "User Submitted Data URL");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "textarea", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
}
class KamActualVsTargetComponent {
  constructor(kAMActualvsTargetService, fb, encrypt, alert) {
    this.kAMActualvsTargetService = kAMActualvsTargetService;
    this.fb = fb;
    this.encrypt = encrypt;
    this.alert = alert;
    this.productList = [];
    this.geoList = [];
    this.templateError = '';
    this.date = new Date();
    this.hideURL = false;
    this.Curyear = this.date.getFullYear();
    this.Pryear = this.date.getFullYear() - 1;
    this.regionList = [];
    this.rtypevar = null;
    this.rvaluevar = null;
    this.rprodvar = null;
    this.rapplid = "0002";
    this.rtype = null;
    this.rvalue = null;
  }
  ngOnInit() {
    this.createForm();
    this.getRegionDetails();
  }
  createForm() {
    this.kAMActualvsTargetForm = this.fb.group({
      mcURL: [],
      mcRegion: []
    });
  }
  getRegionDetails() {
    {
      var puid = this.encrypt.decryptionAES(src_app_shared_services_global_var__WEBPACK_IMPORTED_MODULE_0__.GlobalVar.EmpCode);
      var papplid = "0002";
      let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
      queryParams = queryParams.append('puid', puid);
      queryParams = queryParams.append('papplid', papplid);
      this.kAMActualvsTargetService.getAllGeoDetails(queryParams).subscribe(res => {
        if (res.result) {
          this.geoList = res.result.geoAccessList;
          let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
          queryParams = queryParams.append('prtype', this.geoList[0].CGEOTYPE);
          queryParams = queryParams.append('prvalue', this.geoList[0].CGEOACCESS);
          this.kAMActualvsTargetService.getAllRegionDetails(queryParams).subscribe(res => {
            if (res.result) {
              if (this.geoList[0].CGEOACCESS == "ALLCO") {
                this.regionList = res.result.list;
                this.kAMActualvsTargetForm.patchValue({
                  mcRegion: res.result.list[0].CVALUE
                });
              } else {
                this.regionList = [];
                this.regionList = res.result.list;
                console.log(res.result.list[0].CVALUE);
                this.kAMActualvsTargetForm.patchValue({
                  mcRegion: res.result.list[0].CVALUE
                });
              }
            }
          });
        }
      });
    }
  }
  myReportsFun() {
    if (this.kAMActualvsTargetForm.get('mcRegion')?.value != null) {
      var mcRegionNew = "";
      if (this.kAMActualvsTargetForm.get('mcRegion')?.value == "ALLCO") {
        mcRegionNew = "ALL";
      } else {
        mcRegionNew = this.kAMActualvsTargetForm.get('mcRegion')?.value;
      }
      var ALLSTR = "&rCregion=" + mcRegionNew;
      var baseUrl = this.encrypt.decryptionAES(sessionStorage.getItem('reporturl')) + '/Resources/UserData/reportuser/KAM_ACTVSTGT.rptdesign' + ALLSTR;
      this.kAMActualvsTargetForm.patchValue({
        mcURL: baseUrl
      });
      window.open(baseUrl, '_blank');
    } else {
      this.templateError = "Please Select at least one Region from the list";
    }
  }
}
KamActualVsTargetComponent.ɵfac = function KamActualVsTargetComponent_Factory(t) {
  return new (t || KamActualVsTargetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_KAMActualvsTarget_KAMActualvsTarget_service__WEBPACK_IMPORTED_MODULE_1__.KAMActualvsTargetService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](bd_common_lib__WEBPACK_IMPORTED_MODULE_5__.AESEncryptDecryptService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](bd_common_lib__WEBPACK_IMPORTED_MODULE_5__.NotificationAlertService));
};
KamActualVsTargetComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: KamActualVsTargetComponent,
  selectors: [["app-kam-actual-vs-target"]],
  decls: 29,
  vars: 4,
  consts: [[1, "content-tophead", "align-items-baseline"], [1, "pagetitle"], [1, "section", "dashboard"], [1, "row"], [1, "col-lg-12"], [1, "card"], [1, "card-body"], [1, "card-title"], [2, "color", "red"], ["method", "post", 1, "bd-form", 3, "formGroup"], [1, "col-md-6"], ["for", "", 1, "col-sm-4", "col-form-label"], [1, "col-sm-8", "bd-inputfield"], ["name", "mcRegion", "formControlName", "mcRegion", 1, "form-select"], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "col-md-12"], [1, "btn-groups", "mt-3", "ms-0"], [1, "btn", "btn-sm", "btn-primary", 3, "click"], ["class", "col-md-12", 4, "ngIf"], [3, "ngValue"], ["for", ""], ["formControlName", "mcURL", "id", "cmultiple", "rows", "4", "cols", "100", 1, "form-select"]],
  template: function KamActualVsTargetComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Customer Centric");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "section", 2)(5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "h5", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Kam Actual vs Target");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 8)(12, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "form", 9)(15, "div", 10)(16, "div", 3)(17, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Region");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 12)(20, "select", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, KamActualVsTargetComponent_option_21_Template, 2, 2, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 15)(23, "div", 16)(24, "button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function KamActualVsTargetComponent_Template_button_click_24_listener() {
        return ctx.myReportsFun();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Run Report");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "pre")(27, "pre");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, KamActualVsTargetComponent_div_28_Template, 6, 0, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.templateError);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.kAMActualvsTargetForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.regionList);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.hideURL);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4383:
/*!*********************************************************************************!*\
  !*** ./src/app/components/kam-customer-growth/kam-customer-growth.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KamCustomerGrowthComponent": () => (/* binding */ KamCustomerGrowthComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var src_app_shared_services_global_var__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/global-var */ 2480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_KAMCustomerGrowth_KAMCustomerGrowth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/KAMCustomerGrowth/KAMCustomerGrowth.service */ 331);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var bd_common_lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bd-common-lib */ 8919);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);







function KamCustomerGrowthComponent_div_85_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 27)(1, "div", 3)(2, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "User Submitted Data URL");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "textarea", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
}
class KamCustomerGrowthComponent {
  constructor(kAMCustomerGrowthService, fb, encrypt, alert) {
    this.kAMCustomerGrowthService = kAMCustomerGrowthService;
    this.fb = fb;
    this.encrypt = encrypt;
    this.alert = alert;
    this.productList = [];
    this.geoList = [];
    this.templateError = '';
    this.date = new Date();
    this.hideURL = false;
    this.Curyear = this.date.getFullYear();
    this.Pryear = this.date.getFullYear() - 1;
    this.Pryear1 = this.date.getFullYear() - 2;
    this.Pryear2 = this.date.getFullYear() - 3;
    this.Pryear3 = this.date.getFullYear() - 4;
  }
  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.kAMCustomerGrowthForm = this.fb.group({
      mcURL: [],
      mcCYear: [this.date.getFullYear()],
      mcPYear: [this.date.getFullYear() - 1],
      mcCustomerType: ['A'],
      mcMeasure: ['R'],
      mcProduct: ['A']
    });
  }
  myReportsFun() {
    var rtypevar = null;
    var rvaluevar = null;
    var rprodvar = null;
    var rapplid = "0002";
    var vcprodcode = this.kAMCustomerGrowthForm.get('vcprodcode')?.value == undefined ? null : this.kAMCustomerGrowthForm.get('vcprodcode')?.value;
    ;
    var mcreptype = this.kAMCustomerGrowthForm.get('mcreptype')?.value == undefined ? null : this.kAMCustomerGrowthForm.get('mcreptype')?.value;
    ;
    var rtype = this.kAMCustomerGrowthForm.get('rtype')?.value == undefined ? null : this.kAMCustomerGrowthForm.get('rtype')?.value;
    ;
    var rvalue = this.kAMCustomerGrowthForm.get('rvalue')?.value == undefined ? null : this.kAMCustomerGrowthForm.get('rvalue')?.value;
    ;
    var frmPeriod = this.kAMCustomerGrowthForm.get('frmPeriod')?.value == undefined ? null : this.kAMCustomerGrowthForm.get('frmPeriod')?.value;
    ;
    var toPeriod = this.kAMCustomerGrowthForm.get('toPeriod')?.value == undefined ? null : this.kAMCustomerGrowthForm.get('toPeriod')?.value;
    ;
    var mcsubprdcd = "";
    var mcpacktype = "";
    var tcprodcode = this.kAMCustomerGrowthForm.get('vcprodcode')?.value == undefined ? null : this.kAMCustomerGrowthForm.get('vcprodcode')?.value;
    ;
    var RPT = this.kAMCustomerGrowthForm.get('RPT')?.value == undefined ? null : this.kAMCustomerGrowthForm.get('RPT')?.value;
    ;
    var PMTH = this.kAMCustomerGrowthForm.get('PMTH')?.value == undefined ? null : this.kAMCustomerGrowthForm.get('PMTH')?.value;
    ;
    var PYEAR = this.kAMCustomerGrowthForm.get('PYEAR')?.value == undefined ? null : this.kAMCustomerGrowthForm.get('PYEAR')?.value;
    ;
    var PTYPE = this.kAMCustomerGrowthForm.get('PTYPE')?.value == undefined ? null : this.kAMCustomerGrowthForm.get('PTYPE')?.value;
    ;
    var DREG = this.kAMCustomerGrowthForm.get('DREG')?.value == undefined ? null : this.kAMCustomerGrowthForm.get('DREG')?.value;
    ;
    var mcmthyear = this.kAMCustomerGrowthForm.get('mcmthyear')?.value == undefined ? null : this.kAMCustomerGrowthForm.get('mcmthyear')?.value;
    ;
    var mcmthyear1 = null;
    var mcmthyear2 = null;
    var PDST = this.kAMCustomerGrowthForm.get('PDST')?.value == undefined ? null : this.kAMCustomerGrowthForm.get('PDST')?.value;
    ;
    var prtype = "";
    var prvalue = "";
    var mCurMyr = this.kAMCustomerGrowthForm.get('mCurMyr')?.value == undefined ? null : this.kAMCustomerGrowthForm.get('mCurMyr')?.value;
    ;
    var mPrvMyr = this.kAMCustomerGrowthForm.get('mPrvMyr')?.value == undefined ? null : this.kAMCustomerGrowthForm.get('mPrvMyr')?.value;
    ;
    var mCustType = this.kAMCustomerGrowthForm.get('mCustType')?.value == undefined ? null : this.kAMCustomerGrowthForm.get('mCustType')?.value;
    ;
    var mMeasure = this.kAMCustomerGrowthForm.get('mMeasure')?.value == undefined ? null : this.kAMCustomerGrowthForm.get('mMeasure')?.value;
    ;
    var mCprodcode = this.kAMCustomerGrowthForm.get('mCprodcode')?.value == undefined ? null : this.kAMCustomerGrowthForm.get('mCprodcode')?.value;
    ;
    if (vcprodcode != null && (vcprodcode == "T" || vcprodcode == "A" || vcprodcode == "C" || vcprodcode == "D" || vcprodcode == "E" || vcprodcode == "G" || vcprodcode == "I" || vcprodcode == "K" || vcprodcode == "L" || vcprodcode == "P" || vcprodcode == "V")) {
      var var1 = vcprodcode.substring(0, 1);
      var var2 = "T";
      var var3 = "T";
      tcprodcode = var1;
      mcsubprdcd = var2;
      mcpacktype = var3;
    }
    if (vcprodcode != null && (vcprodcode == "APC" || vcprodcode == "EPC")) {
      var var1 = vcprodcode;
      var var2 = "PC";
      var var3 = "T";
      tcprodcode = var1;
      mcsubprdcd = var2;
      mcpacktype = var3;
    }
    if (vcprodcode != null && vcprodcode == "APCL") {
      var var1 = vcprodcode;
      var var2 = "PC";
      var var3 = "L";
      tcprodcode = var1;
      mcsubprdcd = var2;
      mcpacktype = var3;
    }
    let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
    queryParams = queryParams.append('puid', this.encrypt.decryptionAES(src_app_shared_services_global_var__WEBPACK_IMPORTED_MODULE_0__.GlobalVar.EmpCode));
    queryParams = queryParams.append('papplid', rapplid);
    this.kAMCustomerGrowthService.getAllGeoDetails(queryParams).subscribe(res => {
      if (res.result) {
        this.geoList = res.result.geoAccessList;
      }
    });
    rtypevar = this.geoList[0];
    rvaluevar = this.geoList[1];
    rprodvar = this.geoList[2];
    if (rtypevar != null && (rtypevar == "R" || rtypevar == "B" || rtypevar == "A" || rtypevar == "S")) {
      rtype = rtypevar;
      rvalue = rvaluevar;
    }
    if (rvalue != null) {
      var vlength = rvalue.length();
      rtype = rvalue.substring(0, 1);
      rvalue = rvalue.substring(1, vlength);
    }
    if (DREG != null && (DREG.equals("B") || DREG.equals("E"))) {
      prtype = DREG;
      prvalue = PDST;
    } else {
      prtype = rtype;
      prvalue = rvalue;
    }
    this.templateError = '';
    var mcProduct = this.kAMCustomerGrowthForm.get('mcProduct')?.value;
    if (this.kAMCustomerGrowthForm.get('mcCYear')?.value != null && this.kAMCustomerGrowthForm.get('mcPYear')?.value != null && this.kAMCustomerGrowthForm.get('mcCustomerType')?.value != null && this.kAMCustomerGrowthForm.get('mcMeasure')?.value != null && this.kAMCustomerGrowthForm.get('mcProduct')?.value != null) {
      var ALLSTR = "&tCurMyr=" + this.kAMCustomerGrowthForm.get('mcCYear')?.value + "&tPrvMyr=" + this.kAMCustomerGrowthForm.get('mcPYear')?.value + "&tCustType=" + this.kAMCustomerGrowthForm.get('mcCustomerType')?.value + "&tMeasure=" + this.kAMCustomerGrowthForm.get('mcMeasure')?.value + "&tCprodcode=" + this.kAMCustomerGrowthForm.get('mcProduct')?.value;
      var baseUrl = this.encrypt.decryptionAES(sessionStorage.getItem('reporturl')) + '/Resources/UserData/reportuser/KAM_CUST.rptdesign' + ALLSTR;
      this.kAMCustomerGrowthForm.patchValue({
        mcURL: baseUrl
      });
      window.open(baseUrl, '_blank');
    } else {
      this.templateError = "Please Enter/Select All required fileds";
    }
  }
}
KamCustomerGrowthComponent.ɵfac = function KamCustomerGrowthComponent_Factory(t) {
  return new (t || KamCustomerGrowthComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_KAMCustomerGrowth_KAMCustomerGrowth_service__WEBPACK_IMPORTED_MODULE_1__.KAMCustomerGrowthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](bd_common_lib__WEBPACK_IMPORTED_MODULE_5__.AESEncryptDecryptService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](bd_common_lib__WEBPACK_IMPORTED_MODULE_5__.NotificationAlertService));
};
KamCustomerGrowthComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: KamCustomerGrowthComponent,
  selectors: [["app-kam-customer-growth"]],
  decls: 86,
  vars: 19,
  consts: [[1, "content-tophead", "align-items-baseline"], [1, "pagetitle"], [1, "section", "dashboard"], [1, "row"], [1, "col-lg-12"], [1, "card"], [1, "card-body"], [1, "card-title"], [2, "color", "red"], ["method", "post", 1, "bd-form", 3, "formGroup"], [1, "col-md-6"], ["for", "", 1, "col-sm-4", "col-form-label"], [1, "col-sm-8", "bd-inputfield"], ["name", "mcCYear", "formControlName", "mcCYear", 1, "form-select"], [3, "value"], ["name", "mcPYear", "formControlName", "mcPYear", 1, "form-select"], ["name", "mcCustomerType", "formControlName", "mcCustomerType", 1, "form-select"], ["value", "A"], ["value", "T"], ["value", "C"], ["name", "mcMeasure", "formControlName", "mcMeasure", 1, "form-select"], ["value", "F"], ["value", "R"], ["value", "P"], ["value", "W"], ["name", "mcProduct", "formControlName", "mcProduct", 1, "form-select"], ["selected", "", "value", "A"], [1, "col-md-12"], [1, "btn-groups", "mt-3", "ms-0"], [1, "btn", "btn-sm", "btn-primary", 3, "click"], ["class", "col-md-12", 4, "ngIf"], ["for", ""], ["formControlName", "mcURL", "id", "cmultiple", "rows", "4", "cols", "100", 1, "form-select"]],
  template: function KamCustomerGrowthComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Customer Centric");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "section", 2)(5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "h5", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Kam Customer Growth");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 8)(12, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "form", 9)(15, "div", 10)(16, "div", 3)(17, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Current Year");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 12)(20, "select", 13)(21, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 10)(30, "div", 3)(31, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Previous Year");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 12)(34, "select", 15)(35, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 10)(44, "div", 3)(45, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "Customer Type");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 12)(48, "select", 16)(49, "option", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "All Customer");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "option", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "Top Customers");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "option", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "e-Com Customers");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 10)(56, "div", 3)(57, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "Measure");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 12)(60, "select", 20)(61, "option", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "Revenue-W/oFS");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "option", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "Revenue-WithFS");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "option", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "Shipments");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "option", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "Tonnage");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 10)(70, "div", 3)(71, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, "Product");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 12)(74, "select", 25)(75, "option", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, "All Product");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "option", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, "Productwise");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "div", 27)(80, "div", 28)(81, "button", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function KamCustomerGrowthComponent_Template_button_click_81_listener() {
        return ctx.myReportsFun();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, "Run Report");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](83, "pre")(84, "pre");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](85, KamCustomerGrowthComponent_div_85_Template, 6, 0, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.templateError);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.kAMCustomerGrowthForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.Curyear);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.Curyear);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.Pryear);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.Pryear);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.Pryear1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.Pryear1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.Pryear2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.Pryear2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.Pryear);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.Pryear);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.Pryear1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.Pryear1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.Pryear2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.Pryear2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.Pryear3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.Pryear3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](43);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.hideURL);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8544:
/*!*****************************************************************************!*\
  !*** ./src/app/components/kam-region-growth/kam-region-growth.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KamRegionGrowthComponent": () => (/* binding */ KamRegionGrowthComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var src_app_shared_services_global_var__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/global-var */ 2480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_KAMRegionGrowth_KAMRegionGrowth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/KAMRegionGrowth/KAMRegionGrowth.service */ 8798);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var bd_common_lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bd-common-lib */ 8919);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);







function KamRegionGrowthComponent_div_105_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 38)(1, "div", 3)(2, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "User Submitted Data URL");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "textarea", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
}
class KamRegionGrowthComponent {
  constructor(kAMRegionGrowthService, fb, encrypt, alert) {
    this.kAMRegionGrowthService = kAMRegionGrowthService;
    this.fb = fb;
    this.encrypt = encrypt;
    this.alert = alert;
    this.productList = [];
    this.geoList = [];
    this.templateError = '';
    this.date = new Date();
    this.hideURL = false;
    this.Curyear = this.date.getFullYear();
    this.Pryear = this.date.getFullYear() - 1;
    this.Pryear1 = this.date.getFullYear() - 2;
    this.Pryear2 = this.date.getFullYear() - 3;
    this.Pryear3 = this.date.getFullYear() - 4;
  }
  ngOnInit() {
    this.createForm();
    this.date = new Date();
    this.Curyear = this.date.getFullYear();
    this.Pryear = this.date.getFullYear() - 1;
    this.Pryear1 = this.date.getFullYear() - 2;
    this.Pryear2 = this.date.getFullYear() - 3;
    this.Pryear3 = this.date.getFullYear() - 4;
  }
  createForm() {
    this.kAMRegionGrowthForm = this.fb.group({
      mcURL: [],
      mcCYear: [this.date.getFullYear()],
      mcPYear: [this.date.getFullYear() - 1],
      mcCustomerType: ['A'],
      mcMeasure: ['R'],
      mcUpto: ['JAN']
    });
  }
  myReportsFun() {
    var rtypevar = null;
    var rvaluevar = null;
    var rprodvar = null;
    var rapplid = "0002";
    var vcprodcode = this.kAMRegionGrowthForm.get('vcprodcode')?.value == undefined ? null : this.kAMRegionGrowthForm.get('vcprodcode')?.value;
    ;
    var mcreptype = this.kAMRegionGrowthForm.get('mcreptype')?.value == undefined ? null : this.kAMRegionGrowthForm.get('mcreptype')?.value;
    ;
    var rtype = this.kAMRegionGrowthForm.get('rtype')?.value == undefined ? null : this.kAMRegionGrowthForm.get('rtype')?.value;
    ;
    var rvalue = this.kAMRegionGrowthForm.get('rvalue')?.value == undefined ? null : this.kAMRegionGrowthForm.get('rvalue')?.value;
    ;
    var frmPeriod = this.kAMRegionGrowthForm.get('frmPeriod')?.value == undefined ? null : this.kAMRegionGrowthForm.get('frmPeriod')?.value;
    ;
    var toPeriod = this.kAMRegionGrowthForm.get('toPeriod')?.value == undefined ? null : this.kAMRegionGrowthForm.get('toPeriod')?.value;
    ;
    var mcsubprdcd = "";
    var mcpacktype = "";
    var tcprodcode = this.kAMRegionGrowthForm.get('vcprodcode')?.value == undefined ? null : this.kAMRegionGrowthForm.get('vcprodcode')?.value;
    ;
    var RPT = this.kAMRegionGrowthForm.get('RPT')?.value == undefined ? null : this.kAMRegionGrowthForm.get('RPT')?.value;
    ;
    var PMTH = this.kAMRegionGrowthForm.get('PMTH')?.value == undefined ? null : this.kAMRegionGrowthForm.get('PMTH')?.value;
    ;
    var PYEAR = this.kAMRegionGrowthForm.get('PYEAR')?.value == undefined ? null : this.kAMRegionGrowthForm.get('PYEAR')?.value;
    ;
    var PTYPE = this.kAMRegionGrowthForm.get('PTYPE')?.value == undefined ? null : this.kAMRegionGrowthForm.get('PTYPE')?.value;
    ;
    var DREG = this.kAMRegionGrowthForm.get('DREG')?.value == undefined ? null : this.kAMRegionGrowthForm.get('DREG')?.value;
    ;
    var mcmthyear = this.kAMRegionGrowthForm.get('mcmthyear')?.value == undefined ? null : this.kAMRegionGrowthForm.get('mcmthyear')?.value;
    ;
    var mcmthyear1 = null;
    var mcmthyear2 = null;
    var PDST = this.kAMRegionGrowthForm.get('PDST')?.value == undefined ? null : this.kAMRegionGrowthForm.get('PDST')?.value;
    ;
    var prtype = "";
    var prvalue = "";
    var mCurMyr = this.kAMRegionGrowthForm.get('mCurMyr')?.value == undefined ? null : this.kAMRegionGrowthForm.get('mCurMyr')?.value;
    ;
    var mPrvMyr = this.kAMRegionGrowthForm.get('mPrvMyr')?.value == undefined ? null : this.kAMRegionGrowthForm.get('mPrvMyr')?.value;
    ;
    var mCustType = this.kAMRegionGrowthForm.get('mCustType')?.value == undefined ? null : this.kAMRegionGrowthForm.get('mCustType')?.value;
    ;
    var mMeasure = this.kAMRegionGrowthForm.get('mMeasure')?.value == undefined ? null : this.kAMRegionGrowthForm.get('mMeasure')?.value;
    ;
    var mMonth = this.kAMRegionGrowthForm.get('mMonth')?.value == undefined ? null : this.kAMRegionGrowthForm.get('mMonth')?.value;
    ;
    if (vcprodcode != null && (vcprodcode == "T" || vcprodcode == "A" || vcprodcode == "C" || vcprodcode == "D" || vcprodcode == "E" || vcprodcode == "G" || vcprodcode == "I" || vcprodcode == "K" || vcprodcode == "L" || vcprodcode == "P" || vcprodcode == "V")) {
      var var1 = vcprodcode.substring(0, 1);
      var var2 = "T";
      var var3 = "T";
      tcprodcode = var1;
      mcsubprdcd = var2;
      mcpacktype = var3;
    }
    if (vcprodcode != null && (vcprodcode == "APC" || vcprodcode == "EPC")) {
      var var1 = vcprodcode.substring(0, 1);
      ;
      var var2 = "PC";
      var var3 = "T";
      tcprodcode = var1;
      mcsubprdcd = var2;
      mcpacktype = var3;
    }
    if (vcprodcode != null && vcprodcode == "APCL") {
      var var1 = vcprodcode.substring(0, 1);
      ;
      var var2 = "PC";
      var var3 = "L";
      tcprodcode = var1;
      mcsubprdcd = var2;
      mcpacktype = var3;
    }
    let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
    queryParams = queryParams.append('puid', this.encrypt.decryptionAES(src_app_shared_services_global_var__WEBPACK_IMPORTED_MODULE_0__.GlobalVar.EmpCode));
    queryParams = queryParams.append('papplid', rapplid);
    this.kAMRegionGrowthService.getAllGeoDetails(queryParams).subscribe(res => {
      if (res.result) {
        this.geoList = res.result.geoAccessList;
      }
    });
    rtypevar = this.geoList[0];
    rvaluevar = this.geoList[1];
    rprodvar = this.geoList[2];
    if (rtypevar != null && (rtypevar == "R" || rtypevar == "B" || rtypevar == "A" || rtypevar == "S")) {
      rtype = rtypevar;
      rvalue = rvaluevar;
    }
    if (rvalue != null) {
      var vlength = rvalue.length();
      rtype = rvalue.substring(0, 1);
      rvalue = rvalue.substring(1, vlength);
    }
    if (DREG != null && (DREG.equals("B") || DREG.equals("E"))) {
      prtype = DREG;
      prvalue = PDST;
    } else {
      prtype = rtype;
      prvalue = rvalue;
    }
    this.templateError = '';
    var mcCYear = this.kAMRegionGrowthForm.get('mcCYear')?.value;
    if (this.kAMRegionGrowthForm.get('mcCYear')?.value != null && this.kAMRegionGrowthForm.get('mcPYear')?.value != null && this.kAMRegionGrowthForm.get('mcCustomerType')?.value != null && this.kAMRegionGrowthForm.get('mcMeasure')?.value != null && this.kAMRegionGrowthForm.get('mcUpto')?.value != null) {
      var ALLSTR = "&tCurMyr=" + this.kAMRegionGrowthForm.get('mcCYear')?.value + "&tPrvMyr=" + this.kAMRegionGrowthForm.get('mcPYear')?.value + "&tCustType=" + this.kAMRegionGrowthForm.get('mcCustomerType')?.value + "&tMeasure=" + this.kAMRegionGrowthForm.get('mcMeasure')?.value + "&tMonth=" + this.kAMRegionGrowthForm.get('mcUpto')?.value;
      var baseUrl = this.encrypt.decryptionAES(sessionStorage.getItem('reporturl')) + '/Resources/UserData/reportuser/KAM_REGION.rptdesign' + ALLSTR;
      this.kAMRegionGrowthForm.patchValue({
        mcURL: baseUrl
      });
      window.open(baseUrl, '_blank');
    } else {
      this.templateError = "Please Enter/Select All required fileds";
    }
  }
}
KamRegionGrowthComponent.ɵfac = function KamRegionGrowthComponent_Factory(t) {
  return new (t || KamRegionGrowthComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_KAMRegionGrowth_KAMRegionGrowth_service__WEBPACK_IMPORTED_MODULE_1__.KAMRegionGrowthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](bd_common_lib__WEBPACK_IMPORTED_MODULE_5__.AESEncryptDecryptService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](bd_common_lib__WEBPACK_IMPORTED_MODULE_5__.NotificationAlertService));
};
KamRegionGrowthComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: KamRegionGrowthComponent,
  selectors: [["app-kam-region-growth"]],
  decls: 106,
  vars: 19,
  consts: [[1, "content-tophead", "align-items-baseline"], [1, "pagetitle"], [1, "section", "dashboard"], [1, "row"], [1, "col-lg-12"], [1, "card"], [1, "card-body"], [1, "card-title"], [2, "color", "red"], ["method", "post", 1, "bd-form", 3, "formGroup"], [1, "col-md-6"], ["for", "", 1, "col-sm-4", "col-form-label"], [1, "col-sm-8", "bd-inputfield"], ["name", "mcCYear", "formControlName", "mcCYear", 1, "form-select"], [3, "value"], ["name", "mcPYear", "formControlName", "mcPYear", 1, "form-select"], ["name", "mcCustomerType", "formControlName", "mcCustomerType", 1, "form-select"], ["value", "A"], ["value", "T"], ["value", "C"], ["name", "mcMeasure", "formControlName", "mcMeasure", 1, "form-select"], ["value", "F"], ["value", "R"], ["value", "P"], ["value", "W"], ["name", "mcUpto", "formControlName", "mcUpto", 1, "form-select"], ["value", "JAN"], ["value", "FEB"], ["value", "MAR"], ["value", "APR"], ["value", "MAY"], ["value", "JUN"], ["value", "JUL"], ["value", "AUR"], ["value", "SEP"], ["value", "OCT"], ["value", "NOV"], ["value", "DEC"], [1, "col-md-12"], [1, "btn-groups", "mt-3", "ms-0"], [1, "btn", "btn-sm", "btn-primary", 3, "click"], ["class", "col-md-12", 4, "ngIf"], ["for", ""], ["formControlName", "mcURL", "id", "cmultiple", "rows", "4", "cols", "100", 1, "form-select"]],
  template: function KamRegionGrowthComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Customer Centric");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "section", 2)(5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "h5", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Kam Region Growth");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 8)(12, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "form", 9)(15, "div", 10)(16, "div", 3)(17, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Current Year");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 12)(20, "select", 13)(21, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 10)(30, "div", 3)(31, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Previous Year");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 12)(34, "select", 15)(35, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 10)(44, "div", 3)(45, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "Customer Type");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 12)(48, "select", 16)(49, "option", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "All Customer");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "option", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "Top Customers");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "option", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "e-Com Customers");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 10)(56, "div", 3)(57, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "Measure");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 12)(60, "select", 20)(61, "option", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "Revenue-W/oFS");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "option", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "Revenue-WithFS");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "option", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "Shipments");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "option", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "Tonnage");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 10)(70, "div", 3)(71, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, "UpTo");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 12)(74, "select", 25)(75, "option", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, "JAN");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "option", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, "FEB");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "option", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, "MAR");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "option", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, "APR");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "option", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84, "MAY");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "option", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86, "JUN");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "option", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, "JUL");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "option", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](90, "AUG");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "option", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](92, "SEP");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "option", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](94, "OCT");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "option", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](96, "NOV");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "option", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](98, "DEC");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "div", 38)(100, "div", 39)(101, "button", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function KamRegionGrowthComponent_Template_button_click_101_listener() {
        return ctx.myReportsFun();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](102, "Run Report");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](103, "pre")(104, "pre");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](105, KamRegionGrowthComponent_div_105_Template, 6, 0, "div", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.templateError);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.kAMRegionGrowthForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.Curyear);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.Curyear);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.Pryear);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.Pryear);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.Pryear1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.Pryear1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.Pryear2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.Pryear2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.Pryear);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.Pryear);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.Pryear1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.Pryear1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.Pryear2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.Pryear2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.Pryear3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.Pryear3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](63);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.hideURL);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6232:
/*!*****************************************************************************!*\
  !*** ./src/app/components/marketing-reports/marketing-reports.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MarketingReportsComponent": () => (/* binding */ MarketingReportsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var src_app_shared_services_global_var__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/global-var */ 2480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_MarketingReports_MarketingReports_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/MarketingReports/MarketingReports.service */ 4143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var bd_common_lib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bd-common-lib */ 8919);








function MarketingReportsComponent_option_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const mkt_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", mkt_r5.CVALUE);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", mkt_r5.CNAME, " ");
  }
}
function MarketingReportsComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10)(1, "div", 3)(2, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "OUTSCAN DATE");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
}
function MarketingReportsComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10)(1, "div", 3)(2, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Month");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 12)(5, "select", 22)(6, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "JAN");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "FEB");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "MAR");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "APR");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "MAY");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "JUN");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "JUL");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "AUG");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "SEP");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "OCT");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "NOV");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "DEC");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }
}
function MarketingReportsComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10)(1, "div", 3)(2, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Year");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 12)(5, "select", 35)(6, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx_r3.Curyear);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.Curyear);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx_r3.Pryear);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.Pryear);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx_r3.Pryear2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.Pryear2);
  }
}
function MarketingReportsComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16)(1, "div", 3)(2, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "User Submitted Data URL");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "textarea", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
}
class MarketingReportsComponent {
  constructor(marketingReportsService, fb, encrypt, alert) {
    this.marketingReportsService = marketingReportsService;
    this.fb = fb;
    this.encrypt = encrypt;
    this.alert = alert;
    this.marketingList = [];
    this.geoList = [];
    this.templateError = '';
    this.DATEshow = false;
    this.Monthshow = false;
    this.Yearshow = false;
    this.hideURL = false;
    this.date = new Date();
    this.Curyear = this.date.getFullYear();
    this.Pryear = this.date.getFullYear() - 1;
    this.Pryear2 = this.date.getFullYear() - 2;
    this.prev1StartDate = new Date(new Date().getFullYear(), new Date().getMonth() - 1, 1);
    this.prev2StartDate = new Date(new Date().getFullYear(), new Date().getMonth() - 2, 1);
    this.currentDate = new Date();
    this.CurrMonthandYear = (0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.formatDate)(new Date(), 'yyyy', 'en-US');
    this.Prev1MonthandYear = (0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.formatDate)(this.prev1StartDate, 'yyyy', 'en-US');
    this.Prev2MonthandYear = (0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.formatDate)(this.prev2StartDate, 'yyyy', 'en-US');
  }
  ngOnInit() {
    this.getMarketingDetails();
    this.createForm();
    this.DATEshow = false;
    this.Monthshow = false;
    this.Yearshow = false;
  }
  createForm() {
    this.marketingReportsForm = this.fb.group({
      mcURL: [],
      mcReport: [''],
      mcMonth: ['01'],
      mcYear: [this.date.getFullYear()]
    });
  }
  toggleReporttype(item) {
    if (item.target.value == "0: CROSS" || item.target.value == "1: CUSTM" || item.target.value == "10: ESA" || item.target.value == "11: RETAIL" || item.target.value == "3: EXPRESS") {
      this.DATEshow = false;
      this.Monthshow = true;
      this.Yearshow = true;
    } else {
      this.DATEshow = false;
      this.Monthshow = false;
      this.Yearshow = false;
    }
  }
  getMarketingDetails() {
    {
      this.marketingReportsService.getAllMarketingDetails().subscribe(res => {
        if (res.result) {
          this.marketingList = res.result.list;
          this.marketingReportsForm.patchValue({
            mcReport: '6: AUTO'
          });
        }
      });
    }
  }
  myReportsFun() {
    this.templateError = '';
    var rtypevar = null;
    var rvaluevar = null;
    var rprodvar = null;
    var rapplid = "0002";
    var vcprodcode = this.marketingReportsForm.get('vcprodcode')?.value;
    var mcreptype = this.marketingReportsForm.get('mcreptype')?.value;
    var rtype = this.marketingReportsForm.get('rtype')?.value;
    var rvalue = this.marketingReportsForm.get('rvalue')?.value;
    var frmPeriod = this.marketingReportsForm.get('frmPeriod')?.value;
    var toPeriod = this.marketingReportsForm.get('toPeriod')?.value;
    var mcsubprdcd = "";
    var mcpacktype = "";
    var tcprodcode = this.marketingReportsForm.get('vcprodcode')?.value;
    var RPT = this.marketingReportsForm.get('RPT')?.value;
    var PMTH = this.marketingReportsForm.get('PMTH')?.value;
    var PYEAR = this.marketingReportsForm.get('PYEAR')?.value;
    if (vcprodcode != null && (vcprodcode == "T" || vcprodcode == "A" || vcprodcode == "C" || vcprodcode == "D" || vcprodcode == "E" || vcprodcode == "G" || vcprodcode == "I" || vcprodcode == "K" || vcprodcode == "L" || vcprodcode == "P" || vcprodcode == "V")) {
      var var1 = vcprodcode;
      var var2 = "T";
      var var3 = "T";
      tcprodcode = var1;
      mcsubprdcd = var2;
      mcpacktype = var3;
    }
    if (vcprodcode != null && (vcprodcode == "APC" || vcprodcode == "EPC")) {
      var var1 = vcprodcode;
      var var2 = "PC";
      var var3 = "T";
      tcprodcode = var1;
      mcsubprdcd = var2;
      mcpacktype = var3;
    }
    if (vcprodcode != null && vcprodcode == "APCL") {
      var var1 = vcprodcode;
      var var2 = "PC";
      var var3 = "L";
      tcprodcode = var1;
      mcsubprdcd = var2;
      mcpacktype = var3;
    }
    let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams();
    queryParams = queryParams.append('puid', this.encrypt.decryptionAES(src_app_shared_services_global_var__WEBPACK_IMPORTED_MODULE_0__.GlobalVar.EmpCode));
    queryParams = queryParams.append('papplid', rapplid);
    this.marketingReportsService.getAllGeoDetails(queryParams).subscribe(res => {
      if (res.result) {
        this.geoList = res.result.geoAccessList;
      }
    });
    rtypevar = this.geoList[0];
    rvaluevar = this.geoList[1];
    rprodvar = this.geoList[2];
    if (rtypevar != null && (rtypevar == "R" || rtypevar == "B" || rtypevar == "A" || rtypevar == "S")) {
      rtype = rtypevar;
      rvalue = rvaluevar;
    }
    ///Need to check with Client this logic
    /*
        var inputDate = "2023-04-11";
        SimpleDateFormat inputDateFormat = new SimpleDateFormat("yyyy-MM-dd");
       
       if(frmPeriod == null)
        {
           frmPeriod = inputDateFormat.format(Calendar.getInstance().getTime());
        }
        else
        {
          if(frmPeriod != "")
          {
           Date dt = inputDateFormat.parse(frmPeriod);
           String dateStr = new SimpleDateFormat("dd-MMM-yyyy").format(dt);
       
           frmPeriod = dateStr;
           System.out.println("formattedDate 1" + frmPeriod);
          }
        }
       
       
         String inputDate1 = "2023-04-11";
        SimpleDateFormat inputDateFormat1 = new SimpleDateFormat("yyyy-MM-dd");
       
       if(toPeriod == null)
        {
           toPeriod = inputDateFormat1.format(Calendar.getInstance().getTime());
        }
        else
        {
          if(toPeriod != "")
          {
           Date dt = inputDateFormat1.parse(toPeriod);
           String dateStr1 = new SimpleDateFormat("dd-MMM-yyyy").format(dt);
       
           toPeriod = dateStr1;
           System.out.println("formattedDate 1" + toPeriod);
          }
        }
        */
    var mcReport = "";
    if (mcReport != null) {
      console.log(this.marketingReportsForm.get('mcReport')?.value);
      var ALLSTR = "";
      //var ALLSTR = "&mcReport="+ this.marketingReportsForm.get('mcReport')?.value ;
      //Need to check with client because above From date and end date logic
      if (this.marketingReportsForm.get('mcReport')?.value == "6: AUTO" || this.marketingReportsForm.get('mcReport')?.value == "AUTO") {
        ALLSTR = "MMP_AUTO_LIFE.rptdesign";
      }
      if (this.marketingReportsForm.get('mcReport')?.value == "CROSS") {
        ALLSTR = "CrossBorder_Incentive.rptdesign" + "&PMTH=" + this.marketingReportsForm.get('mcMonth')?.value + "&PYEAR=" + this.marketingReportsForm.get('mcYear')?.value;
        console.log(ALLSTR);
      }
      if (this.marketingReportsForm.get('mcReport')?.value == "CUSTM") {
        var month = "";
        if (this.marketingReportsForm.get('mcMonth')?.value == "01") {
          month = "JAN";
        }
        if (this.marketingReportsForm.get('mcMonth')?.value == "02") {
          month = "FEB";
        }
        if (this.marketingReportsForm.get('mcMonth')?.value == "03") {
          month = "MAR";
        }
        if (this.marketingReportsForm.get('mcMonth')?.value == "04") {
          month = "APR";
        }
        if (this.marketingReportsForm.get('mcMonth')?.value == "05") {
          month = "MAY";
        }
        if (this.marketingReportsForm.get('mcMonth')?.value == "06") {
          month = "JUN";
        }
        if (this.marketingReportsForm.get('mcMonth')?.value == "07") {
          month = "JUL";
        }
        if (this.marketingReportsForm.get('mcMonth')?.value == "08") {
          month = "AUG";
        }
        if (this.marketingReportsForm.get('mcMonth')?.value == "09") {
          month = "SEP";
        }
        if (this.marketingReportsForm.get('mcMonth')?.value == "10") {
          month = "OCT";
        }
        if (this.marketingReportsForm.get('mcMonth')?.value == "11") {
          month = "NOV";
        }
        if (this.marketingReportsForm.get('mcMonth')?.value == "12") {
          month = "DEC";
        }
        var prmonth = this.marketingReportsForm.get('mcYear')?.value - 1;
        ALLSTR = "custmail.rptdesign" + "&tMth=" + month + "&tYear=" + this.marketingReportsForm.get('mcYear')?.value + "&tYearP=" + prmonth;
      }
      if (this.marketingReportsForm.get('mcReport')?.value == "CUSTRPT") {
        ALLSTR = "ESASUM.rptdesign";
      }
      if (this.marketingReportsForm.get('mcReport')?.value == "ESA") {
        ALLSTR = "MRKT_SMTBOX_EXPPLT_ESA.rptdesign" + "&PMTH=" + this.marketingReportsForm.get('mcMonth')?.value + "&PYEAR=" + this.marketingReportsForm.get('mcYear')?.value;
      }
      if (this.marketingReportsForm.get('mcReport')?.value == "EXPRESS") {
        ALLSTR = "MRKT_EEB_6_8DATA.rptdesign" + "&MONTH=" + this.marketingReportsForm.get('mcMonth')?.value + "&YEAR=" + this.marketingReportsForm.get('mcYear')?.value;
      }
      if (this.marketingReportsForm.get('mcReport')?.value == "GRW") {
        ALLSTR = "Growth_Lever.rptdesign";
      }
      if (this.marketingReportsForm.get('mcReport')?.value == "GRWCUST") {
        ALLSTR = "Growth_Lever_Cust.rptdesign";
      }
      if (this.marketingReportsForm.get('mcReport')?.value == "MED") {
        ALLSTR = "MRKT_MMP_MED.rptdesign";
      }
      if (this.marketingReportsForm.get('mcReport')?.value == "RETAIL") {
        ALLSTR = "MRKT_SMTBOX_EXPPLT_RETAIL.rptdesign" + "&PMTH=" + this.marketingReportsForm.get('mcMonth')?.value + "&PYEAR=" + this.marketingReportsForm.get('mcYear')?.value;
      }
      if (this.marketingReportsForm.get('mcReport')?.value == "SALES") {
        ALLSTR = "MRKT_MMP_SALD.rptdesign";
      }
      if (this.marketingReportsForm.get('mcReport')?.value == "SME") {
        ALLSTR = "MMP_SME.rptdesign";
      }
      var baseUrl = this.encrypt.decryptionAES(sessionStorage.getItem('reporturl')) + '/Resources/UserData/reportuser/' + ALLSTR;
      this.marketingReportsForm.patchValue({
        mcURL: baseUrl
      });
      window.open(baseUrl, '_blank');
    } else {
      this.templateError = "Please select Report Type";
    }
  }
}
MarketingReportsComponent.ɵfac = function MarketingReportsComponent_Factory(t) {
  return new (t || MarketingReportsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_MarketingReports_MarketingReports_service__WEBPACK_IMPORTED_MODULE_1__.MarketingReportsService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](bd_common_lib__WEBPACK_IMPORTED_MODULE_6__.AESEncryptDecryptService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](bd_common_lib__WEBPACK_IMPORTED_MODULE_6__.NotificationAlertService));
};
MarketingReportsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: MarketingReportsComponent,
  selectors: [["app-marketing-reports"]],
  decls: 32,
  vars: 7,
  consts: [[1, "content-tophead", "align-items-baseline"], [1, "pagetitle"], [1, "section", "dashboard"], [1, "row"], [1, "col-lg-12"], [1, "card"], [1, "card-body"], [1, "card-title"], [2, "color", "red"], ["method", "post", 1, "bd-form", 3, "formGroup"], [1, "col-md-6"], ["for", "", 1, "col-sm-4", "col-form-label"], [1, "col-sm-8", "bd-inputfield"], ["name", "mcReport", "formControlName", "mcReport", 1, "form-select", 3, "change"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["class", "col-md-6", 4, "ngIf"], [1, "col-md-12"], [1, "btn-groups", "mt-3", "ms-0"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", 3, "click"], ["class", "col-md-12", 4, "ngIf"], [3, "ngValue"], ["type", "date", "name", "PDATE", "formControlName", "PDATE", 1, "form-control"], ["name", "mcMonth", "formControlName", "mcMonth", 1, "form-select"], ["value", "01"], ["value", "02"], ["value", "03"], ["value", "04"], ["value", "05"], ["value", "06"], ["value", "07"], ["value", "08"], ["value", "09"], ["value", "10"], ["value", "11"], ["value", "12"], ["name", "mcYear", "formControlName", "mcYear", 1, "form-select"], [3, "value"], ["for", ""], ["formControlName", "mcURL", "id", "cmultiple", "rows", "4", "cols", "100", 1, "form-select"]],
  template: function MarketingReportsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Customer Centric");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "section", 2)(5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "h5", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Marketing Reports");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 8)(12, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "form", 9)(15, "div", 10)(16, "div", 3)(17, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Report");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 12)(20, "select", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function MarketingReportsComponent_Template_select_change_20_listener($event) {
        return ctx.toggleReporttype($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, MarketingReportsComponent_option_21_Template, 2, 2, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, MarketingReportsComponent_div_22_Template, 6, 0, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, MarketingReportsComponent_div_23_Template, 30, 0, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, MarketingReportsComponent_div_24_Template, 12, 6, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 16)(26, "div", 17)(27, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MarketingReportsComponent_Template_button_click_27_listener() {
        return ctx.myReportsFun();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Run Report");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "pre")(30, "pre");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, MarketingReportsComponent_div_31_Template, 6, 0, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.templateError);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.marketingReportsForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.marketingList);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.DATEshow);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.Monthshow);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.Yearshow);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.hideURL);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8440:
/*!*********************************************************!*\
  !*** ./src/app/components/members/members.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MembersComponent": () => (/* binding */ MembersComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var src_app_shared_services_global_var__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/global-var */ 2480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_Members_Members_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/Members/Members.service */ 2266);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var bd_common_lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bd-common-lib */ 8919);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);







function MembersComponent_option_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const prod_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", prod_r2.CVALUE);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", prod_r2.CNAME, " ");
  }
}
function MembersComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16)(1, "div", 3)(2, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "User Submitted Data URL");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "textarea", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
}
class MembersComponent {
  constructor(membersService, fb, encrypt, alert) {
    this.membersService = membersService;
    this.fb = fb;
    this.encrypt = encrypt;
    this.alert = alert;
    this.productList = [];
    this.geoList = [];
    this.templateError = '';
    this.hideURL = false;
  }
  ngOnInit() {
    this.getProdDetails();
    this.createForm();
  }
  createForm() {
    this.membersForm = this.fb.group({
      mcURL: [],
      mcProduct: []
    });
  }
  myReportsFun() {
    this.templateError = '';
    var tcprodcode = this.membersForm.get('mcProduct')?.value;
    var vcprodcode = this.membersForm.get('mcProduct')?.value;
    var vcprodcode1 = this.membersForm.get('mcProduct')?.value;
    var mcsubprdcd = '';
    var mcpacktype = '';
    var rtypevar = null;
    var rvaluevar = null;
    var rprodvar = null;
    var rapplid = '0002';
    var rtype = null;
    var rvalue = null;
    var rcchannel = null;
    var rcbranch = null;
    var rcregion = null;
    var mcarea = null;
    var mccustcode = null;
    if (vcprodcode != null && (vcprodcode == "T" || vcprodcode == "A" || vcprodcode == "C" || vcprodcode == "D" || vcprodcode == "E" || vcprodcode == "G" || vcprodcode == "I" || vcprodcode == "K" || vcprodcode == "L" || vcprodcode == "P" || vcprodcode == "V")) {
      var var1 = vcprodcode;
      var var2 = "T";
      var var3 = "T";
      tcprodcode = var1;
      mcsubprdcd = var2;
      mcpacktype = var3;
    }
    if (vcprodcode != null && (vcprodcode == "APC" || vcprodcode == "EPC")) {
      var var1 = vcprodcode;
      var var2 = "PC";
      var var3 = "T";
      tcprodcode = var1;
      mcsubprdcd = var2;
      mcpacktype = var3;
    }
    if (vcprodcode != null && vcprodcode == "APCL") {
      var var1 = vcprodcode;
      var var2 = "PC";
      var var3 = "L";
      tcprodcode = var1;
      mcsubprdcd = var2;
      mcpacktype = var3;
    }
    if (vcprodcode != null && vcprodcode == "D") {
      vcprodcode1 = "DP";
    }
    if (vcprodcode != null && vcprodcode == "A") {
      vcprodcode1 = "APXB2B";
    }
    if (vcprodcode != null && vcprodcode == "APC") {
      vcprodcode1 = "APXB2C";
    }
    if (vcprodcode != null && vcprodcode == "APCL") {
      vcprodcode1 = "DRTPLS";
    }
    if (vcprodcode != null && vcprodcode == "E") {
      vcprodcode1 = "SFCB2B";
    }
    if (vcprodcode != null && vcprodcode == "EPC") {
      vcprodcode1 = "SFCB2C";
    }
    if (vcprodcode != null && vcprodcode == "I") {
      vcprodcode1 = "INTL";
    }
    if (vcprodcode != null && vcprodcode == "V") {
      vcprodcode1 = "IMPEXP";
    }
    if (vcprodcode != null && vcprodcode == "PLCY") {
      vcprodcode1 = "ATA";
    }
    if (vcprodcode != null && vcprodcode == "T") {
      vcprodcode1 = "ALL";
    }
    let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
    queryParams = queryParams.append('puid', this.encrypt.decryptionAES(src_app_shared_services_global_var__WEBPACK_IMPORTED_MODULE_0__.GlobalVar.EmpCode));
    queryParams = queryParams.append('papplid', rapplid);
    this.membersService.getAllGeoDetails(queryParams).subscribe(res => {
      if (res.result) {
        this.geoList = res.result.geoAccessList;
      }
    });
    rtypevar = this.geoList[0];
    rvaluevar = this.geoList[1];
    rprodvar = this.geoList[2];
    if (rtypevar != null && (rtypevar == "R" || rtypevar == "B" || rtypevar == "A" || rtypevar == "S")) {
      rtype = rtypevar;
      rvalue = rvaluevar;
    }
    if (this.membersForm.get('mcProduct')?.value != null) {
      var ALLSTR = "&rType=" + rtype + "&rValue=" + rvalue + "&tsupergrcd=" + '' + "&tgrpcd=" + '' + "&tProdcode=" + vcprodcode1 + "&tArea=" + mcarea;
      //Need to put correct URL
      var baseUrl = this.encrypt.decryptionAES(sessionStorage.getItem('reporturl')) + '/Resources/UserData/reportuser/salesumt.rptdesign' + ALLSTR;
      this.membersForm.patchValue({
        mcURL: baseUrl
      });
      window.open(baseUrl, '_blank');
    } else {
      this.templateError = "Please Enter/Select All required fileds";
    }
  }
  getProdDetails() {
    {
      let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
      queryParams = queryParams.append('pprodvar', '');
      this.membersService.getAllProductDetails(queryParams).subscribe(res => {
        if (res.result) {
          this.productList = res.result.list;
        }
      });
    }
  }
}
MembersComponent.ɵfac = function MembersComponent_Factory(t) {
  return new (t || MembersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_Members_Members_service__WEBPACK_IMPORTED_MODULE_1__.MembersService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](bd_common_lib__WEBPACK_IMPORTED_MODULE_5__.AESEncryptDecryptService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](bd_common_lib__WEBPACK_IMPORTED_MODULE_5__.NotificationAlertService));
};
MembersComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: MembersComponent,
  selectors: [["app-members"]],
  decls: 32,
  vars: 5,
  consts: [[1, "content-tophead", "align-items-baseline"], [1, "pagetitle"], [1, "section", "dashboard"], [1, "row"], [1, "col-lg-12"], [1, "card"], [1, "card-body"], [1, "card-title"], [2, "color", "red"], ["method", "post", 1, "row", "bd-form", 3, "formGroup"], [1, "col-md-6"], ["for", "", 1, "col-sm-2", "col-form-label"], [1, "col-sm-6", "bd-inputfield"], ["name", "mcProduct", "formControlName", "mcProduct", 1, "form-select"], ["selected", "", "disabled", "", 3, "ngValue"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-md-12"], [1, "btn-groups", "mt-3", "ms-0"], [1, "btn", "btn-sm", "btn-primary", 3, "click"], ["class", "col-md-12", 4, "ngIf"], [3, "value"], ["for", ""], ["formControlName", "mcURL", "id", "cmultiple", "rows", "4", "cols", "100", 1, "form-select"]],
  template: function MembersComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Customer Centric");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "section", 2)(5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "h5", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Members");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 8)(12, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "form", 9)(15, "div", 10)(16, "div", 3)(17, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Product");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 12)(20, "select", 13)(21, "option", 14)(22, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Select Product");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, MembersComponent_option_24_Template, 2, 2, "option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 16)(26, "div", 17)(27, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MembersComponent_Template_button_click_27_listener() {
        return ctx.myReportsFun();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Continue");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "pre")(30, "pre");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, MembersComponent_div_31_Template, 6, 0, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.templateError);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.membersForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", null);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.productList);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.hideURL);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5485:
/*!***********************************************************************!*\
  !*** ./src/app/components/ndr-action-due/ndr-action-due.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NdrActionDueComponent": () => (/* binding */ NdrActionDueComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);


class NdrActionDueComponent {}
NdrActionDueComponent.ɵfac = function NdrActionDueComponent_Factory(t) {
  return new (t || NdrActionDueComponent)();
};
NdrActionDueComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NdrActionDueComponent,
  selectors: [["app-ndr-action-due"]],
  decls: 31,
  vars: 0,
  consts: [[1, "content-tophead", "align-items-baseline"], [1, "pagetitle"], [1, "section", "dashboard"], [1, "row"], [1, "col-lg-12"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "bd-form"], [1, "col-md-6"], ["for", "", 1, "col-sm-3", "col-form-label"], [1, "col-sm-2", "bd-inputfield"], ["type", "text", "value", "", 1, "form-control"], [1, "col-sm-5", "bd-inputfield"], ["href", "javascript:void(0)", 1, "btn", "btn-sm", "btn-primary", "btn-input"], [1, "col-md-12"], ["for", ""], ["formControlName", "mcURL", "id", "cmultiple", "rows", "4", "cols", "100", 1, "form-select"]],
  template: function NdrActionDueComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Customer Centric");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 2)(5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "h5", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "NDR Action Due");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 8)(12, "div", 9)(13, "div", 3)(14, "label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Cutomer Group");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11)(21, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Run");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "pre")(24, "pre");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15)(26, "div", 3)(27, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "User Submitted Data URL");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "textarea", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()();
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 9335:
/*!*********************************************************!*\
  !*** ./src/app/components/ops-mbo/ops-mbo.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OpsMboComponent": () => (/* binding */ OpsMboComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var src_app_shared_services_global_var__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/global-var */ 2480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_OPSMBO_OPSMBO_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/OPSMBO/OPSMBO.service */ 260);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var bd_common_lib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bd-common-lib */ 8919);








function OpsMboComponent_option_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const reg_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", reg_r2.CVALUE);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" \u00A0\u00A0\u00A0\u00A0", reg_r2.CVALUE, " ");
  }
}
function OpsMboComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26)(1, "div", 3)(2, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "User Submitted Data URL");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "textarea", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
}
class OpsMboComponent {
  constructor(oPSMBOService, fb, encrypt, alert) {
    this.oPSMBOService = oPSMBOService;
    this.fb = fb;
    this.encrypt = encrypt;
    this.alert = alert;
    this.regionList = [];
    this.geoList = [];
    this.oPSMBOData = [];
    this.templateError = '';
    this.GeoAll = false;
    this.hideURL = false;
  }
  ngOnInit() {
    this.getRegionDetails();
    this.createForm();
  }
  getRegionDetails() {
    {
      var puid = this.encrypt.decryptionAES(src_app_shared_services_global_var__WEBPACK_IMPORTED_MODULE_0__.GlobalVar.EmpCode);
      var papplid = "0002";
      let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
      queryParams = queryParams.append('puid', puid);
      queryParams = queryParams.append('papplid', papplid);
      this.oPSMBOService.getAllGeoDetails(queryParams).subscribe(res => {
        if (res.result) {
          this.geoList = res.result.geoAccessList;
          let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
          queryParams = queryParams.append('prtype', this.geoList[0].CGEOTYPE);
          queryParams = queryParams.append('prvalue', this.geoList[0].CGEOACCESS);
          this.oPSMBOService.getAllRegionDetails(queryParams).subscribe(res => {
            if (res.result) {
              if (this.geoList[0].CGEOACCESS == "ALLCO") {
                this.regionList = res.result.list;
                this.GeoAll = true;
                this.oPSMBOForm.patchValue({
                  mcGeography: res.result.list[0].CVALUE
                });
              } else {
                this.GeoAll = false;
                this.regionList = res.result.list;
                console.log(res.result.list);
                this.oPSMBOForm.patchValue({
                  mcGeography: res.result.list[0].CVALUE
                });
              }
            }
          });
        }
      });
    }
  }
  createForm() {
    this.oPSMBOForm = this.fb.group({
      mcURL: [],
      mcStatusCode: ['033'],
      mcReportDate: [],
      mcGeography: []
    });
  }
  myReportsFun() {
    var rtypevar = null;
    var rvaluevar = null;
    var rprodvar = null;
    var rapplid = "0002";
    var vcprodcode = this.oPSMBOForm.get('vcprodcode')?.value == undefined ? null : this.oPSMBOForm.get('vcprodcode')?.value;
    ;
    var mcreptype = this.oPSMBOForm.get('mcreptype')?.value == undefined ? null : this.oPSMBOForm.get('mcreptype')?.value;
    ;
    var rtype = this.oPSMBOForm.get('rtype')?.value == undefined ? null : this.oPSMBOForm.get('rtype')?.value;
    ;
    var rvalue = this.oPSMBOForm.get('rvalue')?.value == undefined ? null : this.oPSMBOForm.get('rvalue')?.value;
    ;
    var mtPeriod = this.oPSMBOForm.get('mtPeriod')?.value == undefined ? null : this.oPSMBOForm.get('mtPeriod')?.value;
    ;
    var mcsubprdcd = "";
    var mcpacktype = "";
    var tcprodcode = this.oPSMBOForm.get('vcprodcode')?.value == undefined ? null : this.oPSMBOForm.get('vcprodcode')?.value;
    ;
    this.templateError = '';
    var mcStatusCode = this.oPSMBOForm.get('mcStatusCode')?.value;
    var rtype = null;
    var rvalue = null;
    if (vcprodcode != null && (vcprodcode == "T" || vcprodcode == "A" || vcprodcode == "C" || vcprodcode == "D" || vcprodcode == "E" || vcprodcode == "G" || vcprodcode == "I" || vcprodcode == "K" || vcprodcode == "L" || vcprodcode == "P" || vcprodcode == "V")) {
      var var1 = vcprodcode.substring(0, 1);
      var var2 = "T";
      var var3 = "T";
      tcprodcode = var1;
      mcsubprdcd = var2;
      mcpacktype = var3;
    }
    if (vcprodcode != null && (vcprodcode == "APC" || vcprodcode == "EPC")) {
      var var1 = vcprodcode.substring(0, 1);
      var var2 = "PC";
      var var3 = "T";
      tcprodcode = var1;
      mcsubprdcd = var2;
      mcpacktype = var3;
    }
    if (vcprodcode != null && vcprodcode == "APCL") {
      var var1 = vcprodcode.substring(0, 1);
      var var2 = "PC";
      var var3 = "L";
      tcprodcode = var1;
      mcsubprdcd = var2;
      mcpacktype = var3;
    }
    let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
    queryParams = queryParams.append('puid', this.encrypt.decryptionAES(src_app_shared_services_global_var__WEBPACK_IMPORTED_MODULE_0__.GlobalVar.EmpCode));
    queryParams = queryParams.append('papplid', rapplid);
    this.oPSMBOService.getAllGeoDetails(queryParams).subscribe(res => {
      if (res.result) {
        this.geoList = res.result.geoAccessList;
      }
    });
    rtypevar = this.geoList[0];
    rvaluevar = this.geoList[1];
    rprodvar = this.geoList[2];
    if (rtypevar != null && (rtypevar == "R" || rtypevar == "B" || rtypevar == "A" || rtypevar == "S")) {
      rtype = rtypevar;
      rvalue = rvaluevar;
    }
    if (this.oPSMBOForm.get('mcStatusCode')?.value != null && this.oPSMBOForm.get('mcReportDate')?.value != null && this.oPSMBOForm.get('mcGeography')?.value != null) {
      var ALLSTR = "&tDate=" + (0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.formatDate)(this.oPSMBOForm.get('mcReportDate')?.value, 'dd-MMM-yy', 'en-US').toUpperCase() + "&rValue=" + this.oPSMBOForm.get('mcGeography')?.value + "&tCstatCode=" + this.oPSMBOForm.get('mcStatusCode')?.value;
      var baseUrl = this.encrypt.decryptionAES(sessionStorage.getItem('reporturl')) + '/exotel/OPSMBO.rptdesign' + ALLSTR;
      this.oPSMBOForm.patchValue({
        mcURL: baseUrl
      });
      window.open(baseUrl, '_blank');
    } else {
      this.templateError = "Please Enter/Select All required fileds";
    }
  }
}
OpsMboComponent.ɵfac = function OpsMboComponent_Factory(t) {
  return new (t || OpsMboComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_OPSMBO_OPSMBO_service__WEBPACK_IMPORTED_MODULE_1__.OPSMBOService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](bd_common_lib__WEBPACK_IMPORTED_MODULE_6__.AESEncryptDecryptService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](bd_common_lib__WEBPACK_IMPORTED_MODULE_6__.NotificationAlertService));
};
OpsMboComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: OpsMboComponent,
  selectors: [["app-ops-mbo"]],
  decls: 47,
  vars: 4,
  consts: [[1, "content-tophead", "align-items-baseline"], [1, "pagetitle"], [1, "section", "dashboard"], [1, "row"], [1, "col-lg-12"], [1, "card"], [1, "card-body"], [1, "card-title"], [2, "color", "red"], ["method", "post", 1, "bd-form", 3, "formGroup"], [1, "col-md-6"], ["for", "", 1, "col-sm-4", "col-form-label"], [1, "col-sm-8", "bd-inputfield"], ["name", "mcStatusCode", "formControlName", "mcStatusCode", 1, "form-select"], ["selected", "", "value", "033"], ["value", "142"], ["value", "174"], [1, "row", "mb-1"], ["type", "date", "name", "mcReportDate", "formControlName", "mcReportDate", "value", "", 1, "form-control"], ["name", "mcGeography", "formControlName", "mcGeography", 1, "form-select"], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "mt-3", "col-md-12"], [1, "btn-groups", "ms-0"], [1, "btn", "btn-sm", "btn-primary", 3, "click"], ["class", "col-md-12", 4, "ngIf"], [3, "ngValue"], [1, "col-md-12"], ["for", ""], ["formControlName", "mcURL", "id", "cmultiple", "rows", "4", "cols", "100", 1, "form-select"]],
  template: function OpsMboComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Customer Centric");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "section", 2)(5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "h5", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "EPS MBO : Input Parameters");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 8)(12, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "form", 9)(15, "div", 10)(16, "div", 3)(17, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Status Code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 12)(20, "select", 13)(21, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "1. Code 033");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "2. Code 142");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "option", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "3. Code 174");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 10)(28, "div", 17)(29, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Report Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "input", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 10)(34, "div", 3)(35, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Geography");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 12)(38, "select", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](39, OpsMboComponent_option_39_Template, 2, 2, "option", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 21)(41, "div", 22)(42, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OpsMboComponent_Template_button_click_42_listener() {
        return ctx.myReportsFun();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Continue");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "pre")(45, "pre");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](46, OpsMboComponent_div_46_Template, 6, 0, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.templateError);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.oPSMBOForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.regionList);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.hideURL);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 2597:
/*!***********************************************************************************!*\
  !*** ./src/app/components/product-yield-report/product-yield-report.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductYieldReportComponent": () => (/* binding */ ProductYieldReportComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var src_app_shared_services_global_var__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/global-var */ 2480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_ProductYieldReport_ProductYieldReport_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/ProductYieldReport/ProductYieldReport.service */ 4630);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var bd_common_lib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bd-common-lib */ 8919);








function ProductYieldReportComponent_option_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const cal_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", cal_r2.CNAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", cal_r2.CNAME, " ");
  }
}
function ProductYieldReportComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 15)(1, "div", 3)(2, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "User Submitted Data URL");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "textarea", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
}
class ProductYieldReportComponent {
  constructor(productYieldReportService, fb, encrypt, alert) {
    this.productYieldReportService = productYieldReportService;
    this.fb = fb;
    this.encrypt = encrypt;
    this.alert = alert;
    this.productList = [];
    this.geoList = [];
    this.templateError = '';
    this.hideURL = false;
    this.date = new Date();
    this.Curyear = this.date.getFullYear();
    this.Pryear = this.date.getFullYear() - 1;
    this.regionList = [];
    this.calanderList = [];
    this.rtypevar = null;
    this.rvaluevar = null;
    this.rprodvar = null;
    this.rapplid = "0002";
    this.rtype = null;
    this.rvalue = null;
  }
  ngOnInit() {
    this.createForm();
    this.getCalanderDetails();
  }
  createForm() {
    this.productYieldReportForm = this.fb.group({
      mcURL: [],
      mcFromMonth: [(0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.formatDate)(new Date(), 'MMMyyyy', 'en-US').toUpperCase()]
    });
  }
  getCalanderDetails() {
    {
      let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams();
      queryParams = queryParams.append('puid', '');
      this.productYieldReportService.getAllCalanderDetails(queryParams).subscribe(res => {
        if (res.result) {
          this.calanderList = res.result.list;
        }
      });
    }
  }
  myReportsFun() {
    var rtypevar = null;
    var rvaluevar = null;
    var rprodvar = null;
    var rapplid = "0002";
    var vcprodcode = this.productYieldReportForm.get('vcprodcode')?.value;
    var mcreptype = this.productYieldReportForm.get('mcreptype')?.value;
    var rtype = this.productYieldReportForm.get('rtype')?.value;
    var rvalue = this.productYieldReportForm.get('rvalue')?.value;
    var frmPeriod = this.productYieldReportForm.get('frmPeriod')?.value;
    var toPeriod = this.productYieldReportForm.get('toPeriod')?.value;
    var mcsubprdcd = "";
    var mcpacktype = "";
    var tcprodcode = this.productYieldReportForm.get('vcprodcode')?.value;
    var RPT = this.productYieldReportForm.get('RPT')?.value;
    var PMTH = this.productYieldReportForm.get('PMTH')?.value;
    var PYEAR = this.productYieldReportForm.get('PYEAR')?.value;
    var PTYPE = this.productYieldReportForm.get('PTYPE')?.value;
    var DREG = this.productYieldReportForm.get('DREG')?.value;
    var mcmthyear = this.productYieldReportForm.get('mcmthyear')?.value;
    var mcmthyear1 = null;
    var mcmthyear2 = null;
    var PDST = this.productYieldReportForm.get('PDST')?.value;
    var prtype = "";
    var prvalue = "";
    this.templateError = '';
    var mcFromMonth = this.productYieldReportForm.get('mcFromMonth')?.value;
    var mcsubprdcd = '';
    var mcpacktype = '';
    if (vcprodcode != null && (vcprodcode == "T" || vcprodcode == "A" || vcprodcode == "C" || vcprodcode == "D" || vcprodcode == "E" || vcprodcode == "G" || vcprodcode == "I" || vcprodcode == "K" || vcprodcode == "L" || vcprodcode == "P" || vcprodcode == "V")) {
      var var1 = vcprodcode.substring(0, 1);
      var var2 = "T";
      var var3 = "T";
      tcprodcode = var1;
      mcsubprdcd = var2;
      mcpacktype = var3;
    }
    if (vcprodcode != null && (vcprodcode == "APC" || vcprodcode == "EPC")) {
      var var1 = vcprodcode.substring(0, 1);
      var var2 = "PC";
      var var3 = "T";
      tcprodcode = var1;
      mcsubprdcd = var2;
      mcpacktype = var3;
    }
    if (vcprodcode != null && vcprodcode == "APCL") {
      var var1 = vcprodcode.substring(0, 1);
      var var2 = "PC";
      var var3 = "L";
      tcprodcode = var1;
      mcsubprdcd = var2;
      mcpacktype = var3;
    }
    let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams();
    queryParams = queryParams.append('puid', this.encrypt.decryptionAES(src_app_shared_services_global_var__WEBPACK_IMPORTED_MODULE_0__.GlobalVar.EmpCode));
    queryParams = queryParams.append('papplid', this.rapplid);
    this.productYieldReportService.getAllGeoDetails(queryParams).subscribe(res => {
      if (res.result) {
        this.geoList = res.result.geoAccessList;
      }
    });
    this.rtypevar = this.geoList[0];
    this.rvaluevar = this.geoList[1];
    this.rprodvar = this.geoList[2];
    if (this.rtypevar != null && (this.rtypevar == "R" || this.rtypevar == "B" || this.rtypevar == "A" || this.rtypevar == "S")) {
      this.rtype = this.rtypevar;
      this.rvalue = this.rvaluevar;
    }
    if (mcmthyear != null) {
      mcmthyear1 = mcmthyear.substring(0, 3);
      mcmthyear2 = mcmthyear.substring(5, 7);
    }
    if (this.productYieldReportForm.get('mcFromMonth')?.value != null) {
      console.log(this.productYieldReportForm.get('mcFromMonth')?.value);
      var puid = this.encrypt.decryptionAES(src_app_shared_services_global_var__WEBPACK_IMPORTED_MODULE_0__.GlobalVar.EmpCode);
      let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams();
      queryParams = queryParams.append('puid', puid);
      queryParams = queryParams.append('papplid', rapplid);
      this.productYieldReportService.getAllGeoDetails(queryParams).subscribe(res => {
        if (res.result) {
          this.geoList = res.result.geoAccessList;
          rtypevar = this.geoList[0].CGEOTYPE;
          rvaluevar = this.geoList[0].CGEOACCESS;
          var ALLSTR = "&tMth=" + (0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.formatDate)(this.productYieldReportForm.get('mcFromMonth')?.value, 'MMMyy', 'en-US').toUpperCase() + "&trtype=" + this.geoList[0].CGEOTYPE + "&trvalue=" + this.geoList[0].CGEOACCESS;
          var baseUrl = this.encrypt.decryptionAES(sessionStorage.getItem('reporturl')) + '/Resources/UserData/reportuser/CUSTREV.rptdesign' + ALLSTR;
          this.productYieldReportForm.patchValue({
            mcURL: baseUrl
          });
          window.open(baseUrl, '_blank');
        }
      });
    } else {
      this.templateError = "Please Select at least one Month from the list";
    }
  }
}
ProductYieldReportComponent.ɵfac = function ProductYieldReportComponent_Factory(t) {
  return new (t || ProductYieldReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_ProductYieldReport_ProductYieldReport_service__WEBPACK_IMPORTED_MODULE_1__.ProductYieldReportService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](bd_common_lib__WEBPACK_IMPORTED_MODULE_6__.AESEncryptDecryptService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](bd_common_lib__WEBPACK_IMPORTED_MODULE_6__.NotificationAlertService));
};
ProductYieldReportComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ProductYieldReportComponent,
  selectors: [["app-product-yield-report"]],
  decls: 29,
  vars: 4,
  consts: [[1, "content-tophead", "align-items-baseline"], [1, "pagetitle"], [1, "section", "dashboard"], [1, "row"], [1, "col-lg-12"], [1, "card"], [1, "card-body"], [1, "card-title"], [2, "color", "red"], ["method", "post", 1, "bd-form", 3, "formGroup"], [1, "col-md-6"], ["for", "", 1, "col-sm-4", "col-form-label"], [1, "col-sm-4", "bd-inputfield"], ["name", "mcFromMonth", "formControlName", "mcFromMonth", 1, "form-select"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-md-12"], [1, "btn-groups", "mt-3", "ms-0"], [1, "btn", "btn-sm", "btn-primary", 3, "click"], ["class", "col-md-12", 4, "ngIf"], [3, "value"], ["for", ""], ["formControlName", "mcURL", "id", "cmultiple", "rows", "4", "cols", "100", 1, "form-select"]],
  template: function ProductYieldReportComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Customer Centric");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "section", 2)(5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "h5", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Product Yield Report");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 8)(12, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "form", 9)(15, "div", 10)(16, "div", 3)(17, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Month");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 12)(20, "select", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, ProductYieldReportComponent_option_21_Template, 2, 2, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 15)(23, "div", 16)(24, "button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductYieldReportComponent_Template_button_click_24_listener() {
        return ctx.myReportsFun();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Run Report");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "pre")(27, "pre");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, ProductYieldReportComponent_div_28_Template, 6, 0, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.templateError);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.productYieldReportForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.calanderList);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.hideURL);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8230:
/*!*****************************************************!*\
  !*** ./src/app/components/sales/sales.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalesComponent": () => (/* binding */ SalesComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var src_app_shared_services_global_var__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/global-var */ 2480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_Sales_Sales_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/Sales/Sales.service */ 7065);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var bd_common_lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bd-common-lib */ 8919);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);







const _c0 = ["alertDiv"];
function SalesComponent_option_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const prod_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", prod_r6.CVALUE);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", prod_r6.CNAME, " ");
  }
}
function SalesComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13)(1, "div", 3)(2, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Customer Group ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 29)(5, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keypress", function SalesComponent_div_35_Template_input_keypress_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r7.numberOnly($event));
    })("keydown", function SalesComponent_div_35_Template_input_keydown_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r9.onFetechCustGroupEvent($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 29)(9, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SalesComponent_div_35_Template_a_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r10.onFetechCustGroup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Search");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
}
function SalesComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13)(1, "div", 3)(2, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Area ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 29)(5, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keydown", function SalesComponent_div_36_Template_input_keydown_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r11.onFetechAreaGroupEvent($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
}
function SalesComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13)(1, "div", 3)(2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
}
function SalesComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24)(1, "div", 3)(2, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "User Submitted Data URL");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "textarea", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
}
class SalesComponent {
  constructor(salesService, fb, encrypt, renderer, alert) {
    this.salesService = salesService;
    this.fb = fb;
    this.encrypt = encrypt;
    this.renderer = renderer;
    this.alert = alert;
    this.productList = [];
    this.geoList = [];
    this.geoCustList = [];
    this.templateError = '';
    this.ShowGroup = false;
    this.ShowArea = false;
    this.hideURL = false;
    this.HideDt = false;
    this.mcSearchtext = '';
    this.mcCustomerGroup = '';
    this.mcarea = '';
    this.mccustcode = '';
    this.rtypevar_cust1 = "";
    this.rvaluevar_cust1 = "";
  }
  ngAfterViewInit() {
    const dataHeadElement = this.alertDiv.nativeElement.querySelector('.data-head');
    const btnclose = this.alertDiv.nativeElement.querySelector('.close-btn');
    if (dataHeadElement && dataHeadElement.innerHTML.trim() !== '') {
      // Show the alert div
      this.renderer.setStyle(this.alertDiv.nativeElement, 'display', 'block');
    } else {
      // Hide the alert div
      this.renderer.setStyle(this.alertDiv.nativeElement, 'display', 'none');
    }
    btnclose.addEventListener('click', () => {
      // Hide the alert div
      this.renderer.setStyle(this.alertDiv.nativeElement, 'display', 'none');
    });
  }
  ngOnInit() {
    this.getProdDetails();
    this.createForm();
    this.ShowGroup = false;
    this.ShowArea = false;
    this.HideDt = false;
  }
  createForm() {
    this.salesForm = this.fb.group({
      mcURL: [],
      mcProduct: ['T'],
      mcCustomerGroup: [],
      mcSearchtext: [],
      mcarea: [],
      mccustcode: [],
      mcReportType: [],
      mcCGEOTYPE: [''],
      mcCGEOACCESS: ['']
    });
  }
  toggleSetGrouporArea(item) {
    if (item.target.value == "G") {
      this.ShowGroup = true;
      this.ShowArea = false;
      this.salesForm.controls['mcarea'].setValue("");
      this.salesForm.controls['mccustcode'].setValue("");
    }
    if (item.target.value == "A") {
      this.ShowGroup = false;
      this.ShowArea = true;
      this.salesForm.controls['mcCustomerGroup'].setValue("");
      this.salesForm.controls['mcSearchtext'].setValue("");
    }
  }
  myReportsFun() {
    var rtypevar = null;
    var rvaluevar = null;
    var rtypevar_cust = null;
    var rvaluevar_cust = null;
    var rapplid = "0002";
    var vcprodcode = this.salesForm.get('vcprodcode')?.value;
    var vcprodcode1 = this.salesForm.get('vcprodcode1')?.value;
    this.templateError = '';
    var tcprodcode = this.salesForm.get('mcProduct')?.value;
    var vcprodcode = this.salesForm.get('mcProduct')?.value;
    var vcprodcode1 = this.salesForm.get('mcProduct')?.value;
    var mcsubprdcd = '';
    var mcpacktype = '';
    var mcsupergrcd = this.salesForm.get('mcsupergrcd')?.value;
    if (mcsupergrcd == null) {
      mcsupergrcd = "";
    }
    var mcsupergrnm = this.salesForm.get('mcsupergrnm')?.value;
    if (mcsupergrnm == null) {
      mcsupergrnm = "";
    }
    if (vcprodcode != null && (vcprodcode == "T" || vcprodcode == "A" || vcprodcode == "C" || vcprodcode == "D" || vcprodcode == "E" || vcprodcode == "G" || vcprodcode == "I" || vcprodcode == "K" || vcprodcode == "L" || vcprodcode == "P" || vcprodcode == "V")) {
      var var1 = vcprodcode.substring(0, 1);
      var var2 = "T";
      var var3 = "T";
      tcprodcode = var1;
      mcsubprdcd = var2;
      mcpacktype = var3;
    }
    if (vcprodcode != null && (vcprodcode == "APC" || vcprodcode == "EPC")) {
      var var1 = vcprodcode.substring(0, 1);
      var var2 = "PC";
      var var3 = "T";
      tcprodcode = var1;
      mcsubprdcd = var2;
      mcpacktype = var3;
    }
    if (vcprodcode != null && vcprodcode == "APCL") {
      var var1 = vcprodcode.substring(0, 1);
      var var2 = "PC";
      var var3 = "L";
      tcprodcode = var1;
      mcsubprdcd = var2;
      mcpacktype = var3;
    }
    if (vcprodcode != null && vcprodcode == "D") {
      vcprodcode1 = "DP";
    }
    if (vcprodcode != null && vcprodcode == "A") {
      vcprodcode1 = "APXB2B";
    }
    if (vcprodcode != null && vcprodcode == "APC") {
      vcprodcode1 = "APXB2C";
    }
    if (vcprodcode != null && vcprodcode == "APCL") {
      vcprodcode1 = "DRTPLS";
    }
    if (vcprodcode != null && vcprodcode == "E") {
      vcprodcode1 = "SFCB2B";
    }
    if (vcprodcode != null && vcprodcode == "EPC") {
      vcprodcode1 = "SFCB2C";
    }
    if (vcprodcode != null && vcprodcode == "I") {
      vcprodcode1 = "INTL";
    }
    if (vcprodcode != null && vcprodcode == "V") {
      vcprodcode1 = "IMPEXP";
    }
    if (vcprodcode != null && vcprodcode == "PLCY") {
      vcprodcode1 = "ATA";
    }
    if (vcprodcode != null && vcprodcode == "T") {
      vcprodcode1 = "ALL";
    }
    if (this.salesForm.get('mcProduct')?.value != null && this.salesForm.get('mcReportType')?.value != null) {
      var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
      queryParams = queryParams.append('puid', this.encrypt.decryptionAES(src_app_shared_services_global_var__WEBPACK_IMPORTED_MODULE_0__.GlobalVar.EmpCode));
      queryParams = queryParams.append('papplid', rapplid);
      this.salesService.getAllGeoDetails(queryParams).subscribe(res => {
        if (res.result) {
          this.geoList = res.result.geoAccessList;
          rtypevar = this.geoList[0].CGEOTYPE;
          rvaluevar = this.geoList[0].CGEOACCESS;
          //To check User having which access --Start
          var queryParamscust = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
          queryParamscust = queryParamscust.append('puid', this.encrypt.decryptionAES(src_app_shared_services_global_var__WEBPACK_IMPORTED_MODULE_0__.GlobalVar.EmpCode));
          queryParamscust = queryParamscust.append('pccompgrp', this.salesForm.get('mcCustomerGroup')?.value == null ? '' : this.salesForm.get('mcCustomerGroup')?.value);
          queryParamscust = queryParamscust.append('pcorgarea', this.salesForm.get('mcarea')?.value == null ? '' : this.salesForm.get('mcarea')?.value);
          queryParamscust = queryParamscust.append('pccustcode', this.salesForm.get('mccustcode')?.value == null ? '' : this.salesForm.get('mccustcode')?.value);
          this.salesService.getAllCustGeoDetails(queryParamscust).subscribe(res => {
            if (res.result.geoCustAccessList == null || res.result.geoCustAccessList === 0 || res.result.geoCustAccessList.length === 0) {
              console.log("Record not found in Get_GeoCustaccess-So passing original rtypevar value -", rtypevar);
              console.log("Record not found in Get_GeoCustaccess-So passing original rvaluevar value is -", rvaluevar);
              if (this.salesForm.get('mcReportType')?.value == "G") {
                console.log(this.salesForm.get('mcCustomerGroup')?.value);
                var ALLSTR = "&rType=" + rtypevar + "&rValue=" + rvaluevar + "&tsupergrcd=" + "" + "&tgrpcd=" + this.salesForm.get('mcCustomerGroup')?.value + "&tProdcode=" + vcprodcode1 + "&tArea=" + "" + "&tCustCode=" + "";
                var baseUrl = this.encrypt.decryptionAES(sessionStorage.getItem('reporturl')) + '/Resources/UserData/reportuser/salesumt.rptdesign' + ALLSTR;
                this.salesForm.patchValue({
                  mcURL: baseUrl
                });
                window.open(baseUrl, '_blank');
              } else {
                var ALLSTR = "&rType=" + rtypevar + "&rValue=" + rvaluevar + "&tsupergrcd=" + "" + "&tgrpcd=" + "" + "&tProdcode=" + vcprodcode1 + "&tArea=" + this.salesForm.get('mcarea')?.value + "&tCustCode=" + this.salesForm.get('mccustcode')?.value;
                var baseUrl = this.encrypt.decryptionAES(sessionStorage.getItem('reporturl')) + '/Resources/UserData/reportuser/salesumt.rptdesign' + ALLSTR;
                this.salesForm.patchValue({
                  mcURL: baseUrl
                });
                window.open(baseUrl, '_blank');
              }
            } else {
              console.log("Full result-", res.result.geoCustAccessList.length);
              this.geoCustList = res.result.geoCustAccessList;
              rtypevar_cust = this.geoCustList[0].CGEOTYPE;
              rvaluevar_cust = this.geoCustList[0].CGEOACCESS;
              console.log("Before rtypevar value is -", rtypevar);
              console.log("Before rvaluevar value is -", rvaluevar);
              if (rvaluevar_cust != "" || rvaluevar_cust != null || rvaluevar_cust != "" || rvaluevar_cust != null) {
                rtypevar = rtypevar_cust;
                rvaluevar = rvaluevar_cust;
              }
              console.log("After rtypevar value is -", rtypevar);
              console.log("After rvaluevar value is -", rvaluevar);
              //To check User having which access --End
              if (this.salesForm.get('mcReportType')?.value == "G") {
                console.log(this.salesForm.get('mcCustomerGroup')?.value);
                var ALLSTR = "&rType=" + rtypevar + "&rValue=" + rvaluevar + "&tsupergrcd=" + "" + "&tgrpcd=" + this.salesForm.get('mcCustomerGroup')?.value + "&tProdcode=" + vcprodcode1 + "&tArea=" + "" + "&tCustCode=" + "";
                var baseUrl = this.encrypt.decryptionAES(sessionStorage.getItem('reporturl')) + '/Resources/UserData/reportuser/salesumt.rptdesign' + ALLSTR;
                this.salesForm.patchValue({
                  mcURL: baseUrl
                });
                window.open(baseUrl, '_blank');
              } else {
                var ALLSTR = "&rType=" + rtypevar + "&rValue=" + rvaluevar + "&tsupergrcd=" + "" + "&tgrpcd=" + "" + "&tProdcode=" + vcprodcode1 + "&tArea=" + this.salesForm.get('mcarea')?.value + "&tCustCode=" + this.salesForm.get('mccustcode')?.value;
                var baseUrl = this.encrypt.decryptionAES(sessionStorage.getItem('reporturl')) + '/Resources/UserData/reportuser/salesumt.rptdesign' + ALLSTR;
                this.salesForm.patchValue({
                  mcURL: baseUrl
                });
                window.open(baseUrl, '_blank');
              }
            }
          });
        }
      });
    } else {
      this.templateError = "Please Enter/Select All required fileds";
    }
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
  onFetechCustGroup() {
    this.mcCustomerGroup = '';
    this.mcSearchtext = '';
    if (this.salesForm.get("mcCustomerGroup")?.value == "" || this.salesForm.get("mcCustomerGroup")?.value == null) {
      this.templateError = "Please enter Cust Group";
    } else {
      this.templateError = '';
      let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
      queryParams = queryParams.append('CCOMPGRP', this.salesForm.get("mcCustomerGroup")?.value);
      this.salesService.getCustGroupDetails(queryParams).subscribe(res => {
        if (res.result) {
          if (res.result.custGroupList == null || res.result.custGroupList === 0 || res.result.custGroupList.length === 0) {
            if (this.salesForm.get("mcCustomerGroup")?.value == "ALL" || this.salesForm.get("mcCustomerGroup")?.value == "All" || this.salesForm.get("mcCustomerGroup")?.value == "all" || this.salesForm.get("mcCustomerGroup")?.value == "All" || this.salesForm.get("mcCustomerGroup")?.value == "all" || this.salesForm.get("mcCustomerGroup")?.value == "aLL" || this.salesForm.get("mcCustomerGroup")?.value == "aLl") {
              this.mcSearchtext = 'ALL';
            } else {
              this.templateError = "No Data for" + "   " + "[" + this.salesForm.get("mcCustomerGroup")?.value + "]" + "   " + "this Cust Group";
            }
          } else {
            this.salesForm.patchValue({
              mcCustomerGroup: res.result.custGroupList[0].CCOMPGRP,
              mcSearchtext: res.result.custGroupList[0].CCOMPNAME
            });
          }
          if (this.salesForm.get("mcCustomerGroup")?.value == "ALL" || this.salesForm.get("mcCustomerGroup")?.value == "All" || this.salesForm.get("mcCustomerGroup")?.value == "all" || this.salesForm.get("mcCustomerGroup")?.value == "All" || this.salesForm.get("mcCustomerGroup")?.value == "all" || this.salesForm.get("mcCustomerGroup")?.value == "aLL" || this.salesForm.get("mcCustomerGroup")?.value == "aLl") {
            this.salesForm.patchValue({
              mcCustomerGroup: "ALL",
              mcSearchtext: "ALL"
            });
          }
        }
      });
    }
  }
  onFetechCustGroupEvent(event) {
    this.mcCustomerGroup = '';
    this.mcSearchtext = '';
    if (this.salesForm.get("mcCustomerGroup")?.value == "" || this.salesForm.get("mcCustomerGroup")?.value == null) {
      this.templateError = "Please enter Cust Group";
    } else {
      if (event.keyCode == 13 || event.keyCode == 9) {
        this.templateError = '';
        let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        queryParams = queryParams.append('CCOMPGRP', this.salesForm.get("mcCustomerGroup")?.value);
        this.salesService.getCustGroupDetails(queryParams).subscribe(res => {
          if (res.result) {
            if (res.result.custGroupList == null || res.result.custGroupList === 0 || res.result.custGroupList.length === 0) {
              if (this.salesForm.get("mcCustomerGroup")?.value == "ALL" || this.salesForm.get("mcCustomerGroup")?.value == "All" || this.salesForm.get("mcCustomerGroup")?.value == "all" || this.salesForm.get("mcCustomerGroup")?.value == "All" || this.salesForm.get("mcCustomerGroup")?.value == "all" || this.salesForm.get("mcCustomerGroup")?.value == "aLL" || this.salesForm.get("mcCustomerGroup")?.value == "aLl") {
                this.mcSearchtext = 'ALL';
              } else {
                this.templateError = "No Data for" + "   " + "[" + this.salesForm.get("mcCustomerGroup")?.value + "]" + "   " + "this Cust Group";
              }
            } else {
              this.salesForm.patchValue({
                mcCustomerGroup: res.result.custGroupList[0].CCOMPGRP,
                mcSearchtext: res.result.custGroupList[0].CCOMPNAME
              });
            }
            if (this.salesForm.get("mcCustomerGroup")?.value == "ALL" || this.salesForm.get("mcCustomerGroup")?.value == "All" || this.salesForm.get("mcCustomerGroup")?.value == "all" || this.salesForm.get("mcCustomerGroup")?.value == "All" || this.salesForm.get("mcCustomerGroup")?.value == "all" || this.salesForm.get("mcCustomerGroup")?.value == "aLL" || this.salesForm.get("mcCustomerGroup")?.value == "aLl") {
              this.salesForm.patchValue({
                mcCustomerGroup: "ALL",
                mcSearchtext: "ALL"
              });
            }
          }
        });
      }
    }
  }
  onFetechAreaGroup() {
    this.mcCustomerGroup = '';
    this.mcSearchtext = '';
    if (this.salesForm.get("mcCustomerGroup")?.value == "" || this.salesForm.get("mcCustomerGroup")?.value == null) {
      this.templateError = "Please enter Cust Group";
    } else {
      this.templateError = '';
      let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
      queryParams = queryParams.append('CCOMPGRP', this.salesForm.get("mcCustomerGroup")?.value);
      this.salesService.getCustGroupDetails(queryParams).subscribe(res => {
        if (res.result) {
          if (res.result.custGroupList == null || res.result.custGroupList === 0 || res.result.custGroupList.length === 0) {
            if (this.salesForm.get("mcCustomerGroup")?.value == "ALL" || this.salesForm.get("mcCustomerGroup")?.value == "All" || this.salesForm.get("mcCustomerGroup")?.value == "all" || this.salesForm.get("mcCustomerGroup")?.value == "All" || this.salesForm.get("mcCustomerGroup")?.value == "all" || this.salesForm.get("mcCustomerGroup")?.value == "aLL" || this.salesForm.get("mcCustomerGroup")?.value == "aLl") {
              this.mcSearchtext = 'ALL';
            } else {
              this.templateError = "No Data for" + "   " + "[" + this.salesForm.get("mcCustomerGroup")?.value + "]" + "   " + "this Cust Group";
            }
          } else {
            this.salesForm.patchValue({
              mcCustomerGroup: res.result.custGroupList[0].CCOMPGRP,
              mcSearchtext: res.result.custGroupList[0].CCOMPNAME
            });
          }
          if (this.salesForm.get("mcCustomerGroup")?.value == "ALL" || this.salesForm.get("mcCustomerGroup")?.value == "All" || this.salesForm.get("mcCustomerGroup")?.value == "all" || this.salesForm.get("mcCustomerGroup")?.value == "All" || this.salesForm.get("mcCustomerGroup")?.value == "all" || this.salesForm.get("mcCustomerGroup")?.value == "aLL" || this.salesForm.get("mcCustomerGroup")?.value == "aLl") {
            this.salesForm.patchValue({
              mcCustomerGroup: "ALL",
              mcSearchtext: "ALL"
            });
          }
        }
      });
    }
  }
  onFetechAreaGroupEvent(event) {
    this.mcCustomerGroup = '';
    this.mcSearchtext = '';
    if (this.salesForm.get("mcCustomerGroup")?.value == "" || this.salesForm.get("mcCustomerGroup")?.value == null) {
      this.templateError = "Please enter Cust Group";
    } else {
      if (event.keyCode == 13 || event.keyCode == 9) {
        this.templateError = '';
        let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        queryParams = queryParams.append('CCOMPGRP', this.salesForm.get("mcCustomerGroup")?.value);
        this.salesService.getCustGroupDetails(queryParams).subscribe(res => {
          if (res.result) {
            if (res.result.custGroupList == null || res.result.custGroupList === 0 || res.result.custGroupList.length === 0) {
              if (this.salesForm.get("mcCustomerGroup")?.value == "ALL" || this.salesForm.get("mcCustomerGroup")?.value == "All" || this.salesForm.get("mcCustomerGroup")?.value == "all" || this.salesForm.get("mcCustomerGroup")?.value == "All" || this.salesForm.get("mcCustomerGroup")?.value == "all" || this.salesForm.get("mcCustomerGroup")?.value == "aLL" || this.salesForm.get("mcCustomerGroup")?.value == "aLl") {
                this.mcSearchtext = 'ALL';
              } else {
                this.templateError = "No Data for" + "   " + "[" + this.salesForm.get("mcCustomerGroup")?.value + "]" + "   " + "this Cust Group";
              }
            } else {
              this.salesForm.patchValue({
                mcCustomerGroup: res.result.custGroupList[0].CCOMPGRP,
                mcSearchtext: res.result.custGroupList[0].CCOMPNAME
              });
            }
            if (this.salesForm.get("mcCustomerGroup")?.value == "ALL" || this.salesForm.get("mcCustomerGroup")?.value == "All" || this.salesForm.get("mcCustomerGroup")?.value == "all" || this.salesForm.get("mcCustomerGroup")?.value == "All" || this.salesForm.get("mcCustomerGroup")?.value == "all" || this.salesForm.get("mcCustomerGroup")?.value == "aLL" || this.salesForm.get("mcCustomerGroup")?.value == "aLl") {
              this.salesForm.patchValue({
                mcCustomerGroup: "ALL",
                mcSearchtext: "ALL"
              });
            }
          }
        });
      }
    }
  }
  getProdDetails() {
    {
      let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
      queryParams = queryParams.append('pprodvar', '');
      this.salesService.getAllProductDetails(queryParams).subscribe(res => {
        if (res.result) {
          this.productList = res.result.list;
        }
      });
    }
  }
}
SalesComponent.ɵfac = function SalesComponent_Factory(t) {
  return new (t || SalesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_Sales_Sales_service__WEBPACK_IMPORTED_MODULE_1__.SalesService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](bd_common_lib__WEBPACK_IMPORTED_MODULE_5__.AESEncryptDecryptService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](bd_common_lib__WEBPACK_IMPORTED_MODULE_5__.NotificationAlertService));
};
SalesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: SalesComponent,
  selectors: [["app-sales"]],
  viewQuery: function SalesComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.alertDiv = _t.first);
    }
  },
  decls: 45,
  vars: 7,
  consts: [[1, "content-tophead", "align-items-baseline"], [1, "pagetitle"], [1, "section", "dashboard"], [1, "row"], [1, "col-lg-12"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "alert"], ["alertDiv", ""], [1, "data-head", "text-danger"], ["onclick", "closeAlert();", 1, "btn", "btn-sm", "btn-secondary", "close-btn", "mb-0"], ["method", "post", 1, "row", "bd-form", 3, "formGroup"], [1, "col-md-6"], ["for", "", 1, "col-sm-2", "col-form-label"], [1, "col-sm-6", "bd-inputfield"], ["name", "mcProduct", "formControlName", "mcProduct", 1, "form-select"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "", 1, "col-sm-4", "col-form-label"], [1, "col-sm-8", "bd-inputfield"], ["name", "mcReportType", "formControlName", "mcReportType", 1, "form-select", 3, "change"], ["value", "G"], ["value", "A"], ["class", "col-md-6", 4, "ngIf"], [1, "col-md-12"], [1, "btn-groups", "mt-3", "ms-0"], [1, "btn", "btn-sm", "btn-primary", 3, "click"], ["class", "col-md-12", 4, "ngIf"], [3, "value"], [1, "col-sm-2", "bd-inputfield"], ["type", "text", "onKeyPress", "if(this.value.length==6) return false;", "name", "mcCustomerGroup", "formControlName", "mcCustomerGroup", "value", "", 1, "form-control", 3, "keypress", "keydown"], [1, "col-sm-4", "bd-inputfield"], ["type", "text", "readonly", "", "name", "mcSearchtext", "formControlName", "mcSearchtext", 1, "form-control"], ["href", "javascript:void(0)", 1, "btn", "btn-sm", "btn-primary", "btn-input", 3, "click"], ["type", "text", "name", "mcarea", "formControlName", "mcarea", "value", "", 1, "form-control", 3, "keydown"], ["type", "text", "name", "mccustcode", "formControlName", "mccustcode", 1, "form-control"], ["type", "text", "name", "mcCGEOTYPE", "formControlName", "mcCGEOTYPE", 1, "form-control"], ["type", "text", "name", "mcCGEOACCESS", "formControlName", "mcCGEOACCESS", 1, "form-control"], ["for", ""], ["formControlName", "mcURL", "id", "cmultiple", "rows", "4", "cols", "100", 1, "form-select"]],
  template: function SalesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Customer Centric");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "section", 2)(5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "h5", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Sales");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 8, 9)(13, "p", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "ok");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "form", 12)(18, "div", 13)(19, "div", 3)(20, "label", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Product");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 15)(23, "select", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, SalesComponent_option_24_Template, 2, 2, "option", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 13)(26, "div", 3)(27, "label", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Select Group / Area");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 19)(30, "select", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function SalesComponent_Template_select_change_30_listener($event) {
        return ctx.toggleSetGrouporArea($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "option", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Group");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "option", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Area");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, SalesComponent_div_35_Template, 11, 0, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](36, SalesComponent_div_36_Template, 8, 0, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, SalesComponent_div_37_Template, 6, 0, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 24)(39, "div", 25)(40, "button", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SalesComponent_Template_button_click_40_listener() {
        return ctx.myReportsFun();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Continue");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "pre")(43, "pre");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](44, SalesComponent_div_44_Template, 6, 0, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.templateError);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.salesForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.productList);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.ShowGroup);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.ShowArea);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.HideDt);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.hideURL);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName],
  styles: [".alert[_ngcontent-%COMP%]  {\r\n    position: fixed;\r\n    top: 50%;\r\n    transform: translate(-50%, -50%);\r\n    left: 50%;\r\n    padding-bottom: 30px;\r\n    min-width: 500px;\r\n    border:1px solid rgba(0, 0, 0, 0.2);\r\n    border-radius: 0.25rem;\r\n    background: #fff;\r\n    color: #f65656;\r\n    box-shadow: 0 5px 10px -5px rgba(0, 0, 0, 0.5);\r\n    transition:  all 0.2s ease-in-out;\r\n    z-index: 9999;\r\n  }\r\n  .close-btn[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    bottom: 15px;\r\n    right: 15px;\r\n    margin-bottom: 0;\r\n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9zYWxlcy9zYWxlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLFFBQVE7SUFDUixnQ0FBZ0M7SUFDaEMsU0FBUztJQUNULG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsbUNBQW1DO0lBQ25DLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLDhDQUE4QztJQUM5QyxpQ0FBaUM7SUFDakMsYUFBYTtFQUNmO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxnQkFBZ0I7RUFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxlcnQgIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxuICAgIG1pbi13aWR0aDogNTAwcHg7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgY29sb3I6ICNmNjU2NTY7XHJcbiAgICBib3gtc2hhZG93OiAwIDVweCAxMHB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgdHJhbnNpdGlvbjogIGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgei1pbmRleDogOTk5OTtcclxuICB9XHJcbiAgLmNsb3NlLWJ0bntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMTVweDtcclxuICAgIHJpZ2h0OiAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 9642:
/*!*************************************************************************!*\
  !*** ./src/app/components/service-quality/service-quality.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiceQualityComponent": () => (/* binding */ ServiceQualityComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var src_app_shared_services_global_var__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/global-var */ 2480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_ServiceQuality_ServiceQuality_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/ServiceQuality/ServiceQuality.service */ 3848);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var bd_common_lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bd-common-lib */ 8919);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);







function ServiceQualityComponent_option_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const prod_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", prod_r2.CVALUE);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", prod_r2.CNAME, " ");
  }
}
function ServiceQualityComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16)(1, "div", 3)(2, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "User Submitted Data URL");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "textarea", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
}
class ServiceQualityComponent {
  constructor(serviceQualityService, fb, encrypt, alert) {
    this.serviceQualityService = serviceQualityService;
    this.fb = fb;
    this.encrypt = encrypt;
    this.alert = alert;
    this.productList = [];
    this.geoList = [];
    this.templateError = '';
    this.hideURL = false;
  }
  ngOnInit() {
    this.getProdDetails();
    this.createForm();
  }
  createForm() {
    this.serviceQualityForm = this.fb.group({
      mcURL: [],
      mcProduct: []
    });
  }
  myReportsFun() {
    this.templateError = '';
    var tcprodcode = this.serviceQualityForm.get('mcProduct')?.value;
    var vcprodcode = this.serviceQualityForm.get('mcProduct')?.value;
    var vcprodcode1 = this.serviceQualityForm.get('mcProduct')?.value;
    var mcsubprdcd = '';
    var mcpacktype = '';
    var rtypevar = null;
    var rvaluevar = null;
    var rprodvar = null;
    var rapplid = '0002';
    var rtype = null;
    var rvalue = null;
    var rcchannel = null;
    var rcbranch = null;
    var rcregion = null;
    var mcarea = null;
    var mccustcode = null;
    if (vcprodcode != null && (vcprodcode == "T" || vcprodcode == "A" || vcprodcode == "C" || vcprodcode == "D" || vcprodcode == "E" || vcprodcode == "G" || vcprodcode == "I" || vcprodcode == "K" || vcprodcode == "L" || vcprodcode == "P" || vcprodcode == "V")) {
      var var1 = vcprodcode;
      var var2 = "T";
      var var3 = "T";
      tcprodcode = var1;
      mcsubprdcd = var2;
      mcpacktype = var3;
    }
    if (vcprodcode != null && (vcprodcode == "APC" || vcprodcode == "EPC")) {
      var var1 = vcprodcode;
      var var2 = "PC";
      var var3 = "T";
      tcprodcode = var1;
      mcsubprdcd = var2;
      mcpacktype = var3;
    }
    if (vcprodcode != null && vcprodcode == "APCL") {
      var var1 = vcprodcode;
      var var2 = "PC";
      var var3 = "L";
      tcprodcode = var1;
      mcsubprdcd = var2;
      mcpacktype = var3;
    }
    if (vcprodcode != null && vcprodcode == "D") {
      vcprodcode1 = "DP";
    }
    if (vcprodcode != null && vcprodcode == "A") {
      vcprodcode1 = "APXB2B";
    }
    if (vcprodcode != null && vcprodcode == "APC") {
      vcprodcode1 = "APXB2C";
    }
    if (vcprodcode != null && vcprodcode == "APCL") {
      vcprodcode1 = "DRTPLS";
    }
    if (vcprodcode != null && vcprodcode == "E") {
      vcprodcode1 = "SFCB2B";
    }
    if (vcprodcode != null && vcprodcode == "EPC") {
      vcprodcode1 = "SFCB2C";
    }
    if (vcprodcode != null && vcprodcode == "I") {
      vcprodcode1 = "INTL";
    }
    if (vcprodcode != null && vcprodcode == "V") {
      vcprodcode1 = "IMPEXP";
    }
    if (vcprodcode != null && vcprodcode == "PLCY") {
      vcprodcode1 = "ATA";
    }
    if (vcprodcode != null && vcprodcode == "T") {
      vcprodcode1 = "ALL";
    }
    let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
    queryParams = queryParams.append('puid', this.encrypt.decryptionAES(src_app_shared_services_global_var__WEBPACK_IMPORTED_MODULE_0__.GlobalVar.EmpCode));
    queryParams = queryParams.append('papplid', rapplid);
    this.serviceQualityService.getAllGeoDetails(queryParams).subscribe(res => {
      if (res.result) {
        this.geoList = res.result.geoAccessList;
      }
    });
    rtypevar = this.geoList[0];
    rvaluevar = this.geoList[1];
    rprodvar = this.geoList[2];
    if (rtypevar != null && (rtypevar == "R" || rtypevar == "B" || rtypevar == "A" || rtypevar == "S")) {
      rtype = rtypevar;
      rvalue = rvaluevar;
    }
    if (this.serviceQualityForm.get('mcProduct')?.value != null) {
      var ALLSTR = "&rType=" + rtype + "&rValue=" + rvalue + "&tsupergrcd=" + '' + "&tgrpcd=" + '' + "&tProdcode=" + vcprodcode1 + "&tArea=" + mcarea;
      //Need to put correct URL
      var baseUrl = this.encrypt.decryptionAES(sessionStorage.getItem('reporturl')) + '/Resources/UserData/reportuser/salesumt.rptdesign' + ALLSTR;
      this.serviceQualityForm.patchValue({
        mcURL: baseUrl
      });
      window.open(baseUrl, '_blank');
    } else {
      this.templateError = "Please Enter/Select All required fileds";
    }
  }
  getProdDetails() {
    {
      let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
      queryParams = queryParams.append('pprodvar', '');
      this.serviceQualityService.getAllProductDetails(queryParams).subscribe(res => {
        if (res.result) {
          this.productList = res.result.list;
        }
      });
    }
  }
}
ServiceQualityComponent.ɵfac = function ServiceQualityComponent_Factory(t) {
  return new (t || ServiceQualityComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_ServiceQuality_ServiceQuality_service__WEBPACK_IMPORTED_MODULE_1__.ServiceQualityService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](bd_common_lib__WEBPACK_IMPORTED_MODULE_5__.AESEncryptDecryptService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](bd_common_lib__WEBPACK_IMPORTED_MODULE_5__.NotificationAlertService));
};
ServiceQualityComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ServiceQualityComponent,
  selectors: [["app-service-quality"]],
  decls: 32,
  vars: 5,
  consts: [[1, "content-tophead", "align-items-baseline"], [1, "pagetitle"], [1, "section", "dashboard"], [1, "row"], [1, "col-lg-12"], [1, "card"], [1, "card-body"], [1, "card-title"], [2, "color", "red"], ["method", "post", 1, "row", "bd-form", 3, "formGroup"], [1, "col-md-6"], ["for", "", 1, "col-sm-2", "col-form-label"], [1, "col-sm-6", "bd-inputfield"], ["name", "mcProduct", "formControlName", "mcProduct", 1, "form-select"], ["selected", "", "disabled", "", 3, "ngValue"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-md-12"], [1, "btn-groups", "mt-3", "ms-0"], [1, "btn", "btn-sm", "btn-primary", 3, "click"], ["class", "col-md-12", 4, "ngIf"], [3, "value"], ["for", ""], ["formControlName", "mcURL", "id", "cmultiple", "rows", "4", "cols", "100", 1, "form-select"]],
  template: function ServiceQualityComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Customer Centric");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "section", 2)(5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "h5", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Service Quality");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 8)(12, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "form", 9)(15, "div", 10)(16, "div", 3)(17, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Product");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 12)(20, "select", 13)(21, "option", 14)(22, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Select Product");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, ServiceQualityComponent_option_24_Template, 2, 2, "option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 16)(26, "div", 17)(27, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ServiceQualityComponent_Template_button_click_27_listener() {
        return ctx.myReportsFun();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Continue");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "pre")(30, "pre");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, ServiceQualityComponent_div_31_Template, 6, 0, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.templateError);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.serviceQualityForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", null);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.productList);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.hideURL);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5441:
/*!***************************************************************************!*\
  !*** ./src/app/components/shipping-pattern/shipping-pattern.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShippingPatternComponent": () => (/* binding */ ShippingPatternComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var src_app_shared_services_global_var__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/global-var */ 2480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_ShippingPattern_ShippingPattern_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/ShippingPattern/ShippingPattern.service */ 6422);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var bd_common_lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bd-common-lib */ 8919);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);








function ShippingPatternComponent_option_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const prod_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", prod_r3.CVALUE);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", prod_r3.CNAME, " ");
  }
}
function ShippingPatternComponent_option_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const cal_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", cal_r4.CVALUE);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", cal_r4.CNAME, " ");
  }
}
function ShippingPatternComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17)(1, "div", 3)(2, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "User Submitted Data URL");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "textarea", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
}
class ShippingPatternComponent {
  constructor(shippingPatternService, fb, encrypt, alert, route) {
    this.shippingPatternService = shippingPatternService;
    this.fb = fb;
    this.encrypt = encrypt;
    this.alert = alert;
    this.route = route;
    this.productList = [];
    this.calanderList = [];
    this.geoList = [];
    this.templateError = '';
    this.hideURL = false;
  }
  ngOnInit() {
    this.createForm();
    this.getProdDetails();
    this.getCalanderDetails();
  }
  createForm() {
    this.shippingPatternForm = this.fb.group({
      mcURL: [],
      mcProduct: [],
      mcFromMonth: []
    });
  }
  myReportsFun() {
    this.templateError = '';
    var tcprodcode = this.shippingPatternForm.get('mcProduct')?.value;
    var vcprodcode = this.shippingPatternForm.get('mcProduct')?.value;
    var mcsubprdcd = this.shippingPatternForm.get('mcEvaluateU')?.value;
    var mcpacktype = '';
    var rtypevar = null;
    var rvaluevar = null;
    var rprodvar = null;
    var rapplid = '0002';
    var rtype = null;
    var rvalue = null;
    if (vcprodcode != null && (vcprodcode == "T" || vcprodcode == "A" || vcprodcode == "C" || vcprodcode == "D" || vcprodcode == "E" || vcprodcode == "G" || vcprodcode == "I" || vcprodcode == "K" || vcprodcode == "L" || vcprodcode == "P" || vcprodcode == "V")) {
      var var1 = vcprodcode;
      var var2 = "T";
      var var3 = "T";
      tcprodcode = var1;
      mcsubprdcd = var2;
      mcpacktype = var3;
    }
    if (vcprodcode != null && (vcprodcode == "APC" || vcprodcode == "EPC")) {
      var var1 = vcprodcode;
      var var2 = "PC";
      var var3 = "T";
      tcprodcode = var1;
      mcsubprdcd = var2;
      mcpacktype = var3;
    }
    if (vcprodcode != null && vcprodcode == "APCL") {
      var var1 = vcprodcode;
      var var2 = "PC";
      var var3 = "L";
      tcprodcode = var1;
      mcsubprdcd = var2;
      mcpacktype = var3;
    }
    let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
    queryParams = queryParams.append('puid', this.encrypt.decryptionAES(src_app_shared_services_global_var__WEBPACK_IMPORTED_MODULE_0__.GlobalVar.EmpCode));
    queryParams = queryParams.append('papplid', rapplid);
    this.shippingPatternService.getAllGeoDetails(queryParams).subscribe(res => {
      if (res.result) {
        this.geoList = res.result.geoAccessList;
      }
    });
    rtypevar = this.geoList[0];
    rvaluevar = this.geoList[1];
    rprodvar = this.geoList[2];
    if (rtypevar != null && (rtypevar == "R" || rtypevar == "B" || rtypevar == "A" || rtypevar == "S")) {
      rtype = rtypevar;
      rvalue = rvaluevar;
    }
    if (this.shippingPatternForm.get('mcProduct')?.value != null) {
      var ALLSTR = "&tPprod=" + rtype + "&tMont=" + rvalue;
      ///Put correct URL after Client provide
      var baseUrl = this.encrypt.decryptionAES(sessionStorage.getItem('reporturl')) + '/Resources/UserData/reportuser/Negvar_sum.rptdesign' + ALLSTR;
      this.shippingPatternForm.patchValue({
        mcURL: baseUrl
      });
      window.open(baseUrl, '_blank');
    } else {
      this.templateError = "Please Enter/Select All required fileds";
    }
  }
  getCalanderDetails() {
    {
      let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
      queryParams = queryParams.append('puid', '');
      this.shippingPatternService.getAllCalanderDetails(queryParams).subscribe(res => {
        if (res.result) {
          this.calanderList = res.result.list;
        }
      });
    }
  }
  getProdDetails() {
    {
      let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
      queryParams = queryParams.append('pprodvar', '');
      this.shippingPatternService.getAllProductDetails(queryParams).subscribe(res => {
        if (res.result) {
          this.productList = res.result.list;
        }
      });
    }
  }
}
ShippingPatternComponent.ɵfac = function ShippingPatternComponent_Factory(t) {
  return new (t || ShippingPatternComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_ShippingPattern_ShippingPattern_service__WEBPACK_IMPORTED_MODULE_1__.ShippingPatternService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](bd_common_lib__WEBPACK_IMPORTED_MODULE_5__.AESEncryptDecryptService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](bd_common_lib__WEBPACK_IMPORTED_MODULE_5__.NotificationAlertService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
};
ShippingPatternComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ShippingPatternComponent,
  selectors: [["app-shipping-pattern"]],
  decls: 42,
  vars: 7,
  consts: [[1, "content-tophead", "align-items-baseline"], [1, "pagetitle"], [1, "section", "dashboard"], [1, "row"], [1, "col-lg-12"], [1, "card"], [1, "card-body"], [1, "card-title"], [2, "color", "red"], ["method", "post", 1, "row", "bd-form", 3, "formGroup"], [1, "col-md-6"], ["for", "", 1, "col-sm-2", "col-form-label"], [1, "col-sm-6", "bd-inputfield"], ["name", "mcProduct", "formControlName", "mcProduct", 1, "form-select"], ["selected", "", "disabled", "", 3, "ngValue"], [3, "value", 4, "ngFor", "ngForOf"], ["name", "mcFromMonth", "formControlName", "mcFromMonth", 1, "form-select"], [1, "col-md-12"], [1, "btn-groups", "mt-3", "ms-0"], [1, "btn", "btn-sm", "btn-primary", 3, "click"], ["class", "col-md-12", 4, "ngIf"], [3, "value"], ["for", ""], ["formControlName", "mcURL", "id", "cmultiple", "rows", "4", "cols", "100", 1, "form-select"]],
  template: function ShippingPatternComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Customer Centric");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "section", 2)(5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "h5", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Shipping Pattern");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 8)(12, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "form", 9)(15, "div", 10)(16, "div", 3)(17, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Product");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 12)(20, "select", 13)(21, "option", 14)(22, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Select Product");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, ShippingPatternComponent_option_24_Template, 2, 2, "option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 10)(26, "div", 3)(27, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Month");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 12)(30, "select", 16)(31, "option", 14)(32, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Select Month");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, ShippingPatternComponent_option_34_Template, 2, 2, "option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 17)(36, "div", 18)(37, "button", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ShippingPatternComponent_Template_button_click_37_listener() {
        return ctx.myReportsFun();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Continue");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "pre")(40, "pre");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](41, ShippingPatternComponent_div_41_Template, 6, 0, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.templateError);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.shippingPatternForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", null);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.productList);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", null);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.calanderList);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.hideURL);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 729:
/*!***********************************************************!*\
  !*** ./src/app/services/CallBridge/CallBridge.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CallBridgeService": () => (/* binding */ CallBridgeService)
/* harmony export */ });
/* harmony import */ var src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/app.constants */ 4292);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class CallBridgeService {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  getAllProductDetails(body) {
    return this.httpClient.get(src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.PRODUCT_DATA, {
      params: body
    });
  }
  getAllRegionDetails(body) {
    return this.httpClient.get(src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.REGION_DATA, {
      params: body
    });
  }
  getAllCalanderDetails(body) {
    return this.httpClient.get(src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.CALANDER_DATA, {
      params: body
    });
  }
  getAllGeoDetails(body) {
    return this.httpClient.get(src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.GETGEO_DATA, {
      params: body
    });
  }
  getCustGroupDetails(body) {
    return this.httpClient.get(src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.CUSTGROUP_DATA, {
      params: body
    });
  }
  getAllLocationDetails(body) {
    return this.httpClient.get(src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.GETLocation_DATA, {
      params: body
    });
  }
}
CallBridgeService.ɵfac = function CallBridgeService_Factory(t) {
  return new (t || CallBridgeService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
CallBridgeService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: CallBridgeService,
  factory: CallBridgeService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 8138:
/*!***************************************************************************!*\
  !*** ./src/app/services/ChannelSalesReport/ChannelSalesReport.service.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChannelSalesReportService": () => (/* binding */ ChannelSalesReportService)
/* harmony export */ });
/* harmony import */ var src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/app.constants */ 4292);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class ChannelSalesReportService {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  getAllCalanderDetails(body) {
    return this.httpClient.get(src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.GETCHANNEL_DATA, {
      params: body
    });
  }
  getAllChannelDetails(body) {
    return this.httpClient.get(src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.GETCHANNEL_DATA, {
      params: body
    });
  }
  getAllRegionDetails(body) {
    return this.httpClient.get(src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.REGION_DATA, {
      params: body
    });
  }
  getAllGeoDetails(body) {
    return this.httpClient.get(src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.GETGEO_DATA, {
      params: body
    });
  }
}
ChannelSalesReportService.ɵfac = function ChannelSalesReportService_Factory(t) {
  return new (t || ChannelSalesReportService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
ChannelSalesReportService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: ChannelSalesReportService,
  factory: ChannelSalesReportService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 231:
/*!*******************************************************************!*\
  !*** ./src/app/services/CockpitSummary/CockpitSummary.service.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CockpitSummaryService": () => (/* binding */ CockpitSummaryService)
/* harmony export */ });
/* harmony import */ var src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/app.constants */ 4292);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class CockpitSummaryService {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  getAllRegionDetails(body) {
    return this.httpClient.get(src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.REGION_DATA, {
      params: body
    });
  }
  getAllGeoDetails(body) {
    return this.httpClient.get(src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.GETGEO_DATA, {
      params: body
    });
  }
  getAllCalanderDetails(body) {
    return this.httpClient.get(src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.CALANDER_DATA, {
      params: body
    });
  }
  getAllPDSTDetails(body) {
    return this.httpClient.get(src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.PCAL_DATA, {
      params: body
    });
  }
}
CockpitSummaryService.ɵfac = function CockpitSummaryService_Factory(t) {
  return new (t || CockpitSummaryService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
CockpitSummaryService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: CockpitSummaryService,
  factory: CockpitSummaryService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 5596:
/*!***************************************************************!*\
  !*** ./src/app/services/CustVariance/CustVariance.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustVarianceService": () => (/* binding */ CustVarianceService)
/* harmony export */ });
/* harmony import */ var src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/app.constants */ 4292);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class CustVarianceService {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  getAllProductDetails(body) {
    return this.httpClient.get(src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.PRODUCT_DATA, {
      params: body
    });
  }
  getAllRegionDetails(body) {
    return this.httpClient.get(src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.REGION_DATA, {
      params: body
    });
  }
  getAllCalanderDetails(body) {
    return this.httpClient.get(src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.CALANDER_DATA, {
      params: body
    });
  }
  getAllGeoDetails(body) {
    return this.httpClient.get(src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.GETGEO_DATA, {
      params: body
    });
  }
}
CustVarianceService.ɵfac = function CustVarianceService_Factory(t) {
  return new (t || CustVarianceService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
CustVarianceService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: CustVarianceService,
  factory: CustVarianceService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 3689:
/*!*********************************************************************!*\
  !*** ./src/app/services/CustomerCentric/CustomerCentric.service.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerCentricService": () => (/* binding */ CustomerCentricService)
/* harmony export */ });
/* harmony import */ var src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/app.constants */ 4292);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class CustomerCentricService {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  getAllProductDetails(body) {
    return this.httpClient.get(src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.PRODUCT_DATA, {
      params: body
    });
  }
  getAllRegionDetails(body) {
    return this.httpClient.get(src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.REGION_DATA, {
      params: body
    });
  }
  getAllGeoDetails(body) {
    return this.httpClient.get(src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.GETGEO_DATA, {
      params: body
    });
  }
  getReportURLdetails(body) {
    return this.httpClient.get(src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.REPORT_URL, {
      params: body
    });
  }
}
CustomerCentricService.ɵfac = function CustomerCentricService_Factory(t) {
  return new (t || CustomerCentricService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
CustomerCentricService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: CustomerCentricService,
  factory: CustomerCentricService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 9822:
/*!***************************************************************!*\
  !*** ./src/app/services/DHLDGFReport/DHLDGFReport.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DHLDGFReportService": () => (/* binding */ DHLDGFReportService)
/* harmony export */ });
/* harmony import */ var src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/app.constants */ 4292);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class DHLDGFReportService {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  getAllGeoDetails(body) {
    return this.httpClient.get(src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.GETGEO_DATA, {
      params: body
    });
  }
}
DHLDGFReportService.ɵfac = function DHLDGFReportService_Factory(t) {
  return new (t || DHLDGFReportService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
DHLDGFReportService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: DHLDGFReportService,
  factory: DHLDGFReportService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 6803:
/*!***********************************************************!*\
  !*** ./src/app/services/EDPReports/EDPReports.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EDPReportsService": () => (/* binding */ EDPReportsService)
/* harmony export */ });
/* harmony import */ var src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/app.constants */ 4292);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class EDPReportsService {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  getAllRegionDetails(body) {
    return this.httpClient.get(src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.REGION_DATA, {
      params: body
    });
  }
  getAllPDSTDetails(body) {
    return this.httpClient.get(src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.PCAL_DATA, {
      params: body
    });
  }
  getAllGeoDetails(body) {
    return this.httpClient.get(src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.GETGEO_DATA, {
      params: body
    });
  }
}
EDPReportsService.ɵfac = function EDPReportsService_Factory(t) {
  return new (t || EDPReportsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
EDPReportsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: EDPReportsService,
  factory: EDPReportsService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 9583:
/*!***************************************************************!*\
  !*** ./src/app/services/EtailTracker/EtailTracker.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EtailTrackerService": () => (/* binding */ EtailTrackerService)
/* harmony export */ });
/* harmony import */ var src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/app.constants */ 4292);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class EtailTrackerService {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  getAllRegionDetails(body) {
    return this.httpClient.get(src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.REGION_DATA, {
      params: body
    });
  }
  getAllGeoDetails(body) {
    return this.httpClient.get(src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.GETGEO_DATA, {
      params: body
    });
  }
  getCustGroupDetails(body) {
    return this.httpClient.get(src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.CUSTGROUP_DATA, {
      params: body
    });
  }
}
EtailTrackerService.ɵfac = function EtailTrackerService_Factory(t) {
  return new (t || EtailTrackerService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
EtailTrackerService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: EtailTrackerService,
  factory: EtailTrackerService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 9111:
/*!*************************************************************************!*\
  !*** ./src/app/services/IndustryVerticals/IndustryVerticals.service.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndustryVerticalsService": () => (/* binding */ IndustryVerticalsService)
/* harmony export */ });
/* harmony import */ var src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/app.constants */ 4292);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class IndustryVerticalsService {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  getAllProductDetails(body) {
    return this.httpClient.get(src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.PRODUCT_DATA, {
      params: body
    });
  }
  getAllRegionDetails(body) {
    return this.httpClient.get(src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.REGION_DATA, {
      params: body
    });
  }
  getAllCalanderDetails(body) {
    return this.httpClient.get(src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.CALANDER_DATA, {
      params: body
    });
  }
  getAllGeoDetails(body) {
    return this.httpClient.get(src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.GETGEO_DATA, {
      params: body
    });
  }
}
IndustryVerticalsService.ɵfac = function IndustryVerticalsService_Factory(t) {
  return new (t || IndustryVerticalsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
IndustryVerticalsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: IndustryVerticalsService,
  factory: IndustryVerticalsService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 9550:
/*!*************************************************************************!*\
  !*** ./src/app/services/KAMActualvsTarget/KAMActualvsTarget.service.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KAMActualvsTargetService": () => (/* binding */ KAMActualvsTargetService)
/* harmony export */ });
/* harmony import */ var src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/app.constants */ 4292);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class KAMActualvsTargetService {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  getAllRegionDetails(body) {
    return this.httpClient.get(src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.REGION_DATA, {
      params: body
    });
  }
  getAllGeoDetails(body) {
    return this.httpClient.get(src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.GETGEO_DATA, {
      params: body
    });
  }
}
KAMActualvsTargetService.ɵfac = function KAMActualvsTargetService_Factory(t) {
  return new (t || KAMActualvsTargetService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
KAMActualvsTargetService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: KAMActualvsTargetService,
  factory: KAMActualvsTargetService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 331:
/*!*************************************************************************!*\
  !*** ./src/app/services/KAMCustomerGrowth/KAMCustomerGrowth.service.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KAMCustomerGrowthService": () => (/* binding */ KAMCustomerGrowthService)
/* harmony export */ });
/* harmony import */ var src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/app.constants */ 4292);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class KAMCustomerGrowthService {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  getAllProductDetails(body) {
    return this.httpClient.get(src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.PRODUCT_DATA, {
      params: body
    });
  }
  getAllRegionDetails(body) {
    return this.httpClient.get(src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.REGION_DATA, {
      params: body
    });
  }
  getAllCalanderDetails(body) {
    return this.httpClient.get(src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.CALANDER_DATA, {
      params: body
    });
  }
  getAllGeoDetails(body) {
    return this.httpClient.get(src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.GETGEO_DATA, {
      params: body
    });
  }
}
KAMCustomerGrowthService.ɵfac = function KAMCustomerGrowthService_Factory(t) {
  return new (t || KAMCustomerGrowthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
KAMCustomerGrowthService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: KAMCustomerGrowthService,
  factory: KAMCustomerGrowthService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 8798:
/*!*********************************************************************!*\
  !*** ./src/app/services/KAMRegionGrowth/KAMRegionGrowth.service.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KAMRegionGrowthService": () => (/* binding */ KAMRegionGrowthService)
/* harmony export */ });
/* harmony import */ var src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/app.constants */ 4292);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class KAMRegionGrowthService {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  getAllProductDetails(body) {
    return this.httpClient.get(src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.PRODUCT_DATA, {
      params: body
    });
  }
  getAllGeoDetails(body) {
    return this.httpClient.get(src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.GETGEO_DATA, {
      params: body
    });
  }
}
KAMRegionGrowthService.ɵfac = function KAMRegionGrowthService_Factory(t) {
  return new (t || KAMRegionGrowthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
KAMRegionGrowthService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: KAMRegionGrowthService,
  factory: KAMRegionGrowthService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 4143:
/*!***********************************************************************!*\
  !*** ./src/app/services/MarketingReports/MarketingReports.service.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MarketingReportsService": () => (/* binding */ MarketingReportsService)
/* harmony export */ });
/* harmony import */ var src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/app.constants */ 4292);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class MarketingReportsService {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  getAllMarketingDetails() {
    return this.httpClient.get(src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.GETMKTMENU_DATA);
  }
  getAllGeoDetails(body) {
    return this.httpClient.get(src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.GETGEO_DATA, {
      params: body
    });
  }
}
MarketingReportsService.ɵfac = function MarketingReportsService_Factory(t) {
  return new (t || MarketingReportsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
MarketingReportsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: MarketingReportsService,
  factory: MarketingReportsService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 2266:
/*!*****************************************************!*\
  !*** ./src/app/services/Members/Members.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MembersService": () => (/* binding */ MembersService)
/* harmony export */ });
/* harmony import */ var src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/app.constants */ 4292);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class MembersService {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  getAllProductDetails(body) {
    return this.httpClient.get(src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.PRODUCT_DATA, {
      params: body
    });
  }
  getAllCalanderDetails(body) {
    return this.httpClient.get(src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.CALANDER_DATA, {
      params: body
    });
  }
  getAllGeoDetails(body) {
    return this.httpClient.get(src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.GETGEO_DATA, {
      params: body
    });
  }
}
MembersService.ɵfac = function MembersService_Factory(t) {
  return new (t || MembersService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
MembersService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: MembersService,
  factory: MembersService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 260:
/*!***************************************************!*\
  !*** ./src/app/services/OPSMBO/OPSMBO.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OPSMBOService": () => (/* binding */ OPSMBOService)
/* harmony export */ });
/* harmony import */ var src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/app.constants */ 4292);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class OPSMBOService {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  getAllRegionDetails(body) {
    return this.httpClient.get(src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.REGION_DATA, {
      params: body
    });
  }
  getAllGeoDetails(body) {
    return this.httpClient.get(src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.GETGEO_DATA, {
      params: body
    });
  }
}
OPSMBOService.ɵfac = function OPSMBOService_Factory(t) {
  return new (t || OPSMBOService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
OPSMBOService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: OPSMBOService,
  factory: OPSMBOService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 4630:
/*!***************************************************************************!*\
  !*** ./src/app/services/ProductYieldReport/ProductYieldReport.service.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductYieldReportService": () => (/* binding */ ProductYieldReportService)
/* harmony export */ });
/* harmony import */ var src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/app.constants */ 4292);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class ProductYieldReportService {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  getAllCalanderDetails(body) {
    return this.httpClient.get(src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.CALANDER_DATA, {
      params: body
    });
  }
  getAllGeoDetails(body) {
    return this.httpClient.get(src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.GETGEO_DATA, {
      params: body
    });
  }
}
ProductYieldReportService.ɵfac = function ProductYieldReportService_Factory(t) {
  return new (t || ProductYieldReportService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
ProductYieldReportService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: ProductYieldReportService,
  factory: ProductYieldReportService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 7065:
/*!*************************************************!*\
  !*** ./src/app/services/Sales/Sales.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalesService": () => (/* binding */ SalesService)
/* harmony export */ });
/* harmony import */ var src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/app.constants */ 4292);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class SalesService {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  getAllProductDetails(body) {
    return this.httpClient.get(src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.PRODUCT_DATA, {
      params: body
    });
  }
  getAllCalanderDetails(body) {
    return this.httpClient.get(src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.CALANDER_DATA, {
      params: body
    });
  }
  getAllGeoDetails(body) {
    return this.httpClient.get(src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.GETGEO_DATA, {
      params: body
    });
  }
  getAllCustGeoDetails(body) {
    return this.httpClient.get(src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.GETCUSTGEO_DATA, {
      params: body
    });
  }
  getCustGroupDetails(body) {
    return this.httpClient.get(src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.CUSTGROUP_DATA, {
      params: body
    });
  }
}
SalesService.ɵfac = function SalesService_Factory(t) {
  return new (t || SalesService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
SalesService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: SalesService,
  factory: SalesService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 3848:
/*!*******************************************************************!*\
  !*** ./src/app/services/ServiceQuality/ServiceQuality.service.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiceQualityService": () => (/* binding */ ServiceQualityService)
/* harmony export */ });
/* harmony import */ var src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/app.constants */ 4292);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class ServiceQualityService {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  getAllProductDetails(body) {
    return this.httpClient.get(src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.PRODUCT_DATA, {
      params: body
    });
  }
  getAllCalanderDetails(body) {
    return this.httpClient.get(src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.CALANDER_DATA, {
      params: body
    });
  }
  getAllGeoDetails(body) {
    return this.httpClient.get(src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.GETGEO_DATA, {
      params: body
    });
  }
}
ServiceQualityService.ɵfac = function ServiceQualityService_Factory(t) {
  return new (t || ServiceQualityService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
ServiceQualityService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: ServiceQualityService,
  factory: ServiceQualityService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 6422:
/*!*********************************************************************!*\
  !*** ./src/app/services/ShippingPattern/ShippingPattern.service.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShippingPatternService": () => (/* binding */ ShippingPatternService)
/* harmony export */ });
/* harmony import */ var src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/app.constants */ 4292);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class ShippingPatternService {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  getAllProductDetails(body) {
    return this.httpClient.get(src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.PRODUCT_DATA, {
      params: body
    });
  }
  getAllCalanderDetails(body) {
    return this.httpClient.get(src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.CALANDER_DATA, {
      params: body
    });
  }
  getAllGeoDetails(body) {
    return this.httpClient.get(src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.GETGEO_DATA, {
      params: body
    });
  }
}
ShippingPatternService.ɵfac = function ShippingPatternService_Factory(t) {
  return new (t || ShippingPatternService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
ShippingPatternService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: ShippingPatternService,
  factory: ShippingPatternService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 4292:
/*!*****************************************!*\
  !*** ./src/app/shared/app.constants.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppConstants": () => (/* binding */ AppConstants)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);

class AppConstants {}
//At the time of Local testing/build need to enable
//public static CUSTOMERCENTRIC_BASE_URL = 'http://localhost:7069';
//public static CONTROLTOWER_BASE_URL = 'http://localhost:7067';
//At the time of PROD testing/build need to enable
AppConstants.CUSTOMERCENTRIC_BASE_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BASE_API_URL;
AppConstants.CONTROLTOWER_BASE_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BASE_API_URL;
AppConstants.CUSTOMERCENTRIC_URL = `${AppConstants.CUSTOMERCENTRIC_BASE_URL}/customerCentric`;
AppConstants.PRODUCT_DATA = `${AppConstants.CUSTOMERCENTRIC_URL}/getProduct`;
AppConstants.REGION_DATA = `${AppConstants.CUSTOMERCENTRIC_URL}/getRegion`;
AppConstants.CUSTGROUP_DATA = `${AppConstants.CUSTOMERCENTRIC_URL}/getCustGroup`;
AppConstants.CALANDER_DATA = `${AppConstants.CUSTOMERCENTRIC_URL}/getCalender`;
AppConstants.GETMKTMENU_DATA = `${AppConstants.CUSTOMERCENTRIC_URL}/getMktMenu`;
AppConstants.GETCHANNEL_DATA = `${AppConstants.CUSTOMERCENTRIC_URL}/getChannelAccessM`;
AppConstants.GETCHANNEL_DATAold = `${AppConstants.CUSTOMERCENTRIC_URL}/getChannelAccess`;
AppConstants.GETGEO_DATA = `${AppConstants.CUSTOMERCENTRIC_URL}/getGeoAccess`;
AppConstants.GETCUSTGEO_DATA = `${AppConstants.CUSTOMERCENTRIC_URL}/getGeoCustaccess`;
AppConstants.GETLocation_DATA = `${AppConstants.CUSTOMERCENTRIC_URL}/getLocation`;
AppConstants.REPORT_URL = `${AppConstants.CUSTOMERCENTRIC_URL}/getReportURLDetails`;
AppConstants.CONTROLTOWER_URL = `${AppConstants.CONTROLTOWER_BASE_URL}/controlTower`;
AppConstants.PCAL_DATA = `${AppConstants.CONTROLTOWER_URL}/getGeoForDisp`;

/***/ }),

/***/ 2982:
/*!*****************************************************!*\
  !*** ./src/app/shared/components/loader.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 674:
/*!********************************************!*\
  !*** ./src/app/shared/http-interceptor.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "APIInterceptor": () => (/* binding */ APIInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 9337);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _services_global_var__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/global-var */ 2480);
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
    if (_services_global_var__WEBPACK_IMPORTED_MODULE_0__.GlobalVar.Environment.toString().trim() !== 'Localhost') {
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
        //console.log("api call success :", event);
      }
    }, error => {
      this.loaderService.hide();
      this.notify.showError(error?.error?.error, 'toast-bottom-right');
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavComponent": () => (/* binding */ NavComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var bd_common_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bd-common-lib */ 8919);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



class NavComponent {
  constructor(encrypt) {
    this.encrypt = encrypt;
    this.empCLevel = '';
    this.empCode = '';
  }
  ngOnInit() {
    this.empCode = sessionStorage.getItem('empCode') == null ? '' : this.encrypt.decryptionAES(sessionStorage.getItem('empCode').toString());
    this.empCLevel = sessionStorage.getItem('empCLevel') == null ? '' : this.encrypt.decryptionAES(sessionStorage.getItem('empCLevel').toString());
    console.log('getlevel', this.empCLevel);
  }
}
NavComponent.ɵfac = function NavComponent_Factory(t) {
  return new (t || NavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](bd_common_lib__WEBPACK_IMPORTED_MODULE_1__.AESEncryptDecryptService));
};
NavComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NavComponent,
  selectors: [["app-nav"]],
  decls: 82,
  vars: 0,
  consts: [["id", "sidebar", 1, "sidebar"], ["id", "sidebar-nav", 1, "sidebar-nav"], [1, "nav-item"], ["routerLink", "/sales", 1, "nav-link", "collapsed"], [1, "bi", "bi-caret-right"], ["routerLink", "/cust-variance", 1, "nav-link"], ["routerLink", "/industry-verticals", 1, "nav-link", "collapsed"], ["routerLink", "/ops-mbo", 1, "nav-link", "collapsed"], ["routerLink", "/call-Bridge", 1, "nav-link", "collapsed"], ["routerLink", "/dhldgf-report", 1, "nav-link", "collapsed"], ["routerLink", "/marketing-reports", 1, "nav-link", "collapsed"], ["routerLink", "/etail-tracker", 1, "nav-link", "collapsed"], ["routerLink", "/cockpit-summary", 1, "nav-link", "collapsed"], ["routerLink", "/channel-sales-report", 1, "nav-link", "collapsed"], ["routerLink", "/edp-reports", 1, "nav-link", "collapsed"], ["routerLink", "/kam-customer-growth", 1, "nav-link", "collapsed"], ["routerLink", "/kam-region-growth", 1, "nav-link", "collapsed"], ["routerLink", "/kam-actualsvstarget", 1, "nav-link", "collapsed"], ["routerLink", "/product-yield-report", 1, "nav-link", "collapsed"], ["routerLink", "/ITC_Undelivered", 1, "nav-link", "collapsed"]],
  template: function NavComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aside", 0)(1, "ul", 1)(2, "li", 2)(3, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Customer Centric-Sales");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 2)(8, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Cust Variance");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 2)(13, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Industry Verticals");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 2)(18, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "OPS MBO");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 2)(23, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "CallBridge");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 2)(28, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "DHLDGF Report");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li", 2)(33, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Marketing Reports");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li", 2)(38, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Etail Tracker");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li", 2)(43, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Cockpit Summary");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li", 2)(48, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Channel Sales Report");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li", 2)(53, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "i", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "EDP Reports");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li", 2)(58, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "i", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "KAM CustomerGrowth");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li", 2)(63, "a", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "i", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "KAM RegionGrowth");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li", 2)(68, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "i", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "KAM ActualsVsTarget");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "li", 2)(73, "a", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "i", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Product Yield Report");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "li", 2)(78, "a", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "i", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "ITC Undelivered");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 742:
/*!**************************************************************************!*\
  !*** ./src/app/shared/layout/page-not-found/page-not-found.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 2480:
/*!***********************************************!*\
  !*** ./src/app/shared/services/global-var.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalVar": () => (/* binding */ GlobalVar)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);

const GlobalVar = Object.freeze({
  //BASE_API_URL: 'http://localhost:7069',  //DEVELOPMENT
  BASE_API_URL: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BASE_API_URL,
  //BASE_API_URL: 'http://172.18.62.63:7069', //LINUX TEST
  //BASE_API_URL: 'http://172.18.62.63:8083', //LINUX TEST
  USER_UI: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.USER_UI,
  Environment: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.Environment,
  EmpCode: sessionStorage.getItem('empCode'),
  EmpRole: sessionStorage.getItem('empRole'),
  EmpName: sessionStorage.getItem('empName'),
  LocCode: sessionStorage.getItem('empLocArea'),
  EmpCRRole: sessionStorage.getItem('empCRRole'),
  CDCRRole: sessionStorage.getItem('CDCRRole'),
  EmpCLevel: sessionStorage.getItem('empCLevel'),
  ServiceCode: sessionStorage.getItem('ServiceCode'),
  AuthToken: sessionStorage.getItem('authToken')
});

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map